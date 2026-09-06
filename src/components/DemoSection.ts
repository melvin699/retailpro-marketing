import { SITE } from '../config/site';
import { cx, ui } from '../lib/ui';
import { SectionIntro } from './SectionIntro';
import { VideoPlaceholder } from './VideoPlaceholder';

export function DemoSection(): string {
  return `
    <section class="${ui.section} bg-navy-4" id="demo">
      <div class="${cx(ui.container, 'grid items-center gap-12 nav:grid-cols-2')}">
        <div>
          ${SectionIntro({
            eyebrow: 'Watch the till',
            title: 'See RetailPro in action',
            description: 'A short recording of the real till. Then open a sample shop and click around yourself.',
          })}
          <div class="mt-5 grid">
            ${[
              'Find an item — scan or type the name',
              'Take cash or M-Pesa on the same sale',
              'Stock drops as the receipt prints',
              'Close the till against the drawer',
            ]
              .map(
                (item) =>
                  `<span class="block border-b border-dotted border-line-2 py-3 font-mono text-[0.86rem] font-medium">${item}</span>`,
              )
              .join('')}
          </div>
          <p class="mt-5 text-muted">${SITE.demoLabel}</p>
        </div>
        <div>
          ${VideoPlaceholder()}
        </div>
      </div>
    </section>
  `;
}
