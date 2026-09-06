import type { Feature } from '../types';

export const FEATURES: Feature[] = [
  {
    code: 'Till',
    icon: 'pos',
    title: 'Sell without holding the queue',
    description: 'Scan or search, take cash or M-Pesa, print a receipt. Next customer.',
  },
  {
    code: 'Stock',
    icon: 'stock',
    title: 'See what is left on the shelf',
    description: 'Unga, milk, paint — know before the evening rush, not after you run out.',
  },
  {
    code: 'M-Pesa',
    icon: 'mpesa',
    title: 'Cash and M-Pesa on one sale',
    description: 'Both land in the same day. Close the drawer once.',
  },
  {
    code: 'Close',
    icon: 'reports',
    title: 'Know what the day made',
    description: 'Sales, profit, what moved. Enough to decide what to buy tomorrow.',
  },
  {
    code: 'Offline',
    icon: 'offline',
    title: 'Keep selling when the line drops',
    description: 'The till stores the day. It sends it up when Safaricom comes back.',
  },
  {
    code: 'Users',
    icon: 'users',
    title: 'More than one person on the till',
    description: 'Cashiers sell. You still see the cash, the stock, and the close.',
  },
];
