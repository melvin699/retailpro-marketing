import { SITE, getWhatsappUrl } from '../config/site';
import { icon } from '../lib/icons';
import { cx, ui } from '../lib/ui';
import type { NavItem } from '../types';
import { Button } from './Button';

const navItems: NavItem[] = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Sample shop', href: SITE.appUrl, external: true },
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
        <div class="${cx(ui.container, 'flex min-h-8 items-center gap-5 overflow-x-auto font-mono text-[0.68rem] font-medium tracking-[0.08em] text-muted uppercase whitespace-nowrap')}">
          ${statusItems
            .map((item) => `<span class="${item.live ? ui.live : ''}">${item.label}</span>`)
            .join('')}
        </div>
      </div>
      <div class="${cx(ui.container, 'flex min-h-[72px] items-center gap-5 nav:grid nav:grid-cols-[1fr_auto_1fr]')}">
        <a class="inline-flex h-10 items-center gap-2.5 font-sans text-[1.1rem] font-bold tracking-[-0.03em]" href="/" data-link>
          <img class="size-8 shrink-0 rounded-md shadow-[0_0_0_1px_var(--color-line)]" src="/logo-mark.svg" alt="${SITE.brandName}" width="32" height="32" />
          <span>${SITE.brandName}</span>
          <em class="ml-0.5 hidden border-l border-line-2 pl-2.5 font-mono text-[0.68rem] font-medium not-italic tracking-[0.08em] text-muted uppercase nav:inline">Counter</em>
        </a>

        <button
          class="ml-auto grid size-10 place-items-center rounded-md border border-line bg-navy-2 text-ink nav:hidden"
          type="button"
          aria-expanded="${navOpen ? 'true' : 'false'}"
          aria-controls="site-nav"
          data-nav-toggle
        >
          ${icon(navOpen ? 'close' : 'menu')}
        </button>

        <nav id="site-nav" class="${cx(
          'w-full flex-col items-start gap-4 border-t border-line pt-4 whitespace-nowrap nav:flex nav:w-auto nav:flex-row nav:items-center nav:gap-1 nav:border-0 nav:pt-0',
          navOpen ? 'flex' : 'hidden',
        )}">
          ${navItems
            .map((item) => {
              const attrs = item.external ? ' target="_blank" rel="noreferrer"' : ' data-link';
              return `<a class="inline-flex h-10 items-center px-2.5 font-medium text-muted hover:text-ink" href="${item.href}"${attrs}>${item.label}</a>`;
            })
            .join('')}
        </nav>

        <div class="${cx(
          'w-full items-center gap-3.5 pb-4 nav:flex nav:w-auto nav:justify-self-end nav:pb-0',
          navOpen ? 'flex' : 'hidden',
        )}">
          <a class="inline-flex h-10 items-center gap-1.5 px-0.5 font-medium text-muted hover:text-ink" href="${getWhatsappUrl()}" target="_blank" rel="noreferrer">${icon('whatsapp')}<span>WhatsApp</span></a>
          ${Button({ label: SITE.headerCta, href: SITE.appUrl, variant: 'dark' })}
        </div>
      </div>
    </header>
  `;
}
