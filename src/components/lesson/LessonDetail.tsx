import { useState } from "react";
import { BookOpen, Headphones, Mic, PenLine, Layers, CheckCircle2, ChevronDown, CheckSquare } from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { ReadingTab } from "./ReadingTab";
import { VocabularyTab } from "./VocabularyTab";
import { ListeningTab } from "./ListeningTab";
import { SpeakingTab } from "./SpeakingTab";
import { WritingTab } from "./WritingTab";

interface LessonDetailProps {
  lesson: Lesson;
  onBack: () => void;
}

type TabKey = "reading" | "vocabulary" | "listening" | "speaking" | "writing";

const tabs: { key: TabKey; label: string; icon: typeof BookOpen; desc: string }[] = [
  { key: "reading", label: "Reading", icon: BookOpen, desc: "Đọc hiểu văn bản" },
  { key: "listening", label: "Listening", icon: Headphones, desc: "Luyện tập nghe hiểu" },
  { key: "speaking", label: "Speaking", icon: Mic, desc: "Thực hành phát âm & nói" },
  { key: "writing", label: "Writing", icon: PenLine, desc: "Thực hành viết câu/đoạn" },
];

export function LessonDetail({ lesson }: LessonDetailProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("reading");

  // State giả lập tiến độ task (ví dụ 0/4)
  const [completedTasks] = useState<number>(0); 
  const totalTasks = 4;

  const isReadingExpanded = activeTab === "reading" || activeTab === "vocabulary";

  return (
    <div className="w-full text-slate-800 min-h-screen pb-16 space-y-4">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        
        {/* ================= CỘT TRÁI: HIỂN THỊ NỘI DUNG TƯƠNG TỨNG ================= */}
        <div
          className="lg:col-span-8 p-6 lg:p-10 flex flex-col space-y-6 border-r border-slate-200 bg-white min-h-[600px]"
          style={{ backgroundColor: "var(--card-bg)", color: "var(--text-color)" }}
        >
          {activeTab === "reading" && <ReadingTab lesson={lesson} />}
          {activeTab === "vocabulary" && <VocabularyTab lesson={lesson} />}
          {activeTab === "listening" && <ListeningTab lesson={lesson} />}
          {activeTab === "speaking" && <SpeakingTab lesson={lesson} />}
          {activeTab === "writing" && <WritingTab lesson={lesson} />}
        </div>

        {/* ================= CỘT PHẢI: SIDEBAR TAB CHÍNH ================= */}
        <div className="lg:col-span-4 bg-slate-50/50 flex flex-col h-full border-t lg:border-t-0 border-slate-200">
          
          {/* KHUNG TIÊU ĐỀ NỀN TRẮNG CƠ BẢN + TASK NẰM Ở DƯỚI */}
          <div className="p-5 border-b border-slate-200 bg-white flex flex-col gap-2">
            <span className="text-[11px] text-blue-600 font-bold uppercase tracking-wider">
              Day {lesson.day}
            </span>
            <h2 className="font-bold text-lg text-slate-900 truncate">{lesson.title}</h2>
            
            {/* Dòng lộ trình học chi tiết & Badge task nằm ngay dưới */}
            <div className="flex items-center justify-between mt-1 pt-2 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500">Lộ trình học tập chi tiết</p>
              
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-2 rounded-md border border-slate-200 text-slate-700">
                
                <span className="text-xs font-bold">
                  {completedTasks}/{totalTasks} task
                </span>
              </div>
            </div>
          </div>

          <div className="divide-y divide-slate-200 overflow-y-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              const isReading = tab.key === "reading";

              return (
                <div key={tab.key}>
                  {/* Hàng tab cấp cha */}
                  <div
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative w-full p-4 flex items-center justify-between transition-colors cursor-pointer text-left ${
                      isActive ? "bg-blue-50/70" : "bg-white hover:bg-slate-50"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
                    )}

                    <div className="flex items-center gap-3.5 min-w-0 pr-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${
                          isActive
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex flex-col min-w-0 space-y-0.5">
                        <span
                          className={`text-[14px] font-bold truncate ${
                            isActive ? "text-blue-600" : "text-slate-800"
                          }`}
                        >
                          {tab.label}
                        </span>
                        <span className="text-[12px] text-slate-500 truncate font-medium">
                          {tab.desc}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      {isActive && (
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xs">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                      )}
                      {isReading && (
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                            isReadingExpanded ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Tab con "Vocabulary" */}
                  {isReading && isReadingExpanded && (
                    <div
                      onClick={() => setActiveTab("vocabulary")}
                      className={`relative w-full pl-14 pr-4 py-3 flex items-center justify-between transition-colors cursor-pointer text-left border-t border-slate-100 ${
                        activeTab === "vocabulary" ? "bg-blue-50/70" : "bg-white hover:bg-slate-50"
                      }`}
                    >
                      {activeTab === "vocabulary" && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
                      )}

                      <div className="flex items-center gap-3 min-w-0">
                        <Layers
                          className={`w-4 h-4 shrink-0 ${
                            activeTab === "vocabulary" ? "text-blue-600" : "text-slate-400"
                          }`}
                        />
                        <span
                          className={`text-[13px] font-semibold truncate ${
                            activeTab === "vocabulary" ? "text-blue-600" : "text-slate-700"
                          }`}
                        >
                          Vocabulary
                        </span>
                      </div>

                      {activeTab === "vocabulary" && (
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-xs shrink-0">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}