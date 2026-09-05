import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I am from Vietnam, and I live in Vietnam with my family. Vietnam is a country in Southeast Asia. I am Vietnamese, and I speak Vietnamese every day. I also study English because I want to speak with people from other countries. My favorite country is Japan because I like Japanese food and culture. I want to visit Japan one day and see some famous places. I have some friends from different countries, and I like learning about their lives. I think learning about other countries is interesting and useful.";

const translation =
"Tôi đến từ Việt Nam, và tôi đang sống ở Việt Nam cùng với gia đình mình. Việt Nam là một quốc gia thuộc khu vực Đông Nam Á. Tôi là người Việt Nam, và tôi nói tiếng Việt mỗi ngày. Tôi cũng học tiếng Anh vì tôi muốn trò chuyện với mọi người đến từ các quốc gia khác. Đất nước yêu thích của tôi là Nhật Bản vì tôi thích văn hóa và ẩm thực Nhật Bản. Tôi muốn đến thăm Nhật Bản vào một ngày nào đó để tham quan một vài địa điểm nổi tiếng. Tôi có vài người bạn đến từ các quốc gia khác nhau, và tôi thích tìm hiểu về cuộc sống của họ. Tôi nghĩ việc tìm hiểu về các quốc gia khác rất thú vị và bổ ích.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "am", type: "verb" },
  { text: " " },
  { text: "from Vietnam", type: "preposition" },
  { text: " " },
  { text: ", and I " },
  { text: "live in", type: "verb" },
  { text: " " },
  { text: "Vietnam", type: "noun" },
  { text: " " },
  { text: " with my family", type:"preposition" },
  { text: " . " },
  { text: "Vietnam " },
  { text: "is" },
  { text: " " },
  { text: "a country", type: "noun" },
  { text: " " },
  { text: "in Southeast Asia", type: "preposition" },
  { text: " " },
  { text: ". I am" },
  { text: " " },
  { text: "Vietnamese", type: "adjective" },
  { text: ", and I " },
  { text: "speak", type: "verb" },
  { text: " " },
  { text: "Vietnamese", type: "noun" },
  { text: " " },
  { text: "every day", type: "time" },
  { text: " " },
  { text: ". I also " },
  { text: "study English", type: "verb" },
  { text: " " },
  { text: "because", type: "reason" },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "want to speak", type: "verb" },
  { text: " " },
  { text: "with people from other countries", type: "preposition" },
  { text: " " },
  { text: ". " },
  { text: "My favorite country" },
  { text: " " },
  { text: "is ", type: "verb"  },
  { text: " " },
  { text: "Japan" , type: "noun"  },
  { text: " " },
  { text: "because", type: "reason" },
  { text: " " },
  { text: "I " },
  { text: " " },
  { text: "like", type: "verb" },
  { text: " " },
  { text: "Japanese food and culture", type: "noun" },
  { text: " " },
  { text: ". I " },
  { text: "want to visit", type: "verb" },
  { text: " " },
  { text: "Japan", type: "noun" },
  { text: " " },
  { text: "one day", type: "time" },
  { text: " " },
  { text: " and" },
  { text: " " },
  { text: "see", type: "verb" },
  { text: " " },
  { text: "some famous places", type: "noun"  },
  { text: " " },
  { text: ". I " },
  { text: "have some friends", type: "verb" },
  { text: " " },
  { text: "from different countries", type: "preposition"  },
  { text: " " },
  { text: ", and I " },
  { text: " " },
  { text: "like learning", type: "verb" },
  { text: " " },
  { text: "about their lives", type: "preposition" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "think", type: "verb" },
  { text: " " },
  { text: "learning about other countries", type: "noun" },
  { text: " is " },
  { text: "interesting and useful", type: "adjective" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "am from Vietnam",
    pronunciation: "/æm frəm ˌvjetˈnæm/",
    meaning: "Đến từ Việt Nam",
    context: "Dùng để giới thiệu quê hương, nguồn gốc.",
    type: "verb",
  },
  {
    phrase: "live in Vietnam",
    pronunciation: "/lɪv ɪn ˌvjetˈnæm/",
    meaning: "Sống ở Việt Nam",
    context: "Dùng để nói về nơi sinh sống hiện tại.",
    type: "verb",
  },
  {
    phrase: "speak Vietnamese every day",
    pronunciation: "/spiːk ˌvjetnəˈmiːz ˈevri deɪ/",
    meaning: "Nói tiếng Việt mỗi ngày",
    context: "Dùng để nói về ngôn ngữ giao tiếp hằng ngày.",
    type: "verb",
  },
  {
    phrase: "study English",
    pronunciation: "/ˈstʌdi ˈɪŋɡlɪʃ/",
    meaning: "Học tiếng Anh",
    context: "Dùng để chỉ việc trau dồi ngoại ngữ.",
    type: "verb",
  },
  {
    phrase: "want to speak with people from other countries",
    pronunciation: "/wɒnt tuː spiːk wɪð ˈpiːpl frəm ˈʌðər ˈkʌntriz/",
    meaning: "Muốn trò chuyện với mọi người từ các quốc gia khác",
    context: "Dùng để nêu mục đích khi học ngoại ngữ.",
    type: "verb",
  },
  {
    phrase: "like Japanese food and culture",
    pronunciation: "/laɪk ˌdʒæpəˈniːz fuːd ænd ˈkʌltʃər/",
    meaning: "Thích ẩm thực và văn hóa Nhật Bản",
    context: "Dùng để bày tỏ sở thích đối với một quốc gia cụ thể.",
    type: "verb",
  },
  {
    phrase: "want to visit Japan one day",
    pronunciation: "/wɒnt tuː ˈvɪzɪt dʒəˈpæn wʌn deɪ/",
    meaning: "Muốn ghé thăm Nhật Bản một ngày nào đó",
    context: "Dùng để nói về ước mơ hoặc dự định du lịch tương lai.",
    type: "verb",
  },

  {
    phrase: "have some friends",
    pronunciation: "/hæv sʌm frendz/",
    meaning: "Có một số người bạn",
    context: "Dùng để giới thiệu về các mối quan hệ bạn bè.",
    type: "verb",
  },
  {
    phrase: "like learning about their lives",
    pronunciation: "/laɪk ˈlɜːrnɪŋ əˈbaʊt ðeər lɪvz/",
    meaning: "Thích tìm hiểu về cuộc sống của họ",
    context: "Dùng để nói về sự tò mò và hứng thú với văn hóa người khác.",
    type: "verb",
  },

  // Prepositional Chunk (pink)
  {
  phrase: "in Southeast Asia",
  pronunciation: "/ɪn ˌsaʊθˈiːst ˈeɪʒə/",
  meaning: "ở Đông Nam Á",
  context: "dùng IN trước tên khu vực hoặc địa điểm lớn để nói vị trí (in Southeast Asia)",
  type: "preposition",
},
{
  phrase: "about their lives",
  pronunciation: "/əˈbaʊt ðer laɪvz/",
  meaning: "về cuộc sống của họ",
  context: "dùng ABOUT để nói về chủ đề hoặc nội dung được nhắc đến (about their lives)",
  type: "preposition",
},
{
  phrase: "from different countries",
  pronunciation: "/frəm ˈdɪfrənt ˈkʌntriz/",
  meaning: "từ các quốc gia khác nhau",
  context: "dùng FROM để nói nguồn gốc hoặc nơi một người/vật đến từ",
  type: "preposition",
},
{
  phrase: "from other countries",
  pronunciation: "/frəm ˈʌðər ˈkʌntriz/",
  meaning: "từ các quốc gia khác",
  context: "dùng OTHER trước danh từ để nói về người hoặc vật khác với người hoặc vật đã được nhắc đến (other countries)",
  type: "preposition",
},

  // Noun chunks (red)
  {
    phrase: "is a country in Southeast Asia",
    pronunciation: "/ɪz ə ˈkʌntri ɪn ˌsaʊθˈiːst ˈeɪʒə/",
    meaning: "Là một đất nước ở Đông Nam Á",
    context: "Dùng để định vị địa lý quốc gia.",
    type: "noun",
  },
  {
    phrase: "My favorite country",
    pronunciation: "/maɪ ˈfeɪvərɪt ˈkʌntri/",
    meaning: "Đất nước yêu thích của tôi",
    context: "Dùng để chỉ quốc gia được quan tâm nhất.",
    type: "noun",
  },
  {
    phrase: "learning about other countries",
    pronunciation: "/ˈlɜːrnɪŋ əˈbaʊt ˈʌðər ˈkʌntriz/",
    meaning: "Tìm hiểu về các quốc gia khác",
    context: "Dùng để chỉ hoạt động mở rộng kiến thức thế giới.",
    type: "noun",
  },
  // Adjective chunks (blue)
  {
    phrase: "am Vietnamese",
    pronunciation: "/æm ˌvjetnəˈmiːz/",
    meaning: "Là người Việt Nam",
    context: "Dùng để nói về quốc tịch.",
    type: "adjective",
  },
  {
    phrase: "interesting and useful",
    pronunciation: "/ˈɪntrəstɪŋ ænd ˈjuːsfl/",
    meaning: "Thú vị và hữu ích",
    context: "Dùng để đánh giá giá trị của một trải nghiệm.",
    type: "adjective",
  },
  // Reason chunks (yellow)
  {
    phrase: "because",
    pronunciation: "/bɪˈkɒz/",
    meaning: "Bởi vì",
    context: "Dùng để giải thích lý do học tập hoặc sở thích.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I am ____ Vietnam, and I live in Vietnam with my family.",
    answer: "from",
    hint: "đến từ",
  },
  {
    prompt: "Vietnam is a country ____ Southeast Asia.",
    answer: "in",
    hint: "ở trong",
  },
  {
    prompt: "I am Vietnamese, and I speak Vietnamese ____ day.",
    answer: "every",
    hint: "mỗi",
  },
  {
    prompt: "My favorite country is Japan because I like Japanese food and ____.",
    answer: "culture",
    hint: "văn hóa",
  },
  {
    prompt: "I want to visit Japan ____ day and see some famous places.",
    answer: "one",
    hint: "một (ngày nào đó)",
  },
  {
    prompt: "I have some friends ____ different countries, and I like learning about their lives.",
    answer: "from",
    hint: "từ",
  },
  {
    prompt: "I think learning about other countries is interesting and ____.",
    answer: "useful",
    hint: "hữu ích",
  },
];

