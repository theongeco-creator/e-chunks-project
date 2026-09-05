import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const weatherAndSeasons: VocabTopic = {
  id: "weather-and-seasons",
  number: "12",
  title: "Thời tiết & Các mùa \n (Weather & Seasons)",
  emoji: "⛅",
  vocabulary: [
    // Level A1
    {
      id: "ws-1",
      word: "Sun",
      phonetic: "/sʌn/",
      meaning: "Mặt trời",
      example: "The sun shines brightly in the sky.",
      exampleMeaning: "Mặt trời chiếu sáng rực rỡ trên bầu trời.",
      level: "A1",
      type: "noun"
    },
    {
      id: "ws-2",
      word: "Rain",
      phonetic: "/reɪn/",
      meaning: "Mưa, trời mưa",
      example: "Take an umbrella because it might rain.",
      exampleMeaning: "Hãy mang theo ô vì trời có thể mưa.",
      level: "A1",
      type: "noun"
    },
    {
      id: "ws-3",
      word: "Hot",
      phonetic: "/hɒt/",
      meaning: "Nóng",
      example: "It is very hot in summer.",
      exampleMeaning: "Trời rất nóng vào mùa hè.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "ws-4",
      word: "Cold",
      phonetic: "/kəʊld/",
      meaning: "Lạnh",
      example: "Wear a warm coat when it is cold outside.",
      exampleMeaning: "Hãy mặc áo khoác ấm khi bên ngoài trời lạnh.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "ws-5",
      word: "Wind",
      phonetic: "/wɪnd/",
      meaning: "Gió",
      example: "The wind is blowing strongly today.",
      exampleMeaning: "Hôm nay gió đang thổi rất mạnh.",
      level: "A1",
      type: "noun"
    },
    {
      id: "ws-6",
      word: "Snow",
      phonetic: "/snəʊ/",
      meaning: "Tuyết",
      example: "Children love playing in the snow.",
      exampleMeaning: "Trẻ em rất thích chơi đùa trong tuyết.",
      level: "A1",
      type: "noun"
    },
    {
      id: "ws-7",
      word: "Summer",
      phonetic: "/ˈsʌmə(r)/",
      meaning: "Mùa hè",
      example: "We usually go to the beach in summer.",
      exampleMeaning: "Chúng tôi thường đi biển vào mùa hè.",
      level: "A1",
      type: "noun"
    },
    {
      id: "ws-8",
      word: "Winter",
      phonetic: "/ˈwɪntə(r)/",
      meaning: "Mùa đông",
      example: "It can get very cold during winter.",
      exampleMeaning: "Trời có thể trở nên rất lạnh trong suốt mùa đông.",
      level: "A1",
      type: "noun"
    },

    // Level A2
    {
      id: "ws-9",
      word: "Spring",
      phonetic: "/sprɪŋ/",
      meaning: "Mùa xuân",
      example: "Flowers bloom everywhere in spring.",
      exampleMeaning: "Hoa nở rộ khắp mọi nơi vào mùa xuân.",
      level: "A2",
      type: "noun"
    },
    {
      id: "ws-10",
      word: "Autumn",
      phonetic: "/ˈɔːtəm/",
      meaning: "Mùa thu",
      example: "Leaves turn yellow and fall in autumn.",
      exampleMeaning: "Lá cây chuyển sang màu vàng và rụng xuống vào mùa thu.",
      level: "A2",
      type: "noun"
    },
    {
      id: "ws-11",
      word: "Cloudy",
      phonetic: "/ˈklaʊdi/",
      meaning: "Nhiều mây",
      example: "The weather is cloudy, but it won't rain.",
      exampleMeaning: "Thời tiết nhiều mây nhưng trời sẽ không mưa đâu.",
      level: "A2",
      type: "adjective"
    },
    {
      id: "ws-12",
      word: "Storm",
      phonetic: "/stɔːm/",
      meaning: "Cơn bão",
      example: "A heavy storm is coming this evening.",
      exampleMeaning: "Một cơn bão lớn đang tới vào tối nay.",
      level: "A2",
      type: "noun"
    },
    {
      id: "ws-13",
      word: "Temperature",
      phonetic: "/ˈtemprətʃə(r)/",
      meaning: "Nhiệt độ",
      example: "The temperature dropped below zero last night.",
      exampleMeaning: "Nhiệt độ đã giảm xuống dưới không độ vào đêm qua.",
      level: "A2",
      type: "noun"
    },
    {
      id: "ws-14",
      word: "Forecast",
      phonetic: "/ˈfɔːkɑːst/",
      meaning: "Dự báo thời tiết",
      example: "What does the weather forecast say for tomorrow?",
      exampleMeaning: "Dự báo thời tiết nói gì về ngày mai thế?",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "ws-15",
      word: "Humidity",
      phonetic: "/hjuːˈmɪdəti/",
      meaning: "Độ ẩm (không khí)",
      example: "The summer humidity in the city makes it feel very hot.",
      exampleMeaning: "Độ ẩm mùa hè trong thành phố làm cho cảm giác rất nóng nực.",
      level: "B1",
      type: "noun"
    },
    {
      id: "ws-16",
      word: "Climate",
      phonetic: "/ˈklaɪmət/",
      meaning: "Khí hậu",
      example: "Vietnam has a tropical climate.",
      exampleMeaning: "Việt Nam có khí hậu nhiệt đới.",
      level: "B1",
      type: "noun"
    },
    {
      id: "ws-17",
      word: "Breeze",
      phonetic: "/briːz/",
      meaning: "Cơn gió nhẹ",
      example: "A cool breeze was blowing from the sea.",
      exampleMeaning: "Một cơn gió mát thổi nhẹ từ hướng biển vào.",
      level: "B1",
      type: "noun"
    },
    {
      id: "ws-18",
      word: "Unpredictable",
      phonetic: "/ˌʌprɪˈdɪktəbl/",
      meaning: "Khó đoán trước",
      example: "Spring weather in this region is often quite unpredictable.",
      exampleMeaning: "Thời tiết mùa xuân ở vùng này thường khá khó đoán trước.",
      level: "B1",
      type: "adjective"
    },
    {
      id: "ws-19",
      word: "Shower",
      phonetic: "/ˈʃaʊə(r)/",
      meaning: "Mưa rào (mưa ngắn)",
      example: "There might be a brief rain shower this afternoon.",
      exampleMeaning: "Có thể có một cơn mưa rào ngắn vào chiều nay.",
      level: "B1",
      type: "noun"
    }
  ],
};