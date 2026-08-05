/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Languages, 
  Sparkle,
  Image as ImageIcon, 
  TrendingUp, 
  QrCode, 
  ShieldAlert, 
  Calendar, 
  Clock, 
  DollarSign, 
  Layers, 
  Users, 
  UtensilsCrossed, 
  Megaphone, 
  Search, 
  Zap, 
  Shield, 
  Play, 
  Star,
  Activity,
  Heart,
  ChevronRight,
  Utensils,
  BookOpen,
  Sliders,
  Smartphone,
  Quote,
  Check,
  Award,
  MessageSquare,
  Unlink
} from "lucide-react";

interface GastroWinHomeProps {
  onNavigateToTool: () => void;
  onNavigateToFoodImages: () => void;
  onNavigateToPriceUpdater: () => void;
  onNavigateToSmartQRMenu: () => void;
  onNavigateToAllergenAnalyzer: () => void;
  onNavigateToShiftPlanner: () => void;
  onNavigateToAttendanceCheckin: () => void;
  onNavigateToPayrollReconciliation: () => void;
  onNavigateToLeaveManager: () => void;
  onNavigateToStaffRoles: () => void;
  onNavigateToBooking: () => void;
  onNavigateToSocialAutoPost: () => void;
  onNavigateToLocalSEOSnapshot: () => void;
  onNavigateToReviewResponder: () => void;
  onNavigateToCampaignEngine: () => void;
}

