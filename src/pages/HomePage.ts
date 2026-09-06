import { DemoSection } from '../components/DemoSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { PricingSection } from '../components/PricingSection';
import { ProductScreens } from '../components/ProductScreens';
import { Testimonials } from '../components/Testimonials';
import { TrustStrip } from '../components/TrustStrip';

export function HomePage(): string {
  return `
    ${Hero()}
    ${TrustStrip()}
    ${PricingSection()}
    ${FeaturesGrid()}
    ${DemoSection()}
    ${ProductScreens()}
    ${HowItWorks()}
    ${Testimonials()}
  `;
}
