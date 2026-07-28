/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  MapPin, 
  Search, 
  Gauge, 
  CheckCircle, 
  AlertTriangle, 
  Sparkles, 
  PhoneCall, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Globe, 
  Map, 
  Zap, 
  RefreshCw, 
  TrendingUp, 
  HelpCircle,
  Clock,
  Briefcase
} from "lucide-react";

interface LocalSEOSnapshotProps {
  onBackToHome: () => void;
}

export default function LocalSEOSnapshot({ onBackToHome }: LocalSEOSnapshotProps) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  // Hero Animation states
  const [animatedScore, setAnimatedScore] = useState(40);
  const [heroPhase, setHeroPhase] = useState<"scanning" | "calculating" | "complete" | "cooldown">("scanning");
  const [glowMultiplier, setGlowMultiplier] = useState(1);

  // Soundless animation timeline for the Hero 3D Graphic sequence
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let scoreTimer: NodeJS.Timeout;

    const runSequence = () => {
      // 1. Scanning phase (1.8s)
      setHeroPhase("scanning");
      setAnimatedScore(40);
      setGlowMultiplier(1);

      // 2. Transition to Calculating (after 1.8s)
      interval = setTimeout(() => {
        setHeroPhase("calculating");
        
        // Increment score rapidly from 40 to 98 over 2 seconds
        let currentScore = 40;
        const targetScore = 98;
        const duration = 2000; // 2 seconds
        const steps = 30;
        const increment = (targetScore - currentScore) / steps;
        const stepTime = duration / steps;
        
        let stepCount = 0;
        scoreTimer = setInterval(() => {
          if (stepCount >= steps) {
            setAnimatedScore(98);
            clearInterval(scoreTimer);
            setHeroPhase("complete");
            setGlowMultiplier(1.8);
          } else {
            currentScore += increment;
            setAnimatedScore(Math.min(98, Math.floor(currentScore)));
            stepCount++;
          }
        }, stepTime);

      }, 1800);
    };

    runSequence();

    // Loop the sequence every 9.5 seconds to keep the portfolio item looking alive & premium
    const mainLoop = setInterval(() => {
      if (scoreTimer) clearInterval(scoreTimer);
      if (interval) clearTimeout(interval);
      
      setHeroPhase("cooldown");
      setTimeout(() => {
        runSequence();
      }, 800);
    }, 9500);

    return () => {
      clearInterval(mainLoop);
      if (scoreTimer) clearInterval(scoreTimer);
      if (interval) clearTimeout(interval);
    };
  }, []);

  // Demo state for the lead modal/consultation request
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoRestaurantName, setDemoRestaurantName] = useState("");
  const [demoWebsite, setDemoWebsite] = useState("");
  const [demoSuccess, setDemoSuccess] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      setDemoSuccess(false);
      setIsDemoModalOpen(false);
      setDemoRestaurantName("");
      setDemoWebsite("");
    }, 2500);
  };

  return (
    <div id="local-seo-snapshot-page" className="bg-white text-slate-900 font-sans min-h-screen pt-24 pb-16 relative overflow-hidden selection:bg-[#7553FF]/10 selection:text-[#7553FF]">
      
      {/* Background Soft Gradients (Purple #7553FF) */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#7553FF]/[0.02] rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#7553FF]/[0.03] rounded-full filter blur-[100px] pointer-events-none" />
      
      {/* Geometric Dribbble Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7553FF/[0.012]_1px,transparent_1px),linear-gradient(to_bottom,#7553FF/[0.012]_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left: B2B Catchy & Bold Typography */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[64px] mb-6 font-poppins">
              {t("Rank higher on", "Xếp hạng cao hơn trên", "Besser ranken auf")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] to-purple-800">
                {t("Google Maps.", "Google Bản đồ.", "Google Maps.")}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-900 font-light leading-relaxed mb-8 max-w-lg font-poppins">
              {t(
                "Stop letting local competitors hijack hungry customers. Run an instant audit on your metadata, search listings, reviews speed, and discover immediate, low-hanging SEO optimizations.",
                "Đừng để các đối thủ địa phương thu hút hết những thực khách đang đói bụng của bạn. Thực hiện kiểm toán tức thì về siêu dữ liệu, danh sách tìm kiếm, tốc độ phản hồi đánh giá của bạn và khám phá các tối ưu hóa SEO tức thời, dễ thực hiện.",
                "Lassen Sie nicht zu, dass lokale Konkurrenten hungrige Kunden abfangen. Führen Sie ein sofortiges Audit Ihrer Metadaten, Sucheinträge und Bewertungen durch."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                Scan My Restaurant Free
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro value proposition badges typical of SaaS products */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs font-light text-slate-900">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#7553FF]" /> 60-Second Real-Time Scan
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#7553FF]" /> Clear Rating Indicators
              </span>
            </div>
          </div>

          {/* Hero Right: Beautiful Image Container */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            
            {/* Soft Ambient Shadow behind graphic */}
            <div className="absolute w-80 h-80 rounded-full bg-[#7553FF]/[0.03] filter blur-[80px]" />
            
            {/* Beautiful Image Container */}
            <div className="relative w-full max-w-md">
              <img
                src="https://i.postimg.cc/jdGZb5cd/SEO.png"
                alt="Local SEO Audit Illustration"
                className="w-full h-auto rounded-xl object-cover scale-130 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES SECTION (3 minimalist UI cards as requested) */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 bg-slate-50/60 border-y border-slate-100 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4 font-poppins">
              {t("Everything required to own the local search", "Mọi thứ cần thiết để thống trị tìm kiếm địa phương", "Alles, was Sie für die lokale Suche benötigen")}
            </h2>
            <p className="text-base text-slate-900 font-light leading-relaxed font-poppins">
              {t(
                "No bloating analytics. We pinpoint the exact local ranking variables that search engine robots reward with higher map views.",
                "Không cần phân tích rườm rà. Chúng tôi xác định chính xác các biến xếp hạng địa phương mà các thuật toán của công cụ tìm kiếm ưu tiên để có lượt xem bản đồ cao hơn.",
                "Keine überladenen Analysen. Wir ermitteln genau die lokalen Ranking-Variablen, die Suchmaschinen-Roboter mit höheren Aufrufen belohnen."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Speedometer / gauge (Instant Scoring) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2 font-poppins">
                {t("Instant Scoring", "Chấm điểm tức thì", "Sofortige Bewertung")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed font-poppins">
                {t(
                  "Enter your restaurant website URL and see a definitive local SEO audit grade in less than 60 seconds. Our crawler parses index schemas, citations, and metadata automatically.",
                  "Nhập URL trang web nhà hàng của bạn và xem kết quả đánh giá SEO địa phương chính xác trong chưa đầy 60 giây. Hệ thống thu thập thông tin của chúng tôi tự động phân tích cấu trúc schema, trích dẫn và siêu dữ liệu.",
                  "Geben Sie die URL Ihrer Restaurant-Website ein und sehen Sie in weniger als 60 Sekunden eine definitive lokale SEO-Prüfbewertung. Unser Crawler analysiert Schemata, Zitate und Metadaten automatisch."
                )}
              </p>
            </div>

            {/* Card 2: Checklist with green checkmarks and orange warnings (Actionable Insights) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2 font-poppins">
                {t("Actionable Insights", "Thông tin chi tiết hữu ích", "Handlungsorientierte Einblicke")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed font-poppins">
                {t(
                  "Get step-by-step guides for errors. Learn which tags are missing, how to fix consistent Name-Address-Phone listings, and how to structure schema formats easily.",
                  "Nhận hướng dẫn từng bước để khắc phục lỗi. Tìm hiểu những thẻ nào còn thiếu, cách đồng bộ thông tin Tên-Địa chỉ-Số điện thoại và cách cấu trúc định dạng schema dễ dàng.",
                  "Erhalten Sie Schritt-für-Schritt-Anleitungen für Fehler. Erfahren Sie, welche Tags fehlen, wie Sie einheitliche Name-Adresse-Telefon-Einträge korrigieren und Schema-Formate strukturieren."
                )}
              </p>
            </div>

            {/* Card 3: Headset / sparkle (SEO Consultation) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2 font-poppins">
                {t("SEO Consultation", "Tư vấn SEO chuyên sâu", "SEO-Beratung")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed font-poppins">
                {t(
                  "Work directly with Google Maps specialists. Get tailored advice on building local citation velocity, high-authority backlink outreach, and content calendar schedules.",
                  "Làm việc trực tiếp với các chuyên gia Google Maps. Nhận lời khuyên phù hợp về cách xây dựng tần suất trích dẫn địa phương, tiếp cận liên kết ngược có thẩm quyền cao và lên lịch trình nội dung.",
                  "Arbeiten Sie direkt mit Google Maps-Spezialisten zusammen. Erhalten Sie maßgeschneiderte Beratung zum Aufbau lokaler Zitate, hochwertiger Backlinks und Content-Kalender."
                )}
              </p>
            </div>

          </div>

        </div>
      </motion.section>



      {/* MODAL WINDOW FOR DEMO / SCAN INITIATION */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-2xl relative w-full max-w-md z-10 text-left"
            >
              
              <div className="pb-4 border-b border-slate-100 mb-6">
                <h3 className="font-extrabold text-lg text-slate-950 font-poppins">Free Local SEO Scan</h3>
                <p className="text-xs text-slate-500 font-medium font-poppins mt-1">Get your definitive citation score in 60 seconds.</p>
              </div>

              {demoSuccess ? (
                <div className="py-8 text-center flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 font-poppins">Scan Initiated Successfully!</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-poppins">
                    Our AI crawler is auditing metadata, NAP consistency, and reviews. We will display your snapshot dashboard immediately.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4 text-xs font-semibold text-slate-700">
                  <div className="space-y-1.5">
                    <label className="text-slate-500">Restaurant Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Le Bistrot Paris" 
                      value={demoRestaurantName}
                      onChange={(e) => setDemoRestaurantName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-slate-800 font-bold outline-none focus:border-[#7553FF] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-500">Website URL (Optional)</label>
                    <input 
                      type="url" 
                      placeholder="e.g. https://le-bistrot.com" 
                      value={demoWebsite}
                      onChange={(e) => setDemoWebsite(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-slate-800 font-bold outline-none focus:border-[#7553FF] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-[#7553FF] hover:bg-[#5F3DEB] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-500/25 cursor-pointer text-xs"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      Generate Free SEO Snapshot
                    </button>
                  </div>
                </form>
              )}

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-semibold mt-6 text-center">
                No credit card, sign-up, or dashboard password required.
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
