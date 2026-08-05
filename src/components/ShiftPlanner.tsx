/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Calendar, 
  Users, 
  BrainCircuit, 
  Bell, 
  Sliders, 
  Check, 
  Plus, 
  Clock, 
  ArrowRight, 
  Lock, 
  User, 
  RefreshCw, 
  AlertCircle, 
  UserPlus, 
  CheckCircle, 
  AlertTriangle,
  ChevronRight,
  Filter,
  Layers,
  Sparkles,
  Info
} from "lucide-react";

interface ShiftSlot {
  id: string;
  day: string;
  department: "Kitchen" | "Service";
  role: string;
  assignedTo: { name: string; avatar: string } | null;
  hours: string;
  isGap?: boolean;
}

const INITIAL_SHIFTS: ShiftSlot[] = [
  { id: "s1", day: "Mon", department: "Kitchen", role: "Head Chef", assignedTo: { name: "Marcus V.", avatar: "👨‍🍳" }, hours: "08:00 - 16:00" },
  { id: "s2", day: "Mon", department: "Service", role: "Host/Hostess", assignedTo: { name: "Elena R.", avatar: "👩" }, hours: "10:00 - 18:00" },
  { id: "s3", day: "Tue", department: "Kitchen", role: "Sous Chef", assignedTo: null, hours: "08:00 - 16:00", isGap: true },
  { id: "s4", day: "Tue", department: "Service", role: "Lead Waiter", assignedTo: { name: "Lucas M.", avatar: "👨" }, hours: "12:00 - 20:00" },
  { id: "s5", day: "Wed", department: "Kitchen", role: "Line Cook", assignedTo: { name: "Jean L.", avatar: "🧑‍🍳" }, hours: "16:00 - 24:00" },
  { id: "s6", day: "Wed", department: "Service", role: "Runner", assignedTo: null, hours: "17:00 - 23:00", isGap: true },
  { id: "s7", day: "Thu", department: "Kitchen", role: "Prep Cook", assignedTo: { name: "Sarah P.", avatar: "👩‍🍳" }, hours: "08:00 - 16:00" },
  { id: "s8", day: "Thu", department: "Service", role: "Waiter", assignedTo: { name: "Tom S.", avatar: "🧑" }, hours: "12:00 - 20:00" }
];

const AVAILABLE_STAFF = [
  { name: "Marcus V.", avatar: "👨‍🍳" },
  { name: "Elena R.", avatar: "👩" },
  { name: "Jean L.", avatar: "🧑‍🍳" },
  { name: "Sarah P.", avatar: "👩‍🍳" },
  { name: "Lucas M.", avatar: "👨" },
  { name: "Tom S.", avatar: "🧑" },
  { name: "Clara K.", avatar: "👩" },
  { name: "David B.", avatar: "👨" }
];

