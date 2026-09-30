import { useState } from "react";
import { 
  EnvelopeIcon, 
  MagnifyingGlassIcon, 
  BookOpenIcon, 
  SparklesIcon, 
  CreditCardIcon, 
  WrenchScrewdriverIcon,
  TrophyIcon,
  Squares2X2Icon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { PageContainer } from "@/components/PageContainer";

interface HelpCenterPageProps {
  onBack: () => void;
}

export function HelpCenterPage({}: HelpCenterPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const faqs = [
    // ---------- KHỞI ĐẦU ----------
    {
      category: "getting-started",
      question: "1. Phương pháp Self-Talk cho người mới bắt đầu hoạt động như thế nào?",
      answer: "Phương pháp Self-talk là hình thức tự nói chuyện với chính mình bằng tiếng Anh theo kịch bản có sẵn về các chủ đề quen thuộc trong cuộc sống. Phương pháp này hoạt động dựa trên 4 bước toàn diện: (1) Tổng quan phương pháp giúp bạn tự luyện nói về các chủ đề quen thuộc; (2) Nạp Input chuẩn qua Reading & Listening với các cụm từ (Chunks) và âm thanh bản xứ; (3) Bật mở phản xạ Speaking qua kỹ thuật Shadowing (nhại lại); và (4) Củng cố kiến thức sâu qua Writing để hoàn thiện cả 4 kỹ năng."
    },
    {
      category: "getting-started",
      question: "2. Tôi cần chuẩn bị thiết bị gì để luyện tập hiệu quả?",
      answer: "Bạn chỉ cần một chiếc điện thoại thông minh, máy tính bảng hoặc máy tính có kết nối internet và micro hoạt động tốt. Việc sử dụng tai nghe có microphone tích hợp sẽ giúp lọc tạp âm và giúp AI nhận diện giọng nói chính xác hơn."
    },
    {
      category: "getting-started",
      question: "3. Các khóa A1, A2, B1 khác nhau thế nào? Tôi nên bắt đầu từ khóa nào?",
      answer: "Đây là các cấp độ theo khung năng lực ngôn ngữ châu Âu (CEFR). A1 dành cho người mới bắt đầu hoặc mất gốc, A2 là sơ cấp với giao tiếp cơ bản hằng ngày, còn B1 là trung cấp để diễn đạt ý dài hơn và tự tin hơn. Nếu chưa chắc trình độ của mình, bạn cứ bắt đầu từ A1, vì học lại phần đã biết luôn nhanh hơn là bị hụt kiến thức nền."
    },
    {
      category: "getting-started",
      question: "4. Mỗi ngày tôi nên học bao lâu là hợp lý?",
      answer: "Học đều mỗi ngày quan trọng hơn học dồn. Chỉ cần 1 đến 2 tiếng mỗi ngày, bạn sẽ tiến bộ rõ rệt hơn so với việc học vài tiếng một lần rồi nghỉ cả tuần. Hãy chọn một khung giờ cố định để dễ tạo thói quen."
    },

    // ---------- LUYỆN TẬP & AI ----------
    {
      category: "practice",
      question: "5. Tại sao AI không nhận diện được giọng nói của tôi?",
      answer: "Lỗi này thường do trình duyệt chưa được cấp quyền truy cập Micro. Hãy kiểm tra biểu tượng ổ khóa hoặc cài đặt quyền trên trình duyệt của bạn, đảm bảo đã chọn 'Allow' (Cho phép) cho Micro, đồng thời tránh ngồi ở nơi quá ồn ào."
    },
    {
      category: "practice",
      question: "6. Hệ thống chấm điểm phát âm của Self-Talk dựa trên tiêu chí nào?",
      answer: "AI phân tích dựa trên 3 tiêu chí cốt lõi: Độ chính xác của từ (Accuracy), Ngữ điệu và trọng âm (Intonation & Stress), và Tốc độ trôi chảy (Fluency) so với người bản xứ."
    },
    {
      category: "practice",
      question: "7. Làm sao để điểm phát âm của tôi cao hơn?",
      answer: "Hãy nghe giọng đọc mẫu vài lần trước khi ghi âm, đọc chậm và rõ từng âm thay vì đọc nhanh, và ngồi ở nơi yên tĩnh. Đừng ngại ghi âm lại nhiều lần: mỗi lần thử bạn sẽ dần nắm được trọng âm và ngữ điệu tốt hơn. Dùng tai nghe có micro cũng giúp AI nghe rõ giọng bạn hơn."
    },
    {
      category: "practice",
      question: "8. Phiên âm IPA là gì và tại sao tôi cần quan tâm?",
      answer: "IPA (International Phonetic Alphabet) là bảng phiên âm quốc tế, cho biết chính xác cách phát âm từng âm của một từ, ví dụ /ˈɪn.trə.dʒuːs/. Vì chữ viết tiếng Anh không luôn giống cách đọc, nhìn IPA giúp bạn đọc đúng ngay từ đầu thay vì đoán, đặc biệt với những từ mới."
    },
    {
      category: "practice",
      question: "9. Nội dung tôi lưu lại được xem ở đâu?",
      answer: "Những nội dung bạn đã lưu sẽ xuất hiện trong mục Phần lưu lại ở trang Hồ sơ, để bạn dễ dàng quay lại ôn tập bất cứ lúc nào."
    },

    // ---------- TIẾN ĐỘ & HUY HIỆU ----------
    {
      category: "progress",
      question: "10. Tiến độ học tập của tôi được tính như thế nào?",
      answer: "Ở trang Hồ sơ, mỗi khóa (A1, A2, B1) hiển thị số bài đã hoàn thành trên tổng số bài của khóa, kèm thanh phần trăm để bạn dễ theo dõi. Mỗi khi hoàn thành một bài học, tiến độ của khóa tương ứng sẽ được cập nhật."
    },
    {
      category: "progress",
      question: "11. Chuỗi học tập là gì? Tại sao chuỗi của tôi về 0?",
      answer: "Chuỗi học tập đếm số ngày liên tiếp bạn học mỗi ngày. Nếu bỏ lỡ một ngày thì chuỗi sẽ bắt đầu đếm lại từ đầu. Hãy học ít nhất một bài mỗi ngày để giữ chuỗi, dù chỉ là một bài ngắn."
    },
    {
      category: "progress",
      question: "12. Huy hiệu là gì và làm sao để mở khóa?",
      answer: "Huy hiệu là những cột mốc ghi nhận nỗ lực của bạn, chia làm 3 nhóm: Khởi động (bắt đầu hành trình học), Chinh phục cấp độ (hoàn thành các bài của khóa A1, A2, B1) và Thử thách bền bỉ (duy trì chuỗi ngày học liên tiếp). Bạn có thể bấm 'View all' ở mục Achievements trong trang Hồ sơ để xem tất cả huy hiệu và tiến độ của từng cái."
    },

    // ---------- TÀI KHOẢN & PRO ----------
    {
      category: "account",
      question: "13. Làm sao để nâng cấp tài khoản lên gói Pro?",
      answer: "Bạn có thể bấm nút Nâng cấp ở thanh Header, hoặc vào trang Hồ sơ, bấm nút Setting để mở Cài đặt hệ thống rồi chọn tab Nâng cấp Pro để xem quyền lợi và tiến hành thanh toán. Gói Pro mở khóa toàn bộ chủ đề nâng cao và luyện phát âm chấm điểm AI không giới hạn."
    },
    {
      category: "account",
      question: "14. Tôi có thể đổi tên hiển thị và ảnh đại diện ở đâu?",
      answer: "Vào trang Hồ sơ, bấm nút Setting rồi chọn tab Tài khoản. Tại đây bạn có thể đổi tên hiển thị và tải lên ảnh đại diện mới từ thiết bị của mình, sau đó bấm Lưu thay đổi."
    },
    {
      category: "account",
      question: "15. Tôi có thể đổi email đăng nhập không?",
      answer: "Để đảm bảo an toàn cho tài khoản, email đăng nhập không thể tự thay đổi trong phần Cài đặt. Nếu thật sự cần đổi email, hãy liên hệ đội ngũ hỗ trợ qua support@selftalk.com để được giúp đỡ."
    },
    {
      category: "account",
      question: "16. Làm sao để bật chế độ tối (Dark Mode)?",
      answer: "Vào Cài đặt hệ thống, chọn tab Giao diện & Chung rồi bật công tắc Chế độ tối. Chế độ này giúp giảm mỏi mắt khi bạn học vào ban đêm."
    },
    {
      category: "account",
      question: "17. Làm sao để xóa tài khoản?",
      answer: "Vào Cài đặt hệ thống, chọn tab Tài khoản và kéo xuống cuối trang, phần Xóa tài khoản. Bạn sẽ được yêu cầu nhập lại thông tin xác nhận trước khi xóa. Lưu ý: sau khi xóa, toàn bộ dữ liệu và tiến độ học sẽ mất vĩnh viễn và không thể khôi phục."
    },

    // ---------- KHẮC PHỤC LỖI ----------
    {
      category: "troubleshooting",
      question: "18. Tài khoản của tôi bị trừ tiền nhưng chưa lên Pro thì phải làm sao?",
      answer: "Đừng lo lắng! Trong một số trường hợp hệ thống ngân hàng hoặc cổng thanh toán cần từ 5-10 phút để đồng bộ. Nếu sau 30 phút tài khoản chưa được kích hoạt, hãy gửi biên lai qua email support@selftalk.com để được hỗ trợ tức thì."
    },
    {
      category: "troubleshooting",
      question: "19. Tôi không nghe thấy giọng đọc mẫu thì phải làm sao?",
      answer: "Hãy kiểm tra âm lượng thiết bị và đảm bảo tab trình duyệt không bị tắt tiếng (biểu tượng loa trên tab). Nếu đang dùng tai nghe, thử rút ra cắm lại hoặc đổi thiết bị phát âm thanh. Nếu vẫn không nghe được, hãy tải lại trang hoặc thử một trình duyệt khác như Chrome hoặc Edge."
    },
    {
      category: "troubleshooting",
      question: "20. Tiến độ học của tôi bị mất khi đổi trình duyệt hoặc thiết bị?",
      answer: "Hiện tại tiến độ học được lưu ngay trên trình duyệt bạn đang dùng, nên khi đổi sang trình duyệt hoặc thiết bị khác, hoặc khi xóa dữ liệu duyệt web, tiến độ có thể không hiển thị. Hãy học trên cùng một trình duyệt và tránh xóa dữ liệu trang web. Chúng tôi đang hoàn thiện việc đồng bộ tiến độ giữa các thiết bị."
    },
    {
      category: "troubleshooting",
      question: "21. Trang bị tải chậm hoặc hiển thị lỗi thì phải làm sao?",
      answer: "Hãy kiểm tra kết nối mạng, sau đó tải lại trang bằng Ctrl + F5 (hoặc Cmd + Shift + R trên Mac) để làm mới bộ nhớ đệm. Nếu vẫn gặp lỗi, thử mở bằng trình duyệt khác. Trường hợp lỗi vẫn còn, hãy gửi email cho chúng tôi kèm ảnh chụp màn hình để được hỗ trợ nhanh nhất."
    }
  ];

  const filteredFaqs = faqs.filter(item => {
    const matchesTab = activeTab === "all" || item.category === activeTab;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const categories = [
    { id: "all", label: "Tất cả câu hỏi", icon: Squares2X2Icon },
    { id: "getting-started", label: "Khởi đầu", icon: BookOpenIcon },
    { id: "practice", label: "Luyện tập & AI", icon: SparklesIcon },
    { id: "progress", label: "Tiến độ & Huy hiệu", icon: TrophyIcon },
    { id: "account", label: "Tài khoản & Pro", icon: CreditCardIcon },
    { id: "troubleshooting", label: "Khắc phục lỗi", icon: WrenchScrewdriverIcon },
  ];

  return (
    <PageContainer className="py-8 space-y-6">
      {/* HEADER PAGE */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Trung tâm trợ giúp & Hướng dẫn
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Giải đáp mọi thắc mắc giúp bạn làm chủ quá trình luyện nói Self-Talk tiếng Anh một cách hiệu quả nhất.
        </p>
      </div>

      <div className="pb-2 border-b border-slate-200 dark:border-zinc-700 flex flex-wrap items-center justify-between gap-3"></div>

      {/* LAYOUT CHIA CỘT: TRÁI (MENU TAB + SEARCH 1/3) - PHẢI (NỘI DUNG 2/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* CỘT TRÁI: DÙNG COMPONENT INPUT CHUẨN + DANH MỤC TAB */}
        <div className="lg:col-span-4 bg-white dark:bg-[#191A20] p-3 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-xs space-y-3">
          
          {/* Ô tìm kiếm sử dụng component Input chung */}
          <Input 
            icon={<MagnifyingGlassIcon className="w-4 h-4" />}
            placeholder="Tìm kiếm câu hỏi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="border-t border-slate-100 dark:border-zinc-700 pt-2 space-y-1">
            <p className="px-3 py-1.5 text-[14px] font-bold text-slate-400 tracking-normal">
              Danh mục hỗ trợ
            </p>
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-md text-sm font-semibold transition cursor-pointer ${
                    isActive
                      ? "bg-indigo-50 dark:bg-[#37383F] text-[#513DEB] dark:text-white"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#37383F] hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <IconComponent className="w-4 h-4 shrink-0" />
                    <span>{cat.label}</span>
                  </div>
                  <ChevronRightIcon className={`w-3.5 h-3.5 transition-transform ${isActive ? "translate-x-0.5 text-[#513DEB] dark:text-indigo-400" : "text-slate-400 opacity-40"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* CỘT PHẢI: HIỂN THỊ CÂU HỎI & TRẢ LỜI */}
        <div className="lg:col-span-8 bg-white dark:bg-[#191A20] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-700 pb-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white ">
              {activeTab === "all" ? "Tất cả câu hỏi" : categories.find(c => c.id === activeTab)?.label}
            </h3>
            <span className="text-sm font-semibold text-slate-400 bg-slate-100 dark:bg-[#0B0C12] px-2.5 py-1 rounded-md">
              {filteredFaqs.length} kết quả
            </span>
          </div>

          {filteredFaqs.length === 0 ? (
            <div className="py-16 text-center text-xs text-slate-400 space-y-2">
              <p>Không tìm thấy câu hỏi phù hợp với từ khóa của bạn.</p>
              <button 
                onClick={() => { setActiveTab("all"); setSearchTerm(""); }} 
                className="text-[#513DEB] dark:text-indigo-400 font-bold hover:underline cursor-pointer"
              >
                Xem lại toàn bộ câu hỏi
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-[#ffffff] dark:bg-[#0B0C12] border border-slate-100 dark:border-zinc-700 space-y-2 transition">
                  <p className="text-base font-bold text-slate-900 dark:text-white">
                    {item.question}
                  </p>
                  <p className="text-base font-normal sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <div className="pb-2 border-b border-slate-200 dark:border-zinc-700 flex flex-wrap items-center justify-between gap-3"></div>

      {/* KHUNG LIÊN HỆ HỖ TRỢ DÙNG COMPONENT BUTTON CHUẨN */}
      <div className="bg-gradient-to-r from-indigo-50/50 to-blue-50/50 dark:from-[#191A22] dark:to-[#37383F] p-6 sm:p-8 rounded-2xl border border-indigo-100/80 dark:border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            Vẫn cần sự trợ giúp trực tiếp từ chuyên gia?
          </p>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Đội ngũ hỗ trợ kỹ thuật và học thuật của chúng tôi luôn sẵn sàng giải đáp 24/7.
          </p>
        </div>
        <Button
          variant="primary" 
          size="sm" 
          icon={<EnvelopeIcon className="w-4 h-4" />}
          onClick={() => window.location.href = "mailto:support@selftalk.com"}
        >
          Gửi email ngay
        </Button>
      </div>
    </PageContainer>
  );
}