export default function GastroWinHome({
  onNavigateToTool,
  onNavigateToFoodImages,
  onNavigateToPriceUpdater,
  onNavigateToSmartQRMenu,
  onNavigateToAllergenAnalyzer,
  onNavigateToShiftPlanner,
  onNavigateToAttendanceCheckin,
  onNavigateToPayrollReconciliation,
  onNavigateToLeaveManager,
  onNavigateToStaffRoles,
  onNavigateToBooking,
  onNavigateToSocialAutoPost,
  onNavigateToLocalSEOSnapshot,
  onNavigateToReviewResponder,
  onNavigateToCampaignEngine
}: GastroWinHomeProps) {
  const { lang, t } = useLanguage();
  const [activePillar, setActivePillar] = useState<"growth" | "seamless" | "ops" | "ai">("growth");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeCatalogTab, setActiveCatalogTab] = useState<"all" | "menu" | "ops" | "marketing">("all");
  const [activeAccordion, setActiveAccordion] = useState<number>(1);

  // Auto-rotate "Four Pillars of Growth" cards every 3 seconds
  useEffect(() => {
    const pillars: ("growth" | "seamless" | "ops" | "ai")[] = ["growth", "seamless", "ops", "ai"];
    const interval = setInterval(() => {
      setActivePillar((prev) => {
        const currentIndex = pillars.indexOf(prev);
        const nextIndex = (currentIndex + 1) % pillars.length;
        return pillars[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const accordionItems = [
    {
      id: 1,
      companyKey: "bento.company1",
      authorKey: "bento.author1",
      roleKey: "bento.role1",
      quoteKey: "bento.q1",
      image: "https://i.postimg.cc/mZFDkw8S/anan.png?auto=format&fit=crop&w=1200&h=800&q=80",
      avatar: "https://i.postimg.cc/mZFDkw8S/anan.png?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 2,
      companyKey: "bento.company2",
      authorKey: "bento.author2",
      roleKey: "bento.role2",
      quoteKey: "bento.q2",
      image: "https://i.postimg.cc/bY3hz2js/gangnam.png?auto=format&fit=crop&w=1200&h=800&q=80",
      avatar: "https://i.postimg.cc/bY3hz2js/gangnam.png?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 3,
      companyKey: "bento.company3",
      authorKey: "bento.author3",
      roleKey: "bento.role3",
      quoteKey: "bento.q3",
      image: "https://i.postimg.cc/qBjTkCdq/madame-mai.png?auto=format&fit=crop&w=1200&h=800&q=80",
      avatar: "https://i.postimg.cc/qBjTkCdq/madame-mai.png?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 4,
      companyKey: "bento.company4",
      authorKey: "bento.author4",
      roleKey: "bento.role4",
      quoteKey: "bento.q4",
      image: "https://i.postimg.cc/ryQk8tLz/maison-mai.png?auto=format&fit=crop&w=1200&h=800&q=80",
      avatar: "https://i.postimg.cc/ryQk8tLz/maison-mai.png?auto=format&fit=crop&w=120&h=120&q=80"
    },
    {
      id: 5,
      companyKey: "bento.company5",
      authorKey: "bento.author5",
      roleKey: "bento.role5",
      quoteKey: "bento.q5",
      image: "https://i.postimg.cc/9XJhWqjD/sa-baide.png?auto=format&fit=crop&w=1200&h=800&q=80",
      avatar: "https://i.postimg.cc/9XJhWqjD/sa-baide.png?auto=format&fit=crop&w=120&h=120&q=80"
    }
  ];

  const getCardStyle = (cardId: "growth" | "seamless" | "ops" | "ai") => {
    const isActive = activePillar === cardId;
    if (isActive) {
      return {
        transform: "none",
        zIndex: 30,
        opacity: 1,
        transition: "transform 0.8s cubic-bezier(0.25, 1, 0.3, 1), opacity 0.8s, z-index 0.8s"
      };
    }

    switch (cardId) {
      case "growth":
        return {
          transform: "translateX(-15px) translateY(15px) scale(0.92) rotate(-3deg)",
          zIndex: 11,
          opacity: 0.35,
          transition: "transform 0.8s cubic-bezier(0.25, 1, 0.3, 1), opacity 0.8s, z-index 0.8s",
          pointerEvents: "none" as const
        };
      case "seamless":
        return {
          transform: "translateX(24px) translateY(16px) scale(0.92) rotate(4deg)",
          zIndex: 12,
          opacity: 0.35,
          transition: "transform 0.8s cubic-bezier(0.25, 1, 0.3, 1), opacity 0.8s, z-index 0.8s",
          pointerEvents: "none" as const
        };
      case "ops":
        return {
          transform: "translateX(-20px) translateY(10px) scale(0.92) rotate(-3deg)",
          zIndex: 13,
          opacity: 0.35,
          transition: "transform 0.8s cubic-bezier(0.25, 1, 0.3, 1), opacity 0.8s, z-index 0.8s",
          pointerEvents: "none" as const
        };
      case "ai":
        return {
          transform: "translateX(28px) translateY(-14px) scale(0.92) rotate(5deg)",
          zIndex: 14,
          opacity: 0.35,
          transition: "transform 0.8s cubic-bezier(0.25, 1, 0.3, 1), opacity 0.8s, z-index 0.8s",
          pointerEvents: "none" as const
        };
      default:
        return {};
    }
  };

  // Dynamic stats count
  const [venueCount, setVenueCount] = useState(1200);
  useEffect(() => {
    const interval = setInterval(() => {
      setVenueCount((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Internalized Translations to keep App robust and localized
  const homeTranslations = {
    hero: {
      title1: {
        en: "Run your restaurant",
        vi: "Vận hành nhà hàng",
        de: "Betreiben Sie Ihr Restaurant"
      },
      titleSpan: {
        en: "with zero friction.",
        vi: "mượt mà không rào cản.",
        de: "ohne Reibungsverluste."
      },
      desc: {
        en: "GastroWin integrates your entire workflow: guest acquisition, automated staff scheduling, and AI menu optimization into one clean control grid.",
        vi: "GastroWin tích hợp toàn bộ quy trình làm việc của bạn: thu hút khách hàng, tự động xếp ca nhân viên và tối ưu hóa thực đơn bằng AI vào một hệ thống tinh gọn.",
        de: "GastroWin integriert Ihren gesamten Arbeitsablauf: Kundenakquise, automatisierte Schichtplanung und KI-Menüoptimierung in einem übersichtlichen Kontrollraster."
      },
      btnTrial: {
        en: "Try GastroWin",
        vi: "Thử GastroWin",
        de: "Probieren Sie GastroWin aus."
      },
      btnDemo: {
        en: "Watch Demo",
        vi: "Xem Demo",
        de: "Demo ansehen"
      },
      statVenues: {
        en: "trusted restaurants",
        vi: "nhà hàng tin cậy",
        de: "Vertrauenswürdige Betriebe"
      },
      statGrowth: {
        en: "organic guest growth",
        vi: "tăng trưởng khách tự nhiên",
        de: "Organisches Gästewachstum"
      },
      statSaved: {
        en: "saved daily",
        vi: "tiết kiệm hàng ngày",
        de: "Täglich gespart"
      },
      statSavedVal: {
        en: "4 hours",
        vi: "4 giờ",
        de: "4 Std."
      },
      leadTitle: {
        en: "TRUSTED BY LEADING CULINARY BRANDS",
        vi: "ĐƯỢC TIN DÙNG BỞI CÁC THƯƠNG HIỆU ẨM THỰC HÀNG ĐẦU",
        de: "VON FÜHRENDEN GASTRONOMIE-MARKEN VERTRAUT"
      },
      mockup: {
        reviews: { en: "GOOGLE REVIEWS", vi: "ĐÁNH GIÁ GOOGLE", de: "GOOGLE-BEWERTUNGEN" },
        active: { en: "ACTIVE", vi: "ĐANG HOẠT ĐỘNG", de: "AKTIV" },
        rate: { en: "Organic Guest Rate", vi: "Tỷ lệ khách tự nhiên", de: "Organische Gästerate" },
        reviewText: { 
          en: "\"Exceptional services! Scanning the QR allowed me to check allergens, outstanding menu layout.\"", 
          vi: "\"Dịch vụ xuất sắc! Quét mã QR cho phép tôi kiểm tra dị ứng, bố cục thực đơn rất nổi bật.\"", 
          de: "\"Hervorragender Service! Durch das Scannen des QR-Codes konnte ich Allergene prüfen, hervorragendes Menü-Layout.\"" 
        },
        responder: { en: "GastroWin Responder:", vi: "Phản hồi GastroWin:", de: "GastroWin-Antwort:" },
        response: { en: "Thank you Sarah! We care deeply about safe dining.", vi: "Cảm ơn Sarah! Chúng tôi luôn quan tâm sâu sắc đến việc ăn uống an toàn.", de: "Danke Sarah! Wir legen großen Wert auf sicheres Essen." },
        seoScore: { en: "SEO Score", vi: "Điểm SEO", de: "SEO-Wert" },
        qrMenu: { en: "QR INTERACTIVE MENU", vi: "MENU QUÉT QR TƯƠNG TÁC", de: "INTERAKTIVE QR-SPEISEKARTE" },
        live: { en: "LIVE", vi: "TRỰC TIẾP", de: "LIVE" },
        scanToView: { en: "Scan to View Menu", vi: "Quét để xem Menu", de: "Scannen für die Karte" },
        cmyk: { en: "CMYK resolution", vi: "Độ phân giải CMYK", de: "CMYK-Auflösung" },
        ribs: { en: "1. Grilled Beef Ribs", vi: "1. Sườn bò nướng", de: "1. Gegrillte Rinderrippchen" },
        risotto: { en: "2. Seafood Risotto", vi: "2. Risotto hải sản", de: "2. Meeresfrüchte-Risotto" },
        tableBooked: { en: "Table 4 - Booked (John D.)", vi: "Bàn 4 - Đã đặt (John D.)", de: "Tisch 4 - Reserviert (John D.)" },
        shiftOps: { en: "SHIFT OPERATIONS", vi: "VẬN HÀNH CA LÀM", de: "SCHICHTBETRIEB" },
        compliant: { en: "COMPLIANT", vi: "TUÂN THỦ", de: "RECHTSKONFORM" },
        kitchen: { en: "Kitchen", vi: "Bếp", de: "Küche" },
        mondayShift1: { en: "Monday Shift: 08:00 - 16:00", vi: "Ca Thứ Hai: 08:00 - 16:00", de: "Montagsschicht: 08:00 - 16:00" },
        checkedIn: { en: "Checked-in at 07:56 AM", vi: "Đã chấm công lúc 07:56 SA", de: "Eingestempelt um 07:56 Uhr" },
        foh: { en: "FOH", vi: "Phục vụ sảnh", de: "Service" },
        mondayShift2: { en: "Monday Shift: 16:00 - 24:00", vi: "Ca Thứ Hai: 16:00 - 24:00", de: "Montagsschicht: 16:00 - 24:00" },
        payrollSync: { en: "Payroll Sync", vi: "Đồng bộ lương", de: "Lohnabrechnungs-Sync" },
        dualLedger: { en: "Dual-ledger ready", vi: "Sẵn sàng hai sổ", de: "Doppelbuchführung bereit" },
        gastroLlm: { en: "GASTRO LLM ENGINE", vi: "CÔNG CỤ GASTRO LLM", de: "GASTRO LLM-ENGINE" },
        accurate: { en: "ACCURATE", vi: "CHÍNH XÁC", de: "PRÄZISE" },
        original: { en: "Original (English)", vi: "Bản gốc (Tiếng Anh)", de: "Original (Englisch)" },
        originalDish: { en: "Slow-braised Meyer lemon lamb shoulder", vi: "Nạc vai cừu hầm chậm với chanh Meyer", de: "Langsam geschmorte Meyer-Zitronen-Lammkeule" },
        vietnamese: { en: "Vietnamese (Tiếng Việt)", vi: "Tiếng Việt", de: "Vietnamesisch" },
        german: { en: "German (Deutsch)", vi: "Tiếng Đức", de: "Deutsch" },
        allergenAlert: { en: "Allergen alert", vi: "Cảnh báo dị ứng", de: "Allergenwarnung" },
        glutenDetected: { en: "Gluten detected", vi: "Phát hiện Gluten", de: "Gluten erkannt" }
      }
    },
    challenge: {
      badge: {
        en: "THE CHALLENGE",
        vi: "THỬ THÁCH VẬN HÀNH",
        de: "DIE HERAUSFORDERUNG"
      },
      title1: {
        en: "Too many tools.",
        vi: "Quá nhiều công cụ.",
        de: "Zu viele Tools."
      },
      title2: {
        en: "Too much ",
        vi: "Quá nhiều ",
        de: "Zu viel "
      },
      titleSpan: {
        en: "chaos.",
        vi: "hỗn loạn.",
        de: "Chaos."
      },
      desc: {
        en: "Zalo chats, Excel sheets, paper orders, and scattered reports are costing your team hours every day.",
        vi: "Trò chuyện Zalo, bảng tính Excel, đơn hàng giấy và báo cáo rời rạc đang làm tiêu tốn của nhóm bạn hàng giờ mỗi ngày.",
        de: "Zalo-Chats, Excel-Tabellen, Papierbestellungen und verstreute Berichte kosten Ihr Team jeden Tag Stunden."
      },
      hoursWasted: {
        en: "hours wasted daily",
        vi: "giờ lãng phí mỗi ngày",
        de: "täglich verschwendete Stunden"
      },
      disconnectedWorkflows: {
        en: "disconnected workflows",
        vi: "quy trình rời rạc",
        de: "getrennte Arbeitsabläufe"
      },
      p1: {
        en: "Shift Planner Manual",
        vi: "Lập lịch trực thủ công",
        de: "Manuelle Dienstplanung"
      },
      p1desc: {
        en: "Scheduling changes get buried in chats and no one sees them on time.",
        vi: "Các thay đổi lịch trực bị trôi trong tin nhắn và không ai nhìn thấy kịp thời.",
        de: "Schichtplanänderungen gehen im Chat unter und niemand sieht sie rechtzeitig."
      },
      p2: {
        en: "Chaotic payroll Excel sheets",
        vi: "Bảng tính lương Excel hỗn loạn",
        de: "Chaotische Lohnabrechnungs-Tabellen"
      },
      p2desc: {
        en: "End-of-month reconciliation takes hours and is prone to costly mistakes.",
        vi: "Đối chiếu cuối tháng mất nhiều giờ và dễ xảy ra sai sót tốn kém.",
        de: "Der Abgleich am Monatsende dauert Stunden und ist fehleranfällig."
      },
      p3: {
        en: "Missed guest orders",
        vi: "Thất lạc đơn hàng của khách",
        de: "Verpasste Gäste-Bestellungen"
      },
      p3desc: {
        en: "Paper menus create bottlenecks during rush hours, leaving guests waiting.",
        vi: "Thực đơn giấy tạo ra điểm nghẽn trong giờ cao điểm, khiến khách phải chờ đợi.",
        de: "Papier-Speisekarten führen in Stoßzeiten zu Engpässen, sodass Gäste warten müssen."
      },
      p4: {
        en: "Untracked revenue insights",
        vi: "Doanh thu không được theo dõi",
        de: "Umsatzdaten không được theo dõi"
      },
      p4desc: {
        en: "No clear visibility on which dishes sell best or which tables are most profitable.",
        vi: "Không có thông tin rõ ràng về món ăn nào bán chạy nhất hoặc bàn nào sinh lời nhất.",
        de: "Keine klare Sicht darauf, welche Gerichte sich am besten verkaufen oder welche Tische am profitabelsten sind."
      }
    },
    pillars: {
      badge: {
        en: "THE SOLUTION",
        vi: "GIẢI PHÁP TOÀN DIỆN",
        de: " fDIE LÖSUNG"
      },
      title: {
        en: "Four pillars of growth",
        vi: "Bốn trụ cột tăng trưởng",
        de: "Vier Säulen des Wachstums"
      },
      desc: {
        en: "Everything your restaurant needs - in one integrated platform.",
        vi: "Mọi thứ nhà hàng của bạn cần - trên một nền tảng tích hợp duy nhất.",
        de: "Alles, was Ihr Restaurant braucht - auf einer Plattform."
      },
      shortcutsTitle: {
        en: "Launch Interactive Tools:",
        vi: "Khởi chạy công cụ tương tác:",
        de: "Interaktive Tools starten:"
      },
      tabs: {
        growth: {
          badge: { en: "GROWTH BOOSTER", vi: "BỘ ĐỘNG LỰC TĂNG TRƯỞNG", de: "WACHSTUMS-BOOSTER" },
          title: { en: "Acquire more guests - no agency needed.", vi: "Thu hút thêm nhiều khách hàng - không cần agency.", de: "Mehr Gäste gewinnen - ohne Agenturen." },
          desc: { en: "Automate 5-star Google review collection and optimize search visibility on Google Maps to drive a 30% increase in organic guests.", vi: "Tự động thu thập đánh giá Google 5 sao và tối ưu hóa hiển thị tìm kiếm trên Google Maps để tăng 30% lượng khách tự nhiên.", de: "Automatisieren Sie die Erfassung von 5-Sterne-Google-Bewertungen und optimieren Sie die Sichtbarkeit auf Google Maps, um die organischen Gästezahlen um 30% zu steigern." }
        },
        seamless: {
          badge: { en: "SEAMLESS EXPERIENCE", vi: "TRẢI NGHIỆM MƯỢT MÀ", de: "NAHTLOSE ERFAHRUNG" },
          title: { en: "Digital Menu & QR Reservations.", vi: "Thực đơn kỹ thuật số & Đặt bàn bằng mã QR.", de: "Digitale Speisekarte & QR-Reservierungen." },
          desc: { en: "Guests scan QR to order instantly or reserve tables smoothly, reducing staff workload and increasing table turnover by up to 25%.", vi: "Khách hàng quét mã QR để gọi món tức thì hoặc đặt bàn mượt mà, giúp giảm bớt khối lượng công việc cho nhân viên và tăng tới 25% hiệu suất xoay vòng bàn.", de: "Gäste scannen den QR-Code, um sofort zu bestellen oder reibungslos Tische zu reservieren, was die Arbeitsbelastung des Personals verringert und den Tischumsatz um bis zu 25% steigert." }
        },
        ops: {
          badge: { en: "OPERATIONAL EASE", vi: "VẬN HÀNH DỄ DÀNG", de: "EFFIZIENTER BETRIEB" },
          title: { en: "Say goodbye to scheduling chats.", vi: "Nói lời tạm biệt với xếp lịch ca thủ công.", de: "Schluss mit stressigen Schichtplan-Chats." },
          desc: { en: "Automated shift planning and lightning-fast facial recognition clock-ins, eliminating manual reminders and saving 4+ hours per day.", vi: "Tự động lập lịch ca làm việc và chấm công bằng nhận diện khuôn mặt siêu nhanh, loại bỏ các nhắc nhở thủ công và tiết kiệm hơn 4 giờ mỗi ngày.", de: "Automatisierte Schichtplanung und blitzschnelle Zeiterfassung per Gesichtserkennung, wodurch manuelle Erinnerungen entfallen und täglich mehr als 4 Stunden gespart werden." }
        },
        ai: {
          badge: { en: "AI SMART ASSISTANT", vi: "TRỢ LÝ THÔNG MINH AI", de: "INTELLIGENTER KI-ASSISTENT" },
          title: { en: "AI-Optimized Menus & Allergen Detection.", vi: "Tối ưu hóa thực đơn & Phát hiện dị ứng bằng AI.", de: "KI-Menüs & Allergen-Erkennung." },
          desc: { en: "Auto-detect food allergens, translate menus into multiple languages instantly, and suggest combos to boost average order value by 18%.", vi: "Tự động phát hiện chất gây dị ứng, dịch menu tức thì sang nhiều ngôn ngữ và gợi ý combo giúp tăng 18% giá trị đơn hàng trung bình.", de: "Erkennen Sie Allergene automatisch, übersetzen Sie Speisekarten sofort in mehrere Sprachen und schlagen Sie Combos vor, um den durchschnittlichen Bestellwert um 18% zu steigern." }
        }
      }
    },
    quote: {
      en: "Every great dish begins with a frictionless operations workflow.",
      vi: "Mọi món ăn tuyệt vời đều bắt đầu bằng một quy trình vận hành không rào cản.",
      de: "Jedes großartige Gericht beginnt mit einem reibungslosen Betriebsablauf."
    },
    bento: {
      badge: {
        en: "SOCIAL PROOF",
        vi: "Ý KIẾN KHÁCH HÀNG",
        de: "KUNDENSTIMMEN"
      },
      title: {
        en: "Loved by restaurant leaders.",
        vi: "Được tin cậy bởi các quản lý nhà hàng.",
        de: "Beliebt bei Restaurantleitern."
      },
      desc: {
        en: "See how GastroWin is empowering next-gen culinary businesses.",
        vi: "Xem GastroWin đang trao quyền cho các doanh nghiệp ẩm thực thế hệ mới như thế nào.",
        de: "Sehen Sie, wie GastroWin Gastronomiebetriebe der nächsten Generation stärkt."
      },
      q1: {
        en: "I used to spend 2 hours every morning planning shifts. Now the system handles it, and I just check my phone.",
        vi: "Tôi từng mất 2 tiếng mỗi sáng chỉ để xếp ca nhân sự. Giờ hệ thống đã tự động xử lý, tôi chỉ việc kiểm tra trên điện thoại.",
        de: "Früher habe ich jeden Morgen 2 Stunden mit der Schichtplanung verbracht. Jetzt erledigt das System das, und ich checke nur noch kurz mein Handy."
      },
      author1: {
        en: "Minh Tuấn",
        vi: "Minh Tuấn",
        de: "Minh Tuấn"
      },
      role1: {
        en: "Owner of AnAn Street Food Hamburg",
        vi: "Chủ sở hữu AnAn Street Food Hamburg",
        de: "Inhaber von AnAn Street Food Hamburg"
      },
      company1: {
        en: "AnAn Street Food Hamburg",
        vi: "AnAn Street Food Hamburg",
        de: "AnAn Street Food Hamburg"
      },
      q2: {
        en: "Our Google reviews jumped from 47 to 203 in just 2 months. We are seeing a massive influx of new organic guests.",
        vi: "Đánh giá Google của chúng tôi đã tăng từ 47 lên 203 chỉ trong 2 tháng. Chúng tôi đang thấy một lượng lớn khách hàng tự nhiên mới tìm đến.",
        de: "Unsere Google-Bewertungen sind in nur 2 Monaten von 47 auf 203 gestiegen. Wir verzeichnen einen massiven Zustrom neuer organischer Gäste."
      },
      author2: {
        en: "Lan Phương",
        vi: "Lan Phương",
        de: "Lan Phương"
      },
      role2: {
        en: "Owner of Gangnam Streetfood Market",
        vi: "Chủ sở hữu Gangnam Streetfood Market",
        de: "Inhaberin von Gangnam Streetfood Market"
      },
      company2: {
        en: "Gangnam Streetfood Market",
        vi: "Gangnam Streetfood Market",
        de: "Gangnam Streetfood Market"
      },
      q3: {
        en: "AI Menu translates instantly for our international tourists. No more awkward pointing at phones anymore.",
        vi: "Trình dịch thực đơn AI dịch thuật tức thì cho khách du lịch quốc tế. Không còn cảnh chỉ trỏ vụng về vào điện thoại nữa.",
        de: "KI-Menü übersetzt sofort für unsere internationalen Touristen. Kein peinliches Zeigen mehr auf Smartphones."
      },
      author3: {
        en: "Đức Khoa",
        vi: "Đức Khoa",
        de: "Đức Khoa"
      },
      role3: {
        en: "F&B Manager, Madame Mai Restaurant",
        vi: "Quản lý F&B, Nhà hàng Madame Mai",
        de: "F&B Manager, Madame Mai Restaurant"
      },
      company3: {
        en: "Madame Mai Restaurant",
        vi: "Madame Mai Restaurant",
        de: "Madame Mai Restaurant"
      },
      q4: {
        en: "Facial clock-in eliminated buddy punching entirely. Shift reports are instantly generated at the end of the month.",
        vi: "Chấm công bằng khuôn mặt đã loại bỏ hoàn toàn việc chấm công hộ. Báo cáo ca làm việc được tạo tức thì vào cuối tháng.",
        de: "Die Gesichtserkennung beim Einchecken hat das gegenseitige Einchecken von Kollegen vollständig eliminiert. Schichtberichte werden am Monatsende sofort generiert."
      },
      author4: {
        en: "Thành Đạt",
        vi: "Thành Đạt",
        de: "Thành Đạt"
      },
      role4: {
        en: "Founder of Maison Mai Restaurant",
        vi: "Sáng lập Nhà hàng Maison Mai",
        de: "Gründer von Maison Mai Restaurant"
      },
      company4: {
        en: "Maison Mai Restaurant",
        vi: "Maison Mai Restaurant",
        de: "Maison Mai Restaurant"
      },
      q5: {
        en: "The QR Menu and allergen analyzer helped us earn absolute trust from dietary-sensitive guests. Order accuracy is now 100%.",
        vi: "Thực đơn mã QR và trình phân tích dị ứng đã giúp chúng tôi có được lòng tin tuyệt đối từ những vị khách nhạy cảm với thành phần ăn uống. Độ chính xác đơn hàng hiện đạt 100%.",
        de: "Das QR-Menü und der Allergen-Analysator haben uns geholfen, das absolute Vertrauen von Gästen mit Lebensmittelunverträglichkeiten zu gewinnen. Die Bestellgenauigkeit liegt nun bei 100 %."
      },
      author5: {
        en: "Thanh Thảo",
        vi: "Thanh Thảo",
        de: "Thanh Thảo"
      },
      role5: {
        en: "Operations Director, Sabai Dee Mai Restaurant",
        vi: "Giám đốc vận hành, Nhà hàng Sabai Dee Mai",
        de: "Betriebsleiterin, Sabai Dee Mai Restaurant"
      },
      company5: {
        en: "Sabai Dee Mai Restaurant",
        vi: "Sabai Dee Mai Restaurant",
        de: "Sabai Dee Mai Restaurant"
      }
    },
    accelerate: {
      title: {
        en: "When you are ready to accelerate.",
        vi: "Khi bạn đã sẵn sàng tăng tốc vận hành.",
        de: "Bereit zum Durchstarten?"
      },
      desc: {
        en: "Start your free 14-day trial. No credit card required. Cancel anytime.",
        vi: "Bắt đầu dùng thử miễn phí 14 ngày. Không cần thẻ tín dụng. Hủy bất cứ lúc nào.",
        de: "Starten Sie Ihre kostenlose 14-tägige Testversion. Keine Kreditkarte erforderlich. Jederzeit kündbar."
      }
    },
    sandbox: {
      title: {
        en: "Menu OS Interactive Suite",
        vi: "Hệ điều hành Menu OS - Bộ công cụ tương tác",
        de: "Menu OS Interaktive Suite"
      },
      desc: {
        en: "GastroWin features 15 robust, fully interactive operational micro-applications. Explore any tool directly below to experience our core technology.",
        vi: "GastroWin tích hợp 15 công cụ quản trị vi mô thực tế, có khả năng tương tác đầy đủ. Khởi chạy thử bất kỳ công cụ nào dưới đây để trải nghiệm công nghệ cốt lõi.",
        de: "GastroWin enthält 15 voll funktionsfähige, interaktive Anwendungen. Testen Sie jedes Tool direkt unten, um unsere Technologie zu erleben."
      },
      all: { en: "All Tools", vi: "Tất cả công cụ", de: "Alle Tools" },
      menu: { en: "Smart Menus", vi: "Thực đơn thông minh", de: "Intelligente Menüs" },
      ops: { en: "HR & Operations", vi: "Nhân sự & Vận hành", de: "Personal & Betrieb" },
      marketing: { en: "Marketing & Guests", vi: "Tiếp thị & Khách hàng", de: "Marketing & Gäste" },
      launchBtn: { en: "Launch Applet", vi: "Khởi chạy ứng dụng", de: "Applet starten" },
      demoBadge: { en: "Live Demo", vi: "Bản Demo Trực Tiếp", de: "Live-Demo" }
    }
  };

  const getTranslation = (path: string) => {
    const keys = path.split(".");
    let current: any = homeTranslations;
    for (const key of keys) {
      if (current && current[key]) {
        current = current[key];
      } else {
        return "";
      }
    }
    return current[lang] || current["en"] || "";
  };

  // Modules catalog array for direct navigation
  const catalogModules = [
    {
      id: "menu-translator",
      title: { en: "Menu Layout Translator", vi: "Dịch thực đơn đa ngôn ngữ", de: "Speisekarten-Übersetzer" },
      category: "menu",
      desc: { 
        en: "Translate PDF layouts instantly into 40+ languages preserving original visual design and culinary terminologies.", 
        vi: "Dịch thiết kế thực đơn PDF sang hơn 40 ngôn ngữ, bảo toàn tuyệt đối phông chữ, cột và kiểu dáng nghệ thuật ẩm thực gốc.", 
        de: "Speisekarten-Layouts in 40+ Sprachen übersetzen, unter Beibehaltung des Originaldesigns." 
      },
      icon: <Languages className="w-5 h-5 text-purple-600" />,
      action: onNavigateToTool,
      badge: "Flagship AI"
    },
    {
      id: "food-images",
      title: { en: "AI Food Photo Generator", vi: "Tạo ảnh món ăn AI chuyên nghiệp", de: "KI-Gerichte-Fotogenerator" },
      category: "menu",
      desc: { 
        en: "Convert recipe text descriptions into mouthwatering, high-fidelity marketing photographs in seconds.", 
        vi: "Biến các mô tả thành phần công thức khô khan thành những bức ảnh món ăn chất lượng Studio quảng cáo cực kỳ chân thực.", 
        de: "Rezepttexte in appetitliche, hochauflösende Werbe- und Menüfotos verwandeln." 
      },
      icon: <ImageIcon className="w-5 h-5 text-indigo-600" />,
      action: onNavigateToFoodImages,
      badge: "Stable Diff"
    },
    {
      id: "price-update",
      title: { en: "Dynamic Pricing Engine", vi: "Công cụ cập nhật giá tự động", de: "Dynamische Preisanpassung" },
      category: "menu",
      desc: { 
        en: "Instantly update prices across all digital, printed, and QR menus with a single operational control.", 
        vi: "Thay đổi biểu giá đồng loạt trên toàn bộ thực đơn in ấn, trang web và mã QR chỉ với một nút bấm thông minh.", 
        de: "Preise auf allen digitalen und gedruckten Menüs mit einem einzigen Klick anpassen." 
      },
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      action: onNavigateToPriceUpdater,
      badge: "FinOps"
    },
    {
      id: "qr-menu",
      title: { en: "Smart Vector QR Menu", vi: "Tạo thực đơn mã QR thông minh", de: "Intelligentes QR-Menü" },
      category: "menu",
      desc: { 
        en: "Compile and export clean SVG vector QR codes linking directly to responsive digital menus for guests.", 
        vi: "Tạo mã QR dạng vector chất lượng cao phục vụ in ấn cao cấp, kết nối trực tiếp đến thực đơn kỹ thuật số mượt mà.", 
        de: "Druckfertige SVG-QR-Codes erstellen, die direkt mit digitalen Menüs verknüpft sind." 
      },
      icon: <QrCode className="w-5 h-5 text-purple-600" />,
      action: onNavigateToSmartQRMenu,
      badge: "Vector PDF"
    },
    {
      id: "allergen-intel",
      title: { en: "Allergen Hazard Analyzer", vi: "Phân tích dị ứng thực phẩm AI", de: "Allergen-Gefahrenanalyse" },
      category: "menu",
      desc: { 
        en: "Automatically scan ingredient lists to detect hidden allergens and generate compliant dietary indicators.", 
        vi: "Quét phân tích nguyên liệu để phát hiện các tác nhân dị ứng ẩn, tạo cảnh báo bảo vệ sức khỏe chuẩn xác.", 
        de: "Zutatenlisten scannen, um Allergene zu erkennen und rechtskonforme Warnhinweise zu generieren." 
      },
      icon: <ShieldAlert className="w-5 h-5 text-rose-600" />,
      action: onNavigateToAllergenAnalyzer,
      badge: "Compliance"
    },
    {
      id: "shift-planner",
      title: { en: "Visual Shift Scheduler", vi: "Xếp ca làm việc trực quan", de: "Visuelle Schichtplanung" },
      category: "ops",
      desc: { 
        en: "Draft interactive weekly staff rosters matching strict labor budgets and shift requirements.", 
        vi: "Xây dựng sơ đồ phân ca làm việc tuần cho nhân viên trực quan, tối ưu hóa ngân sách và nhu cầu nhân sự cao điểm.", 
        de: "Wöchentliche Dienstpläne unter Berücksichtigung von Budgets und Personalbedarf erstellen." 
      },
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
      action: onNavigateToShiftPlanner,
      badge: "HR Scheduler"
    },
    {
      id: "checkin",
      title: { en: "Attendance & Check-In", vi: "Chấm công & Nhật ký giờ làm", de: "Zeiterfassung & Check-In" },
      category: "ops",
      desc: { 
        en: "Track employee check-ins and verify liveness status against scheduled shift rosters.", 
        vi: "Ghi nhận giờ làm việc, xác định sự hiện diện thực tế của nhân viên so với lịch phân ca định sẵn.", 
        de: "Anwesenheit der Mitarbeiter erfassen und mit den geplanten Arbeitszeiten abgleichen." 
      },
      icon: <Clock className="w-5 h-5 text-teal-600" />,
      action: onNavigateToAttendanceCheckin,
      badge: "Liveness"
    },
    {
      id: "payroll",
      title: { en: "Dual-Ledger Payroll", vi: "Đối chiếu lương hai sổ kế toán", de: "Doppelbündige Lohnrechnung" },
      category: "ops",
      desc: { 
        en: "Reconcile worked hours and calculate complex double-wage holiday premiums with full compliance.", 
        vi: "Đối chiếu giờ làm thực tế và tính toán lương ca đêm, ngày nghỉ lễ chính xác theo quy định pháp luật.", 
        de: "Arbeitsstunden abgleichen und Feiertagszuschläge gesetzeskonform berechnen." 
      },
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
      action: onNavigateToPayrollReconciliation,
      badge: "Finance OS"
    },
    {
      id: "leave-calc",
      title: { en: "Leave & Flextime Manager", vi: "Quản lý nghỉ phép & Giờ linh hoạt", de: "Urlaubs- & Gleitzeitmanager" },
      category: "ops",
      desc: { 
        en: "Request, approve, and track paid time off and flextime accruals for the entire culinary staff.", 
        vi: "Quản lý ngày phép, duyệt nghỉ phép năm và theo dõi quỹ giờ làm bù linh hoạt của toàn bộ nhân viên bếp và phục vụ.", 
        de: "Urlaubsanträge verwalten und Gleitzeitkonten des gesamten Teams im Auge behalten." 
      },
      icon: <Layers className="w-5 h-5 text-[#7553FF]" />,
      action: onNavigateToLeaveManager,
      badge: "Workplace"
    },
    {
      id: "staff-roles",
      title: { en: "Role-Based Access (RBAC)", vi: "Phân quyền vai trò nhân viên", de: "Rollenbasierter Zugriff" },
      category: "ops",
      desc: { 
        en: "Define granular system permissions for managers, chefs, front-of-house staff, and accountants.", 
        vi: "Phân quyền chi tiết tài khoản truy cập hệ thống cho quản lý, đầu bếp, lễ tân và kế toán an toàn.", 
        de: "Zugriffsrechte für Manager, Köche, Servicekräfte und Buchhalter individuell festlegen." 
      },
      icon: <Users className="w-5 h-5 text-slate-700" />,
      action: onNavigateToStaffRoles,
      badge: "RBAC Admin"
    },
    {
      id: "booking",
      title: { en: "Commission-Free Booking", vi: "Hệ thống đặt bàn không hoa hồng", de: "Direkte Tischreservierung" },
      category: "marketing",
      desc: { 
        en: "Manage reservations, design custom table floor plans, and allocate seating without paying third-party fees.", 
        vi: "Quản lý lượt đặt bàn, thiết kế sơ đồ mặt bằng nhà hàng và tối ưu hóa vị trí ngồi hoàn toàn miễn phí hoa hồng.", 
        de: "Tischreservierungen verwalten und Sitzpläne erstellen ohne Gebühren an Drittanbieter." 
      },
      icon: <UtensilsCrossed className="w-5 h-5 text-amber-600" />,
      action: onNavigateToBooking,
      badge: "Guest Care"
    },
    {
      id: "auto-post",
      title: { en: "Social Media Copilot", vi: "Tự động đăng bài mạng xã hội", de: "Social-Media-Copilot" },
      category: "marketing",
      desc: { 
        en: "Draft and publish enticing promotional copy and menu announcements across multiple platforms.", 
        vi: "Tự động soạn thảo và lên lịch đăng bài quảng bá món ăn hấp dẫn lên các nền tảng mạng xã hội lớn.", 
        de: "Automatisch ansprechende Werbeposts und Speisekarten-Updates auf Social Media planen." 
      },
      icon: <Megaphone className="w-5 h-5 text-[#7553FF]" />,
      action: onNavigateToSocialAutoPost,
      badge: "Copywriter"
    },
    {
      id: "seo-opt",
      title: { en: "Local SEO Optimizer", vi: "Tối ưu hóa SEO Google Maps", de: "Lokaler SEO-Optimierer" },
      category: "marketing",
      desc: { 
        en: "Audit and enhance search engine visibility for your restaurant locations on Google Maps.", 
        vi: "Kiểm tra và cải thiện mức độ hiển thị tìm kiếm vị trí nhà hàng của bạn trên Google Maps và tìm kiếm cục bộ.", 
        de: "Sichtbarkeit Ihres Restaurants auf Google Maps und bei lokalen Suchanfragen maximieren." 
      },
      icon: <Search className="w-5 h-5 text-blue-600" />,
      action: onNavigateToLocalSEOSnapshot,
      badge: "Lighthouse"
    },
    {
      id: "review-booster",
      title: { en: "AI Review Responder", vi: "Phản hồi đánh giá tự động", de: "KI-Bewertungsmanager" },
      category: "marketing",
      desc: { 
        en: "Generate professional, polite, and personalized replies to Google and TripAdvisor guest reviews.", 
        vi: "Tự động soạn thảo câu trả lời thông minh, lịch sự cho các đánh giá của thực khách trên Google Reviews.", 
        de: "Professionelle, personalisierte Antworten auf Gästebewertungen auf Google generieren." 
      },
      icon: <Star className="w-5 h-5 text-amber-500" />,
      action: onNavigateToReviewResponder,
      badge: "Reputation"
    },
    {
      id: "campaign-setting",
      title: { en: "Campaign Marketing Engine", vi: "Thiết lập chiến dịch ưu đãi", de: "Kampagnen-Marketing-Engine" },
      category: "marketing",
      desc: { 
        en: "Configure discount triggers, loyal-customer loyalty perks, and seasonal promotional menus.", 
        vi: "Thiết lập các điều kiện kích hoạt giảm giá, ưu đãi dành cho khách hàng thân thiết và thực đơn theo mùa vụ.", 
        de: "Rabattaktionen, Treuevorteile für Stammgäste und saisonale Spezialmenüs einrichten." 
      },
      icon: <Sliders className="w-5 h-5 text-purple-600" />,
      action: onNavigateToCampaignEngine,
      badge: "Campaigns"
    }
  ];

  const filteredCatalog = catalogModules.filter(
    (mod) => activeCatalogTab === "all" || mod.category === activeCatalogTab
  );

  return (
    <div id="gastrohub-home" className="bg-[#fcfcfc] text-slate-900 font-sans min-h-screen pt-20 pb-16 relative overflow-hidden selection:bg-[#7553FF]/15 selection:text-[#7553FF]">
      
      {/* Delicate Clean Background Dot Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#80808012_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
      
      {/* Extremely Soft Glow Background Accents */}
      <div className="absolute bottom-[30%] left-[-10%] w-[600px] h-[600px] bg-brand/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* ==================== 1. HERO SECTION ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto pt-12 md:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24"
      >
        {/* Full-width light grid texture background wrapper for the Hero section */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-grid-pattern pointer-events-none z-0" />
        
        {/* Subtle purple dotted grid layout overlay for the Hero section */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-[radial-gradient(#7553FF_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none z-0" />

        {/* Dynamic purple glow behind the hero contents */}
        <div className="absolute top-1/4 left-1/12 w-[350px] h-[350px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Hero Side */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">
            


            {/* Main Typographical Display */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[56px] mb-6">
              {getTranslation("hero.title1")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] via-[#7553FF] to-indigo-600">
                {getTranslation("hero.titleSpan")}
              </span>
            </h1>

            {/* Premium Description */}
            <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed mb-8 max-w-xl">
              {getTranslation("hero.desc")}
            </p>

            {/* Actions Row */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={onNavigateToTool}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-xs sm:text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#7553FF]/20 hover:shadow-xl hover:shadow-[#7553FF]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 font-medium"
              >
                {getTranslation("hero.btnTrial")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>



          </div>

          {/* Right Hero Graphic: Image Container */}
          <div className="lg:col-span-5 flex justify-center items-center relative z-10 w-full h-full">
            <div className="relative w-full max-w-[560px] overflow-visible transition-transform duration-300 hover:scale-[1.05]">
              <img
                src="https://i.postimg.cc/4x2bjbHK/hero-gastrowin.png"
                alt="GastroWin Hero"
                className="w-full h-auto scale-140 object-cover drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </motion.section>

      {/* ==================== 2. THE CHALLENGE SECTION ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#f8f7ff] text-slate-900 py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-24 items-center">
            
            {/* Graphic/Video Column (Left on Desktop, Bottom on Mobile) */}
            <div className="lg:col-span-5 flex justify-center items-center w-full order-2 lg:order-1">
              <div className="relative w-full max-w-[500px]">
                <img
                  src="https://i.postimg.cc/C1D1GVnL/trouble1.png"
                  alt="GastroWin Challenge"
                  className="w-full h-auto object-contain scale-115 origin-bottom"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient mask to blend bottom of image into the background */}
                <div className="absolute bottom-[-10%] left-[-10%] right-[-10%] h-28 bg-gradient-to-t from-[#f8f7ff] via-[#f8f7ff] to-transparent pointer-events-none z-10" />
              </div>
            </div>

            {/* Content Column (Right on Desktop, Top on Mobile) */}
            <div className="lg:col-span-7 text-left flex flex-col items-start order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold leading-[1.1] tracking-tight text-slate-900">
                {getTranslation("challenge.title1")} <br />
                {getTranslation("challenge.title2")}
                <span className="text-[#7553FF]">{getTranslation("challenge.titleSpan")}</span>
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-900 leading-relaxed max-w-xl font-light">
                {getTranslation("challenge.desc")}
              </p>
            </div>

          </div>

          {/* Bottom Row: 4 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            
            {/* Card 01 */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-[0_8px_30px_rgba(117,83,255,0.02)] text-left hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-[#7553FF] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-slate-900 leading-snug">
                  {getTranslation("challenge.p1")}
                </h4>
              </div>
              <div className="border-t border-slate-100 my-4" />
              <p className="text-slate-500 text-sm leading-relaxed">
                {getTranslation("challenge.p1desc")}
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-[0_8px_30px_rgba(117,83,255,0.02)] text-left hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-slate-900 leading-snug">
                  {getTranslation("challenge.p2")}
                </h4>
              </div>
              <div className="border-t border-slate-100 my-4" />
              <p className="text-slate-500 text-sm leading-relaxed">
                {getTranslation("challenge.p2desc")}
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-[0_8px_30px_rgba(117,83,255,0.02)] text-left hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-slate-900 leading-snug">
                  {getTranslation("challenge.p3")}
                </h4>
              </div>
              <div className="border-t border-slate-100 my-4" />
              <p className="text-slate-500 text-sm leading-relaxed">
                {getTranslation("challenge.p3desc")}
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-[0_8px_30px_rgba(117,83,255,0.02)] text-left hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold text-slate-900 leading-snug">
                  {getTranslation("challenge.p4")}
                </h4>
              </div>
              <div className="border-t border-slate-100 my-4" />
              <p className="text-slate-500 text-sm leading-relaxed">
                {getTranslation("challenge.p4desc")}
              </p>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ==================== 3. FOUR PILLARS OF GROWTH SECTION ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#fcfcfc] overflow-hidden relative border-t border-zinc-200/60"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
          
          {/* Header Zone with premium transition class style */}
          <div className="transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.3,1)] mb-12 opacity-100 translate-y-0 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold leading-tight tracking-tight max-w-2xl text-zinc-900">
              {getTranslation("pillars.title")}
            </h2>
            <p className="mt-4 text-zinc-600 text-lg max-w-xl">
              {getTranslation("pillars.desc")}
            </p>
          </div>

          <div className="transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.3,1)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch opacity-100 translate-y-0">
            
            {/* Left Column: Interactive Pillar Tabs */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 lg:min-h-[480px]">
              
              {/* Tab 1: Growth */}
              <div
                onClick={() => setActivePillar("growth")}
                className={`group relative p-4 md:py-5 md:px-6 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] rounded-2xl border ${
                  activePillar === "growth"
                    ? "bg-[#7553FF]/5 border-[#7553FF]/50 shadow-[0_12px_30px_rgba(0,0,0,0.02)] scale-[1.01]"
                    : "border-transparent opacity-100 hover:opacity-100 hover:bg-zinc-100/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`transition-colors duration-300 ${activePillar === "growth" ? "text-brand" : "text-zinc-500 group-hover:text-zinc-900"}`}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" opacity="0.3"></circle>
                      <path d="M16 8l2.5 5h5.5l-4.5 3.5 1.5 5.5L16 19l-5 3 1.5-5.5L8 13h5.5L16 8z" fill="currentColor" opacity="0.8"></path>
                    </svg>
                  </div>
                  <span className={`text-[14px] lg:text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${activePillar === "growth" ? "text-brand" : "text-zinc-500"}`}>
                    {getTranslation("pillars.tabs.growth.badge")}
                  </span>
                </div>
                <h3 className={`text-base font-bold leading-snug transition-colors duration-300 ${activePillar === "growth" ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900"}`}>
                  {getTranslation("pillars.tabs.growth.title")}
                </h3>
                
                <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] ${activePillar === "growth" ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-slate-900 text-sm leading-relaxed">
                      {getTranslation("pillars.tabs.growth.desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tab 2: Seamless */}
              <div
                onClick={() => setActivePillar("seamless")}
                className={`group relative p-4 md:py-5 md:px-6 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] rounded-2xl border ${
                  activePillar === "seamless"
                    ? "bg-[#7553FF]/5 border-[#7553FF]/50 shadow-[0_12px_30px_rgba(0,0,0,0.02)] scale-[1.01]"
                    : "border-transparent opacity-100 hover:opacity-100 hover:bg-zinc-100/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`transition-colors duration-300 ${activePillar === "seamless" ? "text-brand" : "text-zinc-500 group-hover:text-zinc-900"}`}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"></rect>
                      <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"></rect>
                      <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"></rect>
                      <rect x="20" y="20" width="2" height="2" fill="currentColor"></rect>
                      <rect x="24" y="20" width="2" height="2" fill="currentColor"></rect>
                      <rect x="20" y="24" width="2" height="2" fill="currentColor"></rect>
                      <rect x="24" y="24" width="2" height="2" fill="currentColor"></rect>
                    </svg>
                  </div>
                  <span className={`text-[14px] lg:text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${activePillar === "seamless" ? "text-brand" : "text-zinc-500"}`}>
                    {getTranslation("pillars.tabs.seamless.badge")}
                  </span>
                </div>
                <h3 className={`text-base font-bold leading-snug transition-colors duration-300 ${activePillar === "seamless" ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900"}`}>
                  {getTranslation("pillars.tabs.seamless.title")}
                </h3>
                
                <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] ${activePillar === "seamless" ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {getTranslation("pillars.tabs.seamless.desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tab 3: Operations */}
              <div
                onClick={() => setActivePillar("ops")}
                className={`group relative p-4 md:py-5 md:px-6 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] rounded-2xl border ${
                  activePillar === "ops"
                    ? "bg-[#7553FF]/5 border-[#7553FF]/50 shadow-[0_12px_30px_rgba(0,0,0,0.02)] scale-[1.01]"
                    : "border-transparent opacity-100 hover:opacity-100 hover:bg-zinc-100/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`transition-colors duration-300 ${activePillar === "ops" ? "text-brand" : "text-zinc-500 group-hover:text-zinc-900"}`}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="4" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"></rect>
                      <path d="M11 4V6M21 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                      <path d="M10 13h12M10 17h8M10 21h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <span className={`text-[14px] lg:text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${activePillar === "ops" ? "text-brand" : "text-zinc-500"}`}>
                    {getTranslation("pillars.tabs.ops.badge")}
                  </span>
                </div>
                <h3 className={`text-base font-bold leading-snug transition-colors duration-300 ${activePillar === "ops" ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900"}`}>
                  {getTranslation("pillars.tabs.ops.title")}
                </h3>
                
                <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] ${activePillar === "ops" ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {getTranslation("pillars.tabs.ops.desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tab 4: AI Smart Assistant */}
              <div
                onClick={() => setActivePillar("ai")}
                className={`group relative p-4 md:py-5 md:px-6 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] rounded-2xl border ${
                  activePillar === "ai"
                    ? "bg-[#7553FF]/5 border-[#7553FF]/50 shadow-[0_12px_30px_rgba(0,0,0,0.02)] scale-[1.01]"
                    : "border-transparent opacity-100 hover:opacity-100 hover:bg-zinc-100/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`transition-colors duration-300 ${activePillar === "ai" ? "text-brand" : "text-zinc-500 group-hover:text-zinc-900"}`}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4z" stroke="currentColor" strokeWidth="1.5"></path>
                      <path d="M12 14c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                      <circle cx="16" cy="22" r="1" fill="currentColor"></circle>
                    </svg>
                  </div>
                  <span className={`text-[14px] lg:text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${activePillar === "ai" ? "text-brand" : "text-zinc-500"}`}>
                    {getTranslation("pillars.tabs.ai.badge")}
                  </span>
                </div>
                <h3 className={`text-base font-bold leading-snug transition-colors duration-300 ${activePillar === "ai" ? "text-zinc-900" : "text-zinc-700 group-hover:text-zinc-900"}`}>
                  {getTranslation("pillars.tabs.ai.title")}
                </h3>
                
                <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] ${activePillar === "ai" ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {getTranslation("pillars.tabs.ai.desc")}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: High-tech dynamic stacked card preview */}
            <div className="lg:col-span-7 lg:sticky lg:top-24 flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[90%] mx-auto flex items-center justify-center min-h-[380px] md:min-h-[440px]">
                
                {/* Dynamically shifting radial color background glow */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110 opacity-30 transition-all duration-1000 blur-[80px] w-72 h-72 rounded-full pointer-events-none ${
                  activePillar === "growth" ? "bg-emerald-500/30" :
                  activePillar === "seamless" ? "bg-purple-500/30" :
                  activePillar === "ops" ? "bg-blue-500/30" : "bg-indigo-500/30"
                }`} />

                {/* Card 01: Growth Poster */}
                <div className="absolute inset-0" style={getCardStyle("growth")}>
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden group border border-zinc-200/50 shadow-2xl bg-white p-4">
                      <img 
                        alt="Acquire more guests — no agency needed." 
                        className="w-full h-full object-cover rounded-2xl" 
                        src="https://i.postimg.cc/6QFs9JmH/11.png"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 02: QR Menu Poster */}
                <div className="absolute inset-0" style={getCardStyle("seamless")}>
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden group border border-zinc-200/50 shadow-2xl bg-white p-4">
                      <img 
                        alt="Digital Menu & QR Reservations." 
                        className="w-full h-full object-cover rounded-2xl" 
                        src="https://i.postimg.cc/g019YFTT/22.png"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 03: Scheduling Shifts Poster */}
                <div className="absolute inset-0" style={getCardStyle("ops")}>
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden group border border-zinc-200/50 shadow-2xl bg-white p-4">
                      <img 
                        alt="Say goodbye to scheduling chats." 
                        className="w-full h-full object-cover rounded-2xl" 
                        src="https://i.postimg.cc/fb14wnr5/33.png"
                      />
                    </div>
                  </div>
                </div>

                {/* Card 04: AI Menu Poster */}
                <div className="absolute inset-0" style={getCardStyle("ai")}>
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden group border border-zinc-200/50 shadow-2xl bg-white p-4">
                      <img 
                        alt="AI-Optimized Menus & Allergen Detection." 
                        className="w-full h-full object-cover rounded-2xl" 
                        src="https://i.postimg.cc/tg80XQMv/44.png"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ==================== 4. INSPIRATIONAL QUOTE CALLOUT ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 bg-grid-pattern overflow-hidden border-b border-slate-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 text-center relative z-10">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-relaxed max-w-3xl mx-auto italic font-poppins">
            "{getTranslation("quote")}"
          </h2>
        </div>
      </motion.section>

      {/* ==================== 5. INTERACTIVE TESTIMONIAL ACCORDION ==================== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-zinc-50/50 relative overflow-hidden border-t border-zinc-200/60"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold leading-tight tracking-tight text-zinc-900">
              {getTranslation("bento.title")}
            </h2>
            <p className="mt-4 text-slate-900 text-base sm:text-lg font-light">
              {getTranslation("bento.desc")}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 w-full min-h-[520px] items-stretch justify-center">
            {accordionItems.map((item) => {
              const isActive = activeAccordion === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveAccordion(item.id)}
                  className={`relative overflow-hidden rounded-[32px] cursor-pointer group transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.3,1)] border border-zinc-200/60 shadow-lg bg-zinc-950 ${
                    isActive 
                      ? "flex-[4_4_0%] min-w-0 h-[380px] lg:h-auto" 
                      : "flex-[1_1_0%] min-w-0 h-[90px] lg:h-auto"
                  }`}
                >
                  {/* Background Image Container */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      alt={getTranslation(item.authorKey)}
                      className={`w-full h-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.3,1)] will-change-transform ${
                        isActive 
                          ? "scale-100 opacity-90" 
                          : "scale-110 opacity-30 group-hover:opacity-40 group-hover:scale-105"
                      }`}
                      src={item.image}
                      referrerPolicy="no-referrer"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.25,1,0.3,1)] ${
                        isActive ? "opacity-100" : "opacity-60"
                      }`}
                    />
                  </div>

                  {/* Desktop Inactive Label: rotated text */}
                  <div
                    className={`absolute inset-0 hidden lg:flex flex-col items-center justify-center transition-all duration-500 pointer-events-none z-10 ${
                      isActive ? "opacity-0 invisible" : "opacity-100 visible"
                    }`}
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 -rotate-90 whitespace-nowrap origin-center mt-8">
                      {getTranslation(item.companyKey)}
                    </span>
                  </div>

                  {/* Mobile Inactive Label */}
                  <div
                    className={`absolute inset-0 lg:hidden flex items-center justify-between px-6 transition-all duration-500 pointer-events-none z-10 ${
                      isActive ? "opacity-0 invisible" : "opacity-100 visible"
                    }`}
                  >
                    <span className="text-sm font-semibold text-white/90">
                      {getTranslation(item.companyKey)}
                    </span>
                  </div>

                  {/* Active Content Block */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between p-6 md:p-8 pointer-events-none z-20 transition-all duration-500 ${
                      isActive 
                        ? "opacity-100 visible delay-300" 
                        : "opacity-0 invisible"
                    }`}
                  >
                    {/* Top Section */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-white/60 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider">
                        {getTranslation(item.companyKey)}
                      </span>
                    </div>

                    {/* Bottom Quote & Bio */}
                    <div className="flex items-end justify-between gap-6">
                      <div className="space-y-4 max-w-xl pointer-events-auto">
                        <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-white italic">
                          "{getTranslation(item.quoteKey)}"
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                          <img 
                            src={item.avatar} 
                            alt={getTranslation(item.authorKey)} 
                            className="w-10 h-10 rounded-full object-cover border border-white/20 shadow-sm shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="text-sm font-semibold text-white">
                              {getTranslation(item.authorKey)}
                            </div>
                            <div className="text-sm text-white/70 font-light mt-0.5">
                              {getTranslation(item.roleKey)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </motion.section>


    </div>
  );
}
