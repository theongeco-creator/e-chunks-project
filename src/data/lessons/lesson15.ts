import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "My birthday is on October 8th, and I usually celebrate it with my family. I was born in 2000, so I am twenty-six years old now. My favorite date is my birthday because I get together with my family. I usually have a small party and eat a birthday cake. There are four people in my family, including me. I usually spend about two hours a day studying English. I often make plans for the week and write important dates in my notebook. I think dates and numbers are important in our daily life.";

const translation =
"Sinh nhật của tôi là vào ngày 8 tháng 10, và tôi thường ăn mừng cùng với gia đình. Tôi sinh năm 2000, vì vậy bây giờ tôi 26 tuổi. Ngày yêu thích nhất của tôi là ngày sinh nhật vì đó là dịp tôi được sum họp bên gia đình. Tôi thường tổ chức một bữa tiệc nhỏ và ăn bánh sinh nhật. Gia đình tôi có bốn người, tính cả tôi. Tôi thường dành khoảng hai tiếng mỗi ngày để học tiếng Anh. Tôi thường lên kế hoạch cho cả tuần và ghi lại những ngày quan trọng vào sổ tay. Tôi nghĩ ngày tháng và các con số rất quan trọng trong cuộc sống hằng ngày của chúng ta.";

const readingSegments: ReadingSegment[] = [
  { text: "My birthday" },
  { text: " is" },
  { text: " " },
  { text: "on October 8th", type: "preposition" },
  { text: " " },
  { text: ", and I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "celebrate", type: "verb" },
  { text: " " },
  { text: "it" },
  { text: " " },
  { text: "with my family", type: "preposition" },
  { text: " " },
  { text: ". I " },
  { text: "was born", type: "verb" },
  { text: " " },
  { text: "in 2000", type: "preposition" },
  { text: " " },
  { text: ", so I am " },
  { text: "twenty-six years old", type: "adjective" },
  { text: " " },
  { text: "now.", type: "time" },
  { text: " " },
  { text: "My favorite date" },
  { text: " " },
  { text: " is" , type: "verb" },
  { text: " " },
  { text: "my birthday", type:"noun" },
  { text: " " },
  { text: "because I get together with my family", type: "reason" },
  { text: " " },
  { text: ". I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "have a small party", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "eat a birthday cake", type: "verb" },
  { text: ". " },
  { text: "There are", type: "verb" },
  { text: " " },
  { text: "four people", type: "noun" },
  { text: " " },
  { text: " in my family", type: "preposition" },
  { text: " " },
  { text: "including me", type: "preposition" },
  { text: " . " },
  { text: "I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "spend", type: "verb" },
  { text: " " },
  { text: "about two hours a day", type: "time" },
  { text: " " },
  { text: "studying English", type: "verb" },
  { text: ". I often " },
  { text: "make plans", type: "verb" },
  { text: " " },
  { text: "for the week", type: "preposition" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "write", type: "verb" },
  { text: " " },
  { text: "important dates", type: "noun" },
  { text: " " },
  { text: "in my notebook", type:"preposition" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "think", type:"verb" },
  { text: " " },
  { text: "dates and numbers", type: "noun" },
  { text: " " },
  { text: " are ", type: "verb" },
  { text: " " },
  { text: "important", type: "adjective" },
  { text: " " },
  { text: "in our daily life", type: "preposition" },
  { text: "." },
];

  const chunks: Chunk[] = [
    // Verb chunks (green)
        {
      phrase: "celebrate",
      pronunciation: "/ˈseləbreɪt/",
      meaning: "kỷ niệm/làm lễ mừng",
      context: "tổ chức dịp đặc biệt nào đó",
      type: "verb",
    },
    {
      phrase: "was born in 2000",
      pronunciation: "/wəz bɔːrn ɪn ˈtuː ˈθaʊznd/",
      meaning: "Sinh năm 2000",
      context: "Dùng để giới thiệu năm sinh cá nhân.",
      type: "verb",
    },
    {
    phrase: "get together",
    pronunciation: "/ɡet təˈɡeðər/",
    meaning: "Tụ họp, gặp gỡ",
    context: "Dùng để chỉ việc gặp mặt, tụ tập với bạn bè hoặc người thân",
    type: "verb",
    },
    {
      phrase: "have a small party and eat a birthday cake",
      pronunciation: "/hæv ə smɔːl ˈpɑːrti ænd iːt ə ˈbɜːrθdeɪ keɪk/",
      meaning: "tổ chức tiệc nhỏ và ăn bánh sinh nhật",
      context: "Dùng để miêu tả hoạt động trong ngày sinh nhật.",
      type: "verb",
    },
    {
      phrase: "studying English",
      pronunciation: "/ˈstʌdiɪŋ ˈɪŋɡlɪʃ/",
      meaning: "Học tiếng Anh",
      context: "Dùng để chỉ hoạt động trau dồi ngôn ngữ.",
      type: "verb",
    },
    {
      phrase: "make plans",
      pronunciation: "/meɪk plænz/",
      meaning: "Lập kế hoạch",
      context: "Dùng để chỉ thói quen sắp xếp công việc cá nhân.",
      type: "verb",
    },
      {
      phrase: "spend ",
      pronunciation: "/spɛnd/",
      meaning: "dành thời gian",
      context: "Dùng để chỉ thói quen dành thời gian làm gì đó.",
      type: "verb",
    },
    // Adjective chunks (blue)
    {
      phrase: "twenty-six years old",
      pronunciation: "/ˈtwenti sɪks jɪrz əʊld/",
      meaning: "26 tuổi",
      context: "Dùng để nói về độ tuổi hiện tại.",
      type: "adjective",
    },
    {
      phrase: "important",
      pronunciation: "/ɪmˈpɔːrtnt/",
      meaning: "Quan trọng",
      context: "Dùng để đánh giá tầm quan trọng của một khía cạnh nào đó.",
      type: "adjective",
    },
    // Noun chunks (red)
    {
      phrase: "My favorite date",
      pronunciation: "/maɪ ˈfeɪvərɪt deɪt/",
      meaning: "Ngày yêu thích của tôi",
      context: "Dùng để chỉ mốc thời gian đặc biệt nhất trong năm.",
      type: "noun",
    },
    {
      phrase: "There are four people",
      pronunciation: "/ðeər ɑːr fɔːr ˈpiːpl/",
      meaning: "Có bốn người",
      context: "Dùng để nói về số lượng thành viên.",
      type: "noun",
    },
    {
      phrase: "dates and numbers",
      pronunciation: "/deɪts ænd ˈnʌmbərz/",
      meaning: "Ngày tháng và con số",
      context: "Dùng để chỉ các yếu tố thời gian và số liệu.",
      type: "noun",
    },
    // Time chunks (purple)
    {
      phrase: "about two hours a day",
      pronunciation: "/əˈbaʊt tuː ˈaʊərz ə deɪ/",
      meaning: "khoảng hai tiếng mỗi ngày",
      context: "Dùng để chỉ ước lượng thời gian.",
      type: "time",
    },
    // Prepositional Chunk (pink)
    {
      phrase: "on October 8th",
      pronunciation: "/ɒn ɒkˈtəʊbə 8th/",
      meaning: "Vào ngày 8 tháng 10",
      context: "Dùng ON trước ngày + tháng cụ thể.",
      type: "preposition",
    },
    {
      phrase: "in 2000",
      pronunciation: "/ɒn ɒkˈtəʊbə 8th/",
      meaning: "vào năm 2000",
      context: "dùng IN đứng trước Năm (in 2000), Tháng (in October) hoặc Thế kỷ",
      type: "preposition",
    },
        {
      phrase: "including me",
      pronunciation: "/ɪnˈkluːdɪŋ miː/",
      meaning: "bao gồm cả tôi",
      context: "dùng để nói rằng tôi cũng nằm trong nhóm/người được nhắc đến",
      type: "preposition",
    },
    // Reason chunks (yellow)
    {
      phrase: "because",
      pronunciation: "/bɪˈkɒz/",
      meaning: "Bởi vì",
      context: "Dùng để giải thích lý do yêu thích ngày sinh nhật.",
      type: "reason",
    },
  ];

const practice: FillBlankQuestion[] = [
  {
    prompt: "My birthday is ____ October 8th, and I usually celebrate it with my family.",
    answer: "on",
    hint: "vào (ngày)",
  },
  {
    prompt: "I was born ____ 2000, so I am twenty-six years old now.",
    answer: "in",
    hint: "vào (năm)",
  },
  {
    prompt: "My favorite date is my birthday because I get together ____ my family.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "There are four people in my family, including ____.",
    answer: "me",
    hint: "tôi",
  },
  {
    prompt: "I usually spend about two hours ____ day studying English.",
    answer: "a",
    hint: "mỗi (ngày)",
  },
  {
    prompt: "I often make plans for the week and write important dates ____ my notebook.",
    answer: "in",
    hint: "trong",
  },
  {
    prompt: "I think dates and numbers are important ____ our daily life.",
    answer: "in",
    hint: "trong",
  },
];

export const lesson15Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "My birthday is on _____________",
  meaning: "Sinh nhật của tôi vào ngày...",
  example: "My birthday is on May 11th.",
  alternatives: ["May 11th", "June 20th", "December 5th", "January 1st"]
},

{
  term: "I usually celebrate it with _____________",
  meaning: "Tôi thường tổ chức nó với...",
  example: "I usually celebrate it with my family.",
  alternatives: [
    "my family",
    "my friends",
    "my classmates",
    "my parents"
  ]
},

{
  term: "I was born in _____________",
  meaning: "Tôi sinh năm...",
  example: "I was born in 1997.",
  alternatives: ["1997", "2000", "2005", "2010"]
},

{
  term: "I am _____________ years old now",
  meaning: "Bây giờ tôi ... tuổi",
  example: "I am twenty-nine years old now.",
  alternatives: [
    "twenty-nine years old now",
    "twenty-five years old now",
    "thirty years old now"
  ]
},

{
  term: "My favorite date is _____________",
  meaning: "Ngày yêu thích của tôi là...",
  example: "My favorite date is my birthday.",
  alternatives: [
    "my birthday",
    "New Year's Day",
    "December 25th",
    "May 1st"
  ]
},

{
  term: "because I _____________",
  meaning: "vì tôi...",
  example: "I like my birthday because I get together with my family.",
  alternatives: [
    "get together with my family",
    "meet my friends",
    "have a party",
    "have a day off"
  ]
},

{
  term: "get together with _____________",
  meaning: "tụ họp với...",
  example: "I get together with my family.",
  alternatives: [
    "my family",
    "my relatives",
    "my friends",
    "my classmates"
  ]
},

{
  term: "I usually have a _____________",
  meaning: "Tôi thường có / tổ chức một...",
  example: "I usually have a small party.",
  alternatives: [
    "small party",
    "birthday party",
    "family dinner",
    "meeting"
  ]
},

{
  term: "eat _____________",
  meaning: "ăn...",
  example: "I eat a birthday cake.",
  alternatives: [
    "a birthday cake",
    "a big meal",
    "special food",
    "some snacks"
  ]
},

{
  term: "There are _____________ people in my family",
  meaning: "Có ... người trong gia đình tôi",
  example: "There are four people in my family.",
  alternatives: [
    "four people",
    "five people",
    "six people"
  ]
},

{
  term: "I usually spend _____________",
  meaning: "Tôi thường dành...",
  example: "I usually spend about two hours a day studying English.",
  alternatives: [
    "time learning English",
    "about two hours a day studying English",
    "one hour reading books",
    "thirty minutes exercising"
  ]
},

{
  term: "about _____________ hours a day",
  meaning: "khoảng ... tiếng mỗi ngày",
  example: "I study English about two hours a day.",
  alternatives: [
    "about one hour a day",
    "about two hours a day",
    "about three hours a day"
  ]
},

{
  term: "I often make plans for _____________",
  meaning: "Tôi thường lập kế hoạch cho...",
  example: "I often make plans for the week.",
  alternatives: [
    "the week",
    "the month",
    "the weekend",
    "my holiday"
  ]
},

{
  term: "write _____________ in my notebook",
  meaning: "viết ... vào sổ",
  example: "I write important dates in my notebook.",
  alternatives: [
    "important dates",
    "my plans",
    "new words",
    "my schedule"
  ]
},

{
  term: "I think _____________ important",
  meaning: "Tôi nghĩ ... quan trọng",
  example: "I think dates are important.",
  alternatives: [
    "dates are important",
    "numbers are important",
    "time is important"
  ]
}

]
};