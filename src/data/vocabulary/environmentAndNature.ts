import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const environmentAndNature: VocabTopic = {
  id: "environment-and-nature",
  number: "20",
  title: "Môi trường & Thiên nhiên \n (Environment & Nature)",
  emoji: "🌳",
  vocabulary: [
    // Level A1
    {
      id: "en-1",
      word: "Tree",
      phonetic: "/triː/",
      meaning: "Cây, cây xanh",
      example: "They planted a young tree in the school garden.",
      exampleMeaning: "Họ đã trồng một cây non trong vườn trường.",
      level: "A1",
      type: "noun"
    },
    {
      id: "en-2",
      word: "Flower",
      phonetic: "/ˈflaʊə(r)/",
      meaning: "Bông hoa",
      example: "She picked a bright yellow flower from the field.",
      exampleMeaning: "Cô ấy đã hái một bông hoa màu vàng tươi từ cánh đồng.",
      level: "A1",
      type: "noun"
    },
    {
      id: "en-3",
      word: "Animal",
      phonetic: "/ˈænɪml/",
      meaning: "Động vật, thú vật",
      example: "Monsters and pets are all kinds of animals.",
      exampleMeaning: "Động vật hoang dã và thú cưng đều là các loài động vật.",
      level: "A1",
      type: "noun"
    },
    {
      id: "en-4",
      word: "Bird",
      phonetic: "/bɜːd/",
      meaning: "Con chim",
      example: "A small bird is singing on the tree branch.",
      exampleMeaning: "Một chú chim nhỏ đang hót trên cành cây.",
      level: "A1",
      type: "noun"
    },
    {
      id: "en-5",
      word: "Water",
      phonetic: "/ˈwɔːtə(r)/",
      meaning: "Nước",
      example: "Clean water is essential for all living creatures.",
      exampleMeaning: "Nước sạch là yếu tố thiết yếu cho mọi sinh vật sống.",
      level: "A1",
      type: "noun"
    },
    {
      id: "en-6",
      word: "Green",
      phonetic: "/ɡriːn/",
      meaning: "Màu xanh lá cây, xanh tươi",
      example: "The fields look green and fresh after the rain.",
      exampleMeaning: "Những cánh đồng trông xanh tươi và mát mẻ sau cơn mưa.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "en-7",
      word: "Plant",
      phonetic: "/plɑːnt/",
      meaning: "Thực vật, cây cối, trồng cây",
      example: "We should plant more trees to protect nature.",
      exampleMeaning: "Chúng ta nên trồng thêm nhiều cây xanh để bảo vệ thiên nhiên.",
      level: "A1",
      type: "verb"
    },
    {
      id: "en-8",
      word: "Sky",
      phonetic: "/skaɪ/",
      meaning: "Bầu trời",
      example: "The evening sky is painted with orange and pink colors.",
      exampleMeaning: "Bầu trời buổi chiều được tô điểm bởi các sắc màu cam và hồng.",
      level: "A1",
      type: "noun"
    },

    // Level A2
    {
      id: "en-9",
      word: "Wildlife",
      phonetic: "/ˈwaɪldlaɪf/",
      meaning: "Đời sống hoang dã, động thực vật hoang dã",
      example: "National parks are great places to protect local wildlife.",
      exampleMeaning: "Các vườn quốc gia là những nơi tuyệt vời để bảo vệ đời sống hoang dã địa phương.",
      level: "A2",
      type: "noun"
    },
    {
      id: "en-10",
      word: "Pollution",
      phonetic: "/pəˈluːʃn/",
      meaning: "Sự ô nhiễm",
      example: "Air pollution is a major problem in big modern cities.",
      exampleMeaning: "Ô nhiễm không khí là một vấn đề lớn ở các thành phố lớn hiện đại.",
      level: "A2",
      type: "noun"
    },
    {
      id: "en-11",
      word: "Recycle",
      phonetic: "/ˌriːˈsaɪkl/",
      meaning: "Tái chế",
      example: "People should separate paper and plastic waste to recycle.",
      exampleMeaning: "Mọi người nên phân loại rác giấy và nhựa để tái chế.",
      level: "A2",
      type: "verb"
    },
    {
      id: "en-12",
      word: "Forest",
      phonetic: "/ˈfɒrɪst/",
      meaning: "Rừng",
      example: "Cutting down trees destroys natural forest habitats.",
      exampleMeaning: "Việc chặt phá cây cối tàn phá môi trường sống tự nhiên trong rừng.",
      level: "A2",
      type: "noun"
    },
    {
      id: "en-13",
      word: "Clean",
      phonetic: "/kliːn/",
      meaning: "Sạch sẽ, trong lành",
      example: "We organized a campaign to keep the beach clean.",
      exampleMeaning: "Chúng tôi đã tổ chức một chiến dịch giữ cho bãi biển sạch sẽ.",
      level: "A2",
      type: "adjective"
    },
    {
      id: "en-14",
      word: "Energy",
      phonetic: "/ˈenədʒi/",
      meaning: "Năng lượng",
      example: "Solar power is a clean and renewable source of energy.",
      exampleMeaning: "Năng lượng mặt trời là một nguồn năng lượng sạch và có thể tái tạo.",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "en-15",
      word: "Conservation",
      phonetic: "/ˌkɒnsəˈveɪʃn/",
      meaning: "Sự bảo tồn (thiên nhiên/tài nguyên)",
      example: "Wildlife conservation plays a vital role in keeping ecosystems balanced.",
      exampleMeaning: "Bảo tồn động vật hoang dã đóng vai trò quan trọng trong việc giữ cân bằng hệ sinh thái.",
      level: "B1",
      type: "noun"
    },
    {
      id: "en-16",
      word: "Eco-friendly",
      phonetic: "/ˌiːkəʊ ˈfrendli/",
      meaning: "Thân thiện với môi trường",
      example: "More shoppers are choosing eco-friendly products nowadays.",
      exampleMeaning: "Ngày nay ngày càng có nhiều người mua sắm lựa chọn các sản phẩm thân thiện với môi trường.",
      level: "B1",
      type: "adjective"
    },
    {
      id: "en-17",
      word: "Biodiversity",
      phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/",
      meaning: "Đa dạng sinh học",
      example: "Rainforests possess an incredible level of rich biodiversity.",
      exampleMeaning: "Các khu rừng mưa sở hữu mức độ đa dạng sinh học vô cùng phong phú.",
      level: "B1",
      type: "noun"
    },
    {
      id: "en-18",
      word: "Sustainable",
      phonetic: "/səˈsteɪnəbl/",
      meaning: "Bền vững",
      example: "Governments worldwide are promoting sustainable development goals.",
      exampleMeaning: "Các chính phủ trên toàn thế giới đang thúc đẩy các mục tiêu phát triển bền vững.",
      level: "B1",
      type: "adjective"
    },
    {
      id: "en-19",
      word: "Habitat",
      phonetic: "/ˈhæbɪtæt/",
      meaning: "Môi trường sống tự nhiên (của động thực vật)",
      example: "Deforestation destroys the natural habitat of many rare species.",
      exampleMeaning: "Nạn phá rừng tiêu hủy môi trường sống tự nhiên của nhiều loài quý hiếm.",
      level: "B1",
      type: "noun"
    }
  ],
};