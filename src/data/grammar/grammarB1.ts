import { GrammarSentenceItem } from "@/types/grammar";

export const GRAMMAR_B1_DATA: GrammarSentenceItem[] = [
  {
    id: "b1-01",
    level: "B1",
    fullSentenceEn: "I have been studying for two hours.",
    fullSentenceVi: "Tôi đã học suốt hai tiếng rồi.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì Hiện tại hoàn thành tiếp diễn nhấn mạnh tính liên tục của hành động." },
      { label: "I", content: "Chủ ngữ." },
      { label: "have been studying", content: "Cấu trúc 'have/has been + V-ing' chỉ hành động kéo dài từ quá khứ đến hiện tại." },
      { label: "for two hours", content: "Cụm chỉ khoảng thời gian (for + khoảng thời gian)." }
    ],
    chunks: [
      {
        id: "cb1-1-1",
        chunkEn: "I",
        chunkVi: "Tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "She", vi: "Cô ấy" }]
      },
      {
        id: "cb1-1-2",
        chunkEn: "have been studying",
        chunkVi: "đang học suốt",
        grammarRole: "Present Perfect Continuous",
        roleLabelVi: "HTHT tiếp diễn",
        colorType: "verb",
        alternatives: [{ en: "has been working", vi: "đã đang làm việc" }]
      },
      {
        id: "cb1-1-3",
        chunkEn: "for two hours",
        chunkVi: "trong hai tiếng",
        grammarRole: "Duration Phrase",
        roleLabelVi: "Cụm khoảng thời gian",
        colorType: "time",
        alternatives: [{ en: "since morning", vi: "từ sáng" }]
      }
    ]
  },
  {
    id: "b1-02",
    level: "B1",
    fullSentenceEn: "When I arrived, the film had started.",
    fullSentenceVi: "Khi tôi đến thì phim đã chiếu rồi.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Sự kết hợp giữa quá khứ đơn và quá khứ hoàn thành." },
      { label: "When I arrived", content: "Mệnh đề quá khứ đơn chỉ hành động xảy ra sau." },
      { label: "the film", content: "Chủ ngữ vế sau." },
      { label: "had started", content: "Cấu trúc quá khứ hoàn thành ('had + V3') chỉ hành động xảy ra trước." }
    ],
    chunks: [
      {
        id: "cb1-2-1",
        chunkEn: "When I arrived",
        chunkVi: "Khi tôi đến",
        grammarRole: "Past Simple Clause",
        roleLabelVi: "Mệnh đề quá khứ đơn",
        colorType: "connector",
        alternatives: [{ en: "Before she came", vi: "Trước khi cô ấy đến" }]
      },
      {
        id: "cb1-2-2",
        chunkEn: "the film",
        chunkVi: "bộ phim",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "he", vi: "anh ấy" }]
      },
      {
        id: "cb1-2-3",
        chunkEn: "had started",
        chunkVi: "đã bắt đầu",
        grammarRole: "Past Perfect",
        roleLabelVi: "Quá khứ hoàn thành",
        colorType: "verb",
        alternatives: [{ en: "had left", vi: "đã rời đi" }]
      }
    ]
  },
  {
    id: "b1-03",
    level: "B1",
    fullSentenceEn: "This time tomorrow, I will be flying to Hanoi.",
    fullSentenceVi: "Giờ này ngày mai tôi đang bay ra Hà Nội.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì Tương lai tiếp diễn tại một mốc thời gian cụ thể." },
      { label: "This time tomorrow", content: "Trạng ngữ chỉ mốc thời gian cụ thể trong tương lai." },
      { label: "I", content: "Chủ ngữ." },
      { label: "will be flying", content: "Cấu trúc 'will be + V-ing' diễn tả hành động đang diễn ra tại thời điểm tương lai." },
      { label: "to Hanoi", content: "Cụm giới từ chỉ hướng đích đến." }
    ],
    chunks: [
      {
        id: "cb1-3-1",
        chunkEn: "This time tomorrow",
        chunkVi: "Giờ này ngày mai",
        grammarRole: "Future Time Expression",
        roleLabelVi: "Trạng ngữ thời gian tương lai",
        colorType: "time",
        alternatives: [{ en: "At 8 PM tonight", vi: "Lúc 8h tối nay" }]
      },
      {
        id: "cb1-3-2",
        chunkEn: "I",
        chunkVi: "Tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "We", vi: "Chúng tôi" }]
      },
      {
        id: "cb1-3-3",
        chunkEn: "will be flying",
        chunkVi: "sẽ đang bay",
        grammarRole: "Future Continuous",
        roleLabelVi: "Tương lai tiếp diễn",
        colorType: "verb",
        alternatives: [{ en: "will be working", vi: "sẽ đang làm việc" }]
      },
      {
        id: "cb1-3-4",
        chunkEn: "to Hanoi",
        chunkVi: "đi Hà Nội",
        grammarRole: "Destination",
        roleLabelVi: "Địa điểm đến",
        colorType: "place",
        alternatives: [{ en: "to Hue", vi: "đi Huế" }]
      }
    ]
  },
  {
    id: "b1-04",
    level: "B1",
    fullSentenceEn: "By June, she will have finished the course.",
    fullSentenceVi: "Đến tháng Sáu, cô ấy sẽ học xong khóa học.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Thì Tương lai hoàn thành hoàn tất trước một mốc thời gian." },
      { label: "By June", content: "Mốc thời gian giới hạn với 'by'." },
      { label: "she", content: "Chủ ngữ." },
      { label: "will have finished", content: "Cấu trúc 'will have + V3/ed' chỉ hành động hoàn tất trước mốc tương lai." },
      { label: "the course", content: "Tân ngữ trực tiếp." }
    ],
    chunks: [
      {
        id: "cb1-4-1",
        chunkEn: "By June",
        chunkVi: "Đến tháng Sáu",
        grammarRole: "Time Marker",
        roleLabelVi: "Mốc thời gian",
        colorType: "time",
        alternatives: [{ en: "By next year", vi: "Đến năm sau" }]
      },
      {
        id: "cb1-4-2",
        chunkEn: "she",
        chunkVi: "cô ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "we", vi: "chúng tôi" }]
      },
      {
        id: "cb1-4-3",
        chunkEn: "will have finished",
        chunkVi: "sẽ hoàn thành",
        grammarRole: "Future Perfect",
        roleLabelVi: "Tương lai hoàn thành",
        colorType: "verb",
        alternatives: [{ en: "will have built", vi: "sẽ xây xong" }]
      },
      {
        id: "cb1-4-4",
        chunkEn: "the course",
        chunkVi: "khóa học",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        colorType: "object",
        alternatives: [{ en: "the house", vi: "ngôi nhà" }]
      }
    ]
  },
  {
    id: "b1-05",
    level: "B1",
    fullSentenceEn: "It might rain later.",
    fullSentenceVi: "Lát nữa trời có thể mưa.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Diễn tả khả năng xảy ra với động từ khiếm khuyết 'might'." },
      { label: "It", content: "Chủ ngữ giả chỉ thời tiết." },
      { label: "might rain", content: "Động từ khiếm khuyết 'might' + động từ nguyên mẫu chỉ xác suất." },
      { label: "later", content: "Trạng từ chỉ thời gian tương lai gần." }
    ],
    chunks: [
      {
        id: "cb1-5-1",
        chunkEn: "It",
        chunkVi: "Trời",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ giả",
        colorType: "subject",
        alternatives: [{ en: "You", vi: "Bạn" }]
      },
      {
        id: "cb1-5-2",
        chunkEn: "might rain",
        chunkVi: "có thể mưa",
        grammarRole: "Modal + Verb",
        roleLabelVi: "Động từ khiếm khuyết",
        colorType: "verb",
        alternatives: [{ en: "could help", vi: "có thể giúp" }]
      },
      {
        id: "cb1-5-3",
        chunkEn: "later",
        chunkVi: "lát nữa",
        grammarRole: "Adverb of Time",
        roleLabelVi: "Trạng từ thời gian",
        colorType: "time",
        alternatives: [{ en: "tomorrow", vi: "ngày mai" }]
      }
    ]
  },
  {
    id: "b1-06",
    level: "B1",
    fullSentenceEn: "I used to live in Hue.",
    fullSentenceVi: "Trước đây tôi sống ở Huế.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Diễn tả thói quen trong quá khứ nay không còn." },
      { label: "I", content: "Chủ ngữ." },
      { label: "used to live", content: "Cấu trúc 'used to + V-nguyên mẫu' chỉ thói quen quá khứ." },
      { label: "in Hue", content: "Cụm giới từ chỉ địa điểm." }
    ],
    chunks: [
      {
        id: "cb1-6-1",
        chunkEn: "I",
        chunkVi: "Tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "She", vi: "Cô ấy" }]
      },
      {
        id: "cb1-6-2",
        chunkEn: "used to live",
        chunkVi: "từng sống",
        grammarRole: "Used to + Verb",
        roleLabelVi: "Cụm thói quen quá khứ",
        colorType: "verb",
        alternatives: [{ en: "used to play", vi: "từng chơi" }]
      },
      {
        id: "cb1-6-3",
        chunkEn: "in Hue",
        chunkVi: "ở Huế",
        grammarRole: "Prepositional Phrase",
        roleLabelVi: "Cụm giới từ địa điểm",
        colorType: "place",
        alternatives: [{ en: "at home", vi: "ở nhà" }]
      }
    ]
  },
  {
    id: "b1-07",
    level: "B1",
    fullSentenceEn: "Please turn off the light.",
    fullSentenceVi: "Làm ơn tắt đèn.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc câu mệnh lệnh với cụm động từ (phrasal verb)." },
      { label: "Please turn off", content: "Lời đề nghị lịch sự + cụm động từ." },
      { label: "the light", content: "Tân ngữ của cụm động từ." }
    ],
    chunks: [
      {
        id: "cb1-7-1",
        chunkEn: "Please turn off",
        chunkVi: "Làm ơn tắt",
        grammarRole: "Imperative + Phrasal Verb",
        roleLabelVi: "Mệnh lệnh + Cụm động từ",
        colorType: "verb",
        alternatives: [{ en: "Don't give up", vi: "Đừng bỏ cuộc" }]
      },
      {
        id: "cb1-7-2",
        chunkEn: "the light",
        chunkVi: "cái đèn",
        grammarRole: "Object",
        roleLabelVi: "Tân ngữ",
        colorType: "object",
        alternatives: [{ en: "the TV", vi: "tivi" }]
      }
    ]
  },
  {
    id: "b1-08",
    level: "B1",
    fullSentenceEn: "I stopped to buy some water.",
    fullSentenceVi: "Tôi dừng lại để mua nước.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Phân biệt cấu trúc 'stop + to V' chỉ mục đích." },
      { label: "I", content: "Chủ ngữ." },
      { label: "stopped", content: "Động từ chính chỉ sự dừng lại." },
      { label: "to buy some water", content: "Cụm 'to V' chỉ mục đích của việc dừng lại." }
    ],
    chunks: [
      {
        id: "cb1-8-1",
        chunkEn: "I",
        chunkVi: "Tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "He", vi: "Anh ấy" }]
      },
      {
        id: "cb1-8-2",
        chunkEn: "stopped",
        chunkVi: "dừng lại",
        grammarRole: "Verb",
        roleLabelVi: "Động từ chính",
        colorType: "verb",
        alternatives: [{ en: "paused", vi: "tạm dừng" }]
      },
      {
        id: "cb1-8-3",
        chunkEn: "to buy some water",
        chunkVi: "để mua nước",
        grammarRole: "To-Infinitive Purpose",
        roleLabelVi: "Cụm to V chỉ mục đích",
        colorType: "object",
        alternatives: [{ en: "to talk to her", vi: "nói chuyện với cô ấy" }]
      }
    ]
  },
  {
    id: "b1-09",
    level: "B1",
    fullSentenceEn: "Someone is at the door.",
    fullSentenceVi: "Có ai đó ở cửa.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Cấu trúc với đại từ bất định chỉ số ít." },
      { label: "Someone", content: "Đại từ bất định chỉ người không xác định (chia số ít)." },
      { label: "is", content: "Động từ 'to be' chia số ít." },
      { label: "at the door", content: "Cụm giới từ chỉ vị trí." }
    ],
    chunks: [
      {
        id: "cb1-9-1",
        chunkEn: "Someone",
        chunkVi: "Ai đó",
        grammarRole: "Indefinite Pronoun",
        roleLabelVi: "Đại từ bất định",
        colorType: "subject",
        alternatives: [{ en: "Nobody", vi: "Không ai" }]
      },
      {
        id: "cb1-9-2",
        chunkEn: "is",
        chunkVi: "đang ở",
        grammarRole: "Verb",
        roleLabelVi: "Động từ 'to be'",
        colorType: "verb",
        alternatives: [{ en: "was", vi: "đã ở" }]
      },
      {
        id: "cb1-9-3",
        chunkEn: "at the door",
        chunkVi: "ngoài cửa",
        grammarRole: "Prepositional Phrase",
        roleLabelVi: "Cụm giới từ địa điểm",
        colorType: "place",
        alternatives: [{ en: "in the room", vi: "trong phòng" }]
      }
    ]
  },
  {
    id: "b1-10",
    level: "B1",
    fullSentenceEn: "She bought a lovely big old brown table.",
    fullSentenceVi: "Cô ấy mua một cái bàn nâu, to, cũ, rất đáng yêu.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Quy tắc sắp xếp trật tự tính từ chuẩn (OSASCOMP)." },
      { label: "She", content: "Chủ ngữ." },
      { label: "bought", content: "Động từ quá khứ." },
      { label: "a lovely big old brown table", content: "Cụm danh từ với chuỗi tính từ sắp xếp theo đúng quy tắc (Opinion - Size - Age - Color)." }
    ],
    chunks: [
      {
        id: "cb1-10-1",
        chunkEn: "She",
        chunkVi: "Cô ấy",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "He", vi: "Anh ấy" }]
      },
      {
        id: "cb1-10-2",
        chunkEn: "bought",
        chunkVi: "đã mua",
        grammarRole: "Verb",
        roleLabelVi: "Động từ",
        colorType: "verb",
        alternatives: [{ en: "found", vi: "tìm thấy" }]
      },
      {
        id: "cb1-10-3",
        chunkEn: "a lovely big old brown table",
        chunkVi: "cái bàn nâu to cũ đáng yêu",
        grammarRole: "Adjective Order Noun Phrase",
        roleLabelVi: "Cụm danh từ + Trật tự tính từ",
        colorType: "object",
        alternatives: [{ en: "a small round wooden box", vi: "hộp gỗ tròn nhỏ" }]
      }
    ]
  },
  {
    id: "b1-11",
    level: "B1",
    fullSentenceEn: "Although it rained, we went out.",
    fullSentenceVi: "Dù trời mưa, chúng tôi vẫn ra ngoài.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề trạng ngữ chỉ sự nhượng bộ với liên từ 'although'." },
      { label: "Although it rained", content: "Mệnh đề nhượng bộ đi với 'although' và cấu trúc (S + V)." },
      { label: "we", content: "Chủ ngữ vế chính." },
      { label: "went out", content: "Động từ chính chỉ hành động." }
    ],
    chunks: [
      {
        id: "cb1-11-1",
        chunkEn: "Although it rained",
        chunkVi: "Dù trời mưa",
        grammarRole: "Concessive Clause",
        roleLabelVi: "Mệnh đề nhượng bộ",
        colorType: "connector",
        alternatives: [{ en: "Even though it was cold", vi: "Mặc dù trời lạnh" }]
      },
      {
        id: "cb1-11-2",
        chunkEn: "we",
        chunkVi: "chúng tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "they", vi: "họ" }]
      },
      {
        id: "cb1-11-3",
        chunkEn: "went out",
        chunkVi: "đi ra ngoài",
        grammarRole: "Verb Phrase",
        roleLabelVi: "Cụm động từ chính",
        colorType: "verb",
        alternatives: [{ en: "stayed home", vi: "ở nhà" }]
      }
    ]
  },
  {
    id: "b1-12",
    level: "B1",
    fullSentenceEn: "If I were a bird, I would fly.",
    fullSentenceVi: "Nếu tôi là chim, tôi sẽ bay.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu điều kiện loại 2 giả định trái ngược thực tế hiện tại." },
      { label: "If I were a bird", content: "Mệnh đề điều kiện loại 2 dùng 'were' cho tất cả các ngôi." },
      { label: "I", content: "Chủ ngữ vế chính." },
      { label: "would fly", content: "'would + V-nguyên mẫu' diễn tả kết quả giả định." }
    ],
    chunks: [
      {
        id: "cb1-12-1",
        chunkEn: "If I were a bird",
        chunkVi: "Nếu tôi là chim",
        grammarRole: "Condition Clause",
        roleLabelVi: "Mệnh đề điều kiện loại 2",
        colorType: "connector",
        alternatives: [{ en: "If I had money", vi: "Nếu tôi có tiền" }]
      },
      {
        id: "cb1-12-2",
        chunkEn: "I",
        chunkVi: "tôi",
        grammarRole: "Subject",
        roleLabelVi: "Chủ ngữ",
        colorType: "subject",
        alternatives: [{ en: "we", vi: "chúng tôi" }]
      },
      {
        id: "cb1-12-3",
        chunkEn: "would fly",
        chunkVi: "sẽ bay",
        grammarRole: "Main Clause",
        roleLabelVi: "Mệnh đề chính",
        colorType: "verb",
        alternatives: [{ en: "would buy a car", vi: "sẽ mua ô tô" }]
      }
    ]
  },
  {
    id: "b1-13",
    level: "B1",
    fullSentenceEn: "The cake was made by my mom.",
    fullSentenceVi: "Chiếc bánh do mẹ tôi làm.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu bị động nhấn mạnh đối tượng chịu tác động của hành động." },
      { label: "The cake", content: "Chủ ngữ chịu tác động của hành động." },
      { label: "was made", content: "Cấu trúc bị động thì quá khứ đơn (was + V3)." },
      { label: "by my mom", content: "Tác nhân thực hiện hành động đi sau giới từ 'by'." }
    ],
    chunks: [
      {
        id: "cb1-13-1",
        chunkEn: "The cake",
        chunkVi: "Chiếc bánh",
        grammarRole: "Passive Subject",
        roleLabelVi: "Chủ ngữ bị động",
        colorType: "subject",
        alternatives: [{ en: "English", vi: "Tiếng Anh" }]
      },
      {
        id: "cb1-13-2",
        chunkEn: "was made",
        chunkVi: "đã được làm",
        grammarRole: "Passive Verb",
        roleLabelVi: "Động từ bị động",
        colorType: "verb",
        alternatives: [{ en: "is spoken", vi: "được nói" }]
      },
      {
        id: "cb1-13-3",
        chunkEn: "by my mom",
        chunkVi: "bởi mẹ tôi",
        grammarRole: "Agent Phrase",
        roleLabelVi: "Tác nhân thực hiện",
        colorType: "object",
        alternatives: [{ en: "worldwide", vi: "trên toàn cầu" }]
      }
    ]
  },
  {
    id: "b1-14",
    level: "B1",
    fullSentenceEn: "He said he was busy.",
    fullSentenceVi: "Anh ấy nói anh ấy bận.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Câu tường thuật lùi một thì so với câu gốc." },
      { label: "He said", content: "Mệnh đề dẫn lời nói gián tiếp." },
      { label: "he was busy", content: "Mệnh đề được tường thuật đã lùi thì (is -> was)." }
    ],
    chunks: [
      {
        id: "cb1-14-1",
        chunkEn: "He said",
        chunkVi: "Anh ấy nói rằng",
        grammarRole: "Reporting Clause",
        roleLabelVi: "Mệnh đề tường thuật",
        colorType: "subject",
        alternatives: [{ en: "She told me", vi: "Cô ấy bảo tôi" }]
      },
      {
        id: "cb1-14-2",
        chunkEn: "he was busy",
        chunkVi: "anh ấy bận",
        grammarRole: "Reported Clause",
        roleLabelVi: "Mệnh đề lùi thì",
        colorType: "verb",
        alternatives: [{ en: "she liked tea", vi: "cô ấy thích trà" }]
      }
    ]
  },
  {
    id: "b1-15",
    level: "B1",
    fullSentenceEn: "The man who called you is my uncle.",
    fullSentenceVi: "Người đàn ông gọi cho bạn là chú tôi.",
    detailedExplanation: [
      { label: "Cấu trúc tổng quát", content: "Mệnh đề quan hệ xác định dùng đại từ 'who'." },
      { label: "The man who called you", content: "Danh từ chỉ người + đại từ quan hệ 'who' làm chủ ngữ cho mệnh đề phụ." },
      { label: "is", content: "Động từ chính của câu." },
      { label: "my uncle", content: "Bổ ngữ chỉ mối quan hệ." }
    ],
    chunks: [
      {
        id: "cb1-15-1",
        chunkEn: "The man who called you",
        chunkVi: "Người đàn ông gọi cho bạn",
        grammarRole: "Subject + Relative Clause",
        roleLabelVi: "Chủ ngữ + Mệnh đề quan hệ",
        colorType: "subject",
        alternatives: [{ en: "The girl who lives here", vi: "Cô gái sống ở đây" }]
      },
      {
        id: "cb1-15-2",
        chunkEn: "is",
        chunkVi: "là",
        grammarRole: "Verb",
        roleLabelVi: "Động từ chính",
        colorType: "verb",
        alternatives: [{ en: "was", vi: "từng là" }]
      },
      {
        id: "cb1-15-3",
        chunkEn: "my uncle",
        chunkVi: "chú của tôi",
        grammarRole: "Complement",
        roleLabelVi: "Bổ ngữ",
        colorType: "object",
        alternatives: [{ en: "my teacher", vi: "giáo viên của tôi" }]
      }
    ]
  }
];