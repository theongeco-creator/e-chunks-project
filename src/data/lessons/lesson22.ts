import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

const sentences: LessonSentence[] = [
  {
    id: "l22-s1",
    ipa: "/aɪ ˈriəli laɪk ˈlɪsənɪŋ tuː pɑp ˈmjuzɪk ɪn maɪ friː taɪm/",
    en: "I really like listening to pop music in my free time.",
    vi: "Tôi thực sự thích nghe nhạc pop vào thời gian rảnh.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + adverb (really) + verb phrase (like listening to pop music) + prepositional phrase (in my free time)." },
      { label: "I really like listening to pop music", content: "Chủ ngữ 'I' + trạng từ 'really' + động từ 'like' + danh động từ 'listening to pop music'." },
      { label: "in my free time", content: "Cụm giới từ chỉ thời gian rảnh." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("really", "thật sự", "/ˈriəli/", "adverb", "Trạng từ mức độ", "Nhấn mạnh sở thích."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chính", "Diễn tả sở thích."),
      c("listening to pop music", "nghe nhạc pop", "/ˈlɪsənɪŋ tuː pɑp ˈmjuzɪk/", "verb", "Cụm động từ (verb-ing + object)", "Chỉ hoạt động nghe nhạc."),
      c("in my free time", "trong thời gian rảnh của tôi", "/ɪn maɪ friː taɪm/", "preposition", "Cụm giới từ chỉ thời gian", "Giới từ 'in' kết hợp cụm danh từ chỉ thời gian rảnh."),
    ],
  },
  {
    id: "l22-s2",
    ipa: "/maɪ ˈfeɪvərɪt ˈsɪŋər ɪz ˈvɛri ˈfeɪməs, ænd ʃiː hæz ə ɡreɪt vɔɪs/",
    en: "My favorite singer is very famous, and she has a great voice.",
    vi: "Ca sĩ yêu thích của tôi rất nổi tiếng, và cô ấy có một giọng hát tuyệt vời.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Clause 1 (My favorite singer is very famous) + connector (and) + Clause 2 (she has a great voice)." },
      { label: "My favorite singer is very famous", content: "Chủ ngữ 'My favorite singer' + động từ tobe 'is' + tính từ 'very famous'." },
      { label: "and she has a great voice", content: "Liên từ 'and' + chủ ngữ 'she' + động từ 'has' + tân ngữ 'a great voice'." },
    ],
    chunks: [
      c("My favorite singer", "ca sĩ yêu thích của tôi", "/maɪ ˈfeɪvərɪt ˈsɪŋər/", "noun", "Chủ ngữ (possessive determiner + adjective + noun)", "Cụm danh từ chỉ ca sĩ ưa thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("very famous", "rất nổi tiếng", "/ˈvɛri ˈfeɪməs/", "adjective", "Tính từ bổ ngữ (adverb + adjective)", "Miêu tả mức độ nổi tiếng."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai mệnh đề độc lập."),
      c("she", "cô ấy", "/ʃiː/", "noun", "Chủ ngữ mệnh đề sau", "Đại từ nhân xưng chỉ nữ."),
      c("has", "có", "/hæz/", "verb", "Động từ chính", "Chỉ sự sở hữu đặc điểm giọng hát."),
      c("a great voice", "một giọng hát tuyệt vời", "/ə ɡreɪt vɔɪs/", "noun", "Tân ngữ (article + adjective + noun)", "Cụm danh từ chỉ chất giọng."),
    ],
  },
  {
    id: "l22-s3",
    ipa: "/aɪ ˈɑfən pleɪ ðə ɡɪˈtɑr ɪn ði ˈɪvnɪŋ tuː rɪˈlæks/",
    en: "I often play the guitar in the evening to relax.",
    vi: "Tôi thường chơi đàn ghi-ta vào buổi tối để thư giãn.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + adverb (often) + verb phrase (play the guitar) + prepositional phrase (in the evening) + infinitive phrase (to relax)." },
      { label: "I often play the guitar", content: "Chủ ngữ 'I' + trạng từ tần suất 'often' + cụm động từ chơi nhạc cụ." },
      { label: "in the evening to relax", content: "Cụm giới từ chỉ thời gian + cụm nguyên mẫu chỉ mục đích." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("often", "thường xuyên", "/ˈɑfən/", "adverb", "Trạng từ chỉ tần suất", "Chỉ mức độ thường làm."),
      c("play the guitar", "chơi đàn ghi-ta", "/pleɪ ðə ɡɪˈtɑr/", "verb", "Cụm động từ (verb + article + noun)", "Chỉ hành động chơi nhạc cụ."),
      c("in the evening", "vào buổi tối", "/ɪn ði ˈɪvnɪŋ/", "preposition", "Cụm giới từ chỉ thời gian", "Giới từ 'in' dùng với buổi trong ngày."),
      c("to relax", "để thư giãn", "/tuː rɪˈlæks/", "verb", "Cụm động từ nguyên mẫu chỉ mục đích (to-infinitive)", "Chỉ mục đích của hành động chơi đàn."),
    ],
  },
  {
    id: "l22-s4",
    ipa: "/læst wiːk, aɪ wɛnt tuː ən ɑrt mjuˈziəm wɪð maɪ kloʊs frɛndz/",
    en: "Last week, I went to an art museum with my close friends.",
    vi: "Tuần trước, tôi đã đi đến một bảo tàng nghệ thuật cùng với những người bạn thân của mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverbial (Last week) + S (I) + verb phrase (went to an art museum) + prepositional phrase (with my close friends)." },
      { label: "Last week", content: "Trạng từ chỉ thời gian quá khứ." },
      { label: "I went to an art museum", content: "Chủ ngữ 'I' + động từ 'went' + cụm giới từ chỉ nơi đến." },
      { label: "with my close friends", content: "Cụm giới từ chỉ người đi cùng." },
    ],
    chunks: [
      c("Last week", "tuần trước", "/læst wiːk/", "adverb", "Cụm trạng từ chỉ thời gian", "Xác định thời điểm trong quá khứ."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("went to an art museum", "đi đến bảo tàng nghệ thuật", "/wɛnt tuː ən ɑrt mjuˈziəm/", "verb", "Cụm động từ chỉ sự di chuyển (verb + preposition + article + noun + noun)", "Chỉ hành động đến bảo tàng."),
      c("with my close friends", "với những người bạn thân của tôi", "/wɪð maɪ kloʊs frɛndz/", "preposition", "Cụm giới từ chỉ người đi cùng (preposition + possessive determiner + adjective + noun)", "Giới từ 'with' kết hợp cụm danh từ chỉ bạn bè."),
    ],
  },
  {
    id: "l22-s5",
    ipa: "/wiː sɔː ˈmɛni ˈbjuːtəfəl ˈpeɪntɪŋz ænd ˈfoʊtoʊz ðɛr/",
    en: "We saw many beautiful paintings and photos there.",
    vi: "Chúng tôi đã nhìn thấy rất nhiều bức tranh và bức ảnh đẹp ở đó.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (We) + verb (saw) + object (many beautiful paintings and photos) + adverb (there)." },
      { label: "We saw many beautiful paintings and photos", content: "Chủ ngữ 'We' + động từ 'saw' + tân ngữ kết hợp." },
      { label: "there", content: "Trạng từ chỉ nơi chốn." },
    ],
    chunks: [
      c("We", "chúng tôi", "/wiː/", "noun", "Chủ ngữ", "Đại từ nhân xưng số nhiều."),
      c("saw", "đã nhìn thấy", "/sɔː/", "verb", "Động từ quá khứ", "Dạng quá khứ của see."),
      c("many beautiful paintings", "nhiều bức tranh đẹp", "/ˈmɛni ˈbjuːtəfəl ˈpeɪntɪŋz/", "noun", "Tân ngữ phần đầu (quantifier + adjective + noun)", "Cụm danh từ số nhiều chỉ tranh vẽ."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối giữa tranh và ảnh."),
      c("photos", "bức ảnh", "/ˈfoʊtoʊz/", "noun", "Tân ngữ phần sau", "Danh từ số nhiều chỉ ảnh chụp."),
      c("there", "ở đó", "/ðɛr/", "adverb", "Trạng từ chỉ nơi chốn", "Chỉ vị trí tại bảo tàng."),
    ],
  },
  {
    id: "l22-s6",
    ipa: "/aɪ θɪŋk ɑrt ɪz ˈvɛri ˈɪntrəstɪŋ bɪˈkʌz ɪt meɪks ˈpipəl ˈhæpi/",
    en: "I think art is very interesting because it makes people happy.",
    vi: "Tôi nghĩ nghệ thuật rất thú vị vì nó làm cho con người cảm thấy hạnh phúc.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb (think) + that-clause (art is very interesting because it makes people happy)." },
      { label: "I think", content: "Chủ ngữ 'I' + động từ 'think'." },
      { label: "art is very interesting", content: "Chủ ngữ 'art' + động từ tobe 'is' + tính từ 'very interesting'." },
      { label: "because it makes people happy", content: "Liên từ 'because' + mệnh đề chỉ nguyên nhân." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("think", "nghĩ rằng", "/θɪŋk/", "verb", "Động từ quan điểm", "Diễn tả suy nghĩ cá nhân."),
      c("art", "nghệ thuật", "/ɑrt/", "noun", "Chủ ngữ mệnh đề sau", "Danh từ chỉ nghệ thuật."),
      c("is", "thì", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("very interesting", "rất thú vị", "/ˈvɛri ˈɪntrəstɪŋ/", "adjective", "Tính từ bổ ngữ (adverb + adjective)", "Miêu tả sự thú vị."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do nghệ thuật thú vị."),
      c("it", "nó", "/ɪt/", "noun", "Chủ ngữ mệnh đề sau", "Đại từ chỉ nghệ thuật."),
      c("makes", "làm cho", "/meɪks/", "verb", "Động từ sai khiến", "Chia số ít theo ngôi thứ ba số ít."),
      c("people", "mọi người", "/ˈpipəl/", "noun", "Tân ngữ", "Danh từ chỉ con người."),
      c("happy", "hạnh phúc", "/ˈhæpi/", "adjective", "Bổ ngữ cho tân ngữ", "Miêu tả trạng thái vui vẻ."),
    ],
  },
  {
    id: "l22-s7",
    ipa: "/ɪn ðə ˈfjuʧər, aɪ wɑːnt tuː lɜrn haʊ tuː drɔː wɛl/",
    en: "In the future, I want to learn how to draw well.",
    vi: "Trong tương lai, tôi muốn học cách vẽ đẹp.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Prepositional phrase (In the future) + S (I) + verb phrase (want to learn how to draw well)." },
      { label: "In the future", content: "Cụm giới từ chỉ thời gian tương lai." },
      { label: "I want to learn how to draw well", content: "Chủ ngữ 'I' + động từ 'want' + cụm nguyên mẫu phức hợp chỉ mong muốn học vẽ." },
    ],
    chunks: [
      c("In the future", "trong tương lai", "/ɪn ðə ˈfjuʧər/", "preposition", "Cụm giới từ chỉ thời gian", "Cụm cố định chỉ thời gian tới."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("want", "muốn", "/wɑːnt/", "verb", "Động từ chỉ mong muốn", "Diễn tả nguyện vọng."),
      c("to learn", "học", "/tuː lɜrn/", "verb", "Động từ nguyên mẫu (to-infinitive)", "Bổ sung ý nghĩa cho want."),
      c("how to draw well", "cách vẽ giỏi", "/haʊ tuː drɔː wɛl/", "noun", "Cụm danh từ/cấu trúc tân ngữ chỉ kỹ năng (how + to-infinitive + adverb)", "Chỉ cách thức vẽ tốt."),
    ],
  },
  {
    id: "l22-s8",
    ipa: "/ˈmjuzɪk ænd ɑrt ɑr ˈɪmpərtənt pɑrts ɑv maɪ laɪf/",
    en: "Music and art are important parts of my life.",
    vi: "Âm nhạc và nghệ thuật là những phần quan trọng trong cuộc sống của tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Compound subject (Music and art) + be (are) + complement (important parts of my life)." },
      { label: "Music and art are important parts", content: "Chủ ngữ kép 'Music and art' + động từ tobe 'are' + cụm danh từ 'important parts'." },
      { label: "of my life", content: "Cụm giới từ chỉ sự sở hữu cuộc sống." },
    ],
    chunks: [
      c("Music", "âm nhạc", "/ˈmjuzɪk/", "noun", "Chủ ngữ kép phần đầu", "Danh từ chỉ âm nhạc."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối giữa âm nhạc và nghệ thuật."),
      c("art", "nghệ thuật", "/ɑrt/", "noun", "Chủ ngữ kép phần sau", "Danh từ chỉ nghệ thuật."),
      c("are", "là", "/ɑr/", "verb", "Động từ tobe", "Động từ tobe chia số nhiều."),
      c("important parts", "những phần quan trọng", "/ˈɪmpərtənt pɑrts/", "noun", "Bổ ngữ (adjective + noun)", "Cụm danh từ số nhiều chỉ bộ phận."),
      c("of my life", "của cuộc đời tôi", "/ɑv maɪ laɪf/", "preposition", "Cụm giới từ chỉ sự sở hữu (preposition + possessive determiner + noun)", "Giới từ 'of' kết hợp cụm danh từ chỉ cuộc sống."),
    ],
  },
];

