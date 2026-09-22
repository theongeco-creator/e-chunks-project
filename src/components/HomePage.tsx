import React, { useState } from "react";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
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
  onViewAllCourses?: () => void; // 👈 Thêm prop này
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
}: HomePageProps) {
  const [isMethodModalOpen, setIsMethodModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [paywallContext, setPaywallContext] = useState<"A2_LESSON" | "B1_LESSON" | "GENERAL">("GENERAL");

  return (
    <PageContainer className="py-8">
      
      {/* 🚀 LAYOUT TỔNG: CHIA LÀM 2 CỘT DỌC ĐỘC LẬP (2/3 VÀ 1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* ================= CỘT TRÁI (2 CỘT): CHỨA TẤT CẢ TẠO NỘI DUNG HỌC ================= */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* SECTION 1: LỘ TRÌNH KHÓA HỌC (A1, A2) */}
          <div className="space-y-4">
            {/* Thêm flex & items-center justify-between để đẩy nút View all sang phải */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Chọn lộ trình để bắt đầu
                </h2>
                
                {/* Nút View all / Xem tất cả */}
                <button
                  onClick={onViewAllCourses} // 👈 Gọi hàm khi bấm
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
                    <div className="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-950/40 dark:to-slate-900 flex items-center justify-center relative overflow-hidden group">
                    <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-300">
                      <Sparkles className="w-10 h-10 text-rose-500" />
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
                  <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-950/40 dark:to-slate-900 flex items-center justify-center relative overflow-hidden group">
                <div className="w-24 h-24 bg-indigo-500/10 rounded-full flex items-center justify-center transform group-hover:scale-110 transition duration-300">
                  <BookOpen className="w-12 h-12 text-indigo-600" />
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
          
          {/* CARD 1: PHƯƠNG PHÁP SELF-TALK */}
          <div className="bg-brand-500 text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-sm">
            {/* Họa tiết trang trí */}
            <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10">
              <span className="inline-block px-2.5 py-1 text-xs font-bold bg-white/20 text-white rounded-md">
                Phương pháp
              </span>
              <h3 className="text-xl font-bold leading-snug">
                Self-talk — Luyện nói tiếng Anh bằng cách độc thoại.
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Luyện phản xạ nói mà không cần người đối thoại, qua những cụm từ dùng nhiều nhất trong giao tiếp thực tế.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <Button
                onClick={() => setIsMethodModalOpen(true)}
                variant="secondary"
                className="w-full bg-white text-brand-600 hover:bg-slate-50 font-bold text-sm py-3 shadow-sm active:scale-95"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Tìm hiểu ngay
              </Button>
            </div>
          </div>

          {/* 💡 SAU NÀY NÍ CÓ THỂ THÊM WIDGET KHÁC VÀO CỘT PHẢI NÀY (VD: STREAK CARD, RANKING...) */}

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