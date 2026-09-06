import { PRICING_FAQ } from '../data/pricing-faq';
import { cx, ui } from '../lib/ui';
import type { FaqItem } from '../types';

const extraFaqs: FaqItem[] = [
  {
    q: 'Does it take M-Pesa?',
    a: 'Yes. Cash and M-Pesa sit on the same sale, and they close together at the end of the day.',
  },
  {
    q: 'Monthly or lifetime?',
    a: 'Monthly if you want to start small. Lifetime is one payment if you already know you will keep it.',
  },
];

const faqs: FaqItem[] = [
  extraFaqs[0],
  ...PRICING_FAQ.filter((item) => item.q !== 'Does M-Pesa close with cash?'),
  extraFaqs[1],
];

export function FaqPage(): string {
  return `
    <section class="${cx(ui.section, ui.page)}">
      <div class="${cx(ui.container, 'max-w-[57.5rem]')}">
        <div class="mb-10 max-w-[45rem]">
          <p class="${ui.pill}">Questions</p>
          <h2 class="${ui.h2}">Things shop owners ask</h2>
          <p class="${ui.lead}">Short answers. If yours is not here, WhatsApp us.</p>
        </div>
        <div class="grid gap-3">
          ${faqs
            .map(
              (item) => `
                <details class="faq-card rounded-xl border border-line bg-navy-2">
                  <summary class="flex cursor-pointer list-none items-center justify-between gap-4 px-[1.15rem] py-[1.05rem] font-semibold">${item.q}</summary>
                  <p class="m-0 px-[1.15rem] pb-[1.15rem] leading-7 text-muted">${item.a}</p>
                </details>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
