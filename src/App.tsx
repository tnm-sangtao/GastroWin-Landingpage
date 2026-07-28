/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import GastroWinHome from "./components/GastroWinHome";
import InteractiveSandbox from "./components/InteractiveSandbox";
import Footer from "./components/Footer";
import AIFoodImages from "./components/AIFoodImages";
import PriceUpdater from "./components/PriceUpdater";
import SmartQRMenu from "./components/SmartQRMenu";
import AllergenAnalyzer from "./components/AllergenAnalyzer";
import ShiftPlanner from "./components/ShiftPlanner";
import AttendanceCheckin from "./components/AttendanceCheckin";
import PayrollReconciliation from "./components/PayrollReconciliation";
import LeaveFlextimeManager from "./components/LeaveFlextimeManager";
import StaffRoles from "./components/StaffRoles";
import BookingManager from "./components/BookingManager";
import SocialAutoPost from "./components/SocialAutoPost";
import LocalSEOSnapshot from "./components/LocalSEOSnapshot";
import ReviewResponder from "./components/ReviewResponder";
import CampaignEngine from "./components/CampaignEngine";
import PricingPage from "./components/PricingPage";
import ContactPage from "./components/ContactPage";
import CateringInquiries from "./components/CateringInquiries";
import LoyaWinPage from "./components/LoyaWinPage";
import { Sparkles, ArrowRight, ShieldCheck, Play, Utensils, CheckCircle, Cookie, Sliders, ChevronDown, ChevronUp, Info } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

