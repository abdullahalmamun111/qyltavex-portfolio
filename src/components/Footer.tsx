"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-textDark text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="#home" className="inline-block mb-5 group">
              <div className="bg-white px-4 py-2.5 rounded-2xl shadow-sm inline-flex items-center group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.png"
                  alt="Qyltavex Solutions BD"
                  width={220}
                  height={50}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              Engineering modern web applications, flagship Edutavex educational management systems, high-growth eCommerce, and enterprise digital solutions.
            </p>

            {/* Social Icons with SVG */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-primary flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-accent flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="mailto:qyltavexsolutionsbd@gmail.com"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-secondary flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="#home" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-accent transition-colors">Our Process</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-accent transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Solutions & ERP
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-secondary font-medium transition-colors">
                  Edutavex Education ERP
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  Shopify & Headless Ecommerce
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  Digital Marketing & SEO
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  Cloud Infrastructure & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Back to top */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
                Back to Top
              </h4>
              <p className="text-xs text-gray-400 mb-4">Smoothly scroll back to the top of the page</p>
            </div>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-2xl bg-gray-800 hover:bg-primary flex items-center justify-center text-white shadow-md hover:shadow-primary/30 transition-all duration-200 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Qyltavex Solutions BD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#home" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#home" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="#home" className="hover:text-gray-300 transition-colors">Security Overview</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