export default function ShiftPlanner({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  // Current active viewport states
  const [shifts, setShifts] = useState<ShiftSlot[]>(INITIAL_SHIFTS);
  const [filterDept, setFilterDept] = useState<"All" | "Kitchen" | "Service">("All");
  const [activeHeroAvatarStep, setActiveHeroAvatarStep] = useState(0);

  // Auto-resolve state simulations
  const [isResolving, setIsResolving] = useState(false);
  const [pendingRequests, setPendingRequests] = useState(2);
  const [resolvedGaps, setResolvedGaps] = useState<string[]>([]);
  const [lockedSwap, setLockedSwap] = useState(true);

  // Interactive drop zone simulation state
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  // Simulate automated rotation of avatars in hero section
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroAvatarStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const triggerAutoResolve = () => {
    setIsResolving(true);
    setTimeout(() => {
      setIsResolving(false);
      setPendingRequests(0);
      
      // Auto assign the empty shifts
      setShifts((prev) =>
        prev.map((s) => {
          if (s.id === "s3") {
            return { ...s, assignedTo: { name: "Clara K.", avatar: "👩" }, isGap: false };
          }
          if (s.id === "s6") {
            return { ...s, assignedTo: { name: "David B.", avatar: "👨" }, isGap: false };
          }
          return s;
        })
      );
    }, 1800);
  };

  const handleManualAssign = (slotId: string, staffName: string) => {
    const staff = AVAILABLE_STAFF.find(st => st.name === staffName);
    if (!staff) return;

    setShifts(prev => prev.map(s => {
      if (s.id === slotId) {
        return { ...s, assignedTo: staff, isGap: false };
      }
      return s;
    }));
    setActiveSlotId(null);
  };

  const handleReset = () => {
    setShifts(INITIAL_SHIFTS);
    setPendingRequests(2);
    setLockedSwap(true);
  };

  const filteredShifts = shifts.filter(
    (s) => filterDept === "All" || s.department === filterDept
  );

  return (
    <div id="shift-planner-page" className="bg-white text-slate-950 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28">
        
        {/* Soft background lighting gradients */}
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#7553FF]/[0.02] rounded-full filter blur-[95px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-2 items-center">
          
          {/* Left Hero copy */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10 w-fit">


            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[56px] mb-6">
              {t("Collaborative", "Công cụ lập ca", "Effiziente")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                {t("Shift Planner", "Tối ưu hóa thông minh", "Schichtplanung")}
              </span>.
            </h1>

            <p className="text-base sm:text-base text-slate-900 font-light leading-relaxed mb-8 max-w-lg">
              {t(
                "Eliminate schedule gaps, resolve shift trades smoothly, and warn managers of double-booking instantly. An intuitive visual layout designed to reduce turnover and optimize labor costs in one click.",
                "Loại bỏ các khoảng trống lịch trình, giải quyết việc đổi ca mượt mà và cảnh báo quản lý về việc trùng ca ngay lập tức. Bố cục trực quan giúp giảm thiểu tỷ lệ nghỉ việc và tối ưu hóa chi phí nhân sự chỉ trong một cú nhấp chuột.",
                "Beseitigen Sie Planungslücken, lösen Sie Schichtwechsel reibungslos und warnen Sie Manager sofort vor Doppelbuchungen. Ein intuitives Layout zur Reduzierung der Fluktuation und Optimierung der Personalkosten."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("shift-playground");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-medium px-8 py-4 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                {t("Try Shift Planner Free", "Dùng thử Shift Planner miễn phí", "Shift Planner kostenlos testen")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick stats counter */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 mt-12 pt-8 border-t border-slate-100 w-fit text-left">
              <div>
                <p className="text-2xl font-light text-slate-950">
                  {t("Under 3s", "Dưới 3 giây", "Unter 3 Sek.")}
                </p>
                <p className="text-sm font-light text-slate-400 uppercase tracking-wider mt-1">
                  {t("Schedule generation", "Tạo lịch trình", "Schichterstellung")}
                </p>
              </div>
              <div>
                <p className="text-2xl font-light text-slate-950">
                  {t("0 Gaps", "0 khoảng trống", "0 Lücken")}
                </p>
                <p className="text-sm font-light text-slate-400 uppercase tracking-wider mt-1">
                  {t("Shortage Protection", "Bảo vệ thiếu hụt", "Mangelschutz")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero block: 3D isometric interactive weekly calendar grid */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Background alignment perspective mesh */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

            {/* 3D stage container */}
            <div className="relative w-full max-w-2xl p-0 flex flex-col items-center">
              <img
                src="https://i.postimg.cc/c1DHRDpY/Shift-Planner-Gastrowin.png"
                alt="Shift Planner Interface Preview"
                referrerPolicy="no-referrer"
                className="w-full h-auto scale-130 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
              />
            </div>
          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES / BENEFITS SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-24 border-y border-slate-100 bg-slate-50/50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Designed to optimize workforce planning", "Thiết kế tối ưu hóa kế hoạch nhân sự", "Entwickelt zur Optimierung der Personalplanung")}
            </h2>
            <p className="text-base text-slate-900 font-light leading-relaxed">
              {t(
                "We leverage intelligent operational algorithms to map shift requests and prevent critical scheduling shortages.",
                "Chúng tôi tận dụng các thuật toán vận hành thông minh để lập bản đồ yêu cầu ca làm và ngăn ngừa tình trạng thiếu nhân lực nghiêm trọng.",
                "Wir nutzen intelligente Betriebs-Algorithmen, um Schichtanfragen abzubilden und kritische Personalengpässe zu vermeiden."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Sparkles or Calendar */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/80 border border-[#7553FF]/12 rounded-3xl p-8 shadow-[0_8px_32px_rgba(117,83,255,0.08)] transition-colors duration-300 flex flex-col text-left group hover:border-[#7553FF]/20 relative overflow-hidden"
            >
              {/* Background ambient lighting orb */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#7553FF]/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-12 h-12 bg-gradient-to-br from-[#7553FF]/12 to-[#7553FF]/06 border border-[#7553FF]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Sparkles className="w-6 h-6 text-[#7553FF]" />
              </div>
              <h3 className="text-lg font-medium text-slate-950 mb-2">
                {t("Intelligent Auto-Resolve", "Tự động giải quyết thông minh", "Intelligenter Auto-Abgleich")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Analyze shift gaps and match available staff automatically based on role qualifications, working hour limits, and preferences in one click.",
                  "Phân tích khoảng trống ca và tự động khớp nhân viên phù hợp dựa trên năng lực vai trò, giới hạn giờ làm việc và sở thích chỉ với một cú nhấp chuột.",
                  "Analysieren Sie Schichtlücken und teilen Sie verfügbare Mitarbeiter automatisch basierend auf Qualifikationen, Arbeitszeitgrenzen und Vorlieben mit einem Klick zu."
                )}
              </p>
            </motion.div>

            {/* Card 2: Alert Bell with red badge */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/80 border border-rose-500/12 rounded-3xl p-8 shadow-[0_8px_32px_rgba(244,63,94,0.06)] transition-colors duration-300 flex flex-col text-left group hover:border-rose-500/20 relative overflow-hidden"
            >
              {/* Background ambient lighting orb */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-rose-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-12 h-12 bg-gradient-to-br from-rose-500/12 to-rose-500/06 border border-rose-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform relative">
                <Bell className="w-6 h-6 text-rose-600" />
                <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 border-2 border-white rounded-full" />
              </div>
              <h3 className="text-lg font-medium text-slate-950 mb-2">
                {t("Gap & Shortage Warnings", "Cảnh báo khoảng trống & Thiếu hụt", "Warnungen vor Lücken & Engpässen")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Receive real-time notifications about missing staff coverage. Highlight compliance violations, potential overtime traps, and shift overlaps instantly.",
                  "Nhận thông báo theo thời gian thực về việc thiếu hụt nhân sự. Làm nổi bật các vi phạm tuân thủ, bẫy tăng ca tiềm ẩn và trùng ca làm việc ngay lập tức.",
                  "Erhalten Sie Echtzeit-Benachrichtigungen über fehlende Schichtabdeckungen. Heben Sie Compliance-Verstöße, potenzielle Überstundenfallen und Schichtüberschneidungen sofort hervor."
                )}
              </p>
            </motion.div>

            {/* Card 3: Filtering toggle */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white/80 border border-emerald-500/12 rounded-3xl p-8 shadow-[0_8px_32px_rgba(16,185,129,0.06)] transition-colors duration-300 flex flex-col text-left group hover:border-emerald-500/20 relative overflow-hidden"
            >
              {/* Background ambient lighting orb */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/12 to-emerald-500/06 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Sliders className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-950 mb-2">
                {t("Multi-Department View", "Xem đa bộ phận", "Multi-Abteilungs-Ansicht")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Segment schedule grids cleanly by Kitchen, Front-of-House service, or custom sub-departments. Filter down to individual team roles in seconds.",
                  "Phân chia lịch trình rõ ràng theo Nhà bếp, Phục vụ sảnh chính hoặc các bộ phận phụ tùy chỉnh. Lọc chi tiết theo từng vai trò của nhóm trong vài giây.",
                  "Segmentieren Sie Schichtpläne sauber nach Küche, Service (Front-of-House) oder benutzerdefinierten Unterabteilungen. Filtern Sie in Sekundenschnelle nach einzelnen Teamrollen."
                )}
              </p>
            </motion.div>

          </div>

        </div>
      </motion.section>

      {/* 3. INTERACTIVE DASHBOARD SNEAK PEEK & PLAYGROUND */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} id="shift-playground" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Top Block: Controller & Header */}
          <div className="max-w-5xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight">
              {t("Smarter Tools for Smarter Operations", "Công cụ thông minh hơn cho vận hành thông minh hơn", "Smartere Tools für elegantere Betriebsabläufe")}
            </h2>
            <p className="text-base text-slate-900 font-light leading-relaxed">
              {t(
                "Set up your stores in minutes and experience hassle-free shift management.",
                "Thiết lập nhà hàng của bạn trong vài phút và trải nghiệm quản lý ca làm việc hoàn toàn không rắc rối.",
                "Richten Sie Ihre Filialen in wenigen Minuten ein und erleben Sie müheloses Schichtmanagement."
              )}
            </p>
          </div>

          {/* Bottom Block: Dashboard Preview Image */}
          <div className="w-full max-w-5xl mx-auto">
            <img
              src="https://i.postimg.cc/kXfQzgzG/Shiftplanner111.png"
              alt="Shift Planner Board Preview"
              referrerPolicy="no-referrer"
              className="w-full h-auto drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
            />
          </div>

        </div>
      </motion.section>



    </div>
  );
}
