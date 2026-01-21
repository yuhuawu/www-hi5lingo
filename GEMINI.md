# Project Context: hi5lingo_seo

## Project Overview
This is the marketing and SEO website for **Hi5Lingo**, built with **Astro** and designed for deployment on **Cloudflare Pages**. It serves as the main entry point to attract organic traffic and provides routes for business logic like authentication, payments, and navigation to the core learning application (Flutter Web).

## Tech Stack
*   **Framework**: [Astro](https://astro.build/) (v5+)
*   **Language**: TypeScript
*   **Deployment**: Cloudflare Pages
*   **Adapter**: `@astrojs/cloudflare`
*   **Styling**: Tailwind CSS
*   **State/Auth**: Planned integration for login/logout and payments.

## Project Structure
*   `src/pages/`: Contains the routes for the website.
*   `src/components/`: Reusable UI components.
*   `src/layouts/`: Page layouts.
*   `src/i18n/`: Internationalization logic and translations.
*   `public/`: Static assets (images, fonts, sitemap).
*   `astro.config.mjs`: Astro configuration (Cloudflare adapter enabled).
*   `wrangler.jsonc`: Cloudflare configuration.
*   `tsconfig.json`: TypeScript configuration.

## Key Commands
*   `npm run dev`: Start local development server.
*   `npm run build`: Build the static site for production.
*   `npm run preview`: Preview the production build locally.

## Development Conventions
*   **SEO First**: Use semantic HTML and optimize metadata in all pages.
*   **Performance**: Minimize heavy JavaScript; use Astro's islands architecture where possible.
*   **Components**: Break down UI into reusable Astro components in `src/components/`.

## TODOs
*   [ ] Configure Cloudflare Pages (connect repository or use Wrangler).
*   [ ] Implement base layout with SEO meta tags. (Done)
*   [ ] Create landing page content. (Done)
*   [ ] Integrate Authentication.
*   [ ] Integrate Payments (Stripe/Paypal).