import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import {
  ArrowLeftIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentTextIcon,
  UserGroupIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  ClockIcon,
  CreditCardIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  UserIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ChevronRightIcon,
  BookOpenIcon
} from "@heroicons/react/24/outline";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { PageContainer } from "@/components/PageContainer";

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

interface Item {
  label?: string;
  text: string;
}

interface Section {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  paragraphs?: string[];
  items?: Item[];
  category: "privacy" | "terms";
}

const allSections: Section[] = [
  // --- PHẦN I: BẢO MẬT ---
  {
    id: "sec-1",
    category: "privacy",
    icon: DocumentTextIcon,
    title: "1. Thông tin chúng tôi thu thập",
    paragraphs: [
      "Chúng tôi thu thập các thông tin cần thiết nhằm phục vụ cho quá trình học tập và tối ưu hóa trải nghiệm cá nhân của bạn, bao gồm:",
    ],
    items: [
      { label: "Thông tin tài khoản", text: "Họ tên hoặc tên hiển thị, địa chỉ email, mật khẩu mã hóa và ảnh đại diện bạn cung cấp khi đăng ký hoặc cập nhật hồ sơ." },
      { label: "Dữ liệu học tập & ghi âm", text: "Các đoạn ghi âm giọng nói khi thực hành, điểm số phát âm, chuỗi ngày học tập (streak), huy hiệu đã đạt, nội dung bạn đã lưu và tiến độ hoàn thành các khóa học." },
      { label: "Thông tin kỹ thuật", text: "Loại trình duyệt, hệ điều hành, địa chỉ IP và thiết bị sử dụng nhằm mục đích phân tích lỗi hệ thống và bảo mật." },
      { label: "Thông tin thanh toán", text: "Trạng thái gói đăng ký và mã giao dịch khi bạn nâng cấp Pro. Chúng tôi không nhận hay lưu thông tin thẻ của bạn (xem mục 6)." },
    ],
  },
  {
    id: "sec-2",
    category: "privacy",
    icon: SparklesIcon,
    title: "2. Mục đích sử dụng dữ liệu",
    paragraphs: ["Dữ liệu của bạn được sử dụng cho các mục đích sau và không nhằm bất kỳ mục đích nào khác ngoài phạm vi này:"],
    items: [
      { text: "Cung cấp và duy trì các tính năng học tập: lưu tiến độ, tính chuỗi học tập, mở khóa huy hiệu." },
      { text: "Cá nhân hóa nội dung và gợi ý bài học phù hợp với trình độ của bạn." },
      { text: "Phân tích phát âm và trả về kết quả chấm điểm (xem mục 3)." },
      { text: "Xử lý thanh toán, kích hoạt gói Pro và hỗ trợ khi bạn cần giúp đỡ." },
      { text: "Phát hiện lỗi, ngăn chặn gian lận và bảo vệ an toàn cho hệ thống." },
    ],
  },
  {
    id: "sec-3",
    category: "privacy",
    icon: SparklesIcon,
    title: "3. Dữ liệu giọng nói & AI",
    paragraphs: [
      "Các tệp ghi âm giọng nói của bạn được truyền tải qua các thuật toán AI an toàn để phân tích phát âm và trả về kết quả chấm điểm trực quan. Chúng tôi cam kết không chia sẻ, không bán và không sử dụng dữ liệu giọng nói của cá nhân bạn để huấn luyện các mô hình thương mại công cộng ngoài phạm vi ứng dụng.",
      "Ứng dụng chỉ truy cập micro khi bạn cho phép trên trình duyệt và chỉ ghi âm khi bạn chủ động bấm nút ghi âm. Bạn có thể thu hồi quyền micro bất cứ lúc nào trong cài đặt của trình duyệt.",
    ],
  },
  {
    id: "sec-4",
    category: "privacy",
    icon: ComputerDesktopIcon,
    title: "4. Lưu trữ trên trình duyệt & cookie",
    paragraphs: [
      "Để ứng dụng hoạt động, chúng tôi lưu một số thông tin ngay trên trình duyệt của bạn (localStorage) như tiến độ học, lựa chọn giao diện sáng/tối và trạng thái đăng nhập. Những thông tin này giúp bạn không phải thiết lập lại mỗi lần quay lại.",
      "Vì vậy, nếu bạn xóa dữ liệu duyệt web hoặc đổi sang trình duyệt/thiết bị khác, một số thông tin này có thể không còn. Chúng tôi không sử dụng các công cụ theo dõi quảng cáo của bên thứ ba.",
    ],
  },
  {
    id: "sec-5",
    category: "privacy",
    icon: GlobeAltIcon,
    title: "5. Chia sẻ dữ liệu với bên thứ ba",
    paragraphs: ["Chúng tôi không bán thông tin cá nhân của bạn. Dữ liệu chỉ được chia sẻ trong các trường hợp sau:"],
    items: [
      { label: "Nhà cung cấp dịch vụ", text: "Các đối tác hỗ trợ vận hành như lưu trữ, phân tích giọng nói bằng AI và cổng thanh toán, chỉ nhận lượng dữ liệu tối thiểu cần thiết để thực hiện nhiệm vụ." },
      { label: "Yêu cầu pháp lý", text: "Khi có yêu cầu hợp lệ từ cơ quan nhà nước có thẩm quyền, hoặc để bảo vệ quyền và an toàn của người dùng và của chúng tôi." },
    ],
  },
  {
    id: "sec-6",
    category: "privacy",
    icon: LockClosedIcon,
    title: "6. Bảo mật thanh toán & dữ liệu giao dịch",
    paragraphs: [
      "Mọi giao dịch thanh toán nâng cấp gói Pro đều được thực hiện thông qua các cổng thanh toán uy tín đạt chuẩn bảo mật quốc tế (PCI-DSS). Self-Talk tuyệt đối không lưu giữ thông tin thẻ tín dụng, số tài khoản ngân hàng hoặc mật khẩu ví điện tử của bạn trên máy chủ của chúng tôi.",
    ],
  },
  {
    id: "sec-7",
    category: "privacy",
    icon: ClockIcon,
    title: "7. Thời gian lưu trữ & bảo vệ dữ liệu",
    paragraphs: [
      "Chúng tôi chỉ lưu dữ liệu của bạn trong thời gian tài khoản còn hoạt động hoặc khi cần thiết để cung cấp dịch vụ. Chúng tôi áp dụng các biện pháp kỹ thuật hợp lý như mã hóa mật khẩu, kết nối HTTPS và kiểm soát quyền truy cập để bảo vệ dữ liệu của bạn.",
      "Dù vậy, không có hệ thống nào an toàn tuyệt đối. Nếu phát hiện sự cố ảnh hưởng đến dữ liệu của bạn, chúng tôi sẽ thông báo và xử lý trong thời gian sớm nhất có thể.",
    ],
  },
  {
    id: "sec-8",
    category: "privacy",
    icon: UserGroupIcon,
    title: "8. Quyền lợi và lựa chọn của người dùng",
    paragraphs: ["Bạn có toàn quyền kiểm soát thông tin cá nhân của mình bằng cách:"],
    items: [
      { text: "Truy cập, chỉnh sửa hoặc cập nhật tên hiển thị và ảnh đại diện bất cứ lúc nào trong Cài đặt > Tài khoản." },
      { text: "Xóa vĩnh viễn tài khoản cùng toàn bộ lịch sử dữ liệu học tập ngay trong Cài đặt > Tài khoản, mục Xóa tài khoản. Hành động này không thể hoàn tác." },
      { text: "Thu hồi quyền truy cập micro bất cứ lúc nào trong cài đặt trình duyệt." },
      { text: "Gửi yêu cầu về việc dữ liệu của bạn (truy cập, chỉnh sửa, xóa) qua email bảo mật của chúng tôi nếu bạn cần hỗ trợ thêm." },
    ],
  },
  {
    id: "sec-9",
    category: "privacy",
    icon: UserIcon,
    title: "9. Quyền riêng tư của trẻ em",
    paragraphs: [
      "Dịch vụ dành cho người từ 13 tuổi trở lên. Người dùng dưới 18 tuổi nên sử dụng dưới sự hướng dẫn và đồng ý của cha mẹ hoặc người giám hộ. Nếu bạn phát hiện trẻ em dưới độ tuổi quy định đã cung cấp thông tin cho chúng tôi, vui lòng liên hệ để chúng tôi xóa dữ liệu đó.",
    ],
  },
  {
    id: "sec-10",
    category: "privacy",
    icon: GlobeAltIcon,
    title: "10. Dữ liệu khi đăng nhập bằng Google",
    paragraphs: [
      "Khi bạn chọn đăng nhập bằng Google, chúng tôi chỉ nhận tên, địa chỉ email và ảnh đại diện từ tài khoản Google của bạn để tạo và quản lý tài khoản Self-Talk. Chúng tôi không truy cập Gmail, Google Drive, danh bạ hay bất kỳ dữ liệu Google nào khác của bạn.",
      "Thông tin này chỉ được dùng để đăng nhập và hiển thị hồ sơ trong ứng dụng, được lưu trữ theo Chính sách bảo mật này và không được bán hoặc chia sẻ cho bên thứ ba vì mục đích quảng cáo. Bạn có thể thu hồi quyền truy cập của Self-Talk bất cứ lúc nào trong phần Bảo mật của tài khoản Google, hoặc xóa tài khoản trong Cài đặt > Tài khoản.",
    ],
  },
  

  // --- PHẦN II: ĐIỀU KHOẢN ---
  {
    id: "sec-11",
    category: "terms",
    icon: ShieldCheckIcon,
    title: "11. Chấp nhận điều khoản & tài khoản",
    paragraphs: [
      "Khi tạo tài khoản hoặc sử dụng Self-Talk, bạn đồng ý với các điều khoản trong văn bản này. Bạn chịu trách nhiệm bảo mật thông tin đăng nhập và mọi hoạt động diễn ra dưới tài khoản của mình. Hãy thông báo ngay cho chúng tôi nếu nghi ngờ tài khoản bị truy cập trái phép.",
    ],
  },
  {
    id: "sec-12",
    category: "terms",
    icon: ExclamationTriangleIcon,
    title: "12. Quy tắc sử dụng",
    paragraphs: ["Khi sử dụng dịch vụ, bạn đồng ý không thực hiện các hành vi sau:"],
    items: [
      { text: "Sử dụng dịch vụ cho mục đích vi phạm pháp luật hoặc gây hại cho người khác." },
      { text: "Cố ý tấn công, làm gián đoạn hệ thống, hoặc tìm cách truy cập trái phép vào dữ liệu của người dùng khác." },
      { text: "Sao chép, phân phối lại hoặc bán lại nội dung bài học khi chưa có sự cho phép bằng văn bản." },
      { text: "Chia sẻ tài khoản Pro cho người khác hoặc dùng công cụ tự động để can thiệp vào kết quả học tập, chuỗi học tập và huy hiệu." },
    ],
  },
  {
    id: "sec-13",
    category: "terms",
    icon: CreditCardIcon,
    title: "13. Gói Pro & thanh toán",
    paragraphs: [
      "Gói Pro mở khóa các chủ đề nâng cao và tính năng luyện phát âm chấm điểm AI không giới hạn. Giá, thời hạn và điều kiện của từng gói được hiển thị rõ tại thời điểm bạn thanh toán. Các vấn đề về giao dịch (ví dụ đã bị trừ tiền nhưng chưa được kích hoạt Pro) vui lòng liên hệ bộ phận hỗ trợ để được xử lý.",
    ],
  },
  {
    id: "sec-14",
    category: "terms",
    icon: ScaleIcon,
    title: "14. Quyền sở hữu trí tuệ",
    paragraphs: [
      "Toàn bộ nội dung bài học, giao diện, hình ảnh, logo và phần mềm của Self-Talk thuộc quyền sở hữu của chúng tôi hoặc bên cấp phép và được bảo hộ theo quy định về sở hữu trí tuệ. Bạn được cấp quyền sử dụng cá nhân, không độc quyền và không chuyển nhượng để học tập trên nền tảng. Dữ liệu ghi âm của bạn vẫn thuộc về bạn.",
    ],
  },
  {
    id: "sec-15",
    category: "terms",
    icon: ExclamationTriangleIcon,
    title: "15. Miễn trừ & giới hạn trách nhiệm",
    paragraphs: [
      "Self-Talk là công cụ hỗ trợ luyện tập; kết quả chấm điểm của AI mang tính tham khảo và có thể chưa hoàn toàn chính xác trong mọi trường hợp. Chúng tôi nỗ lực duy trì dịch vụ ổn định nhưng không cam kết dịch vụ luôn hoạt động liên tục, không gián đoạn hoặc không có lỗi. Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm cho các thiệt hại gián tiếp phát sinh từ việc sử dụng dịch vụ.",
    ],
  },
  {
    id: "sec-16",
    category: "terms",
    icon: ArrowPathIcon,
    title: "16. Tạm ngưng, chấm dứt & thay đổi",
    paragraphs: [
      "Chúng tôi có quyền tạm ngưng hoặc chấm dứt tài khoản vi phạm điều khoản. Bạn cũng có thể chấm dứt bất cứ lúc nào bằng cách xóa tài khoản trong Cài đặt.",
      "Chính sách và điều khoản này có thể được cập nhật theo thời gian để phản ánh thay đổi của dịch vụ hoặc quy định pháp luật. Ngày cập nhật gần nhất luôn được ghi ở đầu trang; việc bạn tiếp tục sử dụng dịch vụ sau khi cập nhật đồng nghĩa với việc bạn chấp nhận nội dung mới.",
    ],
  },
];

