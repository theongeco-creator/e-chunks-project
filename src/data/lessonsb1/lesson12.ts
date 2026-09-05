import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I live in a small house with my family. There are three bedrooms, a kitchen, a bathroom, and a living room in my house. My bedroom is small, but it is comfortable and clean. There is a bed next to the window in my bedroom. I also have a desk and a chair where I study and work. There is a sofa and a small table in the living room. My favorite room is my bedroom because I spend a lot of time there. I like my house because it is quiet and feels comfortable.";

const translation =
"Tôi sống trong một ngôi nhà nhỏ cùng với gia đình. Nhà tôi có ba phòng ngủ, một phòng bếp, một phòng tắm và một phòng khách. Phòng ngủ của tôi tuy nhỏ nhưng rất thoải mái và sạch sẽ. Trong phòng ngủ, có một chiếc giường đặt cạnh cửa sổ. Tôi cũng có một chiếc bàn và ghế để học tập và làm việc. Ở phòng khách có một chiếc ghế sofa và một chiếc bàn nhỏ. Phòng yêu thích nhất của tôi là phòng ngủ vì tôi dành rất nhiều thời gian ở đó. Tôi yêu ngôi nhà của mình vì nó yên tĩnh và mang lại cảm giác dễ chịu.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "live in", type: "verb" },
  { text: " " },
  { text: "a small house", type: "noun" },
  { text: " " },
  { text: " with my family.", type: "preposition" },
  { text: " " },
  { text: "There are", type: "verb" },
  { text: " " },
  { text: "three bedrooms, a kitchen, a bathroom, and a living room", type: "noun" },
  { text: " " },
  { text: " in my house.", type: "preposition" },
  { text: " " },
  { text: ". My bedroom" },
  { text: " " },
  { text: "is small,", type: "adjective" },
  { text: " " },
  { text: "but" },
  { text: " " },
  { text: "it is comfortable and clean", type: "adjective" },
  { text: ". " },
  { text: "There is", type: "verb" },
  { text: " " },
  { text: "a bed", type: "noun" },
  { text: " " },
  { text: "next to the window", type: "preposition" },
  { text: " " },
  { text: " in my bedroom.", type: "preposition" },
  { text: " " },
  { text: " I also " },
  { text: " " },
  { text: "have a desk and a chair", type: "verb" },
  { text: " where I " },
  { text: "study and work", type: "verb" },
  { text: ". There is" },
  { text: " " },
  { text: ".a sofa and a small table", type: "noun" },
  { text: " " },
  { text: "in the living room.", type: "preposition" },
  { text: " " },
  { text: "My favorite room", type: "noun" },
  { text: " " },
  { text: "is my bedroom ", type: "adjective" },
  { text: "because", type: "reason" },
  { text: " I " },
  { text: "spend", type: "verb" },
  { text: " " },
  { text: "a lot of time", type: "noun" },
  { text: " " },
  { text: "there", type: "preposition" },
  { text: " " },
  { text: ". I " },
  { text: "like my house", type: "verb" },
  { text: " because it is " },
  { text: "quiet and feels comfortable", type: "adjective" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "live in a small house",
    pronunciation: "/lɪv ɪn ə smɔːl haʊs/",
    meaning: "Sống trong một ngôi nhà nhỏ",
    context: "Dùng để nói về loại nhà và nơi sinh sống.",
    type: "verb",
  },
  {
    phrase: "have a desk and a chair",
    pronunciation: "/hæv ə desk ænd ə tʃeər/",
    meaning: "Có một cái bàn và một cái ghế",
    context: "Dùng để kể về đồ đạc trong phòng.",
    type: "verb",
  },
  {
    phrase: "study and work",
    pronunciation: "/ˈstʌdi ænd wɜːk/",
    meaning: "Học tập và làm việc",
    context: "Dùng để chỉ các hoạt động chính tại bàn làm việc.",
    type: "verb",
  },
  {
    phrase: "spend a lot of time there",
    pronunciation: "/spend ə lɒt əv taɪm ðeər/",
    meaning: "Dành nhiều thời gian ở đó",
    context: "Dùng để nói về mức độ thường xuyên có mặt tại một không gian.",
    type: "verb",
  },
  {
    phrase: "like my house",
    pronunciation: "/laɪk maɪ haʊs/",
    meaning: "Thích ngôi nhà của tôi",
    context: "Dùng để bày tỏ tình cảm với không gian sống.",
    type: "verb",
  },
  // Noun chunks (red)
  {
    phrase: "There are three bedrooms, a kitchen, a bathroom, and a living room",
    pronunciation: "/ðeər ɑːr θriː ˈbedruːmz, ə ˈkɪtʃɪn, ə ˈbɑːθruːm, ænd ə ˈlɪvɪŋ ruːm/",
    meaning: "Có ba phòng ngủ, một phòng bếp, một phòng tắm và một phòng khách",
    context: "Dùng để liệt kê các phòng trong nhà.",
    type: "noun",
  },
  {
    phrase: "There is a bed next to the window",
    pronunciation: "/ðeər ɪz ə bed nekst tuː ðə ˈwɪndəʊ/",
    meaning: "Có một chiếc giường ở cạnh cửa sổ",
    context: "Dùng để miêu tả vị trí đồ vật trong phòng ngủ.",
    type: "noun",
  },
  {
    phrase: "My favorite room",
    pronunciation: "/maɪ ˈfeɪvərɪt ruːm/",
    meaning: "Căn phòng yêu thích của tôi",
    context: "Dùng để chỉ không gian thích nhất trong nhà.",
    type: "noun",
  },
  {
    phrase: "a lot of time",
    pronunciation: "/ə lɒt əv taɪm/",
    meaning: "Nhiều thời gian",
    context: "Dùng để chỉ lượng thời gian được dành cho một hoạt động.",
    type: "noun",
  },
  // Adjective chunks (blue)
  {
    phrase: "comfortable and clean",
    pronunciation: "/ˈkʌmfərtəbl ænd kliːn/",
    meaning: "Thoải mái và sạch sẽ",
    context: "Dùng để miêu tả đặc điểm của căn phòng.",
    type: "adjective",
  },
  {
    phrase: "quiet and feels comfortable",
    pronunciation: "/ˈkwaɪət ænd fiːlz ˈkʌmfərtəbl/",
    meaning: "Yên tĩnh và cảm thấy thoải mái",
    context: "Dùng để đánh giá không gian tổng thể của ngôi nhà.",
    type: "adjective",
  },
