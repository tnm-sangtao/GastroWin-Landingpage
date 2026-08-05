/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Shield, 
  AlertTriangle, 
  FileCheck, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Check, 
  ChevronDown, 
  Download, 
  Eye, 
  Layers, 
  HelpCircle,
  FileText,
  AlertOctagon,
  Search,
  Filter,
  Plus,
  Info,
  Activity,
  Heart,
  FileSpreadsheet
} from "lucide-react";

interface MenuItemWithAllergens {
  id: string;
  name: string;
  category: string;
  detectedAllergens: { name: string; type: "gluten" | "dairy" | "nuts" | "eggs" | "fish" | "soy"; color: string; bg: string }[];
  riskLevel: "High" | "Medium" | "Low";
  compliance: boolean;
}

const INITIAL_ALLERGENS_ITEMS: MenuItemWithAllergens[] = [
  {
    id: "item-1",
    name: "Classic Caesar Salad",
    category: "Salads",
    detectedAllergens: [
      { name: "Gluten (Croutons)", type: "gluten", color: "text-amber-700 border-amber-200", bg: "bg-amber-50" },
      { name: "Fish (Anchovies)", type: "fish", color: "text-blue-700 border-blue-200", bg: "bg-blue-50" },
      { name: "Eggs (Dressing)", type: "eggs", color: "text-yellow-700 border-yellow-200", bg: "bg-yellow-50" }
    ],
    riskLevel: "High",
    compliance: false
  },
  {
    id: "item-2",
    name: "Creamy Truffle Tagliatelle",
    category: "Main Courses",
    detectedAllergens: [
      { name: "Gluten (Pasta)", type: "gluten", color: "text-amber-700 border-amber-200", bg: "bg-amber-50" },
      { name: "Dairy (Cream & Parm)", type: "dairy", color: "text-purple-700 border-purple-200", bg: "bg-purple-50" }
    ],
    riskLevel: "High",
    compliance: false
  },
  {
    id: "item-3",
    name: "Crispy Coconut Shrimp",
    category: "Appetizers",
    detectedAllergens: [
      { name: "Shellfish (Shrimp)", type: "fish", color: "text-blue-700 border-blue-200", bg: "bg-blue-50" },
      { name: "Tree Nuts (Coconut)", type: "nuts", color: "text-orange-700 border-orange-200", bg: "bg-orange-50" }
    ],
    riskLevel: "High",
    compliance: false
  },
  {
    id: "item-4",
    name: "Spiced Chickpea Curry",
    category: "Main Courses",
    detectedAllergens: [],
    riskLevel: "Low",
    compliance: true
  },
  {
    id: "item-5",
    name: "Gluten-Free Pecan Tart",
    category: "Desserts",
    detectedAllergens: [
      { name: "Tree Nuts (Pecans)", type: "nuts", color: "text-orange-700 border-orange-200", bg: "bg-orange-50" },
      { name: "Eggs (Binder)", type: "eggs", color: "text-yellow-700 border-yellow-200", bg: "bg-yellow-50" }
    ],
    riskLevel: "Medium",
    compliance: true
  },
  {
    id: "item-6",
    name: "Artisanal Sourdough & Butter",
    category: "Appetizers",
    detectedAllergens: [
      { name: "Gluten (Wheat)", type: "gluten", color: "text-amber-700 border-amber-200", bg: "bg-amber-50" },
      { name: "Dairy (Butter)", type: "dairy", color: "text-purple-700 border-purple-200", bg: "bg-purple-50" }
    ],
    riskLevel: "High",
    compliance: false
  }
];

