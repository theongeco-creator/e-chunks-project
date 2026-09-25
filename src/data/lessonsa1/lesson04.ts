import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l4-s1",
    ipa: "/təˈdeɪ ɪz ˈmʌndeɪ/",
    en: "Today is Monday.",
    vi: "Hôm nay là thứ Hai.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Trạng từ chỉ thời gian/chủ ngữ giả + be + thứ trong tuần." },
      { label: "Today", content: "Trạng từ/danh từ chỉ thời gian 'Hôm nay', làm chủ ngữ câu." },
      { label: "is", content: "Động từ 'be' chia 'is' vì chủ ngữ số ít." },
      { label: "Monday", content: "Danh từ riêng chỉ thứ trong tuần (viết hoa chữ cái đầu)." },
    ],
    chunks: [
      c("Today", "Hôm nay", "/təˈdeɪ/", "adverb", "Trạng từ chỉ thời gian", "Đứng đầu câu để chỉ thời điểm hiện tại."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ với thứ trong tuần."),
      c("Monday", "thứ Hai", "/ˈmʌndeɪ/", "noun", "Bổ ngữ (tên ngày)", "Các thứ trong tuần luôn viết hoa chữ cái đầu."),
    ],
  },
  {
    id: "l4-s2",
    ipa: "/aɪ ɡuː tə skuːl frəm ˈmʌndeɪ tə ˈfraɪdeɪ/",
    en: "I go to school from Monday to Friday.",
    vi: "Tôi đi học từ thứ Hai đến thứ Sáu.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + địa điểm + from [thời gian A] to [thời gian B]." },
      { label: "I + go", content: "Chủ ngữ 'I' đi với động từ nguyên mẫu 'go'." },
      { label: "to school", content: "Cụm giới từ chỉ địa điểm/đích đến ('go to school': đi học)." },
      { label: "from Monday to Friday", content: "Cụm giới từ chỉ khoảng thời gian 'từ... đến...'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("go", "đi", "/ɡuː/", "verb", "Động từ hành động", "Chỉ sự di chuyển hoặc hoạt động thường nhật."),
      c("to school", "đến trường", "/tə skuːl/", "preposition", "Cụm giới từ chỉ địa điểm", "Đi học: go to school (không dùng mạo từ 'the' trước school)."),
      c("from Monday to Friday", "từ thứ Hai đến thứ Sáu", "/frəm ˈmʌndeɪ tə ˈfraɪdeɪ/", "preposition", "Cụm giới từ chỉ thời gian", "Cấu trúc from... to... dùng để chỉ khoảng thời gian."),
    ],
  },
  {
    id: "l4-s3",
    ipa: "/aɪ steɪ æt hoʊm ɑːn ˈsætərdeɪ/",
    en: "I stay at home on Saturday.",
    vi: "Tôi ở nhà vào thứ Bảy.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + địa điểm + on + thứ trong tuần." },
      { label: "I + stay", content: "Chủ ngữ 'I' đi với động từ nguyên mẫu 'stay'." },
      { label: "at home", content: "Cụm giới từ chỉ địa điểm 'ở nhà'." },
      { label: "on Saturday", content: "Cụm giới từ chỉ thời gian: dùng giới từ 'on' trước các thứ trong tuần." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("stay", "ở lại / ở", "/steɪ/", "verb", "Động từ hành động", "Chỉ trạng thái ở tại một nơi."),
      c("at home", "ở nhà", "/æt hoʊm/", "preposition", "Cụm giới từ chỉ địa điểm", "Cụm cố định 'at home' nghĩa là ở nhà."),
      c("on Saturday", "vào thứ Bảy", "/ɑːn ˈsætərdeɪ/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'on' trước tên các ngày trong tuần."),
    ],
  },
  {
    id: "l4-s4",
    ipa: "/ɑːn ˈsʌndeɪ, aɪ ˈvɪzɪt maɪ ˈfæmɪli/",
    en: "On Sunday, I visit my family.",
    vi: "Vào chủ Nhật, tôi thăm gia đình mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Trạng ngữ chỉ thời gian + S + verb + tân ngữ." },
      { label: "On Sunday", content: "Cụm giới từ chỉ thời gian đặt đầu câu (có dấu phẩy theo sau)." },
      { label: "I + visit", content: "Chủ ngữ 'I' đi với động từ 'visit'." },
      { label: "my family", content: "Tính từ sở hữu 'my' + danh từ 'family' làm tân ngữ." },
    ],
    chunks: [
      c("On Sunday", "Vào chủ Nhật", "/ɑːn ˈsʌndeɪ/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng 'on' trước tên ngày. Có thể đặt ở đầu hoặc cuối câu."),
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("visit", "thăm", "/ˈvɪzɪt/", "verb", "Động từ hành động", "Dùng để nói việc thăm hỏi người thân hoặc địa điểm."),
      c("my family", "gia đình của tôi", "/maɪ ˈfæmɪli/", "noun", "Cụm danh từ làm tân ngữ", "Tính từ sở hữu 'my' đi trước danh từ 'family'."),
    ],
  },
  {
    id: "l4-s5",
    ipa: "/aɪ laɪk ˈsʌndeɪ bɪˈkʌz aɪ kæn rɪˈlæks/",
    en: "I like Sunday because I can relax.",
    vi: "Tôi thích chủ Nhật vì tôi có thể thư giãn.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + từ nối (because) + mệnh đề nguyên nhân (S + modal verb + verb)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "Sunday", content: "Danh từ riêng chỉ ngày chủ Nhật làm tân ngữ." },
      { label: "because", content: "Từ nối biểu thị nguyên nhân ('vì')." },
      { label: "I", content: "Chủ ngữ 'I'" },
      { label: "can relax", content: "Mệnh đề chỉ lý do: Chủ ngữ + động từ khiếm khuyết 'can' + động từ nguyên mẫu 'relax'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích đối với sự vật, sự việc."),
      c("Sunday", "chủ Nhật", "/ˈsʌndeɪ/", "noun", "Tân ngữ (tên ngày)", "Tên các ngày trong tuần luôn viết hoa chữ cái đầu."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do cho mệnh đề trước."),
      c("I", "tôi", "/aɪ/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "'can' là động từ khiếm khuyết đi kèm động từ nguyên mẫu 'relax'."),
      c("can relax", "có thể thư giãn", "/kæn rɪˈlæks/", "verb", "Mệnh đề phụ chỉ nguyên nhân", "'can' là động từ khiếm khuyết đi kèm động từ nguyên mẫu 'relax'."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson04Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "Today is _____________.",
      meaning: "Hôm nay là ...",
      example: "Today is Monday.",
      alternatives: ["Monday", "Tuesday", "Friday", "Saturday"],
    },
    {
      term: "I go to school from _____________ to _____________.",
      meaning: "Tôi đi học từ ... đến ...",
      example: "I go to school from Monday to Friday.",
      alternatives: ["Monday to Friday", "Tuesday to Saturday"],
    },
    {
      term: "I stay at home on _____________.",
      meaning: "Tôi ở nhà vào ...",
      example: "I stay at home on Saturday.",
      alternatives: ["Saturday", "Sunday", "Friday"],
    },
    {
      term: "On _____________, I visit my family.",
      meaning: "Vào ..., tôi thăm gia đình mình.",
      example: "On Sunday, I visit my family.",
      alternatives: ["Sunday", "Saturday"],
    },
    {
      term: "I like _____________ because I can relax.",
      meaning: "Tôi thích ... vì tôi có thể thư giãn.",
      example: "I like Sunday because I can relax.",
      alternatives: ["Sunday", "Saturday", "Friday"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson04Sentences = sentences;