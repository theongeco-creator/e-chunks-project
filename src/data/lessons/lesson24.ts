import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

const sentences: LessonSentence[] = [
  {
    id: "l24-s1",
    ipa: "/ˈduːɪŋ spɔrts ɪz ˈvɛri ɡʊd fɔr maɪ hɛlθ/",
    en: "Doing sports is very good for my health.",
    vi: "Chơi thể thao rất tốt cho sức khỏe của tôi.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Gerund phrase (Doing sports) + be (is) + complement (very good) + prepositional phrase (for my health)." },
      { label: "Doing sports is very good", content: "Chủ ngữ danh động từ 'Doing sports' + động từ tobe 'is' + tính từ 'very good'." },
      { label: "for my health", content: "Cụm giới từ chỉ đối tượng hưởng lợi." },
    ],
    chunks: [
      c("Doing sports", "chơi thể thao", "/ˈduːɪŋ spɔrts/", "noun", "Chủ ngữ danh động từ (verb-ing + object)", "Danh động từ làm chủ ngữ chỉ hoạt động thể thao."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("very good", "rất tốt", "/ˈvɛri ɡʊd/", "adjective", "Tính từ bổ ngữ (adverb + adjective)", "Miêu tả mức độ tốt."),
      c("for my health", "cho sức khỏe của tôi", "/fɔr maɪ hɛlθ/", "preposition", "Cụm giới từ chỉ đối tượng (preposition + possessive determiner + noun)", "Giới từ 'for' kết hợp cụm danh từ chỉ sức khỏe."),
    ],
  },
  {
    id: "l24-s2",
    ipa: "/aɪ laɪk ˈpleɪɪŋ ˈbædmɪntən wɪð maɪ frɛndz ɪn ði ˈæftərˌnuːn/",
    en: "I like playing badminton with my friends in the afternoon.",
    vi: "Tôi thích chơi cầu lông với bạn bè vào buổi chiều.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb phrase (like playing badminton) + prepositional phrase (with my friends) + prepositional phrase (in the afternoon)." },
      { label: "I like playing badminton", content: "Chủ ngữ 'I' + động từ 'like' + danh động từ 'playing badminton'." },
      { label: "with my friends in the afternoon", content: "Cụm giới từ chỉ người cùng tham gia + cụm giới từ chỉ thời gian buổi chiều." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "Động từ chính", "Diễn tả sở thích."),
      c("playing badminton", "chơi cầu lông", "/ˈpleɪɪŋ ˈbædmɪntən/", "verb", "Cụm động từ (verb-ing + object)", "Chỉ môn thể thao cầu lông."),
      c("with my friends", "với những người bạn của tôi", "/wɪð maɪ frɛndz/", "preposition", "Cụm giới từ chỉ người đi cùng", "Giới từ 'with' kết hợp cụm danh từ chỉ bạn bè."),
      c("in the afternoon", "vào buổi chiều", "/ɪn ði ˈæftərˌnuːn/", "preposition", "Cụm giới từ chỉ thời gian", "Giới từ 'in' dùng với buổi chiều."),
    ],
  },
  {
    id: "l24-s3",
    ipa: "/maɪ ˈfɑðər ˈjuːʒuəli ɡoʊz ˈdɑɡɪŋ ɪn ðə pɑrk ˈɛvri ˈmɔrnɪŋ/",
    en: "My father usually goes jogging in the park every morning.",
    vi: "Bố tôi thường đi chạy bộ ở công viên vào mỗi buổi sáng.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (My father) + adverb (usually) + verb phrase (goes jogging) + prepositional phrase (in the park) + adverbial (every morning)." },
      { label: "My father usually goes jogging", content: "Chủ ngữ 'My father' + trạng từ tần suất 'usually' + cụm động từ 'goes jogging'." },
      { label: "in the park every morning", content: "Cụm giới từ chỉ địa điểm + cụm trạng từ chỉ thời gian lặp lại." },
    ],
    chunks: [
      c("My father", "bố của tôi", "/maɪ ˈfɑðər/", "noun", "Chủ ngữ (possessive determiner + noun)", "Cụm danh từ chỉ người thân trong gia đình."),
      c("usually", "thường xuyên", "/ˈjuːʒuəli/", "adverb", "Trạng từ chỉ tần suất", "Chỉ thói quen thường làm."),
      c("goes jogging", "đi chạy bộ", "/ɡoʊz ˈdɑɡɪŋ/", "verb", "Cụm động từ (verb + verb-ing)", "Chỉ hoạt động chạy bộ thể dục."),
      c("in the park", "ở công viên", "/ɪn ðə pɑrk/", "preposition", "Cụm giới từ chỉ địa điểm", "Giới từ 'in' kết hợp cụm danh từ chỉ công viên."),
      c("every morning", "mỗi buổi sáng", "/ˈɛvri ˈmɔrnɪŋ/", "adverb", "Cụm trạng từ chỉ thời gian lặp lại (determiner + noun)", "Chỉ tần suất thời gian trong ngày."),
    ],
  },
  {
    id: "l24-s4",
    ipa: "/ˈpleɪɪŋ spɔrts hɛlps miː rɪˈduːs strɛs ˈæftər ə lɔŋ deɪ/",
    en: "Playing sports helps me reduce stress after a long day.",
    vi: "Chơi thể thao giúp tôi giảm bớt căng thẳng sau một ngày dài.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (Playing sports) + verb (helps) + object (me) + complement verb (reduce stress) + prepositional phrase (after a long day)." },
      { label: "Playing sports helps me reduce stress", content: "Chủ ngữ danh động từ 'Playing sports' + động từ 'helps' + tân ngữ 'me' + động từ nguyên thể không 'to' 'reduce stress'." },
      { label: "after a long day", content: "Cụm giới từ chỉ thời gian sau một ngày dài." },
    ],
    chunks: [
      c("Playing sports", "chơi thể thao", "/ˈpleɪɪŋ spɔrts/", "noun", "Chủ ngữ danh động từ", "Danh động từ chỉ hoạt động thể thao."),
      c("helps", "giúp", "/hɛlps/", "verb", "Động từ chính", "Chia số ít theo ngôi thứ ba số ít."),
      c("me", "tôi", "/miː/", "noun", "Tân ngữ", "Đại từ nhân xưng tân ngữ."),
      c("reduce stress", "giảm căng thẳng", "/rɪˈduːs strɛs/", "verb", "Cụm động từ (verb + noun)", "Chỉ hành động giải tỏa áp lực."),
      c("after a long day", "sau một ngày dài", "/ˈæftər ə lɔŋ deɪ/", "preposition", "Cụm giới từ chỉ thời gian (preposition + article + adjective + noun)", "Giới từ 'after' kết hợp cụm danh từ chỉ ngày làm việc."),
    ],
  },
  {
    id: "l24-s5",
    ipa: "/læst ˈsʌndeɪ, maɪ tiːm wɑn ə smɔːl ˈfʊtˌbɔl mætʃ/",
    en: "Last Sunday, my team won a small football match.",
    vi: "Chủ nhật tuần trước, đội của tôi đã thắng một trận đấu bóng đá nhỏ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverbial (Last Sunday) + S (my team) + verb (won) + object (a small football match)." },
      { label: "Last Sunday", content: "Trạng từ chỉ thời gian trong quá khứ." },
      { label: "my team won a small football match", content: "Chủ ngữ 'my team' + động từ quá khứ 'won' + tân ngữ 'a small football match'." },
    ],
    chunks: [
      c("Last Sunday", "Chủ nhật tuần trước", "/læst ˈsʌndeɪ/", "adverb", "Cụm trạng từ chỉ thời gian", "Xác định thời điểm cụ thể trong quá khứ."),
      c("my team", "đội của tôi", "/maɪ tiːm/", "noun", "Chủ ngữ (possessive determiner + noun)", "Cụm danh từ chỉ đội nhóm thể thao."),
      c("won", "đã thắng", "/wɑn/", "verb", "Động từ quá khứ", "Dạng quá khứ của win."),
      c("a small football match", "một trận bóng đá nhỏ", "/ə smɔːl ˈfʊtˌbɔl mætʃ/", "noun", "Tân ngữ (article + adjective + noun + noun)", "Cụm danh từ chỉ trận đấu thể thao."),
    ],
  },
  {
    id: "l24-s6",
    ipa: "/aɪ niːd tuː baɪ nuː spɔrts ʃuːz fɔr nɛkst wiːk/",
    en: "I need to buy new sports shoes for next week.",
    vi: "Tôi cần mua giày thể thao mới cho tuần tới.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb phrase (need to buy new sports shoes) + prepositional phrase (for next week)." },
      { label: "I need to buy new sports shoes", content: "Chủ ngữ 'I' + động từ 'need' + cụm nguyên mẫu 'to buy new sports shoes'." },
      { label: "for next week", content: "Cụm giới từ chỉ thời gian mục đích." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("need to buy", "cần mua", "/niːd tuː baɪ/", "verb", "Cụm động từ (verb + to-infinitive)", "Diễn tả nhu cầu thiết yếu."),
      c("new sports shoes", "giày thể thao mới", "/nuː spɔrts ʃuːz/", "noun", "Tân ngữ (adjective + noun + noun)", "Cụm danh từ chỉ giày dép."),
      c("for next week", "cho tuần tới", "/fɔr nɛkst wiːk/", "preposition", "Cụm giới từ chỉ thời gian", "Giới từ 'for' kết hợp cụm trạng từ chỉ thời gian tuần tới."),
    ],
  },
  {
    id: "l24-s7",
    ipa: "/aɪ duː nɑt laɪk ˈswɪmɪŋ bɪˈkʌz ði ˈwɔtər ɪz ˈɑfən koʊld/",
    en: "I do not like swimming because the water is often cold.",
    vi: "Tôi không thích bơi lội vì nước thường lạnh.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + auxiliary/negative (do not) + verb (like) + object (swimming) + connector (because) + clause (the water is often cold)." },
      { label: "I do not like swimming", content: "Chủ ngữ 'I' + trợ động từ phủ định 'do not' + động từ 'like' + tân ngữ danh động từ 'swimming'." },
      { label: "because the water is often cold", content: "Liên từ 'because' + mệnh đề nguyên nhân." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("do not like", "không thích", "/duː nɑt laɪk/", "verb", "Cụm động từ phủ định", "Diễn tả sự không ưa thích môn bơi."),
      c("swimming", "bơi lội", "/ˈswɪmɪŋ/", "noun", "Tân ngữ danh động từ", "Danh động từ chỉ môn bơi."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do không thích bơi."),
      c("the water", "nước", "/ði ˈwɔtər/", "noun", "Chủ ngữ mệnh đề sau (article + noun)", "Cụm danh từ chỉ nguồn nước bơi."),
      c("is", "thì", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("often cold", "thường lạnh", "/ˈɑfən koʊld/", "adjective", "Tính từ bổ ngữ (adverb + adjective)", "Miêu tả nhiệt độ nước."),
    ],
  },
  {
    id: "l24-s8",
    ipa: "/aɪ θɪŋk ˈɛvriˌwʌn ʃʊd duː ɪksˈsərsaɪz ˈɛvri deɪ/",
    en: "I think everyone should do exercise every day.",
    vi: "Tôi nghĩ mọi người nên tập thể dục mỗi ngày.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb (think) + that-clause (everyone should do exercise every day)." },
      { label: "I think", content: "Chủ ngữ 'I' + động từ 'think'." },
      { label: "everyone should do exercise", content: "Chủ ngữ 'everyone' + động từ khiếm khuyết 'should' + cụm động từ 'do exercise'." },
      { label: "every day", content: "Trạng từ chỉ tần suất mỗi ngày." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("think", "nghĩ rằng", "/θɪŋk/", "verb", "Động từ quan điểm", "Diễn tả suy nghĩ cá nhân."),
      c("everyone", "mọi người", "/ˈɛvriˌwʌn/", "noun", "Chủ ngữ mệnh đề sau", "Đại từ bất định chỉ tất cả mọi người."),
      c("should do exercise", "nên tập thể dục", "/ʃʊd duː ɪksˈsərsaɪz/", "verb", "Cụm động từ với modal verb (modal + verb + noun)", "Diễn tả lời khuyên nên tập thể dục."),
      c("every day", "mỗi ngày", "/ˈɛvri deɪ/", "adverb", "Cụm trạng từ chỉ tần suất", "Chỉ mức độ lặp lại hàng ngày."),
    ],
  },
];