const manageCookiesTranslations = {
  en: {
    title: "Manage Cookies",
    desc: "You can choose which cookies to allow on GastroWin. Essential cookies are required to make our core system functional.",
    necessaryTitle: "Necessary",
    necessaryDesc: "Necessary cookies enable basic functions like page navigation and secure access. The website cannot function properly without them",
    marketingTitle: "Marketing",
    marketingDesc: "Marketing cookies help us measure advertising campaigns and optimize promotions",
    functionalTitle: "Functional",
    functionalDesc: "Functional cookies help us analyze website traffic and improve platform performance",
    externalMediaTitle: "External Media",
    externalMediaDesc: "External media cookies allow us to display maps or videos directly on the website",
    alwaysActive: "Always Active",
    saveChoice: "Save Choices",
    onlyNecessary: "Only Necessary",
    acceptAll: "Accept All Cookies",
    subCookies: "Details",
    cookieName: "Name",
    cookieExpiry: "Expiry",
    cookieType: "Type",
    necessaryItems: [
      { name: "Session & Security", provider: "First-party", expiry: "Session", desc: "Maintains secure sessions and guards against account hijacking." },
      { name: "CSRF Protection", provider: "First-party", expiry: "Session", desc: "Protects against Cross-Site Request Forgery attacks." },
      { name: "Google Tag Manager", provider: "Google", expiry: "1 Year", desc: "Essential tag container to load system scripts securely." },
      { name: "Google reCAPTCHA", provider: "Google", expiry: "6 Months", desc: "Spam protection and bot detection system." },
      { name: "Cloudflare Turnstile", provider: "Cloudflare", expiry: "1 Year", desc: "Privacy-preserving alternative to CAPTCHA for security." }
    ],
    marketingItems: [
      { name: "Facebook Pixel", provider: "Meta/Facebook", expiry: "3 Months", desc: "Measures social media ad campaign performance." },
      { name: "Microsoft Clarity", provider: "Microsoft", expiry: "1 Year", desc: "Anonymously tracks usage behavior to optimize navigation flows." },
      { name: "Google Ads", provider: "Google", expiry: "3 Months", desc: "Delivers relevant promotions based on site engagement." },
      { name: "Google Ads Remarketing", provider: "Google", expiry: "3 Months", desc: "Shows targeted offers on third-party websites." },
      { name: "Google Ads Conversion Tracking", provider: "Google", expiry: "3 Months", desc: "Tracks the success of marketing campaigns." },
      { name: "Google Maps", provider: "Google", expiry: "1 Year", desc: "Integrates location services for store searches." }
    ],
    functionalItems: [
      { name: "Language Preferences", provider: "First-party", expiry: "1 Year", desc: "Saves language selection for future visits." },
      { name: "Visual Themes", provider: "First-party", expiry: "1 Year", desc: "Remembers light or dark theme choices." }
    ],
    externalMediaItems: [
      { name: "YouTube Video Player", provider: "Google/YouTube", expiry: "Session", desc: "Allows playing embedded videos on the site." },
      { name: "Vimeo Player", provider: "Vimeo", expiry: "Session", desc: "Enables Vimeo video streaming and players." }
    ]
  },
  vi: {
    title: "Quản lý Cookie",
    desc: "Bạn có thể chọn loại cookie muốn cho phép trên GastroWin. Các cookie thiết yếu là bắt buộc để hệ thống của chúng tôi hoạt động.",
    necessaryTitle: "Thiết yếu",
    necessaryDesc: "Cookie thiết yếu kích hoạt các chức năng cơ bản như điều hướng trang và truy cập an toàn. Trang web không thể hoạt động chính xác nếu không có chúng",
    marketingTitle: "Tiếp thị",
    marketingDesc: "Cookie tiếp thị giúp chúng tôi đo lường các chiến dịch quảng cáo và tối ưu hóa các chương trình khuyến mãi",
    functionalTitle: "Chức năng",
    functionalDesc: "Cookie chức năng giúp chúng tôi phân tích lưu lượng truy cập trang web và cải thiện hiệu suất nền tảng",
    externalMediaTitle: "Phương tiện bên ngoài",
    externalMediaDesc: "Cookie phương tiện bên ngoài cho phép chúng tôi hiển thị bản đồ hoặc video trực tiếp trên trang web",
    alwaysActive: "Luôn hoạt động",
    saveChoice: "Lưu tùy chọn",
    onlyNecessary: "Chỉ thiết yếu",
    acceptAll: "Chấp nhận tất cả cookie",
    subCookies: "Chi tiết",
    cookieName: "Tên",
    cookieExpiry: "Thời hạn",
    cookieType: "Loại",
    necessaryItems: [
      { name: "Session & Security", provider: "Bên thứ nhất", expiry: "Phiên hoạt động", desc: "Duy trì phiên đăng nhập bảo mật và ngăn chặn chiếm đoạt tài khoản." },
      { name: "CSRF Protection", provider: "Bên thứ nhất", expiry: "Phiên hoạt động", desc: "Ngăn chặn các cuộc tấn công giả mạo yêu cầu chéo trang." },
      { name: "Google Tag Manager", provider: "Google", expiry: "1 Năm", desc: "Trình quản lý thẻ thiết yếu để tải các kịch bản hệ thống an toàn." },
      { name: "Google reCAPTCHA", provider: "Google", expiry: "6 Tháng", desc: "Hệ thống phát hiện bot và chống spam." },
      { name: "Cloudflare Turnstile", provider: "Cloudflare", expiry: "1 Năm", desc: "Giải pháp thay thế CAPTCHA bảo mật quyền riêng tư." }
    ],
    marketingItems: [
      { name: "Facebook Pixel", provider: "Meta/Facebook", expiry: "3 Tháng", desc: "Đo lường hiệu quả chiến dịch quảng cáo mạng xã hội." },
      { name: "Microsoft Clarity", provider: "Microsoft", expiry: "1 Năm", desc: "Theo dõi ẩn danh hành vi sử dụng để tối ưu hóa luồng điều hướng." },
      { name: "Google Ads", provider: "Google", expiry: "3 Tháng", desc: "Phân phối các chương trình khuyến mãi dựa trên mức độ tương tác." },
      { name: "Google Ads Remarketing", provider: "Google", expiry: "3 Tháng", desc: "Hiển thị các ưu đãi mục tiêu trên trang web bên thứ ba." },
      { name: "Google Ads Conversion Tracking", provider: "Google", expiry: "3 Tháng", desc: "Theo dõi hiệu quả chuyển đổi của chiến dịch tiếp thị." },
      { name: "Google Maps", provider: "Google", expiry: "1 Năm", desc: "Tích hợp dịch vụ vị trí để tìm kiếm chi nhánh." }
    ],
    functionalItems: [
      { name: "Language Preferences", provider: "Bên thứ nhất", expiry: "1 Năm", desc: "Lưu lựa chọn ngôn ngữ cho các lần truy cập sau." },
      { name: "Visual Themes", provider: "Bên thứ nhất", expiry: "1 Năm", desc: "Ghi nhớ tùy chọn chế độ sáng hoặc tối." }
    ],
    externalMediaItems: [
      { name: "YouTube Video Player", provider: "Google/YouTube", expiry: "Phiên hoạt động", desc: "Cho phép phát video nhúng trên trang web." },
      { name: "Vimeo Player", provider: "Vimeo", expiry: "Phiên hoạt động", desc: "Cho phép phát video Vimeo tích hợp." }
    ]
  },
  de: {
    title: "Cookie-Einstellungen",
    desc: "Sie können auswählen, welche Cookies Sie auf GastroWin zulassen möchten. Essenzielle Cookies sind für die Funktion unseres Systems erforderlich.",
    necessaryTitle: "Notwendig",
    necessaryDesc: "Notwendige Cookies ermöglichen grundlegende Funktionen wie Seitennavigation und sicheren Zugriff. Die Website kann ohne sie nicht ordnungsgemäß funktionieren",
    marketingTitle: "Marketing",
    marketingDesc: "Marketing-Cookies helfen uns, Werbekampagnen zu messen und Werbeaktionen zu optimieren",
    functionalTitle: "Funktionell",
    functionalDesc: "Funktionelle Cookies helfen uns, den Website-Verkehr zu analysieren und die Plattformleistung zu verbessern",
    externalMediaTitle: "Externe Medien",
    externalMediaDesc: "Externe Medien-Cookies ermöglichen es uns, Karten oder Videos direkt auf der Website anzuzeigen",
    alwaysActive: "Immer aktiv",
    saveChoice: "Auswahl speichern",
    onlyNecessary: "Nur notwendige",
    acceptAll: "Alle Cookies akzeptieren",
    subCookies: "Details",
    cookieName: "Name",
    cookieExpiry: "Ablauf",
    cookieType: "Typ",
    necessaryItems: [
      { name: "Session & Security", provider: "Erstanbieter", expiry: "Sitzung", desc: "Ermöglicht sichere Sitzungen und schützt vor Kontomissbrauch." },
      { name: "CSRF Protection", provider: "Erstanbieter", expiry: "Sitzung", desc: "Schützt vor Cross-Site Request Forgery-Angriffen." },
      { name: "Google Tag Manager", provider: "Google", expiry: "1 Jahr", desc: "Essentieller Tag-Container zum sicheren Laden von Skripten." },
      { name: "Google reCAPTCHA", provider: "Google", expiry: "6 Monate", desc: "Spam-Schutz und Bot-Erkennungssystem." },
      { name: "Cloudflare Turnstile", provider: "Cloudflare", expiry: "1 Jahr", desc: "Datenschutzfreundliche CAPTCHA-Alternative für Sicherheit." }
    ],
    marketingItems: [
      { name: "Facebook Pixel", provider: "Meta/Facebook", expiry: "3 Monate", desc: "Misst den Erfolg von Social-Media-Werbekampagnen." },
      { name: "Microsoft Clarity", provider: "Microsoft", expiry: "1 Jahr", desc: "Analysiert anonym das Nutzungsverhalten zur Optimierung der Navigation." },
      { name: "Google Ads", provider: "Google", expiry: "3 Monate", desc: "Liefert relevante Angebote basierend auf Webseiten-Interaktionen." },
      { name: "Google Ads Remarketing", provider: "Google", expiry: "3 Monate", desc: "Zeigt gezielte Angebote auf Drittanbieter-Websites an." },
      { name: "Google Ads Conversion Tracking", provider: "Google", expiry: "3 Monate", desc: "Misst den Erfolg von Google-Anzeigen-Kampagnen." },
      { name: "Google Maps", provider: "Google", expiry: "1 Jahr", desc: "Integriert Kartenfunktionen zur Anzeige von Filialstandorten." }
    ],
    functionalItems: [
      { name: "Language Preferences", provider: "Erstanbieter", expiry: "1 Jahr", desc: "Speichert die Sprachauswahl für zukünftige Besuche." },
      { name: "Visual Themes", provider: "Erstanbieter", expiry: "1 Jahr", desc: "Speichert die Wahl des hellen oder dunklen Designs." }
    ],
    externalMediaItems: [
      { name: "YouTube Video Player", provider: "Google/YouTube", expiry: "Sitzung", desc: "Ermöglicht das Abspielen von eingebetteten Videos auf der Website." },
      { name: "Vimeo Player", provider: "Vimeo", expiry: "Sitzung", desc: "Ermöglicht Vimeo-Videostreaming und -Player." }
    ]
  }
};

