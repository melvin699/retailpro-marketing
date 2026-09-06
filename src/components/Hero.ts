import { SITE } from '../config/site';
import { cx, ui } from '../lib/ui';
import { Button } from './Button';

const trustItems = ['Works offline', 'M-Pesa on the till', 'From KSh 500 / month'];

export function Hero(): string {
  return `
    <section class="bg-[radial-gradient(ellipse_at_80%_10%,rgb(243_156_18_/_12%),transparent_42%),var(--color-page)] py-16 text-ink">
      <div class="${cx(ui.container, 'grid items-center gap-10 nav:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] nav:gap-10')}">
        <div class="flex min-w-0 flex-col items-start pt-1">
          <p class="${ui.pill}">For Kenyan shops</p>
          <h1 class="mt-4 max-w-[14ch] text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.12] max-nav:max-w-none max-nav:text-[clamp(2.4rem,9vw,3.4rem)]">Run your shop. Know your numbers.</h1>
          <p class="${ui.lead}">
            Sell, track stock, and close the day on one till. Cash and M-Pesa together.
            For dukas, chemists and mini-marts.
          </p>
          <div class="${ui.actions}">
            ${Button({ label: SITE.primaryCta, href: SITE.appUrl, variant: 'dark' })}
            ${Button({ label: SITE.secondaryCta, href: '/pricing', variant: 'ghost', attrs: 'data-link' })}
          </div>
          <div class="mt-5 text-[0.92rem] text-muted">${SITE.trialNote}</div>
          <ul class="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 max-sm:grid max-sm:w-full max-sm:grid-cols-2" aria-label="RetailPro practical notes">
            ${trustItems
              .map(
                (item) =>
                  `<li class="inline-flex items-center gap-2 text-[0.92rem] leading-none text-muted before:size-[0.45rem] before:shrink-0 before:rounded-sm before:bg-brand before:content-['']">${item}</li>`,
              )
              .join('')}
          </ul>
        </div>

        <div class="min-w-0 overflow-hidden rounded-2xl border border-line bg-navy-2 shadow-(--shadow-card)">
          <div class="flex min-h-[38px] items-center justify-between gap-3 bg-navy-4 px-3.5 py-1.5 font-mono text-[0.68rem] font-medium tracking-[0.08em] text-muted uppercase">
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
                class="relative z-1 block h-auto max-h-[540px] w-full object-cover object-top max-nav:max-h-[280px] hover:brightness-[0.97]"
                src="/app-dashboard.png"
                alt="RetailPro home screen with sales, stock alerts and today’s till"
                width="1280"
                height="800"
              />
            </button>
          </figure>
          <div class="flex items-center justify-between gap-3 border-t border-line bg-navy-4 px-3.5 py-1.5 font-mono text-[0.68rem] font-medium tracking-[0.08em] text-muted uppercase">
            <span>app.retailpro.co.ke</span>
            <span>Click to enlarge</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
