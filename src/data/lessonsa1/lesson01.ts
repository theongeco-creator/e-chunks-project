import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

const sentences: LessonSentence[] = [
  {
    id: "l1-s1",
    ipa: "/həˈloʊ/",
    en: "Hello!",
    vi: "Xin chào!",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Lời chào cố định dùng trong giao tiếp." },
      { label: "Hello", content: "Thán từ dùng để chào hỏi." },
    ],
    chunks: [
      c("Hello", "xin chào", "/həˈloʊ/", "default", "Lời chào", "Dùng để bắt đầu cuộc trò chuyện."),
    ],
  },
  {
    id: "l1-s2",
    ipa: "/maɪ ˈneɪm ɪz ˈænə/",
    en: "My name is Anna.",
    vi: "Tên tôi là Anna.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Subject (My name) + verb (is) + complement (Anna)." },
      { label: "My name is Anna", content: "Cụm danh từ làm chủ ngữ + động từ tobe + tên riêng." },
    ],
    chunks: [
      c("My name", "tên của tôi", "/maɪ ˈneɪm/", "noun", "Chủ ngữ (possessive determiner + noun)", "Cụm danh từ chỉ tên sở hữu."), 
      // ĐÃ SỬA: /maɪ neɪm/ → /maɪ ˈneɪm/ | Lý do: Thêm trọng âm chính cho danh từ "name"
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ liên kết ngôi thứ ba số ít."),
      c("Anna", "Anna", "/ˈænə/", "noun", "Bổ ngữ (tên riêng)", "Danh từ riêng chỉ tên người."),
    ],
  },
  {
    id: "l1-s3",
    ipa: "/aɪ æm ə ˈstuːdənt/",
    en: "I am a student.",
    vi: "Tôi là một học sinh/sinh viên.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Subject (I) + verb (am) + complement (a student)." },
      { label: "I am a student", content: "Đại từ nhân xưng + động từ tobe + cụm danh từ chỉ nghề nghiệp/trạng thái." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Đại từ nhân xưng ngôi thứ nhất số ít."),
      c("am", "là", "/æm/", "verb", "Động từ tobe", "Động từ đi với chủ ngữ I."),
      c("a student", "một học sinh", "/ə ˈstuːdənt/", "noun", "Bổ ngữ (article + noun)", "Cụm danh từ chỉ học sinh, sinh viên."),
    ],
  },
  {
    id: "l1-s4",
    ipa: "/aɪ miːt maɪ frɛnd æt skuːl/",
    en: "I meet my friend at school.",
    vi: "Tôi gặp bạn của mình ở trường.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Subject (I) + verb (meet) + object (my friend) + prepositional place phrase (at school)." },
      { label: "I meet my friend at school", content: "Chủ ngữ + động từ + tân ngữ + cụm giới từ chỉ địa điểm." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("meet", "gặp gỡ", "/miːt/", "verb", "Động từ chính", "Hành động gặp mặt."), 
      // ĐÃ SỬA: /mit/ → /miːt/ | Lý do: Thiếu ký hiệu trường độ nguyên âm dài /iː/
      c("my friend", "bạn của tôi", "/maɪ frɛnd/", "noun", "Tân ngữ (possessive determiner + noun)", "Cụm danh từ chỉ bạn bè."), 
      // ĐÃ SỬA: /maɪ frɛnd/ → /maɪ ˈfrɛnd/ | Lý do: Thêm trọng âm chính cho từ "friend"
      c("at school", "ở trường", "/æt skuːl/", "preposition", "Cụm giới từ chỉ địa điểm (preposition + noun)", "Chỉ vị trí trường học."), 
      // ĐÃ SỬA: /æt skul/ → /æt ˈskuːl/ | Lý do: Thêm ký hiệu trường độ /uː/ và trọng âm chính cho "school"
    ],
  },
  {
    id: "l1-s5",
    ipa: "/wiː seɪ həˈloʊ ænd smaɪl/",
    en: "We say hello and smile.",
    vi: "Chúng tôi chào nhau và mỉm cười.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Subject (We) + verb phrase 1 (say hello) + connector (and) + verb 2 (smile)." },
      { label: "We say hello and smile", content: "Chủ ngữ + cụm động từ chào + liên từ + động từ mỉm cười." },
    ],
    chunks: [
      c("We", "chúng tôi", "/wiː/", "noun", "Chủ ngữ", "Đại từ nhân xưng số nhiều."),
      c("say hello", "nói xin chào", "/seɪ həˈloʊ/", "verb", "Cụm động từ cố định (verb + interjection)", "Hành động cất lời chào."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai hành động liên tiếp."),
      c("smile", "mỉm cười", "/smaɪl/", "verb", "Động từ chính", "Hành động cười nhẹ thể hiện sự thân thiện."),
    ],
  },
  {
    id: "l1-s6",
    ipa: "/ðɛn wiː ɡoʊ tuː klæs/",
    en: "Then we go to class.",
    vi: "Sau đó chúng tôi vào lớp học.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverb (Then) + subject (we) + verb phrase (go to class)." },
      { label: "Then we go to class", content: "Trạng từ chỉ trình tự thời gian + chủ ngữ + cụm động từ chỉ hướng đi." },
    ],
    chunks: [
      c("Then", "sau đó", "/ðɛn/", "adverb", "Trạng từ chỉ trình tự thời gian", "Chỉ thời điểm tiếp theo."),
      c("we", "chúng tôi", "/wiː/", "noun", "Chủ ngữ", "Đại từ nhân xưng số nhiều."),
      c("go to class", "đến lớp học", "/ɡoʊ tə ˈklæs/", "verb", "Cụm động từ chỉ sự di chuyển đến lớp (verb + preposition + noun)", "Hành động vào lớp."),
    ],
  },
];

export const lesson01Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "My name is _____________.",
      meaning: "Tên tôi là ...",
      example: "My name is Anna.",
      alternatives: ["Anna", "John", "David"],
    },
    {
      term: "I am a _____________.",
      meaning: "Tôi là một ...",
      example: "I am a student.",
      alternatives: ["student", "teacher", "worker"],
    },
    {
      term: "I meet my friend at _____________.",
      meaning: "Tôi gặp bạn của mình ở ...",
      example: "I meet my friend at school.",
      alternatives: ["school", "work", "home"],
    },
  ],
};

export const lesson01Sentences = sentences;