// Prepositional Chunk (pink)
  {
    phrase: "next to the window",
    pronunciation: "/nekst tuː ðə ˈwɪndəʊ/",
    meaning: "Cạnh cửa sổ",
    context: "Dùng để miêu tả vị trí của đồ vật trong phòng.",
    type: "preposition",
  },
  {
    phrase: "there",
    pronunciation: "/ðeər/",
    meaning: "Ở đó",
    context: "Dùng để chỉ vị trí của đồ vật trong không gian.",
    type: "preposition",
  },
  // Reason chunks (yellow)
  {
    phrase: "because it is quiet and feels comfortable.",
    pronunciation: "/bɪˈkɒz ɪt ɪz ˈkwaɪət ænd fiːlz ˈkʌmfᵊtəbᵊl./",
    meaning: "Bởi vì nó yên tĩnh và cảm thấy thoải mái.",
    context: "Dùng để giải thích lý do thích căn phòng hoặc ngôi nhà.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I live ____ a small house with my family.",
    answer: "in",
    hint: "trong (nhà)",
  },
  {
    prompt: "There are three bedrooms, a kitchen, a bathroom, and a living room ____ my house.",
    answer: "in",
    hint: "trong",
  },
  {
    prompt: "My bedroom is small, but it is comfortable ____ clean.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "There is a bed next ____ the window in my bedroom.",
    answer: "to",
    hint: "cạnh / kế bên",
  },
  {
    prompt: "I also have a desk and a chair where I study ____ work.",
    answer: "and",
    hint: "và",
  },
  {
    prompt: "My favorite room is my bedroom because I spend a lot of time ____.",
    answer: "there",
    hint: "ở đó",
  },
  {
    prompt: "I like my house because it is quiet and feels ____.",
    answer: "comfortable",
    hint: "thoải mái",
  },
];

export const lesson12Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I live in a _____________ with _____________",
  meaning: "Tôi sống trong một... với...",
  example: "I live in a small house with my family.",
  alternatives: [
    "a small house with my family",
    "a big apartment with my parents",
    "a quiet apartment with my friends"
  ]
},

