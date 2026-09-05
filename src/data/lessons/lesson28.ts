import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I always try to be careful when I am outside. I look both ways before I cross the road. I wear a helmet when I ride a motorbike or bicycle. I keep my phone with me when I go to a new place. If I get lost, I call my family or ask someone for help. If I see an accident, I call the police or an ambulance. At home, I keep dangerous things away from children. I think everyone should learn some simple safety rules.";

const translation =
    "Tôi luôn cố gắng cẩn thận khi ở ngoài đường. Tôi quan sát cả hai bên trước khi sang đường. Tôi đội mũ bảo hiểm khi đi xe máy hoặc xe đạp. Tôi luôn mang theo điện thoại bên mình khi đi đến một nơi mới. Nếu bị lạc, tôi sẽ gọi cho gia đình hoặc nhờ ai đó giúp đỡ. Nếu nhìn thấy một vụ tai nạn, tôi sẽ gọi cho cảnh sát hoặc xe cấp cứu. Ở nhà, tôi để những đồ vật nguy hiểm tránh xa tầm tay trẻ em. Tôi nghĩ mọi người đều nên học một vài quy tắc an toàn cơ bản.";
  
const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: " " },
  { text: "always", type: "time" },
  { text: " " },
  { text: "try to be", type: "verb"  },
  { text: " " },
  { text: "careful", type: "adjective"  },
  { text: " " },
  { text: "when I am outside" , type: "reason" },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "look", type: "verb" },
  { text: " " },
  { text: "both ways", type: "noun" },
  { text: " " },
  { text: "before I"},
  { text: " " },
  { text: "cross", type: "verb" },
  { text: " " },
  { text: "the road", type: "noun" },
  { text: " " },
  { text: ". I " },
  { text: "wear a helmet", type: "verb" },
  { text: " " },
  { text: "when I" },
  { text: " " },
  { text: "ride a motorbike or bicycle", type: "verb"  },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "keep my phone", type: "verb" },
  { text: " " },
  { text: "with me", type: "preposition" },
  { text: " " },
  { text: "when I" },
  { text: " " },
  { text: "go to", type: "verb"  },
  { text: " " },
  { text: "a new place", type: "noun" },
  { text: " " },
  { text: ". If I" },
  { text: " " },
  { text: "get lost", type: "verb" },
  { text: " " },
  { text: ", I " },
  { text: " " },
  { text: "call my family", type: "verb" },
  { text: " " },
  { text: "or" },
  { text: " " },
  { text: "ask someone for help", type: "verb" },
  { text: " " },
  { text: ". If I" },
  { text: " " },
  { text: "see", type: "verb"  },
  { text: " " },
  { text: "an accident" , type: "noun" },
  { text: " " },
  { text: ", I " },
  { text: " " },
  { text: "call the police or an ambulance", type: "verb" },
  { text: ". " },
  { text: "At home", type: "preposition" },
  { text: ", I " },
  { text: "keep", type: "verb" },
  { text: " " },
  { text: "dangerous things", type: "noun" },
  { text: " " },
  { text: "away from children", type: "preposition" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "think", type: "verb"  },
  { text: " " },
    { text: "everyone", type: "noun"  },
  { text: " " },
  { text: "should learn", type: "verb"  },
  { text: " " },
  { text: "some simple safety rules", type: "noun" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "look both ways before I cross the road",
    pronunciation: "/lʊk bəʊθ weɪz bɪˈfɔːr aɪ krɒs ðə rəʊd/",
    meaning: "Nhìn cả hai hướng trước khi sang đường",
    context: "Dùng để chỉ quy tắc an toàn giao thông cơ bản.",
    type: "verb",
  },
  {
    phrase: "wear a helmet",
    pronunciation: "/weər ə ˈhelmɪt/",
    meaning: "Đội mũ bảo hiểm",
    context: "Dùng để nói về việc bảo vệ đầu khi lái xe.",
    type: "verb",
  },
  {
  phrase: "ride a motorbike or bicycle",
  pronunciation: "/raɪd ə ˈməʊtəbaɪk ɔːr ˈbaɪsɪkəl/",
  meaning: "đi xe máy hoặc xe đạp",
  context: "Dùng để nói về hành động đi hoặc điều khiển xe máy hay xe đạp.",
  type: "verb",
},
{
  phrase: "get lost",
  pronunciation: "/ɡet lɒst/",
  meaning: "bị lạc",
  context: "Dùng để nói về tình huống không biết mình đang ở đâu hoặc không biết đường đi.",
  type: "verb",
},
{
  phrase: "see an accident",
  pronunciation: "/siː ən ˈæksɪdənt/",
  meaning: "nhìn thấy một vụ tai nạn",
  context: "Dùng để nói về hành động nhìn thấy một vụ tai nạn.",
  type: "verb",
},
{
  phrase: "should learn",
  pronunciation: "/ʃʊd lɜːrn/",
  meaning: "nên học",
  context: "Dùng SHOULD + động từ để đưa ra lời khuyên hoặc nói về điều nên làm.",
  type: "verb",
},
{
  phrase: "try to be careful",
  pronunciation: "/traɪ tə bi ˈkeəfəl/",
  meaning: "cố gắng cẩn thận (be = trở nên hoặc giữ cho mình hoặc ở trong trạng thái ",
  context: "Dùng TRY + TO BE + tính từ để nói về việc cố gắng ở một trạng thái hoặc có một đặc điểm nào đó.",
  type: "verb",
},
  {
    phrase: "keep my phone with me",
    pronunciation: "/kiːp maɪ fəʊn wɪð miː/",
    meaning: "Mang theo điện thoại bên mình",
    context: "Dùng để giữ liên lạc khi ra ngoài.",
    type: "verb",
  },
  {
    phrase: "call my family or ask someone for help",
    pronunciation: "/kɔːl maɪ ˈfæməli ɔːr ɑːsk ˈsʌmwʌn fɔːr help/",
    meaning: "Gọi cho gia đình hoặc nhờ ai đó giúp đỡ",
    context: "Dùng để xử lý tình huống khi gặp rắc rối hoặc bị lạc.",
    type: "verb",
  },
  {
    phrase: "call the police or an ambulance",
    pronunciation: "/kɔːl ðə pəˈliːs ɔːr ən ˈæmbjələns/",
    meaning: "Gọi cảnh sát hoặc xe cấp cứu",
    context: "Dùng để xử lý tình huống khẩn cấp hoặc tai nạn.",
    type: "verb",
  },
  {
    phrase: "keep dangerous things away from children",
    pronunciation: "/kiːp ˈdeɪndʒərəs θɪŋz əˈweɪ frəm ˈtʃɪldrən/",
    meaning: "Để những vật nguy hiểm tránh xa tầm tay trẻ em",
    context: "Dùng để chỉ quy tắc an toàn khi ở nhà.",
    type: "verb",
  },
  // Time chunks (purple)
  {
    phrase: "always",
    pronunciation: "/ˈɔːlweɪz/",
    meaning: "Luôn luôn",
    context: "Dùng để chỉ mức độ thường xuyên của thói quen cẩn trọng.",
    type: "time",
  },
  // Prepositional chunks (pink)
  {
    phrase: "At home",
    pronunciation: "/æt həʊm/",
    meaning: "Ở nhà",
    context: "Dùng để chỉ không gian sinh hoạt trong gia đình.",
    type: "preposition",
  },
  {
  phrase: "away from children",
  pronunciation: "/əˈweɪ frəm ˈtʃɪldrən/",
  meaning: "xa trẻ em",
  context: "Dùng AWAY FROM để nói về việc giữ một người hoặc vật ở xa một người, vật hoặc địa điểm.",
  type: "preposition",
},
  // Noun chunks (red)
  {
  phrase: "the road",
  pronunciation: "/ðə rəʊd/",
  meaning: "con đường",
  context: "Dùng để nói về con đường hoặc phần đường đã được xác định.",
  type: "noun",
},
{
  phrase: "both ways",
  pronunciation: "/bəʊθ weɪz/",
  meaning: "cả hai phía",
  context: "Dùng để nói về hai hướng hoặc hai phía.",
  type: "noun",
},
{
  phrase: "a new place",
  pronunciation: "/ə njuː pleɪs/",
  meaning: "một nơi mới",
  context: "Dùng để nói về một địa điểm mới hoặc chưa quen thuộc.",
  type: "noun",
},
{
  phrase: "an accident",
  pronunciation: "/ən ˈæksɪdənt/",
  meaning: "một vụ tai nạn",
  context: "Dùng để nói về một sự việc bất ngờ gây ra thiệt hại hoặc thương tích.",
  type: "noun",
},
{
  phrase: "dangerous things",
  pronunciation: "/ˈdeɪndʒərəs θɪŋz/",
  meaning: "những thứ nguy hiểm",
  context: "Dùng để nói về những đồ vật hoặc thứ có thể gây nguy hiểm.",
  type: "noun",
},
{
  phrase: "some simple safety rules",
  pronunciation: "/sʌm ˈsɪmpəl ˈseɪfti ruːlz/",
  meaning: "một số quy tắc an toàn đơn giản",
  context: "Dùng để nói về một số quy tắc cơ bản giúp mọi người giữ an toàn.",
  type: "noun",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I always try to be careful when I am ____.",
    answer: "outside",
    hint: "ở bên ngoài",
  },
  {
    prompt: "I look both ways before I cross ____ road.",
    answer: "the",
    hint: "con đường",
  },
  {
    prompt: "I wear a helmet when I ride a motorbike ____ bicycle.",
    answer: "or",
    hint: "hoặc",
  },
  {
    prompt: "If I get lost, I call my family or ask someone ____ help.",
    answer: "for",
    hint: "để (nhờ giúp đỡ)",
  },
  {
    prompt: "If I see an accident, I call the police ____ an ambulance.",
    answer: "or",
    hint: "hoặc",
  },
  {
    prompt: "At home, I keep dangerous things away ____ children.",
    answer: "from",
    hint: "tránh xa (ai đó)",
  },
  {
    prompt: "I think everyone should learn some simple safety ____.",
    answer: "rules",
    hint: "quy tắc",
  },
];

