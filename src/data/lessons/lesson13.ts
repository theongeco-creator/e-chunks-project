import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I usually go shopping at the weekend with my family. I often go to a supermarket near my home because it is convenient. I usually buy food, drinks, and things for my house. I also like buying clothes, especially T-shirts and jeans. I always check the price before I buy something. Sometimes, I try on clothes to see if they fit me. I don't like shopping in crowded places because they are noisy. I prefer shopping in small shops because they are quiet and easy to visit.";

const translation =
"Tôi thường đi siêu thị hoặc mua sắm vào cuối tuần cùng với gia đình. Tôi thường đến một siêu thị gần nhà vì nó rất tiện lợi. Tôi hay mua thực phẩm, đồ uống và các vật dụng cho gia đình. Tôi cũng thích mua quần áo, đặc biệt là áo phông và quần jeans. Tôi luôn kiểm tra giá trước khi mua một món đồ nào đó. Thỉnh thoảng, tôi thử quần áo để xem chúng có vừa vặn với mình không. Tôi không thích mua sắm ở những nơi đông đúc vì chúng rất ồn ào. Tôi thích mua sắm ở các cửa hàng nhỏ hơn vì những nơi đó yên tĩnh và dễ ghé thăm.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "go shopping", type: "verb" },
  { text: " " },
  { text: "at the weekend", type: "time" },
  { text: " " },
  { text: "with my family", type: "preposition" },
  { text: ". I " },
  { text: "often", type: "time" },
  { text: " " },
  { text: "go to a supermarket", type: "verb" },
  { text: " " },
  { text: "near my home", type: "preposition" },
  { text: " " },
  { text: "because", type: "reason" },
  { text: " it is " },
  { text: "convenient", type: "adjective" },
  { text: ". I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "buy", type: "verb" },
  { text: " " },
  { text: "food, drinks, and things for my house", type: "noun" },
  { text: " " },
  { text: "for my house", type: "preposition" },
  { text: " " },
  { text: ". I also " },
  { text: "like buying clothes", type: "verb" },
  { text: ", especially" },
  { text: " " },
  { text: "T-shirts and jeans.", type: "noun" },
  { text: " " },
 { text: "I " },
  { text: " " },
  { text: "always", type: "time" },
  { text: " " },
  { text: "check the price", type: "verb" },
  { text: " " },
  { text: "before I buy something", type: "reason" },
  { text: " . " },
  { text: "Sometimes", type: "time" },
  { text: ", I " },
  { text: "try on clothes", type: "verb" },
  { text: " " },
  { text: "to see if they fit me.", type: "reason" },
  { text: " " },
  { text: "I " },
  { text: " " },
  { text: "don't like shopping", type: "verb" },
  { text: " " },
  { text: "in crowded places", type: "preposition" },
  { text: " " },
  { text: " because they are " },
  { text: "noisy", type: "adjective" },
  { text: ". I " },
  { text: "prefer shopping", type: "verb" },
  { text: " " },
  { text: "in small shops", type: "preposition" },
  { text: " " },
  { text: " because they are " },
  { text: "quiet and easy to visit", type: "adjective" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "go shopping",
    pronunciation: "/ˈjuːʒʊəli ɡəʊ ˈʃɒpɪŋ/",
    meaning: "đi mua sắm",
    context: "Dùng để chỉ thói quen đi mua sắm định kỳ.",
    type: "verb",
  },
  {
    phrase: "go to a supermarket",
    pronunciation: "/ˈɒfn ɡəʊ tuː ə ˈsuːpəˌmɑːkɪt/",
    meaning: "đi đến siêu thị",
    context: "Dùng để nói về địa điểm mua sắm quen thuộc.",
    type: "verb",
  },
  {
    phrase: "buy food, drinks, and things for my house",
    pronunciation: "/ˈjuːʒʊəli baɪ fuːd, drɪŋks, ænd θɪŋz fɔːr maɪ haʊs/",
    meaning: "mua đồ ăn, thức uống và đồ dùng cho nhà cửa",
    context: "Dùng để liệt kê các mặt hàng hay mua.",
    type: "verb",
  },
  {
    phrase: "like buying clothes",
    pronunciation: "/laɪk ˈbaɪɪŋ kləʊðz/",
    meaning: "Thích mua quần áo",
    context: "Dùng để diễn tả sở thích cá nhân khi mua sắm.",
    type: "verb",
  },
  {
    phrase: "check the price",
    pronunciation: "/tʃek ðə praɪs/",
    meaning: "Kiểm tra giá cả",
    context: "Dùng để chỉ hành động xem giá trước khi thanh toán.",
    type: "verb",
  },
  {
    phrase: "try on clothes",
    pronunciation: "/traɪ ɒn kləʊðz/",
    meaning: "Mặc thử quần áo",
    context: "Dùng khi thử trang phục xem có vừa vặn không.",
    type: "verb",
  },
  {
    phrase: "don't like shopping",
    pronunciation: "/dəʊnt laɪk ˈʃɒpɪŋ/",
    meaning: "Không thích mua sắm",
    context: "Dùng để nêu rõ sự không thích thú vị với việc mua sắm.",
    type: "verb",
  },
  {
    phrase: "prefer shopping",
    pronunciation: "/prɪˈfɜːr ˈʃɒpɪŋ/",
    meaning: "Thích mua sắm hơn (thích hơn / thích cái này hơn cái kia)",
    context: "Dùng để bày tỏ sở thích cá nhân về việc mua sắm.",
    type: "verb",
  },
  // Prepositional chunks (pink)
  {
    phrase: "with my family",
    pronunciation: "/wɪð maɪ ˈfæmɪli/",
    meaning: "Với gia đình của tôi",
    context: "Dùng để chỉ người đi cùng khi mua sắm.",
    type: "preposition",
  },
  {
    phrase: "in crowded places",
    pronunciation: "/ɪn ˈkraʊdɪd ˈpleɪsɪz/",
    meaning: "Ở những nơi đông đúc",
    context: "Dùng để chỉ địa điểm mua sắm không mong muốn.",
    type: "preposition",
  },
  {
    phrase: "in small shops",
    pronunciation: "/ɪn ˈsmɔːl ʃɒps/",
    meaning: "Ở các cửa hàng nhỏ",
    context: "Dùng để chỉ địa điểm mua sắm mong muốn.",
    type: "preposition",
  },
  {
    phrase: "for my house",
    pronunciation: "/fɔːr maɪ haʊs/",
    meaning: "Cho nhà của tôi",
    context: "Dùng để chỉ mục đích mua sắm.",
    type: "preposition",
  },
  // Time chunks (purple)
  {
    phrase: "at the weekend",
    pronunciation: "/æt ðə ˈwiːkend/",
    meaning: "Vào dịp cuối tuần",
    context: "Dùng để chỉ thời gian rảnh rỗi đi mua sắm.",
    type: "time",
  },
  {
    phrase: "always",
    pronunciation: "/ˈɔːlweɪz/",
    meaning: "Luôn luôn",
    context: "Dùng để chỉ mức độ thường xuyên tuyệt đối của hành động.",
    type: "time",
  },
  {
    phrase: "Sometimes",
    pronunciation: "/ˈsʌmtaɪmz/",
    meaning: "Thỉnh thoảng",
    context: "Dùng để chỉ tần suất không đều đặn.",
    type: "time",
  },
  // Adjective chunks (blue)
  {
    phrase: "convenient",
    pronunciation: "/kənˈviːniənt/",
    meaning: "Tiện lợi",
    context: "Dùng để miêu tả ưu điểm của địa điểm gần nhà.",
    type: "adjective",
  },
  {
    phrase: "noisy",
    pronunciation: "/ˈnɔɪzi/",
    meaning: "Ồn ào",
    context: "Dùng để miêu tả đặc điểm khó chịu ở nơi đông đúc.",
    type: "adjective",
  },
  {
    phrase: "quiet and easy to visit",
    pronunciation: "/ˈkwaɪət ænd ˈiːzi tuː ˈvɪzɪt/",
    meaning: "Yên tĩnh và dễ ghé thăm",
    context: "Dùng để đánh giá ưu điểm của các cửa hàng nhỏ.",
    type: "adjective",
  },
  // Reason chunks (yellow)
  {
    phrase: "to see if they fit me",
    pronunciation: "/tuː siː ɪf ðeɪ fɪt miː/",
    meaning: " Để xem chúng có vừa với tôi không",
    context: "Dùng để chỉ lý do hoặc mục đích của hành động.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I usually go shopping ____ the weekend with my family.",
    answer: "at",
    hint: "vào (cuối tuần)",
  },
  {
    prompt: "I often go to a supermarket near my home because it is ____.",
    answer: "convenient",
    hint: "tiện lợi",
  },
  {
    prompt: "I usually buy food, drinks, and things ____ my house.",
    answer: "for",
    hint: "cho",
  },
  {
    prompt: "I always check the price ____ I buy something.",
    answer: "before",
    hint: "trước khi",
  },
  {
    prompt: "Sometimes, I try ____ clothes to see if they fit me.",
    answer: "on",
    hint: "thử (quần áo)",
  },
  {
    prompt: "I don't like shopping in crowded places because they are ____.",
    answer: "noisy",
    hint: "ồn ào",
  },
  {
    prompt: "I prefer shopping in small shops because they are quiet and easy ____ visit.",
    answer: "to",
    hint: "để",
  },
];

