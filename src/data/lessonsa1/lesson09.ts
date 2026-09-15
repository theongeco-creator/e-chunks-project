import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I am a student, and I go to school from Monday to Friday. My school is not very big, but it has a clean library and a large playground. In my classroom, there are twenty desks, a big white board, and a projector. I always put my notebooks, pens, and a laptop in my backpack. My favorite subject is English because the lessons are very interesting. My teacher is very kind and always helps us when we have hard exercises. During the break time, I usually chat with my classmates in the room. I really like my school because I can learn new things every day.";

const translation =
"Tôi là một học sinh, và tôi đi học từ thứ Hai đến thứ Sáu. Trường của tôi không quá lớn, nhưng có một thư viện sạch sẽ và một sân chơi rộng rãi. Trong lớp học của tôi có hai mươi chiếc bàn, một chiếc bảng trắng lớn và một máy chiếu. Tôi luôn để tập ghi chép, bút và máy tính xách tay vào trong balo của mình. Môn học yêu thích của tôi là tiếng Anh vì các bài học rất thú vị. Giáo viên của tôi rất tốt bụng và luôn giúp đỡ chúng tôi mỗi khi có bài tập khó. Vào giờ ra chơi, tôi thường tán chuyện với các bạn cùng lớp ở trong phòng. Tôi thực sự rất thích trường học của mình vì tôi có thể học thêm nhiều điều mới mỗi ngày.";

