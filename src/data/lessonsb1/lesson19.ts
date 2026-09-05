import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "Health is very important to me. Every day, I usually eat green vegetables and drink a lot of water to stay healthy. My brother does exercise in the morning, and I like walking because it is good for the heart. Sometimes, I feel tired after a long day at work. Today, I have a bad headache, so I want to rest at home. When I am sick, I go to see the doctor. I think washing hands before eating and sleeping early are good habits for everyone. I hope everyone can eat well and live a happy life.";

const translation =
"Sức khỏe rất quan trọng đối với tôi. Mỗi ngày, tôi thường ăn rau xanh và uống nhiều nước để giữ gìn sức khỏe. Anh trai tôi tập thể dục vào buổi sáng, còn tôi thích đi bộ vì nó tốt cho tim mạch. Đôi khi, tôi cảm thấy mệt mỏi sau một ngày dài làm việc. Hôm nay, tôi bị đau đầu dữ dội nên muốn ở nhà nghỉ ngơi. Khi bị ốm, tôi đi khám bác sĩ. Tôi nghĩ rửa tay trước khi ăn và ngủ sớm là những thói quen tốt cho tất cả mọi người. Tôi hy vọng mọi người đều có thể ăn uống lành mạnh và sống một cuộc sống hạnh phúc.";

