import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I really like listening to pop music in my free time. My favorite singer is very famous, and she has a great voice. I often play the guitar in the evening to relax. Last week, I went to an art museum with my close friends. We saw many beautiful paintings and photos there. I think art is very interesting because it makes people happy. In the future, I want to learn how to draw well. Music and art are important parts of my life.";

const translation =
    "Tôi rất thích nghe nhạc pop vào thời gian rảnh. Ca sĩ yêu thích của tôi rất nổi tiếng và cô ấy sở hữu một giọng hát tuyệt vời. Tôi thường chơi đàn guitar vào buổi tối để thư giãn. Tuần trước, tôi đã cùng những người bạn thân đi đến một bảo tàng nghệ thuật. Chúng tôi đã ngắm nhìn nhiều bức tranh và bức ảnh rất đẹp ở đó. Tôi nghĩ nghệ thuật vô cùng thú vị vì nó làm cho con người cảm thấy hạnh phúc. Trong tương lai, tôi muốn học cách vẽ thật đẹp. Âm nhạc và nghệ thuật là những phần quan trọng trong cuộc sống của tôi.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "really like", type: "verb" },
  { text: " " },
  { text: "listening to pop music", type: "verb" },
  { text: " " },
  { text: "in my free time", type: "time" },
  { text: ". " },
  { text: "My favorite singer", type: "noun" },
  { text: " " },
  { text: " is very famous", type: "adjective"  },
  { text: " " },
  { text: ", and she" },
  { text: " " },
  { text: "has a great voice", type: "verb" },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "often", type: "time" },
  { text: " " },
  { text: "play the guitar", type: "verb" },
  { text: " " },
  { text: "in the evening", type: "time" },
  { text: " " },
  { text: "to relax.", type: "reason"  },
  { text: " " },
  { text: "Last week", type: "time" },
  { text: ", I " },
  { text: "went to", type: "verb" },
  { text: " " },
  { text: "an art museum", type: "noun" },
  { text: " " },
  { text: "with my close friends", type: "preposition"  },
  { text: " " },
  { text: ". We " },
  { text: " " },
  { text: "saw", type: "verb" },
  { text: " " },
  { text: "many beautiful paintings and photos", type: "noun" },
  { text: " " },
  { text: " there", type: "preposition"   },
  { text: " " },
  { text: ". I think art is " },
  { text: " " },
  { text: "very interesting", type: "adjective" },
  { text: " " },
  { text: "because it makes people happy", type: "reason" },
  { text: ". " },
  { text: "In the future", type: "time" },
  { text: ", I " },
  { text: "want to learn", type: "verb" },
  { text: " " },
  { text: "how to draw well", type: "noun" },
  { text: " . " },
  { text: "Music and art", type: "noun" },
  { text: " " },
  { text: "are", type: "verb" },
  { text: " " },
  { text: "important parts of my life", type: "noun" },
  { text: " " },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "really like listening to pop music",
    pronunciation: "/ˈriːəli laɪk ˈlɪsnɪŋ tuː pɒp ˈmjuːzɪk/",
    meaning: "Thực sự thích nghe nhạc pop",
    context: "Dùng để diễn tả sở thích âm nhạc mạnh mẽ.",
    type: "verb",
  },
  {
    phrase: "often play the guitar",
    pronunciation: "/ˈɒfn pleɪ ðə ɡɪˈtɑːr/",
    meaning: "Thường chơi đàn ghi-ta",
    context: "Dùng để chỉ thói quen chơi nhạc cụ.",
    type: "verb",
  },
  {
    phrase: "went to an art museum",
    pronunciation: "/went tuː ən ɑːrt mjuːˈziːəm/",
    meaning: "Đã đi đến một bảo tàng nghệ thuật",
    context: "Dùng để chỉ hoạt động trải nghiệm văn hóa trong quá khứ.",
    type: "verb",
  },
  {
    phrase: "saw many beautiful paintings and photos",
    pronunciation: "/sɔː ˈmeni ˈbjuːtɪfl ˈpeɪntɪŋz ænd ˈfəʊtəʊz/",
    meaning: "Đã nhìn thấy nhiều bức tranh và bức ảnh đẹp",
    context: "Dùng để kể về những gì quan sát được ở bảo tàng.",
    type: "verb",
  },
  {
    phrase: "makes people happy",
    pronunciation: "/meɪks ˈpiːpl ˈhæpi/",
    meaning: "Làm cho mọi người hạnh phúc",
    context: "Dùng để chỉ tác dụng tích cực của nghệ thuật.",
    type: "verb",
  },
  {
    phrase: "want to learn how to draw well",
    pronunciation: "/wɒnt tuː lɜːn haʊ tuː drɔː wel/",
    meaning: "Muốn học cách vẽ giỏi",
    context: "Dùng để nói về mục tiêu phát triển kỹ năng trong tương lai.",
    type: "verb",
  },
  // Prepositional chunks (green)
  {
  phrase: "with my close friends",
  pronunciation: "/wɪð maɪ kləʊs frendz/",
  meaning: "với những người bạn thân của tôi",
  context: "Dùng WITH để nói về người mà mình ở cùng hoặc thực hiện một hoạt động cùng.",
  type: "preposition",
},
{
  phrase: "there",
  pronunciation: "/ðeər/",
  meaning: "ở đó",
  context: "Dùng THERE để chỉ một địa điểm đã được nhắc đến hoặc được người nghe biết.",
  type: "preposition",
},
  // Time chunks (purple)
  {
    phrase: "in my free time",
    pronunciation: "/ɪn maɪ friː taɪm/",
    meaning: "Trong thời gian rảnh của tôi",
    context: "Dùng để chỉ thời điểm làm những việc yêu thích.",
    type: "time",
  },
  {
    phrase: "in the evening",
    pronunciation: "/ɪn ðə ˈiːvnɪŋ/",
    meaning: "Vào buổi tối",
    context: "Dùng để xác định thời gian chơi đàn.",
    type: "time",
  },
  {
    phrase: "Last week",
    pronunciation: "/lɑːst wiːk/",
    meaning: "Tuần trước",
    context: "Dùng để chỉ mốc thời gian trong quá khứ.",
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
    phrase: "My favorite singer",
    pronunciation: "/maɪ ˈfeɪvərɪt ˈsɪŋər/",
    meaning: "Ca sĩ yêu thích của tôi",
    context: "Dùng để chỉ thần tượng âm nhạc.",
    type: "noun",
  },
  {
    phrase: "are important parts of my life",
    pronunciation: "/ɑːr ɪmˈpɔːrtnt pɑːrts əv maɪ laɪf/",
    meaning: "Là những phần quan trọng trong cuộc sống của tôi",
    context: "Dùng để nhấn mạnh ý nghĩa của âm nhạc và nghệ thuật.",
    type: "noun",
  },
  {
  phrase: "many beautiful paintings and photos",
  pronunciation: "/ˈmeni ˈbjuːtɪfəl ˈpeɪntɪŋz ænd ˈfəʊtəʊz/",
  meaning: "nhiều bức tranh và ảnh đẹp",
  context: "Dùng để nói về nhiều tác phẩm nghệ thuật và hình ảnh đẹp.",
  type: "noun",
},
{
  phrase: "an art museum",
  pronunciation: "/ən ɑːt mjuˈziːəm/",
  meaning: "một bảo tàng nghệ thuật",
  context: "Dùng để nói về một nơi trưng bày các tác phẩm nghệ thuật.",
  type: "noun",
},
{
  phrase: "how to draw well",
  pronunciation: "/haʊ tə drɔː wel/",
  meaning: "cách vẽ đẹp",
  context: "Dùng để nói về cách thực hiện một hoạt động hoặc kỹ năng.",
  type: "noun",
},
{
  phrase: "Music and art",
  pronunciation: "/ˈmjuːzɪk ænd ɑːt/",
  meaning: "âm nhạc và nghệ thuật",
  context: "Dùng để nói về hai lĩnh vực hoặc môn nghệ thuật là âm nhạc và nghệ thuật.",
  type: "noun",
},
  // Adjective chunks (blue)
  {
    phrase: "very interesting",
    pronunciation: "/ˈveri ˈɪntrəstɪŋ/",
    meaning: "Rất thú vị",
    context: "Dùng để đánh giá tính chất hay ho của nghệ thuật.",
    type: "adjective",
  },
  {
  phrase: "is very famous",
  pronunciation: "/ɪz ˈveri ˈfeɪməs/",
  meaning: "rất nổi tiếng",
  context: "Dùng để miêu tả một người, địa điểm hoặc sự vật được nhiều người biết đến.",
  type: "adjective",
},
  // Reason chunks (yellow)
  {
  phrase: "because it makes people happy",
  pronunciation: "/bɪˈkɒz ɪt meɪks ˈpiːpəl ˈhæpi/",
  meaning: "bởi vì nó làm cho mọi người vui",
  context: "Dùng BECAUSE để đưa ra lý do hoặc giải thích cho một ý kiến hay hành động.",
  type: "reason",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I really like listening ____ pop music in my free time.",
    answer: "to",
    hint: "nghe (nhạc)",
  },
  {
    prompt: "My favorite singer is very famous, and she has a great ____.",
    answer: "voice",
    hint: "giọng hát",
  },
  {
    prompt: "I often play the guitar in the evening ____ relax.",
    answer: "to",
    hint: "để",
  },
  {
    prompt: "Last week, I went to an art museum ____ my close friends.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "I think art is very interesting because it makes people ____.",
    answer: "happy",
    hint: "vui vẻ / hạnh phúc",
  },
  {
    prompt: "In the future, I want to learn how ____ draw well.",
    answer: "to",
    hint: "để (làm gì)",
  },
  {
    prompt: "Music and art are important parts ____ my life.",
    answer: "of",
    hint: "của",
  },
];

