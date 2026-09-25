import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

const sentences: LessonSentence[] = [
  {
    id: "l17-s1",
    ipa: "/maɪ bɛst frɛnd ɪz ə ˈfrɛndli ænd kaɪnd ˈpɜrsən/",
    en: "My best friend is a friendly and kind person.",
    vi: "Người bạn thân nhất của tôi là một người thân thiện và tử tế.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (My best friend) + be (is) + noun phrase (a friendly and kind person)." },
      { label: "My best friend is a friendly and kind person", content: "Chủ ngữ 'My best friend' + động từ tobe 'is' + cụm danh từ mô tả tính cách." },
    ],
    chunks: [
      c("My best friend", "người bạn thân nhất của tôi", "/maɪ bɛst frɛnd/", "noun", "Chủ ngữ", "Cụm danh từ sở hữu chỉ người bạn thân."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("a friendly and kind person", "một người thân thiện và tử tế", "/ə ˈfrɛndli ænd kaɪnd ˈpɜrsən/", "noun", "Bổ ngữ (article + adjective + conjunction + adjective + noun)", "Cụm danh từ miêu tả tính cách chung."),
    ],
  },
  {
    id: "l17-s2",
    ipa: "/ʃi ɪz kwaɪt tɔːl ænd hæz lɔːŋ blæk hɛr/",
    en: "She is quite tall and has long black hair.",
    vi: "Cô ấy khá cao và có mái tóc đen dài.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (She) + be (is) + adjective phrase (quite tall) + connector (and) + verb phrase (has long black hair)." },
      { label: "She is quite tall", content: "Chủ ngữ 'She' + động từ tobe 'is' + trạng từ 'quite' + tính từ 'tall'." },
      { label: "and", content: "Liên từ nối hai đặc điểm." },
      { label: "has long black hair", content: "Động từ 'has' + cụm danh từ chỉ tóc." },
    ],
    chunks: [
      c("She", "cô ấy", "/ʃi/", "noun", "Chủ ngữ", "Đại từ nhân xưng ngôi thứ ba số ít giống cái."),
      c("is", "thì", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia với 'She'."),
      c("quite tall", "khá cao", "/kwaɪt tɔːl/", "adjective", "Cụm tính từ (adverb + adjective)", "Miêu tả chiều cao tương đối."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai đặc điểm ngoại hình."),
      c("has", "có", "/hæz/", "verb", "Động từ chính", "Chỉ đặc điểm ngoại hình sở hữu."),
      c("long black hair", "tóc đen dài", "/lɔːŋ blæk hɛr/", "noun", "Tân ngữ (adjective + adjective + noun)", "Cụm danh từ không đếm được chỉ tóc."),
    ],
  },
  {
    id: "l17-s3",
    ipa: "/ʃi hæz braʊn aɪz ænd ə naɪs smaɪl/",
    en: "She has brown eyes and a nice smile.",
    vi: "Cô ấy có đôi mắt màu nâu và nụ cười đẹp.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (She) + verb (has) + object phrase (brown eyes) + connector (and) + object phrase (a nice smile)." },
      { label: "She has brown eyes", content: "Chủ ngữ 'She' + động từ 'has' + tân ngữ 'brown eyes'." },
      { label: "and", content: "Liên từ kết nối." },
      { label: "a nice smile", content: "Cụm danh từ chỉ nụ cười." },
    ],
    chunks: [
      c("She", "cô ấy", "/ʃi/", "noun", "Chủ ngữ", "Đại từ nhân xưng ngôi thứ ba số ít."),
      c("has", "có", "/hæz/", "verb", "Động từ chính", "Chỉ đặc điểm khuôn mặt."),
      c("brown eyes", "đôi mắt nâu", "/braʊn aɪz/", "noun", "Tân ngữ (adjective + noun)", "Cụm danh từ số nhiều chỉ mắt."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai đặc điểm trên khuôn mặt."),
      c("a nice smile", "một nụ cười đẹp", "/ə naɪs smaɪl/", "noun", "Tân ngữ (article + adjective + noun)", "Cụm danh từ đếm được số ít."),
    ],
  },
  {
    id: "l17-s4",
    ipa: "/ʃi ˈjuːʒuəli wɛrz ˈsɪmpəl klðz laɪk ˈti-ʃɜrts ænd ʤeɪnz/",
    en: "She usually wears simple clothes like T-shirts and jeans.",
    vi: "Cô ấy thường mặc quần áo giản dị như áo thun và quần jeans.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (She) + adverb (usually) + verb (wears) + object (simple clothes) + prepositional phrase (like T-shirts and jeans)." },
      { label: "She usually wears simple clothes", content: "Chủ ngữ 'She' + trạng từ 'usually' + động từ 'wears' + tân ngữ 'simple clothes'." },
      { label: "like T-shirts and jeans", content: "Cụm giới từ chỉ ví dụ trang phục." },
    ],
    chunks: [
      c("She", "cô ấy", "/ʃi/", "noun", "Chủ ngữ", "Đại từ nhân xưng ngôi thứ ba số ít."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ thường."),
      c("wears", "mặc", "/wɛrz/", "verb", "Động từ chính", "Chỉ hành động mặc trang phục."),
      c("simple clothes", "quần áo giản dị", "/ˈsɪmpəl klðz/", "noun", "Tân ngữ (adjective + noun)", "Cụm danh từ chỉ trang phục."),
      c("like T-shirts and jeans", "như áo thun và quần jeans", "/laɪk ˈti-ʃɜrts ænd ʤeɪnz/", "preposition", "Cụm giới từ ví dụ (preposition + noun + conjunction + noun)", "Giới từ 'like' liệt kê loại trang phục."),
    ],
  },
  {
    id: "l17-s5",
    ipa: "/ʃi ɪz ˈvɛri ˈhɛlpfəl ænd ˈɔfən hɛlps miː wɪð maɪ wɜrk/",
    en: "She is very helpful and often helps me with my work.",
    vi: "Cô ấy rất hay giúp đỡ và thường giúp tôi làm việc.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Clause (She is very helpful) + connector (and) + clause (often helps me with my work)." },
      { label: "She is very helpful", content: "Chủ ngữ 'She' + động từ tobe 'is' + trạng từ mức độ 'very' + tính từ 'helpful'." },
      { label: "and", content: "Liên từ kết hợp." },
      { label: "often helps me with my work", content: "Trạng từ 'often' + động từ 'helps' + tân ngữ 'me' + cụm giới từ 'with my work'." },
    ],
    chunks: [
      c("She", "cô ấy", "/ʃi/", "noun", "Chủ ngữ", "Đại từ nhân xưng ngôi thứ ba số ít."),
      c("is", "thì", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("very helpful", "rất hay giúp đỡ", "/ˈvɛri ˈhɛlpfəl/", "adjective", "Cụm tính từ (adverb + adjective)", "Miêu tả tính cách nhiệt tình."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai vế miêu tả đặc điểm/hành động."),
      c("often", "thường xuyên", "/ˈɔfən/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ 'helps'."),
      c("helps", "giúp đỡ", "/hɛlps/", "verb", "Động từ chính", "Chỉ hành động giúp người khác."),
      c("me", "tôi", "/miː/", "noun", "Tân ngữ", "Đại từ nhân xưng làm tân ngữ."),
      c("with my work", "với công việc của tôi", "/wɪð maɪ wɜrk/", "preposition", "Cụm giới từ chỉ lĩnh vực giúp đỡ", "Giới từ 'with' kết hợp cụm danh từ sở hữu."),
    ],
  },
  {
    id: "l17-s6",
    ipa: "/ʃi laɪks ˈlɪsənɪŋ tuː ˈmjuːzɪk ænd ˈwɑʧɪŋ ˈmuviz ɪn hɜr friː taɪm/",
    en: "She likes listening to music and watching movies in her free time.",
    vi: "Cô ấy thích nghe nhạc và xem phim vào thời gian rảnh.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (She) + verb (likes) + gerund phrase (listening to music and watching movies) + prepositional phrase (in her free time)." },
      { label: "She likes", content: "Chủ ngữ 'She' + động từ 'likes'." },
      { label: "listening to music and watching movies", content: "Cụm danh động từ chỉ sở thích giải trí nối bằng 'and'." },
      { label: "in her free time", content: "Cụm giới từ chỉ thời gian rảnh." },
    ],
    chunks: [
      c("She", "cô ấy", "/ʃi/", "noun", "Chủ ngữ", "Đại từ nhân xưng ngôi thứ ba số ít."),
      c("likes", "thích", "/laɪks/", "verb", "Động từ chỉ sở thích", "Động từ chia theo ngôi thứ ba số ít."),
      c("listening to music", "nghe nhạc", "/ˈlɪsənɪŋ tuː ˈmjuːzɪk/", "verb", "Cụm danh động từ (gerund + preposition + noun)", "Chỉ hoạt động nghe nhạc."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai sở thích."),
      c("watching movies", "xem phim", "/ˈwɑʧɪŋ ˈmuviz/", "verb", "Cụm danh động từ (gerund + noun)", "Chỉ hoạt động xem phim."),
      c("in her free time", "trong thời gian rảnh của cô ấy", "/ɪn hɜr friː taɪm/", "preposition", "Cụm giới từ chỉ thời gian", "Giới từ 'in' kết hợp cụm danh từ sở hữu."),
    ],
  },
  {
    id: "l17-s7",
    ipa: "/wi ˈɔfən miːt æt ðə wiːkˌɛnd ænd tɔːk əˈbaʊt ˈaʊər laɪvz/",
    en: "We often meet at the weekend and talk about our lives.",
    vi: "Chúng tôi thường gặp nhau vào cuối tuần và trò chuyện về cuộc sống của mình.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (We) + adverb (often) + verb phrase (meet at the weekend) + connector (and) + verb phrase (talk about our lives)." },
      { label: "We often meet at the weekend", content: "Chủ ngữ 'We' + trạng từ 'often' + động từ 'meet' + cụm giới từ thời gian." },
      { label: "and", content: "Liên từ nối hai hành động." },
      { label: "talk about our lives", content: "Cụm động từ 'talk about' + tân ngữ 'our lives'." },
    ],
    chunks: [
      c("We", "chúng tôi", "/wi/", "noun", "Chủ ngữ", "Đại từ nhân xưng ngôi thứ nhất số nhiều."),
      c("often", "thường xuyên", "/ˈɔfən/", "adverb", "Trạng từ chỉ tần suất", "Đứng trước động từ 'meet'."),
      c("meet", "gặp gỡ", "/miːt/", "verb", "Động từ chính", "Chỉ hành động gặp nhau."),
      c("at the weekend", "vào cuối tuần", "/æt ðə wiːkˌɛnd/", "preposition", "Cụm giới từ chỉ thời gian", "Dùng giới từ 'at' với 'weekend'."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai hoạt động gặp mặt và trò chuyện."),
      c("talk about", "trò chuyện về", "/tɔːk əˈbaʊt/", "verb", "Cụm động từ cố định (verb + preposition)", "Chỉ hành động bàn luận/trò chuyện."),
      c("our lives", "cuộc sống của chúng tôi", "/ˈaʊər laɪvz/", "noun", "Tân ngữ (possessive determiner + noun)", "Cụm danh từ số nhiều chỉ cuộc đời."),
    ],
  },
  {
    id: "l17-s8",
    ipa: "/aɪ laɪk ˈspɛndɪŋ taɪm wɪð hɜr bɪˈkʌz ʃi ɪz ˈiːzi tuː tɔːk tuː/",
    en: "I like spending time with her because she is easy to talk to.",
    vi: "Tôi thích dành thời gian bên cô ấy vì cô ấy rất dễ gần, dễ nói chuyện.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb (like spending time with her) + connector (because) + clause (she is easy to talk to)." },
      { label: "I like spending time with her", content: "Chủ ngữ 'I' + động từ 'like' + cụm danh động từ 'spending time with her'." },
      { label: "because", content: "Liên từ chỉ nguyên nhân." },
      { label: "she is easy to talk to", content: "Mệnh đề phụ giải thích lý do (S + be + adjective + infinitive phrase)." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like spending time", "thích dành thời gian", "/laɪk ˈspɛndɪŋ taɪm/", "verb", "Cụm động từ (like + gerund object)", "Diễn tả sở thích dành thời gian."),
      c("with her", "với cô ấy", "/wɪð hɜr/", "preposition", "Cụm giới từ chỉ người đồng hành", "Giới từ 'with' kết hợp đại từ tân ngữ."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do thích ở cạnh."),
      c("she", "cô ấy", "/ʃi/", "noun", "Chủ ngữ mệnh đề sau", "Đại từ nhân xưng ngôi thứ ba số ít."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("easy to talk to", "dễ nói chuyện", "/ˈiːzi tuː tɔːk tuː/", "adjective", "Cụm tính từ (adjective + to-infinitive)", "Miêu tả tính cách dễ gần, dễ bắt chuyện."),
    ],
  },
];

