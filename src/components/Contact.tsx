"use client";

import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-softBg relative overflow-hidden border-y border-blue-100/80">
      {/* Ambient Decorative Glows matching site theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A6FDA08_1px,transparent_1px),linear-gradient(to_bottom,#0A6FDA08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tagline with Dash */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-0.5 bg-primary" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">
            START YOUR DIGITAL JOURNEY WITH QYLTAVEX
          </span>
        </div>

        {/* Main Headline tailored to Qyltavex's Services */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-textDark tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          Ready to Build Your Next Web App,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
            Edutavex ERP
          </span>
          , or Scalable Platform?
        </h2>

        {/* Subtitle tailored to Services */}
        <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          From custom full-stack software and institutional ERP solutions to high-converting eCommerce stores and SEO growth, we&apos;re ready to engineer your vision into a high-performance reality.
        </p>

        {/* Direct Contact Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="https://wa.me/8801581979529?text=Hello%20Qyltavex%20Solutions%20BD,%20I%20have%20a%20project%20in%20mind"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-blue-200/90 hover:border-secondary shadow-sm hover:shadow-md text-sm sm:text-base font-semibold text-textDark transition-all duration-200 group"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-gray-500 font-normal">WhatsApp:</span>
            <span className="text-textDark group-hover:text-deepGreen font-bold transition-colors">
              01581-979529
            </span>
          </a>

          <a
            href="mailto:qyltavexsolutionsbd@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-blue-200/90 hover:border-primary shadow-sm hover:shadow-md text-sm sm:text-base font-semibold text-textDark transition-all duration-200 group"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-textDark group-hover:text-primary font-bold transition-colors">
              qyltavexsolutionsbd@gmail.com
            </span>
          </a>
        </div>

        {/* Prominent High-Impact CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/8801581979529?text=Hello%20Qyltavex%20Solutions%20BD,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full text-base sm:text-lg font-bold text-white bg-primary hover:bg-primary-hover shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Start Your Project on WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Trust Guarantees */}
        <div className="mt-14 pt-8 border-t border-blue-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
            <span>Guaranteed 24-Hour Response</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
            <span>Free Architecture Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
            <span>Strict NDA & Code Security</span>
          </div>
        </div>

      </div>
    </section>
  );
}
