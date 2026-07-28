import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  ShieldAlert, 
  Sparkles, 
  ArrowRight, 
  Star, 
  MessageSquare, 
  Zap, 
  Trophy, 
  TrendingUp, 
  Check, 
  Lock, 
  Search, 
  MoreHorizontal, 
  Clock, 
  ThumbsUp, 
  Inbox, 
  MapPin, 
  Smartphone, 
  Share2,
  Users,
  Award,
  ChevronRight,
  Sparkle
} from "lucide-react";

interface ReviewResponderProps {
  onBackToHome: () => void;
}

export default function ReviewResponder({ onBackToHome }: ReviewResponderProps) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };



  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Poppins'] overflow-hidden selection:bg-[#7553FF]/10 selection:text-[#7553FF]">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden">
        {/* Subtle radial gradients for premium feel */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7553FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Bold, Confident SaaS Copy */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1]"
              >
                {t("Boost your", "Nâng tầm", "Steigern Sie Ihren")} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] via-[#805AD5] to-indigo-600">{t("5-star reputation", "uy tín 5 sao", "5-Sterne-Ruf")}</span>.
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-900 text-base md:text-lg font-light leading-relaxed max-w-xl"
              >
                {t(
                  "GastroWin’s smart routing engine drives high-satisfaction guests directly to Google Reviews, while guiding critical feedback safely to your internal management inbox. Stop damage before it happens.",
                  "Hệ thống định tuyến thông minh của GastroWin đưa những khách hàng vô cùng hài lòng trực tiếp đến trang Google Reviews, đồng thời chuyển các phản hồi trái chiều một cách an toàn tới hộp thư quản lý nội bộ của bạn. Ngăn chặn tổn thất hình ảnh trước khi nó xảy ra.",
                  "Die intelligente Routing-Engine von GastroWin leitet zufriedene Gäste direkt zu Google-Bewertungen weiter, während kritisches Feedback sicher in Ihrem internen Posteingang landet."
                )}
              </motion.p>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button 
                  onClick={onBackToHome}
                  className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-bold px-7 py-4 rounded-xl shadow-lg shadow-[#7553FF]/20 hover:shadow-xl hover:shadow-[#7553FF]/30 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group hover:-translate-y-0.5"
                >
                  Configure Review Booster
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>

              {/* Social proof/Metrics */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-6 pt-6 border-t border-slate-100"
              >
                <div className="flex -space-x-2.5">
                  <img className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                  <img className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                  <img className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-light text-slate-900 ml-1">4.9 / 5</span>
                  </div>
                  <p className="text-[12px] font-light text-slate-900 uppercase tracking-wider mt-0.5">trusted by 400+ restaurants</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Beautiful Image Container */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-8">
              
              {/* Soft Ambient Shadow behind graphic */}
              <div className="absolute w-80 h-80 rounded-full bg-[#7553FF]/[0.03] filter blur-[80px]" />
              
              <div className="relative w-full max-w-md">
                <img
                  src="https://i.postimg.cc/MTTFGLQk/review.png"
                  alt="Review Responder Illustration"
                  className="w-full h-auto rounded-xl object-cover scale-145 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>

          </div>
        </div>
      </motion.section>

      {/* 2. FEATURES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-28 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight">
              {t("Control your brand value on autopilot", "Kiểm soát giá trị thương hiệu tự động", "Markenwert auf Autopilot steuern")}
            </h2>
            <p className="text-slate-900 text-sm md:text-base font-light leading-relaxed">
              {t(
                "We provide three core layers of reputation intelligence to keep your food brand protected, responsive, and constantly optimized.",
                "Chúng tôi cung cấp ba lớp thông tin danh tiếng cốt lõi để thương hiệu ẩm thực của bạn được bảo vệ, phản hồi nhanh chóng và không ngừng tối ưu hóa.",
                "Wir bieten drei Kernbereiche der Reputationsanalyse, um Ihre Marke zu schützen, schnell zu reagieren und kontinuierlich zu optimieren."
              )}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: Brand Protection / Selective Routing */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-lg transition-all text-left space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7553FF]/10 flex items-center justify-center text-[#7553FF]">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-950">
                  {t("Brand Protection & Routing", "Bảo vệ thương hiệu & Định tuyến", "Markenschutz & Routing")}
                </h3>
                <p className="text-slate-900 text-base font-light leading-relaxed">
                  {t(
                    "Automatically sort guests based on satisfaction score. Happy guests go straight to Google Reviews, disgruntled reviews are routed to Management internally to resolve immediately.",
                    "Tự động sắp xếp khách hàng dựa trên điểm số hài lòng. Khách hàng vui vẻ sẽ đi thẳng tới Google Reviews, các phản hồi chưa hài lòng được chuyển tiếp nội bộ đến Ban quản lý để giải quyết ngay lập tức.",
                    "Sortieren Sie Gäste automatisch nach Zufriedenheit. Zufriedene Gäste werden direkt zu Google-Bewertungen geleitet, unzufriedenes Feedback geht an das interne Management."
                  )}
                </p>
              </div>
              <ul className="space-y-2.5 pt-2 border-t border-slate-50 text-[12px] font-light text-slate-900">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Internal conflict routing filter", "Bộ lọc định tuyến phản hồi trái chiều nội bộ", "Interner Routingfilter für Konflikte")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Customized satisfaction threshold", "Ngưỡng hài lòng được tùy chỉnh", "Benutzerdefinierte Zufriedenheitsschwelle")}
                </li>
              </ul>
            </motion.div>

            {/* Feature 2: Lightning Response */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-lg transition-all text-left space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                <Zap className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-950">
                  {t("Rapid AI Auto-Response", "Phản hồi tự động nhanh bằng AI", "Schnelle KI-Auto-Antwort")}
                </h3>
                <p className="text-slate-900 text-base font-light leading-relaxed">
                  {t(
                    "Never keep a reviewer waiting. Our industry-specialized generative model creates tailored responses referencing specific dishes, staff names, or loyalty promos instantly.",
                    "Không bao giờ để thực khách đánh giá phải chờ đợi. Mô hình tạo ngôn ngữ chuyên biệt trong ngành của chúng tôi tạo ra các câu trả lời phù hợp, tham chiếu đến các món ăn cụ thể, tên nhân viên hoặc khuyến mãi thân thiết ngay lập tức.",
                    "Lassen Sie Rezensenten nicht warten. Unser branchenspezifisches KI-Modell erstellt sofort maßgeschneiderte Antworten mit Bezug zu Gerichten, Mitarbeitern oder Promos."
                  )}
                </p>
              </div>
              <ul className="space-y-2.5 pt-2 border-t border-slate-50 text-[12px] font-light text-slate-900">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Under 2-minute average response time", "Thời gian phản hồi trung bình dưới 2 phút", "Durchschnittliche Antwortzeit unter 2 Minuten")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Multi-lingual menu keyword matching", "Khớp từ khóa thực đơn đa ngôn ngữ", "Mehrsprachiger Menü-Keyword-Abgleich")}
                </li>
              </ul>
            </motion.div>

            {/* Feature 3: Staff Leaderboard */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-lg transition-all text-left space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-950">
                  {t("Staff Motivation Leaderboard", "Bảng xếp hạng thúc đẩy nhân viên", "Mitarbeiter-Motivations-Leaderboard")}
                </h3>
                <p className="text-slate-900 text-base font-light leading-relaxed">
                  {t(
                    "Motivate servers and kitchen crews. Track which staff members are mentioned most by name in positive reviews, triggering gamified rewards and visual monthly performance charts.",
                    "Thúc đẩy nhân viên phục vụ và bếp. Theo dõi những nhân viên nào được nhắc tên nhiều nhất trong các đánh giá tích cực, kích hoạt phần thưởng trò chơi hóa và biểu đồ hiệu suất trực quan hàng tháng.",
                    "Motivieren Sie Service und Küche. Verfolgen Sie, wer in positiven Bewertungen am häufigsten namentlich erwähnt wird, und schalten Sie spielerische Belohnungen frei."
                  )}
                </p>
              </div>
              <ul className="space-y-2.5 pt-2 border-t border-slate-50 text-[12px] font-light text-slate-900">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Individual server name tracking", "Theo dõi tên từng nhân viên phục vụ", "Verfolgung einzelner Mitarbeiter")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Bonus reward payouts calculator", "Trình tính toán chi trả tiền thưởng thưởng", "Bonus-Auszahlungsrechner")}
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </motion.section>



    </div>
  );
}
