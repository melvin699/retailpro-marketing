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
      'flex h-full flex-col rounded-xl border p-[1.65rem_1.5rem]',
      plan.tone === 'featured' ? 'border-brand bg-navy-2 shadow-(--shadow-glow)' : 'border-line bg-navy-2',
    )}">
      <div class="mb-[1.1rem] flex justify-between gap-3 font-mono text-[0.68rem] font-medium tracking-[0.08em] text-muted uppercase">
        <span>${plan.code}</span>
        <span>${plan.scope}</span>
      </div>
      <div class="mb-5 flex flex-col gap-5">
        <div>
          ${Badge(plan.badge, plan.tone)}
          <h3 class="${ui.cardTitle}">${plan.name}</h3>
          <p class="${ui.cardCopy}">${plan.subtitle}</p>
        </div>
        <div class="flex flex-col">
          <strong class="text-[2rem] leading-none tracking-[-0.05em]">${plan.price}</strong>
          <span class="mt-1.5 font-mono text-[0.78rem] font-medium tracking-[0.06em] text-brand uppercase">${plan.period}</span>
        </div>
      </div>
      <ul class="mb-6 grid gap-3.5 border-t border-dotted border-line-2 pt-[1.15rem]">
        ${plan.features
          .map(
            (item) =>
              `<li class="flex items-start gap-2.5 text-muted"><span class="mt-0.5 shrink-0 text-ok">${icon('check')}</span><span>${item}</span></li>`,
          )
          .join('')}
      </ul>
      ${Button({ label: plan.cta, href: ctaHref, variant: plan.tone === 'featured' ? 'dark' : 'ghost' })}
    </article>
  `;
}
