import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "Today, I want to talk about my favorite season. There are four seasons in my country: spring, summer, autumn, and winter. I like autumn the most because the weather is cool and pleasant. The leaves on the trees turn yellow and red, so everything looks very pretty. I often go cycling in the evening when it is dry and sunny. But I don't like summer very much because it is too hot. When it rains heavily, I just want to stay at home and watch TV. Good weather always makes me feel really happy.";

const translation =
"THôm nay, tôi muốn chia sẻ về mùa mà mình yêu thích nhất. Đất nước tôi có bốn mùa: xuân, hạ, thu và đông. Tôi thích mùa thu nhất vì thời tiết mát mẻ và dễ chịu. Lá cây chuyển sang màu vàng và đỏ, khiến mọi thứ trông vô cùng xinh đẹp. Tôi thường đi xe đạp vào buổi tối khi trời khô ráo và có nắng nhẹ. Ngược lại, tôi không thích mùa hè cho lắm vì thời tiết quá nóng bức. Những khi trời mưa to, tôi chỉ muốn ở nhà và xem TV. Thời tiết đẹp luôn làm cho tâm trạng tôi cảm thấy vô cùng hạnh phúc.";

const readingSegments: ReadingSegment[] = [
  { text: "Today", type: "time"  },
  { text: " " },
  { text: ", I " },
  { text: " " },
  { text: "want to talk", type: "verb" },
  { text: " " },
  { text: "about my favorite season", type: "noun" },
  { text: ". " },
  { text: "There are", type: "verb" },
  { text: " " },
  { text: "four seasons", type: "noun" },
  { text: " " },
  { text: " in my country:", type: "preposition" },
  { text: " " },
  { text: "spring, summer, autumn, and winter", type: "noun" },
  { text: ". I " },
  { text: " " },
  { text: "like", type: "verb" },
  { text: " " },
  { text: "autumn the most" },
  { text: " " },
  { text: "because", type: "reason" },
  { text: " " },
  { text: " the weather is " },
  { text: " " },
  { text: "cool and pleasant", type: "adjective" },
  { text: ". " },
  { text: "The leaves" },
  { text: " " },
  { text: "on the trees", type: "preposition" },
  { text: " " },
  { text: " turn yellow and red", type: "verb" },
  { text: " " },
  { text: "so everything" },
  { text: " " },
  { text: "looks very pretty", type: "verb" },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "often", type: "time"  },
  { text: " " },
  { text: "go cycling", type: "verb" },
  { text: " " },
  { text: "in the evening", type: "time" },
  { text: " " },
  { text: " when it is dry and sunny.", type: "reason" },
  { text: " " },
  { text: "But I "},
  { text: " " },
  { text: "don't like", type: "verb" },
  { text: " " },
  { text: "summer", type: "noun" },
  { text: " " },
  { text: "very much", type: "time" },
  { text: " " },
  { text: "because it is too hot.",type: "reason" },
  { text: " " },
  { text: " When it " },
  { text: " " },
  { text: "rains heavily", type: "verb" },
  { text: ", I just" },
  { text: " " },
  { text: "want to stay", type: "verb" },
  { text: " " },
  { text: "at home", type: "preposition" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "watch TV", type: "verb" },
  { text: ". " },
  { text: "Good weather" },
  { text: " " },
  { text: "always", type: "time" },
  { text: " " },
  { text: "makes me feel", type: "verb" },
  { text: " " },
  { text: "really happy", type: "adjective" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "want to talk about",
    pronunciation: "/wɒnt tuː tɔːk əˈbaʊt/",
    meaning: "Muốn nói về",
    context: "Dùng để giới thiệu chủ đề chuẩn bị thảo luận.",
    type: "verb",
  },
    {
    phrase: "rains heavily",
    pronunciation: "/rɛnz ˈhevɪli/",
    meaning: "Mưa lớn",
    context: "Dùng để miêu tả hiện tượng thời tiết mưa to.",
    type: "verb",
  },
  {
    phrase: "like autumn the most",
    pronunciation: "/laɪk ˈɔːtəm ðə məʊst/",
    meaning: "Thích mùa thu nhất",
    context: "Dùng để diễn tả mức độ yêu thích cao nhất đối với một mùa.",
    type: "verb",
  },
  {
    phrase: "go cycling",
    pronunciation: "/ɡəʊ ˈsaɪklɪŋ/",
    meaning: "Đi đạp xe",
    context: "Dùng để chỉ hoạt động thể thao giải trí ngoài trời.",
    type: "verb",
  },
  {
    phrase: "don't like",
    pronunciation: "/dəʊnt laɪk/",
    meaning: "Không thích",
    context: "Dùng để thể hiện thái độ không ưa thích một điều gì đó.",
    type: "verb",
  },
  {
    phrase: "stay at home and watch TV",
    pronunciation: "/steɪ ət həʊm ænd wɒtʃ ˌtiːˈviː/",
    meaning: "Ở nhà và xem TV",
    context: "Dùng để chỉ hoạt động thư giãn trong nhà khi thời tiết xấu.",
    type: "verb",
  },
  // Prepositional chunks (pink)
  {
    phrase: "on the trees",
    pronunciation: "/ɒn ðə triːz/",
    meaning: "Trên các cành cây / trên cây",
    context: "Dùng để chỉ vị trí của một vật thể.",
    type: "preposition",
  },
  // Noun chunks (red)
  {
    phrase: "my favorite season",
    pronunciation: "/maɪ ˈfeɪvərɪt ˈsiːzn/",
    meaning: "Mùa yêu thích của tôi",
    context: "Dùng để chỉ mùa được yêu quý nhất trong năm.",
    type: "noun",
  },
  {
    phrase: "There are four seasons",
    pronunciation: "/ðeər ɑːr fɔːr ˈsiːznz/",
    meaning: "Có bốn mùa",
    context: "Dùng để giới thiệu tổng số mùa ở một quốc gia.",
    type: "noun",
  },
  {
    phrase: "The leaves on the trees",
    pronunciation: "/ðə liːvz ɒn ðə triːz/",
    meaning: "Những chiếc lá trên cây",
    context: "Dùng để chỉ cảnh quan thiên nhiên thay đổi theo mùa.",
    type: "noun",
  },
  // Time chunks (purple)
  {
    phrase: "in the evening",
    pronunciation: "/ɪn ði ˈiːvnɪŋ/",
    meaning: "Vào buổi tối",
    context: "Dùng để chỉ khoảng thời gian trong ngày.",
    type: "time",
  },
  {
    phrase: "it rains heavily",
    pronunciation: "/ɪt reɪnz ˈhevɪli/",
    meaning: "Trời mưa lớn",
    context: "Dùng để miêu tả thời tiết mưa to.",
    type: "time",
  },
  // Adjective chunks (blue)
  {
    phrase: "cool and pleasant",
    pronunciation: "/kuːl ænd ˈpleznt/",
    meaning: "Mát mẻ và dễ chịu",
    context: "Dùng để miêu tả thời tiết ôn hòa, tuyệt vời.",
    type: "adjective",
  },
  {
    phrase: "Good weather",
    pronunciation: "/ɡʊd ˈweðər/",
    meaning: "Thời tiết đẹp",
    context: "Dùng để chỉ điều kiện thời tiết thuận lợi, dễ chịu.",
    type: "adjective",
  },
  {
    phrase: "dry and sunny",
    pronunciation: "/draɪ ænd ˈsʌni/",
    meaning: "Khô và có nắng, trời nắng ráo",
    context: "Dùng để chỉ điều kiện thời tiết thuận lợi, dễ chịu.",
    type: "adjective",
  },
  {
    phrase: "feel really happy",
    pronunciation: "/fiːl ˈriːəli ˈhæpi/",
    meaning: "Cảm thấy thực sự hạnh phúc",
    context: "Dùng để diễn tả tâm trạng vui vẻ, tích cực.",
    type: "adjective",
  },
  // Reason chunks (yellow)
  {
    phrase: "because",
    pronunciation: "/bɪˈkɒz/",
    meaning: "Bởi vì",
    context: "Dùng để giải thích lý do thích một mùa nào đó.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "Today, I want to talk ____ my favorite season.",
    answer: "about",
    hint: "về (cái gì)",
  },
  {
    prompt: "There are four seasons in my country: spring, summer, autumn, ____ winter.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "I like autumn the most because the weather is cool ____ pleasant.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "The leaves on the trees turn yellow and red, so everything looks very ____.",
    answer: "pretty",
    hint: "đẹp / xinh xắn",
  },
  {
    prompt: "I often go cycling in the evening when it is dry ____ sunny.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "But I don't like summer very much because it is too ____.",
    answer: "hot",
    hint: "nóng",
  },
  {
    prompt: "When it rains heavily, I just want to stay ____ home and watch TV.",
    answer: "at",
    hint: "ở (nhà)",
  },
];

