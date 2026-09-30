import React, { useState, useEffect } from "react";
import { Volume2, Info, BookOpen } from "lucide-react";
import { MONOPHTHONGS, DIPHTHONGS, CONSONANTS, IPASymbol } from "../data/ipaData";
import { IPACard } from "../components/IPACard";
import { Button } from "../components/Button";


type FilterType = "all" | "vowel" | "consonant";

export function IPAPage() {
  const [selectedSymbol, setSelectedSymbol] = useState<IPASymbol | null>(MONOPHTHONGS[0]);
  const [filter, setFilter] = useState<FilterType>("all");

  const filterOptions: { key: FilterType; label: string }[] = [
    { key: "all", label: "Tất cả" },
    { key: "vowel", label: "Nguyên âm" },
    { key: "consonant", label: "Phụ âm" },
  ];

  const handlePlayAudio = (word: string) => {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(word);
  const voice = voices.find((v) => v.voiceURI === voiceURI);
  if (voice) {
    u.voice = voice;
    u.lang = voice.lang;
  } else {
    u.lang = "en-US";
  }
  u.rate = 1;
  window.speechSynthesis.speak(u);
};

  const showVowels = filter === "all" || filter === "vowel";
  const showConsonants = filter === "all" || filter === "consonant";

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
const [voiceURI, setVoiceURI] = useState<string>(() => {
  try {
    return localStorage.getItem("ipa-voice") || "";
  } catch {
    return "";
  }
});

useEffect(() => {
  if (!("speechSynthesis" in window)) return;
  const loadVoices = () => {
    const en = window.speechSynthesis
      .getVoices()
      .filter((v) => v.lang.toLowerCase().startsWith("en"));
    setVoices(en);
  };
  loadVoices();
  // Trình duyệt load giọng bất đồng bộ nên phải nghe sự kiện này
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
  return () =>
    window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
}, []);

const handleChangeVoice = (uri: string) => {
  setVoiceURI(uri);
  try {
    localStorage.setItem("ipa-voice", uri);
  } catch {
    // bỏ qua nếu localStorage bị chặn
  }
};

  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* HEADER PAGE */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Interactive Phonemic Chart (IPA)
        </h1>
        <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
          Nhấp vào từng ký tự phiên âm để lắng nghe phát âm chuẩn và xem các ví dụ minh họa trực quan.
        </p>
      </div>

      {/* BỘ LỌC IPA (3 TAB) + ĐƯỜNG LINE PHÂN CÁCH */}
      <div className="pb-5 border-b border-slate-200 dark:border-zinc-700 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setFilter(option.key)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer border ${
                filter === option.key
                  ? "bg-slate-900 text-white border-slate-900 dark:bg-[#37383F] dark:text-white dark:border-zinc-500 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 dark:bg-dark-bg dark:text-slate-300 dark:border-zinc-700 dark:hover:bg-[#37383F]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* LAYOUT CHÍNH: 2 CỘT (2/3 BẢNG IPA - 1/3 CHI TIẾT) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* CỘT TRÁI (2 CỘT): KHU VỰC BẢNG BÀI HỌC IPA */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* PHẦN 1: NGUYÊN ÂM (VOWELS) */}
          {showVowels && (
            <div className="bg-slate-50/70 dark:bg-[#191A22] p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-700 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  Nguyên âm (Vowels)
                </h2>
                <span className="text-xs text-slate-400 font-medium">20 âm gốc</span>
              </div>

              {/* Monophthongs - Nguyên âm đơn */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Nguyên âm đơn (Monophthongs)
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {MONOPHTHONGS.map((item) => (
                    <IPACard
                      key={item.id}
                      item={item}
                      isSelected={selectedSymbol?.id === item.id}
                      onSelect={setSelectedSymbol}
                    />
                  ))}
                </div>
              </div>

              {/* Diphthongs - Nguyên âm đôi */}
              <div className="space-y-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Nguyên âm đôi (Diphthongs)
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {DIPHTHONGS.map((item) => (
                    <IPACard
                      key={item.id}
                      item={item}
                      isSelected={selectedSymbol?.id === item.id}
                      onSelect={setSelectedSymbol}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PHẦN 2: PHỤ ÂM (CONSONANTS) */}
          {showConsonants && (
            <div className="bg-slate-50/70 dark:bg-[#191A22] p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-700 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  Phụ âm (Consonants)
                </h2>
                <span className="text-xs text-slate-400 font-medium">24 âm gốc</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {CONSONANTS.map((item) => (
                  <IPACard
                    key={item.id}
                    item={item}
                    isSelected={selectedSymbol?.id === item.id}
                    onSelect={setSelectedSymbol}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CỘT PHẢI (1 CỘT): SIDEBAR HIỂN THỊ CHI TIẾT ÂM ĐANG CHỌN */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6">
          {selectedSymbol ? (
            <div className="bg-white dark:bg-[#0B0C12] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="text-center space-y-3 pb-6 border-b border-slate-100 dark:border-slate-800">
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-400 uppercase tracking-wider">
                  {selectedSymbol.type} {selectedSymbol.subtype && `• ${selectedSymbol.subtype}`}
                </span>
                
                <div className="text-5xl font-extrabold text-slate-900 dark:text-white font-mono">
                  /{selectedSymbol.symbol}/
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handlePlayAudio(selectedSymbol.exampleWord)}
                  icon={<Volume2 className="w-4 h-4" />}
                >
                  Nghe âm chuẩn
                </Button>

                {voices.length > 1 && (
                  <select
                    value={voiceURI}
                    onChange={(e) => handleChangeVoice(e.target.value)}
                    aria-label="Chọn giọng đọc"
                    className="max-w-[170px] px-3 py-2.5 rounded-lg border border-slate-200 dark:border-zinc-700 bg-white dark:bg-dark-bg text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:border-[#513DEB] cursor-pointer"
                  >
                    <option value="">Giọng mặc định</option>
                    {voices.map((v) => (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {v.name} ({v.lang})
                      </option>
                    ))}
                  </select>
                )}
              </div>
              </div>

              {/* Mẫu từ ví dụ */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  Từ ví dụ tiêu biểu
                </h4>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-100 dark:border-zinc-700 flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      {selectedSymbol.exampleWord}
                    </p>
                    <p className="text-xs text-slate-400">Chứa phát âm /{selectedSymbol.symbol}/</p>
                  </div>
                  <BookOpen className="w-5 h-5 text-slate-400" />
                </div>
              </div>

              {/* Mẹo phát âm */}
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-amber-900 dark:text-amber-200 text-xs leading-relaxed space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-600 shrink-0" />
                  Mẹo phát âm
                </p>
                <p>
                  Chú ý khẩu hình miệng khi phát âm, giữ vị trí lưỡi thả lỏng và điều tiết luồng hơi đều đặn.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
              Bấm vào bất kỳ âm nào để xem chi tiết
            </div>
          )}
        </div>

      </div>
    </div>
  );
}