import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I live near the city center, and there are many places near my house. There is a supermarket next to my house, and a bank is across from it. The bus stop is on the main road, near a small coffee shop. When I go to the supermarket, I walk straight for about five minutes. Then, I turn left at the traffic lights and walk past the bank. The supermarket is on the right, next to the coffee shop. When I visit a new place, I use my phone to find the way. Sometimes, I ask people for directions when I can't find the place.";

const translation =
"Tôi sống gần trung tâm thành phố, và có rất nhiều địa điểm ở gần nhà tôi. Có một siêu thị ở ngay bên cạnh nhà tôi, và một ngân hàng đối diện với nó. Trạm xe buýt nằm trên đường chính, gần một quán cà phê nhỏ. Khi đi siêu thị, tôi đi thẳng khoảng năm phút. Sau đó, tôi rẽ trái ở đèn giao thông và đi qua ngân hàng. Siêu thị nằm ở bên phải, bên cạnh quán cà phê. Khi đến một nơi mới, tôi thường dùng điện thoại để tìm đường. Thỉnh thoảng, tôi sẽ hỏi mọi người chỉ đường khi không tìm thấy địa điểm đó.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "live", type: "verb" },
  { text: " " },
  { text: "near the city center", type: "preposition" },
  { text: ", " },
  { text: "there are", type: "verb"  },
  { text: " " },
  { text: "many places", type: "noun"  },
  { text: " " },
  { text: "near my house.", type: "preposition"  },
  { text: " " },
  { text: "There is a supermarket next to my house", type: "noun" },
  { text: ", and" },
  { text: " " },
  { text: "a bank", type: "noun"   },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "across from it", type: "preposition" },
  { text: " " },
  { text: "The bus stop", type: "noun" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "on the main road", type: "preposition" },
  { text: " , " },
  { text: "near a small coffee shop", type: "preposition" },
  { text: " " },
  { text: ". When I " },
  { text: " " },
  { text: "go to the supermarket", type: "verb"  },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "walk straight", type: "verb" },
  { text: " " },
  { text: "for about five minutes", type: "preposition" },
  { text: " " },
  { text: ". Then, I " },
  { text: "turn left", type: "verb" },
  { text: " " },
  { text: "at the traffic lights", type: "preposition" },
  { text: " " },
  { text: " and " },
  { text: "walk past", type: "verb" },
  { text: " " },
  { text: "the bank", type: "noun" },
  { text: " " },
  { text: ". The supermarket", type: "noun"  },
  { text: " " },
  { text: "is", type: "verb"  },
  { text: " " },
  { text: "on the right", type: "preposition"  },
  { text: " , " },
  { text: "next to the coffee shop", type: "preposition"  },
  { text: " " },
  { text: "When I" },
  { text: " " },
  { text: "visit", type: "verb"   },
  { text: " " },
  { text: "a new place", type: "noun"   },
  { text: " " },
  { text: ", I " },
  { text: " " },
  { text: "use my phone", type: "verb" },
  { text: " " },
  { text: "to find the way", type: "reason" },
  { text: ". " },
  { text: "Sometimes", type: "time" },
  { text: ", I " },
  { text: "ask people", type: "verb" },
  { text: " " },
  { text: "for directions", type: "preposition" },
  { text: " " },
  { text: " when I" },
  { text: " " },
  { text: "can't find", type: "verb" },
  { text: " " },
  { text: "the place.", type: "noun" },
  { text: " " },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "live near the city center",
    pronunciation: "/lɪv nɪr ðə ˈsɪti ˈsentər/",
    meaning: "Sống gần trung tâm thành phố",
    context: "Dùng để nói về khu vực sinh sống thuận tiện.",
    type: "verb",
  },
  {
    phrase: "walk straight for about five minutes",
    pronunciation: "/wɔːk streɪt fɔːr əˈbaʊt faɪv ˈmɪnɪts/",
    meaning: "Đi thẳng khoảng năm phút",
    context: "Dùng để chỉ dẫn đường đi cơ bản.",
    type: "verb",
  },
  {
    phrase: "turn left at the traffic lights",
    pronunciation: "/tɜːn left æt ðə ˈtræfɪk laɪts/",
    meaning: "Rẽ trái ở đèn giao thông",
    context: "Dùng để hướng dẫn rẽ hướng khi tham gia giao thông.",
    type: "verb",
  },
  {
  phrase: "go to the supermarket",
  pronunciation: "/ɡəʊ tə ðə ˈsuːpəmɑːkɪt/",
  meaning: "đi đến siêu thị",
  context: "Dùng để nói về hành động đi đến một địa điểm.",
  type: "verb",
  },
  {
  phrase: "can't find",
  pronunciation: "/kɑːnt faɪnd/",
  meaning: "không thể tìm thấy",
  context: "Dùng để nói rằng không thể tìm thấy một người, vật hoặc địa điểm.",
  type: "verb",
  },   
  {
    phrase: "walk past the bank",
    pronunciation: "/wɔːk pɑːst ðə bæŋk/",
    meaning: "Đi qua ngân hàng",
    context: "Dùng để chỉ hành động vượt qua một cột mốc trên đường.",
    type: "verb",
  },
  {
    phrase: "use my phone to find the way",
    pronunciation: "/juːz maɪ fəʊn tuː faɪnd ðə weɪ/",
    meaning: "Sử dụng điện thoại để tìm đường",
    context: "Dùng để nói về cách định vị khi đến nơi xa lạ.",
    type: "verb",
  },
  {
    phrase: "ask people for directions",
    pronunciation: "/ɑːsk ˈpiːpl fɔːr dəˈrekʃnz/",
    meaning: "Hỏi đường mọi người",
    context: "Dùng khi cần sự giúp đỡ để tìm địa điểm.",
    type: "verb",
  },
   // Prepositional Chunk (pink)
  {
  phrase: "near the city center",
  pronunciation: "/nɪər ðə ˈsɪti ˈsentər/",
  meaning: "gần trung tâm thành phố",
  context: "Dùng NEAR để nói về vị trí ở gần một địa điểm.",
  type: "preposition",
},
{
  phrase: "across from it",
  pronunciation: "/əˈkrɒs frəm ɪt/",
  meaning: "đối diện với nó",
  context: "Dùng ACROSS FROM để nói về vị trí đối diện với một địa điểm hoặc vật khác.",
  type: "preposition",
},
{
  phrase: "on the main road",
  pronunciation: "/ɒn ðə meɪn rəʊd/",
  meaning: "trên đường chính",
  context: "Dùng ON để nói về vị trí của một địa điểm nằm trên một con đường.",
  type: "preposition",
},
{
  phrase: "for directions",
  pronunciation: "/fər dəˈrekʃənz/",
  meaning: "để hỏi chỉ đường",
  context: "Dùng FOR để nói về mục đích hoặc điều mà một hành động hướng đến.",
  type: "preposition",
},
{
  phrase: "for about five minutes",
  pronunciation: "/fər əˈbaʊt faɪv ˈmɪnɪts/",
  meaning: "trong khoảng năm phút",
  context: "Dùng FOR để nói về khoảng thời gian một hành động kéo dài.",
  type: "preposition",
},
{
  phrase: "at the traffic lights",
  pronunciation: "/æt ðə ˈtræfɪk laɪts/",
  meaning: "ở chỗ đèn giao thông",
  context: "Dùng AT để nói về một vị trí hoặc điểm cụ thể.",
  type: "preposition",
},
{
  phrase: "on the right",
  pronunciation: "/ɒn ðə raɪt/",
  meaning: "ở bên phải",
  context: "Dùng ON để nói về vị trí ở một phía hoặc bên của một nơi.",
  type: "preposition",
},
{
  phrase: "next to the coffee shop",
  pronunciation: "/nekst tə ðə ˈkɒfi ʃɒp/",
  meaning: "bên cạnh quán cà phê",
  context: "Dùng NEXT TO để nói về vị trí ngay bên cạnh một địa điểm hoặc vật khác.",
  type: "preposition",
},
  // Noun chunks (red)
  {
    phrase: "There is a supermarket next to my house",
    pronunciation: "/ðeər ɪz ə ˈsuːpəˌmɑːkɪt nekst tuː maɪ haʊs/",
    meaning: "Có một siêu thị ở cạnh nhà tôi",
    context: "Dùng để miêu tả vị trí các tiện ích xung quanh nơi ở.",
    type: "noun",
  },
  {
    phrase: "bus stop is on the main road",
    pronunciation: "/bʌs stɒp ɪz ɑːn ðə meɪn rəʊd/",
    meaning: "Trạm xe buýt ở trên đường chính",
    context: "Dùng để chỉ vị trí của bến xe buýt.",
    type: "noun",
  },
  // Time chunks (purple)
  {
    phrase: "Sometimes",
    pronunciation: "/ˈsʌmtaɪmz/",
    meaning: "Thỉnh thoảng",
    context: "Dùng để chỉ tần suất không thường xuyên thực hiện hành động.",
    type: "time",
  },
    // Reason & Purpose chunks (brown)
  {
  phrase: "to find the way",
  pronunciation: "/tə faɪnd ðə weɪ/",
  meaning: "để tìm đường",
  context: "Dùng TO + động từ để nói về mục đích của một hành động.",
  type: "reason",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I live near the city center, and there are many places ____ my house.",
    answer: "near",
    hint: "gần",
  },
  {
    prompt: "There is a supermarket next to my house, and a bank is ____ from it.",
    answer: "across",
    hint: "đối diện",
  },
  {
    prompt: "The bus stop is ____ the main road, near a small coffee shop.",
    answer: "on",
    hint: "trên (đường)",
  },
  {
    prompt: "When I go to the supermarket, I walk straight ____ about five minutes.",
    answer: "for",
    hint: "trong khoảng (thời gian)",
  },
  {
    prompt: "Then, I turn left ____ the traffic lights and walk past the bank.",
    answer: "at",
    hint: "tại (đèn giao thông)",
  },
  {
    prompt: "When I visit a new place, I use my phone to find ____ way.",
    answer: "the",
    hint: "đường đi",
  },
  {
    prompt: "Sometimes, I ask people ____ directions when I cannot find the place.",
    answer: "for",
    hint: "hỏi xin (chỉ dẫn)",
  },
];

