import { cx, ui } from '../lib/ui';

export function PrivacyPage(): string {
  return `
    <section class="${cx(ui.section, ui.page)}">
      <div class="${cx(ui.container, 'max-w-[57.5rem]')}">
        <div class="mb-10 max-w-[45rem]">
          <div class="${ui.pill}">Privacy</div>
          <h2 class="${ui.h2}">Privacy Policy</h2>
          <p class="${ui.lead}">This placeholder page is ready for your final legal copy.</p>
        </div>
        <article class="${cx(ui.card, 'grid gap-4')}">
          <p class="${ui.cardCopy}">Replace this content with your production privacy policy before launch.</p>
          <p class="${ui.cardCopy}">Include details on information collected through the website, how enquiries are handled and how users can contact you.</p>
        </article>
      </div>
    </section>
  `;
}
