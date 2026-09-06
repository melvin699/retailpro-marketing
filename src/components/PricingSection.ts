import { PRICING } from '../data/pricing';
import { PRICING_FAQ } from '../data/pricing-faq';
import { ui } from '../lib/ui';
import { PricingCard } from './PricingCard';
import { SectionIntro } from './SectionIntro';

export function PricingSection(): string {
  return `
    <section class="${ui.section} scroll-mt-24" id="pricing">
      <div class="${ui.container}">
        ${SectionIntro({
          eyebrow: 'Pricing',
          title: 'What you pay',
          description: 'KSh 500 a month to start. Or pay KSh 30,000 once and keep it.',
        })}
        <div class="mx-auto grid max-w-4xl grid-cols-3 items-stretch gap-4 max-nav:grid-cols-1">
          ${PRICING.map(PricingCard).join('')}
        </div>
        <div class="mt-11 border-t border-line pt-8">
          <p class="${ui.pill} mb-[1.15rem]">Common questions</p>
          <div class="grid gap-3">
            ${PRICING_FAQ.map(
              (item) => `
                <details class="faq-card rounded-xl border border-line bg-navy-2">
                  <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-[1.15rem] py-[1.05rem] font-semibold">${item.q}</summary>
                  <p class="m-0 px-[1.15rem] pb-[1.15rem] leading-7 text-muted">${item.a}</p>
                </details>
              `,
            ).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
