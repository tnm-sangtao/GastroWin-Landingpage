/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface CateringInquiriesProps {
  onBackToHome: () => void;
}

export default function CateringInquiries({ onBackToHome }: CateringInquiriesProps) {
  const { lang } = useLanguage();

  const pageTranslations = {
    title: {
      en: "Catering Inquiries",
      vi: "Yêu cầu Tiệc & Sự kiện",
      de: "Catering-Anfragen"
    },
    desc: {
      en: "Our advanced group booking & bulk event catering system is currently being optimized for gastronomy enterprises.",
      vi: "Hệ thống đặt bàn nhóm nâng cao & phục vụ tiệc sự kiện quy mô lớn của chúng tôi hiện đang được tối ưu hóa cho các doanh nghiệp ẩm thực.",
      de: "Unser fortschrittliches System für Gruppenbuchungen und Event-Catering wird derzeit für Gastronomiebetriebe optimiert."
    },
    status: {
      en: "Status: Coming Soon",
      vi: "Trạng thái: Sắp ra mắt",
      de: "Status: Demnächst verfügbar"
    },
    statusDesc: {
      en: "Smart automated quotes, ingredient calculation, and direct customer requests.",
      vi: "Báo giá tự động thông minh, tính toán định lượng nguyên liệu và yêu cầu trực tiếp từ khách hàng.",
      de: "Intelligente automatisierte Angebote, Zutatenberechnung und direkte Kundenanfragen."
    },
    backBtn: {
      en: "Back to Home",
      vi: "Quay lại Trang chủ",
      de: "Zurück zur Startseite"
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FAF9F6] text-slate-900 px-6 py-12 relative overflow-hidden selection:bg-brand/20">
      {/* Decorative clean grid pattern in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      
      {/* Decorative soft purple radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md w-full text-center relative z-10 flex flex-col items-center"
      >
        {/* Feature Title */}
        <h1 className="text-3xl max-w-3xl lg:text-[64px] font-semibold text-slate-900 tracking-tight mb-3 leading-none lg:leading-[64px]">
          {pageTranslations.title[lang] || pageTranslations.title.en}
        </h1>

        {/* Subtitle / Coming soon text */}
        <p className="text-slate-500 font-medium text-base leading-relaxed mb-10 max-w-sm">
          {pageTranslations.desc[lang] || pageTranslations.desc.en}
        </p>



        {/* Clean and clear Back Button */}
        <button
          onClick={onBackToHome}
          className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          {pageTranslations.backBtn[lang] || pageTranslations.backBtn.en}
        </button>
      </motion.div>
    </div>
  );
}
