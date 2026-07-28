/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { 
  Utensils, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  Globe, 
  Link as LinkIcon, 
  Tag, 
  Plus, 
  Check, 
  X, 
  Search, 
  ChevronRight, 
  Smartphone, 
  Laptop, 
  CheckCircle, 
  AlertCircle,
  XCircle,
  ArrowRight,
  Sparkles,
  ClipboardList
} from "lucide-react";

interface Booking {
  id: string;
  customerName: string;
  customerEmail: string;
  pax: number;
  status: "CONFIRMED" | "PENDING" | "CANCELLED";
  dateTime: string;
  notes: string;
  category: "daily" | "request"; // To fit the tab requirements
}

const INITIAL_BOOKINGS: Booking[] = [
  {
    id: "bk-1",
    customerName: "Eleanor Vance",
    customerEmail: "eleanor.v@designco.com",
    pax: 4,
    status: "CONFIRMED",
    dateTime: "Today, 19:30",
    notes: "Anniversary celebration (needs candle on dessert)",
    category: "daily"
  },
  {
    id: "bk-2",
    customerName: "Maximilian Schwarz",
    customerEmail: "m.schwarz@techhub.de",
    pax: 2,
    status: "PENDING",
    dateTime: "Today, 20:00",
    notes: "High chair for baby requested",
    category: "request"
  },
  {
    id: "bk-3",
    customerName: "Clarissa Harlowe",
    customerEmail: "clarissa.h@literary.org",
    pax: 6,
    status: "CONFIRMED",
    dateTime: "Tomorrow, 18:00",
    notes: "Strict gluten-free allergy at the table",
    category: "daily"
  },
  {
    id: "bk-4",
    customerName: "Dr. Aris Thorne",
    customerEmail: " Thorne@medical-center.net",
    pax: 3,
    status: "CANCELLED",
    dateTime: "Today, 17:30",
    notes: "Requested window table if possible",
    category: "daily"
  },
  {
    id: "bk-5",
    customerName: "Siddharth Mehta",
    customerEmail: "sid.mehta@mumbai-invest.com",
    pax: 5,
    status: "PENDING",
    dateTime: "Friday, 21:00",
    notes: "VIP guest from HQ - prepare quiet booth",
    category: "request"
  },
  {
    id: "bk-6",
    customerName: "Sonia Gauthier",
    customerEmail: "sonia.g@gauthier-law.fr",
    pax: 2,
    status: "CONFIRMED",
    dateTime: "Saturday, 19:00",
    notes: "Celebrating business closure",
    category: "daily"
  },
  {
    id: "bk-7",
    customerName: "Kenji Takahashi",
    customerEmail: "kenji@tokyo-bites.jp",
    pax: 8,
    status: "PENDING",
    dateTime: "Tomorrow, 20:30",
    notes: "Wants tasting menu with wine pairing",
    category: "request"
  },
  {
    id: "bk-8",
    customerName: "Olivia Martinez",
    customerEmail: "olivia.martinez@sabor.es",
    pax: 4,
    status: "PENDING",
    dateTime: "Today, 19:00",
    notes: "Wheelchair accessibility required",
    category: "request"
  },
  {
    id: "bk-9",
    customerName: "Thomas Wright",
    customerEmail: "t.wright@london-news.co.uk",
    pax: 2,
    status: "PENDING",
    dateTime: "Sunday, 13:00",
    notes: "Outside patio seating highly preferred",
    category: "request"
  }
];

