import React from "react";
import { Award, ArrowLeft, CheckCircle, Sparkles, TrendingUp, Smartphone, Users, Zap, BarChart2, Monitor, Banknote, ShieldCheck, Megaphone, Wallet, Bell, Gift, Store, QrCode, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const pageTranslations = {
  en: {
    back: "Back to Home",
    hero: {
      tag: "Plug-and-Play Loyalty Platform",
      title: "Turn Every Customer Visit Into Lasting Loyalty.",
      desc: "A plug-and-play loyalty platform for retail & F&B. Grow your sales for just €5/month. No complex POS integration required.",
      ctaPrimary: "Free Trial",
      bullet1: "No POS integration",
      bullet2: "€5 flat-rate",
      bullet3: "Unlimited customers",
      stat1: "98% Customer retention",
      stat2: "+35% Order value",
      stat3: "5 min Setup time"
    },
    compare: {
      tag: "Comparison",
      title: "Why GastroWin LoyaWin?",
      subtitle: "See how digital CRM outperforms traditional physical stamp cards and complex independent apps.",
      col1: "Traditional Way",
      col2: "LoyaWin",
      row1: {
        title: "Point Tracking",
        old: "Physical paper stamp cards easily lost by customers.",
        new: "Fully digital tracking via Phone Number or QR scan."
      },
      row2: {
        title: "Guest Insights",
        old: "Zero customer data or contact history.",
        new: "Instant CRM dashboard with habits and preferences."
      },
      row3: {
        title: "Customer Return Campaign",
        old: "Cannot reach inactive guests after they leave.",
        new: "Automated messaging re-engagement when inactive."
      },
      row4: {
        title: "Operational Speed",
        old: "Manual checking and stamp pasting takes time.",
        new: "Instant scanning integrated directly into POS/Table."
      }
    },
    compareTable: {
      tag: "Why Switch",
      title: "Traditional Systems vs. LoyaWin",
      subtitle: "See exactly what you leave behind - and what you gain.",
      customApp: "Custom App",
      customAppDesc: "Traditional dev solution",
      paperCards: "Paper Cards",
      paperCardsDesc: "Old-school stamp cards",
      loyawinDesc: "The modern standard",
      bestChoice: "Best Choice",
      setupCost: "Setup Cost",
      posIntegration: "POS Integration",
      setupTime: "Setup Time",
      marketingAds: "Marketing & Ads",
      hiddenFees: "Hidden Fees",
      customAppSetup: "> $1,000 setup fees",
      paperCardsSetup: "~$0 (printing costs)",
      loyawinSetup: "€5 / month flat-rate",
      customAppPos: "Complex, weeks of work",
      paperCardsPos: "None",
      loyawinPos: "Not required – browser only",
      customAppTime: "Weeks of training",
      paperCardsTime: "Minutes",
      loyawinTime: "Live in under 1 minute",
      customAppMarketing: "No self-serve ad system",
      paperCardsMarketing: "None",
      loyawinMarketing: "Self-serve Ads on Customer App",
      customAppFees: "Transaction & tier fees",
      paperCardsFees: "Printing & reorder costs",
      loyawinFees: "None – ever",
      cta: "Start Your Trial →",
      ctaMobile: "Start for €5/mo →"
    },
    features: {
      tag: "Why LoyaWin",
      title: "Built for Every Side of Loyalty",
      tabBusiness: "For Businesses",
      tabCustomer: "For Customers",
      business: [
        {
          title: "No POS Integration Needed",
          desc: "Works on any browser-enabled device at the counter. Go live in under a minute with zero hardware.",
          iconName: "Monitor",
          bg: "var(--loyawin-primary-xlight)",
          color: "var(--loyawin-primary)"
        },
        {
          title: "€5 Flat-Rate, No Surprises",
          desc: "One price covers unlimited locations, staff, and customers. No transaction fees, no tier upgrades.",
          iconName: "Banknote",
          bg: "rgba(5, 150, 105, 0.1)",
          color: "rgb(5, 150, 105)"
        },
        {
          title: "Fraud-Proof Ledger",
          desc: "Every stamp is verified online and logged. No offline loopholes, no duplicate points, no abuse.",
          iconName: "ShieldCheck",
          bg: "rgba(217, 119, 6, 0.1)",
          color: "rgb(217, 119, 6)"
        },
        {
          title: "Self-Serve Marketing",
          desc: "Design vouchers, trigger birthday rewards, and run ad campaigns - all from your dashboard.",
          iconName: "Megaphone",
          bg: "rgba(220, 38, 38, 0.1)",
          color: "rgb(220, 38, 38)"
        }
      ],
      customer: [
        {
          title: "Instant QR Check-in",
          desc: "Scan the table QR code to claim stamps instantly on any phone browser. No app install needed.",
          iconName: "Smartphone",
          bg: "var(--loyawin-primary-xlight)",
          color: "var(--loyawin-primary)"
        },
        {
          title: "Fun Loyalty Milestones",
          desc: "Unlock Silver, Gold, and Diamond tiers with exclusive birthday rewards and special discounts.",
          iconName: "Gift",
          bg: "rgba(5, 150, 105, 0.1)",
          color: "rgb(5, 150, 105)"
        },
        {
          title: "Apple Wallet & Google Pay",
          desc: "Store your loyalty card in Apple Wallet or Google Pay for instant, one-tap access next time.",
          iconName: "Wallet",
          bg: "rgba(217, 119, 6, 0.1)",
          color: "rgb(217, 119, 6)"
        },
        {
          title: "Automated Reminders",
          desc: "Never miss a voucher expiry or reward milestone with automatic, gentle reminders on your phone.",
          iconName: "Bell",
          bg: "rgba(220, 38, 38, 0.1)",
          color: "rgb(220, 38, 38)"
        }
      ]
    },
    howItWorks: {
      tag: "How It Works",
      title: "Three Steps. Infinite Visits.",
      subtitle: "The complete loyalty loop - from sign-up to first redemption.",
      step1Tag: "STEP 01",
      step1Title: "Create Your QR",
      step1Desc: "Sign up and instantly receive a unique QR for your shop. Activate your loyalty programme in under a minute.",
      step2Tag: "STEP 02",
      step2Title: "Customer Scans",
      step2Desc: "Shoppers show their personal QR at the counter. Staff scan it to stamp - the whole check-in takes 3 seconds.",
      step3Tag: "STEP 03",
      step3Title: "Reward Earned",
      step3Desc: "Points accumulate automatically after every visit. Customers tap once to redeem a voucher at the next visit."
    },
    pricing: {
      tag: "Pricing",
      title: "Transparent Pricing. Zero Surprises.",
      subtitle: "One flat-rate for merchants. Forever free for customers.",
      p1: {
        name: "Customer Plan",
        price: "Free",
        period: "forever",
        desc: "No third-party ads. No hidden fees. Always free.",
        features: [
          "All loyalty cards in one app",
          "Instant welcome coupon",
          "Automatic birthday rewards",
          "GPS-powered nearby deals",
          "No third-party ads",
          "No hidden fees - ever"
        ],
        cta: "Explore LoyaWin",
        link: "https://app.loyawin.com"
      },
      p2: {
        name: "Merchant Plan",
        price: "€5",
        period: "/ month",
        desc: "Flat-rate. No transaction fees. No tier upgrades.",
        features: [
          "Unlimited store locations",
          "Unlimited staff accounts",
          "Unlimited customer members",
          "Ad campaign tool",
          "Real-time audit ledger",
          "Dashboard analytics"
        ],
        cta: "Start Your Trial",
        link: "https://brand.loyawin.com/register?portal=brand&plan=subscription"
      }
    }
  },
  vi: {
    back: "Quay lại trang chủ",
    hero: {
      tag: "Nền tảng Tích điểm Tiện lợi",
      title: "Biến Mỗi Lượt Ghé Thăm Thành Lòng Trung Thành Lâu Dài.",
      desc: "Nền tảng tích điểm tiện lợi cho bán lẻ & F&B. Tăng doanh thu chỉ từ €5/tháng. Không cần tích hợp POS phức tạp.",
      ctaPrimary: "Dùng thử miễn phí",
      bullet1: "Không cần tích hợp POS",
      bullet2: "Cước phẳng €5/tháng",
      bullet3: "Không giới hạn khách hàng",
      stat1: "98% Tỷ lệ giữ chân khách",
      stat2: "+35% Giá trị đơn hàng",
      stat3: "5 phút Thiết lập nhanh chóng"
    },
    compare: {
      tag: "Bảng So Sánh",
      title: "Tại sao nên chọn GastroWin LoyaWin?",
      subtitle: "Khám phá sự vượt trội của giải pháp CRM số hóa so với thẻ tích điểm giấy truyền thống và các ứng dụng riêng biệt phức tạp.",
      col1: "Phương pháp truyền thống",
      col2: "LoyaWin",
      row1: {
        title: "Tích điểm & Theo dõi",
        old: "Thẻ giấy vật lý dễ bị khách hàng làm mất, rách.",
        new: "Số hóa 100% bằng Số điện thoại hoặc quét mã QR nhanh."
      },
      row2: {
        title: "Thông tin khách hàng",
        old: "Không thu thập được thông tin liên hệ và sở thích khách.",
        new: "Bảng điều khiển quản trị chi tiết hành vi và thói quen gọi món."
      },
      row3: {
        title: "Tiếp cận khách cũ",
        old: "Không thể liên lạc lại với khách hàng sau khi họ rời quán.",
        new: "Tự động gửi tin nhắn chăm sóc khi khách lâu không quay lại."
      },
      row4: {
        title: "Tốc độ vận hành",
        old: "Nhân viên phải đóng dấu thủ công, mất thời gian chờ đợi.",
        new: "Quét mã tức thì tích hợp ngay tại bàn hoặc tại máy POS."
      }
    },
    compareTable: {
      tag: "Lý do chuyển đổi",
      title: "Hệ thống truyền thống vs. LoyaWin",
      subtitle: "Xem chính xác những gì bạn bỏ lại phía sau - và những gì bạn nhận được.",
      customApp: "Ứng dụng tự dựng",
      customAppDesc: "Giải pháp phát triển truyền thống",
      paperCards: "Thẻ Giấy",
      paperCardsDesc: "Thẻ tích điểm đóng dấu kiểu cũ",
      loyawinDesc: "Tiêu chuẩn hiện đại",
      bestChoice: "Lựa chọn tốt nhất",
      setupCost: "Chi phí thiết lập",
      posIntegration: "Tích hợp POS",
      setupTime: "Thời gian thiết lập",
      marketingAds: "Marketing & Quảng cáo",
      hiddenFees: "Chi phí ẩn",
      customAppSetup: "> $1,000 phí thiết lập",
      paperCardsSetup: "~$0 (chi phí in ấn)",
      loyawinSetup: "Cước phẳng €5 / tháng",
      customAppPos: "Phức tạp, mất nhiều tuần",
      paperCardsPos: "Không có",
      loyawinPos: "Không cần – chỉ dùng trình duyệt",
      customAppTime: "Mất nhiều tuần đào tạo",
      paperCardsTime: "Vài phút",
      loyawinTime: "Vận hành dưới 1 phút",
      customAppMarketing: "Không có hệ thống tự quảng cáo",
      paperCardsMarketing: "Không có",
      loyawinMarketing: "Tự chạy quảng cáo trên App khách hàng",
      customAppFees: "Phí giao dịch & phí phân tầng",
      paperCardsFees: "Chi phí in & đặt lại thẻ giấy",
      loyawinFees: "Hoàn toàn không có",
      cta: "Bắt đầu dùng thử →",
      ctaMobile: "Bắt đầu với €5/tháng →"
    },
    features: {
      tag: "Tại sao chọn LoyaWin",
      title: "Giải pháp Toàn diện cho Cả Hai Bên",
      tabBusiness: "Cho Doanh nghiệp",
      tabCustomer: "Cho Khách hàng",
      business: [
        {
          title: "Không cần tích hợp POS",
          desc: "Hoạt động trên mọi thiết bị có trình duyệt tại quầy. Vận hành dưới một phút với không phần cứng mới.",
          iconName: "Monitor",
          bg: "var(--loyawin-primary-xlight)",
          color: "var(--loyawin-primary)"
        },
        {
          title: "Cước phẳng €5/tháng, không bất ngờ",
          desc: "Một mức giá cố định cho không giới hạn chi nhánh, nhân viên và khách hàng. Không phí giao dịch.",
          iconName: "Banknote",
          bg: "rgba(5, 150, 105, 0.1)",
          color: "rgb(5, 150, 105)"
        },
        {
          title: "Sổ cái chống gian lận",
          desc: "Mọi lượt tích điểm được xác thực trực tuyến và lưu lại. Không lo lỗ hổng ngoại tuyến hay trùng lặp.",
          iconName: "ShieldCheck",
          bg: "rgba(217, 119, 6, 0.1)",
          color: "rgb(217, 119, 6)"
        },
        {
          title: "Tự chạy chiến dịch Marketing",
          desc: "Thiết kế voucher, kích hoạt quà tặng sinh nhật và chạy chiến dịch quảng cáo ngay từ trang quản trị.",
          iconName: "Megaphone",
          bg: "rgba(220, 38, 38, 0.1)",
          color: "rgb(220, 38, 38)"
        }
      ],
      customer: [
        {
          title: "Quét mã QR tại bàn tiện lợi",
          desc: "Chỉ cần quét mã QR tại bàn để tích điểm lập tức trên trình duyệt. Không cần cài đặt bất kỳ ứng dụng nào.",
          iconName: "Smartphone",
          bg: "var(--loyawin-primary-xlight)",
          color: "var(--loyawin-primary)"
        },
        {
          title: "Cột mốc thành viên thú vị",
          desc: "Mở khóa các hạng Bạc, Vàng, Kim Cương kèm phần thưởng mừng sinh nhật và ưu đãi đặc quyền.",
          iconName: "Gift",
          bg: "rgba(5, 150, 105, 0.1)",
          color: "rgb(5, 150, 105)"
        },
        {
          title: "Tích hợp Apple Wallet & Google Pay",
          desc: "Lưu thẻ thành viên trực tiếp vào ví Apple Wallet hoặc Google Pay để dễ dàng sử dụng cho lần ghé tiếp theo.",
          iconName: "Wallet",
          bg: "rgba(217, 119, 6, 0.1)",
          color: "rgb(217, 119, 6)"
        },
        {
          title: "Nhắc nhở thông minh tự động",
          desc: "Không bao giờ bỏ lỡ ưu đãi sắp hết hạn hoặc quà tặng mới với hệ thống nhắc nhở tự động thân thiện.",
          iconName: "Bell",
          bg: "rgba(220, 38, 38, 0.1)",
          color: "rgb(220, 38, 38)"
        }
      ]
    },
    howItWorks: {
      tag: "Cách hoạt động",
      title: "Ba Bước Đơn Giản. Ghé Thăm Vô Hạn.",
      subtitle: "Vòng lặp lòng trung thành hoàn chỉnh - từ đăng ký đến lần đổi quà đầu tiên.",
      step1Tag: "BƯỚC 01",
      step1Title: "Tạo mã QR của bạn",
      step1Desc: "Đăng ký và nhận ngay mã QR duy nhất cho cửa hàng của bạn. Kích hoạt chương trình tích điểm trong chưa đầy một phút.",
      step2Tag: "BƯỚC 02",
      step2Title: "Khách hàng quét mã",
      step2Desc: "Khách hàng xuất trình mã QR cá nhân tại quầy. Nhân viên quét mã để tích điểm - toàn bộ quá trình chỉ mất 3 giây.",
      step3Tag: "BƯỚC 03",
      step3Title: "Nhận phần thưởng",
      step3Desc: "Điểm tích lũy tự động sau mỗi lần ghé thăm. Khách hàng nhấn một chạm để đổi voucher cho lần ghé tiếp theo."
    },
    pricing: {
      tag: "Bảng giá",
      title: "Giá Cả Minh Bạch. Không Phí Phát Sinh.",
      subtitle: "Một giá phẳng cho cửa hàng. Miễn phí mãi mãi cho khách hàng.",
      p1: {
        name: "Gói Khách hàng",
        price: "Miễn phí",
        period: "trọn đời",
        desc: "Không quảng cáo bên thứ ba. Không phí ẩn. Luôn luôn miễn phí.",
        features: [
          "Tất cả thẻ thành viên trong một ứng dụng",
          "Nhận ngay voucher chào mừng",
          "Quà tặng sinh nhật tự động",
          "Ưu đãi gần bạn định vị bằng GPS",
          "Không quảng cáo từ bên thứ ba",
          "Không phí ẩn - mãi mãi như vậy"
        ],
        cta: "Khám phá LoyaWin",
        link: "https://app.loyawin.com"
      },
      p2: {
        name: "Gói Cửa hàng",
        price: "€5",
        period: "/ tháng",
        desc: "Giá cước phẳng. Không phí giao dịch. Không giới hạn tính năng.",
        features: [
          "Không giới hạn chi nhánh cửa hàng",
          "Không giới hạn tài khoản nhân viên",
          "Không giới hạn số lượng thành viên",
          "Công cụ chạy chiến dịch quảng cáo",
          "Sổ cái kiểm toán thời gian thực",
          "Báo cáo phân tích chuyên sâu"
        ],
        cta: "Bắt đầu dùng thử",
        link: "https://brand.loyawin.com/register?portal=brand&plan=subscription"
      }
    }
  },
  de: {
    back: "Zurück zur Startseite",
    hero: {
      tag: "Plug-and-Play-Kundenbindungsplattform",
      title: "Verwandeln Sie jeden Gästebesuch in dauerhafte Loyalität.",
      desc: "Eine Plug-and-Play-Kundenbindungsplattform für Einzelhandel & F&B. Steigern Sie Ihren Umsatz für nur 5 €/Monat. Keine komplexe POS-Integration.",
      ctaPrimary: "Kostenlos testen",
      bullet1: "Keine POS-Integration",
      bullet2: "5 € Pauschale",
      bullet3: "Unbegrenzte Kunden",
      stat1: "98% Kundenbindung",
      stat2: "+35% Bestellwert",
      stat3: "5 Min. Einrichtung"
    },
    compare: {
      tag: "Vergleich",
      title: "Warum GastroWin LoyaWin?",
      subtitle: "Erfahren Sie, wie digitales CRM herkömmliche Stempelkarten aus Papier und komplexe Apps übertrifft.",
      col1: "Traditionelle Stempelkarte",
      col2: "LoyaWin",
      row1: {
        title: "Punktesystem",
        old: "Physische Papierstempelkarten gehen leicht verloren.",
        new: "Vollständig digital per Telefonnummer oder QR-Code."
      },
      row2: {
        title: "Gäste-Erkenntnisse",
        old: "Keine Kundendaten oder Kontakthistorie verfügbar.",
        new: "Sofortiges CRM-Dashboard mit Vorlieben und Rhythmus."
      },
      row3: {
        title: "Reaktivierung",
        old: "Keine Kontaktmöglichkeit nach dem Verlassen des Ladens.",
        new: "Automatische Reaktivierung bei Inaktivität."
      },
      row4: {
        title: "Arbeitsaufwand",
        old: "Manuelles Stempeln kostet wertvolle Zeit im Service.",
        new: "Sekundenschnelles Scannen direkt am Tisch oder POS."
      }
    },
    compareTable: {
      tag: "Warum wechseln?",
      title: "Traditionelle Systeme vs. LoyaWin",
      subtitle: "Sehen Sie genau, was Sie hinter sich lassen – und was Sie gewinnen.",
      customApp: "Eigene App",
      customAppDesc: "Klassische Entwicklung",
      paperCards: "Papierkarten",
      paperCardsDesc: "Klassische Stempelkarten",
      loyawinDesc: "Der moderne Standard",
      bestChoice: "Beste Wahl",
      setupCost: "Einrichtungskosten",
      posIntegration: "POS-Integration",
      setupTime: "Einrichtungszeit",
      marketingAds: "Marketing & Anzeigen",
      hiddenFees: "Versteckte Gebühren",
      customAppSetup: "> 1.000 € Einrichtungsgebühr",
      paperCardsSetup: "~0 € (Druckkosten)",
      loyawinSetup: "5 € / Monat Pauschale",
      customAppPos: "Komplex, wochenlange Arbeit",
      paperCardsPos: "Keine",
      loyawinPos: "Nicht erforderlich – nur Browser",
      customAppTime: "Wochenlange Schulung",
      paperCardsTime: "Minuten",
      loyawinTime: "In weniger als 1 Minute live",
      customAppMarketing: "Kein Self-Serve-Ad-System",
      paperCardsMarketing: "Keine",
      loyawinMarketing: "Self-Serve-Ads in der Kunden-App",
      customAppFees: "Transaktions- & Stufengebühren",
      paperCardsFees: "Druck- & Nachbestellkosten",
      loyawinFees: "Niemals – absolut keine",
      cta: "Jetzt testen →",
      ctaMobile: "Starten für 5 €/Monat →"
    },
    features: {
      tag: "Warum LoyaWin",
      title: "Entwickelt für beide Seiten der Loyalität",
      tabBusiness: "Für Unternehmen",
      tabCustomer: "Für Kunden",
      business: [
        {
          title: "Keine POS-Integration nötig",
          desc: "Funktioniert auf jedem internetfähigen Gerät an der Kasse. In weniger als einer Minute live ohne neue Hardware.",
          iconName: "Monitor",
          bg: "var(--loyawin-primary-xlight)",
          color: "var(--loyawin-primary)"
        },
        {
          title: "5 € Flatrate, keine Überraschungen",
          desc: "Ein Preis deckt unbegrenzte Standorte, Mitarbeiter und Kunden ab. Keine Transaktionsgebühren, keine Upgrades.",
          iconName: "Banknote",
          bg: "rgba(5, 150, 105, 0.1)",
          color: "rgb(5, 150, 105)"
        },
        {
          title: "Betrugssicheres Buch",
          desc: "Jeder Stempel wird online verifiziert und protokolliert. Keine Offline-Schlupflöcher, keine doppelten Punkte.",
          iconName: "ShieldCheck",
          bg: "rgba(217, 119, 6, 0.1)",
          color: "rgb(217, 119, 6)"
        },
        {
          title: "Self-Serve-Marketing",
          desc: "Gutscheine erstellen, Geburtstagsprämien auslösen und Werbekampagnen schalten – alles direkt aus Ihrem Dashboard.",
          iconName: "Megaphone",
          bg: "rgba(220, 38, 38, 0.1)",
          color: "rgb(220, 38, 38)"
        }
      ],
      customer: [
        {
          title: "Sofortiger QR-Check-in",
          desc: "Scannen Sie den QR-Code am Tisch, um Punkte sofort im Browser Ihres Handys zu sammeln. Keine App-Installation nötig.",
          iconName: "Smartphone",
          bg: "var(--loyawin-primary-xlight)",
          color: "var(--loyawin-primary)"
        },
        {
          title: "Spannende Bonusstufen",
          desc: "Schalten Sie die Stufen Silber, Gold und Platin mit exklusiven Geburtstagsgeschenken und Rabatten frei.",
          iconName: "Gift",
          bg: "rgba(5, 150, 105, 0.1)",
          color: "rgb(5, 150, 105)"
        },
        {
          title: "Apple Wallet & Google Pay",
          desc: "Speichern Sie Ihre Kundenkarte in Apple Wallet oder Google Pay für den schnellen Zugriff mit einem Fingertipp.",
          iconName: "Wallet",
          bg: "rgba(217, 119, 6, 0.1)",
          color: "rgb(217, 119, 6)"
        },
        {
          title: "Automatische Erinnerungen",
          desc: "Verpassen Sie nie wieder einen ablaufenden Gutschein oder eine Prämie mit automatischen, sanften Erinnerungen.",
          iconName: "Bell",
          bg: "rgba(220, 38, 38, 0.1)",
          color: "rgb(220, 38, 38)"
        }
      ]
    },
    howItWorks: {
      tag: "Wie es funktioniert",
      title: "Drei Schritte. Unendliche Besuche.",
      subtitle: "Die vollständige Loyalitätsschleife – von der Anmeldung bis zur ersten Einlösung.",
      step1Tag: "SCHRITT 01",
      step1Title: "QR-Code erstellen",
      step1Desc: "Registrieren Sie sich und erhalten Sie sofort einen einzigartigen QR-Code für Ihr Geschäft. Aktivieren Sie Ihr Programm in unter einer Minute.",
      step2Tag: "SCHRITT 02",
      step2Title: "Kunde scannt",
      step2Desc: "Kunden zeigen ihren persönlichen QR-Code an der Kasse. Mitarbeiter scannen ihn zum Stempeln – der gesamte Check-in dauert 3 Sekunden.",
      step3Tag: "SCHRITT 03",
      step3Title: "Prämie erhalten",
      step3Desc: "Punkte sammeln sich nach jedem Besuch automatisch. Kunden tippen einmal, um einen Gutschein beim nächsten Besuch einzulösen."
    },
    pricing: {
      tag: "Preise",
      title: "Transparente Preise. Keine Überraschungen.",
      subtitle: "Eine Flatrate für Händler. Für immer kostenlos für Kunden.",
      p1: {
        name: "Kunden-Tarif",
        price: "Kostenlos",
        period: "für immer",
        desc: "Keine Werbung von Drittanbietern. Keine versteckten Gebühren. Immer kostenlos.",
        features: [
          "Alle Kundenkarten in einer App",
          "Sofortiger Willkommensgutschein",
          "Automatische Geburtstagsgeschenke",
          "GPS-gestützte Angebote in der Nähe",
          "Keine Werbung von Drittanbietern",
          "Keine versteckten Gebühren – jemals"
        ],
        cta: "LoyaWin entdecken",
        link: "https://app.loyawin.com"
      },
      p2: {
        name: "Händler-Tarif",
        price: "5 €",
        period: "/ Monat",
        desc: "Flatrate. Keine Transaktionsgebühren. Keine Upgrade-Zwänge.",
        features: [
          "Unbegrenzte Standorte",
          "Unbegrenzte Mitarbeiterkonten",
          "Unbegrenzte Kundenmitglieder",
          "Kampagnen-Werkzeug",
          "Echtzeit-Prüfungsprotokoll",
          "Analyse-Dashboard"
        ],
        cta: "Testphase starten",
        link: "https://brand.loyawin.com/register?portal=brand&plan=subscription"
      }
    }
  }
};

interface LoyaWinPageProps {
  onBackToHome: () => void;
  onOpenDemo?: () => void;
}

const FeatureIcon = ({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) => {
  switch (name) {
    case "Monitor":
      return <Monitor className={className} style={style} />;
    case "Banknote":
      return <Banknote className={className} style={style} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} style={style} />;
    case "Megaphone":
      return <Megaphone className={className} style={style} />;
    case "Smartphone":
      return <Smartphone className={className} style={style} />;
    case "Gift":
      return <Gift className={className} style={style} />;
    case "Wallet":
      return <Wallet className={className} style={style} />;
    case "Bell":
      return <Bell className={className} style={style} />;
    default:
      return <Zap className={className} style={style} />;
  }
};

export default function LoyaWinPage({ onBackToHome, onOpenDemo }: LoyaWinPageProps) {
  const { lang } = useLanguage();
  const text = pageTranslations[lang === "vi" ? "vi" : lang === "de" ? "de" : "en"];
  const [activeTab, setActiveTab] = React.useState<"business" | "customer">("business");

  const handleAction = () => {
    window.open("https://app.loyawin.com/", "_blank");
  };

  return (
    <div 
      id="loyawin-page" 
      className="bg-white text-slate-950 font-sans min-h-screen selection:bg-purple-100 selection:text-purple-900"
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
        "--loyawin-bg": "#ffffff",
        "--loyawin-bg2": "#f8f7ff",
        "--loyawin-bg3": "#f2f1fc",
        "--font-head": "'Poppins', sans-serif",
        "--font-body": "'Poppins', sans-serif"
      } as React.CSSProperties}
    >
      {/* 1. HERO SECTION */}
      <section 
        id="loyawin-hero" 
        className="relative flex min-h-[85vh] items-center overflow-hidden pt-28 pb-16 lg:pt-32"
        style={{
          background: "radial-gradient(80% 60% at 60% 30%, rgba(117, 83, 255, 0.13) 0%, transparent 70%), linear-gradient(var(--loyawin-bg2) 0%, var(--loyawin-bg) 100%)"
        }}
      >
        <div 
          className="pointer-events-none absolute top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full" 
          style={{
            background: "radial-gradient(circle, rgba(117, 83, 255, 0.09) 0%, transparent 70%)",
            filter: "blur(40px)"
          }}
        />

        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Column info */}
            <div className="transition-all duration-700 opacity-100 translate-y-0 text-left">
              <span 
                className="mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase" 
                style={{
                  background: "var(--loyawin-primary-xlight)", 
                  color: "var(--loyawin-primary)", 
                  border: "1px solid rgba(117, 83, 255, 0.18)"
                }}
              >
                {text.hero.tag}
              </span>
              <h1 
                className="mb-5 text-4xl leading-[1.12] font-semibold tracking-tight sm:text-5xl lg:text-[56px]" 
                style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}
              >
                {text.hero.title}
              </h1>
              <p 
                className="mb-8 max-w-[520px] text-xs font-medium leading-[1.7]" 
                style={{ color: "var(--loyawin-neutral-500)" }}
              >
                {text.hero.desc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={handleAction}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white no-underline transition-all duration-200 hover:translate-y-[-2px] cursor-pointer" 
                  style={{
                    background: "linear-gradient(135deg, var(--loyawin-primary), var(--loyawin-primary-light))", 
                    boxShadow: "0 8px 28px var(--loyawin-primary-glow)"
                  }}
                >
                  <span>{text.hero.ctaPrimary}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              {/* USP Bullets */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--loyawin-neutral-500)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" style={{ color: "var(--loyawin-primary)" }}>
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  {text.hero.bullet1}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--loyawin-neutral-500)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" style={{ color: "var(--loyawin-primary)" }}>
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  {text.hero.bullet2}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--loyawin-neutral-500)" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-4 w-4" style={{ color: "var(--loyawin-primary)" }}>
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg> 
                  {text.hero.bullet3}
                </span>
              </div>
            </div>

            {/* Right Column (Hero Illustration Image) */}
            <div className="relative transition-all delay-150 duration-700 opacity-100 translate-y-0 pt-8 lg:pt-0 flex justify-center items-center">
              <div className="relative w-full max-w-[560px] overflow-visible">
                <img 
                  src="https://i.postimg.cc/s2DCtpnx/HERORROO.png" 
                  alt="LoyaWin Hero Platform Graphic" 
                  className="w-full h-auto object-cover drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* 3. SECTION TÍNH NĂNG */}
      <section id="loyawin-features" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Header */}
          <div className="mb-10 text-center transition-all duration-700" style={{ opacity: 1, transform: "translateY(0px)" }}>
            <span 
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-widest uppercase" 
              style={{
                background: "var(--loyawin-primary-xlight)",
                color: "var(--loyawin-primary)",
                border: "1px solid rgba(117, 83, 255, 0.18)"
              }}
            >
              {text.features.tag}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)", letterSpacing: "-0.025em" }}>
              {text.features.title}
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="mb-10 flex justify-center" style={{ opacity: 1, transition: "opacity 0.6s 0.15s" }}>
            <div className="inline-flex rounded-full p-1" style={{ background: "var(--loyawin-bg2)", border: "1px solid rgba(117, 83, 255, 0.12)" }}>
              <button 
                onClick={() => setActiveTab("business")}
                className="cursor-pointer rounded-full border-none px-6 py-2.5 text-sm font-medium transition-all duration-250" 
                style={{
                  background: activeTab === "business" ? "var(--loyawin-primary)" : "transparent", 
                  color: activeTab === "business" ? "white" : "var(--loyawin-neutral-500)", 
                  boxShadow: activeTab === "business" ? "rgba(117, 83, 255, 0.25) 0px 4px 16px" : "none", 
                  fontFamily: "var(--font-head)"
                }}
              >
                {text.features.tabBusiness}
              </button>
              <button 
                onClick={() => setActiveTab("customer")}
                className="cursor-pointer rounded-full border-none px-6 py-2.5 text-sm font-medium transition-all duration-250" 
                style={{
                  background: activeTab === "customer" ? "var(--loyawin-primary)" : "transparent", 
                  color: activeTab === "customer" ? "white" : "var(--loyawin-neutral-500)", 
                  boxShadow: activeTab === "customer" ? "rgba(117, 83, 255, 0.25) 0px 4px 16px" : "none", 
                  fontFamily: "var(--font-head)"
                }}
              >
                {text.features.tabCustomer}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {text.features[activeTab].map((item: any, index: number) => (
              <div 
                key={index}
                className="flex gap-4 rounded-2xl border p-6 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg" 
                style={{
                  background: "white", 
                  borderColor: "rgba(117, 83, 255, 0.1)", 
                  boxShadow: "rgba(117, 83, 255, 0.06) 0px 2px 12px", 
                  opacity: 1, 
                  transform: "translateY(0px)"
                }}
              >
                <div 
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl" 
                  style={{ background: item.bg }}
                >
                  <FeatureIcon 
                    name={item.iconName} 
                    className="h-6 w-6" 
                    style={{ color: item.color }} 
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-base font-semibold" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-[1.7]" style={{ color: "var(--loyawin-neutral-500)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION CÁCH HOẠT ĐỘNG */}
      <section id="loyawin-how-it-works" className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, var(--loyawin-bg2) 0%, white 100%)" }}>
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-12 lg:px-16">
          {/* Header */}
          <div className="mb-14 text-center transition-all duration-700" style={{ opacity: 1, transform: "translateY(0px)" }}>
            <span 
              className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-widest uppercase" 
              style={{
                background: "var(--loyawin-primary-xlight)",
                color: "var(--loyawin-primary)",
                border: "1px solid rgba(117, 83, 255, 0.18)"
              }}
            >
              {text.howItWorks.tag}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[52px] leading-[1.05]" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
              {text.howItWorks.title}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-[1.7]" style={{ color: "var(--loyawin-neutral-500)" }}>
              {text.howItWorks.subtitle}
            </p>
          </div>

          {/* Steps Timeline Circles */}
          <div className="relative mx-auto mb-10 grid max-w-[960px] grid-cols-3 gap-0">
            {/* Connecting Arrows */}
            <div className="absolute top-10 left-[33.33%] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex" style={{ zIndex: 1 }}>
              <ArrowRight className="h-7 w-7 stroke-[1.5]" style={{ color: "rgba(117, 83, 255, 0.35)" }} />
            </div>
            <div className="absolute top-10 left-[66.66%] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex" style={{ zIndex: 1 }}>
              <ArrowRight className="h-7 w-7 stroke-[1.5]" style={{ color: "rgba(117, 83, 255, 0.35)" }} />
            </div>

            {/* Step 1 Circle */}
            <div className="relative flex flex-col items-center">
              <div className="relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105" style={{ background: "var(--loyawin-primary-xlight)" }}>
                  <Store className="h-8 w-8" style={{ color: "var(--loyawin-primary)" }} />
                </div>
                <div className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium text-white" style={{ background: "var(--loyawin-primary)", fontFamily: "var(--font-head)" }}>1</div>
              </div>
            </div>

            {/* Step 2 Circle */}
            <div className="relative flex flex-col items-center">
              <div className="relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105" style={{ background: "rgba(5, 150, 105, 0.12)" }}>
                  <QrCode className="h-8 w-8" style={{ color: "rgb(5, 150, 105)" }} />
                </div>
                <div className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium text-white" style={{ background: "rgb(5, 150, 105)", fontFamily: "var(--font-head)" }}>2</div>
              </div>
            </div>

            {/* Step 3 Circle */}
            <div className="relative flex flex-col items-center">
              <div className="relative z-10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105" style={{ background: "rgba(217, 119, 6, 0.12)" }}>
                  <Gift className="h-8 w-8" style={{ color: "rgb(217, 119, 6)" }} />
                </div>
                <div className="absolute -top-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium text-white" style={{ background: "rgb(217, 119, 6)", fontFamily: "var(--font-head)" }}>3</div>
              </div>
            </div>
          </div>

          {/* Steps Description Cards */}
          <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-5 md:grid-cols-3">
            {/* Step 1 Card */}
            <div 
              className="rounded-2xl border p-6 text-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg" 
              style={{
                background: "white", 
                borderColor: "rgba(117, 83, 255, 0.08)", 
                boxShadow: "rgba(117, 83, 255, 0.06) 0px 2px 16px"
              }}
            >
              <div className="mb-2 text-sm font-medium tracking-[0.12em] uppercase" style={{ color: "var(--loyawin-primary)" }}>
                {text.howItWorks.step1Tag}
              </div>
              <h3 className="text-lg mb-2 font-medium" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                {text.howItWorks.step1Title}
              </h3>
              <p className="text-base leading-[1.7]" style={{ color: "var(--loyawin-neutral-500)" }}>
                {text.howItWorks.step1Desc}
              </p>
            </div>

            {/* Step 2 Card */}
            <div 
              className="rounded-2xl border p-6 text-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg" 
              style={{
                background: "white", 
                borderColor: "rgba(117, 83, 255, 0.08)", 
                boxShadow: "rgba(117, 83, 255, 0.06) 0px 2px 16px"
              }}
            >
              <div className="mb-2 text-sm font-medium tracking-[0.12em] uppercase" style={{ color: "rgb(5, 150, 105)" }}>
                {text.howItWorks.step2Tag}
              </div>
              <h3 className="text-lg mb-2 font-medium" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                {text.howItWorks.step2Title}
              </h3>
              <p className="text-base leading-[1.7]" style={{ color: "var(--loyawin-neutral-500)" }}>
                {text.howItWorks.step2Desc}
              </p>
            </div>

            {/* Step 3 Card */}
            <div 
              className="rounded-2xl border p-6 text-center transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg" 
              style={{
                background: "white", 
                borderColor: "rgba(117, 83, 255, 0.08)", 
                boxShadow: "rgba(117, 83, 255, 0.06) 0px 2px 16px"
              }}
            >
              <div className="mb-2 text-sm font-medium tracking-[0.12em] uppercase" style={{ color: "rgb(217, 119, 6)" }}>
                {text.howItWorks.step3Tag}
              </div>
              <h3 className="text-lg mb-2 font-medium" style={{ color: "var(--loyawin-neutral-900)", fontFamily: "var(--font-head)" }}>
                {text.howItWorks.step3Title}
              </h3>
              <p className="text-base leading-[1.7]" style={{ color: "var(--loyawin-neutral-500)" }}>
                {text.howItWorks.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
