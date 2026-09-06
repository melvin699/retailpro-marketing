import { ProductScreens } from '../components/ProductScreens';
import { SectionIntro } from '../components/SectionIntro';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { SITE } from '../config/site';
import { cx, ui } from '../lib/ui';

export function DemoPage(): string {
  return `
    <section class="${cx(ui.section, ui.page)}">
      <div class="${cx(ui.container, 'max-w-[57.5rem]')}">
        ${SectionIntro({
          eyebrow: 'Sample shop',
          title: 'Try RetailPro on a real till',
          description: SITE.demoLabel,
        })}
        ${VideoPlaceholder({ compact: true })}
      </div>
    </section>
    ${ProductScreens()}
  `;
}
