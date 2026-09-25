import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l1-s1",
    ipa: "/haɪ ˈɛvriwʌn, naɪs tə miːt juː/",
    en: "Hi everyone, nice to meet you!",
    vi: "Xin chào mọi người, rất vui được gặp các bạn!",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Lời chào (Hi everyone) + Câu giao tiếp cố định (nice to meet you!)." },
      { label: "Hi everyone", content: "Lời chào chung ('Hi' + đại từ bất định 'everyone')." },
      { label: "nice to meet you", content: "Cố định giao tiếp diễn tả sự vui mừng khi gặp ai đó." },
    ],
    chunks: [
      c("Hi everyone", "xin chào mọi người", "/haɪ ˈɛvriwʌn/", "default", "Lời chào", "Câu chào mở đầu thân thiện."),
      c("nice to meet you", "rất vui được gặp bạn", "/naɪs tə miːt juː/", "default", "Câu giao tiếp cố định", "Cấu trúc cửa miệng khi gặp mặt lần đầu."),
    ],
  },
  {
    id: "l1-s2",
    ipa: "/maɪ neɪm ɪz lɪŋ, bʌt juː kæn kɔːl miː æn/",
    en: "My name is Linh, but you can call me Ann.",
    vi: "Tên tôi là Linh, nhưng bạn có thể gọi tôi là Ann.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề 1 (Tính từ sở hữu + name + be + tên) + connector (but) + Mệnh đề 2 (S + modal verb + verb + tân ngữ + tên gọi)." },
      { label: "My name", content: "Tính từ sở hữu 'My' + danh từ 'name' làm chủ ngữ." },
      { label: "is", content: "Động từ tobe 'is' chia ở số ít." },
      { label: "Linh", content: "Danh từ riêng chỉ tên." },
      { label: "but", content: "Từ nối biểu thị ý tương phản ('nhưng')." },
      { label: "you can call me Ann", content: "Chủ ngữ 'you' + động từ khiếm khuyết 'can' + động từ 'call' + tân ngữ 'me' + tên gọi 'Ann'." },
    ],
    chunks: [
      c("My name", "tên của tôi", "/maɪ neɪm/", "noun", "Chủ ngữ", "Cụm danh từ chỉ tên gọi."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("Linh", "Linh", "/lɪŋ/", "noun", "Bổ ngữ", "Tên riêng của nhân vật."),
      c("but", "nhưng", "/bʌt/", "connector", "Từ nối", "Dùng để nối hai ý trái ngược nhau."),
      c("you", "bạn", "/juː/", "noun", "Chủ ngữ", "Đại từ nhân xưng ngôi thứ hai."),
      c("can", "có thể", "/kæn/", "verb", "Động từ khiếm khuyết", "Diễn tả khả năng hoặc sự cho phép."),
      c("call", "gọi", "/kɔːl/", "verb", "Động từ hành động", "Chỉ hành động gọi tên."),
      c("me", "tôi", "/miː/", "noun", "Tân ngữ", "Đại từ nhân xưng làm tân ngữ của động từ 'call'."),
      c("Ann", "Ann", "/æn/", "noun", "Bổ ngữ", "Tên gọi thay thế/tên tiếng Anh."),
    ],
  },
  {
    id: "l1-s3",
    ipa: "/aɪ lɪv ɪn saɪˈɡɑːn wɪð maɪ ˈfæməli/",
    en: "I live in Saigon with my family.",
    vi: "Tôi sống ở Sài Gòn cùng với gia đình của mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (live) + prepositional phrase (in Saigon) + prepositional phrase (with my family)." },
      { label: "I + live", content: "Chủ ngữ 'I' đi với động từ 'live' (sống)." },
      { label: "in Saigon", content: "Cụm giới từ chỉ địa điểm ('in' + tên thành phố)." },
      { label: "with my family", content: "Cụm giới từ chỉ sự đi kèm ('with' + tính từ sở hữu 'my' + danh từ 'family')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("live", "sống", "/lɪv/", "verb", "Động từ chỉ nơi sinh sống", "Dùng để nói về nơi ở."),
      c("in Saigon", "ở Sài Gòn", "/ɪn saɪˈɡɑːn/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'in' đi trước tên thành phố lớn."),
      c("with my family", "với gia đình của tôi", "/wɪð maɪ ˈfæməli/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với cụm danh từ chỉ gia đình."),
    ],
  },
  {
    id: "l1-s4",
    ipa: "/aɪ wɜːrk æz ə dɪˈzaɪnər ət ə smɔːl ˈkʌmpəni/",
    en: "I work as a designer at a small company.",
    vi: "Tôi làm việc như một nhà thiết kế tại một công ty nhỏ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (work) + prepositional phrase (as a designer) + prepositional phrase (at a small company)." },
      { label: "I + work", content: "Chủ ngữ 'I' đi với động từ 'work' (làm việc)." },
      { label: "as a designer", content: "Cụm giới từ chỉ nghề nghiệp/vai trò ('as' + mạo từ 'a' + danh từ 'designer')." },
      { label: "at a small company", content: "Cụm giới từ chỉ nơi làm việc ('at' + mạo từ 'a' + tính từ 'small' + danh từ 'company')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("work", "làm việc", "/wɜːrk/", "verb", "Động từ chỉ nghề nghiệp", "Chỉ hoạt động làm việc."),
      c("as a designer", "với tư cách là nhà thiết kế", "/æz ə dɪˈzaɪnər/", "preposition", "Cụm giới từ chỉ vai trò/nghề nghiệp", "Giới từ 'as' dùng để chỉ chức vụ hoặc nghề nghiệp."),
      c("at a small company", "tại một công ty nhỏ", "/ət ə smɔːl ˈkʌmpəni/", "preposition", "Cụm giới từ chỉ địa điểm làm việc", "Giới từ 'at' đi với cụm danh từ chỉ công ty."),
    ],
  },
  {
    id: "l1-s5",
    ipa: "/ɪn maɪ friː taɪm, aɪ laɪk ˈlɪsɪŋ tə ˈmjuːzɪk ænd ˈkʊkɪŋ/",
    en: "In my free time, I like listening to music and cooking.",
    vi: "Vào thời gian rảnh, tôi thích nghe nhạc và nấu ăn.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (In my free time) + S + verb (like) + gerund phrase 1 (listening to music) + connector (and) + gerund 2 (cooking)." },
      { label: "In my free time", content: "Cụm giới từ chỉ thời gian đứng ở đầu câu ('trong thời gian rảnh')." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "listening to music", content: "Danh động từ 'listening' + giới từ 'to' + danh từ 'music'." },
      { label: "and", content: "Từ nối hai sở thích." },
      { label: "cooking", content: "Danh động từ 'cooking' làm tân ngữ thứ hai." },
    ],
    chunks: [
      c("In my free time", "vào thời gian rảnh của tôi", "/ɪn maɪ friː taɪm/", "preposition", "Cụm giới từ chỉ thời gian", "Cụm từ cố định chỉ thời gian rỗi."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sở thích cá nhân."),
      c("listening to music", "nghe nhạc", "/ˈlɪsɪŋ tə ˈmjuːzɪk/", "noun", "Cụm danh động từ làm tân ngữ", "Cụm cố định 'listen to' đi với danh từ 'music'."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai sở thích trong câu."),
      c("cooking", "nấu ăn", "/ˈkʊkɪŋ/", "noun", "Danh động từ làm tân ngữ", "Động từ thêm -s/-ing đóng vai trò là danh từ chỉ hoạt động."),
    ],
  },
  {
    id: "l1-s6",
    ipa: "/ɑːn ˈwiːkɛndz, aɪ ˈjuːʒuəli hæŋ aʊt wɪð maɪ frɛndz/",
    en: "On weekends, I usually hang out with my friends.",
    vi: "Vào các ngày cuối tuần, tôi thường đi chơi với bạn bè của mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (On weekends) + S + adverb (usually) + phrasal verb (hang out) + prepositional phrase (with my friends)." },
      { label: "On weekends", content: "Cụm giới từ chỉ thời gian cuối tuần ('on' + danh từ số nhiều 'weekends')." },
      { label: "I + usually", content: "Chủ ngữ 'I' + trạng từ tần suất 'usually'." },
      { label: "hang out", content: "Cụm động từ 'hang out' (đi chơi, tụ tập)." },
      { label: "with my friends", content: "Cụm giới từ chỉ sự đi kèm ('with' + tính từ sở hữu 'my' + danh từ số nhiều 'friends')." },
    ],
    chunks: [
      c("On weekends", "vào các ngày cuối tuần", "/ɑːn ˈwiːkɛndz/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'on' trước 'weekends'."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước cụm động từ thường."),
      c("hang out", "đi chơi", "/hæŋ aʊt/", "verb", "Cụm động từ", "Chỉ hoạt động tụ tập, đi chơi giải trí."),
      c("with my friends", "với những người bạn của tôi", "/wɪð maɪ frɛndz/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với cụm danh từ chỉ bạn bè."),
    ],
  },
  {
    id: "l1-s7",
    ipa: "/aɪ wɑːnt tə lɜːrn ˈɪŋɡlɪʃ tə ɡɛt ə ˈbɛtər dʒɑːb/",
    en: "I want to learn English to get a better job.",
    vi: "Tôi muốn học tiếng Anh để có được một công việc tốt hơn.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (want) + to-infinitive (to learn English) + infinitive of purpose (to get a better job)." },
      { label: "I + want", content: "Chủ ngữ 'I' đi với động từ 'want' (muốn)." },
      { label: "to learn English", content: "Động từ nguyên mẫu có 'to' + tên ngôn ngữ 'English' làm tân ngữ." },
      { label: "to get a better job", content: "Cụm chỉ mục đích ('to' + động từ 'get' + mạo từ 'a' + tính từ so sánh hơn 'better' + danh từ 'job')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("want", "muốn", "/wɑːnt/", "verb", "Động từ chỉ mong muốn", "Theo sau bởi động từ nguyên mẫu có 'to'."),
      c("to learn English", "học tiếng Anh", "/tə lɜːrn ˈɪŋɡlɪʃ/", "verb", "Cụm động từ nguyên mẫu làm tân ngữ", "'to learn' là cấu trúc nguyên mẫu, 'English' là danh từ chỉ ngôn ngữ."),
      c("to get a better job", "để có được một công việc tốt hơn", "/tə ɡɛt ə ˈbɛtər dʒɑːb/", "verb", "Cụm động từ chỉ mục đích", "'to get' là cấu trúc chỉ mục đích, 'better' là hình thức so sánh hơn của 'good', 'job' là danh từ chỉ công việc."),
    ],
  },
  {
    id: "l1-s8",
    ipa: "/hæv ə ɡreɪt deɪ/",
    en: "Have a great day!",
    vi: "Chúc bạn một ngày tuyệt vời!",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Câu mệnh lệnh cố định (Verb + noun phrase)." },
      { label: "Have", content: "Động từ mệnh lệnh mở đầu câu chúc." },
      { label: "a great day", content: "Mạo từ 'a' + tính từ 'great' + danh từ 'day' làm tân ngữ." },
    ],
    chunks: [
      c("Have a great day", "chúc một ngày tốt lành", "/hæv ə ɡreɪt deɪ/", "default", "Câu giao tiếp cố định", "Lời chúc tốt đẹp khi kết thúc cuộc trò chuyện."),
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
      term: "My name is _____________, but you can call me _____________.",
      meaning: "Tên tôi là ..., nhưng bạn có thể gọi tôi là ...",
      example: "My name is Linh, but you can call me Ann.",
      alternatives: ["Linh, Ann", "Nam, Mike", "Hoa, Lily"],
    },
    {
      term: "I live in _____________ with my family.",
      meaning: "Tôi sống ở ... với gia đình.",
      example: "I live in Saigon with my family.",
      alternatives: ["Saigon", "Hanoi", "Da Nang"],
    },
    {
      term: "I work as a _____________ at a small company.",
      meaning: "Tôi làm việc như một ... tại một công ty nhỏ.",
      example: "I work as a designer at a small company.",
      alternatives: ["designer", "teacher", "developer"],
    },
    {
      term: "In my free time, I like listening to music and _____________.",
      meaning: "Vào thời gian rảnh, tôi thích nghe nhạc và ...",
      example: "In my free time, I like listening to music and cooking.",
      alternatives: ["cooking", "reading", "swimming"],
    },
    {
      term: "I want to learn English to get a _____________ job.",
      meaning: "Tôi muốn học tiếng Anh để có một công việc ...",
      example: "I want to learn English to get a better job.",
      alternatives: ["better", "good", "new"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson01Sentences = sentences;