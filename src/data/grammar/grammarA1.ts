import { GrammarSentenceItem } from "@/types/grammar";

export const GRAMMAR_A1_DATA: GrammarSentenceItem[] = [
  {
    id: "a1-01",
    level: "A1",
    fullSentenceEn: "I like reading books in my free time.",
    fullSentenceVi: "Tôi thích đọc sách vào thời gian rảnh.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì hiện tại đơn diễn tả sở thích cá nhân." },
      { label: "I + like", content: "Chủ ngữ 'I' đi với động từ nguyên mẫu 'like'." },
      { label: "reading books", content: "Danh động từ (V-ing) làm tân ngữ chỉ hoạt động yêu thích." },
      { label: "in my free time", content: "Giới từ 'in' + tính từ sở hữu 'my' + danh từ 'free time'." }
    ],
    chunks: [
      {
        id: "c1",
        chunkEn: "I",
        chunkVi: "Tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "He", vi: "Anh ấy" },
          { en: "She", vi: "Cô ấy" },
          { en: "They", vi: "Họ" },
          { en: "We", vi: "Chúng tôi" }
        ]
      },
      {
        id: "c2",
        chunkEn: "like",
        chunkVi: "thích",
        grammarRole: "Verb (Predicate)",
        roleLabelVi: "Động từ vị ngữ",
        colorType: "verb",
        alternatives: [
          { en: "love", vi: "yêu thích" },
          { en: "enjoy", vi: "tận hưởng" },
          { en: "hate", vi: "ghét" },
          { en: "prefer", vi: "thích hơn" }
        ]
      },
      {
        id: "c3",
        chunkEn: "reading books",
        chunkVi: "đọc sách",
        grammarRole: "Object (Direct Object)",
        roleLabelVi: "Tân ngữ trực tiếp",
        colorType: "object",
        alternatives: [
          { en: "listening to music", vi: "nghe nhạc" },
          { en: "playing sports", vi: "chơi thể thao" },
          { en: "learning English", vi: "học tiếng Anh" },
          { en: "cooking meals", vi: "nấu ăn" }
        ]
      },
      {
        id: "c4",
        chunkEn: "in my free time",
        chunkVi: "vào thời gian rảnh",
        grammarRole: "Adverbial (Time)",
        roleLabelVi: "Trạng ngữ chỉ thời gian",
        colorType: "time",
        alternatives: [
          { en: "at the weekend", vi: "vào cuối tuần" },
          { en: "in the evening", vi: "vào buổi tối" },
          { en: "every day", vi: "mỗi ngày" }
        ]
      }
    ]
  },
  {
    id: "a1-02",
    level: "A1",
    fullSentenceEn: "She goes to school by bus every morning.",
    fullSentenceVi: "Cô ấy đến trường bằng xe buýt vào mỗi buổi sáng.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì hiện tại đơn diễn tả thói quen lặp lại." },
      { label: "She + goes", content: "Động từ 'go' thêm '-es' thành 'goes' khi đi với chủ ngữ ngôi thứ 3 số ít." },
      { label: "to school", content: "Giới từ chỉ hướng 'to' + danh từ địa điểm 'school'." },
      { label: "by bus", content: "Giới từ chỉ phương tiện 'by' + danh từ 'bus'." },
      { label: "every morning", content: "Trạng từ chỉ thời gian lặp lại." }
    ],
    chunks: [
      {
        id: "c2-1",
        chunkEn: "She",
        chunkVi: "Cô ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "He", vi: "Cậu ấy" },
          { en: "My brother", vi: "Anh trai tôi" },
          { en: "Anna", vi: "Anna" }
        ]
      },
      {
        id: "c2-2",
        chunkEn: "goes",
        chunkVi: "đi",
        grammarRole: "Verb (Present Simple)",
        roleLabelVi: "Động từ (Hiện tại đơn)",
        colorType: "verb",
        alternatives: [
          { en: "walks", vi: "đi bộ" },
          { en: "cycles", vi: "đạp xe" },
          { en: "drives", vi: "lái xe" }
        ]
      },
      {
        id: "c2-3",
        chunkEn: "to school",
        chunkVi: "đến trường",
        grammarRole: "Adverbial (Place)",
        roleLabelVi: "Trạng ngữ chỉ nơi chốn",
        colorType: "place",
        alternatives: [
          { en: "to work", vi: "đến chỗ làm" },
          { en: "to the supermarket", vi: "đến siêu thị" },
          { en: "to the park", vi: "đến công viên" }
        ]
      },
      {
        id: "c2-4",
        chunkEn: "by bus",
        chunkVi: "bằng xe buýt",
        grammarRole: "Adverbial (Means/Method)",
        roleLabelVi: "Trạng ngữ chỉ phương tiện",
        colorType: "method",
        alternatives: [
          { en: "on foot", vi: "đi bộ" },
          { en: "by train", vi: "bằng tàu hỏa" },
          { en: "by car", vi: "bằng xe hơi" }
        ]
      },
      {
        id: "c2-5",
        chunkEn: "every morning",
        chunkVi: "mỗi buổi sáng",
        grammarRole: "Adverbial (Time)",
        roleLabelVi: "Trạng ngữ chỉ thời gian",
        colorType: "time",
        alternatives: [
          { en: "every day", vi: "mỗi ngày" },
          { en: "on Mondays", vi: "vào các ngày thứ Hai" }
        ]
      }
    ]
  },
  {
    id: "a1-03",
    level: "A1",
    fullSentenceEn: "He has a new car in his garage.",
    fullSentenceVi: "Anh ấy có một chiếc xe hơi mới trong gara.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì hiện tại đơn diễn tả sự sở hữu." },
      { label: "He + has", content: "Động từ 'have' đổi thành 'has' khi đi với chủ ngữ ngôi thứ 3 số ít (He)." },
      { label: "a new car", content: "Mạo từ 'a' + tính từ 'new' + danh từ 'car'." },
      { label: "in his garage", content: "Giới từ 'in' + tính từ sở hữu 'his' + danh từ 'garage'." }
    ],
    chunks: [
      {
        id: "c3-1",
        chunkEn: "He",
        chunkVi: "Anh ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "My father", vi: "Bố tôi" },
          { en: "Tom", vi: "Tom" }
        ]
      },
      {
        id: "c3-2",
        chunkEn: "has",
        chunkVi: "có",
        grammarRole: "Verb (Have/Has)",
        roleLabelVi: "Động từ sở hữu",
        colorType: "verb",
        alternatives: [
          { en: "wants", vi: "muốn" },
          { en: "buys", vi: "mua" }
        ]
      },
      {
        id: "c3-3",
        chunkEn: "a new car",
        chunkVi: "một chiếc xe hơi mới",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        explanation: "Dùng mạo từ 'a' vì chưa xác định rõ đối tượng", // <--- Điền nội dung vào đây
        colorType: "object",
        alternatives: [
          { en: "a big house", vi: "một căn nhà lớn" },
          { en: "a fast computer", vi: "một chiếc máy tính nhanh" }
        ]
      },
      {
        id: "c3-4",
        chunkEn: "in his garage",
        chunkVi: "trong gara của anh ấy",
        grammarRole: "Adverbial (Place)",
        roleLabelVi: "Trạng ngữ chỉ nơi chốn",
        colorType: "place",
        explanation: "Giới từ in + tính từ sở hữu ", // <--- Điền nội dung vào đây
        alternatives: [
          { en: "in front of the house", vi: "trước nhà" },
          { en: "at the parking lot", vi: "ở bãi đỗ xe" }
        ]
      }
    ]
  },
  {
    id: "a1-04",
    level: "A1",
    fullSentenceEn: "They can speak English very fluently.",
    fullSentenceVi: "Họ có thể nói tiếng Anh rất lưu loát.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Diễn tả khả năng với động từ khiếm khuyết." },
      { label: "They + can speak", content: "Động từ khiếm khuyết 'can' + động từ nguyên mẫu không 'to' ('speak')." },
      { label: "English", content: "Danh từ chỉ ngôn ngữ làm tân ngữ." },
      { label: "very fluently", content: "Trạng từ chỉ mức độ 'very' + trạng từ chỉ cách thức 'fluently'." }
    ],
    chunks: [
      {
        id: "c4-1",
        chunkEn: "They",
        chunkVi: "Họ",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "We", vi: "Chúng tôi" },
          { en: "My friends", vi: "Những người bạn của tôi" }
        ]
      },
      {
        id: "c4-2",
        chunkEn: "can speak",
        chunkVi: "có thể nói",
        grammarRole: "Modal Verb + Verb",
        roleLabelVi: "Động từ khiếm khuyết",
        colorType: "verb",
        alternatives: [
          { en: "can write", vi: "có thể viết" },
          { en: "can read", vi: "có thể đọc" }
        ]
      },
      {
        id: "c4-3",
        chunkEn: "English",
        chunkVi: "tiếng Anh",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        colorType: "object",
        alternatives: [
          { en: "Japanese", vi: "tiếng Nhật" },
          { en: "French", vi: "tiếng Pháp" }
        ]
      },
      {
        id: "c4-4",
        chunkEn: "very fluently",
        chunkVi: "rất lưu loát",
        grammarRole: "Adverbial (Method)",
        roleLabelVi: "Trạng ngữ chỉ cách thức",
        colorType: "method",
        alternatives: [
          { en: "quite well", vi: "khá tốt" },
          { en: "a little bit", vi: "một chút" }
        ]
      }
    ]
  },
  {
    id: "a1-05",
    level: "A1",
    fullSentenceEn: "There is a beautiful flower in the garden.",
    fullSentenceVi: "Có một bông hoa đẹp trong khu vườn.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc chỉ sự tồn tại (There is/are)." },
      { label: "There is", content: "Dùng 'is' vì danh từ theo sau là danh từ số ít ('flower')." },
      { label: "a beautiful flower", content: "Mạo từ 'a' + tính từ 'beautiful' + danh từ 'flower'." },
      { label: "in the garden", content: "Giới từ 'in' + mạo từ xác định 'the' + danh từ 'garden'." }
    ],
    chunks: [
      {
        id: "c5-1",
        chunkEn: "There is",
        chunkVi: "Có",
        grammarRole: "Existential",
        roleLabelVi: "Cấu trúc tồn tại",
        colorType: "default",
        alternatives: [
          { en: "There are", vi: "Có (số nhiều)" }
        ]
      },
      {
        id: "c5-2",
        chunkEn: "a beautiful flower",
        chunkVi: "một bông hoa đẹp",
        grammarRole: "Subject / Object",
        roleLabelVi: "Danh từ chỉ vật",
        colorType: "object",
        alternatives: [
          { en: "a tall tree", vi: "một cái cây cao" },
          { en: "a cute cat", vi: "một con mèo dễ thương" }
        ]
      },
      {
        id: "c5-3",
        chunkEn: "in the garden",
        chunkVi: "trong khu vườn",
        grammarRole: "Adverbial (Place)",
        roleLabelVi: "Trạng ngữ chỉ nơi chốn",
        colorType: "place",
        alternatives: [
          { en: "on the table", vi: "trên bàn" },
          { en: "near the door", vi: "gần cửa" }
        ]
      }
    ]
  },
  {
    id: "a1-06",
    level: "A1",
    fullSentenceEn: "She is cooking dinner in the kitchen now.",
    fullSentenceVi: "Cô ấy đang nấu bữa tối trong bếp bây giờ.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì hiện tại tiếp diễn diễn tả hành động đang xảy ra." },
      { label: "She + is cooking", content: "Động từ 'to be' ('is') + động từ thêm '-ing' ('cooking')." },
      { label: "dinner", content: "Danh từ chỉ bữa ăn làm tân ngữ." },
      { label: "in the kitchen", content: "Giới từ 'in' + mạo từ 'the' + danh từ 'kitchen'." },
      { label: "now", content: "Trạng từ chỉ thời gian tại thời điểm nói." }
    ],
    chunks: [
      {
        id: "c6-1",
        chunkEn: "She",
        chunkVi: "Cô ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "My mother", vi: "Mẹ tôi" },
          { en: "Linda", vi: "Linda" }
        ]
      },
      {
        id: "c6-2",
        chunkEn: "is cooking",
        chunkVi: "đang nấu",
        grammarRole: "Verb (Present Continuous)",
        roleLabelVi: "Động từ (Hiện tại tiếp diễn)",
        colorType: "verb",
        alternatives: [
          { en: "is preparing", vi: "đang chuẩn bị" },
          { en: "is eating", vi: "đang ăn" }
        ]
      },
      {
        id: "c6-3",
        chunkEn: "dinner",
        chunkVi: "bữa tối",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        colorType: "object",
        alternatives: [
          { en: "lunch", vi: "bữa trưa" },
          { en: "breakfast", vi: "bữa sáng" }
        ]
      },
      {
        id: "c6-4",
        chunkEn: "in the kitchen",
        chunkVi: "trong bếp",
        grammarRole: "Adverbial (Place)",
        roleLabelVi: "Trạng ngữ chỉ nơi chốn",
        colorType: "place",
        alternatives: [
          { en: "at home", vi: "ở nhà" },
          { en: "at the restaurant", vi: "tại nhà hàng" }
        ]
      },
      {
        id: "c6-5",
        chunkEn: "now",
        chunkVi: "bây giờ",
        grammarRole: "Adverbial (Time)",
        roleLabelVi: "Trạng ngữ chỉ thời gian",
        colorType: "time",
        alternatives: [
          { en: "at the moment", vi: "lúc này" },
          { en: "right now", vi: "ngay bây giờ" }
        ]
      }
    ]
  },
  {
    id: "a1-07",
    level: "A1",
    fullSentenceEn: "I visited my grandparents last weekend.",
    fullSentenceVi: "Tôi đã thăm ông bà vào cuối tuần trước.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì quá khứ đơn diễn tả hành động đã kết thúc." },
      { label: "I + visited", content: "Động từ có quy tắc 'visit' thêm '-ed' thành 'visited'." },
      { label: "my grandparents", content: "Tính từ sở hữu 'my' + danh từ số nhiều chỉ người." },
      { label: "last weekend", content: "Từ chỉ thời gian trong quá khứ ('last' + danh từ)." }
    ],
    chunks: [
      {
        id: "c7-1",
        chunkEn: "I",
        chunkVi: "Tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "We", vi: "Chúng tôi" },
          { en: "He", vi: "Cậu ấy" }
        ]
      },
      {
        id: "c7-2",
        chunkEn: "visited",
        chunkVi: "đã thăm",
        grammarRole: "Verb (Past Simple)",
        roleLabelVi: "Động từ (Quá khứ đơn)",
        colorType: "verb",
        alternatives: [
          { en: "helped", vi: "đã giúp đỡ" },
          { en: "called", vi: "đã gọi điện" }
        ]
      },
      {
        id: "c7-3",
        chunkEn: "my grandparents",
        chunkVi: "ông bà của tôi",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        colorType: "object",
        alternatives: [
          { en: "my friends", vi: "những người bạn của tôi" },
          { en: "my teacher", vi: "giáo viên của tôi" }
        ]
      },
      {
        id: "c7-4",
        chunkEn: "last weekend",
        chunkVi: "vào cuối tuần trước",
        grammarRole: "Adverbial (Time)",
        roleLabelVi: "Trạng ngữ chỉ thời gian",
        colorType: "time",
        alternatives: [
          { en: "yesterday", vi: "hôm qua" },
          { en: "last night", vi: "tối qua" }
        ]
      }
    ]
  },
  {
    id: "a1-08",
    level: "A1",
    fullSentenceEn: "Open the window for me, please.",
    fullSentenceVi: "Làm ơn mở cửa sổ giùm tôi.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu mệnh lệnh/yêu cầu lịch sự." },
      { label: "Open", content: "Động từ nguyên mẫu đứng đầu câu." },
      { label: "the window", content: "Mạo từ xác định 'the' + danh từ làm tân ngữ." },
      { label: "for me", content: "Giới từ 'for' + đại từ tân ngữ 'me'." },
      { label: "please", content: "Từ đệm thể hiện sự lịch sự ở cuối câu." }
    ],
    chunks: [
      {
        id: "c8-1",
        chunkEn: "Open",
        chunkVi: "Mở",
        grammarRole: "Verb (Imperative)",
        roleLabelVi: "Động từ mệnh lệnh",
        colorType: "verb",
        alternatives: [
          { en: "Close", vi: "Đóng" },
          { en: "Clean", vi: "Lau dọn" }
        ]
      },
      {
        id: "c8-2",
        chunkEn: "the window",
        chunkVi: "cửa sổ",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        colorType: "object",
        explanation: "Dùng 'the' vì đã xác định rõ đối tượng", // <--- Điền nội dung vào đây
        alternatives: [
          { en: "the door", vi: "cửa ra vào" },
          { en: "the book", vi: "quyển sách" }
        ]
      },
      {
        id: "c8-3",
        chunkEn: "for me",
        chunkVi: "giúp tôi",
        grammarRole: "Adverbial",
        roleLabelVi: "Trạng ngữ bổ trợ",
        colorType: "default",
        alternatives: [
          { en: "right now", vi: "ngay lập tức" }
        ]
      },
      {
        id: "c8-4",
        chunkEn: "please",
        chunkVi: "làm ơn",
        grammarRole: "Politeness marker",
        roleLabelVi: "Từ lịch sự",
        colorType: "default",
        alternatives: []
      }
    ]
  },
  {
    id: "a1-09",
    level: "A1",
    fullSentenceEn: "Do you like drinking coffee in the morning?",
    fullSentenceVi: "Bạn có thích uống cà phê vào buổi sáng không?",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu hỏi Yes/No ở thì hiện tại đơn." },
      { label: "Do + you", content: "Trợ động từ 'Do' đảo lên trước chủ ngữ 'you'." },
      { label: "like drinking coffee", content: "Động từ chính 'like' + danh động từ 'drinking coffee'." },
      { label: "in the morning", content: "Cụm giới từ chỉ thời gian buổi sáng." }
    ],
    chunks: [
      {
        id: "c9-1",
        chunkEn: "Do you",
        chunkVi: "Bạn có ... không",
        grammarRole: "Auxiliary + Subject",
        roleLabelVi: "Trợ động từ + Chủ ngữ",
        colorType: "default",
        alternatives: [
          { en: "Does he", vi: "Cậu ấy có ... không" },
          { en: "Do they", vi: "Họ có ... không" }
        ]
      },
      {
        id: "c9-2",
        chunkEn: "like",
        chunkVi: "thích",
        grammarRole: "Verb",
        roleLabelVi: "Động từ chính",
        colorType: "verb",
        alternatives: [
          { en: "want", vi: "muốn" },
          { en: "prefer", vi: "thích hơn" }
        ]
      },
      {
        id: "c9-3",
        chunkEn: "drinking coffee",
        chunkVi: "uống cà phê",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        colorType: "object",
        alternatives: [
          { en: "drinking tea", vi: "uống trà" },
          { en: "eating breakfast", vi: "ăn sáng" }
        ]
      },
      {
        id: "c9-4",
        chunkEn: "in the morning",
        chunkVi: "vào buổi sáng",
        grammarRole: "Adverbial (Time)",
        roleLabelVi: "Trạng ngữ chỉ thời gian",
        colorType: "time",
        alternatives: [
          { en: "at night", vi: "vào ban đêm" },
          { en: "every day", vi: "mỗi ngày" }
        ]
      }
    ]
  },
  {
    id: "a1-10",
    level: "A1",
    fullSentenceEn: "We study English at school every Monday.",
    fullSentenceVi: "Chúng tôi học tiếng Anh ở trường vào mỗi thứ Hai.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì hiện tại đơn diễn tả lịch trình/thói quen." },
      { label: "We + study", content: "Chủ ngữ số nhiều 'We' đi với động từ nguyên mẫu 'study'." },
      { label: "English", content: "Danh từ làm tân ngữ trực tiếp." },
      { label: "at school", content: "Giới từ 'at' + danh từ chỉ địa điểm 'school'." },
      { label: "every Monday", content: "Trạng từ chỉ tần suất/thời gian cố định." }
    ],
    chunks: [
      {
        id: "c10-1",
        chunkEn: "We",
        chunkVi: "Chúng tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "They", vi: "Họ" },
          { en: "The students", vi: "Những học sinh" }
        ]
      },
      {
        id: "c10-2",
        chunkEn: "study",
        chunkVi: "học",
        grammarRole: "Verb",
        roleLabelVi: "Động từ",
        colorType: "verb",
        alternatives: [
          { en: "practice", vi: "luyện tập" },
          { en: "learn", vi: "học hỏi" }
        ]
      },
      {
        id: "c10-3",
        chunkEn: "English",
        chunkVi: "tiếng Anh",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        colorType: "object",
        alternatives: [
          { en: "math", vi: "môn toán" },
          { en: "science", vi: "môn khoa học" }
        ]
      },
      {
        id: "c10-4",
        chunkEn: "at school",
        chunkVi: "ở trường",
        grammarRole: "Adverbial (Place)",
        roleLabelVi: "Trạng ngữ chỉ nơi chốn",
        colorType: "place",
        alternatives: [
          { en: "at the center", vi: "ở trung tâm" },
          { en: "online", vi: "trực tuyến" }
        ]
      },
      {
        id: "c10-5",
        chunkEn: "every Monday",
        chunkVi: "vào mỗi thứ Hai",
        grammarRole: "Adverbial (Time)",
        roleLabelVi: "Trạng ngữ chỉ thời gian",
        colorType: "time",
        alternatives: [
          { en: "every week", vi: "mỗi tuần" },
          { en: "on weekdays", vi: "vào các ngày trong tuần" }
        ]
      }
    ]
  },
  {
    id: "a1-11",
    level: "A1",
    fullSentenceEn: "She is a happy student in this class.",
    fullSentenceVi: "Cô ấy là một học sinh vui vẻ trong lớp học này.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì hiện tại đơn với động từ 'to be' miêu tả." },
      { label: "She + is", content: "Chủ ngữ ngôi thứ 3 số ít đi với động từ 'is'." },
      { label: "a happy student", content: "Mạo từ 'a' + tính từ 'happy' + danh từ 'student'." },
      { label: "in this class", content: "Giới từ 'in' + tính từ chỉ định 'this' + danh từ 'class'." }
    ],
    chunks: [
      {
        id: "c11-1",
        chunkEn: "She",
        chunkVi: "Cô ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "He", vi: "Cậu ấy" },
          { en: "Mary", vi: "Mary" }
        ]
      },
      {
        id: "c11-2",
        chunkEn: "is",
        chunkVi: "là",
        grammarRole: "Verb (To Be)",
        roleLabelVi: "Động từ (To be)",
        colorType: "verb",
        alternatives: [
          { en: "was", vi: "đã là" }
        ]
      },
      {
        id: "c11-3",
        chunkEn: "a happy student",
        chunkVi: "một học sinh vui vẻ",
        grammarRole: "Object / Subject Complement",
        roleLabelVi: "Bổ ngữ / Tân ngữ",
        colorType: "object",
        alternatives: [
          { en: "a smart teacher", vi: "một giáo viên thông minh" },
          { en: "a kind student", vi: "tử tế" },
          { en: "a funny student", vi: "vui tính" }
        ]
      },
      {
        id: "c11-4",
        chunkEn: "in this class",
        chunkVi: "trong lớp học này",
        grammarRole: "Adverbial (Place)",
        roleLabelVi: "Trạng ngữ chỉ nơi chốn",
        colorType: "place",
        alternatives: [
          { en: "at home", vi: "ở nhà" },
          { en: "at the office", vi: "ở văn phòng" }
        ]
      }
    ]
  },
  {
    id: "a1-12",
    level: "A1",
    fullSentenceEn: "I like apples, but I do not like bananas.",
    fullSentenceVi: "Tôi thích táo, nhưng tôi không thích chuối.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu ghép nối hai mệnh đề trái ngược ý nghĩa." },
      { label: "I like apples", content: "Mệnh đề khẳng định thứ nhất." },
      { label: "but", content: "Liên từ nối biểu thị sự đối lập." },
      { label: "I do not like bananas", content: "Mệnh đề phủ định thứ hai (trợ động từ 'do not' + 'like')." }
    ],
    chunks: [
      {
        id: "c12-1",
        chunkEn: "I like apples",
        chunkVi: "Tôi thích táo",
        grammarRole: "Clause 1 (Affirmative)",
        roleLabelVi: "Mệnh đề khẳng định",
        colorType: "subject",
        alternatives: [
          { en: "She loves cats", vi: "Cô ấy yêu mèo" },
          { en: "We play football", vi: "Chúng tôi đá bóng" }
        ]
      },
      {
        id: "c12-2",
        chunkEn: "but",
        chunkVi: "nhưng",
        grammarRole: "Connector / Conjunction",
        roleLabelVi: "Từ nối",
        colorType: "connector",
        alternatives: [
          { en: "and", vi: "và" },
          { en: "so", vi: "vì vậy" }
        ]
      },
      {
        id: "c12-3",
        chunkEn: "I don't like bananas",
        chunkVi: "tôi không thích chuối",
        grammarRole: "Clause 2 (Negative)",
        roleLabelVi: "Mệnh đề phủ định",
        colorType: "object",
        alternatives: [
          { en: "he does not like fish", vi: "cậu ấy không thích cá" },
          { en: "they do not play tennis", vi: "họ không chơi quần vợt" }
        ]
      }
    ]
  },
  {
    id: "a1-13",
    level: "A1",
    fullSentenceEn: "She drinks some water because she does not have any apples.",
    fullSentenceVi: "Cô ấy uống một ít nước vì cô ấy không có quả táo nào cả.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cách dùng 'some' với danh từ không đếm được và 'any' trong câu phủ định." },
      { label: "She drinks some water", content: "Dùng 'some' trước danh từ không đếm được ('water') trong câu khẳng định." },
      { label: "because", content: "Liên từ chỉ nguyên nhân (vì)." },
      { label: "she doesn't have any apples", content: "Dùng 'any' và danh từ đếm được số nhiều ('apples') ở dạng phủ định." }
    ],
    chunks: [
      {
        id: "c13-1",
        chunkEn: "She drinks some water",
        chunkVi: "Cô ấy uống một ít nước",
        grammarRole: "Clause 1 (Uncountable Noun with 'some')",
        roleLabelVi: "Mệnh đề (Danh từ không đếm được với 'some')",
        colorType: "subject",
        alternatives: [
          { en: "He wants some milk", vi: "Cậu ấy muốn một ít sữa" },
          { en: "We need some rice", vi: "Chúng tôi cần một ít cơm" }
        ]
      },
      {
        id: "c13-2",
        chunkEn: "because",
        chunkVi: "vì",
        grammarRole: "Connector / Conjunction",
        roleLabelVi: "Từ nối nguyên nhân",
        colorType: "connector",
        alternatives: [
          { en: "so", vi: "nên" },
          { en: "and", vi: "và" }
        ]
      },
      {
        id: "c13-3",
        chunkEn: "she doesn't have any apples",
        chunkVi: "cô ấy không có quả táo nào",
        grammarRole: "Clause 2 (Countable Noun with 'any')",
        roleLabelVi: "Mệnh đề (Danh từ số nhiều với 'any')",
        colorType: "object",
        alternatives: [
          { en: "he does not buy any books", vi: "cậu ấy không mua quyển sách nào" },
          { en: "they do not like any bananas", vi: "họ không thích quả chuối nào" }
        ]
      }
    ]
  },
  {
    id: "a1-14",
    level: "A1",
    fullSentenceEn: "He always arrives early for class.",
    fullSentenceVi: "Cậu ấy luôn đến lớp sớm.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Vị trí trạng từ tần suất: S + trạng từ + V (thường)." },
      { label: "He", content: "Chủ ngữ ngôi thứ ba số ít." },
      { label: "always", content: "Trạng từ chỉ tần suất (luôn luôn) đứng trước động từ thường." },
      { label: "arrives early for class", content: "Động từ thường 'arrives' theo sau trạng từ tần suất." }
    ],
    chunks: [
      {
        id: "c14-1",
        chunkEn: "He",
        chunkVi: "Cậu ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "She", vi: "Cô ấy" },
          { en: "Tom", vi: "Tom" }
        ]
      },
      {
        id: "c14-2",
        chunkEn: "always",
        chunkVi: "luôn luôn",
        grammarRole: "Frequency Adverb",
        roleLabelVi: "Trạng từ tần suất",
        colorType: "frequency",
        alternatives: [
          { en: "usually", vi: "thường xuyên" },
          { en: "often", vi: "thường" }
        ]
      },
      {
        id: "c14-3",
        chunkEn: "arrives early for class",
        chunkVi: "đến lớp sớm",
        grammarRole: "Verb Phrase",
        roleLabelVi: "Cụm động từ",
        colorType: "verb",
        alternatives: [
          { en: "gets up early", vi: "thức dậy sớm" },
          { en: "goes to work", vi: "đi làm" }
        ]
      }
    ]
  },
  {
    id: "a1-15",
    level: "A1",
    fullSentenceEn: "Where do you live in this city?",
    fullSentenceVi: "Bạn sống ở đâu trong thành phố này?",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu hỏi Wh-: Wh- + trợ động từ + S + V?" },
      { label: "Where", content: "Từ để hỏi (Wh-word) chỉ địa điểm." },
      { label: "do you", content: "Trợ động từ 'do' đi với chủ ngữ 'you'." },
      { label: "live in this city", content: "Động từ nguyên mẫu 'live' + cụm chỉ địa điểm." }
    ],
    chunks: [
      {
        id: "c15-1",
        chunkEn: "Where",
        chunkVi: "Ở đâu",
        grammarRole: "Wh- Question Word",
        roleLabelVi: "Từ để hỏi",
        colorType: "connector",
        alternatives: [
          { en: "What", vi: "Cái gì" },
          { en: "When", vi: "Khi nào" }
        ]
      },
      {
        id: "c15-2",
        chunkEn: "do you",
        chunkVi: "bạn ... không",
        grammarRole: "Auxiliary + Subject",
        roleLabelVi: "Trợ động từ + Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "do they", vi: "họ" },
          { en: "does he", vi: "cậu ấy" }
        ]
      },
      {
        id: "c15-3",
        chunkEn: "live in this city?",
        chunkVi: "sống trong thành phố này",
        grammarRole: "Verb + Modifier",
        roleLabelVi: "Động từ + Bổ ngữ",
        colorType: "verb",
        alternatives: [
          { en: "work in this office", vi: "làm việc ở văn phòng này" },
          { en: "study in this school", vi: "học ở trường này" }
        ]
      }
    ]
  }
];