const readingSegments: ReadingSegment[] = [

  { text: "I"},
  { text: " " },
  { text: "am", type: "verb" },
  { text: " " },
  { text: "a student", type: "noun" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "I " },
  { text: "go to school", type: "verb" },
  { text: " " },
  { text: "from Monday to Friday", type: "time" },
  { text: " . " },
  { text: "My school" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "not very big", type: "adjective" },
  { text: " " },
  { text: "but" },
  { text: " " },
  { text: "it" },
  { text: " " },
  { text: "has", type: "verb" },
  { text: " " },
  { text: "a clean library", type: "noun" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "a large playground", type: "noun" },
  { text: " . " },
  { text: "In my classroom", type: "preposition" },
  { text: " " },
  { text: "there are", type: "verb" },
  { text: " " },
  { text: "twenty desks, a big white board,", type: "noun" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "a projector", type: "noun" },
  { text: " " },

  // Sentence 4
  { text: ". I" },
  { text: " " },
  { text: "always", type: "time" },
  { text: " " },
  { text: "put", type: "verb" },
  { text: " " },
  { text: "my notebooks, pens, and a laptop", type: "noun" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "a laptop", type: "noun" },
  { text: " " },
  { text: "in my backpack", type: "preposition" },
  { text: " " },

  // Sentence 5
  { text: ". " },
  { text: "My favorite subject" },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "English", type: "noun" },
  { text: " " },
  { text: "because the lessons are very interesting", type: "reason" },
  { text: " " },

  // Sentence 6
  { text: "My teacher"  },
  { text: " " },
  { text: "is", type: "verb" },
  { text: " " },
  { text: "very kind", type: "adjective" },
  { text: " " },
  { text: "and always helps", type: "verb" },
  { text: " " },
  { text: "us", type: "noun" },
  { text: " " },
  { text: "when we have hard exercises", type: "reason" },
  { text: " " },

  // Sentence 7
  { text: "During the break time", type: "time" },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "chat", type: "verb" },
  { text: " " },
  { text: "with my classmates", type: "preposition" },
  { text: " " },
  { text: "in the room", type: "preposition" },
  { text: " " },

  // Sentence 8
  { text: "I" },
  { text: " " },
  { text: "really like", type: "verb" },
  { text: " " },
  { text: "my school", type: "noun" },
  { text: " " },
  { text: "because I can learn new things every day", type: "reason" }
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "am a student",
    pronunciation: "/æm ə ˈstjuːdnt/",
    meaning: "Là một học sinh/sinh viên",
    context: "Dùng để giới thiệu nghề nghiệp học tập của bản thân.",
    type: "verb",
  },
  {
    phrase: "is",
    pronunciation: "/ɪz/",
    meaning: "Là",
    context: "Dùng để miêu tả đặc điểm của trường học.",
    type: "verb",
  },
  {
    phrase: "go to school",
    pronunciation: "/ɡəʊ tuː skuːl/",
    meaning: "Đi học",
    context: "Dùng để chỉ việc đến trường hằng ngày.",
    type: "verb",
  },
  {
    phrase: "has a clean library and a large playground",
    pronunciation: "/hæz ə kliːn ˈlaɪbrəri ænd ə lɑːrdʒ ˈpleɪɡraʊnd/",
    meaning: "Có một thư viện sạch sẽ và một sân chơi lớn",
    context: "Dùng để miêu tả cơ sở vật chất của trường học.",
    type: "verb",
  },
  {
    phrase: "put my notebooks, pens, and a laptop",
    pronunciation: "/pʊt maɪ ˈnəʊtbʊks, penz, ænd ə ˈlæptɒp/",
    meaning: "Cho vở, bút và máy tính xách tay vào",
    context: "Dùng để chỉ việc chuẩn bị đồ dùng học tập.",
    type: "verb",
  },
  {
    phrase: "chat with my classmates",
    pronunciation: "/tʃæt wɪð maɪ ˈklɑːsmeɪts/",
    meaning: "Trò chuyện với các bạn cùng lớp",
    context: "Dùng để chỉ hoạt động giao lưu trong giờ giải lao.",
    type: "verb",
  },
  {
    phrase: "like my school",
    pronunciation: "/laɪk maɪ skuːl/",
    meaning: "Thích trường học của tôi",
    context: "Dùng để bày tỏ tình cảm yêu mến đối với ngôi trường.",
    type: "verb",
  },
  {
    phrase: "learn new things",
    pronunciation: "/lɜːn nuː θɪŋz/",
    meaning: "Học những điều mới",
    context: "Dùng để chỉ mục tiêu và trải nghiệm khi đi học.",
    type: "verb",
  },
  {
    phrase: "chat",
    pronunciation: "/tʃæt/",
    meaning: "Trò chuyện",
    context: "Dùng để chỉ hoạt động giao lưu trong giờ giải lao.",
    type: "verb",
  },
  // Prepositional chunks (pink)
  {
    phrase: "In my classroom",
    pronunciation: "/ɪn maɪ ˈklɑːsruːm/",
    meaning: "Trong phòng học của tôi",
    context: "Dùng để chỉ không gian bên trong lớp học.",
    type: "preposition",
  },
  {
    phrase: "in my backpack",
    pronunciation: "/ɪn maɪ ˈbækpæk/",
    meaning: "Trong ba lô của tôi",
    context: "Dùng để chỉ vị trí đựng đồ dùng cá nhân.",
    type: "preposition",
  },
  // Time chunks (purple)
  {
    phrase: "from Monday to Friday",
    pronunciation: "/frəm ˈmʌndeɪ tuː ˈfraɪdeɪ/",
    meaning: "Từ thứ Hai đến thứ Sáu",
    context: "Dùng để chỉ khoảng thời gian đi học trong tuần.",
    type: "time",
  },
  {
    phrase: "always",
    pronunciation: "/ˈɔːlweɪz/",
    meaning: "Luôn luôn",
    context: "Dùng để chỉ tần suất tối đa của hành động.",
    type: "time",
  },
  {
    phrase: "During the break time",
    pronunciation: "/ˈdjʊərɪŋ ðə breɪk taɪm/",
    meaning: "Trong giờ giải lao",
    context: "Dùng để chỉ khoảng thời gian nghỉ giữa các tiết học.",
    type: "time",
  },
  {
    phrase: "usually",
    pronunciation: "/ˈjuːʒʊəli/",
    meaning: "Thường xuyên",
    context: "Dùng để chỉ tần suất diễn ra thói quen.",
    type: "time",
  },
  {
    phrase: "every day",
    pronunciation: "/ˈevri deɪ/",
    meaning: "Mỗi ngày",
    context: "Dùng để chỉ sự việc diễn ra hằng ngày.",
    type: "time",
  },
  // Noun chunks (red)
  {
    phrase: "My favorite subject",
    pronunciation: "/maɪ ˈfeɪvərɪt ˈsʌbdʒɪkt/",
    meaning: "Môn học yêu thích của tôi",
    context: "Dùng để chỉ môn học được quan tâm nhất.",
    type: "noun",
  },
  {
    phrase: "a projector",
    pronunciation: "/ə ˈprɒdʒektə/",
    meaning: "Máy chiếu",
    context: "Dùng để chỉ thiết bị trình chiếu trong lớp học.",
    type: "noun",
  },
  {
    phrase: "a clean library",
    pronunciation: "/ə ˈkliːn ˈlʌbrəri/",
    meaning: "Thư viện sạch sẽ",
    context: "Dùng để chỉ không gian đọc sách và học tập.",
    type: "noun",
  },
  {
    phrase: "hard exercises",
    pronunciation: "/hɑːd ˈɛksəsaɪzɪz/",
    meaning: "Bài tập khó",
    context: "Dùng để chỉ các bài tập đòi hỏi sự nỗ lực và tư duy.",
    type: "noun",
  },
  {
    phrase: "a large playground",
    pronunciation: "/ə ˈlɑːdʒ ˈpleɪɡraʊnd/",
    meaning: "Sân chơi lớn",
    context: "Dùng để chỉ không gian vui chơi ngoài trời.",
    type: "noun",
  },
  // Adjective chunks (blue)
  {
    phrase: "very interesting",
    pronunciation: "/ˈveri ˈɪntrəstɪŋ/",
    meaning: "Rất thú vị",
    context: "Dùng để khen ngợi tính chất hay ho của bài học.",
    type: "adjective",
  },
  {
    phrase: "very kind",
    pronunciation: "/ˈveri kaɪnd/",
    meaning: "Rất tốt bụng",
    context: "Dùng để miêu tả tính cách tử tế của giáo viên.",
    type: "adjective",
  },
  // Reason chunks (yellow)
  {
    phrase: "because",
    pronunciation: "/bɪˈkɒz/",
    meaning: "Bởi vì",
    context: "Dùng để giải thích nguyên nhân thích môn học hoặc ngôi trường.",
    type: "reason",
  },
  {
    phrase: "because I can learn new things every day",
    pronunciation: "/bɪˈkɒz aɪ kæn lɜːn njuː θɪŋz ˈevri deɪ/",
    meaning: "Bởi vì tôi có thể học những điều mới mỗi ngày",
    context: "Dùng để giải thích lý do thích môn học hoặc ngôi trường.",
    type: "reason",
  },

];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I am a student, and I go to school ____ Monday to Friday.",
    answer: "from",
    hint: "từ (thứ mấy đến thứ mấy)",
  },
  {
    prompt: "My school is not very big, but it has a clean library and a large ____.",
    answer: "playground",
    hint: "sân chơi",
  },
  {
    prompt: "In my classroom, there are twenty desks, a big white board, and a ____.",
    answer: "projector",
    hint: "máy chiếu",
  },
  {
    prompt: "I always put my notebooks, pens, and a laptop in my ____.",
    answer: "backpack",
    hint: "ba lô",
  },
  {
    prompt: "My favorite subject is English ____ the lessons are very interesting.",
    answer: "because",
    hint: "bởi vì",
  },
  {
    prompt: "My teacher is very kind and always helps us when we have hard ____.",
    answer: "exercises",
    hint: "bài tập",
  },
  {
    prompt: "During the break time, I usually chat with my classmates in the ____.",
    answer: "room",
    hint: "phòng (lớp)",
  },
];

