# Contentful Landing Page

A modern, dynamic landing page built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, powered by Contentful CMS. This project demonstrates a modular, content-driven architecture with live preview and inspector mode support via the Contentful Live Preview Package.

## Features

- **Multi-Page Demo**: Navigate between multiple product through the landing page, all powered by Contentful.
- **Dynamic Content**: All page sections (header, hero banner, content, cards, images, video, footer) are managed in Contentful and rendered dynamically.
- **Live Preview**: Instant updates and inspector mode for editors using [@contentful/live-preview](https://www.npmjs.com/package/@contentful/live-preview).
- **TypeScript**: Full type safety for Contentful responses and React components.
- **Tailwind CSS**: Utility-first styling for rapid UI development.
- **Vite**: Fast development server and optimized production builds.
- **Migration Scripts**: Easily manage Contentful content models and assets.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A Contentful space with the required content models (see `migration-scripts/`)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/contentful-landing-page.git
   cd contentful-landing-page
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the project root with the following variables:

   ```
   VITE_CONTENTFUL_SPACE_ID=your_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_api_key
   VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_api_key
   VITE_CONTENTFUL_GRAPHQL_URL=https://graphql.contentful.com/content/v1/spaces/your_space_id
   VITE_CONTENTFUL_MANAGEMENT_TOKEN=your_management_api_key
   ```

4. **Run migration scripts to set up Contentful models and upload assets:**

   Navigate to the migration-scripts directory and run the following command (replace <SPACE_ID> and <MANAGEMENT_TOKEN> with your actual values):

   ```sh
   # Example for migration-script-1.js
   contentful space migration script.cjs --space-id <SPACE_ID> --management-token <MANAGEMENT_TOKEN>
   ```

### Development

Start the local development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

- `src/` - Main source code (components, hooks, utilities)
- `migration-scripts/` - Scripts for Contentful model and asset setup
- `public/` - Static assets
- `index.html` - Main HTML entry point

## Contentful Setup

- Content models are defined in `migration-scripts/`.
- Each section (Header, ContentSection, ImageSection, CardsSection, VideoSection, Footer) is a Contentful entry.
- The landing page is assembled dynamically based on the `landingPage` entry's referenced sections.

## Live Preview

To enable Contentful Live Preview, append `?preview=true` to the URL and ensure your preview API key is set.

## License

MIT

---
