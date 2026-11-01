"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-softBg overflow-hidden"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A6FDA0a_1px,transparent_1px),linear-gradient(to_bottom,#0A6FDA0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-sm text-xs font-semibold text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span>Next-Gen Full-Stack & ERP Engineering</span>
              <Sparkles className="w-3.5 h-3.5 text-accent" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-textDark leading-[1.12] mb-6">
              Engineering Scalable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Digital Systems
              </span>{" "}
              & Smart ERPs
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
              From enterprise full-stack web applications and our flagship{" "}
              <strong className="text-textDark font-semibold">Edutavex Education ERP</strong> to high-converting eCommerce stores and data-driven marketing, we turn ambitious concepts into market leaders.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-lg hover:shadow-primary/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-deepGreen bg-white border-2 border-secondary/30 hover:border-secondary hover:bg-secondary/5 transition-all duration-200"
              >
                <span>Schedule a Consultation</span>
              </Link>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-blue-100/80 w-full text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span>99.9% Production Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Zap className="w-4 h-4 text-accent shrink-0" />
                <span>Rapid Turnaround</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual & Floating Metric Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Professional Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[420px] bg-gray-100 overflow-hidden" style={{ position: "relative" }}>
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                    alt="Digital Technology Collaboration & Software Engineering"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out block"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider font-semibold text-accent mb-0.5">
                      Case Spotlight
                    </p>
                    <p className="text-sm font-bold">
                      Edutavex Cloud Platform v3.4 Architecture
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right - Rating */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-50 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-extrabold text-base text-textDark">
                    4.9 / 5.0
                  </div>
                  <p className="text-xs text-gray-500 font-medium">Over 100+ Enterprise Reviews</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left - Growth Metric */}
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-50 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-secondary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold text-base text-textDark">+150 Projects</p>
                  <p className="text-xs text-gray-500 font-medium">Delivered with Zero Downtime</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