const readingSegments: ReadingSegment[] = [
  { text: "Health " },
  { text: "is very important to me", type: "adjective" },
  { text: ". " },
  { text: "Every day", type: "time" },
  { text: ", I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "eat green vegetables", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "drink a lot of water", type: "verb" },
  { text: " " },
  { text: " to stay healthy", type: "reason"  },
  { text: " " },
  { text: ". My brother " },
  { text: "does exercise", type: "verb" },
  { text: " " },
  { text: "in the morning", type: "time" },
  { text: ", and I " },
  { text: "like walking", type: "verb" },
  { text: " " },
  { text: "because it is good for the heart", type: "reason" },
  { text: " . " },
  { text: "Sometimes", type: "time" },
  { text: ", I " },
  { text: "feel tired", type: "verb" },
  { text: " " },
  { text: "after a long day at work", type: "preposition" },
  { text: " " },
  { text: ". Today", type: "time"  },
  { text: " " },
  { text: ", I " },
  { text: " " },
  { text: "have a bad headache", type: "verb" },
  { text: ", so I " },
  { text: "want to rest", type: "verb" },
  { text: " " },
  { text: "at home", type: "preposition" },
  { text: " " },
  { text: ". When I am sick, I " },
  { text: "go to see", type: "verb" },
  { text: " " },
  { text: "the doctor", type: "noun" },
  { text: " " },
  { text: ". I think " },
  { text: "washing hands before eating and sleeping early", type: "noun" },
  { text: " are " },
  { text: "good habits", type: "noun" },
  { text: "for everyone", type: "preposition"  },
  { text: " " },
  { text: ". I " },
  { text: " " },
  { text: "hope", type: "verb" },
  { text: " " },
  { text: "everyone", type: "noun" },
  { text: " " },
  { text: "can eat well", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "live a happy life", type: "verb" },
  { text: "." },
];

const chunks: Chunk[] = [
  // Verb chunks (green)
  {
    phrase: "eat green vegetables",
    pronunciation: "/ˈjuːʒuəli iːt ɡriːn ˈvedʒətəblz ænd drɪŋk ə lɒt əv ˈwɔːtər/",
    meaning: "Thường ăn rau xanh và uống nhiều nước",
    context: "Dùng để nói về thói quen ăn uống lành mạnh.",
    type: "verb",
  },
  {
    phrase: "does exercise",
    pronunciation: "/dʌz ˈeksəsaɪz/",
    meaning: "Tập thể dục",
    context: "Dùng để chỉ hoạt động rèn luyện thể chất.",
    type: "verb",
  },
  {
    phrase: "like walking",
    pronunciation: "/laɪk ˈwɔːkɪŋ/",
    meaning: "Thích đi bộ",
    context: "Dùng để nói về bộ môn vận động yêu thích.",
    type: "verb",
  },
  {
    phrase: "have a bad headache",
    pronunciation: "/hæv ə bæd ˈheddeɪk/",
    meaning: "Bị đau đầu nặng",
    context: "Dùng để miêu tả triệu chứng ốm đau, bệnh lý.",
    type: "verb",
  },
  {
    phrase: "want to rest at home",
    pronunciation: "/wɒnt tuː rest ət həʊm/",
    meaning: "Muốn nghỉ ngơi ở nhà",
    context: "Dùng để chỉ mong muốn khi cơ thể mệt mỏi.",
    type: "verb",
  },
  {
    phrase: "go to see the doctor",
    pronunciation: "/ɡəʊ tuː siː ðə ˈdɒktər/",
    meaning: "Đi khám bác sĩ",
    context: "Dùng khi cần sự chăm sóc y tế lúc bị bệnh.",
    type: "verb",
  },
  {
    phrase: "washing hands before eating and sleeping early",
    pronunciation: "/ˈwɒʃɪŋ hændz bɪˈfɔːr ˈiːtɪŋ ænd ˈsliːpɪŋ ˈɜːrli/",
    meaning: "Rửa tay trước khi ăn và đi ngủ sớm",
    context: "Dùng để chỉ các thói quen sinh hoạt tốt cho sức khỏe.",
    type: "verb",
  },
  {
    phrase: "hope everyone can eat well and live a happy life",
    pronunciation: "/həʊp ˈevriwʌn kæn iːt wel ænd lɪv ə ˈhæpi laɪf/",
    meaning: "Hy vọng mọi người đều ăn uống ngon miệng và có cuộc sống hạnh phúc",
    context: "Dùng để gửi gắm lời chúc tốt đẹp đến mọi người.",
    type: "verb",
  },
  // Adjective chunks (blue)
  {
    phrase: "is very important to me",
    pronunciation: "/ɪz ˈveri ɪmˈpɔːrtnt tuː miː/",
    meaning: "Rất quan trọng đối với tôi",
    context: "Dùng để nhấn mạnh mức độ quan trọng của sức khỏe.",
    type: "adjective",
  },
  {
    phrase: "good for the heart",
    pronunciation: "/ɡʊd fɔːr ðə hɑːrt/",
    meaning: "Tốt cho tim mạch",
    context: "Dùng để đánh giá lợi ích của việc đi bộ đối với sức khỏe.",
    type: "adjective",
  },
  {
    phrase: "feel tired",
    pronunciation: "/fiːl ˈtaɪərd/",
    meaning: "Cảm thấy mệt mỏi",
    context: "Dùng để diễn tả trạng thái thể chất sau giờ làm.",
    type: "adjective",
  },
  {
    phrase: "good habits",
    pronunciation: "/ɡʊd ˈhæbɪts/",
    meaning: "Những thói quen tốt",
    context: "Dùng để chỉ các hành vi tích cực trong đời sống.",
    type: "adjective",
  },
  // Time chunks (purple)
  {
    phrase: "Every day",
    pronunciation: "/ˈevri deɪ/",
    meaning: "Mỗi ngày",
    context: "Dùng để chỉ tần suất thực hiện hành động thường nhật.",
    type: "time",
  },
  {
    phrase: "in the morning",
    pronunciation: "/ɪn ðə ˈmɔːrnɪŋ/",
    meaning: "Vào buổi sáng",
    context: "Dùng để chỉ thời điểm tập thể dục.",
    type: "time",
  },
  {
    phrase: "Sometimes",
    pronunciation: "/ˈsʌmtaɪmz/",
    meaning: "Thỉnh thoảng",
    context: "Dùng để chỉ tần suất không thường xuyên của sự mệt mỏi.",
    type: "time",
  },
  {
    phrase: "after a long day at work",
    pronunciation: "/ˈɑːftər ə lɒŋ deɪ ət wɜːk/",
    meaning: "Sau một ngày làm việc dài",
    context: "Dùng để chỉ thời điểm cơ thể dễ bị kiệt sức.",
    type: "time",
  },
  // Reason chunks (yellow)
{
  phrase: "to stay healthy",
  pronunciation: "/tə steɪ ˈhelθi/",
  meaning: "để giữ sức khỏe",
  context: "Dùng TO + động từ để nói về mục đích của một hành động.",
  type: "reason",
},
{
  phrase: "because it is good for the heart",
  pronunciation: "/bɪˈkɒz ɪt ɪz ɡʊd fə ðə hɑːrt/",
  meaning: "bởi vì nó tốt cho tim",
  context: "Dùng BECAUSE để đưa ra lý do hoặc giải thích cho một hành động hay ý kiến.",
  type: "reason",
},
 // Prepositional Chunk (pink)
{
  phrase: "after a long day at work",
  pronunciation: "/ˈɑːftər ə lɒŋ deɪ æt wɜːrk/",
  meaning: "sau một ngày dài làm việc",
  context: "Dùng AFTER để nói về thời điểm một việc xảy ra sau một khoảng thời gian hoặc sự việc khác.",
  type: "preposition",
},
{
  phrase: "at home",
  pronunciation: "/æt həʊm/",
  meaning: "ở nhà",
  context: "Dùng AT để nói về một địa điểm cụ thể, đặc biệt là khi nói về nhà hoặc nơi làm việc.",
  type: "preposition",
},
{
  phrase: "for everyone",
  pronunciation: "/fər ˈevriwʌn/",
  meaning: "cho mọi người",
  context: "Dùng FOR để nói về người hoặc nhóm người nhận được lợi ích hoặc đối tượng của một điều gì đó.",
  type: "preposition",
},
];

const practice: FillBlankQuestion[] = [
  {
    prompt: "Health is very important ____ me.",
    answer: "to",
    hint: "đối với",
  },
  {
    prompt: "Every day, I usually eat green vegetables and drink a lot ____ water to stay healthy.",
    answer: "of",
    hint: "của",
  },
  {
    prompt: "My brother does exercise ____ the morning, and I like walking.",
    answer: "in",
    hint: "vào (buổi sáng)",
  },
  {
    prompt: "Sometimes, I feel tired after a long day ____ work.",
    answer: "at",
    hint: "làm việc ở (nơi làm)",
  },
  {
    prompt: "Today, I have a bad headache, so I want to rest ____ home.",
    answer: "at",
    hint: "ở (nhà)",
  },
  {
    prompt: "When I am sick, I go to see ____ doctor.",
    answer: "the",
    hint: "bác sĩ",
  },
  {
    prompt: "I think washing hands before eating and sleeping early are good habits ____ everyone.",
    answer: "for",
    hint: "cho",
  },
];

export const lesson19Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
  term: "_____ is very important to me",
  meaning: "... rất quan trọng với tôi",
  example: "Health is very important to me.",
  alternatives: [
    "Health is very important to me",
    "Exercise is very important to me",
    "Sleep is very important to me"
  ]
},

