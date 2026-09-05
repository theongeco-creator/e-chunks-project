import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "Every day, I usually get up at 6:30 AM. First, I brush my teeth, wash my face, and have a quick breakfast. After that, I leave home and go to work by motorbike. I start my work at 8:30 AM and finish at 5:30 PM. In the afternoon, I sometimes take a short break to have a cup of tea. When I get back home, I cook dinner and relax with my family. Before going to bed, I often read a book or practice English. I usually go to sleep at 11:00 PM to stay healthy.";

const translation =
"Mỗi ngày, tôi thường thức dậy vào lúc 6:30 sáng. Đầu tiên, tôi đánh răng, rửa mặt và ăn một bữa sáng nhanh gọn. Sau đó, tôi rời khỏi nhà và đi làm bằng xe máy. Tôi bắt đầu công việc lúc 8:30 sáng và kết thúc vào lúc 5:30 chiều. Vào buổi chiều, thỉnh thoảng tôi nghỉ giải lao một chút để uống một tách trà. Khi trở về nhà, tôi nấu bữa tối và thư giãn cùng gia đình. Trước khi đi ngủ, tôi thường đọc sách hoặc luyện tập tiếng Anh. Tôi thường đi ngủ lúc 11:00 đêm để giữ gìn sức khỏe.";

