import type { VocabWord } from "../../data/types";
import { CHUNK_COLORS } from "../../data/chunkColors";
import { Volume2 } from "lucide-react"; // Import icon cái loa từ lucide-react

interface VocabWordCardProps {
  word: VocabWord;
}

export function VocabWordCard({ word }: VocabWordCardProps) {
  const color = CHUNK_COLORS[word.type];

  // Hàm phát âm từ vựng bằng Web Speech API có sẵn của trình duyệt
  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation(); // Ngăn việc bấm vào nút loa bị ăn lẹm vào sự kiện click của cả card (nếu có)
    if (!("speechSynthesis" in window)) {
      alert("Trình duyệt của ní không hỗ trợ phát âm!");
      return;
    }

    window.speechSynthesis.cancel(); // Hủy các âm thanh đang đọc dở trước đó để tránh bị chồng giọng
    const utterance = new SpeechSynthesisUtterance(word.word);
    utterance.lang = "en-US"; // Chọn giọng tiếng Anh (Mỹ)
    utterance.rate = 0.9; // Tốc độ đọc chậm lại một chút cho dễ nghe (0.9 thay vì 1.0)
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className={`rounded-2xl p-5 border ${color.bg} ${color.border} shadow-sm hover:scale-[1.02] transition-all cursor-pointer flex flex-col gap-2 relative group`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-[11px] font-bold uppercase tracking-wide ${color.text}`}>
          {color.labelVi}
        </span>
        <div className="flex items-center gap-2">
          {/* Nút bấm phát âm tích hợp icon cái loa */}
          <button
            onClick={handleSpeak}
            className="p-1.5 rounded-lg bg-white/80 hover:bg-white text-slate-700 shadow-sm transition cursor-pointer flex items-center justify-center"
            title="Nghe phát âm"
          >
            <Volume2 className="w-4 h-4 text-blue-600" />
          </button>
          
          <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white text-slate-700 shadow-sm">
            {word.level}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
        {word.word}
      </h3>
      <p className="text-sm text-slate-500 italic">{word.phonetic}</p>
      <p className="text-sm font-semibold text-slate-800">{word.meaning}</p>

      <div className="mt-2 pt-2 border-t border-slate-200/70 space-y-1">
        <p className="text-sm text-slate-700">{word.example}</p>
        <p className="text-sm text-slate-500">{word.exampleMeaning}</p>
      </div>
    </div>
  );
}