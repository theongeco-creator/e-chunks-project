import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "Doing sports is very good for my health. I like playing badminton with my friends in the afternoon. My father usually goes jogging in the park every morning. Playing sports helps me reduce stress after a long day. Last Sunday, my team won a small football match. I need to buy new sports shoes for next week. I don't like swimming because the water is often cold. I think everyone should do exercise every day.";

const translation =
    "Tập thể dục thể thao rất tốt cho sức khỏe của tôi. Tôi thích chơi cầu lông với bạn bè vào buổi chiều. Bố tôi thường đi chạy bộ ở công viên vào mỗi sáng. Chơi thể thao giúp tôi giảm bớt căng thẳng sau một ngày dài. Chủ nhật tuần trước, đội của tôi đã chiến thắng trong một trận bóng đá nhỏ. Tôi cần mua một đôi giày thể thao mới cho tuần tới. Tôi không thích bơi lội vì nước thường bị lạnh. Tôi nghĩ mọi người đều nên tập thể dục mỗi ngày.";
const readingSegments: ReadingSegment[] = [
  { text: "Doing sports" },
{ text: " " },
{ text: "is", type: "verb" },
{ text: " " },
{ text: "very good", type: "adjective" },
{ text: " " },
{ text: "for my health", type: "preposition" },
{ text: ". I " },

{ text: "like playing badminton", type: "verb" },
{ text: " " },
{ text: "with my friends", type: "preposition" },
{ text: " " },
{ text: "in the afternoon", type: "time" },
{ text: ". " },

{ text: "My father " },
{ text: "usually", type: "time" },
{ text: " " },
{ text: "goes jogging", type: "verb" },
{ text: " " },
{ text: "in the park", type: "preposition" },
{ text: " " },
{ text: "every morning", type: "time" },
{ text: ". " },

{ text: "Playing sports " },
{ text: "helps me reduce stress", type: "verb" },
{ text: " " },
{ text: "after a long day", type: "time" },
{ text: ". " },

{ text: "Last Sunday", type: "time" },
{ text: ", my team " },
{ text: "won", type: "verb" },
{ text: " " },
{ text: "a small football match", type: "noun" },
{ text: ". I " },

{ text: "need to buy", type: "verb" },
{ text: " " },
{ text: "new sports shoes", type: "noun" },
{ text: " " },
{ text: "for next week", type: "time" },
{ text: ". I " },

{ text: "don't like swimming", type: "verb" },
{ text: " " },
{ text: "because the water is often cold", type: "reason" },
{ text: ". I " },

{ text: "think", type: "verb" },
{ text: "everyone " },
{ text: "should do exercise every day", type: "verb" },
{ text: "." }
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "like playing badminton with my friends",
    pronunciation: "/laɪk ˈpleɪɪŋ ˈbædmɪntən wɪð maɪ frendz/",
    meaning: "Thích chơi cầu lông với những người bạn của tôi",
    context: "Dùng để nói về sở thích thể thao mang tính kết nối bạn bè.",
    type: "verb",
  },
  {
    phrase: "usually goes jogging in the park",
    pronunciation: "/ˈjuːʒuəli ɡəʊz ˈdʒɒɡɪŋ ɪn ðə pɑːk/",
    meaning: "Thường đi chạy bộ trong công viên",
    context: "Dùng để chỉ thói quen tập thể dục buổi sáng của người thân.",
    type: "verb",
  },
  {
    phrase: "helps me reduce stress",
    pronunciation: "/helps miː rɪˈdjuːs stres/",
    meaning: "Giúp tôi giảm bớt căng thẳng",
    context: "Dùng để nêu lên lợi ích tinh thần của việc chơi thể thao.",
    type: "verb",
  },
  {
    phrase: "won a small football match",
    pronunciation: "/wʌn ə smɔːl ˈfʊtbɔːl mætʃ/",
    meaning: "Đã thắng một trận đấu bóng đá nhỏ",
    context: "Dùng để kể về một thành tích thi đấu thể thao trong quá khứ.",
    type: "verb",
  },
  {
    phrase: "need to buy new sports shoes",
    pronunciation: "/niːd tuː baɪ nuː spɔːrts ʃuːz/",
    meaning: "Cần mua giày thể thao mới",
    context: "Dùng để chỉ nhu cầu mua sắm phục vụ việc tập luyện.",
    type: "verb",
  },
  {
    phrase: "don't like swimming",
    pronunciation: "/duː nɒt laɪk ˈswɪmɪŋ/",
    meaning: "Không thích bơi lội",
    context: "Dùng để biểu thị môn thể thao không hợp sở thích cá nhân.",
    type: "verb",
  },
  {
    phrase: "should do exercise every day",
    pronunciation: "/ʃʊd duː ˈeksəsaɪz ˈevri deɪ/",
    meaning: "Nên tập thể dục mỗi ngày",
    context: "Dùng để đưa ra lời khuyên rèn luyện sức khỏe chung.",
    type: "verb",
  },
  // Adjective chunks (blue)
  {
    phrase: "is very good for my health",
    pronunciation: "/ɪz ˈveri ɡʊd fɔːr maɪ helθ/",
    meaning: "Rất tốt cho sức khỏe của tôi",
    context: "Dùng để đánh giá tác dụng tích cực của việc vận động.",
    type: "adjective",
  },
  {
    phrase: "often cold",
    pronunciation: "/ˈɒfn kəʊld/",
    meaning: "Thường lạnh",
    context: "Dùng để giải thích cảm giác khi xuống nước.",
    type: "adjective",
  },
  // Prepositional chunks (pink)
  {
  phrase: "for my health",
  pronunciation: "/fər maɪ helθ/",
  meaning: "cho sức khỏe của tôi",
  context: "Dùng FOR để nói về lợi ích hoặc điều gì đó tốt cho sức khỏe.",
  type: "preposition",
},
{
  phrase: "in the park",
  pronunciation: "/ɪn ðə pɑːrk/",
  meaning: "ở trong công viên",
  context: "Dùng IN để nói về vị trí hoặc địa điểm mà một người đang ở hoặc hoạt động.",
  type: "preposition",
},
  // Time chunks (purple)
  {
    phrase: "in the afternoon",
    pronunciation: "/ɪn ði ˌɑːftəˈnuːn/",
    meaning: "Vào buổi chiều",
    context: "Dùng để chỉ thời điểm chơi cầu lông.",
    type: "time",
  },
  {
    phrase: "every morning",
    pronunciation: "/ˈevri ˈmɔːrnɪŋ/",
    meaning: "Mỗi buổi sáng",
    context: "Dùng để chỉ tần suất chạy bộ của bố.",
    type: "time",
  },
  {
    phrase: "after a long day",
    pronunciation: "/ˈɑːftər ə lɒŋ deɪ/",
    meaning: "Sau một ngày dài",
    context: "Dùng để chỉ thời điểm thể thao phát huy tác dụng giải tỏa.",
    type: "time",
  },
  {
    phrase: "Last Sunday",
    pronunciation: "/lɑːst ˈsʌndeɪ/",
    meaning: "Chủ Nhật tuần trước",
    context: "Dùng để chỉ mốc thời gian diễn ra trận bóng đá.",
    type: "time",
  },
  {
    phrase: "for next week",
    pronunciation: "/fɔːr nekst wiːk/",
    meaning: "Cho tuần tới",
    context: "Dùng để xác định kế hoạch trong tương lai gần.",
    type: "time",
  },
  // Noun chunks (red)
  {
  phrase: "Doing sports",
  pronunciation: "/ˈduːɪŋ spɔːrts/",
  meaning: "việc chơi thể thao",
  context: "Dùng để nói về hoạt động chơi hoặc tập thể thao nói chung.",
  type: "noun",
},
{
  phrase: "Playing sports",
  pronunciation: "/ˈpleɪɪŋ spɔːrts/",
  meaning: "việc chơi thể thao",
  context: "Dùng để nói về hoạt động chơi thể thao nói chung.",
  type: "noun",
},
{
  phrase: "a small football match",
  pronunciation: "/ə smɔːl ˈfʊtbɔːl mætʃ/",
  meaning: "một trận bóng đá nhỏ",
  context: "Dùng để nói về một trận đấu bóng đá quy mô nhỏ.",
  type: "noun",
},
{
  phrase: "new sports shoes",
  pronunciation: "/njuː spɔːrts ʃuːz/",
  meaning: "đôi giày thể thao mới",
  context: "Dùng để nói về một đôi giày thể thao mới.",
  type: "noun",
},
{
  phrase: "swimming",
  pronunciation: "/ˈswɪmɪŋ/",
  meaning: "việc bơi lội",
  context: "Dùng để nói về hoạt động bơi lội.",
  type: "noun",
},
  // Reason chunks (yellow)
  {
  phrase: "because the water is often cold",
  pronunciation: "/bɪˈkɒz ðə ˈwɔːtər ɪz ˈɒfən kəʊld/",
  meaning: "bởi vì nước thường lạnh",
  context: "Dùng BECAUSE để đưa ra lý do hoặc giải thích cho một ý kiến hay hành động.",
  type: "reason",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "Doing sports is very good ____ my health.",
    answer: "for",
    hint: "cho",
  },
  {
    prompt: "I like playing badminton with my friends ____ the afternoon.",
    answer: "in",
    hint: "vào (buổi chiều)",
  },
  {
    prompt: "My father usually goes jogging ____ the park every morning.",
    answer: "in",
    hint: "trong (công viên)",
  },
  {
    prompt: "Last Sunday, my team won a small football ____.",
    answer: "match",
    hint: "trận đấu",
  },
  {
    prompt: "I need to buy new sports shoes ____ next week.",
    answer: "for",
    hint: "cho",
  },
  {
    prompt: "I don't like swimming because the water is ____ cold.",
    answer: "often",
    hint: "thường",
  },
  {
    prompt: "I think everyone should do exercise every ____.",
    answer: "day",
    hint: "ngày",
  },
];

