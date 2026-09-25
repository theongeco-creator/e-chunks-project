import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

// ============================================================
// NGUỒN DỮ LIỆU DUY NHẤT: từng câu của đoạn văn
// ============================================================
const sentences: LessonSentence[] = [
  {
    id: "l6-s1",
    ipa: "/aɪ lɪv ɪn ə smɔːl, ˈpɛsfəl taʊn wɪð maɪ ˈfæməli/",
    en: "I live in a small, peaceful town with my family.",
    vi: "Tôi sống trong một thị trấn nhỏ và yên bình cùng gia đình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + verb (live) + prepositional phrase (in a small, peaceful town) + prepositional phrase (with my family)." },
      { label: "I", content: "Chủ ngữ ngôi thứ nhất số ít." },
      { label: "live", content: "Động từ chỉ nơi sinh sống." },
      { label: "in a small, peaceful town", content: "Cụm giới từ chỉ địa điểm." },
      { label: "with my family", content: "Cụm giới từ chỉ sự đồng hành." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("live", "sống", "/lɪv/", "verb", "Động từ hành động", "Chỉ nơi ở hoặc sinh sống."),
      c("in a small, peaceful town", "trong một thị trấn nhỏ, yên bình", "/ɪn ə smɔːl, ˈpɛsfəl taʊn/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'in' đi kèm cụm danh từ chỉ nơi chốn."),
      c("with my family", "với gia đình của tôi", "/wɪð maɪ ˈfæməli/", "preposition", "Cụm giới từ chỉ sự đi kèm", "Giới từ 'with' đi với cụm danh từ chỉ gia đình."),
    ],
  },
  {
  id: "l6-s2",
  ipa: "/ðɛər ɪz ə bɪɡ pɑːrk nɪr maɪ haʊs, ænd aɪ ˈɔːfən wɔːk ðɛər ɪn ði ˈæftərnuːn/",
  en: "There is a big park near my house, and I often walk there in the afternoon.", // Bỏ bớt dấu cách thừa
  vi: "Có một công viên lớn gần nhà tôi, và tôi thường đi bộ ở đó vào buổi chiều.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "There + be + noun phrase (a big park near my house) + connector (and) + S + adverb (often) + verb phrase (walk there) + prepositional phrase (in the afternoon)." },
      { label: "There is", content: "Cấu trúc chỉ sự tồn tại." },
      { label: "a big park near my house", content: "Cụm danh từ chỉ công viên gần nhà." },
      { label: "and", content: "Từ nối hai vế câu." },
      { label: "I", content: "Chủ ngữ vế sau." },
      { label: "often", content: "Trạng từ chỉ tần suất." },
      { label: "walk there", content: "Cụm động từ chỉ việc đi bộ đến đó." },
      { label: "in the afternoon", content: "Cụm giới từ chỉ thời gian buổi chiều." },
    ],
    chunks: [
      c("There is", "có", "/ðɛər ɪz/", "verb", "Cấu trúc tồn tại", "Dùng để giới thiệu sự xuất hiện của sự vật."),
      c("a big park near my house", "một công viên lớn gần nhà tôi", "/ə bɪɡ pɑːrk nɪr maɪ haʊs/", "noun", "Tân ngữ / Chủ ngữ thực tế", "Cụm danh từ miêu tả địa điểm."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai mệnh đề trong câu."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("often", "thường xuyên", "/ˈɔːfən/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ thường."),
      c("walk there", "đi bộ đến đó", "/wɔːk ðɛər/", "verb", "Cụm động từ", "Chỉ hành động đi bộ tới một địa điểm."),
      c("in the afternoon", "vào buổi chiều", "/ɪn ði ˈæftərnuːn/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng mạo từ 'the' trong cụm chỉ buổi."),
    ],
  },
  {
    id: "l6-s3",
    ipa: "/maɪ ˈfeɪvərɪt pleɪs ɪn taʊn ɪz ə kwaɪt ˈkɑːfi ʃɑːp bɪˈkɒz aɪ kæn rɪˈlæks ænd riːd bʊks/",
    en: "My favorite place in town is a quiet coffee shop because I can relax and read books .",
    vi: "Địa điểm yêu thích của tôi trong thị trấn là một quán cà phê yên tĩnh vì tôi có thể thư giãn và đọc sách.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (My favorite place in town) + be (is) + noun phrase (a quiet coffee shop) + connector (because) + S + modal verb (can) + verbs (relax and read books)." },
      { label: "My favorite place in town", content: "Cụm danh từ làm chủ ngữ chỉ địa điểm yêu thích." },
      { label: "is", content: "Động từ tobe số ít." },
      { label: "a quiet coffee shop", content: "Cụm danh từ chỉ quán cà phê yên tĩnh." },
      { label: "because", content: "Từ nối chỉ nguyên nhân." },
      { label: "I can relax and read books", content: "Mệnh đề giải thích lý do." },
    ],
    chunks: [
      c("My favorite place in town", "địa điểm yêu thích của tôi trong thị trấn", "/maɪ ˈfeɪvərɪt pleɪs ɪn taʊn/", "noun", "Chủ ngữ", "Cụm danh từ chỉ địa điểm ưa thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe số ít."),
      c("a quiet coffee shop", "một quán cà phê yên tĩnh", "/ə kwaɪt ˈkɑːfi ʃɑːp/", "noun", "Bổ ngữ", "Cụm tính từ + danh từ chỉ cửa hàng."),
      c("because", "bởi vì", "/bɪˈkɒz/", "connector", "Từ nối nguyên nhân", "Dùng để giới thiệu mệnh đề lý do."),
      c("I can relax and read books", "tôi có thể thư giãn và đọc sách", "/aɪ kæn rɪˈlæks ænd riːd bʊks/", "noun", "Mệnh đề giải thích", "Chứa động từ khuyết thiếu 'can' và các hành động giải trí."),
    ],
  },
  {
    id: "l6-s4",
    ipa: "/twaɪs ə wiːk, aɪ ɡoʊ tə ðə ˈloʊkəl ˈsuːpərmɑːrkɪt tə baɪ fuːd ænd drɪŋks/",
    en: "Twice a week, I go to the local supermarket to buy food and drinks.",
    vi: "Hai lần một tuần, tôi đến siêu thị địa phương để mua đồ ăn và đồ uống.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverbial phrase (Twice a week) + S + verb phrase (go to the local supermarket) + infinitive phrase of purpose (to buy food and drinks)." },
      { label: "Twice a week", content: "Cụm trạng từ chỉ tần suất ('hai lần một tuần')." },
      { label: "I", content: "Chủ ngữ." },
      { label: "go to the local supermarket", content: "Cụm động từ chỉ việc đi đến siêu thị." },
      { label: "to buy food and drinks", content: "Cụm động từ nguyên mẫu chỉ mục đích mua sắm." },
    ],
    chunks: [
      c("Twice a week", "hai lần một tuần", "/twaɪs ə wiːk/", "adverb", "Cụm trạng từ chỉ tần suất", "Chỉ số lần thực hiện hành động trong một khoảng thời gian."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("go to the local supermarket", "đến siêu thị địa phương", "/ɡoʊ tə ðə ˈloʊkəl ˈsuːpərmɑːrkɪt/", "verb", "Cụm động từ chỉ sự di chuyển", "Bao gồm động từ 'go' và cụm danh từ chỉ địa điểm."),
      c("to buy food and drinks", "để mua thức ăn và đồ uống", "/tə baɪ fuːd ænd drɪŋks/", "verb", "Cụm động từ nguyên mẫu chỉ mục đích", "Diễn tả mục đích của chuyến đi siêu thị."),
    ],
  },
  {
    id: "l6-s5",
    ipa: "/æt ðə ˈwiːkɛnd, aɪ ˈjuːʒuəli  miːt maɪ frɛndz  æt ə ˈkæfeɪ ɔːr  ɡoʊ ˈʃɑːpɪŋ/",
    en: "At the weekend, I usually meet my friends at a café or go shopping.",
    vi: "Vào cuối tuần, tôi thường gặp gỡ bạn bè ở quán cà phê hoặc đi mua sắm.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (At the weekend) + S + adverb (usually) + verb phrase (meet my friends) + prepositional phrase (at a café) + connector (or) + verb phrase (go shopping)." },
      { label: "At the weekend", content: "Cụm giới từ chỉ thời gian cuối tuần." },
      { label: "I", content: "Chủ ngữ." },
      { label: "usually", content: "Trạng từ chỉ tần suất." },
      { label: "meet my friends", content: "Cụm động từ chỉ việc gặp bạn bè." },
      { label: "at a café", content: "Cụm giới từ chỉ địa điểm gặp mặt." },
      { label: "or", content: "Từ nối lựa chọn ('hoặc')." },
      { label: "go shopping", content: "Cụm động từ chỉ việc đi mua sắm." },
    ],
    chunks: [
      c("At the weekend", "vào cuối tuần", "/æt ðə ˈwiːkɛnd/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'at' trong cụm chỉ cuối tuần."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Chỉ thói quen cuối tuần."),
      c("meet my friends", "gặp gỡ bạn bè của tôi", "/miːt maɪ frɛndz/", "verb", "Cụm động từ", "Collocation chỉ hoạt động gặp gỡ người quen."),
      c("at a café", "ở quán cà phê", "/æt ə ˈkæfeɪ/", "preposition", "Cụm giới từ chỉ địa điểm", "Dùng giới từ 'at' chỉ vị trí tại quán."),
      c("or", "hoặc", "/ɔːr/", "connector", "Từ nối lựa chọn", "Nối hai hoạt động thay thế vào cuối tuần."),
      c("go shopping", "đi mua sắm", "/ɡoʊ ˈʃɑːpɪŋ/", "verb", "Cụm động từ", "Collocation chỉ hoạt động mua sắm hàng hóa."),
    ],
  },
  {
    id: "l6-s6",
    ipa: "/aɪ ˈɔːfən ɡoʊ əˈraʊnd taʊn baɪ ˈmoʊtəˌbaɪk bɪˈkɒz ɪt ɪz fɑːst ænd ˈkɑːnvɪniənt/",
    en: "I often go around town by motorbike because it is fast and convenient.",
    vi: "Tôi thường đi quanh thị trấn bằng xe máy vì nó nhanh chóng và tiện lợi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + adverb (often) + verb phrase (go around town) + prepositional phrase (by motorbike) + connector (because) + S + be + adjectives (it is fast and convenient)." },
      { label: "I", content: "Chủ ngữ." },
      { label: "often", content: "Trạng từ chỉ tần suất." },
      { label: "go around town", content: "Cụm động từ chỉ việc đi vòng quanh thị trấn." },
      { label: "by motorbike", content: "Cụm giới từ chỉ phương tiện." },
      { label: "because", content: "Từ nối nguyên nhân." },
      { label: "it is fast and convenient", content: "Mệnh đề tính chất miêu tả phương tiện/việc đi lại." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("often", "thường xuyên", "/ˈɔːfən/", "adverb", "Trạng từ chỉ tần suất", "Chỉ thói quen di chuyển."),
      c("go around town", "đi quanh thị trấn", "/ɡoʊ əˈraʊnd taʊn/", "verb", "Cụm động từ", "Chỉ hoạt động di chuyển khám phá khu vực."),
      c("by motorbike", "bằng xe máy", "/baɪ ˈmoʊtəˌbaɪk/", "preposition", "Cụm giới từ chỉ phương tiện", "Dùng giới từ 'by' trước phương tiện."),
      c("because", "bởi vì", "/bɪˈkɒz/", "connector", "Từ nối nguyên nhân", "Giải thích lý do chọn phương tiện."),
      c("it is fast and convenient", "nó nhanh chóng và tiện lợi", "/ɪt ɪz fɑːst ænd ˈkɑːnvɪniənt/", "noun", "Mệnh đề miêu tả", "Chứa tính từ chỉ ưu điểm nhanh và tiện lợi."),
    ],
  },
  {
    id: "l6-s7",
    ipa: "/aɪ ˈriːəli laɪk maɪ taʊn bɪˈkɒz ðə ˈpiːpəl ɑːr ˈfrɛndli ænd ðə striːts ɑːr kliːn/",
    en: "I really like my town because the people are friendly and the streets are clean.",
    vi: "Tôi thực sự thích thị trấn của mình vì con người thân thiện và đường phố sạch sẽ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S + adverb (really) + verb (like) + noun (my town) + connector (because) + clauses describing people and streets." },
      { label: "I", content: "Chủ ngữ." },
      { label: "really", content: "Trạng từ mức độ ('thực sự')." },
      { label: "like", content: "Động từ thích." },
      { label: "my town", content: "Cụm danh từ chỉ thị trấn của tôi." },
      { label: "because", content: "Từ nối nguyên nhân." },
      { label: "the people are friendly and the streets are clean", content: "Mệnh đề ghép giải thích lý do yêu thích." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("really", "thực sự", "/ˈriːəli/", "adverb", "Trạng từ chỉ mức độ", "Nhấn mạnh cảm xúc yêu thích."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chỉ cảm xúc", "Thể hiện sự yêu mến."),
      c("my town", "thị trấn của tôi", "/maɪ taʊn/", "noun", "Tân ngữ", "Cụm danh từ chỉ nơi chốn sinh sống."),
      c("because", "bởi vì", "/bɪˈkɒz/", "connector", "Từ nối nguyên nhân", "Dùng để nêu lý do yêu thích thị trấn."),
      c("the people are friendly and the streets are clean", "mọi người thân thiện và đường phố sạch sẽ", "/ðə ˈpiːpəl ɑːr ˈfrɛndli ænd ðə striːts ɑːr kliːn/", "noun", "Mệnh đề giải thích", "Gồm các tính từ miêu tả con người và không gian."),
    ],
  },
  {
    id: "l6-s8",
    ipa: "/fɔːr miː, ɪt ɪz ə ɡreɪt pleɪs tə lɪv/",
    en: "For me, it is a great place to live .",
    vi: "Đối với tôi, đây là một nơi tuyệt vời để sống.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (For me) + S + be + noun phrase with infinitive (it is a great place to live)." },
      { label: "For me", content: "Cụm giới từ chỉ quan điểm cá nhân." },
      { label: "it", content: "Đại từ chỉ thị trấn." },
      { label: "is", content: "Động từ tobe." },
      { label: "a great place to live", content: "Cụm danh từ đi kèm động từ nguyên mẫu chỉ nơi đáng sống." },
    ],
    chunks: [
      c("For me", "đối với tôi", "/fɔːr miː/", "preposition", "Cụm giới từ chỉ quan điểm", "Giới từ 'For' đi với đại từ nhân xưng chỉ góc nhìn cá nhân."),
      c("it", "nó", "/ɪt/", "noun", "Chủ ngữ", "Đại từ ngôi thứ ba số ít chỉ thị trấn."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe số ít."),
      c("a great place to live", "một nơi tuyệt vời để sinh sống", "/ə ɡreɪt pleɪs tə lɪv/", "noun", "Bổ ngữ", "Cụm danh từ kết hợp với cụm động từ nguyên mẫu chỉ tính chất đáng sống."),
    ],
  },
];

