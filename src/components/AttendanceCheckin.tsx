/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  MapPin, 
  Lock, 
  Clock, 
  Settings, 
  BarChart3, 
  Check, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Tablet, 
  Cloud, 
  ArrowRight, 
  RefreshCw, 
  Search, 
  Plus, 
  Filter,
  UserCheck,
  Building,
  Calendar,
  Wifi,
  Map,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Fingerprint
} from "lucide-react";

interface EmployeeCheckin {
  id: string;
  name: string;
  avatar: string;
  role: string;
  branch: string;
  checkInTime: string;
  status: "ON TIME" | "LATE" | "ABSENT";
}

const INITIAL_CHECKINS: EmployeeCheckin[] = [
  { id: "c1", name: "Marcus Valdez", avatar: "👨‍🍳", role: "Head Chef", branch: "HCM 1 (District 1)", checkInTime: "07:54 AM", status: "ON TIME" },
  { id: "c2", name: "Elena Rostova", avatar: "👩", role: "Hostess", branch: "HCM 1 (District 1)", checkInTime: "09:58 AM", status: "ON TIME" },
  { id: "c3", name: "Lucas Mendes", avatar: "👨", role: "Lead Waiter", branch: "HCM 2 (District 3)", checkInTime: "12:14 PM", status: "LATE" },
  { id: "c4", name: "Jean Dupont", avatar: "🧑‍🍳", role: "Line Cook", branch: "HCM 1 (District 1)", checkInTime: "03:45 PM", status: "ON TIME" },
  { id: "c5", name: "Sarah Patel", avatar: "👩‍🍳", role: "Prep Cook", branch: "HCM 2 (District 3)", checkInTime: "08:02 AM", status: "ON TIME" },
  { id: "c6", name: "Tom Sanders", avatar: "🧑", role: "Runner", branch: "HCM 1 (District 1)", checkInTime: "12:00 PM", status: "ON TIME" },
  { id: "c7", name: "Clara K.", avatar: "👩", role: "Waiter", branch: "HCM 2 (District 3)", checkInTime: "—", status: "ABSENT" }
];

