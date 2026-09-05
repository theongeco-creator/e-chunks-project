import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I usually get up at seven o'clock, but I sometimes get up earlier when I have a busy day. I have breakfast at half past seven before I go to work. I usually start work at eight o'clock and finish at five. I have lunch at twelve o'clock, and I usually have about one hour for lunch. After work, I go home and have dinner with my family. I check my timetable when I have a class or an appointment. I have to leave home early when I need to catch a bus or train. I usually make a plan for the next day before I go to bed.";

const translation =
  "Tôi thường thức dậy lúc bảy giờ, nhưng thỉnh thoảng tôi dậy sớm hơn khi có một ngày bận rộn. Tôi ăn sáng lúc bảy giờ rưỡi trước khi đi làm. Tôi thường bắt đầu làm việc lúc tám giờ và kết thúc lúc năm giờ. Tôi ăn trưa lúc mười hai giờ và thường có khoảng một tiếng để nghỉ trưa. Sau giờ làm, tôi về nhà và ăn tối cùng gia đình. Tôi thường kiểm tra thời gian biểu mỗi khi có lớp học hoặc một cuộc hẹn. Tôi phải rời nhà sớm khi cần bắt xe buýt hoặc tàu hỏa. Tôi thường lập kế hoạch cho ngày tiếp theo trước khi đi ngủ.";
  
const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "get up", type: "verb" },
  { text: " " },
  { text: "at seven o'clock", type: "time" },
  { text: " " },
  { text: ", but I " },
  { text: " " },
  { text: "sometimes", type: "time" },
  { text: " " },
  { text: "get up earlier", type: "verb" },
  { text: " " },
  { text: "when I" },
  { text: " " },
  { text: "have a busy day", type: "verb"  },
  { text: " " },
  { text: ". I "},
  { text: " " },
  { text: "have breakfast", type: "verb" },
  { text: " " },
  { text: "at half past seven", type: "time" },
  { text: " " },
  { text: "before I go to work" , type: "reason" },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "start work", type: "verb" },
  { text: " " },
  { text: "at eight o'clock and finish at five", type: "time" },
  { text: " " },
  { text: ". I " },
  { text: "have lunch", type: "verb" },
  { text: " " },
  { text: "at twelve o'clock", type: "time" },
  { text: " " },
  { text: ", and I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "have", type: "verb" },
  { text: " " },
  { text: "about one hour for lunch", type: "preposition" },
  { text: ". " },
  { text: "After work", type: "time" },
  { text: ", I " },
  { text: "go home and have dinner", type: "verb" },
  { text: " " },
  { text: "with my family", type: "preposition" },
  { text: " " },
  { text: ". I " },
  { text: "check", type: "verb" },
  { text: " " },
  { text: "my timetable", type: "noun" },
  { text: " " },
  { text: "when I" },
  { text: " " },
  { text: "have", type: "verb"  },
  { text: " " },
  { text: "a class or an appointment", type: "noun"  },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "have to leave home early", type: "verb" },
  { text: " when I " },
  { text: "need to", type: "verb" },
  { text: " " },
  { text: "catch a bus or train", type: "verb" },
  { text: " " },
  { text: ". I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "make a plan", type: "verb" },
  { text: " " },
  { text: "for the next day", type: "preposition" },
  { text: " " },
  { text: " before I go to bed.", type: "reason"  },
];

