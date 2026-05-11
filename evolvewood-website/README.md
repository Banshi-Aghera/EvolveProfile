# EvolveWood Website

A production-ready React + Vite + Tailwind CSS company portfolio website for Evolve Profile Industries.

## Project Structure

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **SEO**: React Helmet Async
- **Icons**: Lucide React
- **Routing**: React Router DOM v7

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    This starts both the Vite frontend and the Express API together.

3.  **Build for Production**:
    ```bash
    npm run build
    ```

4.  **Run Production Build Locally**:
    ```bash
    npm run start
    ```

## Customization

-   **Logo**: The current logo is implemented using CSS/Text to match the brochure style. To use the actual image, extract the logo from your PDF, save it as `src/assets/logo.png`, and update `src/components/Navbar.jsx` to import and use it.
-   **Content**: All site content (products, features, blogs) is managed in `src/data/content.js`. Edit this file to update text and images.
-   **Images**: Place your product images in `public/images/` and update the paths in `src/data/content.js`.

## Features implemented

-   Responsive Design (Mobile First)
-   Brochure-matched color palette (Beige/Brown/Green)
-   Rounded styling and eco-industrial aesthetics
-   SEO Optimized Pages
-   Contact Form UI
-   Blog System with JSON data
