import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I use my smartphone every day to talk to my family and friends. I often use my phone to check messages and look for information. I also use my computer when I work or study English. I usually go online to watch videos and listen to music. I sometimes use apps to learn new words and practice English. My phone is useful because I can use it anywhere. I don't use my phone when I am eating with my family. I think technology is an important part of my everyday life.";

const translation =
  "Tôi sử dụng điện thoại thông minh mỗi ngày để trò chuyện với gia đình và bạn bè. Tôi thường dùng điện thoại để kiểm tra tin nhắn và tìm kiếm thông tin. Tôi cũng sử dụng máy tính khi làm việc hoặc học tiếng Anh. Tôi thường lên mạng để xem video và nghe nhạc. Thỉnh thoảng, tôi dùng các ứng dụng để học từ mới và luyện tập tiếng Anh. Điện thoại của tôi rất hữu ích vì tôi có thể dùng nó ở bất kỳ đâu. Tôi không sử dụng điện thoại khi đang ăn cơm cùng gia đình. Tôi nghĩ công nghệ là một phần quan trọng trong cuộc sống hằng ngày của mình.";
  
const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: " " },
  { text: "use", type: "verb" },
  { text: " " },
  { text: "my smartphone", type: "noun" },
  { text: " " },
  { text: "every day", type: "time" },
  { text: " " },
  { text: "to talk", type: "verb"  },
  { text: " " },
  { text: "to my family and friends", type: "preposition"  },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "often", type: "time" },
  { text: " " },
  { text: "use my phone", type: "verb" },
  { text: " " },
  { text: "to check messages and look for information", type: "reason" },
  { text: " " },
  { text: ". I also " },
  { text: "use my computer", type: "verb" },
  { text: " " },
  { text: "when I work or study English", type: "reason" },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "go online", type: "verb" },
  { text: " " },
  { text: "to watch videos and listen to music", type: "reason" },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "sometimes", type: "time" },
  { text: " " },
  { text: "use apps", type: "verb"  },
  { text: " " },
  { text: "to learn new words and practice English", type: "reason"  },
  { text: " " },
  { text: ". My phone is " },
  { text: " " },
  { text: "useful", type: "adjective" },
  { text: " " },
  { text: "because", type: "reason" },
  { text: " I " },
  { text: "can use it anywhere", type: "verb" },
  { text: ". I " },
  { text: "don't use", type: "verb" },
  { text: " " },
  { text: "my phone", type: "noun" },
  { text: " " },
  { text: "when I" },
  { text: " " },
  { text: "am eating", type: "verb" },
  { text: " " },
  { text: "with my family", type: "preposition" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "think", type: "verb" },
  { text: " " },
  { text: "technology", type: "noun" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "an important part of my everyday life", type: "noun" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "use my smartphone every day",
    pronunciation: "/juːz maɪ ˈsmɑːrtfəʊn ˈevri deɪ/",
    meaning: "Sử dụng điện thoại thông minh của tôi mỗi ngày",
    context: "Dùng để nói về thói quen dùng thiết bị di động hằng ngày.",
    type: "verb",
  },
  {
    phrase: "often use my phone to check messages and look for information",
    pronunciation: "/ˈɒfn juːz maɪ fəʊn tuː tʃek ˈmesɪdʒɪz ænd lʊk fɔːr ˌɪnfərˈmeɪʃn/",
    meaning: "Thường sử dụng điện thoại để kiểm tra tin nhắn và tìm kiếm thông tin",
    context: "Dùng để miêu tả các hoạt động phổ biến trên điện thoại.",
    type: "verb",
  },
  {
    phrase: "use my computer",
    pronunciation: "/juːz maɪ kəmˈpjuːtər/",
    meaning: "Sử dụng máy tính của tôi",
    context: "Dùng để chỉ công cụ dùng khi làm việc hoặc học tập.",
    type: "verb",
  },
  {
    phrase: "usually go online",
    pronunciation: "/ˈjuːʒuəli ɡəʊ ˈɒnlaɪn/",
    meaning: "Thường lên mạng",
    context: "Dùng để chỉ thói quen truy cập internet để giải trí.",
    type: "verb",
  },
  {
    phrase: "can use it anywhere",
    pronunciation: "/kæn juːz ɪt ˈeniwer/",
    meaning: "Có thể sử dụng nó ở bất cứ đâu",
    context: "Dùng để nêu bật tính tiện lợi và di động của điện thoại.",
    type: "verb",
  },
  {
    phrase: "don't use my phone",
    pronunciation: "/dəʊnt juːz maɪ fəʊn/",
    meaning: "Không sử dụng điện thoại của tôi",
    context: "Dùng để chỉ quy tắc cá nhân trong một số hoàn cảnh nhất định.",
    type: "verb",
  },
  {
  phrase: "am eating with my family",
  pronunciation: "/əm ˈiːtɪŋ wɪð maɪ ˈfæməli/",
  meaning: "am + Ving: đang ăn cùng gia đình tôi",
  context: "Dùng để nói về hành động đang diễn ra ở hiện tại, trong đó mình đang ăn cùng gia đình.",
  type: "verb",
},
{
  phrase: "to talk to my family and friends",
  pronunciation: "/tə tɔːk tə maɪ ˈfæməli ænd frendz/",
  meaning: "để nói chuyện với gia đình và bạn bè của tôi",
  context: "Dùng TO + động từ để nói về mục đích của một hành động.",
  type: "verb",
},
  // Adjective chunks (blue)
  {
    phrase: "useful",
    pronunciation: "/ˈjuːsfl/",
    meaning: "Hữu ích",
    context: "Dùng để đánh giá giá trị thực tế của điện thoại.",
    type: "adjective",
  },
  // Noun chunks (red)
  {
    phrase: "technology is an important part of my everyday life",
    pronunciation: "/tekˈnɒlədʒi ɪz ən ɪmˈpɔːrtnt pɑːrt əv maɪ ˈevrideɪ laɪf/",
    meaning: "Công nghệ là một phần quan trọng trong cuộc sống hằng ngày của tôi",
    context: "Dùng để khẳng định vai trò của công nghệ đối với bản thân.",
    type: "noun",
  },
  {
  phrase: "my smartphone",
  pronunciation: "/maɪ ˈsmɑːrtfəʊn/",
  meaning: "điện thoại thông minh của tôi",
  context: "Dùng để nói về một thiết bị điện thoại thông minh thuộc về mình.",
  type: "noun",
},
  // Time chunks (purple)
  {
    phrase: "sometimes",
    pronunciation: "/ˈsʌmtaɪmz/",
    meaning: "Thỉnh thoảng",
    context: "Dùng để chỉ tần suất sử dụng ứng dụng học tiếng Anh.",
    type: "time",
  },
  {
  phrase: "every day",
  pronunciation: "/ˈevri deɪ/",
  meaning: "mỗi ngày",
  context: "Dùng EVERY DAY để nói về một hành động hoặc thói quen xảy ra mỗi ngày.",
  type: "time",
},
  // Reason chunks (yellow)
  {
  phrase: "to check messages and look for information",
  pronunciation: "/tə tʃek ˈmesɪdʒɪz ænd lʊk fər ˌɪnfərˈmeɪʃən/",
  meaning: "để kiểm tra tin nhắn và tìm kiếm thông tin",
  context: "Dùng TO + động từ để nói về mục đích của một hành động.",
  type: "reason",
},
{
  phrase: "when I work or study English",
  pronunciation: "/wen aɪ wɜːrk ɔːr ˈstʌdi ˈɪŋɡlɪʃ/",
  meaning: "khi tôi làm việc hoặc học tiếng Anh",
  context: "Dùng WHEN để nói về thời điểm hoặc tình huống một hành động xảy ra.",
  type: "reason",
},
{
  phrase: "to watch videos and listen to music",
  pronunciation: "/tə wɒtʃ ˈvɪdiəʊz ænd ˈlɪsən tə ˈmjuːzɪk/",
  meaning: "để xem video và nghe nhạc",
  context: "Dùng TO + động từ để nói về mục đích của một hành động.",
  type: "reason",
},
{
  phrase: "to learn new words and practice English",
  pronunciation: "/tə lɜːrn njuː wɜːrdz ænd ˈpræktɪs ˈɪŋɡlɪʃ/",
  meaning: "để học từ mới và luyện tập tiếng Anh",
  context: "Dùng TO + động từ để nói về mục đích của một hành động.",
  type: "reason",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I use my smartphone every day to talk ____ my family and friends.",
    answer: "to",
    hint: "nói chuyện với",
  },
  {
    prompt: "I often use my phone to check messages and look ____ information.",
    answer: "for",
    hint: "tìm kiếm",
  },
  {
    prompt: "I also use my computer when I work ____ study English.",
    answer: "or",
    hint: "hoặc",
  },
  {
    prompt: "I sometimes use apps to learn new words and practice ____.",
    answer: "English",
    hint: "tiếng Anh",
  },
  {
    prompt: "My phone is useful because I can use it ____.",
    answer: "anywhere",
    hint: "ở bất cứ đâu",
  },
  {
    prompt: "I don't use my phone when I am eating ____ my family.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "I think technology is an important part of my everyday ____.",
    answer: "life",
    hint: "cuộc sống",
  },
];

