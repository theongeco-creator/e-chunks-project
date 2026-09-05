import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I work as an office worker in a dynamic company. Every day, I go to my office at eight o'clock in the morning. My main job is designing simple websites and checking emails from clients. I usually use a computer and a notebook to do my daily work. I work with friendly colleagues, and we often help each other. Sometimes, I have to stay late to finish important projects. I like my job because it is interesting and I can learn new skills. In the future, I want to become a good team leader.";

const translation =
"Tôi làm nhân viên văn phòng tại một công ty năng động. Mỗi ngày, tôi đến văn phòng lúc tám giờ sáng. Công việc chính của tôi là thiết kế các trang web đơn giản và kiểm tra email từ khách hàng. Tôi thường dùng máy tính và sổ tay để làm công việc hằng ngày. Tôi làm việc cùng những đồng nghiệp thân thiện, và chúng tôi thường xuyên giúp đỡ lẫn nhau. Thỉnh thoảng, tôi phải ở lại làm muộn để hoàn thành các dự án quan trọng. Tôi thích công việc của mình vì nó thú vị và giúp tôi học hỏi thêm nhiều kỹ năng mới. Trong tương lai, tôi muốn trở thành một trưởng nhóm giỏi.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "work as", type: "verb" },
  { text: " " },
  { text: "an office worker", type: "noun" },
  { text: " " },
  { text: " in a dynamic company", type: "preposition" },
  { text: ". " },
  { text: "Every day", type: "time" },
  { text: ", I " },
  { text: "go to", type: "verb" },
  { text: " " },
  { text: "my office", type: "noun" },
  { text: " " },
  { text: " at eight o'clock", type: "preposition" },
  { text: " " },
  { text: "in the morning.", type: "preposition" },
  { text: " " },
  { text: "My main job" },
  { text: " is " },
  { text: "designing", type: "verb" },
  { text: " " },
  { text: "simple websites", type: "noun" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "checking", type: "verb" },
  { text: " " },
  { text: "emails", type: "noun" },
  { text: " " },
  { text: " from clients.", type: "preposition" },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "use", type: "verb" },
  { text: " " },
  { text: "a computer", type: "noun" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "a notebook", type: "noun" },
  { text: " " },
  { text: " to do my daily work", type: "reason" },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "work", type: "verb" },
  { text: " " },
  { text: "with friendly colleagues", type: "preposition" },
  { text: " " },
  { text: ", and we" },
  { text: " " },
  { text: "often", type: "time" },
  { text: " " },
  { text: "help each other.", type: "verb" },
  { text: " " },
  { text: " Sometimes", type: "time" },
  { text: ", I" },
  { text: " " },
  { text: "have to stay late", type: "verb" },
  { text: " " },
  { text: " to finish important projects.", type: "reason" },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "like", type: "verb" },
  { text: " " },
  { text: "my job", type: "noun" },
  { text: " " },
  { text: "because it is interesting", type: "reason" },
  { text: " and I can " },
  { text: "learn new skills", type: "verb" },
  { text: ". " },
  { text: "In the future", type: "time" },
  { text: ", I " },
  { text: "want to become", type: "verb" },
  { text: " " },
  { text: "a good team leader", type: "noun" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "work as an office worker",
    pronunciation: "/wɜːk æz ən ˈɒfɪs ˈwɜːkər/",
    meaning: "Làm việc như một nhân viên văn phòng",
    context: "Dùng để giới thiệu nghề nghiệp của bản thân.",
    type: "verb",
  },
  {
    phrase: "go to my office",
    pronunciation: "/ɡəʊ tuː maɪ ˈɒfɪs/",
    meaning: "Đến văn phòng của tôi",
    context: "Dùng để chỉ hành động đến nơi làm việc.",
    type: "verb",
  },
  {
    phrase: "designing simple websites and checking emails",
    pronunciation: "/dɪˈzaɪnɪŋ ˈsɪmpl ˈwɛbsaɪts ænd ˈʧɛkɪŋ ˈiːmeɪlz/",
    meaning: "Thiết kế các trang web đơn giản và kiểm tra email",
    context: "Dùng để mô tả các công việc hằng ngày cụ thể.",
    type: "verb",
  },
  {
    phrase: "use a computer and a notebook",
    pronunciation: "/juːz ə kəmˈpjuːtər ænd ə ˈnəʊtbʊk/",
    meaning: "Sử dụng máy tính và vở ghi",
    context: "Dùng để chỉ công cụ làm việc.",
    type: "verb",
  },
  {
    phrase: "work with friendly colleagues",
    pronunciation: "/wɜːk wɪð ˈfrɛndli ˈkɒliːɡz/",
    meaning: "Làm việc với những đồng nghiệp thân thiện",
    context: "Dùng để nói về môi trường và đồng nghiệp xung quanh.",
    type: "verb",
  },
  {
    phrase: "stay late",
    pronunciation: "/steɪ leɪt/",
    meaning: "Ở lại muộn (làm thêm giờ)",
    context: "Dùng khi phải làm việc quá giờ quy định.",
    type: "verb",
  },
  {
    phrase: "like my job",
    pronunciation: "/laɪk maɪ dʒɒb/",
    meaning: "Thích công việc của tôi",
    context: "Dùng để bày tỏ sự yêu mến đối với công việc.",
    type: "verb",
  },
  {
    phrase: "learn new skills",
    pronunciation: "/lɜːn nuː skɪlz/",
    meaning: "Học hỏi các kỹ năng mới",
    context: "Dùng để chỉ sự phát triển bản thân qua công việc.",
    type: "verb",
  },
  {
    phrase: "want to become",
    pronunciation: "/wɒnt tuː bɪˈkʌm/",
    meaning: "Muốn trở thành",
    context: "Dùng để nói về mục tiêu tương lai trong sự nghiệp.",
    type: "verb",
  },
  {
    phrase: "help each other.",
    pronunciation: "/help iːtʃ ˈʌðər/",
    meaning: "Giúp đỡ lẫn nhau",
    context: "Dùng để nói về sự hợp tác và hỗ trợ lẫn nhau.",
    type: "verb",
  },
  // Time chunks (purple)
  {
    phrase: "Every day",
    pronunciation: "/ˈevri deɪ/",
    meaning: "Mỗi ngày",
    context: "Dùng để chỉ sự việc diễn ra hằng ngày.",
    type: "time",
  },
  {
    phrase: "usually",
    pronunciation: "/ˈjuːʒʊəli/",
    meaning: "Thường xuyên",
    context: "Dùng để chỉ tần suất thực hiện thói quen.",
    type: "time",
  },
  {
    phrase: "Sometimes",
    pronunciation: "/ˈsʌmtaɪmz/",
    meaning: "Thỉnh thoảng",
    context: "Dùng để chỉ tần suất không thường xuyên.",
    type: "time",
  },
  {
    phrase: "In the future",
    pronunciation: "/ɪn ðə ˈfjuːtʃər/",
    meaning: "Trong tương lai",
    context: "Dùng để chỉ khoảng thời gian sắp tới.",
    type: "time",
  },
  // Noun chunks (red)
  {
    phrase: "My main job",
    pronunciation: "/maɪ meɪn dʒɒb/",
    meaning: "Công việc chính của tôi",
    context: "Dùng để giới thiệu nhiệm vụ quan trọng nhất.",
    type: "noun",
  },
  {
    phrase: "a good team leader",
    pronunciation: "/ə ɡʊd tiːm ˈliːdər/",
    meaning: "Một trưởng nhóm giỏi",
    context: "Dùng để chỉ một vị trí hoặc vai trò trong công việc.",
    type: "noun",
  },
  {
    phrase: "friendly colleagues",
    pronunciation: "/ˈfrendli ˈkɒliːɡ/",
    meaning: "Đồng nghiệp thân thiện",
    context: "Dùng để chỉ những người làm việc cùng với bạn một cách dễ chịu.",
    type: "noun",
  },
  // Adjective chunks (blue)
  {
    phrase: "dynamic company",
    pronunciation: "/daɪˈnæmɪk ˈkʌmpəni/",
    meaning: "Công ty năng động",
    context: "Dùng để miêu tả môi trường làm việc trẻ trung, linh hoạt.",
    type: "adjective",
  },
  {
    phrase: "interesting",
    pronunciation: "/ˈɪntrəstɪŋ/",
    meaning: "Thú vị",
    context: "Dùng để đánh giá tính chất hấp dẫn của công việc.",
    type: "adjective",
  },
  // Reason chunks (yellow)
  {
    phrase: "to finish important projects.",
    pronunciation: "/tuː ˈfɪnɪʃ ɪmˈpɔːtənt ˈprɒʤɛkts/",
    meaning: "để hoàn thành các dự án quan trọng (projects: số nhiều)",
    context: "Dùng để chỉ lý do thực hiện một hành động.",
    type: "reason",
  },
  {
    phrase: "to do my daily work.",
    pronunciation: "/tuː tuː ˈfɪnɪʃ ɪmˈpɔːtənt ˈprɒʤɛkts/",
    meaning: "để hoàn thành công việc hằng ngày của tôi",
    context: "Dùng để chỉ lý do thực hiện một hành động.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I work ____ an office worker in a dynamic company.",
    answer: "as",
    hint: "với tư cách là / như là",
  },
  {
    prompt: "Every day, I go to my office at eight ____ in the morning.",
    answer: "o'clock",
    hint: "giờ (đúng)",
  },
  {
    prompt: "My main job is designing simple websites and checking emails ____ clients.",
    answer: "from",
    hint: "từ",
  },
  {
    prompt: "I usually use a computer and a notebook to ____ my daily work.",
    answer: "do",
    hint: "làm",
  },
  {
    prompt: "Sometimes, I have to stay ____ to finish important projects.",
    answer: "late",
    hint: "muộn",
  },
  {
    prompt: "I like my job because it is interesting and I can learn new ____.",
    answer: "skills",
    hint: "kỹ năng",
  },
  {
    prompt: "In the future, I want to become a ____ team leader.",
    answer: "good",
    hint: "giỏi / tốt",
  },
];

