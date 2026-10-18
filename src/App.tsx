/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Product, RfqItem } from './types/instruments';
import { SURGICAL_PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PdfSpecViewerModal } from './components/PdfSpecViewerModal';
import { RfqDrawer } from './components/RfqDrawer';
import { GeminiSpecAssistant } from './components/GeminiSpecAssistant';

import { HomeView } from './views/HomeView';
import { CatalogView } from './views/CatalogView';
import { SpecSheetsView } from './views/SpecSheetsView';
import { ServicesView } from './views/ServicesView';
import { AboutView } from './views/AboutView';
import { RfqPortalView } from './views/RfqPortalView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedSpecialtyFilter, setSelectedSpecialtyFilter] = useState<string | undefined>(undefined);

  // RFQ Basket state with local storage persistence
  const [rfqItems, setRfqItems] = useState<RfqItem[]>(() => {
    try {
      const saved = localStorage.getItem('smp_rfq_items');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    // Seed with 1 sample item so user can immediately see RFQ tray capability
    return [
      {
        product: SURGICAL_PRODUCTS[0],
        quantity: 2,
        customLaserMarking: 'OR-CV-TRAY-A'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('smp_rfq_items', JSON.stringify(rfqItems));
    } catch (e) {
      // ignore
    }
  }, [rfqItems]);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailModalTab, setDetailModalTab] = useState<'overview' | 'specs' | 'reprocessing' | 'inquiry'>('overview');

  const [pdfProduct, setPdfProduct] = useState<Product | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const [isRfqDrawerOpen, setIsRfqDrawerOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  // Navigation handler
  const handleNavigate = (view: string, specialtyFilter?: string) => {
    setCurrentView(view);
    if (specialtyFilter) {
      setSelectedSpecialtyFilter(specialtyFilter);
    } else {
      setSelectedSpecialtyFilter(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // RFQ item management
  const handleAddToRfq = (product: Product) => {
    setRfqItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setRfqItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveFromRfq = (productId: string) => {
    setRfqItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearRfq = () => {
    setRfqItems([]);
  };

  const isItemInRfq = (productId: string) => {
    return rfqItems.some((item) => item.product.id === productId);
  };

  // Open modals handlers
  const handleOpenProductDetail = (product: Product, defaultTab: 'overview' | 'inquiry' = 'overview') => {
    setSelectedProduct(product);
    setDetailModalTab(defaultTab);
    setIsDetailModalOpen(true);
  };

  const handleOpenPdf = (product: Product) => {
    setPdfProduct(product);
    setIsPdfModalOpen(true);
  };

  const handleOpenEnquiryFromPdf = (product: Product) => {
    setSelectedProduct(product);
    setDetailModalTab('inquiry');
    setIsDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-body">
      {/* Top Navigation Bar with strict 3-zone contract */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        rfqItemCount={rfqItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenRfqDrawer={() => setIsRfqDrawerOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            products={SURGICAL_PRODUCTS}
            onNavigate={handleNavigate}
            onOpenProductDetail={handleOpenProductDetail}
            onOpenPdf={handleOpenPdf}
            onAddToRfq={handleAddToRfq}
            isItemInRfq={isItemInRfq}
            onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
          />
        )}

        {currentView === 'catalog' && (
          <CatalogView
            products={SURGICAL_PRODUCTS}
            selectedSpecialtyFilter={selectedSpecialtyFilter}
            onOpenProductDetail={handleOpenProductDetail}
            onOpenPdf={handleOpenPdf}
            onAddToRfq={handleAddToRfq}
            isItemInRfq={isItemInRfq}
            onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
          />
        )}

        {currentView === 'spec-sheets' && (
          <SpecSheetsView
            products={SURGICAL_PRODUCTS}
            onOpenPdf={handleOpenPdf}
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentView === 'services' && (
          <ServicesView
            products={SURGICAL_PRODUCTS}
            onNavigate={handleNavigate}
            onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
          />
        )}

        {currentView === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentView === 'rfq' && (
          <RfqPortalView
            products={SURGICAL_PRODUCTS}
            rfqItems={rfqItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromRfq}
            onClearAll={handleClearRfq}
            onAddProduct={handleAddToRfq}
            onNavigate={handleNavigate}
            onOpenPdf={handleOpenPdf}
          />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Detail & Direct Quote Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onOpenPdf={handleOpenPdf}
        onAddToRfq={handleAddToRfq}
        isItemInRfq={selectedProduct ? isItemInRfq(selectedProduct.id) : false}
        initialTab={detailModalTab}
      />

      {/* Technical PDF Spec Browser Modal */}
      <PdfSpecViewerModal
        product={pdfProduct}
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        onOpenEnquiry={handleOpenEnquiryFromPdf}
      />

      {/* Multi-Item Consolidated RFQ Drawer */}
      <RfqDrawer
        isOpen={isRfqDrawerOpen}
        onClose={() => setIsRfqDrawerOpen(false)}
        items={rfqItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromRfq}
        onClearAll={handleClearRfq}
        onOpenPdf={handleOpenPdf}
        onProceedToFullRfqPortal={() => {
          setIsRfqDrawerOpen(false);
          handleNavigate('rfq');
        }}
      />

      {/* Gemini AI Clinical Spec & Tray Matcher */}
      <GeminiSpecAssistant
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        products={SURGICAL_PRODUCTS}
        onAddToRfq={handleAddToRfq}
        onOpenProductDetail={handleOpenProductDetail}
        onOpenPdf={handleOpenPdf}
      />
    </div>
  );
}
