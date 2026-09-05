import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "I love eating out with my family on weekends. Our favorite restaurant is a small Italian place near my house. The food there is always delicious and not very expensive. I usually order a large pizza and a glass of orange juice. The waiters are very friendly and they serve the food quickly. Last night, we booked a table for five people to celebrate a birthday. I prefer eating at a restaurant because I don't have to wash the dishes. I think eating out is a great way to enjoy good food with friends.";

const translation =
    "Tôi rất thích đi ăn tiệm cùng gia đình vào cuối tuần. Nhà hàng yêu thích của chúng tôi là một quán Ý nhỏ gần nhà. Đồ ăn ở đó luôn thơm ngon và giá cả không quá đắt. Tôi thường gọi một chiếc bánh pizza lớn và một ly nước cam. Các nhân viên phục vụ rất thân thiện và lên món nhanh chóng. Tối qua, chúng tôi đã đặt một bàn cho năm người để tổ chức sinh nhật. Tôi thích đi ăn ở nhà hàng hơn vì không phải rửa bát. Tôi nghĩ đi ăn bên ngoài là một cách tuyệt vời để thưởng thức đồ ăn ngon cùng bạn bè.";
const readingSegments: ReadingSegment[] = [
  { text: "I " },
{ text: "love eating out", type: "verb" },
{ text: " " },
{ text: "with my family", type: "preposition" },
{ text: " " },
{ text: "on weekends", type: "time" },
{ text: ". " },

{ text: "Our favorite restaurant " },
{ text: "is", type: "verb" },
{ text: " " },
{ text: "a small Italian place", type: "noun" },
{ text: " " },
{ text: "near my house", type: "preposition" },
{ text: ". " },

{ text: "The food there " },
{ text: "is", type: "verb" },
{ text: " " },
{ text: "always", type: "time" },
{ text: " " },
{ text: "delicious and not very expensive", type: "adjective" },
{ text: ". " },

{ text: "I " },
{ text: "usually", type: "time" },
{ text: " " },
{ text: "order", type: "verb" },
{ text: " " },
{ text: "a large pizza and a glass of orange juice", type: "noun" },
{ text: ". " },

{ text: "The waiters " },
{ text: "are", type: "verb" },
{ text: " " },
{ text: "very friendly", type: "adjective" },
{ text: " " },
{ text: "and" },
{ text: " " },
{ text: "they " },
{ text: "serve the food", type: "verb" },
{ text: " " },
{ text: "quickly" },
{ text: ". " },

{ text: "Last night", type: "time" },
{ text: ", we " },
{ text: "booked", type: "verb" },
{ text: " " },
{ text: "a table", type: "noun" },
{ text: " " },
{ text: "for five people", type: "preposition" },
{ text: " " },
{ text: "to celebrate a birthday", type: "reason" },
{ text: ". " },

{ text: "I " },
{ text: "prefer eating", type: "verb" },
{ text: " " },
{ text: "at a restaurant", type: "preposition" },
{ text: " " },
{ text: "because I don't have to wash the dishes", type: "reason" },
{ text: ". " },

{ text: "I " },
{ text: "think", type: "verb" },
{ text: " " },
{ text: "eating out", type: "noun" },
{ text: " " },
{ text: "is", type: "verb" },
{ text: " " },
{ text: "a great way to enjoy good food", type: "noun" },
{ text: " " },
{ text: "with friends", type: "preposition" },
{ text: "." }
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "love eating out with my family",
    pronunciation: "/lʌv ˈiːtɪŋ aʊt wɪð maɪ ˈfæməli/",
    meaning: "Rất thích đi ăn hàng cùng gia đình",
    context: "Dùng để nói về sở thích ăn uống sum họp bên người thân.",
    type: "verb",
  },
  {
    phrase: "usually order a large pizza and a glass of orange juice",
    pronunciation: "/ˈjuːʒuəli ˈɔːrdər ə lɑːrdʒ ˈpiːtsə ænd ə ɡlæs əv ˈɔːrɪndʒ dʒuːs/",
    meaning: "Thường gọi một chiếc bánh pizza lớn và một ly nước cam",
    context: "Dùng để miêu tả món ăn thức uống quen thuộc khi gọi món.",
    type: "verb",
  },
  {
    phrase: "serve the food quickly",
    pronunciation: "/sɜːrv ðə fuːd ˈkwɪkli/",
    meaning: "Phục vụ món ăn nhanh chóng",
    context: "Dùng để khen ngợi tốc độ phục vụ của nhà hàng.",
    type: "verb",
  },
  {
    phrase: "booked a table for five people",
    pronunciation: "/bʊkt ə ˈteɪbl fɔːr faɪv ˈpiːpl/",
    meaning: "Đã đặt một bàn cho năm người",
    context: "Dùng để kể về hành động đặt chỗ trước tại nhà hàng trong quá khứ.",
    type: "verb",
  },
  {
    phrase: "don't have to wash the dishes",
    pronunciation: "/duː nɒt hæv tuː wɒʃ ðə dɪʃɪz/",
    meaning: "don't have to = Không phải / rửa bát đĩa",
    context: "Dùng để nêu lý do thích đi ăn ngoài vì sự tiện lợi.",
    type: "verb",
  },
  {
  phrase: "order a large pizza",
  pronunciation: "/ˈɔːrdər ə lɑːrdʒ ˈpiːtsə/",
  meaning: "gọi một chiếc pizza lớn",
  context: "Dùng để nói về hành động gọi món ăn hoặc đồ uống tại nhà hàng.",
  type: "verb",
},
{
  phrase: "serve the food quickly",
  pronunciation: "/sɜːrv ðə fuːd ˈkwɪkli/",
  meaning: "phục vụ đồ ăn nhanh chóng",
  context: "Dùng để nói về hành động phục vụ đồ ăn cho khách.",
  type: "verb",
},
{
  phrase: "prefer eating",
  pronunciation: "/prɪˈfɜːr ˈiːtɪŋ/",
  meaning: "thích ăn hơn",
  context: "Dùng để nói về việc thích một lựa chọn hoặc hoạt động hơn một lựa chọn khác.",
  type: "verb",
},
  // Noun chunks (red)
  {
    phrase: "Our favorite restaurant",
    pronunciation: "/ˈaʊər ˈfeɪvərɪt ˈrestərɑːnt/",
    meaning: "Nhà hàng yêu thích của chúng tôi",
    context: "Dùng để chỉ địa điểm ăn uống quen thuộc nhất.",
    type: "noun",
  },
  {
    phrase: "a great way to enjoy good food with friends",
    pronunciation: "/ə ɡreɪt weɪ tuː ɪnˈdʒɔɪ ɡʊd fuːd wɪð frendz/",
    meaning: "Một cách tuyệt vời để thưởng thức đồ ăn ngon với bạn bè",
    context: "Dùng để đánh giá lợi ích xã hội của việc đi ăn hàng.",
    type: "noun",
  },
  {
  phrase: "a small Italian place",
  pronunciation: "/ə smɔːl ɪˈtæliən pleɪs/",
  meaning: "một quán ăn Ý nhỏ",
  context: "Dùng để nói về một địa điểm ăn uống nhỏ phục vụ đồ ăn Ý.",
  type: "noun",
},
{
  phrase: "a large pizza and a glass of orange juice",
  pronunciation: "/ə lɑːdʒ ˈpiːtsə ænd ə ɡlɑːs əv ˈɒrɪndʒ dʒuːs/",
  meaning: "một chiếc pizza lớn và một ly nước cam",
  context: "Dùng để nói về các món ăn và đồ uống được gọi hoặc sử dụng.",
  type: "noun",
},
{
  phrase: "The waiters",
  pronunciation: "/ðə ˈweɪtərz/",
  meaning: "những người phục vụ",
  context: "Dùng để nói về những người phục vụ khách hàng tại nhà hàng.",
  type: "noun",
},
{
  phrase: "eating out",
  pronunciation: "/ˈiːtɪŋ aʊt/",
  meaning: "việc ăn ngoài",
  context: "Dùng để nói về hoạt động ăn uống tại nhà hàng hoặc bên ngoài nhà.",
  type: "noun",
},
  // Adjective chunks (blue)
  {
    phrase: "always delicious and not very expensive",
    pronunciation: "/ˈɔːlweɪz dɪˈlɪʃəs ænd nɒt ˈveri ɪkˈspensɪv/",
    meaning: "Luôn ngon và không quá đắt đỏ",
    context: "Dùng để nhận xét về chất lượng và giá cả của món ăn.",
    type: "adjective",
  },
  {
    phrase: "very friendly",
    pronunciation: "/ˈveri ˈfrendli/",
    meaning: "Rất thân thiện",
    context: "Dùng để miêu tả thái độ của nhân viên phục vụ.",
    type: "adjective",
  },
  // Time chunks (purple)
  {
    phrase: "on weekends",
    pronunciation: "/ɒn ˈwiːkendz/",
    meaning: "Vào các dịp cuối tuần",
    context: "Dùng để chỉ thời điểm thường xuyên đi ăn ngoài.",
    type: "time",
  },
  {
    phrase: "Last night",
    pronunciation: "/lɑːst naɪt/",
    meaning: "Tối hôm qua",
    context: "Dùng để chỉ mốc thời gian cụ thể trong quá khứ.",
    type: "time",
  },
  // Reason chunks (yellow)
  {
  phrase: "to celebrate a birthday",
  pronunciation: "/tə ˈselɪbreɪt ə ˈbɜːrθdeɪ/",
  meaning: "để tổ chức sinh nhật",
  context: "Dùng TO + động từ để nói về mục đích của một hành động.",
  type: "reason",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "I love eating out with my family ____ weekends.",
    answer: "on",
    hint: "vào (cuối tuần)",
  },
  {
    prompt: "Our favorite restaurant is a small Italian place near my ____.",
    answer: "house",
    hint: "nhà",
  },
  {
    prompt: "The food there is always delicious and not very ____.",
    answer: "expensive",
    hint: "đắt đỏ",
  },
  {
    prompt: "I usually order a large pizza and a glass ____ orange juice.",
    answer: "of",
    hint: "của",
  },
  {
    prompt: "Last night, we booked a table ____ five people to celebrate a birthday.",
    answer: "for",
    hint: "dành cho",
  },
  {
    prompt: "I prefer eating at a restaurant because I don't have to wash the ____.",
    answer: "dishes",
    hint: "bát đĩa",
  },
  {
    prompt: "I think eating out is a great way to enjoy good food with ____.",
    answer: "friends",
    hint: "bạn bè",
  },
];