export const lesson22Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I really like _____________",
  meaning: "Tôi rất thích...",
  example: "I really like listening to pop music.",
  alternatives: [
    "listening to pop music",
    "watching movies",
    "playing the guitar",
    "drawing pictures"
  ]
},

{
  term: "My favorite _____________ is",
  meaning: "... yêu thích của tôi là...",
  example: "My favorite singer is very famous.",
  alternatives: [
    "singer",
    "band",
    "song",
    "artist",
    "type of music"
  ]
},

{
  term: "a very famous _____________",
  meaning: "một... rất nổi tiếng",
  example: "She is a very famous singer.",
  alternatives: [
    "singer",
    "actor",
    "artist",
    "band"
  ]
},

{
  term: "has a great _____________",
  meaning: "có một... tuyệt vời",
  example: "She has a great voice.",
  alternatives: [
    "voice",
    "style",
    "song",
    "personality"
  ]
},

{
  term: "play _____________",
  meaning: "chơi...",
  example: "I play the guitar.",
  alternatives: [
    "the guitar",
    "the piano",
    "the violin",
    "the drums"
  ]
},

{
  term: "play _____________ in the evening",
  meaning: "chơi... vào buổi tối",
  example: "I play the guitar in the evening.",
  alternatives: [
    "the guitar in the evening",
    "the piano after work",
    "the drums at the weekend"
  ]
},

