import { icon } from '../lib/icons';
import { ui } from '../lib/ui';
import type { Feature } from '../types';

export function FeatureCard(feature: Feature): string {
  return `
    <article class="flex flex-col items-start gap-3.5 rounded-xl border border-line bg-navy-2 px-[1.2rem] py-5">
      <div class="flex w-full items-center justify-between gap-3">
        <div class="grid size-8 place-items-center rounded-md border border-brand/28 bg-brand-soft text-[1.05rem] text-brand">${icon(feature.icon)}</div>
        <span class="${ui.mono}">${feature.code}</span>
      </div>
      <h3 class="${ui.cardTitle}">${feature.title}</h3>
      <p class="${ui.cardCopy}">${feature.description}</p>
    </article>
  `;
}
