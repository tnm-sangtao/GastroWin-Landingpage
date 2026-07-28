import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Clock, 
  Settings, 
  MessageSquare, 
  TrendingUp, 
  Heart, 
  Percent, 
  Sliders, 
  Smartphone, 
  CheckSquare, 
  Bell, 
  Send, 
  Calendar,
  Gift,
  HelpCircle,
  Sparkle
} from "lucide-react";

interface CampaignEngineProps {
  onBackToHome: () => void;
}

export default function CampaignEngine({ onBackToHome }: CampaignEngineProps) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  // Setup interactive states for the "Marketing Campaign & Code Engine" setup panel
  const [discountPercent, setDiscountPercent] = useState<number>(15);
  const [couponToken, setCouponToken] = useState<string>("SUMMERGUSTO");
  const [isSmsAlertsChecked, setIsSmsAlertsChecked] = useState<boolean>(true);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [simulatedMobileSent, setSimulatedMobileSent] = useState<boolean>(false);

  // Interactive sandbox configurations
  const [selectedGoal, setSelectedGoal] = useState<"peak" | "slow" | "birthday">("peak");

  const handleSaveCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const triggerSmsSimulation = () => {
    setSimulatedMobileSent(true);
    setTimeout(() => setSimulatedMobileSent(false), 5500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Poppins'] overflow-hidden selection:bg-[#7553FF]/10 selection:text-[#7553FF]">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden border-b border-slate-100">
        {/* Glowing gradients for premium B2B SaaS feel */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#7553FF]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Brand value proposition and CTA */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1]"
              >
                Automate to <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] via-[#805AD5] to-indigo-600">fill tables</span>.
              </motion.h1>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-slate-900 text-base md:text-lg font-light leading-relaxed max-w-xl"
              >
                Reach your active loyalty diners at the perfect psychological moment. GastroWin monitors booking trends, detects upcoming slow tours, and automatically deploys tailored coupon notifications before peak hours hit.
              </motion.p>

              {/* Action buttons */}
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
                  Back to Dashboard
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>

              {/* Client proof block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-6 pt-6 border-t border-slate-100"
              >
                <div>
                  <div className="text-2xl font-extrabold text-slate-950">18.4%</div>
                  <p className="text-[13px] font-light text-slate-900 uppercase tracking-wider mt-0.5">Average Table Fill Boost</p>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <div className="text-2xl font-extrabold text-slate-950">12,000+</div>
                  <p className="text-[13px] font-light text-slate-900 uppercase tracking-wider mt-0.5">SMS campaigns triggered</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Hero Graphic (visualized motion sequence with exact constraints:
                - glowing purple digital clock hitting a peak hour
                - instantly triggers SMS bubbles containing "15% OFF" coupon flying toward smartphones
                - NO interactive fields/inputs in the hero visual) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-full max-w-[500px] h-[500px]">
                
                {/* Soft Ambient Shadow behind graphic */}
                <div className="absolute w-80 h-80" />
                
                <div className="relative w-full max-w-md flex items-center justify-center">
                  <img
                    src="https://i.postimg.cc/RCPnfDn5/campaign.png"
                    alt="Campaign Engine Illustration"
                    className="w-full h-auto scale-145 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 2. FEATURES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-28 bg-slate-50 border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight">
              {t("Powerful tools to secure every seat", "Công cụ mạnh mẽ để lấp đầy mọi chỗ ngồi", "Leistungsstarke Tools, um jeden Tisch zu besetzen")}
            </h2>
            <p className="text-slate-900 text-sm md:text-base font-light leading-relaxed">
              {t(
                "Drive customer retention and instant dining traffic through automatic SMS and promotion rules tailored to your restaurant hours.",
                "Thúc đẩy giữ chân khách hàng và lượng khách ăn uống tức thì thông qua tin nhắn SMS tự động và các quy tắc khuyến mãi phù hợp với giờ hoạt động của nhà hàng.",
                "Steigern Sie die Kundenbindung und die sofortige Auslastung durch automatische SMS- und Promotion-Regeln, die auf Ihre Restaurantzeiten zugeschnitten sind."
              )}
            </p>
          </div>

          {/* 3 minimalist UI cards with soft drop shadows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature Card 1: Automated Triggers */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-lg transition-all text-left space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-[#7553FF]/10 flex items-center justify-center text-[#7553FF]">
                {/* Gear with a discount tag representation */}
                <div className="relative">
                  <Settings className="w-6 h-6 animate-[spin_20s_linear_infinite]" />
                  <Percent className="w-3 h-3 absolute -bottom-1 -right-1 text-[#7553FF] stroke-[3]" />
                </div>
              </div>
              <div className="space-y-2 h-fill">
                <h3 className="text-lg font-bold text-slate-950">
                  {t("Automated Triggers", "Kích hoạt tự động", "Automatische Trigger")}
                </h3>
                <p className="h-fill text-slate-900 text-base font-light leading-relaxed">
                  {t(
                    "Monitor slow reservation windows. Automatically activate special loyalty bonuses or discount tiers precisely when tables are projected to sit empty.",
                    "Giám sát các khoảng thời gian đặt bàn thấp. Tự động kích hoạt các phần thưởng tri ân đặc biệt hoặc các mức chiết khấu chính xác khi bàn được dự báo sẽ trống khách.",
                    "Überwachen Sie schwach ausgelastete Zeiten. Aktivieren Sie automatisch spezielle Treueboni oder Rabattstufen genau dann, wenn Tische voraussichtlich leer bleiben."
                  )}
                </p>
              </div>
              <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-[11px] font-light text-slate-900">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Real-time analytics integration", "Tích hợp phân tích thời gian thực", "Echtzeit-Analyse-Integration")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Custom dynamic pricing triggers", "Trình kích hoạt giá năng động tùy chỉnh", "Benutzerdefinierte dynamische Preistrigger")}
                </li>
              </ul>
            </motion.div>

            {/* Feature Card 2: Targeted SMS Alerts */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-lg transition-all text-left space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                {/* Smartphone with speech bubble icon */}
                <div className="relative">
                  <Smartphone className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-950">
                  {t("Targeted SMS Alerts", "Cảnh báo SMS mục tiêu", "Zielgerichtete SMS-Benachrichtigungen")}
                </h3>
                <p className="text-slate-900 text-base font-light leading-relaxed">
                  {t(
                    "Avoid generic spam. Send ultra-targeted text blasts to your active diners, segmented by their favorite dishes, typical dining hours, and physical proximity.",
                    "Tránh tin rác hàng loạt. Gửi tin nhắn văn bản cực kỳ nhắm mục tiêu đến thực khách đang hoạt động, được phân khúc theo món ăn yêu thích, giờ ăn điển hình và khoảng cách địa lý.",
                    "Vermeiden Sie generischen Spam. Senden Sie zielgerichtete SMS an Ihre aktiven Gäste, segmentiert nach Lieblingsgerichten, typischen Essenszeiten und Entfernung."
                  )}
                </p>
              </div>
              <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-[11px] font-light text-slate-900">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("98% average SMS open rates", "Tỷ lệ mở SMS trung bình 98%", "98% durchschnittliche SMS-Öffnungsrate")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Segmented loyalty tiers list", "Danh sách phân khúc hạng thành viên", "Segmentierte Treuestufen-Liste")}
                </li>
              </ul>
            </motion.div>

            {/* Feature Card 3: Loyalty Retention */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-lg transition-all text-left space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                {/* Magnet representation */}
                <div className="relative">
                  <Heart className="w-6 h-6 text-violet-600 fill-violet-600/20" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-950">
                  {t("Loyalty Retention", "Giữ chân khách hàng thân thiết", "Kundenbindung & Loyalität")}
                </h3>
                <p className="text-slate-900 text-base font-light leading-relaxed">
                  {t(
                    "Nurture regular diners seamlessly. Turn occasional eaters into brand advocates with automated anniversary coupons, birthday alerts, and premium loyalty thresholds.",
                    "Nuôi dưỡng các thực khách quen thuộc một cách liền mạch. Biến những người thỉnh thoảng ăn uống thành những người ủng hộ thương hiệu bằng các phiếu giảm giá kỷ niệm tự động, cảnh báo sinh nhật và các mốc tri ân cao cấp.",
                    "Pflegen Sie Stammkunden nahtlos. Verwandeln Sie Gelegenheitsgäste in Markenbotschafter mit automatischen Jubiläumscoupons, Geburtstagserinnerungen und exklusiven Loyalitätsschwellen."
                  )}
                </p>
              </div>
              <ul className="space-y-2.5 pt-2 border-t border-slate-100 text-[11px] font-light text-slate-900">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Automated customer win-back flows", "Kịch bản tự động lôi kéo lại khách cũ", "Automatische Kundenrückgewinnungs-Flows")}
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
                  {t("Customized points-to-prizes rules", "Quy tắc tích điểm đổi quà tùy chỉnh", "Benutzerdefinierte Punkte-zu-Preise-Regeln")}
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </motion.section>





    </div>
  );
}
