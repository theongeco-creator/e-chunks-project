import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I like wearing comfortable clothes every day. My favorite clothes are T-shirts and jeans. I usually wear a T-shirt and jeans when I go to work. When the weather is hot, I like wearing shorts and a light shirt. When it is cold, I usually wear a jacket or a sweater. I like wearing simple clothes because they are easy to match. I don't buy new clothes very often because I want to save money. For me, comfortable clothes are more important than expensive clothes.";

const translation =
"Tôi thích mặc những trang phục thoải mái mỗi ngày. Đồ quần áo yêu thích của tôi là áo phông và quần jeans. Tôi thường mặc áo phông và quần jeans khi đi làm. Khi thời tiết nóng bức, tôi thích mặc quần đùi và áo sơ mi mỏng. Khi trời lạnh, tôi thường mặc áo khoác hoặc áo len. Tôi thích mặc đồ đơn giản vì chúng rất dễ phối hợp. Tôi không mua quần áo mới quá thường xuyên vì muốn tiết kiệm tiền. Đối với tôi, trang phục thoải mái quan trọng hơn nhiều so với những bộ đồ đắt tiền.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "like wearing", type: "verb" },
  { text: " " },
  { text: "comfortable clothes", type: "noun" },
  { text: " " },
  { text: "every day", type: "time"  },
  { text: " . " },
  { text: "My favorite clothes", type: "noun" },
  { text: " " },
  { text: "are", type: "verb"  },
  { text: " " },
  { text: "T-shirts and jeans", type: "noun"  },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: " wear", type: "verb" },
  { text: " " },
  { text: "a T-shirt and jeans", type: "noun" },
  { text: " " },
  { text: "when I go to work", type: "reason" },
  { text: ". " },
  { text: "When"},
  { text: " " },
  { text: "the weather", type: "noun" },
  { text: " " },
  { text: "is hot", type: "adjective" },
  { text: " " },
  { text: ", I " },
  { text: " " },
  { text: "like wearing", type: "verb" },
  { text: " " },
  { text: "shorts and a light shirt", type: "noun" },
  { text: ". When" },
  { text: " " },
  { text: "it", type: "noun" },
  { text: " " },
  { text: "is cold", type: "adjective" },
  { text: " " },
  { text: ", I" },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "wear", type: "verb" },
  { text: " " },
  { text: "a jacket or a sweater", type: "noun" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "like wearing ", type: "verb"  },
  { text: " " },
  { text: "simple clothes", type: "noun" },
  { text: " " },
  { text: "because they are easy to match", type: "reason" },
  { text: ". I " },
  { text: "don't buy", type: "verb" },
  { text: " " },
  { text: "new clothes", type: "noun" },
  { text: " " },
  { text: " very often ", type: "time" },
  { text: " " },
  { text: "because I want to save money", type: "reason" },
  { text: " . " },
  { text: "For me," , type: "preposition" },
  { text: " " },
  { text: "comfortable clothes", type: "noun" },
  { text: " are " },
  { text: "more important than", type: "adjective" },
  { text: " " },
  { text: " expensive clothes.", type: "noun" },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "like wearing",
    pronunciation: "/laɪk ˈweərɪŋ/",
    meaning: "Thích mặc / like + Ving = Thích làm gì đó",
    context: "Dùng để diễn tả sở thích về trang phục.",
    type: "verb",
  },
  {
    phrase: "don't buy",
    pronunciation: "/dəʊnt baɪ",
    meaning: "Không mua",
    context: "Dùng để nói về thói quen chi tiêu tiết kiệm.",
    type: "verb",
  },
  // Noun chunks (red)
   {
    phrase: "simple clothes",
    pronunciation: "/ˈsɪmpl kləʊðz/",
    meaning: "Quần áo đơn giản",
    context: "Dùng để miêu tả phong cách ăn mặc tối giản.",
    type: "adjective",
  },
  {
    phrase: "comfortable clothes",
    pronunciation: "/ˈkʌmfərtəbl kləʊðz/",
    meaning: "Quần áo thoải mái",
    context: "Dùng để chỉ trang phục mang lại cảm giác dễ chịu.",
    type: "noun",
  },
  {
    phrase: "My favorite clothes",
    pronunciation: "/maɪ ˈfeɪvərɪt kləʊðz/",
    meaning: "Quần áo yêu thích của tôi",
    context: "Dùng để chỉ những món đồ thích mặc nhất.",
    type: "noun",
  },
  {
    phrase: "shorts and a light shirt",
    pronunciation: "/ʃɔːts ænd ə laɪt ʃɜːt/",
    meaning: "Quần đùi và áo mỏng",
    context: "Dùng để chỉ trang phục mùa hè.",
    type: "noun",
  },
  {
    phrase: "a jacket or a sweater",
    pronunciation: "/ə ˈdʒækɪt ɔːr ə ˈswetər/",
    meaning: "Áo khoác hoặc áo len",
    context: "Dùng để chỉ trang phục giữ ấm khi trời lạnh.",
    type: "noun",
  },
  {
    phrase: "a T-shirt and jeans",
    pronunciation: "/ə ˈtiː ʃɜːt ænd ˈdʒiːnz/",
    meaning: "Áo thun và quần jeans",
    context: "Dùng để chỉ trang phục hàng ngày.",
    type: "noun",
  },
    {
    phrase: "expensive clothes",
    pronunciation: "/ɪkˈspensɪv kləʊðz/",
    meaning: "Quần áo đắt tiền",
    context: "Dùng để chỉ trang phục có giá cao.",
    type: "noun",
  },
      {
    phrase: "comfortable clothes",
    pronunciation: "/ˈkʌmfərtəbl kləʊðz/",
    meaning: "Quần áo thoải mái",
    context: "Dùng để chỉ trang phục mang lại cảm giác dễ chịu.",
    type: "noun",
  },
  // Time chunks (purple)
  {
    phrase: "usually",
    pronunciation: "/ˈjuːʒʊəli/",
    meaning: "Thường xuyên",
    context: "Dùng để chỉ tần suất thực hiện hành động.",
    type: "time",
  },
  {
  phrase: "every day",
  pronunciation: "/ˈevri deɪ/",
  meaning: "mỗi ngày",
  context: "Dùng EVERY DAY để nói về một hành động hoặc thói quen xảy ra mỗi ngày.",
  type: "time",
},
  {
    phrase: "very often",
    pronunciation: "/ˈveri ˈɒfən/",
    meaning: " Rất thường xuyên",
    context: " Dùng để nhấn mạnh tần suất thực hiện hành động.",
    type: "time",
  },

  // Adjective chunks (blue)
 
  {
    phrase: "easy to match",
    pronunciation: "/ˈiːzi tuː mætʃ/",
    meaning: "Dễ phối đồ",
    context: "Dùng để khen trang phục dễ kết hợp với nhau.",
    type: "adjective",
  },
  {
    phrase: "more important than",
    pronunciation: "/mɔːr ɪmˈpɔːrtənt ðæn/",
    meaning: "Quan trọng hơn... so với...",
    context: "Dùng trong cấu trúc so sánh hơn.",
    type: "adjective",
  },
  {
  phrase: "is hot",
  pronunciation: "/ɪz hɒt/",
  meaning: "nóng",
  context: "Dùng để miêu tả nhiệt độ của thời tiết, đồ vật hoặc thức ăn ở mức nóng.",
  type: "adjective",
},
{
  phrase: "is cold",
  pronunciation: "/ɪz kəʊld/",
  meaning: "lạnh",
  context: "Dùng để miêu tả nhiệt độ của thời tiết, đồ vật hoặc thức ăn ở mức lạnh.",
  type: "adjective",
},
  
  // Reason & purpose chunks (yellow)
  {
    phrase: "because they are easy to match",
    pronunciation: "/bɪˈkɒz ðeɪ ɑːr ˈiːzi tuː mæʧ /",
    meaning: "Bởi vì chúng dễ phối đồ",
    context: "Dùng để giải thích lý do.",
    type: "reason",
  },
  {
    phrase: "because I want to save money",
    pronunciation: "/bɪˈkɒz aɪ wɒnt tuː seɪv ˈmʌni/",
    meaning: "Bởi vì tôi muốn tiết kiệm tiền",
    context: "Dùng để nêu lý do không mua quần áo mới thường xuyên.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I like ____ comfortable clothes every day.",
    answer: "wearing",
    hint: "mặc",
  },
  {
    prompt: "My favorite clothes are T-shirts ____ jeans.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "When the weather is hot, I like wearing shorts and a ____ shirt.",
    answer: "light",
    hint: "mỏng / nhẹ",
  },
  {
    prompt: "When it is cold, I usually wear a jacket ____ a sweater.",
    answer: "or",
    hint: "hoặc",
  },
  {
    prompt: "I like wearing simple clothes because they are easy ____ match.",
    answer: "to",
    hint: "để (làm gì)",
  },
  {
    prompt: "I don't buy new clothes very often because I want to ____ money.",
    answer: "save",
    hint: "tiết kiệm",
  },
  {
    prompt: "For me, comfortable clothes are more important ____ expensive clothes.",
    answer: "than",
    hint: "hơn",
  },
];

