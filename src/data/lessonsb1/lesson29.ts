import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I like talking to new people when I go to a new place. I usually start a conversation by saying hello and asking a simple question. I often talk about the weather, work, school, or hobbies. When I meet someone for the first time, I usually ask about their name and where they are from. I like talking to friendly people because I feel comfortable with them. I sometimes talk to my classmates or coworkers during breaks. I think small talk is a good way to meet new people and make friends. I try to listen carefully and ask questions when I talk to someone.";

const translation =
  "Tôi thích nói chuyện với những người mới khi đến một nơi mới. Tôi thường bắt đầu cuộc trò chuyện bằng cách nói xin chào và hỏi một câu hỏi đơn giản. Tôi thường nói về thời tiết, công việc, trường học hoặc sở thích. Khi gặp ai đó lần đầu tiên, tôi thường hỏi tên của họ và họ đến từ đâu. Tôi thích nói chuyện với những người thân thiện vì tôi cảm thấy thoải mái khi ở bên họ. Đôi khi, tôi nói chuyện với các bạn cùng lớp hoặc đồng nghiệp trong giờ nghỉ. Tôi nghĩ rằng những cuộc trò chuyện xã giao là một cách tốt để làm quen với những người mới và kết bạn. Tôi cố gắng lắng nghe cẩn thận và đặt câu hỏi khi nói chuyện với ai đó.";
  