export const lesson09Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I am _____________",
  meaning: "Tôi là...",
  example: "I am a student.",
  alternatives: ["a student", "a high school student", "a university student"]
},

{
  term: "I go to _____________",
  meaning: "Tôi đi học...",
  example: "I go to school from Monday to Saturday.",
  alternatives: ["school from Monday to Saturday", "university every day", "school by bus"]
},

{
  term: "My school is _____________",
  meaning: "Trường của tôi...",
  example: "My school is quite big.",
  alternatives: ["not very big", "quite big", "small", "modern"]
},

{
  term: "My school has _____________",
  meaning: "Trường tôi có...",
  example: "My school has a library.",
  alternatives: [
    "a library",
    "a playground",
    "a gym",
    "a computer room",
    "a cafeteria",
    "a clean library",
    "a large library",
    "a modern library",
    "a quiet library",
    "a small playground",
    "a beautiful garden",
    "a big sports field"
  ]
},

{
  term: "There are _____________",
  meaning: "Có (số nhiều) ...",
  example: "There are twenty desks.",
  alternatives: [
    "twenty desks",
    "many chairs",
    "three windows",
    "two computers",
    "many students"
  ]
},

{
  term: "There is _____________",
  meaning: "Có (số ít) ...",
  example: "There is a whiteboard.",
  alternatives: [
    "a whiteboard",
    "a projector",
    "a computer",
    "a teacher's desk"
  ]
},

{
  term: "In my classroom has _____________",
  meaning: "Trong lớp học của tôi có...",
  example: "In my classroom has a big whiteboard.",
  alternatives: [
    "a big whiteboard",
    "a small whiteboard",
    "a large screen",
    "a smart board",
    "a projector",
    "a computer",
    "a TV",
    "a speaker"
  ]
},

{
  term: "put _____________ in my backpack",
  meaning: "bỏ ... vào ba lô",
  example: "I put my books in my backpack.",
  alternatives: [
    "my books",
    "my laptop",
    "my notebooks",
    "my notebooks and pens",
    "books and pencils",
    "an eraser and a ruler",
    "a pencil case"
  ]
},

{
  term: "put my books _____________",
  meaning: "đặt / bỏ sách của tôi...",
  example: "I put my books on my desk.",
  alternatives: [
    "on my desk",
    "in my pencil case",
    "in my locker",
    "in my backpack"
  ]
},

{
  term: "My favorite subject is _____________",
  meaning: "Môn học yêu thích của tôi là...",
  example: "My favorite subject is English.",
  alternatives: [
    "English",
    "Math",
    "Science",
    "History",
    "Art",
    "Music",
    "Education"
  ]
}

]
};