export const lesson22Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I really like listening to pop music in my free _____________.",
      meaning: "Tôi thực sự thích nghe nhạc pop vào thời gian ...",
      example: "I really like listening to pop music in my free time.",
      alternatives: ["time", "hours"],
    },
    {
      term: "My favorite singer is very famous, and she has a great _____________.",
      meaning: "Ca sĩ yêu thích của tôi rất nổi tiếng, và cô ấy có một giọng hát tuyệt ...",
      example: "My favorite singer is very famous, and she has a great voice.",
      alternatives: ["voice", "talent"],
    },
    {
      term: "I often play the guitar in the _____________ to relax.",
      meaning: "Tôi thường chơi đàn ghi-ta vào buổi ... để thư giãn.",
      example: "I often play the guitar in the evening to relax.",
      alternatives: ["evening", "afternoon", "morning"],
    },
    {
      term: "Last week, I went to an art museum with my close _____________.",
      meaning: "Tuần trước, tôi đã đi đến một bảo tàng nghệ thuật cùng với những người bạn ... của mình.",
      example: "Last week, I went to an art museum with my close friends.",
      alternatives: ["friends", "family"],
    },
    {
      term: "Music and art are important parts of my _____________.",
      meaning: "Âm nhạc và nghệ thuật là những phần quan trọng trong cuộc ... của tôi.",
      example: "Music and art are important parts of my life.",
      alternatives: ["life", "world"],
    },
  ],
};

export const lesson22Sentences = sentences;