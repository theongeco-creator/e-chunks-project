import type { VocabTopic } from "../types";

export const Services: VocabTopic = {
  id: "Services",
  number: "1",
  title: "Dịch vụ \n (Services)",
  icon: "/icons/health.svg",
  vocabulary: [
    { id: "sc-1", word: "bank", phonetic: "/bæŋk/", meaning: "Ngân hàng", example: "I need to go to the bank to deposit my paycheck.", exampleMeaning: "Tôi cần đến ngân hàng để gửi tiền lương của mình.", level: "B1", type: "noun" },
{ id: "sc-2", word: "café", phonetic: "/kæˈfeɪ/", meaning: "Quán cà phê", example: "Let's grab a cup of coffee at the corner café.", exampleMeaning: "Hãy ghé uống một tách cà phê ở quán góc phố nhé.", level: "B1", type: "noun" },
{ id: "sc-3", word: "cafeteria", phonetic: "/ˌkæfəˈtɪriə/", meaning: "Quán ăn tự phục vụ", example: "We had a quick lunch at the office cafeteria.", exampleMeaning: "Chúng tôi đã ăn trưa nhanh tại nhà ăn tự phục vụ của văn phòng.", level: "B1", type: "noun" },
{ id: "sc-4", word: "cinema", phonetic: "/ˈsɪnəmə/", meaning: "Rạp chiếu phim", example: "They are going to the cinema to watch the new movie.", exampleMeaning: "Họ đang đi ra rạp chiếu phim để xem bộ phim mới.", level: "B1", type: "noun" },
{ id: "sc-5", word: "dentist", phonetic: "/ˈdentɪst/", meaning: "Nha sĩ, phòng khám nha khoa", example: "She has an appointment with the dentist at 3 PM.", exampleMeaning: "Cô ấy có lịch hẹn với nha sĩ vào lúc 3 giờ chiều.", level: "B1", type: "noun" },
{ id: "sc-6", word: "doctor", phonetic: "/ˈdɑːktər/", meaning: "Bác sĩ, phòng khám bác sĩ", example: "You should see a doctor about that cough.", exampleMeaning: "Bạn nên đi khám bác sĩ về cơn ho đó.", level: "B1", type: "noun" },
{ id: "sc-7", word: "gallery", phonetic: "/ˈɡæləri/", meaning: "Phòng tranh, phòng trưng bày nghệ thuật", example: "The art gallery exhibits works by local painters.", exampleMeaning: "Phòng trưng bày nghệ thuật trưng bày các tác phẩm của các họa sĩ địa phương.", level: "B1", type: "noun" },
{ id: "sc-8", word: "garage", phonetic: "/ɡəˈrɑːʒ/", meaning: "Garage, tiệm sửa xe", example: "I left my car at the garage for a service check.", exampleMeaning: "Tôi đã để xe ô tô của mình ở tiệm sửa xe để bảo dưỡng.", level: "B1", type: "noun" },
{ id: "sc-9", word: "hairdresser", phonetic: "/ˈherˌdresər/", meaning: "Thợ làm tóc, tiệm làm tóc", example: "She booked an appointment with her hairdresser for a haircut.", exampleMeaning: "Cô ấy đã đặt lịch với thợ làm tóc để cắt tóc.", level: "B1", type: "noun" },
{ id: "sc-10", word: "hotel", phonetic: "/hoʊˈtel/", meaning: "Khách sạn", example: "We booked a double room at the seaside hotel.", exampleMeaning: "Chúng tôi đã đặt một phòng đôi tại khách sạn ven biển.", level: "B1", type: "noun" },
{ id: "sc-11", word: "library", phonetic: "/ˈlaɪbreri/", meaning: "Thư viện", example: "Students can borrow books from the city library.", exampleMeaning: "Học sinh có thể mượn sách từ thư viện thành phố.", level: "B1", type: "noun" },
{ id: "sc-12", word: "museum", phonetic: "/mjuˈziːəm/", meaning: "Bảo tàng", example: "The museum offers guided tours on weekends.", exampleMeaning: "Bảo tàng cung cấp các tour tham quan có hướng dẫn viên vào cuối tuần.", level: "B1", type: "noun" },
{ id: "sc-13", word: "post office", phonetic: "/ˈpoʊst ɔːfɪs/", meaning: "Bưu điện", example: "I need to go to the post office to mail this parcel.", exampleMeaning: "Tôi cần đến bưu điện để gửi bưu kiện này.", level: "B1", type: "noun" },
{ id: "sc-14", word: "restaurant", phonetic: "/ˈrestərɑːnt/", meaning: "Nhà hàng", example: "They celebrated their anniversary at an Italian restaurant.", exampleMeaning: "Họ kỷ niệm ngày cưới tại một nhà hàng kiểu Ý.", level: "B1", type: "noun" },
{ id: "sc-15", word: "sports centre", phonetic: "/spɔːrts ˈsentər/", meaning: "Trung tâm thể thao", example: "He plays badminton at the community sports centre.", exampleMeaning: "Anh ấy chơi cầu lông tại trung tâm thể thao cộng đồng.", level: "B1", type: "noun" },
{ id: "sc-16", word: "swimming pool", phonetic: "/ˈswɪmɪŋ puːl/", meaning: "Hồ bơi", example: "The public swimming pool is open during the summer.", exampleMeaning: "Hồ bơi công cộng mở cửa vào mùa hè.", level: "B1", type: "noun" },
{ id: "sc-17", word: "theatre", phonetic: "/ˈθiːətər/", meaning: "Nhà hát", example: "We bought tickets for a musical at the local theatre.", exampleMeaning: "Chúng tôi đã mua vé xem nhạc kịch tại nhà hát địa phương.", level: "B1", type: "noun" },
{ id: "sc-18", word: "tourist information centre", phonetic: "/ˈtʊrɪst ˌɪnfərˈmeɪʃn ˈsentər/", meaning: "Trung tâm thông tin du lịch", example: "You can pick up free city maps at the tourist information centre.", exampleMeaning: "Bạn có thể lấy bản đồ thành phố miễn phí tại trung tâm thông tin du lịch.", level: "B1", type: "noun" }

    ]
 };