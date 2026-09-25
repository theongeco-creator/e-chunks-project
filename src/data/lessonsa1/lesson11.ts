import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l11-s1",
    ipa: "/aɪ laɪk ˈænɪməlz ˈvɛri mʌtʃ/",
    en: "I like animals very much.",
    vi: "Tôi rất thích động vật.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + trạng từ chỉ mức độ (very much)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "animals", content: "Danh từ số nhiều 'animals' làm tân ngữ chỉ chung các loài động vật." },
      { label: "very much", content: "Trạng từ chỉ mức độ đứng ở cuối câu để nhấn mạnh sở thích ('rất nhiều')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích."),
      c("animals", "động vật", "/ˈænɪməlz/", "noun", "Tân ngữ (danh từ số nhiều)", "Danh từ số nhiều dùng dạng chung chung không cần mạo từ."),
      c("very much", "rất nhiều", "/ˈvɛri mʌtʃ/", "adverb", "Trạng từ chỉ mức độ", "Thường đứng ở cuối câu sau động từ hoặc tân ngữ để nhấn mạnh."),
    ],
  },
  {
    id: "l11-s2",
    ipa: "/maɪ ˈfeɪvərɪt ˈænɪməl ɪz ðə dɔːɡ bɪˈkʌz ɪt ɪz ˈfrɛndli/",
    en: "My favorite animal is the dog because it is friendly.",
    vi: "Động vật yêu thích của tôi là chó vì nó rất thân thiện.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + favorite + danh từ + be + bổ ngữ + because + mệnh đề (S + be + adjective)." },
      { label: "My favorite animal", content: "'My' + tính từ 'favorite' + danh từ 'animal' làm chủ ngữ." },
      { label: "is", content: "Động từ tobe 'is' chia ở số ít." },
      { label: "the dog", content: "Mạo từ 'the' + danh từ 'dog' làm bổ ngữ (chỉ loài chó)." },
      { label: "because", content: "Từ nối chỉ nguyên nhân ('vì')." },
      { label: "it is friendly", content: "Đại từ 'it' + tobe 'is' + tính từ 'friendly' (thân thiện)." },
    ],
    chunks: [
      c("My favorite animal", "động vật yêu thích của tôi", "/maɪ ˈfeɪvərɪt ˈænɪməl/", "noun", "Chủ ngữ", "Cụm danh từ chỉ vật/con vật yêu thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Nối chủ ngữ với bổ ngữ phía sau."),
      c("the dog", "chó", "/ðə dɔːɡ/", "noun", "Bổ ngữ", "Dùng mạo từ 'the' trước danh từ số ít để chỉ một loài vật nói chung."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do."),
      c("it is friendly", "nó thân thiện", "/ɪt ɪz ˈfrɛndli/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "Đại từ 'it' thay thế cho 'the dog', 'friendly' là tính từ chỉ đặc điểm."),
    ],
  },
  {
    id: "l11-s3",
    ipa: "/aɪ hæv ə smɔːl dɔːɡ ət hoʊm/",
    en: "I have a small dog at home.",
    vi: "Tôi có một con chó nhỏ ở nhà.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (have) + cụm tân ngữ (mạo từ + adjective + noun) + cụm giới từ chỉ địa điểm." },
      { label: "I + have", content: "Chủ ngữ 'I' đi với động từ 'have' (có)." },
      { label: "a small dog", content: "Mạo từ 'a' + tính từ 'small' + danh từ 'dog' làm tân ngữ." },
      { label: "at home", content: "Cụm giới từ chỉ địa điểm cố định ('at home': ở nhà)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("have", "có", "/hæv/", "verb", "Động từ chỉ sự sở hữu", "Dùng để nói về việc sở hữu thú cưng hoặc đồ vật."),
      c("a small dog", "một con chó nhỏ", "/ə smɔːl dɔːɡ/", "noun", "Tân ngữ (cụm danh từ)", "Mạo từ 'a' đi trước tính từ 'small' và danh từ số ít 'dog'."),
      c("at home", "ở nhà", "/æt hoʊm/", "preposition", "Cụm giới từ chỉ địa điểm", "Cụm từ cố định 'at home' không dùng mạo từ trước 'home'."),
    ],
  },
  {
    id: "l11-s4",
    ipa: "/ɪts neɪm ɪz mæks, ænd ɪt laɪks tə pleɪ wɪð miː/",
    en: "Its name is Max, and it likes to play with me.",
    vi: "Tên của nó là Max, và nó thích chơi với tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề 1 (Tính từ sở hữu + name + be + tên riêng) + and + mệnh đề 2 (S + verb + to-infinitive + cụm giới từ)." },
      { label: "Its name is Max", content: "Tính từ sở hữu 'Its' + danh từ 'name' + tobe 'is' + tên riêng 'Max'." },
      { label: "and", content: "Từ nối hai mệnh đề." },
      { label: "it likes to play with me", content: "Đại từ 'it' + verb 'likes' + to-infinitive 'to play' + cụm giới từ 'with me'." },
    ],
    chunks: [
      c("Its name", "tên của nó", "/ɪts neɪm/", "noun", "Chủ ngữ", "Tính từ sở hữu 'Its' dùng cho vật/con vật."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia ở số ít."),
      c("Max", "Max", "/mæks/", "noun", "Bổ ngữ (tên riêng)", "Danh từ riêng chỉ tên chú chó."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai câu đơn thành câu ghép."),
      c("it", "nó", "/ɪt/", "noun", "Chủ ngữ (đại từ)", "Đại từ thay thế cho chú chó."),
      c("likes", "thích", "/laɪks/", "verb", "Động từ chỉ sở hữu/sở thích", "Chia số ít theo ngôi thứ ba số ít 'it' (-s)."),
      c("to play", "chơi", "/tə pleɪ/", "verb", "Động từ nguyên mẫu có to", "Theo sau động từ 'likes'."),
      c("with me", "với tôi", "/wɪð miː/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với đại từ tân ngữ 'me'."),
    ],
  },
  {
    id: "l11-s5",
    ipa: "/aɪ ˈɔlsoʊ laɪk kæts bɪˈkʌz ðeɪ ɑːr kjuːt/",
    en: "I also like cats because they are cute.",
    vi: "Tôi cũng thích mèo vì chúng rất đáng yêu.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + trạng từ chỉ sự bổ sung (also) + verb + tân ngữ + because + mệnh đề (S + be + adjective)." },
      { label: "I + also like", content: "Chủ ngữ 'I' + trạng từ 'also' + động từ 'like'." },
      { label: "cats", content: "Danh từ số nhiều 'cats' làm tân ngữ (chỉ loài mèo)." },
      { label: "because", content: "Từ nối chỉ nguyên nhân ('vì')." },
      { label: "they are cute", content: "Đại từ số nhiều 'they' + tobe 'are' + tính từ 'cute' (đáng yêu)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("also", "cũng", "/ˈɔlsoʊ/", "adverb", "Trạng từ chỉ sự bổ sung", "Thường đứng trước động từ thường để bổ sung thêm ý."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sở thích."),
      c("cats", "mèo", "/kæts/", "noun", "Tân ngữ (danh từ số nhiều)", "Danh từ số nhiều dùng dạng chung chung không cần mạo từ."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do."),
      c("they are cute", "chúng đáng yêu", "/ðeɪ ɑːr kjuːt/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "Đại từ 'they' thay thế cho 'cats', 'cute' là tính từ miêu tả."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson11Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I like _____________ very much.",
      meaning: "Tôi rất thích ...",
      example: "I like animals very much.",
      alternatives: ["animals", "cats", "dogs"],
    },
    {
      term: "My favorite animal is the _____________ because it is friendly.",
      meaning: "Động vật yêu thích của tôi là ... vì nó thân thiện.",
      example: "My favorite animal is the dog because it is friendly.",
      alternatives: ["dog", "cat", "rabbit"],
    },
    {
      term: "I have a small _____________ at home.",
      meaning: "Tôi có một con ... nhỏ ở nhà.",
      example: "I have a small dog at home.",
      alternatives: ["dog", "cat", "bird"],
    },
    {
      term: "Its name is _____________.",
      meaning: "Tên của nó là ...",
      example: "Its name is Max.",
      alternatives: ["Max", "Bella", "Lucky"],
    },
    {
      term: "I also like _____________ because they are cute.",
      meaning: "Tôi cũng thích ... vì chúng đáng yêu.",
      example: "I also like cats because they are cute.",
      alternatives: ["cats", "dogs", "pandas"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson11Sentences = sentences;