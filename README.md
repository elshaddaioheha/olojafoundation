# The Oloja Foundation Website

This is the official website for The Oloja Foundation, built with Next.js, Tailwind CSS (via custom CSS), and TypeScript.

## Features

- **Home Page**: Features a hero section, mission/vision stats, founder bio, and core values.
- **Donate Page**: Integrated with Paystack for accepting donations.
- **Impact Activities**: A gallery and timeline of documented outreaches and foundation events.
- **Responsive Design**: optimized for mobile and desktop.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Configuration

- **Paystack**: Update the `publicKey` in `app/donate/page.tsx` with your live Paystack public key.
- **Images**: Images are stored in `public/images/`.

## Structure

- `app/`: Next.js app router pages.
- `components/`: Reusable UI components (Navbar, Footer, Hero, Stats, etc.).
- `public/`: Static assets.
