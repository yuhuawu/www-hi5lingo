# Hi5Lingo Website

This is the official marketing and SEO-focused website for **Hi5Lingo**, a Chinese learning application.

## Project Goal
The primary goal of this website is to attract organic traffic via search engines (SEO) and convert visitors into users. It serves as the main gateway to the Hi5Lingo ecosystem.

## Key Features
*   **SEO Optimization:** Built with performance and search rankings in mind to drive organic growth.
*   **Multi-language Support:** English, Simplified Chinese (zh-cn), and Traditional Chinese (zh-tw).
*   **User Accounts:** Integration for user login and logout.
*   **Payments:** Secure payment processing for subscriptions or course purchases.
*   **App Integration:** Seamless entry point into the Hi5Lingo Flutter Web application for the core learning experience.

## Tech Stack
*   **Framework:** [Astro](https://astro.build/) - Selected for its high performance and content-focused approach.
*   **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) - Used for high-performance global hosting.
*   **Styling:** Tailwind CSS.

## Getting Started

### Prerequisites
*   Node.js (v18.14.1 or higher)
*   npm, pnpm, or yarn

### Installation
1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd hi5lingo_seo
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Development
Start the local development server:
```bash
npm run dev
```

### Build & Deploy
Build for production:
```bash
npm run build
```

Deploy to Cloudflare Pages:
(Ensure you have the Wrangler CLI installed and authenticated)
```bash
npx wrangler pages deploy dist
```