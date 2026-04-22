# MedCore Premium - Gutti Malnad Hospital Website

A premium, modern healthcare landing page and management system for Gutti Malnad Hospital, Shivamogga.

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages

## 📁 Folder Structure

- `src/app`: Application routes and layout
- `src/components`: Reusable UI components
- `src/data`: Static data for departments, services, and doctors
- `public`: Static assets (images, icons)

## 🛠️ Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 📦 Deployment Steps (GitHub Pages)

The project is configured for automated deployment via GitHub Actions.

1. Ensure `next.config.ts` has `output: "export"` and `unoptimized: true`.
2. Push changes to the `main` branch.
3. The `.github/workflows/deploy.yml` will automatically build and deploy the site.

## 👨‍💻 Developed by

Developed by **Vorabbit**
