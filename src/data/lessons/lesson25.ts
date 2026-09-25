import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

const sentences: LessonSentence[] = [
  {
    id: "l25-s1",
    ipa: "/aɪ luːv ˈiːtɪŋ aʊt wɪð maɪ ˈfæməli ɑːn ˈwiːkˌɛndz/",
    en: "I love eating out with my family on weekends.",
    vi: "Tôi thích đi ăn ngoài cùng gia đình vào các ngày cuối tuần.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb phrase (love eating out) + prepositional phrase (with my family) + prepositional phrase (on weekends)." },
      { label: "I love eating out", content: "Chủ ngữ 'I' + động từ 'love' + danh động từ 'eating out'." },
      { label: "with my family on weekends", content: "Cụm giới từ chỉ người đi cùng + cụm giới từ chỉ thời gian cuối tuần." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("love", "thích", "/luːv/", "verb", "Động từ chính", "Diễn tả sở thích mạnh mẽ."),
      c("eating out", "ăn ngoài", "/ˈiːtɪŋ aʊt/", "verb", "Cụm động từ (verb-ing + adverb)", "Chỉ hành động đi ăn ở nhà hàng."),
      c("with my family", "với gia đình của tôi", "/wɪð maɪ ˈfæməli/", "preposition", "Cụm giới từ chỉ người đi cùng", "Giới từ 'with' kết hợp cụm danh từ chỉ gia đình."),
      c("on weekends", "vào các ngày cuối tuần", "/ɑːn ˈwiːkˌɛndz/", "preposition", "Cụm giới từ chỉ thời gian", "Giới từ 'on' dùng với các ngày cuối tuần."),
    ],
  },
  {
    id: "l25-s2",
    ipa: "/ˈaʊər ˈfeɪvərɪt ˈrɛstərənt ɪz ə smɔːl ɪˈlæljən pleɪs nɪr maɪ haʊs/",
    en: "Our favorite restaurant is a small Italian place near my house.",
    vi: "Nhà hàng yêu thích của chúng tôi là một quán ăn Ý nhỏ gần nhà tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (Our favorite restaurant) + be (is) + complement (a small Italian place) + prepositional phrase (near my house)." },
      { label: "Our favorite restaurant is a small Italian place", content: "Chủ ngữ 'Our favorite restaurant' + động từ tobe 'is' + bổ ngữ cụm danh từ." },
      { label: "near my house", content: "Cụm giới từ chỉ vị trí." },
    ],
    chunks: [
      c("Our favorite restaurant", "nhà hàng yêu thích của chúng tôi", "/ˈaʊər ˈfeɪvərɪt ˈrɛstərənt/", "noun", "Chủ ngữ (possessive determiner + adjective + noun)", "Cụm danh từ chỉ nhà hàng ưa thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("a small Italian place", "một quán ăn Ý nhỏ", "/ə smɔːl ɪˈlæljən pleɪs/", "noun", "Bổ ngữ (article + adjective + adjective + noun)", "Cụm danh từ chỉ địa điểm ăn uống."),
      c("near my house", "gần nhà của tôi", "/nɪr maɪ haʊs/", "preposition", "Cụm giới từ chỉ vị trí", "Giới từ 'near' kết hợp cụm danh từ chỉ nhà."),
    ],
  },
  {
    id: "l25-s3",
    ipa: "/ðə fuːd ðɛr ɪz ˈɔlweɪz dɪˈlɪʃəs ænd nɑt ˈvɛri ɪkˈspɛnsɪv/",
    en: "The food there is always delicious and not very expensive.",
    vi: "Đồ ăn ở đó luôn ngon và không quá đắt đỏ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (The food there) + be (is) + complement (always delicious and not very expensive)." },
      { label: "The food there is always delicious", content: "Chủ ngữ 'The food there' + động từ tobe 'is' + trạng từ 'always' + tính từ 'delicious'." },
      { label: "and not very expensive", content: "Liên từ 'and' + cấu trúc phủ định + tính từ 'very expensive'." },
    ],
    chunks: [
      c("The food there", "đồ ăn ở đó", "/ðə fuːd ðɛr/", "noun", "Chủ ngữ (article + noun + adverb)", "Cụm danh từ chỉ thức ăn tại địa điểm đó."),
      c("is", "là / thì", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("always", "luôn luôn", "/ˈɔlweɪz/", "adverb", "Trạng từ tần suất", "Chỉ mức độ thường xuyên."),
      c("delicious", "ngon", "/dɪˈlɪʃəs/", "adjective", "Tính từ bổ ngữ", "Miêu tả hương vị món ăn."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai vế tính chất."),
      c("not very expensive", "không rất đắt đỏ / không quá đắt", "/nɑt ˈvɛri ɪkˈspɛnsɪv/", "adjective", "Tính từ phủ định bổ ngữ (negative + adverb + adjective)", "Miêu tả mức giá phải chăng."),
    ],
  },
  {
    id: "l25-s4",
    ipa: "/aɪ ˈjuːʒuəli ˈɔrdər ə lɑːrʒ ˈpɪtsə ænd ə ɡlæs ɑv ˈɔrinʤ ʤuːs/",
    en: "I usually order a large pizza and a glass of orange juice.",
    vi: "Tôi thường gọi một chiếc bánh pizza lớn và một cốc nước cam.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + adverb (usually) + verb (order) + object (a large pizza and a glass of orange juice)." },
      { label: "I usually order a large pizza", content: "Chủ ngữ 'I' + trạng từ 'usually' + động từ 'order' + tân ngữ 'a large pizza'." },
      { label: "and a glass of orange juice", content: "Liên từ 'and' + tân ngữ thứ hai chỉ thức uống." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Chỉ thói quen gọi món."),
      c("order", "gọi món", "/ˈɔrdər/", "verb", "Động từ chính", "Chỉ hành động đặt món ăn."),
      c("a large pizza", "một chiếc pizza lớn", "/ə lɑːrʒ ˈpɪtsə/", "noun", "Tân ngữ phần đầu (article + adjective + noun)", "Cụm danh từ chỉ món ăn."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối giữa đồ ăn và thức uống."),
      c("a glass of orange juice", "một ly nước cam", "/ə ɡlæs ɑv ˈɔrinʤ ʤuːs/", "noun", "Tân ngữ phần sau (article + noun + preposition + noun + noun)", "Cụm danh từ chỉ thức uống."),
    ],
  },
  {
    id: "l25-s5",
    ipa: "/ðə ˈweɪtərz ɑːr ˈvɛri ˈfrɛndli ænd ðeɪ sɜrv ðə fuːd ˈkwɪkli/",
    en: "The waiters are very friendly and they serve the food quickly.",
    vi: "Các nhân viên phục vụ rất thân thiện và họ phục vụ món ăn rất nhanh chóng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Clause 1 (The waiters are very friendly) + connector (and) + Clause 2 (they serve the food quickly)." },
      { label: "The waiters are very friendly", content: "Chủ ngữ 'The waiters' + động từ tobe 'are' + tính từ 'very friendly'." },
      { label: "and they serve the food quickly", content: "Liên từ 'and' + chủ ngữ 'they' + động từ 'serve' + tân ngữ + trạng từ cách thức 'quickly'." },
    ],
    chunks: [
      c("The waiters", "những người phục vụ", "/ðə ˈweɪtərz/", "noun", "Chủ ngữ số nhiều (article + noun)", "Cụm danh từ chỉ nhân viên nhà hàng."),
      c("are", "thì", "/ɑːr/", "verb", "Động từ tobe", "Động từ tobe chia số nhiều."),
      c("very friendly", "rất thân thiện", "/ˈvɛri ˈfrɛndli/", "adjective", "Tính từ bổ ngữ (adverb + adjective)", "Miêu tả thái độ phục vụ."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai mệnh đề hành động."),
      c("they", "họ", "/ðeɪ/", "noun", "Chủ ngữ mệnh đề sau", "Đại từ chỉ nhân viên."),
      c("serve", "phục vụ", "/sɜrv/", "verb", "Động từ chính", "Chỉ hành động mang thức ăn lên."),
      c("the food", "đồ ăn", "/ðə fuːd/", "noun", "Tân ngữ (article + noun)", "Cụm danh từ chỉ thức ăn được phục vụ."),
      c("quickly", "nhanh chóng", "/ˈkwɪkli/", "adverb", "Trạng từ chỉ cách thức", "Miêu tả tốc độ phục vụ."),
    ],
  },
  {
    id: "l25-s6",
    ipa: "/læst nɑɪt, wiː bʊkt ə ˈteɪbəl fɔr faɪv ˈpipəl tuː ˈsɛlɪˌbreɪt ə ˈbɜrθˌdeɪ/",
    en: "Last night, we booked a table for five people to celebrate a birthday.",
    vi: "Tối qua, chúng tôi đã đặt một bàn cho năm người để tổ chức sinh nhật.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverbial (Last night) + S (we) + verb phrase (booked a table for five people) + infinitive phrase (to celebrate a birthday)." },
      { label: "Last night", content: "Trạng từ chỉ thời gian quá khứ." },
      { label: "we booked a table for five people", content: "Chủ ngữ 'we' + động từ quá khứ 'booked' + tân ngữ + cụm giới từ số lượng người." },
      { label: "to celebrate a birthday", content: "Cụm nguyên mẫu chỉ mục đích." },
    ],
    chunks: [
      c("Last night", "tối qua", "/læst nɑɪt/", "adverb", "Cụm trạng từ chỉ thời gian", "Xác định thời điểm tối hôm trước."),
      c("we", "chúng tôi", "/wiː/", "noun", "Chủ ngữ", "Đại từ nhân xưng số nhiều."),
      c("booked a table", "đặt một bàn", "/bʊkt ə ˈteɪbəl/", "verb", "Cụm động từ (verb + article + noun)", "Chỉ hành động đặt chỗ trước tại nhà hàng."),
      c("for five people", "cho năm người", "/fɔr faɪv ˈpipəl/", "preposition", "Cụm giới từ chỉ số lượng người (preposition + number + noun)", "Giới từ 'for' kết hợp cụm số lượng."),
      c("to celebrate a birthday", "để ăn mừng sinh nhật", "/tuː ˈsɛlɪˌbreɪt ə ˈbɜrθˌdeɪ/", "verb", "Cụm động từ nguyên mẫu chỉ mục đích (to-infinitive + object)", "Chỉ lý do đặt bàn tiệc."),
    ],
  },
  {
    id: "l25-s7",
    ipa: "/aɪ prɪˈfɜr ˈiːtɪŋ æt ə ˈrɛstərənt bɪˈkʌz aɪ duː nɑt hæv tuː wɑʃ ðə ˈdɪʃɪz/",
    en: "I prefer eating at a restaurant because I do not have to wash the dishes.",
    vi: "Tôi thích ăn ở nhà hàng hơn vì tôi không phải rửa bát đĩa.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb phrase (prefer eating at a restaurant) + connector (because) + clause (I do not have to wash the dishes)." },
      { label: "I prefer eating at a restaurant", content: "Chủ ngữ 'I' + động từ 'prefer' + danh động từ 'eating at a restaurant'." },
      { label: "because I do not have to wash the dishes", content: "Liên từ 'because' + mệnh đề nguyên nhân phủ định." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("prefer", "thích hơn", "/prɪˈfɜr/", "verb", "Động từ thể hiện sự ưu tiên", "Diễn tả sự ưa chuộng hơn."),
      c("eating at a restaurant", "ăn uống tại nhà hàng", "/ˈiːtɪŋ æt ə ˈrɛstərənt/", "verb", "Cụm động từ (verb-ing + prepositional phrase)", "Chỉ hoạt động ăn uống bên ngoài."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do thích ăn nhà hàng."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ mệnh đề sau", "Ngôi thứ nhất số ít."),
      c("do not have to wash", "không phải rửa", "/duː nɑt hæv tuː wɑʃ/", "verb", "Cụm động từ phủ định chỉ sự bắt buộc (auxiliary + negative + verb + to-infinitive)", "Diễn tả việc không cần thiết phải làm gì."),
      c("the dishes", "bát đĩa", "/ðə ˈdɪʃɪz/", "noun", "Tân ngữ (article + noun)", "Cụm danh từ chỉ chén bát cần rửa."),
    ],
  },
  {
    id: "l25-s8",
    ipa: "/aɪ θɪŋk ˈiːtɪŋ aʊt ɪz ə ɡreɪt weɪ tuː ɪnˈʤɔɪ ɡʊd fuːd wɪð frɛndz/",
    en: "I think eating out is a great way to enjoy good food with friends.",
    vi: "Tôi nghĩ ăn ngoài là một cách tuyệt vời để thưởng thức đồ ăn ngon cùng bạn bè.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb (think) + that-clause (eating out is a great way to enjoy good food with friends)." },
      { label: "I think", content: "Chủ ngữ 'I' + động từ 'think'." },
      { label: "eating out is a great way", content: "Chủ ngữ danh động từ 'eating out' + động từ tobe 'is' + bổ ngữ cụm danh từ." },
      { label: "to enjoy good food with friends", content: "Cụm nguyên mẫu chỉ mục đích + cụm giới từ chỉ bạn bè." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("think", "nghĩ rằng", "/θɪŋk/", "verb", "Động từ quan điểm", "Diễn tả suy nghĩ cá nhân."),
      c("eating out", "ăn ngoài", "/ˈiːtɪŋ aʊt/", "noun", "Chủ ngữ mệnh đề sau (verb-ing + adverb)", "Danh động từ chỉ hành động ăn ở nhà hàng."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("a great way", "một cách tuyệt vời", "/ə ɡreɪt weɪ/", "noun", "Bổ ngữ (article + adjective + noun)", "Cụm danh từ chỉ phương pháp/cách thức."),
      c("to enjoy good food", "thưởng thức đồ ăn ngon", "/tuː ɪnˈʤɔɪ ɡʊd fuːd/", "verb", "Cụm động từ nguyên mẫu bổ nghĩa (to-infinitive + object)", "Chỉ mục đích thưởng thức ẩm thực."),
      c("with friends", "cùng bạn bè", "/wɪð frɛndz/", "preposition", "Cụm giới từ chỉ người đồng hành", "Giới từ 'with' kết hợp danh từ chỉ bạn bè."),
    ],
  },
];