export const lesson20Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I live near _____________",
  meaning: "Tôi sống gần...",
  example: "I live near the city center.",
  alternatives: [
    "near the city center",
    "near my office",
    "near a supermarket",
    "near a park",
    "near a small coffee shop",
    "near the bus stop",
    "near the bank"
  ]
},

{
  term: "There are many _____________ near my house",
  meaning: "Có nhiều... gần nhà tôi",
  example: "There are many shops near my house.",
  alternatives: [
    "shops",
    "restaurants",
    "supermarkets",
    "coffee shops"
  ]
},

{
  term: "There is a _____________ next to _____________",
  meaning: "Có một... cạnh...",
  example: "There is a supermarket next to my house.",
  alternatives: [
    "a supermarket next to my house",
    "a bank next to the supermarket",
    "a pharmacy next to the coffee shop"
  ]
},

{
  term: "A _____________ is across from _____________",
  meaning: "Một... đối diện...",
  example: "A bank is across from the supermarket.",
  alternatives: [
    "a bank is across from the supermarket",
    "a school is across from the park",
    "a hotel is across from the station"
  ]
},

{
  term: "The _____________ is on _____________",
  meaning: "... nằm trên...",
  example: "The supermarket is on the main road.",
  alternatives: [
    "on the main road",
    "on this street",
    "on Nguyen Trai Street"
  ]
},

