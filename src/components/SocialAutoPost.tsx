/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Sparkles, 
  Calendar, 
  TrendingUp, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  Check, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  Clock, 
  ChevronRight, 
  FileText,
  MousePointer,
  RotateCcw,
  Zap
} from "lucide-react";

interface SocialAutoPostProps {
  onBackToHome: () => void;
}

export default function SocialAutoPost({ onBackToHome }: SocialAutoPostProps) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  // Let's keep track of an animation loop stage for the Hero 3D Graphic sequence
  const [animationStage, setAnimationStage] = useState<"spark" | "text" | "duplicate" | "fly" | "reset">("spark");

  useEffect(() => {
    const sequence = [
      { stage: "spark", duration: 1800 },
      { stage: "text", duration: 2500 },
      { stage: "duplicate", duration: 1800 },
      { stage: "fly", duration: 3000 },
      { stage: "reset", duration: 1200 }
    ];

    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    const runNext = () => {
      const current = sequence[currentIndex];
      setAnimationStage(current.stage as any);
      
      timer = setTimeout(() => {
        currentIndex = (currentIndex + 1) % sequence.length;
        runNext();
      }, current.duration);
    };

    runNext();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="social-auto-post-page" className="bg-white text-slate-900 font-sans min-h-screen pt-24 pb-16 relative overflow-hidden selection:bg-[#7553FF]/10 selection:text-[#7553FF]">
      
      {/* Subtle Pastel Purple Accent Shapes in background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#7553FF]/[0.03] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#7553FF]/[0.04] rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-purple-500/[0.02] rounded-full filter blur-[110px] pointer-events-none" />

      {/* Grid Pattern Overlay for High-End Design Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7553FF/[0.015]_1px,transparent_1px),linear-gradient(to_bottom,#7553FF/[0.015]_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left: Catchy, bold typography and CTA */}
          <div className="lg:col-span-6 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[56px] mb-6">
              {t("From kitchen to", "Từ gian bếp đến", "Von der Küche in den")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] to-purple-800">
                {t("Instagram feed", "bảng tin Instagram", "Instagram Feed")}
              </span> {t("instantly.", "tức thì.", "sofort.")}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-8 max-w-lg">
              {t(
                "Empower your restaurant brand with automated, beautiful posts. Our intelligent auto-publisher captures dish creations, writes savory descriptions, and triggers scheduled delivery to your Instagram and Facebook audiences instantly.",
                "Thúc đẩy thương hiệu nhà hàng của bạn bằng các bài viết tự động và đẹp mắt. Hệ thống tự động xuất bản thông minh của chúng tôi ghi lại các sáng tạo món ăn, viết các mô tả hấp dẫn và lên lịch đăng bài cho đối tượng khách hàng trên Instagram và Facebook của bạn ngay lập tức.",
                "Stärken Sie Ihre Restaurantmarke mit automatisierten, ansprechenden Beiträgen. Unser intelligenter Auto-Publisher erfasst Kreationen, schreibt Beschreibungen und plant Beiträge für Instagram und Facebook."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("showcase-section");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                {t("Start Auto-Posting", "Bắt đầu đăng bài tự động", "Auto-Posting starten")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro value proposition points */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs font-light text-slate-900">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#7553FF]" /> {t("100% Free Trial", "Dùng thử 100% miễn phí", "100% Kostenlose Testversion")}
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#7553FF]" /> {t("Instagram & Facebook Sync", "Đồng bộ Instagram & Facebook", "Instagram & Facebook Sync")}
              </span>
            </div>
          </div>

          {/* Hero Right: Spectacular high-fidelity visual preview frame */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-10 min-h-[460px] md:min-h-[500px]">
            
          

            {/* Elegant Hero Image Frame */}
            <div className="relative w-full max-w-2xl lg:max-w-[760px] xl:max-w-[820px]">
              <img 
                src="https://i.postimg.cc/4dzK3rLD/marketing.png" 
                alt="Professional food preparation and social feed"
                className="w-full h-auto object-contain scale-110 transition-all duration-300 hover:scale-115 drop-shadow-[0_10px_30px_rgba(118,81,252,0.15)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 bg-slate-50/50 border-y border-slate-100 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Designed for visual growth & foodies engagement", "Thiết kế cho sự tăng trưởng hình ảnh & tương tác thực khách", "Entwickelt für visuelles Wachstum und Kundenbindung")}
            </h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              {t(
                "We handle the complex formatting, smart scheduling, and caption writing so your kitchen and marketing staff can focus on cooking delicious food.",
                "Chúng tôi xử lý việc định dạng phức tạp, lên lịch thông minh và viết chú thích để nhân viên bếp và tiếp thị của bạn có thể tập trung nấu những món ăn ngon lành.",
                "Wir kümmern uns um Formatierung, Planung und Bildunterschriften, damit sich Ihr Team ganz auf köstliche Gerichte konzentrieren kann."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature Card 1: AI Sparkles (AI Content Generation) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("AI Content Generation", "Tự động tạo nội dung bằng AI", "KI-Inhaltsgenerierung")}
              </h3>
              <p className="text-base text-slate-500 font-light leading-relaxed">
                {t(
                  "No more writer's block. Our customized LLM creates highly engaging, brand-specific restaurant copy, emojis, and local hashtags designed to make mouth-watering dishes pop.",
                  "Không còn bí ý tưởng. Mô hình LLM tùy chỉnh của chúng tôi tạo ra các bài viết mang đậm bản sắc thương hiệu, đi kèm emoji và hashtag địa phương giúp các món ăn ngon lành của bạn nổi bật.",
                  "Keine Schreibblockaden mehr. Unser maßgeschneidertes LLM erstellt ansprechende, markenspezifische Restauranttexte, Emojis und lokale Hashtags."
                )}
              </p>
            </div>

            {/* Feature Card 2: Calendar with a checkmark (Auto-schedule Posts) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("Auto-Schedule Posts", "Tự động lên lịch đăng bài", "Beiträge automatisch planen")}
              </h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                {t(
                  "Plan ahead without manual worry. Drop your photo, select your target hours, and watch our calendar pipeline deliver your marketing directly to Instagram, Facebook, and Threads.",
                  "Lập kế hoạch trước không cần lo lắng thủ công. Chỉ cần tải ảnh lên, chọn khung giờ mục tiêu và hệ thống lịch trình sẽ phân phối chiến dịch của bạn trực tiếp lên Instagram, Facebook và Threads.",
                  "Planen Sie im Voraus ohne manuellen Aufwand. Laden Sie Ihr Foto hoch, wählen Sie die Zielzeiten und sehen Sie zu, wie unser Kalender Ihr Marketing direkt auf Instagram, Facebook und Threads veröffentlicht."
                )}
              </p>
            </div>

            {/* Feature Card 3: Line chart (Track Performance) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("Track Engagement & Performance", "Theo dõi tương tác & hiệu suất", "Interaktion & Leistung verfolgen")}
              </h3>
              <p className="text-base text-slate-500 font-light leading-relaxed">
                {t(
                  "Know what drives bookings. Deep analytics track click-through rates, profile views, and menu opens directly linked to your direct reservation system.",
                  "Hiểu rõ điều gì thúc đẩy lượt đặt bàn. Phân tích chuyên sâu theo dõi tỷ lệ nhấp chuột, lượt xem hồ sơ và số lần mở thực đơn liên kết trực tiếp với hệ thống đặt bàn của bạn.",
                  "Wissen, was Buchungen antreibt. Tiefe Analysen verfolgen Klickraten, Profilaufrufe und Menüöffnungen, die direkt mit Ihrem Reservierungssystem verknüpft sind."
                )}
              </p>
            </div>

          </div>

        </div>
      </motion.section>

      {/* 3. SHOWCASE SECTION (Static High-Fidelity view matching user guidelines) */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} id="showcase-section" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-3">
            {t("Craft beautiful updates in a unified dashboard", "Tạo bài đăng tuyệt đẹp trong bảng điều khiển hợp nhất", "Schöne Updates im einheitlichen Dashboard erstellen")}
          </h2>
          <p className="text-base text-slate-900 font-light leading-relaxed max-w-2xl">
            {t(
              "Take a look at how straightforward it is. We pair the creative power of AI with real visual previews, giving you total confidence before you hit publish.",
              "Hãy xem quy trình cực kỳ đơn giản này. Chúng tôi kết hợp sức sáng tạo của AI với bản xem trước hình ảnh chân thực, giúp bạn hoàn toàn tự tin trước khi bấm đăng.",
              "Sehen Sie selbst, wie einfach es ist. Wir verbinden die kreative Kraft der KI mit echten Vorschauen für volles Vertrauen vor der Veröffentlichung."
            )}
          </p>
        </div>

        {/* Showcase Image Element */}
        <div className="w-full flex justify-center items-center py-4">
          <div className="relative w-full max-w-5xl">
            <img 
              src="https://i.postimg.cc/SK30QM38/Socialpost2gastrowin.png" 
              alt="High-fidelity bistro showcase"
              className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-[0_10px_30px_rgba(118,81,252,0.2)]"
              referrerPolicy="no-referrer"
            />
            
          </div>
        </div>

      </motion.section>



    </div>
  );
}