export const lesson16Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I am from _____________",
  meaning: "Tôi đến từ...",
  example: "I am from Vietnam.",
  alternatives: [
    "Vietnam",
    "Japan",
    "Korea",
    "Thailand",
    "the United States"
  ]
},

{
  term: "I live in _____________ with _____________",
  meaning: "Tôi sống ở... với...",
  example: "I live in Vietnam with my family.",
  alternatives: [
    "Vietnam with my family",
    "Japan with my friends",
    "Da Nang with my sister"
  ]
},

{
  term: "I am _____________",
  meaning: "Tôi là người...",
  example: "I am Vietnamese.",
  alternatives: [
    "Vietnamese",
    "Japanese",
    "Korean",
    "Thai",
    "American"
  ]
},

{
  term: "I speak _____________",
  meaning: "Tôi nói...",
  example: "I speak Vietnamese.",
  alternatives: [
    "Vietnamese",
    "English",
    "Japanese",
    "Korean",
    "Chinese"
  ]
},

{
  term: "I speak _____________ every day",
  meaning: "Tôi nói... mỗi ngày",
  example: "I speak Vietnamese at home every day.",
  alternatives: [
    "Vietnamese at home",
    "English at work",
    "Japanese with my friends"
  ]
},

{
  term: "because I want to _____________",
  meaning: "vì tôi muốn...",
  example: "I learn English because I want to speak English.",
  alternatives: [
    "speak English",
    "travel abroad",
    "meet new people",
    "understand other cultures"
  ]
},

