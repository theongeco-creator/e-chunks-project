import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l13-s1",
    ipa: "/aɪ laɪk ˈwɪrɪŋ ˈsɪmpəl kloʊðz/",
    en: "I like wearing simple clothes.",
    vi: "Tôi thích mặc quần áo đơn giản.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (like) + gerund (danh động từ) + cụm tân ngữ (adjective + noun)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "wearing simple clothes", content: "Danh động từ 'wearing' + tính từ 'simple' + danh từ 'clothes' (quần áo)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sở thích."),
      c("wearing simple clothes", "mặc quần áo đơn giản", "/ˈwɪrɪŋ ˈsɪmpəl kloʊðz/", "noun", "Cụm danh động từ làm tân ngữ", "'wearing' là danh động từ đi sau 'like', 'simple' là tính từ bổ nghĩa cho 'clothes'."),
    ],
  },
  {
    id: "l13-s2",
    ipa: "/aɪ ˈjuːʒuəli wɪr ə ˈtiːˌʃɜːrt ænd ʤiːnz ət hoʊm/",
    en: "I usually wear a T-shirt and jeans at home.",
    vi: "Tôi thường mặc áo phông và quần bò ở nhà.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + trạng từ tần suất + verb + cụm tân ngữ (liệt kê) + cụm giới từ chỉ địa điểm." },
      { label: "I + usually wear", content: "Chủ ngữ 'I' + trạng từ tần suất 'usually' + động từ 'wear'." },
      { label: "a T-shirt and jeans", content: "Mạo từ 'a' + danh từ 'T-shirt' + từ nối 'and' + danh từ số nhiều 'jeans'." },
      { label: "at home", content: "Cụm giới từ chỉ địa điểm 'ở nhà'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ thường để chỉ mức độ thường xuyên."),
      c("wear", "mặc", "/wɪr/", "verb", "Động từ hành động", "Dùng để chỉ việc mặc trang phục."),
      c("a T-shirt and jeans", "một chiếc áo phông và quần bò", "/ə ˈtiːˌʃɜːrt ænd ʤiːnz/", "noun", "Cụm tân ngữ", "'T-shirt' viết có dấu gạch ngang, 'jeans' là danh từ chỉ quần luôn dùng dạng số nhiều."),
      c("at home", "ở nhà", "/æt hoʊm/", "preposition", "Cụm giới từ chỉ địa điểm", "Cụm từ cố định chỉ vị trí tại nhà."),
    ],
  },
  {
    id: "l13-s3",
    ipa: "/wɛn aɪ ɡuː tə wɜːrk, aɪ wɪr ə ʃɜːrt ænd blæk ˈtraʊzərz/",
    en: "When I go to work, I wear a shirt and black trousers.",
    vi: "Khi tôi đi làm, tôi mặc áo sơ mi và quần tây đen.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề trạng ngữ chỉ thời gian (When + S + verb + cụm giới từ) + mệnh đề chính (S + verb + cụm tân ngữ)." },
      { label: "When I go to work", content: "Từ nối 'When' + chủ ngữ 'I' + động từ 'go' + cụm giới từ 'to work'." },
      { label: "I + wear", content: "Chủ ngữ 'I' đi với động từ 'wear'." },
      { label: "a shirt and black trousers", content: "Mạo từ 'a' + danh từ 'shirt' + 'and' + tính từ 'black' + danh từ số nhiều 'trousers'." },
    ],
    chunks: [
      c("When", "Khi", "/wɛn/", "connector", "Từ nối chỉ thời gian", "Dùng để bắt đầu mệnh đề trạng ngữ chỉ thời gian."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("go to work", "đi làm", "/ɡuː tə wɜːrk/", "preposition", "Cụm giới từ chỉ mục đích/địa điểm", "Cụm từ cố định 'go to work' nghĩa là đi làm."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("wear", "mặc", "/wɪr/", "verb", "Động từ hành động", "Chỉ hành động mặc trang phục."),
      c("a shirt and black trousers", "một chiếc áo sơ mi và quần tây đen", "/ə ʃɜːrt ænd blæk ˈtraʊzərz/", "noun", "Cụm tân ngữ", "'trousers' là danh từ chỉ quần dài, luôn dùng dạng số nhiều, 'black' là tính từ màu sắc đứng trước."),
    ],
  },
  {
    id: "l13-s4",
    ipa: "/maɪ ˈfeɪvərɪt kloʊðz ɑːr ʤiːnz bɪˈkʌz ðeɪ ɑːr ˈkɑːmfərtəbəl/",
    en: "My favorite clothes are jeans because they are comfortable.",
    vi: "Quần áo yêu thích của tôi là quần bò vì chúng thoải mái.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + favorite + danh từ số nhiều + be + bổ ngữ + because + mệnh đề (S + be + adjective)." },
      { label: "My favorite clothes", content: "'My' + tính từ 'favorite' + danh từ số nhiều 'clothes' làm chủ ngữ." },
      { label: "are", content: "Động từ tobe 'are' chia ở số nhiều." },
      { label: "jeans", content: "Danh từ số nhiều 'jeans' làm bổ ngữ." },
      { label: "because", content: "Từ nối chỉ nguyên nhân ('vì')." },
      { label: "they are comfortable", content: "Đại từ 'they' + tobe 'are' + tính từ 'comfortable' (thoải mái)." },
    ],
    chunks: [
      c("My favorite clothes", "quần áo yêu thích của tôi", "/maɪ ˈfeɪvərɪt kloʊðz/", "noun", "Chủ ngữ", "Cụm danh từ số nhiều chỉ trang phục ưa thích."),
      c("are", "là", "/ɑːr/", "verb", "Động từ tobe", "Chia ở số nhiều theo chủ ngữ 'clothes'."),
      c("jeans", "quần bò", "/ʤiːnz/", "noun", "Bổ ngữ (danh từ số nhiều)", "Danh từ chỉ loại trang phục."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do."),
      c("they are comfortable", "chúng thoải mái", "/ðeɪ ɑːr ˈkɑːmfərtəbəl/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "Đại từ 'they' thay thế cho 'jeans', 'comfortable' là tính từ miêu tả cảm giác dễ chịu."),
    ],
  },
  {
    id: "l13-s5",
    ipa: "/aɪ ˈɔlsoʊ hæv ə bluː ˈʤækɪt fɔːr koʊld deɪz/",
    en: "I also have a blue jacket for cold days.",
    vi: "Tôi cũng có một chiếc áo khoác xanh cho những ngày lạnh.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + trạng từ chỉ sự bổ sung (also) + verb + tân ngữ + cụm giới từ chỉ mục đích/thời điểm (for + adjective + noun)." },
      { label: "I + also have", content: "Chủ ngữ 'I' + trạng từ 'also' + động từ 'have'." },
      { label: "a blue jacket", content: "Mạo từ 'a' + tính từ màu sắc 'blue' + danh từ 'jacket' làm tân ngữ." },
      { label: "for cold days", content: "Cụm giới từ chỉ điều kiện thời tiết ('for' + tính từ 'cold' + danh từ số nhiều 'days')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("also", "cũng", "/ˈɔlsoʊ/", "adverb", "Trạng từ chỉ sự bổ sung", "Thường đứng trước động từ thường."),
      c("have", "có", "/hæv/", "verb", "Động từ chỉ sự sở hữu", "Dùng để nói về việc sở hữu đồ vật."),
      c("a blue jacket", "một chiếc áo khoác màu xanh", "/ə bluː ˈʤækɪt/", "noun", "Tân ngữ (cụm danh từ)", "Tính từ màu sắc 'blue' đứng trước danh từ 'jacket'."),
      c("for cold days", "cho những ngày lạnh", "/fɔːr koʊld deɪz/", "preposition", "Cụm giới từ chỉ điều kiện", "Giới từ 'for' đi với cụm danh từ chỉ thời gian 'cold days' (những ngày lạnh)."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson13Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I usually wear a _____________ and _____________ at home.",
      meaning: "Tôi thường mặc ... và ... ở nhà.",
      example: "I usually wear a T-shirt and jeans at home.",
      alternatives: ["T-shirt and jeans", "shirt and trousers"],
    },
    {
      term: "When I go to work, I wear a _____________ and _____________.",
      meaning: "Khi tôi đi làm, tôi mặc ... và ...",
      example: "When I go to work, I wear a shirt and black trousers.",
      alternatives: ["shirt and black trousers", "jacket and jeans"],
    },
    {
      term: "My favorite clothes are _____________ because they are comfortable.",
      meaning: "Quần áo yêu thích của tôi là ... vì chúng thoải mái.",
      example: "My favorite clothes are jeans because they are comfortable.",
      alternatives: ["jeans", "T-shirts", "sportswear"],
    },
    {
      term: "I also have a blue _____________ for cold days.",
      meaning: "Tôi cũng có một chiếc ... xanh cho những ngày lạnh.",
      example: "I also have a blue jacket for cold days.",
      alternatives: ["jacket", "coat", "sweater"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson13Sentences = sentences;