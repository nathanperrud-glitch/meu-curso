import React, { createContext, useContext, useState, useEffect } from 'react';
import { CreativeVideo, ImageSlot, PricingPlan } from '../types';
import { INITIAL_IMAGE_SLOTS, PRICING_PLANS } from '../data/initialData';

interface AppContextType {
  imageSlots: ImageSlot[];
  getImage: (key: string) => string;
  updateImage: (key: string, newUrl: string) => void;
  resetImages: () => void;
  isImageManagerOpen: boolean;
  setIsImageManagerOpen: (open: boolean) => void;
  activeVideo: CreativeVideo | null;
  setActiveVideo: (video: CreativeVideo | null) => void;
  currency: 'BRL' | 'USD';
  setCurrency: (c: 'BRL' | 'USD') => void;
  isCheckoutOpen: boolean;
  selectedPlan: PricingPlan;
  openCheckout: (planId?: 'bundle' | 'ugc' | 'animated') => void;
  closeCheckout: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [imageSlots, setImageSlots] = useState<ImageSlot[]>(() => {
    try {
      const saved = localStorage.getItem('avatarhype_custom_images');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_IMAGE_SLOTS;
  });

  const [isImageManagerOpen, setIsImageManagerOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<CreativeVideo | null>(null);
  const [currency, setCurrency] = useState<'BRL' | 'USD'>('BRL');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<'bundle' | 'ugc' | 'animated'>('bundle');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('avatarhype_custom_images', JSON.stringify(imageSlots));
    } catch {
      // ignore
    }
  }, [imageSlots]);

  const getImage = (key: string): string => {
    const slot = imageSlots.find((s) => s.key === key);
    return slot ? slot.url : '';
  };

  const updateImage = (key: string, newUrl: string) => {
    setImageSlots((prev) =>
      prev.map((slot) => (slot.key === key ? { ...slot, url: newUrl } : slot))
    );
    showToast('Link da imagem atualizado com sucesso!');
  };

  const resetImages = () => {
    setImageSlots(INITIAL_IMAGE_SLOTS);
    try {
      localStorage.removeItem('avatarhype_custom_images');
    } catch {
      // ignore
    }
    showToast('Todas as imagens foram restauradas para o padrão do HTML.');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3200);
  };

  const openCheckout = (planId: 'bundle' | 'ugc' | 'animated' = 'bundle') => {
    setSelectedPlanId(planId);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const selectedPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[0];

  return (
    <AppContext.Provider
      value={{
        imageSlots,
        getImage,
        updateImage,
        resetImages,
        isImageManagerOpen,
        setIsImageManagerOpen,
        activeVideo,
        setActiveVideo,
        currency,
        setCurrency,
        isCheckoutOpen,
        selectedPlan,
        openCheckout,
        closeCheckout,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
