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
          title: 'What the day actually needs',
          description:
            'Not a pile of modules. The few things a busy shop cannot afford to get wrong: the till, the shelf, and the close.',
        })}
        <div class="grid grid-cols-3 gap-4 max-[1180px]:grid-cols-2 max-sm:grid-cols-1">
          ${FEATURES.map(FeatureCard).join('')}
        </div>
      </div>
    </section>
  `;
}