const cookieTranslations = {
  en: {
    text: 'By clicking "Accept all cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.',
    setting: "Cookie Setting",
    necessary: "Only Necessary",
    accept: "Accept All Cookies"
  },
  vi: {
    text: 'Bằng cách nhấp vào "Chấp nhận tất cả cookie", bạn đồng ý với việc lưu trữ cookie trên thiết bị của mình để nâng cao trải nghiệm điều hướng trang web, phân tích việc sử dụng trang web và hỗ trợ các nỗ lực tiếp thị của chúng tôi.',
    setting: "Cài đặt cookie",
    necessary: "Chỉ cookie thiết yếu",
    accept: "Chấp nhận tất cả cookie"
  },
  de: {
    text: 'Durch Klicken auf „Alle Cookies akzeptieren“ stimmen Sie der Speicherung von Cookies auf Ihrem Gerät zu, um die Websitenavigation zu verbessern, die Websitenutzung zu analysieren und unsere Marketingbemühungen zu unterstützen.',
    setting: "Cookie-Einstellungen",
    necessary: "Nur notwendige",
    accept: "Alle Cookies akzeptieren"
  }
};

export default function App() {
  const { lang } = useLanguage();
  const [currentView, setCurrentView] = useState<"landing" | "tool" | "food-images" | "price-update" | "qr-menu" | "allergen-intel" | "shift-planner" | "attendance-checkin" | "payroll-reconciliation" | "leave-manager" | "staff-roles" | "booking" | "social-auto-post" | "seo-snapshot" | "review-responder" | "campaign-engine" | "pricing" | "contact" | "catering" | "loyawin">("landing");
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<"privacy" | "refund" | "terms" | null>(null);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [showManageCookiesModal, setShowManageCookiesModal] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(true);
  const [functionalCookies, setFunctionalCookies] = useState(true);
  const [externalMediaCookies, setExternalMediaCookies] = useState(true);
  const [cookieDetails, setCookieDetails] = useState<Record<string, boolean>>({
    // Necessary
    "Session & Security": true,
    "CSRF Protection": true,
    "Google Tag Manager": true,
    "Google reCAPTCHA": true,
    "Cloudflare Turnstile": true,
    // Marketing
    "Facebook Pixel": true,
    "Microsoft Clarity": true,
    "Google Ads": true,
    "Google Ads Remarketing": true,
    "Google Ads Conversion Tracking": true,
    "Google Maps": true,
    // Functional
    "Language Preferences": true,
    "Visual Themes": true,
    // External Media
    "YouTube Video Player": true,
    "Vimeo Player": true,
  });
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    necessary: true,
    marketing: true,
    functional: false,
    externalMedia: false,
  });
  const [expandedSubCookies, setExpandedSubCookies] = useState<Record<string, boolean>>({});

  const toggleSubCookieDescription = (name: string) => {
    setExpandedSubCookies(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleCookieChoice = (choice: string) => {
    if (choice === "setting") {
      setShowManageCookiesModal(true);
    } else {
      setShowCookieConsent(false);
      if (choice === "all") {
        setMarketingCookies(true);
        setFunctionalCookies(true);
        setExternalMediaCookies(true);
        setCookieDetails({
          "Session & Security": true,
          "CSRF Protection": true,
          "Google Tag Manager": true,
          "Google reCAPTCHA": true,
          "Cloudflare Turnstile": true,
          "Facebook Pixel": true,
          "Microsoft Clarity": true,
          "Google Ads": true,
          "Google Ads Remarketing": true,
          "Google Ads Conversion Tracking": true,
          "Google Maps": true,
          "Language Preferences": true,
          "Visual Themes": true,
          "YouTube Video Player": true,
          "Vimeo Player": true,
        });
      } else if (choice === "necessary") {
        setMarketingCookies(false);
        setFunctionalCookies(false);
        setExternalMediaCookies(false);
        setCookieDetails({
          "Session & Security": true,
          "CSRF Protection": true,
          "Google Tag Manager": true,
          "Google reCAPTCHA": true,
          "Cloudflare Turnstile": true,
          "Facebook Pixel": false,
          "Microsoft Clarity": false,
          "Google Ads": false,
          "Google Ads Remarketing": false,
          "Google Ads Conversion Tracking": false,
          "Google Maps": false,
          "Language Preferences": false,
          "Visual Themes": false,
          "YouTube Video Player": false,
          "Vimeo Player": false,
        });
      }
    }
  };

  const handleCategoryToggle = (category: "marketing" | "functional" | "externalMedia", checked: boolean) => {
    if (category === "marketing") {
      setMarketingCookies(checked);
      setCookieDetails(prev => ({
        ...prev,
        "Facebook Pixel": checked,
        "Microsoft Clarity": checked,
        "Google Ads": checked,
        "Google Ads Remarketing": checked,
        "Google Ads Conversion Tracking": checked,
        "Google Maps": checked,
      }));
    } else if (category === "functional") {
      setFunctionalCookies(checked);
      setCookieDetails(prev => ({
        ...prev,
        "Language Preferences": checked,
        "Visual Themes": checked,
      }));
    } else if (category === "externalMedia") {
      setExternalMediaCookies(checked);
      setCookieDetails(prev => ({
        ...prev,
        "YouTube Video Player": checked,
        "Vimeo Player": checked,
      }));
    }
  };

  const handleSubCookieToggle = (name: string, checked: boolean) => {
    setCookieDetails(prev => {
      const next = { ...prev, [name]: checked };
      
      const marketingKeys = ["Facebook Pixel", "Microsoft Clarity", "Google Ads", "Google Ads Remarketing", "Google Ads Conversion Tracking", "Google Maps"];
      const functionalKeys = ["Language Preferences", "Visual Themes"];
      const externalMediaKeys = ["YouTube Video Player", "Vimeo Player"];
      
      if (marketingKeys.includes(name)) {
        const anyMarketingChecked = marketingKeys.some(key => key === name ? checked : next[key]);
        setMarketingCookies(anyMarketingChecked);
      } else if (functionalKeys.includes(name)) {
        const anyFunctionalChecked = functionalKeys.some(key => key === name ? checked : next[key]);
        setFunctionalCookies(anyFunctionalChecked);
      } else if (externalMediaKeys.includes(name)) {
        const anyExternalChecked = externalMediaKeys.some(key => key === name ? checked : next[key]);
        setExternalMediaCookies(anyExternalChecked);
      }
      
      return next;
    });
  };

  const policyTranslations: Record<string, Record<string, { title: string; content: string }>> = {
    en: {
      privacy: {
        title: "Privacy Policy",
        content: "At GastroWin, we take your privacy seriously. We collect minimal operational data necessary to manage your restaurant's digital menus, shift rosters, and payroll summaries. All data is processed securely and is never shared with third parties without your explicit consent."
      },
      refund: {
        title: "Refund Policy",
        content: "GastroWin offers a 14-day money-back guarantee for all of our subscription plans. If you are not fully satisfied with our next-generation F&B operating system, simply contact our support team within 14 days of purchase for a full, hassle-free refund."
      },
      terms: {
        title: "Terms of Service",
        content: "By using GastroWin, you agree to our terms. Our service is provided 'as is' to empower restaurant owners with clean, efficient tools. You are responsible for ensuring your staff data is up-to-date and correct. Commercial use is governed by our subscription model."
      }
    },
    vi: {
      privacy: {
        title: "Chính sách bảo mật",
        content: "Tại GastroWin, chúng tôi coi trọng quyền riêng tư của bạn. Chúng tôi chỉ thu thập dữ liệu vận hành tối thiểu cần thiết để quản lý thực đơn kỹ thuật số, lịch trực của nhân viên và bảng tính lương của nhà hàng. Mọi dữ liệu đều được xử lý an toàn và không bao giờ chia sẻ với bên thứ ba nếu không có sự đồng ý của bạn."
      },
      refund: {
        title: "Chính sách hoàn tiền",
        content: "GastroWin cung cấp chính sách hoàn tiền trong vòng 14 ngày cho tất cả các gói đăng ký của chúng tôi. Nếu bạn không hoàn toàn hài lòng với hệ điều hành F&B thế hệ mới này, chỉ cần liên hệ với nhóm hỗ trợ của chúng tôi trong vòng 14 ngày kể từ khi mua để được hoàn tiền đầy đủ."
      },
      terms: {
        title: "Điều khoản dịch vụ",
        content: "Bằng cách sử dụng GastroWin, bạn đồng ý với các điều khoản của chúng tôi. Dịch vụ của chúng tôi được cung cấp 'như hiện tại' để trao quyền cho chủ nhà hàng bằng các công cụ tinh gọn và hiệu quả. Bạn có trách nhiệm đảm bảo dữ liệu nhân viên của mình được cập nhật và chính xác."
      }
    },
    de: {
      privacy: {
        title: "Datenschutzerklärung",
        content: "Bei GastroWin nehmen wir Ihre Privatsphäre ernst. Wir sammeln nur die minimalen Betriebsdaten, die für die Verwaltung Ihrer digitalen Speisekarten, Dienstpläne und Lohnabrechnungen erforderlich sind. Alle Daten werden sicher verarbeitet und niemals ohne Ihre Zustimmung an Dritte weitergegeben."
      },
      refund: {
        title: "Rückerstattungsrichtlinie",
        content: "GastroWin bietet eine 14-tägige Geld-zurück-Garantie für alle unsere Abonnements. Wenn Sie mit unserem F&B-Betriebssystem der nächsten Generation nicht vollständig zufrieden sind, kontaktieren Sie einfach unser Support-Team innerhalb von 14 Tagen nach dem Kauf für eine vollständige Rückerstattung."
      },
      terms: {
        title: "Nutzungsbedingungen",
        content: "Durch die Nutzung von GastroWin stimmen unsren Bedingungen zu. Unser Service wird 'wie besehen' bereitgestellt, um Restaurantbesitzern saubere und effiziente Tools zu bieten. Sie sind dafür verantwortlich, dass Ihre Mitarbeiterdaten aktuell und korrekt sind."
      }
    }
  };

  const modalTranslations: Record<string, Record<string, string>> = {
    en: {
      welcome: "Welcome Aboard!",
      redirecting: "Creating your secure workspace. Redirecting you to the translation deck...",
      claim: "Claim Your Free Translation",
      desc: "Enter your details to create an account and unlock high-res translation exports.",
      namePlaceholder: "Your name or Chef name",
      emailPlaceholder: "Restaurant email address",
      btnText: "Start Translating For Free",
    },
    de: {
      welcome: "Willkommen an Bord!",
      redirecting: "Erstelle deinen sicheren Arbeitsbereich. Weiterleitung zur Übersetzungsplattform...",
      claim: "Kostenlose Übersetzung sichern",
      desc: "Geben Sie Ihre Daten ein, um ein Konto zu erstellen und hochauflösende Übersetzungsexporte freizuschalten.",
      namePlaceholder: "Ihr Name oder Name des Küchenchefs",
      emailPlaceholder: "E-Mail-Adresse des Restaurants",
      btnText: "Kostenlos Übersetzung starten",
    },
    vi: {
      welcome: "Chào mừng bạn gia nhập!",
      redirecting: "Đang khởi tạo không gian làm việc an toàn của bạn. Đang chuyển hướng bạn đến khu vực dịch thuật...",
      claim: "Nhận bản dịch miễn phí của bạn",
      desc: "Nhập thông tin chi tiết của bạn để tạo tài khoản và mở khóa tính năng xuất bản dịch chất lượng cao.",
      namePlaceholder: "Tên của bạn hoặc tên Bếp trưởng",
      emailPlaceholder: "Địa chỉ email nhà hàng",
      btnText: "Bắt đầu dịch thuật miễn phí",
    },
  };

  const getModalText = (key: string, fallback: string) => {
    return modalTranslations[lang]?.[key] || fallback;
  };

  // Smooth scroll handler
  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== "landing") {
      setCurrentView("landing");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }, 150);
      return;
    }
    if (sectionId === "how-it-works") {
      setCurrentView("tool");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  // Triggers when user clicks CTA buttons to welcome them to the interactive app
  const handleOpenDemo = () => {
    setCurrentView("tool");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadEmail.trim()) {
      setLeadSuccess(true);
      setTimeout(() => {
        setLeadModalOpen(false);
        setLeadSuccess(false);
        setLeadEmail("");
        // Route to the tool workspace directly for a spectacular onboarding experience
        setCurrentView("tool");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 selection:bg-brand/20 selection:text-brand-dark flex flex-col">
      {/* Navigation */}
      <Navbar 
        showCookieConsent={showCookieConsent || showManageCookiesModal}
        onScrollToSection={handleScrollToSection} 
        onOpenDemo={handleOpenDemo} 
        currentView={currentView}
        onNavigateHome={() => {
          setCurrentView("landing");
          window.scrollTo(0, 0);
        }}
        onNavigateToFoodImages={() => {
          setCurrentView("food-images");
          window.scrollTo(0, 0);
        }}
        onNavigateToPriceUpdater={() => {
          setCurrentView("price-update");
          window.scrollTo(0, 0);
        }}
        onNavigateToSmartQRMenu={() => {
          setCurrentView("qr-menu");
          window.scrollTo(0, 0);
        }}
        onNavigateToAllergenAnalyzer={() => {
          setCurrentView("allergen-intel");
          window.scrollTo(0, 0);
        }}
        onNavigateToShiftPlanner={() => {
          setCurrentView("shift-planner");
          window.scrollTo(0, 0);
        }}
        onNavigateToAttendanceCheckin={() => {
          setCurrentView("attendance-checkin");
          window.scrollTo(0, 0);
        }}
        onNavigateToPayrollReconciliation={() => {
          setCurrentView("payroll-reconciliation");
          window.scrollTo(0, 0);
        }}
        onNavigateToLeaveManager={() => {
          setCurrentView("leave-manager");
          window.scrollTo(0, 0);
        }}
        onNavigateToStaffRoles={() => {
          setCurrentView("staff-roles");
          window.scrollTo(0, 0);
        }}
        onNavigateToBooking={() => {
          setCurrentView("booking");
          window.scrollTo(0, 0);
        }}
        onNavigateToSocialAutoPost={() => {
          setCurrentView("social-auto-post");
          window.scrollTo(0, 0);
        }}
        onNavigateToLocalSEOSnapshot={() => {
          setCurrentView("seo-snapshot");
          window.scrollTo(0, 0);
        }}
        onNavigateToReviewResponder={() => {
          setCurrentView("review-responder");
          window.scrollTo(0, 0);
        }}
        onNavigateToCampaignEngine={() => {
          setCurrentView("campaign-engine");
          window.scrollTo(0, 0);
        }}
        onNavigateToPricing={() => {
          setCurrentView("pricing");
          window.scrollTo(0, 0);
        }}
        onNavigateToContact={() => {
          setCurrentView("contact");
          window.scrollTo(0, 0);
        }}
        onNavigateToCatering={() => {
          setCurrentView("catering");
          window.scrollTo(0, 0);
        }}
        onNavigateToLoyaWin={() => {
          setCurrentView("loyawin");
          window.scrollTo(0, 0);
        }}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {currentView === "landing" ? (
          <>
            <GastroWinHome
              onNavigateToTool={handleOpenDemo}
              onNavigateToFoodImages={() => {
                setCurrentView("food-images");
                window.scrollTo(0, 0);
              }}
              onNavigateToPriceUpdater={() => {
                setCurrentView("price-update");
                window.scrollTo(0, 0);
              }}
              onNavigateToSmartQRMenu={() => {
                setCurrentView("qr-menu");
                window.scrollTo(0, 0);
              }}
              onNavigateToAllergenAnalyzer={() => {
                setCurrentView("allergen-intel");
                window.scrollTo(0, 0);
              }}
              onNavigateToShiftPlanner={() => {
                setCurrentView("shift-planner");
                window.scrollTo(0, 0);
              }}
              onNavigateToAttendanceCheckin={() => {
                setCurrentView("attendance-checkin");
                window.scrollTo(0, 0);
              }}
              onNavigateToPayrollReconciliation={() => {
                setCurrentView("payroll-reconciliation");
                window.scrollTo(0, 0);
              }}
              onNavigateToLeaveManager={() => {
                setCurrentView("leave-manager");
                window.scrollTo(0, 0);
              }}
              onNavigateToStaffRoles={() => {
                setCurrentView("staff-roles");
                window.scrollTo(0, 0);
              }}
              onNavigateToBooking={() => {
                setCurrentView("booking");
                window.scrollTo(0, 0);
              }}
              onNavigateToSocialAutoPost={() => {
                setCurrentView("social-auto-post");
                window.scrollTo(0, 0);
              }}
              onNavigateToLocalSEOSnapshot={() => {
                setCurrentView("seo-snapshot");
                window.scrollTo(0, 0);
              }}
              onNavigateToReviewResponder={() => {
                setCurrentView("review-responder");
                window.scrollTo(0, 0);
              }}
              onNavigateToCampaignEngine={() => {
                setCurrentView("campaign-engine");
                window.scrollTo(0, 0);
              }}
            />
          </>
        ) : currentView === "food-images" ? (
          <AIFoodImages 
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "price-update" ? (
          <PriceUpdater
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "qr-menu" ? (
          <SmartQRMenu
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "allergen-intel" ? (
          <AllergenAnalyzer
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "shift-planner" ? (
          <ShiftPlanner
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "attendance-checkin" ? (
          <AttendanceCheckin
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "payroll-reconciliation" ? (
          <PayrollReconciliation
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "leave-manager" ? (
          <LeaveFlextimeManager
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "staff-roles" ? (
          <StaffRoles
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "booking" ? (
          <BookingManager
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "social-auto-post" ? (
          <SocialAutoPost
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "seo-snapshot" ? (
          <LocalSEOSnapshot
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "review-responder" ? (
          <ReviewResponder
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "campaign-engine" ? (
          <CampaignEngine
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "pricing" ? (
          <PricingPage
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onSelectPlan={(planName) => {
              setLeadModalOpen(true);
            }}
          />
        ) : currentView === "contact" ? (
          <ContactPage
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "catering" ? (
          <CateringInquiries
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ) : currentView === "loyawin" ? (
          <LoyaWinPage
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenDemo={handleOpenDemo}
          />
        ) : (
          <InteractiveSandbox 
            onBackToHome={() => {
              setCurrentView("landing");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} 
          />
        )}

      </main>

      {/* Footer copyright, directory, newsletter */}
      <Footer 
        onNavigateToPricing={() => {
          setCurrentView("pricing");
          window.scrollTo(0, 0);
        }}
        onNavigateToContact={() => {
          setCurrentView("contact");
          window.scrollTo(0, 0);
        }}
        onNavigateToAbout={() => {
          if (currentView !== "landing") {
            setCurrentView("landing");
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenPrivacyPolicy={() => setActivePolicyModal("privacy")}
        onOpenRefundPolicy={() => setActivePolicyModal("refund")}
        onOpenTermsOfService={() => setActivePolicyModal("terms")}
      />

      {/* POLICY MODALS */}
      {activePolicyModal && (
        <div id="modal-policy" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl border-0 relative animate-in zoom-in-95 duration-200 text-left">
            <button
              onClick={() => setActivePolicyModal(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 font-bold p-1.5 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#7553FF]/10 text-[#7553FF] rounded-full flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                {policyTranslations[lang]?.[activePolicyModal]?.title || policyTranslations.en[activePolicyModal]?.title}
              </h3>
            </div>

            <p className="text-sm text-slate-500 font-normal leading-relaxed">
              {policyTranslations[lang]?.[activePolicyModal]?.content || policyTranslations.en[activePolicyModal]?.content}
            </p>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setActivePolicyModal(null)}
                className="bg-[#7553FF] hover:bg-[#623eff] text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                {lang === "vi" ? "Đóng" : lang === "de" ? "Schließen" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QUICK REGISTRATION LEAD POPUP */}
      {leadModalOpen && (
        <div id="modal-lead" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl border-0 text-center relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setLeadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold p-1 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 fill-brand/10" />
            </div>

            {leadSuccess ? (
              <div className="py-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-1">{getModalText("welcome", "Welcome Aboard!")}</h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                  {getModalText("redirecting", "Creating your secure workspace. Redirecting you to the translation deck...")}
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                  {getModalText("claim", "Claim Your Free Translation")}
                </h3>
                <p className="text-xs text-slate-500 font-semibold mb-6 leading-relaxed">
                  {getModalText("desc", "Enter your details to create an account and unlock high-res translation exports.")}
                </p>

                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder={getModalText("namePlaceholder", "Your name or Chef name")}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-brand rounded-xl px-4 py-3 text-xs font-semibold text-slate-800 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder={getModalText("emailPlaceholder", "Restaurant email address")}
                      className="w-full bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-brand rounded-xl px-4 py-3 text-xs font-semibold text-slate-800 outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand hover:bg-brand-hover text-white text-xs font-extrabold py-3 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {getModalText("btnText", "Start Translating For Free")}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* COOKIE CONSENT POPUP */}
      {showCookieConsent && (
        <div 
          id="cookie-consent-popover"
          className="fixed bottom-0 left-0 right-0 z-[120] bg-[#10182F] text-white border-t border-slate-800 shadow-2xl animate-in slide-in-from-bottom duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-3 lg:min-h-[95px] flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-[14px] lg:text-[12px] font-light text-slate-100 leading-relaxed max-w-3xl text-left">
              {cookieTranslations[lang as keyof typeof cookieTranslations]?.text || cookieTranslations.en.text}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full lg:w-auto justify-end">
              <button
                onClick={() => handleCookieChoice("setting")}
                className="w-full sm:w-auto text-[14px] lg:text-[12px] font-light border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white px-4 py-2.5 rounded-full transition-all cursor-pointer text-center whitespace-nowrap"
              >
                {cookieTranslations[lang as keyof typeof cookieTranslations]?.setting || cookieTranslations.en.setting}
              </button>
              <button
                onClick={() => handleCookieChoice("necessary")}
                className="w-full sm:w-auto text-[14px] lg:text-[12px] font-light border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white px-4 py-2.5 rounded-full transition-all cursor-pointer text-center whitespace-nowrap"
              >
                {cookieTranslations[lang as keyof typeof cookieTranslations]?.necessary || cookieTranslations.en.necessary}
              </button>
              <button
                onClick={() => handleCookieChoice("all")}
                className="w-full sm:w-auto text-[14px] lg:text-[12px] font-light bg-[#7553FF] hover:bg-[#5F3DEB] text-white px-5 py-2.5 rounded-full transition-all cursor-pointer text-center whitespace-nowrap shadow-lg shadow-purple-500/15"
              >
                {cookieTranslations[lang as keyof typeof cookieTranslations]?.accept || cookieTranslations.en.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MANAGE COOKIES MODAL */}
      {showManageCookiesModal && (
        <div id="modal-manage-cookies" className="fixed inset-0 z-[130] flex items-center justify-center bg-slate-950/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] p-4 sm:p-6 md:p-8 max-w-2xl w-full shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200 text-left flex flex-col max-h-[85vh] sm:max-h-[90vh]">
            <button
              onClick={() => setShowManageCookiesModal(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-600 font-bold p-1.5 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.title || manageCookiesTranslations.en.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed mb-4 sm:mb-6">
              {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.desc || manageCookiesTranslations.en.desc}
            </p>

            {/* Scrollable list of Cookie groups */}
            <div className="space-y-3 sm:space-y-4 overflow-y-auto pr-1 flex-1 max-h-[45vh] sm:max-h-[50vh] mb-4 sm:mb-6 scrollbar-thin">
              
              {/* Category 1: Necessary Cookies */}
              <div className="bg-slate-50/60 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-200">
                <div 
                  onClick={() => setExpandedCategories(prev => ({ ...prev, necessary: !prev.necessary }))}
                  className="p-3.5 sm:p-4 cursor-pointer hover:bg-slate-100/50 transition-colors text-left"
                >
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <h4 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                        {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.necessaryTitle || manageCookiesTranslations.en.necessaryTitle}
                      </h4>
                      <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            role="switch"
                            aria-checked={true}
                            disabled={true}
                            className="relative inline-flex h-5 w-9 shrink-0 cursor-not-allowed rounded-full border-2 border-transparent bg-[#7553FF]/65 transition-colors duration-200 ease-in-out focus:outline-none"
                          >
                            <span className="pointer-events-none inline-block h-4 w-4 transform translate-x-4 rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out" />
                          </button>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCategories(prev => ({ ...prev, necessary: !prev.necessary }));
                          }}
                          className="p-1 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-slate-400"
                        >
                          {expandedCategories.necessary ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 font-light leading-relaxed max-w-full">
                      {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.necessaryDesc || manageCookiesTranslations.en.necessaryDesc}
                    </p>
                  </div>
                </div>

                {expandedCategories.necessary && (
                  <div className="px-4 pb-4 border-t border-slate-100/80 bg-white/50 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="mt-3 space-y-2">
                      <div className="space-y-2">
                        {((manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations] as any)?.necessaryItems || manageCookiesTranslations.en.necessaryItems).map((item: any, idx: number) => (
                          <div key={idx} className="p-3 bg-transparent rounded-xl border border-slate-100/80 flex flex-col gap-2 text-left">
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-0.5 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-medium text-slate-800 text-sm">{item.name}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={() => toggleSubCookieDescription(item.name)}
                                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                  title="Show information"
                                >
                                  <Info className="w-4 h-4" />
                                </button>
                                <div className="flex items-center gap-1.5">
                                  <button
                                    type="button"
                                    role="switch"
                                    aria-checked={true}
                                    disabled={true}
                                    className="relative inline-flex h-5 w-9 shrink-0 cursor-not-allowed rounded-full border-2 border-transparent bg-[#7553FF]/65 transition-colors duration-200 ease-in-out focus:outline-none"
                                  >
                                    <span className="pointer-events-none inline-block h-4 w-4 transform translate-x-4 rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            {expandedSubCookies[item.name] && (
                              <div className="text-sm text-slate-500 font-normal leading-relaxed bg-slate-50/50 p-2.5 rounded-lg border border-slate-100/40 animate-in fade-in duration-150">
                                {item.desc}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Category 2: Marketing Cookies */}
              <div className="bg-slate-50/60 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-200">
                <div 
                  onClick={() => setExpandedCategories(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className="p-3.5 sm:p-4 cursor-pointer hover:bg-slate-100/50 transition-colors text-left"
                >
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <h4 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                        {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.marketingTitle || manageCookiesTranslations.en.marketingTitle}
                      </h4>
                      <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={marketingCookies}
                          onClick={() => handleCategoryToggle("marketing", !marketingCookies)}
                          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            marketingCookies ? "bg-[#7553FF]" : "bg-slate-200"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                              marketingCookies ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCategories(prev => ({ ...prev, marketing: !prev.marketing }));
                          }}
                          className="p-1 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-slate-400"
                        >
                          {expandedCategories.marketing ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 font-light leading-relaxed max-w-full">
                      {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.marketingDesc || manageCookiesTranslations.en.marketingDesc}
                    </p>
                  </div>
                </div>

                {expandedCategories.marketing && (
                  <div className="px-4 pb-4 border-t border-slate-100 bg-white/50 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="mt-3 space-y-2">
                      <div className="space-y-2">
                        {((manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations] as any)?.marketingItems || manageCookiesTranslations.en.marketingItems).map((item: any, idx: number) => (
                          <div key={idx} className="p-3 bg-transparent rounded-xl border border-slate-100/80 flex flex-col gap-2 text-left">
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-0.5 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-medium text-slate-800 text-sm">{item.name}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={() => toggleSubCookieDescription(item.name)}
                                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                  title="Show information"
                                >
                                  <Info className="w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked={cookieDetails[item.name] ?? false}
                                  onClick={() => handleSubCookieToggle(item.name, !(cookieDetails[item.name] ?? false))}
                                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                                    cookieDetails[item.name] ? "bg-[#7553FF]" : "bg-slate-200"
                                  }`}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                                      cookieDetails[item.name] ? "translate-x-4" : "translate-x-0"
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            {expandedSubCookies[item.name] && (
                              <div className="text-sm text-slate-500 font-normal leading-relaxed bg-slate-50/50 p-2.5 rounded-lg border border-slate-100/40 animate-in fade-in duration-150">
                                {item.desc}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Category 3: Functional Cookies */}
              <div className="bg-slate-50/60 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-200">
                <div 
                  onClick={() => setExpandedCategories(prev => ({ ...prev, functional: !prev.functional }))}
                  className="p-3.5 sm:p-4 cursor-pointer hover:bg-slate-100/50 transition-colors text-left"
                >
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <h4 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                        {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.functionalTitle || manageCookiesTranslations.en.functionalTitle}
                      </h4>
                      <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={functionalCookies}
                          onClick={() => handleCategoryToggle("functional", !functionalCookies)}
                          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            functionalCookies ? "bg-[#7553FF]" : "bg-slate-200"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                              functionalCookies ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCategories(prev => ({ ...prev, functional: !prev.functional }));
                          }}
                          className="p-1 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-slate-400"
                        >
                          {expandedCategories.functional ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 font-light leading-relaxed max-w-full">
                      {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.functionalDesc || manageCookiesTranslations.en.functionalDesc}
                    </p>
                  </div>
                </div>

                {expandedCategories.functional && (
                  <div className="px-4 pb-4 border-t border-slate-100 bg-white/50 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="mt-3 space-y-2">
                      <div className="space-y-2">
                        {((manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations] as any)?.functionalItems || manageCookiesTranslations.en.functionalItems).map((item: any, idx: number) => (
                          <div key={idx} className="p-3 bg-transparent rounded-xl border border-slate-100/80 flex flex-col gap-2 text-left">
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-0.5 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-medium text-slate-800 text-sm">{item.name}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={() => toggleSubCookieDescription(item.name)}
                                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                  title="Show information"
                                >
                                  <Info className="w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked={cookieDetails[item.name] ?? false}
                                  onClick={() => handleSubCookieToggle(item.name, !(cookieDetails[item.name] ?? false))}
                                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                                    cookieDetails[item.name] ? "bg-[#7553FF]" : "bg-slate-200"
                                  }`}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                                      cookieDetails[item.name] ? "translate-x-4" : "translate-x-0"
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            {expandedSubCookies[item.name] && (
                              <div className="text-sm text-slate-500 font-normal leading-relaxed bg-slate-50/50 p-2.5 rounded-lg border border-slate-100/40 animate-in fade-in duration-150">
                                {item.desc}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Category 4: External Media Cookies */}
              <div className="bg-slate-50/60 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-200">
                <div 
                  onClick={() => setExpandedCategories(prev => ({ ...prev, externalMedia: !prev.externalMedia }))}
                  className="p-3.5 sm:p-4 cursor-pointer hover:bg-slate-100/50 transition-colors text-left"
                >
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <h4 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                        {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.externalMediaTitle || manageCookiesTranslations.en.externalMediaTitle}
                      </h4>
                      <div className="flex items-center gap-3 shrink-0" onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={externalMediaCookies}
                          onClick={() => handleCategoryToggle("externalMedia", !externalMediaCookies)}
                          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                            externalMediaCookies ? "bg-[#7553FF]" : "bg-slate-200"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                              externalMediaCookies ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCategories(prev => ({ ...prev, externalMedia: !prev.externalMedia }));
                          }}
                          className="p-1 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer text-slate-400"
                        >
                          {expandedCategories.externalMedia ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 font-light leading-relaxed max-w-full">
                      {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.externalMediaDesc || manageCookiesTranslations.en.externalMediaDesc}
                    </p>
                  </div>
                </div>

                {expandedCategories.externalMedia && (
                  <div className="px-4 pb-4 border-t border-slate-100 bg-white/50 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="mt-3 space-y-2">
                      <div className="space-y-2">
                        {((manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations] as any)?.externalMediaItems || manageCookiesTranslations.en.externalMediaItems).map((item: any, idx: number) => (
                          <div key={idx} className="p-3 bg-transparent rounded-xl border border-slate-100/80 flex flex-col gap-2 text-left">
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-0.5 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-medium text-slate-800 text-sm">{item.name}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={() => toggleSubCookieDescription(item.name)}
                                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                                  title="Show information"
                                >
                                  <Info className="w-4 h-4" />
                                </button>
                                <button
                                  type="button"
                                  role="switch"
                                  aria-checked={cookieDetails[item.name] ?? false}
                                  onClick={() => handleSubCookieToggle(item.name, !(cookieDetails[item.name] ?? false))}
                                  className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                                    cookieDetails[item.name] ? "bg-[#7553FF]" : "bg-slate-200"
                                  }`}
                                >
                                  <span
                                    aria-hidden="true"
                                    className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                                      cookieDetails[item.name] ? "translate-x-4" : "translate-x-0"
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                            {expandedSubCookies[item.name] && (
                              <div className="text-sm text-slate-500 font-normal leading-relaxed bg-slate-50/50 p-2.5 rounded-lg border border-slate-100/40 animate-in fade-in duration-150">
                                {item.desc}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom 2 buttons: "Save Choices" and "Accept All Cookies" */}
            <div className="flex flex-row items-center justify-end gap-1.5 min-[375px]:gap-2.5 sm:gap-3 pt-4 border-t border-slate-100 shrink-0 w-full">
              <button
                onClick={() => {
                  setShowManageCookiesModal(false);
                  setShowCookieConsent(false);
                }}
                className="flex-1 sm:flex-initial sm:w-auto px-2 min-[375px]:px-3 sm:px-6 py-2.5 sm:py-3 border border-[#7553FF] bg-transparent text-[#7553FF] hover:bg-[#7553FF]/12 rounded-full text-[11px] min-[375px]:text-xs sm:text-sm font-medium transition-all cursor-pointer text-center whitespace-nowrap duration-200"
              >
                {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.saveChoice || manageCookiesTranslations.en.saveChoice}
              </button>
              <button
                onClick={() => {
                  setMarketingCookies(true);
                  setFunctionalCookies(true);
                  setExternalMediaCookies(true);
                  setCookieDetails({
                    "Session & Security": true,
                    "CSRF Protection": true,
                    "Google Tag Manager": true,
                    "Google reCAPTCHA": true,
                    "Cloudflare Turnstile": true,
                    "Facebook Pixel": true,
                    "Microsoft Clarity": true,
                    "Google Ads": true,
                    "Google Ads Remarketing": true,
                    "Google Ads Conversion Tracking": true,
                    "Google Maps": true,
                    "Language Preferences": true,
                    "Visual Themes": true,
                    "YouTube Video Player": true,
                    "Vimeo Player": true,
                  });
                  setShowManageCookiesModal(false);
                  setShowCookieConsent(false);
                }}
                className="flex-1 sm:flex-initial sm:w-auto px-2 min-[375px]:px-3 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#7553FF] to-[#9F85FF] text-white hover:from-[#5631E0] hover:to-[#7553FF] rounded-full text-[11px] min-[375px]:text-xs sm:text-sm font-semibold shadow-[0_6px_28px_rgba(117,83,255,0.35)] transition-all cursor-pointer text-center whitespace-nowrap hover:sm:-translate-y-[3px] duration-200"
              >
                {manageCookiesTranslations[lang as keyof typeof manageCookiesTranslations]?.acceptAll || manageCookiesTranslations.en.acceptAll}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
