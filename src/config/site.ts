export const SITE = {
  brandName: 'RetailPro',
  siteUrl: 'https://retailpro.co.ke',
  appUrl: 'https://app.retailpro.co.ke',
  whatsappNumber: '254725874844',
  whatsappText: 'Hello, I want to try RetailPro for my shop.',
  email: 'hello@retailpro.co.ke',
  location: 'Nairobi, Kenya',
  primaryCta: 'Try a Sample Shop',
  headerCta: 'Try sample shop',
  secondaryCta: 'See prices',
  trialNote: 'A sample duka you can click through. No sign-up.',
  demoCta: 'Try a Sample Shop',
  demoLabel: 'A sample duka you can click through. No sign-up.',
  demoVideo: '/demo.mp4',
  demoPoster: '/app-sell.png',
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

export function getWhatsappDisplay(number = SITE.whatsappNumber): string {
  const digits = number.replace(/\D/g, '');
  if (digits.startsWith('254') && digits.length === 12) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }
  return `+${digits}`;
}
