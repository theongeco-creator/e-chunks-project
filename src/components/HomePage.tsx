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
    /* Tăng khoảng cách tổng thể từ space-y-6 lên space-y-10 */
    <div className="space-y-10 pb-10">
      {/* 1. Dòng chào mừng */}
      <div className="space-y-1.5 px-1">
        <h1 className="text-xl font-bold tracking-tight text-blue-700 dark:text-white flex items-center gap-2">
          <span>
            {user
              ? `₍^. .^₎Ⳋ Xin chào, ${user.email ? user.email.split("@")[0] : "Học viên"}`
              : "Xin chào bạn"}
          </span>
          
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Chúc bạn một ngày học tập hiệu quả cùng E-Chunks.
        </p>
      </div>

      {/* 2. Lưới chọn lộ trình (đã bỏ khung) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
        {/* CỘT TRÁI (col-span-3) */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2
                className="text-[22px] font-bold tracking-tight text-slate-900 dark:text-white"
                style={{ color: "#0F172A" }}
              >
                Chọn lộ trình để bắt đầu.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* CARD 1 */}
              <div
                onClick={() => onSelectLevel("A2")}
                className="p-5 rounded-xl shadow-sm cursor-pointer transition-all hover:scale-[1.04] flex flex-col justify-between bg-cover bg-center min-h-[230px] relative overflow-hidden"
                style={{ backgroundImage: "url('/images/card-1.png')" }}
              >
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-white">A1 – Cơ bản</h3>
                  <p className="text-xs font-medium leading-relaxed text-white">
                    Ngữ pháp/từ vựng cơ bản: to be, hiện tại đơn, chủ đề bản thân/gia đình/số đếm; chào hỏi, giới thiệu.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-[13px] font-bold px-3 py-2 rounded-lg bg-white text-[#0F172A]">
                    800 từ vựng
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer shadow-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                onClick={() => onSelectLevel("A2")}
                className="p-5 rounded-xl shadow-sm cursor-pointer transition-all hover:scale-[1.04] flex flex-col justify-between bg-cover bg-center min-h-[230px] relative overflow-hidden"
                style={{ backgroundImage: "url('/images/card-2.png')" }}
              >
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-white">A2 – Sơ cấp</h3>
                  <p className="text-xs font-medium leading-relaxed text-white">
                    Quá khứ đơn, tương lai, so sánh, modal cơ bản: chủ đề công việc/sở thích/du lịch; kể chuyện, mô tả kế hoạch.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-[13px] font-bold px-3 py-2 rounded-lg bg-white text-[#0F172A]">
                    1500 từ vựng
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer shadow-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div
                onClick={() => onSelectLevel("B1")}
                className="p-6 pb-7 rounded-2xl shadow-sm cursor-pointer transition-all hover:scale-[1.04] flex flex-col justify-between bg-cover bg-center min-h-[270px] relative overflow-hidden"
                style={{ backgroundImage: "url('/images/card-3.png')" }}
              >
                <div className="space-y-3">
                  <h3 className="font-bold text-xl text-white">B1 – Trung cấp</h3>
                  <p className="text-xs font-medium leading-relaxed text-white/90">
                    Perfect tenses, bị động, mệnh đề quan hệ, reported speech; chủ đề trừu tượng hơn, idioms/phrasal verbs; bày tỏ quan điểm, tranh luận nhẹ.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-[13px] font-bold px-4 py-2.5 rounded-lg bg-white text-[#0F172A] shadow-xs">
                    3000 từ vựng
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition cursor-pointer shadow-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-move-up-right"
                    >
                      <path d="M13 5H19V11" />
                      <path d="M19 5L5 19" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI (col-span-1) */}
        <div className="lg:col-span-1 h-full">
          <div
            className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 bg-cover bg-center h-full min-h-[220px] shadow-sm"
            style={{ backgroundImage: "url('/images/Home-banner.jpg')" }}
          ></div>
        </div>
      </div>

      {/* 3. Khối chứa Từ vựng & Truyện (Tăng khoảng cách giữa 2 khối này lên space-y-12) */}
      <div className="space-y-12 pt-6">
        {/* TỪ VỰNG THEO CHỦ ĐỀ (Tăng khoảng cách tiêu đề con lên space-y-6) */}
        <div className="space-y-6">
          <VocabularyTopicsSection
            onSelectTopic={onSelectVocabTopic}
            onViewAll={onViewAllTopics}
          />
        </div>

        {/* TRUYỆN (Tăng khoảng cách tiêu đề con lên space-y-6) */}
        <div className="space-y-6">
          <StoriesSection
            onSelectStory={onSelectStory}
            onViewAll={onViewAllStories}
          />
        </div>
      </div>
    </div>
  );
}