{
  term: "to _____________",
  meaning: "để...",
  example: "I listen to music to relax.",
  alternatives: [
    "to relax",
    "to have fun",
    "to feel happy",
    "to feel better"
  ]
},

{
  term: "Last week, I went to _____________",
  meaning: "Tuần trước, tôi đã đi...",
  example: "Last week, I went to an art museum.",
  alternatives: [
    "an art museum",
    "a concert",
    "a cinema",
    "a music show"
  ]
},

{
  term: "with _____________",
  meaning: "với...",
  example: "I went to a concert with my close friends.",
  alternatives: [
    "with my family",
    "with my classmates",
    "with my best friend",
    "with my sister"
  ]
},

{
  term: "We saw _____________",
  meaning: "Chúng tôi đã xem...",
  example: "We saw many beautiful paintings.",
  alternatives: [
    "many beautiful paintings",
    "some interesting photos",
    "many famous pictures",
    "some old artworks"
  ]
},

{
  term: "I think _____________ is _____________",
  meaning: "Tôi nghĩ... thì...",
  example: "I think art is interesting.",
  alternatives: [
    "art is interesting",
    "music is relaxing",
    "drawing is fun",
    "painting is difficult"
  ]
},

{
  term: "because it makes _____________",
  meaning: "vì nó khiến...",
  example: "I like music because it makes me relaxed.",
  alternatives: [
    "makes people happy",
    "makes me relaxed",
    "makes us feel good",
    "makes children excited"
  ]
},

{
  term: "In the future, I want to _____________",
  meaning: "Trong tương lai, tôi muốn...",
  example: "In the future, I want to learn how to draw.",
  alternatives: [
    "learn how to draw",
    "learn how to sing",
    "learn how to play the piano",
    "learn how to paint"
  ]
},

{
  term: "Music and art are important parts of _____________",
  meaning: "Âm nhạc và nghệ thuật là những phần quan trọng của...",
  example: "Music and art are important parts of my life.",
  alternatives: [
    "my life",
    "my daily life",
    "my free time",
    "my hobbies"
  ]
}

]
};