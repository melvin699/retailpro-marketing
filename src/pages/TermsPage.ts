import { cx, ui } from '../lib/ui';

export function TermsPage(): string {
  return `
    <section class="${cx(ui.section, ui.page)}">
      <div class="${cx(ui.container, 'max-w-[57.5rem]')}">
        <div class="mb-10 max-w-[45rem]">
          <div class="${ui.pill}">Terms</div>
          <h2 class="${ui.h2}">Terms of Service</h2>
          <p class="${ui.lead}">This placeholder page is ready for your final legal terms.</p>
        </div>
        <article class="${cx(ui.card, 'grid gap-4')}">
          <p class="${ui.cardCopy}">Replace this content with your production terms of service before launch.</p>
          <p class="${ui.cardCopy}">Cover trial use, billing, lifetime plan scope, acceptable use and support expectations.</p>
        </article>
      </div>
    </section>
  `;
}
