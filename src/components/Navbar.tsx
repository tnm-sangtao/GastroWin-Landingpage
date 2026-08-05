/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage, LANGUAGES } from "../context/LanguageContext";
import { 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Printer, 
  FileText, 
  Shield, 
  QrCode, 
  Upload, 
  Edit3, 
  Award, 
  TrendingUp, 
  Phone,
  Calendar,
  Users,
  Clock,
  Calculator,
  DollarSign,
  UtensilsCrossed,
  Palette,
  Key,
  Globe,
  CheckSquare,
  Languages,
  ShieldAlert,
  Megaphone,
  Search,
  MessageSquare,
  Target,
  MapPin,
  Sliders,
  Star
} from "lucide-react";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenDemo: () => void;
  currentView?: "landing" | "tool" | "food-images" | "price-update" | "qr-menu" | "allergen-intel" | "shift-planner" | "attendance-checkin" | "payroll-reconciliation" | "leave-manager" | "staff-roles" | "booking" | "social-auto-post" | "seo-snapshot" | "review-responder" | "campaign-engine" | "pricing" | "contact" | "catering" | "loyawin" | "marketing-tools";
  onNavigateHome?: () => void;
  onNavigateToFoodImages?: () => void;
  onNavigateToPriceUpdater?: () => void;
  onNavigateToSmartQRMenu?: () => void;
  onNavigateToAllergenAnalyzer?: () => void;
  onNavigateToShiftPlanner?: () => void;
  onNavigateToAttendanceCheckin?: () => void;
  onNavigateToPayrollReconciliation?: () => void;
  onNavigateToLeaveManager?: () => void;
  onNavigateToStaffRoles?: () => void;
  onNavigateToBooking?: () => void;
  onNavigateToSocialAutoPost?: () => void;
  onNavigateToLocalSEOSnapshot?: () => void;
  onNavigateToReviewResponder?: () => void;
  onNavigateToCampaignEngine?: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToCatering?: () => void;
  onNavigateToLoyaWin?: () => void;
  onNavigateToMarketingTools?: () => void;
  showCookieConsent?: boolean;
}

// Custom Premium Logo Icon based on the GastroWin official branding assets
const LogoIcon = () => (
  <svg viewBox="0 0 100 100" className="w-9 h-9 select-none flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gastro-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7553FF" />
        <stop offset="100%" stopColor="#7553FF" />
      </linearGradient>
    </defs>
    
    {/* Outer G body shape container */}
    <path 
      d="M 24,14
         H 76
         C 82.6,14 86,17.4 86,24
         V 40
         H 72
         V 28
         C 72,26.5 70.5,25 69,25
         H 31
         C 29.5,25 28,26.5 28,28
         V 72
         C 28,73.5 29.5,75 31,75
         H 69
         C 70.5,75 72,73.5 72,72
         V 58
         H 54
         V 45
         H 86
         V 76
         C 86,82.6 82.6,86 76,86
         H 24
         C 17.4,86 14,82.6 14,76
         V 24
         C 14,17.4 17.4,14 24,14 Z" 
      fill="url(#gastro-gradient)" 
    />
    
    {/* Inner White Plate sitting in the G */}
    <rect x="22" y="22" width="48" height="34" rx="6" fill="white" />
    
    {/* The black asterisk symbol inside the white plate */}
    <g transform="translate(46, 39)">
      <line x1="-8" y1="0" x2="8" y2="0" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="-4" y1="-6.93" x2="4" y2="6.93" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="4" y1="-6.93" x2="-4" y2="6.93" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />
    </g>
  </svg>
);

interface NavDropdownItem {
  id: string;
  label: string;
  desc: string;
  icon: React.ComponentType<any>;
  color: string;
  isLive?: boolean;
}

const HR_OPS_ITEMS: NavDropdownItem[] = [
  { id: "shift-planner", label: "module.shift_planner.title", desc: "module.shift_planner.desc", icon: Calendar, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true },
  { id: "staff-roles", label: "module.staff_roles.title", desc: "module.staff_roles.desc", icon: Users, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true },
  { id: "checkin", label: "module.checkin.title", desc: "module.checkin.desc", icon: MapPin, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true },
  { id: "leave-calc", label: "module.leave_calc.title", desc: "module.leave_calc.desc", icon: Calculator, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true },
  { id: "payroll", label: "module.payroll.title", desc: "module.payroll.desc", icon: DollarSign, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true }
];

const SMART_MENU_ITEMS: NavDropdownItem[] = [
  { id: "menu-translator", label: "module.menu_translator.title", desc: "module.menu_translator.desc", icon: Languages, color: "bg-brand/10 text-brand", isLive: true },
  { id: "food-images", label: "module.food_images.title", desc: "module.food_images.desc", icon: Sparkles, color: "bg-violet-500/10 text-violet-600", isLive: true },
  { id: "price-update", label: "module.price_update.title", desc: "module.price_update.desc", icon: FileText, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true },
  { id: "qr-menu", label: "module.qr_menu.title", desc: "module.qr_menu.desc", icon: QrCode, color: "bg-purple-500/10 text-purple-600", isLive: true },
  { id: "allergen-intel", label: "module.allergen_intel.title", desc: "module.allergen_intel.desc", icon: Shield, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true }
];

const MARKETING_ITEMS: NavDropdownItem[] = [
  { id: "auto-post", label: "module.auto_post.title", desc: "module.auto_post.desc", icon: Megaphone, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true },
  { id: "seo-opt", label: "module.seo_opt.title", desc: "module.seo_opt.desc", icon: Search, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true }
];

const APP_PLUGIN_ITEMS: NavDropdownItem[] = [
  { id: "book-table", label: "module.booking.title", desc: "module.booking.desc", icon: UtensilsCrossed, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true }
];

const COMING_SOON_ITEMS: NavDropdownItem[] = [
  { id: "catering", label: "module.catering.title", desc: "module.catering.desc", icon: Clock, color: "bg-amber-500/10 text-amber-600" }
];

const SETTINGS_ITEMS: NavDropdownItem[] = [
  { id: "book-table", label: "module.booking.title", desc: "module.booking.desc", icon: UtensilsCrossed, color: "bg-[#7553FF]/10 text-[#7553FF]", isLive: true },
  { id: "brand-setting", label: "module.brand_setting.title", desc: "module.brand_setting.desc", icon: Palette, color: "bg-pink-500/10 text-pink-600" },
  { id: "role-permission", label: "module.role_permission.title", desc: "module.role_permission.desc", icon: Key, color: "bg-yellow-500/10 text-yellow-600" },
  { id: "social-account", label: "module.social_account.title", desc: "module.social_account.desc", icon: Globe, color: "bg-indigo-500/10 text-indigo-600" },
  { id: "admin-approval", label: "module.admin_approval.title", desc: "module.admin_approval.desc", icon: CheckSquare, color: "bg-emerald-500/10 text-emerald-600" }
];