export const lesson28Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "try to _____________",
  meaning: "cố gắng...",
  example: "I try to be careful when I am outside.",
  alternatives: [
    "be careful",
    "stay safe",
    "be calm"
  ]
},

{
  term: "be careful when _____________",
  meaning: "cẩn thận khi...",
  example: "I am careful when I cross the road.",
  alternatives: [
    "I am outside",
    "I cross the road",
    "I ride a motorbike",
    "I travel"
  ]
},

{
  term: "look both ways before _____________",
  meaning: "nhìn cả hai phía trước khi...",
  example: "I look both ways before I cross the road.",
  alternatives: [
    "I cross the road",
    "I cross the street",
    "I turn left"
  ]
},

{
  term: "cross _____________",
  meaning: "băng qua...",
  example: "I cross the road carefully.",
  alternatives: [
    "the road",
    "the street",
    "the bridge"
  ]
},

{
  term: "wear a _____________",
  meaning: "đội / mang...",
  example: "I wear a helmet when I ride a motorbike.",
  alternatives: [
    "helmet",
    "seat belt",
    "safety shoes"
  ]
},

{
  term: "when I _____________",
  meaning: "khi tôi...",
  example: "I wear a helmet when I ride a motorbike.",
  alternatives: [
    "ride a motorbike",
    "ride a bicycle",
    "drive a car"
  ]
},

