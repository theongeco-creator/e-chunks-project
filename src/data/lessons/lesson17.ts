import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "My best friend is a friendly and kind person. She is quite tall and has long black hair. She has brown eyes and a nice smile. She usually wears simple clothes like T-shirts and jeans. She is very helpful and often helps me with my work. She likes listening to music and watching movies in her free time. We often meet at the weekend and talk about our lives. I like spending time with her because she is easy to talk to.";

const translation =
"Bạn thân của tôi là một người thân thiện và tốt bụng. Cô ấy khá cao và có mái tóc đen dài. Cô ấy sở hữu đôi mắt màu nâu cùng một nụ cười rất đẹp. Cô ấy thường mặc những trang phục đơn giản như áo phông và quần jeans. Cô ấy rất hay giúp đỡ người khác và thường xuyên phụ giúp tôi trong công việc. Vào thời gian rảnh, cô ấy thích nghe nhạc và xem phim. Chúng tôi thường gặp nhau vào cuối tuần để trò chuyện về cuộc sống. Tôi rất thích dành thời gian bên cô ấy vì cô ấy là một người rất dễ nói chuyện.";

const readingSegments: ReadingSegment[] = [
  { text: "My best friend" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "a friendly and kind person", type: "noun" },
  { text: ". She " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "quite tall", type: "adjective" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "has", type: "verb" },
  { text: " " },
  { text: "long black hair", type: "noun" },
  { text: " " },
  { text: ". She " },
  { text: "has", type: "verb" },
  { text: " " },
  { text: "brown eyes and a nice smile", type: "noun" },
  { text: " " },
  { text: ". She " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "wears", type: "verb" },
  { text: " " },
  { text: "simple clothes", type: "noun" },
  { text: " " },
  { text: " like T-shirts and jeans", type: "noun"  },
  { text: " " },
  { text: " . She " },
  { text: "is very helpful", type: "adjective" },
  { text: " and " },
  { text: " " },
  { text: "often", type: "time" },
  { text: " " },
  { text: "helps", type: "verb" },
  { text: " " },
  { text: "me" },
  { text: " " },
  { text: "with my work", type: "preposition" },
  { text: ". She " },
  { text: "likes", type: "verb" },
  { text: " " },
  { text: "listening to music", type: "noun" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "watching movies", type: "noun" },
  { text: " " },
  { text: "in her free time", type: "time" },
  { text: ". We" },
  { text: " " },
  { text: "often", type: "time"  },
  { text: " " },
  { text: "meet", type: "verb" },
  { text: " " },
  { text: "at the weekend", type: "preposition" },
  { text: " and " },
  { text: "talk", type: "verb" },
  { text: " " },
  { text: "about our lives", type: "preposition" },
  { text: " " },
  { text: ". I " },
  { text: "like spending", type: "verb" },
  { text: " " },
  { text: "time", type: "noun" },
  { text: " " },
  { text: "with her", type: "preposition" },
  { text: " " },
  { text: "because she is easy to talk to", type: "reason" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Noun Chunk (red)
{
  phrase: "a friendly and kind person",
  pronunciation: "/ə ˈfrendli ænd kaɪnd ˈpɜːrsən/",
  meaning: "một người thân thiện và tốt bụng",
  context: "Dùng để miêu tả một người có tính cách thân thiện và tốt bụng.",
  type: "noun",
},
{
  phrase: "My best friend",
  pronunciation: "/maɪ best frend/",
  meaning: "người bạn thân nhất của tôi",
  context: "Dùng để nói về một người bạn rất thân hoặc người bạn thân nhất.",
  type: "noun",
},
{
  phrase: "brown eyes and a nice smile",
  pronunciation: "/braʊn aɪz ænd ə naɪs smaɪl/",
  meaning: "đôi mắt nâu và một nụ cười đẹp",
  context: "Dùng để miêu tả các đặc điểm trên khuôn mặt và ngoại hình.",
  type: "noun",
},
{
  phrase: "like T-shirts and jeans",
  pronunciation: "/laɪk ˈtiː ʃɜːrts ænd dʒiːnz/",
  meaning: "như áo thun và quần jean",
  context: "Dùng LIKE (như là/ như) để đưa ra ví dụ về 1 món nào đó.",
  type: "noun",
},
// Prepositional Chunk (pink)
  {
  phrase: "about our lives",
  pronunciation: "/əˈbaʊt aʊər laɪvz/",
  meaning: "về cuộc sống của chúng ta",
  context: "Dùng ABOUT để nói về chủ đề hoặc nội dung được nhắc đến.",
  type: "preposition",
},
{
  phrase: "at the weekend",
  pronunciation: "/æt ðə ˌwiːkˈend/",
  meaning: "vào cuối tuần",
  context: "Dùng AT để nói về một thời điểm hoặc khoảng thời gian cụ thể.",
  type: "preposition",
},
  // Verb chunks (green)
  {
    phrase: "is quite tall and has long black hair",
    pronunciation: "/ɪz kwaɪt tɔːl ænd hæz lɒŋ blæk heər/",
    meaning: "Khá cao và có mái tóc đen dài",
    context: "Dùng để miêu tả vóc dáng và ngoại hình.",
    type: "verb",
  },
  {
    phrase: "has brown eyes and a nice smile",
    pronunciation: "/hæz braʊn aɪz ænd ə naɪs smaɪl/",
    meaning: "Có đôi mắt nâu và nụ cười đẹp",
    context: "Dùng để miêu tả đặc điểm khuôn mặt.",
    type: "verb",
  },
  {
    phrase: "usually wears simple clothes",
    pronunciation: "/ˈjuːʒuəli weərz ˈsɪmpl kləʊðz/",
    meaning: "Thường mặc trang phục giản dị",
    context: "Dùng để nói về phong cách ăn mặc hằng ngày.",
    type: "verb",
  },
  {
    phrase: "helps me with my work",
    pronunciation: "/helps miː wɪð maɪ wɜːk/",
    meaning: "Giúp đỡ tôi trong công việc",
    context: "Dùng để chỉ hành động hỗ trợ, tương trợ lẫn nhau.",
    type: "verb",
  },
  {
    phrase: "likes listening to music and watching movies",
    pronunciation: "/laɪks ˈlɪsnɪŋ tuː ˈmjuːzɪk ænd ˈwɒtʃɪŋ ˈmuːviːz/",
    meaning: "Thích nghe nhạc và xem phim",
    context: "Dùng để kể về sở thích giải trí.",
    type: "verb",
  },
  {
    phrase: "meet at the weekend",
    pronunciation: "/miːt æt ðə ˈwiːkend/",
    meaning: "Gặp nhau vào dịp cuối tuần",
    context: "Dùng để chỉ lịch hẹn gặp định kỳ.",
    type: "verb",
  },
  {
    phrase: "talk about our lives",
    pronunciation: "/tɔːk əˈbaʊt ˈaʊər lɪvz/",
    meaning: "Trò chuyện về cuộc sống của chúng tôi",
    context: "Dùng để chỉ nội dung buổi trò chuyện thân mật.",
    type: "verb",
  },
  {
    phrase: "like spending time with her",
    pronunciation: "/laɪk ˈspendɪŋ taɪm wɪð hɜːr/",
    meaning: "Thích dành thời gian bên cô ấy",
    context: "Dùng để bày tỏ tình cảm quý mến.",
    type: "verb",
  },
  // Adjective chunks (blue)
  {
    phrase: "a friendly and kind person",
    pronunciation: "/ə ˈfrendli ænd kaɪnd ˈpɜːrsn/",
    meaning: "Một người thân thiện và tốt bụng",
    context: "Dùng để miêu tả tính cách tổng quan.",
    type: "adjective",
  },
  {
    phrase: "very helpful",
    pronunciation: "/ˈveri ˈhelpfl/",
    meaning: "Rất hay giúp đỡ người khác",
    context: "Dùng để khen ngợi tính cách tốt.",
    type: "adjective",
  },
  {
    phrase: "easy to talk to",
    pronunciation: "/ˈiːzi tuː tɔːk tuː/",
    meaning: "Dễ trò chuyện, dễ gần",
    context: "Dùng để nhận xét về sự cởi mở của một người.",
    type: "adjective",
  },
  // Time chunks (purple)
  {
    phrase: "in her free time",
    pronunciation: "/ɪn hɜːr friː taɪm/",
    meaning: "Trong thời gian rảnh của cô ấy",
    context: "Dùng để chỉ thời điểm làm sở thích cá nhân.",
    type: "time",
  },
  // Reason chunks (yellow)
  {
  phrase: "because she is easy to talk to.",
  pronunciation: "/bɪˈkɒz ʃiː ɪz ˈiːzi tə tɔːk tuː/",
  meaning: "bởi vì cô ấy rất dễ nói chuyện cùng",
  context: "Dùng BECAUSE để đưa ra lý do hoặc giải thích cho một ý được nói trước đó.",
  type: "reason",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "My best friend is a friendly and kind ____.",
    answer: "person",
    hint: "người",
  },
  {
    prompt: "She is quite tall and has long black ____.",
    answer: "hair",
    hint: "tóc",
  },
  {
    prompt: "She has brown eyes and a nice ____.",
    answer: "smile",
    hint: "nụ cười",
  },
  {
    prompt: "She usually wears simple clothes like T-shirts ____ jeans.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "She is very helpful and often helps me ____ my work.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "We often meet at the weekend and talk ____ our lives.",
    answer: "about",
    hint: "về",
  },
  {
    prompt: "I like spending time with her because she is easy ____ talk to.",
    answer: "to",
    hint: "để",
  },
];

export const lesson17Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "My best friend is a _____________ person",
  meaning: "Bạn thân nhất của tôi là một người...",
  example: "My best friend is a friendly and kind person.",
  alternatives: [
    "friendly and kind",
    "funny and cheerful",
    "quiet and helpful",
    "nice and friendly"
  ]
},

