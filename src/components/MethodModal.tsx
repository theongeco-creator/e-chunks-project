import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { createPortal } from "react-dom";

interface MethodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLevel: (level: "A1" | "A2" | "B1") => void;
}

const STEPS = [
  {
    step: 1,
    title: "Phương pháp Self-talk là gì?",
    subtitle: "Tự hội thoại & Phản xạ tự nhiên",
    desc: "Self-talk (tự thoại hay tự nói chuyện một mình) bằng tiếng Anh theo kịch bản có sẵn, lặp lại đến khi thành phản xạ. Bạn có thể chọn chủ đề quen thuộc như 'Một ngày làm việc của tôi' hay 'Sở thích của tôi' rồi tự nói về nó mỗi ngày. Không cần bạn đồng hành, không sợ nói sai bị đánh giá — chỉ cần lặp lại đều đặn, phản xạ sẽ tự hình thành. Đây cũng là phương pháp nhiều người từng mất gốc tự học lại tiếng Anh thành công, không qua lớp học truyền thống.",
    image: "/images/step1-overview.png",
    badge: "Tổng quan",
  },
  
  {
    step: 3,
    title: "Kỹ năng 1 & 2: Reading & Listening",
    subtitle: "Input — Nạp từ vựng vào não bộ",
    desc: "Trước khi nói được, não cần được 'nạp' đủ mẫu câu đúng. Bạn đọc đoạn văn theo cụm từ đã được phân tích sẵn, đồng thời nghe phát âm chuẩn IPA của từng câu. Lặp lại bước này nhiều lần giúp não tự nhận diện cấu trúc câu và cách phát âm một cách tự nhiên, không cần cố học thuộc quy tắc ngữ pháp khô khan.",
    image: "/images/step2-listen-read.png",
    badge: "Kỹ năng 1 & 2",
  },
  {
    step: 4,
    title: "Kỹ năng 3: Speaking (Nói phản xạ)",
    subtitle: "Output — Bật mở cơ miệng & Nhại giọng",
    desc: "Đây là bước quan trọng nhất — biến kiến thức đã nạp thành phản xạ thật. Bạn áp dụng kỹ thuật Shadowing (nghe và nhại lại ngay lập tức, không có độ trễ) để luyện ngữ điệu như người bản xứ. Khi đã quen với các cụm từ thông dụng, bạn sẽ không cần dừng lại suy nghĩ từng từ nữa — câu nói bật ra tự nhiên như phản xạ. Không có ai chấm điểm, không có áp lực — bạn cứ nói, sai thì lặp lại, cho đến khi miệng quen dần với câu chữ.",
    image: "/images/step3-speaking.png",
    badge: "Kỹ năng 3",
  },
  {
    step: 5,
    title: "Kỹ năng 4: Writing (Ghi nhớ sâu)",
    subtitle: "Output — Củng cố phản xạ & Sửa lỗi",
    desc: "Nói được rồi vẫn cần một bước 'chốt hạ' để kiến thức không trôi đi mất. Bạn viết lại câu hoặc một đoạn nhật ký ngắn dựa trên nội dung vừa học. Việc tự tay viết ra buộc não phải xử lý lại toàn bộ ngữ pháp và từ vựng một lần nữa, theo cách chủ động hơn nghe hay đọc rất nhiều — đây là lý do bước này giúp nhớ từ vựng lâu hơn hẳn so với chỉ học qua nghe nhìn.",
    image: "/images/step4-writing.png",
    badge: "Kỹ năng 4",
  },
  {
    step: 5,
    title: "Sẵn sàng trải nghiệm?",
    subtitle: "Chọn lộ trình phù hợp với bạn",
    desc: "4 kỹ năng trên sẽ lặp lại xuyên suốt mọi bài học, chỉ khác nhau ở độ khó tùy theo lộ trình bạn chọn. Hãy chọn đúng cấp độ với tình trạng hiện tại của bạn để bắt đầu ngay nhé!",
    image: null,
    badge: "Bắt đầu ngay",
  },
];

