import { SHOPS } from '../data/shops';
import { ui } from '../lib/ui';
import { SectionIntro } from './SectionIntro';

export function Testimonials(): string {
  return `
    <section class="${ui.section}" id="testimonials">
      <div class="${ui.container}">
        ${SectionIntro({
          eyebrow: 'Who it is for',
          title: 'Different shops. Same problem.',
          description:
            'You already know what sold. The work is keeping the shelf, the till, and the close in agreement.',
        })}
        <div class="grid grid-cols-3 gap-6 max-nav:grid-cols-1">
          ${SHOPS.map(
            (shop) => `
              <article class="${ui.card}">
                <p class="mb-2.5 font-mono text-[0.7rem] font-medium tracking-[0.1em] text-brand uppercase">${shop.kind}</p>
                <h3 class="${ui.cardTitle}">${shop.title}</h3>
                <p class="${ui.cardCopy}">${shop.text}</p>
              </article>
            `,
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
