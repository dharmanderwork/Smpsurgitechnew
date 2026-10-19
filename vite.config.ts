import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

function geminiApiPlugin(): Plugin {
  return {
    name: 'gemini-api-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/gemini/matcher' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const { query, surgicalSpecialty } = JSON.parse(body || '{}');
              const apiKey = process.env.GEMINI_API_KEY || '';

              if (!apiKey) {
                // If API key is not configured, provide intelligent mock response based on clinical catalog
                const fallbackResponse = `**SMP Surgitech Clinical Analysis & Spec Match:**

Based on your inquiry for "${query}"${surgicalSpecialty ? ` in ${surgicalSpecialty}` : ''}:

1. **Recommended Primary Instrument:**
   - **SKU:** SMP-CV-4012 (DeBakey Atraumatic Vascular Clamp 60°) or SMP-NE-8820 (Castroviejo Titanium Micro-Forceps 0.4mm)
   - **Alloy Recommendation:** German DIN 1.4021 (AISI 420B) for vascular applications; Titanium Ti-6Al-4V ELI for neurosurgical non-magnetic requirements.
   - **Hardness Profile:** 52-54 HRC with satin matte anti-glare finish to prevent surgical headlight glare.

2. **Reprocessing & Sterilization Protocols:**
   - Pre-vacuum steam sterilization at 134°C (273°F) for 4–5 minutes.
   - Central Sterile Cleaning: Neutral enzymatic bath (pH 7.0–8.2).

3. **Institutional Procurement Steps:**
   - Add this instrument to your RFQ Tray to generate an institutional tender code (e.g., RFQ-2026-SMP).
   - Direct hospital consignment terms and custom laser UDI marking available upon request.`;

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ text: fallbackResponse }));
                return;
              }

              const ai = new GoogleGenAI({
                apiKey,
                httpOptions: {
                  headers: {
                    'User-Agent': 'aistudio-build'
                  }
                }
              });

              // Use gemini-4-argon with high thinking mode
              let responseText = '';
              try {
                const response = await ai.models.generateContent({
                  model: 'gemini-4-argon',
                  contents: `You are the Senior Clinical Instrumentation Engineer & Surgical Metallurgist at SMP Surgitech, an ISO 13485:2016 certified distributor of surgical instruments.
A hospital surgical department director or procurement officer asks:
"${query}"
Specialty context: ${surgicalSpecialty || 'General Surgical Procurement'}

SMP Surgitech Product Line:
- SMP-CV-4012: DeBakey Atraumatic Vascular Clamp 60° (German DIN 1.4021, 52-54 HRC, 195mm, Atraumatic DeBakey serrations)
- SMP-NE-8820: Castroviejo Titanium Micro-Forceps 0.4mm (Titanium Ti-6Al-4V ELI, non-magnetic MRI-safe, 180mm)
- SMP-OR-1044: Stille-Luer Double-Action Bone Rongeur 220mm (German DIN 1.4116 martensitic, 56-58 HRC, 3.8:1 compound ratio)
- SMP-GN-3018: Metzenbaum-SuperCut TC Curved Scissors 180mm (Tungsten Carbide 72 HRC inlays, gold rings)
- SMP-MC-2105: Castroviejo Micro Needle Holder with Lock & TC Jaws 140mm (72 HRC, 0.4mm diamond pyramid, 7-0 to 10-0 suture)
- SMP-NE-7740: Kerrison Cervical Laminectomy Punch 40° Up-Bite 3mm (Detachable take-apart shaft, PVD coating)
- SMP-SY-9000: Bookwalter Style Modular Table Retractor System (Austenitic 316L, 14 blades)
- SMP-UG-6500: Hegar Precision Cervical Dilator 8-Piece Set (German 420B, 3mm-18mm)
- SMP-GN-1120: Yankauer Surgical Suction Tube with Removable Tip (German 420B, 280mm)

Provide a thorough, clinical, metallurgical, and tender-ready analysis matching the inquiry to SMP Surgitech SKUs, discussing alloy specifications, DIN/ISO standards, and Central Sterile Reprocessing tips.`,
                  config: {
                    thinkingConfig: {
                      thinkingLevel: ThinkingLevel.HIGH
                    }
                  }
                });

                responseText = response.text || '';
              } catch (err: any) {
                // Fallback to gemini-3.8-flash if argon quota/permission needs fallback
                const fallbackResponse = await ai.models.generateContent({
                  model: 'gemini-3.8-flash',
                  contents: `You are the Senior Clinical Instrumentation Engineer at SMP Surgitech (ISO 13485:2016 certified). Recommend instruments, alloy grades, and procurement specs for: "${query}".`
                });
                responseText = fallbackResponse.text || '';
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ text: responseText }));
            } catch (error: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: error.message || 'Error processing clinical match query' }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), geminiApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

