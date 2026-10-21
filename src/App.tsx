import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { TopNotificationBanner } from './components/TopNotificationBanner';
import { MainHeader } from './components/MainHeader';
import { HeroSection } from './components/HeroSection';
import { TrustStatsBanner } from './components/TrustStatsBanner';
import { DarkSectionFormats } from './components/DarkSectionFormats';
import { BrandCarousel } from './components/BrandCarousel';
import { ThreeStepMethod } from './components/ThreeStepMethod';
import { IntermediateProof } from './components/IntermediateProof';
import { CaseStudy } from './components/CaseStudy';
import { StrategistDemo } from './components/StrategistDemo';
import { PostStrategistProof } from './components/PostStrategistProof';
import { MembersAreaSection } from './components/MembersAreaSection';
import { InventoryStats } from './components/InventoryStats';
import { CostSection } from './components/CostSection';
import { PricingAndOffers } from './components/PricingAndOffers';
import { PostOfferProof } from './components/PostOfferProof';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { MainFooter } from './components/MainFooter';
import { VideoModal } from './components/VideoModal';
import { ImageLinkManagerModal } from './components/ImageLinkManagerModal';
import { CheckoutModal } from './components/CheckoutModal';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Check } from 'lucide-react';

const ToastNotification: React.FC = () => {
  const { toastMessage } = useApp();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#16150F] text-[#F4F1E8] border-2 border-[#CDF13B] px-4 py-3 rounded-xl shadow-[4px_4px_0px_#16150F] flex items-center gap-2.5 font-mono text-xs font-bold animate-bounce">
      <span className="w-5 h-5 rounded-full bg-[#CDF13B] text-[#16150F] flex items-center justify-center font-extrabold text-xs">
        <Check size={12} strokeWidth={3} />
      </span>
      <span>{toastMessage}</span>
    </div>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="bg-[#F4F1E8] text-[#16150F] font-hanken antialiased selection:bg-[#CDF13B] selection:text-[#16150F] relative overflow-x-hidden min-h-screen">
      {/* Decorative Notebook Spiral on Desktop */}
      <div
        aria-hidden="true"
        className="hidden md:block fixed left-0 top-0 bottom-0 w-[54px] spiral-track z-30 pointer-events-none opacity-85"
      ></div>

      {/* Decorative Red Margin Line on Desktop */}
      <div
        aria-hidden="true"
        className="hidden md:block fixed left-[66px] top-0 bottom-0 w-[1px] bg-red-600/30 z-30 pointer-events-none"
      ></div>

      {/* Main Content Container with left offset on desktop */}
      <div className="relative md:pl-[66px] flex flex-col min-h-screen bg-grid-papel">
        {/* Bloco 01 */}
        <TopNotificationBanner />

        {/* Bloco 02 */}
        <MainHeader />

        <main>
          {/* Bloco 03 */}
          <HeroSection />

          {/* Bloco 04 */}
          <TrustStatsBanner />

          {/* Bloco 05 */}
          <DarkSectionFormats />

          {/* Bloco 06 */}
          <BrandCarousel />

          {/* Bloco 07 */}
          <ThreeStepMethod />

          {/* Bloco 08 */}
          <IntermediateProof />

          {/* Bloco 09 */}
          <CaseStudy />

          {/* Bloco 10 */}
          <StrategistDemo />

          {/* Bloco 11 */}
          <PostStrategistProof />

          {/* Bloco 12 */}
          <MembersAreaSection />

          {/* Bloco 13 */}
          <InventoryStats />

          {/* Bloco 14 & 15 */}
          <CostSection />

          {/* Bloco 16 */}
          <PricingAndOffers />

          {/* Bloco 17 */}
          <PostOfferProof />

          {/* Bloco 18 */}
          <ReviewsSection />

          {/* Bloco 19 */}
          <FAQSection />

          {/* Bloco 20 */}
          <FinalCTASection />
        </main>

        {/* Bloco 20 Footer */}
        <MainFooter />
      </div>

      {/* Interactive Modals */}
      <VideoModal />
      <ImageLinkManagerModal />
      <CheckoutModal />
      <StickyBottomBar />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
