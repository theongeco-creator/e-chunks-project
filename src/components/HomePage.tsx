import React, { useState } from "react";
import { ArrowUpRight, BookOpen, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/Card";
import { VocabularyTopicsSection } from "@/components/VocabularyTopicsSection";
import { StoriesSection } from "@/components/StoriesSection";
import { MethodModal } from "@/components/MethodModal";
import { SettingsModal } from "@/components/SettingsModal";
import { PaywallModal } from "@/components/PaywallModal";
import { PageContainer } from "@/components/PageContainer";
import type { VocabTopic } from "@/data/vocabulary";
import type { Story } from "@/data/types";
import { Button } from "@/components/Button";

// 👉 Import dữ liệu ngữ pháp từ file gộp chung của nị
import { ALL_GRAMMAR_DATA } from "@/data/grammar/grammarData";

// 👉 Khai báo bảng màu Grammar trực tiếp tại đây luôn cho chuẩn xác
const GRAMMAR_COLORS: Record<string, { bg: string; text: string }> = {
  subject: { bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-700 dark:text-blue-300" },
  verb: { bg: "bg-rose-50 dark:bg-rose-950/40", text: "text-rose-700 dark:text-rose-300" },
  object: { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-700 dark:text-emerald-300" },
  time: { bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-700 dark:text-amber-300" },
  place: { bg: "bg-purple-50 dark:bg-purple-950/40", text: "text-purple-700 dark:text-purple-300" },
  method: { bg: "bg-indigo-50 dark:bg-indigo-950/40", text: "text-indigo-700 dark:text-indigo-300" },
  connector: { bg: "bg-orange-50 dark:bg-orange-950/40", text: "text-orange-700 dark:text-orange-300" },
  default: { bg: "bg-slate-100 dark:bg-slate-800", text: "text-slate-700 dark:text-slate-300" }
};

interface HomePageProps {
  user?: any;
  onLoginClick?: () => void;
  onLogoutClick?: () => void;
  onSelectLevel: (level: "A1" | "A2" | "B1") => void;
  onSelectVocabTopic: (topic: VocabTopic) => void;
  onViewAllTopics: () => void;
  onSelectStory: (story: Story) => void;
  onViewAllStories: () => void;
  handleUpdateProfile?: (updatedData: any) => void;
  handleUpgrade: (purchasedTier?: "A2" | "B1" | "premium") => void;
  onViewAllCourses?: () => void;
  onSelectGrammar?: () => void;
}

export function HomePage({
  user,
  onLoginClick,
  onLogoutClick,
  onSelectLevel,
  onSelectVocabTopic,
  onViewAllTopics,
  onSelectStory,
  onViewAllStories,
  handleUpdateProfile,
  handleUpgrade,
  onViewAllCourses,
  onSelectGrammar,
}: HomePageProps) {
  const [isMethodModalOpen, setIsMethodModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [paywallContext, setPaywallContext] = useState<"A2_LESSON" | "B1_LESSON" | "GENERAL">("GENERAL");

  // 🛠️ Phẳng hóa object ALL_GRAMMAR_DATA thành một mảng các câu đơn duy nhất để chạy được trên widget
  const grammarSentences = React.useMemo(() => {
    if (!ALL_GRAMMAR_DATA) return [];
    if (typeof ALL_GRAMMAR_DATA === 'object' && !Array.isArray(ALL_GRAMMAR_DATA)) {
      return Object.values(ALL_GRAMMAR_DATA).flat() as any[];
    }
    return Array.isArray(ALL_GRAMMAR_DATA) ? ALL_GRAMMAR_DATA : [];
  }, [ALL_GRAMMAR_DATA]);

  const [currentGrammarIndex, setCurrentGrammarIndex] = useState(0);
  const [activeChunk, setActiveChunk] = useState<any>(null);

  const selectedSentence = grammarSentences[currentGrammarIndex];

  const handlePrevGrammar = () => {
    setCurrentGrammarIndex((prev) => (prev > 0 ? prev - 1 : grammarSentences.length - 1));
    setActiveChunk(null);
  };

  const handleNextGrammar = () => {
    setCurrentGrammarIndex((prev) => (prev < grammarSentences.length - 1 ? prev + 1 : 0));
    setActiveChunk(null);
  };

  return (
    <PageContainer className="py-8">
      
      {/* 🚀 LAYOUT TỔNG: CHIA LÀM 2 CỘT DỌC ĐỘC LẬP (2/3 VÀ 1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* ================= CỘT TRÁI (2 CỘT): CHỨA TẤT CẢ NỘI DUNG HỌC ================= */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* SECTION 1: LỘ TRÌNH KHÓA HỌC (A1, A2) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Chọn lộ trình để bắt đầu
              </h2>
              
              <button
                onClick={onViewAllCourses}
                className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition cursor-pointer"
              >
                Xem tất cả
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* CARD 1: A1 - BEGINNER */}
              <Card
                badgeText="A1 — Beginner"
                title="Khóa A1 — Căn bản & Phản xạ"
                description="Chưa có nền tảng, hoặc chỉ biết vài từ lẻ tẻ? Ngay cả chào hỏi, tự giới thiệu cũng phải nghĩ mãi? Bắt đầu từ những điều cơ bản nhất tại đây!"
                media={
                  <div className="w-full h-full bg-slate-100 dark:from-rose-950/40 dark:to-slate-900 flex items-center justify-center relative overflow-hidden group">
                    <span className="absolute top-3 left-3 bg-amber-300 dark:bg-slate-800/950 backdrop-blur-xs text-slate-800 dark:text-emerald-400 font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-xs border z-10">
                      Free
                    </span>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-300">
                      <img 
                        src="/images/A1.svg" 
                        alt="Icon" 
                        className="w-20 h-20 object-contain" 
                      />
                    </div>
                  </div>
                }
                meta={[
                  { label: "Sơ cấp" },
                  { label: "Phản xạ câu đơn" }
                ]}
                ctaLabel="Bắt đầu học A1"
                onClick={() => onSelectLevel("A1")}
              />

              {/* CARD 2: A2 - ELEMENTARY */}
              <Card
                badgeText="A2 — Elementary"
                title="Khóa A2 — Mở rộng & Giao tiếp"
                description="Nói được về bản thân, gia đình, công việc hàng ngày, nhưng gặp chủ đề lạ là 'đứng hình'? Mở rộng vốn từ và phản xạ để trao đổi tự nhiên hơn."
                media={
                  <div className="w-full h-full bg-slate-100 dark:from-rose-950/40 dark:to-slate-900 flex items-center justify-center relative overflow-hidden group">
                    <span className="absolute top-3 left-3 bg-brand-500 dark:bg-slate-800/90 backdrop-blur-xs text-white dark:text-emerald-400 font-semibold text-[11px] px-2.5 py-1 rounded-md shadow-xs border z-10">
                      - 50%
                    </span>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-300">
                      <img 
                        src="/images/A2.svg" 
                        alt="Icon" 
                        className="w-20 h-20 object-contain" 
                      />
                    </div>
                  </div>
                }
                meta={[
                  { label: "Sơ - Trung cấp" },
                  { label: "Phản xạ giao tiếp" }
                ]}
                ctaLabel="Bắt đầu học A2"
                onClick={() => onSelectLevel("A2")}
              />
            </div>
          </div>

          {/* SECTION 2: TỪ VỰNG Theo CHỦ ĐỀ */}
          <VocabularyTopicsSection
            onSelectTopic={onSelectVocabTopic}
            onViewAll={onViewAllTopics}
          />

          {/* SECTION 3: CÂU CHUYỆN (STORIES) */}
          <StoriesSection
            onSelectStory={onSelectStory}
            onViewAll={onViewAllStories}
          />
        </div>

        {/* ================= CỘT PHẢI (1 CỘT): SIDEBAR TỔNG CHỨA CÁC CARD WIDGET ================= */}
        <div className="lg:col-span-1 space-y-6 lg:top-20">

          {/* CARD 2: CẤU TRÚC CÂU MẪU (GỌN GÀNG CHO CỘT PHẢI) */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border-[3px] border-brand-600/70 shadow-sm flex-col justify-between relative overflow-hidden">
  
            {/* 👉 Bỏ nền mờ, để text thuần túy cho thẳng hàng lề trái với các chunk bên dưới */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h5 className="text-base font-bold text-state-900">
                Phân tích ngữ pháp
              </h5>
              
              <div className="flex items-center gap-1">
                <button 
                  onClick={handlePrevGrammar} 
                  className="p-1.5 rounded-lg border border-slate-200 text-state-900 hover:bg-slate-50 transition cursor-pointer"
                  title="Câu trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {/* Sửa <button> thành chữ thường thế này */}
                <button 
                  onClick={handleNextGrammar} 
                  className="p-1.5 rounded-lg border border-slate-200 text-state-900 hover:bg-slate-50 transition cursor-pointer"
                  title="Câu sau"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4 mb-5">
              <div className="flex flex-wrap items-center gap-2">
                {selectedSentence?.chunks?.map((chunk: any) => {
                  const color = GRAMMAR_COLORS[chunk.colorType] || GRAMMAR_COLORS.default;
                  const isSelected = activeChunk?.id === chunk.id;

                  return (
                    <span
                      key={chunk.id}
                      onClick={() => setActiveChunk(chunk)}
                      className={`flex flex-col items-center px-2.5 py-1.5 rounded-lg cursor-pointer transition border text-xs ${color.bg} ${color.text} ${
                        isSelected
                          ? "ring-2 ring-brand-500 border-transparent shadow-sm scale-105"
                          : "border-transparent hover:opacity-80"
                      }`}
                    >
                      <span className="font-bold text-base">{chunk.chunkEn}</span>
                      <span className="text-[12px] font-semibold opacity-80 mt-0.5">
                        {chunk.chunkVi}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <Button
                onClick={onSelectGrammar}
                variant="dark"
                fullWidth={true}
                size="md"
                icon={<ArrowUpRight className="w-4 h-4 text-slate-300" />}
              >
                Xem chi tiết cấu trúc
              </Button>
            </div>
          </div>

          {/* CARD 1: PHƯƠNG PHÁP SELF-TALK */}
          <div 
            className="text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-sm bg-[#513DEB]"
            style={{
              backgroundImage: "url('/images/selftalk.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            {/* Thêm một lớp phủ tối (overlay) để chữ trắng luôn nổi bật dù ảnh nền sáng hay tối */}
            <div className="absolute inset-0 pointer-events-none" />

            <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <span className="inline-block px-2.5 py-1.5 text-xs text-state-800 font-bold bg-white/30  rounded-md">
                Phương pháp
              </span>
              <h3 className="text-xl font-bold leading-snug">
                Self-talk — Luyện nói tiếng Anh bằng cách độc thoại.
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                Luyện phản xạ nói mà không cần người đối thoại, qua những cụm từ dùng nhiều nhất trong giao tiếp thực tế.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <Button
                onClick={() => setIsMethodModalOpen(true)}
                variant="secondary"
                fullWidth={true}
                size="md"
                className="bg-white text-[#513DEB] hover:bg-slate-100 font-bold text-sm py-3 shadow-sm active:scale-95 cursor-pointer"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Tìm hiểu ngay
              </Button>
            </div>
          </div>

        </div>

      </div>

      {/* MODALS */}
      <MethodModal
        isOpen={isMethodModalOpen}
        onClose={() => setIsMethodModalOpen(false)}
        onSelectLevel={onSelectLevel}
      />

      <SettingsModal
        open={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        user={user}
        onUpdateProfile={handleUpdateProfile}
      />

      <PaywallModal
        open={isPaywallOpen}
        onClose={() => setIsPaywallOpen(false)}
        onUpgrade={handleUpgrade}
        triggerContext={paywallContext}
        userTier={user?.tier || "free"}
      />

    </PageContainer>
  );
}