{
  term: "She/He is quite _____________",
  meaning: "Cô ấy/Anh ấy khá...",
  example: "She is quite tall.",
  alternatives: [
    "quite tall",
    "quite short",
    "quite young",
    "quite active"
  ]
},

{
  term: "has _____________ hair",
  meaning: "có mái tóc...",
  example: "She has long black hair.",
  alternatives: [
    "long black hair",
    "short brown hair",
    "long straight hair",
    "short curly hair"
  ]
},

{
  term: "has _____________ eyes",
  meaning: "có đôi mắt...",
  example: "She has brown eyes.",
  alternatives: [
    "brown eyes",
    "black eyes",
    "big eyes",
    "small eyes"
  ]
},

{
  term: "a nice _____________",
  meaning: "một ... dễ mến",
  example: "She has a nice smile.",
  alternatives: [
    "a nice smile",
    "a friendly face",
    "a kind voice",
    "a beautiful smile"
  ]
},

{
  term: "wears _____________",
  meaning: "mặc...",
  example: "She wears simple clothes.",
  alternatives: [
    "simple clothes",
    "casual clothes",
    "T-shirts and jeans",
    "a shirt and jeans"
  ]
},

{
  term: "like _____________",
  meaning: "thích...",
  example: "She likes T-shirts and jeans.",
  alternatives: [
    "like T-shirts and jeans",
    "like simple dresses",
    "like comfortable clothes",
    "like sportswear"
  ]
},

