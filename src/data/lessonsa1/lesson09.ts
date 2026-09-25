import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l9-s1",
    ipa: "/aɪ wɜːrk æt ə smɔːl ˈkʌmpəni/",
    en: "I work at a small company.",
    vi: "Tôi làm việc tại một công ty nhỏ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + cụm giới từ chỉ địa điểm/nơi làm việc (at + mạo từ + adjective + noun)." },
      { label: "I + work", content: "Chủ ngữ 'I' đi với động từ nguyên mẫu 'work'." },
      { label: "at a small company", content: "Cụm giới từ chỉ địa điểm: 'at' + mạo từ 'a' + tính từ 'small' + danh từ 'company'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("work", "làm việc", "/wɜːrk/", "verb", "Động từ hành động", "Chỉ công việc hoặc nơi làm việc."),
      c("at a small company", "tại một công ty nhỏ", "/æt ə smɔːl ˈkʌmpəni/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'at' dùng cho địa điểm cụ thể, 'small' là tính từ đứng trước danh từ 'company'."),
    ],
  },
  {
    id: "l9-s2",
    ipa: "/aɪ æm ə dɪˈzaɪnər/",
    en: "I am a designer.",
    vi: "Tôi là một nhà thiết kế.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + be + mạo từ + danh từ chỉ nghề nghiệp." },
      { label: "I + am", content: "Chủ ngữ 'I' đi với động từ tobe 'am'." },
      { label: "a designer", content: "Mạo từ 'a' + danh từ chỉ nghề nghiệp 'designer' (nhà thiết kế)." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("am", "là", "/æm/", "verb", "Động từ tobe", "Chỉ đi với chủ ngữ 'I'."),
      c("a designer", "một nhà thiết kế", "/ə dɪˈzaɪnər/", "noun", "Bổ ngữ (nghề nghiệp)", "Dùng mạo từ 'a' trước danh từ đếm được số ít chỉ nghề nghiệp."),
    ],
  },
  {
    id: "l9-s3",
    ipa: "/aɪ wɜːrk frəm ˈmʌndeɪ tə ˈfraɪdeɪ/",
    en: "I work from Monday to Friday.",
    vi: "Tôi làm việc từ thứ Hai đến thứ Sáu.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + cụm giới từ chỉ khoảng thời gian (from [thời gian A] to [thời gian B])." },
      { label: "I + work", content: "Chủ ngữ 'I' đi với động từ nguyên mẫu 'work'." },
      { label: "from Monday to Friday", content: "Cụm giới từ chỉ khoảng thời gian từ thứ Hai đến thứ Sáu." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("work", "làm việc", "/wɜːrk/", "verb", "Động từ hành động", "Chỉ hành động làm việc theo lịch trình."),
      c("from Monday to Friday", "từ thứ Hai đến thứ Sáu", "/frəm ˈmʌndeɪ tə ˈfraɪdeɪ/", "preposition", "Cụm giới từ chỉ thời gian", "Cấu trúc 'from... to...' biểu thị khoảng thời gian diễn ra công việc."),
    ],
  },
  {
    id: "l9-s4",
    ipa: "/aɪ ɡuː tə wɜːrk æt eɪt oʊˈklɑːk ˈɛvri ˈmɔːrnɪŋ/",
    en: "I go to work at eight o’clock every morning.",
    vi: "Tôi đi làm lúc tám giờ mỗi buổi sáng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + địa điểm + cụm giới từ chỉ giờ (at + số giờ) + trạng từ chỉ thời gian." },
      { label: "I + go", content: "Chủ ngữ 'I' đi với động từ 'go'." },
      { label: "to work", content: "Cụm giới từ chỉ mục đích/địa điểm đến ('go to work': đi làm)." },
      { label: "at eight o’clock", content: "Cụm giới từ chỉ thời điểm cụ thể trong ngày (dùng giới từ 'at' trước giờ)." },
      { label: "every morning", content: "Trạng từ chỉ thời gian/tần suất ('mỗi buổi sáng')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("go", "đi", "/ɡuː/", "verb", "Động từ hành động", "Chỉ sự di chuyển."),
      c("to work", "đi làm", "/tə wɜːrk/", "preposition", "Cụm giới từ chỉ địa điểm", "Cụm cố định 'go to work' nghĩa là đi làm."),
      c("at eight o’clock", "lúc tám giờ", "/æt eɪt oʊˈklɑːk/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'at' trước giờ chính xác, có dùng dấu nháy đơn trong 'o’clock'."),
      c("every morning", "mỗi buổi sáng", "/ˈɛvri ˈmɔːrnɪŋ/", "adverb", "Trạng từ chỉ thời gian", "Gồm tính từ 'every' và danh từ 'morning' tạo thành cụm trạng từ chỉ thời gian lặp lại."),
    ],
  },
  {
    id: "l9-s5",
    ipa: "/aɪ laɪk maɪ dʒɑːb bɪˈkʌz aɪ wɜːrk wɪð naɪs ˈpiːpəl/",
    en: "I like my job because I work with nice people.",
    vi: "Tôi thích công việc của mình vì tôi làm việc với những người tốt bụng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb + tân ngữ + because + mệnh đề nguyên nhân (S + verb + cụm giới từ chỉ sự đi kèm)." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ 'like'." },
      { label: "my job", content: "Tính từ sở hữu 'my' + danh từ 'job' làm tân ngữ chỉ công việc." },
      { label: "because", content: "Từ nối biểu thị nguyên nhân ('vì')." },
      { label: "I work with nice people", content: "Mệnh đề nguyên nhân: S + verb + cụm giới từ 'with' + tính từ 'nice' + danh từ 'people'." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Dùng để bày tỏ sự yêu thích đối với công việc."),
      c("my job", "công việc của tôi", "/maɪ dʒɑːb/", "noun", "Tân ngữ (cụm danh từ)", "Tính từ sở hữu 'my' đi trước danh từ 'job'."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do thích công việc."),
      c("I work with nice people", "tôi làm việc với những người tốt bụng", "/aɪ wɜːrk wɪð naɪs ˈpiːpəl/", "noun", "Mệnh đề phụ chỉ nguyên nhân", "Cụm 'with nice people' là cụm giới từ chỉ sự đi kèm với đồng nghiệp tốt."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson09Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I work at a _____________ company.",
      meaning: "Tôi làm việc tại một công ty ...",
      example: "I work at a small company.",
      alternatives: ["small", "big", "new"],
    },
    {
      term: "I am a _____________.",
      meaning: "Tôi là một ...",
      example: "I am a designer.",
      alternatives: ["designer", "teacher", "student", "doctor"],
    },
    {
      term: "I work from _____________ to _____________.",
      meaning: "Tôi làm việc từ ... đến ...",
      example: "I work from Monday to Friday.",
      alternatives: ["Monday to Friday", "Monday to Saturday"],
    },
    {
      term: "I go to work at _____________ every morning.",
      meaning: "Tôi đi làm lúc ... mỗi buổi sáng.",
      example: "I go to work at eight o’clock every morning.",
      alternatives: ["eight o’clock", "seven o’clock", "nine o’clock"],
    },
    {
      term: "I like my job because I work with _____________.",
      meaning: "Tôi thích công việc của mình vì tôi làm việc với ...",
      example: "I like my job because I work with nice people.",
      alternatives: ["nice people", "friendly colleagues"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson09Sentences = sentences;