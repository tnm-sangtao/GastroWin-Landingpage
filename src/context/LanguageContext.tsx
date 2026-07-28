/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";

export type LanguageCode = "en" | "de" | "vi";

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" }
];

// High-fidelity translations dictionary
const DICTIONARY: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.chatbot": "Chatbot",
    "nav.product": "Product",
    "nav.recruitment": "Recruitment",
    "nav.ecosystem": "Ecosystem",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.signup": "Sign Up",
    "nav.get_demo": "Get a Demo",
    "nav.back_home": "Back to Home Hub",
    "nav.flagship_module": "Flagship Culinary Module",
    "nav.live_sync": "Live Sync",
    "nav.active_modules": "13 Active Modules Configured",
    "nav.ecosystem.loyawin.desc": "Smart loyalty points, member tier management & automated CRM.",
    "nav.ecosystem.marketing.desc": "Social Auto Post suite, SEO reach booster & automated marketing.",
    
    // Hero Section
    "hero.title_part1": "Power Your Restaurant",
    "hero.title_part2": "With One Unified",
    "hero.title_span": "AI Ecosystem.",
    "hero.desc": "Meet GastroWin. Stop drowning in 15 disconnected software systems. We unite smart menu creation, layout-preserving translation, staff schedule optimization, legal payroll logs, table reservations, and social media post automation into one cohesive, beautiful dashboard.",
    "hero.cta": "Explore Interactive Modules",
    "hero.stat_venues": "Active Venues",
    "hero.stat_saved": "Operations Saved",
    "hero.stat_score": "Trustpilot Score",

    // Tabs
    "tab.all": "All Solutions",
    "tab.menu": "Smart Menu Solutions",
    "tab.ops": "HR & Operations",
    "tab.marketing": "Marketing & Brand Growth",

    // Section Titles
    "section.modules_title": "Choose an Interactive System Module",
    "section.modules_desc": "GastroWin operates as an integrated micro-frontend stack. Click on any active console below to launch, configure, and inspect its automated server actions.",
    
    // Modules
    "module.menu_translator.title": "Menu Translator",
    "module.menu_translator.desc": "Premium Layout-Preserving translator.",
    "module.food_images.title": "AI Food Images",
    "module.food_images.desc": "Generate realistic food photos with AI.",
    "module.price_update.title": "Menu Price Update",
    "module.price_update.desc": "Instant price sync & optimization.",
    "module.qr_menu.title": "QR For Menu",
    "module.qr_menu.desc": "Generate custom scan-to-read QR codes.",
    "module.allergen_intel.title": "Allergen Intelligence",
    "module.allergen_intel.desc": "Automatic health hazard scanner.",
    "module.shift_planner.title": "Shift Planner",
    "module.shift_planner.desc": "Manage staff shifts and schedules.",
    "module.checkin.title": "Checkin",
    "module.checkin.desc": "Real-time attendance tracking.",
    "module.payroll.title": "Payroll",
    "module.payroll.desc": "Dual-Ledger sync & DATEV exports.",
    "module.leave_calc.title": "Leave & Flex Calc",
    "module.leave_calc.desc": "Manage time-off, sick days & flextime.",
    "module.staff_roles.title": "Staff & Roles",
    "module.staff_roles.desc": "Configure permissions & profiles.",
    "module.booking.title": "Book a Table",
    "module.booking.desc": "Premium restaurant reservation system.",
    "module.auto_post.title": "Social Auto Post",
    "module.auto_post.desc": "Promote new items on socials instantly.",
    "module.seo_opt.title": "SEO Check & Opt",
    "module.seo_opt.desc": "Optimize online visibility and rank.",
    "module.review_booster.title": "Review Responder",
    "module.review_booster.desc": "AI smart responses to customer reviews.",
    "module.campaign_setting.title": "Campaign Setting",
    "module.campaign_setting.desc": "Design seasonal ad campaigns.",
    "module.catering.title": "Catering Inquiries",
    "module.catering.desc": "Handle group bookings & event catering requests.",
    "module.brand_setting.title": "Brand Setting",
    "module.brand_setting.desc": "Configure logos, colors & fonts.",
    "module.role_permission.title": "Role & Permission",
    "module.role_permission.desc": "Configure access restrictions.",
    "module.social_account.title": "Social Account",
    "module.social_account.desc": "Link business social assets.",
    "module.admin_approval.title": "Admin Approval",
    "module.admin_approval.desc": "Require admin sign-offs for changes.",

    // General Sub-components
    "pricing.title": "Transparent & Flexible Pricing Plans",
    "pricing.desc": "Start with our core unified hub and only add modular components as your venue grows. All plans include standard AI capabilities.",
    "pricing.monthly": "/month",
    "pricing.free_trial": "Start 14-Day Free Trial",
    "faq.title": "Frequently Answered Questions",
    "faq.desc": "Have custom inquiries regarding GastroWin's deep integration capabilities or deployment? Connect with our culinary engineering support anytime.",
    "testimonials.title": "Trusted by Forward-Thinking Gastronomists",
    "testimonials.desc": "See how Michelin-starred dining rooms and bustling local bistros automate their workflows using GastroWin.",
    "footer.newsletter": "Join our newsletter for weekly F&B operational hacks."
  },
  de: {
    // Navbar
    "nav.home": "Startseite",
    "nav.chatbot": "Chatbot",
    "nav.product": "Produkt",
    "nav.recruitment": "Personal",
    "nav.ecosystem": "Ökosystem",
    "nav.pricing": "Preise",
    "nav.contact": "Kontakt",
    "nav.login": "Anmelden",
    "nav.signup": "Registrieren",
    "nav.get_demo": "Demo anfordern",
    "nav.back_home": "Zurück zur Übersicht",
    "nav.flagship_module": "Flaggschiff-Kulinarikmodul",
    "nav.live_sync": "Live-Synchronisation",
    "nav.active_modules": "13 aktive Module konfiguriert",
    "nav.ecosystem.loyawin.desc": "Intelligente Treuepunkte, Mitgliedsstufen-Management & automatisiertes CRM.",
    "nav.ecosystem.marketing.desc": "Social Auto-Post-Suite, SEO-Reichweiten-Booster & automatisiertes Marketing.",
    
    // Hero Section
    "hero.title_part1": "Steuern Sie Ihr Restaurant",
    "hero.title_part2": "Mit einem einzigen",
    "hero.title_span": "KI-Ökosystem.",
    "hero.desc": "Lernen Sie GastroWin kennen. Beenden Sie das Chaos mit 15 verschiedenen Einzelsystemen. Wir vereinen intelligente Speisekarten-Erstellung, layouttreue Übersetzung, Schichtplan-Optimierung, gesetzeskonforme Arbeitszeitprotokolle, Tischreservierungen und automatisierte Social-Media-Posts in einem nahtlosen, eleganten Dashboard.",
    "hero.cta": "Interaktive Module erkunden",
    "hero.stat_venues": "Aktive Betriebe",
    "hero.stat_saved": "Eingesparte Arbeitszeit",
    "hero.stat_score": "Trustpilot-Score",

    // Tabs
    "tab.all": "Alle Lösungen",
    "tab.menu": "Speisekarte & KI",
    "tab.ops": "Personal & Betrieb",
    "tab.marketing": "Marke & Marketing",

    // Section Titles
    "section.modules_title": "Wählen Sie ein interaktives Systemmodul",
    "section.modules_desc": "GastroWin basiert auf einer integrierten Micro-Frontend-Architektur. Klicken Sie auf eine Konsole unten, um automatisierte Server-Aktionen zu starten, zu konfigurieren und zu prüfen.",
    
    // Modules
    "module.menu_translator.title": "KI-Übersetzer",
    "module.menu_translator.desc": "Speisekarten per KI präzise übersetzen",
    "module.food_images.title": "KI-Essensbilder",
    "module.food_images.desc": "Gerichtfotos per KI automatisch erstellen",
    "module.price_update.title": "Preise anpassen",
    "module.price_update.desc": "Menüpreise mit einem Klick aktualisieren",
    "module.qr_menu.title": "Intelligente QR-Codes",
    "module.qr_menu.desc": "Dynamische QR-Codes für Bestellungen",
    "module.allergen_intel.title": "Allergen-Intelligenz",
    "module.allergen_intel.desc": "Allergene in Speisen automatisch erkennen",
    "module.shift_planner.title": "KI-Schichtplaner",
    "module.shift_planner.desc": "Schichten effizient planen & optimieren",
    "module.checkin.title": "Zeiterfassung",
    "module.checkin.desc": "Sichere mobile Zeiterfassung per GPS",
    "module.payroll.title": "Lohnabrechnung",
    "module.payroll.desc": "Lohnabrechnung & Berichte automatisch",
    "module.leave_calc.title": "Urlaub & Gleitzeit",
    "module.leave_calc.desc": "Urlaub & Abwesenheiten online verwalten",
    "module.staff_roles.title": "Personal und Zugang",
    "module.staff_roles.desc": "Personal & Benutzerrechte verwalten",
    "module.booking.title": "Tischreservierung",
    "module.booking.desc": "Online-Tischreservierung & Saalpläne",
    "module.auto_post.title": "Automatisches Posten",
    "module.auto_post.desc": "Social-Media-Posts automatisch planen",
    "module.seo_opt.title": "GastroWin SEO-Analyse",
    "module.seo_opt.desc": "Inhalte für Google-Suche optimieren",
    "module.review_booster.title": "Bewertungs-Booster",
    "module.review_booster.desc": "Automatische KI-Antworten auf Bewertungen",
    "module.campaign_setting.title": "Kampagnen-Engine",
    "module.campaign_setting.desc": "Rabattaktionen schnell & einfach erstellen",
    "module.catering.title": "Catering-Anfragen",
    "module.catering.desc": "Verwalten Sie Gruppenbuchungen und Anfragen für Event-Catering.",
    "module.brand_setting.title": "Markeneinstellungen",
    "module.brand_setting.desc": "Konfigurieren Sie Logos, Farben und Schriftarten.",
    "module.role_permission.title": "Rollen & Berechtigungen",
    "module.role_permission.desc": "Konfigurieren Sie Zugriffsbeschränkungen.",
    "module.social_account.title": "Social-Media-Konten",
    "module.social_account.desc": "Verknüpfen Sie geschäftliche Social-Media-Kanal.",
    "module.admin_approval.title": "Admin-Freigabe",
    "module.admin_approval.desc": "Erfordern Sie Administrator-Freigaben für Änderungen.",

    // General Sub-components
    "pricing.title": "Transparente & flexible Preispläne",
    "pricing.desc": "Beginnen Sie mit unserem zentralen Kernsystem und fügen Sie modulare Komponenten hinzu, wenn Ihr Betrieb wächst.",
    "pricing.monthly": "/Monat",
    "pricing.free_trial": "14 Tage kostenlos testen",
    "faq.title": "Häufig gestellte Fragen (FAQ)",
    "faq.desc": "Haben Sie Fragen zur tiefgehenden Integration oder zum Deployment von GastroWin? Unser kulinarischer Support hilft Ihnen jederzeit.",
    "testimonials.title": "Vertraut von zukunftsorientierten Gastronomen",
    "testimonials.desc": "Erfahren Sie, wie Sterne-Restaurants und belebte Bistros vor Ort ihre Arbeitsabläufe mit GastroWin automatisieren.",
    "footer.newsletter": "Abonnieren Sie unseren Newsletter für wöchentliche Gastro-Betriebstipps."
  },
  vi: {
    // Navbar
    "nav.home": "Trang chủ",
    "nav.chatbot": "Trợ lý ảo",
    "nav.product": "Sản phẩm",
    "nav.recruitment": "Tuyển dụng",
    "nav.ecosystem": "Hệ sinh thái",
    "nav.pricing": "Bảng giá",
    "nav.contact": "Liên hệ",
    "nav.login": "Đăng nhập",
    "nav.signup": "Đăng ký",
    "nav.get_demo": "Yêu cầu Demo",
    "nav.back_home": "Quay lại trang chủ",
    "nav.flagship_module": "Phân hệ ẩm thực AI độc quyền",
    "nav.live_sync": "Đồng bộ thời gian thực",
    "nav.active_modules": "Đã cấu hình 13 phân hệ hoạt động",
    "nav.ecosystem.loyawin.desc": "Tích điểm thông minh, quản lý hạng thành viên và CSKH tự động.",
    "nav.ecosystem.marketing.desc": "Bộ công cụ Social Auto Post, tăng độ phủ SEO và tiếp thị tự động.",
    
    // Hero Section
    "hero.title_part1": "Vận Hành Nhà Hàng",
    "hero.title_part2": "Với Một Hệ Sinh Thái",
    "hero.title_span": "AI Đồng Nhất.",
    "hero.desc": "GastroWin là hệ điều hành F&B toàn diện. Hãy chấm dứt việc phải quản lý 15 phần mềm rời rạc. Chúng tôi kết hợp thiết kế menu thông minh, dịch thuật giữ nguyên bố cục layout, tối ưu hóa ca làm việc, chấm công pháp lý, đặt bàn, và tự động hóa truyền thông xã hội trong một trang quản trị tuyệt đẹp.",
    "hero.cta": "Khám Phá Các Phân Hệ Tương Tác",
    "hero.stat_venues": "Nhà hàng đang chạy",
    "hero.stat_saved": "Thời gian vận hành tối ưu",
    "hero.stat_score": "Điểm số Trustpilot",

    // Tabs
    "tab.all": "Tất cả giải pháp",
    "tab.menu": "Menu Thông Minh & AI",
    "tab.ops": "Nhân sự & Vận hành",
    "tab.marketing": "Thương hiệu & Marketing",

    // Section Titles
    "section.modules_title": "Chọn phân hệ hệ thống tương tác",
    "section.modules_desc": "GastroWin hoạt động như một cụm ứng dụng tích hợp đa nền tảng. Nhấp vào bất kỳ tính năng nào bên dưới để trải nghiệm trình giả lập hành động thực tế.",
    
    // Modules
    "module.menu_translator.title": "Dịch thuật thực đơn AI",
    "module.menu_translator.desc": "Tự động dịch thực đơn sang nhiều ngôn ngữ",
    "module.food_images.title": "Hình ảnh món ăn AI",
    "module.food_images.desc": "Biến mô tả món ăn thành hình ảnh bằng AI",
    "module.price_update.title": "Đồng bộ giá thực đơn",
    "module.price_update.desc": "Điều chỉnh giá món ăn đồng loạt trong vài giây.",
    "module.qr_menu.title": "Mã QR thông minh",
    "module.qr_menu.desc": "Tạo mã QR thông minh cho các nhãn hàng",
    "module.allergen_intel.title": "Trí tuệ dị ứng thực phẩm",
    "module.allergen_intel.desc": "Tự động phân tích cảnh báo chất gây dị ứng",
    "module.shift_planner.title": "Lập lịch ca làm việc AI",
    "module.shift_planner.desc": "Lập lịch ca làm việc, tối ưu nhân sự",
    "module.checkin.title": "Chấm công",
    "module.checkin.desc": "Chấm công GPS & QR chống gian lận",
    "module.payroll.title": "Đối chiếu bảng lương",
    "module.payroll.desc": "Tự động tính lương chính xác dựa trên dữ liệu ca làm",
    "module.leave_calc.title": "Nghỉ phép & Flextime",
    "module.leave_calc.desc": "Quản lý yêu cầu nghỉ phép và phê duyệt trực tuyến",
    "module.staff_roles.title": "Phân quyền nhân sự",
    "module.staff_roles.desc": "Quản lý nhân viên & Phân quyền",
    "module.booking.title": "Đặt bàn GastroWin",
    "module.booking.desc": "Quản lý đặt bàn trực tuyến và sơ đồ sảnh thông minh",
    "module.auto_post.title": "Tự động đăng bài MXH",
    "module.auto_post.desc": "Tự động lên lịch và đăng bài quảng cáo lên mạng xã hội",
    "module.seo_opt.title": "SEO Google Maps",
    "module.seo_opt.desc": "Tối ưu hóa nội dung chuẩn SEO để thu hút khách hàng",
    "module.review_booster.title": "Tăng trưởng đánh giá",
    "module.review_booster.desc": "Theo dõi và tối ưu hóa điểm số đánh giá nhà hàng",
    "module.campaign_setting.title": "Chiến dịch Marketing",
    "module.campaign_setting.desc": "Tạo và quản lý các chiến dịch khuyến mãi",
    "module.catering.title": "Yêu cầu tiệc & Sự kiện",
    "module.catering.desc": "Xử lý đơn đặt tiệc nhóm và yêu cầu catering sự kiện chuyên nghiệp.",
    "module.brand_setting.title": "Cấu hình thương hiệu",
    "module.brand_setting.desc": "Cấu hình logo, màu sắc & phông chữ thương hiệu.",
    "module.role_permission.title": "Vai trò & Quyền hạn",
    "module.role_permission.desc": "Cấu hình giới hạn quyền truy cập chi tiết.",
    "module.social_account.title": "Tài khoản mạng xã hội",
    "module.social_account.desc": "Liên kết tài sản mạng xã hội của doanh nghiệp.",
    "module.admin_approval.title": "Phê duyệt của Admin",
    "module.admin_approval.desc": "Yêu cầu quản trị viên phê duyệt cho các thay đổi.",

    // General Sub-components
    "pricing.title": "Kế hoạch giá minh bạch & linh hoạt",
    "pricing.desc": "Bắt đầu với trang quản trị cốt lõi và chỉ bổ sung thêm các phân hệ tính năng khi quy mô nhà hàng của bạn mở rộng.",
    "pricing.monthly": "/tháng",
    "pricing.free_trial": "Dùng thử miễn phí 14 ngày",
    "faq.title": "Các câu hỏi thường gặp",
    "faq.desc": "Bạn có thắc mắc cụ thể về khả năng tích hợp chuyên sâu của GastroWin? Hãy liên hệ với đội ngũ kỹ sư của chúng tôi.",
    "testimonials.title": "Được tin dùng bởi các nhà ẩm thực hàng đầu",
    "testimonials.desc": "Xem cách các nhà hàng gắn sao Michelin và các quán ăn địa phương bận rộn tự động hóa hoạt động bằng GastroWin.",
    "footer.newsletter": "Đăng ký nhận bản tin mẹo vận hành nhà hàng hiệu quả hàng tuần từ GastroWin."
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageContextProps {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

// Safe localStorage helpers to prevent SecurityErrors in sandboxed iframes
const safeGetLocalStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.warn("Storage access denied:", e);
    return null;
  }
};

const safeSetLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("Storage access denied:", e);
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<LanguageCode>(() => {
    return (safeGetLocalStorage("gastro_lang") as LanguageCode) || "vi"; // Vietnamese default or fallback
  });

  const setLang = (newLang: LanguageCode) => {
    setLangState(newLang);
    safeSetLocalStorage("gastro_lang", newLang);
  };

  const t = (key: string): string => {
    const translation = DICTIONARY[lang]?.[key] || DICTIONARY["en"]?.[key] || key;
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
