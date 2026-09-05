import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const numbersDatesTime: VocabTopic = {
  id: "numbers-dates-time",
  number: "3",
  title: "Số đếm, Ngày tháng \n(Numbers, Dates & Time)",
  emoji: "1️⃣",
  vocabulary: [
    // Level A1
    {
      id: "ndt-1",
      word: "One",
      phonetic: "/wʌn/",
      meaning: "Số một",
      example: "I have one brother.",
      exampleMeaning: "Tôi có một người anh/em trai.",
      level: "A1",
      type: "greeting"
    },
    {
      id: "ndt-2",
      word: "Today",
      phonetic: "/təˈdeɪ/",
      meaning: "Hôm nay",
      example: "Today is Monday.",
      exampleMeaning: "Hôm nay là thứ Hai.",
      level: "A1",
      type: "noun"
    },
    {
      id: "ndt-3",
      word: "Monday",
      phonetic: "/ˈmʌndeɪ/",
      meaning: "Thứ Hai",
      example: "We start work on Monday.",
      exampleMeaning: "Chúng tôi bắt đầu làm việc vào thứ Hai.",
      level: "A1",
      type: "noun"
    },
    {
      id: "ndt-4",
      word: "January",
      phonetic: "/ˈdʒænjuəri/",
      meaning: "Tháng Một",
      example: "My birthday is in January.",
      exampleMeaning: "Sinh nhật của tôi vào tháng Một.",
      level: "A1",
      type: "noun"
    },
    {
      id: "ndt-5",
      word: "Time",
      phonetic: "/taɪm/",
      meaning: "Thời gian, giờ",
      example: "What time is it now?",
      exampleMeaning: "Bây giờ là mấy giờ?",
      level: "A1",
      type: "noun"
    },
    {
      id: "ndt-6",
      word: "Year",
      phonetic: "/jɪə(r)/",
      meaning: "Năm",
      example: "There are 365 days in a year.",
      exampleMeaning: "Có 365 ngày trong một năm.",
      level: "A1",
      type: "noun"
    },
    {
      id: "ndt-7",
      word: "Ten",
      phonetic: "/ten/",
      meaning: "Số mười",
      example: "Count from one to ten.",
      exampleMeaning: "Đếm từ một đến mười.",
      level: "A1",
      type: "greeting"
    },
    {
      id: "ndt-8",
      word: "Week",
      phonetic: "/wiːk/",
      meaning: "Tuần",
      example: "There are seven days in a week.",
      exampleMeaning: "Có bảy ngày trong một tuần.",
      level: "A1",
      type: "noun"
    },

    // Level A2
    {
      id: "ndt-9",
      word: "Hundred",
      phonetic: "/ˈhʌndrəd/",
      meaning: "Số một trăm",
      example: "The book costs one hundred dollars.",
      exampleMeaning: "Cuốn sách có giá một trăm đô la.",
      level: "A2",
      type: "greeting"
    },
    {
      id: "ndt-10",
      word: "Birthday",
      phonetic: "/ˈbɜːθdeɪ/",
      meaning: "Ngày sinh nhật",
      example: "When is your birthday?",
      exampleMeaning: "Sinh nhật của bạn vào ngày nào?",
      level: "A2",
      type: "noun"
    },
    {
      id: "ndt-11",
      word: "Weekend",
      phonetic: "/ˈwiːkend/",
      meaning: "Cuối tuần",
      example: "What are you doing this weekend?",
      exampleMeaning: "Bạn dự định làm gì vào cuối tuần này?",
      level: "A2",
      type: "noun"
    },
    {
      id: "ndt-12",
      word: "Schedule",
      phonetic: "/ˈskedʒuːl/",
      meaning: "Lịch trình, thời gian biểu",
      example: "My schedule is very busy tomorrow.",
      exampleMeaning: "Lịch trình của tôi ngày mai rất bận.",
      level: "A2",
      type: "noun"
    },
    {
      id: "ndt-13",
      word: "Century",
      phonetic: "/ˈsentʃəri/",
      meaning: "Thế kỷ",
      example: "We are living in the 21st century.",
      exampleMeaning: "Chúng ta đang sống ở thế kỷ 21.",
      level: "A2",
      type: "noun"
    },
    {
      id: "ndt-14",
      word: "Quarter",
      phonetic: "/ˈkwɔːtə(r)/",
      meaning: "Một phần tư (15 phút / quý)",
      example: "It is a quarter past three.",
      exampleMeaning: "Bây giờ là 3 giờ hơn 15 phút.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "ndt-15",
      word: "Decade",
      phonetic: "/ˈdekeɪd/",
      meaning: "Thập kỷ (10 năm)",
      example: "Technology has changed a lot in the last decade.",
      exampleMeaning: "Công nghệ đã thay đổi rất nhiều trong thập kỷ qua.",
      level: "B1",
      type: "noun"
    },
    {
      id: "ndt-16",
      word: "Deadline",
      phonetic: "/ˈdedlaɪn/",
      meaning: "Hạn chót",
      example: "We must finish the report before the deadline.",
      exampleMeaning: "Chúng ta phải hoàn thành báo cáo trước hạn chót.",
      level: "B1",
      type: "noun"
    },
    {
      id: "ndt-17",
      word: "Millennium",
      phonetic: "/mɪˈleniəm/",
      meaning: "Thiên niên kỷ (1000 năm)",
      example: "The year 2000 marked the start of a new millennium.",
      exampleMeaning: "Năm 2000 đánh dấu sự khởi đầu của một thiên niên kỷ mới.",
      level: "B1",
      type: "noun"
    },
    {
      id: "ndt-18",
      word: "Simultaneous",
      phonetic: "/ˌsɪmlˈteɪniəs/",
      meaning: "Đồng thời, xảy ra cùng lúc",
      example: "The two events happened at simultaneous times.",
      exampleMeaning: "Hai sự kiện diễn ra vào những thời điểm đồng thời.",
      level: "B1",
      type: "adjective"
    },
    {
      id: "ndt-19",
      word: "Anniversary",
      phonetic: "/ˌænɪˈvɜːsəri/",
      meaning: "Ngày kỷ niệm (hàng năm)",
      example: "They are celebrating their wedding anniversary today.",
      exampleMeaning: "Hôm nay họ đang kỷ niệm ngày cưới của mình.",
      level: "B1",
      type: "noun"
    }
  ],
};