export const lesson24Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,extraVocab: [
{
  term: "_____________ is very good for my health",
  meaning: "... rất tốt cho sức khỏe của tôi",
  example: "Doing sports is very good for my health.",
  alternatives: [
    "Doing sports is very good for my health",
    "Walking is very good for my health",
    "Swimming is very good for my health"
  ]
},

{
  term: "I like _____________ with _____________",
  meaning: "Tôi thích... với...",
  example: "I like playing badminton with my friends.",
  alternatives: [
    "playing badminton with my friends",
    "playing football with my brother",
    "going jogging with my father"
  ]
},

{
  term: "usually _____________ in the morning",
  meaning: "thường... vào buổi sáng",
  example: "I usually go jogging in the morning.",
  alternatives: [
    "usually goes jogging",
    "usually walks",
    "usually exercises",
    "usually runs"
  ]
},

{
  term: "go _____________",
  meaning: "đi...",
  example: "I go jogging.",
  alternatives: [
    "go jogging",
    "go running",
    "go swimming",
    "go cycling"
  ]
},

{
  term: "_____________",
  meaning: "ở...",
  example: "I go jogging in the park.",
  alternatives: [
    "in the park",
    "near my house",
    "at the gym",
    "at school"
  ]
},

{
  term: "Playing sports helps me _____________",
  meaning: "Chơi thể thao giúp tôi...",
  example: "Playing sports helps me stay healthy.",
  alternatives: [
    "reduce stress",
    "feel better",
    "stay healthy",
    "sleep well"
  ]
},

{
  term: "after _____________",
  meaning: "sau...",
  example: "I exercise after work.",
  alternatives: [
    "after a long day",
    "after work",
    "after school",
    "after exercise"
  ]
},

{
  term: "win _____________",
  meaning: "thắng...",
  example: "I want to win a football match.",
  alternatives: [
    "win a football match",
    "win a tennis game",
    "win a small competition"
  ]
},

{
  term: "buy _____________",
  meaning: "mua...",
  example: "I buy new sports shoes.",
  alternatives: [
    "buy new sports shoes",
    "buy comfortable shoes",
    "buy new clothes",
    "buy a new racket"
  ]
},

{
  term: "for _____________",
  meaning: "cho...",
  example: "I buy new sports shoes for next week.",
  alternatives: [
    "for next week",
    "for tomorrow",
    "for the weekend",
    "for my next game"
  ]
},

{
  term: "I don't like _____________",
  meaning: "Tôi không thích...",
  example: "I don't like swimming.",
  alternatives: [
    "swimming",
    "running",
    "playing football",
    "going to the gym"
  ]
},

{
  term: "because _____________",
  meaning: "vì...",
  example: "I don't like swimming because the water is cold.",
  alternatives: [
    "because the water is cold",
    "because it is difficult",
    "because it is tiring",
    "because it is expensive"
  ]
},

{
  term: "The water is often _____________",
  meaning: "Nước thường...",
  example: "The water is often cold.",
  alternatives: [
    "cold",
    "warm",
    "dirty",
    "clean"
  ]
},

{
  term: "I think _____________ should _____________",
  meaning: "Tôi nghĩ... nên...",
  example: "I think everyone should exercise.",
  alternatives: [
    "everyone should exercise",
    "everyone should walk every day",
    "people should play sports"
  ]
},

{
  term: "should _____________ every day",
  meaning: "nên... mỗi ngày",
  example: "Everyone should exercise every day.",
  alternatives: [
    "exercise every day",
    "drink enough water",
    "walk every day",
    "get enough sleep"
  ]
}

]
};