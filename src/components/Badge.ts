import type { PlanTone } from '../types';

const tones: Record<PlanTone, string> = {
  default: 'bg-navy-3 text-muted',
  featured: 'bg-brand-soft text-brand',
  success: 'bg-ok/15 text-ok',
};

export function Badge(text: string, tone: PlanTone = 'default'): string {
  if (!text) return '';
  return `<span class="mb-2.5 inline-flex items-center rounded-full px-2 py-0.5 font-mono text-[0.68rem] font-medium tracking-[0.08em] uppercase ${tones[tone]}">${text}</span>`;
}
