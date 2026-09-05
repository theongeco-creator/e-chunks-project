import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I like spending time in nature, especially in parks and near rivers. There are many beautiful trees and flowers in my area. I often go for a walk in the park when the weather is nice. I like watching birds and taking photos of trees and flowers. I think it is important to keep our environment clean. I always put my rubbish in the bin and try not to waste water. I also use a reusable bottle when I go outside. I feel happy when I spend time in a clean and quiet place.";

const translation =
"Tôi thích dành thời gian hòa mình vào thiên nhiên, đặc biệt là ở trong công viên và gần các dòng sông. Nơi tôi sống có rất nhiều cây và hoa đẹp. Tôi thường đi dạo trong công viên khi thời tiết đẹp. Tôi thích ngắm nhìn những chú chim và chụp ảnh cây cối, hoa lá. Tôi nghĩ việc giữ gìn môi trường sạch sẽ là rất quan trọng. Tôi luôn bỏ rác vào thùng và cố gắng không lãng phí nước. Tôi cũng dùng bình nước tái sử dụng mỗi khi ra ngoài. Tôi cảm thấy rất hạnh phúc khi được dành thời gian ở một nơi sạch sẽ và yên tĩnh.";

const readingSegments: ReadingSegment[] = [
  { text: "I " },
  { text: "like spending time", type: "verb" },
  { text: " " },
  { text: "in nature", type: "preposition" },
  { text: " " },
  { text: ", especially" },
  { text: " " },
  { text: "in parks and near rivers", type: "preposition"  },
  { text: " . " },
  { text: "There are", type: "verb" },
  { text: " " },
  { text: "many beautiful trees and flowers", type: "noun" },
  { text: " " },
  { text: " in my area", type: "preposition"   },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "often", type: "time"  },
  { text: " " },
  { text: "go for a walk", type: "verb" },
  { text: " " },
  { text: "in the park", type: "preposition" },
  { text: " " },
  { text: " when the weather is nice.", type: "reason"  },
  { text: ". I" },
  { text: " " },
  { text: "like", type: "verb" },
  { text: " " },
  { text: "watching birds", type: "noun" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "taking photos of trees and flowers", type: "noun" },
  { text: " " },
  { text: ". I think it is" },
  { text: " " },
  { text: "important", type: "adjective" },
  { text: " " },
  { text: "to to keep our environment clean " , type: "reason" },
  { text: ". I " },
  { text: "always", type: "time" },
  { text: " " },
  { text: "put my rubbish", type: "verb" },
  { text: " " },
  { text: "in the bin", type: "preposition" },
  { text: " and" },
  { text: " " },
  { text: "try not to waste", type: "verb"  },
  { text: " " },
  { text: "water", type: "noun" },
  { text: ". I also " },
  { text: "use", type: "verb" },
  { text: " " },
  { text: "a reusable bottle", type: "noun" },
  { text: " " },
  { text: " when I go outside", type: "reason"  },
  { text: ". I " },
  { text: "feel happy", type: "adjective" },
  { text: " when I" },
  { text: " " },
  { text: "spend time", type: "verb"   },
  { text: " " },
  { text: "in a clean and quiet place.", type: "preposition"   },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "like spending time in nature",
    pronunciation: "/laɪk ˈspendɪŋ taɪm ɪn ˈneɪtʃər/",
    meaning: "Thích dành thời gian ở ngoài thiên nhiên",
    context: "Dùng để nói về sở thích tận hưởng không gian tự nhiên.",
    type: "verb",
  },
  {
    phrase: "go for a walk",
    pronunciation: "/ɡəʊ fər ə wɔːk/",
    meaning: "đi dạo / đi bộ thư giãn",
    context: "Collocation: cụm diễn tả một hành động hoàn chỉnh",
    type: "verb",
  },
  {
    phrase: "like watching birds and taking photos",
    pronunciation: "/laɪk ˈwɒtʃɪŋ bɜːdz ænd ˈteɪkɪŋ ˈfəʊtəʊz/",
    meaning: "Thích ngắm chim và chụp ảnh",
    context: "Dùng để kể về các hoạt động khi ở ngoài trời.",
    type: "verb",
  },
  {
    phrase: "keep our environment clean",
    pronunciation: "/kiːp ˈaʊər ɪnˈvaɪrənmənt kliːn/",
    meaning: "Giữ gìn môi trường của chúng ta sạch sẽ",
    context: "Dùng để nói về trách nhiệm bảo vệ cảnh quan chung.",
    type: "verb",
  },
  {
    phrase: "put my rubbish",
    pronunciation: "/pʊt maɪ ˈrʌbɪʃ/",
    meaning: "Vứt rác vào",
    context: "Dùng để chỉ hành động giữ gìn vệ sinh cá nhân.",
    type: "verb",
  },
  {
    phrase: "waste water",
    pronunciation: "/weɪst ˈwɔːtər/",
    meaning: "Lãng phí nước",
    context: "Dùng trong câu phủ định để chỉ việc tiết kiệm tài nguyên nước.",
    type: "verb",
  },
  {
    phrase: "use a reusable bottle",
    pronunciation: "/juːz ə riːˈjuːzəbl ˈbɒtl/",
    meaning: "Sử dụng bình nước có thể tái sử dụng",
    context: "Dùng để nói về thói quen sống xanh, bảo vệ môi trường.",
    type: "verb",
  },
  // Prepositional Chunks (pink)
  {
  phrase: "in nature",
  pronunciation: "/ɪn ˈneɪtʃər/",
  meaning: "trong thiên nhiên",
  context: "Dùng IN để nói về một địa điểm hoặc môi trường mà ai đó đang ở hoặc hoạt động.",
  type: "preposition",
},
{
  phrase: "in parks and near rivers",
  pronunciation: "/ɪn pɑːrks ænd nɪər ˈrɪvərz/",
  meaning: "ở công viên và gần sông",
  context: "Dùng IN để nói về địa điểm và NEAR để nói về vị trí gần một địa điểm khác.",
  type: "preposition",
},
{
  phrase: "of trees and flowers",
  pronunciation: "/əv triːz ænd ˈflaʊərz/",
  meaning: "của cây cối và hoa",
  context: "Dùng OF để nói về sự liên quan, thuộc về hoặc thành phần của một sự vật.",
  type: "preposition",
},
{
  phrase: "in the bin",
  pronunciation: "/ɪn ðə bɪn/",
  meaning: "trong thùng rác",
  context: "Dùng IN để nói về vị trí của một vật ở bên trong một nơi hoặc vật chứa.",
  type: "preposition",
},
{
  phrase: "in a clean and quiet place",
  pronunciation: "/ɪn ə kliːn ænd ˈkwaɪət pleɪs/",
  meaning: "ở một nơi sạch sẽ và yên tĩnh",
  context: "Dùng IN để nói về địa điểm hoặc môi trường mà ai đó đang ở hoặc dành thời gian.",
  type: "preposition",
},
  // Noun chunks (red)
  {
    phrase: "There are many beautiful trees and flowers",
    pronunciation: "/ðeər ɑːr ˈmeni ˈbjuːtɪfl triːz ænd ˈflaʊərz/",
    meaning: "Có rất nhiều cây cối và hoa đẹp",
    context: "Dùng để miêu tả cảnh quan thiên nhiên xung quanh.",
    type: "noun",
  },
  // Adjective chunks (blue)
  {
    phrase: "important",
    pronunciation: "/ɪmˈpɔːrtnt/",
    meaning: "Quan trọng",
    context: "Dùng để đánh giá mức độ cần thiết của một vấn đề.",
    type: "adjective",
  },
  {
    phrase: "feel happy",
    pronunciation: "/fiːl ˈhæpi/",
    meaning: "Cảm thấy vui vẻ, hạnh phúc",
    context: "Dùng để diễn tả tâm trạng thoải mái, tích cực.",
    type: "adjective",
  },
  // Time chunks (purple)
  {
    phrase: "always",
    pronunciation: "/ˈɔːlweɪz/",
    meaning: "Luôn luôn",
    context: "Dùng để chỉ mức độ thường xuyên của thói quen tốt.",
    type: "time",
  },
  // Reason chunks (purple)
{
  phrase: "when the weather is nice",
  pronunciation: "/wen ðə ˈweðər ɪz naɪs/",
  meaning: "khi thời tiết đẹp",
  context: "Dùng WHEN để nói về thời điểm hoặc điều kiện xảy ra một hành động.",
  type: "reason",
},
{
  phrase: "to keep our environment clean",
  pronunciation: "/tə kiːp aʊər ɪnˈvaɪərənmənt kliːn/",
  meaning: "để giữ môi trường của chúng ta sạch sẽ",
  context: "Dùng TO + động từ để nói về mục đích của một hành động.",
  type: "reason",
},
{
  phrase: "when I go outside",
  pronunciation: "/wen aɪ ɡəʊ aʊtˈsaɪd/",
  meaning: "khi tôi ra ngoài",
  context: "Dùng WHEN để nói về thời điểm một hành động xảy ra.",
  type: "reason",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I like spending time ____ nature, especially in parks and near rivers.",
    answer: "in",
    hint: "trong",
  },
  {
    prompt: "There are many beautiful trees and flowers in my ____.",
    answer: "area",
    hint: "khu vực",
  },
  {
    prompt: "I often go ____ a walk in the park when the weather is nice.",
    answer: "for",
    hint: "đi (dạo)",
  },
  {
    prompt: "I think it is important to keep our environment ____.",
    answer: "clean",
    hint: "sạch sẽ",
  },
  {
    prompt: "I always put my rubbish in the ____ and try not to waste water.",
    answer: "bin",
    hint: "thùng rác",
  },
  {
    prompt: "I also use a reusable bottle when I go ____.",
    answer: "outside",
    hint: "ra ngoài",
  },
  {
    prompt: "I feel happy when I spend time in a clean and quiet ____.",
    answer: "place",
    hint: "nơi chốn / địa điểm",
  },
];

