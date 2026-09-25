import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l8-s1",
    ipa: "/ðɛr ɑːr fɔːr ˈpiːpəl ɪn maɪ ˈfæmɪli/",
    en: "There are four people in my family.",
    vi: "Có bốn người trong gia đình tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc tồn tại: There + be + số lượng + danh từ số nhiều + cụm giới từ chỉ địa điểm." },
      { label: "There are", content: "Cấu trúc 'There are' dùng với danh từ đếm được số nhiều ('four people')." },
      { label: "four people", content: "Số đếm 'four' + danh từ số nhiều bất quy tắc 'people' (người)." },
      { label: "in my family", content: "Cụm giới từ chỉ địa điểm/phạm vi 'trong gia đình của tôi'." },
    ],
    chunks: [
      c("There are", "có", "/ðɛr ɑːr/", "verb", "Động từ tobe (cấu trúc There are)", "Dùng để chỉ sự tồn tại của từ hai người/vật trở lên."),
      c("four people", "bốn người", "/fɔːr ˈpiːpəl/", "noun", "Cụm danh từ số nhiều", "'people' là dạng số nhiều của 'person'."),
      c("in my family", "trong gia đình của tôi", "/ɪn maɪ ˈfæmɪli/", "preposition", "Cụm giới từ chỉ phạm vi", "Giới từ 'in' đi với danh từ chỉ gia đình."),
    ],
  },
  {
    id: "l8-s2",
    ipa: "/aɪ lɪv wɪð maɪ ˈpɛrənts ænd maɪ ˈjʌŋɡər ˈbrʌðər/",
    en: "I live with my parents and my younger brother.",
    vi: "Tôi sống cùng bố mẹ và em trai tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + cụm giới từ chỉ sự đi kèm (with + danh từ 1 + and + danh từ 2)." },
      { label: "I + live", content: "Chủ ngữ 'I' đi với động từ nguyên mẫu 'live'." },
      { label: "with my parents", content: "Cụm giới từ chỉ sự đi kèm: 'with' + tính từ sở hữu 'my' + danh từ số nhiều 'parents'." },
      { label: "and", content: "Từ nối kết hợp các thành phần." },
      { label: "my younger brother", content: "Cụm danh từ chỉ thành viên trong gia đình ('younger brother': em trai)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("live", "sống / ở", "/lɪv/", "verb", "Động từ hành động", "Chỉ nơi ở hoặc sinh sống cùng ai đó."),
      c("with my parents", "với bố mẹ của tôi", "/wɪð maɪ ˈpɛrənts/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' nghĩa là cùng với, 'parents' luôn dùng số nhiều cho cả bố và mẹ."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Dùng để nối các cụm danh từ cùng loại."),
      c("my younger brother", "em trai của tôi", "/maɪ ˈjʌŋɡər ˈbrʌðər/", "noun", "Cụm danh từ làm tân ngữ", "'younger' dùng để chỉ người em (nhỏ tuổi hơn)."),
    ],
  },
  {
    id: "l8-s3",
    ipa: "/maɪ ˈbrʌðər ɪz ə ˈstuːdənt, ænd hiː ɪz ˈvɛri ˈfʌni/",
    en: "My brother is a student, and he is very funny.",
    vi: "Em trai tôi là học sinh, và cậu ấy rất hài hước.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề 1 (S + be + danh từ) + and + mệnh đề 2 (S + be + trạng từ + tính từ)." },
      { label: "My brother is a student", content: "Chủ ngữ 'My brother' + be 'is' + mạo từ 'a' + danh từ 'student'." },
      { label: "and", content: "Từ nối hai mệnh đề độc lập." },
      { label: "he is very funny", content: "Đại từ 'he' + be 'is' + trạng từ mức độ 'very' + tính từ 'funny'." },
    ],
    chunks: [
      c("My brother", "em trai của tôi", "/maɪ ˈbrʌðər/", "noun", "Chủ ngữ", "Cụm danh từ chỉ người thân số ít."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia ở số ít."),
      c("a student", "một học sinh / sinh viên", "/ə ˈstuːdənt/", "noun", "Bổ ngữ", "Chỉ nghề nghiệp hoặc vai trò đi học."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai mệnh đề với nhau."),
      c("he", "cậu ấy", "/hiː/", "noun", "Chủ ngữ (đại từ)", "Đại từ nhân xưng thay thế cho 'my brother'."),
      c("is", "thì", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ với tính từ miêu tả phía sau."),
      c("very funny", "rất hài hước", "/ˈvɛri ˈfʌni/", "adjective", "Cụm tính từ (bổ ngữ)", "Trạng từ mức độ 'very' đứng trước tính từ 'funny'."),
    ],
  },
  {
    id: "l8-s4",
    ipa: "/aɪ ˈɔfn tɔːk tə maɪ frɛndz ˈæftər skuːl/",
    en: "I often talk to my friends after school.",
    vi: "Tôi thường nói chuyện với bạn bè sau giờ học.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + trạng từ tần suất + verb + cụm giới từ (to + tân ngữ) + cụm giới từ chỉ thời gian (after + danh từ)." },
      { label: "I + often talk", content: "Chủ ngữ 'I' + trạng từ chỉ tần suất 'often' + động từ 'talk'." },
      { label: "to my friends", content: "Cụm giới từ chỉ đối tượng hướng đến ('talk to': nói chuyện với ai)." },
      { label: "after school", content: "Cụm giới từ chỉ thời gian ('sau giờ học')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("often", "thường xuyên", "/ˈɔfn/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ thường để chỉ mức độ thường xuyên."),
      c("talk", "nói chuyện", "/tɔːk/", "verb", "Động từ hành động", "Thường đi với giới từ 'to' khi hướng lời nói đến ai."),
      c("to my friends", "với những người bạn của tôi", "/tə maɪ frɛndz/", "preposition", "Cụm giới từ chỉ đối tượng", "Giới từ 'to' chỉ người nhận hành động nói chuyện, 'friends' ở số nhiều."),
      c("after school", "sau giờ học", "/ˈæftər skuːl/", "preposition", "Cụm giới từ chỉ thời gian", "Cụm từ cố định chỉ khoảng thời gian kết thúc việc học ở trường."),
    ],
  },
  {
    id: "l8-s5",
    ipa: "/wiː laɪk tə pleɪ ɡeɪmz ænd wɑːtʃ ˈmuːviz təˈɡɛðər/",
    en: "We like to play games and watch movies together.",
    vi: "Chúng tôi thích chơi trò chơi và xem phim cùng nhau.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (like) + to-infinitive (động từ nguyên mẫu có to) + cụm tân ngữ + trạng từ." },
      { label: "We + like", content: "Chủ ngữ số nhiều 'We' đi với động từ nguyên mẫu 'like'." },
      { label: "to play games", content: "Động từ nguyên mẫu có 'to' + cụm danh từ làm tân ngữ ('play games': chơi trò chơi)." },
      { label: "and", content: "Từ nối các hành động." },
      { label: "watch movies", content: "Động từ nguyên mẫu ('watch') + cụm danh từ làm tân ngữ ('movies')." },
      { label: "together", content: "Trạng từ chỉ cách thức 'cùng nhau', thường đứng cuối câu." },
    ],
    chunks: [
      c("We", "Chúng tôi / Chúng ta", "/wiː/", "noun", "Chủ ngữ", "Ngôi thứ nhất số nhiều."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Có thể đi sau bởi danh từ hoặc động từ có 'to'."),
      c("to play games", "chơi trò chơi", "/tə pleɪ ɡeɪmz/", "verb", "Cụm động từ nguyên mẫu", "Cấu trúc 'like to do something' chỉ sở thích làm việc gì."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối các hoạt động cùng chia sẻ chung một cấu trúc."),
      c("watch movies", "xem phim", "/wɑːtʃ ˈmuːviz/", "verb", "Cụm động từ hành động", "Danh từ 'movies' ở dạng số nhiều."),
      c("together", "cùng nhau", "/təˈɡɛðər/", "adverb", "Trạng từ chỉ cách thức", "Đứng ở cuối câu để chỉ sự gắn kết cùng thực hiện hành động."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson08Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "There are _____________ people in my family.",
      meaning: "Có ... người trong gia đình tôi.",
      example: "There are four people in my family.",
      alternatives: ["three", "four", "five"],
    },
    {
      term: "I live with my _____________.",
      meaning: "Tôi sống cùng với ...",
      example: "I live with my parents and my younger brother.",
      alternatives: ["parents", "family", "friends"],
    },
    {
      term: "My brother is a _____________.",
      meaning: "Em trai tôi là một ...",
      example: "My brother is a student.",
      alternatives: ["student", "teacher", "doctor"],
    },
    {
      term: "I often talk to my friends _____________.",
      meaning: "Tôi thường nói chuyện với bạn bè ...",
      example: "I often talk to my friends after school.",
      alternatives: ["after school", "in the evening"],
    },
    {
      term: "We like to play games and watch movies _____________.",
      meaning: "Chúng tôi thích chơi trò chơi và xem phim ...",
      example: "We like to play games and watch movies together.",
      alternatives: ["together", "every day"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson08Sentences = sentences;