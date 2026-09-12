import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I like eating different kinds of food. My favorite meal is breakfast. I usually have bread and eggs for breakfast. I also drink a cup of coffee in the morning. For lunch, I usually eat rice with meat and vegetables. I sometimes eat out with my friends at the weekend. In the evening, I usually have dinner at home with my family. I drink a lot of water because I want to stay healthy.";

const translation =
"Tôi thích ăn nhiều loại thực phẩm khác nhau. Bữa ăn yêu thích nhất của tôi là bữa sáng. Tôi thường ăn bánh mì và trứng cho bữa sáng. Tôi cũng uống một tách cà phê vào buổi sáng. Vào bữa trưa, tôi thường ăn cơm với thịt và rau. Thỉnh thoảng, tôi đi ăn ở ngoài cùng bạn bè vào cuối tuần. Vào buổi tối, tôi thường ăn tối ở nhà cùng gia đình. Tôi uống rất nhiều nước vì tôi muốn giữ gìn sức khỏe.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "like eating", type: "verb" },
  { text: " " },
  { text: "different kinds of food", type: "noun" },
  { text: " . " },
  { text: "My favorite meal"},
  { text: " " },
  { text: " is", type: "verb" },
  { text: " " },
  { text: "breakfast", type: "noun" },
  { text: " . I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "have bread and eggs", type: "verb" },
  { text: " " },
  { text: "for breakfast", type: "preposition" },
  { text: " . I also " },
  { text: "drink a cup of coffee", type: "verb" },
  { text: " " },
  { text: "in the morning", type: "time" },
  { text: ". " },
  { text: "For lunch", type: "time" },
  { text: ", I usually " },
  { text: "eat", type: "verb" },
  { text: " " },
  { text: "rice with meat and vegetables", type: "noun" },
  { text: ". I " },
  { text: "sometimes", type: "time" },
  { text: " " },
  { text: "eat out", type: "verb" },
  { text: " " },
  { text: "with my friends", type: "preposition" },
  { text: " " },
  { text: "at the weekend", type: "time" },
  { text: ". " },
  { text: "In the evening", type: "time" },
  { text: " , I usually " },
  { text: " " },
  { text: "have dinner", type: "verb" },
  { text: " " },
  { text: "at home", type: "preposition" },
  { text: " " },
  { text: " with my family", type: "preposition" },
  { text: " . I " },
  { text: "drink a lot of water", type: "verb" },
  { text: " " },
  { text: "because I want to stay healthy" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "like eating",
    pronunciation: "/laɪk ˈiːtɪŋ/",
    meaning: "Thích ăn",
    context: "Dùng để diễn tả sở thích ăn uống.",
    type: "verb",
  },
  {
    phrase: "have bread and eggs",
    pronunciation: "/hæv bred ænd eɡz/",
    meaning: "Ăn bánh mì và trứng",
    context: "Dùng để chỉ món ăn cụ thể trong bữa.",
    type: "verb",
  },
  {
    phrase: "drink a cup of coffee",
    pronunciation: "/drɪŋk ə kʌp əv ˈkɒfi/",
    meaning: "Uống một tách cà phê",
    context: "Dùng để nói về thức uống buổi sáng.",
    type: "verb",
  },
  {
    phrase: "eat rice with meat and vegetables",
    pronunciation: "/iːt raɪs wɪð miːt ænd ˈvedʒtəbəlz/",
    meaning: "Ăn cơm với thịt và rau",
    context: "Dùng để chỉ các món ăn chính trong bữa trưa/tối.",
    type: "verb",
  },
  {
    phrase: "eat out",
    pronunciation: "/iːt aʊt/",
    meaning: "Đi ăn ngoài (nhà hàng, quán ăn)",
    context: "Dùng khi không nấu ăn ở nhà.",
    type: "verb",
  },
   {
    phrase: "want to stay",
    pronunciation: "/wɒnt tuː steɪ/",
    meaning: "Muốn giữ gìn sức khỏe",
    context: "Dùng để biểu thị ý định duy trì sức khỏe.",
    type: "verb",
  },
  {
    phrase: "have dinner",
    pronunciation: "/hæv ˈdɪnər/",
    meaning: "Ăn tối",
    context: "Dùng để nói về bữa ăn cuối ngày.",
    type: "verb",
  },
  {
    phrase: "drink a lot of water",
    pronunciation: "/drɪŋk ə lɒt əv ˈwɔːtər/",
    meaning: "Uống nhiều nước",
    context: "Dùng để chỉ thói quen tốt cho sức khỏe.",
    type: "verb",
  },
  // Prepositional chunks (pink)
  {
    phrase: "with my friends",
    pronunciation: "/wɪð maɪ frendz/",
    meaning: "Với những người bạn của tôi",
    context: "Dùng để chỉ người đi cùng.",
    type: "preposition",
  },
  {
    phrase: "at home",
    pronunciation: "/æt həʊm/",
    meaning: "Ở nhà",
    context: "Dùng để chỉ địa điểm ở nhà.",
    type: "preposition",
  },
  // Time & frequency chunks (purple)
  {
    phrase: "usually",
    pronunciation: "/ˈjuːʒʊəli/",
    meaning: "Thường xuyên",
    context: "Dùng để chỉ thói quen hằng ngày.",
    type: "time",
  },
  {
    phrase: "in the morning",
    pronunciation: "/ɪn ðə ˈmɔːnɪŋ/",
    meaning: "Vào buổi sáng",
    context: "Dùng để chỉ thời gian trong ngày.",
    type: "time",
  },
  {
    phrase: "For lunch",
    pronunciation: "/fɔːr lʌntʃ/",
    meaning: "Vào bữa trưa",
    context: "Dùng để xác định thời điểm bữa ăn trưa.",
    type: "time",
  },
  {
    phrase: "sometimes",
    pronunciation: "/ˈsʌmtaɪmz/",
    meaning: "Thỉnh thoảng",
    context: "Dùng để chỉ tần suất không đều đặn.",
    type: "time",
  },
  {
    phrase: "at the weekend",
    pronunciation: "/æt ðə ˈwiːkend/",
    meaning: "Vào dịp cuối tuần",
    context: "Dùng để chỉ thời gian nghỉ ngơi cuối tuần.",
    type: "time",
  },
  {
    phrase: "In the evening",
    pronunciation: "/ɪn ði ˈiːvnɪŋ/",
    meaning: "Vào buổi tối",
    context: "Dùng để xác định thời gian buổi tối.",
    type: "time",
  },
  // Noun chunks (red)
  {
    phrase: "different kinds of food",
    pronunciation: "/ˈdɪfrənt kaɪndz əv fuːd/",
    meaning: "Các loại đồ ăn khác nhau",
    context: "Dùng để chỉ sự đa dạng về thực phẩm.",
    type: "noun",
  },
  {
    phrase: "My favorite meal",
    pronunciation: "/maɪ ˈfeɪvərɪt miːl/",
    meaning: "Bữa ăn yêu thích của tôi",
    context: "Dùng để chỉ bữa ăn thích nhất trong ngày.",
    type: "noun",
  },
  {
    phrase: "breakfast",
    pronunciation: "/ˈbrekfəst/",
    meaning: "Bữa ăn sáng",
    context: "Dùng để chỉ bữa ăn đầu ngày.",
    type: "noun",
  },
  
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I like ____ different kinds of food.",
    answer: "eating",
    hint: "ăn",
  },
  {
    prompt: "My ____ meal is breakfast.",
    answer: "favorite",
    hint: "yêu thích",
  },
  {
    prompt: "I usually have bread and eggs ____ breakfast.",
    answer: "for",
    hint: "cho (bữa ăn)",
  },
  {
    prompt: "I also drink a cup of coffee ____ the morning.",
    answer: "in",
    hint: "vào (buổi sáng)",
  },
  {
    prompt: "For lunch, I usually eat rice ____ meat and vegetables.",
    answer: "with",
    hint: "với",
  },
  {
    prompt: "I sometimes eat ____ with my friends at the weekend.",
    answer: "out",
    hint: "ăn ngoài",
  },
  {
    prompt: "In the evening, I usually have dinner ____ home with my family.",
    answer: "at",
    hint: "ở (nhà)",
  },
  {
    prompt: "I drink a lot of water ____ I want to stay healthy.",
    answer: "because",
    hint: "bởi vì",
  },
];

