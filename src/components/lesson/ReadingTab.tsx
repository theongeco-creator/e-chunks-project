import { useEffect, useRef, useState } from "react";
import { BookOpen, Play, Pause, Square, Volume2, Globe, Languages, HelpCircle, CheckCircle, X } from "lucide-react";
import type { Lesson, Chunk } from "@/data/lessonData";

interface ReadingTabProps{
  lesson: Lesson;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

import { CHUNK_COLORS, CHUNK_COLOR_LIST } from "@/data/lessonData";
import { LessonCompletion } from "./LessonCompletion";

export function ReadingTab({ lesson, isCompleted, onToggleComplete }: ReadingTabProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showColors, setShowColors] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showLegendModal, setShowLegendModal] = useState(false);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");

  // 👉 State cho tooltip nghĩa: lưu index của từ/cụm đang được bấm mở
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number | null>(null);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    const updateVoices = () => {
      if (!("speechSynthesis" in window)) return;
      const availableVoices = window.speechSynthesis.getVoices();
      const englishVoices = availableVoices.filter(v => v.lang.startsWith("en"));
      setVoices(englishVoices);

      if (englishVoices.length > 0 && !selectedVoice) {
        const defaultVoice = englishVoices.find(v => v.lang.includes("en-US")) || englishVoices[0];
        setSelectedVoice(defaultVoice.name);
      }
    };

    updateVoices();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, [selectedVoice]);

  // 👉 Đóng tooltip khi bấm ra ngoài vùng từ/cụm
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-reading-word]")) {
        setActiveSegmentIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handlePlay = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(lesson.paragraph);

    if (selectedVoice) {
      const v = voices.find(vo => vo.name === selectedVoice);
      if (v) {
        u.voice = v;
        u.lang = v.lang;
      }
    }

    u.rate = 0.9;
    u.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };
    u.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };
    utteranceRef.current = u;
    window.speechSynthesis.speak(u);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const handleResume = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  };

  const handleStop = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    utteranceRef.current = null;
  };

  const handleVoiceChange = (voiceName: string) => {
    setSelectedVoice(voiceName);
    if (isPlaying) {
      handleStop();
      setTimeout(() => {
        handlePlay();
      }, 100);
    }
  };

  const speakWordText = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      const v = voices.find((vo) => vo.name === selectedVoice);
      if (v) {
        u.voice = v;
        u.lang = v.lang;
      }
    }
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  };

  // 👉 Tìm chunk (nghĩa/phiên âm) khớp với đoạn văn bản đang bấm
  const findChunkForSegment = (text: string): Chunk | undefined => {
    const clean = text.trim().toLowerCase();
    if (!clean || !lesson.chunks) return undefined;

    return (
      lesson.chunks.find((c) => c.phrase.trim().toLowerCase() === clean) ||
      lesson.chunks.find(
        (c) =>
          clean.includes(c.phrase.trim().toLowerCase()) ||
          c.phrase.trim().toLowerCase().includes(clean)
      )
    );
  };

  const handleSegmentClick = (index: number, text: string) => {
    speakWordText(text);
    const chunk = findChunkForSegment(text);
    if (!chunk) {
      setActiveSegmentIndex(null);
      return;
    }
    setActiveSegmentIndex((prev) => (prev === index ? null : index));
  };

  const renderParagraph = () => {
    const segments = lesson.readingSegments;
    if (!segments) {
      return <span style={{ color: '#334155 !important' }}>{lesson.paragraph}</span>;
    }

    return segments.map((seg, i) => {
       // 👉 Nếu đoạn này chỉ là khoảng trắng (không có chữ thật) → render nguyên bản, KHÔNG bọc inline-block
    if (!seg.text.trim()) {
      return <span key={i}>{seg.text}</span>;
    }
      const isTooltipOpen = activeSegmentIndex === i;
      const chunk = isTooltipOpen ? findChunkForSegment(seg.text) : undefined;

      if (!showColors || !seg.type) {
        return (
          <span key={i} className="relative inline-block" data-reading-word>
            <span
              onClick={() => handleSegmentClick(i, seg.text)}
              className="cursor-pointer hover:text-blue-500 transition-colors"
              style={{ color: '#334155 !important' }}
              title="Nhấn để nghe phát âm và xem nghĩa"
            >
              {seg.text}
            </span>

            {isTooltipOpen && chunk && (
              <ReadingTooltip chunk={chunk} onClose={() => setActiveSegmentIndex(null)} />
            )}
          </span>
        );
      }

      const color = CHUNK_COLORS[seg.type];
      return (
        <span key={i} className="relative inline-block my-0.5" data-reading-word>
          <span
            onClick={() => handleSegmentClick(i, seg.text)}
            className={`${color.text} ${color.bg} ${color.border} px-2 py-1 rounded-md font-medium transition-all cursor-pointer hover:opacity-80 inline-block`}
            title={`${color.labelVi} (Nhấn để nghe & xem nghĩa)`}
          >
            {seg.text}
          </span>

          {isTooltipOpen && chunk && (
            <ReadingTooltip chunk={chunk} onClose={() => setActiveSegmentIndex(null)} />
          )}
        </span>
      );
    });
  };

  return (
    <div className="space-y-6">

      {/* 1. TIÊU ĐỀ & CÁC NÚT ĐIỀU KHIỂN (Chú thích màu & Bản dịch) */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-base font-bold" style={{ color: 'var(--text-color)' }}>
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span> Đọc đoạn văn</span>
          </div>
          <p className="text-[14px] font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
            Đọc hiểu đoạn văn sau và nhấn vào từ/cụm để nghe.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`p-3 rounded-md border flex items-center gap-1.5 text-xs font-semibold shadow-2xs cursor-pointer transition ${
              showTranslation ? "bg-blue-50 border-blue-300 text-blue-600" : ""
            }`}
            style={!showTranslation ? { backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' } : {}}
            title="Xem hoặc ẩn bản dịch tiếng Việt"
          >
            <Languages className="w-4 h-4 text-blue-600" />
            <span>{showTranslation ? "Ẩn bản dịch" : "Bản dịch"}</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setShowLegendModal(!showLegendModal)}
              className="p-3 rounded-md border flex items-center gap-2 text-xs font-semibold shadow-2xs cursor-pointer transition"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
              title="Chú thích màu sắc các cụm từ"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Chú thích màu</span>
            </button>

            {showLegendModal && (
              <div className="absolute right-0 mt-2 w-80 p-4 rounded-lg border shadow-xl bg-white z-20 space-y-3" >
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold opacity-80">
                    Phân loại cụm từ ngữ pháp
                  </span>
                  <button
                    onClick={() => setShowColors(!showColors)}
                    className="text-[13px] font-semibold text-blue-600 hover:underline cursor-pointer"
                  >
                    {showColors ? "Tắt màu" : "Bật màu"}
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto">
                  {CHUNK_COLOR_LIST.map((c) => (
                    <span
                      key={c.type}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md ${c.bg} ${c.border} border text-[11px] ${c.text} font-semibold`}
                      >
                      {c.labelVi}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. ĐOẠN VĂN ĐỌC CHÍNH */}
      <div className="rounded-lg p-6 md:p-8 space-y-2 border-2 transition-colors bg-[#ffffff] duration-300 shadow-2xs" >
        <p className="text-[25px] leading-relaxed text-[#080955] font-semibold">
          {renderParagraph()}
        </p>

        {showTranslation && (
          <div className="p-4 rounded-lg border text-sm leading-relaxed animate-fadeIn mt-4 pt-4 border-t" style={{ backgroundColor: '#0f172a', borderColor: 'var(--border-color)', color: '#e2e8f0' }}>
            <span className="font-bold block mb-1 text-xs uppercase tracking-wider text-blue-400">
              Bản dịch tiếng Việt:
            </span>
            {lesson.translation}
          </div>
        )}
      </div>

      {/* 3. THANH VOICE Ở CUỐI */}
      <div className="rounded-lg border p-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}>
        <div className="flex items-center gap-2">
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:bg-blue-700 transition cursor-pointer"
              aria-label="Phát âm thanh"
            >
              <Play className="w-4 h-4 ml-0.5" />
              Nghe đoạn văn
            </button>
          ) : isPaused ? (
            <button
              onClick={handleResume}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:bg-blue-700 transition cursor-pointer"
            >
              <Play className="w-4 h-4 ml-0.5" />
              Tiếp tục
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 text-white font-semibold text-sm shadow-md hover:bg-amber-600 transition cursor-pointer"
            >
              <Pause className="w-4 h-4" />
              Tạm dừng
            </button>
          )}

          <button
            onClick={handleStop}
            disabled={!isPlaying}
            className="w-11 h-11 rounded-lg border flex items-center justify-center transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
            title="Dừng phát"
          >
            <Square className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 opacity-50 flex-shrink-0" />
          <div className="relative">
            <select
              value={selectedVoice}
              onChange={(e) => handleVoiceChange(e.target.value)}
              className="appearance-none border rounded-lg pl-3 pr-8 py-2 text-xs outline-none transition cursor-pointer font-medium max-w-[200px] truncate"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
            >
              {voices.map((v) => (
                <option key={v.name} value={v.name} style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* KHUNG HOÀN THÀNH */}
      <div 
        className="flex items-center justify-between p-4 rounded-xl border bg-slate-50 dark:bg-slate-900/50"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-semibold" style={{ color: "var(--text-color)" }}>
            Sao rồi, thấy ok hong ní?
          </span>
          <span className="text-[12px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Không ai chấm điểm đâu, tự check nếu thực sự hiểu nha bà
          </span>
        </div>

        <button
          onClick={onToggleComplete}
          className={`px-5 py-3 rounded-md font-semibold text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer ${
            isCompleted
              ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/20"
              : "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-slate-900/10"
          }`}
        >
          <CheckCircle className={`w-4 h-4 ${isCompleted ? "fill-white text-emerald-600" : "text-slate-400"}`} />
          <span>   {isCompleted ? "Ngon lành cành đào " : "Hiểu rùi thì cho 1 tick"}
         </span>
        </button>
      </div>
    </div>
  );
}

/* 👉 Popup nhỏ hiện nghĩa + phiên âm khi bấm vào 1 cụm từ trong bài đọc */
function ReadingTooltip({ chunk, onClose }: { chunk: Chunk; onClose: () => void }) {
  return (
    <span
      onClick={(e) => e.stopPropagation()}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-30 w-64 max-w-[80vw] p-3.5 rounded-lg border bg-white shadow-xl text-left cursor-default"
      style={{ borderColor: "#e2e8f0" }}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-slate-400 hover:text-slate-700 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <div className="space-y-1.5 pr-4">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-bold text-slate-900 text-sm">{chunk.phrase}</span>
          {chunk.pronunciation && (
            <span className="text-xs text-slate-400 font-mono">{chunk.pronunciation}</span>
          )}
        </div>
        <p className="text-sm text-blue-700 font-semibold">{chunk.meaning}</p>
        {chunk.context && (
          <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-1.5 mt-1.5">
            {chunk.context}
          </p>
        )}
      </div>
    </span>
  );
}