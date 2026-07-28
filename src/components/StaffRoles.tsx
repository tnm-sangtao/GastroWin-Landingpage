/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Users, 
  UserPlus, 
  MapPin, 
  Shield, 
  TrendingUp, 
  Search, 
  Filter, 
  Eye, 
  Pencil, 
  Check, 
  X, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  ShieldAlert, 
  Plus, 
  Download,
  Sliders,
  Briefcase
} from "lucide-react";

interface Employee {
  id: string;
  name: string;
  avatar: string;
  department: string;
  branch: string;
  employmentType: "Full-Time" | "Part-Time" | "Seasonal" | "Mini-Job";
  status: "ACTIVE" | "INACTIVE";
  email: string;
}

const INITIAL_EMPLOYEES: Employee[] = [
  { id: "emp1", name: "Sarah Connor", avatar: "👩", department: "Front of House", branch: "Mitte Bistro", employmentType: "Full-Time", status: "ACTIVE", email: "sarah.c@gastrohub.io" },
  { id: "emp2", name: "Matthias Müller", avatar: "👨", department: "Kitchen / Kitchen Chef", branch: "Kreuzberg Diner", employmentType: "Full-Time", status: "ACTIVE", email: "m.mueller@gastrohub.io" },
  { id: "emp3", name: "Hoang Phat Nguyen", avatar: "🧑‍💻", department: "Administration / HQ", branch: "Mitte Bistro", employmentType: "Full-Time", status: "ACTIVE", email: "hp.nguyen@gastrohub.io" },
  { id: "emp4", name: "Chloe Dubois", avatar: "👩‍🍳", department: "Kitchen / Sous Chef", branch: "Charlottenburg Grill", employmentType: "Part-Time", status: "ACTIVE", email: "chloe.d@gastrohub.io" },
  { id: "emp5", name: "Luigi Verdi", avatar: "👨‍🍳", department: "Kitchen / Pastry", branch: "Prenzlauer Kitchen", employmentType: "Full-Time", status: "ACTIVE", email: "luigi.v@gastrohub.io" },
  { id: "emp6", name: "Anna Lindqvist", avatar: "👩", department: "Front of House / Service", branch: "Mitte Bistro", employmentType: "Mini-Job", status: "INACTIVE", email: "anna.l@gastrohub.io" },
  { id: "emp7", name: "Marcus Aurelius", avatar: "👨", department: "Kitchen / Dishwasher", branch: "Kreuzberg Diner", employmentType: "Seasonal", status: "ACTIVE", email: "marcus@gastrohub.io" },
  { id: "emp8", name: "Sven Svensson", avatar: "🧔", department: "Front of House / Barista", branch: "Charlottenburg Grill", employmentType: "Part-Time", status: "INACTIVE", email: "sven@gastrohub.io" }
];

