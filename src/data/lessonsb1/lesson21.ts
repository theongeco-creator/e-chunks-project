  import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

  const paragraph =
    "My favorite color is blue because it is calm and beautiful. I have a blue bag that I use every day. My bag is small and has a round key ring on it. I also have a black phone with a rectangular screen. In my room, there is a square table next to my bed. I like white walls because my room looks bright. I usually choose simple colors when I buy clothes or bags. I think colors and shapes are important when we choose things.";

  const translation = 
    "Màu sắc yêu thích của tôi là màu xanh dương vì nó điềm tĩnh và đẹp. Tôi có một chiếc túi màu xanh dương mà tôi dùng mỗi ngày. Túi của tôi nhỏ và có một chiếc móc khóa tròn ở trên đó. Tôi cũng có một chiếc điện thoại màu đen với màn hình hình chữ nhật. Trong phòng tôi, có một chiếc bàn hình vuông bên cạnh giường của tôi. Tôi thích những bức tường trắng vì phòng tôi trông sáng sủa. Tôi thường chọn những màu sắc đơn giản khi tôi mua quần áo hoặc túi xách. Tôi nghĩ màu sắc và hình khối rất quan trọng khi chúng ta chọn đồ vật.";

  const readingSegments: ReadingSegment[] = [
    { text: "My favorite color" , type: "noun" },
    { text: " " },
    { text: "is blue", type: "adjective"  },
    { text: " " },
    { text: "because", type: "reason" },
    { text: " it is " },
    { text: "calm and beautiful", type: "adjective" },
    { text: ". I " },
    { text: " " },
    { text: "have", type: "verb" },
    { text: " " },
    { text: "a blue bag", type: "noun" },
    { text: " " },
    { text: "that I use every day", type: "reason" },
    { text: " " },
    { text: ". My bag is " },
    { text: " " },
    { text: "small and has a round key ring", type: "adjective" },
    { text: " " },
    { text: "on it", type: "preposition"  },
    { text: " " },
    { text: ". I also " },
    { text: " " },
    { text: "have", type: "verb" },
    { text: " " },
    { text: "a black phone with a rectangular screen", type: "noun" },
    { text: " " },
    { text: ". " },
    { text: "In my room", type: "preposition" },
    { text: " " },
    { text: ", there is", type: "verb"  },
    { text: " " },
    { text: "a square table", type: "noun"  },
    { text: " " },
    { text: "next to my bed", type: "preposition"  },
    { text: " " },
    { text: ". I " },
    { text: " " },
    { text: "like", type: "verb" },
    { text: " " },
    { text: "white walls", type: "noun" },
    { text: " " },
    { text: "because", type: "reason"  },
    { text: " " },
    { text: "my room", type: "noun"  },
    { text: " " },
    { text: "looks bright", type: "adjective" },
    { text: " " },
    { text: ". I " },
    { text: "usually", type: "time" },
    { text: " " },
    { text: "choose", type: "verb" },
    { text: " " },
    { text: "simple colors", type: "noun" },
    { text: " " },
    { text: " when I buy clothes or bags", type: "reason"  },
    { text: " " },
    { text: ". I" },
    { text: " " },
    { text: "think", type: "verb"  },
    { text: " " },
    { text: "colors and shapes", type: "noun" },
    { text: " are " },
    { text: "important", type: "adjective" },
    { text: " when we" },
    { text: " " },
    { text: "choose", type: "verb"  },
    { text: " " },
    { text: "things.", type: "noun"  },
    { text: " " },
  ];

  const chunks: Chunk[] = [
    // Verb chunks (green)
    {
      phrase: "have a blue bag",
      pronunciation: "/hæv ə bluː bæɡ/",
      meaning: "Có một chiếc túi màu xanh",
      context: "Dùng để nói về đồ dùng cá nhân mang theo.",
      type: "verb",
    },
    {
      phrase: "have a black phone with a rectangular screen",
      pronunciation: "/hæv ə blæk fəʊn wɪð ə rekˈtæŋɡjʊlər skriːn/",
      meaning: "Có một chiếc điện thoại màu đen với màn hình chữ nhật",
      context: "Dùng để miêu tả thiết bị công nghệ và hình dáng của nó.",
      type: "verb",
    },
    {
      phrase: "like white walls",
      pronunciation: "/laɪk waɪt wɔːlz/",
      meaning: "Thích những bức tường màu trắng",
      context: "Dùng để nói về sở thích màu sắc trong không gian sống.",
      type: "verb",
    },
    {
      phrase: "choose simple colors",
      pronunciation: "/tʃuːz ˈsɪmpl ˈkʌlərz/",
      meaning: "Chọn những màu sắc đơn giản",
      context: "Dùng để chỉ phong cách lựa chọn màu sắc cá nhân.",
      type: "verb",
    },
    // Adjective chunks (blue)
    {
      phrase: "calm and beautiful",
      pronunciation: "/kɑːm ænd ˈbjuːtɪfl/",
      meaning: "Điềm tĩnh và đẹp đẽ",
      context: "Dùng để miêu tả cảm giác và vẻ đẹp của màu sắc.",
      type: "adjective",
    },
    {
      phrase: "small and has a round key ring",
      pronunciation: "/smɔːl ænd hæz ə raʊnd kiː rɪŋ/",
      meaning: "Nhỏ và có một chiếc móc khóa tròn",
      context: "Dùng để miêu tả kích thước và chi tiết của túi.",
      type: "adjective",
    },
    {
      phrase: "looks bright",
      pronunciation: "/lʊks braɪt/",
      meaning: "Trông sáng sủa",
      context: "Dùng để miêu tả không gian phòng.",
      type: "adjective",
    },
    {
      phrase: "important",
      pronunciation: "/ɪmˈpɔːrtnt/",
      meaning: "Quan trọng",
      context: "Dùng để đánh giá vai trò của màu sắc và hình khối.",
      type: "adjective",
    },
    // Prepositional chunks (pink)
    {
      phrase: "In my room",
      pronunciation: "/ɪn maɪ ruːm/",
      meaning: "Trong phòng của tôi",
      context: "Dùng để định vị không gian riêng tư.",
      type: "preposition",
    },
  {
    phrase: "next to my bed",
    pronunciation: "/nekst tə maɪ bed/",
    meaning: "bên cạnh giường của tôi",
    context: "Dùng NEXT TO để nói về vị trí ngay bên cạnh một địa điểm hoặc vật khác.",
    type: "preposition",
  },
  {
    phrase: "on it",
    pronunciation: "/ɒn ɪt/",
    meaning: "ở trên nó",
    context: "Dùng ON để nói về vị trí của một vật ở trên bề mặt của một vật khác.",
    type: "preposition",
  },
    // Noun chunks (red)
    {
      phrase: "colors and shapes",
      pronunciation: "/ˈkʌlərz ænd ʃeɪps/",
      meaning: "Màu sắc và hình khối",
      context: "Dùng để chỉ các yếu tố thị giác trong cuộc sống.",
      type: "noun",
    },
    {
  phrase: "a black phone with a rectangular screen",
  pronunciation: "/ə blæk fəʊn wɪð ə rekˈtæŋɡjələr skriːn/",
  meaning: "một chiếc điện thoại màu đen có màn hình hình chữ nhật",
  context: "Dùng để mô tả một đồ vật và các đặc điểm của nó.",
  type: "noun",
},
{
  phrase: "white walls",
  pronunciation: "/waɪt wɔːlz/",
  meaning: "những bức tường màu trắng",
  context: "Dùng để nói về những bức tường có màu trắng.",
  type: "noun",
},
{
  phrase: "a blue bag",
  pronunciation: "/ə bluː bæɡ/",
  meaning: "một chiếc túi màu xanh",
  context: "Dùng để nói về một chiếc túi và màu sắc của nó.",
  type: "noun",
},
{
  phrase: "simple colors",
  pronunciation: "/ˈsɪmpəl ˈkʌlərz/",
  meaning: "những màu sắc đơn giản",
  context: "Dùng để nói về các màu sắc không quá nổi bật hoặc phức tạp.",
  type: "noun",
},
{
  phrase: "things",
  pronunciation: "/θɪŋz/",
  meaning: "những thứ, đồ vật",
  context: "Dùng để nói chung về các đồ vật hoặc những thứ được nhắc đến.",
  type: "noun",
},
{
  phrase: "My favorite color",
  pronunciation: "/maɪ ˈfeɪvərɪt ˈkʌlər/",
  meaning: "màu sắc yêu thích của tôi",
  context: "Dùng để nói về màu mà mình thích nhất.",
  type: "noun",
},
{
  phrase: "a square table",
  pronunciation: "/ə skweər ˈteɪbəl/",
  meaning: "một cái bàn hình vuông",
  context: "Dùng để nói về một cái bàn và hình dạng của nó.",
  type: "noun",
},
    // Time chunks (purple)
    {
      phrase: "usually",
      pronunciation: "/ˈjuːʒuəli/",
      meaning: "Thường xuyên",
      context: "Dùng để chỉ tần suất thực hiện thói quen mua sắm.",
      type: "time",
    },
    // Reason chunks (yellow)
    {
      phrase: "because",
      pronunciation: "/bɪˈkɒz/",
      meaning: "Bởi vì",
      context: "Dùng để giải thích nguyên nhân thích màu sắc hoặc tường sáng.",
      type: "reason",
    },
  ];

  const practice: FillBlankQuestion[] = [
    {
      prompt: "My favorite color is blue ____ it is calm and beautiful.",
      answer: "because",
      hint: "bởi vì",
    },
    {
      prompt: "I have a blue bag ____ I use every day.",
      answer: "that",
      hint: "mà",
    },
    {
      prompt: "My bag is small and has a round key ring ____ it.",
      answer: "on",
      hint: "trên (đó)",
    },
    {
      prompt: "In my room, there is a square table next ____ my bed.",
      answer: "to",
      hint: "cạnh",
    },
    {
      prompt: "I like white walls because my room looks ____.",
      answer: "bright",
      hint: "sáng sủa",
    },
    {
      prompt: "I usually choose simple colors when I buy clothes ____ bags.",
      answer: "or",
      hint: "hoặc",
    },
    {
      prompt: "I think colors and shapes are important when we choose ____.",
      answer: "things",
      hint: "những thứ / đồ vật",
    },
  ];

  export const lesson21Content = {
    paragraph,
    translation,
    chunks,
    readingSegments,
    practice,
    extraVocab: [
{
  term: "My favorite color is _____________",
  meaning: "Màu yêu thích của tôi là...",
  example: "My favorite color is blue.",
  alternatives: [
    "blue",
    "black",
    "white",
    "green",
    "pink",
    "red"
  ]
},

{
  term: "because it is _____________",
  meaning: "vì nó...",
  example: "I like blue because it is calm and beautiful.",
  alternatives: [
    "calm and beautiful",
    "bright and simple",
    "nice and soft",
    "easy to match"
  ]
},

{
  term: "I have a _____________",
  meaning: "Tôi có một...",
  example: "I have a blue bag.",
  alternatives: [
    "a blue bag",
    "a black phone",
    "a white shirt",
    "a green notebook"
  ]
},

{
  term: "I use it _____________",
  meaning: "Tôi dùng nó...",
  example: "I use it every day.",
  alternatives: [
    "every day",
    "at work",
    "at school",
    "at home"
  ]
},

{
  term: "My _____________ is _____________",
  meaning: "... của tôi thì...",
  example: "My bag is small and simple.",
  alternatives: [
    "small and simple",
    "big and useful",
    "light and comfortable",
    "new and clean"
  ]
},

{
  term: "has a + _____________ + _____________",
  meaning: "có một...",
  example: "My bag has a small round mirror.",
  alternatives: [
    "a round key ring",
    "a square table",
    "a rectangular screen",
    "a small round mirror"
  ]
},

{
  term: "a _____________ color with _____________",
  meaning: "vật màu... có...",
  example: "A black phone with a rectangular screen.",
  alternatives: [
    "a black phone with a rectangular screen",
    "a blue bag with a small pocket",
    "a white shirt with a simple design"
  ]
},

{
  term: "In my room, there is _____________",
  meaning: "Trong phòng tôi có...",
  example: "In my room, there is a square table.",
  alternatives: [
    "a square table",
    "a round mirror",
    "a small chair",
    "a large bed"
  ]
},

{
  term: "There is a _____________ next to _____________",
  meaning: "Có một... bên cạnh...",
  example: "There is a table next to my bed.",
  alternatives: [
    "a table next to my bed",
    "a chair next to my desk",
    "a lamp next to my bed"
  ]
},

{
  term: "I like _____________",
  meaning: "Tôi thích...",
  example: "I like white walls.",
  alternatives: [
    "white walls",
    "blue curtains",
    "green plants",
    "black furniture"
  ]
},

{
  term: "because _____________",
  meaning: "vì...",
  example: "I like white walls because my room looks bright.",
  alternatives: [
    "my room looks bright",
    "my room looks clean",
    "my clothes look simple",
    "my bag looks nice"
  ]
},

{
  term: "choose _____________",
  meaning: "chọn...",
  example: "I choose simple colors.",
  alternatives: [
    "choose simple colors",
    "choose bright colors",
    "choose dark colors",
    "choose comfortable clothes"
  ]
},

{
  term: "when I buy _____________",
  meaning: "khi tôi mua...",
  example: "I choose simple colors when I buy clothes.",
  alternatives: [
    "clothes",
    "bags",
    "shoes",
    "furniture"
  ]
},

{
  term: "colors and shapes are important when _____________",
  meaning: "màu sắc và hình dạng quan trọng khi...",
  example: "Colors and shapes are important when we choose things.",
  alternatives: [
    "when we choose things",
    "when we buy clothes",
    "when we buy furniture",
    "when we design a room"
  ]
}

]
  };