export const lesson18Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I like spending time in _____________",
  meaning: "Tôi thích dành thời gian ở...",
  example: "I like spending time in nature.",
  alternatives: [
    "in nature",
    "in parks",
    "near rivers",
    "at the beach",
    "in the countryside",
    "in parks",
    "near rivers"
  ]
},

{
  term: "There are many _____________ in my area",
  meaning: "Có nhiều... trong khu vực của tôi",
  example: "There are many beautiful trees in my area.",
  alternatives: [
    "beautiful trees",
    "colorful flowers",
    "small parks",
    "green spaces"
  ]
},

{
  term: "I often go for a walk _____________",
  meaning: "Tôi thường đi dạo...",
  example: "I often go for a walk in the park.",
  alternatives: [
    "in the park",
    "near my house",
    "in the evening",
    "at the weekend"
  ]
},

{
  term: "when _____________",
  meaning: "khi...",
  example: "I often go for a walk when the weather is nice.",
  alternatives: [
    "when the weather is nice",
    "when it is sunny",
    "when I have free time",
    "when it is cool"
  ]
},

{
  term: "I like _____________",
  meaning: "Tôi thích...",
  example: "I like watching birds.",
  alternatives: [
    "watching birds",
    "taking photos",
    "walking in the park",
    "sitting near the river"
  ]
},

