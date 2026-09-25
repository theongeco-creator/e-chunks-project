import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l2-s1",
    ipa: "/maɪ neɪm ɪz ˈænə/",
    en: "My name is Anna.",
    vi: "Tên tôi là Anna.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Câu giới thiệu tên: Tính từ sở hữu + name + be + tên riêng." },
      { label: "My name", content: "'My' (của tôi) + danh từ 'name' làm chủ ngữ." },
      { label: "is", content: "Động từ 'be' chia 'is' vì chủ ngữ 'my name' là số ít." },
      { label: "Anna", content: "Tên riêng, đứng sau 'be' để nói rõ tên là gì." },
    ],
    chunks: [
      c("My name", "Tên tôi", "/maɪ neɪm/", "noun", "Chủ ngữ", "Dùng để nói về tên của bản thân."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ số ít với thông tin phía sau."),
      c("Anna", "Anna", "/ˈænə/", "noun", "Bổ ngữ (tên riêng)", "Thay bằng tên của bạn."),
    ],
  },
  {
    id: "l2-s2",
    ipa: "/aɪ æm ˈtwenti jɪrz oʊld/",
    en: "I am twenty years old.",
    vi: "Tôi hai mươi tuổi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + be + số + years old: dùng để nói tuổi." },
      { label: "I + am", content: "Chủ ngữ 'I' đi với 'am'. Tiếng Anh dùng 'be' để nói tuổi, không dùng 'have'." },
      { label: "twenty years old", content: "Số đếm + years old. Từ 2 tuổi trở lên dùng 'years' (số nhiều)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("am", "là / thì", "/æm/", "verb", "Động từ tobe", "Chỉ đi với chủ ngữ 'I'."),
      c("twenty years old", "hai mươi tuổi", "/ˈtwenti jɪrz oʊld/", "adjective", "Cụm chỉ tuổi", "Nói tuổi: be + số + years old (không dùng 'have')."),
    ],
  },
  {
    id: "l2-s3",
    ipa: "/aɪ hæv tuː ˈbrʌðərz ænd wʌn ˈsɪstər/",
    en: "I have two brothers and one sister.",
    vi: "Tôi có hai anh/em trai và một chị/em gái.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + have + số lượng + danh từ: nói về số người thân." },
      { label: "I + have", content: "Chủ ngữ 'I' đi với động từ nguyên mẫu 'have'." },
      { label: "two brothers", content: "Số đếm + danh từ số nhiều (thêm -s)." },
      { label: "and", content: "Từ nối hai cụm danh từ." },
      { label: "one sister", content: "'one' + danh từ số ít, không thêm -s." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("have", "có", "/hæv/", "verb", "Động từ", "Dùng để nói về sở hữu hoặc người thân."),
      c("two brothers", "hai anh/em trai", "/tuː ˈbrʌðərz/", "noun", "Cụm danh từ số nhiều", "Số từ 2 trở lên thì danh từ thêm -s. 'brother' gồm cả anh và em trai."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai cụm cùng loại."),
      c("one sister", "một chị/em gái", "/wʌn ˈsɪstər/", "noun", "Cụm danh từ số ít", "Số 'one' thì danh từ giữ nguyên số ít."),
    ],
  },
  {
    id: "l2-s4",
    ipa: "/maɪ foʊn ˈnʌmbər ɪz wʌn tuː θriː fɔːr faɪv sɪks ˈsevn eɪt naɪn/",
    en: "My phone number is 123-456-789.",
    vi: "Số điện thoại của tôi là 123-456-789.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + danh từ + be + thông tin." },
      { label: "My phone number", content: "'My' + cụm danh từ 'phone number' làm chủ ngữ." },
      { label: "is", content: "Động từ 'be' chia 'is' vì chủ ngữ là số ít." },
      { label: "123-456-789", content: "Số điện thoại đọc từng chữ số một, nghỉ giữa mỗi nhóm." },
    ],
    chunks: [
      c("My phone number", "Số điện thoại của tôi", "/maɪ foʊn ˈnʌmbər/", "noun", "Chủ ngữ", "Dùng để đọc hoặc hỏi số điện thoại."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ số ít với thông tin phía sau."),
      c("123-456-789", "một hai ba, bốn năm sáu, bảy tám chín", "/wʌn tuː θriː fɔːr faɪv sɪks ˈsevn eɪt naɪn/", "noun", "Bổ ngữ (dãy số)", "Đọc từng chữ số, nghỉ giữa các nhóm."),
    ],
  },
  {
    id: "l2-s5",
    ipa: "/maɪ ˈfeɪvərɪt ˈnʌmbər ɪz ˈsevn/",
    en: "My favorite number is seven.",
    vi: "Con số yêu thích của tôi là số bảy.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + favorite + danh từ + be + thông tin: nói điều mình thích nhất." },
      { label: "My favorite number", content: "'favorite' (yêu thích nhất) là tính từ, đứng trước danh từ 'number'." },
      { label: "is", content: "Động từ 'be' chia 'is' vì chủ ngữ là số ít." },
      { label: "seven", content: "Số đếm làm bổ ngữ." },
    ],
    chunks: [
      c("My favorite number", "Con số yêu thích của tôi", "/maɪ ˈfeɪvərɪt ˈnʌmbər/", "noun", "Chủ ngữ", "Có thể thay 'number' bằng color, food, song..."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ số ít với thông tin phía sau."),
      c("seven", "bảy", "/ˈsevn/", "noun", "Bổ ngữ (số đếm)", "Số đếm dùng để trả lời con số yêu thích."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson02Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I am _____________ years old.",
      meaning: "Tôi ... tuổi.",
      example: "I am twenty years old.",
      alternatives: ["twenty", "eighteen", "twenty-five", "thirty"],
    },
    {
      term: "I have _____________.",
      meaning: "Tôi có ...",
      example: "I have two brothers.",
      alternatives: ["two brothers", "one sister", "three cousins"],
    },
    {
      term: "My phone number is _____________.",
      meaning: "Số điện thoại của tôi là ...",
      example: "My phone number is 123-456-789.",
      alternatives: ["123-456-789", "098-765-432"],
    },
    {
      term: "My favorite number is _____________.",
      meaning: "Con số yêu thích của tôi là ...",
      example: "My favorite number is seven.",
      alternatives: ["seven", "three", "ten", "eight"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson02Sentences = sentences;