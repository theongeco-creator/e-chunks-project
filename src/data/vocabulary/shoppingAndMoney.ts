import type { VocabTopic } from "../types"; // hoặc trỏ đúng đường dẫn tới file types của ní

export const shoppingAndMoney: VocabTopic = {
  id: "shopping-and-money",
  number: "9",
  title: "Shopping & Money",
  emoji: "💳",
  vocabulary: [
    // Level A1
    {
      id: "sm-1",
      word: "Buy",
      phonetic: "/baɪ/",
      meaning: "Mua",
      example: "I want to buy a new phone.",
      exampleMeaning: "Tôi muốn mua một chiếc điện thoại mới.",
      level: "A1",
      type: "verb"
    },
    {
      id: "sm-2",
      word: "Shop",
      phonetic: "/ʃɒp/",
      meaning: "Cửa hàng, mua sắm",
      example: "She goes to the shop to buy some milk.",
      exampleMeaning: "Cô ấy đi ra cửa hàng để mua một ít sữa.",
      level: "A1",
      type: "noun"
    },
    {
      id: "sm-3",
      word: "Price",
      phonetic: "/praɪs/",
      meaning: "Giá cả",
      example: "What is the price of this shirt?",
      exampleMeaning: "Giá của chiếc áo sơ mi này là bao nhiêu?",
      level: "A1",
      type: "noun"
    },
    {
      id: "sm-4",
      word: "Money",
      phonetic: "/ˈmʌni/",
      meaning: "Tiền",
      example: "I don't have enough money today.",
      exampleMeaning: "Tôi không có đủ tiền hôm nay.",
      level: "A1",
      type: "noun"
    },
    {
      id: "sm-5",
      word: "Cheap",
      phonetic: "/tʃiːp/",
      meaning: "Rẻ",
      example: "These shoes are very cheap and nice.",
      exampleMeaning: "Đôi giày này rất rẻ và đẹp.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "sm-6",
      word: "Expensive",
      phonetic: "/ɪkˈspensɪv/",
      meaning: "Đắt đỏ",
      example: "That laptop is too expensive for me.",
      exampleMeaning: "Chiếc máy tính xách tay đó quá đắt đối với tôi.",
      level: "A1",
      type: "adjective"
    },
    {
      id: "sm-7",
      word: "Pay",
      phonetic: "/peɪ/",
      meaning: "Thanh toán, trả tiền",
      example: "How would you like to pay, cash or card?",
      exampleMeaning: "Bạn muốn thanh toán bằng cách nào, tiền mặt hay thẻ?",
      level: "A1",
      type: "verb"
    },
    {
      id: "sm-8",
      word: "Sell",
      phonetic: "/sel/",
      meaning: "Bán",
      example: "They sell fresh fruit at the market.",
      exampleMeaning: "Họ bán trái cây tươi ở chợ.",
      level: "A1",
      type: "verb"
    },

    // Level A2
    {
      id: "sm-9",
      word: "Customer",
      phonetic: "/ˈkʌstəmə(r)/",
      meaning: "Khách hàng",
      example: "The shop assistant is helping a customer.",
      exampleMeaning: "Nhân viên cửa hàng đang giúp đỡ một khách hàng.",
      level: "A2",
      type: "noun"
    },
    {
      id: "sm-10",
      word: "Discount",
      phonetic: "/ˈdɪskaʊnt/",
      meaning: "Giảm giá, chiết khấu",
      example: "There is a twenty percent discount on all items today.",
      exampleMeaning: "Hôm nay có giảm giá hai mươi phần trăm cho tất cả các mặt hàng.",
      level: "A2",
      type: "noun"
    },
    {
      id: "sm-11",
      word: "Receipt",
      phonetic: "/rɪˈsiːt/",
      meaning: "Biên lai, hóa đơn mua hàng",
      example: "Please keep your receipt in case you want to return the item.",
      exampleMeaning: "Vui lòng giữ lại biên lai trong trường hợp bạn muốn trả lại món hàng.",
      level: "A2",
      type: "noun"
    },
    {
      id: "sm-12",
      word: "Market",
      phonetic: "/ˈmɑːkɪt/",
      meaning: "Chợ, thị trường",
      example: "My mother buys vegetables at the local market every morning.",
      exampleMeaning: "Mẹ tôi mua rau ở chợ địa phương vào mỗi buổi sáng.",
      level: "A2",
      type: "noun"
    },
    {
      id: "sm-13",
      word: "Affordable",
      phonetic: "/əˈfɔːdəbl/",
      meaning: "Giá cả phải chăng, có thể chi trả được",
      example: "They offer good quality products at affordable prices.",
      exampleMeaning: "Họ cung cấp các sản phẩm chất lượng tốt với giá cả phải chăng.",
      level: "A2",
      type: "adjective"
    },
    {
      id: "sm-14",
      word: "Cash",
      phonetic: "/kæʃ/",
      meaning: "Tiền mặt",
      example: "I don't have any cash, can I pay by credit card?",
      exampleMeaning: "Tôi không có tiền mặt, tôi có thể trả bằng thẻ tín dụng được không?",
      level: "A2",
      type: "noun"
    },

    // Level B1
    {
      id: "sm-15",
      word: "Budget",
      phonetic: "/ˈbʌdʒɪt/",
      meaning: "Ngân sách",
      example: "We need to plan our monthly budget carefully before shopping.",
      exampleMeaning: "Chúng ta cần lên kế hoạch ngân sách hàng tháng cẩn thận trước khi đi mua sắm.",
      level: "B1",
      type: "noun"
    },
    {
      id: "sm-16",
      word: "Consumer",
      phonetic: "/kənˈsjuːmə(r)/",
      meaning: "Người tiêu dùng",
      example: "Consumer rights protect people from buying unsafe products.",
      exampleMeaning: "Quyền lợi người tiêu dùng bảo vệ mọi người khỏi việc mua phải các sản phẩm không an toàn.",
      level: "B1",
      type: "noun"
    },
    {
      id: "sm-17",
      word: "Refund",
      phonetic: "/ˈriːfʌnd/",
      meaning: "Hoàn tiền",
      example: "She asked the shop for a refund because the dress was torn.",
      exampleMeaning: "Cô ấy đã yêu cầu cửa hàng hoàn tiền vì chiếc váy bị rách.",
      level: "B1",
      type: "noun"
    },
    {
      id: "sm-18",
      word: "Transaction",
      phonetic: "/trænˈzækʃn/",
      meaning: "Giao dịch (thương mại)",
      example: "Online banking makes financial transactions much easier.",
      exampleMeaning: "Ngân hàng trực tuyến giúp các giao dịch tài chính trở nên dễ dàng hơn rất nhiều.",
      level: "B1",
      type: "noun"
    },
    {
      id: "sm-19",
      word: "Bargain",
      phonetic: "/ˈbɑːɡən/",
      meaning: "Món hời, mặc cả",
      example: "This winter coat was a real bargain at half price.",
      exampleMeaning: "Chiếc áo khoác mùa đông này thực sự là một món hời với nửa giá.",
      level: "B1",
      type: "noun"
    }
  ],
};