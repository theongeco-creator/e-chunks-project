import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "Hi everyone! Today I want to tell you about my family. There are four people in my family: my parents, my younger brother, and me. We live together in a cozy house. My father is a doctor, and my mother is a teacher. My brother is a student at a university. In the evening, we usually have dinner together and talk about our day. On weekends, my family likes going to the park. I love my family very much!";

const translation =
"Xin chào mọi người! Hôm nay tôi muốn kể cho các bạn nghe về gia đình của tôi. Gia đình tôi có bốn người: bố mẹ tôi, em trai tôi và tôi. Chúng tôi sống cùng nhau trong một ngôi nhà ấm cúng. Bố tôi là một bác sĩ, còn mẹ tôi là một giáo viên. Em trai tôi hiện là sinh viên đại học. Vào buổi tối, chúng tôi thường ăn tối cùng nhau và trò chuyện về một ngày đã qua. Vào cuối tuần, gia đình tôi thích đi công viên. Tôi yêu gia đình mình rất nhiều!";

const readingSegments: ReadingSegment[] = [
  { text: "Hi everyone! " },
  { text: "Today I "},
  { text: "want to tell", type: "verb" },
  { text: " you " },
  { text: "about my family", type: "preposition"  },
  { text: " . " },
  { text: "There are", type: "verb" },
  { text: " " },
  { text: "four people", type: "noun" },
  { text: " " },
  { text: "in my family", type: "preposition"  },
  { text: " " },
  { text: "my parents, my younger brother, and me. ", type: "noun"  },
  { text: " . " },
  { text: "We" },
  { text: " " },
  { text: "live", type: "verb" },
  { text: " " },
  { text: "together", type: "noun" },
  { text: " " },
  { text: "in a cozy house", type: "preposition" },
  { text: ". " },
  { text: "My father" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "a doctor", type: "noun" },
  { text: ", and " },
  { text: " " }, 
  { text: "my mother" },
  { text: " " }, 
  { text: "is" , type: "verb" },
  { text: " " }, 
  { text: "a teacher. " , type: "noun" },
  { text: " " }, 
  { text: "My brother", type: "noun" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "a student", type: "noun" },
  { text: " " },
  { text: "at a university", type: "preposition" },
  { text: ". " },
  { text: "In the evening", type: "time" },
  { text: ", we " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "have dinner together", type: "verb" },
  { text: " " },
  { text: " and " },
  { text: "talk about our day" , type: "verb" },
  { text: " . " },
  { text: "On weekends", type: "time" },
  { text: ", my family " },
  { text: "likes", type: "verb" },
  { text: " " },
  { text: "going to the park", type: "noun" },
  { text: ". " },
  { text: "I" },
  { text: " " },
  { text: "love", type: "verb" },
  { text: " " },
  { text: " my family " },
  { text: "very much", type: "adjective" },
  { text: "!" },
];

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

export const lesson02Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "There are _____________ people in my family",
  meaning: "Có ... người trong gia đình tôi",
  example: "There are four people in my family.",
  alternatives: ["three people", "four people", "five people", "six people"]
},

{
  term: "I live with _____________",
  meaning: "Tôi sống cùng...",
  example: "I live with my family.",
  alternatives: ["my family", "my parents", "my boyfriend", "my friends", "my roommates"]
},

{
  term: "We live in _____________",
  meaning: "Chúng tôi sống trong / ở...",
  example: "We live in a small house.",
  alternatives: ["a small house", "a big house", "an apartment", "a cozy house", "a quiet neighborhood"]
},

{
  term: "My _____________ is a/an _____________",
  meaning: "___________ của tôi là một...",
  example: "My brother is a student.",
  alternatives: ["doctor", "teacher", "engineer", "designer", "developer", "manager", "student"]
},

{
  term: "We usually _____________ together",
  meaning: "Chúng tôi thường... cùng nhau",
  example: "We usually have dinner together.",
  alternatives: ["have dinner", "have breakfast", "watch TV", "cook", "spend time"]
},

{
  term: "We talk about _____________",
  meaning: "Chúng tôi nói về...",
  example: "We talk about our day.",
  alternatives: ["our day", "work", "school", "our plans", "our hobbies"]
},

{
  term: "On weekends, my family likes _____________",
  meaning: "Vào cuối tuần, gia đình tôi thích...",
  example: "On weekends, my family likes going to the park.",
  alternatives: ["going to the park", "watching movies", "cooking together", "going out", "visiting our grandparents"]
},

{
  term: "I love _____________",
  meaning: "Tôi yêu / rất thích...",
  example: "I love my family.",
  alternatives: ["my family", "my parents", "my brother", "spending time with my family"]
}

]
};