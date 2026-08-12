/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  ShoppingBag, 
  Camera, 
  Sliders, 
  Upload, 
  Download, 
  CheckCircle,
  HelpCircle,
  ChevronRight,
  RefreshCw,
  Eye,
  Settings
} from "lucide-react";

interface DishPreset {
  id: string;
  name: string;
  prompt: string;
  imageUrl: string;
}

const DISH_PRESETS: DishPreset[] = [
  {
    id: "thai-basil",
    name: "Spicy Thai Basil Stir-fried Chicken",
    prompt: "A top-down professional food photography of Spicy Thai Basil Stir-fried Chicken with fresh red chilies, dark soy-glazed meat, glossy basil leaves, and a perfectly crispy-edged sunny-side-up egg over steamed jasmine rice, rich steam, food styling props, dramatic studio lighting.",
    imageUrl: "https://res.cloudinary.com/dhpimajwu/image/upload/v1782469657/Gemini_Generated_Image_nzembknzembknzem_1_1_wlj5xl.png"
  },
  {
    id: "burger",
    name: "Gourmet Double Smash Cheeseburger",
    prompt: "An eye-level studio macro shot of a gourmet double smash cheeseburger, melted cheddar dripping down two charred beef patties, fresh crunchy lettuce, artisan toasted brioche bun with sesame seeds, steam rising, professional commercial product lighting, dark slate background.",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "poke",
    name: "Fresh Salmon Poke Bowl",
    prompt: "A beautiful 45-degree overhead food photography of a salmon poke bowl, vibrant orange diced sashimi salmon, green edamame, sliced rich avocado, bright red radish, mango chunks, sesame garnish, matte black ceramic bowl, soft natural window light.",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "pancakes",
    name: "Matcha Soufflé Pancakes",
    prompt: "A close-up gourmet commercial photo of fluffy Japanese matcha soufflé pancakes stacked high, dusted with sweet green matcha powder, drizzled with golden maple syrup, fresh glossy red raspberries and blueberries on the side, pristine white marble table, elegant morning café mood.",
    imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=1200"
  }
];

interface ComparisonPreset {
  id: string;
  nameEn: string;
  nameVi: string;
  nameDe: string;
  beforeUrl: string;
  afterUrl: string;
}

const COMPARISON_PRESETS: ComparisonPreset[] = [
  {
    id: "burger",
    nameEn: "Smash Burger",
    nameVi: "Smash Burger",
    nameDe: "Smash Burger",
    beforeUrl: "https://i.postimg.cc/ZRrCBKSY/anhcamera.png?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://i.postimg.cc/W3MhFbvz/anhai.png?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "pizza",
    nameEn: "Neapolitan Pizza",
    nameVi: "Pizza Neapolitan",
    nameDe: "Neapolitanische Pizza",
    beforeUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "salmon",
    nameEn: "Salmon Bowl",
    nameVi: "Tô Cá Hồi Poke",
    nameDe: "Lachs-Poke-Bowl",
    beforeUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1200",
    afterUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1200"
  }
];