export default function AttendanceCheckin({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  const [checkins, setCheckins] = useState<EmployeeCheckin[]>(INITIAL_CHECKINS);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "ON TIME" | "LATE" | "ABSENT">("All");

  // Interaction / Live Simulation States
  const [isSimulatingCheckin, setIsSimulatingCheckin] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0); // 0: Idle, 1: Reading Face/Pin, 2: Match Success, 3: Syncing to Cloud
  const [simulationName, setSimulationName] = useState("David Brown");
  const [simulationAvatar, setSimulationAvatar] = useState("👨");
  const [simulationRole, setSimulationRole] = useState("Bartender");
  const [simulationStatus, setSimulationStatus] = useState<"ON TIME" | "LATE">("ON TIME");
  const [cloudSynced, setCloudSynced] = useState(true);

  // Stats Counters state based on dataset
  const activeCount = checkins.filter(c => c.status !== "ABSENT").length;
  const scheduledCount = checkins.length;
  const lateCount = checkins.filter(c => c.status === "LATE").length;
  const absentCount = checkins.filter(c => c.status === "ABSENT").length;

  const runLiveCheckinSimulation = () => {
    if (isSimulatingCheckin) return;
    setIsSimulatingCheckin(true);
    setSimulationStep(1); // Scan face/pin
    setCloudSynced(false);

    // Step 2: successful validation screen
    setTimeout(() => {
      setSimulationStep(2);
    }, 1500);

    // Step 3: cloud synchronization sequence
    setTimeout(() => {
      setSimulationStep(3);
    }, 3000);

    // Step 4: Add employee to actual list & complete simulation
    setTimeout(() => {
      const now = new Date();
      const formatTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      const newRecord: EmployeeCheckin = {
        id: `c-sim-${Date.now()}`,
        name: simulationName,
        avatar: simulationAvatar,
        role: simulationRole,
        branch: "HCM 1 (District 1)",
        checkInTime: formatTime,
        status: simulationStatus
      };

      setCheckins(prev => [newRecord, ...prev]);
      setSimulationStep(0);
      setIsSimulatingCheckin(false);
      setCloudSynced(true);
    }, 4500);
  };

  const handleReset = () => {
    setCheckins(INITIAL_CHECKINS);
    setCloudSynced(true);
    setSimulationStep(0);
    setIsSimulatingCheckin(false);
  };

  const filteredCheckins = checkins.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.branch.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div id="attendance-checkin-page" className="bg-white text-slate-950 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28 overflow-hidden">
        
        {/* Soft atmospheric radial gradient backdrops */}
        <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#7553FF]/[0.02] rounded-full filter blur-[95px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left: Compelling Sales Copy */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[64px] mb-6">
              {t("Smart Restaurant ", "Chấm công thông minh ", "Smarte Restaurant-")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] to-indigo-600">
                {t("Attendance", "cho nhà hàng", "Zeiterfassung")}
              </span>
            </h1>

            <p className="text-base text-slate-900 font-light leading-relaxed mb-8 max-w-lg">
              {t(
                "Empower staff with QR, PIN, or facial check-in. GPS-lock location boundaries to prevent fraud.",
                "Trao quyền cho nhân viên chấm công bằng mã QR, mã PIN hoặc nhận diện khuôn mặt. Khóa định vị GPS để ngăn chặn gian lận.",
                "Mitarbeiter mit QR, PIN oder Gesichtserkennung einchecken lassen. GPS-Standortsperre, um Betrug zu verhindern."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("attendance-playground");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-medium px-8 py-4 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                {t("Try Check-in Demo", "Dùng thử Check-in Demo", "Check-in-Demo testen")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>


          </div>

          {/* Hero Right: Check-in Terminal Preview Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <img
              src="https://i.postimg.cc/wvcJLBkM/checkinccc.png"
              alt="Attendance Check-in Preview"
              referrerPolicy="no-referrer"
              className="w-full h-auto scale-145 transform origin-center lg:origin-right transition-all duration-300 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
            />
          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES / CAPABILITIES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-24 border-y border-slate-100 bg-slate-50/50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Bulletproof timekeeping for high-volume staffing", "Chấm công tuyệt đối chính xác cho nhân sự quy mô lớn", "Sichere Zeiterfassung für hohes Personalaufkommen")}
            </h2>
            <p className="text-base text-slate-900 font-light leading-relaxed">
              {t(
                "Eliminate payroll leaks and visual shift tracking errors with a single system connected dynamically to your staff roster.",
                "Loại bỏ các thất thoát trong tính lương và lỗi theo dõi ca làm việc bằng hệ thống duy nhất được kết nối trực tiếp với danh sách nhân sự của bạn.",
                "Vermeiden Sie Lohnverluste und Schichtverfolgungsfehler mit einem einzigen System, das dynamisch mit Ihrem Dienstplan verknüpft ist."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Branch Lock */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-purple-100/60">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-slate-950 mb-2">
                {t("Branch Lock & Anti-Fraud", "Khóa chi nhánh & Chống gian lận", "Filialsperre & Betrugsschutz")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Configure absolute radius limits. Ensure team members only check-in when they are physically inside the verified restaurant coordinates. No remote proxy check-ins allowed.",
                  "Cấu hình giới hạn bán kính tuyệt đối. Đảm bảo nhân viên chỉ có thể chấm công khi họ có mặt thực tế bên trong tọa độ nhà hàng đã xác minh. Không cho phép chấm công hộ.",
                  "Konfigurieren Sie absolute Radiusgrenzen. Stellen Sie sicher, dass Teammitglieder sich nur einchecken können, wenn sie sich physisch in den verifizierten Restaurant-Koordinaten befinden."
                )}
              </p>
            </div>

            {/* Card 2: Grace Periods */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-amber-100/60">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-slate-950 mb-2">
                {t("Grace Periods & Break Deductions", "Thời gian ân hạn & Khấu trừ nghỉ giải lao", "Kulanzzeiten & Pausenabzüge")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Automate your custom shift policy rules. Apply grace periods for early/late clocks, auto-calculate lunch breaks, and prevent costly manual payroll corrections.",
                  "Tự động hóa các quy tắc chính sách ca làm việc tùy chỉnh của bạn. Áp dụng thời gian ân hạn cho việc đi muộn/về sớm, tự động tính giờ nghỉ trưa và ngăn ngừa sai sót thủ công.",
                  "Automatisieren Sie Ihre Schichtregeln. Wenden Sie Kulanzzeiten für frühes/spätes Kommen an, berechnen Sie Mittagspausen automatisch und vermeiden Sie manuelle Fehler."
                )}
              </p>
            </div>

            {/* Card 3: Real-time headcount */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-emerald-100/60">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-slate-950 mb-2">
                {t("Real-Time Headcount", "Sĩ số hiện diện thời gian thực", "Anwesenheit in Echtzeit")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Access a live operational overview. Know exactly who is currently working, who is on break, who arrived late, and who is absent from the dashboard instantly.",
                  "Truy cập tổng quan hoạt động trực tiếp. Biết chính xác ai đang làm việc, ai đang nghỉ giải lao, ai đi muộn và ai vắng mặt trực tiếp trên bảng điều khiển ngay lập tức.",
                  "Greifen Sie auf eine Live-Betriebsübersicht zu. Wissen Sie sofort, wer gerade arbeitet, wer Pause macht, wer zu spät gekommen ist oder heute fehlt."
                )}
              </p>
            </div>

          </div>

        </div>
      </motion.section>





    </div>
  );
}