{
  term: "She/He is very _____________",
  meaning: "Cô ấy/Anh ấy rất...",
  example: "She is very helpful.",
  alternatives: [
    "very helpful",
    "very friendly",
    "very kind",
    "very funny"
  ]
},

{
  term: "helps me with _____________",
  meaning: "giúp tôi về...",
  example: "She helps me with my work.",
  alternatives: [
    "my work",
    "my homework",
    "my English",
    "my projects",
    "my studies",
    "difficult exercises",
    "daily tasks"
  ]
},

{
  term: "likes _____________",
  meaning: "thích...",
  example: "She likes listening to music.",
  alternatives: [
    "listening to music",
    "watching movies",
    "reading books",
    "playing sports"
  ]
},

{
  term: "We often meet _____________",
  meaning: "Chúng tôi thường gặp nhau...",
  example: "We often meet at the weekend.",
  alternatives: [
    "at the weekend",
    "after work",
    "after school",
    "in the evening"
  ]
},

{
  term: "meet at _____________",
  meaning: "gặp nhau tại...",
  example: "We meet at a coffee shop.",
  alternatives: [
    "at a coffee shop",
    "at the park",
    "at my house",
    "at a restaurant"
  ]
},

{
  term: "talk about _____________",
  meaning: "nói về...",
  example: "We talk about our lives.",
  alternatives: [
    "our lives",
    "our work",
    "our hobbies",
    "our plans",
    "our problems"
  ]
},

{
  term: "because _____________ is _____________",
  meaning: "bởi vì ... thì...",
  example: "I like her because she is easy to talk to.",
  alternatives: [
    "she is easy to talk to",
    "he is friendly",
    "she is very kind",
    "he is funny"
  ]
}

]
};