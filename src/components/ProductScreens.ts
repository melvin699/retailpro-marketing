import { SCREENS } from '../data/screens';
import { ui } from '../lib/ui';
import { SectionIntro } from './SectionIntro';

export function ProductScreens(): string {
  return `
    <section class="${ui.section} bg-navy-4" id="product-screens">
      <div class="${ui.container}">
        ${SectionIntro({
          eyebrow: 'The actual till',
          title: 'Home, sell, stock the screens you will use',
          description: 'Not a concept. This is RetailPro on a shop counter.',
        })}
        <div class="grid grid-cols-2 gap-5 max-nav:grid-cols-1">
          ${SCREENS.map(
            (screen) => `
              <figure class="m-0 overflow-hidden rounded-[14px] border border-line bg-navy-2 shadow-(--shadow-card)">
                <div class="flex items-center justify-between gap-3 border-b border-line bg-navy-4 px-3.5 py-1.5 font-mono text-[0.68rem] font-medium tracking-[0.08em] text-muted uppercase">
                  <span>${screen.label}</span>
                  <span>Live till</span>
                </div>
                <button
                  class="block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
                  type="button"
                  data-lightbox="${screen.src}"
                  data-lightbox-alt="${screen.alt}"
                >
                  <img class="block h-[260px] w-full border-b border-line bg-white object-cover object-top hover:brightness-[0.97]" src="${screen.src}" alt="${screen.alt}" width="1024" height="600" />
                </button>
                <figcaption class="flex items-baseline justify-between gap-3 px-4 py-3.5">
                  <strong class="font-mono text-xs font-medium tracking-[0.08em] uppercase">${screen.label}</strong>
                  <span class="text-[0.85rem] text-muted">${screen.caption}</span>
                </figcaption>
              </figure>
            `,
          ).join('')}
        </div>
      </div>
    </section>
  `;
}
