/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

interface PricingPageProps {
  onBackToHome: () => void;
  onSelectPlan: (planName: string) => void;
}

export default function PricingPage({ onBackToHome, onSelectPlan }: PricingPageProps) {
  const { lang, t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  const handleSelect = (plan: string) => {
    onSelectPlan(plan);
  };

  return (
    <div id="pricing-page-container" className="bg-white text-slate-900 font-sans min-h-screen pt-10 sm:pt-12 pb-8 relative overflow-hidden selection:bg-[#7553FF]/10 selection:text-[#7553FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-[60px]">

        {/* Hero Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-6xl mx-auto mb-4 sm:mb-5"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[56px] font-semibold text-slate-950 tracking-tight leading-tight mb-2">
            {lang === "vi" ? "Bảng Giá Linh Hoạt Cho Mọi Quy Mô Nhà Hàng" : lang === "de" ? "Flexible Tarife für jede Küchengröße" : "Flexible Tariff Plans For Any Kitchen Size"}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed max-w-6xl mx-auto">
            {lang === "vi" ? "Lựa chọn gói đăng ký phù hợp nhất cho hoạt động kinh doanh ẩm thực của bạn để tự động hóa quy trình vận hành và bứt phá doanh số." : lang === "de" ? "Wählen Sie den passenden Tarif für Ihren Betrieb, um Abläufe zu automatisieren und den Umsatz zu steigern." : "Choose the perfect subscription tier for your culinary business to automate operations and accelerate growth."}
          </p>
        </motion.div>

        {/* Toggle Monthly / Annual with 20% discount badge */}
        <div className="flex items-center justify-center gap-3 mb-5 sm:mb-7">
          <button 
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none ${isAnnual ? 'bg-[#5B30ED]' : 'bg-slate-300'}`}
            role="switch"
            aria-checked={isAnnual}
          >
            <span className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${isAnnual ? 'translate-x-[20px]' : 'translate-x-0'}`} />
          </button>
          <span className="text-sm font-semibold text-slate-900">
            {lang === "vi" ? "Thanh toán hàng năm" : lang === "de" ? "Jährlich abgerechnet" : "Billed yearly"}
          </span>
          <span className="inline-flex items-center rounded-md bg-[#EEEAFF] px-2.5 py-1 text-xs font-semibold text-[#6D42F8]">
            {lang === "vi" ? "Tiết kiệm 20%" : lang === "de" ? "Sparen Sie 20%" : "Save 20%"}
          </span>
        </div>

        {/* 4 Pricing Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 text-left w-full max-w-full mx-auto items-stretch mb-6"
        >
          {/* Card 1: Free Plan */}
          <div className="bg-white border border-slate-200/90 rounded-[24px] p-4 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {lang === "vi" ? "Miễn phí" : lang === "de" ? "Kostenlos" : "Free"}
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight">
                  $0
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed mb-6 min-h-[52px]">
                {lang === "vi" 
                  ? "Bắt đầu số hóa nhà hàng của bạn — không cần thẻ tín dụng" 
                  : lang === "de" 
                  ? "Beginnen Sie mit der Digitalisierung Ihres Restaurants — keine Kreditkarte erforderlich" 
                  : "Start digitizing your restaurant — no credit card required"}
              </p>

              {/* Feature List */}
              <div className="space-y-3.5 pt-4 border-t border-slate-200/80 mb-8">
                {[
                  {
                    en: "300 AI Generations included",
                    vi: "Bao gồm 300 AI Generations",
                    de: "300 KI-Generierungen enthalten"
                  },
                  {
                    en: "QR Menu",
                    vi: "Thực đơn QR",
                    de: "QR-Menü"
                  },
                  {
                    en: "AI Food Images",
                    vi: "AI Food Images",
                    de: "KI-Essensbilder"
                  },
                  {
                    en: "Staff & Roles (up to 5 members)",
                    vi: "Nhân viên & Phân quyền (tối đa 5 thành viên)",
                    de: "Mitarbeiter & Rollen (bis zu 5 Mitglieder)"
                  },
                  {
                    en: "Shift Planner",
                    vi: "Shift Planner",
                    de: "Schichtplaner"
                  },
                  {
                    en: "Check-in Management",
                    vi: "Check-in Management",
                    de: "Check-in-Verwaltung"
                  },
                  {
                    en: "Leave & Flextime",
                    vi: "Nghỉ phép & Giờ linh hoạt",
                    de: "Urlaub & Gleitzeit"
                  },
                  {
                    en: "SEO Snapshot",
                    vi: "SEO Snapshot",
                    de: "SEO Snapshot"
                  },
                  {
                    en: "Brand Settings",
                    vi: "Cài đặt Thương hiệu",
                    de: "Markeneinstellungen"
                  }
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-light">
                    <Check className="w-3 h-3 text-slate-700 shrink-0 mt-0.5 stroke-[2.0]" />
                    <span className="leading-snug">
                      {lang === "vi" ? feat.vi : lang === "de" ? feat.de : feat.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleSelect(lang === "vi" ? "Miễn phí" : lang === "de" ? "Kostenlos" : "Free")}
              className="w-full border border-[#7553FF]/60 hover:border-[#7553FF] text-[#7553FF] hover:bg-[#7553FF]/5 text-sm font-medium py-2.5 px-4 rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1.5 mt-auto"
            >
              <span>{lang === "vi" ? "Bắt đầu miễn phí" : lang === "de" ? "Kostenlos starten" : "Start for free"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Basic Plan */}
          <div className="bg-white border border-slate-200/90 rounded-[24px] p-4 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {lang === "vi" ? "Cơ bản" : lang === "de" ? "Basis" : "Basic"}
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl lg:text-[40px] font-bold text-[#6D42F8] tracking-tight">
                  ${isAnnual ? "49" : "59"}
                </span>
                <span className="text-sm text-slate-600 font-normal">
                  {lang === "vi" ? "/tháng" : lang === "de" ? "/Monat" : "/month"}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed mb-6 min-h-[52px]">
                {lang === "vi" 
                  ? "Tất cả những gì bạn cần để vận hành một nhà hàng chuyên nghiệp" 
                  : lang === "de" 
                  ? "Alles, was Sie für den Betrieb eines professionellen Restaurants benötigen" 
                  : "Everything you need to run a professional restaurant"}
              </p>

              {/* Feature List */}
              <div className="space-y-3.5 pt-4 border-t border-slate-200/80 mb-8">
                {[
                  {
                    en: "600 AI Generations/month",
                    vi: "600 AI Generations/tháng",
                    de: "600 KI-Generierungen/Monat"
                  },
                  {
                    en: "Unlimited Staff & Roles",
                    vi: "Nhân viên & Phân quyền không giới hạn",
                    de: "Unbegrenzte Mitarbeiter & Rollen"
                  },
                  {
                    en: "Smart QR Menu",
                    vi: "Smart QR Menu",
                    de: "Smart QR-Menü"
                  },
                  {
                    en: "AI Menu Translator",
                    vi: "AI Dịch Thực Đơn",
                    de: "KI-Menü-Übersetzer"
                  },
                  {
                    en: "AI Food Images",
                    vi: "AI Food Images",
                    de: "KI-Essensbilder"
                  },
                  {
                    en: "Price Updater",
                    vi: "Cập nhật Giá hàng loạt",
                    de: "Preisanpassung"
                  },
                  {
                    en: "Book a Table",
                    vi: "Đặt bàn trực tuyến",
                    de: "Tisch reservieren"
                  },
                  {
                    en: "Shift Planner",
                    vi: "Shift Planner",
                    de: "Schichtplaner"
                  },
                  {
                    en: "Check-in Management",
                    vi: "Check-in Management",
                    de: "Check-in-Verwaltung"
                  },
                  {
                    en: "Leave & Flextime",
                    vi: "Nghỉ phép & Giờ linh hoạt",
                    de: "Urlaub & Gleitzeit"
                  },
                  {
                    en: "Social Content AI",
                    vi: "Social Content AI",
                    de: "Social Content KI"
                  },
                  {
                    en: "Review Hub",
                    vi: "Review Hub",
                    de: "Review Hub"
                  },
                  {
                    en: "SEO Snapshot",
                    vi: "SEO Snapshot",
                    de: "SEO Snapshot"
                  }
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-light">
                    <Check className="w-3 h-3 text-slate-700 shrink-0 mt-0.5 stroke-[2.0]" />
                    <span className="leading-snug">
                      {lang === "vi" ? feat.vi : lang === "de" ? feat.de : feat.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleSelect(lang === "vi" ? "Cơ bản" : lang === "de" ? "Basis" : "Basic")}
              className="w-full border border-[#7553FF]/60 hover:border-[#7553FF] text-[#7553FF] hover:bg-[#7553FF]/5 text-sm font-medium py-2.5 px-4 rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1.5 mt-auto"
            >
              <span>{lang === "vi" ? "Bắt đầu ngay" : lang === "de" ? "Jetzt starten" : "Get started"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Gold Plan (Highlighted Popular) */}
          <div className="bg-white border border-[#7553FF] rounded-[24px] p-4 flex flex-col justify-between drop-shadow-[0_5px_5px_rgba(118,81,252,0.2)] hover:shadow-lg transition-all duration-300 relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#DDD0FF] via-[#F6F2FF] to-white">
            <div className="absolute -top-12 -right-12 w-52 h-52 bg-[#7553FF]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex-1 flex flex-col justify-between">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {lang === "vi" ? "Vàng" : lang === "de" ? "Gold" : "Gold"}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-[#6D42F8] text-white">
                    {lang === "vi" ? "Phổ biến nhất" : lang === "de" ? "Beliebtest" : "Most Popular"}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl lg:text-[40px] font-bold text-[#6D42F8] tracking-tight">
                    ${isAnnual ? "99" : "119"}
                  </span>
                  <span className="text-sm text-slate-600 font-normal">
                    {lang === "vi" ? "/tháng" : lang === "de" ? "/Monat" : "/month"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed mb-6 min-h-[52px]">
                  {lang === "vi" 
                    ? "Tự động hóa quy trình vận hành và bứt phá tăng trưởng nhanh hơn" 
                    : lang === "de" 
                    ? "Automatisieren Sie Ihren Betrieb und wachsen Sie schneller" 
                    : "Automate your operations and grow faster"}
                </p>

                {/* Feature List */}
                <div className="space-y-3.5 pt-4 border-t border-[#7553FF]/20 mb-8">
                  {[
                    {
                      en: "1,000 AI Generations/month",
                      vi: "1.000 AI Generations/tháng",
                      de: "1.000 KI-Generierungen/Monat"
                    },
                    {
                      en: "Everything in Basic, plus:",
                      vi: "Tất cả trong Cơ bản, cộng thêm:",
                      de: "Alles aus Basis, plus:"
                    },
                    {
                      en: "AI Shift Auto-Resolve",
                      vi: "AI Shift Auto-Resolve",
                      de: "KI-Schicht-Auto-Resolve"
                    },
                    {
                      en: "GPS Branch Lock Check-in",
                      vi: "Chấm công GPS Branch Lock",
                      de: "GPS Branch Lock Check-in"
                    },
                    {
                      en: "Payroll",
                      vi: "Tính Lương tự động",
                      de: "Lohnabrechnung"
                    },
                    {
                      en: "AI Menu Translator (40+ languages)",
                      vi: "AI Dịch Thực Đơn (40+ ngôn ngữ)",
                      de: "KI-Menü-Übersetzer (40+ Sprachen)"
                    },
                    {
                      en: "Allergen Analyzer",
                      vi: "Allergen Analyzer",
                      de: "Allergen-Analysator"
                    },
                    {
                      en: "Social Content Scheduler",
                      vi: "Lên lịch Social Content",
                      de: "Social Content Scheduler"
                    },
                    {
                      en: "Review Hub with Sentiment Filter",
                      vi: "Review Hub với Lọc Cảm xúc",
                      de: "Review Hub mit Sentiment-Filter"
                    },
                    {
                      en: "SEO Google Maps Tracker",
                      vi: "SEO Google Maps Tracker",
                      de: "SEO Google Maps-Tracker"
                    }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-light">
                      <Check className="w-3 h-3 text-slate-700 shrink-0 mt-0.5 stroke-[2.0]" />
                      <span className="leading-snug">
                        {lang === "vi" ? feat.vi : lang === "de" ? feat.de : feat.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleSelect(lang === "vi" ? "Vàng" : lang === "de" ? "Gold" : "Gold")}
                className="w-full bg-[#6D42F8] hover:bg-[#5B30ED] text-white text-sm font-medium py-2.5 px-4 rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1.5 mt-auto shadow-sm"
              >
                <span>{lang === "vi" ? "Bắt đầu ngay" : lang === "de" ? "Jetzt starten" : "Get started"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 4: Diamond Plan */}
          <div className="bg-white border border-slate-200/90 rounded-[24px] p-4 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300">
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {lang === "vi" ? "Kim cương" : lang === "de" ? "Diamant" : "Diamond"}
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl lg:text-[40px] font-bold text-[#6D42F8] tracking-tight">
                  ${isAnnual ? "199" : "249"}
                </span>
                <span className="text-sm text-slate-600 font-normal">
                  {lang === "vi" ? "/tháng" : lang === "de" ? "/Monat" : "/month"}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed mb-6 min-h-[52px]">
                {lang === "vi" 
                  ? "Bộ giải pháp toàn diện cho chuỗi nhà hàng nhiều cơ sở" 
                  : lang === "de" 
                  ? "Die komplette Suite für Restaurantketten mit mehreren Standorten" 
                  : "The complete suite for multi-location restaurant chains"}
              </p>

              {/* Feature List */}
              <div className="space-y-3.5 pt-4 border-t border-slate-200/80 mb-8">
                {[
                  {
                    en: "3,000 AI Generations/month",
                    vi: "3.000 AI Generations/tháng",
                    de: "3.000 KI-Generierungen/Monat"
                  },
                  {
                    en: "Everything in Gold, plus:",
                    vi: "Tất cả trong Vàng, cộng thêm:",
                    de: "Alles aus Gold, plus:"
                  },
                  {
                    en: "DATEV Export",
                    vi: "Xuất file DATEV",
                    de: "DATEV-Export"
                  },
                  {
                    en: "Overtime Protection",
                    vi: "Bảo vệ Tăng ca (ArbZG)",
                    de: "Überstundenschutz (ArbZG)"
                  },
                  {
                    en: "Multi-branch Price Sync",
                    vi: "Đồng bộ Giá Chuỗi Nhà hàng",
                    de: "Multi-Filial-Preissynchronisation"
                  },
                  {
                    en: "Campaign Scheduling",
                    vi: "Lên chiến dịch Marketing",
                    de: "Kampagnenplanung"
                  },
                  {
                    en: "Sentiment Report",
                    vi: "Báo cáo Sức khỏe Thương hiệu",
                    de: "Sentiment-Bericht"
                  },
                  {
                    en: "VIP 24/7 Support",
                    vi: "Hỗ trợ VIP 24/7",
                    de: "VIP 24/7 Support"
                  }
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-light">
                    <Check className="w-3 h-3 text-slate-700 shrink-0 mt-0.5 stroke-[2.0]" />
                    <span className="leading-snug">
                      {lang === "vi" ? feat.vi : lang === "de" ? feat.de : feat.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleSelect(lang === "vi" ? "Kim cương" : lang === "de" ? "Diamant" : "Diamond")}
              className="w-full bg-slate-950 hover:bg-slate-800 text-white text-sm font-medium py-2.5 px-4 rounded-xl cursor-pointer transition-all flex items-center justify-center gap-1.5 mt-auto shadow-sm"
            >
              <span>{lang === "vi" ? "Bắt đầu ngay" : lang === "de" ? "Jetzt starten" : "Get started"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Guarantee & Trust Banner */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500 font-light mt-8 sm:mt-10 text-center">
          <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#7553FF] shrink-0" />
          <span>
            {lang === "vi" ? "Dùng thử miễn phí 14 ngày cho tất cả gói trả phí" : lang === "de" ? "14 Tage kostenlos testen für alle kostenpflichtigen Tarife" : "14-day free trial on all paid plans"}
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span>
            {lang === "vi" ? "Hủy bất kỳ lúc nào" : lang === "de" ? "Jederzeit kündbar" : "Cancel anytime"}
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span>
            {lang === "vi" ? "Cài đặt an toàn & dễ dàng" : lang === "de" ? "Sichere & einfache Einrichtung" : "Secure & easy setup"}
          </span>
        </div>
      </div>
    </div>
  );
}