{
  term: "Every day, I usually _____________",
  meaning: "Mỗi ngày, tôi thường...",
  example: "Every day, I usually eat vegetables.",
  alternatives: [
    "eat vegetables",
    "drink water",
    "walk in the morning",
    "exercise at home"
  ]
},

{
  term: "to _____________",
  meaning: "để...",
  example: "I exercise to stay healthy.",
  alternatives: [
    "to stay healthy",
    "to feel better",
    "to keep fit",
    "to have more energy"
  ]
},

{
  term: "do exercise _____________",
  meaning: "tập thể dục...",
  example: "I do exercise in the morning.",
  alternatives: [
    "do exercise in the morning",
    "do exercise after work",
    "do exercise every day"
  ]
},

{
  term: "I like _____________ because _____________",
  meaning: "thích... vì...",
  example: "I like walking because it is good for the heart.",
  alternatives: [
    "like walking because it is good for the heart",
    "like swimming because it is fun",
    "like cycling because it is healthy"
  ]
},

{
  term: "be good for _____________",
  meaning: "tốt cho...",
  example: "Exercise is good for your health.",
  alternatives: [
    "good for the heart",
    "good for your health",
    "good for your body",
    "good for your eyes"
  ]
},

{
  term: "Sometimes, I feel _____________",
  meaning: "Đôi khi tôi cảm thấy...",
  example: "Sometimes, I feel tired.",
  alternatives: [
    "feel tired",
    "feel sick",
    "feel weak",
    "feel better"
  ]
},

{
  term: "after _____________",
  meaning: "sau...",
  example: "I feel tired after a long day at work.",
  alternatives: [
    "after a long day at work",
    "after exercise",
    "after a busy day",
    "after a long walk"
  ]
},

{
  term: "Today, I have _____________",
  meaning: "Hôm nay tôi bị...",
  example: "Today, I have a bad headache.",
  alternatives: [
    "a bad headache",
    "a stomachache",
    "a cold",
    "a sore throat"
  ]
},

{
  term: "I want to _____________",
  meaning: "Tôi muốn...",
  example: "I want to rest at home.",
  alternatives: [
    "rest at home",
    "drink some water",
    "go to bed early",
    "see the doctor"
  ]
},

{
  term: "When I am _____________",
  meaning: "Khi tôi...",
  example: "When I am sick, I go to see the doctor.",
  alternatives: [
    "when I am sick, I go to see the doctor",
    "when I am tired, I go to bed early",
    "when I am stressed, I take a rest"
  ]
},

{
  term: "go to see _____________",
  meaning: "đi khám / gặp...",
  example: "I go to see the doctor.",
  alternatives: [
    "see the doctor",
    "see a dentist",
    "see a nurse"
  ]
},

{
  term: "_____ before _____",
  meaning: "... trước khi...",
  example: "I wash my hands before eating.",
  alternatives: [
    "wash my hands before eating",
    "brush my teeth before sleeping",
    "drink water before exercising"
  ]
},

{
  term: "good habits for _____________",
  meaning: "những thói quen tốt cho...",
  example: "These are good habits for everyone.",
  alternatives: [
    "good habits for everyone",
    "good habits for children",
    "good habits for students"
  ]
},

{
  term: "I hope _____________",
  meaning: "Tôi hy vọng...",
  example: "I hope everyone can stay healthy.",
  alternatives: [
    "everyone can eat well",
    "everyone can stay healthy",
    "everyone can sleep well",
    "everyone can live happily"
  ]
},

{
  term: "live a _____________ life",
  meaning: "sống một cuộc sống...",
  example: "I want to live a healthy life.",
  alternatives: [
    "live a happy life",
    "live a healthy life",
    "live a good life",
    "live a long life"
  ]
}
]
};