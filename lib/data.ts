export const site = {
  name: "Bisrat Mengistu",
  role: "Graphic Designer & UI/UX Designer",
  email: "bisrat.mengistu2005@gmail.com",
  instagram: "designed.by.bisrat",
  phone: "0939480837",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
};
export const about = {
  hello: "Hello, I’m Bisrat",
  headline: "I design things people actually want to look at.",
  body: "I work across graphic design and UI/UX – posters, social media content, branding, and interfaces. My tools are mainly Figma and Photoshop but the real work happens before I open any of them: figuring out what a design needs to say and how to say it simply.",
};
export const tools = ["Figma", "Photoshop", "Illustrator"];
export const services = [
  { title: "Logo Design", text: "Highlighting custom logos and brand identities." },
  { title: "Print Media Design", text: "Brand design projects that create impactful visual marks of a client’s mission and goals." },
  { title: "UI/UX Design", text: "Seamless UI/UX for apps and websites that combine clarity, usability, and visual appeal." },
  { title: "Social Media Design", text: "Bold social media visuals that capture attention, communicate clearly, and strengthen brand identity." },
];
export const certification = {
  title: "Certificate of Completion",
  recipient: "Bisrat Mengistu",
  text: "In recognition of the successful completion of the 3-Month Summer Project Program and valuable contribution to the development of Freshman Resource App as a member of the UI/UX Team.",
  signer: "Mosisa Feyissa", signerRole: "IT Team Lead", year: "2026", date: "Oct 19, 2026",
};
export type Project = {
  slug: string; title: string; category: string; summary: string; tag?: string;
  meta: { label: string; value: string }[]; timeline?: boolean;
  images: { src: string; alt: string }[]; list?: { title: string; items: string[] };
};
const img = (n: string, alt: string) => ({ src: `/images/p-${n}.jpg`, alt });
export const projects: Project[] = [
  { slug: "datacode", title: "Datacode", category: "Logo Design", tag: "Logo Design • Brand Identity",
    summary: "A modern identity for digital products and technology.", meta: [],
    images: [img("05", "Datacode logo with laptop and phone mockups")] },
  { slug: "neba-digital-solution", title: "Neba Digital Solution", category: "Logo Design", tag: "Logo Design • Brand Identity",
    summary: "A modern digital identity designed to communicate innovation, technology, and connectivity.", meta: [],
    images: [img("06", "Neba Digital Solution logo on phone mockups")] },
  { slug: "better-trade", title: "Trading Platform", category: "UI/UX Design",
    summary: "A modern trading platform designed…", // text is cut off in the original PDF – complete it with your own copy
    meta: [{ label: "Role", value: "UI/UX Designer" }, { label: "Tools", value: "Figma" }, { label: "Type", value: "Web Design" }],
    images: [img("08", "Better Trade landing page on desktop and laptop")] },
  { slug: "aastu-freshman-resource-app", title: "AASTU Freshman Resource App", category: "UI/UX Case Study", timeline: true,
    summary: "A student resource and exam hub: “Ace your exams. Find your department.”",
    meta: [{ label: "Role", value: "UI/UX Designer" }, { label: "Duration", value: "4 Week" },
      { label: "Platform", value: "AASTU Student Resource & Exam Hub" }, { label: "Screens", value: "14 + Screens" }],
    list: { title: "App screens", items: ["Welcome", "Sign Up", "Log In", "Notifications", "Forgot Password", "Reset Password", "Explore Course Resources", "Get Access (150 ETB, 12 months)", "Payment Under Review", "Home", "Browse", "Profile", "Select your year"] },
    images: [img("09", "AASTU Freshman Resource App splash and welcome screens"), img("10", "All app screens of the AASTU Freshman Resource App")] },
  { slug: "airpods-max-promotion", title: "AirPods Max", category: "Print Design · Product Promotion",
    summary: "A bold promotional poster concept designed to showcase AirPods Max through striking product imagery, a vibrant red color palette, and a modern music-inspired visual style.",
    meta: [{ label: "Client", value: "Promotional poster design for client" }, { label: "Primary color", value: "Bold red gradient" },
      { label: "Typography", value: "Clean, modern sans-serif" }, { label: "Visual direction", value: "Minimal, modern, product-focused" }],
    images: [img("12", "AirPods Max promotional poster")] },
  { slug: "posters", title: "Posters", category: "Print Design · Poster",
    summary: "NUR Fashion new season sale and a taxi safety poster in Amharic.", meta: [],
    images: [img("13", "NUR Fashion and Taxi posters")] },
  { slug: "social-media-design", title: "Social Media Design", category: "Social Media",
    summary: "Instagram and social posts for furniture, coffee, real estate, footwear and faith-based content.", meta: [],
    images: [img("15", "Grid of six social media post designs")] },
];
