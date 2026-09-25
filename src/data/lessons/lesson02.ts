import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l2-s1",
    ipa: "/haɪ ˈɛvriwʌn! ˈtʊdeɪ aɪ wɑːnt tə tɛl juː əˈbaʊt maɪ ˈfæməli/",
    en: "Hi everyone! Today I want to tell you about my family.",
    vi: "Xin chào mọi người! Hôm nay tôi muốn kể cho các bạn nghe về gia đình của mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Lời chào (Hi everyone!) + Adverb (Today) + S + verb (want) + to-infinitive (to tell you) + prepositional phrase (about my family)." },
      { label: "Hi everyone", content: "Lời chào chung cho mọi người." },
      { label: "Today", content: "Trạng từ chỉ thời gian đứng ở đầu câu." },
      { label: "I + want", content: "Chủ ngữ 'I' đi với động từ 'want' (muốn)." },
      { label: "to tell you", content: "Cụm nguyên mẫu có 'to' ('to tell') kết hợp với tân ngữ 'you'." },
      { label: "about my family", content: "Cụm giới từ chỉ chủ đề ('about' + tính từ sở hữu 'my' + danh từ 'family')." },
    ],
    chunks: [
      c("Hi everyone", "xin chào mọi người", "/haɪ ˈɛvriwʌn/", "default", "Lời chào", "Câu chào mở đầu thân thiện."),
      c("Today", "hôm nay", "/ˈtʊdeɪ/", "adverb", "Trạng từ chỉ thời gian", "Đứng đầu câu để xác định thời điểm."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("want", "muốn", "/wɑːnt/", "verb", "Động từ chỉ mong muốn", "Theo sau bởi động từ nguyên mẫu có 'to'."),
      c("to tell you", "kể với bạn", "/tə tɛl juː/", "verb", "Cụm động từ nguyên mẫu làm tân ngữ", "'to tell' là động từ nguyên mẫu có 'to', 'you' là tân ngữ."),
      c("about my family", "về gia đình của tôi", "/əˈbaʊt maɪ ˈfæməli/", "preposition", "Cụm giới từ chỉ chủ đề", "Giới từ 'about' đi với cụm danh từ chỉ gia đình."),
    ],
  },
  {
    id: "l2-s2",
    ipa: "/ðɛr ɑːr fɔːr ˈpiːpəl ɪn maɪ ˈfæməli maɪ ˈpɛrənts, maɪ ˈjʊŋɡər ˈbrʌðər ænd miː/",
    en: "There are four people in my family: my parents, my younger brother and me.",
    vi: "Có bốn người trong gia đình tôi: bố mẹ tôi, em trai tôi và tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc tồn tại (There + be) + số lượng + danh từ (four people) + prepositional phrase (in my family) + danh sách liệt kê thành viên." },
      { label: "There are", content: "Cấu trúc chỉ sự tồn tại dạng số nhiều." },
      { label: "four people", content: "Số đếm 'four' + danh từ số nhiều 'people'." },
      { label: "in my family", content: "Cụm giới từ chỉ phạm vi/địa điểm gia đình." },
      { label: "my parents, my younger brother and me", content: "Cụm danh từ liệt kê các thành viên trong gia đình." },
    ],
    chunks: [
      c("There are", "có", "/ðɛr ɑːr/", "verb", "Cấu trúc tồn tại (There + be)", "Dùng để giới thiệu sự tồn tại của sự vật/người ở số nhiều."),
      c("four people", "bốn người", "/fɔːr ˈpiːpəl/", "noun", "Tân ngữ (số + danh từ)", "'four' là số đếm, 'people' là danh từ số nhiều của 'person'."),
      c("in my family", "trong gia đình của tôi", "/ɪn maɪ ˈfæməli/", "preposition", "Cụm giới từ chỉ phạm vi", "Giới từ 'in' đi với cụm danh từ sở hữu chỉ gia đình."),
      c("my parents", "bố mẹ tôi", "/maɪ ˈpɛrənts/", "noun", "Cụm danh từ chỉ thành viên", "'parents' là danh từ số nhiều chỉ cả bố và mẹ."),
      c("my younger brother", "em trai tôi", "/maɪ ˈjʊŋɡər ˈbrʌðər/", "noun", "Cụm danh từ chỉ thành viên", "'younger' là tính từ so sánh hơn chỉ người em, 'brother' là anh/em trai."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối thành phần cuối trong danh sách liệt kê."),
      c("me", "tôi", "/miː/", "noun", "Đại từ nhân xưng", "Đóng vai trò là một phần trong danh sách liệt kê thành viên."),
    ],
  },
  {
    id: "l2-s3",
    ipa: "/wi lɪv təˈɡɛðər ɪn ə ˈkoʊzi haʊs/",
    en: "We live together in a cozy house.",
    vi: "Chúng tôi sống cùng nhau trong một ngôi nhà ấm cúng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (live) + adverb (together) + prepositional phrase (in a cozy house)." },
      { label: "We + live", content: "Chủ ngữ 'We' đi với động từ 'live' (sống)." },
      { label: "together", content: "Trạng từ chỉ cách thức ('cùng nhau')." },
      { label: "in a cozy house", content: "Cụm giới từ chỉ địa điểm ('in' + mạo từ 'a' + tính từ 'cozy' + danh từ 'house')." },
    ],
    chunks: [
      c("We", "Chúng tôi", "/wi/", "noun", "Chủ ngữ", "Ngôi thứ nhất số nhiều."),
      c("live", "sống", "/lɪv/", "verb", "Động từ chỉ nơi sinh sống", "Dùng để nói về việc chung sống."),
      c("together", "cùng nhau", "/təˈɡɛðər/", "adverb", "Trạng từ đứng tự do", "Chỉ trạng thái làm gì đó cùng nhau."),
      c("in a cozy house", "trong một ngôi nhà ấm cúng", "/ɪn ə ˈkoʊzi haʊs/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'in' đi với cụm danh từ miêu tả ngôi nhà."),
    ],
  },
  {
    id: "l2-s4",
    ipa: "/maɪ ˈfɑːðər ɪz ə ˈdɑːktər, ænd maɪ ˈmʌðər ɪz ə ˈtiːtʃər/",
    en: "My father is a doctor, and my mother is a teacher.",
    vi: "Bố tôi là bác sĩ, và mẹ tôi là giáo viên.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề 1 (S + be + cụm danh từ nghề nghiệp) + connector (and) + Mệnh đề 2 (S + be + cụm danh từ nghề nghiệp)." },
      { label: "My father", content: "Tính từ sở hữu 'My' + danh từ 'father' làm chủ ngữ." },
      { label: "is", content: "Động từ tobe 'is' chia số ít." },
      { label: "a doctor", content: "Mạo từ 'a' + danh từ nghề nghiệp 'doctor'." },
      { label: "and", content: "Từ nối hai mệnh đề." },
      { label: "my mother is a teacher", content: "Chủ ngữ (my mother) + tobe (is) + bổ ngữ nghề nghiệp (a teacher)." },
    ],
    chunks: [
      c("My father", "bố của tôi", "/maɪ ˈfɑːðər/", "noun", "Chủ ngữ", "Cụm danh từ chỉ người bố."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("a doctor", "một bác sĩ", "/ə ˈdɑːktər/", "noun", "Bổ ngữ (cụm danh từ nghề nghiệp)", "Dùng mạo từ 'a' trước danh từ đếm được số ít chỉ nghề nghiệp."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai câu đơn thành câu ghép."),
      c("my mother", "mẹ của tôi", "/maɪ ˈmʌðər/", "noun", "Chủ ngữ vế sau", "Cụm danh từ chỉ người mẹ."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("a teacher", "một giáo viên", "/ə ˈtiːtʃər/", "noun", "Bổ ngữ (cụm danh từ nghề nghiệp)", "Cụm danh từ chỉ nghề giáo viên."),
    ],
  },
  {
    id: "l2-s5",
    ipa: "/maɪ ˈbrʌðər ɪz ə ˈstudənt ət ə ˌjunəˈvɜrsəti/",
    en: "My brother is a student at a university.",
    vi: "Em trai tôi là sinh viên tại một trường đại học.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + be + cụm danh từ (a student) + prepositional phrase (at a university)." },
      { label: "My brother", content: "Tính từ sở hữu 'My' + danh từ 'brother' làm chủ ngữ." },
      { label: "is", content: "Động từ tobe 'is' chia số ít." },
      { label: "a student", content: "Mạo từ 'a' + danh từ 'student' làm bổ ngữ." },
      { label: "at a university", content: "Cụm giới từ chỉ địa điểm học tập ('at' + mạo từ 'a' + danh từ 'university')." },
    ],
    chunks: [
      c("My brother", "anh/em trai của tôi", "/maɪ ˈbrʌðər/", "noun", "Chủ ngữ", "Cụm danh từ chỉ anh/em trai."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("a student", "một học sinh/sinh viên", "/ə ˈstudənt/", "noun", "Bổ ngữ", "Cụm danh từ chỉ người học."),
      c("at a university", "tại một trường đại học", "/ət ə ˌjunəˈvɜrsəti/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'at' đi với cụm danh từ chỉ trường đại học."),
    ],
  },
  {
    id: "l2-s6",
    ipa: "/ɪn ði ˈivnɪŋ, wi ˈjuʒuəli hæv ˈdɪnər təˈɡɛðər ænd tɔk əˈbaʊt ˈaʊər deɪ/",
    en: "In the evening, we usually have dinner together and talk about our day.",
    vi: "Vào buổi tối, chúng tôi thường ăn tối cùng nhau và trò chuyện về ngày của mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (In the evening) + S + adverb (usually) + verb phrase 1 (have dinner) + adverb (together) + connector (and) + verb phrase 2 (talk about our day)." },
      { label: "In the evening", content: "Cụm giới từ chỉ thời gian buổi tối." },
      { label: "We + usually", content: "Chủ ngữ 'We' + trạng từ tần suất 'usually'." },
      { label: "have dinner", content: "Cụm động từ chỉ bữa ăn ('have dinner')." },
      { label: "together", content: "Trạng từ chỉ cách thức." },
      { label: "and", content: "Từ nối hai hành động." },
      { label: "talk about our day", content: "Cụm động từ 'talk about' + tân ngữ 'our day'." },
    ],
    chunks: [
      c("In the evening", "vào buổi tối", "/ɪn ði ˈivnɪŋ/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng mạo từ 'the' trong cụm giới từ chỉ buổi trong ngày."),
      c("we", "chúng tôi", "/wi/", "noun", "Chủ ngữ", "Ngôi thứ nhất số nhiều."),
      c("usually", "thường xuyên", "/ˈjuʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước cụm động từ thường."),
      c("have dinner", "ăn tối", "/hæv ˈdɪnər/", "verb", "Cụm động từ", "Collocation chỉ bữa ăn tối."),
      c("together", "cùng nhau", "/təˈɡɛðər/", "adverb", "Trạng từ đứng tự do", "Chỉ hoạt động chung của cả nhà."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai hoạt động trong buổi tối."),
      c("talk about our day", "trò chuyện về ngày của chúng tôi", "/tɔk əˈbaʊt ˈaʊər deɪ/", "verb", "Cụm động từ mở rộng", "'talk about' là cụm cố định, 'our day' là cụm danh từ làm tân ngữ."),
    ],
  },
  {
    id: "l2-s7",
    ipa: "/ɑːn ˈwiːkɛndz, maɪ ˈfæməli laɪks ˈɡoʊɪŋ tə ðə pɑːrk/",
    en: "On weekends, my family likes going to the park.",
    vi: "Vào các ngày cuối tuần, gia đình tôi thích đi công viên.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (On weekends) + S (my family - ngôi 3 số ít) + verb (likes) + gerund phrase (going to the park)." },
      { label: "On weekends", content: "Cụm giới từ chỉ thời gian cuối tuần." },
      { label: "my family", content: "Cụm danh từ chỉ gia đình đóng vai trò chủ ngữ số ít." },
      { label: "likes", content: "Động từ 'like' chia số ít (thêm -s) theo chủ ngữ 'family'." },
      { label: "going to the park", content: "Danh động từ 'going' + cụm giới từ chỉ hướng đi/địa điểm ('to the park')." },
    ],
    chunks: [
      c("On weekends", "vào các ngày cuối tuần", "/ɑːn ˈwiːkɛndz/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'on' trước 'weekends'."),
      c("my family", "gia đình của tôi", "/maɪ ˈfæməli/", "noun", "Chủ ngữ (danh từ tập hợp)", "Được coi là danh từ số ít khi chỉ tập thể thống nhất."),
      c("likes", "thích", "/laɪks/", "verb", "Động từ chỉ sở thích", "Chia số ít thêm -s vì chủ ngữ 'my family' là ngôi thứ ba số ít."),
      c("going to the park", "đi đến công viên", "/ˈɡoʊɪŋ tə ðə pɑːrk/", "noun", "Cụm danh động từ làm tân ngữ", "'going' là danh động từ đi sau 'likes', 'to the park' là cụm giới từ chỉ hướng tới nơi chốn."),
    ],
  },
  {
    id: "l2-s8",
    ipa: "/aɪ lʌv maɪ ˈfæməli ˈvɛri mʌtʃ/",
    en: "I love my family very much!",
    vi: "Tôi rất yêu gia đình của mình!",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (love) + tân ngữ (my family) + adverbial phrase (very much)." },
      { label: "I + love", content: "Chủ ngữ 'I' đi với động từ 'love' (yêu thương)." },
      { label: "my family", content: "Tính từ sở hữu 'my' + danh từ 'family' làm tân ngữ." },
      { label: "very much", content: "Cụm trạng từ chỉ mức độ đứng ở cuối câu ('rất nhiều')." },
    ],
    chunks: [
      c("I", "Tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("love", "yêu", "/lʌv/", "verb", "Động từ chỉ tình cảm", "Dùng để bày tỏ tình yêu thương."),
      c("my family", "gia đình của tôi", "/maɪ ˈfæməli/", "noun", "Tân ngữ", "Cụm danh từ chỉ gia đình."),
      c("very much", "rất nhiều", "/ˈvɛri mʌtʃ/", "adverb", "Cụm trạng từ chỉ mức độ", "Đứng cuối câu để nhấn mạnh tình cảm."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson02Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "There are _____________ people in my family.",
      meaning: "Có ... người trong gia đình tôi.",
      example: "There are four people in my family.",
      alternatives: ["three", "four", "five"],
    },
    {
      term: "My father is a _____________, and my mother is a _____________.",
      meaning: "Bố tôi là một ..., và mẹ tôi là một ...",
      example: "My father is a doctor, and my mother is a teacher.",
      alternatives: ["doctor, teacher", "worker, accountant", "engineer, doctor"],
    },
    {
      term: "We live together in a _____________ house.",
      meaning: "Chúng tôi sống cùng nhau trong một ngôi nhà ...",
      example: "We live together in a cozy house.",
      alternatives: ["cozy", "small", "big"],
    },
    {
      term: "On weekends, my family likes _____________.",
      meaning: "Vào cuối tuần, gia đình tôi thích ...",
      example: "On weekends, my family likes going to the park.",
      alternatives: ["going to the park", "staying at home", "visiting grandparents"],
    },
    {
      term: "I love my family _____________.",
      meaning: "Tôi yêu gia đình của mình ...",
      example: "I love my family very much.",
      alternatives: ["very much", "so much"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson02Sentences = sentences;