{
  term: "speak with _____________",
  meaning: "nói chuyện với...",
  example: "I want to speak with people from other countries.",
  alternatives: [
    "people from other countries",
    "foreign friends",
    "international students",
    "new people"
  ]
},

{
  term: "My favorite country is _____________",
  meaning: "Đất nước yêu thích của tôi là...",
  example: "My favorite country is Japan.",
  alternatives: [
    "Japan",
    "Korea",
    "Thailand",
    "France",
    "Australia"
  ]
},

{
  term: "because I like _____________",
  meaning: "vì tôi thích...",
  example: "My favorite country is Japan because I like Japanese food.",
  alternatives: [
    "Japanese food",
    "Korean music",
    "Thai food",
    "French culture"
  ]
},

{
  term: "I want to visit _____________",
  meaning: "Tôi muốn đến thăm...",
  example: "I want to visit Japan.",
  alternatives: [
    "Japan",
    "Korea",
    "Thailand",
    "Europe",
    "another country"
  ]
},

{
  term: "see _____________",
  meaning: "tham quan / nhìn thấy...",
  example: "I want to see famous places.",
  alternatives: [
    "famous places",
    "beautiful beaches",
    "old buildings",
    "traditional temples"
  ]
},

{
  term: "friends from _____________",
  meaning: "bạn bè từ...",
  example: "I have friends from different countries.",
  alternatives: [
    "different countries",
    "Japan",
    "Korea",
    "other cities"
  ]
},

{
  term: "I like _____________",
  meaning: "Tôi thích...",
  example: "I like learning about other cultures.",
  alternatives: [
    "learning about other cultures",
    "meeting new people",
    "learning languages",
    "traveling"
  ]
},

{
  term: "learn about _____________",
  meaning: "tìm hiểu về...",
  example: "I like to learn about other cultures.",
  alternatives: [
    "their lives",
    "other countries",
    "other cultures",
    "different traditions"
  ]
},

{
  term: "I think _____________",
  meaning: "Tôi nghĩ...",
  example: "I think learning about countries is interesting.",
  alternatives: [
    "learning about countries is interesting",
    "other cultures are interesting",
    "different languages are useful"
  ]
}

]
};