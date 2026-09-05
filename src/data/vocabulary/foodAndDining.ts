import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const foodAndDining: VocabTopic = {
  id: "food-and-dining",
  number: "10",
  title: " Ẩm thực & Nhà hàng \n (Food & Dining)",
  emoji: "🍽️",
  vocabulary: [
    // Level A1
    {
      id: "fdi-1",
      word: "Eat",
      phonetic: "/iːt/",
      meaning: "Ăn",
      example: "I like to eat fruit every morning.",
      exampleMeaning: "Tôi thích ăn trái cây vào mỗi buổi sáng.",
      level: "A1",
      type: "verb"
    },
    {
      id: "fdi-2",
      word: "Drink",
      phonetic: "/drɪŋk/",
      meaning: "Uống",
      example: "Would you like something to drink?",
      exampleMeaning: "Bạn có muốn uống chút gì không?",
      level: "A1",
      type: "verb"
    },
    {
      id: "fdi-3",
      word: "Food",
      phonetic: "/fuːd/",
      meaning: "Thức ăn, đồ ăn",
      example: "Vietnamese food is very delicious.",
      exampleMeaning: "Đồ ăn Việt Nam rất ngon.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fdi-4",
      word: "Water",
      phonetic: "/ˈwɔːtə(r)/",
      meaning: "Nước",
      example: "Can I have a glass of water, please?",
      exampleMeaning: "Làm ơn cho tôi xin một ly nước?",
      level: "A1",
      type: "noun"
    },
    {
      id: "fdi-5",
      word: "Lunch",
      phonetic: "/lʌntʃ/",
      meaning: "Bữa trưa",
      example: "We usually have lunch at 12 PM.",
      exampleMeaning: "Chúng tôi thường ăn trưa lúc 12 giờ trưa.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fdi-6",
      word: "Dinner",
      phonetic: "/ˈdɪnə(r)/",
      meaning: "Bữa tối",
      example: "What are we having for dinner tonight?",
      exampleMeaning: "Tối nay chúng ta ăn món gì vậy?",
      level: "A1",
      type: "noun"
    },
    {
      id: "fdi-7",
      word: "Menu",
      phonetic: "/ˈmenjuː/",
      meaning: "Thực đơn",
      example: "The waiter handed us the menu.",
      exampleMeaning: "Người phục vụ đưa cho chúng tôi thực đơn.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fdi-8",
      word: "Fish",
      phonetic: "/fɪʃ/",
      meaning: "Cá",
      example: "Cats love to eat fish.",
      exampleMeaning: "Loài mèo rất thích ăn cá.",
      level: "A1",
      type: "noun"
    },

    // Level A2
    {
      id: "fdi-9",
      word: "Waiter",
      phonetic: "/ˈweɪtə(r)/",
      meaning: "Nam phục vụ bàn",
      example: "The waiter recommended a special dish.",
      exampleMeaning: "Nhân viên phục vụ đã gợi ý một món ăn đặc biệt.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fdi-10",
      word: "Bill",
      phonetic: "/bɪl/",
      meaning: "Hóa đơn thanh toán",
      example: "Could we have the bill, please?",
      exampleMeaning: "Làm ơn cho chúng tôi xin hóa đơn thanh toán?",
      level: "A2",
      type: "noun"
    },
    {
      id: "fdi-11",
      word: "Delicious",
      phonetic: "/dɪˈlɪʃəs/",
      meaning: "Ngon miệng",
      example: "This seafood soup is absolutely delicious.",
      exampleMeaning: "Món súp hải sản này thực sự rất ngon.",
      level: "A2",
      type: "adjective"
    },
    {
      id: "fdi-12",
      word: "Tip",
      phonetic: "/tɪp/",
      meaning: "Tiền boa, tiền thưởng thêm",
      example: "He left a generous tip for the waiter.",
      exampleMeaning: "Anh ấy đã để lại một khoản tiền boa rộng rãi cho nhân viên phục vụ.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fdi-13",
      word: "Order",
      phonetic: "/ˈɔːdə(r)/",
      meaning: "Gọi món, đặt món",
      example: "Are you ready to order now?",
      exampleMeaning: "Bây giờ bạn đã sẵn sàng gọi món chưa?",
      level: "A2",
      type: "verb"
    },
    {
      id: "fdi-14",
      word: "Taste",
      phonetic: "/teɪst/",
      meaning: "Nếm, hương vị",
      example: "Try this soup and tell me how it tastes.",
      exampleMeaning: "Hãy thử món súp này và nói cho tôi biết hương vị thế nào.",
      level: "A2",
      type: "verb"
    },

    // Level B1
    {
      id: "fdi-15",
      word: "Reservation",
      phonetic: "/ˌrezəˈveɪʃn/",
      meaning: "Sự đặt bàn trước, sự đặt chỗ",
      example: "I would like to make a table reservation for four people.",
      exampleMeaning: "Tôi muốn đặt trước một bàn cho bốn người.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fdi-16",
      word: "Specialty",
      phonetic: "/ˈspeʃəlti/",
      meaning: "Đặc sản",
      example: "Pho is a world-famous specialty of Vietnam.",
      exampleMeaning: "Phở là món đặc sản nổi tiếng thế giới của Việt Nam.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fdi-17",
      word: "Cuisine",
      phonetic: "/kwɪˈziːn/",
      meaning: "Ẩm thực",
      example: "Italian cuisine is famous for its pasta and pizza.",
      exampleMeaning: "Ẩm thực Ý nổi tiếng với các món mì ống và pizza.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fdi-18",
      word: "Ingredient",
      phonetic: "/ɪnˈɡriːdiənt/",
      meaning: "Nguyên liệu",
      example: "All the ingredients used in this restaurant are fresh.",
      exampleMeaning: "Tất cả các nguyên liệu được sử dụng trong nhà hàng này đều tươi ngon.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fdi-19",
      word: "Complimentary",
      phonetic: "/ˌkɒmplɪˈmentəri/",
      meaning: "Miễn phí (quà tặng kèm từ cửa hàng/nhà hàng)",
      example: "The restaurant offered complimentary drinks to all guests.",
      exampleMeaning: "Nhà hàng đã phục vụ đồ uống miễn phí cho tất cả các vị khách.",
      level: "B1",
      type: "adjective"
    }
  ],
};