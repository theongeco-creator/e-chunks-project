import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Play,
  Pause,
  Square,
  Volume2,
  Globe,
  Eye,
  EyeOff,
  Languages,
} from "lucide-react";
import type { Lesson } from "@/data/lessonData";
import { CHUNK_COLORS, CHUNK_COLOR_LIST } from "@/data/lessonData";
import { LessonCompletion } from "./LessonCompletion";

export function ReadingTab({ lesson }: { lesson: Lesson }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showColors, setShowColors] = useState(true);
  const [showTranslation, setShowTranslation] = useState(false);
  
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");

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

  // Hàm phát âm thanh cho từng từ/cụm từ khi bấm vào
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

  const renderParagraph = () => {
    const segments = lesson.readingSegments;
    if (!segments) {
      return <span style={{ color: 'var(--text-color)' }}>{lesson.paragraph}</span>;
    }

    return segments.map((seg, i) => {
      if (!showColors || !seg.type) {
        return (
          <span 
            key={i} 
            onClick={() => speakWordText(seg.text)}
            className="cursor-pointer hover:text-blue-500 transition-colors"
            style={{ color: 'var(--text-color)' }}
            title="Nhấn để nghe phát âm"
          >
            {seg.text}
          </span>
        );
      }
      const color = CHUNK_COLORS[seg.type];
      return (
        <span
          key={i}
          onClick={() => speakWordText(seg.text)}
          className={`${color.text} ${color.bg} ${color.border} border px-1.5 py-0.5 rounded-md font-medium transition-all cursor-pointer hover:opacity-80 inline-block my-0.5`}
          title={`${color.labelVi} (Nhấn để nghe)`}
        >
          {seg.text}
        </span>
      );
    });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 text-sm font-medium opacity-80" style={{ color: 'var(--text-color)' }}>
        <BookOpen className="w-4 h-4 text-blue-600" />
        Đọc đoạn văn bên dưới – các cụm từ được tô màu theo loại ngữ pháp.
      </div>

      {/* Audio Player */}
<div className="rounded-2xl border p-4 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2">
            {!isPlaying ? (
              <button
                onClick={handlePlay}
                className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors flex-shrink-0"
                aria-label="Phát âm thanh"
              >
                <Play className="w-5 h-5 ml-0.5" />
              </button>
            ) : isPaused ? (
              <button
                onClick={handleResume}
                className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors flex-shrink-0"
                aria-label="Tiếp tục"
              >
                <Play className="w-5 h-5 ml-0.5" />
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors flex-shrink-0"
                aria-label="Tạm dừng"
              >
                <Pause className="w-5 h-5" />
              </button>
            )}

            <button
              onClick={handleStop}
              disabled={!isPlaying}
              className="w-11 h-11 rounded-xl border flex items-center justify-center transition-colors flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
              aria-label="Dừng"
            >
              <Square className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 ml-1">
              <Volume2
                className={`w-4 h-4 ${
                  isPlaying && !isPaused
                    ? "text-blue-600 animate-pulse"
                    : "opacity-50"
                }`}
              />
              <span className="text-xs font-semibold opacity-80" style={{ color: 'var(--text-color)' }}>
                {!isPlaying
                  ? "Sẵn sàng"
                  : isPaused
                  ? "Tạm dừng"
                  : "Đang phát..."}
              </span>
            </div>
          </div>

          {/* Khung chọn giọng đọc động từ hệ thống */}
          <div className="flex items-center gap-2 sm:ml-auto">
            <Globe className="w-4 h-4 opacity-50 flex-shrink-0" />
            <div className="relative">
              <select
                value={selectedVoice}
                onChange={(e) => handleVoiceChange(e.target.value)}
                className="appearance-none border rounded-xl pl-3 pr-9 py-2.5 text-sm outline-none transition-colors cursor-pointer font-medium max-w-[220px] truncate"
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
      </div>

      {/* Color Legend & Toggle Button */}
<div className="rounded-2xl border p-4 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <p className="text-xs font-bold uppercase tracking-wider opacity-80" style={{ color: 'var(--text-color)' }}>
            Chú thích màu sắc (Color Legend)
          </p>

          <button
            onClick={() => setShowColors(!showColors)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border text-sm font-semibold transition-all shadow-sm w-fit"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
          >
            {showColors ? (
              <>
                <EyeOff className="w-3.5 h-3.5" /> Tắt tô màu
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" /> Bật tô màu
              </>
            )}
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {CHUNK_COLOR_LIST.map((c) => (
            <span
              key={c.type}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${c.bg} ${c.border} border text-xs ${c.text} font-semibold`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: c.hex }}
              />
              {c.labelVi}
            </span>
          ))}
        </div>
      </div>

{/* Paragraph & Translation Toggle */}
<div className="rounded-2xl border p-6 md:p-8 space-y-4 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}>
        <p className="text-xl leading-loose font-medium" style={{ color: 'var(--text-color)' }}>
          {renderParagraph()}
        </p>

        {/* Nút bật/tắt bản dịch tiếng Việt */}
        <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-semibold transition-all shadow-sm"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
          >
            <Languages className="w-4 h-4 text-blue-600" />
            {showTranslation ? "Ẩn bản dịch tiếng Việt" : "Xem bản dịch tiếng Việt"}
          </button>
        </div>

        {/* Nội dung bản dịch hiển thị khi bật */}
        {showTranslation && (
          <div className="p-4 rounded-xl border text-sm leading-relaxed animate-fadeIn" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}>
            <span className="font-bold block mb-1 text-xs uppercase tracking-wider text-blue-500">
              Bản dịch:
            </span>
            {lesson.translation}
          </div>
        )}
      </div>

      <p className="text-sm font-medium opacity-60" style={{ color: 'var(--text-color)' }}>
        Mẹo: Học thuộc lòng đoạn văn 7 - 10 lần trước khi sang tab Từ vựng để ghi nhớ cụm từ.
      </p>
      <LessonCompletion lessonId={lesson.day} currentTab="reading" />
    </div>
  );
}