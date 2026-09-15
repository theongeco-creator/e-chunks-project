import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I usually travel by motorbike because it is easy and fast. I use my motorbike to go to work and visit my friends. Sometimes, I take a bus when I go to another part of the city. The bus is cheap, but it is slower than a motorbike. I like traveling by car when I go on a long trip with my family. I don't often travel by train because there is no train station near my home. I think public transportation is useful for people who do not have a car or motorbike. In the future, I want to use the bus more often.";

const translation =
"Tôi thường đi lại bằng xe máy vì nó rất tiện lợi và nhanh chóng. Tôi dùng xe máy để đi làm và đi thăm bạn bè. Thỉnh thoảng, tôi đi xe buýt khi muốn đến một khu vực khác trong thành phố. Xe buýt tuy rẻ nhưng lại chậm hơn xe máy. Tôi thích đi du lịch bằng ô tô khi có những chuyến đi xa cùng gia đình. Tôi không thường xuyên đi tàu hỏa vì gần nhà tôi không có ga tàu nào. Tôi nghĩ phương tiện giao thông công cộng rất hữu ích cho những ai không có ô tô hay xe máy. Trong tương lai, tôi muốn sử dụng xe buýt thường xuyên hơn.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "travel", type: "verb" },
  { text: " " },
  { text: "by motorbike", type: "preposition" },
  { text: " " },
  { text: "because because it is easy and fast", type: "reason" },
  { text: ". I " },
  { text: "use", type: "verb" },
  { text: " " },
  { text: "my motorbike", type: "noun" },
  { text: " " },
  { text: " to go to work", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "visit my friends.", type: "verb" },
  { text: " " },
  { text: "Sometimes", type: "time" },
  { text: ", I " },
  { text: "take a bus", type: "verb" },
  { text: " when I" },
  { text: " " },
  { text: "go to", type: "verb" },
  { text: " " },
  { text: "another part of the city.", type: "preposition" },
  { text: " " },
  { text: "The bus is" },
  { text: " " },
  { text: "cheap", type: "adjective" },
  { text: " " },
  { text: ", but it is " },
  { text: "slower than a motorbike", type: "adjective" },
  { text: ". I " },
  { text: "like traveling", type: "verb" },
  { text: " " },
  { text: "by car", type: "preposition" },
  { text: " " },
  { text: " when I" },
  { text: " " },
  { text: "go on", type: "verb" },
  { text: " " },
  { text: "a long trip", type: "noun" },
  { text: " " },
  { text: "with my family", type: "preposition" },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "don't often travel", type: "verb" },
  { text: " " },
  { text: "by train", type: "preposition" },
  { text: " " },
  { text: " because there is no train station", type: "reason" },
  { text: " " },
  { text: "near my home", type: "preposition" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "think", type: "verb" },
  { text: " " },
  { text: "public transportation", type: "noun" },
  { text: " is useful", type: "verb" },
  { text: " " },
  { text: "for people who do not have a car or motorbike.", type: "preposition" },
  { text: " " },
  { text: "In the future", type: "time" },
  { text: ", I " },
  { text: "want to use", type: "verb" },
  { text: " " },
  { text: "the bus", type: "noun" },
  { text: " " },
  { text: "more often", type: "time" },
  { text: " " },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "usually travel by motorbike",
    pronunciation: "/ˈjuːʒʊəli ˈtrævl baɪ ˈməʊtəbaɪk/",
    meaning: "Thường di chuyển bằng xe máy",
    context: "Dùng để nói về thói quen đi lại hằng ngày.",
    type: "verb",
  },
  {
    phrase: "use my motorbike",
    pronunciation: "/juːz maɪ ˈməʊtəbaɪk/",
    meaning: "Sử dụng xe máy của tôi",
    context: "Dùng để chỉ việc dùng phương tiện cá nhân.",
    type: "verb",
  },
  {
    phrase: "take a bus",
    pronunciation: "/teɪk ə bʌs/",
    meaning: "Đi xe buýt",
    context: "Dùng khi chọn phương tiện giao thông công cộng.",
    type: "verb",
  },
  {
    phrase: "like traveling by car",
    pronunciation: "/laɪk ˈtrævəlɪŋ baɪ kɑːr/",
    meaning: "Thích đi du lịch/di chuyển bằng ô tô",
    context: "Dùng để nói về sở thích khi đi xa.",
    type: "verb",
  },
  {
    phrase: "don't often travel by train",
    pronunciation: "/dəʊnt ˈɒfn ˈtrævl baɪ treɪn/",
    meaning: "Không thường xuyên đi lại bằng tàu hỏa",
    context: "Dùng để chỉ việc ít khi sử dụng tàu hỏa.",
    type: "verb",
  },
  {
    phrase: "want to use the bus more often",
    pronunciation: "/wɒnt tuː juːz ðə bʌs mɔːr ˈɒfn/",
    meaning: "Muốn sử dụng xe buýt thường xuyên hơn",
    context: "Dùng để diễn tả dự định trong tương lai.",
    type: "verb",
  },
  {
    phrase: "go on a trip",
    pronunciation: "/ɡəʊ ɒn ə ˈtrɪp/",
    meaning: "Đi du lịch",
    context: "Dùng để diễn tả việc đi chơi hoặc du lịch.",
    type: "verb",
  },
  // Time chunks (purple)
  {
    phrase: "Sometimes",
    pronunciation: "/ˈsʌmtaɪmz/",
    meaning: "Thỉnh thoảng",
    context: "Dùng để chỉ tần suất không thường xuyên.",
    type: "time",
  },
  {
    phrase: "more often",
    pronunciation: "/mɔːr ˈɒfn/",
    meaning: "Thường xuyên hơn",
    context: "Dùng để chỉ tần suất cao hơn.",
    type: "time",
  },
  {
    phrase: "In the future",
    pronunciation: "/ɪn ðə ˈfjuːtʃər/",
    meaning: "Trong tương lai",
    context: "Dùng để chỉ khoảng thời gian sắp tới.",
    type: "time",
  },
  // Adjective chunks (blue)
  {
    phrase: "easy and fast",
    pronunciation: "/ˈiːzi ænd fɑːst/",
    meaning: "Dễ dàng và nhanh chóng",
    context: "Dùng để đánh giá ưu điểm của phương tiện.",
    type: "adjective",
  },
  {
    phrase: "The bus is cheap",
    pronunciation: "/ðə bʌs ɪz tʃiːp/",
    meaning: "Xe buýt thì rẻ",
    context: "Dùng để nói về chi phí của xe buýt.",
    type: "adjective",
  },
  {
    phrase: "slower than a motorbike",
    pronunciation: "/ˈsləʊər ðæn ə ˈməʊtəbaɪk/",
    meaning: "Chậm hơn xe máy",
    context: "Dùng trong cấu trúc so sánh hơn giữa hai phương tiện.",
    type: "adjective",
  },
  // Noun chunks (red)
  {
    phrase: "public transportation",
    pronunciation: "/ˈpʌblɪk ˌtrænspɔːˈteɪʃn/",
    meaning: "Giao thông công cộng",
    context: "Dùng để chỉ chung các loại phương tiện công cộng.",
    type: "noun",
  },
  // Prepositional Chunk  (pink)
  {
    phrase: "another part of the city",
    pronunciation: "/əˈnʌðə pɑːt ɒv ðə ˈsɪti/",
    meaning: "Một phần khác của thành phố",
    context: "Dùng để chỉ một khu vực cụ thể trong thành phố.",
    type: "preposition",
  },
  {
    phrase: "by motorbike",
    pronunciation: "/baɪ ˈməʊtəbaɪk/",
    meaning: "Bằng xe máy",
    context: "Dùng để chỉ phương tiện di chuyển.",
    type: "preposition",
  },
  {
    phrase: "near my home",
    pronunciation: "/nɪə ˈmaɪ həʊm/",
    meaning: "Gần nhà tôi",
    context: "Dùng để chỉ vị trí gần nhà.",
    type: "preposition",
  },
  {
    phrase: "who",
    pronunciation: "/ˈhuː/",
    meaning: "mà / người mà",
    context: "Dùng để chỉ nhóm người không sở hữu phương tiện cá nhân.",
    type: "preposition",
  },
  // Reason chunks (yellow)
  {
    phrase: "because there is no train station",
    pronunciation: "/bɪˈkɒz ðeər ɪz nəʊ treɪn ˈsteɪʃᵊn/",
    meaning: "Bởi vì không có ga tàu",
    context: "Dùng để giải thích nguyên nhân.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I usually travel ____ motorbike because it is easy and fast.",
    answer: "by",
    hint: "bằng (phương tiện)",
  },
  {
    prompt: "I use my motorbike to go to work and visit my ____.",
    answer: "friends",
    hint: "bạn bè",
  },
  {
    prompt: "Sometimes, I take a bus when I go to another part ____ the city.",
    answer: "of",
    hint: "của",
  },
  {
    prompt: "The bus is cheap, but it is slower ____ a motorbike.",
    answer: "than",
    hint: "hơn",
  },
  {
    prompt: "I like traveling by car when I go on a long trip ____ my family.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "I don't often travel by train because there is no train station near my ____.",
    answer: "home",
    hint: "nhà",
  },
  {
    prompt: "I think public transportation is useful for people who do not have a car ____ motorbike.",
    answer: "or",
    hint: "hoặc",
  },
];

