"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Users, Rocket, Clock, ShieldCheck, ArrowRight } from "lucide-react";

const STATS = [
  { value: "150+", label: "Completed Deployments", icon: Rocket },
  { value: "99.8%", label: "Client Satisfaction Rate", icon: Award },
  { value: "10+", label: "Years Combined Experience", icon: Clock },
  { value: "100%", label: "Secure & Compliant Architecture", icon: ShieldCheck },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-softBg relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative w-full h-[380px] sm:h-[460px] bg-gray-100 overflow-hidden" style={{ position: "relative" }}>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                    alt="Qyltavex Team of Developers and Engineers"
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-textDark/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-textDark">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Our Engineering Creed
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      &quot;Zero-compromise code quality, high performance, and human-centric engineering.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text & Content Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-blue-200 text-xs font-bold text-primary uppercase tracking-wider mb-4 shadow-sm">
              About Qyltavex
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textDark tracking-tight leading-tight mb-6">
              Empowering Visionaries with{" "}
              <span className="text-primary">Reliable Digital Craftsmanship</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Founded on the belief that digital architecture should be both artful and bulletproof, Qyltavex specializes in enterprise-grade software development. From high-throughput web applications to our dedicated <strong className="text-textDark font-semibold">Edutavex Education ERP</strong>, we build scalable software systems that accelerate real-world results.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
              We bridge the gap between design precision and cloud engineering. Whether partnering with fast-scaling startups or modernizing institutional operations, our multidisciplinary team delivers bespoke solutions with zero technical debt.
            </p>

            {/* Core Values / Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-blue-50 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-textDark">Agile Execution</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Bi-weekly sprints, clear milestones, and complete transparency.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-blue-50 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-textDark">Scalable Cloud First</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Engineered to scale effortlessly as your active user base grows.</p>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-blue-100/80">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-primary mb-1">
                      <Icon className="w-4 h-4" />
                      <span className="text-2xl font-black text-textDark tracking-tight">{stat.value}</span>
                    </div>
                    <span className="text-xs font-medium text-gray-500 leading-snug">{stat.label}</span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
