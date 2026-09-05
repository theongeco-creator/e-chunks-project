import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "My favorite holiday is Tet because I can spend time with my family. Before Tet, I usually clean my house and buy new clothes. During Tet, my family visits our relatives and friends. We usually have special food and drinks at home. I also like giving small gifts to my family and friends. On my birthday, I usually have a small party with my family. We eat cake, take photos, and listen to music together. I like holidays and celebrations because I can spend time with people I love.";

const translation =
"Ngày lễ yêu thích của tôi là Tết vì tôi có thể dành thời gian bên gia đình. Trước Tết, tôi thường dọn dẹp nhà cửa và mua quần áo mới. Trong dịp Tết, gia đình tôi đi thăm họ hàng và bạn bè. Chúng tôi thường thưởng thức những món ăn và thức uống đặc biệt tại nhà. Tôi cũng thích tặng những món quà nhỏ cho gia đình và bạn bè. Vào ngày sinh nhật, tôi thường tổ chức một bữa tiệc nhỏ cùng gia đình. Chúng tôi cùng nhau ăn bánh, chụp ảnh và nghe nhạc. Tôi thích các ngày lễ và dịp kỷ niệm vì tôi có thể dành thời gian cho những người mình yêu thương.";

const readingSegments: ReadingSegment[] = [
  { text: "My favorite holiday" },
  { text: " " },
  { text: " is Tet", type: "verb" },
  { text: " " },
  { text: "because I can spend time with my family", type: "reason" },
  { text: " . " },
  { text: "Before Tet", type: "time" },
  { text: ", I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "clean my house", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "buy new clothes", type: "verb" },
  { text: ". " },
  { text: "During Tet", type: "time" },
  { text: ", my family " },
  { text: "visits", type: "verb" },
  { text: " " },
  { text: "our relatives and friends", type: "noun" },
  { text: " " },
  { text: ". We " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "have special food and drinks", type: "verb" },
  { text: " " },
  { text: " at home", type: "preposition" },
  { text: " " },
  { text: ". I also " },
  { text: "like giving", type: "verb" },
  { text: " " },
  { text: "small gifts", type: "noun" },
  { text: " " },
  { text: "to my family and friends.", type: "reason" },
  { text: " " },
  { text: "On my birthday", type: "time" },
  { text: ", I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "have a small party", type: "verb" },
  { text: " " },
  { text: " with my family", type:"preposition" },
  { text: " " },
  { text: ". We " },
  { text: "eat cake, take photos, and listen to music", type: "verb" },
  { text: " together. I " },
  { text: "like", type: "verb" },
  { text: " " },
  { text: "holidays and celebrations", type: "noun" },
  { text: " " },
  { text: " " },
  { text: "because I can spend time with people I love.", type: "reason" },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "spend time",
    pronunciation: "/spend taɪm/",
    meaning: "Dành thời gian cho ai đó",
    context: "Dùng để nói về việc dành thời gian cho việc gì đó",
    type: "verb",
  },
  {
    phrase: "clean my house and buy new clothes",
    pronunciation: "/kliːn maɪ haʊs ænd baɪ nuː kləʊðz/",
    meaning: "Dọn dẹp nhà cửa và mua quần áo mới",
    context: "Dùng để chỉ các hoạt động chuẩn bị đón năm mới.",
    type: "verb",
  },
  {
    phrase: "visits our relatives and friends",
    pronunciation: "/ˈvɪzɪts ˈaʊər ˈrelətɪvz ænd frendz/",
    meaning: "Thăm hỏi họ hàng và bạn bè",
    context: "Dùng để miêu tả hoạt động chúc Tết.",
    type: "verb",
  },
  {
    phrase: "have special food and drinks",
    pronunciation: "/ˈjuːʒuəli hæv ˈspeʃl fuːd ænd drɪŋks/",
    meaning: "Có đồ ăn và thức uống đặc biệt",
    context: "Dùng để nói về ẩm thực trong các dịp lễ.",
    type: "verb",
  },
  {
    phrase: "like giving small gifts",
    pronunciation: "/laɪk ˈɡɪvɪŋ smɔːl ɡɪfts/",
    meaning: "Thích tặng những món quà nhỏ",
    context: "Dùng để bày tỏ sở thích tặng quà cho mọi người.",
    type: "verb",
  },
  {
    phrase: "usually have a small party",
    pronunciation: "/ˈjuːʒuəli hæv ə smɔːl ˈpɑːrti/",
    meaning: "Thường tổ chức một bữa tiệc nhỏ",
    context: "Dùng để nói về cách kỷ niệm ngày sinh nhật.",
    type: "verb",
  },
  {
    phrase: "eat cake, take photos, and listen to music",
    pronunciation: "/iːt keɪk, teɪk ˈfəʊtəʊz, ænd ˈlɪsn tuː ˈmjuːzɪk/",
    meaning: "Ăn bánh, chụp ảnh và nghe nhạc",
    context: "Dùng để liệt kê các hoạt động vui chơi trong tiệc.",
    type: "verb",
  },
  {
    phrase: "like holidays and celebrations",
    pronunciation: "/laɪk ˈhɑːlədeɪz ænd ˌseləˈbreɪʃnz/",
    meaning: "Thích các ngày lễ và dịp kỷ niệm",
    context: "Dùng để nêu lên sở thích chung đối với các sự kiện vui vẻ.",
    type: "verb",
  },
  // Time chunks (purple)
  {
    phrase: "Before Tet",
    pronunciation: "/bɪˈfɔːr tet/",
    meaning: "Trước Tết",
    context: "Dùng để chỉ khoảng thời gian chuẩn bị trước kỳ nghỉ lễ.",
    type: "time",
  },
  {
    phrase: "usually",
    pronunciation: "/ˈjuːʒuəli/",
    meaning: "Thường xuyên",
    context: "Dùng để chỉ tần suất diễn ra hành động.",
    type: "time",
  },
  {
    phrase: "During Tet",
    pronunciation: "/ˈdʊrɪŋ tet/",
    meaning: "Trong dịp Tết",
    context: "Dùng để chỉ khoảng thời gian diễn ra kỳ nghỉ lễ.",
    type: "time",
  },
  {
    phrase: "On my birthday",
    pronunciation: "/ɑːn maɪ ˈbɜːrθdeɪ/",
    meaning: "Vào ngày sinh nhật của tôi",
    context: "Dùng để xác định thời điểm diễn ra sự kiện cá nhân.",
    type: "time",
  },
  // Reason chunks (yellow)
  {
    phrase: "because I can spend time with people I love.",
    pronunciation: "/bɪˈkɒz aɪ kæn spɛnd taɪm wɪð ˈpiːpᵊl aɪ lʌv/",
    meaning: "Bởi vì tôi có thể dành thời gian với những người mà tôi yêu",
    context: "Dùng để giải thích lý do cụ thể",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "My favorite holiday is Tet because I can spend time ____ my family.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "Before Tet, I usually clean my house and buy ____ clothes.",
    answer: "new",
    hint: "mới",
  },
  {
    prompt: "During Tet, my family visits our relatives ____ friends.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "We usually have special food and drinks ____ home.",
    answer: "at",
    hint: "ở (nhà)",
  },
  {
    prompt: "I also like giving small gifts to my family ____ friends.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "On my birthday, I usually have a small party ____ my family.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "We eat cake, take photos, and listen ____ music together.",
    answer: "to",
    hint: "đến / nghe (nhạc)",
  },
];

export const lesson14Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "My favorite holiday is _____________",
  meaning: "Ngày lễ yêu thích của tôi là...",
  example: "My favorite holiday is Tet.",
  alternatives: ["Tet", "Christmas", "New Year", "my birthday"]
},