export const lesson11Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I usually travel by _____________",
  meaning: "Tôi thường đi bằng...",
  example: "I usually travel by motorbike.",
  alternatives: ["motorbike", "bus", "car", "train", "bicycle"]
},

{
  term: "because it is _____________",
  meaning: "vì nó...",
  example: "I usually travel by bus because it is cheap.",
  alternatives: ["easy", "fast", "cheap", "convenient", "comfortable"]
},

{
  term: "I use my _____________ to _____________",
  meaning: "Tôi dùng ... để...",
  example: "I use my motorbike to go to work.",
  alternatives: [
    "motorbike to go to work",
    "car to visit my family",
    "bicycle to go to school"
  ]
},

{
  term: "go to _____________",
  meaning: "đi đến...",
  example: "I go to work.",
  alternatives: [
    "work",
    "school",
    "the supermarket",
    "the city center",
    "the park"
  ]
},

{
  term: "visit _____________",
  meaning: "thăm...",
  example: "I visit my family.",
  alternatives: [
    "my friends",
    "my family",
    "my grandparents",
    "another city"
  ]
},

{
  term: "Sometimes, I _____________",
  meaning: "Đôi khi tôi...",
  example: "Sometimes, I take a bus.",
  alternatives: [
    "take a bus",
    "take a taxi",
    "ride my bicycle",
    "walk to work"
  ]
},