{
  term: "keep _____________ with me",
  meaning: "mang theo... bên mình",
  example: "I keep my phone with me when I travel.",
  alternatives: [
    "my phone",
    "my ID",
    "my money"
  ]
},

{
  term: "when I go to _____________",
  meaning: "khi tôi đến...",
  example: "I keep my phone with me when I go to a new place.",
  alternatives: [
    "a new place",
    "another city",
    "a crowded place"
  ]
},

{
  term: "If I _____________, I _____________",
  meaning: "Nếu tôi..., tôi...",
  example: "If I get lost, I call my family.",
  alternatives: [
    "get lost, I call my family",
    "need help, I ask someone",
    "feel sick, I call a doctor"
  ]
},

{
  term: "get lost _____________",
  meaning: "bị lạc...",
  example: "I can get lost in a new city.",
  alternatives: [
    "in a new city",
    "in a shopping center",
    "on the way"
  ]
},

{
  term: "ask _____________ for help",
  meaning: "nhờ... giúp đỡ",
  example: "I ask a police officer for help.",
  alternatives: [
    "my family",
    "a police officer",
    "a local person"
  ]
},

{
  term: "call _____________",
  meaning: "gọi...",
  example: "If I see an accident, I call the police.",
  alternatives: [
    "the police",
    "an ambulance",
    "the fire department"
  ]
},

{
  term: "see _____________",
  meaning: "thấy...",
  example: "If I see an accident, I call the police.",
  alternatives: [
    "an accident",
    "a fire",
    "someone hurt"
  ]
},

{
  term: "keep _____________ away from _____________",
  meaning: "để... tránh xa...",
  example: "I keep medicine away from children.",
  alternatives: [
    "medicine away from children",
    "knives away from children",
    "chemicals away from children"
  ]
},

{
  term: "should _____________",
  meaning: "nên...",
  example: "Everyone should learn safety rules.",
  alternatives: [
    "learn safety rules",
    "be careful",
    "wear a helmet",
    "ask for help"
  ]
},

{
  term: "learn _____________",
  meaning: "học...",
  example: "Everyone should learn safety rules.",
  alternatives: [
    "safety rules",
    "first aid",
    "emergency numbers"
  ]
},

{
  term: "simple _____________",
  meaning: "những... đơn giản / cơ bản",
  example: "Everyone should learn simple safety rules.",
  alternatives: [
    "safety rules",
    "first-aid skills",
    "instructions"
  ]
},


]
};