import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I live in a small, peaceful town with my family. There is a big park near my house, and I often walk there in the afternoon. My favorite place in town is a quiet coffee shop because I can relax and read books. Twice a week, I go to the local supermarket to buy food and drinks. At the weekend, I usually meet my friends at a café or go shopping. I often go around town by motorbike because it is fast and convenient. I really like my town because the people are friendly and the streets are clean. For me, it is a great place to live.";

const translation =
"Tôi sống cùng gia đình tại một thị trấn nhỏ và bình yên. Có một công viên lớn ở gần nhà tôi, và tôi thường đi dạo ở đó vào buổi chiều. Nơi yêu thích của tôi trong thị trấn là một quán cà phê yên tĩnh vì tôi có thể thư giãn và đọc sách. Mỗi tuần hai lần, tôi đến siêu thị địa phương để mua thực phẩm và đồ uống. Vào cuối tuần, tôi thường gặp gỡ bạn bè tại một quán cà phê hoặc đi mua sắm. Tôi thường đi quanh thị trấn bằng xe máy vì nó nhanh chóng và tiện lợi. Tôi thực sự rất yêu thị trấn của mình vì con người nơi đây rất thân thiện và đường phố thì sạch sẽ. Đối với tôi, đây là một nơi tuyệt vời để sinh sống.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "live in", type: "verb" },
  { text: " " },
  { text: "a small, peaceful town", type: "noun" },
  { text: " " },
  { text: "with my family.", type: "preposition" },
  { text: " " },
  { text: "There is", type: "verb" },
  { text: " " },
  { text: "a big park", type: "noun" },
  { text: " " },
  { text: " near my house" , type: "preposition" },
  { text: ", and I" },
  { text: " " },
  { text: "often ", type: "time" },
  { text: " " },
  { text: "walk there", type: "verb" },
  { text: " " },
  { text: "in the afternoon", type: "time" },
  { text: ". " },
  { text: "My favorite place" },
  { text: " " },
  { text: " in town", type: "preposition" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "a quiet coffee shop", type: "noun" },
  { text: " " },
  { text: "because I can relax and read books", type: "reason" },
  { text: " " },
  { text: ". " },
  { text: "Twice a week", type: "time" },
  { text: ", I " },
  { text: "go to", type: "verb" },
  { text: " " },
  { text: "the local supermarket", type: "noun" },
  { text: " " },
  { text: " to buy food and drinks.", type: "reason" },
  { text: " " },
  { text: "At the weekend", type: "time" },
  { text: ", I" },
  { text: " " },
  { text: "usually " , type: "time" },
  { text: " " },
  { text: "meet", type: "verb" },
  { text: " " },
  { text: "my friends", type: "noun" },
  { text: " " },
  { text: " at a café", type: "preposition" },
  { text: " " },
  { text: "or "},
  { text: " " },
  { text: "go shopping", type: "verb" },
  { text: ". I often " },
  { text: "go around town", type: "verb" },
  { text: " " },
  { text: "by motorbike", type: "preposition" },
  { text: " " },
  { text: "because it is fast and convenient", type: "reason" },
  { text: ". I" },
  { text: " " },
  { text: "really like ", type: "verb" },
  { text: " " },
  { text: "my town", type: "noun" },
  { text: " " },
  { text: " because the people are friendly and the streets are clean." , type: "reason" },
  { text: " " },
  { text: " For me,", type: "preposition"  },
  { text: " " },
  { text: "it is" },
  { text: " " },
  { text: "a great place to live", type: "adjective"  },
  { text: " " },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "live in",
    pronunciation: "/lɪv ɪn/",
    meaning: "Sống ở",
    context: "Dùng để nói về nơi sinh sống.",
    type: "verb",
  },
  {
  phrase: "There is",
  pronunciation: "/ðeər ɪz/",
  meaning: "có",
  context: "Dùng THERE IS để nói rằng có một người hoặc một vật ở một nơi hoặc tồn tại.",
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
  phrase: "really like",
  pronunciation: "/ˈrɪəli laɪk/",
  meaning: "rất thích",
  context: "Dùng để nói về việc rất thích một người, vật hoặc hoạt động.",
  type: "verb",
},
{
  phrase: "meet",
  pronunciation: "/miːt/",
  meaning: "gặp",
  context: "Dùng để nói về hành động gặp một người.",
  type: "verb",
},
  {
    phrase: "walk there",
    pronunciation: "/wɔːk ðeər/",
    meaning: "Đi bộ đến đó",
    context: "Dùng để chỉ hành động di chuyển bằng chân đến một địa điểm.",
    type: "verb",
  },
  {
    phrase: "relax and read books",
    pronunciation: "/rɪˈlæks ænd riːd bʊks/",
    meaning: "Thư giãn và đọc sách",
    context: "Dùng để nói về các hoạt động giải trí nhẹ nhàng.",
    type: "verb",
  },
  {
    phrase: "go to the local supermarket",
    pronunciation: "/ɡəʊ tuː ðə ˈləʊkl ˈsuːpəˌmɑːkɪt/",
    meaning: "Đi siêu thị địa phương",
    context: "Dùng để chỉ việc đi mua sắm tại siêu thị gần nhà.",
    type: "verb",
  },
  {
    phrase: "meet my friends",
    pronunciation: "/miːt maɪ frendz/",
    meaning: "Gặp gỡ bạn bè của tôi",
    context: "Dùng khi hẹn hò, gặp gỡ người quen.",
    type: "verb",
  },
  {
    phrase: "go shopping",
    pronunciation: "/ɡəʊ ˈʃɒpɪŋ/",
    meaning: "Đi mua sắm",
    context: "Dùng để chỉ hoạt động mua đồ ngoài hàng quán.",
    type: "verb",
  },
  {
    phrase: "go around town",
    pronunciation: "/ɡəʊ əˈraʊnd taʊn/",
    meaning: "Đi quanh thị trấn",
    context: "Dùng để chỉ việc di chuyển khám phá xung quanh khu vực.",
    type: "verb",
  },
  {
    phrase: "like my town",
    pronunciation: "/laɪk maɪ taʊn/",
    meaning: "Thích thị trấn của tôi",
    context: "Dùng để bày tỏ tình cảm với nơi ở.",
    type: "verb",
  },
  // Prepositional chunks (pink)
  {
    phrase: "by motorbike",
    pronunciation: "/baɪ ˈməʊtəbaɪk/",
    meaning: "Bằng xe máy",
    context: "Dùng để chỉ phương tiện di chuyển.",
    type: "preposition",
  },
  {
  phrase: "with my family.",
  pronunciation: "/wɪð maɪ ˈfæməli/",
  meaning: "với gia đình của tôi",
  context: "Dùng WITH để nói về người cùng mình thực hiện một hoạt động.",
  type: "preposition",
},
{
  phrase: "near my house",
  pronunciation: "/nɪər maɪ haʊs/",
  meaning: "gần nhà tôi",
  context: "Dùng NEAR để nói về vị trí ở gần một địa điểm.",
  type: "preposition",
},
{
  phrase: "in town",
  pronunciation: "/ɪn taʊn/",
  meaning: "ở trong thị trấn",
  context: "Dùng IN để nói về vị trí hoặc địa điểm trong thị trấn.",
  type: "preposition",
},
{
  phrase: "at a café",
  pronunciation: "/æt ə kæˈfeɪ/",
  meaning: "tại một quán cà phê",
  context: "Dùng AT để nói về địa điểm mà một hoạt động diễn ra.",
  type: "preposition",
},
  // Time chunks (purple)
  {
    phrase: "in the afternoon",
    pronunciation: "/ɪn ði ˌɑːftəˈnuːn/",
    meaning: "Vào buổi chiều",
    context: "Dùng để xác định khoảng thời gian trong ngày.",
    type: "time",
  },
  {
    phrase: "Twice a week",
    pronunciation: "/twaɪs ə wiːk/",
    meaning: "Hai lần một tuần",
    context: "Dùng để chỉ tần suất thực hiện hành động.",
    type: "time",
  },
  {
    phrase: "At the weekend",
    pronunciation: "/æt ðə ˈwiːkend/",
    meaning: "Vào dịp cuối tuần",
    context: "Dùng để chỉ thời gian nghỉ ngơi.",
    type: "time",
  },
  // Noun chunks (red)
  {
    phrase: "There is a big park",
    pronunciation: "/ðeər ɪz ə bɪɡ pɑːk/",
    meaning: "Có một công viên lớn",
    context: "Dùng để giới thiệu sự tồn tại của một địa điểm.",
    type: "noun",
  },
  {
  phrase: "a big park",
  pronunciation: "/ə bɪɡ pɑːrk/",
  meaning: "một công viên lớn",
  context: "Dùng để nói về một công viên và mô tả kích thước của nơi đó.",
  type: "noun",
},
  {
    phrase: "My favorite place",
    pronunciation: "/maɪ ˈfeɪvərɪt pleɪs/",
    meaning: "Nơi yêu thích của tôi",
    context: "Dùng để chỉ địa điểm thích nhất.",
    type: "noun",
  },
  {
  phrase: "a small, peaceful town",
  pronunciation: "/ə smɔːl ˈpiːsfəl taʊn/",
  meaning: "một thị trấn nhỏ, yên bình",
  context: "Dùng để nói về một thị trấn và mô tả đặc điểm của nơi đó.",
  type: "noun",
},
{
  phrase: "the local supermarket",
  pronunciation: "/ðə ˈləʊkəl ˈsuːpəmɑːkɪt/",
  meaning: "siêu thị địa phương",
  context: "Dùng để nói về siêu thị ở khu vực địa phương.",
  type: "noun",
},
{
  phrase: "my town",
  pronunciation: "/maɪ taʊn/",
  meaning: "thị trấn của tôi",
  context: "Dùng để nói về thị trấn nơi mình sống hoặc quen thuộc.",
  type: "noun",
},
{
  phrase: "a quiet coffee shop",
  pronunciation: "/ə ˈkwaɪət ˈkɒfi ʃɒp/",
  meaning: "một quán cà phê yên tĩnh",
  context: "Dùng để nói về một quán cà phê và mô tả nơi đó yên tĩnh.",
  type: "noun",
},
  // Adjective chunks (blue)
  {
    phrase: "small, peaceful town",
    pronunciation: "/smɔːl ˈpiːsfl taʊn/",
    meaning: "Thị trấn nhỏ và yên bình",
    context: "Dùng để miêu tả đặc điểm của nơi ở.",
    type: "adjective",
  },
  {
    phrase: "fast and convenient",
    pronunciation: "/fɑːst ænd kənˈviːniənt/",
    meaning: "Nhanh chóng và tiện lợi",
    context: "Dùng để đánh giá ưu điểm của phương tiện hoặc cách di chuyển.",
    type: "adjective",
  },
  {
    phrase: "a great place to live",
    pronunciation: "/ɡreɪt pleɪs tuː lɪv/",
    meaning: "Nơi tuyệt vời để sinh sống",
    context: "Dùng để khen ngợi chất lượng môi trường sống.",
    type: "adjective",
  },
  // Reason chunks (yellow)
  {
    phrase: "because",
    pronunciation: "/bɪˈkɒz/",
    meaning: "Bởi vì",
    context: "Dùng để giải thích nguyên nhân.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I live in a small, peaceful town ____ my family.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "There is a big park ____ my house, and I often walk there.",
    answer: "near",
    hint: "gần",
  },
  {
    prompt: "My favorite place in town is a quiet coffee shop ____ I can relax.",
    answer: "because",
    hint: "bởi vì",
  },
  {
    prompt: "____ a week, I go to the local supermarket to buy food and drinks.",
    answer: "Twice",
    hint: "Hai lần",
  },
  {
    prompt: "At the weekend, I usually meet my friends ____ a café or go shopping.",
    answer: "at",
    hint: "tại / ở",
  },
  {
    prompt: "I often go around town by motorbike because it is fast ____ convenient.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "For me, it is a great place ____ live.",
    answer: "to",
    hint: "để (làm gì)",
  },
];

