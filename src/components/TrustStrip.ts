import { cx, ui } from '../lib/ui';

const items = ['Dukas', 'Chemists', 'Hardware', 'Mini-marts', 'Boutiques', 'Wholesalers'];

export function TrustStrip(): string {
  return `
    <section class="bg-page pb-9" aria-label="Shops RetailPro is built for">
      <div class="${cx(ui.container, 'flex flex-wrap items-baseline gap-x-5 gap-y-2.5 border-t border-line pt-4')}">
        <p class="${ui.mono}">Used on counters in</p>
        <ul class="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[1.02rem] font-semibold">
          ${items.map((item) => `<li>${item}</li>`).join('<li aria-hidden="true" class="text-line-2">·</li>')}
        </ul>
      </div>
    </section>
  `;
}
