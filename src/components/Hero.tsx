/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Globe, Shield, Star, ArrowRight, Play, Eye } from "lucide-react";

interface HeroProps {
  onStartTranslating: () => void;
}

export default function Hero({ onStartTranslating }: HeroProps) {
  const [currentLang, setCurrentLang] = useState<"en" | "de" | "vi">("en");
  const [isScanning, setIsScanning] = useState(true);

  // Auto-switch languages in the animated mock menu illustration to capture attention
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLang((prev) => {
        if (prev === "en") return "de";
        if (prev === "de") return "vi";
        return "en";
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const foodItems = {
    en: [
      { name: "Prime Ribeye Steak", desc: "Aged 28 days, served with herbed butter and wild frites." },
      { name: "Atlantic Salmon", desc: "Pan-roasted with asparagus spears and Meyer lemon glaze." },
      { name: "Chocolate Soufflé", desc: "Warm molten center, dusted with organic vanilla powder." }
    ],
    de: [
      { name: "Premium Ribeye-Steak", desc: "28 Tage gereift, serviert mit Kräuterbutter und wilden Pommes." },
      { name: "Atlantischer Lachs", desc: "In der Pfanne gebraten, mit Spargelstangen und Meyer-Zitronenglasur." },
      { name: "Schokoladensoufflé", desc: "Warmer, flüssiger Kern, bestäubt mit Bio-Vanillepulver." }
    ],
    vi: [
      { name: "Thịt Thăn Bò Mỹ Cao Cấp", desc: "Ủ chín 28 ngày, dùng kèm bơ thảo mộc và khoai tây chiên giòn." },
      { name: "Cá Hồi Đại Tây Dương", desc: "Áp chảo dùng kèm măng tây và sốt chanh Meyer đậm đà." },
      { name: "Bánh Soufflé Sô-cô-la", desc: "Lòng bánh nóng chảy ngọt ngào, phủ một lớp bột vani hữu cơ." }
    ]
  };

  const flags = {
    en: "🇺🇸",
    de: "🇩🇪",
    vi: "🇻🇳"
  };

  const menuTitles = {
    en: "L'Etoile Dining Menu",
    de: "Gourmet-Menü L'Etoile",
    vi: "Thực Đơn Nhà Hàng L'Etoile"
  };

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="hero"
      className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 bg-white bg-grid-pattern overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/10 w-[400px] h-[400px] bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Copywriting & CTAs */}
          <div id="hero-text-block" className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Headline */}
            <h1 
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-slate-900 tracking-tight leading-none lg:leading-[64px] mb-6"
            >
              Translate Your <br className="hidden sm:inline" />
              Restaurant Menu with <span className="text-brand relative inline-block">
                AI Precision
                <span className="absolute left-0 bottom-1.5 w-full h-2 bg-brand/10 -z-10 rounded-full" />
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              id="hero-subtitle"
              className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl mb-8"
            >
              Scan and translate any PDF, image, or typed menu into 40+ languages in 30 seconds. 
              Our culinary-aware AI understands recipes, food culture, and preserves your 
              original typography and layout geometry.
            </p>

            {/* Action Buttons */}
            <div id="hero-actions" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="btn-hero-primary"
                onClick={onStartTranslating}
                className="bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand/25 hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                Translate Menu Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                id="btn-hero-secondary"
                onClick={onStartTranslating}
                className="bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-7 py-4 rounded-full font-bold hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <Play className="w-4 h-4 text-slate-500 fill-slate-500" />
                See How It Works
              </button>
            </div>

            {/* Social Proof / Badges */}
            <div id="hero-social-proof" className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
                ].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="Restaurant Manager Face"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
                  ))}
                  <span className="text-sm font-bold text-slate-900 ml-1">4.9/5</span>
                </div>
                <p className="text-xs font-semibold text-slate-500">
                  Trusted by 12,000+ Michelin stars, bistros, and local eateries globally.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Right: Clean Dribbble-style Isometric AI Scan Illustration */}
          <div id="hero-visual-block" className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Floating Language Tags */}
              <div className={`absolute -left-6 top-8 z-20 bg-white border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 transition-all duration-300 ${currentLang === "de" ? "border-brand ring-2 ring-brand/15 scale-105" : "border-slate-100"}`}>
                <span className="text-lg">🇩🇪</span>
                <span className="text-xs font-bold text-slate-700">Deutsch (DE)</span>
                {currentLang === "de" && <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />}
              </div>

              <div className={`absolute -right-4 top-24 z-20 bg-white border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 transition-all duration-300 ${currentLang === "vi" ? "border-brand ring-2 ring-brand/15 scale-105" : "border-slate-100"}`}>
                <span className="text-lg">🇻🇳</span>
                <span className="text-xs font-bold text-slate-700">Tiếng Việt (VI)</span>
                {currentLang === "vi" && <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />}
              </div>

              <div className={`absolute -left-4 bottom-12 z-20 bg-white border rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 transition-all duration-300 ${currentLang === "en" ? "border-brand ring-2 ring-brand/15 scale-105" : "border-slate-100"}`}>
                <span className="text-lg">🇺🇸</span>
                <span className="text-xs font-bold text-slate-700">English (EN)</span>
                {currentLang === "en" && <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />}
              </div>

              {/* Holographic scanner laser container */}
              <div className="relative bg-slate-950/5 p-6 rounded-3xl border border-slate-100 backdrop-blur-3xl shadow-2xl overflow-hidden glow-purple-lg">
                
                {/* Simulated Menu Document */}
                <div className="bg-[#FAF9F5] border-2 border-[#D9CDB8] rounded-2xl p-6 text-[#2D2A26] relative overflow-hidden transition-all duration-500 shadow-md">
                  
                  {/* Gold Filigree Corner Ornaments */}
                  <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D9CDB8]/60" />
                  <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D9CDB8]/60" />
                  <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D9CDB8]/60" />
                  <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D9CDB8]/60" />

                  {/* Header */}
                  <div className="text-center mb-6 border-b border-[#E9DFD0] pb-4">
                    <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-[#8C7A5E] block mb-1">Est. 1994</span>
                    <h3 className="text-base font-extrabold tracking-wide uppercase transition-all duration-300 min-h-[24px]">
                      {menuTitles[currentLang]}
                    </h3>
                    <div className="w-8 h-px bg-[#8C7A5E] mx-auto mt-2" />
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-5">
                    <AnimatePresence mode="wait">
                      {foodItems[currentLang].map((item, index) => (
                        <motion.div
                          key={index + "-" + currentLang}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex flex-col gap-1"
                        >
                          <div className="flex justify-between items-baseline gap-2">
                            <span className="text-xs font-bold uppercase tracking-wide text-slate-800 transition-colors duration-300">
                              {item.name}
                            </span>
                            <span className="text-xs font-bold text-[#8C7A5E] font-mono whitespace-nowrap">$12.00</span>
                          </div>
                          <p className="text-[10px] text-slate-500 italic font-medium leading-relaxed transition-colors duration-300">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Footer Stamp */}
                  <div className="mt-6 pt-4 border-t border-[#E9DFD0] text-center">
                    <span className="text-[8px] tracking-wider text-slate-400 font-semibold uppercase">
                      Allergens & Dietary Options Available Upon Request
                    </span>
                  </div>

                  {/* Red Wine Stain graphic detail */}
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full border-4 border-red-900/5 mix-blend-multiply pointer-events-none" />

                  {/* AI Scanning Glowing Laser Beam overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden rounded-2xl z-10">
                    <motion.div
                      animate={{
                        top: ["0%", "100%", "0%"]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand/60 to-transparent shadow-[0_0_15px_3px_#7553FF] z-10"
                    />
                    
                    <motion.div
                      animate={{
                        top: ["0%", "100%", "0%"]
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent to-brand/5 pointer-events-none z-10 -translate-y-24"
                    />
                  </div>

                </div>

                {/* Status indicator bar in the illustration wrapper */}
                <div className="mt-4 flex items-center justify-between px-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                    <span className="font-bold text-slate-700">AI Translator active</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/80 border border-slate-100 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-slate-500 shadow-sm">
                    Target: <span className="text-brand font-extrabold uppercase">{currentLang === "en" ? "All Languages" : currentLang} {flags[currentLang]}</span>
                  </div>
                </div>

              </div>

              {/* Decorative behind elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-slate-100 border border-slate-200 rounded-3xl -z-10 translate-x-4 translate-y-4 shadow-sm" />
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