// ============================================================
// EXPORT
// ============================================================
export const lesson06Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I live in a small, peaceful _____________ with my family.",
      meaning: "Tôi sống trong một ... nhỏ và yên bình cùng gia đình.",
      example: "I live in a small, peaceful town with my family.",
      alternatives: ["town", "village", "city"],
    },
    {
      term: "There is a big park near my house, and I often walk there in _____________.",
      meaning: "Có một công viên lớn gần nhà tôi, và tôi thường đi bộ ở đó vào ...",
      example: "There is a big park near my house, and I often walk there in the afternoon.",
      alternatives: ["the afternoon", "the morning", "the evening"],
    },
    {
      term: "My favorite place in town is a quiet _____________ because I can relax.",
      meaning: "Địa điểm yêu thích của tôi trong thị trấn là một ... yên tĩnh vì tôi có thể thư giãn.",
      example: "My favorite place in town is a quiet coffee shop because I can relax and read books.",
      alternatives: ["coffee shop", "library", "park"],
    },
    {
      term: "At the weekend, I usually meet my friends at a café or go _____________.",
      meaning: "Vào cuối tuần, tôi thường gặp gỡ bạn bè ở quán cà phê hoặc đi ...",
      example: "At the weekend, I usually meet my friends at a café or go shopping.",
      alternatives: ["shopping", "swimming", "walking"],
    },
    {
      term: "For me, it is a great place _____________.",
      meaning: "Đối với tôi, đây là một nơi tuyệt vời ...",
      example: "For me, it is a great place to live.",
      alternatives: ["to live", "to stay", "to visit"],
    },
  ],
};

// Dữ liệu từng câu (kèm phân tích chi tiết), export riêng để dùng sau
export const lesson06Sentences = sentences;