import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const healthAndSports: VocabTopic = {
  id: "health-and-sports",
  number: "13",
  title: " Sức khỏe & Thể thao \n (Health & Sports)",
  emoji: "⚽",
  vocabulary: [
    // Level A1
    {
      id: "hs-1",
      word: "Sport",
      phonetic: "/spɔːt/",
      meaning: "Môn thể thao",
      example: "Football is my favorite sport.",
      exampleMeaning: "Bóng đá là môn thể thao yêu thích của tôi.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hs-2",
      word: "Play",
      phonetic: "/pleɪ/",
      meaning: "Chơi (thể thao)",
      example: "They play tennis every weekend.",
      exampleMeaning: "Họ chơi quần vợt vào mỗi cuối tuần.",
      level: "A1",
      type: "verb"
    },
    {
      id: "hs-3",
      word: "Run",
      phonetic: "/rʌn/",
      meaning: "Chạy",
      example: "I like to run in the park in the morning.",
      exampleMeaning: "Tôi thích chạy trong công viên vào buổi sáng.",
      level: "A1",
      type: "verb"
    },
    {
      id: "hs-4",
      word: "Ball",
      phonetic: "/bɔːl/",
      meaning: "Quả bóng",
      example: "The boy is kicking a ball.",
      exampleMeaning: "Cậu bé đang đá một quả bóng.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hs-5",
      word: "Doctor",
      phonetic: "/ˈdɒktə(r)/",
      meaning: "Bác sĩ",
      example: "She wants to become a doctor in the future.",
      exampleMeaning: "Cô ấy muốn trở thành một bác sĩ trong tương lai.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hs-6",
      word: "Headache",
      phonetic: "/ˈhedeɪk/",
      meaning: "Đau đầu",
      example: "I have a bad headache today.",
      exampleMeaning: "Hôm nay tôi bị đau đầu nặng.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hs-7",
      word: "Swim",
      phonetic: "/swɪm/",
      meaning: "Bơi lội",
      example: "Can you swim in deep water?",
      exampleMeaning: "Bạn có biết bơi ở vùng nước sâu không?",
      level: "A1",
      type: "verb"
    },
    {
      id: "hs-8",
      word: "Sick",
      phonetic: "/sɪk/",
      meaning: "Ốm, bệnh",
      example: "He stayed at home because he was sick.",
      exampleMeaning: "Anh ấy ở nhà vì bị ốm.",
      level: "A1",
      type: "adjective"
    },

    // Level A2
    {
      id: "hs-9",
      word: "Exercise",
      phonetic: "/ˈeksəsaɪz/",
      meaning: "Tập thể dục",
      example: "Doing exercise every day keeps you healthy.",
      exampleMeaning: "Tập thể dục mỗi ngày giúp bạn giữ gìn sức khỏe.",
      level: "A2",
      type: "verb"
    },
    {
      id: "hs-10",
      word: "Medicine",
      phonetic: "/ˈmedsn/",
      meaning: "Thuốc",
      example: "Take this medicine three times a day.",
      exampleMeaning: "Uống loại thuốc này ba lần một ngày.",
      level: "A2",
      type: "noun"
    },
    {
      id: "hs-11",
      word: "Hospital",
      phonetic: "/ˈhɒspɪtl/",
      meaning: "Bệnh viện",
      example: "The injured player was taken to the hospital.",
      exampleMeaning: "Cầu thủ bị thương đã được đưa đến bệnh viện.",
      level: "A2",
      type: "noun"
    },
    {
      id: "hs-12",
      word: "Healthy",
      phonetic: "/ˈhelθi/",
      meaning: "Khỏe mạnh, lành mạnh",
      example: "Eating fruit and vegetables makes you healthy.",
      exampleMeaning: "Ăn trái cây và rau củ giúp bạn khỏe mạnh.",
      level: "A2",
      type: "adjective"
    },
    {
      id: "hs-13",
      word: "Match",
      phonetic: "/mætʃ/",
      meaning: "Trận đấu",
      example: "We watched an exciting football match last night.",
      exampleMeaning: "Chúng tôi đã xem một trận đấu bóng đá thú vị vào tối qua.",
      level: "A2",
      type: "noun"
    },
    {
      id: "hs-14",
      word: "Winner",
      phonetic: "/ˈwɪnə(r)/",
      meaning: "Người chiến thắng",
      example: "She was announced as the winner of the race.",
      exampleMeaning: "Cô ấy được xướng tên là người chiến thắng trong cuộc đua.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "hs-15",
      word: "Fitness",
      phonetic: "/ˈfɪtnəs/",
      meaning: "Thể lực, sự vừa vặn khỏe mạnh",
      example: "He goes to the gym regularly to improve his overall fitness.",
      exampleMeaning: "Anh ấy đi tập gym đều đặn để cải thiện thể lực tổng thể của mình.",
      level: "B1",
      type: "noun"
    },
    {
      id: "hs-16",
      word: "Recovery",
      phonetic: "/rɪˈkʌvəri/",
      meaning: "Sự hồi phục, bình phục",
      example: "The athlete made a fast recovery after his knee surgery.",
      exampleMeaning: "Vận động viên đã hồi phục nhanh chóng sau ca phẫu thuật đầu gối.",
      level: "B1",
      type: "noun"
    },
    {
      id: "hs-17",
      word: "Symptoms",
      phonetic: "/ˈsɪmptəmz/",
      meaning: "Triệu chứng (bệnh)",
      example: "Common flu symptoms include fever and a sore throat.",
      exampleMeaning: "Các triệu chứng cúm thông thường bao gồm sốt và đau họng.",
      level: "B1",
      type: "noun"
    },
    {
      id: "hs-18",
      word: "Competition",
      phonetic: "/ˌkɒmpəˈtɪʃn/",
      meaning: "Cuộc thi đấu, cuộc thi",
      example: "She won a gold medal in the international swimming competition.",
      exampleMeaning: "Cô ấy đã giành huy chương vàng trong cuộc thi bơi lội quốc tế.",
      level: "B1",
      type: "noun"
    },
    {
      id: "hs-19",
      word: "Injury",
      phonetic: "/ˈɪndʒəri/",
      meaning: "Chấn thương",
      example: "He missed the final match due to a leg injury.",
      exampleMeaning: "Anh ấy đã bỏ lỡ trận chung kết do chấn thương chân.",
      level: "B1",
      type: "noun"
    }
  ],
};