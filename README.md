# RetailPro Marketing

Public marketing website for `retailpro.co.ke`.

This project is separate from the RetailPro POS application. The marketing site is meant to present the product professionally, explain pricing, show a demo, and direct customers to sign up or log in.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Important Config

Update business details in:

- `src/config/site.js`

This includes:

- site URL
- app URL
- WhatsApp number
- support email
- CTA copy
- trial messaging

## Content Data

Update structured content in:

- `src/data/features.js`
- `src/data/pricing.js`
- `src/data/testimonials.js`
- `src/data/resources.js`

## Routes

- `/` home
- `/demo`
- `/faqs`
- `/privacy`
- `/terms`
- `/contact`

## Notes

- Public domain: `https://retailpro.co.ke`
- App/login target: `https://app.retailpro.co.ke`
- Placeholder testimonials and legal content should be replaced before launch.
