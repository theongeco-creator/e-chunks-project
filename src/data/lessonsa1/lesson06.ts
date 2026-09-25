import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l6-s1",
    ipa: "/təˈdeɪ ɪz ˈsʌni ænd wɔːrm/",
    en: "Today is sunny and warm.",
    vi: "Hôm nay trời nắng và ấm áp.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Trạng từ/chủ ngữ giả + be + tính từ 1 + connector (and) + tính từ 2." },
      { label: "Today", content: "Trạng từ/danh từ chỉ thời gian 'Hôm nay', làm chủ ngữ câu." },
      { label: "is", content: "Động từ 'be' chia 'is' vì chủ ngữ là số ít." },
      { label: "sunny and warm", content: "Cụm tính từ miêu tả thời tiết được nối bằng từ nối 'and'." },
    ],
    chunks: [
      c("Today", "hôm nay", "/təˈdeɪ/", "adverb", "Trạng từ chỉ thời gian", "Đứng đầu câu để chỉ thời điểm hiện tại."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ với tính từ miêu tả phía sau."),
      c("sunny and warm", "nắng và ấm áp", "/ˈsʌni ænd wɔːrm/", "adjective", "Cụm tính từ (bổ ngữ)", "Dùng các tính từ để miêu tả thời tiết."),
    ],
  },
  {
    id: "l6-s2",
    ipa: "/aɪ laɪk ˈsʌni deɪz bɪˈkʌz aɪ kæn ɡuː ˈaʊtsaɪd/",
    en: "I like sunny days because I can go outside.",
    vi: "Tôi thích những ngày nắng vì tôi có thể ra ngoài.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + because + mệnh đề nguyên nhân (S + modal verb + verb + adverb)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "sunny days", content: "Cụm danh từ số nhiều 'sunny days' làm tân ngữ chỉ sự vật yêu thích." },
      { label: "because", content: "Từ nối biểu thị nguyên nhân ('vì')." },
      { label: "I can go outside", content: "Mệnh đề nguyên nhân: Chủ ngữ + động từ khiếm khuyết 'can' + động từ 'go' + trạng từ 'outside'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích."),
      c("sunny days", "những ngày nắng", "/ˈsʌni deɪz/", "noun", "Cụm danh từ số nhiều làm tân ngữ", "Tính từ 'sunny' đứng trước danh từ số nhiều 'days' (thêm -s)."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để nối mệnh đề chính với lý do."),
      c("I can go outside", "tôi có thể ra ngoài", "/aɪ kæn ɡuː ˈaʊtsaɪd/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "'can' là động từ khiếm khuyết, 'outside' là trạng từ chỉ nơi chốn."),
    ],
  },
  {
    id: "l6-s3",
    ipa: "/ˈsʌmstaɪmʒ ɪt ɪz ˈreɪni, soʊ aɪ steɪ æt hoʊm/",
    en: "Sometimes it is rainy, so I stay at home.",
    vi: "Đôi khi trời mưa, nên tôi ở nhà.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Trạng từ chỉ tần suất + mệnh đề 1, so + mệnh đề 2 (kết quả)." },
      { label: "Sometimes", content: "Trạng từ chỉ tần suất 'thỉnh thoảng', thường đứng đầu hoặc trước động từ chính." },
      { label: "it is rainy", content: "Mệnh đề miêu tả thời tiết: Chủ ngữ giả 'it' + be + tính từ 'rainy'." },
      { label: "so", content: "Từ nối biểu thị kết quả ('vì vậy', 'cho nên')." },
      { label: "I stay at home", content: "Mệnh đề chỉ kết quả: S + verb + cụm giới từ chỉ địa điểm." },
    ],
    chunks: [
      c("Sometimes", "thỉnh thoảng", "/ˈsʌmstaɪmz/", "adverb", "Trạng từ chỉ tần suất", "Dùng để chỉ hành động hoặc hiện tượng lặp lại không thường xuyên."),
      c("it is rainy", "trời mưa", "/ɪt ɪz ˈreɪni/", "adjective", "Mệnh đề miêu tả thời tiết", "Dùng 'it is' đi với tính từ chỉ thời tiết."),
      c("so", "nên / vì vậy", "/soʊ/", "connector", "Từ nối chỉ kết quả", "Dùng để chỉ hệ quả của mệnh đề phía trước."),
      c("I stay at home", "tôi ở nhà", "/aɪ steɪ æt hoʊm/", "noun", "Mệnh đề chính chỉ hành động", "Cụm 'stay at home' nghĩa là ở nhà."),
    ],
  },
  {
    id: "l6-s4",
    ipa: "/wɛn ɪt ɪz koʊld, aɪ wɪr ə ˈdʒækɪt/",
    en: "When it is cold, I wear a jacket.",
    vi: "Khi trời lạnh, tôi mặc áo khoác.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề trạng ngữ chỉ thời gian (When + S + be + adjective), S + verb + tân ngữ." },
      { label: "When", content: "Từ nối/liên từ chỉ thời gian ('khi')." },
      { label: "it is cold", content: "Mệnh đề phụ chỉ thời tiết: 'it' + be + tính từ 'cold'." },
      { label: "I + wear", content: "Chủ ngữ 'I' đi với động từ 'wear' (mặc/đeo)." },
      { label: "a jacket", content: "Mạo từ 'a' + danh từ số ít 'jacket' làm tân ngữ." },
    ],
    chunks: [
      c("When", "khi", "/wɛn/", "connector", "Từ nối chỉ thời gian", "Dùng để bắt đầu mệnh đề chỉ thời điểm hoặc điều kiện."),
      c("it is cold", "trời lạnh", "/ɪt ɪz koʊld/", "adjective", "Mệnh đề phụ miêu tả thời tiết", "Dùng 'it is' với tính từ 'cold' để nói thời tiết lạnh."),
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("wear", "mặc", "/wɪr/", "verb", "Động từ hành động", "Dùng khi mặc quần áo hoặc mang phụ kiện."),
      c("a jacket", "một chiếc áo khoác", "/ə ˈdʒækɪt/", "noun", "Cụm danh từ số ít làm tân ngữ", "Danh từ đếm được số ít đi với mạo từ không xác định 'a'."),
    ],
  },
  {
    id: "l6-s5",
    ipa: "/aɪ laɪk wɔːrm ˈwɛðər/",
    en: "I like warm weather.",
    vi: "Tôi thích thời tiết ấm áp.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tính từ + danh từ (tân ngữ)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "warm weather", content: "Cụm danh từ làm tân ngữ: tính từ 'warm' đứng trước danh từ không đếm được 'weather'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích."),
      c("warm weather", "thời tiết ấm áp", "/wɔːrm ˈwɛðər/", "noun", "Cụm danh từ làm tân ngữ", "Tính từ 'warm' đứng trước danh từ không đếm được 'weather'."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson06Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "Today is _____________ and _____________.",
      meaning: "Hôm nay trời ... và ...",
      example: "Today is sunny and warm.",
      alternatives: ["sunny and warm", "cold and rainy", "cool and sunny"],
    },
    {
      term: "I like _____________ because I can go outside.",
      meaning: "Tôi thích ... vì tôi có thể ra ngoài.",
      example: "I like sunny days because I can go outside.",
      alternatives: ["sunny days", "warm weather"],
    },
    {
      term: "Sometimes it is _____________, so I stay at home.",
      meaning: "Đôi khi trời ..., nên tôi ở nhà.",
      example: "Sometimes it is rainy, so I stay at home.",
      alternatives: ["rainy", "cold"],
    },
    {
      term: "When it is _____________, I wear a jacket.",
      meaning: "Khi trời ..., tôi mặc áo khoác.",
      example: "When it is cold, I wear a jacket.",
      alternatives: ["cold", "cool"],
    },
    {
      term: "I like _____________ weather.",
      meaning: "Tôi thích thời tiết ...",
      example: "I like warm weather.",
      alternatives: ["warm", "sunny", "cool"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson06Sentences = sentences;