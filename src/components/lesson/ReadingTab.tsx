import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Play,
  Pause,
  Square,
  Settings2,
  Languages,
  HelpCircle,
  Check,
  ArrowRight,
  RotateCcw,
  X,
} from "lucide-react";
import type { Lesson, Chunk } from "@/data/lessonData";
import { CHUNK_COLORS, CHUNK_COLOR_LIST } from "@/data/lessonData";
import { Button } from "@/components/Button";
import { createPortal } from "react-dom";

interface ReadingTabProps {
  lesson: Lesson;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
  onNextTab?: () => void;
}

export function ReadingTab({
  lesson,
  isCompleted,
  onToggleComplete,
  onNextTab,
}: ReadingTabProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showColors, setShowColors] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showLegendModal, setShowLegendModal] = useState(false);
  const [showVoiceMenu, setShowVoiceMenu] = useState(false);
  
  // 👉 State điều khiển Modal xác nhận chuyển tab
  const [showConfirmNextModal, setShowConfirmNextModal] = useState(false);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const SPEED_OPTIONS = [0.7, 0.9, 1, 1.25] as const;

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
      const englishVoices = availableVoices.filter((v) => v.lang.startsWith("en"));
      setVoices(englishVoices);

      if (englishVoices.length > 0 && !selectedVoice) {
        const defaultVoice = englishVoices.find((v) => v.lang.includes("en-US")) || englishVoices[0];
        setSelectedVoice(defaultVoice.name);
      }
    };

    updateVoices();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, [selectedVoice]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-reading-word]")) {
        setActiveSegmentIndex(null);
      }
      if (!target.closest("[data-voice-menu]")) {
        setShowVoiceMenu(false);
      }
      if (!target.closest("[data-legend-menu]")) {
        setShowLegendModal(false);
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
      const v = voices.find((vo) => vo.name === selectedVoice);
      if (v) {
        u.voice = v;
        u.lang = v.lang;
      }
    }

    u.rate = speechRate;
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
    setShowVoiceMenu(false);
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
    u.rate = speechRate;
    window.speechSynthesis.speak(u);
  };

  const findChunkForSegment = (text: string): Chunk | undefined => {
    const clean = text.trim().toLowerCase();
    if (!clean || !lesson.chunks) return undefined;

    const exactMatch = lesson.chunks.find(
      (c) => c.phrase.trim().toLowerCase() === clean
    );
    if (exactMatch) return exactMatch;

    if (clean.length <= 2) return undefined;

    return lesson.chunks.find((c) => {
      const phraseClean = c.phrase.trim().toLowerCase();
      return clean.includes(phraseClean) || phraseClean.includes(clean);
    });
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
      return <span style={{ color: "#080955" }}>{lesson.paragraph}</span>;
    }

    return segments.map((seg, i) => {
      if (seg.text.includes("\n")) {
        const parts = seg.text.split("\n");
        return (
          <span key={i}>
            {parts.map((part, pIdx) => (
              <span key={pIdx}>
                {part}
                {pIdx < parts.length - 1 && <br className="my-1" />}
              </span>
            ))}
          </span>
        );
      }

      if (!seg.text.trim()) {
        return <span key={i}>{"\u00A0"}</span>;
      }

      const isTooltipOpen = activeSegmentIndex === i;
      const chunk = isTooltipOpen ? findChunkForSegment(seg.text) : undefined;

      if (!showColors || !seg.type) {
        return (
          <span key={i} className="relative inline" data-reading-word>
            <span
              onClick={() => handleSegmentClick(i, seg.text)}
              className="cursor-pointer transition-colors hover:underline"
              style={{ color: "#080955" }}
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
            className={`${color?.text || ""} ${color?.bg || ""} px-1.5 py-0.5 mx-0.5 rounded-md cursor-pointer transition-colors inline-line`}
            title={`${color?.labelVi || ""} (Nhấn để nghe & xem nghĩa)`}
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
    <div className="max-w-4xl mx-auto space-y-4 pb-28">
      {/* ============ 1. HEADER NHẸ ============ */}
      <div className="flex items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2 text-base font-bold" style={{ color: "var(--text-color)" }}>
            <BookOpen className="w-5 h-5 text-brand-500" />
            <span>Reading</span>
          </div>
          <p className="text-[13px] font-medium opacity-60" style={{ color: "var(--text-color)" }}>
            Đọc hiểu đoạn văn sau và nhấn vào từ/cụm để nghe trong bài: {lesson.title}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`w-9 h-9 rounded-lg border flex items-center justify-center transition cursor-pointer ${
              showTranslation ? "bg-brand-soft border-brand-500 text-brand-500" : "border-neutral-border text-neutral-textSecondary hover:bg-neutral-bg"
            }`}
            title="Xem hoặc ẩn bản dịch tiếng Việt"
            aria-label="Bản dịch"
          >
            <Languages className="w-4 h-4" />
          </button>

            {/* Nút chú thích màu */}
          <div className="relative" data-legend-menu>
            <button
              onClick={() => setShowLegendModal(!showLegendModal)}
              className="w-9 h-9 rounded-lg border border-neutral-border text-neutral-textSecondary flex items-center justify-center hover:bg-neutral-bg transition cursor-pointer"
              title="Chú thích màu sắc các cụm từ"
              aria-label="Chú thích màu"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {showLegendModal && (
              <div className="absolute right-0 mt-2 w-80 p-4 rounded-lg border shadow-xl bg-white z-20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold opacity-80">Phân loại cụm từ ngữ pháp</span>
                  <button
                    onClick={() => setShowColors(!showColors)}
                    className="text-[13px] font-semibold text-brand-500 hover:underline cursor-pointer"
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

      {/* ============ 2. CARD NỘI DUNG ĐỌC ============ */}
      <div
        data-reading-card
        className="rounded-2xl border shadow-xs p-6"
        style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg)" }}
      >
        {showTranslation ? (
          <div className="space-y-2 animate-fadeIn">
            <p className="text-[22px] sm:text-[24px] leading-relaxed font-semibold whitespace-pre-line" style={{ color: "#080955" }}>
              {lesson.translation}
            </p>
          </div>
        ) : (
          <p className="text-[22px] sm:text-[24px] leading-relaxed font-semibold whitespace-pre-line" style={{ color: "#080955" }}>
            {renderParagraph()}
          </p>
        )}
      </div>

      {/* ============ 3. BOTTOM ACTION BAR ============ */}
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between gap-4 py-3 px-4 sm:px-6">
          
          {/* Nhóm nút Trái */}
          <div className="flex items-center gap-2">
            {!isPlaying ? (
              <Button variant="primary" size="md" icon={<Play className="w-4 h-4" />} onClick={handlePlay}>
                Nghe đoạn văn
              </Button>
            ) : isPaused ? (
              <Button variant="primary" size="md" icon={<Play className="w-4 h-4" />} onClick={handleResume}>
                Tiếp tục
              </Button>
            ) : (
              <Button variant="secondary" size="md" icon={<Pause className="w-4 h-4" />} onClick={handlePause}>
                Tạm dừng
              </Button>
            )}

            <button
              onClick={handleStop}
              disabled={!isPlaying}
              className="w-10 h-10 rounded-xl border flex items-center justify-center transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-slate-800"
              style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
              title="Dừng phát"
            >
              <Square className="w-4 h-4" />
            </button>

            {/* Menu Cài đặt giọng đọc */}
            <div className="relative" data-voice-menu>
              <button
                onClick={() => setShowVoiceMenu(!showVoiceMenu)}
                className="w-10 h-10 rounded-xl border flex items-center justify-center transition cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800"
                style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
                title="Chọn tốc độ & giọng đọc"
                aria-label="Cài đặt phát âm"
              >
                <Settings2 className="w-4 h-4 opacity-70" />
              </button>

              {showVoiceMenu && (
                <div className="absolute left-0 bottom-full mb-3 w-64 p-3 rounded-2xl border shadow-2xl bg-white dark:bg-slate-900 z-50 space-y-2.5">
                  <div className="px-1">
                    <span className="text-[11px] font-bold uppercase text-slate-400">Tốc độ</span>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      {SPEED_OPTIONS.map((rate) => (
                        <button
                          key={rate}
                          onClick={() => {
                            setSpeechRate(rate);
                            if (isPlaying) {
                              handleStop();
                              setTimeout(handlePlay, 100);
                            }
                          }}
                          className={`flex-1 text-xs font-semibold py-1.5 rounded-lg cursor-pointer transition ${
                            speechRate === rate
                              ? "bg-[#513DEB] text-white"
                              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          {rate}x
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="px-1 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span className="text-[11px] font-bold uppercase text-slate-400">Giọng đọc</span>
                    <div className="mt-1.5 max-h-40 overflow-y-auto space-y-0.5">
                      {voices.map((v) => (
                        <button
                          key={v.name}
                          onClick={() => handleVoiceChange(v.name)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium truncate cursor-pointer ${
                            v.name === selectedVoice
                              ? "bg-[#513DEB]/10 text-[#513DEB] dark:text-[#9084f3] font-bold"
                              : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                          }`}
                        >
                          {v.name} ({v.lang})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Nhóm nút bên phải: Hoàn thành & Kỹ năng tiếp theo */}
            <div className="flex items-center gap-3">
            {/* Nút Đánh dấu Hoàn thành */}
            <Button
              variant={isCompleted ? "ghost" : "outline"}
              size="md"
              onClick={onToggleComplete}
              icon={<Check className="w-4 h-4" />}
            >
              {isCompleted ? "Đã hoàn thành" : "Hoàn thành"}
            </Button>

            {/* CHỈ HIỆN nút "Kỹ năng tiếp theo" KHI ĐÃ HOÀN THÀNH */}
            {isCompleted && onNextTab && (
              <Button
                variant="dark"
                size="md"
                onClick={() => setShowConfirmNextModal(true)}
                className="bg-[#513DEB] hover:bg-[#4332ca] text-white"
              >
                Kỹ năng tiếp theo &rarr;
              </Button>
            )}
          </div>

        </div>
      </div>

      {/* ============ 4. MODAL XÁC NHẬN CHUYỂN KỸ NĂNG ============ */}

      {showConfirmNextModal &&
      createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 max-w-md w-full shadow-2xl space-y-5 animate-scaleUp">
            
            <div className="w-12 h-12 rounded-2xl bg-[#513DEB]/10 dark:bg-[#513DEB]/20 flex items-center justify-center text-[#513DEB] dark:text-[#9084f3]">
              <ArrowRight className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Chuyển sang kỹ năng tiếp theo?
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Bạn đã hoàn thành phần <strong>Đọc hiểu (Reading)</strong>. Bạn muốn chuyển tiếp sang kỹ năng tiếp theo hay ở lại để ôn tập thêm?
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowConfirmNextModal(false)}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Ở lại ôn bài
              </button>

              <button
                onClick={() => {
                  setShowConfirmNextModal(false);
                  if (onNextTab) onNextTab(); // 👈 Kích hoạt chuyển tab
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[#513DEB] hover:bg-[#4332ca] text-white text-sm font-semibold transition cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#513DEB]/25"
              >
                <span>Chuyển ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>,
    document.body
  )}
    </div>
  );
}

function ReadingTooltip({ chunk, onClose }: { chunk: Chunk; onClose: () => void }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shiftX, setShiftX] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const PADDING = 12;
    const rect = el.getBoundingClientRect();
    let delta = 0;

    if (rect.left < PADDING) {
      delta = PADDING - rect.left;
    } else if (rect.right > window.innerWidth - PADDING) {
      delta = window.innerWidth - PADDING - rect.right;
    }

    if (delta !== 0) setShiftX(delta);
  }, []);

  return (
    <span
      ref={ref}
      onClick={(e) => e.stopPropagation()}
      /* Đã đổi background thành bg-white, viền border-slate-200/80 và chữ tối màu */
      className="absolute bottom-full mb-2 z-50 w-64 max-w-[85vw] p-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-800 shadow-xl text-left cursor-default animate-in fade-in zoom-in-95 duration-150"
      style={{
        left: "50%",
        transform: `translateX(calc(-50% + ${shiftX}px))`,
      }}
    >
      {/* Mũi tên viền xám + nhân trắng trỏ xuống cụm từ */}
      <span 
        className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-200"
        style={{ transform: `translateX(calc(-50% - ${shiftX}px))` }}
      />
      <span 
        className="absolute top-[calc(100%-1.5px)] left-1/2 -translate-x-1/2 border-[7px] border-transparent border-t-white"
        style={{ transform: `translateX(calc(-50% - ${shiftX}px))` }}
      />

      <button
        onClick={onClose}
        className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-700 cursor-pointer transition p-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <div className="space-y-1.5 pr-4">
      {/* Cụm từ tiếng Anh */}
      <p className="font-bold text-indigo-600 text-sm leading-snug">
        {chunk.phrase}
      </p>

      {/* IPA xuống hẳn 1 dòng riêng ở dưới */}
      {chunk.pronunciation && (
        <p className="text-xs text-slate-400 font-mono -mt-0.5">
          {chunk.pronunciation}
        </p>
      )}
      
      {/* Nghĩa của cụm từ (Đã fix lỗi chính tả text-slate-600) */}
      <p className="text-xs text-slate-600 font-bold">{chunk.meaning}</p>
      
      {/* Ngữ cảnh ví dụ */}
      {chunk.context && (
        <p className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-1.5 mt-1.5">
          {chunk.context}
        </p>
      )}
    </div>
    </span>
  );
}