{
  term: "because I can _____________",
  meaning: "vì tôi có thể...",
  example: "I like Tet because I can spend time with my family.",
  alternatives: [
    "spend time with my family",
    "meet my friends",
    "relax at home",
    "have fun"
  ]
},

{
  term: "Before _____________, I usually _____________",
  meaning: "Trước ..., tôi thường...",
  example: "Before Tet, I usually clean my house.",
  alternatives: [
    "clean my house",
    "buy new clothes",
    "prepare food",
    "decorate my house"
  ]
},

{
  term: "buy _____________",
  meaning: "mua...",
  example: "I buy new clothes.",
  alternatives: [
    "new clothes",
    "food",
    "drinks",
    "gifts",
    "flowers"
  ]
},

{
  term: "During _____________, my family _____________",
  meaning: "Trong dịp ..., gia đình tôi...",
  example: "During Tet, my family visits our relatives.",
  alternatives: [
    "visits our relatives",
    "visits our friends",
    "stays at home",
    "travels together"
  ]
},

{
  term: "visit _____________",
  meaning: "thăm...",
  example: "We visit our relatives.",
  alternatives: [
    "our relatives",
    "our grandparents",
    "our friends",
    "our cousins"
  ]
},

{
  term: "have _____________",
  meaning: "có / dùng...",
  example: "We have traditional food.",
  alternatives: [
    "special food and drinks",
    "a big meal",
    "a family dinner",
    "traditional food"
  ]
},

{
  term: "at _____________",
  meaning: "ở...",
  example: "We have a family dinner at my house.",
  alternatives: [
    "my house",
    "my parents' house",
    "a restaurant",
    "my grandparents' house"
  ]
},

{
  term: "I also like _____________",
  meaning: "Tôi cũng thích...",
  example: "I also like giving gifts.",
  alternatives: [
    "giving gifts",
    "decorating my house",
    "cooking",
    "taking photos"
  ]
},

{
  term: "give _____________ things",
  meaning: "tặng ...",
  example: "I give my family small gifts.",
  alternatives: [
    "give my family small gifts",
    "give my friends flowers",
    "give my parents presents"
  ]
},

{
  term: "On my birthday, I usually _____________",
  meaning: "Vào sinh nhật, tôi thường...",
  example: "On my birthday, I usually have a small party.",
  alternatives: [
    "have a small party",
    "have dinner with my family",
    "go out with my friends",
    "get some presents"
  ]
},

{
  term: "have a _____________",
  meaning: "tổ chức / có một...",
  example: "I have a small party.",
  alternatives: [
    "small party",
    "birthday party",
    "family party",
    "dinner party"
  ]
},

{
  term: "We _____________ together",
  meaning: "Chúng tôi cùng nhau...",
  example: "We eat together.",
  alternatives: [
    "eat together",
    "take photos together",
    "listen to music together",
    "talk together"
  ]
},

{
  term: "listen to _____________",
  meaning: "nghe...",
  example: "We listen to music together.",
  alternatives: [
    "music",
    "pop music",
    "traditional music",
    "my favorite songs",
    "music together"
  ]
},

{
  term: "I like _____________ because _____________",
  meaning: "Tôi thích... vì...",
  example: "I like holidays because I can relax.",
  alternatives: [
    "holidays because I can relax",
    "Tet because I can see my family",
    "birthdays because I can have fun"
  ]
},

{
  term: "spend time with _____________",
  meaning: "dành thời gian với...",
  example: "I spend time with my family.",
  alternatives: [
    "my family",
    "my friends",
    "my relatives",
    "people I love"
  ]
}

]
};