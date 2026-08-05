/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Facebook, Instagram, ChevronDown } from "lucide-react";
import { useLanguage, LANGUAGES } from "../context/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  onNavigateToPricing?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToAbout?: () => void;
  onOpenPrivacyPolicy?: () => void;
  onOpenRefundPolicy?: () => void;
  onOpenTermsOfService?: () => void;
}

function TikTokIcon({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743 2.895 2.895 0 0 1 2.312-4.634c.32 0 .633.053.928.156V9.43a6.33 6.33 0 0 0-1-.078 6.34 6.34 0 1 0 6.34 6.34V8.291a8.216 8.216 0 0 0 4.836 1.841V6.686z" />
    </svg>
  );
}

export default function Footer({
  onNavigateToPricing,
  onNavigateToContact,
  onNavigateToAbout,
  onOpenPrivacyPolicy,
  onOpenRefundPolicy,
  onOpenTermsOfService
}: FooterProps) {
  const { lang, setLang } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const translations = {
    tagline: {
      en: "Next-generation F&B operating system.",
      vi: "Hệ điều hành F&B thế hệ mới.",
      de: "F&B-Betriebssystem der nächsten Generation."
    },
    desc: {
      en: "Integrate your entire restaurant workflow into a clean, fast control grid.",
      vi: "Tích hợp toàn bộ quy trình làm việc của nhà hàng vào một lưới điều khiển tinh gọn và nhanh chóng.",
      de: "Integrieren Sie Ihren gesamten Restaurant-Workflow in ein sauberes, schnelles Steuerungsnetz."
    },
    rights: {
      en: "© 2026 GastroWin. All rights reserved.",
      vi: "© 2026 GastroWin. Bảo lưu mọi quyền.",
      de: "© 2026 GastroWin. Alle Rechte vorbehalten."
    }
  };

  return (
    <footer style={{ background: "linear-gradient(rgba(87, 74, 219, 0.08) 0%, transparent 40%), #1a1830" }} className="border-t border-white/10 pt-12 pb-28 lg:py-12 text-left text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
        
        {/* Left Block */}
        <div className="flex flex-col gap-4 max-w-md">
          <h3 className="mb-0">
            <img 
              src="https://i.postimg.cc/QdghsT9Z/Gastrowinlogowhite.png" 
              alt="GastroWin" 
              className="h-8 w-auto object-contain brightness-0 invert" 
              referrerPolicy="no-referrer"
            />
          </h3>
          
          <p className="text-[16px] font-normal text-slate-200 leading-snug">
            {translations.tagline[lang] || translations.tagline.en}
          </p>
          <p className="text-[14px] font-light text-slate-200 leading-relaxed">
            {translations.desc[lang] || translations.desc.en}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-10 h-10 border border-white/20 hover:border-[#9F85FF]/50 rounded-full flex items-center justify-center text-slate-200 hover:text-[#9F85FF] transition-all duration-200 cursor-pointer"
            >
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-10 h-10 border border-white/20 hover:border-[#9F85FF]/50 rounded-full flex items-center justify-center text-slate-200 hover:text-[#9F85FF] transition-all duration-200 cursor-pointer"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a 
              href="#" 
              aria-label="TikTok"
              className="w-10 h-10 border border-white/20 hover:border-[#9F85FF]/50 rounded-full flex items-center justify-center text-slate-200 hover:text-[#9F85FF] transition-all duration-200 cursor-pointer"
            >
              <TikTokIcon className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Right Block: Columns */}
        <div className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-16 lg:gap-24 self-start">
          
          {/* Company Column */}
          <div className="flex flex-col gap-3.5 text-left">
            <h4 className="text-[16px] font-semibold text-white tracking-wide">
              {lang === "vi" ? "Công ty" : lang === "de" ? "Unternehmen" : "Company"}
            </h4>
            <div className="flex flex-col gap-2.5">
              <button 
                onClick={onNavigateToAbout}
                className="text-[14px] font-light text-slate-200 hover:text-[#FFFFFF] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left outline-none whitespace-nowrap"
              >
                {lang === "vi" ? "Về chúng tôi" : lang === "de" ? "Über uns" : "About Us"}
              </button>
              <button 
                onClick={onNavigateToContact}
                className="text-[14px] font-light text-slate-200 hover:text-[#FFFFFF] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left outline-none whitespace-nowrap"
              >
                {lang === "vi" ? "Liên hệ" : lang === "de" ? "Kontakt" : "Contact Us"}
              </button>
            </div>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-3.5 text-left">
            <h4 className="text-[16px] font-semibold text-white tracking-wide">
              {lang === "vi" ? "Pháp lý" : lang === "de" ? "Rechtliches" : "Legal"}
            </h4>
            <div className="flex flex-col gap-2.5">
              <button 
                onClick={onNavigateToPricing}
                className="text-[14px] font-light text-slate-200 hover:text-[#FFFFFF] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left outline-none whitespace-nowrap"
              >
                {lang === "vi" ? "Bảng giá" : lang === "de" ? "Preise" : "Pricing"}
              </button>
              <button 
                onClick={onOpenPrivacyPolicy}
                className="text-[14px] font-light text-slate-200 hover:text-[#FFFFFF] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left outline-none whitespace-nowrap"
              >
                {lang === "vi" ? "Chính sách bảo mật" : lang === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
              </button>
              <button 
                onClick={onOpenRefundPolicy}
                className="text-[14px] font-light text-slate-200 hover:text-[#FFFFFF] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left outline-none whitespace-nowrap"
              >
                {lang === "vi" ? "Chính sách hoàn tiền" : lang === "de" ? "Rückerstattungsrichtlinie" : "Refund Policy"}
              </button>
              <button 
                onClick={onOpenTermsOfService}
                className="text-[14px] font-light text-slate-200 hover:text-[#FFFFFF] hover:translate-x-1 transition-all duration-200 cursor-pointer text-left outline-none whitespace-nowrap"
              >
                {lang === "vi" ? "Điều khoản dịch vụ" : lang === "de" ? "Nutzungsbedingungen" : "Terms of Service"}
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Separator & Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[14px] text-slate-400 font-light">
          {translations.rights[lang] || translations.rights.en}
        </span>

        {/* Language Selector for Footer */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1.5 text-[14px] font-medium text-slate-50 hover:text-white transition-all duration-200 cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 rounded-xl shadow-xs outline-none"
          >
            <span className="text-[16px] leading-none">{LANGUAGES.find(l => l.code === lang)?.flag}</span>
            <span className="leading-none">{LANGUAGES.find(l => l.code === lang)?.name}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#9F85FF]" : "text-slate-100"}`} />
          </button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.12 }}
                className="absolute right-0 bottom-full mb-2 w-40 bg-[#221f3b] border border-white/10 rounded-2xl shadow-2xl p-2 z-50 text-left"
              >
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-[14px] font-medium transition-all cursor-pointer flex items-center gap-2 hover:bg-white/5 ${lang === l.code ? "text-[#9F85FF] bg-white/5" : "text-slate-100"}`}
                  >
                    <span className="text-[16px]">{l.flag}</span>
                    <span>{l.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}
