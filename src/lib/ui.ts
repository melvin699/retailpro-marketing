export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export const ui = {
  container: 'mx-auto w-[min(73.75rem,calc(100%-2rem))] max-sm:w-[min(73.75rem,calc(100%-1.25rem))]',
  section: 'py-[4.5rem] max-sm:py-16',
  page: 'min-h-[60vh] pt-[6.5rem]',
  pill: 'inline-flex items-center gap-2 rounded-full border border-brand/35 bg-brand-soft px-2.5 py-1 font-mono text-[0.72rem] font-medium tracking-[0.1em] text-brand uppercase',
  mono: 'font-mono text-[0.72rem] font-medium tracking-[0.1em] text-brand uppercase',
  live: 'inline-flex items-center gap-1.5 text-brand before:size-[0.42rem] before:rounded-full before:bg-brand before:shadow-[0_0_8px_rgb(243_156_18_/_70%)] before:content-[""]',
  h2: 'mt-3 text-[clamp(2rem,3.4vw,3.1rem)] leading-[1.12]',
  lead: 'mt-5 max-w-xl text-[1.08rem] leading-7 text-muted',
  actions: 'mt-6 flex flex-wrap items-center gap-3 max-sm:w-full max-sm:flex-col max-sm:items-stretch',
  card: 'rounded-xl border border-line bg-navy-2 p-[1.65rem_1.5rem]',
  cardTitle: 'mb-2.5 font-sans text-[1.05rem] font-bold tracking-[-0.02em]',
  cardCopy: 'leading-7 text-muted',
};
