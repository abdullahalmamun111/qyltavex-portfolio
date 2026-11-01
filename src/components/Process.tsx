"use client";

import { Compass, Palette, Code, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Step {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_STEPS: Step[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    duration: "Week 1",
    description:
      "We unpack your business requirements, define user personas, audit current architectures, and formulate an airtight project roadmap.",
    deliverables: ["Product Specification", "Technical Architecture Plan", "Milestone Roadmap"],
    icon: Compass,
  },
  {
    step: "02",
    title: "UI/UX & Architecture Design",
    duration: "Week 2 - 3",
    description:
      "Transforming functional specs into intuitive wireframes, responsive interactive prototypes, and production-ready Figma design tokens.",
    deliverables: ["High-Fidelity UI Mockups", "Interactive Prototype", "Design System Tokens"],
    icon: Palette,
  },
  {
    step: "03",
    title: "Agile Development & QA",
    duration: "Week 3 - 6",
    description:
      "Clean, component-driven engineering in Next.js, Node.js, and Tailwind CSS accompanied by rigorous automated testing and security audits.",
    deliverables: ["Clean Modular Codebase", "Automated Unit & E2E Tests", "Staging Environment Previews"],
    icon: Code,
  },
  {
    step: "04",
    title: "Deployment & Growth Support",
    duration: "Week 7+",
    description:
      "Zero-downtime production deployment, CDN caching, performance tuning, and continuous post-launch support and telemetry monitoring.",
    deliverables: ["Production Cloud Launch", "Documentation & Training", "SLA & 24/7 Monitoring"],
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-softBg border border-blue-200 text-xs font-bold text-primary uppercase tracking-wider mb-3">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textDark tracking-tight mb-4">
            A Proven, Predictable{" "}
            <span className="text-primary">Engineering Process</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            From initial concept to mission-critical production deployment, our transparent workflow guarantees delivery on time, on spec, and on budget.
          </p>
        </div>

        {/* 4 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 hover:border-primary/50 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-blue-100 group-hover:text-primary transition-colors">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-softBg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-gray-100 text-[11px] font-bold text-gray-500 mb-2">
                      {step.duration}
                    </span>
                    <h3 className="text-lg font-bold text-textDark tracking-tight group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                    Key Deliverables
                  </p>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Bottom CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-primary to-accent text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Have a project or ERP requirement in mind?</h3>
            <p className="text-blue-100 text-sm mt-1">Let’s conduct a free 30-minute discovery call to map out your architecture.</p>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-primary font-bold text-sm hover:bg-blue-50 transition-colors shrink-0 shadow-md"
          >
            <span>Book Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