{
  term: "When I go to _____________",
  meaning: "Khi tôi đi đến...",
  example: "When I go to the supermarket, I walk straight.",
  alternatives: [
    "the supermarket, I walk straight",
    "the bank, I take the bus",
    "the coffee shop, I walk for five minutes"
  ]
},

{
  term: "walk straight for _____________",
  meaning: "đi thẳng trong...",
  example: "I walk straight for five minutes.",
  alternatives: [
    "for five minutes",
    "for ten minutes",
    "for about 100 meters"
  ]
},

{
  term: "turn left at _____________",
  meaning: "rẽ trái ở...",
  example: "I turn left at the traffic lights.",
  alternatives: [
    "at the traffic lights",
    "at the corner",
    "at the next street"
  ]
},

{
  term: "turn right at _____________",
  meaning: "rẽ phải ở...",
  example: "I turn right at the traffic lights.",
  alternatives: [
    "at the traffic lights",
    "at the corner",
    "at the next street"
  ]
},

{
  term: "walk past _____________",
  meaning: "đi ngang qua...",
  example: "I walk past the bank.",
  alternatives: [
    "the bank",
    "the supermarket",
    "the school",
    "the park"
  ]
},

{
  term: "next to _____________",
  meaning: "bên cạnh...",
  example: "The pharmacy is next to the coffee shop.",
  alternatives: [
    "next to the coffee shop",
    "next to the bank",
    "next to the bus stop"
  ]
},

{
  term: "When I visit _____________",
  meaning: "Khi tôi đến thăm / đến...",
  example: "When I visit a new place, I use my phone.",
  alternatives: [
    "a new place, I use my phone",
    "a new city, I use Google Maps",
    "a new area, I ask people"
  ]
},

{
  term: "use my phone to _____________",
  meaning: "dùng điện thoại để...",
  example: "I use my phone to find the way.",
  alternatives: [
    "find the way",
    "check the map",
    "find a place",
    "get directions"
  ]
},

{
  term: "ask _____________ for directions",
  meaning: "hỏi... để được chỉ đường",
  example: "I ask people for directions.",
  alternatives: [
    "ask people for directions",
    "ask a local for directions",
    "ask a police officer for directions"
  ]
},

{
  term: "when I can't _____________",
  meaning: "khi tôi không thể...",
  example: "I ask people for directions when I can't find the place.",
  alternatives: [
    "find the place",
    "find the address",
    "see the sign",
    "understand the directions"
  ]
}

]
};