const chunks: Chunk[] = [
  // Time/Schedule chunks (purple)
  {
  phrase: "After work",
  pronunciation: "/ˈɑːftər wɜːrk/",
  meaning: "sau giờ làm",
  context: "Dùng AFTER WORK để nói về thời điểm sau khi kết thúc công việc.",
  type: "time",
},
{
  phrase: "sometimes",
  pronunciation: "/ˈsʌmtaɪmz/",
  meaning: "thỉnh thoảng",
  context: "Dùng SOMETIMES để nói về tần suất một hành động xảy ra.",
  type: "time",
},
  // Noun chunks (red)
  {
  phrase: "a class or an appointment",
  pronunciation: "/ə klɑːs ɔːr ən əˈpɔɪntmənt/",
  meaning: "một buổi học hoặc một cuộc hẹn",
  context: "Dùng để nói về một buổi học hoặc một cuộc hẹn đã được sắp xếp.",
  type: "noun",
},
{
  phrase: "my timetable",
  pronunciation: "/maɪ ˈtaɪmteɪbəl/",
  meaning: "thời gian biểu của tôi",
  context: "Dùng để nói về lịch trình hoặc thời gian biểu cá nhân.",
  type: "noun",
},
  // Verb chunks (green)
  {
    phrase: "go home and have dinner with my family",
    pronunciation: "/ɡəʊ həʊm ænd hæv ˈdɪnər wɪð maɪ ˈfæməli/",
    meaning: "Về nhà và ăn tối cùng gia đình",
    context: "Dùng để miêu tả hoạt động sum họp buổi tối.",
    type: "verb",
  },
  {
    phrase: "check my timetable",
    pronunciation: "/tʃek maɪ ˈtaɪmteɪbl/",
    meaning: "Kiểm tra thời khóa biểu / lịch trình của tôi",
    context: "Dùng để chỉ hành động xem trước kế hoạch thời gian.",
    type: "verb",
  },
  {
    phrase: "have to leave home early",
    pronunciation: "/hæv tuː liːv həʊm ˈɜːrli/",
    meaning: "Phải rời nhà sớm",
    context: "Dùng để chỉ sự cần thiết phải di chuyển sớm hơn bình thường.",
    type: "verb",
  },
  {
    phrase: "need to catch a bus or train",
    pronunciation: "/niːd tuː kætʃ ə bʌs ɔːr treɪn/",
    meaning: "Cần bắt xe buýt hoặc tàu",
    context: "Dùng để chỉ lý do cần đi lại bằng phương tiện công cộng.",
    type: "verb",
  },
  {
    phrase: "usually make a plan for the next day",
    pronunciation: "/ˈjuːʒuəli meɪk ə plæn fɔːr ðə nekst deɪ/",
    meaning: "Thường lập kế hoạch cho ngày hôm sau",
    context: "Dùng để chỉ thói quen sắp xếp công việc trước khi ngủ.",
    type: "verb",
  },
  {
  phrase: "get up earlier",
  pronunciation: "/ɡet ʌp ˈɜːrliər/",
  meaning: "dậy sớm hơn",
  context: "Dùng để nói về hành động thức dậy và rời khỏi giường sớm hơn thường lệ.",
  type: "verb",
},
{
  phrase: "get up",
  pronunciation: "/ɡet ʌp/",
  meaning: "thức dậy",
  context: "Dùng để nói về hành động thức dậy và rời khỏi giường.",
  type: "verb",
},
{
  phrase: "have breakfast",
  pronunciation: "/hæv ˈbrekfəst/",
  meaning: "ăn sáng",
  context: "Dùng để nói về hành động ăn bữa sáng.",
  type: "verb",
},
{
  phrase: "have lunch",
  pronunciation: "/hæv lʌntʃ/",
  meaning: "ăn trưa",
  context: "Dùng để nói về hành động ăn bữa trưa.",
  type: "verb",
},
{
  phrase: "have dinner",
  pronunciation: "/hæv ˈdɪnər/",
  meaning: "ăn tối",
  context: "Dùng để nói về hành động ăn bữa tối.",
  type: "verb",
},
{
  phrase: "have a busy day",
  pronunciation: "/hæv ə ˈbɪzi deɪ/",
  meaning: "có một ngày bận rộn",
  context: "Dùng để nói về việc có nhiều việc phải làm trong một ngày.",
  type: "verb",
},
{
  phrase: "check",
  pronunciation: "/tʃek/",
  meaning: "kiểm tra",
  context: "Dùng để nói về hành động kiểm tra hoặc xem lại một thứ gì đó.",
  type: "verb",
},
{
  phrase: "make a plan",
  pronunciation: "/meɪk ə plæn/",
  meaning: "lập kế hoạch",
  context: "Dùng để nói về hành động tạo ra một kế hoạch cho công việc hoặc hoạt động.",
  type: "verb",
},
  // Prepositional  chunks (pink)
  {
  phrase: "at seven o'clock",
  pronunciation: "/æt ˈsevən əˈklɒk/",
  meaning: "vào lúc bảy giờ",
  context: "Dùng AT trước một thời điểm cụ thể để nói một hành động xảy ra lúc mấy giờ.",
  type: "time",
},
{
  phrase: "at half past seven",
  pronunciation: "/æt hɑːf pɑːst ˈsevən/",
  meaning: "vào lúc bảy giờ rưỡi",
  context: "Dùng AT trước một thời điểm cụ thể để nói một hành động xảy ra lúc mấy giờ.",
  type: "time",
},
{
  phrase: "at eight o'clock and finish at five",
  pronunciation: "/æt eɪt əˈklɒk ænd ˈfɪnɪʃ æt faɪv/",
  meaning: "vào lúc tám giờ và kết thúc lúc năm giờ",
  context: "Dùng AT trước các thời điểm cụ thể để nói thời gian bắt đầu và kết thúc.",
  type: "time",
},
{
  phrase: "at twelve o'clock",
  pronunciation: "/æt twelv əˈklɒk/",
  meaning: "vào lúc mười hai giờ",
  context: "Dùng AT trước một thời điểm cụ thể để nói một hành động xảy ra lúc mấy giờ.",
  type: "time",
},
{
  phrase: "about one hour for lunch",
  pronunciation: "/əˈbaʊt wʌn ˈaʊər fər lʌntʃ/",
  meaning: "khoảng một giờ cho bữa trưa",
  context: "Dùng ABOUT để nói khoảng thời gian và FOR để nói khoảng thời gian dành cho một hoạt động.",
  type: "time",
},
{
  phrase: "for the next day",
  pronunciation: "/fər ðə nekst deɪ/",
  meaning: "cho ngày hôm sau",
  context: "Dùng FOR để nói về khoảng thời gian hoặc thời điểm mà một việc được chuẩn bị hoặc dành cho.",
  type: "preposition",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I usually get up ____ seven o'clock, but I sometimes get up earlier.",
    answer: "at",
    hint: "vào lúc (giờ)",
  },
  {
    prompt: "I have breakfast at half past seven before I go ____ work.",
    answer: "to",
    hint: "đi đến (nơi làm việc)",
  },
  {
    prompt: "I have lunch at twelve o'clock, and I usually have about one hour ____ lunch.",
    answer: "for",
    hint: "dành cho (bữa trưa)",
  },
  {
    prompt: "After work, I go home and have dinner ____ my family.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "I check my timetable when I have a class ____ an appointment.",
    answer: "or",
    hint: "hoặc",
  },
  {
    prompt: "I have to leave home early when I need to catch a bus ____ train.",
    answer: "or",
    hint: "hoặc",
  },
  {
    prompt: "I usually make a plan for the next day before I go ____ bed.",
    answer: "to",
    hint: "đi ngủ",
  },
];



