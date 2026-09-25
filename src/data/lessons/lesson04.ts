import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l4-s1",
    ipa: "/aɪ laɪk ˈiːtɪŋ dɪˈfərənt kaɪndz ʌv fuːd/",
    en: "I like eating different kinds of food .",
    vi: "Tôi thích ăn các loại đồ ăn khác nhau.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (like) + gerund phrase (eating different kinds of food)." },
      { label: "I", content: "Chủ ngữ ngôi thứ nhất số ít." },
      { label: "like", content: "Động từ chỉ sở thích." },
      { label: "eating", content: "Danh động từ làm tân ngữ sau 'like'." },
      { label: "different kinds of food", content: "Cụm danh từ chỉ các loại thức ăn khác nhau." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ sở thích", "Theo sau bởi danh động từ (V-ing)."),
      c("eating", "ăn", "/ˈiːtɪŋ/", "verb", "Danh động từ làm tân ngữ", "Chỉ hoạt động ăn uống."),
      c("different kinds of food", "các loại đồ ăn khác nhau", "/dɪˈfərənt kaɪndz ʌv fuːd/", "noun", "Tân ngữ", "Cụm danh từ chỉ chủng loại thực phẩm."),
    ],
  },
  {
    id: "l4-s2",
    ipa: "/maɪ ˈfeɪvərɪt miːl ɪz ˈbrɛkfəst/",
    en: "My favorite meal  is breakfast .",
    vi: "Bữa ăn yêu thích của tôi là bữa sáng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (My favorite meal) + be (is) + noun (breakfast)." },
      { label: "My favorite meal", content: "Cụm danh từ làm chủ ngữ chỉ bữa ăn yêu thích." },
      { label: "is", content: "Động từ tobe chia số ít." },
      { label: "breakfast", content: "Danh từ chỉ bữa ăn sáng làm bổ ngữ." },
    ],
    chunks: [
      c("My favorite meal", "bữa ăn yêu thích của tôi", "/maɪ ˈfeɪvərɪt miːl/", "noun", "Chủ ngữ", "Cụm danh từ chỉ bữa ăn ưa thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe số ít."),
      c("breakfast", "bữa sáng", "/ˈbrɛkfəst/", "noun", "Bổ ngữ", "Danh từ chỉ bữa ăn đầu tiên trong ngày."),
    ],
  },
  {
    id: "l4-s3",
    ipa: "/aɪ ˈjuːʒuəli hæv brɛd ænd ɛɡz fɔːr ˈbrɛkfəst/",
    en: "I usually have bread and eggs for breakfast .",
    vi: "Tôi thường ăn bánh mì và trứng cho bữa sáng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + adverb (usually) + verb (have) + noun phrase (bread and eggs) + prepositional phrase (for breakfast)." },
      { label: "I", content: "Chủ ngữ." },
      { label: "usually", content: "Trạng từ chỉ tần suất ('thường xuyên')." },
      { label: "have", content: "Động từ chỉ việc ăn/dùng bữa." },
      { label: "bread and eggs", content: "Cụm danh từ nối bằng 'and' chỉ món ăn (bánh mì và trứng)." },
      { label: "for breakfast", content: "Cụm giới từ chỉ bữa ăn." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ thường."),
      c("have", "ăn", "/hæv/", "verb", "Động từ chỉ bữa ăn", "Dùng để diễn tả việc dùng món ăn."),
      c("bread and eggs", "bánh mì và trứng", "/brɛd ænd ɛɡz/", "noun", "Tân ngữ", "Cụm danh từ liệt kê các món ăn."),
      c("for breakfast", "cho bữa sáng", "/fɔːr ˈbrɛkfəst/", "preposition", "Cụm giới từ chỉ mục đích/bữa ăn", "Dùng giới từ 'for' trước tên bữa ăn."),
    ],
  },
  {
    id: "l4-s4",
    ipa: "/aɪ ˈɔːlsoʊ drɪŋk ə kʌp ʌv ˈkɑːfi ɪn ði ˈmɔːrnɪŋ/",
    en: "I also drink a cup of coffee in the morning.",
    vi: "Tôi cũng uống một tách cà phê vào buổi sáng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + adverb (also) + verb (drink) + noun phrase (a cup of coffee) + prepositional phrase (in the morning)." },
      { label: "I", content: "Chủ ngữ." },
      { label: "also", content: "Trạng từ chỉ sự bổ sung ('cũng')." },
      { label: "drink", content: "Động từ uống." },
      { label: "a cup of coffee", content: "Cụm danh từ chỉ định lượng đồ uống." },
      { label: "in the morning", content: "Cụm giới từ chỉ thời gian buổi sáng." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("also", "cũng", "/ˈɔːlsoʊ/", "adverb", "Trạng từ bổ sung", "Chỉ hành động diễn ra thêm bên cạnh việc khác."),
      c("drink", "uống", "/drɪŋk/", "verb", "Động từ hành động", "Chỉ hành động tiêu thụ đồ uống."),
      c("a cup of coffee", "một tách cà phê", "/ə kʌp ʌv ˈkɑːfi/", "noun", "Tân ngữ", "Cụm danh từ chỉ định lượng đồ uống."),
      c("in the morning", "vào buổi sáng", "/ɪn ði ˈmɔːrnɪŋ/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng mạo từ 'the' trong cụm chỉ buổi trong ngày."),
    ],
  },
  {
    id: "l4-s5",
    ipa: "/fɔːr lʌntʃ, aɪ ˈjuːʒuəli iːt raɪs wɪð miːt ænd ˈvɛdʒtəbəlz/",
    en: "For lunch, I usually eat rice with meat and vegetables.",
    vi: "Vào bữa trưa, tôi thường ăn cơm với thịt và rau.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (For lunch) + S + adverb (usually) + verb (eat) + noun (rice) + prepositional phrase (with meat and vegetables)." },
      { label: "For lunch", content: "Cụm giới từ chỉ bữa trưa." },
      { label: "I", content: "Chủ ngữ." },
      { label: "usually", content: "Trạng từ chỉ tần suất." },
      { label: "eat", content: "Động từ ăn." },
      { label: "rice", content: "Danh từ chỉ cơm/gạo làm tân ngữ." },
      { label: "with meat and vegetables", content: "Cụm giới từ chỉ các món ăn kèm." },
    ],
    chunks: [
      c("For lunch", "cho bữa trưa", "/fɔːr lʌntʃ/", "preposition", "Cụm giới từ chỉ bữa ăn", "Dùng giới từ 'for' trước tên bữa ăn."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Chỉ thói quen ăn uống."),
      c("eat", "ăn", "/iːt/", "verb", "Động từ hành động", "Chỉ hành động thưởng thức món ăn."),
      c("rice", "cơm", "/raɪs/", "noun", "Tân ngữ", "Danh từ chỉ món chính."),
      c("with meat and vegetables", "với thịt và rau củ", "/wɪð miːt ænd ˈvɛdʒtəbəlz/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với các món ăn kèm."),
    ],
  },
  {
    id: "l4-s6",
    ipa: "/aɪ ˈsʌmtaɪz iːt aʊt wɪð maɪ frɛndz æt ðə ˈwiːkɛnd/",
    en: "I sometimes eat out with my friends at the weekend.",
    vi: "Thỉnh thoảng tôi đi ăn ngoài với bạn bè vào cuối tuần.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + adverb (sometimes) + phrasal verb (eat out) + prepositional phrase (with my friends) + prepositional phrase (at the weekend)." },
      { label: "I", content: "Chủ ngữ." },
      { label: "sometimes", content: "Trạng từ chỉ tần suất ('thỉnh thoảng')." },
      { label: "eat out", content: "Cụm động từ chỉ việc đi ăn ở hàng quán." },
      { label: "with my friends", content: "Cụm giới từ chỉ bạn đồng hành." },
      { label: "at the weekend", content: "Cụm giới từ chỉ thời gian cuối tuần." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("sometimes", "thỉnh thoảng", "/ˈsʌmtaɪz/", "adverb", "Trạng từ chỉ tần suất", "Chỉ hành động xảy ra không đều đặn."),
      c("eat out", "ăn ngoài", "/iːt aʊt/", "verb", "Cụm động từ", "Chỉ hoạt động ăn uống tại nhà hàng/quán ăn."),
      c("with my friends", "với những người bạn của tôi", "/wɪð maɪ frɛndz/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với cụm danh từ chỉ bạn bè."),
      c("at the weekend", "vào cuối tuần", "/æt ðə ˈwiːkɛnd/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'at' trong cụm chỉ cuối tuần."),
    ],
  },
  {
    id: "l4-s7",
    ipa: "/ɪn ði ˈivnɪŋ, aɪ ˈjuːʒuəli hæv ˈdɪnər æt hoʊm wɪð maɪ ˈfæməli/",
    en: "In the evening , I usually  have dinner at home  with my family .",
    vi: "Vào buổi tối, tôi thường ăn tối ở nhà cùng gia đình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (In the evening) + S + adverb (usually) + verb phrase (have dinner) + prepositional phrase (at home) + prepositional phrase (with my family)." },
      { label: "In the evening", content: "Cụm giới từ chỉ thời gian buổi tối." },
      { label: "I", content: "Chủ ngữ." },
      { label: "usually", content: "Trạng từ chỉ tần suất." },
      { label: "have dinner", content: "Cụm động từ chỉ bữa ăn tối." },
      { label: "at home", content: "Cụm giới từ chỉ địa điểm ở nhà." },
      { label: "with my family", content: "Cụm giới từ chỉ sự đi kèm cùng gia đình." },
    ],
    chunks: [
      c("In the evening", "vào buổi tối", "/ɪn ði ˈivnɪŋ/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng mạo từ 'the' trong cụm chỉ buổi trong ngày."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Chỉ thói quen sinh hoạt."),
      c("have dinner", "ăn tối", "/hæv ˈdɪnər/", "verb", "Cụm động từ", "Collocation chỉ bữa ăn tối."),
      c("at home", "ở nhà", "/æt hoʊm/", "preposition", "Cụm giới từ chỉ địa điểm", "Cụm từ cố định chỉ vị trí tại nhà."),
      c("with my family", "với gia đình của tôi", "/wɪð maɪ ˈfæməli/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với cụm danh từ chỉ gia đình."),
    ],
  },
  {
    id: "l4-s8",
    ipa: "/aɪ drɪŋk ə lɒt ʌv ˈwɔːtər bɪˈkɒz aɪ wɑːnt tə steɪ ˈhɛlθi/",
    en: "I drink a lot of water because I want to stay healthy.",
    vi: "Tôi uống rất nhiều nước vì tôi muốn giữ gìn sức khỏe.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (drink) + noun phrase (a lot of water) + connector (because) + S + verb (want) + infinitive phrase (to stay healthy)." },
      { label: "I", content: "Chủ ngữ." },
      { label: "drink", content: "Động từ uống." },
      { label: "a lot of water", content: "Cụm danh từ chỉ lượng nước lớn." },
      { label: "because", content: "Từ nối chỉ nguyên nhân ('vì')." },
      { label: "I", content: "Chủ ngữ mệnh đề nguyên nhân." },
      { label: "want", content: "Động từ muốn." },
      { label: "to stay healthy", content: "Cụm động từ nguyên mẫu chỉ mục đích ('để khỏe mạnh')." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("drink", "uống", "/drɪŋk/", "verb", "Động từ hành động", "Chỉ hành động tiêu thụ nước."),
      c("a lot of water", "rất nhiều nước", "/ə lɒt ʌv ˈwɔːtər/", "noun", "Tân ngữ", "Cụm danh từ chỉ lượng nhiều của chất lỏng."),
      c("because", "bởi vì", "/bɪˈkɒz/", "connector", "Từ nối nguyên nhân", "Dùng để giải thích lý do cho hành động trước đó."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Chủ ngữ trong mệnh đề chỉ lý do."),
      c("want", "muốn", "/wɑːnt/", "verb", "Động từ chỉ mong muốn", "Diễn đạt mong ước cá nhân."),
      c("to stay healthy", "để giữ gìn sức khỏe", "/tə steɪ ˈhɛlθi/", "verb", "Cụm động từ nguyên mẫu chỉ mục đích", "Giải thích mục đích của việc uống nhiều nước."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson04Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "My favorite meal is _____________.",
      meaning: "Bữa ăn yêu thích của tôi là ...",
      example: "My favorite meal is breakfast.",
      alternatives: ["breakfast", "lunch", "dinner"],
    },
    {
      term: "I usually have _____________ for breakfast.",
      meaning: "Tôi thường ăn ... cho bữa sáng.",
      example: "I usually have bread and eggs for breakfast.",
      alternatives: ["bread and eggs", "noodles", "rice"],
    },
    {
      term: "For lunch, I usually eat rice with _____________.",
      meaning: "Vào bữa trưa, tôi thường ăn cơm với ...",
      example: "For lunch, I usually eat rice with meat and vegetables.",
      alternatives: ["meat and vegetables", "fish and soup", "chicken and salad"],
    },
    {
      term: "I sometimes eat out with my friends at _____________.",
      meaning: "Thỉnh thoảng tôi đi ăn ngoài với bạn bè vào ...",
      example: "I sometimes eat out with my friends at the weekend.",
      alternatives: ["the weekend", "Friday night", "Saturday"],
    },
    {
      term: "I drink a lot of water because I want to _____________.",
      meaning: "Tôi uống rất nhiều nước vì tôi muốn ...",
      example: "I drink a lot of water because I want to stay healthy.",
      alternatives: ["stay healthy", "stay fresh", "stay fit"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson04Sentences = sentences;