export const lesson07Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "talk about _____________",
  meaning: "nói về...",
  example: "I want to talk about my favorite season.",
  alternatives: [
    "my favorite season",
    "my favorite weather",
    "my favorite month",
    "my hometown"
  ]
},

{
  term: "There are _____________",
  meaning: "Có...",
  example: "There are four seasons.",
  alternatives: [
    "four seasons",
    "two seasons",
    "many parks",
    "many places"
  ]
},

{
  term: "There are _____________ in ",
  meaning: "Có ..... ở ....",
  example: "There are four seasons in my country.",
  alternatives: [
    "two seasons / in my city",
    "many parks / in my hometown",
    "many places / in my area"
  ]
},

{
  term: "I like _____________ the most",
  meaning: "Tôi thích ... nhất",
  example: "I like autumn the most.",
  alternatives: [
    "autumn",
    "summer",
    "spring",
    "winter"
  ]
},

{
  term: "The weather is _____________",
  meaning: "thời tiết...",
  example: "The weather is cool.",
  alternatives: [
    "hot",
    "cold",
    "warm",
    "rainy",
    "dry"
  ]
},

{
  term: "_____________ and _____________",
  meaning: "... và ...",
  example: "The weather is cool and pleasant.",
  alternatives: [
    "cool and pleasant",
    "warm and comfortable",
    "hot and sunny",
    "cold and windy",
    "cool and fresh"
  ]
},

