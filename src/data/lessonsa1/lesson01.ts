import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l1-s1",
    ipa: "/həˈloʊ/",
    en: "Hello!",
    vi: "Xin chào!",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Câu chào hỏi thông dụng khi gặp nhau." },
      { label: "Hello", content: "Thán từ chào hỏi, dùng được ở mọi hoàn cảnh." },
    ],
    chunks: [
      c("Hello", "Xin chào", "/həˈloʊ/", "default", "Lời chào", "Dùng để chào khi gặp nhau."),
    ],
  },
  {
    id: "l1-s2",
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
    id: "l1-s3",
    ipa: "/aɪ æm ˈhæpi tə siː maɪ frend/",
    en: "I am happy to see my friend.",
    vi: "Tôi rất vui được gặp bạn của mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + be + tính từ + to + động từ: nói lý do của cảm xúc." },
      { label: "I + am", content: "Chủ ngữ 'I' luôn đi với 'am'." },
      { label: "happy", content: "Tính từ chỉ cảm xúc, đứng sau 'be'." },
      { label: "to see", content: "'to + động từ' giải thích lý do vui: vì được gặp." },
      { label: "my friend", content: "Tính từ sở hữu 'my' + danh từ 'friend' làm tân ngữ của 'see'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("am", "là / thì", "/æm/", "verb", "Động từ tobe", "Chỉ đi với chủ ngữ 'I'."),
      c("happy", "vui vẻ, hạnh phúc", "/ˈhæpi/", "adjective", "Tính từ (bổ ngữ)", "Dùng để diễn tả cảm xúc tích cực."),
      c("to see", "để gặp / nhìn thấy", "/tə siː/", "verb", "To + động từ", "Diễn tả mục đích hoặc lý do của cảm xúc."),
      c("my friend", "bạn của tôi", "/maɪ frend/", "noun", "Cụm danh từ", "Chỉ người bạn đồng hành hoặc người quen."),
    ],
  },
  {
    id: "l1-s4",
    ipa: "/aɪ seɪ haɪ haʊ ɑːr juː/",
    en: "I say, “Hi! How are you?”",
    vi: "Tôi nói, \"Chào bạn! Bạn thế nào?\"",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Thì hiện tại đơn: S + động từ, rồi trích lời nói." },
      { label: "I + say", content: "Chủ ngữ 'I' đi với động từ nguyên mẫu 'say'." },
      { label: "Hi", content: "Lời chào thân mật, ngắn hơn 'Hello'." },
      { label: "How are you", content: "Câu hỏi thăm sức khỏe cố định: How + are + you." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("say", "nói", "/seɪ/", "verb", "Động từ", "Dùng để thể hiện hành động phát ngôn, chào hỏi."),
      c("Hi", "Chào", "/haɪ/", "default", "Lời chào", "Cách chào thân mật, ngắn gọn."),
      c("How are you", "Bạn khỏe không?", "/haʊ ɑːr juː/", "default", "Câu hỏi thăm", "Câu hỏi thăm sức khỏe quen thuộc khi gặp nhau."),
    ],
  },
  {
    id: "l1-s5",
    ipa: "/maɪ frend sez aɪm faɪn θæŋk juː/",
    en: "My friend says, “I’m fine, thank you.”",
    vi: "Bạn của tôi nói, \"Mình khỏe, cảm ơn bạn.\"",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Thì hiện tại đơn ngôi thứ 3 số ít, trích lời trả lời." },
      { label: "My friend + says", content: "Chủ ngữ ngôi thứ 3 số ít nên động từ thêm '-s': say → says." },
      { label: "I’m", content: "Viết tắt của 'I am'." },
      { label: "fine", content: "Tính từ chỉ trạng thái ổn, dùng để trả lời 'How are you?'." },
      { label: "thank you", content: "Cụm cố định để bày tỏ lòng biết ơn." },
    ],
    chunks: [
      c("My friend", "Bạn của tôi", "/maɪ frend/", "noun", "Chủ ngữ", "Chỉ người bạn đồng hành hoặc người quen."),
      c("says", "nói", "/sez/", "verb", "Động từ (ngôi 3 số ít)", "Thêm '-s' khi chủ ngữ là ngôi thứ 3 số ít."),
      c("I’m", "Tôi thì", "/aɪm/", "noun", "Chủ ngữ + tobe (viết tắt)", "Viết tắt của 'I am'."),
      c("fine", "khỏe / ổn", "/faɪn/", "adjective", "Tính từ (bổ ngữ)", "Dùng để trả lời khi được hỏi thăm về trạng thái."),
      c("thank you", "cảm ơn bạn", "/θæŋk juː/", "default", "Cụm cố định", "Dùng để bày tỏ sự biết ơn trong giao tiếp."),
    ],
  },
  {
    id: "l1-s6",
    ipa: "/wiː seɪ ˌɡʊdˈbaɪ/",
    en: "We say, “Goodbye!”",
    vi: "Chúng tôi nói, \"Tạm biệt!\"",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Thì hiện tại đơn: S + động từ, rồi trích lời nói." },
      { label: "We + say", content: "Chủ ngữ số nhiều 'We' đi với động từ nguyên mẫu 'say'." },
      { label: "Goodbye", content: "Lời tạm biệt khi chia tay." },
    ],
    chunks: [
      c("We", "Chúng tôi", "/wiː/", "noun", "Chủ ngữ", "Ngôi thứ nhất số nhiều."),
      c("say", "nói", "/seɪ/", "verb", "Động từ", "Dùng để thể hiện hành động phát ngôn, chào hỏi."),
      c("Goodbye", "Tạm biệt", "/ˌɡʊdˈbaɪ/", "default", "Lời chào tạm biệt", "Dùng khi chia tay."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson01Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "My name is _____________",
      meaning: "Tên của tôi là...",
      example: "My name is Anna.",
      alternatives: ["Anna", "John", "Linh", "David", "Minh"],
    },
    {
      term: "I am _____________",
      meaning: "Tôi cảm thấy / là...",
      example: "I am happy.",
      alternatives: ["happy", "fine", "good", "excited", "ready"],
    },
    {
      term: "How are _____________?",
      meaning: "... có khỏe không?",
      example: "How are you?",
      alternatives: ["you", "they", "we"],
    },
    {
      term: "thank _____________",
      meaning: "cảm ơn ...",
      example: "Thank you.",
      alternatives: ["you", "so much", "a lot"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson01Sentences = sentences;