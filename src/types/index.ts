export interface CreativeVideo {
  id: string;
  slotKey: string;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  image: string;
  aspectRatio: string;
  description?: string;
  script?: {
    hook: string;
    body: string;
    cta: string;
  };
  promptUsed?: string;
  estimatedCost?: string;
  language?: string;
}

export interface ImageSlot {
  key: string;
  label: string;
  category: 'hero' | 'formatos' | 'carrossel' | 'estudo' | 'plataforma';
  url: string;
  defaultUrl: string;
  description: string;
}

export interface StrategistPreset {
  id: string;
  productName: string;
  targetMarket: string;
  category: string;
  latentPain: string;
  objection: string;
  coreDesire: string;
  angles: {
    title: string;
    description: string;
    isSelected?: boolean;
  }[];
  script: {
    hook: string;
    problem: string;
    cta: string;
  };
}

export interface PricingPlan {
  id: 'bundle' | 'ugc' | 'animated';
  name: string;
  badge?: string;
  subtitle: string;
  priceBRL: number;
  priceUSD: number;
  installmentsBRL: string;
  description: string;
  features: string[];
}
