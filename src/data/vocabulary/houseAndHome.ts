import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const houseAndHome: VocabTopic = {
  id: "house-and-home",
  number: "5",
  title: "Nhà cửa & Đồ đạc \n (House & Home)",
  emoji: "🏠",
  vocabulary: [
    // Level A1
    {
      id: "hh-1",
      word: "House",
      phonetic: "/haʊs/",
      meaning: "Ngôi nhà",
      example: "They live in a small house near the park.",
      exampleMeaning: "Họ sống trong một ngôi nhà nhỏ gần công viên.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hh-2",
      word: "Room",
      phonetic: "/ruːm/",
      meaning: "Phòng",
      example: "My bedroom is my favorite room.",
      exampleMeaning: "Phòng ngủ của tôi là căn phòng yêu thích của tôi.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hh-3",
      word: "Door",
      phonetic: "/dɔː(r)/",
      meaning: "Cửa ra vào",
      example: "Please close the door when you leave.",
      exampleMeaning: "Làm ơn hãy đóng cửa khi bạn rời đi.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hh-4",
      word: "Window",
      phonetic: "/ˈwɪndəʊ/",
      meaning: "Cửa sổ",
      example: "Open the window to get some fresh air.",
      exampleMeaning: "Hãy mở cửa sổ để đón chút không khí trong lành.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hh-5",
      word: "Bed",
      phonetic: "/bed/",
      meaning: "Giường",
      example: "It is time to go to bed.",
      exampleMeaning: "Đã đến lúc đi ngủ rồi.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hh-6",
      word: "Table",
      phonetic: "/ˈteɪbl/",
      meaning: "Cái bàn",
      example: "The keys are on the table.",
      exampleMeaning: "Chìa khóa ở trên bàn.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hh-7",
      word: "Chair",
      phonetic: "/tʃeə(r)/",
      meaning: "Cái ghế",
      example: "Please sit down on the chair.",
      exampleMeaning: "Xin mời ngồi xuống ghế.",
      level: "A1",
      type: "noun"
    },
    {
      id: "hh-8",
      word: "Kitchen",
      phonetic: "/ˈkɪtʃɪn/",
      meaning: "Phòng bếp",
      example: "My mother is cooking in the kitchen.",
      exampleMeaning: "Mẹ tôi đang nấu ăn trong phòng bếp.",
      level: "A1",
      type: "noun"
    },

    // Level A2
    {
      id: "hh-9",
      word: "Apartment",
      phonetic: "/əˈpɑːtmənt/",
      meaning: "Căn hộ",
      example: "They rent a modern apartment in the city center.",
      exampleMeaning: "Họ thuê một căn hộ hiện đại ở trung tâm thành phố.",
      level: "A2",
      type: "noun"
    },
    {
      id: "hh-10",
      word: "Furniture",
      phonetic: "/ˈfɜːnɪtʃə(r)/",
      meaning: "Đồ nội thất",
      example: "They need to buy new furniture for their living room.",
      exampleMeaning: "Họ cần mua đồ nội thất mới cho phòng khách của mình.",
      level: "A2",
      type: "noun"
    },
    {
      id: "hh-11",
      word: "Balcony",
      phonetic: "/ˈbælkəni/",
      meaning: "Ban công",
      example: "She has many flowers growing on her balcony.",
      exampleMeaning: "Cô ấy trồng rất nhiều hoa ngoài ban công.",
      level: "A2",
      type: "noun"
    },
    {
      id: "hh-12",
      word: "Garden",
      phonetic: "/ˈɡɑːdn/",
      meaning: "Khu vườn",
      example: "The children are playing football in the garden.",
      exampleMeaning: "Bọn trẻ đang đá bóng trong khu vườn.",
      level: "A2",
      type: "noun"
    },
    {
      id: "hh-13",
      word: "Bathroom",
      phonetic: "/ˈbɑːθruːm/",
      meaning: "Phòng tắm",
      example: "The bathroom is on the second floor.",
      exampleMeaning: "Phòng tắm ở trên tầng hai.",
      level: "A2",
      type: "noun"
    },
    {
      id: "hh-14",
      word: "Curtain",
      phonetic: "/ˈkɜːtn/",
      meaning: "Rèm cửa",
      example: "Please draw the curtains to let the light in.",
      exampleMeaning: "Hãy kéo rèm cửa lên để ánh sáng chiếu vào.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "hh-15",
      word: "Neighborhood",
      phonetic: "/ˈneɪbəhʊd/",
      meaning: "Khu lân cận, vùng lân cận",
      example: "It is a quiet and safe neighborhood.",
      exampleMeaning: "Đó là một khu vực yên tĩnh và an toàn.",
      level: "B1",
      type: "noun"
    },
    {
      id: "hh-16",
      word: "Renovate",
      phonetic: "/ˈrenəveɪt/",
      meaning: "Cải tạo, sửa sang lại",
      example: "They plan to renovate their old kitchen next month.",
      exampleMeaning: "Họ dự định cải tạo căn bếp cũ vào tháng tới.",
      level: "B1",
      type: "verb"
    },
    {
      id: "hh-17",
      word: "Appliance",
      phonetic: "/əˈplaɪəns/",
      meaning: "Thiết bị gia dụng",
      example: "Modern kitchen appliances save us a lot of time.",
      exampleMeaning: "Các thiết bị nhà bếp hiện đại giúp chúng ta tiết kiệm rất nhiều thời gian.",
      level: "B1",
      type: "noun"
    },
    {
      id: "hh-18",
      word: "Landlord",
      phonetic: "/ˈlændlɔːd/",
      meaning: "Chủ nhà (cho thuê)",
      example: "We need to talk to our landlord about the rent.",
      exampleMeaning: "Chúng ta cần nói chuyện với chủ nhà về tiền thuê nhà.",
      level: "B1",
      type: "noun"
    },
    {
      id: "hh-19",
      word: "Spacious",
      phonetic: "/ˈspeɪʃəs/",
      meaning: "Rộng rãi, thoáng đãng",
      example: "Their new house has a very spacious living room.",
      exampleMeaning: "Ngôi nhà mới của họ có một phòng khách rất rộng rãi.",
      level: "B1",
      type: "adjective"
    }
  ],
};