export const lesson05Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I like wearing _____________",
  meaning: "Tôi thích mặc...",
  example: "I like wearing comfortable clothes.",
  alternatives: ["comfortable clothes", "casual clothes", "simple clothes", "fashionable clothes"]
},

{
  term: "I usually wear _____________",
  meaning: "Tôi thường mặc...",
  example: "I usually wear T-shirts.",
  alternatives: ["T-shirts", "jeans", "dresses", "skirts", "shorts", "shirts"]
},

{
  term: "I wear _____________",
  meaning: "Tôi mặc...",
  example: "I wear a shirt and trousers.",
  alternatives: ["a shirt and trousers", "a dress", "jeans and a T-shirt", "formal clothes"]
},

{
  term: "When the weather is _____________",
  meaning: "Khi thời tiết...",
  example: "When the weather is hot.",
  alternatives: ["hot", "cold", "cool", "warm"]
},

{
  term: "I prefer _____________ to _____________",
  meaning: "Tôi thích... hơn...",
  example: "I prefer comfortable clothes to fashionable clothes.",
  alternatives: ["comfortable clothes", "fashionable clothes", "simple clothes"]
},

{
  term: "For me, _____________ is more important than _____________",
  meaning: "Đối với tôi, ... quan trọng hơn ...",
  example: "For me, comfort is more important than style.",
  alternatives: ["comfort", "price", "style", "quality"]
},

{
  term: "Comfort",
  meaning: "Sự thoải mái",
  example: "Comfort is important to me.",
  alternatives: ["comfortable", "soft", "light", "warm"]
},

{
  term: "Style",
  meaning: "Kiểu dáng / phong cách",
  example: "I like simple style.",
  alternatives: ["simple", "casual", "formal", "fashionable"]
},

{
  term: "Price",
  meaning: "Giá cả",
  example: "The price is affordable.",
  alternatives: ["cheap", "expensive", "affordable"]
},

{
  term: "Fit",
  meaning: "Độ vừa / độ ôm",
  example: "I like loose clothes.",
  alternatives: ["loose", "tight", "big", "small"]
},

{
  term: "Color",
  meaning: "Màu sắc",
  example: "I like black.",
  alternatives: ["black", "white", "blue", "red"]
}

]
};