import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { applySeo } from './lib/seo';
import { ContactPage } from './pages/ContactPage';
import { DemoPage } from './pages/DemoPage';
import { FaqPage } from './pages/FaqPage';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

const state = {
  navOpen: false,
};

function normalizePath(pathname: string): string {
  return pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

const HOME_SECTIONS: Record<string, string> = {
  '/features': 'features',
  '/pricing': 'pricing',
};

function getPage(pathname: string): string {
  switch (normalizePath(pathname)) {
    case '/demo':
      return DemoPage();
    case '/faqs':
      return FaqPage();
    case '/privacy':
      return PrivacyPage();
    case '/terms':
      return TermsPage();
    case '/contact':
      return ContactPage();
    default:
      return HomePage();
  }
}

function render(): void {
  const app = document.getElementById('app');
  if (!app) throw new Error('Missing #app');

  const pathname = normalizePath(window.location.pathname);

  app.innerHTML = `
    ${Header(state.navOpen)}
    <main>${getPage(pathname)}</main>
    ${Footer()}
  `;

  applySeo(pathname);

  const sectionId = HOME_SECTIONS[pathname] ?? (pathname === '/' ? window.location.hash.slice(1) : '');
  if (sectionId) {
    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

function navigate(href: string): void {
  const url = new URL(href, window.location.origin);
  window.history.pushState({}, '', url.pathname);
  state.navOpen = false;
  render();
}

function ensureLightbox(): void {
  if (document.getElementById('lightbox')) return;

  document.body.insertAdjacentHTML(
    'beforeend',
    `
      <div id="lightbox" class="fixed inset-0 z-[80] hidden cursor-zoom-out items-center justify-center bg-navy/88 px-5 pt-14 pb-5">
        <button class="absolute top-4 right-4 min-h-10 rounded-md border-0 bg-white px-3.5 font-semibold text-navy" type="button" data-lightbox-close aria-label="Close image">Close</button>
        <img class="h-auto max-h-[calc(100vh-5rem)] w-auto max-w-[min(80rem,100%)] cursor-default rounded-lg bg-white object-contain shadow-(--shadow-card)" alt="" />
      </div>
    `,
  );
}

function openLightbox(src: string, alt: string): void {
  ensureLightbox();
  const box = document.getElementById('lightbox');
  const image = box?.querySelector('img');
  if (!box || !image) return;
  image.src = src;
  image.alt = alt;
  box.classList.remove('hidden');
  box.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(): void {
  const box = document.getElementById('lightbox');
  if (!box || box.classList.contains('hidden')) return;
  box.classList.add('hidden');
  box.classList.remove('flex');
  box.querySelector('img')?.removeAttribute('src');
  document.body.style.overflow = '';
}

export function boot(): void {
  ensureLightbox();
  render();

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const toggle = target.closest('[data-nav-toggle]');
    if (toggle) {
      state.navOpen = !state.navOpen;
      render();
      return;
    }

    if (target.closest('#lightbox')) {
      closeLightbox();
      return;
    }

    const shot = target.closest('[data-lightbox]');
    if (shot) {
      openLightbox(shot.getAttribute('data-lightbox') ?? '', shot.getAttribute('data-lightbox-alt') ?? '');
      return;
    }

    const link = target.closest('a[data-link]');
    if (!(link instanceof HTMLAnchorElement)) return;
    event.preventDefault();
    navigate(link.getAttribute('href') ?? '/');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });

  window.addEventListener('popstate', () => {
    state.navOpen = false;
    closeLightbox();
    render();
  });
}
