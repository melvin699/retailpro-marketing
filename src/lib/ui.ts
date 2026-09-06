export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export const ui = {
  container: 'mx-auto w-[min(68rem,calc(100%-2.5rem))] max-sm:w-[min(68rem,calc(100%-1.25rem))]',
  section: 'py-14 max-sm:py-12',
  page: 'min-h-[60vh] pt-20',
  pill: 'inline-flex items-center gap-2 rounded-full border border-brand/35 bg-brand-soft px-2 py-0.5 font-mono text-[0.68rem] font-medium tracking-[0.1em] text-brand uppercase',
  mono: 'font-mono text-[0.68rem] font-medium tracking-[0.1em] text-brand uppercase',
  live: 'inline-flex items-center gap-1.5 text-brand before:size-[0.38rem] before:rounded-full before:bg-brand before:shadow-[0_0_8px_rgb(243_156_18_/_70%)] before:content-[""]',
  h2: 'mt-2.5 text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2]',
  lead: 'mt-3.5 max-w-xl text-[0.95rem] leading-6 text-muted',
  actions: 'mt-5 flex flex-wrap items-center gap-2.5 max-sm:w-full max-sm:flex-col max-sm:items-stretch',
  card: 'rounded-xl border border-line bg-navy-2 p-5',
  cardTitle: 'mb-2 font-sans text-[0.98rem] font-bold tracking-[-0.02em]',
  cardCopy: 'text-[0.92rem] leading-6 text-muted',
};