{
  term: "There are _____________ rooms",
  meaning: "Có ... phòng",
  example: "There are two bedrooms.",
  alternatives: [
    "two bedrooms",
    "three bedrooms",
    "four rooms"
  ]
},

{
  term: "There is a/an _____________",
  meaning: "Có một...",
  example: "There is a kitchen.",
  alternatives: [
    "a kitchen",
    "a bathroom",
    "a living room",
    "a bedroom"
  ]
},

{
  term: "There are _____________",
  meaning: "Có...",
  example: "There are two bedrooms.",
  alternatives: [
    "two bedrooms",
    "three chairs",
    "two tables"
  ]
},

{
  term: "a _____________ house",
  meaning: "một căn nhà...",
  example: "a small house",
  alternatives: [
    "a big house",
    "a modern house",
    "a quiet house",
    "a comfortable house"
  ]
},

{
  term: "a comfortable and clean _____________",
  meaning: "một ... thoải mái và sạch sẽ",
  example: "a comfortable and clean bedroom",
  alternatives: [
    "bedroom",
    "living room",
    "kitchen",
    "apartment"
  ]
},

{
  term: "My bedroom is _____________",
  meaning: "Phòng ngủ của tôi...",
  example: "My bedroom is small.",
  alternatives: [
    "small",
    "big",
    "quiet",
    "bright",
    "comfortable"
  ]
},

{
  term: "There is a _____________ in my bedroom",
  meaning: "Có một... trong phòng ngủ của tôi",
  example: "There is a bed in my bedroom.",
  alternatives: [
    "a bed",
    "a desk",
    "a chair",
    "a wardrobe"
  ]
},

{
  term: "next to _____________",
  meaning: "bên cạnh...",
  example: "There is a bed next to the window.",
  alternatives: [
    "the window",
    "the bed",
    "the desk",
    "the door"
  ]
},

{
  term: "There is a _____________ next to the _____________",
  meaning: "Có một... bên cạnh...",
  example: "There is a bed next to the window.",
  alternatives: [
    "a bed next to the window",
    "a desk next to the bed",
    "a chair next to the desk"
  ]
},

{
  term: "I also have _____________",
  meaning: "Tôi cũng có...",
  example: "I also have a desk.",
  alternatives: [
    "a desk",
    "a chair",
    "a wardrobe",
    "a bookshelf"
  ]
},

{
  term: "where I _____________",
  meaning: "nơi tôi...",
  example: "I have a desk where I study.",
  alternatives: [
    "study",
    "work",
    "read",
    "use my laptop"
  ]
},

{
  term: "_____________ and _____________",
  meaning: "... và...",
  example: "I study and work.",
  alternatives: [
    "study and work",
    "read and relax",
    "eat and talk",
    "study and read"
  ]
},

{
  term: "There is a sofa and a small table in _____________",
  meaning: "Có một chiếc ghế sofa và một chiếc bàn nhỏ trong...",
  example: "There is a sofa and a small table in my living room.",
  alternatives: [
    "my living room",
    "a bed and a desk in my bedroom",
    "a table and four chairs in the kitchen"
  ]
},

{
  term: "My favorite room is _____________",
  meaning: "Phòng yêu thích của tôi là...",
  example: "My favorite room is my bedroom.",
  alternatives: [
    "my bedroom",
    "my living room",
    "my kitchen",
    "the balcony"
  ]
},

{
  term: "I spend a lot of time _____________",
  meaning: "Tôi dành nhiều thời gian...",
  example: "I spend a lot of time in my bedroom.",
  alternatives: [
    "in my bedroom",
    "at home",
    "in the living room"
  ]
},

{
  term: "because _____________",
  meaning: "bởi vì...",
  example: "I like my bedroom because it is quiet.",
  alternatives: [
    "because it is quiet",
    "because it is comfortable",
    "because I like it"
  ]
},

{
  term: "I like my house because _____________",
  meaning: "Tôi thích ngôi nhà của mình bởi vì...",
  example: "I like my house because it is quiet.",
  alternatives: [
    "it is quiet",
    "it is clean",
    "it is comfortable",
    "it is near my workplace"
  ]
},

{
  term: "feel _____________",
  meaning: "cảm thấy...",
  example: "I feel comfortable.",
  alternatives: [
    "feel comfortable",
    "feel happy",
    "feel relaxed",
    "feel safe"
  ]
}

]
};