import { cx, ui } from '../lib/ui';
import { SectionIntro } from './SectionIntro';
import { VideoPlaceholder } from './VideoPlaceholder';

export function DemoSection(): string {
  return `
    <section class="${ui.section} bg-navy-4" id="demo">
      <div class="${cx(ui.container, 'grid items-center gap-12 nav:grid-cols-2')}">
        <div>
          ${SectionIntro({
            eyebrow: 'Watch the counter',
            title: 'A Saturday close, not a product tour',
            description: 'See a sale, an M-Pesa ping, a stock drop, and the number you lock at 9pm.',
          })}
          <div class="mt-5 grid">
            ${[
              'Find the product scan or type',
              'Take cash or M-Pesa on the same sale',
              'Stock falls as the receipt prints',
              'Close the till against the drawer',
              'See what to restock in the morning',
            ]
              .map(
                (item) =>
                  `<span class="block border-b border-dotted border-line-2 py-3 font-mono text-[0.86rem] font-medium">${item}</span>`,
              )
              .join('')}
          </div>
        </div>
        <div>
          ${VideoPlaceholder()}
        </div>
      </div>
    </section>
  `;
}