export const lesson25Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "I love _____________ with _____________",
  meaning: "Tôi rất thích... với...",
  example: "I love eating out with my family.",
  alternatives: [
    "eating out with my family",
    "having dinner with my friends",
    "having lunch with my sister"
  ]
},

{
  term: "_____________",
  meaning: "vào...",
  example: "I love eating out with my family at the weekend.",
  alternatives: [
    "at the weekend",
    "on Saturday",
    "on Sunday",
    "in the evening"
  ]
},

{
  term: "Our favorite restaurant is _____________",
  meaning: "Nhà hàng yêu thích của chúng tôi là...",
  example: "Our favorite restaurant is a small Italian restaurant.",
  alternatives: [
    "a small Italian restaurant",
    "a Japanese restaurant",
    "a local restaurant",
    "a small café"
  ]
},

{
  term: "near _____________",
  meaning: "gần...",
  example: "Our favorite restaurant is near my house.",
  alternatives: [
    "near my house",
    "near my office",
    "near the city center",
    "near the park"
  ]
},

{
  term: "The food there is _____________",
  meaning: "Đồ ăn ở đó...",
  example: "The food there is delicious.",
  alternatives: [
    "delicious",
    "fresh",
    "cheap",
    "expensive",
    "healthy"
  ]
},

{
  term: "not very _____________",
  meaning: "không quá...",
  example: "The restaurant is not very expensive.",
  alternatives: [
    "not very expensive",
    "not very crowded",
    "not very big",
    "not very busy"
  ]
},