export const lesson06Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I live in _____________",
  meaning: "Tôi sống ở...",
  example: "I live in a small, peaceful town.",
  alternatives: ["a small, peaceful town", "a big, busy city", "a quiet village"]
},

{
  term: "There is _____________ near my house.",
  meaning: "Có ... gần nhà tôi.",
  example: "There is a big park near my house.",
  alternatives: ["a big park", "a local market", "a convenience store"]
},

{
  term: "My favorite place in town is _____________ because _____________",
  meaning: "Nơi yêu thích của tôi trong thị trấn là... bởi vì...",
  example: "My favorite place in town is a quiet coffee shop because I can relax.",
  alternatives: [
    "a quiet coffee shop because I can relax",
    "a small library because I can focus on studying",
    "a big bakery because I love sweet cakes"
  ]
},

{
  term: "[Tần suất], I go to _____________ to _____________",
  meaning: "[Tần suất], tôi đi đến... để...",
  example: "Twice a week, I go to the supermarket to buy food.",
  alternatives: [
    "Twice a week, I go to the supermarket to buy food",
    "Every weekend, I go to the gym to exercise",
    "Once a month, I go to the bookstore to buy new books"
  ]
},

{
  term: "I usually _____________",
  meaning: "Tôi thường...",
  example: "I usually meet my friends at a café.",
  alternatives: [
    "meet my friends at a café",
    "go shopping with my sister",
    "stay at home and cook"
  ]
},

{
  term: "I often go around town by _____________ because _____________",
  meaning: "Tôi thường đi quanh thị trấn bằng... bởi vì...",
  example: "I often go around town by motorbike because it is fast and convenient.",
  alternatives: [
    "motorbike because it is fast and convenient",
    "bus because it is cheap and safe",
    "bicycle because it is good for my health"
  ]
},

{
  term: "I like my town because _____________",
  meaning: "Tôi thích thị trấn của mình bởi vì...",
  example: "I like my town because the people are friendly.",
  alternatives: [
    "the people are friendly",
    "the streets are clean and green",
    "the food is cheap and delicious"
  ]
},

{
  term: "For me, it is _____________",
  meaning: "Đối với tôi, đó là...",
  example: "For me, it is a great place to live.",
  alternatives: [
    "a great place to live",
    "a peaceful place to relax",
    "a comfortable place to stay"
  ]
}

]
};