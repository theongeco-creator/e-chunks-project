import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

const sentences: LessonSentence[] = [
  {
    id: "l20-s1",
    ipa: "/aɪ lɪv nɪr ðə ˈsɪti ˈsɛntər, ænd ðɛr ɑːr ˈmɛni pleɪsɪz nɪr maɪ haʊs/",
    en: "I live near the city center, and there are many places near my house.",
    vi: "Tôi sống gần trung tâm thành phố, và có rất nhiều địa điểm gần nhà tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Clause 1 (I live near the city center) + connector (and) + Clause 2 (there are many places near my house)." },
      { label: "I live near the city center", content: "Chủ ngữ 'I' + động từ 'live' + cụm giới từ chỉ vị trí." },
      { label: "and there are many places near my house", content: "Liên từ 'and' + cấu trúc tồn tại 'there are' + cụm danh từ số nhiều + cụm giới từ." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("live", "sống", "/lɪv/", "verb", "Động từ chính", "Chỉ nơi sinh sống."),
      c("near the city center", "gần trung tâm thành phố", "/nɪr ðə ˈsɪti ˈsɛntər/", "preposition", "Cụm giới từ chỉ vị trí", "Giới từ 'near' kết hợp cụm danh từ xác định."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai mệnh đề độc lập."),
      c("there are", "có", "/ðɛr ɑːr/", "verb", "Cụm động từ tồn tại", "Cấu trúc chỉ sự tồn tại số nhiều."),
      c("many places", "nhiều địa điểm", "/ˈmɛni pleɪsɪz/", "noun", "Chủ ngữ số nhiều (quantifier + noun)", "Cụm danh từ chỉ các nơi chốn."),
      c("near my house", "gần nhà của tôi", "/nɪr maɪ haʊs/", "preposition", "Cụm giới từ chỉ vị trí", "Giới từ 'near' kết hợp cụm danh từ sở hữu."),
    ],
  },
  {
    id: "l20-s2",
    ipa: "/ðɛr ɪz ə ˈsuːpərˌmɑrkɪt nɛkst tuː maɪ haʊs, ænd ə bæŋk ɪz əˈkrɔs frʌm ɪt/",
    en: "There is a supermarket next to my house, and a bank is across from it.",
    vi: "Có một siêu thị ở ngay cạnh nhà tôi, và một ngân hàng nằm ở đối diện.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Clause 1 (There is a supermarket next to my house) + connector (and) + Clause 2 (a bank is across from it)." },
      { label: "There is a supermarket next to my house", content: "Cấu trúc 'There is' + cụm danh từ + cụm giới từ chỉ vị trí." },
      { label: "and a bank is across from it", content: "Liên từ 'and' + chủ ngữ + động từ tobe + cụm giới từ chỉ vị trí đối diện." },
    ],
    chunks: [
      c("There is", "có", "/ðɛr ɪz/", "verb", "Cụm động từ tồn tại", "Cấu trúc chỉ sự tồn tại số ít."),
      c("a supermarket", "một siêu thị", "/ə ˈsuːpərˌmɑrkɪt/", "noun", "Chủ ngữ số ít (article + noun)", "Cụm danh từ chỉ siêu thị."),
      c("next to my house", "bên cạnh nhà tôi", "/nɛkst tuː maɪ haʊs/", "preposition", "Cụm giới từ chỉ vị trí", "Cụm giới từ cố định chỉ vị trí kế bên."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai mệnh đề chỉ vị trí các địa điểm."),
      c("a bank", "một ngân hàng", "/ə bæŋk/", "noun", "Chủ ngữ (article + noun)", "Cụm danh từ chỉ ngân hàng."),
      c("is", "là / nằm ở", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("across from it", "đối diện với nó", "/əˈkrɔs frʌm ɪt/", "preposition", "Cụm giới từ chỉ vị trí", "Giới từ 'across from' kết hợp đại từ tân ngữ chỉ ngôi nhà/siêu thị."),
    ],
  },
  {
    id: "l20-s3",
    ipa: "/ðə bʌs stɑp ɪz ɑːn ðə meɪn roʊd, nɪr ə smɔːl ˈkɑfi ʃɑp/",
    en: "The bus stop is on the main road, near a small coffee shop.",
    vi: "Trạm xe buýt nằm trên con đường chính, gần một quán cà phê nhỏ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (The bus stop) + be (is) + prepositional phrase 1 (on the main road) + prepositional phrase 2 (near a small coffee shop)." },
      { label: "The bus stop is on the main road", content: "Chủ ngữ 'The bus stop' + động từ tobe 'is' + cụm giới từ chỉ đường." },
      { label: "near a small coffee shop", content: "Cụm giới từ chỉ vị trí gần quán cà phê." },
    ],
    chunks: [
      c("The bus stop", "trạm xe buýt", "/ðə bʌs stɑp/", "noun", "Chủ ngữ (article + noun + noun)", "Cụm danh từ chỉ trạm xe buýt."),
      c("is", "ở", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chỉ vị trí."),
      c("on the main road", "trên con đường chính", "/ɑːn ðə meɪn roʊd/", "preposition", "Cụm giới từ chỉ vị trí (preposition + article + adjective + noun)", "Giới từ 'on' dùng với tên đường/trục đường."),
      c("near a small coffee shop", "gần một quán cà phê nhỏ", "/nɪr ə smɔːl ˈkɑfi ʃɑp/", "preposition", "Cụm giới từ chỉ vị trí lân cận", "Giới từ 'near' kết hợp cụm danh từ miêu tả quán cà phê."),
    ],
  },
  {
    id: "l20-s4",
    ipa: "/wɛn aɪ ɡoʊ tuː ðə ˈsuːpərˌmɑrkɪt, aɪ wɔːk streɪt fɔr əˈbaʊt faɪv ˈmɪnɪts/",
    en: "When I go to the supermarket, I walk straight for about five minutes.",
    vi: "Khi tôi đi đến siêu thị, tôi đi thẳng trong khoảng năm phút.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Connector (When) + clause (I go to the supermarket) + main clause (I walk straight for about five minutes)." },
      { label: "When I go to the supermarket", content: "Liên từ 'When' + chủ ngữ 'I' + động từ 'go' + cụm giới từ địa điểm." },
      { label: "I walk straight for about five minutes", content: "Chủ ngữ 'I' + cụm động từ chỉ hướng đi + cụm giới từ chỉ khoảng thời gian." },
    ],
    chunks: [
      c("When", "khi", "/wɛn/", "connector", "Từ nối chỉ thời gian", "Mở đầu mệnh đề trạng ngữ thời gian."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ mệnh đề phụ", "Ngôi thứ nhất số ít."),
      c("go to the supermarket", "đi đến siêu thị", "/ɡoʊ tuː ðə ˈsuːpərˌmɑrkɪt/", "verb", "Cụm động từ chỉ sự di chuyển (verb + preposition + article + noun)", "Chỉ hành động đến siêu thị."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ mệnh đề chính", "Ngôi thứ nhất số ít."),
      c("walk straight", "đi thẳng", "/wɔːk streɪt/", "verb", "Cụm động từ (verb + adverb)", "Chỉ hướng đi thẳng không rẽ."),
      c("for about five minutes", "trong khoảng năm phút", "/fɔr əˈbaʊt faɪv ˈmɪnɪts/", "preposition", "Cụm giới từ chỉ khoảng thời gian", "Giới từ 'for' kết hợp cụm số lượng chỉ thời gian."),
    ],
  },
  {
    id: "l20-s5",
    ipa: "/ðɛn, aɪ tɜrn lɛft æt ðə ˈtræfɪk laɪts ænd wɔːk pɑːst ðə bæŋk/",
    en: "Then, I turn left at the traffic lights and walk past the bank.",
    vi: "Sau đó, tôi rẽ trái ở đèn giao thông và đi qua ngân hàng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverbial (Then) + S (I) + verb phrase 1 (turn left at the traffic lights) + connector (and) + verb phrase 2 (walk past the bank)." },
      { label: "Then", content: "Trạng từ chỉ trình tự thời gian." },
      { label: "I turn left at the traffic lights", content: "Chủ ngữ 'I' + cụm động từ rẽ trái + cụm giới từ địa điểm đèn giao thông." },
      { label: "and walk past the bank", content: "Liên từ 'and' + cụm động từ đi ngang qua ngân hàng." },
    ],
    chunks: [
      c("Then", "sau đó", "/ðɛn/", "adverb", "Trạng từ chỉ trình tự", "Dùng để nối tiếp các bước chỉ đường."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("turn left", "rẽ trái", "/tɜrn lɛft/", "verb", "Cụm động từ cố định (verb + adverb)", "Chỉ hành động quẹo trái."),
      c("at the traffic lights", "ở đèn giao thông", "/æt ðə ˈtræfɪk laɪts/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'at' kết hợp danh từ chỉ cột đèn tín hiệu."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối tiếp hai hành động di chuyển liên tiếp."),
      c("walk past", "đi qua", "/wɔːk pɑːst/", "verb", "Cụm động từ chỉ hướng di chuyển (verb + preposition)", "Chỉ hành động bước qua một vị trí."),
      c("the bank", "ngân hàng", "/ðə bæŋk/", "noun", "Tân ngữ (article + noun)", "Cụm danh từ chỉ ngân hàng."),
    ],
  },
  {
    id: "l20-s6",
    ipa: "/ðə ˈsuːpərˌmɑrkɪt ɪz ɑːn ðə raɪt, nɛkst tuː ðə ˈkɑfi ʃɑp/",
    en: "The supermarket is on the right, next to the coffee shop.",
    vi: "Siêu thị nằm ở phía bên phải, ngay bên cạnh quán cà phê.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (The supermarket) + be (is) + prepositional phrase 1 (on the right) + prepositional phrase 2 (next to the coffee shop)." },
      { label: "The supermarket is on the right", content: "Chủ ngữ 'The supermarket' + động từ tobe 'is' + cụm giới từ chỉ phía bên phải." },
      { label: "next to the coffee shop", content: "Cụm giới từ chỉ vị trí ngay cạnh quán cà phê." },
    ],
    chunks: [
      c("The supermarket", "siêu thị", "/ðə ˈsuːpərˌmɑrkɪt/", "noun", "Chủ ngữ (article + noun)", "Cụm danh từ chỉ siêu thị."),
      c("is", "ở / nằm ở", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chỉ vị trí."),
      c("on the right", "ở bên phải", "/ɑːn ðə raɪt/", "preposition", "Cụm giới từ chỉ hướng/vị trí", "Cụm cố định chỉ bên phải."),
      c("next to the coffee shop", "bên cạnh quán cà phê", "/nɛkst tuː ðə ˈkɑfi ʃɑp/", "preposition", "Cụm giới từ chỉ vị trí sát bên", "Cụm giới từ chỉ vị trí kế cận."),
    ],
  },
  {
    id: "l20-s7",
    ipa: "/wɛn aɪ ˈvɪzɪt ə nuː pleɪs, aɪ juːs maɪ foʊn tuː faɪnd ðə weɪ/",
    en: "When I visit a new place, I use my phone to find the way.",
    vi: "Khi tôi ghé thăm một địa điểm mới, tôi dùng điện thoại của mình để tìm đường.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Connector (When) + clause (I visit a new place) + main clause (I use my phone to find the way)." },
      { label: "When I visit a new place", content: "Liên từ 'When' + chủ ngữ 'I' + động từ 'visit' + tân ngữ 'a new place'." },
      { label: "I use my phone to find the way", content: "Chủ ngữ 'I' + động từ 'use' + tân ngữ + cụm nguyên mẫu chỉ mục đích tìm đường." },
    ],
    chunks: [
      c("When", "khi", "/wɛn/", "connector", "Từ nối chỉ thời gian", "Mở đầu mệnh đề thời gian."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ mệnh đề phụ", "Ngôi thứ nhất số ít."),
      c("visit", "ghé thăm", "/ˈvɪzɪt/", "verb", "Động từ chính", "Chỉ hành động đi tới thăm một nơi."),
      c("a new place", "một địa điểm mới", "/ə nuː pleɪs/", "noun", "Tân ngữ (article + adjective + noun)", "Cụm danh từ chỉ nơi chốn mới lạ."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ mệnh đề chính", "Ngôi thứ nhất số ít."),
      c("use", "sử dụng", "/juːs/", "verb", "Động từ chính", "Chỉ hành động dùng công cụ."),
      c("my phone", "điện thoại của tôi", "/maɪ foʊn/", "noun", "Tân ngữ (possessive determiner + noun)", "Cụm danh từ chỉ điện thoại cá nhân."),
      c("to find the way", "để tìm đường", "/tuː faɪnd ðə weɪ/", "verb", "Cụm động từ nguyên mẫu chỉ mục đích (to-infinitive + object)", "Chỉ mục đích dùng điện thoại."),
    ],
  },
  {
    id: "l20-s8",
    ipa: "/ˈsʌmtaɪmz, aɪ ɑːsk ˈpipəl fɔr dɪˈrɛkʃənz wɛn aɪ ˈkænt faɪnd ðə pleɪs/",
    en: "Sometimes, I ask people for directions when I cannot find the place.",
    vi: "Đôi khi, tôi hỏi đường mọi người khi tôi không thể tìm thấy địa điểm đó.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverb (Sometimes) + S (I) + verb phrase (ask people for directions) + connector (when) + clause (I cannot find the place)." },
      { label: "Sometimes I ask people for directions", content: "Trạng từ 'Sometimes' + chủ ngữ 'I' + cụm động từ hỏi đường." },
      { label: "when I cannot find the place", content: "Liên từ 'when' + mệnh đề phụ chỉ lý do không tìm được đường." },
    ],
    chunks: [
      c("Sometimes", "đôi khi", "/ˈsʌmtaɪmz/", "adverb", "Trạng từ chỉ tần suất", "Chỉ hành động thỉnh thoảng xảy ra."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("ask people", "hỏi mọi người", "/ɑːsk ˈpipəl/", "verb", "Cụm động từ (verb + noun object)", "Chỉ hành động đặt câu hỏi với người khác."),
      c("for directions", "về đường đi", "/fɔr dɪˈrɛkʃənz/", "preposition", "Cụm giới từ chỉ chủ đề/yêu cầu", "Giới từ 'for' kết hợp danh từ số nhiều chỉ phương hướng."),
      c("when", "khi", "/wɛn/", "connector", "Từ nối chỉ thời gian", "Mở đầu mệnh đề trạng ngữ thời gian."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ mệnh đề sau", "Ngôi thứ nhất số ít."),
      c("cannot find", "không thể tìm thấy", "/ˈkænt faɪnd/", "verb", "Cụm động từ khiếm khuyết (modal verb + verb)", "Diễn tả sự bất lực trong việc tìm kiếm."),
      c("the place", "nơi đó / địa điểm", "/ðə pleɪs/", "noun", "Tân ngữ (article + noun)", "Cụm danh từ chỉ địa điểm cần tìm."),
    ],
  },
];

