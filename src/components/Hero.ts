import { SITE } from '../config/site';
import { cx, ui } from '../lib/ui';
import { Button } from './Button';

const trustItems = ['Works offline', 'M-Pesa on the till', 'From KSh 500 / month'];

export function Hero(): string {
  return `
    <section class="bg-[radial-gradient(ellipse_at_80%_10%,rgb(243_156_18_/_12%),transparent_42%),var(--color-page)] py-10 text-ink">
      <div class="${cx(ui.container, 'grid items-center gap-8 nav:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] nav:gap-8')}">
        <div class="flex min-w-0 flex-col items-start pt-1">
          <p class="${ui.pill}">For Kenyan shops</p>
          <h1 class="mt-3 max-w-[14ch] text-[clamp(1.7rem,3vw,2.35rem)] leading-[1.2] max-nav:max-w-none max-nav:text-[clamp(1.85rem,7vw,2.3rem)]">Run your shop. Know your numbers.</h1>
          <p class="${ui.lead}">
            Sell, track stock, and close the day on one till. Cash and M-Pesa together.
            For dukas, chemists and mini-marts.
          </p>
          <div class="${ui.actions}">
            ${Button({ label: SITE.primaryCta, href: SITE.appUrl, variant: 'dark' })}
            ${Button({ label: SITE.secondaryCta, href: '/pricing', variant: 'ghost', attrs: 'data-link' })}
          </div>
          <div class="mt-3.5 text-[0.85rem] text-muted">${SITE.trialNote}</div>
          <ul class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 max-sm:grid max-sm:w-full max-sm:grid-cols-2" aria-label="RetailPro practical notes">
            ${trustItems
              .map(
                (item) =>
                  `<li class="inline-flex items-center gap-2 text-[0.92rem] leading-none text-muted before:size-[0.45rem] before:shrink-0 before:rounded-sm before:bg-brand before:content-['']">${item}</li>`,
              )
              .join('')}
          </ul>
        </div>

        <div class="min-w-0 overflow-hidden rounded-2xl border border-line bg-navy-2 shadow-(--shadow-card)">
          <div class="flex min-h-8 items-center justify-between gap-3 bg-navy-4 px-3 py-1 font-mono text-[0.62rem] font-medium tracking-[0.08em] text-muted uppercase">
            <span>Till 01</span>
            <span class="${ui.live}">Online</span>
            <span>Cash + M-Pesa</span>
          </div>
          <figure class="relative z-1 m-0 min-w-0 overflow-hidden bg-white">
            <button
              class="block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
              type="button"
              data-lightbox="/app-dashboard.png"
              data-lightbox-alt="RetailPro home screen with sales, stock alerts and today’s till"
            >
              <img
                class="relative z-1 block h-auto max-h-[320px] w-full bg-white object-contain object-top max-nav:max-h-[200px] hover:brightness-[0.97]"
                src="/app-dashboard.png"
                alt="RetailPro home screen with sales, stock alerts and today’s till"
                width="1280"
                height="800"
              />
            </button>
          </figure>
          <div class="flex items-center justify-between gap-3 border-t border-line bg-navy-4 px-3 py-1 font-mono text-[0.62rem] font-medium tracking-[0.08em] text-muted uppercase">
            <span>app.retailpro.co.ke</span>
            <span>Click to enlarge</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
