import { ui } from '../lib/ui';
import { SectionIntro } from './SectionIntro';

const steps = [
  {
    number: '01',
    title: 'Add your products',
    text: 'Names, prices, opening stock. An afternoon, not a three-week project.',
  },
  {
    number: '02',
    title: 'Sell the way you already sell',
    text: 'Barcode or search. Cash or M-Pesa. A receipt if they want one.',
  },
  {
    number: '03',
    title: 'Close the till at night',
    text: 'Match the drawer. See what sold. Know what to buy in the morning.',
  },
];

export function HowItWorks(): string {
  return `
    <section class="${ui.section} bg-navy-4" id="how-it-works">
      <div class="${ui.container}">
        ${SectionIntro({
          eyebrow: 'Getting started',
          title: 'Set up in a day',
          description: 'You do not need a back-office team. One person at the counter is enough.',
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
