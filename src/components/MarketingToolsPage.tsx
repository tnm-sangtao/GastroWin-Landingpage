/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Megaphone, 
  Sparkles, 
  Share2, 
  MessageSquare, 
  Search, 
  Zap, 
  CheckCircle2, 
  ExternalLink,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Camera,
  Clock,
  Smartphone,
  Instagram,
  Facebook,
  ShieldCheck,
  BarChart3
} from "lucide-react";

interface MarketingToolsPageProps {
  onBackToHome: () => void;
}

export default function MarketingToolsPage({ onBackToHome }: MarketingToolsPageProps) {
  const { lang } = useLanguage();
  const [activeBenefit, setActiveBenefit] = useState(0);

  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  const handleOpenBrandswin = () => {
    window.open("https://brandswin.co/", "_blank");
  };

  const benefits = [
    {
      id: "benefit-card-0",
      bgIcon: "bg-rose-50/60",
      iconColor: "text-rose-500",
      Icon: Globe,
      titleEn: "Euro-Centric Safety",
      titleVi: "An Toàn Chuẩn Châu Âu",
      titleDe: "Euro-Zentrierte Sicherheit",
      descEn: "Fully GDPR-compliant architectures ensuring secure local asset management.",
      descVi: "Kiến trúc tuân thủ hoàn toàn GDPR, đảm bảo quản lý an toàn dữ liệu địa phương.",
      descDe: "Vollständig DSGVO-konforme Architektur für sicheres lokales Datenmanagement.",
      rotationClass: "md:-rotate-[12deg] md:translate-y-8"
    },
    {
      id: "benefit-card-1",
      bgIcon: "bg-sky-50/60",
      iconColor: "text-[#38BDF8]",
      Icon: Camera,
      titleEn: "Smart Dish Photography",
      titleVi: "Studio Chụp Ảnh Món Ăn",
      titleDe: "Smarter Foto-Studio",
      descEn: "Capture dishes with your phone and let AI generate studio-grade social posts.",
      descVi: "Chụp ảnh món ăn từ điện thoại và để AI biến thành bài viết chuẩn studio.",
      descDe: "Fotografieren Sie Gerichte und lassen Sie KI professionelle Posts erstellen.",
      rotationClass: "md:-rotate-[6deg] md:translate-y-2"
    },
    {
      id: "benefit-card-2",
      bgIcon: "bg-indigo-50/60",
      iconColor: "text-[#7553FF]",
      Icon: Sparkles,
      titleEn: "100% Autopilot Engine",
      titleVi: "Vận Hành Tự Động 100%",
      titleDe: "100% Autopilot-Engine",
      descEn: "AI creates, schedules, and posts engaging marketing content every single day.",
      descVi: "AI tự động sáng tạo, lên lịch và đăng nội dung tiếp thị hấp dẫn hàng ngày.",
      descDe: "KI erstellt, terminiert und veröffentlicht täglich ansprechende Marketinginhalte.",
      rotationClass: "md:rotate-0 md:translate-y-0"
    },
    {
      id: "benefit-card-3",
      bgIcon: "bg-amber-50/60",
      iconColor: "text-amber-500",
      Icon: Clock,
      titleEn: "Save 15+ Hours Weekly",
      titleVi: "Tiết Kiệm 15+ Giờ Mỗi Tuần",
      titleDe: "Spart 15+ Std. Wöchentlich",
      descEn: "No time wasted overthinking captions or hashtags. Focus entirely on food and hospitality.",
      descVi: "Không tốn thời gian nghĩ viết bài hay hashtag. Tập trung 100% vào chất lượng món ăn.",
      descDe: "Sparen Sie Zeit für Texte und Hashtags. Konzentrieren Sie sich voll auf Ihre Küche.",
      rotationClass: "md:rotate-[6deg] md:translate-y-2"
    },
    {
      id: "benefit-card-4",
      bgIcon: "bg-emerald-50/60",
      iconColor: "text-emerald-500",
      Icon: Smartphone,
      titleEn: "Mobile-First Control",
      titleVi: "Quản Lý Dễ Dàng Trực Tiếp Trên Mobile",
      titleDe: "Mobile-First Steuerung",
      descEn: "Control campaigns, approve posts, and reply to reviews directly from your phone.",
      descVi: "Điều khiển chiến dịch, duyệt bài viết và trả lời đánh giá ngay trên điện thoại.",
      descDe: "Verwalten Sie Kampagnen, Posts und Bewertungen direkt vom Smartphone.",
      rotationClass: "md:rotate-[12deg] md:translate-y-8"
    }
  ];

  return (
    <div id="marketing-tools-page" className="bg-[#fcfcfc] text-slate-900 font-sans min-h-screen pt-24 pb-16 relative overflow-hidden selection:bg-[#7553FF]/10 selection:text-[#7553FF]">
      
      {/* Background Ambient Accents */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#7553FF]/[0.04] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#9F85FF]/[0.05] rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-[#7553FF]/[0.03] rounded-full filter blur-[110px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7553FF/[0.015]_1px,transparent_1px),linear-gradient(to_bottom,#7553FF/[0.015]_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* 1. HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
          className="pt-[120px] pb-16 md:pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            
            {/* Hero Left: Heading & Content */}
            <div className="lg:col-span-7 text-left flex flex-col items-start">

              {/* H1 Heading - DESIGN.md: 36px -> 64px, weight 600 */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-slate-950 tracking-tight leading-tight lg:leading-[60px] mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] via-[#8E70FF] to-[#9F85FF]">
                  {t("Autopilot", "Tự Động hoá", "Autopilot")}
                </span>{" "}
                {t("Store Marketing", "Marketing Nhà Hàng", "Store-Marketing")}
              </h1>

              {/* Body Text - DESIGN.md: min 16px, weight 400 */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
                {t(
                  "Effortlessly amplify your restaurant brand, publish daily AI-generated social content, gain 5-star customer reviews, and dominate local Google Maps search - powered by Brandswin.",
                  "Nâng tầm thương hiệu nhà hàng dễ dàng với nội dung mạng xã hội AI tự động hàng ngày, thu hút đánh giá 5 sao và chiếm lĩnh Google Maps địa phương - sức mạnh từ Brandswin.",
                  "Steigern Sie mühelos Ihre Restaurantmarke mit automatischen KI-Social-Media-Inhalten, gewinnen Sie 5-Sterne-Bewertungen und dominieren Sie lokales Google Maps SEO - powered by Brandswin."
                )}
              </p>

              {/* Action CTA Buttons - ALL rounded-full */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleOpenBrandswin}
                  className="w-fit inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#7553FF] to-[#9F85FF] hover:from-[#5631E0] hover:to-[#7553FF] text-white font-medium text-base shadow-[0_6px_28px_rgba(117,83,255,0.35)] hover:-translate-y-0.5 transition-all cursor-pointer group"
                >
                  <span>{t("Explore Brandswin", "Khám phá Brandswin", "Brandswin entdecken")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>

            {/* Hero Right: Marketing Tools Hero Image */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="relative w-full max-w-lg overflow-visible transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="https://i.postimg.cc/hvFXHMBb/Marketing-tools-hero.png"
                  alt="Marketing Tools Hero"
                  className="w-full h-auto object-contain scale-130 drop-shadow-[0_10px_30px_rgba(118,81,252,0.2)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </motion.section>

        {/* 2. THE 4 MARKETING PILLARS */}
        <section className="py-12 sm:py-16 md:py-20 border-t border-slate-200/60">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Section H2 - DESIGN.md: 28px -> 52px, weight 600 */}
            <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-semibold text-slate-950 tracking-tight leading-tight mb-4">
              {t("4 Pillars To Dominate Restaurant Marketing", "4 Trụ Cột Tăng Trưởng Marketing Nhà Hàng", "4 Säulen für Ihr Restaurant-Marketing")}
            </h2>
            <p className="text-base text-slate-600 font-normal leading-relaxed">
              {t(
                "Everything you need to attract, convert, and retain loyal diners automatically.",
                "Tất cả công cụ cần thiết để thu hút, chuyển đổi và giữ chân khách hàng tự động.",
                "Alles, was Sie brauchen, um automatisch neue Gäste anzuziehen und zu binden."
              )}
            </p>
          </div>

          {/* 4 Feature Cards Grid - Minimalist 4 cards in 1 row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#7553FF]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#7553FF]/10 text-[#7553FF] flex items-center justify-center mb-4 group-hover:bg-[#7553FF] group-hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                  {t("Social Auto-Publisher", "Tự động xuất bản MXH", "Social Auto-Publisher")}
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {t(
                    "Capture dish photos, generate captions with optimal hashtags, and post across Instagram, Facebook, and TikTok.",
                    "Chụp ảnh món ăn, tự động viết mô tả và đăng bài chuẩn SEO trên Instagram, Facebook & TikTok.",
                    "Fotografieren Sie Gerichte, generieren Sie Texte mit Hashtags und posten Sie auf Instagram, Facebook & TikTok."
                  )}
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#7553FF]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#7553FF]/10 text-[#7553FF] flex items-center justify-center mb-4 group-hover:bg-[#7553FF] group-hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                  {t("Smart Review Responder", "Phản hồi đánh giá AI", "KI-Bewertungs-Antwort")}
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {t(
                    "Monitor Google & TripAdvisor reviews. Craft thoughtful, brand-aligned replies in over 40 languages instantly.",
                    "Theo dõi Google & TripAdvisor. Soạn câu trả lời chu đáo, chuẩn giọng văn thương hiệu trong 40+ ngôn ngữ.",
                    "Überwachen Sie Google- & TripAdvisor-Bewertungen. Erstellen Sie Antworten in über 40 Sprachen."
                  )}
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#7553FF]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#7553FF]/10 text-[#7553FF] flex items-center justify-center mb-4 group-hover:bg-[#7553FF] group-hover:text-white transition-colors">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                  {t("Local SEO Google Maps", "SEO Google Maps địa phương", "Lokales SEO Google Maps")}
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {t(
                    "Outrank competitors when local diners search 'restaurants near me'. Optimize menu keywords and map citations.",
                    "Vượt mặt đối thủ khi khách tìm 'nhà hàng gần đây'. Tối ưu từ khóa thực đơn và định danh địa phương.",
                    "Setzen Sie sich gegen Konkurrenten durch, wenn Gäste nach 'Restaurants in der Nähe' suchen."
                  )}
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#7553FF]/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#7553FF]/10 text-[#7553FF] flex items-center justify-center mb-4 group-hover:bg-[#7553FF] group-hover:text-white transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                  {t("Omnichannel Campaigns", "Chiến dịch tiếp thị đa kênh", "Omnichannel Kampagnen")}
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {t(
                    "Launch automated promotional campaigns, seasonal discount triggers, and loyalty rewards via Email, SMS, and Social.",
                    "Triển khai khuyến mãi tự động, ưu đãi theo mùa và chăm sóc khách hàng thân thiết qua Email, SMS và MXH.",
                    "Starten Sie automatisierte Werbekampagnen, saisonale Rabatte und Treueprämien über Email, SMS & Social."
                  )}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* WHY CHOOSE US - BENEFIT ARCH SECTION */}
        <section className="px-6 py-20 sm:py-28 max-w-5xl mx-auto overflow-hidden" id="benefits-section">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-widest text-[#7553FF] block mb-3">
              {t("Why Choose Us", "Tại sao chọn chúng tôi", "Warum uns wählen")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[36px] font-extrabold tracking-tight leading-[1.08] text-zinc-950">
              {t("Tailored for store owners.", "Thiết kế riêng cho chủ cửa hàng.", "Speziell für Ladeninhaber.")}<br />
              {t("No marketing background required.", "Không cần kinh nghiệm marketing.", "Keine Marketing-Kenntnisse erforderlich.")}
            </h2>
          </div>

          {/* Arch Container */}
          <div className="relative max-w-4xl mx-auto pt-8 pb-10" id="benefits-arch-container">
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-8 relative z-10" id="benefits-grid">
              {benefits.map((b, idx) => {
                const isActive = activeBenefit === idx;
                const IconComponent = b.Icon;
                return (
                  <div
                    key={b.id}
                    id={b.id}
                    onClick={() => setActiveBenefit(idx)}
                    className={`w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-[28px] sm:rounded-[36px] bg-white flex items-center justify-center cursor-pointer transition-all duration-300 ease-out select-none border ${
                      b.rotationClass
                    } ${
                      isActive
                        ? "shadow-[0_24px_50px_rgba(117,83,255,0.2)] border-[#7553FF] scale-110 z-20 opacity-100 ring-4 ring-[#7553FF]/10"
                        : "border-zinc-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] opacity-75 hover:opacity-100 z-10 hover:scale-105"
                    }`}
                  >
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-colors ${b.bgIcon}`}>
                      <IconComponent className={`w-7 h-7 sm:w-8 sm:h-8 ${b.iconColor}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Details */}
            <div className="text-center mt-14 min-h-[96px] px-4" id="active-benefit-details">
              <motion.div
                key={activeBenefit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <h4 className="text-xl sm:text-2xl font-black text-zinc-950 font-display">
                  {t(benefits[activeBenefit].titleEn, benefits[activeBenefit].titleVi, benefits[activeBenefit].titleDe)}
                </h4>
                <p className="text-base font-normal text-zinc-500 max-w-lg mx-auto leading-relaxed">
                  {t(benefits[activeBenefit].descEn, benefits[activeBenefit].descVi, benefits[activeBenefit].descDe)}
                </p>
              </motion.div>
            </div>
          </div>

        </section>



      </div>
    </div>
  );
}