export const lesson10Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I work as a/an _____________",
  meaning: "Tôi làm nghề...",
  example: "I work as a designer.",
  alternatives: ["designer", "teacher", "developer", "accountant", "manager"]
},

{
  term: "I work as an office worker in _____________",
  meaning: "Tôi làm nhân viên văn phòng trong...",
  example: "I work as an office worker in a dynamic company.",
  alternatives: [
    "a dynamic company",
    "a small company",
    "a large company",
    "an international company",
    "a Japanese company"
  ]
},

{
  term: "Every day, I go to _____________",
  meaning: "Mỗi ngày tôi đi đến...",
  example: "Every day, I go to my office.",
  alternatives: ["my office", "work", "the company", "the workplace"]
},

{
  term: "I go to my office _____________",
  meaning: "Tôi đi đến văn phòng...",
  example: "I go to my office at seven o'clock.",
  alternatives: [
    "at seven o'clock",
    "at nine o'clock",
    "early in the morning",
    "in the afternoon"
  ]
},

{
  term: "My main job is _____________",
  meaning: "Công việc chính của tôi là...",
  example: "My main job is designing websites.",
  alternatives: [
    "designing websites",
    "creating graphics",
    "managing projects",
    "helping customers",
    "writing reports",
    "making banners",
    "designing interfaces",
    "answering emails",
    "checking messages",
    "talking to clients",
    "replying to customers",
    "checking emails from clients"
  ]
},

