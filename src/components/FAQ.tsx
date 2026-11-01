"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    category: "Edutavex ERP",
    question: "What makes Edutavex different from off-the-shelf school management software?",
    answer:
      "Edutavex is purpose-built for modular flexibility and high concurrent loads. Unlike rigid legacy ERPs, Edutavex supports automated fee collection gateways, customizable gradebook algorithms, biometric/smart attendance, and dedicated localized parent-student portals with zero per-student hidden licensing fees.",
  },
  {
    category: "Full Stack Development",
    question: "Which tech stack do you recommend for custom web applications?",
    answer:
      "We primarily engineer using Next.js (App Router), React, TypeScript, and Tailwind CSS on the frontend, paired with Node.js, Python, or Go microservices, backed by PostgreSQL or MongoDB. This ensures maximum Core Web Vitals speed, SEO performance, and future-proof enterprise scalability.",
  },
  {
    category: "Timeline & Pricing",
    question: "How long does a typical project take from start to production?",
    answer:
      "Standard web applications and eCommerce implementations typically launch within 3 to 6 weeks. Complete enterprise ERP deployments or specialized Edutavex institutional rollouts range between 6 to 12 weeks depending on legacy data migration, staff training, and custom module needs.",
  },
  {
    category: "CMS & Ecommerce",
    question: "Do you offer custom Shopify and headless eCommerce development?",
    answer:
      "Yes. We specialize in bespoke Shopify Plus theme engineering, custom liquid apps, and headless commerce setups (using Next.js + Shopify Storefront API) that deliver sub-second load times and higher checkout conversion rates.",
  },
  {
    category: "Support & Maintenance",
    question: "What post-launch support and SLA guarantees do you provide?",
    answer:
      "Every project includes 30 days of comprehensive hyper-care post launch. Following that, we offer monthly managed support retainers covering continuous cloud uptime monitoring, security patches, regular backups, and feature iterations.",
  },
  {
    category: "Digital Marketing",
    question: "How do you measure and report digital marketing & SEO results?",
    answer:
      "We deliver bi-weekly transparent reporting dashboards highlighting organic keyword rankings, click-through rates (CTR), conversion attribution, and customer acquisition cost (CAC), ensuring every dollar spent directly moves business metrics.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-softBg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-xs font-bold text-primary uppercase tracking-wider mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textDark tracking-tight mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Everything you need to know about our engineering approach, Edutavex ERP capabilities, and working with Qyltavex.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-blue-50/80 shadow-sm overflow-hidden transition-all duration-200 hover:border-blue-200/60"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-[11px] font-bold text-primary w-fit">
                      {item.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-textDark">
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Modern + / - Smooth Toggle Indicator */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white shadow-md shadow-primary/25 rotate-90"
                        : "bg-softBg text-primary hover:bg-blue-100"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
