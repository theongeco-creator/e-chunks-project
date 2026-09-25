import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

const sentences: LessonSentence[] = [
  {
    id: "l3-s1",
    ipa: "/maɪ ˈfeɪvərɪt ˈkʌlər ɪz bluː/",
    en: "My favorite color is blue.",
    vi: "Màu sắc yêu thích của tôi là màu xanh dương.",
    explanation: [
      {
        label: "Cấu trúc tổng quát",
        content: "Chủ ngữ (S) + to be + Tính từ/Danh từ chỉ màu sắc để nêu màu yêu thích."
      },
      {
        label: "My favorite color",
        content: "Cụm danh từ làm chủ ngữ, dùng tính từ sở hữu 'My' cộng với 'favorite color'."
      },
      {
        label: "is blue",
        content: "Động từ 'is' kết hợp với tính từ màu sắc 'blue' làm vị ngữ."
      }
    ],
    chunks: [
      c("My favorite color", "màu yêu thích của tôi", "/maɪ ˈfeɪvərɪt ˈkʌlər/", "noun", "chủ ngữ", "Dùng tính từ sở hữu đứng trước danh từ."),
      c("is", "là", "/ɪz/", "verb", "động từ to be", "Chia ở số ít tương ứng với chủ ngữ 'color'."),
      c("blue", "xanh dương", "/bluː/", "adjective", "bổ ngữ", "Chỉ màu sắc.")
    ]
  },
  {
    id: "l3-s2",
    ipa: "/aɪ hæv ə bluː bæɡ ənd ə waɪt ʃɜːrt/",
    en: "I have a blue bag and a white shirt.",
    vi: "Tôi có một chiếc túi xanh dương và một chiếc áo trắng.",
    explanation: [
      {
        label: "Cấu trúc tổng quát",
        content: "S + have/has + Cụm danh từ 1 + and + Cụm danh từ 2 để diễn tả sở hữu nhiều vật dụng."
      },
      {
        label: "I have",
        content: "Chủ ngữ 'I' đi với động từ chỉ sự sở hữu 'have'."
      },
      {
        label: "a blue bag",
        content: "Cụm danh từ chỉ vật dụng với màu sắc bổ nghĩa đứng trước danh từ chính."
      },
      {
        label: "and",
        content: "Liên từ nối hai cụm danh từ cùng chức năng."
      },
      {
        label: "a white shirt",
        content: "Cụm danh từ thứ hai chỉ trang phục."
      }
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "chủ ngữ", "Đại từ nhân xưng ngôi thứ nhất số ít."),
      c("have", "có", "/hæv/", "verb", "động từ chính", "Diễn tả sự sở hữu."),
      c("a blue bag", "một chiếc túi xanh dương", "/ə bluː bæɡ/", "noun", "tân ngữ", "Mạo từ 'a' đi với danh từ đếm được số ít 'bag'."),
      c("and", "và", "/ænd/", "connector", "liên từ", "Nối hai vế hoặc hai cụm từ tương đương."),
      c("a white shirt", "một chiếc áo trắng", "/ə waɪt ʃɜːrt/", "noun", "tân ngữ", "Tính từ 'white' đứng trước danh từ 'shirt'.")
    ]
  },
  {
    id: "l3-s3",
    ipa: "/maɪ ʃuːz ɑːr blæk/",
    en: "My shoes are black.",
    vi: "Giày của tôi có màu đen.",
    explanation: [
      {
        label: "Cấu trúc tổng quát",
        content: "Chủ ngữ số nhiều + are + Tính từ chỉ màu sắc."
      },
      {
        label: "My shoes",
        content: "Cụm danh từ số nhiều làm chủ ngữ ('shoes' luôn ở số ít/số nhiều đi với 'are')."
      },
      {
        label: "are black",
        content: "Động từ 'are' đi với tính từ 'black' miêu tả đặc điểm của giày."
      }
    ],
    chunks: [
      c("My shoes", "giày của tôi", "/maɪ ʃuːz/", "noun", "chủ ngữ", "Danh từ số nhiều nên dùng động từ to be là 'are'."),
      c("are", "thì / là", "/ɑːr/", "verb", "động từ to be", "Chia ở số nhiều."),
      c("black", "màu đen", "/blæk/", "adjective", "bổ ngữ", "Tính từ chỉ màu sắc.")
    ]
  },
  {
    id: "l3-s4",
    ipa: "/aɪ laɪk red ˈflaʊərz tuː/",
    en: "I like red flowers, too.",
    vi: "Tôi cũng thích những bông hoa màu đỏ.",
    explanation: [
      {
        label: "Cấu trúc tổng quát",
        content: "S + like + Cụm danh từ + too (để bổ sung ý đồng tình/cũng vậy ở cuối câu)."
      },
      {
        label: "I like",
        content: "Chủ ngữ 'I' kết hợp với động từ chỉ sở thích 'like'."
      },
      {
        label: "red flowers",
        content: "Cụm danh từ số nhiều không đếm được/chung chung chỉ loài hoa màu đỏ."
      },
      {
        label: "too",
        content: "Trạng từ đứng cuối câu mang nghĩa 'cũng vậy'."
      }
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "chủ ngữ", "Đại từ nhân xưng ngôi thứ nhất số ít."),
      c("like", "thích", "/laɪk/", "verb", "động từ chính", "Diễn tả sở thích."),
      c("red flowers", "những bông hoa màu đỏ", "/red ˈflaʊərz/", "noun", "tân ngữ", "Tính từ 'red' bổ nghĩa cho danh từ số nhiều 'flowers'."),
      c("too", "cũng", "/tuː/", "adverb", "trạng từ", "Luôn đứng ở cuối câu khẳng định khi muốn nói 'cũng thế'.")
    ]
  },
  {
    id: "l3-s5",
    ipa: "/aɪ θɪŋk ðiːz ˈkʌlərz ɑːr ˈbjuːtɪfl/",
    en: "I think these colors are beautiful.",
    vi: "Tôi nghĩ những màu sắc này rất đẹp.",
    explanation: [
      {
        label: "Cấu trúc tổng quát",
        content: "S + think + (that) + Mệnh đề phụ (S + be + Adjective) để nêu quan điểm."
      },
      {
        label: "I think",
        content: "Chủ ngữ 'I' với động từ diễn tả suy nghĩ, quan điểm 'think'."
      },
      {
        label: "these colors",
        content: "Cụm danh từ chỉ định số nhiều làm chủ ngữ cho mệnh đề sau."
      },
      {
        label: "are beautiful",
        content: "Vị ngữ gồm động từ 'are' và tính từ chỉ vẻ đẹp 'beautiful'."
      }
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "chủ ngữ", "Đại từ nhân xưng ngôi thứ nhất số ít."),
      c("think", "nghĩ rằng", "/θɪŋk/", "verb", "động từ chính", "Dùng để bày tỏ ý kiến, quan điểm cá nhân."),
      c("these colors", "những màu sắc này", "/ðiːz ˈkʌlərz/", "noun", "chủ ngữ phụ", "Đại từ chỉ định 'these' đi với danh từ số nhiều 'colors'."),
      c("are", "thì", "/ɑːr/", "verb", "động từ to be", "Chia ở số nhiều theo 'colors'."),
      c("beautiful", "đẹp", "/ˈbjuːtɪfl/", "adjective", "bổ ngữ", "Tính từ chỉ đặc điểm, vẻ đẹp.")
    ]
  }
];

export const lesson03Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "blue",
      meaning: "xanh dương",
      example: "My favorite color is blue.",
      alternatives: ["red", "green", "yellow", "white", "black"]
    },
    {
      term: "bag",
      meaning: "cái túi",
      example: "I have a blue bag.",
      alternatives: ["shirt", "shoes", "car", "book", "pen"]
    },
    {
      term: "flowers",
      meaning: "những bông hoa",
      example: "I like red flowers.",
      alternatives: ["birds", "trees", "cats", "dogs", "houses"]
    },
    {
      term: "beautiful",
      meaning: "đẹp",
      example: "I think these colors are beautiful.",
      alternatives: ["nice", "great", "lovely", "cool", "bright"]
    }
  ]
};

export const lesson03Sentences = sentences;