import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I love watching movies with my family in the evening. Action movies are my favorite because they are very exciting. I often watch funny TV shows on my laptop at the weekend. My favorite actor is very talented and handsome. Last Saturday, I went to the cinema to see a new animated film. The tickets were quite cheap, so I bought some popcorn too. I don't like horror movies because they are too scary. I think watching TV is a great way to relax after work.";

const translation =
  "Tôi rất thích xem phim cùng gia đình vào buổi tối. Phim hành động là thể loại tôi thích nhất vì chúng rất kịch tính. Tôi thường xem các chương trình truyền hình hài hước trên máy tính xách tay vào cuối tuần. Diễn viên yêu thích của tôi rất tài năng và điển trai. Thứ Bảy tuần trước, tôi đã đến rạp chiếu phim để xem một bộ phim hoạt hình mới. Giá vé khá rẻ nên tôi đã mua thêm một ít bỏng ngô. Tôi không thích phim kinh dị vì chúng quá đáng sợ. Tôi nghĩ xem TV là một cách tuyệt vời để thư giãn sau giờ làm việc.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "love watching movies", type: "verb" },
  { text: " " },
  { text: "with my family", type: "preposition" },
  { text: " " },
  { text: "in the evening", type: "time" },
  { text: " . " },
  { text: "Action movies" },
  { text: " " },
  { text: "are", type: "verb" },
  { text: " " },
  { text: "my favorite", type: "noun" },
  { text: " " },
  { text: "because they are very exciting", type: "reason" },
  { text: " " },
  { text: ". I " },
  { text: "often", type: "time" },
  { text: " " },
  { text: "watch funny TV shows", type: "verb" },
  { text: " " },
  { text: "on my laptop", type: "preposition" },
  { text: " " },
  { text: "at the weekend", type: "time" },
  { text: ". " },
  { text: "My favorite actor" },
  { text: " " },
  { text: " is " , type: "verb" },
  { text: " " },
  { text: "very talented and handsome", type: "adjective" },
  { text: ". " },
  { text: "Last Saturday", type: "time" },
  { text: ", I " },
  { text: "went to", type: "verb" },
  { text: " " },
  { text: "the cinema", type: "verb" },
  { text: " " },
  { text: "to see a new animated film", type: "reason" },
  { text: " . " },
  { text: "The tickets" },
  { text: " " },
  { text: "were", type: "verb" },
  { text: " " },
  { text: "quite cheap", type: "adjective" },
  { text: ", so I " },
  { text: "bought", type: "verb" },
  { text: " " },
  { text: "some popcorn", type: "noun" },
  { text: " " },
  { text: "too" },
  { text: " " },
  { text: ". I " },
  { text: "don't like", type: "verb" },
  { text: " " },
  { text: "horror movies", type: "noun" },
  { text: " " },
  { text: "because", type: "reason" },
  { text: " they are " },
  { text: "too scary", type: "adjective" },
  { text: ". I" },
  { text: " " },
  { text: "think", type: "verb"  },
  { text: " " },
  { text: "watching TV", type: "noun" },
  { text: " " },
  { text: "is", type: "verb"  },
  { text: " " },
  { text: "a great way to relax", type: "noun" },
  { text: " " },
  { text: "after work", type: "time" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "love watching movies with my family",
    pronunciation: "/lʌv ˈwɒtʃɪŋ ˈmuːviːz wɪð maɪ ˈfæməli/",
    meaning: "Rất thích xem phim cùng gia đình",
    context: "Dùng để diễn tả sở thích giải trí quây quần bên người thân.",
    type: "verb",
  },
  {
    phrase: "often watch funny TV shows on my laptop",
    pronunciation: "/ˈɒfn wɒtʃ ˈfʌni tiːˈviː ʃəʊz ɒn maɪ ˈlæptɒp/",
    meaning: "Thường xem các chương trình truyền hình hài hước trên máy tính xách tay",
    context: "Dùng để nói về thói quen giải trí cá nhân.",
    type: "verb",
  },
  {
    phrase: "went to the cinema to see a new animated film",
    pronunciation: "/went tuː ðə ˈsɪnəmə tuː siː ə nuː ˈænɪmeɪtɪd fɪlm/",
    meaning: "Đã đi đến rạp chiếu phim để xem một bộ phim hoạt hình mới",
    context: "Dùng để kể về trải nghiệm xem phim rạp trong quá khứ.",
    type: "verb",
  },
  {
    phrase: "bought some popcorn",
    pronunciation: "/bɔːt sʌm ˈpɒpkɔːn/",
    meaning: "Đã mua một ít bỏng ngô",
    context: "Dùng để chỉ món ăn vặt quen thuộc khi đi xem phim.",
    type: "verb",
  },
  {
    phrase: "don't like horror movies",
    pronunciation: "/duː nɒt laɪk ˈhɒrə ˈmuːviːz/",
    meaning: "Không thích phim kinh dị",
    context: "Dùng để biểu thị thể loại phim không hợp gu.",
    type: "verb",
  },
  {
  phrase: "went to",
  pronunciation: "/went tuː/",
  meaning: "đã đi đến",
  context: "Dùng để nói về hành động đi đến một địa điểm trong quá khứ.",
  type: "verb",
},
{
  phrase: "bought",
  pronunciation: "/bɔːt/",
  meaning: "đã mua",
  context: "Dùng để nói về hành động mua một thứ gì đó trong quá khứ.",
  type: "verb",
},
  // Noun chunks (red)
  {
    phrase: "Action movies are my favorite",
    pronunciation: "/ˈækʃn ˈmuːviːz ɑːr maɪ ˈfeɪvərɪt/",
    meaning: "Phim hành động là yêu thích của tôi",
    context: "Dùng để chỉ thể loại phim ưu tiên hàng đầu.",
    type: "noun",
  },
  {
    phrase: "My favorite actor",
    pronunciation: "/maɪ ˈfeɪvərɪt ˈæktər/",
    meaning: "Nam diễn viên yêu thích của tôi",
    context: "Dùng để chỉ thần tượng điện ảnh.",
    type: "noun",
  },
  {
    phrase: "a great way to relax after work",
    pronunciation: "/ə ɡreɪt weɪ tuː rɪˈlæks ˈɑːftər wɜːk/",
    meaning: "Một cách tuyệt vời để thư giãn sau giờ làm việc",
    context: "Dùng để đánh giá lợi ích của việc xem TV.",
    type: "noun",
  },
  {
  phrase: "horror movies",
  pronunciation: "/ˈhɒrər ˈmuːviz/",
  meaning: "phim kinh dị",
  context: "Dùng để nói về thể loại phim kinh dị.",
  type: "noun",
},
{
  phrase: "The tickets",
  pronunciation: "/ðə ˈtɪkɪts/",
  meaning: "những vé đó",
  context: "Dùng để nói về những tấm vé đã được nhắc đến hoặc đã xác định.",
  type: "noun",
},
{
  phrase: "some popcorn",
  pronunciation: "/sʌm ˈpɒpkɔːrn/",
  meaning: "một ít bỏng ngô",
  context: "Dùng để nói về một lượng bỏng ngô không xác định.",
  type: "noun",
},
{
  phrase: "my favorite",
  pronunciation: "/maɪ ˈfeɪvərɪt/",
  meaning: "thứ tôi thích nhất",
  context: "Dùng để nói về một người hoặc vật mà mình thích nhất.",
  type: "noun",
},
  // Adjective chunks (blue)
  {
    phrase: "very exciting",
    pronunciation: "/ˈveri ɪkˈsaɪtɪŋ/",
    meaning: "Rất thú vị, kích thích",
    context: "Dùng để miêu tả cảm giác khi xem phim hành động.",
    type: "adjective",
  },
  {
    phrase: "very talented and handsome",
    pronunciation: "/ˈveri ˈtæləntɪd ænd ˈhænsəm/",
    meaning: "Rất tài năng và đẹp trai",
    context: "Dùng để khen ngợi ngoại hình và năng lực của diễn viên.",
    type: "adjective",
  },
  {
    phrase: "quite cheap",
    pronunciation: "/kwaɪt tʃiːp/",
    meaning: "Khá rẻ",
    context: "Dùng để nhận xét về giá vé xem phim.",
    type: "adjective",
  },
  {
    phrase: "too scary",
    pronunciation: "/tuː ˈskeəri/",
    meaning: "Quá đáng sợ",
    context: "Dùng để giải thích lý do không thích phim kinh dị.",
    type: "adjective",
  },
  // Time chunks (purple)
  {
    phrase: "in the evening",
    pronunciation: "/ɪn ðə ˈiːvnɪŋ/",
    meaning: "Vào buổi tối",
    context: "Dùng để chỉ thời điểm xem phim cùng gia đình.",
    type: "time",
  },
  {
    phrase: "at the weekend",
    pronunciation: "/æt ðə ˈwiːkend/",
    meaning: "Vào dịp cuối tuần",
    context: "Dùng để chỉ thời gian xem chương trình giải trí.",
    type: "time",
  },
  {
    phrase: "Last Saturday",
    pronunciation: "/lɑːst ˈsætədeɪ/",
    meaning: "Thứ Bảy tuần trước",
    context: "Dùng để chỉ mốc thời gian cụ thể trong quá khứ.",
    type: "time",
  },
  // Prepositional chunks (yellow)
  {
  phrase: "on my laptop",
  pronunciation: "/ɒn maɪ ˈlæptɒp/",
  meaning: "trên máy tính xách tay của tôi",
  context: "Dùng ON để nói về việc một hoạt động được thực hiện trên một thiết bị.",
  type: "preposition",
},
  // Reason chunks (yellow)
  {
    phrase: "because",
    pronunciation: "/bɪˈkɒz/",
    meaning: "Bởi vì",
    context: "Dùng để giải thích nguyên nhân thích hoặc không thích điều gì.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I love watching movies with my family ____ the evening.",
    answer: "in",
    hint: "vào (buổi tối)",
  },
  {
    prompt: "Action movies are my favorite ____ they are very exciting.",
    answer: "because",
    hint: "bởi vì",
  },
  {
    prompt: "I often watch funny TV shows on my laptop ____ the weekend.",
    answer: "at",
    hint: "vào (cuối tuần)",
  },
  {
    prompt: "Last Saturday, I went ____ the cinema to see a new animated film.",
    answer: "to",
    hint: "đến (rạp phim)",
  },
  {
    prompt: "The tickets were quite cheap, so I bought some popcorn ____.",
    answer: "too",
    hint: "cũng thế / nữa",
  },
  {
    prompt: "I don't like horror movies ____ they are too scary.",
    answer: "because",
    hint: "bởi vì",
  },
  {
    prompt: "I think watching TV is a great way to relax ____ work.",
    answer: "after",
    hint: "sau (khi làm việc)",
  },
];

