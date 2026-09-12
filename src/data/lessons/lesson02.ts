import type { SentenceItem, Chunk, FillBlankQuestion, ReadingSegment } from "../types";


const paragraph =
  "Hi everyone! Today I want to tell you about my family. There are four people in my family: my parents, my younger brother, and me. We live together in a cozy house. My father is a doctor, and my mother is a teacher. My brother is a student at a university. In the evening, we usually have dinner together and talk about our day. On weekends, my family likes going to the park. I love my family very much!";

const translation =
"Xin chào mọi người! Hôm nay tôi muốn kể cho các bạn nghe về gia đình của tôi. Gia đình tôi có bốn người: bố mẹ tôi, em trai tôi và tôi. Chúng tôi sống cùng nhau trong một ngôi nhà ấm cúng. Bố tôi là một bác sĩ, còn mẹ tôi là một giáo viên. Em trai tôi hiện là sinh viên đại học. Vào buổi tối, chúng tôi thường ăn tối cùng nhau và trò chuyện về một ngày đã qua. Vào cuối tuần, gia đình tôi thích đi công viên. Tôi yêu gia đình mình rất nhiều!";

const readingSegments: ReadingSegment[] = [
  { text: "Hi everyone" },
  { text: "!" },
  { text: " " },

  { text: "Today", type: "time" },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "want to tell you", type: "verb" },
  { text: " " },
  { text: "about my family", type: "preposition" },
  { text: "." },
  { text: " " },

  { text: "There are", type: "verb" },
  { text: " " },
  { text: "four people", type: "noun" },
  { text: " " },
  { text: "in my family", type: "preposition" },
  { text: " " },
  { text: "my parents", type: "noun" },
  { text: "," },
  { text: " " },
  { text: "my younger brother and me ", type: "noun" },
  { text: " " },
  { text: "." },
  { text: " " },

  { text: "We" },
  { text: " " },
  { text: "live together", type: "verb" },
  { text: " " },
  { text: "in a cozy house", type: "preposition" },
  { text: "." },
  { text: " " },

  { text: "My father" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "a doctor", type: "noun" },
  { text: "," },
  { text: " " },
  { text: "and my mother" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "a teacher", type: "noun" },
  { text: "." },
  { text: " " },

  { text: "My brother" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "a student", type: "noun" },
  { text: " " },
  { text: "at a university", type: "preposition" },
  { text: "." },
  { text: " " },

  { text: "In the evening", type: "preposition" },
  { text: "," },
  { text: " " },
  { text: "we" },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "have dinner together", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "talk about our day", type: "verb" },
  { text: "." },
  { text: " " },

  { text: "On weekends", type: "time" },
  { text: "," },
  { text: " " },
  { text: "my family" },
  { text: " " },
  { text: "likes going to the park", type: "verb" },
  { text: "." },
  { text: " " },

  { text: "I" },
  { text: " " },
  { text: "love", type: "verb" },
  { text: " " },
  { text: "my family", type: "noun" },
  { text: " " },
  { text: "very much!", type: "adjective"  },
]

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "want to tell",
    pronunciation: "/wɒnt tuː tel/",
    meaning: "Muốn kể",
    context: "Dùng để giới thiệu chủ đề muốn chia sẻ.",
    type: "verb",
  },
  {
    phrase: "live together",
    pronunciation: "/lɪv təˈɡeðər/",
    meaning: "Sống cùng nhau",
    context: "Dùng để chỉ việc sinh sống chung một nhà.",
    type: "verb",
  },
  {
    phrase: "have dinner together",
    pronunciation: "/hæv ˈdɪnər təˈɡeðər/",
    meaning: "Ăn tối cùng nhau",
    context: "Dùng để nói về bữa ăn tối chung của gia đình.",
    type: "verb",
  },
  {
  phrase: "talk about our day",
  pronunciation: "/tɔːk əˈbaʊt aʊər deɪ/",
  meaning: "nói về một ngày của chúng tôi",
  context: "Dùng để nói về hành động trò chuyện và chia sẻ những gì đã xảy ra trong ngày.",
  type: "verb",
},
{
  phrase: "is",
  pronunciation: "/ɪz/",
  meaning: "là, thì, ở",
  context: "Dùng IS làm động từ BE để nối chủ ngữ với thông tin mô tả, trạng thái hoặc vị trí.",
  type: "verb",
},
{
  phrase: "There are",
  pronunciation: "/ðeər ɑːr/",
  meaning: "có",
  context: "Dùng THERE ARE để nói rằng có một hoặc nhiều người, vật ở một nơi hoặc tồn tại.",
  type: "verb",
},
  {
    phrase: "likes",
    pronunciation: "/laɪks/",
    meaning: "Thích",
    context: "Dùng để diễn tả sở thích của ai đó (chủ ngữ số ít).",
    type: "verb",
  },
  {
    phrase: "love",
    pronunciation: "/lʌv/",
    meaning: "Yêu thương",
    context: "Dùng để bày tỏ tình cảm sâu sắc.",
    type: "verb",
  },
  // Prepositional chunks (pink)
  {
    phrase: "in a cozy house",
    pronunciation: "/ɪn ə ˈkəʊzi haʊs/",
    meaning: "Trong một ngôi nhà ấm cúng",
    context: "Dùng để chỉ nơi ở ấm áp.",
    type: "preposition",
  },
  {
    phrase: "at a university",
    pronunciation: "/æt ə ˌjuːnɪˈvɜːsəti/",
    meaning: "Tại một trường đại học",
    context: "Dùng để chỉ môi trường học tập cấp đại học.",
    type: "preposition",
  },
  {
  phrase: "in my family",
  pronunciation: "/ɪn maɪ ˈfæməli/",
  meaning: "trong gia đình tôi",
  context: "Dùng IN để nói về người hoặc sự việc thuộc phạm vi hoặc bên trong một gia đình.",
  type: "preposition",
},
{
  phrase: "about my family",
  pronunciation: "/əˈbaʊt maɪ ˈfæməli/",
  meaning: "về gia đình tôi",
  context: "Dùng ABOUT để nói về chủ đề được nhắc đến hoặc nói chuyện.",
  type: "preposition",
},
  // Time chunks (purple)
  {
    phrase: "In the evening",
    pronunciation: "/ɪn ði ˈiːvnɪŋ/",
    meaning: "Vào buổi tối",
    context: "Dùng để chỉ khoảng thời gian trong ngày.",
    type: "time",
  },
  {
    phrase: "usually",
    pronunciation: "/ˈjuːʒʊəli/",
    meaning: "Thường xuyên",
    context: "Dùng để chỉ tần suất diễn ra sự việc.",
    type: "time",
  },
  {
    phrase: "On weekends",
    pronunciation: "/ɒn ˈwiːkendz/",
    meaning: "Vào các ngày cuối tuần",
    context: "Dùng để chỉ thời gian nghỉ ngơi cuối tuần.",
    type: "time",
  },
  // Noun chunks (red)
  {
    phrase: "Hi everyone",
    pronunciation: "/haɪ ˈevriwʌn/",
    meaning: "Chào mọi người",
    context: "Dùng để bắt đầu một lời chào tập thể.",
    type: "noun",
  },
  {
  phrase: "a teacher",
  pronunciation: "/ə ˈtiːtʃər/",
  meaning: "một giáo viên",
  context: "Dùng để nói về một người làm công việc dạy học.",
  type: "noun",
},
{
  phrase: "my parents, my younger brother, and me",
  pronunciation: "/maɪ ˈpeərənts, maɪ ˈjʌŋɡər ˈbrʌðər, ænd miː/",
  meaning: "bố mẹ tôi, em trai tôi và tôi",
  context: "Dùng để nói về các thành viên trong gia đình, bao gồm bố mẹ, em trai và bản thân mình.",
  type: "noun",
},
{
  phrase: "a student",
  pronunciation: "/ə ˈstjuːdənt/",
  meaning: "một học sinh / sinh viên",
  context: "Dùng để nói về một người đang học tại trường hoặc cơ sở giáo dục.",
  type: "noun",
},
{
  phrase: "a doctor",
  pronunciation: "/ə ˈdɒktər/",
  meaning: "một bác sĩ",
  context: "Dùng để nói về một người làm công việc chăm sóc và điều trị bệnh nhân.",
  type: "noun",
},
  {
    phrase: "There are four people",
    pronunciation: "/ðeər ɑːr fɔːr ˈpiːpl/",
    meaning: "Có bốn người",
    context: "Dùng để giới thiệu số lượng thành viên.",
    type: "noun",
  },

  {
    phrase: "going to the park",
    pronunciation: "/ˈɡəʊɪŋ tuː ðə pɑːk/",
    meaning: "Đi công viên",
    context: "Dùng để chỉ hoạt động giải trí ngoài trời.",
    type: "noun",
  },
  // Adjective chunks (blue)
  {
    phrase: "cozy",
    pronunciation: "/ˈkəʊzi/",
    meaning: "Ấm cúng",
    context: "Dùng để miêu tả không gian thoải mái, ấm áp.",
    type: "adjective",
  },
  {
    phrase: "very much",
    pronunciation: "/ˈveri mʌtʃ/",
    meaning: "Rất nhiều",
    context: "Dùng để nhấn mạnh mức độ tình cảm hoặc hành động.",
    type: "adjective",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "Hi everyone! Today I ____ tell you about my family.",
    answer: "want to",
    hint: "muốn",
  },
  {
    prompt: "There are four people in my family: my parents, my younger brother, and me. We ____ together in a cozy house.",
    answer: "live",
    hint: "sống",
  },
  {
    prompt: "My father is a doctor, and my mother is a teacher. My brother is a student ____ a university.",
    answer: "at",
    hint: "tại / ở",
  },
  {
    prompt: "____ the evening, we usually have dinner together and talk about our day.",
    answer: "In",
    hint: "Vào (buổi tối)",
  },
  {
    prompt: "On weekends, my family ____ going to the park.",
    answer: "likes",
    hint: "thích (chia ở số ít)",
  },
  {
    prompt: "I love my family ____.",
    answer: "very much",
    hint: "rất nhiều",
  },
];