const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "like talking", type: "verb" },
  { text: " " },
  { text: "to new people", type: "noun" },
  { text: " " },
  { text: "when I" },
  { text: " " },
  { text: "go to", type: "verb"  },
  { text: " " },
  { text: "a new place", type: "noun"  },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "start", type: "verb" },
  { text: " " },
  { text: "a conversation", type: "noun" },
  { text: " " },
  { text: "by saying hello and asking a simple question", type: "preposition" },
  { text: " " },
  { text: ". I " },
  { text: "often", type: "time" },
  { text: " " },
  { text: "talk", type: "verb" },
  { text: " " },
  { text: "about the weather, work, school, or hobbies", type: "preposition" },
  { text: " " },
  { text: ". " },
  { text: "When I" },
  { text: " " },
  { text: "meet", type: "verb" },
  { text: " " },
  { text: "someone", type: "noun" },
  { text: " " },
  { text: "for the first time", type: "time" },
  { text: " " },
  { text: ", I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "ask", type: "verb" },
  { text: " " },
  { text: "about their name and where they are from", type: "preposition" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "like talking to" , type: "verb" },
  { text: " " },
  { text: "friendly people", type: "noun"  },
  { text: " " },
  { text: "because", type: "reason" },
  { text: " I " },
  { text: "feel comfortable", type: "adjective" },
  { text: " " },
  { text: "with them", type: "preposition" },
  { text: " " },
  { text: ". I " },
  { text: "sometimes", type: "time" },
  { text: " " },
  { text: "talk to" , type: "verb" },
  { text: " " },
  { text: "my classmates or coworkers" , type: "noun" },
  { text: " " },
  { text: "during breaks" , type: "preposition" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "think", type: "verb"  },
  { text: " " },
  { text: "small talk", type: "noun" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "a good way", type: "noun" },
  { text: " " },
  { text: "to meet new people and make friends", type: "verb" },
  { text: " " },
  { text: ". I " },
  { text: "try to listen carefully", type: "verb" },
  { text: " " },
  { text: "and " },
  { text: " " },
  { text: "ask", type: "verb" },
  { text: " " },
  { text: "questions", type: "noun" },
  { text: " " },
  { text: " when I talk to someone." , type: "reason" },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "like talking to new people",
    pronunciation: "/laɪk ˈtɔːkɪŋ tuː nuː ˈpiːpl/",
    meaning: "Thích trò chuyện với những người mới",
    context: "Dùng để nói về sở thích giao tiếp xã hội.",
    type: "verb",
  },
  {
    phrase: "usually start a conversation by saying hello and asking a simple question",
    pronunciation: "/ˈjuːʒuəli stɑːrt ə ˌkɒnvəˈseɪʃn baɪ ˈseɪɪŋ həˈləʊ ænd ˈɑːskɪŋ ə ˈsɪmpl ˈkwestʃən/",
    meaning: "Thường bắt đầu một cuộc trò chuyện bằng cách chào hỏi và đặt một câu hỏi đơn giản",
    context: "Dùng để chỉ cách mở lời khi làm quen.",
    type: "verb",
  },
  {
    phrase: "often talk about the weather, work, school, or hobbies",
    pronunciation: "/ˈɒfn tɔːk əˈbaʊt ðə ˈweðər, wɜːk, skuːl, ɔːr ˈhɒbiz/",
    meaning: "Thường nói về thời tiết, công việc, trường học hoặc sở thích",
    context: "Dùng để liệt kê các chủ đề giao tiếp phổ biến.",
    type: "verb",
  },
  {
    phrase: "usually ask about their name and where they are from",
    pronunciation: "/ˈjuːʒuəli ɑːsk əˈbaʊt ðeər neɪm ænd weər ðeɪ ɑːr frəm/",
    meaning: "Thường hỏi về tên và quê quán của họ",
    context: "Dùng để chỉ các câu hỏi cơ bản khi mới gặp.",
    type: "verb",
  },
  {
    phrase: "try to listen carefully and ask questions",
    pronunciation: "/traɪ tuː ˈlɪsn ˈkerfəli ænd ɑːsk ˈkwestʃnz/",
    meaning: "Cố gắng lắng nghe cẩn thận và đặt câu hỏi",
    context: "Dùng để chỉ kỹ năng duy trì cuộc trò chuyện tốt.",
    type: "verb",
  },
  {
  phrase: "to meet new people and make friends",
  pronunciation: "/tə miːt njuː ˈpiːpəl ænd meɪk frendz/",
  meaning: "để gặp gỡ những người mới và kết bạn",
  context: "Dùng TO + động từ để nói về mục đích của một hành động; MEET và MAKE diễn tả hai hành động.",
  type: "verb",
},
// Prepositional chunks (pink)
  {
  phrase: "by saying hello and asking a simple question",
  pronunciation: "/baɪ ˈseɪɪŋ həˈləʊ ænd ˈɑːskɪŋ ə ˈsɪmpəl ˈkwestʃən/",
  meaning: "bằng cách chào hỏi và hỏi một câu hỏi đơn giản",
  context: "Dùng BY + V-ing để nói về cách thức thực hiện một hành động.",
  type: "preposition",
},
{
  phrase: "about the weather, work, school, or hobbies",
  pronunciation: "/əˈbaʊt ðə ˈweðər, wɜːrk, skuːl, ɔːr ˈhɒbiz/",
  meaning: "về thời tiết, công việc, trường học hoặc sở thích",
  context: "Dùng ABOUT để nói về chủ đề của một cuộc trò chuyện hoặc điều được nhắc đến.",
  type: "preposition",
},
{
  phrase: "about their name and where they are from",
  pronunciation: "/əˈbaʊt ðer neɪm ænd weər ðeɪ ɑːr frəm/",
  meaning: "về tên và nơi họ đến từ",
  context: "Dùng ABOUT để nói về thông tin hoặc chủ đề được hỏi hoặc nói đến.",
  type: "preposition",
},
{
  phrase: "during breaks",
  pronunciation: "/ˈdjʊərɪŋ breɪks/",
  meaning: "trong giờ nghỉ",
  context: "Dùng DURING để nói về thời điểm một hành động xảy ra trong một khoảng thời gian.",
  type: "preposition",
},
{
  phrase: "for the first time",
  pronunciation: "/fər ðə fɜːrst taɪm/",
  meaning: "lần đầu tiên",
  context: "Dùng FOR để nói về một lần hoặc một thời điểm cụ thể khi một việc xảy ra.",
  type: "preposition",
},
  // Time chunks (purple)
  {
    phrase: "When I meet someone for the first time",
    pronunciation: "/wen aɪ miːt ˈsʌmwʌn fɔːr ðə fɜːrst taɪm/",
    meaning: "Khi tôi gặp ai đó lần đầu tiên",
    context: "Dùng để chỉ thời điểm bắt đầu một mối quan hệ.",
    type: "time",
  },
  {
    phrase: "sometimes",
    pronunciation: "/ˈsʌmtaɪmz/",
    meaning: "Thỉnh thoảng",
    context: "Dùng để chỉ tần suất trò chuyện trong giờ giải lao.",
    type: "time",
  },
  // Reason chunks (yellow)
 {
  phrase: "when I talk to someone",
  pronunciation: "/wen aɪ tɔːk tə ˈsʌmwʌn/",
  meaning: "khi tôi nói chuyện với ai đó",
  context: "Dùng WHEN để nói về thời điểm hoặc tình huống một hành động xảy ra.",
  type: "reason",
},
  // Adjective chunks (blue)
  {
    phrase: "feel comfortable with them",
    pronunciation: "/fiːl ˈkʌmfərtəbl wɪð ðem/",
    meaning: "Cảm thấy thoải mái với họ",
    context: "Dùng để miêu tả cảm giác dễ chịu khi ở cạnh ai đó.",
    type: "adjective",
  },
  // Noun chunks (red)
  {
  phrase: "to new people",
  pronunciation: "/tə njuː ˈpiːpəl/",
  meaning: "với những người mới",
  context: "Dùng để nói về những người mà mình mới gặp hoặc chưa quen.",
  type: "noun",
},
{
  phrase: "someone",
  pronunciation: "/ˈsʌmwʌn/",
  meaning: "một ai đó",
  context: "Dùng để nói về một người không xác định hoặc không cần nói rõ là ai.",
  type: "noun",
},
{
  phrase: "friendly people",
  pronunciation: "/ˈfrendli ˈpiːpəl/",
  meaning: "những người thân thiện",
  context: "Dùng để nói về những người có tính cách thân thiện và dễ gần.",
  type: "noun",
},
{
  phrase: "my classmates or coworkers",
  pronunciation: "/maɪ ˈklɑːsmeɪts ɔːr ˈkəʊwɜːrkərz/",
  meaning: "bạn cùng lớp hoặc đồng nghiệp của tôi",
  context: "Dùng để nói về những người học hoặc làm việc cùng mình.",
  type: "noun",
},
{
  phrase: "small talk",
  pronunciation: "/smɔːl tɔːk/",
  meaning: "cuộc trò chuyện xã giao",
  context: "Dùng để nói về những cuộc trò chuyện ngắn và đơn giản về các chủ đề thông thường.",
  type: "noun",
},
{
  phrase: "a good way",
  pronunciation: "/ə ɡʊd weɪ/",
  meaning: "một cách tốt",
  context: "Dùng để nói về một cách hoặc phương pháp tốt để làm một việc gì đó.",
  type: "noun",
},
{
  phrase: "questions",
  pronunciation: "/ˈkwestʃənz/",
  meaning: "những câu hỏi",
  context: "Dùng để nói về những điều được hỏi để lấy thông tin hoặc tìm hiểu thêm.",
  type: "noun",
},
{
  phrase: "a conversation",
  pronunciation: "/ə ˌkɒnvəˈseɪʃən/",
  meaning: "một cuộc trò chuyện",
  context: "Dùng để nói về một cuộc nói chuyện giữa hai hoặc nhiều người.",
  type: "noun",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I like talking ____ new people when I go to a new place.",
    answer: "to",
    hint: "nói chuyện với",
  },
  {
    prompt: "I usually start a conversation ____ saying hello and asking a simple question.",
    answer: "by",
    hint: "bằng cách",
  },
  {
    prompt: "When I meet someone for the first ____, I usually ask about their name.",
    answer: "time",
    hint: "lần (đầu tiên)",
  },
  {
    prompt: "I like talking to friendly people because I feel comfortable ____ them.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "I sometimes talk to my classmates or coworkers ____ breaks.",
    answer: "during",
    hint: "trong suốt (giờ giải lao)",
  },
  {
    prompt: "I think small talk is a good way ____ meet new people and make friends.",
    answer: "to",
    hint: "để",
  },
  {
    prompt: "I try to listen carefully and ask questions when I talk ____ someone.",
    answer: "to",
    hint: "nói chuyện với",
  },
];