export const lesson23Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I love _____________",
  meaning: "Tôi rất thích...",
  example: "I love watching movies.",
  alternatives: [
    "watching movies",
    "watching TV shows",
    "listening to music",
    "reading books"
  ]
},

{
  term: "watch _____________ with _____________",
  meaning: "xem... với...",
  example: "I watch movies with my family.",
  alternatives: [
    "movies with my family",
    "TV shows with my friends",
    "films with my sister"
  ]
},

{
  term: "in _____________",
  meaning: "vào...",
  example: "I watch movies in the evening.",
  alternatives: [
    "in the morning",
    "in the afternoon",
    "at the weekend",
    "after work"
  ]
},

{
  term: "_____________ movies are my favorite",
  meaning: "... là thể loại phim tôi thích nhất",
  example: "Action movies are my favorite.",
  alternatives: [
    "action movies",
    "comedy movies",
    "animated movies",
    "romantic movies"
  ]
},

{
  term: "because they are _____________",
  meaning: "vì chúng...",
  example: "I like action movies because they are exciting.",
  alternatives: [
    "exciting",
    "funny",
    "interesting",
    "relaxing",
    "scary"
  ]
},

{
  term: "I often watch _____________",
  meaning: "Tôi thường xem...",
  example: "I often watch funny TV shows.",
  alternatives: [
    "funny TV shows",
    "action movies",
    "cartoons",
    "the news"
  ]
},

