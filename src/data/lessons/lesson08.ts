import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "In my free time, I have many hobbies, but I like listening to music the most. I usually listen to pop music on my smartphone every evening. It helps me relax after a long day at work. At the weekend, I often go to a small coffee shop with my close friends. We talk about our week, share stories, and drink delicious milk tea. Sometimes, I also like cooking simple meals at home for my family. I don't like playing computer games because I think it is boring. Having hobbies makes my life more interesting and happy.";

const translation =
"Vào thời gian rảnh, tôi có nhiều sở thích, nhưng tôi thích nghe nhạc nhất. Tôi thường nghe nhạc pop trên điện thoại thông minh vào mỗi buổi tối. Nó giúp tôi thư giãn sau một ngày dài làm việc. Vào cuối tuần, tôi thường đến một quán cà phê nhỏ cùng những người bạn thân. Chúng tôi trò chuyện về một tuần đã qua, chia sẻ những câu chuyện và uống trà sữa thơm ngon. Thỉnh thoảng, tôi cũng thích nấu những bữa ăn đơn giản tại nhà cho gia đình. Tôi không thích chơi trò chơi máy tính vì tôi nghĩ nó rất nhàm chán. Có những sở thích cá nhân giúp cuộc sống của tôi trở nên thú vị và hạnh phúc hơn.";

