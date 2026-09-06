import { ui } from '../lib/ui';

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionIntro({ eyebrow = '', title, description = '' }: SectionIntroProps): string {
  return `
    <div class="mb-10 max-w-[45rem]">
      ${eyebrow ? `<div class="${ui.pill}">${eyebrow}</div>` : ''}
      <h2 class="${ui.h2}">${title}</h2>
      ${description ? `<p class="${ui.lead}">${description}</p>` : ''}
    </div>
  `;
}