export const lesson26Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I usually get up at _____________",
  meaning: "Tôi thường thức dậy lúc...",
  example: "I usually get up at seven o'clock.",
  alternatives: [
    "seven o'clock",
    "half past six",
    "eight o'clock",
    "nine o'clock"
  ]
},

{
  term: "I sometimes _____________",
  meaning: "Đôi khi tôi...",
  example: "I sometimes get up earlier when I have a busy day.",
  alternatives: [
    "get up earlier",
    "get up later",
    "go to bed earlier",
    "go to bed later"
  ]
},

{
  term: "when I have _____________",
  meaning: "khi tôi có...",
  example: "I get up earlier when I have an early meeting.",
  alternatives: [
    "a busy day",
    "a class",
    "an appointment",
    "an early meeting"
  ]
},

{
  term: "before I _____________",
  meaning: "trước khi tôi...",
  example: "I check my phone before I go to work.",
  alternatives: [
    "go to work",
    "go to school",
    "leave home",
    "go to bed"
  ]
},

{
  term: "I start work at _____________",
  meaning: "Tôi bắt đầu làm việc lúc...",
  example: "I start work at eight o'clock.",
  alternatives: [
    "eight o'clock",
    "nine o'clock",
    "half past eight"
  ]
},

{
  term: "I finish work at _____________",
  meaning: "Tôi kết thúc công việc lúc...",
  example: "I finish work at five.",
  alternatives: [
    "five",
    "six",
    "half past five"
  ]
},

