import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l12-s1",
    ipa: "/aɪ hæv tuː aɪz, tuː ɪrz, ænd tuː hændz/",
    en: "I have two eyes, two ears, and two hands.",
    vi: "Tôi có hai mắt, hai tai và hai bàn tay.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (have) + số đếm + danh từ số nhiều, số đếm + danh từ số nhiều, and + số đếm + danh từ số nhiều." },
      { label: "I + have", content: "Chủ ngữ 'I' đi với động từ 'have' (có)." },
      { label: "two eyes, two ears, and two hands", content: "Các cụm số lượng và bộ phận cơ thể ở dạng số nhiều (thêm -s/-es)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("have", "có", "/hæv/", "verb", "Động từ chỉ sự sở hữu", "Dùng để chỉ các bộ phận trên cơ thể."),
      c("two eyes", "hai mắt", "/tuː aɪz/", "noun", "Tân ngữ (số + danh từ số nhiều)", "'eyes' là dạng số nhiều của 'eye'."),
      c("two ears", "hai tai", "/tuː ɪrz/", "noun", "Tân ngữ (số + danh từ số nhiều)", "'ears' là dạng số nhiều của 'ear'."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối thành phần cuối cùng trong danh sách liệt kê."),
      c("two hands", "hai bàn tay", "/tuː hændz/", "noun", "Tân ngữ (số + danh từ số nhiều)", "'hands' là dạng số nhiều của 'hand'."),
    ],
  },
  {
    id: "l12-s2",
    ipa: "/aɪ brʌʃ maɪ tiːθ ˈɛvri ˈmɔːrnɪŋ ænd naɪt/",
    en: "I brush my teeth every morning and night.",
    vi: "Tôi đánh răng vào mỗi buổi sáng và tối.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + trạng từ chỉ thời gian (every + danh từ 1 + and + danh từ 2)." },
      { label: "I + brush", content: "Chủ ngữ 'I' đi với động từ 'brush' (đánh/chải)." },
      { label: "my teeth", content: "Tính từ sở hữu 'my' + danh từ số nhiều bất quy tắc 'teeth' (răng)." },
      { label: "every morning and night", content: "Cụm trạng từ chỉ thời gian lặp lại ('mỗi sáng và tối')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("brush", "đánh / chải", "/brʌʃ/", "verb", "Động từ hành động", "Dùng trong cụm 'brush teeth' (đánh răng)."),
      c("my teeth", "răng của tôi", "/maɪ tiːθ/", "noun", "Tân ngữ", "'teeth' là dạng số nhiều bất quy tắc của 'tooth'."),
      c("every morning and night", "mỗi buổi sáng và tối", "/ˈɛvri ˈmɔːrnɪŋ ænd naɪt/", "adverb", "Trạng từ chỉ thời gian", "Cụm trạng từ chỉ thời gian lặp lại trong ngày."),
    ],
  },
  {
    id: "l12-s3",
    ipa: "/aɪ drɪŋk ˈwɔtər ˈɛvri deɪ/",
    en: "I drink water every day.",
    vi: "Tôi uống nước mỗi ngày.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + trạng từ chỉ tần suất." },
      { label: "I + drink", content: "Chủ ngữ 'I' đi với động từ 'drink'." },
      { label: "water", content: "Danh từ không đếm được làm tân ngữ." },
      { label: "every day", content: "Trạng từ chỉ tần suất 'mỗi ngày'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("drink", "uống", "/drɪŋk/", "verb", "Động từ hành động", "Dùng cho đồ uống."),
      c("water", "nước", "/ˈwɔtər/", "noun", "Tân ngữ (danh từ không đếm được)", "Chất lỏng thiết yếu cho cơ thể."),
      c("every day", "mỗi ngày", "/ˈɛvri deɪ/", "adverb", "Trạng từ chỉ tần suất", "Viết tách thành hai từ khi làm trạng từ."),
    ],
  },
  {
    id: "l12-s4",
    ipa: "/aɪ iːt fruːt ænd ˈvɛʤtəbəlz bɪˈkʌz ðeɪ ɑːr gʊd fɔːr miː/",
    en: "I eat fruit and vegetables because they are good for me.",
    vi: "Tôi ăn trái cây và rau củ vì chúng tốt cho tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + because + mệnh đề nguyên nhân (S + be + adjective + cụm giới từ)." },
      { label: "I + eat", content: "Chủ ngữ 'I' đi với động từ 'eat' (ăn)." },
      { label: "fruit and vegetables", content: "Cụm tân ngữ gồm các loại thực phẩm tốt cho sức khỏe." },
      { label: "because", content: "Từ nối chỉ nguyên nhân ('vì')." },
      { label: "they are good for me", content: "Mệnh đề nguyên nhân chứa tính từ 'good' và cấu trúc 'good for' (tốt cho ai)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("eat", "ăn", "/iːt/", "verb", "Động từ hành động", "Chỉ hành động ăn uống."),
      c("fruit and vegetables", "trái cây và rau củ", "/fruːt ænd ˈvɛʤtəbəlz/", "noun", "Tân ngữ (cụm danh từ)", "'fruit' là danh từ không đếm được, 'vegetables' là danh từ số nhiều."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do ăn uống lành mạnh."),
      c("they are good for me", "chúng tốt cho tôi", "/ðeɪ ɑːr gʊd fɔːr miː/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "Cấu trúc 'good for' đi với đại từ tân ngữ 'me'."),
    ],
  },
  {
    id: "l12-s5",
    ipa: "/aɪ gʊ fɔːr ə wɔːk tə steɪ ˈhɛlθi/",
    en: "I go for a walk to stay healthy.",
    vi: "Tôi đi dạo để giữ gìn sức khỏe.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + cụm giới từ (for a walk) + to-infinitive chỉ mục đích (to + stay + adjective)." },
      { label: "I + go", content: "Chủ ngữ 'I' đi với động từ 'go'." },
      { label: "for a walk", content: "Cụm giới từ cố định chỉ hoạt động đi dạo ('go for a walk')." },
      { label: "to stay healthy", content: "Cụm động từ nguyên mẫu có 'to' chỉ mục đích ('để duy trì sự khỏe mạnh')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("go", "đi", "/goʊ/", "verb", "Động từ hành động", "Dùng trong cụm đi dạo."),
      c("for a walk", "để đi dạo", "/fɔːr ə wɔːk/", "preposition", "Cụm giới từ chỉ hoạt động", "Cụm cố định 'go for a walk' nghĩa là đi dạo thư giãn."),
      c("to stay healthy", "để giữ sức khỏe", "/tə steɪ ˈhɛlθi/", "verb", "Cụm động từ nguyên mẫu có to chỉ mục đích", "'healthy' là tính từ đứng sau động từ trạng thái 'stay'."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson12Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I have two _____________, two _____________, and two _____________.",
      meaning: "Tôi có hai ..., hai ..., và hai ...",
      example: "I have two eyes, two ears, and two hands.",
      alternatives: ["eyes, ears, and hands", "arms, legs, and feet"],
    },
    {
      term: "I brush my teeth every _____________ and _____________.",
      meaning: "Tôi đánh răng mỗi ... và ...",
      example: "I brush my teeth every morning and night.",
      alternatives: ["morning and night", "morning and evening"],
    },
    {
      term: "I drink _____________ every day.",
      meaning: "Tôi uống ... mỗi ngày.",
      example: "I drink water every day.",
      alternatives: ["water", "milk", "juice"],
    },
    {
      term: "I eat fruit and vegetables because they are good for _____________.",
      meaning: "Tôi ăn trái cây và rau củ vì chúng tốt cho ...",
      example: "I eat fruit and vegetables because they are good for me.",
      alternatives: ["me", "us", "everyone"],
    },
    {
      term: "I go for a walk to stay _____________.",
      meaning: "Tôi đi dạo để giữ ...",
      example: "I go for a walk to stay healthy.",
      alternatives: ["healthy", "active"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson12Sentences = sentences;