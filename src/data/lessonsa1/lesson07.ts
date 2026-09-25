import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l7-s1",
    ipa: "/aɪ laɪk raɪs, ˈʧɪkɪn, ænd ˈvɛʤtəbəlz/",
    en: "I like rice, chicken, and vegetables.",
    vi: "Tôi thích cơm, thịt gà và rau củ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + danh từ 1, danh từ 2, and danh từ 3 (liệt kê danh từ)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "rice, chicken, and vegetables", content: "Chuỗi danh từ/thực phẩm được liệt kê, ngăn cách bởi dấu phẩy và từ nối 'and'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích đối với đồ ăn."),
      c("rice", "cơm / gạo", "/raɪs/", "noun", "Tân ngữ (danh từ không đếm được)", "Thực phẩm chính trong bữa ăn."),
      c("chicken", "thịt gà", "/ˈʧɪkɪn/", "noun", "Tân ngữ (danh từ không đếm được)", "Chỉ món ăn hoặc thịt gà."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Dùng để kết nối thành phần cuối cùng trong chuỗi liệt kê."),
      c("vegetables", "rau củ", "/ˈvɛʤtəbəlz/", "noun", "Tân ngữ (danh từ số nhiều)", "Danh từ số nhiều thêm -s chỉ các loại rau củ."),
    ],
  },
  {
    id: "l7-s2",
    ipa: "/aɪ ˈjuːʒuəli hæv ˈbrɛkfəst wɪð brɛd ænd mɪlk/",
    en: "I usually have breakfast with bread and milk.",
    vi: "Tôi thường ăn sáng với bánh mì và sữa.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + trạng từ tần suất + verb + tân ngữ + cụm giới từ (with + danh từ)." },
      { label: "I + usually have", content: "Chủ ngữ 'I' + trạng từ tần suất 'usually' + động từ 'have'." },
      { label: "breakfast", content: "Danh từ chỉ bữa ăn ('have breakfast': ăn sáng)." },
      { label: "with bread and milk", content: "Cụm giới từ chỉ sự đi kèm: 'with' + các thực phẩm ăn kèm." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ thường để chỉ mức độ thường xuyên."),
      c("have breakfast", "có bữa sáng", "/hæv ˈbrɛkfəst/", "verb", "Động từ", "Dùng trong cụm từ 'have breakfast' (ăn sáng)."),
      c("with bread and milk", "với bánh mì và sữa", "/wɪð brɛd ænd mɪlk/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với các món ăn kèm trong bữa."),
    ],
  },
  {
    id: "l7-s3",
    ipa: "/aɪ drɪŋk ˈwɔtər ˈɛvri deɪ/",
    en: "I drink water every day.",
    vi: "Tôi uống nước mỗi ngày.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + trạng từ chỉ thời gian/tần suất." },
      { label: "I + drink", content: "Chủ ngữ 'I' đi với động từ 'drink'." },
      { label: "water", content: "Danh từ không đếm được làm tân ngữ." },
      { label: "every day", content: "Trạng từ chỉ tần suất 'mỗi ngày' (viết tách thành hai từ)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("drink", "uống", "/drɪŋk/", "verb", "Động từ hành động", "Dùng cho đồ uống nước, sữa, trà..."),
      c("water", "nước", "/ˈwɔtər/", "noun", "Tân ngữ (danh từ không đếm được)", "Chất lỏng thiết yếu cho cơ thể."),
      c("every day", "mỗi ngày", "/ˈɛvri deɪ/", "adverb", "Trạng từ chỉ tần suất", "Ghi nhớ viết tách thành hai từ 'every day' khi làm trạng từ."),
    ],
  },
  {
    id: "l7-s4",
    ipa: "/maɪ ˈfeɪvərɪt drɪŋk ɪz ˈɔrinʤ ʤuːs/",
    en: "My favorite drink is orange juice.",
    vi: "Đồ uống yêu thích của tôi là nước cam.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + favorite + danh từ + be + bổ ngữ." },
      { label: "My favorite drink", content: "'My' + tính từ 'favorite' + danh từ 'drink' làm chủ ngữ." },
      { label: "is", content: "Động từ 'be' chia 'is' vì chủ ngữ số ít." },
      { label: "orange juice", content: "Cụm danh từ làm bổ ngữ chỉ loại nước ép." },
    ],
    chunks: [
      c("My favorite drink", "đồ uống yêu thích của tôi", "/maɪ ˈfeɪvərɪt drɪŋk/", "noun", "Chủ ngữ", "Cụm danh từ chỉ đồ uống ưa thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ với thông tin phía sau."),
      c("orange juice", "nước cam", "/ˈɔrinʤ ʤuːs/", "noun", "Bổ ngữ (cụm danh từ)", "Danh từ chỉ nước ép trái cây cam."),
    ],
  },
  {
    id: "l7-s5",
    ipa: "/aɪ laɪk ˈsɪmpəl fuːd bɪˈkʌz ɪz gʊd ænd ˈiːzi tuː iːt/",
    en: "I like simple food because it is good and easy to eat.",
    vi: "Tôi thích đồ ăn đơn giản vì nó ngon và dễ ăn.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + because + mệnh đề nguyên nhân (S + be + adjectives + to-infinitive)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "simple food", content: "Tính từ 'simple' + danh từ không đếm được 'food' làm tân ngữ." },
      { label: "because", content: "Từ nối biểu thị nguyên nhân ('vì')." },
      { label: "it is", content: "'It' thay cho món ăn đã nhắc tới; 'is' vì chủ ngữ số ít." },
      { label: "good and easy", content: "Hai tính từ nối bằng 'and', cùng đứng sau 'be'." },
      { label: "easy to eat", content: "Cấu trúc tính từ + to + động từ: dễ để làm gì. Dùng tương tự: easy to use, easy to learn." },
   ],
    chunks: [
    c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
    c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích."),
    c("simple food", "đồ ăn đơn giản", "/ˈsɪmpəl fuːd/", "noun", "Tân ngữ (cụm danh từ)", "Tính từ 'simple' đứng trước danh từ 'food'."),
    c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do."),
    c("it", "nó / món này", "/ɪt/", "noun", "Chủ ngữ", "Đại từ thay cho vật đã nhắc tới."),
    c("is", "thì / là", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ số ít với tính từ phía sau."),
    c("good", "ngon / tốt", "/ɡʊd/", "adjective", "Tính từ (bổ ngữ)"),
    c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai tính từ cùng loại."),
    c("easy", "dễ", "/ˈiːzi/", "adjective", "Tính từ (bổ ngữ)"),
    c("to eat", "để ăn", "/tə iːt/", "verb", "To + động từ", "Bổ nghĩa cho 'easy': dễ để làm gì."),
  ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson07Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I like _____________, _____________, and _____________.",
      meaning: "Tôi thích ..., ..., và ...",
      example: "I like rice, chicken, and vegetables.",
      alternatives: ["rice, chicken, and vegetables", "bread, milk, and fruit"],
    },
    {
      term: "I usually have breakfast with _____________ and _____________.",
      meaning: "Tôi thường ăn sáng với ... và ...",
      example: "I usually have breakfast with bread and milk.",
      alternatives: ["bread and milk", "rice and eggs"],
    },
    {
      term: "I drink _____________ every day.",
      meaning: "Tôi uống ... mỗi ngày.",
      example: "I drink water every day.",
      alternatives: ["water", "milk", "orange juice"],
    },
    {
      term: "My favorite drink is _____________.",
      meaning: "Đồ uống yêu thích của tôi là ...",
      example: "My favorite drink is orange juice.",
      alternatives: ["orange juice", "milk", "water"],
    },
    {
      term: "I like _____________ food because it is good and easy to eat.",
      meaning: "Tôi thích đồ ăn ... vì nó ngon và dễ ăn.",
      example: "I like simple food because it is good and easy to eat.",
      alternatives: ["simple", "healthy", "delicious"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson07Sentences = sentences;