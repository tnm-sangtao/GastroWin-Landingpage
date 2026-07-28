/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");
  const { lang } = useLanguage();

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Inline translations for FAQ section
  const faqTranslations: Record<string, Record<string, { q: string; a: string; cat: string }>> = {
    vi: {
      "faq-1": {
        cat: "Vận hành & Tích hợp POS",
        q: "GastroWin tích hợp và triển khai với hệ thống POS, máy in và thiết bị hiện có của nhà hàng như thế nào?",
        a: "GastroWin kết nối đồng bộ plug-and-play với các hệ thống POS phổ biến, máy in hóa đơn nhiệt và màn hình bếp KDS. Đội ngũ chuyên gia hỗ trợ triển khai hoàn thiện sơ đồ bàn, cấu hình thiết bị và vận hành trực tiếp chỉ trong vòng 24 giờ mà không gây gián đoạn hoạt động kinh doanh."
      },
      "faq-2": {
        cat: "Nhân sự & Tính lương tự động",
        q: "Phân hệ Quản lý nhân sự (HR), Xếp lịch ca thông minh và Tính lương tự động hoạt động phối hợp như thế nào?",
        a: "Động cơ AI tự động khớp lịch rảnh của nhân viên với ca làm việc, ghi nhận chấm công qua GPS/QR code và tự động lọc CV ứng viên F&B. Toàn bộ số giờ làm, ca tăng cường và điểm thưởng được chuyển thẳng vào hệ thống tính lương tự động, loại bỏ hoàn toàn sai sót thủ công và xung đột ca."
      },
      "faq-3": {
        cat: "Thực đơn AI & Gọi món QR",
        q: "Công nghệ Thực đơn AI dịch giữ nguyên thiết kế và hỗ trợ đặt món QR đa ngôn ngữ hoạt động ra sao?",
        a: "AI ẩm thực quét tệp PDF/ảnh thực đơn, nhận diện tọa độ hình học và phông chữ chính xác, dịch thuật ngữ ẩm thực sang 42+ ngôn ngữ mà vẫn giữ nguyên 100% bố cục thiết kế. Đồng thời, hệ thống tự động xuất thực đơn QR kỹ thuật số để khách quốc tế gọi món trực tiếp tại bàn."
      },
      "faq-4": {
        cat: "Dùng thử & Tương thích",
        q: "Chúng tôi có thể dùng thử GastroWin miễn phí trước khi quyết định không, và bản demo bao gồm những gì?",
        a: "Có, GastroWin cung cấp 14 ngày trải nghiệm miễn phí toàn bộ tính năng mà không cần thẻ tín dụng. Bạn sẽ nhận được toàn quyền truy cập phân hệ HR, Dịch thực đơn AI, Đồng bộ POS, Báo cáo doanh thu và sự đồng hành 1-1 từ tư vấn viên vận hành F&B."
      },
      "faq-5": {
        cat: "Chi phí & Quản lý chuỗi",
        q: "Cơ chế gói chi phí được tính ra sao và GastroWin hỗ trợ mở rộng quản lý chuỗi nhiều chi nhánh như thế nào?",
        a: "GastroWin áp dụng các gói đăng ký linh hoạt theo tháng hoặc năm (Gói Cơ bản, Gói Vàng, Gói Kim cương). Các chuỗi nhà hàng nhiều chi nhánh có thể dễ dàng quản lý kho, phân quyền nhân sự, báo cáo doanh thu tập trung và thực đơn theo vùng miền trên một bảng điều khiển duy nhất với độ bảo mật chuẩn ngân hàng."
      }
    },
    de: {
      "faq-1": {
        cat: "Betrieb & POS-Integration",
        q: "Wie wird GastroWin bei der Einrichtung in unser bestehende POS-System, Drucker und Küchengeräte integriert?",
        a: "GastroWin bietet eine nahtlose Plug-and-Play-Synchronisation mit gängigen POS-Systemen, Bondruckern und KDS (Kitchen Display Systems). Unsere Spezialisten richten Ihre Tischpläne, Geräteverbindungen und Abläufe in unter 24 Stunden ohne Betriebsunterbrechung ein."
      },
      "faq-2": {
        cat: "HR & Automatisierte Lohnabrechnung",
        q: "Wie arbeiten die Module für HR-Rekrutierung, intelligente Schichtplanung und automatisierte Lohnabrechnung zusammen?",
        a: "Die KI-Engine gleicht Schichtverfügbarkeiten von Küchen- und Servicepersonal ab, erfasst Arbeitszeiten per GPS/QR-Code und filtert Bewerber-CVs. Arbeitsstunden, Überstunden und Trinkgeldverteilung fließen direkt in die automatisierte Lohnabrechnung ein."
      },
      "faq-3": {
        cat: "KI-Menü & QR-Bestellung",
        q: "Wie bewahrt die KI-Menüübersetzung das ursprüngliche Design und unterstützt die digitale QR-Bestellung?",
        a: "Unsere kulinarische KI scannt Ihr Menü-PDF, erfasst exakte Schriftgeometrien und übersetzt Gerichte in über 42 Sprachen unter Beibehaltung des Originaldesigns. Gleichzeitig wird ein dynamisches QR-Menü für die mehrsprachige Tischbestellung direkt in die Küche generiert."
      },
      "faq-4": {
        cat: "Testversion & Kompatibilität",
        q: "Können wir GastroWin vorab kostenlos testen und was beinhaltet die Demo-Phase?",
        a: "Ja, wir bieten eine 14-tägige kostenlose Testversion mit vollem Funktionsumfang ohne Kreditkarte an. Sie erhalten Zugriff auf alle Module – HR, KI-Menüübersetzung, POS-Sync und Analysen – inklusive persönlicher Onboarding-Beratung."
      },
      "faq-5": {
        cat: "Preise & Skalierbarkeit",
        q: "Wie sind die Abonnements strukturiert und wie unterstützt GastroWin die Skalierung von Restaurantketten?",
        a: "GastroWin bietet transparente monatliche oder jährliche Abos (Basic, Gold, Diamant). Restaurantketten können Lagerbestände, Mitarbeiterrechte, konsolidierte Analysen und regionale Menüs über ein zentrales Enterprise-Dashboard mit höchster Datensicherheit verwalten."
      }
    }
  };

  const getFaqText = (id: string, field: "q" | "a" | "cat", fallback: string): string => {
    if (lang === "vi" || lang === "de") {
      const trans = faqTranslations[lang]?.[id];
      if (trans) {
        if (field === "q") return trans.q;
        if (field === "a") return trans.a;
        if (field === "cat") return trans.cat;
      }
    }
    return fallback;
  };

  const sectionTitle = {
    en: "Frequently Asked Questions",
    de: "Häufig gestellte Fragen (FAQ)",
    vi: "Các câu hỏi thường gặp"
  };

  const sectionDesc = {
    en: "Explore how GastroWin's All-in-One ecosystem seamlessly unifies HR, operations, AI menus, POS synchronization, and chain analytics.",
    de: "Erfahren Sie, wie das All-in-One-Ökosystem von GastroWin HR, Betrieb, KI-Menüs, POS-Synchronisation und Kettenanalysen nahtlos vereint.",
    vi: "Khám phá cách hệ sinh thái All-in-One của GastroWin hợp nhất trọn vẹn từ nhân sự, vận hành, thực đơn AI, đồng bộ POS đến quản lý chuỗi."
  };

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-transparent border-t border-slate-100/60 relative z-10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
         
         {/* Header */}
         <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-tight text-slate-900 mb-4 font-sans leading-tight">
            {sectionTitle[lang] || sectionTitle.en}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-3xl mx-auto leading-relaxed">
            {sectionDesc[lang] || sectionDesc.en}
          </p>
        </div>

        {/* Collapsible Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isExpanded = expandedId === faq.id;
            const fallbackCategory = faq.category ? (lang === "vi" ? faq.category.vi : lang === "de" ? faq.category.de : faq.category.en) : "";
            const categoryText = getFaqText(faq.id, "cat", fallbackCategory);
            const questionText = getFaqText(faq.id, "q", faq.question);
            const answerText = getFaqText(faq.id, "a", faq.answer);

            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isExpanded ? "border-[#7553FF] shadow-md ring-2 ring-[#7553FF]/10" : "border-slate-200/80 hover:border-[#7553FF]/30 shadow-xs"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 text-slate-900 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isExpanded ? "text-[#7553FF]" : "text-slate-400"}`} />
                    <div>
                      <h3 className="text-base sm:text-lg font-medium tracking-tight text-slate-900 leading-snug">
                        {questionText}
                      </h3>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${isExpanded ? "bg-[#7553FF] text-white rotate-180 shadow-xs" : "bg-slate-100 text-slate-500"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Content Box */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 ml-8 sm:ml-12 border-t border-slate-100/80 text-base text-slate-600 font-normal leading-[1.7]">
                        {answerText}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
