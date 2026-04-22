# MedCore Premium - Gutti Malnad Hospital Website

A high-performance, responsive, and SEO-optimized hospital landing page built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**. Designed specifically for static deployment on **GitHub Pages**.

## ✨ Features

- 🏥 **Complete Hospital Ecosystem:** Services, Departments, Doctors, Blogs, and Events.
- 📱 **Mobile-First Design:** Optimized for all devices with touch-friendly interfaces.
- ⚡ **Static Power:** Built for `next export` with zero-latency navigation.
- 🔍 **SEO Ready:** Proper heading hierarchy, metadata, and accessible content.
- 🖨️ **Print & Share:** Integrated browser printing and Web Share API support.
- 🧪 **Dynamic Routing:** Slug-based pages for all medical specialties and services.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** GitHub Pages (Static Export)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/medcore-premium-hospital.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## 📦 Static Export & Deployment

This project is configured for **GitHub Pages** using automated GitHub Actions.

### Manual Build
To generate the static files manually:
```bash
npm run build
```
The output will be in the `out/` directory.

### Automated Deployment
Pushes to the `main` branch trigger the `.github/workflows/deploy.yml` workflow, which:
1. Installs dependencies
2. Runs `next build`
3. Exports to `out/`
4. Deploys to the `gh-pages` branch

> **Note on GitHub Pages Subpaths:** If you are deploying to `username.github.io/repo-name/`, ensure `repoName` in `next.config.ts` matches your repository name. The project is configured to automatically handle `basePath` and `assetPrefix` in production.

## 📁 Project Structure

- `src/app`: Page routes and layouts.
- `src/components`: Reusable UI components and page-specific UI blocks.
- `src/data`: Static data files for content management.
- `public`: Static assets (images, logos).

## 👨‍💻 Developed by

Developed with ❤️ by **Vorabbit**