const sentences: SentenceItem[] = [
  { text: "Hi everyone! Today I want to tell you about my family.", ipa: "/haɪ ˈevriwʌn ˈtədeɪ aɪ wɒnt tuː tel juː əˈbaʊt maɪ ˈfæməli/" },
  { text: "There are four people in my family: my parents, my younger brother, and me.", ipa: "/ðeər ɑːr fɔːr ˈpiːpl ɪn maɪ ˈfæməli maɪ ˈpeərənts maɪ ˈjʌŋɡər ˈbrʌðər ænd miː/" },
  { text: "We live together in a cozy house.", ipa: "/wiː lɪv təˈɡeðər ɪn ə ˈkəʊzi haʊs/" },
  { text: "My father is a doctor, and my mother is a teacher.", ipa: "/maɪ ˈfɑːðər ɪz ə ˈdɒktər ænd maɪ ˈmʌðər ɪz ə ˈtiːtʃər/" },
  { text: "My brother is a student at a university.", ipa: "/maɪ ˈbrʌðər ɪz ə ˈstjuːdənt æt ə ˌjuːnɪˈvɜːsəti/" },
  { text: "In the evening, we usually have dinner together and talk about our day.", ipa: "/ɪn ði ˈiːvnɪŋ wiː ˈjuːʒuəli hæv ˈdɪnər təˈɡeðər ænd tɔːk əˈbaʊt aʊə deɪ/" },
  { text: "On weekends, my family likes going to the park.", ipa: "/ɒn ˌwiːkˈendz maɪ ˈfæməli laɪks ˈɡəʊɪŋ tə ðə pɑːk/" },
  { text: "I love my family very much!", ipa: "/aɪ lʌv maɪ ˈfæməli ˈveri mʌtʃ/" },
];

export const lesson02Content = {
  paragraph,
  translation,
  sentences, // 👈 thêm dòng này
  chunks,
  readingSegments,
  practice,
  
};