{
  term: "I usually use _____________",
  meaning: "Tôi thường sử dụng...",
  example: "I usually use a computer.",
  alternatives: [
    "a computer",
    "a laptop",
    "Figma",
    "Photoshop",
    "a notebook"
  ]
},

{
  term: "to _____________",
  meaning: "để...",
  example: "I use a computer to finish my tasks.",
  alternatives: [
    "finish my tasks",
    "complete my projects",
    "check my work"
  ]
},

{
  term: "work with _____________",
  meaning: "làm việc với...",
  example: "I work with friendly colleagues.",
  alternatives: [
    "friendly colleagues",
    "my team",
    "designers",
    "developers",
    "clients",
    "helpful colleagues",
    "experienced colleagues",
    "international colleagues"
  ]
},

{
  term: "We often _____________",
  meaning: "Chúng tôi thường...",
  example: "We often help each other.",
  alternatives: [
    "help each other",
    "support each other",
    "learn from each other",
    "work together"
  ]
},

{
  term: "Sometimes, I have to _____________",
  meaning: "Đôi khi tôi phải...",
  example: "Sometimes, I have to stay late to finish my work.",
  alternatives: [
    "stay late to finish my work",
    "work overtime to complete a project",
    "attend meetings",
    "finish projects to meet a deadline",
    "complete a task",
    "finish a report",
    "deliver a project"
  ]
},

{
  term: "I like my job because _____________",
  meaning: "Tôi thích công việc của mình bởi vì...",
  example: "I like my job because it is interesting.",
  alternatives: [
    "it is interesting",
    "it is creative",
    "I work with nice people",
    "I can learn new things"
  ]
},

{
  term: "I can learn _____________",
  meaning: "Tôi có thể học...",
  example: "I can learn new skills.",
  alternatives: [
    "new skills",
    "new things",
    "new tools",
    "new techniques"
  ]
},

{
  term: "In the future, I want to _____________",
  meaning: "Trong tương lai, tôi muốn...",
  example: "In the future, I want to become a manager.",
  alternatives: [
    "become a manager",
    "become a team leader",
    "improve my skills",
    "get a better job",
    "become a good designer",
    "become a good manager",
    "become a good team leader",
    "become a better professional"
  ]
}

]
};