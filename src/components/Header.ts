import { SITE, getWhatsappUrl } from '../config/site';
import { icon } from '../lib/icons';
import { cx, ui } from '../lib/ui';
import type { NavItem } from '../types';
import { Button } from './Button';

const navItems: NavItem[] = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

const statusItems = [
  { label: 'Till ready', live: true },
  { label: 'Works offline', live: false },
  { label: 'M-Pesa', live: false },
  { label: 'Nairobi', live: false },
];

export function Header(navOpen = false): string {
  return `
    <header class="sticky top-0 z-50 border-b border-line bg-white">
      <div class="border-b border-line bg-page">
        <div class="${cx(ui.container, 'flex min-h-7 items-center gap-4 overflow-x-auto font-mono text-[0.62rem] font-medium tracking-[0.08em] text-muted uppercase whitespace-nowrap')}">
          ${statusItems
            .map((item) => `<span class="${item.live ? ui.live : ''}">${item.label}</span>`)
            .join('')}
        </div>
      </div>
      <div class="${cx(
        ui.container,
        'flex min-h-14 flex-wrap items-center gap-x-4 nav:grid nav:grid-cols-[1fr_auto_1fr]',
        navOpen ? 'pb-4 nav:pb-0' : '',
      )}">
        <a class="inline-flex h-9 items-center gap-2 font-sans text-[1rem] font-bold tracking-[-0.03em]" href="/" data-link>
          <img class="size-7 shrink-0 rounded-md shadow-[0_0_0_1px_var(--color-line)]" src="/logo-mark.svg" alt="${SITE.brandName}" width="28" height="28" />
          <span>${SITE.brandName}</span>
          <em class="ml-0.5 hidden border-l border-line-2 pl-2.5 font-mono text-[0.68rem] font-medium not-italic tracking-[0.08em] text-muted uppercase nav:inline">Counter</em>
        </a>

        <button
          class="ml-auto grid size-9 place-items-center rounded-md border border-line bg-white text-ink nav:hidden"
          type="button"
          aria-expanded="${navOpen ? 'true' : 'false'}"
          aria-controls="site-nav"
          data-nav-toggle
        >
          ${icon(navOpen ? 'close' : 'menu')}
        </button>

        <nav id="site-nav" class="${cx(
          'basis-full flex-col items-stretch gap-1 border-t border-line pt-3 whitespace-nowrap nav:flex nav:w-auto nav:basis-auto nav:flex-row nav:items-center nav:gap-1 nav:border-0 nav:pt-0',
          navOpen ? 'flex' : 'hidden',
        )}">
          ${navItems
            .map((item) => {
              const attrs = item.external ? ' target="_blank" rel="noreferrer"' : ' data-link';
              return `<a class="inline-flex min-h-10 items-center px-1 text-sm font-medium text-muted hover:text-ink nav:h-9 nav:px-2" href="${item.href}"${attrs}>${item.label}</a>`;
            })
            .join('')}
        </nav>

        <div class="${cx(
          'basis-full flex-col items-stretch gap-3 pt-3 nav:flex nav:w-auto nav:basis-auto nav:flex-row nav:items-center nav:justify-self-end nav:pt-0',
          navOpen ? 'flex' : 'hidden',
        )}">
          <a class="inline-flex min-h-10 items-center gap-1.5 px-1 text-sm font-medium text-muted hover:text-ink nav:h-9 nav:px-0.5" href="${getWhatsappUrl()}" target="_blank" rel="noreferrer">${icon('whatsapp')}<span>WhatsApp</span></a>
          ${Button({ label: SITE.headerCta, href: SITE.appUrl, variant: 'dark' })}
        </div>
      </div>
    </header>
  `;
}