{
  term: "take photos of _____________",
  meaning: "chụp ảnh...",
  example: "I take photos of trees and flowers.",
  alternatives: [
    "trees and flowers",
    "birds",
    "nature",
    "beautiful places"
  ]
},

{
  term: "I think it is important to _____________",
  meaning: "Tôi nghĩ điều quan trọng là...",
  example: "I think it is important to keep our environment clean.",
  alternatives: [
    "keep our environment clean",
    "protect nature",
    "save water",
    "keep parks clean"
  ]
},

{
  term: "keep _____________",
  meaning: "giữ... sạch sẽ",
  example: "We should keep our streets clean.",
  alternatives: [
    "keep our environment clean",
    "keep our parks clean",
    "keep our streets clean"
  ]
},

{
  term: "I always _____________ in/into _____________",
  meaning: "Tôi luôn... vào...",
  example: "I always put my rubbish in the bin.",
  alternatives: [
    "put my rubbish in the bin",
    "put plastic bottles in the bin",
    "put paper in the recycling bin"
  ]
},

{
  term: "try not to _____________",
  meaning: "cố gắng không...",
  example: "I try not to waste water.",
  alternatives: [
    "waste water",
    "waste food",
    "use too much plastic",
    "make too much rubbish"
  ]
},

{
  term: "use a reusable _____________",
  meaning: "dùng một... có thể tái sử dụng",
  example: "I use a reusable bottle.",
  alternatives: [
    "bottle",
    "bag",
    "cup",
    "lunch box"
  ]
},

{
  term: "when I go _____________",
  meaning: "khi tôi đi...",
  example: "I use a reusable bottle when I go outside.",
  alternatives: [
    "outside",
    "to the park",
    "to work",
    "shopping"
  ]
},

{
  term: "I feel _____________ when _____________",
  meaning: "Tôi cảm thấy... khi...",
  example: "I feel happy when I spend time in nature.",
  alternatives: [
    "happy when I spend time in nature",
    "relaxed when I walk in the park",
    "good when I am outside"
  ]
},

{
  term: "a clean and quiet",
  meaning: "sạch sẽ và yên tĩnh",
  example: "a clean and quiet park",
  alternatives: [
    "a clean and quiet park",
    "a clean and quiet beach",
    "a clean and quiet place"
  ]
}

]
};