export const lesson13Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I often go to _____________",
  meaning: "Tôi thường đi đến...",
  example: "I often go to a supermarket near my home.",
  alternatives: [
    "a supermarket near my home",
    "a small shop near my office",
    "a shopping mall near my school",
    "a market near my house"
  ]
},

{
  term: "because it is _____________",
  meaning: "bởi vì nó...",
  example: "I often go to a supermarket near my home because it is convenient.",
  alternatives: [
    "convenient",
    "cheap",
    "close to my home",
    "easy to visit"
  ]
},

{
  term: "I usually buy _____________",
  meaning: "Tôi thường mua...",
  example: "I usually buy food and drinks.",
  alternatives: [
    "food and drinks",
    "clothes and shoes",
    "books and stationery",
    "things for my house"
  ]
},

{
  term: "I also like buying _____________",
  meaning: "Tôi cũng thích mua...",
  example: "I also like buying clothes.",
  alternatives: [
    "clothes",
    "shoes",
    "books",
    "food",
    "gifts"
  ]
},

{
  term: "especially _____________",
  meaning: "đặc biệt là...",
  example: "I also like buying clothes, especially T-shirts and jeans.",
  alternatives: [
    "T-shirts and jeans",
    "shoes and bags",
    "books and notebooks",
    "fruit and vegetables"
  ]
},

