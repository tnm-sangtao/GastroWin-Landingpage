/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import FAQ from "./FAQ";
import { 
  Mail, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronDown
} from "lucide-react";

interface ContactPageProps {
  onBackToHome: () => void;
}

export default function ContactPage({ onBackToHome }: ContactPageProps) {
  const { lang, t } = useLanguage();
  
  // Form States
  const [fullName, setFullName] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [city, setCity] = useState("");
  const [solution, setSolution] = useState("all-in-one");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Avatar Images (High-quality placeholder faces from Unsplash)
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  ];

  // Inline dynamic translations to keep components modular and self-contained
  const pageTranslations = {
    title: {
      en: "Digitize your restaurant.",
      vi: "Số hóa nhà hàng của bạn.",
      de: "Digitalisieren Sie Ihr Restaurant."
    },
    desc: {
      en: "Share your culinary operational model with us. GastroWin engineers will customize an AI system setup that streamlines staffing, automates marketing, and elevates overall profit margins.",
      vi: "Hãy chia sẻ mô hình vận hành của bạn. Đội ngũ kỹ sư GastroWin sẽ thiết lập hệ sinh thái tối ưu hóa doanh thu, cắt giảm chi phí trung gian và đẩy mạnh biên lợi nhuận của bạn.",
      de: "Teilen Sie uns Ihr kulinarisches Betriebsmodell mit. GastroWin-Ingenieure passen eine KI-Systemkonfiguration an, die die Personalplanung rationalisiert, das Marketing automatisiert und die Gesamtgewinnmargen steigert."
    },
    emailLabel: {
      en: "Email Direct",
      vi: "Email trực tiếp",
      de: "Direkte E-Mail"
    },
    hqLabel: {
      en: "Headquarters",
      vi: "Trụ sở chính",
      de: "Hauptsitz"
    },
    hqAddress: {
      en: "12th Floor, Bitexco Financial Tower, District 1, Ho Chi Minh City, Vietnam",
      vi: "Tầng 12, Tòa tháp Tài chính Bitexco, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
      de: "12. Etage, Bitexco Financial Tower, Distrikt 1, Ho-Chi-Minh-Stadt, Vietnam"
    },
    slaLabel: {
      en: "Response Time SLA",
      vi: "Cam kết thời gian phản hồi",
      de: "SLA-Antwortzeit"
    },
    slaDesc: {
      en: "24/7 Technical support — Email response within 10 minutes",
      vi: "Hỗ trợ kỹ thuật 24/7 — Phản hồi email trong vòng 10 phút",
      de: "24/7 Technischer Support — E-Mail-Antwort innerhalb von 10 Minuten"
    },
    trustedBy: {
      en: "Trusted by over 500+ restaurant owners in Vietnam & Germany.",
      vi: "Được tin dùng bởi hơn 500+ chủ nhà hàng tại Việt Nam & Đức.",
      de: "Vertraut von über 500+ Restaurantbesitzern in Vietnam & Deutschland."
    },
    formTitle: {
      en: "Register for Free Trial & Get Consultation",
      vi: "Đăng ký dùng thử miễn phí & Nhận tư vấn",
      de: "Für kostenlose Testversion registrieren & Beratung erhalten"
    },
    formDesc: {
      en: "Experience all features for 14 days, no credit card required.",
      vi: "Trải nghiệm đầy đủ tính năng trong 14 ngày, không yêu cầu thẻ tín dụng.",
      de: "Erleben Sie alle Funktionen 14 Tage lang, keine Kreditkarte erforderlich."
    },
    labelName: {
      en: "Your Full Name",
      vi: "Họ và tên của bạn",
      de: "Ihr vollständiger Name"
    },
    labelRestaurant: {
      en: "Restaurant Name",
      vi: "Tên nhà hàng",
      de: "Name des Restaurants"
    },
    labelCity: {
      en: "City",
      vi: "Thành phố",
      de: "Stadt"
    },
    labelSolution: {
      en: "Solution of Interest",
      vi: "Giải pháp quan tâm",
      de: "Gewünschte Lösung"
    },
    optAll: {
      en: "All-in-One AI Ecosystem",
      vi: "Hệ sinh thái AI Tất-cả-trong-một",
      de: "All-in-One KI-Ökosystem"
    },
    optMenu: {
      en: "Smart Menu & Translation",
      vi: "Thực đơn thông minh & Dịch thuật",
      de: "Intelligente Speisekarte & Übersetzung"
    },
    optOps: {
      en: "HR Operations & Shift Planner",
      vi: "Vận hành nhân sự & Lập lịch ca",
      de: "Personalbetrieb & Schichtplaner"
    },
    optMarketing: {
      en: "Loyalty & Marketing Campaigns",
      vi: "Thành viên thân thiết & Chiến dịch Marketing",
      de: "Kundenbindung & Marketingkampagnen"
    },
    labelEmail: {
      en: "Email Address",
      vi: "Địa chỉ Email",
      de: "E-Mail-Adresse"
    },
    labelPhone: {
      en: "Phone Number",
      vi: "Số điện thoại",
      de: "Telefonnummer"
    },
    labelNotes: {
      en: "Special Requests or Additional Notes (Optional)",
      vi: "Yêu cầu đặc biệt hoặc Ghi chú thêm (Tùy chọn)",
      de: "Besondere Wünsche oder zusätzliche Anmerkungen (optional)"
    },
    placeholderNotes: {
      en: "Tell us about your menu size, special POS systems or unique shift structures...",
      vi: "Chia sẻ với chúng tôi về quy mô thực đơn, hệ thống POS đặc thù hoặc cấu trúc ca làm việc của bạn...",
      de: "Teilen Sie uns Ihre Menügröße, spezielle POS-Systeme oder einzigartige Schichtstrukturen mit..."
    },
    privacyText: {
      en: "I agree to let GastroWin contact me and process my details in accordance with the Privacy Policy.",
      vi: "Tôi đồng ý cho phép GastroWin liên hệ tư vấn và sử dụng thông tin bảo mật theo Chính sách bảo mật.",
      de: "Ich bin damit einverstanden, dass GastroWin mich kontaktiert und meine Daten gemäß der Datenschutzrichtlinie verarbeitet."
    },
    btnSubmit: {
      en: "Submit Registration Request ➔",
      vi: "Gửi Yêu Cầu Đăng Ký ➔",
      de: "Registrierungsanfrage senden ➔"
    },
    btnProcessing: {
      en: "Processing registration...",
      vi: "Đang xử lý đăng ký...",
      de: "Registrierung wird verarbeitet..."
    }
  };

  const consultationTranslations = {
    header: {
      en: "Get a free consultation",
      vi: "Nhận tư vấn miễn phí",
      de: "Kostenlose Beratung erhalten"
    },
    desc: {
      en: "GastroWin's experts are ready to analyze your workflow and recommend the ultimate operating system tailored to your restaurant.",
      vi: "Đội ngũ chuyên gia GastroWin luôn sẵn sàng phân tích nhu cầu và đề xuất giải pháp vận hành tối ưu nhất cho nhà hàng của bạn.",
      de: "Die GastroWin-Experten analysieren Ihre Prozesse und empfehlen das optimale Betriebssystem für Ihr Restaurant."
    },
    emailLabel: {
      en: "Email",
      vi: "Email",
      de: "E-Mail"
    },
    hoursLabel: {
      en: "Business hours",
      vi: "Giờ làm việc",
      de: "Geschäftszeiten"
    },
    hoursValue: {
      en: "Mon – Sat · 8:00 AM – 6:00 PM",
      vi: "Thứ 2 – Thứ 7 · 8:00 AM – 6:00 PM",
      de: "Mon – Sam · 08:00 – 18:00 Uhr"
    },
    fullNameLabel: {
      en: "Full name",
      vi: "Họ và tên",
      de: "Vollständiger Name"
    },
    emailLabelForm: {
      en: "Email",
      vi: "Email",
      de: "E-Mail"
    },
    subjectLabel: {
      en: "Restaurant name",
      vi: "Tên nhà hàng",
      de: "Name des Restaurants"
    },
    helpLabel: {
      en: "How can we help?",
      vi: "Chúng tôi có thể giúp gì cho bạn?",
      de: "Wie können wir helfen?"
    },
    fullNamePlaceholder: {
      en: "Anna Müller",
      vi: "Anna Müller",
      de: "Anna Müller"
    },
    emailPlaceholder: {
      en: "anna@company.de",
      vi: "anna@company.de",
      de: "anna@company.de"
    },
    subjectPlaceholder: {
      en: "e.g. Bella Italia",
      vi: "Ví dụ: Phở Việt",
      de: "z.B. Bella Italia"
    },
    messagePlaceholder: {
      en: "Tell us about your business and what you're looking to achieve...",
      vi: "Chia sẻ về doanh nghiệp của bạn và những mục tiêu bạn muốn đạt được...",
      de: "Erzählen Sie uns von Ihrem Unternehmen und was Sie erreichen möchten..."
    },
    submitBtn: {
      en: "Send my inquiry →",
      vi: "Gửi yêu cầu của tôi →",
      de: "Meine Anfrage senden →"
    },
    sendingBtn: {
      en: "Sending...",
      vi: "Đang gửi...",
      de: "Wird gesendet..."
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div 
      id="contact-page-container" 
      className="bg-slate-50 min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-[120px] pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative overflow-hidden font-sans bg-grid-pattern selection:bg-[#7553FF]/10 selection:text-[#7553FF]"
      style={{
        "--loyawin-primary": "#7553FF",
        "--loyawin-primary-light": "#9F85FF",
        "--loyawin-primary-dark": "#5631E0",
        "--loyawin-primary-glow": "rgba(117, 83, 255, 0.35)",
        "--loyawin-primary-xlight": "rgba(117, 83, 255, 0.12)",
        "--loyawin-neutral-900": "#1a1830",
        "--loyawin-neutral-700": "#3d3a6b",
        "--loyawin-neutral-500": "#6b6890",
        "--loyawin-neutral-300": "#b8b5d8",
        "--loyawin-neutral-100": "#eceaf9",
        "--loyawin-neutral-600": "#6b6890",
        "--font-head": "'Poppins', sans-serif",
        "--font-body": "'Poppins', sans-serif"
      } as React.CSSProperties}
    >
      
      {/* Background radial glow accents for that Dribbble premium look */}
      <div className="absolute top-1/4 left-1/12 w-[450px] h-[450px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-[550px] h-[550px] bg-[#7553FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle dotted grid layout overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#7553FF_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">

        {/* Form Submission Success Overlay */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-10 text-center shadow-xl relative z-30 my-12"
            >
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-100">
                <CheckCircle2 className="w-8 h-8 text-[#7553FF]" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-950 tracking-tight mb-3">
                {lang === "vi" ? "Đăng Ký Thành Công!" : lang === "de" ? "Registrierung erfolgreich!" : "Registration Successful!"}
              </h2>
              <p className="text-base text-slate-500 font-medium leading-relaxed max-w-md mx-auto mb-8">
                {lang === "vi" 
                  ? `Cảm ơn ${fullName || "bạn"}! LoyaWin đã nhận được yêu cầu tư vấn của bạn về chủ đề "${subject || "hỗ trợ"}". Chúng tôi sẽ liên hệ lại qua email ${email || ""} trong vòng 10 phút.`
                  : lang === "de"
                  ? `Vielen Dank, ${fullName || "Gast"}! LoyaWin hat Ihre Beratungsanfrage zum Thema "${subject || "Unterstützung"}" erhalten. Wir werden uns innerhalb von 10 Minuten unter der E-Mail-Adresse ${email || ""} bei Ihnen melden.`
                  : `Thank you, ${fullName || "there"}! LoyaWin has received your consultation inquiry about "${subject || "support"}". We will reach back via email ${email || ""} within 10 minutes.`
                }
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFullName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                  }}
                  className="bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm py-3 px-6 rounded-full border border-slate-200 cursor-pointer transition-all"
                >
                  {lang === "vi" ? "Gửi yêu cầu mới" : "Submit another request"}
                </button>
                <button
                  onClick={onBackToHome}
                  className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white font-medium text-sm py-3 px-6 rounded-full cursor-pointer transition-all flex items-center gap-1.5 shadow-md shadow-purple-500/10"
                >
                  {t("nav.back_home")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 50/50 Split Grid (Only show if not submitted) */}
        {!submitted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 mt-4"
          >
            
            {/* Left Column (Consultation Info) */}
            <div className="reveal reveal-delay-1 flex flex-col space-y-5 order-2 lg:order-1" style={{ opacity: 1 }}>
              <div>
                <h3 className="mb-2 text-2xl font-semibold sm:text-2xl md:text-[28px]" style={{ fontFamily: "var(--font-head)", color: "var(--loyawin-neutral-900)" }}>
                  {consultationTranslations.header[lang] || consultationTranslations.header.en}
                </h3>
                <p className="text-base leading-[1.7]" style={{ color: "var(--loyawin-neutral-600)" }}>
                  {consultationTranslations.desc[lang] || consultationTranslations.desc.en}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 hover:translate-x-1" style={{ background: "rgba(117, 83, 255, 0.03)", border: "1px solid rgba(117, 83, 255, 0.2)" }}>
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, var(--loyawin-primary-xlight), rgba(255,255,255,0.9))", border: "1px solid rgba(117, 83, 255, 0.15)" }}>
                    <Mail className="h-4 w-4" style={{ color: "rgb(117, 83, 255)" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium" style={{ color: "var(--loyawin-neutral-500)" }}>
                      {consultationTranslations.emailLabel[lang] || consultationTranslations.emailLabel.en}
                    </div>
                    <div className="text-sm font-medium break-words" style={{ color: "var(--loyawin-neutral-900)" }}>
                      hello@gastrowin.co
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 hover:translate-x-1" style={{ background: "rgba(117, 83, 255, 0.03)", border: "1px solid rgba(117, 83, 255, 0.2)" }}>
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg" style={{ background: "linear-gradient(135deg, var(--loyawin-primary-xlight), rgba(255,255,255,0.9))", border: "1px solid rgba(117, 83, 255, 0.15)" }}>
                    <Clock className="h-4 w-4" style={{ color: "rgb(124, 58, 237)" }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium" style={{ color: "var(--loyawin-neutral-500)" }}>
                      {consultationTranslations.hoursLabel[lang] || consultationTranslations.hoursLabel.en}
                    </div>
                    <div className="text-sm font-medium break-words" style={{ color: "var(--loyawin-neutral-900)" }}>
                      {consultationTranslations.hoursValue[lang] || consultationTranslations.hoursValue.en}
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Hero Illustration Image */}
              <div className="pt-2 relative overflow-hidden rounded-2xl group max-w-[50%]">
                <img 
                  src="https://i.postimg.cc/T3SsZMd1/contact.png" 
                  alt="Get a free consultation" 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.01]" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right Column (Form Card) */}
            <div className="reveal reveal-delay-2 relative overflow-hidden rounded-2xl border p-6 sm:rounded-3xl sm:p-8 md:p-10 order-1 lg:order-2" style={{ background: "white", borderColor: "rgba(117, 83, 255, 0.1)", boxShadow: "rgba(117, 83, 255, 0.06) 0px 8px 32px" }}>
              <form onSubmit={handleSubmit} className="relative flex h-full flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: "var(--loyawin-neutral-700)" }}>
                    {consultationTranslations.fullNameLabel[lang] || consultationTranslations.fullNameLabel.en} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="contact-name" 
                    required
                    placeholder={consultationTranslations.fullNamePlaceholder[lang] || consultationTranslations.fullNamePlaceholder.en} 
                    className="px-4 py-3.5 border rounded-xl bg-white outline-none transition-all duration-200 focus:border-[var(--loyawin-primary)] focus:shadow-[0_0_0_4px_rgba(117,83,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed text-sm" 
                    type="text" 
                    name="name" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{ fontFamily: "var(--font-body)", color: "var(--loyawin-neutral-900)", borderColor: "rgb(229, 231, 235)" }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: "var(--loyawin-neutral-700)" }}>
                    {consultationTranslations.emailLabelForm[lang] || consultationTranslations.emailLabelForm.en} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="contact-email" 
                    required
                    placeholder={consultationTranslations.emailPlaceholder[lang] || consultationTranslations.emailPlaceholder.en} 
                    className="px-4 py-3.5 border rounded-xl bg-white outline-none transition-all duration-200 focus:border-[var(--loyawin-primary)] focus:shadow-[0_0_0_4px_rgba(117,83,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed text-sm" 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ fontFamily: "var(--font-body)", color: "var(--loyawin-neutral-900)", borderColor: "rgb(229, 231, 235)" }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: "var(--loyawin-neutral-700)" }}>
                    {consultationTranslations.subjectLabel[lang] || consultationTranslations.subjectLabel.en} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    id="contact-subject" 
                    required
                    placeholder={consultationTranslations.subjectPlaceholder[lang] || consultationTranslations.subjectPlaceholder.en} 
                    className="px-4 py-3.5 border rounded-xl bg-white outline-none transition-all duration-200 focus:border-[var(--loyawin-primary)] focus:shadow-[0_0_0_4px_rgba(117,83,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed text-sm" 
                    type="text" 
                    name="subject" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{ fontFamily: "var(--font-body)", color: "var(--loyawin-neutral-900)", borderColor: "rgb(229, 231, 235)" }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: "var(--loyawin-neutral-700)" }}>
                    {consultationTranslations.helpLabel[lang] || consultationTranslations.helpLabel.en} <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="contact-message" 
                    required
                    placeholder={consultationTranslations.messagePlaceholder[lang] || consultationTranslations.messagePlaceholder.en} 
                    className="px-4 py-3.5 border rounded-xl bg-white outline-none transition-all duration-200 focus:border-[var(--loyawin-primary)] focus:shadow-[0_0_0_4px_rgba(117,83,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed min-h-[140px] flex-1 resize-none text-sm" 
                    name="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ fontFamily: "var(--font-body)", color: "var(--loyawin-neutral-900)", borderColor: "rgb(229, 231, 235)" }}
                  />
                </div>

                <button 
                  id="contact-submit" 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full cursor-pointer rounded-full border-none py-4 text-base font-medium text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(117,83,255,0.3)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0" 
                  style={{ background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))", boxShadow: "0 6px 24px var(--loyawin-primary-glow)", fontFamily: "var(--font-body)" }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {consultationTranslations.sendingBtn[lang] || consultationTranslations.sendingBtn.en}
                    </span>
                  ) : (
                    consultationTranslations.submitBtn[lang] || consultationTranslations.submitBtn.en
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}

      </div>
      <FAQ />
    </div>
  );
}