export const lesson27Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I use _____________ every day",
  meaning: "Tôi dùng... mỗi ngày",
  example: "I use my smartphone every day.",
  alternatives: [
    "my smartphone every day",
    "my computer every day",
    "my tablet every day"
  ]
},

{
  term: "to _____________",
  meaning: "để...",
  example: "I use my phone to talk to my family.",
  alternatives: [
    "talk to my family",
    "check messages",
    "find information",
    "study English"
  ]
},

{
  term: "use my phone to _____________",
  meaning: "dùng điện thoại để...",
  example: "I use my phone to check messages.",
  alternatives: [
    "check messages",
    "look for information",
    "take photos",
    "watch videos",
    "listen to music"
  ]
},

{
  term: "check _____________",
  meaning: "kiểm tra...",
  example: "I check my messages every morning.",
  alternatives: [
    "messages",
    "emails",
    "my timetable",
    "the news"
  ]
},

{
  term: "look for _____________",
  meaning: "tìm...",
  example: "I look for information online.",
  alternatives: [
    "information",
    "a place",
    "a job",
    "a video"
  ]
},

{
  term: "use my computer when _____________",
  meaning: "dùng máy tính khi...",
  example: "I use my computer when I work.",
  alternatives: [
    "I work",
    "I study English",
    "I do my homework",
    "I watch videos"
  ]
},

