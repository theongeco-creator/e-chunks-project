import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const feelingsAndOpinions: VocabTopic = {
  id: "feelings-and-opinions",
  number: "21",
  title: "Cảm xúc và Tính cách \n (Feelings & Opinions)",
  emoji: "💭",
  vocabulary: [
    // Level A1
    {
      id: "fo-1",
      word: "Happy",
      phonetic: "/ˈhæpi/",
      meaning: "Vui vẻ, hạnh phúc",
      example: "She was very happy with her birthday gift.",
      exampleMeaning: "Cô ấy rất vui với món quà sinh nhật của mình.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "fo-2",
      word: "Sad",
      phonetic: "/sæd/",
      meaning: "Buồn",
      example: "He felt sad when his pet cat ran away.",
      exampleMeaning: "Cậu ấy cảm thấy buồn khi chú mèo cưng bỏ chạy mất.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "fo-3",
      word: "Angry",
      phonetic: "/ˈæŋɡri/",
      meaning: "Tức giận",
      example: "The teacher was angry because the students were noisy.",
      exampleMeaning: "Giáo viên tức giận vì học sinh làm ồn.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "fo-4",
      word: "Good",
      phonetic: "/ɡʊd/",
      meaning: "Tốt, hay",
      example: "I think this is a good movie to watch.",
      exampleMeaning: "Tôi nghĩ đây là một bộ phim hay để xem.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "fo-5",
      word: "Bad",
      phonetic: "/bæd/",
      meaning: "Xấu, tồi tệ",
      example: "We had bad weather during our vacation.",
      exampleMeaning: "Chúng tôi đã gặp thời tiết tồi tệ trong kỳ nghỉ của mình.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "fo-6",
      word: "Nice",
      phonetic: "/naɪs/",
      meaning: "Tốt bụng, đẹp, dễ chịu",
      example: "Everyone loves her because she is very nice.",
      exampleMeaning: "Mọi người đều yêu quý cô ấy vì cô ấy rất tốt bụng.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "fo-7",
      word: "Think",
      phonetic: "/θɪŋk/",
      meaning: "Nghĩ, suy nghĩ, cho rằng",
      example: "What do you think about this plan?",
      exampleMeaning: "Bạn nghĩ gì về kế hoạch này?",
      level: "A1",
      type: "verb"
    },
    {
      id: "fo-8",
      word: "Like",
      phonetic: "/laɪk/",
      meaning: "Thích",
      example: "I like listening to classical music.",
      exampleMeaning: "Tôi thích nghe nhạc cổ điển.",
      level: "A1",
      type: "verb"
    },

    // Level A2
    {
      id: "fo-9",
      word: "Excited",
      phonetic: "/ɪkˈsaɪtɪd/",
      meaning: "Phản phấn khởi, hào hứng",
      example: "The children were excited about the upcoming school trip.",
      exampleMeaning: "Bọn trẻ rất hào hứng về chuyến đi chơi sắp tới của trường.",
      level: "A2",
      type: "adjective"
    },
    {
      id: "fo-10",
      word: "Nervous",
      phonetic: "/ˈnɜːvəs/",
      meaning: "Lo lắng, bồn chồn",
      example: "She felt nervous before her job interview.",
      exampleMeaning: "Cô ấy cảm thấy lo lắng trước buổi phỏng vấn xin việc.",
      level: "A2",
      type: "adjective"
    },
    {
      id: "fo-11",
      word: "Friendly",
      phonetic: "/ˈfrendli/",
      meaning: "Thân thiện",
      example: "The local people in this village are very friendly.",
      exampleMeaning: "Người dân địa phương ở ngôi làng này rất thân thiện.",
      level: "A2",
      type: "adjective"
    },
    {
      id: "fo-12",
      word: "Opinion",
      phonetic: "/əˈpɪnjən/",
      meaning: "Ý kiến, quan điểm",
      example: "In my opinion, we should start the project early.",
      exampleMeaning: "Theo quan điểm của tôi, chúng ta nên bắt đầu dự án sớm.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fo-13",
      word: "Believe",
      phonetic: "/bɪˈliːv/",
      meaning: "Tin tưởng, tin rằng",
      example: "I believe that hard work brings success.",
      exampleMeaning: "Tôi tin rằng sự chăm chỉ sẽ mang lại thành công.",
      level: "A2",
      type: "verb"
    },
    {
      id: "fo-14",
      word: "Confused",
      phonetic: "/kənˈfjuːzd/",
      meaning: "Bối rối, lúng túng",
      example: "I was confused by the complicated instructions.",
      exampleMeaning: "Tôi đã cảm thấy bối rối trước những hướng dẫn phức tạp.",
      level: "A2",
      type: "adjective"
    },

    // Level B1
    {
      id: "fo-15",
      word: "Confident",
      phonetic: "/ˈkɒnfɪdənt/",
      meaning: "Tự tin",
      example: "She gave a confident presentation in front of the entire company.",
      exampleMeaning: "Cô ấy đã có một bài thuyết trình tự tin trước toàn thể công ty.",
      level: "B1",
      type: "adjective"
    },
    {
      id: "fo-16",
      word: "Disappointed",
      phonetic: "/ˌdɪsəˈpɔɪntɪd/",
      meaning: "Thất vọng",
      example: "He was disappointed with his exam results.",
      exampleMeaning: "Anh ấy cảm thấy thất vọng với kết quả kỳ thi của mình.",
      level: "B1",
      type: "adjective"
    },
    {
      id: "fo-17",
      word: "Perspective",
      phonetic: "/pəˈspektɪv/",
      meaning: "Góc nhìn, viễn cảnh, quan điểm",
      example: "Traveling helps us gain a fresh perspective on life.",
      exampleMeaning: "Du lịch giúp chúng ta có thêm một góc nhìn mới mẻ về cuộc sống.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fo-18",
      word: "Optimistic",
      phonetic: "/ˌɒptɪˈmɪstɪk/",
      meaning: "Lạc quan",
      example: "She remains optimistic despite facing many challenges.",
      exampleMeaning: "Cô ấy vẫn giữ sự lạc quan dù phải đối mặt với nhiều thử thách.",
      level: "B1",
      type: "adjective"
    },
    {
      id: "fo-19",
      word: "Anxious",
      phonetic: "/ˈæŋʃəs/",
      meaning: "Lo âu, lo lắng thái quá",
      example: "Many students feel anxious while waiting for exam scores.",
      exampleMeaning: "Nhiều học sinh cảm thấy lo âu khi chờ đợi điểm số kỳ thi.",
      level: "B1",
      type: "adjective"
    }
  ],
};