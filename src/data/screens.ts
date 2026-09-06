import type { Screen } from '../types';

export const SCREENS: Screen[] = [
  {
    src: '/app-home.png',
    alt: 'RetailPro home with low-stock alerts and day’s totals',
    label: 'Home',
    caption: 'Low stock and the day’s numbers',
  },
  {
    src: '/app-sell.png',
    alt: 'RetailPro sell screen with cart and checkout',
    label: 'Sell',
    caption: 'Scan, add, cash or credit',
  },
  {
    src: '/app-stock.png',
    alt: 'RetailPro inventory list with buy, sell and stock',
    label: 'Stock',
    caption: 'What you have, what it costs',
  },
  {
    src: '/app-product.png',
    alt: 'RetailPro product editor with stock and prices',
    label: 'Product',
    caption: 'Fix a price or a limit',
  },
];
