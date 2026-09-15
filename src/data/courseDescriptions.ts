export interface CourseLevelInfo {
  levelTitle: string; // Ví dụ: "B1 - Trung cấp (Intermediate)"
  topics: string[];   // Danh sách các điểm chính
  sampleText: string; // Text mẫu mô tả
}

export const courseLevelDescriptions: Record<string, CourseLevelInfo> = {
  A1: {
    levelTitle: "A1 – Cơ bản (Beginner)",
    topics: [
      "Ngữ pháp & Từ vựng cơ bản (To be, Hiện tại đơn)",
      "Chủ đề Bản thân, Gia đình, Số đếm",
      "Chào hỏi & Giới thiệu bản thân",
      "Mạo từ (a/an/the) & Danh từ số nhiều",
      "Tính từ sở hữu & Đại từ chỉ định (this/that)",
      "Giới từ chỉ vị trí cơ bản (in/on/under)",
      "Cấu trúc There is/There are",
    ],
    sampleText: "Học lại từ nền tảng — nắm chắc ngữ pháp cơ bản, tự tin chào hỏi và giới thiệu bản thân trong giao tiếp hàng ngày.",
  },
  A2: {
    levelTitle: "A2 - Sơ cấp (Elementary)",
    topics: [
      "Thì hiện tại đơn và hiện tại tiếp diễn nâng cao",
      "Thì quá khứ đơn và cách dùng từ chỉ thời gian",
      "So sánh hơn và so sánh nhất",
      "Giới từ chỉ thời gian và địa điểm cơ bản",
      "Câu hỏi WH-questions trong giao tiếp hàng ngày",
      "Động từ khuyết thiếu cơ bản (can, must, should)",
    ],
    sampleText: "Xây dựng nền tảng từ vựng và ngữ pháp vững chắc — tự tin giao tiếp trong các tình huống quen thuộc hằng ngày.",
  },
  B1: {
    levelTitle: "B1 - Trung cấp (Intermediate)",
    topics: [
      "Thì hiện tại hoàn thành (đầy đủ, phân biệt với quá khứ đơn)",
      "Thì quá khứ tiếp diễn",
      "Câu điều kiện loại 1 và 2",
      "Câu bị động (passive voice) cơ bản",
      "Mệnh đề quan hệ (relative clauses: who, which, that)",
      "Câu tường thuật (reported speech) cơ bản",
      "Liên từ nâng cao: although, however, in spite of",
      "Modal verbs nâng cao (might, could, should have...)",
    ],
    sampleText: "Diễn đạt ý kiến, giả định, kể chuyện phức tạp hơn — sẵn sàng cho giao tiếp công việc và học thuật cơ bản.",
  },
};