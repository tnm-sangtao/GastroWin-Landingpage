import { motion } from "motion/react";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Scale, 
  Coins, 
  ArrowRight, 
  FileCheck
} from "lucide-react";

export default function PayrollReconciliation({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  return (
    <div id="payroll-reconciliation-page" className="bg-white text-slate-950 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28 overflow-hidden">
        
        {/* Soft background purple/indigo lighting effects */}
        <div className="absolute top-0 left-12 w-[480px] h-[480px] bg-purple-500/[0.03] rounded-full filter blur-[125px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#7553FF]/[0.02] rounded-full filter blur-[95px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left: Strategic copy */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[64px] mb-6">
              {t("Tax-compliant", "Đối chiếu lương", "Steuerkonforme")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                {t("Payroll Dual-Ledger", "Sổ kép chuẩn thuế", "Lohn-Doppelbuchhaltung")}
              </span>.
            </h1>

            <p className="text-sm sm:text-base text-slate-900 font-light leading-relaxed mb-8 max-w-lg">
              {t(
                "Synchronize internal working schedules perfectly with tax-compliant ledgers. Automate tax-free night premiums, calculate meal deductions, and split tips fairly—minimizing administrative overhead and compliance audits.",
                "Đồng bộ hóa hoàn hảo lịch trình làm việc nội bộ với sổ cái tuân thủ quy định thuế. Tự động hóa các khoản phụ cấp ban đêm miễn thuế, tính toán khấu trừ bữa ăn và chia nhỏ tiền boa một cách công bằng—giảm thiểu tối đa gánh nặng hành chính và các cuộc kiểm tra tuân thủ pháp lý.",
                "Synchronisieren Sie Arbeitspläne perfekt mit steuerkonformen Konten. Automatisieren Sie steuerfreie Nachtzuschläge, berechnen Sie Essensabzüge und teilen Sie Trinkgelder fair auf."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("payroll-cta");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                {t("Get Started Today", "Bắt đầu ngay hôm nay", "Heute starten")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick stats panel */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-100 w-full text-left">
              <div>
                <p className="text-2xl font-light text-slate-950">100%</p>
                <p className="text-sm font-light text-slate-900 uppercase tracking-wider mt-1">Tax Audit Compliant</p>
              </div>
              <div>
                <p className="text-2xl font-light text-slate-950">0.02%</p>
                <p className="text-sm font-light text-slate-900 uppercase tracking-wider mt-1">Discrepancy tolerance</p>
              </div>
            </div>
          </div>

          {/* Hero Right: Payroll Preview Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            <img
              src="https://i.postimg.cc/0NGFMphr/Payroll.png"
              alt="Payroll Dual-Ledger Preview"
              referrerPolicy="no-referrer"
              className="w-full h-auto scale-125 transform origin-center lg:origin-right transition-all duration-300 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
            />
          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-24 border-y border-slate-100 bg-slate-50/50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-6xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Pristine financial alignment for modern gastronomy", "Đối chiếu tài chính hoàn mỹ cho nhà hàng hiện đại", "Perfekte finanzielle Abstimmung für moderne Gastronomie")}
            </h2>
            <p className="text-sm text-slate-900 font-light leading-relaxed">
              {t(
                "We eliminate complex manual spreadsheet formulas and prevent compliance liabilities with automatic payroll alignment.",
                "Chúng tôi loại bỏ các công thức lập bảng tính thủ công phức tạp và ngăn ngừa các nghĩa vụ pháp lý phát sinh bằng cách tự động căn chỉnh bảng lương.",
                "Wir eliminieren komplexe manuelle Tabellenformeln und vermeiden Haftungsrisiken durch automatischen Abgleich der Lohnabrechnung."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Balance Scale */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950 mb-2">
                {t("Dual-Ledger Reconciliation", "Đối chiếu Sổ cái Kép", "Zwei-Säulen-Abgleich")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Reconcile your actual staff schedule logs directly with formal bank transfer records and tax ledgers automatically. Prevent pay discrepancy audits instantly.",
                  "Tự động đối chiếu nhật ký ca làm việc thực tế của nhân viên trực tiếp với hồ sơ chuyển khoản ngân hàng và sổ cái thuế. Ngăn ngừa sai lệch tiền lương ngay lập tức.",
                  "Gleichen Sie tatsächliche Arbeitszeitprotokolle automatisch direkt mit offiziellen Banküberweisungsbelegen und Steuerregistern ab. Vermeiden Sie Gehaltsabweichungsprüfungen."
                )}
              </p>
            </div>

            {/* Card 2: Coin stack with distribution arrows */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-amber-100/60">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950 mb-2">
                {t("Dynamic Tip Pool Allocation", "Phân chia Tiền boa Năng động", "Dynamische Trinkgeldaufteilung")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Distribute raw weekly tips fairly across Kitchen and Front-of-House service staff. Adjust weights on the fly based on hours worked and custom parameters.",
                  "Phân phối tiền boa hàng tuần một cách công bằng giữa nhân viên Bếp và nhân viên Phục vụ sảnh. Điều chỉnh hệ số linh hoạt theo số giờ làm việc và các tham số tùy chỉnh.",
                  "Verteilen Sie wöchentliches Trinkgeld fair zwischen Küche und Servicepersonal. Passen Sie die Gewichtung flexibel basierend auf Arbeitsstunden und Parametern an."
                )}
              </p>
            </div>

            {/* Card 3: Hourly, Monthly, Minijob contract tags */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-emerald-100/60">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950 mb-2">
                {t("Multi-Contract & Minijob Compliance", "Cấu trúc Đa hợp đồng", "Multi-Vertragsarchitektur")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Handle diverse contract boundaries natively—Hourly contracts with premium calculations, standard Monthly salaries, and compliant Minijob limits with alert tracking.",
                  "Xử lý đa dạng loại hợp đồng một cách tự nhiên - Hợp đồng theo giờ kèm tính lương ngoài giờ, lương Tháng cố định chuẩn và giới hạn Minijob tuân thủ kèm cảnh báo.",
                  "Verwalten Sie verschiedene Vertragsarten nativ - Stundenlohn mit Zuschlägen, Standard-Monatsgehälter und konforme Minijob-Grenzen mit Warnsystem."
                )}
              </p>
            </div>

          </div>

        </div>
      </motion.section>



    </div>
  );
}