export const lesson20Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "There is a supermarket next to my house, and a bank is _____________ from it.",
      meaning: "Có một siêu thị ở ngay cạnh nhà tôi, và một ngân hàng nằm ở ...",
      example: "There is a supermarket next to my house, and a bank is across from it.",
      alternatives: ["across", "far"],
    },
    {
      term: "The bus stop is on the main road, near a small coffee _____________.",
      meaning: "Trạm xe buýt nằm trên con đường chính, gần một quán ... nhỏ.",
      example: "The bus stop is on the main road, near a small coffee shop.",
      alternatives: ["shop", "store", "house"],
    },
    {
      term: "Then, I turn left at the traffic _____________ and walk past the bank.",
      meaning: "Sau đó, tôi rẽ trái ở ... giao thông và đi qua ngân hàng.",
      example: "Then, I turn left at the traffic lights and walk past the bank.",
      alternatives: ["lights", "sign", "pole"],
    },
    {
      term: "When I visit a new place, I use my phone to find the _____________.",
      meaning: "Khi tôi ghé thăm một địa điểm mới, tôi dùng điện thoại của mình để tìm ...",
      example: "When I visit a new place, I use my phone to find the way.",
      alternatives: ["way", "road", "path"],
    },
    {
      term: "Sometimes, I ask people for _____________ when I cannot find the place.",
      meaning: "Đôi khi, tôi hỏi ... mọi người khi tôi không thể tìm thấy địa điểm đó.",
      example: "Sometimes, I ask people for directions when I cannot find the place.",
      alternatives: ["directions", "help", "information"],
    },
  ],
};

export const lesson20Sentences = sentences;