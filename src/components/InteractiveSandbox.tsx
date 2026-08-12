/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SAMPLE_MENUS, LANGUAGES } from "../data";
import { SampleMenu, Language, MenuItem } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { 
  Upload, 
  Languages, 
  Download, 
  FileText, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Eye, 
  CheckCircle, 
  Loader2, 
  RefreshCw,
  Printer,
  ChevronRight,
  Info,
  ArrowLeft,
  Sparkle,
  Zap,
  Globe,
  Sliders,
  Star,
  MapPin,
  HelpCircle,
  FileDown
} from "lucide-react";

interface InteractiveSandboxProps {
  onBackToHome?: () => void;
}

export default function InteractiveSandbox({ onBackToHome }: InteractiveSandboxProps) {
  const { lang } = useLanguage();

  const sandboxTranslations: Record<string, Record<string, string>> = {
    vi: {
      "hero_title": "Dịch thực đơn. Giữ nguyên bố cục gốc.",
      "hero_desc": "Ngừng việc phải thiết kế lại thực đơn từ đầu. GastroWin đọc tọa độ tệp PDF phức tạp của bạn, dịch văn bản sang hơn 40 ngôn ngữ và tái cấu trúc kết quả với kiểu chữ, cột và màu sắc thương hiệu gốc được khóa hoàn hảo tại chỗ.",
      "launch_btn": "Dịch thực đơn miễn phí",
      "badge_cmyk": "Sẵn sàng cho in ấn CMYK vector",
      "badge_llm": "Hỗ trợ 40+ ngôn ngữ",
      "features_badge": "Tính năng & Lợi ích",
      "features_title": "Được thiết kế dành riêng cho kiểu chữ nhà hàng",
      "features_desc": "Chúng tôi không sử dụng các bộ chuyển đổi văn bản thuần túy tẻ nhạt. GastroWin phân tích cấu trúc hình ảnh thực tế, duy trì nhận thức không gian hoàn hảo.",
      "accuracy_title": "Độ chính xác ẩm thực",
      "accuracy_desc": "Dịch thực đơn sang hơn 40 ngôn ngữ ngay lập tức. Các mô hình LLM của chúng tôi được đào tạo đặc biệt trên cơ sở dữ liệu ẩm thực sành ăn, quy tắc rượu vang vùng miền và hậu tố thảo mộc hiếm gặp để tránh các lỗi nghĩa đen đáng tiếc từ từ điển thông thường.",
      "speed_title": "Dịch thuật tốc độ cao",
      "speed_desc": "Dịch toàn bộ bảng thực đơn nhiều trang trong chưa đầy 3 giây. Việc truyền dữ liệu luồng mã thông báo thời gian thực giúp xuất bản dịch không có độ trễ hàng đợi, giúp bạn có thực đơn sẵn sàng in nhanh hơn bất kỳ đại lý nào.",
      "pixel_title": "Bố cục hoàn hảo từng Pixel",
      "pixel_desc": "GastroWin tự động giữ lại các yếu tố nền gốc, các cột tùy chỉnh, viền và kiểu chữ. Không bị lệch các khối văn bản hoặc tràn chữ—bố cục được đảm bảo hoàn toàn.",
      "blueprint_badge": "Sơ đồ vận hành",
      "blueprint_title": "Dịch thuật trong 3 bước đơn giản",
      "blueprint_desc": "Không cần bằng cấp thiết kế. Giao diện của chúng tôi được thiết kế để bạn tập trung vào lòng hiếu khách, chứ không phải các công cụ vector phức tạp.",
      "step1_badge": "Bước đầu tiên",
      "step1_title": "Tải lên thực đơn PDF",
      "step1_desc": "Thả thực đơn PDF hoặc JPG hiện tại của bạn vào hộp không gian làm việc an toàn của chúng tôi. Máy quét của chúng tôi đọc ma trận tọa độ ngay lập tức.",
      "step2_badge": "Bước thứ hai",
      "step2_title": "Chọn ngôn ngữ mục tiêu",
      "step2_desc": "Chọn từ hơn 40 ngôn ngữ đích. Nhấn cài đặt vùng để chỉ định các điều chỉnh văn hóa và định nghĩa dị ứng.",
      "step3_badge": "Bước thứ ba",
      "step3_title": "Biên dịch & Tải xuống",
      "step3_desc": "Kiểm tra bản xem trước đã dịch song song với thực đơn gốc của bạn và xuất tệp CMYK sẵn sàng in ngay lập tức.",
      "workspace_badge": "Không gian làm việc tương tác",
      "workspace_title": "Studio dịch thuật trực tiếp",
      "workspace_desc": "Trải nghiệm công nghệ giữ nguyên bố cục cao cấp của GastroWin ngay bây giờ. Chọn một cấu hình nhà hàng thực tế hoặc mô phỏng tải lên thực đơn tùy chỉnh của riêng bạn.",
      "step_upload": "Bước 1: Tải lên thực đơn",
      "step_upload_sub": "Chọn cấu hình hoặc tải lên",
      "step_choose_lang": "Bước 2: Chọn ngôn ngữ",
      "step_choose_lang_sub": "Chọn ngôn ngữ đích",
      "step_scan_preview": "Bước 3: Quét & Xem trước",
      "step_scan_preview_sub": "Kiểm tra bản dịch",
      "stage1_badge": "Giai đoạn 1: Lựa chọn đầu vào thực đơn",
      "provide_doc": "Cung cấp tài liệu thực đơn của nhà hàng của bạn",
      "provide_doc_desc": "Chọn một trong các thực đơn nhà hàng mẫu thực tế được thiết kế đẹp mắt của chúng tôi để dịch, hoặc mô phỏng tải lên tài liệu thực đơn tùy chỉnh của riêng bạn.",
      "presets_title": "Cấu hình ẩm thực tương tác",
      "simulate_upload": "Mô phỏng tải lên PDF tùy chỉnh",
      "uploaded_success": "Tệp đã tải lên thành công",
      "click_select_local": "Nhấp để chọn một tài liệu cục bộ",
      "continue_step2": "Tiếp tục sang bước 2",
      "orig_matrix": "Ma trận tài liệu gốc",
      "active_source": "Nguồn hoạt động",
      "size_labels": "Kích thước PDF: 1.4 MB",
      "coords_labels": "Đã đọc tọa độ: 12 vùng",
      "stage2_badge": "Giai đoạn 2: Địa phương hóa mục tiêu",
      "choose_lang": "Chọn ngôn ngữ dịch thuật",
      "choose_lang_desc": "Chọn ngôn ngữ đích chính của bạn. GastroWin áp dụng các từ vựng chuyên ngành nhà hàng ẩm thực, đảm bảo dịch chính xác các từ ghép phức tạp.",
      "active_target": "Mục tiêu hoạt động",
      "back_step1": "Quay lại bước 1",
      "run_scan": "Khởi chạy quét dịch thuật",
      "gourmet_title": "Thích ứng từ vựng ẩm thực",
      "scscanner_title": "Đầu quét lớp kép hoạt động",
      "scscanner_desc": "GastroWin bây giờ sẽ căn chỉnh các tọa độ ranh giới của các dòng chữ trên thực đơn mẫu của bạn và hoán đổi các phân đoạn nội dung tại chỗ mà không làm lệch vị trí cột.",
      "engine_details": "🔒 Công cụ dịch: Phân hệ dịch thuật ẩm thực đa phương thức chuyên biệt",
      "translating_coords": "Đang dịch tọa độ bố cục...",
      "scanning_grid": "Đang quét lưới gốc • hoán đổi nhãn sang",
      "audit_complete": "Kiểm toán hoàn tất (99.8%)",
      "layout_preserved_export": "Xuất tệp giữ nguyên bố cục",
      "perfect_translation": "Thực đơn của bạn đã được dịch hoàn hảo. Đánh giá căn chỉnh trên bảng bên phải và biên dịch bản in CMYK độ phân giải cao của bạn.",
      "source_menu": "Thực đơn nguồn:",
      "target_lang": "Ngôn ngữ đích:",
      "spatial_shift": "Độ lệch không gian:",
      "perfect_alignment": "0.0px (Căn chỉnh hoàn hảo)",
      "pdf_prepared_notice": "Tệp PDF vector của bạn đã sẵn sàng cho máy in chuyên nghiệp và mang theo các thẻ QR tích hợp để khách hàng có thể xem kỹ thuật số!",
      "prep_pdf": "Chuẩn bị PDF Vector để in",
      "edit_settings": "Chỉnh sửa cài đặt",
      "start_over": "Bắt đầu lại",
      "bounding_box_layer": "Lớp hộp giới hạn",
      "vector_protected": "Lớp Vector được bảo vệ",
      "saas_guard_integration": "Tích hợp lá chắn bố cục SaaS",
      "protect_soul": "Bảo vệ linh hồn thiết kế của thương hiệu bạn",
      "scale_loyalty_desc": "Dịch và triển khai thực đơn hoàn hảo về bố cục trên 12 quốc gia. Tham gia cùng hơn 4.500 quản lý đang nâng cao lòng trung thành của khách hàng mỗi ngày.",
      "start_free_scan": "Bắt đầu quét thực đơn miễn phí",
      "back_to_hub": "Quay lại Trung tâm điều khiển",
      "modal_preparing": "Đang chuẩn bị PDF Vector",
      "modal_generating": "Đang tạo tọa độ CMYK để vẽ biểu đồ in...",
      "modal_success_title": "Đã bắt đầu tải xuống thành công!",
      "modal_success_desc_1": "Thực đơn đã dịch sang tiếng ",
      "modal_success_desc_2": " của bạn đã được tạo và biên dịch thành công dưới dạng gastrowin_menu_export.pdf.",
      "modal_done": "Hoàn tất",
      "modal_another": "Tạo bản sao khác",
      "modal_prepared_title": "Tệp PDF thực đơn đã sẵn sàng!",
      "modal_prepared_desc_1": "Thực đơn đã dịch sang tiếng ",
      "modal_prepared_desc_2": " của bạn được tạo kiểu, vectơ hóa và biên dịch thành tài liệu CMYK độ phân giải cao.",
      "print_ready_cmyk": "Bản PDF Vector sẵn sàng in",
      "print_ready_cmyk_desc": "Hoàn hảo cho máy in cao cấp (CMYK)",
      "interactive_qr": "Mã QR tương tác cho khách hàng",
      "interactive_qr_desc": "Khách hàng quét tại bàn để xem trên điện thoại",
      "modal_download_btn": "Tải xuống PDF sẵn sàng in",
      "modal_close_btn": "Đóng cửa sổ",
      "pdf_ready": "Sẵn sàng",
      "qr_generated": "Đã tạo",
      "active_ai": "AI đang hoạt động",
      "parser_core": "Lõi phân tích PDF",
      "coordinate_locked": "Đã khóa công cụ tọa độ",
      "see_how_works": "Xem cách hoạt động",
      "custom_placeholder": "Autumn_A_La_Carte_Menu.pdf"
    },
    de: {
      "hero_title": "Menüs übersetzen. Original-Layout beibehalten.",
      "hero_desc": "Hören Sie auf, Menüdesigns von Grund auf neu zu entwerfen. GastroWin liest Ihre komplexen PDF-Koordinaten, übersetzt den Text in über 40 Sprachen und rekonstruiert die Ausgabe, wobei die Originaltypografie, die Spalten und die Markenfarben perfekt beibehalten werden.",
      "launch_btn": "Kostenlos Menü übersetzen",
      "badge_cmyk": "Vektorisierte CMYK-Druckvorlage",
      "badge_llm": "Unterstützt 40+ Sprachen",
      "features_badge": "Funktionen & Vorteile",
      "features_title": "Exklusiv für die Typografie von Restaurants entwickelt",
      "features_desc": "Wir verwenden keine langweiligen Klartext-Konverter. GastroWin analysiert die reale visuelle Struktur und behält ein perfektes räumliches Bewusstsein bei.",
      "accuracy_title": "Kulinarische Genauigkeit",
      "accuracy_desc": "Übersetzen Sie Speisekarten sofort in über 40 Sprachen. Unsere LLM-Modelle sind speziell auf Gourmet-Datenbanken, regionale Weinregeln und seltene Kräutersuffixe trainiert, um peinliche Übersetzungsfehler zu vermeiden.",
      "speed_title": "High-Speed Übersetzung",
      "speed_desc": "Übersetzen Sie ganze mehrseitige Speisekarten in weniger als 3 Sekunden. Das Echtzeit-Streaming von Token gibt Übersetzungen ohne Warteschlangenverzögerung aus.",
      "pixel_title": "Pixelgenaues Layout",
      "pixel_desc": "GastroWin bewahrt automatisch Originalhintergründe, benutzerdefinierte Spalten, Rahmen und Typografie. Keine verschobenen Blöcke oder Textüberläufe.",
      "blueprint_badge": "Operativer Ablauf",
      "blueprint_title": "Übersetzung in 3 einfachen Schritten",
      "blueprint_desc": "Keine Design-Kenntnisse erforderlich. Unsere Benutzeroberfläche sorgt dafür, dass Sie sich auf die Gastfreundschaft konzentrieren können, nicht auf komplizierte Vektortools.",
      "step1_badge": "Erster Schritt",
      "step1_title": "PDF-Menü hochladen",
      "step1_desc": "Ziehen Sie Ihr aktuelles PDF- oder JPG-Menü in unseren sicheren Arbeitsbereich. Unser Scanner liest Koordinatenmatrizen sofort.",
      "step2_badge": "Zweiter Schritt",
      "step2_title": "Zielsprache auswählen",
      "step2_desc": "Wählen Sie aus über 40 Zielsprachen. Tippen Sie auf die Regionaleinstellungen, um kulturelle Anpassungen und Allergiedefinitionen anzugeben.",
      "step3_badge": "Dritter Schritt",
      "step3_title": "Kompilieren & Herunterladen",
      "step3_desc": "Prüfen Sie die übersetzte Vorschau direkt im Vergleich zu Ihrer Originalkarte und exportieren Sie sofort CMYK-druckfertige Dateien.",
      "workspace_badge": "Interaktiver Arbeitsbereich",
      "workspace_title": "Live-Übersetzungsstudio",
      "workspace_desc": "Testen Sie jetzt die erstklassige Technologie von GastroWin zur Erhaltung des Layouts. Wählen Sie eine reale Restaurant-Voreinstellung aus oder simulieren Sie das Hochladen Ihrer eigenen Speisekarte.",
      "step_upload": "Schritt 1: Menü hochladen",
      "step_upload_sub": "Preset wählen o. hochladen",
      "step_choose_lang": "Schritt 2: Sprache wählen",
      "step_choose_lang_sub": "Zielsprache auswählen",
      "step_scan_preview": "Schritt 3: Scan & Vorschau",
      "step_scan_preview_sub": "Übersetzung prüfen",
      "stage1_badge": "Phase 1: Menüauswahl",
      "provide_doc": "Geben Sie Ihr Speisekartendokument an",
      "provide_doc_desc": "Wählen Sie eines unserer wunderschön gestalteten realen Restaurantmenü-Voreinstellungen aus oder simulieren Sie den Upload Ihres eigenen Dokuments.",
      "presets_title": "Interaktive kulinarische Vorlagen",
      "simulate_upload": "Simuliere eigenen PDF-Upload",
      "uploaded_success": "Datei erfolgreich hochgeladen",
      "click_select_local": "Klicken, um lokales Dokument auszuwählen",
      "continue_step2": "Weiter zu Schritt 2",
      "orig_matrix": "Originaldokument-Matrix",
      "active_source": "Aktive Quelle",
      "size_labels": "PDF-Größe: 1.4 MB",
      "coords_labels": "Koordinaten gelesen: 12 Bereiche",
      "stage2_badge": "Phase 2: Lokalisierungs-Target",
      "choose_lang": "Übersetzungssprache wählen",
      "choose_lang_desc": "Wählen Sie Ihre primäre Zielsprache. GastroWin wendet spezialisierte Gastronomie-Vokabulare an, um korrekte Fachbegriffe zu gewährleisten.",
      "active_target": "Aktives Ziel",
      "back_step1": "Zurück zu Schritt 1",
      "run_scan": "Übersetzungsscan starten",
      "gourmet_title": "Gourmet-Vokabular Anpassung",
      "scscanner_title": "Zwei-Ebenen-Scanner aktiv",
      "scscanner_desc": "GastroWin richtet nun die Begrenzungskoordinaten der Textzeilen auf Ihrem Menü aus und tauscht Textsegmente direkt aus, ohne Spalten zu verschieben.",
      "engine_details": "🔒 Übersetzungs-Engine: Multimodal Hospitality Spec",
      "translating_coords": "Layout-Koordinaten werden übersetzt...",
      "scanning_grid": "Originalgitter scannen • Bezeichnungen übersetzen in",
      "audit_complete": "Prüfung abgeschlossen (99.8%)",
      "layout_preserved_export": "Layout-erhaltener Export",
      "perfect_translation": "Ihr Menü wurde perfekt übersetzt. Überprüfen Sie die Ausrichtung auf der rechten Seite und erstellen Sie Ihre hochauflösende CMYK-Druckvorlage.",
      "source_menu": "Quellmenü:",
      "target_lang": "Zielsprache:",
      "spatial_shift": "Räumliche Verschiebung:",
      "perfect_alignment": "0.0px (Perfekte Ausrichtung)",
      "pdf_prepared_notice": "Ihr Vektor-PDF ist für professionelle Drucker vorbereitet und enthält QR-Tags, damit Kunden es digital ansehen können!",
      "prep_pdf": "Vektor-PDF für den Druck vorbereiten",
      "edit_settings": "Einstellungen bearbeiten",
      "start_over": "Neu starten",
      "bounding_box_layer": "Begrenzungsrahmen-Ebene",
      "vector_protected": "Vektorebene geschützt",
      "saas_guard_integration": "SaaS Layout-Schutz Integration",
      "protect_soul": "Schützen Sie die typografische Seele Ihrer Marke",
      "scale_loyalty_desc": "Übersetzen und implementieren Sie layout-perfekte Menüs in 12 Ländern. Schließen Sie sich über 4.500 Managern an, die täglich die Kundentreue skalieren.",
      "start_free_scan": "Kostenlosen Menüscan starten",
      "back_to_hub": "Zurück zum Hub",
      "modal_preparing": "Vektor-PDF vorbereiten",
      "modal_generating": "Erzeuge CMYK-Koordinaten für den Druck...",
      "modal_success_title": "Download erfolgreich gestartet!",
      "modal_success_desc_1": "Ihre ins ",
      "modal_success_desc_2": " übersetzte Speisekarte wurde erfolgreich als gastrohub_menu_export.pdf kompiliert.",
      "modal_done": "Fertig",
      "modal_another": "Eine weitere Kopie erstellen",
      "modal_prepared_title": "Menü-PDF vorbereitet!",
      "modal_prepared_desc_1": "Ihre übersetzte ",
      "modal_prepared_desc_2": " Speisekarte wurde formatiert, vektorisiert und in ein hochauflösendes CMYK-Dokument kompiliert.",
      "print_ready_cmyk": "Druckfertiges Vektor-PDF",
      "print_ready_cmyk_desc": "Perfekt für Premium-Drucker (CMYK)",
      "interactive_qr": "Interaktiver QR-Code für Gäste",
      "interactive_qr_desc": "Gäste scannen am Tisch, um auf dem Handy zu lesen",
      "modal_download_btn": "Druckfertiges PDF herunterladen",
      "modal_close_btn": "Fenster schließen",
      "pdf_ready": "Bereit",
      "qr_generated": "Generiert",
      "active_ai": "KI Aktiv",
      "parser_core": "PDF-Parser Kern",
      "coordinate_locked": "Koordinaten-Engine verriegelt",
      "see_how_works": "Wie es funktioniert",
      "custom_placeholder": "Autumn_A_La_Carte_Menu.pdf"
    }
  };

  const tText = (key: string, fallback: string): string => {
    if (lang === "vi" || lang === "de") {
      return sandboxTranslations[lang]?.[key] || fallback;
    }
    return fallback;
  };

  // Main Navigation / State
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedMenu, setSelectedMenu] = useState<SampleMenu>(SAMPLE_MENUS[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(LANGUAGES[0]);
  
  // Simulation states
  const [isTranslating, setIsTranslating] = useState(false);
  const [isDoneTranslating, setIsDoneTranslating] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [customFileUploaded, setCustomFileUploaded] = useState(false);
  const [customFileName, setCustomFileName] = useState("");

  const scrollToSandbox = () => {
    const el = document.getElementById("saas-cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handle step transitions
  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
      startTranslationSimulation();
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
      setIsDoneTranslating(false);
    }
  };

  const startTranslationSimulation = () => {
    setIsTranslating(true);
    setIsDoneTranslating(false);
    setTimeout(() => {
      setIsTranslating(false);
      setIsDoneTranslating(true);
    }, 2800); // 2.8 second simulation
  };

  const selectPrebuiltMenu = (menu: SampleMenu) => {
    setSelectedMenu(menu);
    setCustomFileUploaded(false);
  };

  const triggerCustomUpload = () => {
    setCustomFileName("Autumn_A_La_Carte_Menu.pdf");
    setCustomFileUploaded(true);
    setSelectedMenu(SAMPLE_MENUS[1]); // Bistro or Dolce as fallback
  };

  const handleDownloadAction = () => {
    setDownloadSuccess(false);
    setDownloadModalOpen(true);
  };

  const resetSandbox = () => {
    setCurrentStep(1);
    setIsDoneTranslating(false);
    setIsTranslating(false);
    setDownloadModalOpen(false);
    setDownloadSuccess(false);
    setCustomFileUploaded(false);
  };

  return (
    <div id="menu-translator-landing" className="bg-white text-slate-900 font-sans min-h-screen pt-24 pb-16 relative overflow-hidden selection:bg-[#7553FF]/10 selection:text-[#7553FF]">
      
      {/* Background Soft Gradients (#7553FF) */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#7553FF]/[0.02] rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#7553FF]/[0.03] rounded-full filter blur-[100px] pointer-events-none" />
      
      {/* Dribbble Style Geometric Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7553FF/[0.015]_1px,transparent_1px),linear-gradient(to_bottom,#7553FF/[0.015]_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* 1. HERO SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative px-6 md:px-8 max-w-7xl mx-auto pt-10 md:pt-16 pb-20 md:pb-28">
        


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left: SaaS Copy & Headline */}
          <div className="lg:col-span-6 text-left flex flex-col items-start relative z-10">


            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-slate-950 tracking-tight leading-none lg:leading-[56px] mb-6 font-poppins">
              {lang === "vi" ? (
                <>
                  <span className="block whitespace-nowrap">Dịch thực đơn.</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] to-purple-800">
                    Giữ nguyên bố cục gốc.
                  </span>
                </>
              ) : lang === "de" ? (
                <>
                  <span className="block whitespace-nowrap">Menüs übersetzen.</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] to-purple-800">
                    Original-Layout beibehalten.
                  </span>
                </>
              ) : (
                <>
                  <span className="block whitespace-nowrap">Translate Menus.</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7553FF] to-purple-800">
                    Keep Original Layout.
                  </span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-slate-900 font-light leading-relaxed mb-8 max-w-lg font-poppins">
              {tText("hero_desc", "Stop recreating menu designs from scratch. GastroWin reads your complex PDF coordinates, translates the text into 40+ languages, and reconstructs the output with original typography, columns, and brand colors perfectly locked in place.")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={scrollToSandbox}
                className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 font-poppins"
              >
                {tText("launch_btn", "Translate Your Menu Free")}
                <ArrowRight className="w-4 h-4 animate-bounce-horizontal" />
              </button>
            </div>

            {/* Trust badge tags typical of fine SaaS products */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-base font-light text-slate-900 font-poppins">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#7553FF]" /> {tText("badge_cmyk", "Vectorized CMYK Ready")}
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#7553FF]" /> {tText("badge_llm", "40+ Languages Supported")}
              </span>
            </div>
          </div>

          {/* Hero Right: Replaced by requested translatemenu image */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-6 min-h-[420px]">
            
            {/* Ambient Background glow */}
            <div className="absolute w-80 h-80 rounded-full bg-[#7553FF]/[0.03] filter blur-[95px] pointer-events-none" />
            
            <div className="relative w-full max-w-md">
              <img 
                id="hero-translatemenu-image"
                src="https://i.postimg.cc/bvhwP3c1/translate-mascot.png" 
                alt="GastroWin Menu Translator Interface" 
                className="w-full h-auto object-cover scale-145 drop-shadow-[0_10px_20px_rgba(118,81,252,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>
      </motion.section>

      {/* 2. FEATURES/BENEFITS SECTION (3 distinct feature cards with minimalist line icons) */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="py-20 bg-slate-50/60 border-y border-slate-100 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[52px] lg:leading-[60px] font-semibold text-slate-950 tracking-tight mt-4 mb-4 font-poppins">
              {tText("features_title", "Engineered exclusively for restaurant typography")}
            </h2>
            <p className="text-sm text-slate-900 font-light leading-relaxed font-poppins">
              {tText("features_desc", "We do not use boring plain text converters. GastroWin parses real visual structure, maintaining perfect spatial awareness.")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Globe/Languages */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2 font-poppins">{tText("accuracy_title", "Culinary Accuracy")}</h3>
              <p className="text-base text-slate-900 font-light leading-relaxed font-poppins">
                {tText("accuracy_desc", "Translate menus into 40+ languages instantly. Our LLM models are specially trained on gourmet culinary databases, region wine rules, and rare herb suffixes to prevent embarrassing dictionary literal errors.")}
              </p>
            </div>

            {/* Card 2: Lightning bolt/Speed */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2 font-poppins">{tText("speed_title", "High-Speed Translation")}</h3>
              <p className="text-base text-slate-900 font-light leading-relaxed font-poppins">
                {tText("speed_desc", "Translate whole multi-page boards under 3 seconds. Real-time streaming token pipelines output without queue delays to get your menus to the printer faster than any agency.")}
              </p>
            </div>

            {/* Card 3: Sliders/Layout/Pixel Perfect */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 text-left group hover:border-[#7553FF]/30">
              <div className="w-10 h-10 bg-purple-50 text-[#7553FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-purple-100/60">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-950 mb-2 font-poppins">{tText("pixel_title", "Pixel-Perfect Layout")}</h3>
              <p className="text-base text-slate-900 font-light leading-relaxed font-poppins">
                {tText("pixel_desc", "GastroWin automatically preserves original background elements, custom columns, borders, and typography. No misaligned text blocks or overflows—just guaranteed placement.")}
              </p>
            </div>

          </div>

        </div>
      </motion.section>



      {/* DOWNLOAD MODAL WITH REAL SIMULATIONS */}
      <AnimatePresence>
        {downloadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDownloadModalOpen(false)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-2xl relative w-full max-w-md z-10 text-left"
            >
              <div className="pb-4 border-b border-slate-100 mb-6 font-poppins">
                <h3 className="font-extrabold text-lg text-slate-950">{tText("modal_preparing", "Preparing Vector PDF")}</h3>
                <p className="text-xs text-slate-500 font-medium mt-1">{tText("modal_preparing_sub", "Generating CMYK coordinates for printer plotting...")}</p>
              </div>

              {downloadSuccess ? (
                <div className="py-8 text-center flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900 font-poppins">{tText("modal_download_success", "Download Initiated Successfully!")}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-poppins">
                    {lang === "vi" ? (
                      <>
                        Thực đơn được vectơ hóa bằng tiếng <span className="font-extrabold">{selectedLanguage.code === "en" ? "Anh" : selectedLanguage.code === "de" ? "Đức" : selectedLanguage.code === "vi" ? "Việt" : selectedLanguage.name}</span> của bạn đã được khởi tạo và biên dịch thành công dưới dạng tập tin <span className="font-mono text-[10px] bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded text-[#7553FF] font-bold">gastrohub_menu_export.pdf</span>.
                      </>
                    ) : lang === "de" ? (
                      <>
                        Ihr vektorisiertes <span className="font-extrabold">{selectedLanguage.code === "en" ? "englisches" : selectedLanguage.code === "de" ? "deutsches" : "vietnamesisches"}</span> Menü wurde erfolgreich generiert und unter dem Namen <span className="font-mono text-[10px] bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded text-[#7553FF] font-bold">gastrohub_menu_export.pdf</span> heruntergeladen.
                      </>
                    ) : (
                      <>
                        Your vectorized <span className="font-extrabold">{selectedLanguage.name}</span> menu has been generated and compiled successfully as <span className="font-mono text-[10px] bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded text-[#7553FF] font-bold">gastrohub_menu_export.pdf</span>.
                      </>
                    )}
                  </p>
                  <div className="flex flex-col gap-2 w-full mt-4">
                    <button
                      onClick={() => setDownloadModalOpen(false)}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer border-0 font-poppins"
                    >
                      {tText("modal_done", "Done")}
                    </button>
                    <button
                      onClick={() => setDownloadSuccess(false)}
                      className="text-slate-400 hover:text-slate-600 text-[11px] font-bold py-1.5 transition-colors cursor-pointer border-0 font-poppins"
                    >
                      {tText("modal_another", "Generate another copy")}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 bg-purple-50 text-[#7553FF] rounded-full flex items-center justify-center mx-auto mb-5 border border-purple-100">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 text-center font-poppins">
                    {tText("modal_prepared_title", "Menu PDF Prepared!")}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium text-center mb-6 font-poppins">
                    {lang === "vi" ? (
                      `Thực đơn đã dịch sang tiếng ${selectedLanguage.code === "en" ? "Anh" : selectedLanguage.code === "de" ? "Đức" : "Việt"} của bạn đã được thiết kế, vectơ hóa và biên dịch thành tài liệu CMYK chất lượng cao.`
                    ) : lang === "de" ? (
                      `Ihr übersetztes ${selectedLanguage.code === "en" ? "englisches" : selectedLanguage.code === "de" ? "deutsches" : "vietnamesisches"} Menü ist gestylt, vektorisiert und in ein hochauflösendes CMYK-Dokument kompiliert.`
                    ) : (
                      `Your translated ${selectedLanguage.name} menu is styled, vectorized, and compiled into a high-res CMYK document.`
                    )}
                  </p>

                  {/* Simulated options */}
                  <div className="space-y-3 mb-6 font-poppins">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-left">
                      <div>
                        <h5 className="text-[11px] font-extrabold text-slate-800">{tText("modal_print_pdf", "Print-Ready Vector PDF")}</h5>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{tText("modal_print_pdf_desc", "Perfect for premium printers (CMYK)")}</p>
                      </div>
                      <span className="text-[9px] bg-purple-100 text-[#7553FF] font-bold uppercase tracking-wider px-2 py-0.5 rounded">{tText("ready_lbl", "Ready")}</span>
                    </div>
                    
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-left">
                      <div>
                        <h5 className="text-[11px] font-extrabold text-slate-800">{tText("modal_qr", "Interactive Tourist QR Code")}</h5>
                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{tText("modal_qr_desc", "Customers scan table to view on phone")}</p>
                      </div>
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold uppercase tracking-wider px-2 py-0.5 rounded">{tText("generated_lbl", "Generated")}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setDownloadSuccess(true);
                      }}
                      className="bg-[#7553FF] hover:bg-[#5F3DEB] text-white text-xs font-extrabold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border-0 font-poppins"
                    >
                      <Download className="w-4 h-4" />
                      {tText("modal_download_btn", "Download Print-Ready PDF")}
                    </button>
                    <button
                      onClick={() => setDownloadModalOpen(false)}
                      className="text-slate-500 hover:text-slate-800 text-xs font-bold py-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer border-0 font-poppins"
                    >
                      {tText("modal_close", "Close Window")}
                    </button>
                  </div>
                </>
              )}
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