export default function Navbar({ onScrollToSection, onOpenDemo, currentView, onNavigateHome, onNavigateToFoodImages, onNavigateToPriceUpdater, onNavigateToSmartQRMenu, onNavigateToAllergenAnalyzer, onNavigateToShiftPlanner, onNavigateToAttendanceCheckin, onNavigateToPayrollReconciliation, onNavigateToLeaveManager, onNavigateToStaffRoles, onNavigateToBooking, onNavigateToSocialAutoPost, onNavigateToLocalSEOSnapshot, onNavigateToReviewResponder, onNavigateToCampaignEngine, onNavigateToPricing, onNavigateToContact, onNavigateToCatering, onNavigateToLoyaWin, onNavigateToMarketingTools, showCookieConsent }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  
  const isProductActive = currentView && [
    "tool", "food-images", "price-update", "qr-menu", "allergen-intel", 
    "shift-planner", "attendance-checkin", "payroll-reconciliation", 
    "leave-manager", "staff-roles", "booking"
  ].includes(currentView);

  const isEcosystemActive = currentView && [
    "marketing-tools", "social-auto-post", "seo-snapshot", "review-responder", "campaign-engine", "loyawin"
  ].includes(currentView);

  const isPricingActive = currentView === "pricing";

  const isContactActive = currentView === "contact";

  const isHomeActive = !currentView || currentView === "landing";

  const isItemActive = (itemId: string) => {
    if (!currentView) return false;
    switch (itemId) {
      case "shift-planner": return currentView === "shift-planner";
      case "staff-roles": return currentView === "staff-roles";
      case "checkin": return currentView === "attendance-checkin";
      case "leave-calc": return currentView === "leave-manager";
      case "payroll": return currentView === "payroll-reconciliation";
      case "book-table": return currentView === "booking";
      case "menu-translator": return currentView === "tool";
      case "food-images": return currentView === "food-images";
      case "price-update": return currentView === "price-update";
      case "qr-menu": return currentView === "qr-menu";
      case "allergen-intel": return currentView === "allergen-intel";
      case "auto-post": return currentView === "social-auto-post";
      case "seo-opt": return currentView === "seo-snapshot";
      case "review-responder": return currentView === "review-responder";
      case "campaign-setting": return currentView === "campaign-engine";
      default: return false;
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileEcosystemOpen, setMobileEcosystemOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Core dialog and chatbot overlay states
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);
  const [isLoyaWinOpen, setIsLoyaWinOpen] = useState(false);
  const [chatbotPng, setChatbotPng] = useState<string>("");

  useEffect(() => {
    // Generate PNG from canvas to replace SVG
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, 128, 128);
      ctx.scale(128 / 100, 128 / 100);
      
      // Fill G body with white color since color inside button text is white
      ctx.fillStyle = "#ffffff";
      
      // Draw G Path
      const p = new Path2D("M 24,14 H 76 C 82.6,14 86,17.4 86,24 V 40 H 72 V 28 C 72,26.5 70.5,25 69,25 H 31 C 29.5,25 28,26.5 28,28 V 72 C 28,73.5 29.5,75 31,75 H 69 C 70.5,75 72,73.5 72,72 V 58 H 54 V 45 H 86 V 76 C 86,82.6 82.6,86 76,86 H 24 C 17.4,86 14,82.6 14,76 V 24 C 14,17.4 17.4,14 24,14 Z");
      ctx.fill(p);
      
      // Draw Black Rect inside
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(22, 22, 48, 34, 6);
      } else {
        ctx.rect(22, 22, 48, 34);
      }
      ctx.fill();
      
      // Draw Asterisk lines
      ctx.save();
      ctx.translate(46, 39);
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 4.5;
      ctx.lineCap = "round";
      
      // Line 1
      ctx.beginPath();
      ctx.moveTo(-8, 0);
      ctx.lineTo(8, 0);
      ctx.stroke();
      
      // Line 2
      ctx.beginPath();
      ctx.moveTo(-4, -6.93);
      ctx.lineTo(4, 6.93);
      ctx.stroke();
      
      // Line 3
      ctx.beginPath();
      ctx.moveTo(4, -6.93);
      ctx.lineTo(-4, 6.93);
      ctx.stroke();
      
      ctx.restore();
      
      setChatbotPng(canvas.toDataURL("image/png"));
    }
  }, []);

  // Chatbot conversation history and message state
  const getBotGreeting = (langCode: string) => {
    const greetings = {
      en: [
        { sender: "bot" as const, text: "👋 Hello! I am the GastroWin AI Virtual Assistant. How can I help with your restaurant operations today?" },
        { sender: "bot" as const, text: "You can choose a quick action below or type your question:" }
      ],
      de: [
        { sender: "bot" as const, text: "👋 Hallo! Ich bin der GastroWin KI-Assistent. Wie kann ich Ihnen heute bei der Führung Ihres Restaurants helfen?" },
        { sender: "bot" as const, text: "Sie können unten eine Schnellaktion auswählen oder Ihre eigene Frage eingeben:" }
      ],
      vi: [
        { sender: "bot" as const, text: "👋 Xin chào! Tôi là Trợ lý Ảo GastroWin AI. Tôi có thể hỗ trợ gì cho việc quản lý nhà hàng của bạn hôm nay?" },
        { sender: "bot" as const, text: "Bạn có thể chọn thao tác nhanh bên dưới hoặc tự nhập câu hỏi nhé:" }
      ]
    };
    return greetings[langCode as "en" | "de" | "vi"] || greetings.en;
  };

  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string; action?: { label: string; view: string } }>>(() => getBotGreeting(lang));
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    // If the chat log only contains the initial greetings, reset/translate them when language changes
    if (chatMessages.length === 2 && chatMessages.every(m => m.sender === "bot")) {
      setChatMessages(getBotGreeting(lang));
    }
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown === "product") {
        const target = event.target as HTMLElement;
        const clickedButton = target.closest("#nav-link-product");
        const clickedDropdown = target.closest("#nav-product-dropdown");
        
        if (!clickedButton && !clickedDropdown) {
          setActiveDropdown(null);
        }
      } else if (activeDropdown === "ecosystem") {
        const target = event.target as HTMLElement;
        const clickedButton = target.closest("#nav-link-ecosystem");
        const clickedDropdown = target.closest("#nav-ecosystem-dropdown");
        
        if (!clickedButton && !clickedDropdown) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [activeDropdown]);

  const handleSendChatMessage = (textToSubmit?: string) => {
    const rawText = textToSubmit || chatInput;
    if (!rawText.trim()) return;

    const userMsg = rawText.trim();
    setChatMessages(prev => [...prev, { sender: "user", text: userMsg }]);
    if (!textToSubmit) setChatInput("");

    // Thinking process simulator
    setTimeout(() => {
      let botResponse = "";
      let botAction: { label: string; view: string } | undefined = undefined;

      const text = userMsg.toLowerCase();
      if (text.includes("menu") || text.includes("thực đơn") || text.includes("dịch") || text.includes("ảnh") || text.includes("món") || text.includes("speisekarte") || text.includes("übersetz") || text.includes("bild") || text.includes("gericht")) {
        if (lang === "vi") {
          botResponse = "Tôi có bộ công cụ Smart Menu Solutions thông minh! Bạn có thể tạo hình ảnh món ăn chân thực hoặc dịch thuật thiết kế thực đơn giữ nguyên bố cục cực đẹp.";
          botAction = { label: "Thử AI Food Images ✨", view: "food-images" };
        } else if (lang === "de") {
          botResponse = "Ich habe die Smart Menu Solutions Suite! Sie können realistische Essensbilder erstellen oder Ihr Speisekarten-Design unter Beibehaltung des Layouts übersetzen.";
          botAction = { label: "AI Food Images testen ✨", view: "food-images" };
        } else {
          botResponse = "I have the Smart Menu Solutions suite! You can generate realistic food photos or translate your menu design while perfectly preserving its layout.";
          botAction = { label: "Try AI Food Images ✨", view: "food-images" };
        }
      } else if (text.includes("giá") || text.includes("pricing") || text.includes("bảng giá") || text.includes("preis") || text.includes("tarif")) {
        if (lang === "vi") {
          botResponse = "GastroWin có hệ thống tối ưu hóa và cập nhật bảng giá tự động chỉ trong 5 giây. Khám phá ngay!";
          botAction = { label: "Cập nhật bảng giá 💵", view: "price-update" };
        } else if (lang === "de") {
          botResponse = "GastroWin verfügt über ein automatisches Preisoptimierungs- und Aktualisierungssystem, das in nur 5 Sekunden einsatzbereit ist. Jetzt entdecken!";
          botAction = { label: "Preise aktualisieren 💵", view: "price-update" };
        } else {
          botResponse = "GastroWin has an automatic price optimization and update system ready in just 5 seconds. Discover it now!";
          botAction = { label: "Update menu pricing 💵", view: "price-update" };
        }
      } else if (text.includes("ca") || text.includes("lịch") || text.includes("nhân viên") || text.includes("shift") || text.includes("planner") || text.includes("mitarbeiter") || text.includes("planer")) {
        if (lang === "vi") {
          botResponse = "GastroWin giúp lên lịch làm việc tự động cho nhân viên, tính toán tăng ca và đồng bộ bảng công cực kỳ chuẩn xác.";
          botAction = { label: "Mở Shift Planner 📅", view: "shift-planner" };
        } else if (lang === "de") {
          botResponse = "GastroWin hilft bei der automatischen Schichtplanung für Mitarbeiter, berechnet Überstunden und synchronisiert die Zeiterfassung präzise.";
          botAction = { label: "Schichtplaner öffnen 📅", view: "shift-planner" };
        } else {
          botResponse = "GastroWin helps automate staff shift scheduling, calculate overtime, and reconcile payroll with absolute accuracy.";
          botAction = { label: "Open Shift Planner 📅", view: "shift-planner" };
        }
      } else if (text.includes("loya") || text.includes("loyawin") || text.includes("tích điểm") || text.includes("khách hàng") || text.includes("treue") || text.includes("kunden")) {
        if (lang === "vi") {
          botResponse = "Hệ sinh thái LoyaWin là giải pháp tích điểm số hóa, quản lý hạng thành viên giúp tăng tỷ lệ khách quay lại nhà hàng vượt trội.";
          botAction = { label: "Xem LoyaWin 🏆", view: "loyawin-info" };
        } else if (lang === "de") {
          botResponse = "Das LoyaWin-Ökosystem ist eine digitale Kundenbindungs- und CRM-Lösung, die die Wiedereinkehrrate von Gästen drastisch erhöht.";
          botAction = { label: "LoyaWin anzeigen 🏆", view: "loyawin-info" };
        } else {
          botResponse = "The LoyaWin ecosystem is a digital point-accumulation and member management solution that increases customer return rates significantly.";
          botAction = { label: "View LoyaWin 🏆", view: "loyawin-info" };
        }
      } else if (text.includes("social") || text.includes("đăng bài") || text.includes("auto post") || text.includes("tiếp thị") || text.includes("beitrag") || text.includes("marketing")) {
        if (lang === "vi") {
          botResponse = "Công cụ Social Auto Post tự động soạn nội dung và lên lịch bài đăng quảng bá nhà hàng của bạn lên mạng xã hội hoàn toàn rảnh tay.";
          botAction = { label: "Thử Social Auto Post 🚀", view: "social-auto-post" };
        } else if (lang === "de") {
          botResponse = "Das Social Auto Post-Tool entwirft und plant automatisch Beiträge, um Ihr Restaurant völlig freihändig in sozialen Netzwerken zu bewerben.";
          botAction = { label: "Social Auto Post testen 🚀", view: "social-auto-post" };
        } else {
          botResponse = "The Social Auto Post tool automatically drafts and schedules promotional posts for your restaurant on social media channels completely hands-free.";
          botAction = { label: "Try Social Auto Post 🚀", view: "social-auto-post" };
        }
      } else if (text.includes("chiến dịch") || text.includes("campaign") || text.includes("khuyến mãi") || text.includes("sms") || text.includes("gửi tin") || text.includes("rabatt") || text.includes("aktion")) {
        if (lang === "vi") {
          botResponse = "GastroWin Campaign Engine tự động gửi SMS ưu đãi 15% (như SUMMERGUSTO) cho tệp khách hàng thân thiết vào đúng thời gian vàng để lấp đầy bàn trống!";
          botAction = { label: "Mở Campaign Engine 🎯", view: "campaign-engine" };
        } else if (lang === "de") {
          botResponse = "Die GastroWin Campaign Engine sendet automatisch SMS-Angebote mit 15 % Rabatt (z. B. SUMMERGUSTO) an treue Kunden zu Stoßzeiten, um leere Tische zu füllen!";
          botAction = { label: "Campaign Engine öffnen 🎯", view: "campaign-engine" };
        } else {
          botResponse = "The GastroWin Campaign Engine automatically sends 15% discount SMS (like SUMMERGUSTO) to loyal customers during high-potential hours to fill empty tables!";
          botAction = { label: "Open Campaign Engine 🎯", view: "campaign-engine" };
        }
      } else if (text.includes("đánh giá") || text.includes("review") || text.includes("booster") || text.includes("responder") || text.includes("reputation") || text.includes("bewert")) {
        if (lang === "vi") {
          botResponse = "GastroWin Review Booster giúp bạn tự động tăng đánh giá 5 sao trên Google Maps, lọc feedback xấu và trả lời khách hàng bằng AI chuyên nghiệp!";
          botAction = { label: "Mở Review Booster ⭐", view: "review-responder" };
        } else if (lang === "de") {
          botResponse = "Der GastroWin Review Booster hilft Ihnen, Ihre 5-Sterne-Bewertungen auf Google Maps zu steigern, schlechtes Feedback zu filtern und Gästen mit KI professionell zu antworten!";
          botAction = { label: "Review Booster starten ⭐", view: "review-responder" };
        } else {
          botResponse = "The GastroWin Review Booster helps you boost 5-star Google Maps reviews, filter bad feedback, and respond to customers professionally using smart AI!";
          botAction = { label: "Launch Review Booster ⭐", view: "review-responder" };
        }
      } else if (text.includes("tuyển dụng") || text.includes("recruitment") || text.includes("tuyển") || text.includes("job") || text.includes("einstell") || text.includes("bewerb")) {
        if (lang === "vi") {
          botResponse = "Hệ thống AI Recruitment Suite giúp tự động lọc hồ sơ ứng viên và đào tạo kỹ năng F&B sắp ra mắt. Bạn có muốn tham gia danh sách chờ nhận ưu đãi?";
          botAction = { label: "Đăng ký tuyển dụng 💼", view: "recruitment-info" };
        } else if (lang === "de") {
          botResponse = "Das KI-Recruitment-Suite-System hilft bei der automatischen Filterung von Bewerber-Lebensläufen und der Schulung von F&B-Fähigkeiten. Möchten Sie sich auf die Warteliste setzen lassen?";
          botAction = { label: "Zur Warteliste anmelden 💼", view: "recruitment-info" };
        } else {
          botResponse = "The AI Recruitment Suite helps automatically filter applicant resumes and train F&B staff. Would you like to join the waitlist for exclusive benefits?";
          botAction = { label: "Register for Recruitment 💼", view: "recruitment-info" };
        }
      } else {
        if (lang === "vi") {
          botResponse = "GastroWin là hệ điều hành F&B toàn diện giúp bạn quản lý nhân sự, tối ưu thực đơn, tự động hóa marketing và nâng cao doanh thu vượt bậc.";
        } else if (lang === "de") {
          botResponse = "GastroWin ist ein umfassendes F&B-Betriebssystem, mit dem Sie Personal verwalten, Menüs optimieren, Marketing automatisieren und Ihren Umsatz steigern können.";
        } else {
          botResponse = "GastroWin is a comprehensive F&B operating system that helps you manage personnel, optimize menus, automate marketing, and boost revenues.";
        }
      }

      setChatMessages(prev => [...prev, { sender: "bot", text: botResponse, action: botAction }]);
    }, 700);
  };

  const handleNavClick = (id: string) => {
    if (id === "pricing" && onNavigateToPricing) {
      onNavigateToPricing();
    } else if (id === "contact" && onNavigateToContact) {
      onNavigateToContact();
    } else {
      onScrollToSection(id);
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (menuId: string) => {
    if (menuId === "product" || menuId === "ecosystem") return;
    if (dropdownTimerRef.current) {
      clearTimeout(dropdownTimerRef.current);
      dropdownTimerRef.current = null;
    }
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = () => {
    if (activeDropdown === "product" || activeDropdown === "ecosystem") return;
    dropdownTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Delay for cursor smooth navigation
  };

  useEffect(() => {
    return () => {
      if (dropdownTimerRef.current) {
        clearTimeout(dropdownTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#fcfcfc]/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-100/40 py-3.5"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between relative">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            {/* Logo Wordmark */}
            <div 
              id="nav-logo"
              onClick={() => {
                if ((currentView === "tool" || currentView === "food-images" || currentView === "price-update" || currentView === "qr-menu" || currentView === "allergen-intel" || currentView === "shift-planner" || currentView === "attendance-checkin" || currentView === "payroll-reconciliation" || currentView === "leave-manager" || currentView === "staff-roles" || currentView === "booking" || currentView === "social-auto-post" || currentView === "seo-snapshot" || currentView === "review-responder" || currentView === "campaign-engine") && onNavigateHome) {
                  onNavigateHome();
                } else {
                  handleNavClick("hero");
                }
              }}
              className="flex items-center gap-2.5 cursor-pointer select-none group"
            >
              <img 
                src="https://i.postimg.cc/zGw85gbr/Gastrowinlogo.png" 
                alt="GastroWin" 
                className="h-10 w-auto object-contain" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <div id="nav-desktop-links" className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
                
                {/* 1. Home Link */}
                <button
                  id="nav-link-home"
                  onClick={() => {
                    if (currentView && currentView !== "landing" && onNavigateHome) {
                      onNavigateHome();
                    } else {
                      handleNavClick("hero");
                    }
                  }}
                  className={`text-xs md:text-sm font-semibold transition-colors duration-200 cursor-pointer py-2 relative ${
                    isHomeActive ? "text-[#7553FF]" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {t("nav.home")}
                  {isHomeActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#7553FF] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* 2. Product Mega-Dropdown (Each column is a tool group) */}
                <div 
                  className="relative animate-none"
                >
                  <button
                    id="nav-link-product"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(prev => prev === "product" ? null : "product");
                    }}
                    className={`flex items-center gap-1 text-xs md:text-sm font-semibold transition-colors duration-200 cursor-pointer py-2 relative ${
                      (activeDropdown === "product" || isProductActive) ? "text-[#7553FF]" : "text-slate-600 hover:text-slate-950"
                    }`}
                  >
                    {t("nav.product")}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "product" ? "rotate-180 text-[#7553FF]" : isProductActive ? "text-[#7553FF]" : "text-slate-400"
                    }`} />
                    {(activeDropdown === "product" || isProductActive) && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#7553FF] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </div>

                {/* 4. Ecosystem Dropdown (LoyaWin & Marketing Tools) */}
                <div 
                  className="relative"
                >
                  <button
                    id="nav-link-ecosystem"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveDropdown(prev => prev === "ecosystem" ? null : "ecosystem");
                    }}
                    className={`flex items-center gap-1 text-xs md:text-sm font-semibold transition-colors duration-200 cursor-pointer py-2 relative ${
                      (activeDropdown === "ecosystem" || isEcosystemActive) ? "text-[#7553FF]" : "text-slate-600 hover:text-slate-950"
                    }`}
                  >
                    {t("nav.ecosystem")}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "ecosystem" ? "rotate-180 text-[#7553FF]" : isEcosystemActive ? "text-[#7553FF]" : "text-slate-400"
                    }`} />
                    {(activeDropdown === "ecosystem" || isEcosystemActive) && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#7553FF] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "ecosystem" && (
                      <motion.div
                        id="nav-ecosystem-dropdown"
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] bg-white rounded-2xl border border-slate-200 shadow-none p-4.5 z-50 space-y-3 text-left"
                      >
                        {/* LoyaWin */}
                        <div 
                          onClick={() => {
                            if (onNavigateToLoyaWin) onNavigateToLoyaWin();
                            else setIsLoyaWinOpen(true);
                            setActiveDropdown(null);
                          }}
                          className={`p-3 rounded-xl transition-all duration-200 cursor-pointer flex items-start gap-3 border ${
                            currentView === "loyawin" ? "bg-purple-50/80 border-purple-300 shadow-sm" : "hover:bg-slate-50 border-purple-50"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            currentView === "loyawin" ? "bg-[#7553FF] text-white" : "bg-purple-50 text-[#7553FF]"
                          }`}>
                            <Award className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className={`text-xs font-bold flex items-center gap-1.5 ${
                              currentView === "loyawin" ? "text-[#7553FF]" : "text-slate-900 hover:text-brand"
                            }`}>
                              LoyaWin
                            </h4>
                            <p className="text-[10px] text-slate-500 font-light mt-0.5 leading-relaxed line-clamp-2">
                              {t("nav.ecosystem.loyawin.desc")}
                            </p>
                          </div>
                        </div>

                        {/* Marketing Tools */}
                        {(() => {
                          const isMarketingActive = currentView === "marketing-tools";
                          return (
                            <div 
                              onClick={() => {
                                if (onNavigateToMarketingTools) onNavigateToMarketingTools();
                                else if (onNavigateToSocialAutoPost) onNavigateToSocialAutoPost();
                                else onOpenDemo();
                                setActiveDropdown(null);
                              }}
                              className={`p-3 rounded-xl transition-all duration-200 cursor-pointer flex items-start gap-3 border ${
                                isMarketingActive ? "bg-blue-50/80 border-blue-300 shadow-sm" : "hover:bg-slate-50 border-slate-50"
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                isMarketingActive ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                              }`}>
                                <Megaphone className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className={`text-xs font-bold flex items-center gap-1.5 ${
                                  isMarketingActive ? "text-blue-600" : "text-slate-900 hover:text-brand"
                                }`}>
                                  Marketing Tools
                                </h4>
                                <p className="text-[10px] text-slate-500 font-light mt-0.5 leading-relaxed line-clamp-2">
                                  {t("nav.ecosystem.marketing.desc")}
                                </p>
                              </div>
                            </div>
                          );
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 5. Pricing Link */}
                <button
                  id="nav-link-pricing"
                  onClick={() => handleNavClick("pricing")}
                  className={`text-xs md:text-sm font-semibold transition-colors duration-200 cursor-pointer py-2 relative ${
                    isPricingActive ? "text-[#7553FF]" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {t("nav.pricing")}
                  {isPricingActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#7553FF] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* 3. Recruitment (Tuyển dụng) */}
                <button
                  id="nav-link-recruitment"
                  onClick={() => setIsRecruitmentOpen(true)}
                  className={`text-xs md:text-sm font-semibold transition-colors duration-200 cursor-pointer py-2 relative ${
                    isRecruitmentOpen ? "text-[#7553FF]" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {t("nav.recruitment")}
                  {isRecruitmentOpen && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#7553FF] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                {/* 6. Contact Link */}
                <button
                  id="nav-link-contact"
                  onClick={() => handleNavClick("contact")}
                  className={`text-xs md:text-sm font-semibold transition-colors duration-200 cursor-pointer py-2 relative ${
                    isContactActive ? "text-[#7553FF]" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {t("nav.contact")}
                  {isContactActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#7553FF] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

              </div>

          {/* Right: Actions Styled like ClickUp */}
          <div id="nav-desktop-actions" className="hidden lg:flex items-center gap-3">
            <button
              id="btn-nav-signup"
              onClick={() => {
                window.location.href = "https://brand.gastrohub.tenomad.com";
              }}
              className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-full shadow-md shadow-[#7553FF]/20 hover:shadow-lg hover:shadow-[#7553FF]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              Try GastroWin
             
            </button>
          </div>

          <AnimatePresence>
            {activeDropdown === "product" && (
              <motion.div
                id="nav-product-dropdown"
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full left-0 right-0 mt-4.5 w-full bg-white rounded-3xl border border-slate-200/80 px-5 py-8 z-50 grid grid-cols-4 gap-3.5 text-left"
              >
                {/* Column 1: HR & Operations */}
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 flex items-center justify-start text-left h-10 mb-3 pb-1.5 border-b border-slate-100 tracking-wide w-full">
                    {t("tab.ops")}
                  </span>
                  <div className="space-y-3">
                    {HR_OPS_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const active = isItemActive(item.id);
                      return (
                        <div 
                           key={item.id}
                          onClick={() => {
                            if (item.id === "shift-planner" && onNavigateToShiftPlanner) onNavigateToShiftPlanner();
                            else if (item.id === "checkin" && onNavigateToAttendanceCheckin) onNavigateToAttendanceCheckin();
                            else if (item.id === "payroll" && onNavigateToPayrollReconciliation) onNavigateToPayrollReconciliation();
                            else if (item.id === "leave-calc" && onNavigateToLeaveManager) onNavigateToLeaveManager();
                            else if (item.id === "staff-roles" && onNavigateToStaffRoles) onNavigateToStaffRoles();
                            else onOpenDemo();
                            setActiveDropdown(null);
                          }}
                          className={`group cursor-pointer p-2.5 rounded-xl transition-colors flex items-start gap-3.5 ${
                            active ? "bg-[#7553FF]/10 border border-[#7553FF]/20" : "hover:bg-[#7553FF]/10 border border-transparent"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color} ${active ? "ring-2 ring-[#7553FF]/30" : ""}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <h4 className={`text-[16px] font-medium transition-colors truncate ${
                              active ? "text-[#7553FF] font-bold" : "text-slate-900 group-hover:text-brand"
                            }`}>
                              {t(item.label)}
                            </h4>
                            <p className="text-[12px] text-slate-900 font-light leading-normal mt-0.5 line-clamp-2">
                              {t(item.desc)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Applications & Plugins */}
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 flex items-center justify-start text-left h-10 mb-3 pb-1.5 border-b border-slate-100 tracking-wide w-full">
                    {lang === "vi" ? "Ứng dụng & Plugin" : lang === "de" ? "Anwendungen & Plugins" : "Applications & Plugins"}
                  </span>
                  <div className="space-y-3">
                    {APP_PLUGIN_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const active = isItemActive(item.id);
                      return (
                        <div 
                          key={item.id}
                          onClick={() => {
                            if (item.id === "book-table" && onNavigateToBooking) onNavigateToBooking();
                            else onOpenDemo();
                            setActiveDropdown(null);
                          }}
                          className={`group cursor-pointer p-2.5 rounded-xl transition-colors flex items-start gap-3.5 ${
                            active ? "bg-[#7553FF]/10 border border-[#7553FF]/20" : "hover:bg-[#7553FF]/10 border border-transparent"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color} ${active ? "ring-2 ring-[#7553FF]/30" : ""}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <h4 className={`text-[16px] font-medium transition-colors truncate ${
                              active ? "text-[#7553FF] font-bold" : "text-slate-900 group-hover:text-brand"
                            }`}>
                              {t(item.label)}
                            </h4>
                            <p className="text-[12px] text-slate-900 font-light leading-normal mt-0.5 line-clamp-2">
                              {t(item.desc)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 3: Smart Menu Solutions */}
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 flex items-center justify-start text-left h-10 mb-3 pb-1.5 border-b border-slate-100 tracking-wide w-full">
                    {t("tab.menu")}
                  </span>
                  <div className="space-y-3">
                    {SMART_MENU_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const active = isItemActive(item.id);
                      return (
                        <div 
                          key={item.id}
                          onClick={() => {
                            if (item.id === "food-images" && onNavigateToFoodImages) onNavigateToFoodImages();
                            else if (item.id === "price-update" && onNavigateToPriceUpdater) onNavigateToPriceUpdater();
                            else if (item.id === "qr-menu" && onNavigateToSmartQRMenu) onNavigateToSmartQRMenu();
                            else if (item.id === "allergen-intel" && onNavigateToAllergenAnalyzer) onNavigateToAllergenAnalyzer();
                            else onOpenDemo();
                            setActiveDropdown(null);
                          }}
                          className={`group cursor-pointer p-2.5 rounded-xl transition-colors flex items-start gap-3.5 ${
                            active ? "bg-[#7553FF]/10 border border-[#7553FF]/20" : "hover:bg-[#7553FF]/10 border border-transparent"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color} ${active ? "ring-2 ring-[#7553FF]/30" : ""}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <h4 className={`text-[16px] font-medium transition-colors truncate ${
                              active ? "text-[#7553FF] font-bold" : "text-slate-900 group-hover:text-brand"
                            }`}>
                              {t(item.label)}
                            </h4>
                            <p className="text-[12px] text-slate-900 font-light leading-normal mt-0.5 line-clamp-2">
                              {t(item.desc)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 4: Marketing & Brand Growth */}
                <div>
                  <span className="text-[10px] font-semibold text-slate-500 flex items-center justify-start text-left h-10 mb-3 pb-1.5 border-b border-slate-100 tracking-wide w-full">
                    {t("tab.marketing")}
                  </span>
                  <div className="space-y-3">
                    {MARKETING_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const active = isItemActive(item.id);
                      return (
                        <div 
                          key={item.id}
                          onClick={() => {
                            if (item.id === "auto-post" && onNavigateToSocialAutoPost) onNavigateToSocialAutoPost();
                            else if (item.id === "seo-opt" && onNavigateToLocalSEOSnapshot) onNavigateToLocalSEOSnapshot();
                            else if (item.id === "review-responder" && onNavigateToReviewResponder) onNavigateToReviewResponder();
                            else if (item.id === "campaign-setting" && onNavigateToCampaignEngine) onNavigateToCampaignEngine();
                            else onOpenDemo();
                            setActiveDropdown(null);
                          }}
                          className={`group cursor-pointer p-2.5 rounded-xl transition-colors flex items-start gap-3.5 ${
                            active ? "bg-[#7553FF]/10 border border-[#7553FF]/20" : "hover:bg-[#7553FF]/10 border border-transparent"
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color} ${active ? "ring-2 ring-[#7553FF]/30" : ""}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <h4 className={`text-[16px] font-medium transition-colors truncate ${
                              active ? "text-[#7553FF] font-bold" : "text-slate-900 group-hover:text-brand"
                            }`}>
                              {t(item.label)}
                            </h4>
                            <p className="text-[12px] text-slate-900 font-light leading-normal mt-0.5 line-clamp-2">
                              {t(item.desc)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors duration-200 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="nav-mobile-drawer" className="lg:hidden bg-white border-b border-slate-200 py-6 px-4 sm:px-6 absolute top-full left-0 right-0 shadow-2xl flex flex-col gap-6 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-5 duration-200 z-[100]">
          <div className="flex flex-col gap-4">
            
            {/* 0. Home Link */}
            <div className="border-b border-slate-100 pb-4">
              <button
                onClick={() => {
                  if (currentView && currentView !== "landing" && onNavigateHome) {
                    onNavigateHome();
                  } else {
                    handleNavClick("hero");
                  }
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2.5 text-left font-bold text-base cursor-pointer focus:outline-none transition-colors ${
                  isHomeActive ? "text-[#7553FF]" : "text-slate-900"
                }`}
              >
                {t("nav.home")}
              </button>
            </div>

            {/* 1. Product Collapsible Section */}
            <div className="border-b border-slate-100 pb-4">
              <button
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
                className={`w-full flex items-center justify-between py-2.5 text-left font-bold text-base cursor-pointer focus:outline-none transition-colors ${
                  isProductActive ? "text-[#7553FF]" : "text-slate-900"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{t("nav.product")}</span>
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                  mobileProductOpen ? "rotate-180 text-brand" : isProductActive ? "text-brand" : "text-slate-500"
                }`} />
              </button>
              
              {mobileProductOpen && (
                <div className="mt-3 pl-3 pr-1 space-y-4 bg-slate-50/50 py-3 px-4.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  
                  {/* Category A: HR & Operations */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase block mb-2">
                      {t("tab.ops")}
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      <button
                        onClick={() => {
                          if (onNavigateToShiftPlanner) onNavigateToShiftPlanner();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Calendar className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.shift_planner.title")}</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          if (onNavigateToStaffRoles) onNavigateToStaffRoles();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Users className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.staff_roles.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToAttendanceCheckin) onNavigateToAttendanceCheckin();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <MapPin className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.checkin.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToLeaveManager) onNavigateToLeaveManager();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Calculator className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.leave_calc.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToPayrollReconciliation) onNavigateToPayrollReconciliation();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <DollarSign className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.payroll.title")}</span>
                      </button>
                    </div>
                  </div>

                  {/* Category B: Smart Menu Solutions */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase block mb-2">
                      {t("tab.menu")}
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      <button
                        onClick={() => {
                          onOpenDemo();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Languages className="w-4 h-4 text-brand" />
                        <span>{t("module.menu_translator.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToFoodImages) onNavigateToFoodImages();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Sparkles className="w-4 h-4 text-violet-600" />
                        <span>{t("module.food_images.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToPriceUpdater) onNavigateToPriceUpdater();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.price_update.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToSmartQRMenu) onNavigateToSmartQRMenu();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <QrCode className="w-4 h-4 text-purple-600" />
                        <span>{t("module.qr_menu.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToAllergenAnalyzer) onNavigateToAllergenAnalyzer();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Shield className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.allergen_intel.title")}</span>
                      </button>
                    </div>
                  </div>

                  {/* Category C: Applications & Plugins */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase block mb-2">
                      {lang === "vi" ? "Ứng dụng & Plugin" : lang === "de" ? "Anwendungen & Plugins" : "Applications & Plugins"}
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      <button
                        onClick={() => {
                          if (onNavigateToBooking) onNavigateToBooking();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <UtensilsCrossed className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.booking.title")}</span>
                      </button>
                    </div>
                  </div>

                  {/* Category D: Marketing & Brand Growth */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase block mb-2">
                      {t("tab.marketing")}
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      <button
                        onClick={() => {
                          if (onNavigateToSocialAutoPost) onNavigateToSocialAutoPost();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Megaphone className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.auto_post.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToLocalSEOSnapshot) onNavigateToLocalSEOSnapshot();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Search className="w-4 h-4 text-[#7553FF]" />
                        <span>{t("module.seo_opt.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToReviewResponder) onNavigateToReviewResponder();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Star className="w-4 h-4 text-teal-600" />
                        <span>{t("module.review_booster.title")}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (onNavigateToCampaignEngine) onNavigateToCampaignEngine();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Sliders className="w-4 h-4 text-fuchsia-600" />
                        <span>{t("module.campaign_setting.title")}</span>
                      </button>
                    </div>
                  </div>

                  {/* Category E: Coming Soon Tools */}
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 tracking-wide uppercase block mb-2">
                      {lang === "vi" ? "Sắp ra mắt" : lang === "de" ? "Demnächst" : "Coming Soon"}
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      <button
                        onClick={() => {
                          if (onNavigateToCatering) onNavigateToCatering();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-2.5 px-3 hover:bg-purple-50/50 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#7553FF] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span>{t("module.catering.title")}</span>
                      </button>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* 3. Ecosystem Collapsible Section */}
            <div className="border-b border-slate-100 pb-4">
              <button
                onClick={() => setMobileEcosystemOpen(!mobileEcosystemOpen)}
                className={`w-full flex items-center justify-between py-2.5 text-left font-bold text-base cursor-pointer focus:outline-none transition-colors ${
                  isEcosystemActive ? "text-[#7553FF]" : "text-slate-900"
                }`}
              >
                <span>{t("nav.ecosystem")}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                  mobileEcosystemOpen ? "rotate-180 text-brand" : isEcosystemActive ? "text-brand" : "text-slate-500"
                }`} />
              </button>
              
              {mobileEcosystemOpen && (
                <div className="mt-3 pl-3 pr-1 space-y-3 bg-slate-50/50 py-3 px-4.5 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div 
                    onClick={() => {
                      if (onNavigateToLoyaWin) onNavigateToLoyaWin();
                      else setIsLoyaWinOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="p-3 hover:bg-white rounded-xl transition-all duration-200 cursor-pointer flex items-start gap-3 border border-transparent hover:border-purple-100"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-purple-50 text-[#7553FF]">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        LoyaWin
                      </h4>
                    
                    </div>
                  </div>

                  <div 
                    onClick={() => {
                      if (onNavigateToMarketingTools) onNavigateToMarketingTools();
                      else if (onNavigateToSocialAutoPost) onNavigateToSocialAutoPost();
                      else onOpenDemo();
                      setMobileMenuOpen(false);
                    }}
                    className="p-3 hover:bg-white rounded-xl transition-all duration-200 cursor-pointer flex items-start gap-3 border border-transparent hover:border-slate-100"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 text-blue-600">
                      <Megaphone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        Marketing Tools
                      </h4>
                     
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Pricing Link */}
            <div className="border-b border-slate-100 pb-4">
              <button
                onClick={() => handleNavClick("pricing")}
                className={`w-full py-2.5 text-left font-bold text-base cursor-pointer focus:outline-none transition-colors ${
                  isPricingActive ? "text-[#7553FF]" : "text-slate-900"
                }`}
              >
                {t("nav.pricing")}
              </button>
            </div>

            {/* 2. Recruitment Link Button */}
            <div className="border-b border-slate-100 pb-4">
              <button
                onClick={() => {
                  setIsRecruitmentOpen(true);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between py-2.5 text-left font-bold text-base cursor-pointer focus:outline-none transition-colors ${
                  isRecruitmentOpen ? "text-[#7553FF]" : "text-slate-900"
                }`}
              >
                <span>{t("nav.recruitment")}</span>
                <span className="text-sm bg-purple-100 text-[#7553FF] px-2 py-0.5 rounded font-black uppercase">
                  {lang === "vi" ? "Đăng ký" : lang === "de" ? "Personal" : "Register"}
                </span>
              </button>
            </div>

            {/* 5. Contact Link */}
            <div className="border-b border-slate-100 pb-4">
              <button
                onClick={() => handleNavClick("contact")}
                className={`w-full py-2.5 text-left font-bold text-base cursor-pointer focus:outline-none transition-colors ${
                  isContactActive ? "text-[#7553FF]" : "text-slate-900"
                }`}
              >
                {t("nav.contact")}
              </button>
            </div>

          </div>
          
          {/* Action buttons styled according to DESIGN.md (all rounded-full) */}
          <div className="pt-4 border-t border-slate-100 mt-2">
            <button
              onClick={() => {
                window.location.href = "https://brand.gastrohub.tenomad.com";
                setMobileMenuOpen(false);
              }}
              className="w-full text-center font-bold bg-[#7553FF] hover:bg-[#5F3DEB] text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg hover:shadow-[#7553FF]/20 transition-all cursor-pointer text-sm"
            >
              Try GastroWin
            </button>
          </div>
        </div>
      )}
    </nav>

    {/* FLOATING INTERACTIVE AI CHATBOT */}
      <AnimatePresence>
        {isChatbotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className={`fixed ${showCookieConsent ? "bottom-[270px] sm:bottom-[210px] md:bottom-[191px]" : "bottom-24"} right-4 md:right-6 w-[calc(100vw-32px)] sm:w-[380px] h-[500px] bg-white rounded-3xl border border-slate-200 z-[100] flex flex-col overflow-hidden max-h-[700px]`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#7553FF] via-[#7553FF] to-[#562DFF] via-[#562DFF] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <img 
                  src="https://i.postimg.cc/qvc403hV/onlylogo.png" 
                  alt="GastroWin Assistant Logo" 
                  className="w-8 h-8" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-semibold tracking-tight">GastroWin Assistant</h4>
                  
                </div>
              </div>
              <button
                onClick={() => setIsChatbotOpen(false)}
                className="text-slate-50 hover:text-white cursor-pointer transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 max-h-fill bg-slate-50/50">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs font-light leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#7553FF] text-white rounded-tr-none"
                        : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-2xs"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.action && (
                    <button
                      onClick={() => {
                        if (msg.action?.view === "food-images" && onNavigateToFoodImages) onNavigateToFoodImages();
                        else if (msg.action?.view === "price-update" && onNavigateToPriceUpdater) onNavigateToPriceUpdater();
                        else if (msg.action?.view === "shift-planner" && onNavigateToShiftPlanner) onNavigateToShiftPlanner();
                        else if (msg.action?.view === "social-auto-post" && onNavigateToSocialAutoPost) onNavigateToSocialAutoPost();
                        else if (msg.action?.view === "review-responder" && onNavigateToReviewResponder) onNavigateToReviewResponder();
                        else if (msg.action?.view === "campaign-engine" && onNavigateToCampaignEngine) onNavigateToCampaignEngine();
                        else if (msg.action?.view === "loyawin-info") {
                          if (onNavigateToLoyaWin) onNavigateToLoyaWin();
                          else setIsLoyaWinOpen(true);
                        }
                        else if (msg.action?.view === "recruitment-info") setIsRecruitmentOpen(true);
                        else onOpenDemo();
                        setIsChatbotOpen(false);
                      }}
                      className="mt-1.5 text-[10px] font-normal text-[#7553FF] bg-purple-50 hover:bg-purple-100 border border-purple-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                    >
                      {msg.action.label}
                      <ArrowRight className="w-6 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Suggested Quick Actions */}
            <div className="px-4 py-2 bg-white border-t border-slate-100 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
              <button
                onClick={() => handleSendChatMessage(lang === "vi" ? "Tạo thực đơn với AI ✨" : lang === "de" ? "AI Speisekarte erstellen ✨" : "Create menu with AI ✨")}
                className="text-[9px] font-light bg-slate-50 hover:bg-slate-100 text-slate-600 px-2.5 py-1.5 rounded-lg border border-slate-200/60 cursor-pointer shrink-0"
              >
                {lang === "vi" ? "Tạo thực đơn ✨" : lang === "de" ? "Menü erstellen ✨" : "Create menu ✨"}
              </button>
              <button
                onClick={() => handleSendChatMessage(lang === "vi" ? "Cập nhật bảng giá 💵" : lang === "de" ? "Preise aktualisieren 💵" : "Update menu pricing 💵")}
                className="text-[9px] font-light bg-slate-50 hover:bg-slate-100 text-slate-600 px-2.5 py-1.5 rounded-lg border border-slate-200/60 cursor-pointer shrink-0"
              >
                {lang === "vi" ? "Cập nhật giá 💵" : lang === "de" ? "Preise updaten 💵" : "Update price 💵"}
              </button>
              <button
                onClick={() => handleSendChatMessage(lang === "vi" ? "Tự động lên lịch 📅" : lang === "de" ? "Automatische Schichtplanung 📅" : "Automate scheduling 📅")}
                className="text-[9px] font-light bg-slate-50 hover:bg-slate-100 text-slate-600 px-2.5 py-1.5 rounded-lg border border-slate-200/60 cursor-pointer shrink-0"
              >
                {lang === "vi" ? "Lên ca làm việc 📅" : lang === "de" ? "Schichtplan 📅" : "Schedule shifts 📅"}
              </button>
              <button
                onClick={() => handleSendChatMessage(lang === "vi" ? "Hệ sinh thái LoyaWin là gì? 🏆" : lang === "de" ? "Was ist LoyaWin? 🏆" : "What is LoyaWin? 🏆")}
                className="text-[9px] font-light bg-slate-50 hover:bg-slate-100 text-slate-600 px-2.5 py-1.5 rounded-lg border border-slate-200/60 cursor-pointer shrink-0"
              >
                LoyaWin 🏆
              </button>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-50 flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendChatMessage()}
                placeholder={lang === "vi" ? "Nhập tin nhắn..." : lang === "de" ? "Nachricht eingeben..." : "Type a message..."}
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-light text-slate-800 outline-none focus:border-[#7553FF] placeholder:text-slate-400"
              />
              <button
                onClick={() => handleSendChatMessage()}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white p-2 rounded-xl transition-colors cursor-pointer flex items-center justify-center shrink-0"
              >
                <ArrowRight className="w-8 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className={`fixed ${showCookieConsent ? "bottom-[210px] sm:bottom-[150px] md:bottom-[119px]" : "bottom-6"} right-6 z-[101] bg-gradient-to-r from-[#7553FF] via-[#7553FF] to-[#562DFF] via-[#562DFF] text-white text-sm font-normal px-5 py-3.5 rounded-full shadow-[0_6px_28px_rgba(117,83,255,0.35)] items-center gap-2.5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 ${
          mobileMenuOpen ? "hidden lg:flex" : "flex"
        }`}
      >
        {chatbotPng ? (
          <img src="https://i.postimg.cc/qvc403hV/onlylogo.png" 
          className="w-5 h-5 select-none flex-shrink-0 object-contain" />
        ) : (
          <div className="w-5 h-5 flex-shrink-0" />
        )}
        <span>Chatbot</span>
      </button>

      {/* RECRUITMENT COMING SOON MODAL */}
      <AnimatePresence>
        {isRecruitmentOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full text-center relative"
            >
              <button
                onClick={() => setIsRecruitmentOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold p-1 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                ✕
              </button>

              

              <span className="text-[9px] font-black text-[#7553FF] uppercase tracking-widest bg-purple-50 border border-purple-100 px-3.5 py-1 rounded-full mb-3 inline-block">
                {lang === "vi" ? "Sắp Ra Mắt" : lang === "de" ? "Demnächst" : "Coming Soon"}
              </span>

              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                GastroWin AI Recruitment Suite
              </h3>
              <p className="text-base text-slate-700 font-light my-5 leading-relaxed">
                {lang === "vi" ? "Hệ thống tự động hóa tuyển dụng, lọc hồ sơ CV đầu bếp, phục vụ & tự động khớp ca làm việc dựa trên lịch rảnh nhân viên F&B." : lang === "de" ? "Automatisches System zur Rekrutierung, Filterung von Lebensläufen von Köchen und Servicekräften sowie Schichtabgleich basierend auf der Verfügbarkeit." : "Automated recruitment, chef/server resume screening, and smart shift-matching based on staff availability."}
              </p>



              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={lang === "vi" ? "Nhập email của bạn..." : lang === "de" ? "Geben Sie Ihre E-Mail ein..." : "Enter your email..."}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-light text-slate-800 outline-none focus:border-[#7553FF] placeholder:text-slate-400"
                />
                <button
                  onClick={() => {
                    alert(lang === "vi" ? "Cảm ơn bạn đã tham gia danh sách chờ!" : lang === "de" ? "Vielen Dank für Ihren Beitritt zur Warteliste!" : "Thank you for joining the waitlist!");
                    setIsRecruitmentOpen(false);
                  }}
                  className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-xs font-semibold px-5 py-3 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  {lang === "vi" ? "Tham gia danh sách chờ" : lang === "de" ? "Warteliste beitreten" : "Join Waitlist"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LOYAWIN ECOSYSTEM PREVIEW MODAL */}
      <AnimatePresence>
        {isLoyaWinOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-[600px] w-full relative text-left"
            >
              <button
                onClick={() => setIsLoyaWinOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold p-1 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-50 text-[#7553FF] rounded-2xl flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[9px] font-black text-[#7553FF] uppercase tracking-widest bg-purple-50 px-2.5 py-0.5 rounded">{lang === "vi" ? "Hệ sinh thái OS" : lang === "de" ? "OS-Ökosystem" : "OS Ecosystem"}</span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">LoyaWin Loyalty Platform</h3>
                </div>
              </div>

              <p className="text-xs text-slate-900 font-light mb-6 leading-relaxed">
                {lang === "vi" ? "Giải pháp chăm sóc khách hàng tự động thế hệ mới dành riêng cho nhà hàng, giúp tăng 40% doanh thu lặp lại nhờ hệ thống tích điểm thông minh & thẻ ưu đãi số hóa." : lang === "de" ? "Automatisierte Kundenbindung für Restaurants – steigern Sie den wiederkehrenden Umsatz um 40 % mit intelligenten Punkten & digitalen Gutscheinen." : "Next-generation automated restaurant loyalty solution, boosting repeat sales by 40% via smart reward points & digital loyalty cards."}
              </p>

              {/* Mock CRM Loyalty Dashboard */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200/60 p-4 mb-6 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200/60">
                  <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{lang === "vi" ? "Live CRM Snapshot" : lang === "de" ? "Echtzeit-CRM-Vorschau" : "Live CRM Snapshot"}</span>
                  <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    {lang === "vi" ? "Liên kết hoạt động" : lang === "de" ? "Aktive Integration" : "Active Integration"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white p-3 rounded-xl border border-slate-100">
                    <span className="text-[9px] font-semibold text-slate-400 block">{lang === "vi" ? "Tổng thành viên" : lang === "de" ? "Mitglieder gesamt" : "Total Members"}</span>
                    <span className="text-base font-extrabold text-slate-900 mt-0.5 block">12,482</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-100">
                    <span className="text-[9px] font-semibold text-slate-400 block">{lang === "vi" ? "Điểm đã cấp" : lang === "de" ? "Punkte ausgegeben" : "Points Issued"}</span>
                    <span className="text-base font-extrabold text-slate-900 mt-0.5 block">142.8K</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-100">
                    <span className="text-[9px] font-semibold text-slate-400 block">{lang === "vi" ? "Tỷ lệ đổi quà" : lang === "de" ? "Einlösungsrate" : "Redeemed rate"}</span>
                    <span className="text-base font-extrabold text-emerald-600 mt-0.5 block">87.4%</span>
                  </div>
                </div>

                
              </div>

              <button
                onClick={() => {
                  onOpenDemo();
                  setIsLoyaWinOpen(false);
                }}
                className="w-full bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-xs font-extrabold py-3.5 rounded-xl shadow-md transition-colors text-center cursor-pointer"
              >
                {lang === "vi" ? "Kích hoạt thử nghiệm LoyaWin miễn phí" : lang === "de" ? "LoyaWin kostenlos aktivieren" : "Activate free LoyaWin trial"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
