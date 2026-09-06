import { FEATURES } from '../data/features';
import { ui } from '../lib/ui';
import { FeatureCard } from './FeatureCard';
import { SectionIntro } from './SectionIntro';

export function FeaturesGrid(): string {
  return `
    <section class="${ui.section} scroll-mt-[116px]" id="features">
      <div class="${ui.container}">
        ${SectionIntro({
          eyebrow: 'On the counter',
          title: 'Everything your shop needs at the counter.',
          description: 'Till, stock, M-Pesa, and the day’s close. Nothing extra to learn.',
        })}
        <div class="grid grid-cols-3 gap-4 max-[1180px]:grid-cols-2 max-sm:grid-cols-1">
          ${FEATURES.map(FeatureCard).join('')}
        </div>
      </div>
    </section>
  `;
}
