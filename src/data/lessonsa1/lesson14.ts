import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l14-s1",
    ipa: "/aɪ æm ə ˈstudənt ət ə smɔːl skul/",
    en: "I am a student at a small school.",
    vi: "Tôi là học sinh ở một ngôi trường nhỏ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (am) + cụm danh từ (mạo từ + noun) + cụm giới từ chỉ địa điểm (at + cụm danh từ)." },
      { label: "I + am", content: "Chủ ngữ 'I' đi với động từ tobe 'am'." },
      { label: "a student", content: "Mạo từ 'a' + danh từ 'student' làm bổ ngữ chỉ nghề nghiệp/trạng thái." },
      { label: "at a small school", content: "Cụm giới từ chỉ địa điểm trường học ('at' + mạo từ 'a' + tính từ 'small' + danh từ 'school')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("am", "là", "/æm/", "verb", "Động từ tobe", "Động từ tobe chia theo ngôi 'I'."),
      c("a student", "một học sinh", "/ə ˈstudənt/", "noun", "Bổ ngữ", "Mạo từ 'a' đi trước danh từ đếm được số ít 'student'."),
      c("at a small school", "ở một ngôi trường nhỏ", "/ət ə smɔːl skul/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'at' đi với cụm danh từ chỉ nơi chốn."),
    ],
  },
  {
    id: "l14-s2",
    ipa: "/aɪ goʊ tə skul frʌm ˈmʌndeɪ tə ˈfreɪdeɪ/",
    en: "I go to school from Monday to Friday.",
    vi: "Tôi đi học từ thứ Hai đến thứ Sáu.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + cụm giới từ (to school) + cụm giới từ chỉ thời gian (from + noun + to + noun)." },
      { label: "I + go", content: "Chủ ngữ 'I' đi với động từ 'go'." },
      { label: "to school", content: "Cụm giới từ chỉ hướng đến trường ('to' + 'school')." },
      { label: "from Monday to Friday", content: "Cụm giới từ chỉ khoảng thời gian ('từ... đến...')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("go", "đi", "/goʊ/", "verb", "Động từ hành động", "Chỉ sự di chuyển."),
      c("to school", "đến trường", "/tə skul/", "preposition", "Cụm giới từ chỉ hướng di chuyển", "Cụm từ cố định 'go to school' (đi học)."),
      c("from Monday to Friday", "từ thứ Hai đến thứ Sáu", "/frʌm ˈmʌndeɪ tə ˈfreɪdeɪ/", "preposition", "Cụm giới từ chỉ khoảng thời gian", "Cấu trúc 'from... to...' dùng để chỉ khoảng thời gian trong tuần."),
    ],
  },
  {
    id: "l14-s3",
    ipa: "/maɪ ˈfeɪvərɪt ˈsʌbʤɪkt ɪz ˈɪŋglɪʃ/",
    en: "My favorite subject is English.",
    vi: "Môn học yêu thích của tôi là tiếng Anh.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Tính từ sở hữu + favorite + danh từ + be + bổ ngữ (tên môn học)." },
      { label: "My favorite subject", content: "'My' + tính từ 'favorite' + danh từ 'subject' làm chủ ngữ." },
      { label: "is", content: "Động từ tobe 'is' chia ở số ít." },
      { label: "English", content: "Danh từ riêng chỉ môn học làm bổ ngữ." },
    ],
    chunks: [
      c("My favorite subject", "môn học yêu thích của tôi", "/maɪ ˈfeɪvərɪt ˈsʌbʤɪkt/", "noun", "Chủ ngữ", "Cụm danh từ chỉ môn học ưa thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("English", "tiếng Anh", "/ˈɪŋglɪʃ/", "noun", "Bổ ngữ", "Tên môn học luôn viết hoa chữ cái đầu."),
    ],
  },
  {
    id: "l14-s4",
    ipa: "/aɪ ˈstʌdi wɪð maɪ frɛndz ɪn ðə ˈklæsˌrum/",
    en: "I study with my friends in the classroom.",
    vi: "Tôi học cùng các bạn của mình trong phòng học.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + cụm giới từ chỉ sự đi kèm (with + cụm danh từ) + cụm giới từ chỉ địa điểm (in + cụm danh từ)." },
      { label: "I + study", content: "Chủ ngữ 'I' đi với động từ 'study' (học tập)." },
      { label: "with my friends", content: "Cụm giới từ chỉ người cùng tham gia hoạt động ('with' + tính từ sở hữu 'my' + danh từ số nhiều 'friends')." },
      { label: "in the classroom", content: "Cụm giới từ chỉ địa điểm trong không gian ('in' + mạo từ 'the' + danh từ 'classroom')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("study", "học tập", "/ˈstʌdi/", "verb", "Động từ hành động", "Chỉ hoạt động học tập, nghiên cứu."),
      c("with my friends", "với những người bạn của tôi", "/wɪð maɪ frɛndz/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với cụm danh từ chỉ bạn bè."),
      c("in the classroom", "trong phòng học", "/ɪn ðə ˈklæsˌrum/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'in' đi với cụm danh từ xác định 'the classroom'."),
    ],
  },
  {
    id: "l14-s5",
    ipa: "/aɪ laɪk maɪ skul bɪˈkʌz maɪ ˈtiːtərz ɑːr naɪs/",
    en: "I like my school because my teachers are nice.",
    vi: "Tôi thích trường của mình vì các thầy cô giáo rất tốt bụng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + because + mệnh đề nguyên nhân (S + be + adjective)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "my school", content: "Tính từ sở hữu 'my' + danh từ 'school' làm tân ngữ." },
      { label: "because", content: "Từ nối chỉ nguyên nhân ('vì')." },
      { label: "my teachers are nice", content: "Chủ ngữ (my teachers) + tobe (are) + tính từ (nice) chỉ đặc điểm tốt bụng." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích."),
      c("my school", "trường học của tôi", "/maɪ skul/", "noun", "Tân ngữ", "Cụm danh từ chỉ ngôi trường."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do yêu thích trường học."),
      c("my teachers are nice", "các giáo viên của tôi rất tốt bụng", "/maɪ ˈtiːtərz ɑːr naɪs/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "'my teachers' là chủ ngữ số nhiều, 'nice' là tính từ chỉ tính cách."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson14Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I am a _____________ at a small school.",
      meaning: "Tôi là một ... ở một ngôi trường nhỏ.",
      example: "I am a student at a small school.",
      alternatives: ["student", "teacher"],
    },
    {
      term: "My favorite subject is _____________.",
      meaning: "Môn học yêu thích của tôi là ...",
      example: "My favorite subject is English.",
      alternatives: ["English", "Math", "Science"],
    },
    {
      term: "I study with my _____________ in the classroom.",
      meaning: "Tôi học cùng các ... của mình trong phòng học.",
      example: "I study with my friends in the classroom.",
      alternatives: ["friends", "classmates"],
    },
    {
      term: "I like my school because my _____________ are nice.",
      meaning: "Tôi thích trường của mình vì các ... rất tốt bụng.",
      example: "I like my school because my teachers are nice.",
      alternatives: ["teachers", "friends"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson14Sentences = sentences;