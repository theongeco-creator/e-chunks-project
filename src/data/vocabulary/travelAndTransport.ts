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
    },

    // Level A2
    {
      id: "tt-9",
      word: "Airport",
      phonetic: "/ˈeəpɔːt/",
      meaning: "Sân bay",
      example: "We need to arrive at the airport two hours early.",
      exampleMeaning: "Chúng ta cần có mặt ở sân bay trước hai tiếng.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-10",
      word: "Luggage",
      phonetic: "/ˈlʌɡɪdʒ/",
      meaning: "Hành lý",
      example: "Please wait here while I collect our luggage.",
      exampleMeaning: "Vui lòng đợi ở đây trong lúc tôi đi lấy hành lý của chúng ta.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-11",
      word: "Station",
      phonetic: "/ˈsteɪʃn/",
      meaning: "Ga ( tàu, xe )",
      example: "The train is arriving at the central station.",
      exampleMeaning: "Tàu đang chuẩn bị đến ga trung tâm.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-12",
      word: "Passport",
      phonetic: "/ˈpɑːspɔːt/",
      meaning: "Hộ chiếu",
      example: "You must show your passport at immigration.",
      exampleMeaning: "Bạn phải xuất trình hộ chiếu tại cửa khẩu nhập cảnh.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-13",
      word: "Journey",
      phonetic: "/ˈdʒɜːni/",
      meaning: "Hành trình, chuyến đi dài",
      example: "The long train journey was tiring but exciting.",
      exampleMeaning: "Chuyến đi tàu dài ngày rất mệt mỏi nhưng thú vị.",
      level: "A2",
      type: "noun"
    },
    {
      id: "tt-14",
      word: "Tourist",
      phonetic: "/ˈtʊərɪst/",
      meaning: "Khách du lịch",
      example: "Many international tourists visit Hoi An every year.",
      exampleMeaning: "Nhiều du khách quốc tế đến thăm Hội An mỗi năm.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "tt-15",
      word: "Destination",
      phonetic: "/ˌdestɪˈneɪʃn/",
      meaning: "Điểm đến, đích đến",
      example: "Paris is a popular tourist destination for couples.",
      exampleMeaning: "Paris là một điểm đến du lịch nổi tiếng cho các cặp đôi.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-16",
      word: "Accommodation",
      phonetic: "/əˌkɒməˈdeɪʃn/",
      meaning: "Chỗ ở, nơi lưu trú",
      example: "The tour price includes flights and hotel accommodation.",
      exampleMeaning: "Giá tour đã bao gồm vé máy bay và chỗ ở khách sạn.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-17",
      word: "Delay",
      phonetic: "/dɪˈleɪ/",
      meaning: "Sự chậm trễ, hoãn chuyến",
      example: "Our flight was delayed due to heavy rain.",
      exampleMeaning: "Chuyến bay của chúng tôi đã bị hoãn do trời mưa lớn.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-18",
      word: "Itinerary",
      phonetic: "/aɪˈtɪnərəri/",
      meaning: "Lịch trình chuyến đi",
      example: "We have a busy travel itinerary for our three-day trip.",
      exampleMeaning: "Chúng tôi có một lịch trình du lịch bận rộn cho chuyến đi ba ngày.",
      level: "B1",
      type: "noun"
    },
    {
      id: "tt-19",
      word: "Explore",
      phonetic: "/ɪkˈsplɔː(r)/",
      meaning: "Khám phá",
      example: "They spent the afternoon exploring the old town.",
      exampleMeaning: "Họ dành cả buổi chiều để khám phá phố cổ.",
      level: "B1",
      type: "verb"
    }
  ],
};