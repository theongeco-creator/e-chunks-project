import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const placesAndDirections: VocabTopic = {
  id: "places-and-directions",
  number: "15",
  title: "Địa điểm & Chỉ đường \n (Places & Directions)",
  emoji: "🗺️",
  vocabulary: [
    // Level A1
    {
      id: "pd-1",
      word: "Street",
      phonetic: "/striːt/",
      meaning: "Đường phố",
      example: "They live on a quiet street near the park.",
      exampleMeaning: "Họ sống trên một con phố yên tĩnh gần công viên.",
      level: "A1",
      type: "noun"
    },
    {
      id: "pd-2",
      word: "City",
      phonetic: "/ˈsɪti/",
      meaning: "Thành phố",
      example: "Tokyo is a very big and busy city.",
      exampleMeaning: "Tokyo là một thành phố rất lớn và bận rộn.",
      level: "A1",
      type: "noun"
    },
    {
      id: "pd-3",
      word: "Park",
      phonetic: "/pɑːk/",
      meaning: "Công viên",
      example: "Children are playing football in the park.",
      exampleMeaning: "Bọn trẻ đang đá bóng trong công viên.",
      level: "A1",
      type: "noun"
    },
    {
      id: "pd-4",
      word: "Bank",
      phonetic: "/bæŋk/",
      meaning: "Ngân hàng",
      example: "I need to go to the bank to withdraw some money.",
      exampleMeaning: "Tôi cần phải ra ngân hàng để rút một ít tiền.",
      level: "A1",
      type: "noun"
    },
    {
      id: "pd-5",
      word: "Left",
      phonetic: "/left/",
      meaning: "Bên trái",
      example: "Turn left at the traffic lights.",
      exampleMeaning: "Rẽ trái tại đèn giao thông.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "pd-6",
      word: "Right",
      phonetic: "/raɪt/",
      meaning: "Bên phải",
      example: "The post office is on your right.",
      exampleMeaning: "Bưu điện nằm ở bên phải của bạn.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "pd-7",
      word: "Near",
      phonetic: "/nɪə(r)/",
      meaning: "Gần",
      example: "Is there a supermarket near here?",
      exampleMeaning: "Có siêu thị nào gần đây không?",
      level: "A1",
      type: "preposition"
    },
    {
      id: "pd-8",
      word: "Far",
      phonetic: "/fɑː(r)/",
      meaning: "Xa",
      example: "My house is not far from my school.",
      exampleMeaning: "Nhà tôi không ở xa trường học của tôi.",
      level: "A1",
      type: "adjective"
    },

    // Level A2
    {
      id: "pd-9",
      word: "Museum",
      phonetic: "/mjuˈziːəm/",
      meaning: "Viện bảo tàng",
      example: "We visited the national history museum yesterday.",
      exampleMeaning: "Chúng tôi đã đi thăm viện bảo tàng lịch sử quốc gia vào ngày hôm qua.",
      level: "A2",
      type: "noun"
    },
    {
      id: "pd-10",
      word: "Pharmacy",
      phonetic: "/ˈfɑːməsi/",
      meaning: "Nhà thuốc, hiệu thuốc",
      example: "You can buy medicine at the pharmacy across the street.",
      exampleMeaning: "Bạn có thể mua thuốc ở hiệu thuốc bên kia đường.",
      level: "A2",
      type: "noun"
    },
    {
      id: "pd-11",
      word: "Square",
      phonetic: "/skweə(r)/",
      meaning: "Quảng trường",
      example: "People gathered in the town square to celebrate the festival.",
      exampleMeaning: "Mọi người tập trung tại quảng trường thị trấn để ăn mừng lễ hội.",
      level: "A2",
      type: "noun"
    },
    {
      id: "pd-12",
      word: "Straight",
      phonetic: "/streɪt/",
      meaning: "Thẳng",
      example: "Go straight ahead for two blocks and you will see it.",
      exampleMeaning: "Đi thẳng phía trước hai dãy nhà và bạn sẽ nhìn thấy nó.",
      level: "A2",
      type: "greeting"
    },
    {
      id: "pd-13",
      word: "Corner",
      phonetic: "/ˈkɔːnə(r)/",
      meaning: "Góc phố, góc đường",
      example: "The coffee shop is on the corner of the street.",
      exampleMeaning: "Quán cà phê nằm ở góc phố.",
      level: "A2",
      type: "noun"
    },
    {
      id: "pd-14",
      word: "Bridge",
      phonetic: "/brɪdʒ/",
      meaning: "Cây cầu",
      example: "We walked across the old bridge over the river.",
      exampleMeaning: "Chúng tôi đã đi bộ qua cây cầu cổ bắc qua sông.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "pd-15",
      word: "Intersection",
      phonetic: "/ˌɪntəˈsekʃn/",
      meaning: "Giao lộ, ngã tư",
      example: "Wait for the green light before crossing the busy intersection.",
      exampleMeaning: "Hãy đợi đèn xanh trước khi băng qua ngã tư đông đúc.",
      level: "B1",
      type: "noun"
    },
    {
      id: "pd-16",
      word: "Suburbs",
      phonetic: "/ˈsʌbɜːbz/",
      meaning: "Vùng ngoại ô",
      example: "They prefer living in the suburbs because it is quieter.",
      exampleMeaning: "Họ thích sống ở vùng ngoại ô hơn vì nơi đó yên tĩnh hơn.",
      level: "B1",
      type: "noun"
    },
    {
      id: "pd-17",
      word: "Roundabout",
      phonetic: "/ˈraʊndəbaʊt/",
      meaning: "Vòng xuyến, bùng binh",
      example: "Take the second exit at the roundabout.",
      exampleMeaning: "Đi theo lối ra thứ hai tại vòng xuyến.",
      level: "B1",
      type: "noun"
    },
    {
      id: "pd-18",
      word: "Landmark",
      phonetic: "/ˈlændmɑːk/",
      meaning: "Địa điểm nổi bật, cột mốc",
      example: "The big clock tower is a famous landmark in this city.",
      exampleMeaning: "Tháp đồng hồ lớn là một cột mốc nổi tiếng trong thành phố này.",
      level: "B1",
      type: "noun"
    },
    {
      id: "pd-19",
      word: "Pedestrian",
      phonetic: "/pəˈdestriən/",
      meaning: "Người đi bộ",
      example: "Drivers must always yield to pedestrians at the crossing.",
      exampleMeaning: "Người lái xe phải luôn nhường đường cho người đi bộ ở vạch sang đường.",
      level: "B1",
      type: "noun"
    }
  ],
};