export default function StaffRoles({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);
  
  // Dynamic search & filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [selectedDept, setSelectedDept] = useState<string>("ALL");
  
  // Adding staff dialog modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDept, setNewDept] = useState("Front of House");
  const [newBranch, setNewBranch] = useState("Mitte Bistro");
  const [newType, setNewType] = useState<"Full-Time" | "Part-Time" | "Seasonal" | "Mini-Job">("Full-Time");
  const [newEmail, setNewEmail] = useState("");
  
  // Active statistics derived dynamically from our state
  const totalStaffCount = 120 + (employees.length - INITIAL_EMPLOYEES.length);
  const newThisMonthCount = 6 + (employees.length - INITIAL_EMPLOYEES.length);
  const terminatedCount = 2 + employees.filter(e => e.status === "INACTIVE").length - INITIAL_EMPLOYEES.filter(e => e.status === "INACTIVE").length;

  // Search and filter matches
  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          emp.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBranch = selectedBranch === "ALL" || emp.branch === selectedBranch;
    const matchesStatus = selectedStatus === "ALL" || emp.status === selectedStatus;
    const matchesDept = selectedDept === "ALL" || emp.department.includes(selectedDept);
    
    return matchesSearch && matchesBranch && matchesStatus && matchesDept;
  });

  // Toggle active/inactive status
  const handleToggleStatus = (id: string) => {
    setEmployees(prev => prev.map(emp => {
      if (emp.id === id) {
        const nextStatus = emp.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
        return { ...emp, status: nextStatus };
      }
      return emp;
    }));
  };

  // Create new staff member
  const handleAddEmployeeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const avatars = ["👩", "👨", "🧑‍🍳", "👨‍🍳", "👩‍💼", "🧔", "👧"];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    const newEmp: Employee = {
      id: "emp_" + Date.now(),
      name: newName,
      avatar: randomAvatar,
      department: newDept,
      branch: newBranch,
      employmentType: newType,
      status: "ACTIVE",
      email: newEmail.trim() || `${newName.toLowerCase().replace(/\s+/g, ".")}@gastrohub.io`
    };

    setEmployees([newEmp, ...employees]);
    setIsAddModalOpen(false);
    setNewName("");
    setNewEmail("");
  };

  return (
    <div id="staff-roles-page" className="bg-white text-slate-950 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28 overflow-hidden">
        
        {/* Soft background glow circles */}
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full filter blur-[130px] pointer-events-none" />
        <div className="absolute bottom-5 left-10 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full filter blur-[110px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left: Authoritative Copy & Call to Action */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[64px] mb-6">
              {t("Smarter staffing.", "Phân bổ nhân sự thông minh.", "Intelligente Personalplanung.")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                {t("Flexible staff roles.", "Vai trò nhân viên linh hoạt.", "Flexible Mitarbeiterrollen.")}
              </span>
            </h1>

            <p className="text-base text-slate-600 font-light leading-relaxed mb-8 max-w-xl">
              {t(
                "Organize your multi-location gastronomy workforce with effortless ease. Grant custom permission sets, classify staff by branches or specific departments, and monitor workforce movements in one consolidated dashboard.",
                "Tổ chức đội ngũ nhân viên ẩm thực đa chi nhánh một cách vô cùng dễ dàng. Cấp các quyền tùy chỉnh, phân loại nhân viên theo chi nhánh hoặc bộ phận cụ thể và giám sát mọi biến động nhân sự trong một bảng điều khiển hợp nhất.",
                "Organisieren Sie Ihr Gastronomie-Personal an mehreren Standorten mit Leichtigkeit. Erteilen Sie benutzerdefinierte Berechtigungen, klassifizieren Sie Mitarbeiter nach Filialen oder Abteilungen."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("staff-console");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-sm font-medium px-8 py-4 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                {t("Open Staff Directory", "Mở danh bạ nhân sự", "Mitarbeiterverzeichnis öffnen")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick checkmarks */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-sm font-light text-slate-500">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Multi-Location Permission Sets</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> Instant Role Classification</span>
            </div>
          </div>

          {/* Hero Right: Staff Roles Board Preview */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            <img
              src="https://i.postimg.cc/7LYjB09c/stafffff.png"
              alt="Staff Roles Board Preview"
              referrerPolicy="no-referrer"
              className="w-full h-auto scale-135 transform origin-center lg:origin-right transition-all duration-300 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
            />
          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-24 border-y border-slate-100 bg-slate-50/50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Built for seamless multi-location staff control.", "Xây dựng cho khả năng kiểm soát nhân sự đa chi nhánh mượt mà.", "Entwickelt für nahtlose standortübergreifende Personalsteuerung.")}
            </h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              {t(
                "Managing a multi-location gastronomy roster doesn't have to be confusing. Define explicit permission tiers, group members, and access statistics.",
                "Quản lý danh sách nhân viên ẩm thực đa chi nhánh không còn là nỗi lo. Xác định rõ ràng các cấp độ quyền hạn, nhóm thành viên và thống kê quyền truy cập.",
                "Die Verwaltung eines standortübergreifenden Gastronomie-Dienstplans muss nicht kompliziert sein. Definieren Sie klare Berechtigungsstufen und Gruppen."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1: Workforce Fluctuation Tracking */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">Workforce Fluctuation Tracking</h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                Analyze hiring metrics, monitor seasonal staff terminations, and visualize personnel fluctuation ratios in order to avoid critical FOH or kitchen understaffing.
              </p>
            </div>

            {/* Feature 2: Branch & Department Filtering */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-emerald-100/60">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">Branch & Department Filtering</h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                Filter and sort your master staff directory cleanly. Group FOH service teams, kitchen crews, or corporate HQ personnel instantly to edit rosters or contact lists.
              </p>
            </div>

            {/* Feature 3: Roles & Permissions */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-purple-200">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-amber-100/60">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">Roles & Permissions</h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                Assign secure digital ID tags. Grant high-tier admin controls to shift planners and managers, while giving service staff standard self-service portal permissions.
              </p>
            </div>

          </div>

        </div>
      </motion.section>

      {/* 3. INTERACTIVE DASHBOARD SNEAK PEEK */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} id="staff-console" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="text-center mb-12 flex flex-col items-center justify-center gap-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Explore the GastroWin Staff Directory", "Khám phá danh bạ nhân viên GastroWin", "Erkunden Sie das GastroWin-Mitarbeiterverzeichnis")}
            </h2>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              {t(
                "Manage every team member across all branches in real-time. Instantly update staff roles, grant permissions, and monitor active personnel with zero paperwork.",
                "Quản lý mọi thành viên nhóm trên tất cả các chi nhánh theo thời gian thực. Cập nhật vai trò nhân viên, cấp quyền và giám sát nhân sự đang hoạt động ngay lập tức mà không cần giấy tờ thủ công.",
                "Verwalten Sie jedes Teammitglied in allen Filialen in Echtzeit. Aktualisieren Sie Mitarbeiterrollen, erteilen Sie Berechtigungen und überwachen Sie aktives Personal sofort ohne Papierkram."
              )}
            </p>
          </div>

          {/* Button removed as requested */}
        </div>



      </motion.section>





      {/* 6. ADD EMPLOYEE MODAL */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 max-w-md w-full text-left space-y-4"
            >
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-semibold text-sm text-slate-950">Add Staff Member</h3>
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddEmployeeSubmit} className="space-y-4 text-sm font-medium text-slate-700">
                <div className="space-y-1.5">
                  <label className="text-slate-500">Employee Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-[#7553FF]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-500">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. j.doe@gastrohub.io"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-[#7553FF]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-500">Department</label>
                    <select
                      value={newDept}
                      onChange={(e) => setNewDept(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-[#7553FF] text-sm font-medium"
                    >
                      <option value="Front of House">Front of House</option>
                      <option value="Front of House / Service">Service Crew</option>
                      <option value="Kitchen / Kitchen Chef">Kitchen Chef</option>
                      <option value="Kitchen / Sous Chef">Sous Chef</option>
                      <option value="Kitchen / Pastry">Pastry Crew</option>
                      <option value="Administration / HQ">HQ Admin</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-500">Contract Type</label>
                    <select
                      value={newType}
                      onChange={(e) => setNewType(e.target.value as any)}
                      className="w-full bg-white border border-slate-200 rounded-full px-3 py-2 outline-none focus:border-[#7553FF] text-sm font-medium"
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Seasonal">Seasonal</option>
                      <option value="Mini-Job">Mini-Job</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-500">Branch Allocation</label>
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

                <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2 rounded-full cursor-pointer transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white px-4 py-2 rounded-full cursor-pointer transition-colors"
                  >
                    Save Member
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