export function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "privacy" | "terms">("all");

  const filteredSections = allSections.filter((sec) => {
    const matchesTab = activeTab === "all" || sec.category === activeTab;
    const matchesSearch = 
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      sec.paragraphs?.some(p => p.toLowerCase().includes(searchTerm.toLowerCase())) ||
      sec.items?.some(i => i.text.toLowerCase().includes(searchTerm.toLowerCase()) || i.label?.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  const categories = [
    { id: "all", label: "Tất cả nội dung", icon: BookOpenIcon },
    { id: "privacy", label: "I. Chính sách bảo mật", icon: ShieldCheckIcon },
    { id: "terms", label: "II. Điều khoản sử dụng", icon: ScaleIcon },
  ];

  return (
    <PageContainer className="py-8 space-y-6">

      {/* HEADER PAGE */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Chính sách bảo mật & Điều khoản
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Cập nhật lần cuối: Tháng 09/2026. Cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn tại Self-Talk.
        </p>
      </div>

    <div className="pb-2 border-b border-slate-200 dark:border-zinc-700 flex flex-wrap items-center justify-between gap-3"></div>
      {/* LAYOUT CHIA CỘT: TRÁI (SEARCH + MENU TAB) - PHẢI (NỘI DUNG CHI TIẾT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* CỘT TRÁI: Ô TÌM KIẾM + DANH MỤC */}
        <div className="lg:col-span-4 lg:top-6 bg-white dark:bg-[#191A22] p-3 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-xs space-y-3">
          
          <Input 
            icon={<MagnifyingGlassIcon className="w-4 h-4" />}
            placeholder="Tìm kiếm điều khoản..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="border-t border-slate-100 dark:border-zinc-700 pt-2 space-y-1">
            <p className="px-3 py-1.5 text-[14px] font-bold text-slate-400 tracking-normal">
              Danh mục điều hướng
            </p>
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as any)}
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

        {/* CỘT PHẢI: HIỂN THỊ NỘI DUNG CHI TIẾT */}
        <div className="lg:col-span-8 bg-white dark:bg-[#191A22] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-700 shadow-xs space-y-8 text-slate-600 dark:text-slate-300">
          
          {/* Lời mở đầu giới thiệu */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#37383F] border border-slate-100 dark:border-zinc-500 text-sm sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Tại <strong>Self-Talk</strong>, chúng tôi coi trọng quyền riêng tư của bạn hơn hết. Văn bản này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin của bạn, cũng như các điều khoản khi bạn sử dụng ứng dụng luyện nói tiếng Anh của chúng tôi.
          </div>

          {filteredSections.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400 space-y-2">
              <p>Không tìm thấy nội dung phù hợp với từ khóa của bạn.</p>
              <button 
                onClick={() => { setActiveTab("all"); setSearchTerm(""); }} 
                className="text-[#513DEB] dark:text-indigo-400 font-bold hover:underline cursor-pointer"
              >
                Xem lại toàn bộ chính sách
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredSections.map((sec) => {
                const Icon = sec.icon;
                return (
                  <div key={sec.id} id={sec.id} className="space-y-3 pt-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
  
                      {sec.title}
                    </h3>

                    {sec.paragraphs?.map((p, i) => (
                      <p key={i} className="text-base sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {p}
                      </p>
                    ))}

                    {sec.items && (
                      <ul className="list-disc list-inside space-y-1.5 text-base sm:text-sm text-slate-500 dark:text-slate-400 pl-2">
                        {sec.items.map((item, i) => (
                          <li key={i}>
                            {item.label && <strong>{item.label}: </strong>}
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
      <div className="pb-2 border-b border-slate-200 dark:border-zinc-700 flex flex-wrap items-center justify-between gap-3"></div>

      {/* KHUNG LIÊN HỆ PHÁP LÝ & HỖ TRỢ DƯỚI CÙNG (GIỐNG PAGE HELP CENTER) */}
      <div className="bg-gradient-to-r from-indigo-50/50 to-blue-50/50 dark:from-[#191A22] dark:to-[#37383F] p-6 sm:p-8 rounded-2xl border border-indigo-100/80 dark:border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            Cần giải đáp thắc mắc về bảo mật hoặc pháp lý?
          </p>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Liên hệ trực tiếp với bộ phận pháp lý qua <strong>privacy@selftalk.com</strong> hoặc hỗ trợ kỹ thuật qua <strong>support@selftalk.com</strong>
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={<EnvelopeIcon className="w-4 h-4" />}
          onClick={() => window.location.href = "mailto:privacy@selftalk.com"}
        >
          Gửi email pháp lý
        </Button>
      </div>
    </PageContainer>
  );
}