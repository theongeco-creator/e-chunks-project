import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l10-s1",
    ipa: "/aɪ laɪk tə ˈtrævəl wɪð maɪ ˈfæmɪli/",
    en: "I like to travel with my family.",
    vi: "Tôi thích đi du lịch cùng gia đình mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (like) + to-infinitive (động từ nguyên mẫu có to) + cụm giới từ chỉ sự đi kèm." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "to travel", content: "Động từ nguyên mẫu có 'to' ('to travel': đi du lịch)." },
      { label: "with my family", content: "Cụm giới từ chỉ sự đi kèm: 'with' + tính từ sở hữu 'my' + danh từ 'family'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sở thích làm việc gì đó."),
      c("to travel", "đi du lịch", "/tə ˈtrævəl/", "verb", "Động từ nguyên mẫu có to", "Cấu trúc 'like to do something' dùng động từ nguyên mẫu có 'to'."),
      c("with my family", "với gia đình của tôi", "/wɪð maɪ ˈfæmɪli/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' chỉ người đi cùng."),
    ],
  },
  {
    id: "l10-s2",
    ipa: "/wiː ˈjuːʒuəli ɡuː tə ðə biːtʃ baɪ kɑːr/",
    en: "We usually go to the beach by car.",
    vi: "Chúng tôi thường đi biển bằng ô tô.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + trạng từ tần suất + verb + cụm giới từ chỉ địa điểm + cụm giới từ chỉ phương tiện." },
      { label: "We + usually go", content: "Chủ ngữ số nhiều 'We' + trạng từ tần suất 'usually' + động từ 'go'." },
      { label: "to the beach", content: "Cụm giới từ chỉ đích đến/địa điểm ('to the beach': đến bãi biển)." },
      { label: "by car", content: "Cụm giới từ chỉ phương tiện di chuyển ('by car': bằng ô tô)." },
    ],
    chunks: [
      c("We", "Chúng tôi", "/wiː/", "noun", "Chủ ngữ", "Ngôi thứ nhất số nhiều."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ thường để chỉ mức độ thường xuyên."),
      c("go", "đi", "/ɡuː/", "verb", "Động từ hành động", "Chỉ sự di chuyển."),
      c("to the beach", "đến bãi biển", "/tə ðə biːtʃ/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'to' chỉ hướng đi đến địa điểm có mạo từ 'the'."),
      c("by car", "bằng ô tô", "/baɪ kɑːr/", "preposition", "Cụm giới từ chỉ phương tiện", "Dùng giới từ 'by' đứng trước tên phương tiện giao thông (không có mạo từ)."),
    ],
  },
  {
    id: "l10-s3",
    ipa: "/wiː steɪ ɪn ə smɔːl hoʊˈtɛl fɔːr tuː deɪz/",
    en: "We stay in a small hotel for two days.",
    vi: "Chúng tôi ở trong một khách sạn nhỏ trong hai ngày.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + cụm giới từ chỉ địa điểm + cụm giới từ chỉ khoảng thời gian." },
      { label: "We + stay", content: "Chủ ngữ 'We' đi với động từ nguyên mẫu 'stay'." },
      { label: "in a small hotel", content: "Cụm giới từ chỉ địa điểm lưu trú ('in' + mạo từ 'a' + tính từ 'small' + danh từ 'hotel')." },
      { label: "for two days", content: "Cụm giới từ chỉ khoảng thời gian kéo dài ('for' + số đếm 'two' + danh từ số nhiều 'days')." },
    ],
    chunks: [
      c("We", "Chúng tôi", "/wiː/", "noun", "Chủ ngữ", "Ngôi thứ nhất số nhiều."),
      c("stay", "ở lại", "/steɪ/", "verb", "Động từ hành động", "Chỉ hành động lưu trú tại một nơi."),
      c("in a small hotel", "trong một khách sạn nhỏ", "/ɪn ə smɔːl hoʊˈtɛl/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'in' chỉ vị trí bên trong, 'small' là tính từ bổ nghĩa cho 'hotel'."),
      c("for two days", "trong hai ngày", "/fɔːr tuː deɪz/", "preposition", "Cụm giới từ chỉ khoảng thời gian", "Dùng giới từ 'for' đi với khoảng thời gian, 'two days' là số đếm cộng danh từ số nhiều."),
    ],
  },
  {
    id: "l10-s4",
    ipa: "/aɪ laɪk ˈtɑːkɪŋ ˈfoʊtoʊz ænd ˈiːtɪŋ ˈloʊkəl fuːd/",
    en: "I like taking photos and eating local food.",
    vi: "Tôi thích chụp ảnh và ăn đồ ăn địa phương.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (like) + cụm danh động từ 1 (gerund) + and + cụm danh động từ 2." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "taking photos", content: "Danh động từ 'taking' + tân ngữ 'photos' ('take photos': chụp ảnh)." },
      { label: "and", content: "Từ nối kết hợp các hoạt động." },
      { label: "eating local food", content: "Danh động từ 'eating' + tính từ 'local' + danh từ không đếm được 'food'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Có thể đi sau bởi danh từ hoặc động từ thêm đuôi -ing."),
      c("taking photos", "chụp ảnh", "/ˈtɑːkɪŋ ˈfoʊtoʊz/", "noun", "Cụm danh động từ làm tân ngữ", "Động từ 'take' chuyển thành dạng -ing ('taking') sau 'like'."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai hoạt động cùng chia sẻ chung một cấu trúc."),
      c("eating local food", "ăn đồ ăn địa phương", "/ˈiːtɪŋ ˈloʊkəl fuːd/", "noun", "Cụm danh động từ làm tân ngữ", "'eating' là danh động từ, 'local' là tính từ đứng trước danh từ 'food'."),
    ],
  },
  {
    id: "l10-s5",
    ipa: "/aɪ wɑːnt tə ˈvɪzɪt nuː ˈpleɪsɪz ænd hæv fʌn/",
    en: "I want to visit new places and have fun.",
    vi: "Tôi muốn tham quan những địa điểm mới và vui chơi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (want) + to-infinitive + cụm danh từ + and + cụm động từ." },
      { label: "I + want", content: "Chủ ngữ 'I' đi với động từ 'want'." },
      { label: "to visit new places", content: "Động từ nguyên mẫu có 'to' + tính từ 'new' + danh từ số nhiều 'places'." },
      { label: "and", content: "Từ nối kết hợp các hành động." },
      { label: "have fun", content: "Cụm động từ nguyên mẫu ('have fun': vui chơi)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("want", "muốn", "/wɑːnt/", "verb", "Động từ chỉ mong muốn", "Theo sau bởi động từ nguyên mẫu có 'to'."),
      c("to visit new places", "thăm những địa điểm mới", "/tə ˈvɪzɪt nuː ˈpleɪsɪz/", "verb", "Cụm động từ nguyên mẫu có to", "Cấu trúc 'want to do something', 'new' là tính từ đứng trước danh từ số nhiều 'places'."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối các hành động muốn thực hiện."),
      c("have fun", "vui chơi", "/hæv fʌn/", "verb", "Cụm động từ nguyên mẫu", "Cụm từ cố định 'have fun' nghĩa là tận hưởng niềm vui hoặc vui chơi."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson10Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I like to travel with my _____________.",
      meaning: "Tôi thích đi du lịch cùng ...",
      example: "I like to travel with my family.",
      alternatives: ["family", "friends"],
    },
    {
      term: "We usually go to the beach by _____________.",
      meaning: "Chúng tôi thường đi biển bằng ...",
      example: "We usually go to the beach by car.",
      alternatives: ["car", "bus", "train"],
    },
    {
      term: "We stay in a small hotel for _____________.",
      meaning: "Chúng tôi ở trong một khách sạn nhỏ trong ...",
      example: "We stay in a small hotel for two days.",
      alternatives: ["two days", "three days", "one week"],
    },
    {
      term: "I like taking photos and eating _____________ food.",
      meaning: "Tôi thích chụp ảnh và ăn đồ ăn ...",
      example: "I like taking photos and eating local food.",
      alternatives: ["local", "delicious"],
    },
    {
      term: "I want to visit new _____________ and have fun.",
      meaning: "Tôi muốn tham quan những ... mới và vui chơi.",
      example: "I want to visit new places and have fun.",
      alternatives: ["places", "cities"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson10Sentences = sentences;