export const SITE = {
  brandName: 'RetailPro',
  siteUrl: 'https://retailpro.co.ke',
  appUrl: 'https://app.retailpro.co.ke',
  whatsappNumber: '254700000000',
  whatsappText: 'Hello, I want to learn more about RetailPro.',
  email: 'hello@retailpro.co.ke',
  location: 'Nairobi, Kenya',
  primaryCta: 'Start 14-day trial',
  headerCta: 'Start trial',
  secondaryCta: 'See a sample shop',
  trialNote: 'No card. Cancel any time.',
  demoCta: 'Open the sample shop',
  demoLabel: 'A sample duka you can click through. No sign-up.',
  lifetimeLabel: 'Pay once. Use RetailPro for life.',
  supportLinks: {
    about: '#',
    help: '#',
  },
  socialLinks: {
    facebook: '#',
    instagram: '#',
    x: '#',
  },
} as const;

export function getWhatsappUrl(message: string = SITE.whatsappText): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
