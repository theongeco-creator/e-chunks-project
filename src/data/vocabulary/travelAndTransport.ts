import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const travelAndTransport: VocabTopic = {
  id: "travel-and-transport",
  number: "11",
  title: "Du lịch & Phương tiện đi lại \n (Travel & Transport)",
  emoji: "✈️",
  vocabulary: [
    // Level A1
    {
      id: "tt-1",
      word: "Car",
      phonetic: "/kɑː(r)/",
      meaning: "Xe ô tô",
      example: "He drives to work by car every day.",
      exampleMeaning: "Anh ấy lái xe đi làm mỗi ngày.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-2",
      word: "Bus",
      phonetic: "/bʌs/",
      meaning: "Xe buýt",
      example: "She takes the bus to school in the morning.",
      exampleMeaning: "Cô ấy bắt xe buýt đi học vào buổi sáng.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-3",
      word: "Train",
      phonetic: "/treɪn/",
      meaning: "Tàu hỏa, xe lửa",
      example: "We are traveling to Hanoi by train.",
      exampleMeaning: "Chúng tôi đang đi du lịch đến Hà Nội bằng tàu hỏa.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-4",
      word: "Plane",
      phonetic: "/pleɪn/",
      meaning: "Máy bay",
      example: "The plane is flying high in the sky.",
      exampleMeaning: "Máy bay đang bay cao trên bầu trời.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-5",
      word: "Ticket",
      phonetic: "/ˈtɪkɪt/",
      meaning: "Vé",
      example: "Please show your train ticket to the conductor.",
      exampleMeaning: "Vui lòng xuất trình vé tàu cho nhân viên soát vé.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-6",
      word: "Trip",
      phonetic: "/trɪp/",
      meaning: "Chuyến đi, cuộc du ngoạn",
      example: "Have a nice trip to Japan!",
      exampleMeaning: "Chúc bạn có một chuyến đi Nhật Bản vui vẻ!",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-7",
      word: "Hotel",
      phonetic: "/həʊˈtel/",
      meaning: "Khách sạn",
      example: "We booked a nice hotel near the beach.",
      exampleMeaning: "Chúng tôi đã đặt một khách sạn đẹp gần bãi biển.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-8",
      word: "Map",
      phonetic: "/mæp/",
      meaning: "Bản đồ",
      example: "Let's check the map to find the museum.",
      exampleMeaning: "Hãy kiểm tra bản đồ để tìm viện bảo tàng.",
      level: "A1",
      type: "noun"
    },{
      id: "tt-9",
      word: "Tent",
      phonetic: "/tent/",
      meaning: "Lều cắm trại",
      example: "We set up our tent near the lake.",
      exampleMeaning: "Chúng tôi dựng lều gần hồ nước.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-10",
      word: "Island",
      phonetic: "/ˈaɪlənd/",
      meaning: "Hòn đảo",
      example: "They spent their summer holiday on a sunny island.",
      exampleMeaning: "Họ đã dành kỳ nghỉ hè của mình trên một hòn đảo đầy nắng.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-11",
      word: "Beach",
      phonetic: "/biːtʃ/",
      meaning: "Bãi biển",
      example: "Children love building sandcastles on the beach.",
      exampleMeaning: "Bọn trẻ rất thích xây lâu đài cát trên bãi biển.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-12",
      word: "Forest",
      phonetic: "/ˈfɒrɪst/",
      meaning: "Rừng",
      example: "Many wild animals live in this green forest.",
      exampleMeaning: "Nhiều loài động vật hoang dã sống trong khu rừng xanh này.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-13",
      word: "River",
      phonetic: "/ˈrɪvə(r)/",
      meaning: "Dòng sông",
      example: "A long river flows through the quiet valley.",
      exampleMeaning: "Một con sông dài chảy qua thung lũng yên bình.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-14",
      word: "Mountain",
      phonetic: "/ˈmaʊntən/",
      meaning: "Ngọn núi",
      example: "The top of the mountain is covered with snow.",
      exampleMeaning: "Đỉnh núi được bao phủ bởi tuyết trắng.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-15",
      word: "Camera",
      phonetic: "/ˈkæmrə/",
      meaning: "Máy ảnh",
      example: "Don't forget to pack your camera for the trip.",
      exampleMeaning: "Đừng quên mang theo máy ảnh cho chuyến đi nhé.",
      level: "A1",
      type: "noun"
    },
    {
      id: "tt-16",
      word: "Guide",
      phonetic: "/ɡaɪd/",
      meaning: "Hướng dẫn viên du lịch, sách hướng dẫn",
      example: "Our local guide showed us around the ancient temple.",
      exampleMeaning: "Hướng dẫn viên địa phương đã dẫn chúng tôi tham quan ngôi đền cổ.",
      level: "A1",
      type: "noun"
    },

    // Level A2
    {
      id: "tt-17",
      word: "Airport",
      phonetic: "/ˈeəpɔːt/",
      meaning: "Sân bay",
      example: "We need to arrive at the airport two hours early.",
      exampleMeaning: "Chúng ta cần có mặt ở sân bay trước hai tiếng.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-18",
      word: "Luggage",
      phonetic: "/ˈlʌɡɪdʒ/",
      meaning: "Hành lý",
      example: "Please wait here while I collect our luggage.",
      exampleMeaning: "Vui lòng đợi ở đây trong lúc tôi đi lấy hành lý của chúng ta.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-19",
      word: "Station",
      phonetic: "/ˈsteɪʃn/",
      meaning: "Ga ( tàu, xe )",
      example: "The train is arriving at the central station.",
      exampleMeaning: "Tàu đang chuẩn bị đến ga trung tâm.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-20",
      word: "Passport",
      phonetic: "/ˈpɑːspɔːt/",
      meaning: "Hộ chiếu",
      example: "You must show your passport at immigration.",
      exampleMeaning: "Bạn phải xuất trình hộ chiếu tại cửa khẩu nhập cảnh.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-21",
      word: "Journey",
      phonetic: "/ˈdʒɜːni/",
      meaning: "Hành trình, chuyến đi dài",
      example: "The long train journey was tiring but exciting.",
      exampleMeaning: "Chuyến đi tàu dài ngày rất mệt mỏi nhưng thú vị.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-22",
      word: "Tourist",
      phonetic: "/ˈtʊərɪst/",
      meaning: "Khách du lịch",
      example: "Many international tourists visit Hoi An every year.",
      exampleMeaning: "Nhiều du khách quốc tế đến thăm Hội An mỗi năm.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-23",
      word: "Adventure",
      phonetic: "/ədˈventʃə(r)/",
      meaning: "Cuộc phiêu lưu, mạo hiểm",
      example: "They went on an exciting jungle adventure.",
      exampleMeaning: "Họ đã tham gia vào một cuộc phiêu lưu trong rừng già thú vị.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-24",
      word: "Resort",
      phonetic: "/rɪˈzɔːt/",
      meaning: "Khu nghỉ dưỡng",
      example: "We stayed at a luxury beach resort last summer.",
      exampleMeaning: "Chúng tôi đã ở tại một khu nghỉ dưỡng bãi biển sang trọng vào mùa hè năm ngoái.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-25",
      word: "Souvenir",
      phonetic: "/ˌsuːvəˈnɪə(r)/",
      meaning: "Đồ lưu niệm",
      example: "She bought some nice souvenirs for her friends.",
      exampleMeaning: "Cô ấy đã mua một vài món đồ lưu niệm đẹp cho bạn bè của mình.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-26",
      word: "Backpack",
      phonetic: "/ˈbækpæk/",
      meaning: "Ba lô đeo lưng",
      example: "He carries all his traveling gear in a large backpack.",
      exampleMeaning: "Anh ấy mang tất cả dụng cụ du lịch của mình trong một chiếc ba lô lớn.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-27",
      word: "Cruise",
      phonetic: "/kruːz/",
      meaning: "Chuyến du ngoạn bằng tàu thủy",
      example: "They booked a romantic cruise along the Mediterranean sea.",
      exampleMeaning: "Họ đã đặt một chuyến du ngoạn lãng mạn dọc theo vùng biển Địa Trung Hải.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-28",
      word: "Landscape",
      phonetic: "/ˈlændskeɪp/",
      meaning: "Phong cảnh, cảnh quan",
      example: "The mountain landscape took our breath away.",
      exampleMeaning: "Phong cảnh núi non đã làm chúng tôi vô cùng kinh ngạc.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "tt-29",
      word: "Destination",
      phonetic: "/ˌdestɪˈneɪʃn/",
      meaning: "Điểm đến, đích đến",
      example: "Paris is a popular tourist destination for couples.",
      exampleMeaning: "Paris là một điểm đến du lịch nổi tiếng cho các cặp đôi.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-30",
      word: "Accommodation",
      phonetic: "/əˌkɒməˈdeɪʃn/",
      meaning: "Chỗ ở, nơi lưu trú",
      example: "The tour price includes flights and hotel accommodation.",
      exampleMeaning: "Giá tour đã bao gồm vé máy bay và chỗ ở khách sạn.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-31",
      word: "Delay",
      phonetic: "/dɪˈleɪ/",
      meaning: "Sự chậm trễ, hoãn chuyến",
      example: "Our flight was delayed due to heavy rain.",
      exampleMeaning: "Chuyến bay của chúng tôi đã bị hoãn do trời mưa lớn.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-32",
      word: "Itinerary",
      phonetic: "/aɪˈtɪnərəri/",
      meaning: "Lịch trình chuyến đi",
      example: "We have a busy travel itinerary for our three-day trip.",
      exampleMeaning: "Chúng tôi có một lịch trình du lịch bận rộn cho chuyến đi ba ngày.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-33",
      word: "Explore",
      phonetic: "/ɪkˈsplɔː(r)/",
      meaning: "Khám phá",
      example: "They spent the afternoon exploring the old town.",
      exampleMeaning: "Họ dành cả buổi chiều để khám phá phố cổ.",
      level: "B1",
      type: "verb"
    },
    {
      id: "tt-34",
      word: "Excursion",
      phonetic: "/ikˈskərZHən/",
      meaning: "Chuyến tham quan ngắn, cuộc dã ngoại",
      example: "The hotel organized a daily boat excursion to the nearby caves.",
      exampleMeaning: "Khách sạn đã tổ chức một chuyến tham quan bằng thuyền hàng ngày đến các hang động gần đó.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-35",
      word: "Expedition",
      phonetic: "/ˌekspəˈdɪʃn/",
      meaning: "Cuộc thám hiểm, đoàn thám hiểm",
      example: "Scientists joined a research expedition into the Amazon rainforest.",
      exampleMeaning: "Các nhà khoa học đã tham gia một cuộc thám hiểm nghiên cứu vào rừng mưa Amazon.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-36",
      word: "Breathtaking",
      phonetic: "/ˈbreθteɪkɪŋ/",
      meaning: "Đẹp ngẹt thở, đẹp tuyệt vời",
      example: "From the cliff top, we enjoyed a breathtaking view of the ocean.",
      exampleMeaning: "Từ đỉnh vách đá, chúng tôi đã tận hưởng khung cảnh đại dương đẹp tuyệt vời.",
      level: "B1",
      type: "adjective"
    },
    {
      id: "tt-37",
      word: "Wanderlust",
      phonetic: "/ˈwɒndəlʌst/",
      meaning: "Niềm đam mê dịch chuyển, thích đi du lịch",
      example: "Her strong wanderlust inspired her to travel around the world.",
      exampleMeaning: "Niềm đam mê dịch chuyển mạnh mẽ đã truyền cảm hứng cho cô ấy đi du lịch khắp thế giới.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-38",
      word: "Remote",
      phonetic: "/rɪˈməʊt/",
      meaning: "Hẻo lánh, vùng sâu vùng xa",
      example: "They spent their vacation in a remote village away from the city noise.",
      exampleMeaning: "Họ đã dành kỳ nghỉ của mình ở một ngôi làng hẻo lánh tránh xa tiếng ồn thành phố.",
      level: "B1",
      type: "adjective"
    }
  ],
};