const readingSegments: ReadingSegment[] = [
  { text: "Every day", type: "time" },
  { text: " " },
  { text: "," },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "get up", type: "verb" },
  { text: " " },
  { text: "at 6:30 AM", type: "time" },
  { text: "." },
  { text: " " },
  { text: "First" },
  { text: " " },
  { text: "," },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "brush my teeth", type: "verb" },
  { text: " " },
  { text: "," },
  { text: " " },
  { text: "wash my face", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "have a quick breakfast", type: "verb" },
  { text: " " },
  { text: "." },
  { text: " " },
  { text: "After that" },
  { text: " " },
  { text: "," },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "leave home", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "go to work", type: "verb" },
  { text: " " },
  { text: "by motorbike", type: "preposition" },
  { text: " " },
  { text: "." },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "start my work", type: "verb" },
  { text: " " },
  { text: "at 8:30 AM", type: "time" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "finish", type: "verb" },
  { text: " " },
  { text: "at 5:30 PM", type: "time" },
  { text: "." },
  { text: " " },
  { text: "In the afternoon", type: "time" },
  { text: " " },
  { text: "," },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "sometimes", type: "time" },
  { text: " " },
  { text: "take a short break", type: "verb" },
  { text: " " },
{ text: "to have a cup of tea", type: "verb" },
  { text: " " },
  { text: "." },
  { text: " " },
  { text: "When" },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "get back home", type: "verb" },
  { text: "," },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "cook dinner", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "relax", type: "verb" },
  { text: " " },
  { text: "with my family", type: "preposition" },
  { text: "." },
  { text: " " },
  { text: "Before going to bed", type: "time" },
  { text: "," },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "often", type: "time" },
  { text: " " },
  { text: "read a book", type: "verb" },
  { text: " " },
  { text: "or" },
  { text: " " },
  { text: "practice English", type: "verb" },
  { text: "." },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "go to sleep", type: "verb" },
  { text: " " },
  { text: "at 11:00 PM", type: "time" },
  { text: " " },
  { text: "to stay healthy" },
  { text: "." }
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "get up",
    pronunciation: "/ɡet ʌp/",
    meaning: "Thức dậy",
    context: "Dùng để chỉ hành động thức dậy vào buổi sáng.",
    type: "verb",
  },
  {
    phrase: "brush my teeth",
    pronunciation: "/brʌʃ maɪ tiːθ/",
    meaning: "Đánh răng",
    context: "Dùng để nói về việc vệ sinh cá nhân buổi sáng.",
    type: "verb",
  },
   {
    phrase: "wash my face",
    pronunciation: "/wɒʃ maɪ feɪs/",
    meaning: "Rửa mặt",
    context: "Dùng để nói về việc vệ sinh cá nhân buổi sáng.",
    type: "verb",
  },
     {
    phrase: "have a quick breakfast",
    pronunciation: "/hæv ə ˈkwɪk ˈbrekfəst/",
    meaning: "Ăn sáng nhanh",
    context: "Dùng để nói về việc ăn sáng trong thời gian ngắn.",
    type: "verb",
  },
  {
    phrase: "leave home",
    pronunciation: "/liːv həʊm/",
    meaning: "Rời khỏi nhà",
    context: "Dùng khi bắt đầu đi ra ngoài từ nhà.",
    type: "verb",
  },
  {
    phrase: "go to work",
    pronunciation: "/ɡəʊ tuː wɜːk/",
    meaning: "Đi làm",
    context: "Dùng để nói về việc di chuyển đến nơi làm việc.",
    type: "verb",
  },
  {
    phrase: "start my work",
    pronunciation: "/stɑːt maɪ wɜːk/",
    meaning: "Bắt đầu công việc",
    context: "Dùng để chỉ thời điểm bắt tay vào làm việc.",
    type: "verb",
  },
  {
    phrase: "take a short break",
    pronunciation: "/teɪk ə ʃɔːt breɪk/",
    meaning: "Nghỉ ngơi ngắn/giải lao",
    context: "Dùng khi tạm dừng công việc để thư giãn.",
    type: "verb",
  },
  {
    phrase: "get back home",
    pronunciation: "/ɡet bæk həʊm/",
    meaning: "Trở về nhà",
    context: "Dùng khi quay về nhà sau giờ làm.",
    type: "verb",
  },
  {
    phrase: "cook dinner",
    pronunciation: "/kʊk ˈdɪnər/",
    meaning: "Nấu bữa tối",
    context: "Dùng để chỉ việc chuẩn bị bữa ăn tối.",
    type: "verb",
  },
  {
    phrase: "read a book",
    pronunciation: "/riːd ə bʊk/",
    meaning: "Đọc sách",
    context: "Dùng khi nói về sở thích hoặc thói quen đọc.",
    type: "verb",
  },
  {
    phrase: "practice English",
    pronunciation: "/ˈpræktɪs ˈɪŋɡlɪʃ/",
    meaning: "Luyện tập tiếng Anh",
    context: "Dùng khi rèn luyện kỹ năng ngôn ngữ.",
    type: "verb",
  },
  {
    phrase: "go to sleep",
    pronunciation: "/ɡəʊ tuː sliːp/",
    meaning: "Đi ngủ",
    context: "Dùng để chỉ hành động lên giường đi ngủ.",
    type: "verb",
  },
  // Prepositional chunks (pink)
  {
    phrase: "by motorbike",
    pronunciation: "/baɪ ˈməʊtəbaɪk/",
    meaning: "Bằng xe máy",
    context: "Dùng để chỉ phương tiện di chuyển.",
    type: "preposition",
  },
  {
    phrase: "at 6:30 AM.",
    pronunciation: "/æt ˈsɪks ˈθɜːti əm/",
    meaning: "Vào lúc 6:30 sáng",
    context: "Dùng để chỉ thời gian cụ thể.",
    type: "time",
  },
  // Time & frequency chunks (purple)
  {
    phrase: "usually",
    pronunciation: "/ˈjuːʒʊəli/",
    meaning: "Thường xuyên",
    context: "Dùng để chỉ tần suất diễn ra thói quen.",
    type: "time",
  },
  {
    phrase: "In the afternoon",
    pronunciation: "/ɪn ði ˌɑːftəˈnuːn/",
    meaning: "Vào buổi chiều",
    context: "Dùng để xác định khoảng thời gian trong ngày.",
    type: "time",
  },
  {
    phrase: "sometimes",
    pronunciation: "/ˈsʌmtaɪmz/",
    meaning: "Thỉnh thoảng",
    context: "Dùng để chỉ tần suất không thường xuyên.",
    type: "time",
  },
  {
    phrase: "Before going to bed",
    pronunciation: "/bɪˈfɔːr ˈɡəʊɪŋ tuː bed/",
    meaning: "Trước khi đi ngủ",
    context: "Dùng để chỉ thời điểm cuối ngày.",
    type: "time",
  },
  {
    phrase: "often",
    pronunciation: "/ˈɒfn/",
    meaning: "Thường hay",
    context: "Dùng để chỉ mức độ thường xuyên của hành động.",
    type: "time",
  },
  // Reason & purpose chunks (yellow)
  {
    phrase: "to stay healthy",
    pronunciation: "/tə steɪ ˈhelθi/",
    meaning: "Để giữ gìn sức khỏe",
    context: "Dùng để nêu mục đích của một hành động.",
    type: "reason",
  },
  {
    phrase: "to have a cup of tea",
    pronunciation: "/tə hæv ə kʌp əv tiː/",
    meaning: "Để uống một cốc trà",
    context: "Dùng để nêu mục đích của một hành động.",
    type: "reason",
  },
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "Every day, I usually ____ at 6:30 AM.",
    answer: "get up",
    hint: "thức dậy",
  },
  {
    prompt: "First, I ____ my teeth, wash my face, and have a quick breakfast.",
    answer: "brush",
    hint: "đánh (răng)",
  },
  {
    prompt: "After that, I leave home and go to work ____ motorbike.",
    answer: "by",
    hint: "bằng (phương tiện)",
  },
  {
    prompt: "In the afternoon, I sometimes take a short ____ to have a cup of tea.",
    answer: "break",
    hint: "giờ giải lao / nghỉ ngơi",
  },
  {
    prompt: "When I get back home, I cook dinner and ____ with my family.",
    answer: "relax",
    hint: "thư giãn",
  },
  {
    prompt: "Before going to bed, I often read a book or ____ English.",
    answer: "practice",
    hint: "luyện tập",
  },
  {
    prompt: "I usually go to sleep at 11:00 PM ____ stay healthy.",
    answer: "to",
    hint: "để (chỉ mục đích)",
  },
];