{
  term: "I have lunch at _____________",
  meaning: "Tôi ăn trưa lúc...",
  example: "I have lunch at twelve o'clock.",
  alternatives: [
    "twelve o'clock",
    "half past twelve",
    "one o'clock"
  ]
},

{
  term: "I have about _____________ for _____________",
  meaning: "Tôi có khoảng... cho...",
  example: "I have about one hour for lunch.",
  alternatives: [
    "one hour for lunch",
    "thirty minutes for breakfast",
    "two hours for work"
  ]
},

{
  term: "After work, I _____________",
  meaning: "Sau giờ làm, tôi...",
  example: "After work, I go home.",
  alternatives: [
    "go home",
    "go shopping",
    "go to the gym",
    "meet my friends"
  ]
},

{
  term: "I have dinner with _____________",
  meaning: "Tôi ăn tối với...",
  example: "I have dinner with my family.",
  alternatives: [
    "my family",
    "my friends",
    "my colleagues",
    "my sister"
  ]
},

{
  term: "I check my _____________",
  meaning: "Tôi kiểm tra...",
  example: "I check my timetable every morning.",
  alternatives: [
    "timetable",
    "schedule",
    "calendar",
    "plans"
  ]
},

{
  term: "when I have _____________",
  meaning: "khi tôi có...",
  example: "I check my schedule when I have a meeting.",
  alternatives: [
    "a class",
    "an appointment",
    "a meeting",
    "a train"
  ]
},

{
  term: "I have to _____________",
  meaning: "Tôi phải...",
  example: "I have to leave early when I need to catch a train.",
  alternatives: [
    "leave early",
    "wake up early",
    "go to work",
    "catch a bus"
  ]
},

{
  term: "I leave home _____________",
  meaning: "Tôi rời nhà...",
  example: "I leave home early on busy days.",
  alternatives: [
    "early",
    "at seven",
    "after breakfast"
  ]
},

{
  term: "when I need to _____________",
  meaning: "khi tôi cần...",
  example: "I leave home early when I need to catch a bus.",
  alternatives: [
    "catch a bus",
    "catch a train",
    "go to work",
    "arrive on time"
  ]
},

{
  term: "I catch a _____________",
  meaning: "Tôi bắt...",
  example: "I catch a bus to work every morning.",
  alternatives: [
    "bus",
    "train",
    "flight"
  ]
},

{
  term: "I make a plan for _____________",
  meaning: "Tôi lập kế hoạch cho...",
  example: "I make a plan for the next day before I go to bed.",
  alternatives: [
    "the next day",
    "the weekend",
    "next week",
    "tomorrow"
  ]
},

{
  term: "before I go to _____________",
  meaning: "trước khi tôi đi...",
  example: "I make a plan before I go to bed.",
  alternatives: [
    "bed",
    "sleep",
    "leave home"
  ]
}
]
};