"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, GraduationCap, ShoppingCart, TrendingUp, CheckCircle } from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES: ServiceCard[] = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    subtitle: "Custom Scalable Web Applications",
    badge: "Core Engineering",
    badgeColor: "bg-blue-100 text-primary border-blue-200",
    description:
      "We build robust, high-throughput web applications engineered for speed, security, and scalability using Next.js, Node.js, and modern cloud architectures tailored to your enterprise needs.",
    features: [
      "Custom SaaS & Web App Development",
      "Microservices & Secure REST/GraphQL APIs",
      "Real-time Data Sync & High Performance",
      "Cloud Infrastructure & Docker Deployment",
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    ctaText: "Build Scalable App",
    icon: Code,
  },
  {
    id: "edutavex",
    title: "Edutavex Educational ERP",
    subtitle: "Comprehensive School & College Management",
    badge: "Flagship Product",
    badgeColor: "bg-emerald-100 text-deepGreen border-emerald-200",
    description:
      "Our premier ERP platform streamlines institution administration: fee collection, automated attendance, dynamic gradebooks, parent-teacher portals, and smart student analytics.",
    features: [
      "Automated Fee Billing & Payment Gateways",
      "Real-Time Student & Faculty Portals",
      "Attendance, Examination & Report Cards",
      "Library, Transport & Hostel Modules",
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    ctaText: "Explore Edutavex ERP",
    icon: GraduationCap,
  },
  {
    id: "cms-ecommerce",
    title: "CMS & Ecommerce Solutions",
    subtitle: "Shopify Stores & Custom Headless CMS",
    badge: "High Conversion",
    badgeColor: "bg-sky-100 text-accent border-sky-200",
    description:
      "Empower your digital commerce with tailored Shopify storefronts, headless WooCommerce, and intuitive Webflow / Sanity implementations designed to maximize sales and engagement.",
    features: [
      "Custom Shopify & Shopify Plus Themes",
      "Headless CMS for Instant Page Loads",
      "Custom Checkout & Inventory Integrations",
      "Mobile-Optimized Shopping Experiences",
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    ctaText: "Launch Ecommerce Store",
    icon: ShoppingCart,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    subtitle: "Data-Driven Brand Visibility & Growth",
    badge: "Organic Reach",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    description:
      "Supercharge your brand authority with precision SEO audits, conversion rate optimization (CRO), search ranking mastery, and full-funnel digital campaigns that convert clicks into revenue.",
    features: [
      "Technical, On-Page & Off-Page SEO",
      "High-ROI Performance Ad Campaigns",
      "Conversion Rate Optimization (CRO)",
      "Analytics Tracking & Funnel Attribution",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    ctaText: "Accelerate Growth",
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-softBg border border-blue-200 text-xs font-bold text-primary uppercase tracking-wider mb-3">
            Our Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textDark tracking-tight mb-4">
            Engineered for Impact,{" "}
            <span className="text-primary">Built for Scale</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Whether you require enterprise custom software, a dedicated institution ERP like Edutavex, a rapid e-commerce storefront, or top-tier digital marketing, we deliver turnkey excellence.
          </p>
        </div>

        {/* 4 Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
              >
                {/* Visual Header / Placeholder Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-gray-100" style={{ position: "relative" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-sm ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-medium text-blue-200">
                        {service.subtitle}
                      </p>
                      <h3 className="text-xl font-bold tracking-tight text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                          <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-primary-hover group-hover:translate-x-1 transition-all duration-200"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-xs font-semibold text-gray-400">
                      Qyltavex Certified
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
