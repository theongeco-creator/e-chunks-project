import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

const sentences: LessonSentence[] = [
  {
    id: "l06-s1",
    ipa: "/təˈdeɪ ɪz ˈsʌni ænd wɔrm/",
    en: "Today is sunny and warm.",
    vi: "Hôm nay trời nắng và ấm áp.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + be + coordinated adjective complements." },
      { label: "Today", content: "Chủ ngữ 'Today' (Hôm nay)." },
      { label: "is sunny and warm", content: "Động từ tobe 'is' + các tính từ bổ ngữ 'sunny and warm' nối bằng từ nối 'and'." },
    ],
    chunks: [
      c("Today", "hôm nay", "/təˈdeɪ/", "noun", "Chủ ngữ", "Danh từ chỉ thời gian."),
      c("is", "thì / là", "/ɪz/", "verb", "Động từ tobe", "Chia ở thì hiện tại đơn cho chủ ngữ số ít."),
      c("sunny", "nắng", "/ˈsʌni/", "adjective", "Tính từ miêu tả thứ nhất", "Chỉ thời tiết có nắng."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai tính từ miêu tả thời tiết."),
      c("warm", "ấm áp", "/wɔrm/", "adjective", "Tính từ miêu tả thứ hai", "Chỉ nhiệt độ ấm."),
    ],
  },
  {
    id: "l06-s2",
    ipa: "/aɪ laɪk ˈsʌni deɪz bɪˈkʌz aɪ kæn ɡoʊ ˈaʊtˌsaɪd/",
    en: "I like sunny days because I can go outside.",
    vi: "Tôi thích những ngày nắng vì tôi có thể ra ngoài.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + object phrase + because-clause (S + modal verb + verb + adverbial place)." },
      { label: "I like sunny days", content: "Chủ ngữ 'I' + động từ 'like' + tân ngữ 'sunny days'." },
      { label: "because I can go outside", content: "Liên từ nguyên nhân 'because' + chủ ngữ 'I' + động từ khuyết thiếu 'can' + động từ 'go' + trạng từ 'outside'." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chính", "Chỉ sở thích."),
      c("sunny days", "những ngày nắng", "/ˈsʌni deɪz/", "noun", "Tân ngữ trực tiếp của like", "Tính từ 'sunny' + danh từ số nhiều 'days'."),
      c("because", "bởi vì", "/bɪˈkʌz/", "connector", "Liên từ chỉ nguyên nhân", "Nối mệnh đề chính và mệnh đề lý do."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ trong mệnh đề lý do", "Ngôi thứ nhất số ít."),
      c("can", "có thể", "/kæn/", "verb", "Trợ động từ khiếm khuyết", "Chỉ khả năng thực hiện hành động."),
      c("go", "đi", "/ɡoʊ/", "verb", "Động từ chính trong mệnh đề lý do", "Chỉ sự di chuyển."),
      c("outside", "ra ngoài", "/ˈaʊtˌsaɪd/", "adverb", "Trạng từ chỉ hướng/nơi chốn", "Chỉ vị trí bên ngoài nhà."),
    ],
  },
  {
    id: "l06-s3",
    ipa: "/ˈsʌmtaɪmz ɪt ɪz ˈreɪni, soʊ aɪ steɪ æt hoʊm/",
    en: "Sometimes it is rainy, so I stay at home.",
    vi: "Đôi khi trời mưa, nên tôi ở nhà.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverb + S + be + adjective + connector + S + verb + prepositional place phrase." },
      { label: "Sometimes it is rainy", content: "Trạng từ tần suất 'Sometimes' + chủ ngữ giả 'it' + tobe 'is' + tính từ 'rainy'." },
      { label: "so I stay at home", content: "Liên từ kết quả 'so' + chủ ngữ 'I' + động từ 'stay' + cụm giới từ 'at home'." },
    ],
    chunks: [
      c("Sometimes", "đôi khi", "/ˈsʌmtaɪmz/", "adverb", "Trạng từ chỉ tần suất", "Đứng đầu câu để chỉ thỉnh thoảng xảy ra."),
      c("it", "nó / trời", "/ɪt/", "noun", "Chủ ngữ giả", "Đại từ dùng để chỉ thời tiết."),
      c("is", "thì", "/ɪz/", "verb", "Động từ tobe", "Chia ở thì hiện tại đơn."),
      c("rainy", "mưa", "/ˈreɪni/", "adjective", "Tính từ bổ ngữ", "Chỉ thời tiết có mưa."),
      c("so", "vì vậy / nên", "/soʊ/", "connector", "Liên từ chỉ kết quả", "Nối hai mệnh đề nhân quả."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ trong mệnh đề kết quả", "Ngôi thứ nhất số ít."),
      c("stay", "ở lại", "/steɪ/", "verb", "Động từ chính", "Chỉ hành động ở một chỗ."),
      c("at home", "ở nhà", "/æt hoʊm/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'at' + danh từ 'home'."),
    ],
  },
  {
    id: "l06-s4",
    ipa: "/wɛn ɪt ɪz koʊld, aɪ wɛr ə ˈdʒækɪt/",
    en: "When it is cold, I wear a jacket.",
    vi: "Khi trời lạnh, tôi mặc áo khoác.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverbial clause of time (When + S + be + adjective) + S + verb + object noun phrase." },
      { label: "When it is cold", content: "Liên từ thời gian 'When' + chủ ngữ giả 'it' + tobe 'is' + tính từ 'cold'." },
      { label: "I wear a jacket", content: "Chủ ngữ 'I' + động từ 'wear' + tân ngữ 'a jacket'." },
    ],
    chunks: [
      c("When", "khi", "/wɛn/", "connector", "Liên từ thời gian", "Mở đầu mệnh đề trạng ngữ thời gian."),
      c("it", "nó / trời", "/ɪt/", "noun", "Chủ ngữ giả trong mệnh đề thời gian", "Đại từ chỉ thời tiết."),
      c("is", "thì", "/ɪz/", "verb", "Động từ tobe", "Chia ở thì hiện tại đơn."),
      c("cold", "lạnh", "/koʊld/", "adjective", "Tính từ bổ ngữ chỉ nhiệt độ", "Chỉ thời tiết lạnh."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ trong mệnh đề chính", "Ngôi thứ nhất số ít."),
      c("wear", "mặc", "/wɛr/", "verb", "Động từ chính", "Chỉ hành động mặc trang phục."),
      c("a jacket", "một chiếc áo khoác", "/ə ˈdʒækɪt/", "noun", "Tân ngữ trực tiếp của wear", "Mạo từ 'a' + danh từ 'jacket'."),
    ],
  },
  {
    id: "l06-s5",
    ipa: "/aɪ laɪk wɔrm ˈwɛðər/",
    en: "I like warm weather.",
    vi: "Tôi thích thời tiết ấm áp.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + object noun phrase." },
      { label: "I like warm weather", content: "Chủ ngữ 'I' + động từ 'like' + tân ngữ 'warm weather'." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chính", "Chỉ sở thích."),
      c("warm weather", "thời tiết ấm áp", "/wɔrm ˈwɛðər/", "noun", "Tân ngữ trực tiếp của like", "Tính từ 'warm' + danh từ 'weather'."),
    ],
  },
];

export const lesson06Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "Today is _____________ and warm.",
      meaning: "Hôm nay trời ... và ấm áp.",
      example: "Today is sunny and warm.",
      alternatives: ["sunny", "fine", "clear"],
    },
    {
      term: "I like sunny days because I can go _____________.",
      meaning: "Tôi thích những ngày nắng vì tôi có thể đi ...",
      example: "I like sunny days because I can go outside.",
      alternatives: ["outside", "out", "away"],
    },
    {
      term: "Sometimes it is rainy, so I stay at _____________.",
      meaning: "Đôi khi trời mưa, nên tôi ở ... nhà.",
      example: "Sometimes it is rainy, so I stay at home.",
      alternatives: ["home", "work", "school"],
    },
    {
      term: "When it is cold, I wear a _____________.",
      meaning: "Khi trời lạnh, tôi mặc một chiếc ...",
      example: "When it is cold, I wear a jacket.",
      alternatives: ["jacket", "sweater", "coat"],
    },
    {
      term: "I like warm _____________.",
      meaning: "Tôi thích ... ấm áp.",
      example: "I like warm weather.",
      alternatives: ["weather", "days", "seasons"],
    },
  ],
};

export const lesson06Sentences = sentences;