export default function BookingManager({ onBackToHome }: { onBackToHome: () => void }) {
  const { lang } = useLanguage();
  const t = (en: string, vi: string, de: string) => {
    return lang === "vi" ? vi : lang === "de" ? de : en;
  };

  const [bookings, setBookings] = useState<Booking[]>(INITIAL_BOOKINGS);
  const [activeTab, setActiveTab] = useState<"daily" | "request">("daily");
  
  // Create state for new booking form
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPax, setNewPax] = useState(2);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newNotes, setNewNotes] = useState("");
  const [newCategory, setNewCategory] = useState<"daily" | "request">("daily");

  // Filter and search
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "CONFIRMED" | "PENDING" | "CANCELLED">("ALL");

  // Dynamic calculations for notification counts
  const dailyCount = bookings.filter(b => b.category === "daily").length;
  const requestCount = bookings.filter(b => b.category === "request").length;

  const filteredBookings = bookings.filter(b => {
    const matchesTab = b.category === activeTab;
    const matchesSearch = b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.notes.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.customerEmail.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "ALL" || b.status === statusFilter;
    return matchesTab && matchesSearch && matchesStatus;
  });

  // Handle status transitions
  const updateStatus = (id: string, nextStatus: "CONFIRMED" | "PENDING" | "CANCELLED") => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: nextStatus } : b));
  };

  // Submit reservation form
  const handleAddBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomer.trim()) return;

    const formattedDateTime = `${newDate ? newDate : "Today"}, ${newTime ? newTime : "19:00"}`;

    const newBk: Booking = {
      id: "bk_" + Date.now(),
      customerName: newCustomer.trim(),
      customerEmail: newEmail.trim() || `${newCustomer.toLowerCase().replace(/\s+/g, "")}@example.com`,
      pax: Number(newPax),
      status: "PENDING",
      dateTime: formattedDateTime,
      notes: newNotes.trim() || "No special requests",
      category: newCategory
    };

    setBookings([newBk, ...bookings]);
    setIsAddModalOpen(false);
    
    // Reset form states
    setNewCustomer("");
    setNewEmail("");
    setNewPax(2);
    setNewDate("");
    setNewTime("");
    setNewNotes("");
  };

  return (
    <div id="booking-manager-page" className="bg-white text-slate-900 font-sans min-h-screen pt-24 pb-16 selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-8 md:pt-16 pb-20 md:pb-28 overflow-visible">
        
        {/* Soft elegant purple & lavender background glow */}
        <div className="absolute -top-12 right-0 w-[550px] h-[550px] bg-[#7553FF]/[0.04] rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-5 left-10 w-[450px] h-[450px] bg-indigo-500/[0.02] rounded-full filter blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[64px] mb-6">
              {t("Flawless table bookings &", "Đặt bàn hoàn hảo &", "Nahtlose Tischbuchung &")} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] to-indigo-600">
                {t("Zero Overbooking", "Không trùng bàn", "Keine Überbuchung")}
              </span>.
            </h1>

            <p className="text-sm sm:text-base text-slate-900 font-light leading-relaxed mb-8 max-w-lg">
              {t(
                "Empower your restaurant with the ultimate reservation solution. Manage incoming guest requests, track customized dining notes, and offer an ultra-smooth, shareable direct booking widget that syncs live with your staff’s control screen.",
                "Trao quyền cho nhà hàng của bạn với giải pháp đặt bàn tối ưu. Quản lý yêu cầu của thực khách, theo dõi ghi chú ẩm thực và cung cấp tiện ích đặt bàn trực tiếp mượt mà, đồng bộ hóa trực tiếp với màn hình điều khiển của nhân viên.",
                "Stärken Sie Ihr Restaurant mit der ultimativen Reservierungslösung. Verwalten Sie eingehende Gästewünsche, verfolgen Sie individuelle Essensnotizen und bieten Sie ein reibungsloses Buchungswidget, das live mit dem Kontrollbildschirm synchronisiert."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById("booking-cta");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                {t("Get Started Today", "Bắt đầu ngay hôm nay", "Heute starten")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-base font-light text-slate-900">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#7553FF]" /> {t("0% Booking Commission", "0% Phí hoa hồng đặt bàn", "0% Buchungsprovision")}</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#7553FF]" /> Real-time Sync & Alerts</span>
            </div>
          </div>

          {/* Hero Right Content: 3D Isometric Syncing Graphic replaced by requested image */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-10">
            
            {/* Elegant blueprint style alignment dots */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] opacity-80 pointer-events-none " />

            <div className="relative w-full max-w-lg">
              <img 
                id="hero-bookatable-image"
                src="https://i.postimg.cc/J0PDqkkR/bookatable.png" 
                alt="GastroWin Book a Table Interface" 
                className="w-full h-auto object-cover scale-145 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 md:py-24 border-y border-slate-100 bg-slate-50/50 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4">
              {t("Pristine structure for absolute kitchen synchronization", "Cấu trúc hoàn hảo để đồng bộ hóa nhà bếp tuyệt đối", "Perfekte Struktur für absolute Küchensynchronisation")}
            </h2>
            <p className="text-base text-slate-900 font-light leading-relaxed">
              {t(
                "Ditch the archaic paper sheets. Modernize how your front-of-house host and back-of-house cooks coordinate shifts, seating configurations, and guest allergies.",
                "Loại bỏ các tờ giấy ghi chép cổ điển. Hiện đại hóa cách điều phối viên sảnh và đầu bếp của bạn phối hợp ca làm việc, cấu hình chỗ ngồi và các lưu ý dị ứng của thực khách.",
                "Vergessen Sie veraltete Zettelwirtschaft. Modernisieren Sie die Koordination zwischen Service und Küche bezüglich Schichten, Sitzordnungen und Lebensmittelallergien."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature Card 1: Colored status tags (Workflow/Status Tracking) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("Workflow & Status Tracking", "Theo dõi trạng thái & quy trình", "Ablauf- & Statusverfolgung")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Color-coded status tags flag guest tables. Instantly spot who is CONFIRMED, pending review, or has cancelled to maximize floor utilization and minimize empty seats.",
                  "Các nhãn trạng thái được mã hóa màu giúp đánh dấu bàn của khách. Ngay lập tức nhận biết ai ĐÃ XÁC NHẬN, đang chờ duyệt hoặc đã hủy để tối đa hóa hiệu suất sử dụng mặt sàn.",
                  "Farbcodierte Status-Tags kennzeichnen Gästetische. Erkennen Sie sofort, wer BESTÄTIGT ist, auf Überprüfung wartet oder storniert hat, um die Auslastung zu optimieren."
                )}
              </p>
              
            </div>

            {/* Feature Card 2: A notepad with a star (Special Requests & Notes) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Star className="w-5 h-5 fill-purple-400 text-purple-600" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("Special Requests & VIP Notes", "Yêu cầu đặc biệt & Ghi chú VIP", "Sonderwünsche & VIP-Notizen")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Log critical food allergy details, high-chair requests, wedding anniversaries, or custom table arrangements. Everything shows up directly in the active service logs.",
                  "Ghi lại các chi tiết dị ứng thực phẩm quan trọng, yêu cầu ghế cao, kỷ niệm ngày cưới hoặc bố trí bàn tùy chỉnh. Mọi thứ hiển thị trực tiếp trong nhật ký phục vụ.",
                  "Erfassen Sie wichtige Details zu Lebensmittelallergien, Hochstühlen, Hochzeitstagen oder individuellen Tischanordnungen direkt im aktiven Service-Protokoll."
                )}
              </p>
              
            </div>

            {/* Feature Card 3: A link icon connecting to a globe (Shareable Booking Widget/Link) */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2">
                {t("Shareable Widget & Link", "Widget & Liên kết có thể chia sẻ", "Teilbares Widget & Link")}
              </h3>
              <p className="text-base text-slate-900 font-light leading-relaxed">
                {t(
                  "Connect your unique reservation widget directly to your website, Instagram profile, or Google Business listing. Save thousands in third-party commission fees",
                  "Kết nối widget đặt bàn độc nhất của bạn trực tiếp vào trang web, trang cá nhân Instagram hoặc hồ sơ Google Business. Tiết kiệm hàng ngàn đô la phí hoa hồng.",
                  "Binden Sie Ihr individuelles Reservierungs-Widget direkt in Ihre Website, Ihr Instagram-Profil oder Ihren Google-Eintrag ein. Sparen Sie Tausende von Dollar an Provisionsgebühren."
                )}
              </p>
              
            </div>

          </div>

        </div>
      </motion.section>



      {/* 6. RESERVATION CREATION DIALOG (MODAL) */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 max-w-md w-full text-left space-y-4 text-slate-900"
            >
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <h3 className="font-extrabold text-sm text-slate-950 flex items-center gap-1.5 text-slate-900">
                  <Utensils className="w-4 h-4 text-[#7553FF]" /> Create Direct Reservation
                </h3>
                <button 
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddBooking} className="space-y-4 text-xs font-semibold text-slate-700">
                <div className="space-y-1.5">
                  <label className="text-slate-500">Customer Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Sterling"
                    value={newCustomer}
                    onChange={(e) => setNewCustomer(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-[#7553FF] text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-500">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. liam@sterling-corp.co.uk"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-[#7553FF] text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-500">Guests (PAX)</label>
                    <input
                      type="number"
                      required
                      min={1}
                      max={20}
                      value={newPax}
                      onChange={(e) => setNewPax(Number(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-[#7553FF] text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-500">Allocation Queue</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-[#7553FF] text-xs"
                    >
                      <option value="daily">Daily Ledger</option>
                      <option value="request">Incoming Queue</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-500">Date</label>
                    <input
                      type="text"
                      placeholder="e.g. Today, Tomorrow, Friday"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-[#7553FF] text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-500">Time</label>
                    <input
                      type="text"
                      placeholder="e.g. 19:30, 20:00"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-[#7553FF] text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-500">Special Requests & VIP Notes</label>
                  <textarea
                    placeholder="e.g. Anniversary celebration, strict peanut allergy..."
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    rows={3}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none focus:border-[#7553FF] text-xs resize-none"
                  />
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg cursor-pointer transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white px-4 py-2 rounded-lg cursor-pointer transition-colors"
                  >
                    Confirm Proposal
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
