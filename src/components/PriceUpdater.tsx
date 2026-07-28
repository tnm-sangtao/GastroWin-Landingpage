/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  FileCode2, 
  Calculator, 
  Grid3X3, 
  Upload, 
  Check, 
  ChevronDown, 
  RefreshCw, 
  FileText, 
  Download, 
  ArrowLeft,
  DollarSign,
  Maximize2,
  Lock,
  Layers,
  HelpCircle
} from "lucide-react";

interface MenuTemplate {
  id: string;
  name: string;
  cuisine: string;
  bgClass: string;
  items: {
    name: string;
    description: string;
    originalPrice: number;
  }[];
}

const MENU_TEMPLATES: MenuTemplate[] = [
  {
    id: "sunset-bistro",
    name: "Sunset Bistro",
    cuisine: "Contemporary American",
    bgClass: "bg-amber-50/70 border-amber-100",
    items: [
      { name: "Avocado Sourdough Toast", description: "Poached eggs, heirloom radish, feta cheese", originalPrice: 14.00 },
      { name: "Truffle Parm Fries", description: "Fresh herbs, garlic aioli, white truffle oil", originalPrice: 9.50 },
      { name: "Crispy Buttermilk Chicken Sandwich", description: "Spicy cabbage slaw, house pickles, brioche", originalPrice: 17.00 },
      { name: "Classic French Onion Soup", description: "Gruyère gratin, toasted baguette slice", originalPrice: 11.50 }
    ]
  },
  {
    id: "la-trattoria",
    name: "La Trattoria",
    cuisine: "Rustic Italian",
    bgClass: "bg-stone-50 border-stone-200",
    items: [
      { name: "Prosciutto & Arugula Pizza", description: "Fresh mozzarella, san marzano tomatoes, EVOO", originalPrice: 19.50 },
      { name: "Rigatoni alla Bolognese", description: "Slow-simmered beef & pork ragu, pecorino romano", originalPrice: 22.00 },
      { name: "Tuscan Kale Salad", description: "Lemon vinaigrette, toasted pine nuts, parmesan", originalPrice: 13.00 },
      { name: "Classic Tiramisu", description: "Espresso-soaked ladyfingers, whipped mascarpone", originalPrice: 9.00 }
    ]
  },
  {
    id: "sakura",
    name: "Sakura Sushi Bar",
    cuisine: "Traditional Japanese",
    bgClass: "bg-red-50/20 border-red-100",
    items: [
      { name: "Dragon Roll (8pcs)", description: "Eel, cucumber, topped with avocado & unagi sauce", originalPrice: 18.00 },
      { name: "Spicy Tuna Crispy Rice", description: "Sriracha aioli, jalapeño slice, sweet glaze", originalPrice: 15.50 },
      { name: "Pork Gyoza (6pcs)", description: "Pan-fried dumplings, house dipping sauce", originalPrice: 8.50 },
      { name: "Miso Glazed Black Cod", description: "Charred bok choy, pickled ginger shoot", originalPrice: 29.00 }
    ]
  }
];

