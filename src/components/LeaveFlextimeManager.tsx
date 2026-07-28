/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Calendar, 
  Clock, 
  PiggyBank, 
  RotateCcw, 
  FolderOpen, 
  Check, 
  X, 
  Plus, 
  Search, 
  Filter, 
  Sparkles, 
  ArrowRight, 
  User, 
  MapPin, 
  Info, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  FileText,
  Clock3,
  Undo
} from "lucide-react";

interface LeaveRequest {
  id: string;
  employeeName: string;
  employeeAvatar: string;
  branch: string;
  leaveType: "ANNUAL LEAVE" | "SICK LEAVE" | "COMPENSATORY REST";
  dateRange: string;
  totalDays: number;
  status: "Approved" | "Pending" | "Rejected" | "Refunded";
}

const INITIAL_REQUESTS: LeaveRequest[] = [
  { id: "lr1", employeeName: "Sarah Connor", employeeAvatar: "👩", branch: "Mitte Bistro", leaveType: "ANNUAL LEAVE", dateRange: "Jul 10 - Jul 14, 2026", totalDays: 5, status: "Approved" },
  { id: "lr2", employeeName: "Matthias Müller", employeeAvatar: "👨", branch: "Kreuzberg Diner", leaveType: "SICK LEAVE", dateRange: "Jul 02 - Jul 04, 2026", totalDays: 3, status: "Approved" },
  { id: "lr3", employeeName: "Hoang Phat Nguyen", employeeAvatar: "🧑‍💻", branch: "Mitte Bistro", leaveType: "COMPENSATORY REST", dateRange: "Jul 18 - Jul 19, 2026", totalDays: 2, status: "Pending" },
  { id: "lr4", employeeName: "Chloe Dubois", employeeAvatar: "👩‍🍳", branch: "Charlottenburg Grill", leaveType: "ANNUAL LEAVE", dateRange: "Aug 01 - Aug 10, 2026", totalDays: 8, status: "Pending" },
  { id: "lr5", employeeName: "Luigi Verdi", employeeAvatar: "👨‍🍳", branch: "Prenzlauer Kitchen", leaveType: "COMPENSATORY REST", dateRange: "Jun 28 - Jun 28, 2026", totalDays: 1, status: "Approved" },
  { id: "lr6", employeeName: "Anna Lindqvist", employeeAvatar: "👩", branch: "Mitte Bistro", leaveType: "SICK LEAVE", dateRange: "Jun 15 - Jun 17, 2026", totalDays: 3, status: "Rejected" }
];

