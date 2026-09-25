import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Sparkles, ArrowUpRight } from "lucide-react";
import { createPortal } from "react-dom";
import { Button } from "@/components/Button"; // Cập nhật đường dẫn import Button đúng với dự án của bạn

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
    desc: "Self-talk là phương pháp tự nói chuyện với chính mình bằng tiếng Anh theo kịch bản chuẩn, Một trong những cách đơn giản nhất để thực hành self-talk là tự luyện nói về các chủ đề quen thuộc trong cuộc sống hàng ngày. Người học có thể chọn một chủ đề như 'Một ngày làm việc của tôi', 'Sở thích của tôi' hoặc 'Kỳ nghỉ yêu thích của tôi' và bắt đầu nói chuyện với chính mình về chủ đề đó. Mục tiêu là diễn đạt ý tưởng một cách tự nhiên và liên tục trong một khoảng thời gian nhất định, ví dụ như 3-5 phút.  Đây cũng là cách nhiều người từng mất gốc tự học lại tiếng Anh thành công, không qua lớp học truyền thống.",
    image: "/images/step1-overview.png",
    badge: "Tổng quan",
  },
  {
    step: 2,
    title: "Kỹ năng 1 & 2: Reading & Listening",
    subtitle: "Input — Nạp từ vựng & Cụm từ chuẩn",
    desc: "Muốn nói được (Output), bạn phải nạp đủ dữ liệu chuẩn (Input). Bạn sẽ đọc văn bản được phân tách sẵn thành từng cụm từ có nghĩa (Chunks) kèm phiên âm IPA chuẩn và giải nghĩa chi tiết. Kết hợp vừa đọc vừa nghe file âm thanh bản xứ giúp não bộ ghi nhớ cách ghép từ chuẩn ngữ pháp và nhận diện ngữ điệu, nối âm một cách tự nhiên.",
    image: "/images/step2-listen-read.png",
    badge: "Kỹ năng 1 & 2",
  },
  {
    step: 3,
    title: "Kỹ năng 3: Speaking (Nói phản xạ)",
    subtitle: "Output — Bật mở cơ miệng & Kỹ thuật Shadowing",
    desc: "Bước quyết định giúp bạn biến kiến thức trên trang sách thành phản xạ giao tiếp. Bạn ứng dụng kỹ thuật Shadowing (Nghe và nhại lại lập tức) theo đúng ngữ điệu, trọng âm và tốc độ của người bản xứ. Qua việc lặp đi lặp lại, cơ miệng sẽ quen với các âm tiết tiếng Anh, giúp bạn nói trôi chảy, tự tin mà không bị ngập ngừng.",
    image: "/images/step3-speaking.png",
    badge: "Kỹ năng 3",
  },
  {
    step: 4,
    title: "Kỹ năng 4: Writing (Ghi nhớ sâu)",
    subtitle: "Output — Củng cố cấu trúc & Sửa lỗi chính tả",
    desc: "Nói trôi chảy thôi là chưa đủ, viết giúp bạn 'củng cố' và khắc sâu kiến thức vào bộ nhớ dài hạn. Bạn sẽ thực hành nghe - chép chính tả hoặc viết lại câu dựa trên ngữ cảnh vừa học. Quá trình này buộc não bộ phân tích kỹ lại từ vựng, ngữ pháp và cách dùng từ, giúp bạn hoàn thiện cả 4 kỹ năng toàn diện.",
    image: "/images/step4-writing.png",
    badge: "Kỹ năng 4",
  },
  {
    step: 5,
    title: "Sẵn sàng trải nghiệm?",
    subtitle: "Chọn lộ trình phù hợp với mục tiêu của bạn",
    desc: "Quy trình 4 bước (Đọc - Nghe - Nói - Viết) sẽ được thiết kế lặp lại qua từng bài học theo chu kỳ thông minh. Bạn chỉ cần chọn đúng cấp độ hiện tại (A1 Cơ bản, A2 Giao tiếp...) để bắt đầu hành trình chinh phục tiếng Anh ngay hôm nay!",
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
      
      {/* KHUNG MODAL CHÍNH */}
      <div className="relative w-full max-w-5xl h-[580px] bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-[16px] shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col">
        
        {/* HEADER MODAL */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold px-3 py-2.5 rounded-md bg-brand-soft text-brand-500">
              {stepData.badge}
            </span>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Bước {currentStep + 1} / 5
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center text-neutral-500 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NỘI DUNG CHÍNH */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 flex flex-col justify-between">
          {currentStep < 4 ? (
            /* BƯỚC 1 - 4: DẠNG CHIA 2 CỘT */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full">
              
              {/* NỬA TRÁI: THÔNG TIN & ĐIỀU HƯỚNG */}
              <div className="flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <p className="text-xs font-bold text-brand-500 uppercase tracking-wider">
                    {stepData.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white leading-tight">
                    {stepData.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {stepData.desc}
                  </p>
                </div>

                {/* THANH ĐIỀU HƯỚNG BÊN DƯỚI (Rất thoáng vì chỉ còn 2 nút) */}
                <div className="pt-4 mt-auto flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800 shrink-0 w-full">
                  {/* Nút Quay lại */}
                  <div>
                    {currentStep > 0 ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePrev}
                        icon={<ChevronLeft className="w-4 h-4 shrink-0" />}
                      >
                        Quay lại
                      </Button>
                    ) : (
                      <div /> /* Giữ khoảng trống khi ở Step 1 */
                    )}
                  </div>

                  {/* Nút Tiếp theo */}
                  <div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleNext}
                    >
                      <span>Tiếp theo</span>
                      <ChevronRight className="w-4 h-4 shrink-0 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* NỬA PHẢI: MINH HỌA HÌNH ẢNH + DOTS ĐẶT Ở ĐÂY */}
              <div className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 rounded-xl flex items-center justify-center h-full relative overflow-hidden min-h-[260px] group">
                {stepData.image ? (
                  <img
                    src={stepData.image}
                    alt={stepData.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="text-center space-y-2 p-4">
                    <Sparkles className="w-10 h-10 text-brand-500 mx-auto animate-pulse" />
                    <p className="text-xs font-medium text-neutral-400">Minh họa {stepData.title}</p>
                  </div>
                )}

                {/* 🔴 CÁC CHẤM TRÒN (INDICATORS) NẰM TRONG KHUNG HÌNH (GÓC DƯỚI DẠNG PILL) */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-slate-900/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 shadow-lg">
                  {STEPS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      aria-label={`Chuyển đến bước ${idx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentStep === idx
                          ? "w-5 bg-white"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>

              </div>

            </div>
          ) : (
            /* BƯỚC 5: 3 CARD CHỌN LỘ TRÌNH (A1 / A2 / B1) CHUẨN DESIGN TOKENS */
            <div className="flex flex-col justify-between h-full space-y-6 text-center">
              <div>
                <h3 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                  {stepData.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-2xl mx-auto">
                {stepData.desc}
               </p>
              </div>

              {/* 3 CARDS LỘ TRÌNH CHUẨN UXCEL */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left flex-1 items-stretch">
                
                {/* CARD A1 */}
                <div
                  onClick={() => handleLevelClick("A1")}
                  className="bg-[#F1F5F9] dark:bg-neutral-800 border-[3px] border-state-50 dark:border-neutral-700 hover:border-brand-500 p-5 rounded-xl cursor-pointer transition-all hover:shadow-lg flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-bold px-3 py-2 rounded-md bg-brand-500 dark:bg-neutral-700 text-white dark:text-neutral-300 uppercase tracking-wider">
                        A1 — Beginner
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-brand-500 transition-colors" />
                    </div>
                    <p className="text-sm font-semibold leading-relaxed text-neutral-700 dark:text-neutral-200">
                      Mất gốc lâu rồi, không nhớ nổi thì hiện tại đơn hay cách chào hỏi cơ bản? Bắt đầu lại từ đây.
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-700/50">
                    <span className="text-sm font-bold text-brand-500 group-hover:underline">
                      Bắt đầu A1 →
                    </span>
                  </div>
                </div>

                {/* CARD A2 */}
                <div
                  onClick={() => handleLevelClick("A2")}
                  className="bg-[#F1F5F9] dark:bg-neutral-800 border-[3px] border-state-50 dark:border-neutral-700 hover:border-brand-500 p-5 rounded-xl cursor-pointer transition-all hover:shadow-lg flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-bold px-3 py-2 rounded-md bg-brand-500 dark:bg-neutral-700 text-white dark:text-neutral-300 uppercase tracking-wider">
                        A2 — Elementary
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-brand-500 transition-colors" />
                    </div>
                    <p className="text-sm font-semibold leading-relaxed text-neutral-700 dark:text-neutral-200">
                      Đã nói được câu đơn giản nhưng vẫn lúng túng khi kể chuyện, nói về kế hoạch hay công việc?
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-700/50">
                    <span className="text-sm font-bold text-brand-500 group-hover:underline">
                      Bắt đầu A2 →
                    </span>
                  </div>
                </div>

                {/* CARD B1 */}
                <div
                  onClick={() => handleLevelClick("B1")}
                  className="bg-[#F1F5F9] dark:bg-neutral-800 border-[3px] border-state-50 dark:border-neutral-700 hover:border-brand-500 p-5 rounded-xl cursor-pointer transition-all hover:shadow-lg flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-bold px-3 py-2 rounded-md bg-brand-500 dark:bg-neutral-700 text-white dark:text-neutral-300 uppercase tracking-wider">
                        B1 — Intermediate
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-brand-500 transition-colors" />
                    </div>
                    <p className="text-sm font-semibold leading-relaxed text-neutral-700 dark:text-neutral-200">
                      Giao tiếp ổn rồi nhưng muốn nói tự nhiên hơn, tranh luận hay trình bày ý kiến công việc?
                    </p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-neutral-100 dark:border-neutral-700/50">
                    <span className="text-sm font-bold text-brand-500 group-hover:underline">
                      Bắt đầu B1 →
                    </span>
                  </div>
                </div>

              </div>

              {/* FOOTER STEP 5 */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-800 shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrev}
                  icon={<ChevronLeft className="w-4 h-4" />}
                >
                  Quay lại các bước
                </Button>

                <div className="flex items-center gap-1.5">
                  {STEPS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentStep === idx
                          ? "w-6 bg-brand-500"
                          : "w-2 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300"
                      }`}
                    />
                  ))}
                </div>

                <div className="w-[120px]" />
              </div>
            </div>
          )}
        </div>

      </div>

    </div>,
    document.body
  );
}