export const lesson04Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I like eating  _____________",
  meaning: "Tôi thích ăn...",
  example: "I like eating Vietnamese food.",
  alternatives: ["different kinds of food", "Vietnamese food", "spicy food", "healthy food", "fast food"]
},

{
  term: "I usually have  _____________ for breakfast",
  meaning: "Tôi thường ăn ... vào bữa sáng",
  example: "I usually have bread and eggs for breakfast.",
  alternatives: ["bread and eggs", "noodles", "cereal and milk", "fruit and yogurt"]
},

{
  term: "I drink _____________",
  meaning: "Tôi uống...",
  example: "I drink coffee.",
  alternatives: ["coffee", "tea", "milk", "orange juice", "water"]
},

{
  term: "I usually eat  _____________",
  meaning: "Tôi thường ăn...",
  example: "I usually eat rice with chicken.",
  alternatives: ["rice with chicken", "noodles with vegetables", "rice with fish", "a sandwich"]
},

{
  term: "I usually have dinner  _____________",
  meaning: "Tôi thường ăn tối...",
  example: "I usually have dinner at home.",
  alternatives: ["at home", "with my family", "at a restaurant", "at 7 PM"]
},

{
  term: "I don't usually eat  _____________",
  meaning: "Tôi thường không ăn...",
  example: "I don't usually eat fast food.",
  alternatives: ["fast food", "spicy food", "sweets", "fried food"]
},

{
  term: "I like + V-ing",
  meaning: "Tôi thích...",
  example: "I like cooking.",
  alternatives: ["cooking", "eating out", "trying new food", "making drinks"]
},

{
  term: "I have  _____________ with my meal",
  meaning: "Tôi dùng ... cùng bữa ăn",
  example: "I have water with my meal.",
  alternatives: ["water", "tea", "coffee", "juice"]
}

]
};