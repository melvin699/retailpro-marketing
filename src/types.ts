export type IconName =
  | 'menu'
  | 'close'
  | 'arrowRight'
  | 'play'
  | 'pos'
  | 'stock'
  | 'mpesa'
  | 'reports'
  | 'cash'
  | 'users'
  | 'offline'
  | 'shield'
  | 'store'
  | 'support'
  | 'check'
  | 'whatsapp';

export type ButtonVariant = 'dark' | 'primary' | 'ghost';

export type PlanTone = 'default' | 'featured' | 'success';

export type Feature = {
  code: string;
  icon: IconName;
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  code: string;
  scope: string;
  price: string;
  period: string;
  badge: string;
  subtitle: string;
  cta: string;
  tone: PlanTone;
  features: string[];
};

export type Screen = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

export type Shop = {
  kind: string;
  title: string;
  text: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type PageMeta = {
  title: string;
  description: string;
};