export function MethodModal({ isOpen, onClose, onSelectLevel }: MethodModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleLevelClick = (level: "A1" | "A2" | "B1") => {
    onSelectLevel(level);
    onClose();
  };

  const stepData = STEPS[currentStep];

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      
      {/* KHUNG MODAL CHÍNH: ĐẶT CHIỀU CAO CỐ ĐỊNH TẠI ĐÂY (Vd: h-[580px] hoặc h-[620px]) */}
      <div className="relative w-full max-w-4xl h-[580px] sm:h-[580px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col">
        
        {/* HEADER MODAL */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              {stepData.badge}
            </span>
            <span className="text-xs font-medium text-slate-400">
              Bước {currentStep + 1} / 5
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NỘI DUNG CHÍNH: BUNG FULL CHIỀU CAO (flex-1 h-full) */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col justify-between">
          {currentStep < 4 ? (
            /* DẠNG CHIA 2 NỬA: CẢ 2 CỘT ĐỀU CAO FULL KHUNG (h-full) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
              
              {/* NỬA TRÁI: TEXT + NÚT BẤM CĂN DƯỚI CÙNG */}
              <div className="flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {stepData.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {stepData.title}
                  </h3>
                  {/* Sửa lại dòng này */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {stepData.desc}
                  </p>
                </div>

                {/* KHUNG ĐIỀU HƯỚNG TỰ ĐỘNG ĐẨY XUỐNG ĐÁY */}
                <div className="pt-4 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800 shrink-0">
                  <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-1 text-xs font-bold px-3 py-3 rounded-lg transition ${
                      currentStep === 0
                        ? "opacity-0 pointer-events-none"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Quay lại</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    {STEPS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentStep(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentStep === idx
                            ? "w-6 bg-blue-600"
                            : "w-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1 text-xs font-bold px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition cursor-pointer"
                  >
                    <span>Tiếp theo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* NỬA PHẢI: HÌNH TỰ ĐỘNG GIÃN FULL CHIỀU CAO KHUNG (h-full) */}
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center h-full relative overflow-hidden min-h-[280px]">
                {stepData.image ? (
                  <img
                    src={stepData.image}
                    alt={stepData.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="text-center space-y-2 p-4">
                    <Sparkles className="w-12 h-12 text-blue-500 mx-auto animate-pulse" />
                    <p className="text-xs font-medium text-slate-400">Hình minh họa {stepData.title}</p>
                  </div>
                )}
              </div>

            </div>
          ) : (
            /* STEP 5: 3 CARD CŨNG TỰ ĐỘNG SCALE FULL CHIỀU CAO */
            <div className="flex flex-col justify-between h-full space-y-6 text-center">
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {stepData.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg mx-auto">
                  {stepData.desc}
                </p>
              </div>

              {/* 3 CARDS GIÃN CAO FULL KHOẢNG TRỐNG (flex-1) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left flex-1 items-stretch">
                {/* CARD A1 */}
                <div
                  onClick={() => handleLevelClick("A1")}
                  className="bg-rose-500 p-3.5 rounded-2xl cursor-pointer transition-all hover:scale-[1.02] shadow-md flex flex-col justify-between h-full"
                >
                  <div className="flex items-center justify-between text-white px-1 pb-2.5 font-bold text-xs">
                    <span>A1 — Beginner</span>
                    <span>↗</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-4 flex flex-col justify-between flex-1 space-y-4">
                    <p className="text-[18px] sm:text-sm font-bold leading-relaxed text-slate-800 dark:text-slate-100">
                      Mất gốc lâu rồi, không nhớ nổi thì hiện tại đơn hay cách chào hỏi cơ bản? Bắt đầu lại từ đây.
                    </p>
                    <span className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-slate-800 text-rose-600 dark:text-rose-400 w-fit">
                      A1 – Cơ bản
                    </span>
                  </div>
                </div>

                {/* CARD A2 */}
                <div
                  onClick={() => handleLevelClick("A2")}
                  className="bg-indigo-600 p-3.5 rounded-2xl cursor-pointer transition-all hover:scale-[1.02] shadow-md flex flex-col justify-between h-full"
                >
                  <div className="flex items-center justify-between text-white px-1 pb-2.5 font-bold text-xs">
                    <span>A2 — Elementary</span>
                    <span>↗</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-4 flex flex-col justify-between flex-1 space-y-4">
                    <p className="text-[18px] sm:text-sm font-bold leading-relaxed text-slate-800 dark:text-slate-100">
                      Đã nói được câu đơn giản nhưng vẫn lúng túng khi kể chuyện, nói về kế hoạch hay công việc?
                    </p>
                    <span className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 w-fit">
                      A2 – Sơ cấp
                    </span>
                  </div>
                </div>

                {/* CARD B1 */}
                <div
                  onClick={() => handleLevelClick("B1")}
                  className="bg-emerald-600 p-3.5 rounded-2xl cursor-pointer transition-all hover:scale-[1.02] shadow-md flex flex-col justify-between h-full"
                >
                  <div className="flex items-center justify-between text-white px-1 pb-2.5 font-bold text-xs">
                    <span>B1 — Intermediate</span>
                    <span>↗</span>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-4 flex flex-col justify-between flex-1 space-y-4">
                    <p className="text-[18px] sm:text-sm font-bold leading-relaxed text-slate-800 dark:text-slate-100">
                      Giao tiếp ổn rồi nhưng muốn nói tự nhiên hơn, tranh luận hay trình bày ý kiến công việc?
                    </p>
                    <span className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 w-fit">
                      B1 – Trung cấp
                    </span>
                  </div>
                </div>
              </div>

              {/* FOOTER STEP 5 CŨNG CĂN ĐÁY NỔI BẬT */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 shrink-0">
                <button
                  onClick={handlePrev}
                  className="flex items-center gap-1 text-xs font-bold px-3 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Quay lại các bước</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {STEPS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentStep === idx
                          ? "w-6 bg-blue-600"
                          : "w-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="w-[110px]" />
              </div>
            </div>
          )}
        </div>

      </div>

    </div>,
    document.body
  );
}