export default function PriceUpdater({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  // Hero Scanner Animation State
  const [heroScannerIndex, setHeroScannerIndex] = useState(0);
  const [heroApplyScan, setHeroApplyScan] = useState(true);

  // Demo Section States
  const [selectedTemplate, setSelectedTemplate] = useState<MenuTemplate>(MENU_TEMPLATES[0]);
  const [percentageChange, setPercentageChange] = useState<number>(10);
  const [roundOption, setRoundOption] = useState<"none" | "99" | "95">("99");
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  // Processing status & progress states
  const [updateProgress, setUpdateProgress] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [processingState, setProcessingState] = useState<string>("");
  const [showOutput, setShowOutput] = useState<boolean>(false);
  const [exportingResult, setExportingResult] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Loop scanner index in hero section for visualization
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroApplyScan(false);
      setTimeout(() => {
        setHeroScannerIndex((prev) => (prev + 1) % 3);
        setHeroApplyScan(true);
      }, 300);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFileSelection(file.name);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFileSelection(file.name);
    }
  };

  const handleFileSelection = (fileName: string) => {
    setIsUploading(true);
    setTimeout(() => {
      setUploadedFileName(fileName);
      setIsUploading(false);
      // Automatically switch demo template or simulate uploaded template
    }, 1200);
  };

  // Automated pricing math helper
  const calculateNewPrice = (original: number): number => {
    let price = original * (1 + percentageChange / 100);
    if (roundOption === "99") {
      price = Math.floor(price) + 0.99;
    } else if (roundOption === "95") {
      price = Math.floor(price) + 0.95;
    } else {
      price = Math.round(price * 100) / 100;
    }
    return price;
  };

  // Run the core simulated updater
  const triggerPriceUpdate = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setUpdateProgress(0);
    setShowOutput(false);
    setProcessingState("Reading PDF vector grid...");

    const interval = setInterval(() => {
      setUpdateProgress((prev) => {
        const next = prev + 4;
        if (next >= 100) {
          clearInterval(interval);
          setProcessingState("Smart overlays successfully aligned!");
          setTimeout(() => {
            setIsProcessing(false);
            setShowOutput(true);
          }, 800);
          return 100;
        }

        if (next < 25) {
          setProcessingState("Parsing coordinate system & texts...");
        } else if (next < 50) {
          setProcessingState(`Analyzing price metrics (${selectedTemplate.items.length} tags detected)...`);
        } else if (next < 75) {
          setProcessingState(`Running price update formula (+${percentageChange}% with .${roundOption} rounding)...`);
        } else {
          setProcessingState("Injecting vector overlay patches with perfect layout font mapping...");
        }

        return next;
      });
    }, 100);
  };

  // Download PDF simulation
  const handleDownloadResult = () => {
    setExportingResult(true);
    setTimeout(() => {
      setExportingResult(false);
      setDownloadSuccess(true);
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3500);
    }, 1500);
  };

  return (
    <div id="ai-price-updater-page" className="bg-white text-slate-900 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28">
        
        {/* Decorative background gradients */}
        <div className="absolute top-10 left-10 w-[450px] h-[450px] bg-purple-500/[0.03] rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-indigo-500/[0.02] rounded-full filter blur-[90px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Bold, Premium SaaS Copy */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[64px] mb-6">
              <span className="block whitespace-nowrap">
                {t("Update menu", "Cập nhật", "Menü-")}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                {t("prices instantly.", "giá thực đơn ngay lập tức.", "Preise sofort anpassen.")}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-900 font-light leading-relaxed mb-8 max-w-lg">
              {t(
                "Upload any print-ready PDF, scanned image, or flyer menu. Change prices by fixed rates or custom percentages. Our layout intelligence maps precise font styles and injects seamlessly matched pricing overlays.",
                "Tải lên bất kỳ tệp PDF sẵn sàng in nào, hình ảnh quét hoặc tờ rơi thực đơn. Thay đổi giá theo mức cố định hoặc phần trăm tùy chỉnh. Trí tuệ bố cục của chúng tôi sẽ ánh xạ chính xác phong cách phông chữ và đưa các lớp phủ giá khớp một cách liền mạch.",
                "Laden Sie eine druckfertige PDF, ein gescanntes Bild oder einen Flyer hoch. Ändern Sie Preise um feste Sätze oder Prozentsätze. Unsere Layout-Intelligenz fügt Preisanpassungen nahtlos ein."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("price-demo-section");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                {t("Update Your Prices Free", "Cập nhật giá miễn phí", "Preise kostenlos anpassen")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-100 w-full">
              <div>
                <p className="text-2xl font-light text-slate-950">Under 10s</p>
                <p className="text-xs font-light text-slate-900 mt-1">{t("Processing time", "Thời gian xử lý", "Verarbeitungszeit")}</p>
              </div>
              <div>
                <p className="text-2xl font-light text-slate-950">100%</p>
                <p className="text-xs font-light text-slate-900 mt-1">{t("Layout Preserved", "Bố cục được giữ nguyên", "Layout beibehalten")}</p>
              </div>
              <div>
                <p className="text-2xl font-light text-slate-950">0</p>
                <p className="text-xs font-light text-slate-900 mt-1">{t("Source Files Needed", "Tệp gốc cần thiết", "Quelldateien benötigt")}</p>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic Isometric 3D mockup of PDF menu scan */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Background 3D grid layout / decor */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

            {/* Beautiful Image Container */}
            <div className="relative w-full max-w-lg">
              <img
                src="https://i.postimg.cc/DZv0tvLK/Updatemenu.png"
                alt="Price Update Illustration"
                className="w-full h-auto rounded-xl object-cover scale-135 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES / BENEFITS SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-24 border-y border-slate-100 bg-slate-50/50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Pristine menus without the graphic designer bills", "Thực đơn hoàn mỹ không lo chi phí thiết kế đồ họa", "Perfekte Speisekarten ohne teure Grafikdesigner-Rechnungen")}
            </h2>
            <p className="text-base text-slate-900 font-light leading-relaxed">
              {t(
                "We leverage proprietary computer vision and neural layout engines to identify pricing structures and swap numbers natively inside flat files.",
                "Chúng tôi tận dụng thị giác máy tính độc quyền và các công cụ bố cục thần kinh để xác định cấu trúc định giá và hoán đổi số một cách tự nhiên trong các tệp phẳng.",
                "Wir nutzen hochentwickelte Computer-Vision- und Layout-Engines, um Preisstrukturen zu erkennen und Zahlen direkt in flachen Dateien zu ändern."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature Card 1: Crossed-out source file */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-amber-100/60">
                <FileCode2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 mb-2">
                {t("No Source Files Required", "Không yêu cầu tệp gốc", "Keine Quelldateien erforderlich")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Forget looking for long-lost Adobe InDesign packages, Illustrator files, or Microsoft Word templates. Upload any flattened PDF, menu board photograph, or scan directly to update prices.",
                  "Quên đi việc tìm kiếm các tệp Adobe InDesign, Illustrator hoặc mẫu Microsoft Word đã thất lạc từ lâu. Chỉ cần tải lên bất kỳ tệp PDF phẳng nào, ảnh bảng menu hoặc bản scan trực tiếp để cập nhật giá.",
                  "Vergessen Sie die Suche nach verlorenen Adobe InDesign-Paketen, Illustrator-Dateien oder Word-Vorlagen. Laden Sie einfach ein flaches PDF, ein Foto des Menüboards oder einen Scan hoch."
                )}
              </p>
            </div>

            {/* Feature Card 2: Calculator/Gear */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 mb-2">
                {t("Automated Math & Logics", "Tự động tính toán & Logic", "Automatische Berechnungen & Logik")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Apply price rules globally in one click. Increase everything by +12%, add a flat $1.50 supply offset, and automatically format all terminal decimals to clean ends like .99 or .95.",
                  "Áp dụng các quy tắc giá trên toàn cầu chỉ bằng một lần nhấp. Tăng mọi thứ lên +12%, thêm khoản bù đắp nguồn cung cố định 1,50 đô la và tự động định dạng tất cả các số thập phân cuối sạch như .99 hoặc .95.",
                  "Wenden Sie Preisregeln weltweit mit einem Klick an. Erhöhen Sie alles um +12 %, fügen Sie einen Festbetrag von 1,50 $ hinzu und runden Sie alle Dezimalstellen automatisch auf Endungen wie .99 oder .95."
                )}
              </p>
            </div>

            {/* Feature Card 3: Layout Grid */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-emerald-100/60">
                <Grid3X3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 mb-2">
                {t("Smart Typography Overlay", "Ghi đè kiểu chữ thông minh", "Intelligenter Typografie-Overlay")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Our layout engine automatically matches your menu's unique fonts, size, letter spacing, and color palette. It masks old prices with pixel-perfect backdrop coordinates, ensuring 100% design integrity.",
                  "Công cụ bố cục của chúng tôi tự động khớp với phông chữ độc đáo, kích thước, khoảng cách chữ và bảng màu trong thực đơn của bạn. Nó che đi mức giá cũ bằng tọa độ nền hoàn hảo đến từng pixel, đảm bảo tính toàn vẹn 100% của thiết kế.",
                  "Unsere Layout-Engine passt sich automatisch den einzigartigen Schriftarten, Größen, Laufweiten und Farbpaletten Ihrer Speisekarte an. Sie maskiert alte Preise pixelgenau und schützt das Design."
                )}
              </p>
            </div>

          </div>

        </div>
      </motion.section>



    </div>
  );
}
