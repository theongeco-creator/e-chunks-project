import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const foodAndDrinks: VocabTopic = {
  id: "food-and-drinks",
  number: "4",
  title: "Đồ ăn & Thức uống \n (Food & Drinks)",
  emoji: "🍎",
  vocabulary: [
    // Level A1
    {
      id: "fd-1",
      word: "Apple",
      phonetic: "/ˈæpl/",
      meaning: "Quả táo",
      example: "I eat an apple every day.",
      exampleMeaning: "Tôi ăn một quả táo mỗi ngày.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fd-2",
      word: "Water",
      phonetic: "/ˈwɔːtə(r)/",
      meaning: "Nước",
      example: "Please give me a glass of water.",
      exampleMeaning: "Làm ơn cho tôi một cốc nước.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fd-3",
      word: "Bread",
      phonetic: "/bred/",
      meaning: "Bánh mì",
      example: "She has bread and butter for breakfast.",
      exampleMeaning: "Cô ấy ăn bánh mì phết bơ cho bữa sáng.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fd-4",
      word: "Milk",
      phonetic: "/mɪlk/",
      meaning: "Sữa",
      example: "Children should drink milk every day.",
      exampleMeaning: "Trẻ em nên uống sữa mỗi ngày.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fd-5",
      word: "Rice",
      phonetic: "/raɪs/",
      meaning: "Cơm, gạo",
      example: "We eat rice with fish and vegetables.",
      exampleMeaning: "Chúng tôi ăn cơm với cá và rau.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fd-6",
      word: "Egg",
      phonetic: "/eɡ/",
      meaning: "Trứng",
      example: "I like to have a boiled egg for breakfast.",
      exampleMeaning: "Tôi thích ăn trứng luộc vào bữa sáng.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fd-7",
      word: "Chicken",
      phonetic: "/ˈtʃɪkɪn/",
      meaning: "Thịt gà",
      example: "We are having chicken for dinner.",
      exampleMeaning: "Chúng tôi ăn thịt gà vào bữa tối.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fd-8",
      word: "Tea",
      phonetic: "/tiː/",
      meaning: "Trà",
      example: "My grandfather likes drinking green tea.",
      exampleMeaning: "Ông của tôi thích uống trà xanh.",
      level: "A1",
      type: "noun"
    },

    // Level A2
    {
      id: "fd-9",
      word: "Vegetable",
      phonetic: "/ˈvedʒtəbl/",
      meaning: "Rau củ",
      example: "It is important to eat fresh vegetables.",
      exampleMeaning: "Việc ăn rau củ tươi rất quan trọng.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fd-10",
      word: "Restaurant",
      phonetic: "/ˈrestrɒnt/",
      meaning: "Nhà hàng",
      example: "They are having dinner at an Italian restaurant.",
      exampleMeaning: "Họ đang ăn tối tại một nhà hàng Ý.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fd-11",
      word: "Menu",
      phonetic: "/ˈmenjuː/",
      meaning: "Thực đơn",
      example: "Could you show me the menu, please?",
      exampleMeaning: "Làm ơn cho tôi xem thực đơn được không?",
      level: "A2",
      type: "noun"
    },
    {
      id: "fd-12",
      word: "Delicious",
      phonetic: "/dɪˈlɪʃəs/",
      meaning: "Ngon miệng",
      example: "This homemade cake is really delicious.",
      exampleMeaning: "Chiếc bánh tự làm này thực sự rất ngon.",
      level: "A2",
      type: "adjective"
    },
    {
      id: "fd-13",
      word: "Breakfast",
      phonetic: "/ˈbrekfəst/",
      meaning: "Bữa sáng",
      example: "Breakfast is the most important meal of the day.",
      exampleMeaning: "Bữa sáng là bữa ăn quan trọng nhất trong ngày.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fd-14",
      word: "Juice",
      phonetic: "/dʒuːs/",
      meaning: "Nước ép trái cây",
      example: "Orange juice is rich in Vitamin C.",
      exampleMeaning: "Nước cam rất giàu Vitamin C.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "fd-15",
      word: "Ingredient",
      phonetic: "/ɪnˈɡriːdiənt/",
      meaning: "Nguyên liệu",
      example: "Check the recipe to see what ingredients you need.",
      exampleMeaning: "Kiểm tra công thức để xem bạn cần những nguyên liệu gì.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fd-16",
      word: "Recipe",
      phonetic: "/ˈresəpi/",
      meaning: "Công thức nấu ăn",
      example: "She shared her secret recipe for chocolate chip cookies.",
      exampleMeaning: "Cô ấy đã chia sẻ công thức bí mật làm bánh quy chocolate chip.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fd-17",
      word: "Nutrition",
      phonetic: "/njuˈtrɪʃn/",
      meaning: "Dinh dưỡng",
      example: "Good nutrition is essential for a healthy body.",
      exampleMeaning: "Dinh dưỡng tốt là điều thiết yếu cho một cơ thể khỏe mạnh.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fd-18",
      word: "Balanced diet",
      phonetic: "/ˈbālənst ˈdaɪət/",
      meaning: "Chế độ ăn uống cân bằng",
      example: "Doctors always recommend a balanced diet.",
      exampleMeaning: "Các bác sĩ luôn khuyên dùng một chế độ ăn uống cân bằng.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fd-19",
      word: "Appetite",
      phonetic: "/ˈæpɪtaɪt/",
      meaning: "Sự thèm ăn",
      example: "Walking in the fresh air gave me a good appetite.",
      exampleMeaning: "Đi dạo trong không khí trong lành làm tôi rất thèm ăn.",
      level: "B1",
      type: "noun"
    }
  ],
};