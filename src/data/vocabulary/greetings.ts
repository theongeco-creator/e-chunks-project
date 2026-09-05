import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const greetings: VocabTopic = {
  id: "greetings",
  number: "1",
  title: "Chào hỏi & Giới thiệu (Greetings & Introductions)",
  emoji: "🖐️",
  vocabulary: [
    {
      id: "greet-1",
      word: "Hello",
      phonetic: "/həˈləʊ/",
      meaning: "Xin chào",
      example: "Hello, nice to meet you.",
      exampleMeaning: "Xin chào, rất vui được gặp bạn.",
      level: "A1",
      type: "greeting"
    },
    {
      id: "greet-2",
      word: "Goodbye",
      phonetic: "/ɡʊdˈbaɪ/",
      meaning: "Tạm biệt",
      example: "Goodbye, see you tomorrow.",
      exampleMeaning: "Tạm biệt, hẹn gặp lại ngày mai.",
      level: "A1",
      type: "greeting"
    },
    {
      id: "greet-3",
      word: "Hi",
      phonetic: "/haɪ/",
      meaning: "Chào (thân mật)",
      example: "Hi everyone, how are you?",
      exampleMeaning: "Chào mọi người, các bạn khỏe không?",
      level: "A1",
      type: "greeting"
    },
    {
      id: "greet-4",
      word: "Name",
      phonetic: "/neɪm/",
      meaning: "Tên",
      example: "My name is Anna.",
      exampleMeaning: "Tên của tôi là Anna.",
      level: "A1",
      type: "noun"
    },
    {
      id: "greet-5",
      word: "Meet",
      phonetic: "/miːt/",
      meaning: "Gặp gỡ",
      example: "Nice to meet you.",
      exampleMeaning: "Rất vui được gặp bạn.",
      level: "A1",
      type: "verb"
    },
    {
      id: "greet-6",
      word: "From",
      phonetic: "/frɒm/",
      meaning: "Đến từ (quốc gia, thành phố)",
      example: "I am from Vietnam.",
      exampleMeaning: "Tôi đến từ Việt Nam.",
      level: "A1",
      type: "preposition"
    },
    {
      id: "greet-7",
      word: "How are you",
      phonetic: "/haʊ ɑː juː/",
      meaning: "Bạn có khỏe không?",
      example: "Hello! How are you today?",
      exampleMeaning: "Xin chào! Hôm nay bạn thế nào?",
      level: "A1",
      type: "greeting"
    },
    {
      id: "greet-8",
      word: "Fine",
      phonetic: "/faɪn/",
      meaning: "Khỏe, ổn",
      example: "I'm fine, thank you.",
      exampleMeaning: "Tôi khỏe, cảm ơn bạn.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "greet-9",
      word: "Tomorrow",
      phonetic: "/təˈmɒrəʊ/",
      meaning: "Ngày mai",
      example: "See you tomorrow!",
      exampleMeaning: "Hẹn gặp lại ngày mai nhé!",
      level: "A1",
      type: "time"
    }
  ],
};