{
  term: "on _____________",
  meaning: "trên...",
  example: "I often watch movies on my laptop.",
  alternatives: [
    "on my laptop",
    "on my phone",
    "on my tablet",
    "on TV"
  ]
},

{
  term: "My favorite _____________ is _____________",
  meaning: "... yêu thích của tôi là...",
  example: "My favorite actor is talented.",
  alternatives: [
    "actor is talented",
    "actress is beautiful",
    "singer is famous",
    "director is famous"
  ]
},

{
  term: "very _____________",
  meaning: "rất...",
  example: "My favorite actor is very talented.",
  alternatives: [
    "very talented",
    "very handsome",
    "very funny",
    "very famous"
  ]
},

{
  term: "Last _____________, I went to _____________",
  meaning: "... tuần trước, tôi đã đi...",
  example: "Last Saturday, I went to the cinema.",
  alternatives: [
    "Last Saturday, I went to the cinema",
    "Last weekend, I went to a movie theater"
  ]
},

{
  term: "go to _____________ to _____________",
  meaning: "đi đến... để...",
  example: "I go to the cinema to see a film.",
  alternatives: [
    "go to the cinema to see a film",
    "go to the theater to watch a movie",
    "go to the park to relax"
  ]
},

{
  term: "a new _____________",
  meaning: "một... mới",
  example: "I watched a new animated film.",
  alternatives: [
    "new animated film",
    "new action movie",
    "new comedy"
  ]
},

{
  term: "The tickets were _____________",
  meaning: "Vé thì...",
  example: "The tickets were quite cheap.",
  alternatives: [
    "quite cheap",
    "very expensive",
    "not too expensive",
    "affordable"
  ]
},

{
  term: "buy _____________ too",
  meaning: "cũng mua...",
  example: "I buy some popcorn too.",
  alternatives: [
    "buy some popcorn too",
    "buy a drink too",
    "buy some snacks too"
  ]
},

{
  term: "I don't like _____________",
  meaning: "Tôi không thích...",
  example: "I don't like horror movies.",
  alternatives: [
    "horror movies",
    "watching scary films",
    "sad movies",
    "boring TV shows"
  ]
},

{
  term: "too _____________",
  meaning: "quá...",
  example: "They are too scary.",
  alternatives: [
    "too scary",
    "too boring",
    "too long",
    "too expensive"
  ]
},

{
  term: "a great way to _____________",
  meaning: "một cách tuyệt vời để...",
  example: "Watching movies is a great way to relax.",
  alternatives: [
    "a great way to relax",
    "a great way to have fun",
    "a great way to spend time"
  ]
},

{
  term: "after _____________",
  meaning: "sau...",
  example: "I watch movies after work.",
  alternatives: [
    "after work",
    "after school",
    "after a long day",
    "after dinner"
  ]
}

]
};