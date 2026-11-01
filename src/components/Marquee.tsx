"use client";

import React from "react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

// Authentic Vector Brand Logos
const NextJsIcon = (
  <svg className="w-6 h-6" viewBox="0 0 128 128" fill="none">
    <circle cx="64" cy="64" r="64" fill="#000000" />
    <path
      d="M106.3 111.7L49.1 38.4H38.4V89.6H47.6V49.3L100 116.3C102.2 114.9 104.3 113.4 106.3 111.7Z"
      fill="url(#nextg1)"
    />
    <path d="M82.4 38.4H91.6V89.6H82.4V38.4Z" fill="url(#nextg2)" />
    <defs>
      <linearGradient id="nextg1" x1="77.5" y1="82.5" x2="102" y2="114" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="nextg2" x1="87" y1="38.4" x2="86.8" y2="76" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const ReactIcon = (
  <svg className="w-6 h-6" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TypeScriptIcon = (
  <svg className="w-6 h-6" viewBox="0 0 128 128">
    <rect width="128" height="128" rx="20" fill="#3178C6" />
    <path
      d="M68.5 77.5c1.8 3.1 4.5 5.5 8.2 7.1 3.7 1.6 7.8 2.4 12.3 2.4 3.7 0 7-.6 9.8-1.7 2.8-1.1 5-2.7 6.6-4.8 1.6-2.1 2.4-4.5 2.4-7.2 0-2.6-.7-4.8-2.2-6.6-1.5-1.8-3.6-3.3-6.4-4.5-2.8-1.2-6.5-2.4-11.1-3.6-6-1.6-10.7-3.3-14.1-5.1-3.4-1.8-5.9-4.1-7.5-6.9-1.6-2.8-2.4-6.3-2.4-10.5 0-4.6 1.2-8.7 3.6-12.3 2.4-3.6 5.8-6.4 10.2-8.4 4.4-2 9.7-3 15.9-3 6.1 0 11.4 1.1 15.9 3.3 4.5 2.2 7.9 5.2 10.2 9.1l-10.8 7.2c-1.6-2.6-3.8-4.6-6.6-6-2.8-1.4-6.1-2.1-9.9-2.1-3.5 0-6.4.5-8.7 1.6-2.3 1.1-4 2.5-5.1 4.3-1.1 1.8-1.7 3.8-1.7 6.1 0 2.3.6 4.2 1.8 5.7 1.2 1.5 2.9 2.7 5.1 3.7 2.2 1 5.3 2 9.3 3 6.6 1.7 11.8 3.5 15.6 5.5 3.8 2 6.6 4.6 8.4 7.8 1.8 3.2 2.7 7.1 2.7 11.7 0 4.9-1.3 9.3-3.9 13.2-2.6 3.9-6.3 6.9-11.1 9-4.8 2.1-10.6 3.1-17.4 3.1-7.9 0-14.7-1.5-20.4-4.5-5.7-3-9.8-7.3-12.3-12.9l12.4-7.1zM11.5 45.4h48.3v12.5H38.5v52.7H25.3V57.9H11.5V45.4z"
      fill="#FFFFFF"
    />
  </svg>
);

const TailwindIcon = (
  <svg className="w-6 h-6" viewBox="0 0 54 33" fill="#38BDF8">
    <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
  </svg>
);

const NodeIcon = (
  <svg className="w-6 h-6" viewBox="0 0 32 32">
    <path d="M16 2.3l12.1 7v14l-12.1 7-12.1-7v-14L16 2.3z" fill="#339933" />
    <path
      d="M16 11.5c-2.4 0-4.3 1.9-4.3 4.3v4.6h2.8v-4.6c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v4.6h2.8v-4.6c0-2.4-1.9-4.3-4.3-4.3z"
      fill="#FFFFFF"
    />
  </svg>
);

const ShopifyIcon = (
  <svg className="w-6 h-6" viewBox="0 0 109 123" fill="none">
    <path
      d="M74.8 14.8c-.3-.2-.7-.1-.9.1L61.7 26.2c-.4.3-.9.2-1.2-.2l-5.7-7.9c-2.8-3.8-7.2-6.1-12-6.1h-.9c-.7 0-1.2.5-1.2 1.2 0 .1 0 .2.1.3l9.8 45.6c.1.5-.2 1-.7 1.1l-14 3.7c-.5.1-.9-.1-1.1-.6L24.2 38c-.2-.6-.8-.9-1.4-.7l-15.6 4.9c-.6.2-.9.8-.7 1.4l18.4 69.8c.2.8.9 1.4 1.7 1.4h48.3c.8 0 1.5-.6 1.7-1.4L90.8 47.9l-16-33.1z"
      fill="#95BF47"
    />
    <path
      d="M68.5 45.3c-.3 0-.6.1-.8.2l-3.3 2.1c-.2.1-.4.2-.6.2-.7 0-1.2-.6-1.2-1.3v-1.1c0-5.7-4.6-10.3-10.3-10.3-1.8 0-3.5.5-5 1.4-.5.3-.8.9-.7 1.5.1.6.6 1 1.2 1h.4c3.8 0 6.9 3.1 6.9 6.9v1.2c0 .7-.5 1.3-1.2 1.3h-.7c-.8 0-1.5-.6-1.5-1.4v-1.2c0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3v1.8c0 3.7 2.1 7.1 5.4 8.7l5.9 2.9c4.9 2.4 8 7.4 8 12.9v1.7c0 7.3 5.9 13.2 13.2 13.2s13.2-5.9 13.2-13.2V58.5c0-7.3-5.9-13.2-13.2-13.2h-3.4z"
      fill="#5E8E3E"
    />
    <path
      d="M62.6 23.6l12.2-11.3c.2-.2.3-.5.3-.8 0-.6-.4-1.1-1-1.2L55.2 6.5c-.3-.1-.6 0-.8.2L42.2 18.2c2.8 0 5.5.9 7.7 2.6l12.7 2.8z"
      fill="#95BF47"
    />
    <path
      d="M57.6 69.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"
      fill="#FFFFFF"
    />
  </svg>
);

const WebflowIcon = (
  <svg className="w-6 h-6" viewBox="0 0 100 65" fill="#146EF5">
    <path d="M99.2 0L67.7 64.2H42.5l14-28.1H56L43.8 64.2H18.7L32.7 36.1h-.5L20 64.2H0L32.2 0h24.8L43 28.1h.5L57.5 0h24.8L68.3 28.1h.5L83 0h16.2z" />
  </svg>
);

const GraphQLIcon = (
  <svg className="w-6 h-6" viewBox="0 0 100 100" fill="#E10098">
    <path d="M50 7.8L13.5 28.9v42.2L50 92.2l36.5-21.1V28.9L50 7.8zm0 7.4l29.8 17.2L50 49.6 20.2 32.4 50 15.2zm-30.8 22l28.3 16.4v32.8L19.2 70V37.2zm33.3 49.2V53.6l28.3-16.4V70L52.5 86.4z" />
  </svg>
);

const PostgreSQLIcon = (
  <svg className="w-6 h-6" viewBox="0 0 128 128">
    <path d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4z" fill="#336791" />
    <path
      d="M93.3 75.8c-2.2-4.6-5.5-8.5-9.6-11.4 3.7-4.1 5.9-9.5 5.9-15.4 0-12.7-10.3-23-23-23H48.4c-1.7 0-3 1.3-3 3v67.8c0 1.7 1.3 3 3 3h13.2c1.7 0 3-1.3 3-3V78h2.1c3.1 0 6 1.2 8.2 3.4l11.4 15.5c1 1.4 2.6 2.2 4.3 2.2h9.7c1.4 0 2.4-1.4 1.8-2.6l-5.8-20.7zm-26.7-14H54.4V34.8h12.2c7.2 0 13 5.8 13 13s-5.8 14-13 14z"
      fill="#FFFFFF"
    />
  </svg>
);

const DockerIcon = (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#2496ED">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m21.758.337a6.388 6.388 0 00-4.004-4.887l-.44-.19-.29.403a4.57 4.57 0 01-3.693 1.936H1.543a.543.543 0 00-.543.543 9.49 9.49 0 004.838 8.358 13.9 13.9 0 006.91 1.792c7.625 0 13.882-5.46 14.542-12.873.348-.198.81-.318 1.488-.318a.333.333 0 00.334-.334c0-.737-.502-1.393-1.127-1.43" />
  </svg>
);

const AWSIcon = (
  <svg className="w-6 h-6" viewBox="0 0 100 60">
    <path
      d="M25.4 34.6c-4.4 0-8.3-2-8.3-7.5 0-5.8 4.4-8.8 11.7-8.8 2.2 0 4.1.3 5.4.7v-1.9c0-3.4-1.9-5-6-5-3.2 0-6.4 1-8.5 2.2l-1.6-4.5c2.9-1.6 7.4-2.8 12-2.8 7.9 0 11.2 4.1 11.2 11.4v15.7h-6.2v-2.9c-2.3 2.3-5.5 3.4-9.7 3.4zm2.1-4.9c3.1 0 5.4-1.4 6.6-3.3v-3.7c-1.3-.4-3.1-.7-5-.7-4.1 0-6.3 1.6-6.3 4.4 0 2.2 1.5 3.3 4.7 3.3zm29.8 4.9l-6.8-26.6h7.4l3.8 17.5 3.8-17.5h7l3.8 17.5 3.8-17.5h7.2l-6.8 26.6h-7.1l-4.1-17.6-4.1 17.6h-8zm39.1 0c-2.8 0-5.7-.6-7.8-1.7l1.7-4.9c1.9.9 4.3 1.6 6.5 1.6 2.8 0 4.2-1.1 4.2-2.6 0-1.6-1.5-2.6-4.4-3.6-4.4-1.6-7.2-3.8-7.2-7.8 0-4.7 3.7-8.5 10.3-8.5 2.7 0 5.1.5 7.1 1.4l-1.7 4.9c-1.6-.7-3.6-1.3-5.6-1.3-2.6 0-3.8 1.1-3.8 2.3 0 1.5 1.4 2.3 4.3 3.3 4.6 1.7 7.4 3.9 7.4 8.1 0 5.1-3.9 8.8-11 8.8z"
      fill="#232F3E"
    />
    <path
      d="M12 43.5c16.2 11.9 40 18.2 61.2 8.1 2.3-1.1 4.5-2.4 6.5-3.8l2.6 3.6c-2.3 1.6-4.8 3.1-7.5 4.3C52.1 66.8 25.8 60 7 46.2l5-2.7z"
      fill="#FF9900"
    />
    <path d="M84.5 46.8l-8.4-1.2 5.5-6.5 2.9 7.7z" fill="#FF9900" />
  </svg>
);

const PythonIcon = (
  <svg className="w-6 h-6" viewBox="0 0 128 128">
    <path
      d="M63.3 3.2C33.7 3.2 35.6 16.1 35.6 16.1l.1 13.3h28.3v4H20.1s-16.9-1.9-16.9 27.7c0 29.6 14.8 28.6 14.8 28.6h8.8v-12.4s-.5-14.8 14.5-14.8h28.1s13.8.2 13.8-13.6V16.7s2-13.5-26.9-13.5zm-15.5 8.7c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3z"
      fill="#3776AB"
    />
    <path
      d="M64.7 124.8c29.6 0 27.7-12.9 27.7-12.9l-.1-13.3H64v-4h43.9s16.9 1.9 16.9-27.7c0-29.6-14.8-28.6-14.8-28.6h-8.8v12.4s.5 14.8-14.5 14.8H58.6s-13.8-.2-13.8 13.6v22.7s-2 13.5 26.9 13.5zm15.5-8.7c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z"
      fill="#FFD43B"
    />
  </svg>
);

const MongoDBIcon = (
  <svg className="w-6 h-6" viewBox="0 0 60 128" fill="none">
    <path d="M30 0C25 15 0 45 0 75c0 26.5 13.5 45 30 53 16.5-8 30-26.5 30-53C60 45 35 15 30 0z" fill="#47A248" />
    <path d="M30 128V0c5 15 30 45 30 75 0 26.5-13.5 45-30 53z" fill="#499D4A" />
    <path
      d="M30 125c-.7 0-1.4-.2-2-.5C13 117 2 99 2 75c0-27 21-54 28-68 7 14 28 41 28 68 0 24-11 42-26 49.5-.6.3-1.3.5-2 .5z"
      fill="#47A248"
    />
    <path d="M30 123V20c5.5 12.5 24 37 24 55 0 21.5-9.5 38.5-24 48z" fill="#58AA58" />
  </svg>
);

const RedisIcon = (
  <svg className="w-6 h-6" viewBox="0 0 128 128">
    <path d="M64 4L8 36v56l56 32 56-32V36L64 4z" fill="#DC382D" />
    <path d="M64 22L24 45v38l40 23 40-23V45L64 22z" fill="#A81F17" />
    <path d="M64 35L36 51v26l28 16 28-16V51L64 35z" fill="#FFFFFF" />
    <path d="M64 48L48 57v14l16 9 16-9V57L64 48z" fill="#DC382D" />
  </svg>
);

const FigmaIcon = (
  <svg className="w-6 h-6" viewBox="0 0 38 57">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
  </svg>
);

const GitIcon = (
  <svg className="w-6 h-6" viewBox="0 0 128 128">
    <path
      d="M125.6 57.6L70.4 2.4c-3.2-3.2-8.4-3.2-11.6 0L46.2 15l15.6 15.6c3.4-1.1 7.4-.4 10.2 2.3 2.8 2.8 3.5 6.7 2.3 10.2l15 15c3.4-1.1 7.4-.4 10.2 2.3 3.9 3.9 3.9 10.3 0 14.3-3.9 3.9-10.3 3.9-14.3 0-2.9-2.9-3.6-7.2-2-10.7L63.5 54.7v34.4c1 .6 2 1.5 2.7 2.3 3.9 3.9 3.9 10.3 0 14.3-3.9 3.9-10.3 3.9-14.3 0-3.9-3.9-3.9-10.3 0-14.3.9-.9 2-1.7 3.2-2.3V54.1c-1.2-.6-2.3-1.4-3.2-2.3-2.9-2.9-3.6-7.2-2-10.7L34.3 25.5 2.4 57.4c-3.2 3.2-3.2 8.4 0 11.6l55.2 55.2c3.2 3.2 8.4 3.2 11.6 0l56.4-56.4c3.2-3.2 3.2-8.3 0-11.5v1.3z"
      fill="#F05032"
    />
  </svg>
);

const ROW_ONE: TechItem[] = [
  { name: "Next.js 15", category: "Full Stack", icon: NextJsIcon },
  { name: "React 19", category: "Frontend", icon: ReactIcon },
  { name: "TypeScript", category: "Language", icon: TypeScriptIcon },
  { name: "Tailwind CSS", category: "Styling", icon: TailwindIcon },
  { name: "Node.js", category: "Backend", icon: NodeIcon },
  { name: "Shopify Plus", category: "eCommerce", icon: ShopifyIcon },
  { name: "Webflow", category: "CMS", icon: WebflowIcon },
  { name: "GraphQL", category: "API", icon: GraphQLIcon },
];

const ROW_TWO: TechItem[] = [
  { name: "PostgreSQL", category: "Database", icon: PostgreSQLIcon },
  { name: "Docker", category: "DevOps", icon: DockerIcon },
  { name: "Amazon Web Services", category: "Cloud", icon: AWSIcon },
  { name: "Python / Django", category: "ERP Engine", icon: PythonIcon },
  { name: "MongoDB", category: "NoSQL", icon: MongoDBIcon },
  { name: "Redis Cache", category: "Performance", icon: RedisIcon },
  { name: "Figma UI/UX", category: "Design", icon: FigmaIcon },
  { name: "Git Architecture", category: "Version Control", icon: GitIcon },
];

export default function Marquee() {
  return (
    <section className="relative py-12 bg-white border-y border-gray-100 overflow-hidden">
      {/* Section Sub-heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          POWERING NEXT-GENERATION ENTERPRISE ARCHITECTURES WITH PROVEN TECHNOLOGIES
        </p>
      </div>

      {/* Left and Right Fade Overlays */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <div className="flex flex-col gap-4">
        {/* Row 1: Left-to-Right */}
        <div className="flex overflow-hidden select-none">
          <div className="flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee-left">
            {[...ROW_ONE, ...ROW_ONE].map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-200 group shrink-0"
              >
                <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center p-1 group-hover:scale-110 transition-transform shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-textDark group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-medium text-gray-400">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right-to-Left */}
        <div className="flex overflow-hidden select-none">
          <div className="flex min-w-full shrink-0 items-center justify-around gap-4 animate-marquee-right">
            {[...ROW_TWO, ...ROW_TWO].map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-200 group shrink-0"
              >
                <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center p-1 group-hover:scale-110 transition-transform shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-textDark group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[11px] font-medium text-gray-400">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
