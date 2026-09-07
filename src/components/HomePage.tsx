import { VocabularyTopicsSection } from "@/components/VocabularyTopicsSection";
import { StoriesSection } from "@/components/StoriesSection";
import type { VocabTopic } from "@/data/vocabulary";
import type { Story } from "@/data/types";

interface HomePageProps {
  user: any;
  onSelectLevel: (level: "A2" | "B1") => void;
  onSelectVocabTopic: (topic: VocabTopic) => void;
  onViewAllTopics: () => void;
  onSelectStory: (story: Story) => void;
  onViewAllStories: () => void;
}

export function HomePage({
  user,
  onSelectLevel,
  onSelectVocabTopic,
  onViewAllTopics,
  onSelectStory,
  onViewAllStories,
}: HomePageProps) {
  return (
    <div className="space-y-6">
      {/* 1. Dòng chào mừng kiểu minimalist */}
      <div className="space-y-1 px-1">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <span>
            {user
              ? `Xin chào, ${user.email ? user.email.split("@")[0] : "Học viên"}`
              : "Xin chào bạn"}
          </span>
          <span className="inline-block animate-bounce">👋</span>
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Chúc bạn một ngày học tập hiệu quả cùng E-Chunks.
        </p>
      </div>

      {/* 2. Lưới tổng thể 2 cột (Trái: Nội dung, Phải: Banner + Quảng cáo) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        {/* CỘT TRÁI (col-span-3) */}
        <div className="lg:col-span-3 flex flex-col">
          {/* KHUNG BENTO LỚN BỌC 3 CARD COURSE */}
          <div className="bg-[#f9f9ff] dark:bg-slate-900 border-4 border-indigo-300 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2
                className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
                style={{ color: "#0F172A" }}
              >
                Chọn lộ trình học phù hợp với bạn để bắt đầu.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* CARD 1: LEVEL A1 - chưa có data riêng, tạm trỏ sang A2 */}
              <div
                onClick={() => onSelectLevel("A2")}
                className="p-4 rounded-xl shadow-sm cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between bg-cover bg-center min-h-[180px] relative overflow-hidden"
                style={{ backgroundImage: "url('/images/card-1.png')" }}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[12px] font-bold px-3 py-2 rounded-lg bg-white text-slate-900">
                      #Beginner
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#0F172A" }}>
                      A1 – Cơ bản
                    </h3>
                    <p className="text-xs font-medium leading-relaxed" style={{ color: "#0F172A" }}>
                      Hiểu và nói được vài câu đơn giản, quen thuộc về bản thân.
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#1C8D47" }}></p>
                  </div>
                </div>
                <div className="flex items-center justify-between my-2 py-1.5">
                  <span className="text-[13px] font-bold px-3 py-2 rounded-lg bg-[#bbade8] text-[#0F172A]">
                    800 từ vựng
                  </span>
                </div>
              </div>

              {/* CARD 2: LEVEL A2 */}
              <div
                onClick={() => onSelectLevel("A2")}
                className="p-4 rounded-xl shadow-sm cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between bg-cover bg-center min-h-[180px] relative overflow-hidden"
                style={{ backgroundImage: "url('/images/card-2.png')" }}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[12px] font-bold px-3 py-2 rounded-lg bg-white text-slate-900">
                      #Elementary
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#0F172A" }}>
                      A2 – Sơ cấp
                    </h3>
                    <p className="text-xs font-medium leading-relaxed" style={{ color: "#0F172A" }}>
                      Giao tiếp được trong các tình huống quen thuộc, đơn giản hằng ngày.
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#1C8D47" }}></p>
                  </div>
                </div>
                <div className="flex items-center justify-between my-2 py-1.5">
                  <span className="text-[13px] font-bold px-3 py-2 rounded-lg bg-[#efb0bc] text-[#0F172A]">
                    1500 từ vựng
                  </span>
                </div>
              </div>

              {/* CARD 3: LEVEL B1 */}
              <div
                onClick={() => onSelectLevel("B1")}
                className="p-4 rounded-xl shadow-sm cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between bg-cover bg-center min-h-[180px] relative overflow-hidden"
                style={{ backgroundImage: "url('/images/card-3.png')" }}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[12px] font-bold px-3 py-2 rounded-lg bg-white text-slate-900">
                      #Intermediate
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#0F172A" }}>
                      B1 – Trung cấp
                    </h3>
                    <p className="text-xs font-medium leading-relaxed" style={{ color: "#0F172A" }}>
                      Nói và viết được về công việc, du lịch, sở thích — dù đôi lúc chưa trôi chảy.
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#1C8D47" }}></p>
                  </div>
                </div>
                <div className="flex items-center justify-between my-2 py-1.5">
                  <span className="text-[13px] font-bold px-3 py-2 rounded-lg bg-[#85FBAE] text-[#0F172A]">
                    3000 từ vựng
                  </span>
                </div>
              </div>

              {/* end card*/}
            </div>
          </div>
        </div>

        {/* CỘT PHẢI (col-span-1): chiều cao khớp với khung "Chọn lộ trình" bên trái */}
        <div className="lg:col-span-1 h-full">
          <div
            className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 bg-cover bg-center h-full min-h-[220px] shadow-sm"
            style={{ backgroundImage: "url('/images/Home-banner.jpg')" }}
          ></div>
        </div>
      </div>

      <div className="space-y-12">
        {/* TỪ VỰNG THEO CHỦ ĐỀ */}
        <div className="space-y-4">
          <VocabularyTopicsSection onSelectTopic={onSelectVocabTopic} onViewAll={onViewAllTopics} />
        </div>

        {/* TRUYỆN */}
        <div className="space-y-4">
          <StoriesSection onSelectStory={onSelectStory} onViewAll={onViewAllStories} />
        </div>
      </div>
    </div>
  );
}