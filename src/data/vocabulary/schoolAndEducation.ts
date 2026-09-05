import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const schoolAndEducation: VocabTopic = {
  id: "school-and-education",
  number: "7",
  title: "Trường học & Lớp học \n (School & Education)",
  emoji: "🏫",
  vocabulary: [
    // Level A1
    {
      id: "se-1",
      word: "School",
      phonetic: "/skuːl/",
      meaning: "Trường học",
      example: "Children go to school from Monday to Friday.",
      exampleMeaning: "Trẻ em đi học từ thứ Hai đến thứ Sáu.",
      level: "A1",
      type: "noun"
    },
    {
      id: "se-2",
      word: "Teacher",
      phonetic: "/ˈtiːtʃə(r)/",
      meaning: "Giáo viên",
      example: "Our English teacher is very kind and helpful.",
      exampleMeaning: "Giáo viên tiếng Anh của chúng tôi rất tốt bụng và hay giúp đỡ.",
      level: "A1",
      type: "noun"
    },
    {
      id: "se-3",
      word: "Student",
      phonetic: "/ˈstjuːdnt/",
      meaning: "Học sinh, sinh viên",
      example: "There are thirty students in my classroom.",
      exampleMeaning: "Có ba mươi học sinh trong phòng học của tôi.",
      level: "A1",
      type: "noun"
    },
    {
      id: "se-4",
      word: "Book",
      phonetic: "/bʊk/",
      meaning: "Quyển sách",
      example: "Open your book at page ten, please.",
      exampleMeaning: "Làm ơn mở sách ra trang số mười.",
      level: "A1",
      type: "noun"
    },
    {
      id: "se-5",
      word: "Pen",
      phonetic: "/pen/",
      meaning: "Cái bút mực",
      example: "Can I borrow your blue pen for a moment?",
      exampleMeaning: "Tôi có thể mượn cây bút mực xanh của bạn một lát được không?",
      level: "A1",
      type: "noun"
    },
    {
      id: "se-6",
      word: "Classroom",
      phonetic: "/ˈklɑːsruːm/",
      meaning: "Phòng học",
      example: "The students are cleaning their classroom.",
      exampleMeaning: "Các học sinh đang dọn dẹp phòng học của họ.",
      level: "A1",
      type: "noun"
    },
    {
      id: "se-7",
      word: "Read",
      phonetic: "/riːd/",
      meaning: "Đọc",
      example: "I like to read adventure books in my free time.",
      exampleMeaning: "Tôi thích đọc sách phiêu lưu vào thời gian rảnh.",
      level: "A1",
      type: "verb"
    },
    {
      id: "se-8",
      word: "Write",
      phonetic: "/raɪt/",
      meaning: "Viết",
      example: "Please write your name at the top of the paper.",
      exampleMeaning: "Vui lòng viết tên của bạn lên đầu tờ giấy.",
      level: "A1",
      type: "verb"
    },

    // Level A2
    {
      id: "se-9",
      word: "Homework",
      phonetic: "/ˈhəʊmwɜːk/",
      meaning: "Bài tập về nhà",
      example: "I always finish my homework before watching TV.",
      exampleMeaning: "Tôi luôn hoàn thành bài tập về nhà trước khi xem tivi.",
      level: "A2",
      type: "noun"
    },
    {
      id: "se-10",
      word: "Subject",
      phonetic: "/ˈsʌbdʒɪkt/",
      meaning: "Môn học",
      example: "Mathematics is my favorite school subject.",
      exampleMeaning: "Toán học là môn học yêu thích của tôi ở trường.",
      level: "A2",
      type: "noun"
    },
    {
      id: "se-11",
      word: "Library",
      phonetic: "/ˈlaɪbrəri/",
      meaning: "Thư viện",
      example: "She is studying quietly in the school library.",
      exampleMeaning: "Cô ấy đang học tập yên lặng trong thư viện trường.",
      level: "A2",
      type: "noun"
    },
    {
      id: "se-12",
      word: "Exam",
      phonetic: "/ɪɡˈzæm/",
      meaning: "Kỳ thi, bài kiểm tra",
      example: "Students are preparing hard for the final exam.",
      exampleMeaning: "Các học sinh đang chuẩn bị rất chăm chỉ cho kỳ thi cuối kỳ.",
      level: "A2",
      type: "noun"
    },
    {
      id: "se-13",
      word: "Dictionary",
      phonetic: "/ˈdɪkʃənəri/",
      meaning: "Từ điển",
      example: "Look up the new word in the dictionary.",
      exampleMeaning: "Hãy tra từ mới trong từ điển.",
      level: "A2",
      type: "noun"
    },
    {
      id: "se-14",
      word: "Uniform",
      phonetic: "/ˈjuːnifɔːm/",
      meaning: "Đồng phục",
      example: "All students must wear school uniforms.",
      exampleMeaning: "Tất cả học sinh phải mặc đồng phục trường.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "se-15",
      word: "Assignment",
      phonetic: "/əˈsaɪnmənt/",
      meaning: "Bài tập lớn, nhiệm vụ được giao",
      example: "We need to hand in our science assignment by Friday.",
      exampleMeaning: "Chúng ta cần nộp bài tập khoa học trước thứ Sáu.",
      level: "B1",
      type: "noun"
    },
    {
      id: "se-16",
      word: "Scholarship",
      phonetic: "/ˈskɒləʃɪp/",
      meaning: "Học bổng",
      example: "She won a full scholarship to study abroad.",
      exampleMeaning: "Cô ấy đã giành được học bổng toàn phần để đi du học.",
      level: "B1",
      type: "noun"
    },
    {
      id: "se-17",
      word: "Graduate",
      phonetic: "/ˈɡrædʒueɪt/",
      meaning: "Tốt nghiệp",
      example: "He plans to graduate from university next year.",
      exampleMeaning: "Anh ấy dự định tốt nghiệp đại học vào năm tới.",
      level: "B1",
      type: "verb"
    },
    {
      id: "se-18",
      word: "Curriculum",
      phonetic: "/kəˈrɪkjələm/",
      meaning: "Chương trình giảng dạy",
      example: "The school is updating its curriculum to include computer coding.",
      exampleMeaning: "Nhà trường đang cập nhật chương trình giảng dạy để bao gồm lập trình máy tính.",
      level: "B1",
      type: "noun"
    },
    {
      id: "se-19",
      word: "Attendance",
      phonetic: "/əˈtendəns/",
      meaning: "Sự có mặt, điểm danh",
      example: "The teacher takes attendance at the beginning of every class.",
      exampleMeaning: "Giáo viên điểm danh vào đầu mỗi buổi học.",
      level: "B1",
      type: "noun"
    }
  ],
};