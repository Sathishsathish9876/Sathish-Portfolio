# Sathish M - Professional Portfolio

A modern, premium, and fully responsive personal portfolio website built to showcase my experience as a Full-Stack Developer.

## 🚀 Live Demo

*(Add your deployed Vercel/Netlify link here)*

## 🛠️ Built With

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & CSS 3D Transforms
- **Smooth Scrolling:** [Lenis](https://lenis.studiofreight.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email Integration:** [Brevo API](https://www.brevo.com/)

## ✨ Key Features

- **Premium Black & Red Theme:** A highly professional aesthetic designed for developers.
- **3D Interactive Elements:** Cards that tilt and react to hover using CSS 3D transforms (`translateZ`, `rotateX`, `rotateY`).
- **Smooth Scrolling:** Buttery-smooth page scrolling integrated with parallax effects.
- **Dynamic Timeline:** An interactive vertical progress line that tracks your scroll through the Experience section.
- **Working Contact Form:** Server-side API route that sends form submissions directly to your email using the Brevo API.

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sathishsathish9876/sathish-portfolio.git
   cd sathish-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your Brevo API key:
   ```env
   BREVO_API_KEY=your_api_key_here
   CONTACT_EMAIL=sathishsanthosh7155@gmail.com
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/` - Next.js App Router (Layouts, Pages, API Routes)
- `src/components/sections/` - Major page sections (Hero, About, Projects, etc.)
- `src/components/ui/` - Reusable UI components (Navbar, Footer, Container)
- `src/data/` - Content files (Experience, Projects, Skills) to easily update text without changing components.
- `public/assets/` - Static assets (Profile image, Resume PDF)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