export const lesson17Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "My best friend is a friendly and _____________ person.",
      meaning: "Người bạn thân nhất của tôi là một người thân thiện và ...",
      example: "My best friend is a friendly and kind person.",
      alternatives: ["kind", "nice", "helpful"],
    },
    {
      term: "She is quite tall and has long _____________ hair.",
      meaning: "Cô ấy khá cao và có mái tóc ... dài.",
      example: "She is quite tall and has long black hair.",
      alternatives: ["black", "brown", "blonde"],
    },
    {
      term: "She usually wears simple clothes like _____________ and jeans.",
      meaning: "Cô ấy thường mặc quần áo giản dị như ... và quần jeans.",
      example: "She usually wears simple clothes like T-shirts and jeans.",
      alternatives: ["T-shirts", "dresses", "sweaters"],
    },
    {
      term: "She likes listening to music and watching _____________ in her free time.",
      meaning: "Cô ấy thích nghe nhạc và xem ... vào thời gian rảnh.",
      example: "She likes listening to music and watching movies in her free time.",
      alternatives: ["movies", "TV", "videos"],
    },
    {
      term: "We often meet at the weekend and talk about our _____________.",
      meaning: "Chúng tôi thường gặp nhau vào cuối tuần và trò chuyện về ... của mình.",
      example: "We often meet at the weekend and talk about our lives.",
      alternatives: ["lives", "work", "studies"],
    },
  ],
};

export const lesson17Sentences = sentences;