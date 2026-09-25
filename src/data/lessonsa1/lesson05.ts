import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l5-s1",
    ipa: "/maɪ ˈbɜːrθdeɪ ɪz ɪn meɪ/",
    en: "My birthday is in May.",
    vi: "Sinh nhật của tôi vào tháng Năm.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + birthday + be + giới từ (in) + tháng." },
      { label: "My birthday", content: "'My' + danh từ 'birthday' làm chủ ngữ." },
      { label: "is", content: "Động từ 'be' chia 'is' vì chủ ngữ số ít." },
      { label: "in May", content: "Cụm giới từ chỉ thời gian: dùng 'in' trước tên các tháng trong năm." },
    ],
    chunks: [
      c("My birthday", "Sinh nhật của tôi", "/maɪ ˈbɜːrθdeɪ/", "noun", "Chủ ngữ", "Dùng để nói về ngày sinh nhật."),
      c("is", "là / vào", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ với thời gian diễn ra."),
      c("in May", "vào tháng Năm", "/ɪn meɪ/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'in' trước các tháng trong năm. Tên tháng luôn viết hoa chữ cái đầu."),
    ],
  },
  {
    id: "l5-s2",
    ipa: "/aɪ laɪk meɪ bɪˈkʌz ðə ˈwðər ɪz wɔːrm/",
    en: "I like May because the weather is warm.",
    vi: "Tôi thích tháng Năm vì thời tiết ấm áp.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + because + mệnh đề nguyên nhân (S + be + adjective)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "May", content: "Tên tháng làm tân ngữ chỉ sự vật/thời gian được yêu thích." },
      { label: "because", content: "Từ nối biểu thị nguyên nhân ('vì')." },
      { label: "the weather is warm", content: "Mệnh đề nguyên nhân: Chủ ngữ (the weather) + be (is) + tính từ (warm)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích."),
      c("May", "tháng Năm", "/meɪ/", "noun", "Tân ngữ (tên tháng)", "Tên tháng luôn viết hoa chữ cái đầu."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để nối mệnh đề chính với lý do."),
      c("the weather is warm", "thời tiết ấm áp", "/ðə ˈwɛðər ɪz wɔːrm/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "Cụm 'the weather' làm chủ ngữ, 'warm' là tính từ chỉ thời tiết."),
    ],
  },
  {
    id: "l5-s3",
    ipa: "/aɪ ɡuː ɑːn ˈhɑːlədeɪ ɪn dʒuːn/",
    en: "I go on holiday in June.",
    vi: "Tôi đi nghỉ mát vào tháng Sáu.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (go on holiday) + giới từ (in) + tháng." },
      { label: "I + go", content: "Chủ ngữ 'I' đi với động từ 'go'." },
      { label: "on holiday", content: "Cụm cố định chỉ trạng thái đi nghỉ mát/nghỉ lễ." },
      { label: "in June", content: "Cụm giới từ chỉ thời gian: dùng 'in' trước tên tháng." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("go", "đi", "/ɡuː/", "verb", "Động từ hành động", "Chỉ sự di chuyển."),
      c("on holiday", "đi nghỉ mát", "/ɑːn ˈhɑːlədeɪ/", "preposition", "Cụm giới từ cố định", "Cụm 'go on holiday' nghĩa là đi nghỉ mát hoặc đi nghỉ lễ."),
      c("in June", "vào tháng Sáu", "/ɪn dʒuːn/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'in' trước tên tháng Sáu."),
    ],
  },
  {
    id: "l5-s4",
    ipa: "/maɪ ˈfæmɪli ˈvɪzɪts miː ɪn dɪˈsembər/",
    en: "My family visits me in December.",
    vi: "Gia đình tôi thăm tôi vào tháng Mười Hai.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + family + verb (thêm -s) + tân ngữ + in + tháng." },
      { label: "My family", content: "'My' + danh từ số ít 'family' làm chủ ngữ (động từ theo sau chia số ít)." },
      { label: "visits", content: "Động từ 'visit' thêm -s vì chủ ngữ 'my family' là ngôi thứ ba số ít ở thì hiện tại đơn." },
      { label: "me", content: "Đại từ nhân xưng đóng vai trò tân ngữ đứng sau động từ." },
      { label: "in December", content: "Cụm giới từ chỉ thời gian với tháng Mười Hai." },
    ],
    chunks: [
      c("My family", "Gia đình của tôi", "/maɪ ˈfæmɪli/", "noun", "Chủ ngữ", "Danh từ tập hợp 'family' ở đây coi là số ít nên động từ thêm -s."),
      c("visits", "thăm", "/ˈvɪzɪts/", "verb", "Động từ chia theo ngôi thứ ba số ít", "Thêm -s vào sau động từ ở thì hiện tại đơn khi chủ ngữ là số ít."),
      c("me", "tôi", "/miː/", "noun", "Tân ngữ", "Dạng tân ngữ của đại từ 'I' khi đứng sau động từ."),
      c("in December", "vào tháng Mười Hai", "/ɪn dɪˈsembər/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'in' trước tên tháng Mười Hai."),
    ],
  },
  {
    id: "l5-s5",
    ipa: "/dɪˈsembər ɪz maɪ ˈfeɪvərɪt mʌnθ/",
    en: "December is my favorite month.",
    vi: "Tháng Mười Hai là tháng yêu thích của tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + be + tính từ sở hữu + favorite + danh từ." },
      { label: "December", content: "Danh từ riêng chỉ tên tháng làm chủ ngữ." },
      { label: "is", content: "Động từ 'be' chia 'is' vì chủ ngữ là số ít." },
      { label: "my favorite month", content: "Cụm danh từ làm bổ ngữ: 'favorite' (yêu thích) đứng trước danh từ 'month'." },
    ],
    chunks: [
      c("December", "Tháng Mười Hai", "/dɪˈsembər/", "noun", "Chủ ngữ (tên tháng)", "Tên tháng đứng đầu câu làm chủ ngữ."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ với thông tin phía sau."),
      c("my favorite month", "tháng yêu thích của tôi", "/maɪ ˈfeɪvərɪt mʌnθ/", "noun", "Bổ ngữ", "Cụm danh từ biểu thị sự yêu thích đối với tháng."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson05Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "My birthday is in _____________.",
      meaning: "Sinh nhật của tôi vào tháng ...",
      example: "My birthday is in May.",
      alternatives: ["May", "June", "December", "January"],
    },
    {
      term: "I like _____________ because the weather is warm.",
      meaning: "Tôi thích ... vì thời tiết ấm áp.",
      example: "I like May because the weather is warm.",
      alternatives: ["May", "June", "April"],
    },
    {
      term: "I go on holiday in _____________.",
      meaning: "Tôi đi nghỉ mát vào tháng ...",
      example: "I go on holiday in June.",
      alternatives: ["June", "July", "August"],
    },
    {
      term: "My family visits me in _____________.",
      meaning: "Gia đình tôi thăm tôi vào tháng ...",
      example: "My family visits me in December.",
      alternatives: ["December", "November", "January"],
    },
    {
      term: "_____________ is my favorite month.",
      meaning: "... là tháng yêu thích của tôi.",
      example: "December is my favorite month.",
      alternatives: ["December", "May", "June", "October"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson05Sentences = sentences;