export default function LeaveFlextimeManager({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  const [requests, setRequests] = useState<LeaveRequest[]>(INITIAL_REQUESTS);
  
  // Interactive Stat metrics that change when "Cancel & Refund" is clicked
  const [availableBalance, setAvailableBalance] = useState(24);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"ALL" | "ANNUAL LEAVE" | "SICK LEAVE" | "COMPENSATORY REST">("ALL");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "Approved" | "Pending" | "Rejected">("ALL");
  
  // Create state for adding a new leave request
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState(false);
  const [newEmployeeName, setNewEmployeeName] = useState("");
  const [newBranch, setNewBranch] = useState("Mitte Bistro");
  const [newLeaveType, setNewLeaveType] = useState<"ANNUAL LEAVE" | "SICK LEAVE" | "COMPENSATORY REST">("ANNUAL LEAVE");
  const [newDays, setNewDays] = useState(3);
  const [newDates, setNewDates] = useState("Jul 22 - Jul 25, 2026");

  // Filter logic
  const filteredRequests = requests.filter(req => {
    const matchesSearch = req.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          req.branch.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "ALL" || req.leaveType === typeFilter;
    const matchesStatus = statusFilter === "ALL" || req.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Calculate dynamic stats
  const approvedCount = requests.filter(r => r.status === "Approved").length;
  const pendingCount = requests.filter(r => r.status === "Pending").length;

  // Handle Cancel & Refund
  const handleCancelAndRefund = (id: string, days: number, currentStatus: string) => {
    setRequests(prev => prev.map(req => {
      if (req.id === id) {
        return { ...req, status: "Refunded" as const };
      }
      return req;
    }));
    
    // Refund the days back if it was Approved or Pending (annual leave specifically, or simulated generally for feedback)
    setAvailableBalance(prev => prev + days);
  };

  // Handle Approval of Pending requests
  const handleApprove = (id: string) => {
    setRequests(prev => prev.map(req => {
      if (req.id === id) {
        return { ...req, status: "Approved" as const };
      }
      return req;
    }));
  };

  // Handle Rejection
  const handleReject = (id: string) => {
    setRequests(prev => prev.map(req => {
      if (req.id === id) {
        return { ...req, status: "Rejected" as const };
      }
      return req;
    }));
  };

  // Submit leave request simulation
  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmployeeName.trim()) return;

    const newReq: LeaveRequest = {
      id: "lr_" + Date.now(),
      employeeName: newEmployeeName,
      employeeAvatar: "🧑",
      branch: newBranch,
      leaveType: newLeaveType,
      dateRange: newDates,
      totalDays: Number(newDays),
      status: "Pending"
    };

    setRequests([newReq, ...requests]);
    setIsNewRequestModalOpen(false);
    setNewEmployeeName("");
  };

  return (
    <div id="leave-manager-page" className="bg-white text-slate-950 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28 overflow-hidden">
        
        {/* Soft background ambient gradients */}
        <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-purple-500/[0.03] rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 left-10 w-[380px] h-[380px] bg-blue-500/[0.02] rounded-full filter blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left: Copy & Call-to-action */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[64px] mb-6">
              {t("Compliant", "Quản lý phép", "Gesetzeskonforme")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                {t("leave & flextime", "nghỉ & giờ linh hoạt", "Urlaubs- & Zeiterfassung")}
              </span>.
            </h1>

            <p className="text-base text-slate-900 font-light leading-relaxed mb-8 max-w-xl">
              {t(
                "Empower your restaurant team with transparent leave balance accounts, real-time flextime & compensatory rest tracking, and one-click digital approval loops. Integrated with local labor laws to prevent shift shortfalls automatically.",
                "Cung cấp cho đội ngũ nhân viên nhà hàng tài khoản số dư phép minh bạch, theo dõi thời gian làm việc linh hoạt & bù giờ theo thời gian thực, cùng quy trình phê duyệt số hóa nhanh chóng. Tích hợp luật lao động địa phương để tự động ngăn chặn tình trạng thiếu ca.",
                "Ermöglichen Sie Ihrem Restaurantteam transparente Urlaubskonten, Echtzeit-Erfassung von Gleitzeit und Überstunden sowie digitale Freigaben mit einem Klick."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsNewRequestModalOpen(true)}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-medium px-8 py-4 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                {t("Try Leave Manager Free", "Dùng thử Leave Manager miễn phí", "Leave Manager kostenlos testen")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick trust checkmarks */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-sm font-light text-slate-900">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Auto-Calculated Flextime Balance</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Multi-Branch Schedule Safeguards</span>
            </div>
          </div>

          {/* Hero Right: Leave Manager Preview Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            <img
              src="https://i.postimg.cc/h4YxmNLL/Leaveeee.png"
              alt="Leave and Flextime Manager Preview"
              referrerPolicy="no-referrer"
              className="w-full h-auto scale-125 transform origin-center lg:origin-right transition-all duration-300 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
            />
          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-24 border-y border-slate-100 bg-slate-50/50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Streamline time-off without roster shortfalls", "Hợp lý hóa thời gian nghỉ phép mà không sợ hụt ca làm", "Freistellungen ohne Personalausfälle optimieren")}
            </h2>
            <p className="text-base text-slate-900 font-light leading-relaxed">
              {t(
                "Ditch messy whiteboard notes, WhatsApp group chats, and outdated Excel trackers. GastroWin handles leaves professionally, with full local policy compliance.",
                "Loại bỏ các ghi chú lộn xộn trên bảng trắng, các nhóm chat WhatsApp và các bảng theo dõi Excel lỗi thời. GastroWin xử lý việc nghỉ phép một cách chuyên nghiệp, tuân thủ đầy đủ chính sách địa phương.",
                "Vergessen Sie unübersichtliche Notizen, WhatsApp-Gruppenchats und veraltete Excel-Tabellen. GastroWin verwaltet Urlaube professionell und gesetzeskonform."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Multiple Leave Types */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <FolderOpen className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-950 mb-2">
                {t("Multiple Leave Types", "Nhiều loại ngày nghỉ", "Verschiedene Urlaubsarten")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Configure distinct pools for Annual Leave, Sick Leave, Parental Time, and special custom exemptions.",
                  "Định cấu hình các nhóm riêng biệt cho Nghỉ phép thường niên, Nghỉ ốm, Nghỉ thai sản và các trường hợp miễn trừ tùy chỉnh đặc biệt.",
                  "Konfigurieren Sie separate Budgets für Jahresurlaub, Krankheit, Elternzeit und spezielle Sonderfreistellungen."
                )}
              </p>
            </div>

            {/* Card 2: Flextime / Compensatory Rest */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-emerald-100/60">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-950 mb-2">
                {t("Flextime & Compensatory", "Giờ linh hoạt & Nghỉ bù", "Gleitzeit & Freizeitausgleich")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Convert accumulated overtime directly into digital compensatory rest credits for fair, automated payouts or time-off.",
                  "Chuyển đổi số giờ làm thêm tích lũy trực tiếp thành số ngày nghỉ bù kỹ thuật số để thanh toán tự động hoặc nghỉ phép công bằng.",
                  "Wandeln Sie angesammelte Überstunden direkt in digitales Guthaben für Freizeitausgleich oder automatisierte Auszahlungen um."
                )}
              </p>
            </div>

            {/* Card 3: Balance Tracking */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-amber-100/60">
                <PiggyBank className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-950 mb-2">
                {t("Balance Tracking", "Theo dõi số dư", "Kontostandsverfolgung")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Continuous real-time account ledger tracking. Available holiday quotas decrease only upon actual confirmed approvals.",
                  "Theo dõi sổ cái tài khoản liên tục trong thời gian thực. Hạn ngạch nghỉ phép khả dụng chỉ giảm khi có sự phê duyệt xác nhận thực tế.",
                  "Fortlaufende Echtzeit-Verfolgung des Kontostands. Verfügbares Urlaubsbudget verringert sich erst bei tatsächlicher Bestätigung."
                )}
              </p>
            </div>

            {/* Card 4: Cancel & Refund */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-rose-100/60">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-950 mb-2">
                {t("Auto Quota Restoration", "Khôi phục hạn ngạch tự động", "Automatische Kontingentwiederherstellung")}
              </h3>
              <p className="text-sm text-slate-900 font-light leading-relaxed">
                {t(
                  "Change of plans? Easily cancel upcoming time-off with instant quota refunds automatically credited back to employee balances.",
                  "Thay đổi kế hoạch? Dễ dàng hủy lịch nghỉ phép sắp tới với tính năng hoàn hạn ngạch tức thì, tự động cộng lại vào số dư của nhân viên.",
                  "Pläne geändert? Stornieren Sie anstehende Freistellungen einfach mit sofortiger automatischer Rückerstattung auf das Mitarbeiterkonto."
                )}
              </p>
            </div>

          </div>

        </div>
      </motion.section>





      {/* 6. CREATE LEAVE REQUEST MODAL */}
      <AnimatePresence>
        {isNewRequestModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 max-w-md w-full text-left space-y-4"
            >
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-semibold text-sm text-slate-950">Submit Leave Request</h3>
                <button 
                  onClick={() => setIsNewRequestModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateRequest} className="space-y-4 text-sm font-medium text-slate-700">
                <div className="space-y-1.5">
                  <label className="text-slate-500">Employee Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hoang Phat Nguyen"
                    value={newEmployeeName}
                    onChange={(e) => setNewEmployeeName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-[#7553FF]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-500">Branch</label>
                    <select
                      value={newBranch}
                      onChange={(e) => setNewBranch(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-[#7553FF] text-sm font-medium"
                    >
                      <option>Mitte Bistro</option>
                      <option>Kreuzberg Diner</option>
                      <option>Charlottenburg Grill</option>
                      <option>Prenzlauer Kitchen</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-500">Duration (Days)</label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={newDays}
                      onChange={(e) => setNewDays(Number(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-[#7553FF]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-500">Leave Type</label>
                  <select
                    value={newLeaveType}
                    onChange={(e) => setNewLeaveType(e.target.value as any)}
                    className="w-full bg-white border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-[#7553FF] text-sm font-medium"
                  >
                    <option value="ANNUAL LEAVE">ANNUAL LEAVE</option>
                    <option value="SICK LEAVE">SICK LEAVE</option>
                    <option value="COMPENSATORY REST">COMPENSATORY REST</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-500">Date Range Description</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jul 22 - Jul 25, 2026"
                    value={newDates}
                    onChange={(e) => setNewDates(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-[#7553FF]"
                  />
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsNewRequestModalOpen(false)}
                    className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2 rounded-full cursor-pointer transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white px-4 py-2 rounded-full cursor-pointer transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
