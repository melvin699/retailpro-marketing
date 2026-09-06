import { SITE } from '../config/site';
import { ui } from '../lib/ui';
import { Button } from './Button';

export function VideoPlaceholder({ compact = false }: { compact?: boolean } = {}): string {
  return `
    <div class="${compact ? 'w-full' : 'w-full'} overflow-hidden rounded-2xl border border-line bg-navy-2 shadow-(--shadow-card)">
      <div class="flex items-center justify-between gap-3 bg-navy-4 px-3.5 py-1.5 font-mono text-[0.68rem] font-medium tracking-[0.08em] text-muted uppercase">
        <span>RetailPro till</span>
        <span class="${ui.live}">1 min walkthrough</span>
      </div>
      <video
        class="block h-auto max-h-[280px] w-full bg-white object-contain object-top"
        controls
        playsinline
        preload="metadata"
        poster="${SITE.demoPoster}"
        src="${SITE.demoVideo}"
      >
        Your browser cannot play this video.
      </video>
      <div class="grid gap-3 px-[1.1rem] py-4">
        <p class="m-0 text-muted">${SITE.demoLabel}</p>
        ${Button({ label: SITE.demoCta, href: SITE.appUrl, variant: 'dark' })}
      </div>
    </div>
  `;
}
