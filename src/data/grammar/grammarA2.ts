import { GrammarSentenceItem } from "@/types/grammar";

export const GRAMMAR_A2_DATA: GrammarSentenceItem[] = [
  {
    id: "a2-01",
    level: "A2",
    fullSentenceEn: "I have visited Da Nang.",
    fullSentenceVi: "Tôi đã từng đến Đà Nẵng.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì Hiện tại hoàn thành diễn tả trải nghiệm cá nhân." },
      { label: "I", content: "Chủ ngữ ngôi thứ nhất số ít." },
      { label: "have visited", content: "Trợ động từ 'have' + động từ cột 3 (V3/ed) chỉ trải nghiệm." },
      { label: "Da Nang", content: "Tân ngữ chỉ địa điểm đã từng đặt chân đến." }
    ],
    chunks: [
      {
        id: "c01-1",
        chunkEn: "I",
        chunkVi: "Tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [
          { en: "She", vi: "Cô ấy" },
          { en: "They", vi: "Họ" }
        ]
      },
      {
        id: "c01-2",
        chunkEn: "have visited",
        chunkVi: "đã từng đến",
        grammarRole: "Present Perfect Verb",
        roleLabelVi: "Động từ HTHT",
        colorType: "verb",
        alternatives: [
          { en: "have explored", vi: "đã khám phá" },
          { en: "have seen", vi: "đã thấy" }
        ]
      },
      {
        id: "c01-3",
        chunkEn: "Da Nang",
        chunkVi: "Đà Nẵng",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ địa điểm",
        colorType: "object",
        alternatives: [
          { en: "Ha Noi", vi: "Hà Nội" },
          { en: "Saigon", vi: "Sài Gòn" }
        ]
      }
    ]
  },
  {
    id: "a2-02",
    level: "A2",
    fullSentenceEn: "I was cooking when the phone rang.",
    fullSentenceVi: "Tôi đang nấu ăn thì điện thoại reo.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Hành động đang xảy ra trong quá khứ thì có hành động khác đột ngột xen vào." },
      { label: "I", content: "Chủ ngữ." },
      { label: "was cooking", content: "Quá khứ tiếp diễn diễn tả hành động đang kéo dài." },
      { label: "when", content: "Từ nối chỉ thời điểm sự việc khác xen vào." },
      { label: "the phone rang", content: "Mệnh đề quá khứ đơn chỉ hành động ngắn xen vào." }
    ],
    chunks: [
      {
        id: "c02-1",
        chunkEn: "I",
        chunkVi: "Tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "She", vi: "Cô ấy" }]
      },
      {
        id: "c02-2",
        chunkEn: "was cooking",
        chunkVi: "đang nấu ăn",
        grammarRole: "Past Continuous",
        roleLabelVi: "Quá khứ tiếp diễn",
        colorType: "verb",
        alternatives: [{ en: "was sleeping", vi: "đang ngủ" }]
      },
      {
        id: "c02-3",
        chunkEn: "when",
        chunkVi: "khi mà",
        grammarRole: "Connector",
        roleLabelVi: "Từ nối",
        colorType: "connector",
        alternatives: [{ en: "while", vi: "trong lúc" }]
      },
      {
        id: "c02-4",
        chunkEn: "the phone rang",
        chunkVi: "điện thoại reo",
        grammarRole: "Time Clause",
        roleLabelVi: "Mệnh đề xen vào",
        colorType: "object",
        alternatives: [{ en: "he came home", vi: "cậu ấy về nhà" }]
      }
    ]
  },
  {
    id: "a2-03",
    level: "A2",
    fullSentenceEn: "We are going to visit Hue.",
    fullSentenceVi: "Chúng tôi sẽ đi thăm Huế.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì Tương lai gần diễn tả dự định đã lên kế hoạch." },
      { label: "We", content: "Chủ ngữ số nhiều." },
      { label: "are going to visit", content: "Cụm 'be going to' + động từ nguyên mẫu chỉ dự định." },
      { label: "Hue", content: "Tân ngữ chỉ địa điểm." }
    ],
    chunks: [
      {
        id: "c03-1",
        chunkEn: "We",
        chunkVi: "Chúng tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "She", vi: "Cô ấy" }]
      },
      {
        id: "c03-2",
        chunkEn: "are going to visit",
        chunkVi: "dự định sẽ thăm",
        grammarRole: "Be going to + Verb",
        roleLabelVi: "Cụm dự định tương lai",
        colorType: "verb",
        alternatives: [{ en: "is going to buy", vi: "dự định mua" }]
      },
      {
        id: "c03-3",
        chunkEn: "Hue",
        chunkVi: "Huế",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        colorType: "object",
        alternatives: [{ en: "a new car", vi: "xe mới" }]
      }
    ]
  },
  {
    id: "a2-04",
    level: "A2",
    fullSentenceEn: "How much milk do we have?",
    fullSentenceVi: "Chúng ta có bao nhiêu sữa?",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu hỏi về số lượng dành cho danh từ không đếm được." },
      { label: "How much milk", content: "Cụm từ để hỏi số lượng cho danh từ không đếm được." },
      { label: "do", content: "Trợ động từ cho chủ ngữ số nhiều." },
      { label: "we have", content: "Chủ ngữ + động từ chính." }
    ],
    chunks: [
      {
        id: "c04-1",
        chunkEn: "How much milk",
        chunkVi: "Bao nhiêu sữa",
        grammarRole: "Wh- Phrase",
        roleLabelVi: "Cụm từ hỏi lượng",
        colorType: "connector",
        alternatives: [{ en: "How much water", vi: "Bao nhiêu nước" }]
      },
      {
        id: "c04-2",
        chunkEn: "do",
        chunkVi: "trợ động từ",
        grammarRole: "Auxiliary",
        roleLabelVi: "Trợ động từ",
        colorType: "verb",
        alternatives: [{ en: "did", vi: "quá khứ" }]
      },
      {
        id: "c04-3",
        chunkEn: "we",
        chunkVi: "chúng ta",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "they", vi: "họ" }]
      },
      {
        id: "c04-4",
        chunkEn: "have",
        chunkVi: "có",
        grammarRole: "Main Verb",
        roleLabelVi: "Động từ chính",
        colorType: "verb",
        alternatives: [{ en: "need", vi: "cần" }]
      }
    ]
  },
  {
    id: "a2-05",
    level: "A2",
    fullSentenceEn: "This is Lan’s bag.",
    fullSentenceVi: "Đây là cái túi của Lan.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc sở hữu cách với danh từ chỉ người." },
      { label: "This", content: "Đại từ chỉ định làm chủ ngữ." },
      { label: "is", content: "Động từ 'to be'." },
      { label: "Lan’s bag", content: "Danh từ sở hữu cách ('s) chỉ vật thuộc về Lan." }
    ],
    chunks: [
      {
        id: "c05-1",
        chunkEn: "This",
        chunkVi: "Đây",
        grammarRole: "Subject",
        roleLabelVi: "Đại từ chỉ định",
        colorType: "subject",
        alternatives: [{ en: "That", vi: "Kia" }]
      },
      {
        id: "c05-2",
        chunkEn: "is",
        chunkVi: "là",
        grammarRole: "Verb",
        roleLabelVi: "Động từ 'to be'",
        colorType: "verb",
        alternatives: [{ en: "was", vi: "đã là" }]
      },
      {
        id: "c05-3",
        chunkEn: "Lan’s bag",
        chunkVi: "túi của Lan",
        grammarRole: "Possessive Noun Phrase",
        roleLabelVi: "Cụm danh từ sở hữu",
        colorType: "object",
        alternatives: [{ en: "Tom’s book", vi: "sách của Tom" }]
      }
    ]
  },
  {
    id: "a2-06",
    level: "A2",
    fullSentenceEn: "This bag is mine.",
    fullSentenceVi: "Cái túi này là của tôi.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc sử dụng đại từ sở hữu độc lập đứng một mình." },
      { label: "This bag", content: "Cụm danh từ chủ ngữ." },
      { label: "is", content: "Động từ 'to be'." },
      { label: "mine", content: "Đại từ sở hữu độc lập thay thế cho my bag." }
    ],
    chunks: [
      {
        id: "c06-1",
        chunkEn: "This bag",
        chunkVi: "Cái túi này",
        grammarRole: "Subject",
        roleLabelVi: "Cụm danh từ chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "That house", vi: "Ngôi nhà kia" }]
      },
      {
        id: "c06-2",
        chunkEn: "is",
        chunkVi: "là",
        grammarRole: "Verb",
        roleLabelVi: "Động từ 'to be'",
        colorType: "verb",
        alternatives: [{ en: "was", vi: "đã là" }]
      },
      {
        id: "c06-3",
        chunkEn: "mine",
        chunkVi: "của tôi",
        grammarRole: "Possessive Pronoun",
        roleLabelVi: "Đại từ sở hữu",
        colorType: "object",
        alternatives: [{ en: "hers", vi: "của cô ấy" }]
      }
    ]
  },
  {
    id: "a2-07",
    level: "A2",
    fullSentenceEn: "She sees herself in the mirror.",
    fullSentenceVi: "Cô ấy nhìn thấy chính mình trong gương.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc sử dụng đại từ phản thân khi chủ và tân ngữ trùng nhau." },
      { label: "She", content: "Chủ ngữ." },
      { label: "sees", content: "Động từ chính." },
      { label: "herself", content: "Đại từ phản thân nhận tác động từ chính chủ ngữ." },
      { label: "in the mirror", content: "Cụm giới từ chỉ địa điểm." }
    ],
    chunks: [
      {
        id: "c07-1",
        chunkEn: "She",
        chunkVi: "Cô ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "He", vi: "Cậu ấy" }]
      },
      {
        id: "c07-2",
        chunkEn: "sees",
        chunkVi: "nhìn thấy",
        grammarRole: "Verb",
        roleLabelVi: "Động từ chính",
        colorType: "verb",
        alternatives: [{ en: "loves", vi: "yêu" }]
      },
      {
        id: "c07-3",
        chunkEn: "herself",
        chunkVi: "chính mình",
        grammarRole: "Reflexive Pronoun",
        roleLabelVi: "Đại từ phản thân",
        colorType: "object",
        alternatives: [{ en: "himself", vi: "chính cậu ấy" }]
      },
      {
        id: "c07-4",
        chunkEn: "in the mirror",
        chunkVi: "trong gương",
        grammarRole: "Prepositional Phrase",
        roleLabelVi: "Cụm giới từ địa điểm",
        colorType: "place",
        alternatives: [{ en: "at home", vi: "ở nhà" }]
      }
    ]
  },
  {
    id: "a2-08",
    level: "A2",
    fullSentenceEn: "He is taller than me.",
    fullSentenceVi: "Anh ấy cao hơn tôi.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc so sánh hơn với tính từ ngắn." },
      { label: "He", content: "Chủ ngữ." },
      { label: "is", content: "Động từ 'to be'." },
      { label: "taller than me", content: "Tính từ ngắn thêm '-er' + 'than' + đại từ nhân xưng." }
    ],
    chunks: [
      {
        id: "c08-1",
        chunkEn: "He",
        chunkVi: "Anh ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "She", vi: "Cô ấy" }]
      },
      {
        id: "c08-2",
        chunkEn: "is",
        chunkVi: "thì / là",
        grammarRole: "Verb",
        roleLabelVi: "Động từ 'to be'",
        colorType: "verb",
        alternatives: [{ en: "looks", vi: "trông có vẻ" }]
      },
      {
        id: "c08-3",
        chunkEn: "taller than me",
        chunkVi: "cao hơn tôi",
        grammarRole: "Comparative Phrase",
        roleLabelVi: "Cụm so sánh hơn",
        colorType: "object",
        alternatives: [{ en: "older than him", vi: "già hơn anh ấy" }]
      }
    ]
  },
  {
    id: "a2-09",
    level: "A2",
    fullSentenceEn: "She sings beautifully.",
    fullSentenceVi: "Cô ấy hát rất hay.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc miêu tả cách thức hành động bằng trạng từ." },
      { label: "She", content: "Chủ ngữ." },
      { label: "sings", content: "Động từ chính." },
      { label: "beautifully", content: "Trạng từ (tính từ + ly) bổ nghĩa cho động từ đứng trước." }
    ],
    chunks: [
      {
        id: "c09-1",
        chunkEn: "She",
        chunkVi: "Cô ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "He", vi: "Cậu ấy" }]
      },
      {
        id: "c09-2",
        chunkEn: "sings",
        chunkVi: "hát",
        grammarRole: "Verb",
        roleLabelVi: "Động từ chính",
        colorType: "verb",
        alternatives: [{ en: "runs", vi: "chạy" }]
      },
      {
        id: "c09-3",
        chunkEn: "beautifully",
        chunkVi: "hay / đẹp",
        grammarRole: "Adverb",
        roleLabelVi: "Trạng từ cách thức",
        colorType: "method",
        alternatives: [{ en: "quickly", vi: "nhanh chóng" }]
      }
    ]
  },
  {
    id: "a2-10",
    level: "A2",
    fullSentenceEn: "You must stop at a red light.",
    fullSentenceVi: "Bạn phải dừng khi có đèn đỏ.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc diễn tả sự bắt buộc với động từ khiếm khuyết." },
      { label: "You", content: "Chủ ngữ." },
      { label: "must stop", content: "Động từ khiếm khuyết 'must' + động từ nguyên mẫu chỉ quy định bắt buộc." },
      { label: "at a red light", content: "Cụm giới từ chỉ địa điểm/hoàn cảnh." }
    ],
    chunks: [
      {
        id: "c10-1",
        chunkEn: "You",
        chunkVi: "Bạn",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "We", vi: "Chúng ta" }]
      },
      {
        id: "c10-2",
        chunkEn: "must stop",
        chunkVi: "phải dừng",
        grammarRole: "Modal + Verb",
        roleLabelVi: "Động từ khiếm khuyết",
        colorType: "verb",
        alternatives: [{ en: "must go", vi: "phải đi" }]
      },
      {
        id: "c10-3",
        chunkEn: "at a red light",
        chunkVi: "ở đèn đỏ",
        grammarRole: "Prepositional Phrase",
        roleLabelVi: "Cụm giới từ địa điểm",
        colorType: "place",
        alternatives: [{ en: "at home", vi: "ở nhà" }]
      }
    ]
  },
  {
    id: "a2-11",
    level: "A2",
    fullSentenceEn: "I want to learn English.",
    fullSentenceVi: "Tôi muốn học tiếng Anh.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc động từ đi kèm 'to-infinitive'." },
      { label: "I", content: "Chủ ngữ." },
      { label: "want", content: "Động từ chỉ mong muốn." },
      { label: "to learn English", content: "Cụm 'to V' làm tân ngữ bổ sung cho động từ trước." }
    ],
    chunks: [
      {
        id: "c11-1",
        chunkEn: "I",
        chunkVi: "Tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "She", vi: "Cô ấy" }]
      },
      {
        id: "c11-2",
        chunkEn: "want",
        chunkVi: "muốn",
        grammarRole: "Verb",
        roleLabelVi: "Động từ chính",
        colorType: "verb",
        alternatives: [{ en: "hope", vi: "hy vọng" }]
      },
      {
        id: "c11-3",
        chunkEn: "to learn English",
        chunkVi: "học tiếng Anh",
        grammarRole: "To-Infinitive Phrase",
        roleLabelVi: "Cụm to-infinitive",
        colorType: "object",
        alternatives: [{ en: "to travel abroad", vi: "đi du lịch" }]
      }
    ]
  },
  {
    id: "a2-12",
    level: "A2",
    fullSentenceEn: "The cat jumped into the box.",
    fullSentenceVi: "Con mèo nhảy vào hộp.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc diễn tả sự chuyển động hướng vào không gian kín." },
      { label: "The cat", content: "Cụm danh từ chủ ngữ." },
      { label: "jumped", content: "Động từ chỉ hành động chuyển động." },
      { label: "into the box", content: "Giới từ chỉ hướng chuyển động 'into' + danh từ." }
    ],
    chunks: [
      {
        id: "c12-1",
        chunkEn: "The cat",
        chunkVi: "Con mèo",
        grammarRole: "Subject",
        roleLabelVi: "Cụm danh từ chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "The dog", vi: "Con chó" }]
      },
      {
        id: "c12-2",
        chunkEn: "jumped",
        chunkVi: "nhảy",
        grammarRole: "Verb",
        roleLabelVi: "Động từ",
        colorType: "verb",
        alternatives: [{ en: "ran", vi: "chạy" }]
      },
      {
        id: "c12-3",
        chunkEn: "into the box",
        chunkVi: "vào trong hộp",
        grammarRole: "Preposition of Movement",
        roleLabelVi: "Giới từ chuyển động",
        colorType: "place",
        alternatives: [{ en: "into the room", vi: "vào phòng" }]
      }
    ]
  },
  {
    id: "a2-13",
    level: "A2",
    fullSentenceEn: "If you heat ice, it melts.",
    fullSentenceVi: "Nếu làm nóng đá thì nó tan.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu điều kiện loại 0 diễn tả chân lý, quy luật tự nhiên." },
      { label: "If you heat ice", content: "Mệnh đề điều kiện chia thì hiện tại đơn." },
      { label: "it", content: "Đại từ thay thế cho đá." },
      { label: "melts", content: "Động từ chia hiện tại đơn chỉ kết quả tất yếu." }
    ],
    chunks: [
      {
        id: "c13-1",
        chunkEn: "If you heat ice",
        chunkVi: "Nếu bạn làm nóng đá",
        grammarRole: "Condition Clause",
        roleLabelVi: "Mệnh đề điều kiện",
        colorType: "connector",
        alternatives: [{ en: "If it rains", vi: "Nếu trời mưa" }]
      },
      {
        id: "c13-2",
        chunkEn: "it",
        chunkVi: "nó",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "water", vi: "nước" }]
      },
      {
        id: "c13-3",
        chunkEn: "melts",
        chunkVi: "tan ra",
        grammarRole: "Verb",
        roleLabelVi: "Động từ",
        colorType: "verb",
        alternatives: [{ en: "boils", vi: "sôi" }]
      }
    ]
  },
  {
    id: "a2-14",
    level: "A2",
    fullSentenceEn: "If it rains, we will stay home.",
    fullSentenceVi: "Nếu trời mưa, chúng tôi sẽ ở nhà.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai." },
      { label: "If it rains", content: "Mệnh đề điều kiện chia hiện tại đơn." },
      { label: "we", content: "Chủ ngữ vế chính." },
      { label: "will stay home", content: "'will' + động từ nguyên mẫu diễn tả kết quả ở tương lai." }
    ],
    chunks: [
      {
        id: "c14-1",
        chunkEn: "If it rains",
        chunkVi: "Nếu trời mưa",
        grammarRole: "Condition Clause",
        roleLabelVi: "Mệnh đề điều kiện",
        colorType: "connector",
        alternatives: [{ en: "If you come early", vi: "Nếu bạn đến sớm" }]
      },
      {
        id: "c14-2",
        chunkEn: "we",
        chunkVi: "chúng tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "I", vi: "Tôi" }]
      },
      {
        id: "c14-3",
        chunkEn: "will stay home",
        chunkVi: "sẽ ở nhà",
        grammarRole: "Future Main Clause",
        roleLabelVi: "Mệnh đề chính tương lai",
        colorType: "verb",
        alternatives: [{ en: "will go out", vi: "sẽ ra ngoài" }]
      }
    ]
  },
  {
    id: "a2-15",
    level: "A2",
    fullSentenceEn: "When I get home, I’ll call you.",
    fullSentenceVi: "Khi về đến nhà, tôi sẽ gọi bạn.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề trạng ngữ chỉ thời gian với 'when'." },
      { label: "When I get home", content: "Mệnh đề chỉ thời gian dùng hiện tại đơn dù diễn tả tương lai." },
      { label: "I’ll call you", content: "Mệnh đề chính chia thì tương lai đơn." }
    ],
    chunks: [
      {
        id: "c15-1",
        chunkEn: "When I get home",
        chunkVi: "Khi tôi về nhà",
        grammarRole: "Time Clause",
        roleLabelVi: "Mệnh đề thời gian",
        colorType: "connector",
        alternatives: [{ en: "When she arrives", vi: "Khi cô ấy đến" }]
      },
      {
        id: "c15-2",
        chunkEn: "I’ll call you",
        chunkVi: "tôi sẽ gọi bạn",
        grammarRole: "Main Clause",
        roleLabelVi: "Mệnh đề chính",
        colorType: "verb",
        alternatives: [{ en: "I’ll text you", vi: "tôi sẽ nhắn tin bạn" }]
      }
    ]
  }
];