export const lesson03Content = {
  paragraph,
  translation, 
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I usually  _____________",
  meaning: "Tôi thường...",
  example: "I usually get up.",
  alternatives: ["get up", "wake up", "have breakfast", "go to work", "go to bed"]
},

{
  term: "I + V + at + _____________",
  meaning: "Tôi ... lúc...",
  example: "I get up at 6:30.",
  alternatives: ["get up at 6:30", "start work at 8:30", "finish work at 5:30", "go to bed at 11:00"]
},

{
  term: "First, I  _____________",
  meaning: "Đầu tiên, tôi...",
  example: "First, I brush my teeth.",
  alternatives: ["brush my teeth", "wash my face", "take a shower", "get dressed"]
},

{
  term: "After that, I  _____________",
  meaning: "Sau đó, tôi...",
  example: "After that, I leave home.",
  alternatives: ["leave home", "go to work", "have breakfast", "start work"]
},

{
  term: "go to _____________",
  meaning: "đi đến...",
  example: "I go to work.",
  alternatives: ["work", "school", "the gym", "the supermarket"]
},

{
  term: "go to + place + by + _____________",
  meaning: "đi đến ... bằng...",
  example: "I go to work by motorbike.",
  alternatives: ["motorbike", "bus", "car", "train"]
},

{
  term: "I start _____________",
  meaning: "Tôi bắt đầu...",
  example: "I start work at 8:30.",
  alternatives: ["work at 8:30", "school at 7:30", "my day at 8:00"]
},

{
  term: "I finish _____________",
  meaning: "Tôi kết thúc...",
  example: "I finish work at 5:30.",
  alternatives: ["work at 5:30", "school at 4:30", "my day at 6:00"]
},

{
  term: "have a _____________ breakfast",
  meaning: "ăn một bữa sáng...",
  example: "I have a light breakfast.",
  alternatives: ["a light", "a heavy", "a proper", "a hearty"]
},

{
  term: "I sometimes _____________",
  meaning: "Đôi khi tôi...",
  example: "I sometimes take a break.",
  alternatives: ["take a break", "drink coffee", "have some tea", "go outside"]
},

{
  term: "take a  _____________ break",
  meaning: "nghỉ...",
  example: "I take a short break.",
  alternatives: ["short", "quick", "lunch"]
},

{
  term: "Before + V-ing, I _____________",
  meaning: "Trước khi..., tôi...",
  example: "Before going to bed, I read a book.",
  alternatives: ["going to bed", "going to work", "leaving home"]
},

{
  term: "I often  _____________",
  meaning: "Tôi thường...",
  example: "I often read a book.",
  alternatives: ["read a book", "practice English", "watch movies", "listen to music"]
},

{
  term: "to stay +_____________",
  meaning: "để duy trì trạng thái...",
  example: "I exercise to stay healthy.",
  alternatives: ["healthy", "active", "focused"]
}

]
};