export const lesson24Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "Doing sports is very good for my _____________.",
      meaning: "Chơi thể thao rất tốt cho ... của tôi.",
      example: "Doing sports is very good for my health.",
      alternatives: ["health", "body"],
    },
    {
      term: "I like playing badminton with my friends in the _____________.",
      meaning: "Tôi thích chơi cầu lông với bạn bè vào buổi ...",
      example: "I like playing badminton with my friends in the afternoon.",
      alternatives: ["afternoon", "evening"],
    },
    {
      term: "My father usually goes jogging in the park every _____________.",
      meaning: "Bố tôi thường đi chạy bộ ở công viên vào mỗi buổi ...",
      example: "My father usually goes jogging in the park every morning.",
      alternatives: ["morning", "day"],
    },
    {
      term: "I need to buy new sports shoes for next _____________.",
      meaning: "Tôi cần mua giày thể thao mới cho ... tới.",
      example: "I need to buy new sports shoes for next week.",
      alternatives: ["week", "month"],
    },
    {
      term: "I think everyone should do exercise every _____________.",
      meaning: "Tôi nghĩ mọi người nên tập thể dục mỗi ...",
      example: "I think everyone should do exercise every day.",
      alternatives: ["day", "morning"],
    },
  ],
};

export const lesson24Sentences = sentences;