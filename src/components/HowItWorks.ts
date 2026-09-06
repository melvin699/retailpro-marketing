import { ui } from '../lib/ui';
import { SectionIntro } from './SectionIntro';

const steps = [
  {
    number: '01',
    title: 'Put the shop on the system',
    text: 'Products, prices, opening stock. An afternoon not a three-week project.',
  },
  {
    number: '02',
    title: 'Sell the way you already sell',
    text: 'Barcode or search. Cash or M-Pesa. A receipt if they want one.',
  },
  {
    number: '03',
    title: 'Close with a number you trust',
    text: 'Till versus drawer. What sold. What is low. Tomorrow’s order list writes itself.',
  },
];

export function HowItWorks(): string {
  return `
    <section class="${ui.section} bg-navy-4" id="how-it-works">
      <div class="${ui.container}">
        ${SectionIntro({
          eyebrow: 'From open to close',
          title: 'Short enough to learn on a Saturday',
          description: 'Built for the person at the counter, not a back-office team.',
        })}
        <div class="grid grid-cols-3 gap-6 max-nav:grid-cols-1">
          ${steps
            .map(
              (step) => `
                <article class="${ui.card}">
                  <div class="mb-4 font-mono text-[0.72rem] font-medium tracking-[0.1em] text-brand uppercase">Step ${step.number}</div>
                  <h3 class="${ui.cardTitle}">${step.title}</h3>
                  <p class="${ui.cardCopy}">${step.text}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
