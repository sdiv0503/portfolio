# Portfolio V1 - Divyansh Sharma

A high-performance, accessible, and database-backed developer portfolio built with the modern React ecosystem. Designed to showcase engineering depth alongside aesthetic sensibility.

![Tech Stack](https://skillicons.dev/icons?i=nextjs,react,ts,tailwind,postgres,prisma,vercel)

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router, Server Actions)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, Shadcn UI
- **Animations:** Framer Motion, Lenis Smooth Scroll
- **Database:** PostgreSQL (via Supabase), Prisma ORM
- **Forms & Email:** React Hook Form, Zod, Resend API
- **Analytics:** PostHog
- **Deployment:** Vercel

## ✨ Key Features

- **Server-Side Rendering (SSR):** Optimized for SEO and performance.
- **Streaming & Suspense:** Instant page loads with skeleton states for heavy content.
- **Real-time Database:** Projects and messages are fetched dynamically from Postgres.
- **Smooth Interactions:** "Lenis" inertia scrolling and "Spotlight" hover effects.
- **Accessibility (A11y):** Fully navigable via keyboard, screen-reader friendly, and focus management.
- **Dynamic SEO:** Automated OpenGraph image generation and sitemap.

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/sdiv0503/portfolio.git](https://github.com/sdiv0503/portfolio.git)
cd portfolio

```

### 2. Install dependencies

```bash
npm install

```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add the following keys:

```env
# Database (Supabase/Postgres)
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Email Service (Resend)
RESEND_API_KEY="re_..."

# Deployment URL (For SEO)
NEXT_PUBLIC_BASE_URL="localhost:3000"

```

### 4. Setup Database

Push the schema to your database and generate the Prisma client.

```bash
npx prisma db push
npx prisma generate

```

### 5. Run the development server

```bash
npm run dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
src/
├── actions/       # Server Actions (Form submission, Data fetching)
├── app/           # Next.js App Router (Pages, Layouts, API)
├── components/    # React Components
│   ├── shared/    # Reusable UI (Navbar, Footer, Cards)
│   └── ui/        # Shadcn Primitives (Button, Input, etc.)
├── lib/           # Utilities (Database client, Utils)
└── prisma/        # Database Schema

```

## 🚀 Deployment

This project is optimized for deployment on **Vercel**.

1. Push code to GitHub.
2. Import repository to Vercel.
3. Add the **Environment Variables** in Vercel settings.
4. Deploy.

---

Built with ❤️ by **Divyansh Sharma**.

```

```