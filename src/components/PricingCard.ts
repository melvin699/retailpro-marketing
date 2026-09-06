import { SITE, getWhatsappUrl } from '../config/site';
import { icon } from '../lib/icons';
import { cx, ui } from '../lib/ui';
import type { PricingPlan } from '../types';
import { Badge } from './Badge';
import { Button } from './Button';

export function PricingCard(plan: PricingPlan): string {
  const ctaHref =
    plan.name === 'Lifetime'
      ? getWhatsappUrl(`Hello, I want ${plan.name} plan details for RetailPro.`)
      : SITE.appUrl;

  return `
    <article class="${cx(
      'flex h-full flex-col rounded-xl border bg-navy-2 px-4 py-4 transition duration-200 ease-out hover:-translate-y-1.5 hover:border-brand hover:shadow-(--shadow-glow)',
      plan.tone === 'featured' ? 'border-brand shadow-(--shadow-glow)' : 'border-line',
    )}">
      <div class="mb-3 flex justify-between gap-3 font-mono text-[0.62rem] font-medium tracking-[0.08em] text-muted uppercase">
        <span>${plan.code}</span>
        <span>${plan.scope}</span>
      </div>
      <div class="mb-3.5 flex flex-col gap-3">
        <div>
          ${Badge(plan.badge, plan.tone)}
          <h3 class="${ui.cardTitle}">${plan.name}</h3>
          <p class="${ui.cardCopy}">${plan.subtitle}</p>
        </div>
        <div class="flex flex-col">
          <strong class="text-[1.45rem] leading-none tracking-[-0.04em]">${plan.price}</strong>
          <span class="mt-1 font-mono text-[0.7rem] font-medium tracking-[0.06em] text-brand uppercase">${plan.period}</span>
        </div>
      </div>
      <ul class="mb-4 grid gap-2 border-t border-dotted border-line-2 pt-3">
        ${plan.features
          .map(
            (item) =>
              `<li class="flex items-start gap-2 text-[0.85rem] text-muted"><span class="mt-0.5 shrink-0 text-ok">${icon('check')}</span><span>${item}</span></li>`,
          )
          .join('')}
      </ul>
      ${Button({ label: plan.cta, href: ctaHref, variant: plan.tone === 'featured' ? 'dark' : 'ghost' })}
    </article>
  `;
}
