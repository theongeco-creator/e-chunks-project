import { useState } from "react";
import { ChevronLeft, Volume2, RotateCcw, BookOpen, Layers, Edit3, HelpCircle, ChevronRight } from "lucide-react";
import type { Story } from "../data/types";

interface StoryPageProps {
  story: Story;
  onBackToHome: () => void;
  onBackToStories: () => void;
}

type TabKey = "reading" | "vocab" | "dictation" | "blank";

const TABS: { key: TabKey; label: string; desc: string; step: string }[] = [
  { key: "reading", label: "01. Đọc truyện", desc: "Đọc hiểu nội dung và luyện nghe phát âm chuẩn", step: "Bước 1" },
  { key: "vocab", label: "02. Từ vựng", desc: "Học các từ mới xuất hiện trong bài, kèm nghĩa", step: "Bước 2" },
  { key: "dictation", label: "03. Chép chính tả", desc: "Nghe từng câu và luyện gõ lại chính xác", step: "Bước 3" },
  { key: "blank", label: "04. Điền từ trống", desc: "Ôn lại từ vựng bằng cách điền từ còn thiếu", step: "Bước 4" },
];

export function StoryPage({ story, onBackToHome, onBackToStories }: StoryPageProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("reading");

  const readTimeMin = Math.max(1, Math.round(story.paragraph.split(/\s+/).filter(Boolean).length / 130));

  return (
    <div className="w-full text-slate-800 min-h-screen pb-16 space-y-4 font-sans">
      
      {/* ================= BREADCRUMB ================= */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 flex-wrap px-1">
        <button
          onClick={onBackToHome}
          className="text-blue-600 hover:underline hover:text-blue-700 transition cursor-pointer font-medium"
        >
          Trang chủ
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <button
          onClick={onBackToStories}
          className="text-blue-600 hover:underline hover:text-blue-700 transition cursor-pointer font-medium"
        >
          Tất cả truyện
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-semibold truncate max-w-[240px]">{story.title}</span>
      </nav>

      {/* KHUNG LỚN 2 CỘT GIỐNG COURSE LIST */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
        
        {/* ================= CỘT TRÁI: NỘI DUNG CHÍNH (8 cột) ================= */}
        <div className="lg:col-span-8 p-6 lg:p-10 flex flex-col space-y-6 border-r border-slate-200 bg-white">
          {activeTab === "reading" && <ReadingTabContent story={story} />}
          {activeTab === "vocab" && <VocabTabContent story={story} />}
          {activeTab === "dictation" && <DictationTabContent story={story} />}
          {activeTab === "blank" && <FillBlankTabContent story={story} />}
        </div>

        {/* ================= CỘT PHẢI: LỘ TRÌNH LUYỆN TẬP (4 cột) ================= */}
        <div className="lg:col-span-4 bg-slate-50/50 flex flex-col h-full border-t lg:border-t-0 border-slate-200">
          
          {/* Header cột phải */}
          <div className="p-5 border-b border-slate-200 bg-white flex flex-col gap-2">
            <span className="text-[11px] text-blue-600 font-semibold uppercase">
              Đang học · Cấp độ {story.level}
            </span>
            <h4 className="text-xl font-bold text-slate-900 mt-0.5">{story.title}</h4>
            <p className="text-xs text-slate-500 font-medium">{readTimeMin} phút đọc</p>
          </div>

        
          {/* Danh sách các tab */}
          <div className="divide-y divide-slate-200 overflow-y-auto max-h-[calc(100vh-140px)]">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <div key={tab.key} className="bg-white">
                  <button
                    onClick={() => setActiveTab(tab.key)}
                    className={`w-full p-4 flex flex-col text-left transition-colors cursor-pointer border-b border-slate-100 ${
                      isActive
                        ? "bg-blue-50/70 border-l-4 border-blue-600"
                        : "bg-slate-50/85 hover:bg-slate-100/80"
                    }`}
                  >
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isActive ? "text-blue-600" : "text-slate-400"}`}>
                      {tab.step}
                    </span>
                    <h3 className={`text-base font-bold mt-0.5 ${isActive ? "text-blue-900" : "text-slate-800"}`}>
                      {tab.label.replace(/^\d+\.\s*/, "")}
                    </h3>
                    <p className="text-[12px] font-semibold text-slate-500 mt-1">
                      {tab.desc}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}

/* --- CÁC TAB NỘI DUNG BÊN DƯỚI GIỮ NGUYÊN HOẶC TINH CHỈNH GIAO DIỆN CHÚT CHO ĐỒNG BỘ --- */

function isVocabMatch(token: string, vocabWord: string): boolean {
  const c = token.toLowerCase();
  const w = vocabWord.toLowerCase();
  if (c === w) return true;
  const suffixes = ["ies", "ied", "es", "ing", "est", "er", "ed", "s"];
  return suffixes.some((suf) => c.endsWith(suf) && c.slice(0, c.length - suf.length) === w);
}

function highlightVocab(paragraph: string, vocab?: Story["vocab"]) {
  if (!vocab || vocab.length === 0) return paragraph;
  return paragraph.split(/(\s+)/).map((token, i) => {
    const clean = token.replace(/[.,!?;:]/g, "");
    const matched = vocab.some((v) => isVocabMatch(clean, v.word));
    if (matched) {
      return (
        <span key={i} className="bg-amber-100 text-red-700 font-semibold rounded px-1 -mx-0.5">
          {token}
        </span>
      );
    }
    return <span key={i}>{token}</span>;
  });
}

function ReadingTabContent({ story }: { story: Story }) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [speed, setSpeed] = useState<number>(0.9);

  useState(() => {
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
  });

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
    <div className="space-y-6">
      
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#384AB9]" />
          Nội dung bài đọc
        </h2>
        <span className="text-sm font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-md">
          {story.level}
        </span>
      </div>

      <div className="bg-[#f9f9fb] p-6 md:p-8 rounded-lg border border-slate-200 shadow-2xs space-y-4">
        <p className="text-sm text-slate-500">Đọc đoạn văn dưới đây, sau đó bấm "Nghe truyện" để luyện phát âm nhé.</p>
        <p className="text-[22px] md:text-[24px] font-medium leading-relaxed text-[#12217E]">
          {highlightVocab(story.paragraph, story.vocab)}
        </p>

        <div>
          <button
            onClick={() => setShowTranslation((v) => !v)}
            className="text-xs font-bold text-emerald-700 hover:underline cursor-pointer bg-emerald-50 px-4 py-2.5 rounded-lg border border-emerald-200 inline-block"
          >
            {showTranslation ? "Ẩn bản dịch" : "Xem bản dịch tiếng Việt"}
          </button>
          {showTranslation && (
            <p className="text-base leading-relaxed text-slate-600 mt-3 pt-3 border-t border-slate-100">
              {story.translation}
            </p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
        <button
          onClick={handleTogglePlay}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition cursor-pointer ${
            isPlaying ? "bg-amber-500 hover:bg-amber-600 text-white" : "bg-slate-900 hover:bg-slate-800 text-white"
          }`}
        >
          <Volume2 className="w-4 h-4" />
          {isPlaying ? "Dừng đọc" : "Nghe truyện"}
        </button>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3 py-2">
            <span className="text-xs text-slate-400">Giọng:</span>
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="text-xs font-medium text-slate-700 bg-transparent focus:outline-none cursor-pointer max-w-[130px] truncate"
            >
              {voices.map((v) => (
                <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-3 py-2">
            <span className="text-xs text-slate-400">Tốc độ:</span>
            <select
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="text-xs font-medium text-slate-700 bg-transparent focus:outline-none cursor-pointer"
            >
              <option value={0.7}>0.7x</option>
              <option value={0.85}>0.85x</option>
              <option value={0.9}>0.9x</option>
              <option value={1.0}>1.0x</option>
              <option value={1.25}>1.25x</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function VocabTabContent({ story }: { story: Story }) {
  const vocab = story.vocab ?? [];
  const handleSpeak = (word: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  if (vocab.length === 0) return <p className="text-sm text-slate-500 py-10 text-center">Truyện này chưa có từ vựng.</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#384AB9]" />
          Từ vựng trong bài
        </h2>
        <span className="text-sm font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-md">
          {vocab.length} từ
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {vocab.map((item, index) => (
          <div key={index} className="flex flex-col justify-between p-4 rounded-lg border border-slate-200 bg-white shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-lg border uppercase bg-slate-50 text-slate-600">
                {item.type || "word"}
              </span>
              <button
                onClick={() => handleSpeak(item.word)}
                className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-blue-600 border border-slate-200 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-slate-900 text-lg">{item.word}</span>
              {item.phonetic && <span className="text-xs text-slate-400 font-mono">{item.phonetic}</span>}
            </div>
            <p className="text-sm text-slate-600 border-t border-slate-100 pt-2">{item.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DictationTabContent({ story }: { story: Story }) {
  const sentences = story.paragraph.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const sentence = sentences[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < sentences.length - 1;

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
    setCurrentIndex(index);
    setChecked(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-[#384AB9]" />
          Nghe chép chính tả
        </h2>
        <span className="text-sm font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-md">
          Câu {currentIndex + 1} / {sentences.length}
        </span>
      </div>

      <div className="bg-white p-6 rounded-lg border border-slate-200 space-y-4 shadow-2xs">
        <div className="flex items-center gap-2">
          <button
            onClick={playSentence}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold text-sm cursor-pointer border border-blue-200"
          >
            <Volume2 className="w-4 h-4" /> Nghe câu này
          </button>
          <button
            onClick={playSentence}
            className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
            title="Nghe lại"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <input
          value={answers[currentIndex] ?? ""}
          onChange={(e) => setAnswers((prev) => ({ ...prev, [currentIndex]: e.target.value }))}
          placeholder="Gõ lại câu bạn vừa nghe..."
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
        />

        <button
          onClick={() => setChecked(true)}
          className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:opacity-90 cursor-pointer shadow-xs"
        >
          Kiểm tra
        </button>

        {checked && (
          <p className="text-sm leading-relaxed pt-3 border-t border-slate-100">
            {originalWords.map((word, i) => {
              const isCorrect = typedWords[i] === word;
              return (
                <span key={i} className={isCorrect ? "text-emerald-700 font-bold" : "text-red-500 underline font-bold"}>
                  {word}{" "}
                </span>
              );
            })}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => goTo(currentIndex - 1)}
          disabled={!hasPrev}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-200 disabled:opacity-30 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" /> Câu trước
        </button>
        <button
          onClick={() => goTo(currentIndex + 1)}
          disabled={!hasNext}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-200 disabled:opacity-30 cursor-pointer"
        >
          Câu sau <ChevronLeft className="w-4 h-4 rotate-180" />
        </button>
      </div>
    </div>
  );
}

function FillBlankTabContent({ story }: { story: Story }) {
  const blanks = story.blanks ?? [];
  const rawSentences = story.paragraph.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  if (blanks.length === 0 || rawSentences.length === 0) {
    return <p className="text-sm text-slate-500 py-10 text-center">Truyện này chưa có bài tập điền từ.</p>;
  }

  const mergedGroups: string[] = [];
  let tempText = "";
  rawSentences.forEach((sentence) => {
    const hasBlank = blanks.some((b) => sentence.toLowerCase().includes(b.toLowerCase()));
    tempText = tempText ? `${tempText} ${sentence}` : sentence;
    if (hasBlank) {
      mergedGroups.push(tempText);
      tempText = "";
    }
  });
  if (tempText && mergedGroups.length > 0) {
    mergedGroups[mergedGroups.length - 1] += ` ${tempText}`;
  } else if (tempText) {
    mergedGroups.push(tempText);
  }

  let totalBlanksCount = 0;
  let correctCount = 0;
  const answerKeyMap: Record<string, string> = {};

  mergedGroups.forEach((groupText, gIndex) => {
    let blankCounter = 0;
    const tokens = groupText.split(/(\s+)/);
    tokens.forEach((token) => {
      const cleanToken = token.replace(/[.,!?;:]/g, "");
      const matchedBlank = blanks.find((b) => b.toLowerCase() === cleanToken.toLowerCase());
      if (matchedBlank) {
        answerKeyMap[`${gIndex}-${blankCounter}`] = matchedBlank.toLowerCase();
        totalBlanksCount++;
        blankCounter++;
      }
    });
  });

  if (checked) {
    Object.keys(answerKeyMap).forEach((key) => {
      if ((answers[key] ?? "").trim().toLowerCase() === answerKeyMap[key]) correctCount++;
    });
  }

  const playGroup = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#384AB9]" />
          Điền từ trống vào câu
        </h2>
        <span className="text-sm font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-md">
          {totalBlanksCount} chỗ trống
        </span>
      </div>

      <div className="space-y-4">
        {mergedGroups.map((groupText, gIndex) => {
          let blankCounter = 0;
          const tokens = groupText.split(/(\s+)/);
          const renderedTokens = tokens.map((token, tIndex) => {
            const cleanToken = token.replace(/[.,!?;:]/g, "");
            const matchedBlank = blanks.find((b) => b.toLowerCase() === cleanToken.toLowerCase());
            if (matchedBlank) {
              const key = `${gIndex}-${blankCounter}`;
              blankCounter++;
              const userAnswer = answers[key] ?? "";
              const isCorrect = checked && userAnswer.trim().toLowerCase() === matchedBlank.toLowerCase();
              return (
                <input
                  key={tIndex}
                  value={userAnswer}
                  onChange={(e) => setAnswers((prev) => ({ ...prev, [key]: e.target.value }))}
                  placeholder="..."
                  className={`inline-block w-24 mx-1.5 px-3 py-2.5 rounded-lg border text-sm text-center focus:outline-none ${
                    checked
                      ? isCorrect
                        ? "border-emerald-400 bg-emerald-50 text-emerald-800 font-bold"
                        : "border-red-400 bg-red-50 text-red-700 font-bold"
                      : "border-slate-300 bg-white"
                  }`}
                />
              );
            }
            return <span key={tIndex}>{token}</span>;
          });

          return (
            <div key={gIndex} className="p-4 rounded-lg bg-[#F9F9F9] border border-slate-200 space-y-2 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Phần {gIndex + 1}</span>
                <button onClick={() => playGroup(groupText)} className="p-2 rounded-lg bg-white hover:bg-blue-100 text-blue-600 cursor-pointer border border-slate-200">
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="text-base leading-relaxed text-slate-800">{renderedTokens}</p>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-slate-100">
        <button
          onClick={() => setChecked(true)}
          className="px-5 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:opacity-90 cursor-pointer shadow-xs"
        >
          Kiểm tra tất cả đáp án
        </button>
        {checked && (
          <div className="text-sm font-bold text-slate-800 bg-white border border-slate-200 px-4 py-2.5 rounded-lg shadow-2xs">
            Kết quả: <span className={correctCount === totalBlanksCount ? "text-emerald-700" : "text-amber-600"}>{correctCount}/{totalBlanksCount}</span>
          </div>
        )}
      </div>
    </div>
  );
}