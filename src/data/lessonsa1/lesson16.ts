import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l16-s1",
    ipa: "/aɪ hæv sʌm tɔɪz ət hoʊm/",
    en: "I have some toys at home.",
    vi: "Tôi có vài món đồ chơi ở nhà.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (have) + tân ngữ (some + noun) + cụm giới từ chỉ địa điểm (at home)." },
      { label: "I + have", content: "Chủ ngữ 'I' đi với động từ 'have' (có)." },
      { label: "some toys", content: "Từ chỉ định lượng 'some' + danh từ số nhiều 'toys' làm tân ngữ." },
      { label: "at home", content: "Cụm giới từ chỉ địa điểm cố định ('at home': ở nhà)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("have", "có", "/hæv/", "verb", "Động từ chỉ sự sở hữu", "Dùng để nói về việc sở hữu đồ vật."),
      c("some toys", "vài món đồ chơi", "/sʌm tɔɪz/", "noun", "Tân ngữ (cụm danh từ)", "'some' dùng với danh từ đếm được số nhiều 'toys' trong câu khẳng định."),
      c("at home", "ở nhà", "/æt hoʊm/", "preposition", "Cụm giới từ chỉ địa điểm", "Cụm từ cố định không dùng mạo từ trước 'home'."),
    ],
  },
  {
    id: "l16-s2",
    ipa: "/maɪ ˈfeɪvərɪt tɔɪ ɪz ə smɔːl ˈtɛdi bɛr/",
    en: "My favorite toy is a small teddy bear.",
    vi: "Đồ chơi yêu thích của tôi là một con gấu bông nhỏ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + favorite + danh từ + be + cụm danh từ (mạo từ + adjective + noun)." },
      { label: "My favorite toy", content: "'My' + tính từ 'favorite' + danh từ 'toy' làm chủ ngữ." },
      { label: "is", content: "Động từ tobe 'is' chia ở số ít." },
      { label: "a small teddy bear", content: "Mạo từ 'a' + tính từ 'small' + cụm danh từ 'teddy bear' làm bổ ngữ." },
    ],
    chunks: [
      c("My favorite toy", "món đồ chơi yêu thích của tôi", "/maɪ ˈfeɪvərɪt tɔɪ/", "noun", "Chủ ngữ", "Cụm danh từ chỉ món đồ chơi ưa thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia ở số ít."),
      c("a small teddy bear", "một con gấu bông nhỏ", "/ə smɔːl ˈtɛdi bɛr/", "noun", "Bổ ngữ (cụm danh từ)", "'teddy bear' là danh từ chỉ gấu bông, 'small' là tính từ miêu tả kích thước."),
    ],
  },
  {
    id: "l16-s3",
    ipa: "/ɪt ɪz braʊn ænd ˈvɛri kjuːt/",
    en: "It is brown and very cute.",
    vi: "Nó có màu nâu và rất đáng yêu.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + be + tính từ 1 (brown) + connector (and) + cụm tính từ 2 (very + cute)." },
      { label: "It + is", content: "Đại từ 'It' + động từ tobe 'is'." },
      { label: "brown", content: "Tính từ chỉ màu sắc làm bổ ngữ." },
      { label: "and", content: "Từ nối hai tính từ/đặc điểm." },
      { label: "very cute", content: "Trạng từ mức độ 'very' + tính từ 'cute' làm bổ ngữ." },
    ],
    chunks: [
      c("It", "Nó", "/ɪt/", "noun", "Chủ ngữ", "Đại từ thay thế cho chú gấu bông."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia theo ngôi thứ ba số ít."),
      c("brown", "màu nâu", "/braʊn/", "adjective", "Tính từ chỉ màu sắc", "Miêu tả màu của món đồ chơi."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối các tính từ miêu tả đặc điểm."),
      c("very cute", "rất đáng yêu", "/ˈvɛri kjuːt/", "adjective", "Cụm tính từ", "'very' là trạng từ bổ nghĩa cho tính từ 'cute'."),
    ],
  },
  {
    id: "l16-s4",
    ipa: "/aɪ ˈɔlsoʊ hæv ə tɔɪ kɑːr ænd ə bɔːl/",
    en: "I also have a toy car and a ball.",
    vi: "Tôi cũng có một chiếc ô tô đồ chơi và một quả bóng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + adverb (also) + verb (have) + cụm tân ngữ (liệt kê các đồ vật với mạo từ 'a')." },
      { label: "I + also have", content: "Chủ ngữ 'I' + trạng từ 'also' + động từ 'have'." },
      { label: "a toy car", content: "Mạo từ 'a' + cụm danh từ 'toy car' (ô tô đồ chơi)." },
      { label: "and", content: "Từ nối trong danh sách liệt kê." },
      { label: "a ball", content: "Mạo từ 'a' + danh từ 'ball' (quả bóng)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("also", "cũng", "/ˈɔlsoʊ/", "adverb", "Trạng từ chỉ sự bổ sung", "Đứng trước động từ thường."),
      c("have", "có", "/hæv/", "verb", "Động từ chỉ sự sở hữu", "Dùng để nói về việc sở hữu đồ vật."),
      c("a toy car", "một chiếc ô tô đồ chơi", "/ə tɔɪ kɑːr/", "noun", "Tân ngữ (cụm danh từ)", "'toy car' là cụm danh từ chỉ xe ô tô đồ chơi."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối thành phần cuối trong danh sách liệt kê."),
      c("a ball", "một quả bóng", "/ə bɔːl/", "noun", "Tân ngữ", "Mạo từ 'a' đi trước danh từ đếm được số ít 'ball'."),
    ],
  },
  {
    id: "l16-s5",
    ipa: "/aɪ laɪk ˈpleɪɪŋ wɪð maɪ tɔɪz ˈæftər skul/",
    en: "I like playing with my toys after school.",
    vi: "Tôi thích chơi với đồ chơi của mình sau giờ học.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (like) + gerund phrase (playing with my toys) + prepositional phrase (after school)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "playing with my toys", content: "Danh động từ 'playing' + cụm giới từ 'with my toys'." },
      { label: "after school", content: "Cụm giới từ chỉ thời gian ('after' + 'school')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sở thích."),
      c("playing with my toys", "chơi với những món đồ chơi của tôi", "/ˈpleɪɪŋ wɪð maɪ tɔɪz/", "noun", "Cụm danh động từ làm tân ngữ", "'playing' đi sau 'like', kết hợp với cụm giới từ 'with my toys'."),
      c("after school", "sau giờ học", "/ˈæftər skul/", "preposition", "Cụm giới từ chỉ thời gian", "Cụm từ cố định chỉ thời điểm sau khi tan học."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson16Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I have some _____________ at home.",
      meaning: "Tôi có vài món ... ở nhà.",
      example: "I have some toys at home.",
      alternatives: ["toys", "books", "pens"],
    },
    {
      term: "My favorite toy is a small _____________.",
      meaning: "Món đồ chơi yêu thích của tôi là một ... nhỏ.",
      example: "My favorite toy is a small teddy bear.",
      alternatives: ["teddy bear", "doll", "toy car"],
    },
    {
      term: "I also have a toy _____________ and a _____________.",
      meaning: "Tôi cũng có một chiếc ... đồ chơi và một ...",
      example: "I also have a toy car and a ball.",
      alternatives: ["car and a ball", "train and a kite"],
    },
    {
      term: "I like playing with my toys after _____________.",
      meaning: "Tôi thích chơi với đồ chơi của mình sau ...",
      example: "I like playing with my toys after school.",
      alternatives: ["school", "work", "class"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson16Sentences = sentences;