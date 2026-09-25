import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l15-s1",
    ipa: "/aɪ laɪk ˈpleɪɪŋ ˈbædmɪntən wɪð maɪ frɛndz/",
    en: "I like playing badminton with my friends.",
    vi: "Tôi thích chơi cầu lông với các bạn của mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (like) + gerund phrase (playing badminton) + prepositional phrase (with my friends)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "playing badminton", content: "Danh động từ 'playing' + danh từ 'badminton' làm tân ngữ." },
      { label: "with my friends", content: "Cụm giới từ chỉ sự đi kèm ('with' + tính từ sở hữu 'my' + danh từ số nhiều 'friends')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích."),
      c("playing badminton", "chơi cầu lông", "/ˈpleɪɪŋ ˈbædmɪntən/", "noun", "Cụm danh động từ làm tân ngữ", "'playing' là danh động từ đi sau 'like', 'badminton' là tên môn thể thao."),
      c("with my friends", "với những người bạn của tôi", "/wɪð maɪ frɛndz/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với cụm danh từ chỉ bạn bè."),
    ],
  },
  {
    id: "l15-s2",
    ipa: "/wi ˈjuːʒuəli pleɪ ɪn ðə pɑːrk ɑːn ˈsætərdeɪ/",
    en: "We usually play in the park on Saturday.",
    vi: "Chúng tôi thường chơi ở công viên vào thứ Bảy.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + adverb (usually) + verb (play) + prepositional phrase (in the park) + prepositional phrase (on Saturday)." },
      { label: "We + usually play", content: "Chủ ngữ 'We' + trạng từ tần suất 'usually' + động từ 'play'." },
      { label: "in the park", content: "Cụm giới từ chỉ địa điểm ('in' + mạo từ 'the' + danh từ 'park')." },
      { label: "on Saturday", content: "Cụm giới từ chỉ thời gian ('on' + danh từ riêng chỉ ngày trong tuần)." },
    ],
    chunks: [
      c("We", "Chúng tôi", "/wi/", "noun", "Chủ ngữ", "Ngôi thứ nhất số nhiều."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ thường."),
      c("play", "chơi", "/pleɪ/", "verb", "Động từ hành động", "Chỉ hoạt động thể thao, giải trí."),
      c("in the park", "trong công viên", "/ɪn ðə pɑːrk/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'in' đi với cụm danh từ chỉ nơi chốn."),
      c("on Saturday", "vào thứ Bảy", "/ɑːn ˈsætərdeɪ/", "preposition", "Cụm giới từ chỉ thời gian", "Giới từ 'on' dùng trước các ngày trong tuần."),
    ],
  },
  {
    id: "l15-s3",
    ipa: "/aɪ ˈɔlsoʊ laɪk ˈwɑtʃɪŋ ˈfʊtbɔːl ɑːn tiːˈviː/",
    en: "I also like watching football on TV.",
    vi: "Tôi cũng thích xem bóng đá trên TV.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + adverb (also) + verb (like) + gerund phrase (watching football) + prepositional phrase (on TV)." },
      { label: "I + also like", content: "Chủ ngữ 'I' + trạng từ 'also' + động từ 'like'." },
      { label: "watching football", content: "Danh động từ 'watching' + danh từ 'football' làm tân ngữ." },
      { label: "on TV", content: "Cụm giới từ chỉ phương tiện/thiết bị truyền thông ('on TV')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("also", "cũng", "/ˈɔlsoʊ/", "adverb", "Trạng từ chỉ sự bổ sung", "Đứng trước động từ thường."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sở thích."),
      c("watching football", "xem bóng đá", "/ˈwɑtʃɪŋ ˈfʊtbɔːl/", "noun", "Cụm danh động từ làm tân ngữ", "'watching' là danh động từ, 'football' là môn thể thao."),
      c("on TV", "trên TV", "/ɑːn tiːˈviː/", "preposition", "Cụm giới từ chỉ phương tiện", "Cụm từ cố định 'on TV' (trên ti-vi)."),
    ],
  },
  {
    id: "l15-s4",
    ipa: "/æt hoʊm, aɪ ˈlɪsən tə ˈmjuːzɪk ænd riːd bʊks/",
    en: "At home, I listen to music and read books.",
    vi: "Ở nhà, tôi nghe nhạc và đọc sách.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (At home) + S + verb phrase 1 (listen to music) + connector (and) + verb phrase 2 (read books)." },
      { label: "At home", content: "Cụm giới từ chỉ địa điểm đứng ở đầu câu ('ở nhà')." },
      { label: "I + listen", content: "Chủ ngữ 'I' đi với động từ 'listen'." },
      { label: "to music", content: "Cụm giới từ đi sau động từ listen ('tới âm nhạc')." },
      { label: "and", content: "Từ nối hai hành động." },
      { label: "read books", content: "Động từ 'read' + danh từ số nhiều 'books' (đọc sách)." },
    ],
    chunks: [
      c("At home", "Ở nhà", "/æt hoʊm/", "preposition", "Cụm giới từ chỉ địa điểm", "Cụm từ cố định chỉ vị trí tại nhà."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("listen", "nghe", "/ˈlɪsən/", "verb", "Động từ hành động", "Thường đi kèm giới từ 'to'."),
      c("to music", "nhạc", "/tə ˈmjuːzɪk/", "preposition", "Cụm giới từ", "Giới từ 'to' đi với danh từ không đếm được 'music'."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai hành động trong câu."),
      c("read books", "đọc sách", "/riːd bʊks/", "verb", "Cụm động từ", "'read' là động từ, 'books' là danh từ số nhiều làm tân ngữ."),
    ],
  },
  {
    id: "l15-s5",
    ipa: "/aɪ laɪk ðiːz ækˈtɪvətiz bɪˈkʌz ðeɪ ɑːr fʌn/",
    en: "I like these activities because they are fun.",
    vi: "Tôi thích những hoạt động này vì chúng rất vui.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ (demonstrative + noun) + because + mệnh đề nguyên nhân (S + be + adjective)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "these activities", content: "Tính từ chỉ định số nhiều 'these' + danh từ số nhiều 'activities' làm tân ngữ." },
      { label: "because", content: "Từ nối chỉ nguyên nhân ('vì')." },
      { label: "they are fun", content: "Đại từ số nhiều 'they' + tobe 'are' + tính từ 'fun' (vui vẻ, thú vị)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích."),
      c("these activities", "những hoạt động này", "/ðiːz ækˈtɪvətiz/", "noun", "Tân ngữ (cụm danh từ số nhiều)", "'these' là tính từ chỉ định số nhiều của 'this', 'activities' là dạng số nhiều của 'activity'."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do."),
      c("they are fun", "chúng rất vui", "/ðeɪ ɑːr fʌn/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "Đại từ 'they' thay thế cho 'these activities', 'fun' là tính từ miêu tả."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson15Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I like playing _____________ with my friends.",
      meaning: "Tôi thích chơi ... với các bạn của mình.",
      example: "I like playing badminton with my friends.",
      alternatives: ["badminton", "football", "tennis"],
    },
    {
      term: "We usually play in the park on _____________.",
      meaning: "Chúng tôi thường chơi ở công viên vào ...",
      example: "We usually play in the park on Saturday.",
      alternatives: ["Saturday", "Sunday", "Friday"],
    },
    {
      term: "I also like watching _____________ on TV.",
      meaning: "Tôi cũng thích xem ... trên TV.",
      example: "I also like watching football on TV.",
      alternatives: ["football", "movies", "cartoons"],
    },
    {
      term: "At home, I listen to music and read _____________.",
      meaning: "Ở nhà, tôi nghe nhạc và đọc ...",
      example: "At home, I listen to music and read books.",
      alternatives: ["books", "magazines", "stories"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson15Sentences = sentences;