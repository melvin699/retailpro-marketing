import { Button } from '../components/Button';
import { SITE, getWhatsappUrl } from '../config/site';
import { cx, ui } from '../lib/ui';

export function ContactPage(): string {
  return `
    <section class="${cx(ui.section, ui.page)}">
      <div class="${cx(ui.container, 'grid items-center gap-12 nav:grid-cols-2')}">
        <div class="${cx(ui.card, 'grid gap-4')}">
          <p class="${ui.pill}">Contact</p>
          <h2 class="${ui.h2}">WhatsApp is faster than a form.</h2>
          <p class="${ui.cardCopy}">Tell us what you sell and how many people work the counter. We will point you at the right plan.</p>
          <div class="grid gap-4 font-semibold text-muted">
            <a class="hover:text-ink" href="${getWhatsappUrl()}" target="_blank" rel="noreferrer">WhatsApp · +${SITE.whatsappNumber}</a>
            <a class="hover:text-ink" href="mailto:${SITE.email}">${SITE.email}</a>
            <span>${SITE.location}</span>
          </div>
        </div>
        <div class="${cx(ui.card, 'grid gap-4')}">
          <h3 class="${ui.cardTitle}">If you are in a hurry</h3>
          <p class="${ui.cardCopy}">Most shop owners write on WhatsApp. We answer there first.</p>
          <div class="${ui.actions}">
            ${Button({ label: 'Chat on WhatsApp', href: getWhatsappUrl(), variant: 'dark' })}
            ${Button({ label: SITE.primaryCta, href: SITE.appUrl, variant: 'ghost' })}
          </div>
        </div>
      </div>
    </section>
  `;
}
