import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Volume2,
  RotateCcw,
  BookOpen,
  Edit3,
  HelpCircle,
  Check,
  Lock,
} from "lucide-react";
import type { Story } from "../data/types";
import { PageContainer } from "./PageContainer";

interface StoryPageProps {
  story: Story;
  onBackToHome: () => void;
  onBackToStories: () => void;
  onCompleteStory?: (storyId: string) => void;
}

type TabKey = "reading" | "dictation" | "blank";

const TABS: { key: TabKey; label: string; desc: string; step: string; icon: typeof BookOpen }[] = [
  { key: "reading", label: "Đọc truyện", desc: "Đọc hiểu nội dung và luyện nghe phát âm chuẩn", step: "Bước 1", icon: BookOpen },
  { key: "blank", label: "Điền từ trống", desc: "Ôn lại từ vựng bằng cách điền từ còn thiếu", step: "Bước 2", icon: HelpCircle },
  { key: "dictation", label: "Chép chính tả", desc: "Nghe từng câu và luyện gõ lại chính xác", step: "Bước 3", icon: Edit3 },
];

// Bước nào cần hoàn thành bước nào trước mới được vào — chỉnh ở đây để đổi thứ tự khóa bài
const TAB_PREREQUISITE: Partial<Record<TabKey, TabKey>> = {
  dictation: "blank",
};