{
  term: "I usually order _____________",
  meaning: "Tôi thường gọi...",
  example: "I usually order a large pizza.",
  alternatives: [
    "a large pizza",
    "a bowl of noodles",
    "a bowl of soup",
    "a glass of juice"
  ]
},

{
  term: "a _____________ _____________",
  meaning: "một phần... kích cỡ...",
  example: "I usually order a large pizza.",
  alternatives: [
    "a large pizza",
    "a small pizza",
    "a big bowl of noodles",
    "a small salad"
  ]
},

{
  term: "a glass of _____________",
  meaning: "một ly...",
  example: "I order a glass of orange juice.",
  alternatives: [
    "a glass of orange juice",
    "a glass of water",
    "a glass of milk"
  ]
},

{
  term: "The _____________ are _____________",
  meaning: "Nhân viên thì...",
  example: "The waiters are friendly.",
  alternatives: [
    "the waiters are friendly",
    "the staff are helpful",
    "the workers are kind"
  ]
},

{
  term: "Last night, we _____________",
  meaning: "Tối qua, chúng tôi đã...",
  example: "Last night, we had dinner.",
  alternatives: [
    "booked a table",
    "had dinner",
    "went to a restaurant",
    "ordered pizza"
  ]
},

{
  term: "book a table for _____________",
  meaning: "đặt bàn cho...",
  example: "We booked a table for four people.",
  alternatives: [
    "for five people",
    "for four people",
    "for two people",
    "for my family"
  ]
},

{
  term: "to celebrate _____________",
  meaning: "để tổ chức / kỷ niệm...",
  example: "We went to a restaurant to celebrate a birthday.",
  alternatives: [
    "to celebrate a birthday",
    "to celebrate a special day",
    "to celebrate a family dinner",
    "to celebrate an anniversary"
  ]
},

{
  term: "I prefer _____________",
  meaning: "Tôi thích... hơn",
  example: "I prefer eating at a restaurant.",
  alternatives: [
    "eating at a restaurant",
    "eating at home",
    "cooking at home",
    "ordering food"
  ]
},

{
  term: "because I don't have to _____________",
  meaning: "vì tôi không phải...",
  example: "I prefer eating at a restaurant because I don't have to cook dinner.",
  alternatives: [
    "wash the dishes",
    "cook dinner",
    "clean the kitchen",
    "go shopping"
  ]
},

{
  term: "a great way to _____________",
  meaning: "một cách tuyệt vời để...",
  example: "Eating out is a great way to enjoy good food.",
  alternatives: [
    "a great way to enjoy good food",
    "spend time with family",
    "relax",
    "celebrate a birthday"
  ]
},

{
  term: "enjoy _____________ with _____________",
  meaning: "thưởng thức... với...",
  example: "I enjoy good food with friends.",
  alternatives: [
    "enjoy good food with friends",
    "enjoy dinner with my family",
    "enjoy a meal with my classmates"
  ]
}
]
};