{
  term: "I always check _____________ before I buy _____________",
  meaning: "Tôi luôn kiểm tra... trước khi mua...",
  example: "I always check the price before I buy clothes.",
  alternatives: [
    "the price before I buy clothes",
    "the size before I buy shoes",
    "the quality before I buy something"
  ]
},

{
  term: "Sometimes, I _____________",
  meaning: "Đôi khi tôi...",
  example: "Sometimes, I try on clothes.",
  alternatives: [
    "try on clothes",
    "look for new shoes",
    "compare prices",
    "ask the shop assistant"
  ]
},

{
  term: "try on _____________",
  meaning: "thử...",
  example: "I try on a T-shirt.",
  alternatives: [
    "a T-shirt",
    "a jacket",
    "a pair of jeans"
  ]
},

{
  term: "to see if _____________",
  meaning: "để xem liệu...",
  example: "I try on a T-shirt to see if it is comfortable.",
  alternatives: [
    "if they fit me",
    "if it is comfortable",
    "if the size is right"
  ]
},

{
  term: "I don't like _____________",
  meaning: "Tôi không thích...",
  example: "I don't like shopping in crowded places.",
  alternatives: [
    "shopping in crowded places",
    "shopping online",
    "waiting in long lines",
    "going to busy markets"
  ]
},

{
  term: "because they are _____________",
  meaning: "bởi vì chúng...",
  example: "I don't like crowded places because they are noisy.",
  alternatives: [
    "noisy",
    "crowded",
    "busy",
    "expensive"
  ]
},

{
  term: "I prefer _____________",
  meaning: "Tôi thích... hơn",
  example: "I prefer shopping in small shops.",
  alternatives: [
    "shopping in small shops",
    "shopping online",
    "shopping at supermarkets",
    "buying clothes in stores"
  ]
},

{
  term: "because they are _____________",
  meaning: "bởi vì chúng...",
  example: "I prefer shopping in small shops because they are quiet.",
  alternatives: [
    "quiet",
    "easy to visit",
    "comfortable",
    "convenient"
  ]
}

]
};