export const lesson29Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "talking to _____________",
  meaning: "nói chuyện với...",
  example: "I like talking to new people.",
  alternatives: [
    "new people",
    "my classmates",
    "my coworkers",
    "my neighbors"
  ]
},

{
  term: "when I go to _____________",
  meaning: "khi tôi đến...",
  example: "I usually talk to new people when I go to a new place.",
  alternatives: [
    "a new place",
    "a café",
    "a party",
    "work"
  ]
},

{
  term: "start a conversation with _____________",
  meaning: "bắt đầu cuộc trò chuyện với...",
  example: "I start a conversation with someone by saying hello.",
  alternatives: [
    "someone",
    "a stranger",
    "start a conversation at work"
  ]
},

{
  term: "by _____________",
  meaning: "bằng cách...",
  example: "I start a conversation by saying hello.",
  alternatives: [
    "saying hello",
    "asking a question",
    "introducing myself",
    "talking about the weather"
  ]
},

{
  term: "ask a _____________",
  meaning: "hỏi một câu hỏi...",
  example: "I usually ask a simple question.",
  alternatives: [
    "simple question",
    "friendly question",
    "easy question"
  ]
},

{
  term: "talk about _____________",
  meaning: "nói về...",
  example: "I often talk about the weather.",
  alternatives: [
    "the weather",
    "work",
    "school",
    "hobbies",
    "movies"
  ]
},

