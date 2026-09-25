import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l17-s1",
    ipa: "/həˈloʊ! maɪ neɪm ɪz ˈænə, ænd aɪ æm ˈtwɛnti jɪrz oʊld/",
    en: "Hello! My name is Anna, and I am twenty years old.",
    vi: "Xin chào! Tên tôi là Anna, và tôi hai mươi tuổi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Câu chào (Hello!) + Mệnh đề 1 (Tính từ sở hữu + name + be + tên) + and + Mệnh đề 2 (S + be + cụm chỉ tuổi)." },
      { label: "Hello", content: "Lời chào cố định." },
      { label: "My name", content: "Tính từ sở hữu 'My' + danh từ 'name' làm chủ ngữ." },
      { label: "is", content: "Động từ tobe 'is' chia ở số ít." },
      { label: "Anna", content: "Danh từ riêng chỉ tên." },
      { label: "and", content: "Từ nối hai mệnh đề." },
      { label: "I", content: "Đại từ nhân xưng chủ ngữ 'I'." },
      { label: "am", content: "Động từ tobe 'am' đi với 'I'." },
      { label: "twenty years old", content: "Cụm tính từ chỉ tuổi (số đếm + years old)." },
    ],
    chunks: [
      c("Hello", "Xin chào", "/həˈloʊ/", "default", "Lời chào", "Câu chào giao tiếp thông dụng."),
      c("My name", "tên của tôi", "/maɪ neɪm/", "noun", "Chủ ngữ", "Cụm danh từ chỉ tên gọi."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("Anna", "Anna", "/ˈænə/", "noun", "Bổ ngữ", "Tên riêng của nhân vật."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai câu đơn thành câu ghép."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("am", "là", "/æm/", "verb", "Động từ tobe", "Động từ tobe chia theo ngôi 'I'."),
      c("twenty years old", "hai mươi tuổi", "/ˈtwɛnti jɪrz oʊld/", "adjective", "Bổ ngữ (cụm tính từ chỉ tuổi)", "Cấu trúc diễn tả tuổi dùng động từ tobe, luôn có 'years old' ở cuối."),
    ],
  },
  {
    id: "l17-s2",
    ipa: "/aɪ lɪv wɪð maɪ ˈfæməli ɪn ə smɔːl haʊs/",
    en: "I live with my family in a small house.",
    vi: "Tôi sống cùng gia đình trong một ngôi nhà nhỏ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (live) + prepositional phrase (with family) + prepositional phrase (in a house)." },
      { label: "I + live", content: "Chủ ngữ 'I' đi với động từ 'live' (sống)." },
      { label: "with my family", content: "Cụm giới từ chỉ sự đi kèm ('with' + tính từ sở hữu 'my' + danh từ 'family')." },
      { label: "in a small house", content: "Cụm giới từ chỉ địa điểm ('in' + mạo từ 'a' + tính từ 'small' + danh từ 'house')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("live", "sống", "/lɪv/", "verb", "Động từ chỉ nơi chốn/sinh sống", "Dùng để nói về nơi ở hoặc người sống cùng."),
      c("with my family", "với gia đình của tôi", "/wɪð maɪ ˈfæməli/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với cụm danh từ chỉ gia đình."),
      c("in a small house", "trong một ngôi nhà nhỏ", "/ɪn ə smɔːl haʊs/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'in' đi với cụm danh từ chỉ ngôi nhà."),
    ],
  },
  {
    id: "l17-s3",
    ipa: "/aɪ wɜːrk ət ə skul frʌm ˈmʌndeɪ tə ˈfreɪdeɪ/",
    en: "I work at a school from Monday to Friday.",
    vi: "Tôi làm việc ở một trường học từ thứ Hai đến thứ Sáu.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + prepositional phrase (at a school) + prepositional phrase (from Monday to Friday)." },
      { label: "I + work", content: "Chủ ngữ 'I' đi với động từ 'work' (làm việc)." },
      { label: "at a school", content: "Cụm giới từ chỉ địa điểm làm việc ('at' + mạo từ 'a' + danh từ 'school')." },
      { label: "from Monday to Friday", content: "Cụm giới từ chỉ khoảng thời gian trong tuần ('từ... đến...')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("work", "làm việc", "/wɜːrk/", "verb", "Động từ hành động", "Chỉ công việc hoặc hoạt động nghề nghiệp."),
      c("at a school", "ở một trường học", "/ət ə skul/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'at' đi với cụm danh từ chỉ nơi làm việc."),
      c("from Monday to Friday", "từ thứ Hai đến thứ Sáu", "/frʌm ˈmʌndeɪ tə ˈfreɪdeɪ/", "preposition", "Cụm giới từ chỉ khoảng thời gian", "Cấu trúc 'from... to...' chỉ khoảng thời gian lặp lại."),
    ],
  },
  {
    id: "l17-s4",
    ipa: "/maɪ ˈfeɪvərɪt deɪ ɪz ˈsʌndeɪ bɪˈkʌz aɪ kæn rɪˈlæks ət hoʊm/",
    en: "My favorite day is Sunday because I can relax at home.",
    vi: "Ngày yêu thích của tôi là chủ Nhật vì tôi có thể thư giãn ở nhà.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + favorite + day + be + Sunday + because + mệnh đề (S + modal verb + verb + prepositional phrase)." },
      { label: "My favorite day", content: "'My' + tính từ 'favorite' + danh từ 'day' làm chủ ngữ." },
      { label: "is", content: "Động từ tobe 'is' chia ở số ít." },
      { label: "Sunday", content: "Danh từ riêng chỉ ngày trong tuần làm bổ ngữ." },
      { label: "because", content: "Từ nối chỉ nguyên nhân ('vì')." },
      { label: "I can relax at home", content: "Đại từ 'I' + động từ khiếm khuyết 'can' + động từ 'relax' + cụm giới từ 'at home'." },
    ],
    chunks: [
      c("My favorite day", "ngày yêu thích của tôi", "/maɪ ˈfeɪvərɪt deɪ/", "noun", "Chủ ngữ", "Cụm danh từ chỉ ngày ưa thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("Sunday", "chủ Nhật", "/ˈsʌndeɪ/", "noun", "Bổ ngữ", "Tên riêng chỉ ngày trong tuần, viết hoa chữ cái đầu."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do."),
      c("I can relax at home", "tôi có thể thư giãn ở nhà", "/aɪ kæn rɪˈlæks ət hoʊm/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "'can' là động từ khiếm khuyết chỉ khả năng, 'relax' là động từ nguyên mẫu, 'at home' là cụm giới từ chỉ địa điểm."),
    ],
  },
  {
    id: "l17-s5",
    ipa: "/aɪ laɪk ˈwɪrɪŋ bluː kloʊðz ænd ˈiːtɪŋ ˈsɪmpəl fuːd/",
    en: "I like wearing blue clothes and eating simple food.",
    vi: "Tôi thích mặc quần áo màu xanh và ăn đồ ăn đơn giản.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (like) + gerund phrase 1 (wearing blue clothes) + connector (and) + gerund phrase 2 (eating simple food)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "wearing blue clothes", content: "Danh động từ 'wearing' + tính từ 'blue' + danh từ số nhiều 'clothes'." },
      { label: "and", content: "Từ nối hai danh động từ." },
      { label: "eating simple food", content: "Danh động từ 'eating' + tính từ 'simple' + danh từ 'food'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sở thích."),
      c("wearing blue clothes", "mặc quần áo màu xanh", "/ˈwɪrɪŋ bluː kloʊðz/", "noun", "Cụm danh động từ 1 làm tân ngữ", "'wearing' đi sau 'like', 'blue' là tính từ màu sắc, 'clothes' là danh từ số nhiều."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai sở thích trong câu."),
      c("eating simple food", "ăn đồ ăn đơn giản", "/ˈiːtɪŋ ˈsɪmpəl fuːd/", "noun", "Cụm danh động từ 2 làm tân ngữ", "'eating' là danh động từ, 'simple' là tính từ, 'food' là danh từ không đếm được."),
    ],
  },
  {
    id: "l17-s6",
    ipa: "/ɪn maɪ friː taɪm, aɪ pleɪ ˈbædmɪntən ænd ˈlɪsən tə ˈmjuːzɪk/",
    en: "In my free time, I play badminton and listen to music.",
    vi: "Vào thời gian rảnh, tôi chơi cầu lông và nghe nhạc.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (In my free time) + S + verb phrase 1 (play badminton) + connector (and) + verb phrase 2 (listen to music)." },
      { label: "In my free time", content: "Cụm giới từ chỉ thời gian đứng ở đầu câu ('trong thời gian rảnh')." },
      { label: "I + play", content: "Chủ ngữ 'I' đi với động từ 'play'." },
      { label: "badminton", content: "Danh từ chỉ môn thể thao làm tân ngữ." },
      { label: "and", content: "Từ nối hai hành động." },
      { label: "listen to music", content: "Cụm động từ 'listen' + giới từ 'to' + danh từ 'music'." },
    ],
    chunks: [
      c("In my free time", "vào thời gian rảnh của tôi", "/ɪn maɪ friː taɪm/", "preposition", "Cụm giới từ chỉ thời gian", "Cụm từ cố định chỉ khoảng thời gian rỗi."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("play", "chơi", "/pleɪ/", "verb", "Động từ hành động", "Chỉ hoạt động thể thao."),
      c("badminton", "cầu lông", "/ˈbædmɪntən/", "noun", "Tân ngữ", "Tên môn thể thao."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai hành động giải trí."),
      c("listen to music", "nghe nhạc", "/ˈlɪsən tə ˈmjuːzɪk/", "verb", "Cụm động từ", "Cụm cố định 'listen to' đi với danh từ 'music'."),
    ],
  },
  {
    id: "l17-s7",
    ipa: "/aɪ ˈɔlsoʊ laɪk ˈænɪməlz, ænd maɪ ˈfeɪvərɪt ˈænɪməl ɪz ðə dɔːɡ/",
    en: "I also like animals, and my favorite animal is the dog.",
    vi: "Tôi cũng thích động vật, và động vật yêu thích của tôi là chó.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề 1 (S + adverb + verb + noun) + and + Mệnh đề 2 (Tính từ sở hữu + favorite + noun + be + bổ ngữ)." },
      { label: "I + also like", content: "Chủ ngữ 'I' + trạng từ 'also' + động từ 'like'." },
      { label: "animals", content: "Danh từ số nhiều làm tân ngữ." },
      { label: "and", content: "Từ nối hai mệnh đề." },
      { label: "my favorite animal is the dog", content: "Chủ ngữ (my favorite animal) + tobe (is) + bổ ngữ (the dog)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("also", "cũng", "/ˈɔlsoʊ/", "adverb", "Trạng từ chỉ sự bổ sung", "Đứng trước động từ thường."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sở thích."),
      c("animals", "động vật", "/ˈænɪməlz/", "noun", "Tân ngữ (danh từ số nhiều)", "Danh từ số nhiều chỉ loài vật nói chung."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai câu đơn thành câu ghép."),
      c("my favorite animal", "động vật yêu thích của tôi", "/maɪ ˈfeɪvərɪt ˈænɪməl/", "noun", "Chủ ngữ của vế sau", "Cụm danh từ chỉ vật/con vật yêu thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("the dog", "chó", "/ðə dɔːɡ/", "noun", "Bổ ngữ", "Dùng mạo từ 'the' trước danh từ số ít để chỉ một loài vật."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson17Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "My name is _____________, and I am _____________ years old.",
      meaning: "Tên tôi là ..., và tôi ... tuổi.",
      example: "My name is Anna, and I am twenty years old.",
      alternatives: ["Anna, twenty", "John, twenty-five", "Mary, eighteen"],
    },
    {
      term: "I live with my family in a _____________ house.",
      meaning: "Tôi sống cùng gia đình trong một ngôi nhà ...",
      example: "I live with my family in a small house.",
      alternatives: ["small", "big", "nice"],
    },
    {
      term: "My favorite day is _____________ because I can relax at home.",
      meaning: "Ngày yêu thích của tôi là ... vì tôi có thể thư giãn ở nhà.",
      example: "My favorite day is Sunday because I can relax at home.",
      alternatives: ["Sunday", "Saturday", "Friday"],
    },
    {
      term: "In my free time, I play _____________ and listen to music.",
      meaning: "Vào thời gian rảnh, tôi chơi ... và nghe nhạc.",
      example: "In my free time, I play badminton and listen to music.",
      alternatives: ["badminton", "football", "tennis"],
    },
    {
      term: "My favorite animal is the _____________.",
      meaning: "Động vật yêu thích của tôi là ...",
      example: "My favorite animal is the dog.",
      alternatives: ["dog", "cat", "rabbit"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson17Sentences = sentences;