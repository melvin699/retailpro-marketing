import { SITE } from '../config/site';
import { icon } from '../lib/icons';
import { ui } from '../lib/ui';

export function VideoPlaceholder({ compact = false }: { compact?: boolean } = {}): string {
  return `
    <div class="${compact ? 'w-full' : 'w-full'} overflow-hidden rounded-2xl border border-line bg-navy-2 shadow-(--shadow-card)">
      <div class="flex items-center justify-between gap-3 bg-navy-4 px-3.5 py-1.5 font-mono text-[0.68rem] font-medium tracking-[0.08em] text-muted uppercase">
        <span>Sell</span>
        <span class="${ui.live}">Sample shop</span>
      </div>
      <div class="relative">
        <button
          class="relative block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left"
          type="button"
          data-lightbox="/app-sell.png"
          data-lightbox-alt="RetailPro sell screen"
        >
          <img
            class="block h-auto max-h-[420px] w-full object-cover object-top hover:brightness-[0.97]"
            src="/app-sell.png"
            alt="RetailPro sell screen"
            width="1280"
            height="800"
          />
          <span class="pointer-events-none absolute top-1/2 left-1/2 inline-flex size-[68px] -translate-x-1/2 -translate-y-[62%] items-center justify-center rounded-md bg-brand text-navy max-sm:size-[62px]" aria-hidden="true">
            ${icon('play')}
          </span>
        </button>
      </div>
      <p class="m-0 px-[1.1rem] pt-3.5 pb-[1.1rem] text-muted">${SITE.demoLabel}</p>
    </div>
  `;
}
