/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  QrCode, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  TrendingUp, 
  Palette, 
  Link2, 
  ToggleLeft, 
  ToggleRight, 
  Utensils, 
  Eye, 
  MousePointerClick, 
  Share2, 
  Smartphone, 
  Plus, 
  Edit3, 
  Check, 
  Copy, 
  Layout, 
  Trash2, 
  Menu as MenuIcon,
  ChevronRight,
  Info,
  DollarSign
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  image: string;
  isPopular?: boolean;
}

const INITIAL_CATEGORIES = [
  { id: "appetizers", name: "Appetizers" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Artisanal Drinks" }
];

const INITIAL_ITEMS: MenuItem[] = [
  {
    id: "app1",
    name: "Truffle Burrata",
    desc: "Fresh burrata, wild mushrooms, white truffle oil glaze, grilled sourdough",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=600",
    isPopular: true
  },
  {
    id: "app2",
    name: "Seared Hamachi",
    desc: "Yuzu-infused soy, pickled jalapeños, micro cilantro, sea salt flakes",
    price: 19.50,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "main1",
    name: "Cast-Iron Ribeye",
    desc: "14oz prime aged steak, compound garlic butter, rosemary salt, triple-cooked fries",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
    isPopular: true
  },
  {
    id: "main2",
    name: "Pan-Seared Sea Bass",
    desc: "Asparagus spears, saffron butter broth, herb-crusted gold potatoes",
    price: 36.00,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "des1",
    name: "Lava Pistachio Cake",
    desc: "Warm molten heart, Sicilian pistachio paste, vanilla bean gelato",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "drink1",
    name: "Smoked Rosemary Old Fashioned",
    desc: "Bourbon, Angostura bitters, maple syrup, charred rosemary stem",
    price: 16.00,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=600",
    isPopular: true
  }
];

export default function SmartQRMenu({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  // Theme Color Presets for Smart QR Menu Visualizer
  const THEME_PRESETS = [
    { id: "purple", name: "Royal Purple", accent: "#7553FF", bg: "bg-purple-50", text: "text-purple-950", border: "border-purple-200" },
    { id: "emerald", name: "Forest Mint", accent: "#10B981", bg: "bg-emerald-50", text: "text-emerald-950", border: "border-emerald-200" },
    { id: "amber", name: "Amber Ochre", accent: "#F59E0B", bg: "bg-amber-50", text: "text-amber-950", border: "border-amber-200" },
    { id: "rose", name: "Crimson Rose", accent: "#F43F5E", bg: "bg-rose-50", text: "text-rose-950", border: "border-rose-200" }
  ];

  const [activeTheme, setActiveTheme] = useState(THEME_PRESETS[0]);
  const [activeCategory, setActiveCategory] = useState("appetizers");
  const [menuItems, setMenuItems] = useState<MenuItem[]>(INITIAL_ITEMS);
  const [isLiveEnabled, setIsLiveEnabled] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<"mains" | "appetizers" | "desserts" | "drinks">("appetizers" as any);

  // Edit / Add Item States for Dashboard mockup
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [editPrice, setEditPrice] = useState<string>("");
  const [editName, setEditName] = useState<string>("");

  // Live Scan simulation
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(false);

  // Stats simulation for mini line charts
  const [viewsCount, setViewsCount] = useState(1420);
  const [scansCount, setScansCount] = useState(892);

  useEffect(() => {
    // Slowly increment stats to feel organic and live
    const interval = setInterval(() => {
      setViewsCount((v) => v + Math.floor(Math.random() * 2) + 1);
      if (Math.random() > 0.4) {
        setScansCount((s) => s + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const triggerScanDemo = () => {
    setIsScanning(true);
    setScanResult(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult(true);
    }, 2000);
  };

  const copyMenuLink = () => {
    setCopiedLink(true);
    navigator.clipboard?.writeText("https://gastrohub.menu/qr/sunsetbistro");
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleEditSave = () => {
    if (!editingItem) return;
    setMenuItems((prev) =>
      prev.map((item) =>
        item.id === editingItem.id
          ? { ...item, name: editName, price: parseFloat(editPrice) || item.price }
          : item
      )
    );
    setEditingItem(null);
  };

  // Filter items based on active interactive tab
  const displayedItems = menuItems.filter((item) => {
    if (activeTab === "appetizers") return item.id.startsWith("app");
    if (activeTab === "mains") return item.id.startsWith("main");
    if (activeTab === "desserts") return item.id.startsWith("des");
    if (activeTab === "drinks") return item.id.startsWith("drink");
    return true;
  });

  return (
    <div id="smart-qr-menu-page" className="bg-white text-slate-950 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28">
        
        {/* Background decorative flares */}
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full filter blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#7553FF]/[0.02] rounded-full filter blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[56px] mb-6">
              {t("Brand-aligned", "Thực đơn QR", "Markenkonforme")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                {t("QR menus", "đồng bộ thương hiệu", "QR-Speisekarten")}
              </span>.
            </h1>

            <p className="text-sm sm:text-base text-slate-900 font-light leading-relaxed mb-8 max-w-lg">
              {t(
                "Replace clunky PDF downloads with interactive, mobile-optimized digital QR menus. Instantly update prices and availability, showcase high-res photos, and deliver a seamless guest ordering experience with zero re-printing.",
                "Thay thế các tệp PDF thu phóng bất tiện bằng thực đơn QR kỹ thuật số tương tác, tối ưu cho di động. Cập nhật giá và trạng thái món ăn tức thì, hiển thị hình ảnh sắc nét và mang lại trải nghiệm tuyệt vời cho khách hàng mà không cần in lại tệp.",
                "Ersetzen Sie unhandliche PDF-Downloads durch interaktive, mobiloptimierte digitale QR-Speisekarten. Aktualisieren Sie Preise und Verfügbarkeiten sofort, präsentieren Sie hochauflösende Fotos und bieten Sie ein nahtloses Besterlebnis – ganz ohne Neudruck."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("qr-features-section");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                {t("Update Your Prices Free", "Cập nhật giá miễn phí", "Preise kostenlos aktualisieren")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick value badges */}
            <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-slate-100 w-full text-slate-900 text-base font-light">
              <span className="flex items-center gap-1.5">✓ Zero PDF Pinch-Zoom</span>
              <span className="flex items-center gap-1.5">✓ Instantly Updates Real-Time</span>
              <span className="flex items-center gap-1.5">✓ Fully Branded Styling</span>
            </div>
          </div>

          {/* Hero Right: Beautiful Image Container */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient shadow/depth background ring */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,70,193,0.06)_0%,transparent_70%)] pointer-events-none" />

            {/* Beautiful Image Container */}
            <div className="relative w-full max-w-xl">
              <img
                src="https://i.postimg.cc/wTzy5XjZ/Qrmenu-mascot.png"
                alt="QR Menu Illustration"
                className="w-full h-auto rounded-xl object-cover scale-135 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </motion.section>

      {/* 2. DYNAMIC & INTERACTIVE FEATURES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} id="qr-features-section" className="py-20 md:py-24 border-y border-slate-100 bg-slate-50/50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Built for seamless operations", "Xây dựng cho quy trình liền mạch", "Für reibungslose Abläufe entwickelt")}
            </h2>
            <p className="text-base text-slate-900 font-light leading-relaxed">
              {t(
                "Experience features that streamline table turnaround, keep menu options updated in real-time, and monitor user intent via direct scans.",
                "Trải nghiệm các tính năng giúp tối ưu hóa thời gian xoay vòng bàn, giữ cho các tùy chọn thực đơn luôn được cập nhật trong thời gian thực và theo dõi hành vi người dùng thông qua lượt quét trực tiếp.",
                "Erleben Sie Funktionen, die den Tischwechsel optimieren, Speisekartenoptionen in Echtzeit aktualisieren und Scans überwachen."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Real-time update */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-purple-100/60">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("Real-Time Updating", "Cập nhật thời gian thực", "Echtzeit-Aktualisierung")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Instantly toggle sold-out ingredients or change seasonal specials. No re-printing codes required.",
                  "Bật/tắt ngay lập tức các nguyên liệu đã hết hoặc thay đổi món đặc biệt theo mùa. Không cần in lại mã.",
                  "Ausverkaufte Zutaten sofort deaktivieren oder saisonale Specials ändern. Kein Neudruck erforderlich."
                )}
              </p>
            </div>

            {/* Card 2: Analytics Dashboard */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-emerald-100/60">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("Analytics Dashboard", "Bảng phân tích số liệu", "Analyse-Dashboard")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Track scan metrics and dish popularity. Optimize pricing based on live guest analytics.",
                  "Theo dõi các chỉ số quét và độ phổ biến của món ăn. Tối ưu hóa giá cả dựa trên phân tích trực tiếp về thực khách.",
                  "Scans und Beliebtheit von Gerichten verfolgen. Preise basierend auf Live-Gästeanalysen optimieren."
                )}
              </p>
            </div>

            {/* Card 3: Theme Customization */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-amber-100/60">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("Theme Customization", "Tùy chỉnh giao diện", "Design-Personalisierung")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Stylize background frames, colors, and typography settings to match your branding.",
                  "Thiết kế các khung nền, màu sắc và phông chữ phù hợp với bộ nhận diện thương hiệu của bạn.",
                  "Hintergrundrahmen, Farben und Typografie an Ihr Branding anpassen."
                )}
              </p>
            </div>

            {/* Card 4: Shareable Link */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-rose-100/60">
                <Link2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("Shareable Link", "Liên kết chia sẻ", "Teilbarer Link")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Allow guests to browse menu links on social channels, websites, or emails in one click.",
                  "Cho phép khách hàng duyệt các liên kết thực đơn trên mạng xã hội, trang web hoặc email chỉ với một cú nhấp chuột.",
                  "Ermöglichen Sie Gästen, Menülinks auf Social Media, Websites oder per E-Mail zu durchsuchen."
                )}
              </p>
            </div>

          </div>

        </div>
      </motion.section>





    </div>
  );
}
