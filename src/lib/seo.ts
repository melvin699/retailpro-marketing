import { SITE } from '../config/site';
import type { PageMeta } from '../types';

const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'RetailPro - POS & Stock Management for Kenyan Retail Shops',
    description:
      'RetailPro is the till, stock and end-of-day system for Kenyan dukas, chemists and mini-marts. Cash and M-Pesa on one counter.',
  },
  '/features': {
    title: 'RetailPro Features - Till, Stock and M-Pesa',
    description:
      'See how RetailPro handles the till, stock, M-Pesa and the end-of-day close for Kenyan shops.',
  },
  '/pricing': {
    title: 'RetailPro Pricing - Plans for Kenyan Shops',
    description: 'Starter, Business and Lifetime plans for RetailPro. Fourteen-day trial, no card.',
  },
  '/demo': {
    title: 'RetailPro Demo - Explore the Product',
    description: 'Try the RetailPro demo and see how checkout, stock tracking and reports work for Kenyan shops.',
  },
  '/faqs': {
    title: 'RetailPro FAQs',
    description: 'Answers to common questions about RetailPro pricing, demo access, setup and support.',
  },
  '/privacy': {
    title: 'RetailPro Privacy Policy',
    description: 'RetailPro privacy policy for the public marketing website.',
  },
  '/terms': {
    title: 'RetailPro Terms of Service',
    description: 'RetailPro terms of service for the public marketing website.',
  },
  '/contact': {
    title: 'Contact RetailPro',
    description: 'Talk to RetailPro on WhatsApp or email and find the right plan for your shop.',
  },
};

function ensureMeta(name: string, attr = 'name'): HTMLMetaElement {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  return el as HTMLMetaElement;
}

export function applySeo(pathname: string): void {
  const meta = PAGE_META[pathname] ?? PAGE_META['/'];
  document.title = meta.title;
  ensureMeta('description').setAttribute('content', meta.description);
  ensureMeta('og:title', 'property').setAttribute('content', meta.title);
  ensureMeta('og:description', 'property').setAttribute('content', meta.description);
  ensureMeta('og:url', 'property').setAttribute('content', new URL(pathname, SITE.siteUrl).toString());

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', new URL(pathname, SITE.siteUrl).toString());
}
