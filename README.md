# Bisrat Mengistu – Portfolio (Next.js 14 · TypeScript · Tailwind · Framer Motion)
## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start
## Edit content
All text lives in `lib/data.ts`. Images are in `public/images` (`p-NN.jpg` = PDF page NN).
## Deploy (Vercel)
1. Push this folder to a GitHub repo.
2. vercel.com → Add New Project → import the repo (framework: Next.js, no config needed).
3. Add env var `NEXT_PUBLIC_SITE_URL` = your final domain (e.g. https://bisrat.design).
4. Deploy, then add your custom domain under Settings → Domains.
Netlify: build `npm run build`, use the Next.js runtime plugin. Contact form opens the visitor's email app (mailto); swap for Formspree/Resend if you want server-side delivery.