const readingSegments: ReadingSegment[] = [
  { text: "In my free time", type: "time" },
  { text: ", I" },
  { text: " " },
  { text: "have", type: "verb" },
  { text: " " },
  { text: "many hobbies", type: "noun" },
  { text: " " },
  { text: "but I " },
  { text: " " },
  { text: "like", type: "verb" },
  { text: " " },
  { text: "listening to music", type: "noun" },
  { text: " " },
  { text: " the most. I " },
  { text: "usually", type: "time" },
  { text: " listen to pop music", type: "noun" },
  { text: " " },
  { text: "on my smartphone", type: "preposition" },
  { text: " " },
  { text: "every evening", type: "time" },
  { text: ". It " },
  { text: "helps me relax", type: "verb" },
  { text: " " },
  { text: "after a long day at work", type: "time" },
  { text: ". " },
  { text: "At the weekend", type: "time" },
  { text: ", I" },
  { text: " " },
  { text: "often " , type: "time" },
  { text: " " },
  { text: "go to", type: "verb" },
  { text: " " },
  { text: "a small coffee shop", type: "noun" },
  { text: " " },
  { text: "with my close friends", type: "preposition" },
  { text: ". We " },
  { text: "talk about", type: "verb" },
  { text: " " },
  { text: "our week", type: "noun" },
  { text: " , " },
  { text: "share stories", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "drink", type: "verb" },
  { text: " " },
  { text: "delicious milk tea", type: "noun" },
  { text: " " },
  { text: " " },
  { text: ". Sometimes, I also " },
  { text: " " },
  { text: "like cooking", type: "verb" },
  { text: " " },
  { text: "simple meals", type: "noun" },
  { text: " " },
  { text: "at home", type: "preposition" },
  { text: " " },
  { text: " for my family", type: "preposition" },
  { text: " . " },
  { text: "I" },
  { text: " " },
  { text: "don't like playing", type: "verb" },
  { text: " " },
  { text: "computer games", type: "noun" },
  { text: " " },
  { text: "because I think it is boring", type: "reason" },
  { text: ". " },
  { text: "Having hobbies" },
  { text: " " },
  { text: "makes my life", type: "verb" },
  { text: " " },
  { text: "more interesting and happy", type: "adjective" },
  { text: " " },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "like listening to music",
    pronunciation: "/laɪk ˈlɪsnɪŋ tuː ˈmjuːzɪk/",
    meaning: "Thích nghe nhạc",
    context: "Dùng để diễn tả sở thích âm nhạc cá nhân.",
    type: "verb",
  },
  {
    phrase: "makes",
    pronunciation: "/meɪk/",
    meaning: "Làm cho",
    context: "Dùng để diễn tả tác dụng hoặc kết quả của một hành động.",
    type: "verb",
  },
  {
    phrase: "helps me relax",
    pronunciation: "/helps miː rɪˈlæks/",
    meaning: "Giúp tôi thư giãn",
    context: "Dùng để chỉ tác dụng giải tỏa căng thẳng của một hoạt động.",
    type: "verb",
  },
  {
    phrase: "go to",
    pronunciation: "/ɡəʊ tuː/",
    meaning: "Đi đến một nơi nào đó",
    context: "Dùng để chỉ việc đến một địa điểm cụ thể.",
    type: "verb",
  },
  {
    phrase: "talk about",
    pronunciation: "/tɔːk əˈbaʊt/",
    meaning: "Trò chuyện về cái gì đó",
    context: "Dùng khi chia sẻ các câu chuyện về một chủ đề cụ thể.",
    type: "verb",
  },
  {
    phrase: "like cooking simple meals",
    pronunciation: "/laɪk ˈkʊkɪŋ ˈsɪmpl miːlz/",
    meaning: "Thích nấu những bữa ăn đơn giản",
    context: "Dùng để nói về sở thích nấu nướng hằng ngày.",
    type: "verb",
  },
  {
    phrase: "don't like playing",
    pronunciation: "/dəʊnt laɪk ˈpleɪɪŋ/",
    meaning: "Không thích chơi một hoạt động nào đó",
    context: "Dùng để bày tỏ sự không hứng thú với một hoạt động.",
    type: "verb",
  },
  // Noun chunks (red)
  {
    phrase: "listen to pop music",
    pronunciation: "/laɪk ˈlɪsnɪŋ tuː ˈmjuːzɪk/",
    meaning: "Collocation: Listen to + Noun: Nghe nhạc pop",
    context: "Dùng để chỉ hoạt động nghe nhạc yêu thích.",
    type: "noun",
  },
  {
    phrase: "Having hobbies",
    pronunciation: "/ˈhævɪŋ ˈhɒbiːz/",
    meaning: "Việc có sở thích",
    context: "Dùng để chỉ việc sở hữu một sở thích hoặc hoạt động giải trí.",
    type: "noun",
  },
  {
    phrase: "delicious milk tea",
    pronunciation: "/dɪˈlɪʃəs ˈmɪlk tiː/",
    meaning: "Trà sữa ngon",
    context: "Dùng để chỉ loại đồ uống yêu thích.",
    type: "noun",
  },
  {
    phrase: "simple meals",
    pronunciation: "/ˈsɪmpl miːlz/",
    meaning: "Bữa ăn đơn giản",
    context: "Dùng để chỉ những bữa ăn đơn giản và dễ làm.",
    type: "noun",
  },
  // Prepositional chunks (pink)
  {
    phrase: "with my close friends",
    pronunciation: "/wɪð maɪ kləʊs frendz/",
    meaning: "Với những người bạn thân của tôi",
    context: "Dùng để chỉ những người đi cùng hoặc gặp gỡ.",
    type: "preposition",
  },
  {
    phrase: "at home",
    pronunciation: "/æt həʊm/",
    meaning: "Ở nhà",
    context: "Dùng để chỉ địa điểm thực hiện hoạt động tại gia.",
    type: "preposition",
  },
  {
    phrase: "on my smartphone",
    pronunciation: "/ɒn maɪ ˈsmɑːtˌfəʊn/",
    meaning: "Trên điện thoại thông minh của tôi",
    context: "Dùng để chỉ địa điểm thực hiện hoạt động trên thiết bị di động.",
    type: "preposition",
  },
  {
    phrase: "for my family",
    pronunciation: "/fɔː maɪ ˈfæməli/",
    meaning: "Cho gia đình tôi",
    context: "Dùng để chỉ mục đích hoặc đối tượng của hoạt động.",
    type: "preposition",
  },
  // Time chunks (purple)
  {
    phrase: "In my free time",
    pronunciation: "/ɪn maɪ friː taɪm/",
    meaning: "Trong thời gian rảnh của tôi",
    context: "Dùng để chỉ khoảng thời gian nhàn rỗi.",
    type: "time",
  },
  {
    phrase: "usually",
    pronunciation: "/ˈjuːʒʊəli/",
    meaning: "Thường xuyên",
    context: "Dùng để chỉ tần suất diễn ra hành động.",
    type: "time",
  },
  {
    phrase: "every evening",
    pronunciation: "/ˈevri ˈiːvnɪŋ/",
    meaning: "Mỗi buổi tối",
    context: "Dùng để chỉ thời điểm lặp lại mỗi ngày.",
    type: "time",
  },
  {
    phrase: "after a long day at work",
    pronunciation: "/ˈɑːftər ə lɒŋ deɪ ət wɜːk/",
    meaning: "Sau một ngày làm việc dài mệt mỏi",
    context: "Dùng để chỉ thời điểm cần nghỉ ngơi sau giờ làm.",
    type: "time",
  },
  {
    phrase: "At the weekend",
    pronunciation: "/æt ðə ˈwiːkend/",
    meaning: "Vào dịp cuối tuần",
    context: "Dùng để chỉ thời gian nghỉ ngơi cuối tuần.",
    type: "time",
  },
  // Reason chunks (yellow)
  {
    phrase: "because",
    pronunciation: "/bɪˈkɒz/",
    meaning: "Bởi vì",
    context: "Dùng để giải thích lý do không thích chơi game.",
    type: "reason",
  },
  // Adjective chunks (blue)
  {
    phrase: "boring",
    pronunciation: "/ˈbɔːrɪŋ/",
    meaning: "Nhàm chán",
    context: "Dùng để miêu tả cảm giác tẻ nhạt đối với một việc gì đó.",
    type: "adjective",
  },
  {
    phrase: "more interesting and happy",
    pronunciation: "/mɔːr ˈɪntrəstɪŋ ənd ˈhæpi/",
    meaning: "thú vị và hạnh phúc hơn",
    context: "Dùng để miêu tả lợi ích tuyệt vời của việc có sở thích.",
    type: "adjective",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "In my free time, I have many hobbies, but I like listening ____ music the most.",
    answer: "to",
    hint: "đến / nghe (nhạc)",
  },
  {
    prompt: "I usually listen to pop music on my smartphone every ____.",
    answer: "evening",
    hint: "buổi tối",
  },
  {
    prompt: "It helps me relax after a long day ____ work.",
    answer: "at",
    hint: "làm việc ở (nơi làm)",
  },
  {
    prompt: "At the weekend, I often go to a small coffee shop ____ my close friends.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "Sometimes, I also like cooking simple meals at home ____ my family.",
    answer: "for",
    hint: "cho",
  },
  {
    prompt: "I don't like playing computer games because I think it is ____.",
    answer: "boring",
    hint: "nhàm chán",
  },
  {
    prompt: "Having hobbies makes my life more interesting ____ happy.",
    answer: "and",
    hint: "và",
  },
];