export const lesson25Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I love eating out with my family on _____________.",
      meaning: "Tôi thích đi ăn ngoài cùng gia đình vào các ngày ...",
      example: "I love eating out with my family on weekends.",
      alternatives: ["weekends", "holidays"],
    },
    {
      term: "Our favorite restaurant is a small Italian place near my _____________.",
      meaning: "Nhà hàng yêu thích của chúng tôi là một quán ăn Ý nhỏ gần ... tôi.",
      example: "Our favorite restaurant is a small Italian place near my house.",
      alternatives: ["house", "school"],
    },
    {
      term: "I usually order a large pizza and a glass of orange _____________.",
      meaning: "Tôi thường gọi một chiếc bánh pizza lớn và một cốc nước ...",
      example: "I usually order a large pizza and a glass of orange juice.",
      alternatives: ["juice", "water"],
    },
    {
      term: "Last night, we booked a table for five people to celebrate a _____________.",
      meaning: "Tối qua, chúng tôi đã đặt một bàn cho năm người để tổ chức một buổi ...",
      example: "Last night, we booked a table for five people to celebrate a birthday.",
      alternatives: ["birthday", "party"],
    },
    {
      term: "I think eating out is a great way to enjoy good food with _____________.",
      meaning: "Tôi nghĩ ăn ngoài là một cách tuyệt vời để thưởng thức đồ ăn ngon cùng ...",
      example: "I think eating out is a great way to enjoy good food with friends.",
      alternatives: ["friends", "family"],
    },
  ],
};

export const lesson25Sentences = sentences;