{
  term: "The _____________ on the _____________",
  meaning: "... trên...",
  example: "The leaves on the trees turn yellow and red.",
  alternatives: [
    "leaves on the trees",
    "flowers in the garden",
    "clouds in the sky",
    "snow on the ground"
  ]
},

{
  term: "The leaves turn_____________",
  meaning: "chuyển sang / trở nên...",
  example: "The leaves turn yellow and red.",
  alternatives: [
    "turn yellow and red",
    "turn green",
    "turn brown",
    "become colorful"
  ]
},

{
  term: "everything looks _____________",
  meaning: "mọi thứ trông...",
  example: "Everything looks very pretty.",
  alternatives: [
    "very pretty",
    "beautiful",
    "peaceful"
  ]
},

{
  term: "go _____________ in the _____________",
  meaning: "đi... vào...",
  example: "I go cycling in the evening.",
  alternatives: [
    "cycling in the evening",
    "walking in the morning",
    "jogging in the park",
    "swimming at the weekend"
  ]
},

{
  term: "when it is _____________",
  meaning: "khi trời...",
  example: "I go cycling when it is dry and sunny.",
  alternatives: [
    "dry and sunny",
    "cool",
    "warm",
    "cloudy",
    "windy"
  ]
},

{
  term: "too _____________",
  meaning: "quá...",
  example: "It is too hot.",
  alternatives: [
    "hot",     "cold",     "rainy",     "windy",     "dry"
  ]
},

{
  term: "rains _____________",
  meaning: "mưa...",
  example: "It rains heavily.",
  alternatives: [
    "heavily",
    "lightly",
    "all day",
    "a lot"
  ]
},

{
  term: "stay at home",
  meaning: "ở...",
  example: "I stay at home.",
  alternatives: [
   "stay inside", "go outside" , "go to the park"
  ]
},

{
  term: "watch TV",
  meaning: "xem...",
  example: "I watch TV.",
  alternatives: [
    "watch a movie" , "read a book", "listen to music", "play games"
  ]
},

{
  term: "makes me feel _____________",
  meaning: "khiến tôi cảm thấy...",
  example: "Autumn makes me feel happy.",
  alternatives: [
    "happy",
    "relaxed",
    "comfortable",
    "excited"
  ]
}

]
};