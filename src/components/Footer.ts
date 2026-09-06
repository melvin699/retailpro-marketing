import { SITE, getWhatsappUrl } from '../config/site';
import { cx, ui } from '../lib/ui';
import type { NavItem } from '../types';

const footerLinks: NavItem[] = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Demo', href: '/demo' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Open till', href: SITE.appUrl, external: true },
];

export function Footer(): string {
  return `
    <footer class="border-t border-line bg-navy-4 py-8 text-ink">
      <div class="${ui.container}">
        <div class="flex flex-wrap items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
          <a class="inline-flex h-10 items-center gap-2.5 font-sans text-[1.1rem] font-bold tracking-[-0.03em]" href="/" data-link>
            <img class="size-7 shrink-0 rounded-md shadow-[0_0_0_1px_var(--color-line)]" src="/logo-mark.svg" alt="${SITE.brandName}" width="28" height="28" />
            <span>${SITE.brandName}</span>
            <em class="ml-0.5 border-l border-line-2 pl-2.5 font-mono text-[0.68rem] font-medium not-italic tracking-[0.08em] text-muted uppercase">Counter system</em>
          </a>
          <ul class="flex flex-wrap gap-x-5 gap-y-3 font-mono text-[0.7rem] tracking-[0.06em] text-muted uppercase">
            <li>Works offline</li>
            <li>M-Pesa on the till</li>
            <li>${SITE.location}</li>
          </ul>
        </div>

        <nav class="my-5 flex flex-wrap gap-x-[1.15rem] gap-y-1.5 border-y border-line py-4 font-mono text-[0.72rem] font-medium tracking-[0.08em] uppercase" aria-label="Footer">
          ${footerLinks
            .map((item) => {
              const attrs = item.external ? ' target="_blank" rel="noreferrer"' : ' data-link';
              return `<a class="text-[#e2e8f0] hover:text-brand" href="${item.href}"${attrs}>${item.label}</a>`;
            })
            .join('')}
          <a class="text-[#e2e8f0] hover:text-brand" href="${getWhatsappUrl()}" target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>

        <div class="flex flex-wrap items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
          <p class="text-[0.88rem] leading-6 text-muted">© 2026 ${SITE.brandName}. The till, the stock, and the day’s close for shops in Kenya.</p>
          <span class="${cx(ui.live, 'rounded-full border border-brand/35 bg-brand-soft px-2.5 py-1 font-mono text-[0.68rem] font-semibold tracking-[0.08em] uppercase')}">Counters online</span>
        </div>
      </div>
    </footer>
  `;
}