export default function AIFoodImages({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  // Hero Interactive Generation state
  const [activePreset, setActivePreset] = useState<DishPreset>(DISH_PRESETS[0]);
  const [typedPrompt, setTypedPrompt] = useState(DISH_PRESETS[0].name);
  const [isGenerating, setIsGenerating] = useState(false);
  const [displayedImageUrl, setDisplayedImageUrl] = useState(DISH_PRESETS[0].imageUrl);
  const [typingIntervalId, setTypingIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Before & After slider state
  const [activeComparison, setActiveComparison] = useState<ComparisonPreset>(COMPARISON_PRESETS[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(800);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // How-it-works State
  const [activeStep, setActiveStep] = useState(1);
  const [mockUploadName, setMockUploadName] = useState("");
  const [selectedAngle, setSelectedAngle] = useState("Top-Down");
  const [selectedRatio, setSelectedRatio] = useState("1:1");
  const [selectedStyle, setSelectedStyle] = useState("Warm Studio");
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  // Triggering the generator in the Hero section
  const handleSelectPreset = (preset: DishPreset) => {
    if (isGenerating || activePreset.id === preset.id) return;
    
    // Clear any existing typing animation
    if (typingIntervalId) {
      clearInterval(typingIntervalId);
    }

    setActivePreset(preset);
    setIsGenerating(true);
    setTypedPrompt("");

    // Simulate typing the name
    let currentIndex = 0;
    const textToType = preset.name;
    const interval = setInterval(() => {
      setTypedPrompt((prev) => prev + textToType.charAt(currentIndex));
      currentIndex++;
      if (currentIndex >= textToType.length) {
        clearInterval(interval);
        
        // Wait a small bit, then show the "Generating" effect
        setTimeout(() => {
          setDisplayedImageUrl(preset.imageUrl);
          setIsGenerating(false);
        }, 1200);
      }
    }, 25);

    setTypingIntervalId(interval);
  };

  useEffect(() => {
    return () => {
      if (typingIntervalId) clearInterval(typingIntervalId);
    };
  }, [typingIntervalId]);

  useEffect(() => {
    if (!sliderRef.current) return;
    
    // Set initial size
    setContainerWidth(sliderRef.current.getBoundingClientRect().width || 800);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    observer.observe(sliderRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle Before & After Drag Slider
  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging.current) {
      handleMove(e.clientX);
    }
  };

  // Mock export handler
  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExportSuccess(true);
      setTimeout(() => {
        setExportSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div id="ai-food-images-page" className="bg-slate-50/40 text-slate-900 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28">
        {/* Subtle decorative circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full filter blur-[100px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Appetizing Typography */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[56px] mb-6">
              {t("Stunning", "Ảnh món ăn", "Atemberaubende")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] to-indigo-600">
                {t("photos", "siêu thực", "Fotos")}
              </span>.<br className="hidden sm:inline" />
              {t("No camera.", "Không cần máy ảnh.", "Ohne Kamera.")}
            </h1>

            <p className="text-sm sm:text-base text-slate-900 font-light leading-relaxed mb-8 max-w-l">
              {t(
                "Generate hyper-realistic, studio-grade food photography directly from your recipe name or prompt. Boost your restaurant menu visual rates in seconds.",
                "Tạo ảnh món ăn siêu thực, chất lượng studio trực tiếp từ tên món ăn hoặc mô tả. Tăng tỷ lệ thu hút thực khách cho thực đơn của bạn trong vài giây.",
                "Erstellen Sie hyperrealistische Food-Fotografie in Studioqualität direkt aus dem Namen Ihres Gerichts oder Prompts. Steigern Sie die visuellen Raten Ihrer Speisekarte in Sekundenschnelle."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("interactive-demo");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group shrink-0"
              >
                {t("Generate Free Photo", "Tạo ảnh miễn phí", "Kostenloses Foto erstellen")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>


          </div>

          {/* Right Column: Beautiful Image Container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-2xl">
              <img
                src="https://i.postimg.cc/mgbT6hYG/Image-AI-mascot.png"
                alt="AI Food Illustration"
                className="w-full h-auto rounded-xl object-cover scale-115 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </motion.section>

      {/* 2. INTERACTIVE BEFORE & AFTER SLIDER SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} id="interactive-demo" className="bg-slate-100/50 border-y border-slate-200/60 py-20 md:py-28 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Compare smartphone pictures with GastroWin AI", "So sánh ảnh điện thoại với GastroWin AI", "Smartphone-Bilder mit GastroWin AI vergleichen")}
            </h2>
            <p className="text-sm text-slate-900 font-light leading-relaxed">
              {t(
                "Drag the interactive slider below to see how our layout-preserving neural network transforms poorly-lit kitchen snapshots into luxurious commercial catalog art.",
                "Kéo thanh trượt tương tác bên dưới để xem mạng nơ-ron bảo toàn bố cục của chúng tôi biến ảnh bếp thiếu sáng thành tác phẩm nghệ thuật catalog thương mại sang trọng.",
                "Ziehen Sie den interaktiven Schieberegler unten, um zu sehen, wie unser Layout-erhaltendes neuronales Netzwerk schlecht beleuchtete Küchen-Schnappschüsse in luxuriöse kommerzielle Katalogkunst verwandelt."
              )}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">


            <div 
              id="slider-container"
              ref={sliderRef}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-slate-300 select-none cursor-ew-resize"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => { isDragging.current = true; }}
              onMouseUp={() => { isDragging.current = false; }}
              onMouseLeave={() => { isDragging.current = false; }}
            >
              
              {/* After: Studio Premium Image (Base layer) */}
              <img 
                src={activeComparison.afterUrl} 
                alt="AI Enhanced Studio" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div 
                className="absolute top-4 right-4 bg-[#7553FF] text-white text-[14px] font-medium px-4 py-2 rounded-full shadow-md z-10 flex items-center gap-1.5 transition-opacity duration-200 pointer-events-none"
                style={{ opacity: sliderPosition > 85 ? 0 : 1 }}
              >
                GastroWin AI Studio Photo
              </div>

              {/* Before: Raw phone photo (Clipped layer) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden z-10" 
                style={{ width: `${sliderPosition}%` }}
              >
                <div 
                  className="absolute inset-y-0 left-0 h-full"
                  style={{ width: `${containerWidth}px` }}
                >
                  <img 
                    src={activeComparison.beforeUrl} 
                    alt="Original Smartphone Snapshot" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Smartphone grid overlay just for Before view */}
                  <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
                </div>
              </div>
              <div 
                className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md border border-white/10 text-white text-[14px] font-medium px-4 py-2 rounded-full shadow-md z-10 flex items-center gap-1.5 transition-opacity duration-200 pointer-events-none"
                style={{ opacity: sliderPosition < 15 ? 0 : 1 }}
              >
                Standard Smartphone Snapshot
              </div>

              {/* Center Slider bar Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white z-20 cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white hover:bg-slate-50 text-slate-950 rounded-full shadow-2xl border border-slate-300 flex items-center justify-center z-30 transition-all cursor-grab active:cursor-grabbing">
                  <div className="flex gap-1 items-center justify-center text-slate-500">
                    <span className="text-xs font-light font-mono">◀</span>
                    <span className="text-xs font-light font-mono">▶</span>
                  </div>
                </div>
              </div>

            </div>



          </div>

        </div>
      </motion.section>

      {/* 3. BENEFITS SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-28 px-6 md:px-8 max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
            {t("Flawless photos that boost your bottom line", "Ảnh chụp hoàn mỹ giúp bùng nổ doanh số", "Makellose Fotos, die Ihren Gewinn steigern")}
          </h2>
          <p className="text-sm text-slate-900 font-light">
            {t(
              "Forget about styling plates, setting up expensive light diffusers, and booking photographers. GastroWin does everything on the cloud in seconds.",
              "Không cần trang trí đĩa ăn, không cần chuẩn bị đèn chiếu tốn kém, cũng không cần thuê thợ ảnh. GastroWin thực hiện mọi thứ trên đám mây trong vài giây.",
              "Vergessen Sie das Anrichten von Tellern, das Einrichten teurer Lichtdiffusoren und das Buchen von Fotografen. GastroWin erledigt alles in Sekundenschnelle in der Cloud."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Cost-saving */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-300/60 transition-all duration-300 flex flex-col text-left group">
            <div className="w-11 h-11 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 mb-2">
              {t("95% Cost Reduction", "Giảm 95% chi phí", "95% Kostenersparnis")}
            </h3>
            <p className="text-base text-slate-900 font-light leading-relaxed mt-1">
              {t(
                "Save thousands of dollars annually on equipment hires, plate decorators, and high-rate professional photography agencies.",
                "Tiết kiệm hàng ngàn đô la mỗi năm chi phí thuê thiết bị, thợ trang trí đĩa ăn và các công ty chụp ảnh chuyên nghiệp đắt đỏ.",
                "Sparen Sie jährlich Tausende von Dollar für Ausrüstungsmiete, Food-Stylisten und teure professionelle Fotografie-Agenturen."
              )}
            </p>
          </div>

          {/* Card 2: High Conversion */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-300/60 transition-all duration-300 flex flex-col text-left group">
            <div className="w-11 h-11 bg-purple-500/10 text-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 mb-2">
              {t("3.8x Order Conversion", "Tăng 3.8 lần chuyển đổi đặt món", "3.8x Bestell-Konvertierung")}
            </h3>
            <p className="text-base text-slate-900 font-light leading-relaxed mt-1">
              {t(
                "Premium visual plates boost visual appetite. Experience a significant increase in both digital orders and physical table selections.",
                "Hình ảnh món ăn cao cấp kích thích thị giác thực khách. Trải nghiệm sự gia tăng vượt bậc về cả đơn hàng kỹ thuật số và món gọi tại bàn vật lý.",
                "Erstklassige Bilder regen den Appetit an. Erleben Sie eine deutliche Steigerung sowohl bei Online-Bestellungen als auch bei der Tischwahl."
              )}
            </p>
          </div>

          {/* Card 3: Camera Angles */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-300/60 transition-all duration-300 flex flex-col text-left group">
            <div className="w-11 h-11 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 mb-2">
              {t("Flexible Studio Angles", "Góc chụp Studio linh hoạt", "Flexible Studio-Winkel")}
            </h3>
            <p className="text-base text-slate-900 font-light leading-relaxed mt-1">
              {t(
                "Configure exactly how your food is shot. Adjust aspect ratios, studio lighting types, backgrounds, and professional lenses.",
                "Cấu hình chính xác cách món ăn của bạn được chụp. Điều chỉnh tỷ lệ khung hình, loại ánh sáng studio, phông nền và ống kính chuyên nghiệp.",
                "Konfigurieren Sie genau, wie Ihr Essen fotografiert wird. Passen Sie Seitenverhältnisse, Studiolicht-Typen, Hintergründe und Profi-Objektive an."
              )}
            </p>
          </div>

          {/* Card 4: Photo Enhancement */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-300/60 transition-all duration-300 flex flex-col text-left group">
            <div className="w-11 h-11 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 mb-2">
              {t("Neural Resolution Booster", "Bộ tăng độ phân giải nơ-ron", "Neuronaler Auflösungs-Booster")}
            </h3>
            <p className="text-base text-slate-900 font-light leading-relaxed mt-1">
              {t(
                "Automatic upscale to ultra-high-resolution, direct crop formats, and print-ready CMYK conversion for flyers and digital signages.",
                "Tự động nâng cấp lên độ phân giải cực cao, định dạng cắt trực tiếp và chuyển đổi CMYK sẵn sàng in ấn cho tờ rơi và bảng hiệu kỹ thuật số.",
                "Automatisches Upscaling auf Ultra-High-Resolution, direktes Zuschneiden und druckfertige CMYK-Konvertierung für Flyer und digitale Beschilderung."
              )}
            </p>
          </div>

        </div>
      </motion.section>



    </div>
  );
}