function readStoredProgress(key: string): { completed?: boolean } {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function StoryPage({ story, onBackToHome, onBackToStories, onCompleteStory }: StoryPageProps) {
  // Nhớ tab đang học dở của từng truyện, mở lại truyện là vào đúng bước đang làm
  const activeTabKey = `active_tab_${story.id}`;
  const [activeTab, setActiveTab] = useState<TabKey>(() => {
    try {
      const saved = localStorage.getItem(activeTabKey) as TabKey | null;
      return saved && ["reading", "dictation", "blank"].includes(saved) ? saved : "reading";
    } catch {
      return "reading";
    }
  });

  // Đánh dấu bước nào đã hoàn thành (đọc lại từ tiến trình đã lưu của từng bước)
  const [tabCompletion, setTabCompletion] = useState<Record<TabKey, boolean>>(() => ({
    reading: false,
    dictation: !!readStoredProgress(`dictation_progress_${story.id}`).completed,
    blank: !!readStoredProgress(`blank_progress_${story.id}`).completed,
  }));

  // Bước có yêu cầu tiên quyết mà chưa hoàn thành thì bị khóa, không cho bấm vào
  const isTabLocked = (tab: TabKey) => {
    const prereq = TAB_PREREQUISITE[tab];
    return !!prereq && !tabCompletion[prereq];
  };

  const handleTabChange = (tab: TabKey) => {
    if (isTabLocked(tab)) return;
    setActiveTab(tab);
    try {
      localStorage.setItem(activeTabKey, tab);
    } catch {}
  };

  // Nếu tab đang mở bị khóa (vd: lưu từ trước khi đổi thứ tự bước) thì tự chuyển về bước đầu tiên chưa khóa
  useEffect(() => {
    if (isTabLocked(activeTab)) {
      handleTabChange("reading");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabCompletion.blank]);

  const markTabCompleted = (tab: TabKey) => {
    setTabCompletion((prev) => (prev[tab] ? prev : { ...prev, [tab]: true }));
  };

  // Truyện chỉ tính là "hoàn thành" khi cả 2 bài Chép chính tả và Điền từ đều xong
  useEffect(() => {
    if (tabCompletion.dictation && tabCompletion.blank) {
      onCompleteStory?.(story.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabCompletion.dictation, tabCompletion.blank, story.id]);

  return (
    <PageContainer className="py-8 space-y-6">
      {/* ================= BREADCRUMB ================= */}
      <nav className="flex items-center gap-2  sm:text-sm font-medium text-slate-500 dark:text-slate-400">
      <button 
        onClick={onBackToStories} 
        className="text-xs font-bold text-slate-500 dark:text-blue-400 hover:underline hover:text-blue-700 transition cursor-pointer font-medium"
      >
        Tất cả truyện
      </button>
      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[240px]" dangerouslySetInnerHTML={{ __html: story.title }}></span>
      </nav>

      {/* ================= KHUNG LỚN CHIA CỘT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* CỘT TRÁI: NỘI DUNG CHÍNH */}
        <div
          className="lg:col-span-8 rounded-2xl border shadow-card p-6 lg:p-8 space-y-6"
          style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
        >
          {activeTab === "reading" && <ReadingTabContent story={story} />}
          {activeTab === "dictation" && (
            <DictationTabContent story={story} onComplete={() => markTabCompleted("dictation")} />
          )}
          {activeTab === "blank" && (
            <FillBlankTabContent story={story} onComplete={() => markTabCompleted("blank")} />
          )}
        </div>

        {/* CỘT PHẢI: LỘ TRÌNH */}
        <div className="lg:col-span-4 space-y-4 sticky top-6">
          <div
            className="rounded-2xl border shadow-card p-5 space-y-4"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
          >
            <div className="space-y-3">
              <span className="bg-[#513DEB]/10 text-[#513DEB] text-[12px] font-extrabold px-2.5 py-1.5 rounded-md uppercase tracking-wider shrink-0">
                Cấp độ {story.level}
              </span>
              <h3 className="text-xl font-bold leading-snug" style={{ color: "var(--text-color)" }} dangerouslySetInnerHTML={{ __html: story.title }}></h3>
            </div>
            
            <div className="space-y-2">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                const isDone = tabCompletion[tab.key];
                const isLocked = isTabLocked(tab.key);

                return (
                  <div
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    title={isLocked ? "Hoàn thành bước trước để mở khóa" : undefined}
                    className={`w-full p-3 rounded-xl border-2 transition-all flex items-center justify-between ${
                      isLocked
                        ? "opacity-50 cursor-not-allowed"
                        : `cursor-pointer ${isActive ? "border-[#513DEB] ring-2 ring-[#513DEB]/15 bg-[#513DEB]/5" : "hover:border-slate-300 dark:hover:border-slate-700"}`
                    }`}
                    style={!isActive || isLocked ? { borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" } : undefined}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isActive && !isLocked ? "bg-[#513DEB] text-white" : ""}`}
                        style={!isActive || isLocked ? { backgroundColor: "var(--border-color)", color: "var(--text-color)", opacity: 0.6 } : undefined}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className={`block text-[10px] font-bold uppercase tracking-wider ${isActive && !isLocked ? "text-[#513DEB]" : "opacity-50"}`} style={!isActive || isLocked ? { color: "var(--text-color)" } : undefined}>
                          {tab.step}
                        </span>
                        <h4 className={`text-sm font-bold truncate ${isActive && !isLocked ? "text-[#513DEB]" : ""}`} style={!isActive || isLocked ? { color: "var(--text-color)" } : undefined}>
                          {tab.label}
                        </h4>
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        isLocked ? "" : isDone ? "bg-[#30B83D] text-white" : isActive ? "bg-[#513DEB] text-white" : ""
                      }`}
                      style={isLocked || (!isDone && !isActive) ? { backgroundColor: "var(--border-color)", color: "var(--text-color)", opacity: 0.4 } : undefined}
                    >
                      {isLocked ? <Lock className="w-3 h-3" /> : <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

// READING TAB
function ReadingTabContent({ story }: { story: Story }) {
  const [showVietnamese, setShowVietnamese] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [speed, setSpeed] = useState<number>(0.9);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;
    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices().filter((v) => v.lang.startsWith("en"));
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(availableVoices[0].name);
      }
    };
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }, []);

  const handleTogglePlay = () => {
    if (!("speechSynthesis" in window)) return;
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(story.paragraph);
    utterance.rate = speed;
    if (selectedVoice) {
      const voiceObj = voices.find((v) => v.name === selectedVoice);
      if (voiceObj) utterance.voice = voiceObj;
    }
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--border-color)" }}>
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: "var(--text-color)" }}>
            <BookOpen className="w-5 h-5 text-[#4F46E5]" />
            Reading
          </h2>
          <p className="text-[13px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Đọc to từng câu để luyện phát âm và hiểu sâu nội dung: {story.title}
          </p>
        </div>
        <button
          onClick={() => setShowVietnamese((v) => !v)}
          className={`p-2 rounded-xl border transition cursor-pointer flex items-center justify-center ${
            showVietnamese ? "bg-[#4F46E5] text-white border-[#4F46E5]" : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200"
          }`}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
          </svg>
        </button>
      </div>

      <div className="rounded-2xl border p-6 shadow-xs" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
        <p className="text-[19px] md:text-[21px] font-medium leading-relaxed transition-all duration-200" style={{ color: "var(--text-color)" }}>
          {showVietnamese ? story.translation : story.paragraph}
        </p>
      </div>

      <div className="rounded-2xl border p-4 flex flex-wrap items-center justify-between gap-4" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
        <button
          onClick={handleTogglePlay}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-lg hover:scale-[1.02] active:scale-95 text-white"
          style={{ backgroundColor: isPlaying ? "#DB2323" : "#4F46E5" }}
        >
          <Volume2 className="w-4 h-4" />
          {isPlaying ? "Dừng đọc" : "Nghe truyện"}
        </button>
      </div>
    </div>
  );
}

// DICTATION TAB (CÓ AUTOSAVE TIẾN TRÌNH TỪNG CÂU)
function DictationTabContent({ story, onComplete }: { story: Story; onComplete?: () => void }) {
  const sentences = story.paragraph.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()) || [story.paragraph];

  // Khôi phục toàn bộ tiến trình đã lưu: đang ở câu nào, đã gõ gì, câu nào đúng/sai, đã hoàn thành chưa
  const storageKey = `dictation_progress_${story.id}`;
  const loadSaved = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  };
  const savedProgress = loadSaved();

  const [currentIndex, setCurrentIndex] = useState<number>(savedProgress?.currentIndex ?? 0);
  const [answers, setAnswers] = useState<Record<number, string>>(savedProgress?.answers ?? {});
  const [statusMap, setStatusMap] = useState<Record<number, "idle" | "correct" | "incorrect">>(
    savedProgress?.statusMap ?? {}
  );
  const [completed, setCompleted] = useState<boolean>(savedProgress?.completed ?? false);

  const status = statusMap[currentIndex] ?? "idle";
  const sentence = sentences[currentIndex] || story.paragraph;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < sentences.length - 1;

  // Tự động lưu lại toàn bộ tiến trình mỗi khi có thay đổi (đổi câu, gõ đáp án, kiểm tra, hoàn thành)
  useEffect(() => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ currentIndex, answers, statusMap, completed })
      );
    } catch {}
  }, [currentIndex, answers, statusMap, completed, storageKey]);

  const playSentence = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const normalize = (text: string) => text.toLowerCase().replace(/[.,!?;:]/g, "").trim().split(/\s+/);
  const originalWords = normalize(sentence);
  const typedWords = normalize(answers[currentIndex] ?? "");

  const goTo = (index: number) => {
    if (index >= 0 && index < sentences.length) {
      setCurrentIndex(index);
    }
  };

  const handleCheck = () => {
    const isCorrect = typedWords.length === originalWords.length && originalWords.every((w, i) => typedWords[i] === w);
    setStatusMap((prev) => ({ ...prev, [currentIndex]: isCorrect ? "correct" : "incorrect" }));
    // Nếu là câu cuối cùng và đúng thì đánh dấu hoàn thành toàn bộ bài
    if (isCorrect && currentIndex === sentences.length - 1) {
      setCompleted(true);
      onComplete?.();
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setAnswers({});
    setStatusMap({});
    setCompleted(false);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--border-color)" }}>
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: "var(--text-color)" }}>
            <Edit3 className="w-5 h-5 text-[#4F46E5]" />
            Nghe chép chính tả
          </h2>
          <p className="text-[13px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Nghe kỹ từng câu và gõ lại chính xác nội dung trong bài: {story.title}
          </p>
        </div>
        <button
          onClick={handleReset}
          className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition cursor-pointer"
          title="Làm lại từ đầu"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mr-4" style={{ backgroundColor: "var(--border-color)" }}>
            <div className="h-full rounded-full transition-all duration-300 bg-[#4F46E5]" style={{ width: `${((currentIndex + 1) / sentences.length) * 100}%` }} />
          </div>
          <div className="flex items-center gap-1 text-sm font-bold shrink-0" style={{ color: "var(--text-color)" }}>
            <span>🏆 {currentIndex + 1}/{sentences.length}</span>
          </div>
        </div>
        {completed && (
          <p className="text-[12px] font-bold text-[#30B83D]">✓ Bạn đã hoàn thành bài này trước đó — có thể ôn lại bất cứ lúc nào.</p>
        )}
      </div>

      <div className="rounded-2xl border p-8 space-y-6 shadow-xs flex flex-col items-center justify-center text-center" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
        <button onClick={playSentence} className="w-16 h-16 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shadow-lg hover:scale-105 transition cursor-pointer mx-auto">
          <Volume2 className="w-8 h-8" />
        </button>

        <textarea
          rows={3}
          value={answers[currentIndex] ?? ""}
          onChange={(e) => {
            setAnswers((prev) => ({ ...prev, [currentIndex]: e.target.value }));
            if (status !== "idle") setStatusMap((prev) => ({ ...prev, [currentIndex]: "idle" }));
          }}
          placeholder="Gõ lại câu tiếng Anh bạn vừa nghe..."
          className={`w-full max-w-xl rounded-xl border-2 px-4 py-3 text-base font-medium focus:outline-none transition resize-none ${
            status === "correct" ? "border-[#30B83D] bg-emerald-50/20" : status === "incorrect" ? "border-[#DB2323] bg-rose-50/20" : "border-slate-200"
          }`}
          style={{ color: "var(--text-color)" }}
        />

        {status === "correct" && (
          <div className="w-full max-w-xl rounded-2xl border border-[#30B83D] p-4 text-left bg-emerald-50/50 shadow-xs">
            <p className="text-xs font-bold text-[#30B83D]">Chính xác tuyệt vời! 🎉 Bạn có thể bấm tiếp theo.</p>
          </div>
        )}

        {status === "incorrect" && (
          <div className="w-full max-w-xl rounded-2xl border border-[#DB2323] p-4 text-left bg-rose-50/50 shadow-xs space-y-1">
            <p className="text-xs font-bold text-[#DB2323]">Chưa đúng, thử lại nhé!</p>
            <p className="text-sm font-medium" style={{ color: "var(--text-color)" }}>
              Đáp án đúng: <span className="font-bold">{sentence}</span>
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-1">
        <button onClick={() => goTo(currentIndex - 1)} disabled={!hasPrev} className="w-10 h-10 rounded-xl border flex items-center justify-center disabled:opacity-30 cursor-pointer bg-white">
          <ChevronLeft className="w-5 h-5 text-slate-600" />
        </button>

        {status === "correct" ? (
          hasNext ? (
            <button onClick={() => goTo(currentIndex + 1)} className="px-7 py-3 rounded-xl font-bold text-sm text-white bg-[#4F46E5] shadow-md flex items-center gap-2 cursor-pointer hover:scale-105">
              Tiếp theo <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button disabled className="px-7 py-3 rounded-xl font-bold text-sm text-white bg-[#30B83D] shadow-md flex items-center gap-2 cursor-default">
              <Check className="w-4 h-4" /> Hoàn thành 🎉
            </button>
          )
        ) : (
          <button onClick={handleCheck} className="px-7 py-3 rounded-xl font-bold text-sm text-white bg-[#4F46E5] shadow-md cursor-pointer hover:scale-105">
            {status === "incorrect" ? "Kiểm tra lại" : "Kiểm tra"}
          </button>
        )}

        <button onClick={() => goTo(currentIndex + 1)} disabled={!hasNext} className="w-10 h-10 rounded-xl border flex items-center justify-center disabled:opacity-30 cursor-pointer bg-white">
          <ChevronRight className="w-5 h-5 text-slate-600" />
        </button>
      </div>
    </div>
  );
}

// FILL BLANK TAB (TƯƠNG TỰ CHO ĐIỀN TỪ)
function FillBlankTabContent({ story, onComplete }: { story: Story; onComplete?: () => void }) {
  const blanks = story.blanks ?? [];
  const sentences = story.paragraph.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);

  if (blanks.length === 0 || sentences.length === 0) {
    return <p className="text-sm opacity-60 py-10 text-center" style={{ color: "var(--text-color)" }}>Truyện này chưa có bài tập điền từ.</p>;
  }

  const targetSentences = sentences.filter((sentence) => blanks.some((b) => sentence.toLowerCase().includes(b.toLowerCase())));
  const activeSentences = targetSentences.length > 0 ? targetSentences : sentences;

  const storageKey = `blank_progress_${story.id}`;
  const loadSaved = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  };
  const savedProgress = loadSaved();

  const [currentIndex, setCurrentIndex] = useState<number>(savedProgress?.currentIndex ?? 0);
  const [answers, setAnswers] = useState<Record<string, string>>(savedProgress?.answers ?? {});
  const [statusMap, setStatusMap] = useState<Record<number, "idle" | "correct" | "incorrect">>(
    savedProgress?.statusMap ?? {}
  );
  const [completed, setCompleted] = useState<boolean>(savedProgress?.completed ?? false);

  // Tự động lưu lại toàn bộ tiến trình mỗi khi có thay đổi
  useEffect(() => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ currentIndex, answers, statusMap, completed })
      );
    } catch {}
  }, [currentIndex, answers, statusMap, completed, storageKey]);

  const currentSentence = activeSentences[currentIndex] || "";
  const currentStatus = statusMap[currentIndex] || "idle";
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < activeSentences.length - 1;

  const tokens = currentSentence.split(/(\s+)/);
  const sentenceBlanks: { blankWord: string; key: string }[] = [];
  let blankCounter = 0;

  tokens.forEach((token) => {
    const cleanToken = token.replace(/[.,!?;:]/g, "");
    const matchedBlank = blanks.find((b) => b.toLowerCase() === cleanToken.toLowerCase());
    if (matchedBlank) {
      sentenceBlanks.push({ blankWord: matchedBlank, key: `${currentIndex}-${blankCounter}` });
      blankCounter++;
    }
  });

  const playSentence = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentSentence);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const goTo = (index: number) => {
    if (index >= 0 && index < activeSentences.length) {
      setCurrentIndex(index);
    }
  };

  const handleCheckBlank = () => {
    let allCorrect = true;
    sentenceBlanks.forEach((item) => {
      const userAns = (answers[item.key] ?? "").trim().toLowerCase();
      if (userAns !== item.blankWord.toLowerCase()) allCorrect = false;
    });

    setStatusMap((prev) => ({ ...prev, [currentIndex]: allCorrect ? "correct" : "incorrect" }));
    if (allCorrect && currentIndex === activeSentences.length - 1) {
      setCompleted(true);
      onComplete?.();
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setStatusMap({});
    setAnswers({});
    setCompleted(false);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  };

  let renderCounter = 0;
  const renderedTokens = tokens.map((token, tIndex) => {
    const cleanToken = token.replace(/[.,!?;:]/g, "");
    const matchedBlank = blanks.find((b) => b.toLowerCase() === cleanToken.toLowerCase());
    if (matchedBlank) {
      const key = `${currentIndex}-${renderCounter}`;
      renderCounter++;
      return (
        <input
  key={tIndex}
  value={answers[key] ?? ""}
  size={Math.max(4, (answers[key] ?? "").length || 3)} // 👈 Tự động co giãn theo số chữ gõ vào
  onChange={(e) => {
    setAnswers((prev) => ({ ...prev, [key]: e.target.value }));
    if (currentStatus !== "idle") setStatusMap((prev) => ({ ...prev, [currentIndex]: "idle" }));
  }}
  placeholder="..."
  className={`inline-block mx-1.5 px-3 py-2 rounded-xl border-2 text-2xl text-center font-bold focus:outline-none transition ${
    currentStatus === "correct" 
      ? "border-[#30B83D] bg-emerald-50/30 text-[#30B83D]" 
      : currentStatus === "incorrect" 
      ? "border-[#DB2323] bg-rose-50/30 text-[#DB2323]" 
      : "border-slate-300"
  }`}
/>
      );
    }
    return <span key={tIndex}>{token}</span>;
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--border-color)" }}>
        <div className="space-y-0.5">
          <h2 className="text-lg font-bold flex items-center gap-2" style={{ color: "var(--text-color)" }}>
            <HelpCircle className="w-5 h-5 text-[#4F46E5]" />
            Điền từ trống
          </h2>
          <p className="text-[13px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Lắng nghe và điền từ còn thiếu vào câu trong bài: {story.title}
          </p>
        </div>
        <button onClick={handleReset} className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition cursor-pointer">
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mr-4" style={{ backgroundColor: "var(--border-color)" }}>
            <div className="h-full rounded-full transition-all duration-300 bg-[#4F46E5]" style={{ width: `${((currentIndex + 1) / activeSentences.length) * 100}%` }} />
          </div>
          <div className="flex items-center gap-1 text-sm font-bold shrink-0">
            <span>🏆 {currentIndex + 1}/{activeSentences.length}</span>
          </div>
        </div>
        {completed && (
          <p className="text-[12px] font-bold text-[#30B83D]">✓ Bạn đã hoàn thành bài này trước đó — có thể ôn lại bất cứ lúc nào.</p>
        )}
      </div>

      <div className="rounded-2xl border p-8 space-y-6 shadow-xs flex flex-col items-center justify-center text-center" style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}>
        <button onClick={playSentence} className="w-16 h-16 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shadow-lg hover:scale-105 transition cursor-pointer mx-auto">
          <Volume2 className="w-8 h-8" />
        </button>

        <div className="w-full max-w-xl text-2xl font-semibold leading-relaxed p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/50" style={{ color: "var(--text-color)" }}>
          {renderedTokens}
        </div>

        {currentStatus === "correct" && (
          <div className="w-full max-w-xl rounded-xl border border-[#30B83D] p-4 text-left bg-emerald-50/50 shadow-xs">
            <p className="text-sm font-bold text-[#147B1E]">Chính xác tuyệt vời! </p>
          </div>
        )}

        {currentStatus === "incorrect" && (
          <div className="w-full max-w-xl rounded-2xl border border-[#DB2323] p-4 text-left bg-rose-50/50 shadow-xs space-y-1">
            <p className="text-xs font-bold text-[#DB2323]">Chưa đúng, thử lại nhé!</p>
            <p className="text-sm font-medium" style={{ color: "var(--text-color)" }}>
              Đáp án đúng: <span className="font-bold">{sentenceBlanks.map((b) => b.blankWord).join(", ")}</span>
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-1">
        <button onClick={() => goTo(currentIndex - 1)} disabled={!hasPrev} className="w-10 h-10 rounded-xl border flex items-center justify-center disabled:opacity-30 cursor-pointer bg-white">
          <ChevronLeft className="w-5 h-5 text-slate-600" />
        </button>

        {currentStatus === "correct" ? (
          hasNext ? (
            <button onClick={() => goTo(currentIndex + 1)} className="px-7 py-3 rounded-xl font-bold text-sm text-white bg-[#4F46E5] shadow-md flex items-center gap-2 cursor-pointer hover:scale-105">
              Tiếp theo <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button disabled className="px-7 py-3 rounded-xl font-bold text-sm text-white bg-[#30B83D] shadow-md flex items-center gap-2 cursor-default">
              <Check className="w-4 h-4" /> Hoàn thành
            </button>
          )
        ) : (
          <button onClick={handleCheckBlank} className="px-7 py-3 rounded-xl font-bold text-sm text-white bg-[#4F46E5] shadow-md cursor-pointer hover:scale-105">
            {currentStatus === "incorrect" ? "Kiểm tra lại" : "Kiểm tra"}
          </button>
        )}

        <button onClick={() => goTo(currentIndex + 1)} disabled={!hasNext} className="w-10 h-10 rounded-xl border flex items-center justify-center disabled:opacity-30 cursor-pointer bg-white">
          <ChevronRight className="w-5 h-5 text-slate-600" />
        </button>
      </div>
    </div>
  );
}