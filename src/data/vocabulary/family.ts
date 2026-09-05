import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const family: VocabTopic = {
  id: "family",
  number: "2",
  title: "Gia đình & Bạn bè \n (Family & Friends)",
  emoji: "👪",
  vocabulary: [
    // Level A1
    {
      id: "fam-1",
      word: "Mother",
      phonetic: "/ˈmʌðə(r)/",
      meaning: "Mẹ",
      example: "My mother is a teacher.",
      exampleMeaning: "Mẹ của tôi là một giáo viên.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fam-2",
      word: "Father",
      phonetic: "/ˈfɑːðə(r)/",
      meaning: "Bố, cha",
      example: "My father works in an office.",
      exampleMeaning: "Bố của tôi làm việc trong một văn phòng.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fam-3",
      word: "Sister",
      phonetic: "/ˈsɪstə(r)/",
      meaning: "Chị gái / Em gái",
      example: "I have two younger sisters.",
      exampleMeaning: "Tôi có hai người em gái.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fam-4",
      word: "Brother",
      phonetic: "/ˈbrʌðə(r)/",
      meaning: "Anh trai / Em trai",
      example: "My brother plays football very well.",
      exampleMeaning: "Anh trai của tôi đá bóng rất giỏi.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fam-5",
      word: "Baby",
      phonetic: "/ˈbeɪbi/",
      meaning: "Em bé",
      example: "The baby is sleeping now.",
      exampleMeaning: "Em bé đang ngủ bây giờ.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fam-6",
      word: "Son",
      phonetic: "/sʌn/",
      meaning: "Con trai",
      example: "They have one son and one daughter.",
      exampleMeaning: "Họ có một con trai và một con gái.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fam-7",
      word: "Daughter",
      phonetic: "/ˈdɔːtə(r)/",
      meaning: "Con gái",
      example: "Their daughter loves reading books.",
      exampleMeaning: "Con gái của họ rất thích đọc sách.",
      level: "A1",
      type: "noun"
    },
    {
      id: "fam-8",
      word: "Family",
      phonetic: "/ˈfæməli/",
      meaning: "Gia đình",
      example: "I love my family so much.",
      exampleMeaning: "Tôi rất yêu gia đình của mình.",
      level: "A1",
      type: "noun"
    },

    // Level A2
    {
      id: "fam-9",
      word: "Grandfather",
      phonetic: "/ˈɡrænfɑːðə(r)/",
      meaning: "Ông nội / Ông ngoại",
      example: "My grandfather tells great stories.",
      exampleMeaning: "Ông của tôi kể rất nhiều câu chuyện hay.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fam-10",
      word: "Grandmother",
      phonetic: "/ˈɡrænmʌðə(r)/",
      meaning: "Bà nội / Bà ngoại",
      example: "My grandmother bakes delicious cakes.",
      exampleMeaning: "Bà của tôi nướng những chiếc bánh rất ngon.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fam-11",
      word: "Parents",
      phonetic: "/ˈpeərənts/",
      meaning: "Cha mẹ",
      example: "My parents are very supportive.",
      exampleMeaning: "Cha mẹ tôi rất ủng hộ tôi.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fam-12",
      word: "Uncle",
      phonetic: "/ˈʌŋkl/",
      meaning: "Chú / Bác / Cậu / Dượng",
      example: "My uncle lives in London.",
      exampleMeaning: "Chú của tôi sống ở Luân Đôn.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fam-13",
      word: "Aunt",
      phonetic: "/ɑːnt/",
      meaning: "Cô / Dì / Bác gái",
      example: "Aunt Mary is visiting us this weekend.",
      exampleMeaning: "Cô Mary sẽ đến thăm chúng tôi vào cuối tuần này.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fam-14",
      word: "Cousin",
      phonetic: "/ˈkʌzn/",
      meaning: "Anh chị em họ",
      example: "I often play games with my cousins.",
      exampleMeaning: "Tôi thường chơi trò chơi với các anh chị em họ của mình.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fam-15",
      word: "Husband",
      phonetic: "/ˈhʌzbənd/",
      meaning: "Chồng",
      example: "Her husband is a software engineer.",
      exampleMeaning: "Chồng cô ấy là một kỹ sư phần mềm.",
      level: "A2",
      type: "noun"
    },
    {
      id: "fam-16",
      word: "Wife",
      phonetic: "/waɪf/",
      meaning: "Vợ",
      example: "He bought a gift for his wife.",
      exampleMeaning: "Anh ấy đã mua một món quà cho người vợ của mình.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "fam-17",
      word: "Relative",
      phonetic: "/ˈrelətɪv/",
      meaning: "Họ hàng, người thân",
      example: "All our relatives gathered for the wedding.",
      exampleMeaning: "Tất cả họ hàng của chúng tôi đã tề tựu trong đám cưới.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fam-18",
      word: "Generation",
      phonetic: "/ˌdʒenəˈreɪʃn/",
      meaning: "Thế hệ",
      example: "There is a gap in communication between generations.",
      exampleMeaning: "Có một khoảng cách trong giao tiếp giữa các thế hệ.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fam-19",
      word: "Single parent",
      phonetic: "/ˈsɪŋɡl ˈpeərənt/",
      meaning: "Cha/mẹ đơn thân",
      example: "She raised her children well as a single parent.",
      exampleMeaning: "Cô ấy đã nuôi dạy con cái rất tốt với tư cách là một mẹ đơn thân.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fam-20",
      word: "Adopt",
      phonetic: "/əˈdɒpt/",
      meaning: "Nhận nuôi",
      example: "They decided to adopt a child.",
      exampleMeaning: "Họ quyết định nhận nuôi một đứa trẻ.",
      level: "B1",
      type: "verb"
    },
    {
      id: "fam-21",
      word: "Fiancé",
      phonetic: "/fiˈɒnseɪ/",
      meaning: "Vị hôn phu (chồng chưa cưới)",
      example: "She is introducing her fiancé to her family.",
      exampleMeaning: "Cô ấy đang giới thiệu vị hôn phu của mình với gia đình.",
      level: "B1",
      type: "noun"
    },
    {
      id: "fam-22",
      word: "Upbringing",
      phonetic: "/ˈʌpbrɪŋɪŋ/",
      meaning: "Sự giáo dục, nuôi nấng (từ nhỏ)",
      example: "He had a strict upbringing in the countryside.",
      exampleMeaning: "Anh ấy có một nền giáo dục nghiêm khắc ở vùng nông thôn.",
      level: "B1",
      type: "noun"
    }
  ],
};