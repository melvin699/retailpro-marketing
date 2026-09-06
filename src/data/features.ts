import type { Feature } from '../types';

export const FEATURES: Feature[] = [
  {
    code: 'Till',
    icon: 'pos',
    title: 'A till that keeps up',
    description: 'Scan or search, take cash or M-Pesa, and print a receipt without making the queue wait.',
  },
  {
    code: 'Stock',
    icon: 'stock',
    title: 'Stock you can trust',
    description: 'See what is left before the evening rush — unga, milk, paint, whatever you actually sell.',
  },
  {
    code: 'Tender',
    icon: 'mpesa',
    title: 'M-Pesa next to cash',
    description: 'Both tenders land in the same day. Close the drawer once, not in two notebooks.',
  },
  {
    code: 'Close',
    icon: 'reports',
    title: 'A number you can close on',
    description: 'Sales, profit, and what moved today. Enough to decide what to restock tomorrow.',
  },
  {
    code: 'Offline',
    icon: 'offline',
    title: 'Still sells when the line drops',
    description: 'Keep the counter moving offline. Sales sync when the connection comes back.',
  },
  {
    code: 'Users',
    icon: 'users',
    title: 'More than one pair of hands',
    description: 'Give cashiers their own till. You keep the view of cash, stock, and the close.',
  },
];
