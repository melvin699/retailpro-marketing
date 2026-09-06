import { Button } from '../components/Button';
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
          title: 'Click through a duka, not a slide deck',
          description: 'This is a safe public walkthrough. A live sample shop can sit here later.',
        })}
        ${VideoPlaceholder({ compact: true })}
        <div class="${cx(ui.card, 'mt-6 grid gap-4')}">
          <p class="${ui.pill}">What you will see</p>
          <h3 class="${ui.cardTitle}">One sale, then the close</h3>
          <p class="${ui.cardCopy}">The useful demo is short: find an item, take money, watch stock move, lock the day.</p>
          <ul class="grid list-disc gap-4 pl-5 text-muted">
            <li>Find a product by scan or name</li>
            <li>Take cash or M-Pesa on one receipt</li>
            <li>Watch the shelf count drop</li>
            <li>Match the till to the drawer</li>
            <li>See what to buy in the morning</li>
          </ul>
          <div class="${ui.actions}">
            ${Button({ label: SITE.primaryCta, href: SITE.appUrl, variant: 'dark' })}
            ${Button({ label: 'Chat on WhatsApp', href: `https://wa.me/${SITE.whatsappNumber}`, variant: 'ghost' })}
          </div>
        </div>
      </div>
    </section>
    ${ProductScreens()}
  `;
}
