import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "Hi everyone, nice to meet you! My name is Linh, but you can call me Ann. I live in Saigon with my family. I work as a designer at a small company. In my free time, I like listening to music and cooking. On weekends, I usually hang out with my friends. I want to learn English to get a better job. Have a great day!";

const translation =
"Xin chào mọi người, rất vui được gặp các bạn! Tôi tên là Linh, nhưng bạn có thể gọi tôi là Ann. Tôi sống ở Sài Gòn cùng với gia đình. Tôi làm thiết kế tại một công ty nhỏ. Vào thời gian rảnh, tôi thích nghe nhạc và nấu ăn. Vào cuối tuần, tôi thường đi chơi với bạn bè. Tôi muốn học tiếng Anh để có một công việc tốt hơn. Chúc mọi người một ngày tuyệt vời!";
const readingSegments: ReadingSegment[] = [
  { text: "Hi everyone, nice to meet you!" },
  { text: " " },
{ text: "My name " },
{ text: "is", type: "verb" },
{ text: " " },
{ text: "Linh", type: "noun" },
{ text: " , " },
{ text: "but you can call me Ann. " },
{ text: "I " },
{ text: "live", type: "verb" },
{ text: " " },
{ text: "in Saigon", type: "preposition" },
{ text: " " },
{ text: "with my family", type: "preposition" },
{ text: ". " },
{ text: "I " },
{ text: "work", type: "verb" },
{ text: " " },
{ text: "as a designer", type: "preposition" },
{ text: " " },
{ text: "at a small company", type: "preposition" },
{ text: ". " },
{ text: "In my free time", type: "time" },
{ text: ", " },
{ text: "I " },
{ text: "like", type: "verb" },
{ text: " " },
{ text: "listening to music and cooking.", type: "noun" },
{ text: "On weekends", type: "time" },
{ text: ", " },
{ text: "I " },
{ text: "usually", type: "time" },
{ text: " " },
{ text: "hang out", type: "verb" },
{ text: " " },
{ text: "with my friends", type: "preposition" },
{ text: ". " },
{ text: "I " },
{ text: "want to learn English", type: "verb" },
{ text: " " },
{ text: "to get a better job" , type: "verb" },
{ text: ". " },
{ text: "Have a great day!" }
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "can call me",
    pronunciation: "/kæn kɔːl miː/",
    meaning: "Có thể gọi tôi là...",
    context: "Dùng để giới thiệu tên gọi hoặc biệt danh.",
    type: "verb",
  },
  {
    phrase: "live in",
    pronunciation: "/lɪv ɪn/",
    meaning: "Sống ở (thành phố/quốc gia)",
    context: "Dùng để nói nơi bạn sinh sống.",
    type: "verb",
  },
  {
    phrase: "work",
    pronunciation: "/wɜːk æz/",
    meaning: "Làm việc",
    context: "Dùng để giới thiệu nghề nghiệp của mình.",
    type: "verb",
  },
  {
    phrase: "like",
    pronunciation: "/laɪk/",
    meaning: "Thích",
    context: "Dùng để nói về sở thích.",
    type: "verb",
  },
  {
    phrase: "hang out",
    pronunciation: "/hæŋ aʊt/",
    meaning: "Đi chơi cùng với",
    context: "Dùng khi nói về việc đi chơi với bạn bè.",
    type: "verb",
  },
  {
    phrase: "want to learn",
    pronunciation: "/wɒnt tə lɜːn/",
    meaning: "Muốn học",
    context: "Dùng để diễn đạt mong muốn học hỏi một kỹ năng.",
    type: "verb",
  },
  // Prepositional chunks (pink)
  {
    phrase: "in Saigon",
    pronunciation: "/ɪn saɪɡɒn/",
    meaning: "Ở Sài Gòn",
    context: "Dùng để chỉ địa điểm sinh sống hoặc ở.",
    type: "preposition",
  },
  {
    phrase: "at a small company",
    pronunciation: "/æt ə smɔːl ˈkʌmpəni/",
    meaning: "Ở một công ty nhỏ",
    context: "Dùng để chỉ nơi làm việc.",
    type: "preposition",
  },
  {
  phrase: "with my family",
  pronunciation: "/wɪð maɪ ˈfæməli/",
  meaning: "với gia đình của tôi",
  context: "Dùng WITH để nói về người cùng mình thực hiện một hoạt động.",
  type: "preposition",
},
{
  phrase: "with my friends",
  pronunciation: "/wɪð maɪ frendz/",
  meaning: "với bạn bè của tôi",
  context: "Dùng WITH để nói về người cùng mình thực hiện một hoạt động.",
  type: "preposition",
},
  // Time & frequency chunks (purple)
  {
    phrase: "In my free time",
    pronunciation: "/ɪn maɪ friː taɪm/",
    meaning: "Trong thời gian rảnh",
    context: "Dùng để nói về khoảng thời gian nhàn rỗi.",
    type: "time",
  },
  {
    phrase: "On weekends",
    pronunciation: "/ɒn ˈwiːkendz/",
    meaning: "Vào cuối tuần",
    context: "Dùng để chỉ tần suất hoặc thời điểm theo tuần.",
    type: "time",
  },
  {
    phrase: "usually",
    pronunciation: "/ˈjuːʒʊəli/",
    meaning: "Thường xuyên",
    context: "Dùng để diễn đạt thói quen lặp đi lặp lại.",
    type: "time",
  },
  
  // Noun chunks (red)
  {
    phrase: "Hi everyone",
    pronunciation: "/haɪ ˈevriwʌn/",
    meaning: "Chào mọi người",
    context: "Dùng để chào hỏi một nhóm người.",
    type: "noun",
  },
  {
    phrase: "My name is Linh",
    pronunciation: "/maɪ neɪm ɪz lɪn/",
    meaning: "Tên tôi là Linh",
    context: "Dùng để giới thiệu tên đầy đủ của mình.",
    type: "noun",
  },
  {
    phrase: "as a designer",
    pronunciation: "/dɪˈzaɪnər/",
    meaning: "Nhà thiết kế",
    context: "Dùng để chỉ nghề nghiệp trong lĩnh vực thiết kế.",
    type: "preposition",
  },
  {
    phrase: "a small company",
    pronunciation: "/ə smɔːl ˈkʌmpəni/",
    meaning: "Một công ty nhỏ",
    context: "Dùng để chỉ quy mô nơi làm việc.",
    type: "noun",
  },
  {
    phrase: "listening  to music and cooking",
    pronunciation: "/ˈmjuːzɪk ænd ˈkʊkɪŋ/",
    meaning: "Âm nhạc và nấu ăn",
    context: "Dùng để liệt kê các sở thích.",
    type: "noun",
  },
  {
    phrase: "a better job",
    pronunciation: "/ə ˈbetər dʒɒb/",
    meaning: "Một công việc tốt hơn",
    context: "Dùng để chỉ mục tiêu nghề nghiệp.",
    type: "noun",
  },
  {
  phrase: "listening to music",
  pronunciation: "/ˈlɪsənɪŋ tə ˈmjuːzɪk/",
  meaning: "việc nghe nhạc",
  context: "Dùng để nói về hoạt động nghe nhạc.",
  type: "noun",
},
  // Adjective chunks (blue)
  {
    phrase: "free",
    pronunciation: "/friː/",
    meaning: "Rảnh rỗi",
    context: "Dùng để miêu tả thời gian không bận rộn.",
    type: "adjective",
  },
  {
    phrase: "better",
    pronunciation: "/ˈbetər/",
    meaning: "Tốt hơn",
    context: "Dùng để so sánh chất lượng cao hơn.",
    type: "adjective",
  },
  {
    phrase: "great",
    pronunciation: "/ɡreɪt/",
    meaning: "Tuyệt vời",
    context: "Dùng để miêu tả điều tốt đẹp, ấn tượng.",
    type: "adjective",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "Hi everyone, ____ you!",
    answer: "nice to meet",
    hint: "Rất vui được gặp",
  },
  {
    prompt: "My name is Linh, but you ____ Ann.",
    answer: "can call me",
    hint: "có thể gọi tôi là",
  },
  {
    prompt: "I ____ Saigon with my family.",
    answer: "live in",
    hint: "sống ở",
  },
  {
    prompt: "I ____ a designer at a small company.",
    answer: "work as",
    hint: "làm nghề / làm việc với tư cách là",
  },
  {
    prompt: "In my free time, I ____ listening to music and cooking.",
    answer: "like",
    hint: "thích",
  },
  {
    prompt: "On weekends, I usually ____ with my friends.",
    answer: "hang out",
    hint: "đi chơi / tụ tập",
  },
  {
    prompt: "I want to learn English to ____ job.",
    answer: "get a better",
    hint: "có được một công việc tốt hơn",
  },
  {
    prompt: "____ a great day!",
    answer: "Have",
    hint: "Chúc (một ngày tuyệt vời)",
  },
];

export const lesson01Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,

};