{
  term: "when I go to _____________",
  meaning: "khi tôi đi đến...",
  example: "I take a bus when I go to the city center.",
  alternatives: [
    "another part of the city",
    "the city center",
    "another city",
    "a nearby town"
  ]
},

{
  term: "The bus is _____________",
  meaning: "Xe buýt thì...",
  example: "The bus is cheap.",
  alternatives: [
    "cheap",
    "convenient",
    "comfortable",
    "crowded",
    "slow"
  ]
},

{
  term: "A is _____________ than B",
  meaning: "A ... hơn B",
  example: "A car is faster than a bus.",
  alternatives: [
    "cheaper than",
    "faster than",
    "slower than",
    "more comfortable than"
  ]
},

{
  term: "when I go on _____________",
  meaning: "khi tôi đi...",
  example: "I use my car when I go on a family trip.",
  alternatives: [
    "a trip",
    "long trip",
    "short trip",
    "business trip",
    "family trip"
  ]
},

{
  term: "because there is no _____________",
  meaning: "vì không có...",
  example: "I use my car because there is no bus stop.",
  alternatives: [
    "train station",
    "bus stop",
    "parking lot",
    "subway station"
  ]
},

{
  term: "near _____________",
  meaning: "gần...",
  example: "There is a bus stop near my house.",
  alternatives: [
    "my home",
    "near my office",
    "near my school",
    "near my house"
  ]
},

{
  term: "I think _____________",
  meaning: "Tôi nghĩ...",
  example: "I think public transportation is useful.",
  alternatives: [
    "public transportation is useful",
    "buses are convenient",
    "cars are comfortable"
  ]
},

{
  term: "useful for _____________",
  meaning: "hữu ích cho...",
  example: "Public transportation is useful for students.",
  alternatives: [
    "people who do not have a car",
    "students",
    "elderly people",
    "local people"
  ]
},

{
  term: "people who _____________",
  meaning: "những người mà...",
  example: "Public transportation is useful for people who do not have a car.",
  alternatives: [
    "do not have a car",
    "live in the city",
    "work far from home",
    "travel a lot"
  ]
},

{
  term: "In the future, I want to _____________",
  meaning: "Trong tương lai, tôi muốn...",
  example: "In the future, I want to use the bus more often.",
  alternatives: [
    "use the bus more often",
    "travel by train",
    "buy a car",
    "ride a bicycle more"
  ]
},

{
  term: "[trạng từ chỉ tần suất] more often",
  meaning: "... thường xuyên hơn",
  example: "I want to use the bus more often.",
  alternatives: [
    "less often",
    "every day",
    "every weekend",
    "sometimes"
  ]
}

]
};