{
  term: "meet _____________ for the first time",
  meaning: "gặp... lần đầu tiên",
  example: "I feel a little nervous when I meet a new person for the first time.",
  alternatives: [
    "a new person",
    "a new coworker",
    "a new classmate"
  ]
},

{
  term: "ask about _____________",
  meaning: "hỏi về...",
  example: "I ask about their name when I meet someone for the first time.",
  alternatives: [
    "their name",
    "their hometown",
    "their job",
    "their hobbies"
  ]
},

{
  term: "where _____________ is from",
  meaning: "... đến từ đâu",
  example: "I ask where they are from.",
  alternatives: [
    "they are from",
    "my friend is from",
    "my coworker is from"
  ]
},

{
  term: "feel comfortable with _____________",
  meaning: "cảm thấy thoải mái với...",
  example: "I feel comfortable with new people after talking to them.",
  alternatives: [
    "them",
    "my friends",
    "new people"
  ]
},

{
  term: "talk to _____________ during _____________",
  meaning: "nói chuyện với... trong lúc...",
  example: "I talk to my classmates during breaks.",
  alternatives: [
    "my classmates during breaks",
    "my coworkers during lunch",
    "my friends after work"
  ]
},

{
  term: "small talk with _____________",
  meaning: "trò chuyện xã giao với...",
  example: "I often make small talk with my coworkers.",
  alternatives: [
    "coworkers",
    "new people",
    "at work"
  ]
},

{
  term: "a good way to _____________",
  meaning: "một cách tốt để...",
  example: "Small talk is a good way to meet people.",
  alternatives: [
    "meet people",
    "make friends",
    "practice English"
  ]
},

]
};