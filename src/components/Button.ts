import { icon } from '../lib/icons';
import { cx } from '../lib/ui';
import type { ButtonVariant, IconName } from '../types';

const variants: Record<ButtonVariant, string> = {
  dark: 'border-transparent bg-brand text-navy',
  primary: 'border-transparent bg-brand text-navy',
  ghost: 'border-line-2 bg-transparent text-ink',
};

type ButtonProps = {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  iconName?: IconName;
  attrs?: string;
};

export function Button({
  label,
  href = '#',
  variant = 'primary',
  iconName,
  attrs = '',
}: ButtonProps): string {
  const iconHtml = iconName
    ? `<span class="inline-flex items-center justify-center leading-none">${icon(iconName)}</span>`
    : '';
  const externalAttrs = href.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';

  return `<a class="${cx(
    'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border px-[1.15rem] font-semibold transition-colors max-sm:w-full',
    variants[variant],
  )}" href="${href}"${externalAttrs} ${attrs}>${iconHtml}<span>${label}</span></a>`;
}