export const lesson08Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "In my free time, I _____________",
  meaning: "Trong thời gian rảnh, tôi...",
  example: "In my free time, I read books.",
  alternatives: ["read books", "watch movies", "practice English", "go for a walk", "listen to music"]
},

{
  term: "I have many hobbies, but I like _____________ the most.",
  meaning: "Tôi có nhiều sở thích, nhưng tôi thích ... nhất.",
  example: "I have many hobbies, but I like listening to music the most.",
  alternatives: ["listening to music", "cooking", "reading books", "watching movies", "taking photos"]
},

{
  term: "I usually listen to _____________",
  meaning: "Tôi thường nghe...",
  example: "I usually listen to pop music.",
  alternatives: ["pop music", "rock music", "podcasts", "the radio", "English songs"]
},

{
  term: "I _____________ on my smartphone.",
  meaning: "Tôi ... trên điện thoại thông minh.",
  example: "I listen to music on my smartphone.",
  alternatives: ["listen to music", "watch videos", "read books", "play games"]
},

{
  term: "every _____________",
  meaning: "mỗi...",
  example: "I listen to music every day.",
  alternatives: ["every morning", "every day", "every weekend", "every Sunday"]
},

{
  term: "It helps me _____________",
  meaning: "Nó giúp tôi...",
  example: "It helps me relax.",
  alternatives: ["relax", "sleep better", "feel happy", "learn English", "reduce stress"]
},

{
  term: "after _____________",
  meaning: "sau...",
  example: "I listen to music after work.",
  alternatives: ["a long day at work", "after work", "after school", "after a busy day", "in the evening"]
},

{
  term: "go to _____________",
  meaning: "đi đến...",
  example: "I go to a coffee shop.",
  alternatives: ["a coffee shop", "the park", "the gym", "the library", "the cinema"]
},

{
  term: "talk about _____________",
  meaning: "nói về...",
  example: "We talk about our hobbies.",
  alternatives: ["our week", "our hobbies", "our work", "our plans", "our favorite movies"]
},

{
  term: "share _____________",
  meaning: "chia sẻ...",
  example: "We share stories.",
  alternatives: ["stories", "photos", "ideas", "food", "experiences"]
},

{
  term: "I also like _____________",
  meaning: "Tôi cũng thích...",
  example: "I also like cooking.",
  alternatives: ["cooking", "drawing", "dancing", "taking photos", "gardening"]
},

{
  term: "I don't like _____________",
  meaning: "Tôi không thích...",
  example: "I don't like playing computer games.",
  alternatives: ["playing computer games", "going shopping", "running", "cooking"]
},

{
  term: "makes me feel _____________",
  meaning: "khiến tôi cảm thấy...",
  example: "It makes me feel happy.",
  alternatives: ["happy", "relaxed", "comfortable", "excited", "calm"]
},

{
  term: "makes my life _____________",
  meaning: "khiến cuộc sống của tôi...",
  example: "It makes my life more interesting.",
  alternatives: ["more interesting", "more exciting", "more enjoyable"]
},

{
  term: "cook _____________",
  meaning: "nấu...",
  example: "I cook simple meals.",
  alternatives: ["simple meals", "dinner", "breakfast", "noodles", "soup"]
},

{
  term: "for my _____________",
  meaning: "cho...",
  example: "I cook dinner for my family.",
  alternatives: ["family", "friends", "parents", "coworkers"]
},

{
  term: "with my _____________",
  meaning: "với...",
  example: "I go to the cinema with my close friends.",
  alternatives: ["close friends", "family", "classmates", "coworkers"]
},

{
  term: "At the weekend, I often _____________",
  meaning: "Vào cuối tuần, tôi thường...",
  example: "At the weekend, I often meet my friends.",
  alternatives: ["go to a coffee shop", "meet my friends", "stay at home", "go shopping", "visit my family"]
}

]
};