export default function AllergenAnalyzer({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  const [heroScannerStep, setHeroScannerStep] = useState(0);
  const [items, setItems] = useState<MenuItemWithAllergens[]>(INITIAL_ALLERGENS_ITEMS);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRisk, setFilterRisk] = useState<"All" | "High" | "Medium" | "Low">("All");

  // Interaction Simulators
  const [isUploading, setIsUploading] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [analysisDone, setAnalysisDone] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [complianceScore, setComplianceScore] = useState(92);

  // Scan progress timer
  const runAnalysisSimulation = (fileName: string) => {
    setIsUploading(true);
    setScanProgress(0);
    setAnalysisDone(false);
    setUploadedFileName(fileName);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            setAnalysisDone(true);
            setComplianceScore(95); // score updates on scan completion
          }, 600);
          return 100;
        }
        return next;
      });
    }, 80);
  };

  // Auto loop for hero visual animations
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroScannerStep((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRisk = filterRisk === "All" || item.riskLevel === filterRisk;
    return matchesSearch && matchesRisk;
  });

  return (
    <div id="allergen-analyzer-page" className="bg-white text-slate-950 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28">
        
        {/* Background decorative soft ambient glows */}
        <div className="absolute top-0 left-1/4 w-[480px] h-[480px] bg-purple-500/[0.03] rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#7553FF]/[0.02] rounded-full filter blur-[90px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left: Strategic copy */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[56px] mb-6">
              <span className="block">
                {t("Allergen Safety", "An Toàn Dị Ứng", "Allergensicherheit")}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] to-indigo-600">
                {t("Made Simple.", "Trở Nên Đơn Giản.", "Ganz einfach.")}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-900 font-light leading-relaxed mb-8 max-w-lg">
              {t(
                "Analyze raw menu documents and instantly identify, classify, and format health warning alerts. Mitigate restaurant liability, generate fully compliant declaration tables, and reassure sensitive customers.",
                "Phân tích tài liệu thực đơn thô và phát hiện, phân loại, định dạng các cảnh báo nguy hại sức khỏe ngay lập tức. Giảm thiểu rủi ro pháp lý, tạo bảng công bố thông tin hoàn toàn tuân thủ và mang lại sự an tâm tuyệt đối cho khách hàng nhạy cảm.",
                "Analysieren Sie rohe Speisekartendokumente und identifizieren, klassifizieren und formatieren Sie sofort Gesundheitswarnungen. Reduzieren Sie das Haftungsrisiko des Restaurants, erstellen Sie gesetzeskonforme Deklarationstabellen und beruhigen Sie empfindliche Kunden."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("allergen-playground");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                {t("Scan Menu For Allergens Free", "Quét thực đơn tìm dị ứng miễn phí", "Menü kostenlos auf Allergene scannen")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Micro Trust Matrix */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-100 w-full text-left">
              <div>
                <p className="text-2xl font-light text-slate-950">14 Key</p>
                <p className="text-xs font-light text-slate-900 mt-1">{t("EU Standard Allergens mapped", "Đã lập bản đồ dị ứng chuẩn EU", "EU-Standardallergene erfasst")}</p>
              </div>
              <div>
                <p className="text-2xl font-light text-slate-950">100%</p>
                <p className="text-xs font-light text-slate-900 mt-1">{t("Legal Audit Safe", "An toàn kiểm toán pháp lý", "Rechtssicher im Audit")}</p>
              </div>
            </div>
          </div>

          {/* Hero Right: Beautiful Image Container */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient shadow/depth background ring */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,70,193,0.06)_0%,transparent_70%)] pointer-events-none" />

            {/* Beautiful Image Container */}
            <div className="relative w-full max-w-lg">
              <img
                src="https://i.postimg.cc/8zRg6xnN/Allergen.png"
                alt="Allergen Analyzer Illustration"
                className="w-full h-auto rounded-xl object-cover scale-140 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-24 border-y border-slate-100 bg-slate-50/50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Pristine menus meeting legal compliance limits", "Thực đơn hoàn hảo đáp ứng các chuẩn mực pháp lý", "Makellose Speisekarten, die gesetzliche Vorgaben erfüllen")}
            </h2>
            <p className="text-base text-slate-900 font-light leading-relaxed">
              {t(
                "We leverage neural natural language architectures to locate, label, and risk-verify food elements across your entire hospitality catalog.",
                "Chúng tôi tận dụng kiến trúc mạng nơ-ron ngôn ngữ tự nhiên để định vị, dán nhãn và kiểm chứng rủi ro các thành phần thực phẩm trong toàn bộ danh mục dịch vụ của bạn.",
                "Wir nutzen neuronale Architekturen für natürliche Sprache, um Lebensmittelelemente in Ihrem gesamten Gastronomie-Katalog zu lokalisieren, zu kennzeichnen und auf Risiken zu überprüfen."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Shield Safety/Detection */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 mb-2">
                {t("Automated Allergen Isolation", "Tự động phân lập dị ứng", "Automatische Allergen-Isolierung")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Scan dish ingredients, sauces, and cooking techniques. Our cognitive safety parser isolates the 14 major allergens (gluten, peanuts, shellfish, and dairy) instantly.",
                  "Quét nguyên liệu món ăn, nước sốt và kỹ thuật chế biến. Trình phân tích an toàn nhận thức của chúng tôi phân lập 14 chất gây dị ứng chính (gluten, đậu phộng, động vật có vỏ và sữa) ngay lập tức.",
                  "Scannen Sie Gerichtzutaten, Saucen und Kochtechniken. Unser kognitiver Sicherheits-Parser isoliert die 14 wichtigsten Allergene (Gluten, Erdnüsse, Schalentiere und Milchprodukte) sofort."
                )}
              </p>
            </div>

            {/* Card 2: Traffic light risk levels */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-amber-100/60">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 mb-2">
                {t("Multi-Tier Risk Analytics", "Phân tích rủi ro đa cấp", "Mehrstufige Risikoanalyse")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Instantly map risk factors based on preparation cross-contamination limits. Segment dishes easily by High, Medium, or Low allergen risk scores.",
                  "Lập bản đồ các yếu tố rủi ro ngay lập tức dựa trên giới hạn lây nhiễm chéo khi chuẩn bị. Phân loại các món ăn dễ dàng theo điểm rủi ro dị ứng Cao, Trung bình hoặc Thấp.",
                  "Erfassen Sie Risikofaktoren basierend auf Kreuzkontaminationsgrenzen bei der Zubereitung. Segmentieren Sie Gerichte einfach nach hohen, mittleren oder niedrigen Allergen-Risikobewertungen."
                )}
              </p>
            </div>

            {/* Card 3: EU Compliance Reporting */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-emerald-100/60">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-950 mb-2">
                {t("EU Regulation Reports", "Báo cáo tuân thủ quy chuẩn EU", "EU-Konformitätsberichte")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Rebuild menu declarations according to EU Food Information Regulation 1169/2011. Export official high-resolution compliance documents with one tap.",
                  "Xây dựng lại các công bố thực đơn theo Quy định thông tin thực phẩm của EU 1169/2011. Xuất các tài liệu tuân thủ có độ phân giải cao chính thức chỉ với một lượt nhấn.",
                  "Erstellen Sie Speisekartenerklärungen gemäß der EU-Lebensmittelinformationsverordnung 1169/2011 neu. Exportieren Sie offizielle, hochauflösende Konformitätsdokumente mit einem Klick."
                )}
              </p>
            </div>

          </div>

        </div>
      </motion.section>




    </div>
  );
}
