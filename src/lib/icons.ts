import type { IconName } from '../types';

const icons: Record<IconName, string> = {
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6 10 6-10 6V6Z" fill="currentColor" stroke="none"/></svg>',
  pos: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm4-4h8a2 2 0 0 1 2 2v2H6V5a2 2 0 0 1 2-2Z"/></svg>',
  stock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 7 9-4 9 4-9 4-9-4Zm0 5 9 4 9-4M3 17l9 4 9-4"/></svg>',
  mpesa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 5v8M8.5 10.5h7"/></svg>',
  reports: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16M7 15V9M12 15V5M17 15v-7"/></svg>',
  cash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18v10H3V7Zm9 2v6M8 10h.01M16 14h.01"/></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17 11a3 3 0 1 0 0-6M21 21v-2a4 4 0 0 0-3-3.87"/></svg>',
  offline: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18M10.5 5.2A12.4 12.4 0 0 1 12 5c4.1 0 7.86 1.99 10 5.33M6.67 9.35A11.88 11.88 0 0 0 2 15m7.35 2.35A4 4 0 0 1 12 16c1.1 0 2.1.44 2.82 1.18M12 20h.01"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3Zm-2 9 1.5 1.5L15 10"/></svg>',
  store: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16v10H4V10Zm1-6h14l1 4H4l1-4Zm3 9v4m4-4v4m4-4v4"/></svg>',
  support: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 10a6 6 0 1 0-12 0v4a2 2 0 0 0 2 2h2v-5H6m8 5h2a2 2 0 0 0 2-2v-4m-6 11h4"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5A8.5 8.5 0 0 1 7.42 18.9L3 20l1.15-4.27A8.5 8.5 0 1 1 20 11.5Zm-5.2 2.34c-.23-.12-1.34-.66-1.55-.74-.21-.08-.36-.12-.51.12-.15.23-.58.74-.71.9-.13.15-.27.17-.5.06-.23-.12-.98-.36-1.86-1.15-.69-.61-1.15-1.36-1.28-1.59-.13-.23-.01-.36.1-.48.1-.1.23-.27.35-.4.12-.14.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39h-.44c-.15 0-.39.06-.59.29-.2.23-.77.75-.77 1.82 0 1.08.79 2.12.9 2.26.12.15 1.56 2.39 3.77 3.35 2.22.96 2.22.64 2.62.6.4-.04 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.09-.21-.15-.44-.27Z"/></svg>',
};

export function icon(name: IconName): string {
  return icons[name];
}