{
  term: "go online to _____________",
  meaning: "lên mạng để...",
  example: "I go online to watch videos.",
  alternatives: [
    "watch videos",
    "listen to music",
    "read the news",
    "study English"
  ]
},

{
  term: "listen to _____________",
  meaning: "nghe...",
  example: "I listen to music on my phone.",
  alternatives: [
    "music",
    "podcasts",
    "English"
  ]
},

{
  term: "use apps to _____________",
  meaning: "dùng ứng dụng để...",
  example: "I use apps to learn new words.",
  alternatives: [
    "learn new words",
    "practice English",
    "study grammar",
    "learn new skills"
  ]
},

{
  term: "learn _____________",
  meaning: "học...",
  example: "I learn new words every day.",
  alternatives: [
    "new words",
    "English",
    "grammar",
    "new skills"
  ]
},

{
  term: "practice _____________",
  meaning: "luyện...",
  example: "I practice English every day.",
  alternatives: [
    "English",
    "speaking",
    "listening",
    "writing"
  ]
},

{
  term: "My phone is _____________",
  meaning: "Điện thoại của tôi...",
  example: "My phone is useful and convenient.",
  alternatives: [
    "useful",
    "helpful",
    "convenient",
    "easy to use"
  ]
},

{
  term: "because _____________",
  meaning: "vì...",
  example: "My phone is useful because I can use it anywhere.",
  alternatives: [
    "I can use it anywhere",
    "it is easy to use",
    "it saves time"
  ]
},

{
  term: "can _____________",
  meaning: "có thể...",
  example: "I can use it anywhere.",
  alternatives: [
    "use it anywhere",
    "use it at home",
    "use it at work",
    "use it on the bus"
  ]
},

{
  term: "I don't use _____________ when _____________",
  meaning: "Tôi không dùng... khi...",
  example: "I don't use my phone when I am eating.",
  alternatives: [
    "my phone when I am eating",
    "my phone when I am working",
    "my phone when I am driving"
  ]
},

{
  term: "an important part of _____________",
  meaning: "một phần quan trọng của...",
  example: "My phone is an important part of my everyday life.",
  alternatives: [
    "my everyday life",
    "my work",
    "my studies",
    "my daily routine"
  ]
},

]
};