import { motion } from "motion/react";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Globe, Zap, LayoutGrid, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Features() {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  const cards = [
    {
      id: "globe",
      icon: <Globe className="w-6 h-6 text-brand" />,
      title: t("Gastronomy-Aware AI", "AI hiểu biết sâu về ẩm thực", "Gastronomie-bewusste KI"),
      badge: t("40+ Languages", "Hơn 40 ngôn ngữ", "40+ Sprachen"),
      description: t(
        "Unlike generic translation engines that fail on complex food vocabulary, our AI is trained specifically on global gastronomy databases. It translates culinary compound words, wine regions, cuts of meat, and cultural descriptions with 100% chef accuracy.",
        "Không giống như các công cụ dịch thuật thông thường thường dịch sai các từ vựng món ăn phức tạp, AI của chúng tôi được đào tạo riêng trên các cơ sở dữ liệu ẩm thực toàn cầu. Nó dịch chính xác các từ ghép ẩm thực, vùng rượu vang, các phần thịt cắt và mô tả văn hóa với độ chuẩn xác tuyệt đối.",
        "Im Gegensatz zu generischen Übersetzungs-Engines, die an komplexem Food-Vokabular scheitern, ist unsere KI speziell auf globalen Gastronomie-Datenbanken trainiert. Sie übersetzt kulinarische Begriffe, Weinregionen, Fleischteilstücke und Beschreibungen mit 100-prozentiger Genauigkeit."
      ),
      points: [
        t("Specialized culinary vocabulary mapping", "Khớp từ vựng ẩm thực chuyên ngành", "Spezialisierte kulinarische Vokabelzuordnung"),
        t("Preserves allergen & spice level symbols", "Giữ nguyên các biểu tượng dị ứng & mức cay", "Erhält Symbole für Allergene & Schärfegrade"),
        t("Translates wine designations & grape profiles", "Dịch chỉ dẫn rượu vang & hồ sơ giống nho", "Übersetzt Weinbezeichnungen & Rebsortenprofile")
      ]
    },
    {
      id: "speed",
      icon: <Zap className="w-6 h-6 text-brand" />,
      title: t("Instant 30-Sec Generation", "Tạo tức thì trong 30 giây", "Sofortige 30-Sekunden-Erstellung"),
      badge: t("Real-time PDF", "Tệp PDF trực tiếp", "Echtzeit-PDF"),
      description: t(
        "Forget waiting days for agencies and paying graphic design freelancers to retype translation columns. Simply upload your menu, click translate, and instantly download a high-resolution, print-ready PDF in any language under 30 seconds flat.",
        "Quên đi việc chờ đợi hàng ngày từ các công ty dịch thuật và trả tiền cho những nhà thiết kế tự do để gõ lại các cột dịch. Chỉ cần tải lên thực đơn của bạn, nhấp vào dịch và tải xuống ngay lập tức tệp PDF độ phân giải cao sẵn sàng in bằng bất kỳ ngôn ngữ nào dưới 30 giây.",
        "Vergessen Sie tagelanges Warten auf Agenturen und die Bezahlung von Grafikdesignern für das Abtippen von Spalten. Laden Sie einfach Ihre Speisekarte hoch, klicken Sie auf Übersetzen und laden Sie sofort ein druckfertiges PDF herunter."
      ),
      points: [
        t("Automated layout & column fitting", "Bố cục & căn chỉnh cột tự động", "Automatisiertes Layout & Spaltenanpassung"),
        t("Instant text scaling matching boundaries", "Tự động co giãn văn bản khớp với khung hình", "Sofortige Textskalierung zur Grenzanpassung"),
        t("One-click multi-language bulk output", "Xuất hàng loạt đa ngôn ngữ chỉ với một cú nhấp", "Mehrsprachige Massenausgabe mit einem Klick")
      ]
    },
    {
      id: "design",
      icon: <LayoutGrid className="w-6 h-6 text-brand" />,
      title: t("Design & Layout Preservation", "Giữ nguyên thiết kế & bố cục", "Design- & Layout-Erhalt"),
      badge: t("OCR Coord Mapping", "Ánh xạ tọa độ OCR", "OCR-Koordinaten-Mapping"),
      description: t(
        "Our proprietary coordinate-mapping engine scans your PDF layout geometries. It identifies the precise positioning, orientation, and style of your titles, descriptions, and prices, and lays out the translated text precisely on top.",
        "Công cụ ánh xạ tọa độ độc quyền của chúng tôi quét cấu trúc hình học của tệp PDF của bạn. Nó xác định vị trí, hướng và kiểu dáng chính xác của tiêu đề, mô tả và giá cả của bạn, sau đó đặt văn bản đã dịch lên trên một cách chuẩn xác.",
        "Unsere proprietäre Koordinaten-Mapping-Engine scannt die Geometrien Ihres PDF-Layouts. Sie identifiziert die genaue Position, Ausrichtung und den Stil Ihrer Titel, Beschreibungen und Preise und platziert den übersetzten Text präzise darauf."
      ),
      points: [
        t("Detects original typography & weights", "Phát hiện phông chữ & độ đậm nhạt gốc", "Erkennt Original-Typografie & Schriftstärken"),
        t("Zero overlapping lines or manual adjustments", "Không bị chồng chéo dòng hay cần chỉnh thủ công", "Keine überlappenden Zeilen oder manuellen Anpassungen"),
        t("Keeps existing background graphics and borders", "Giữ nguyên đồ họa nền và khung viền hiện tại", "Behält vorhandene Hintergrundgrafiken und Rahmen bei")
      ]
    }
  ];

  return (
    <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      id="features"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-tight text-slate-900 mb-4 leading-tight">
            {t("A Translation Engine That", "Một công cụ dịch thuật", "Eine Übersetzungs-Engine, die")} <br className="hidden sm:inline" />
            {t("Actually Understands Gastronomy", "thực sự am hiểu ẩm thực toàn cầu", "Gastronomie wirklich versteht")}
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-medium">
            {t(
              "No more embarrassing literal translations. Save thousands of dollars in agency translations and designer layout adjustments with our specialized tool.",
              "Không còn những bản dịch thô kệch theo nghĩa đen. Tiết kiệm hàng ngàn đô la chi phí dịch thuật qua đại lý và hiệu chỉnh bố cục thiết kế với công cụ chuyên biệt của chúng tôi.",
              "Keine peinlichen wörtlichen Übersetzungen mehr. Sparen Sie Tausende von Dollar für Übersetzungsagenturen und Designer-Layout-Anpassungen mit unserem spezialisierten Tool."
            )}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              id={`feature-card-${card.id}`}
              className="group bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Badge Wrapper */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-brand/5 rounded-2xl flex items-center justify-center border border-brand/10 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <span className="group-hover:text-white transition-colors duration-300">
                      {React.cloneElement(card.icon, {
                        className: "w-6 h-6 text-brand group-hover:text-white transition-colors duration-300"
                      })}
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold text-brand bg-brand-light/40 border border-brand-light rounded-full px-3 py-1 uppercase tracking-wider">
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="border-t border-slate-100 pt-5 mt-auto">
                <ul className="space-y-2.5">
                  {card.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
