import type { Chunk, FillBlankQuestion, ReadingSegment } from "../types";

const paragraph =
  "My name is Anna, and I live with my family in a small house. I usually get up at seven o’clock and go to work by bus. I like simple food, and I usually drink water or tea with my meals. My favorite clothes are jeans and T-shirts because they are comfortable. There are many shops, restaurants, and parks in my town. I like autumn because the weather is cool and the trees look beautiful. In my free time, I enjoy listening to music, watching movies, and playing sports. I studied English at school, and now I use English for work and everyday life. I work in an office, and I usually use a computer and a phone every day. I like traveling to new places, and I usually check the time and timetable before I travel. My home has a living room, a kitchen, two bedrooms, and some simple furniture. When I go shopping or eat at a restaurant, I usually check the price before I buy something. I like holidays and celebrations because I can spend time with my family and friends. When I meet new people, I usually say hello, ask simple questions, and talk about hobbies, work, or the weather. I try to stay safe, take care of my health, and use technology in a simple and useful way every day.";

const translation =
"Tên tôi là Anna, và tôi sống cùng gia đình trong một ngôi nhà nhỏ. Tôi thường thức dậy lúc bảy giờ và đi làm bằng xe buýt. Tôi thích những món ăn đơn giản và thường uống nước hoặc trà trong bữa ăn. Quần áo yêu thích của tôi là quần jean và áo phông vì chúng rất thoải mái. Có nhiều cửa hàng, nhà hàng và công viên trong thị trấn của tôi. Tôi thích mùa thu vì thời tiết mát mẻ và cây cối trông rất đẹp. Trong thời gian rảnh, tôi thích nghe nhạc, xem phim và chơi thể thao. Tôi đã học tiếng Anh ở trường, và bây giờ tôi sử dụng tiếng Anh cho công việc và cuộc sống hằng ngày. Tôi làm việc trong một văn phòng và thường sử dụng máy tính và điện thoại mỗi ngày. Tôi thích đi du lịch đến những nơi mới, và thường kiểm tra giờ giấc cũng như lịch trình trước khi đi. Nhà tôi có một phòng khách, một nhà bếp, hai phòng ngủ và một số đồ nội thất đơn giản. Khi đi mua sắm hoặc ăn ở nhà hàng, tôi thường kiểm tra giá trước khi mua thứ gì đó. Tôi thích những ngày lễ và các dịp kỷ niệm vì tôi có thể dành thời gian bên gia đình và bạn bè. Khi gặp những người mới, tôi thường chào hỏi, đặt những câu hỏi đơn giản và nói về sở thích, công việc hoặc thời tiết. Tôi cố gắng giữ an toàn, chăm sóc sức khỏe và sử dụng công nghệ một cách đơn giản và hữu ích mỗi ngày.";
const readingSegments: ReadingSegment[] = [
  { text: "My name is Anna, and I " },
  { text: " " },
  { text: "live", type: "verb" },
  { text: " " },
  { text: "with my family", type: "preposition" },
  { text: " " },
  { text: "in a small house", type: "preposition" },
  { text: " " },
  { text: ". I " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "get up", type: "verb" },
  { text: " " },
  { text: "at seven o’clock", type: "time" },
  { text: " " },
  { text: " and " },
  { text: "go to work", type: "verb" },
  { text: " " },
  { text: "by bus", type: "preposition" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "like" , type: "verb" },
  { text: " " },
  { text: "simple food" , type: "noun" },
  { text: " " },
  { text: ", and I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "drink", type: "verb" },
  { text: " " },
  { text: "water or tea", type: "noun" },
  { text: " " },
  { text: "with my meals", type: "preposition" },
  { text: " " },
  { text: ". " },
  { text: "My favorite clothes", type: "noun" },
  { text: " " },
  { text: "are", type: "verb" },
  { text: " " },
  { text: "jeans and T-shirts", type: "noun" },
  { text: " " },
  { text: "because they are comfortable", type: "reason" },
  { text: " . " },
  { text: "There are" , type: "verb" },
  { text: " " },
  { text: "many shops, restaurants, and parks" , type: "noun" },
  { text: " " },
  { text: "in my town" , type: "preposition" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "like" , type: "verb" },
  { text: " " },
  { text: "autumn", type: "noun"  },
  { text: " " },
  { text: "because", type: "reason" },
  { text: " " },
  { text: "the weather is cool" , type: "reason" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "the trees look beautiful.", type: "reason"  },
  { text: " . " },
  { text: "In my free time" , type: "preposition" },
  { text: " " },
  { text: ", I " },
  { text: " " },
  { text: "enjoy", type: "verb" },
  { text: " " },
  { text: "listening to music, watching movies, and playing sports", type: "noun" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "studied", type: "verb" },
  { text: " " },
  { text: "English", type: "noun" },
  { text: " " },
  { text: "at school", type: "preposition" },
  { text: " " },
  { text: ", and" },
  { text: " " },
  { text: "now", type: "time"  },
  { text: " " },
  { text: "I" },
  { text: " " },
  { text: "use", type: "verb" },
  { text: " " },
  { text: "English", type: "noun" },
  { text: " " },
  { text: "for work and everyday life", type: "reason" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "work" , type: "verb" },
  { text: " " },
  { text: "in an office" , type: "preposition" },
  { text: " " },
  { text: ", and I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "use", type: "verb" },
  { text: " " },
  { text: "a computer and a phone", type: "noun" },
  { text: " " },
  { text: "every day", type: "time" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "like traveling to" , type: "verb" },
  { text: " " },
  { text: "new places" , type: "noun" },
  { text: " " },
  { text: ", and I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "check", type: "verb" },
  { text: " " },
  { text: "the time and timetable", type: "noun" },
  { text: " " },
  { text: "before I travel", type: "reason" },
  { text: " " },
  { text: ". My home" },
  { text: " " },
  { text: "has"   },
  { text: " " },
  { text: "a living room, a kitchen, two bedrooms, and some simple furniture" , type: "noun" },
  { text: " " },
  { text: ". When I" },
  { text: " " },
  { text: "go shopping", type: "verb"  },
  { text: " " },
  { text: "or" },
  { text: " " },
  { text: "eat" , type: "verb" },
  { text: " " },
  { text: "at a restaurant" , type: "preposition" },
  { text: " " },
  { text: ", I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "check", type: "verb" },
  { text: " " },
  { text: "the price", type: "noun" },
  { text: " " },
  { text: "before I buy something", type: "reason" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "like", type: "verb"  },
  { text: " " },
  { text: "holidays and celebrations", type: "noun"  },
  { text: " " },
  { text: "because", type: "reason" },
  { text: " I " },
  { text: "can spend time", type: "verb" },
  { text: " " },
  { text: "with my family and friends", type: "preposition" },
  { text: " " },
  { text: ". When I" },
  { text: " " },
  { text: "meet" , type: "verb" },
  { text: " " },
  { text: "new people" , type: "noun" },
  { text: " " },
  { text: ", I " },
  { text: " " },
  { text: "usually", type: "time" },
  { text: " " },
  { text: "say hello,", type: "verb" },
  { text: " " },
  { text: "ask simple questions,", type: "verb" },
  { text: " " },
  { text: "and" },
  { text: " " },
  { text: "talk about hobbies, work, or the weather", type: "verb" },
  { text: " " },
  { text: ". I" },
  { text: " " },
  { text: "try to stay safe" , type: "verb" },
  { text: " , " },
  { text: "take care of my health" , type: "verb" },
  { text: " and " },
  { text: " " },
  { text: "use technology" , type: "verb" },
  { text: " " },
  { text: "in a simple and useful way", type: "preposition"  },
  { text: " " },
  { text: "every day." , type: "time" },
  { text: " " },
];

const chunks: Chunk[] = [
    // Verb chunks (green)
  {
    phrase: "live with my family in a small house",
    pronunciation: "/lɪv wɪð maɪ ˈfæməli ɪn ə smɔːl haʊs/",
    meaning: "Sống cùng gia đình trong một ngôi nhà nhỏ",
    context: "Dùng để giới thiệu hoàn cảnh sống cá nhân.",
    type: "verb",
  },
  {
    phrase: "go to work by bus",
    pronunciation: "/ɡəʊ tuː wɜːk baɪ bʌs/",
    meaning: "Đi làm bằng xe buýt",
    context: "Dùng để chỉ phương tiện di chuyển hằng ngày.",
    type: "verb",
  },
  {
    phrase: "usually drink water or tea with my meals",
    pronunciation: "/ˈjuːʒuəli drɪŋk ˈwɔːtər ɔːr tiː wɪð maɪ miːlz/",
    meaning: "Thường uống nước lọc hoặc trà trong các bữa ăn",
    context: "Dùng để nói về thói quen ăn uống lành mạnh.",
    type: "verb",
  },
  {
    phrase: "enjoy listening to music, watching movies, and playing sports",
    pronunciation: "/ɪnˈdʒɔɪ ˈlɪsnɪŋ tuː ˈmjuːzɪk, ˈwɒtʃɪŋ ˈmuːviːz, ænd ˈpleɪɪŋ spɔːrts/",
    meaning: "Thích nghe nhạc, xem phim và chơi thể thao",
    context: "Dùng để tổng kết các sở thích giải trí đa dạng.",
    type: "verb",
  },
  {
    phrase: "use English for work and everyday life",
    pronunciation: "/juːz ˈɪŋɡlɪʃ fɔːr wɜːk ænd ˈevrideɪ laɪf/",
    meaning: "Sử dụng tiếng Anh cho công việc và cuộc sống hằng ngày",
    context: "Dùng để nhấn mạnh vai trò thực tế của ngoại ngữ.",
    type: "verb",
  },
  {
    phrase: "usually use a computer and a phone every day",
    pronunciation: "/ˈjuːʒuəli juːz ə kəmˈpjuːtər ænd ə fəʊn ˈevri deɪ/",
    meaning: "Thường sử dụng máy tính và điện thoại mỗi ngày",
    context: "Dùng để nói về các công cụ làm việc và liên lạc phổ biến.",
    type: "verb",
  },
  {
    phrase: "usually check the time and timetable before I travel",
    pronunciation: "/ˈjuːʒuəli tʃek ðə taɪm ænd ˈtaɪmteɪbl bɪˈfɔːr aɪ ˈtrævl/",
    meaning: "Thường kiểm tra thời gian và lịch trình trước khi đi du lịch",
    context: "Dùng để chỉ thói quen chuẩn bị kỹ càng khi di chuyển xa.",
    type: "verb",
  },
  {
    phrase: "usually check the price before I buy something",
    pronunciation: "/ˈjuːʒuəli tʃek ðə praɪs bɪˈfɔːr aɪ baɪ ˈsʌmθɪŋ/",
    meaning: "Thường kiểm tra giá cả trước khi mua món gì đó",
    context: "Dùng để chỉ thói quen mua sắm thông minh, tiết kiệm.",
    type: "verb",
  },
  {
    phrase: "can spend time with my family and friends",
    pronunciation: "/kæn spend taɪm wɪð maɪ ˈfæməli ænd frendz/",
    meaning: "Có thể dành thời gian bên gia đình và bạn bè",
    context: "Dùng để nêu ý nghĩa cốt lõi của các dịp lễ hội.",
    type: "verb",
  },
  {
    phrase: "usually say hello, ask simple questions, and talk about hobbies, work, or the weather",
    pronunciation: "/ˈjuːʒuəli seɪ həˈləʊ, ɑːsk ˈsɪmpl ˈkwestʃnz, ænd tɔːk əˈbaʊt ˈhɒbiz, wɜːk, ɔːr ðə ˈweðər/",
    meaning: "Thường chào hỏi, đặt câu hỏi đơn giản và trò chuyện về sở thích, công việc hoặc thời tiết",
    context: "Dùng để tóm tắt các kỹ năng giao tiếp xã hội cơ bản.",
    type: "verb",
  },
    // Verb chunks (green)
{
  phrase: "at seven o’clock",
  pronunciation: "/æt ˈsevən əˈklɒk/",
  meaning: "vào lúc bảy giờ",
  context: "Dùng AT trước một thời điểm cụ thể để nói một hành động xảy ra lúc mấy giờ.",
  type: "time",
},
{
  phrase: "now",
  pronunciation: "/naʊ/",
  meaning: "bây giờ",
  context: "Dùng NOW để nói về thời điểm hiện tại.",
  type: "time",
},
{
  phrase: "every day",
  pronunciation: "/ˈevri deɪ/",
  meaning: "mỗi ngày",
  context: "Dùng EVERY DAY để nói về một hành động hoặc thói quen xảy ra mỗi ngày.",
  type: "time",
},
    // Noun chunks (green)
{
  phrase: "simple food",
  pronunciation: "/ˈsɪmpəl fuːd/",
  meaning: "đồ ăn đơn giản",
  context: "Dùng để nói về những món ăn đơn giản, không quá cầu kỳ.",
  type: "noun",
},
{
  phrase: "water or tea",
  pronunciation: "/ˈwɔːtər ɔː tiː/",
  meaning: "nước hoặc trà",
  context: "Dùng để nói về hai loại đồ uống là nước và trà.",
  type: "noun",
},
{
  phrase: "jeans and T-shirts",
  pronunciation: "/dʒiːnz ænd ˈtiː ʃɜːrts/",
  meaning: "quần jeans và áo thun",
  context: "Dùng để nói về các loại quần áo thường mặc.",
  type: "noun",
},
{
  phrase: "many shops, restaurants, and parks",
  pronunciation: "/ˈmeni ʃɒps ˈrestrɒnts ænd pɑːrks/",
  meaning: "nhiều cửa hàng, nhà hàng và công viên",
  context: "Dùng để nói về nhiều địa điểm khác nhau trong một khu vực.",
  type: "noun",
},
{
  phrase: "listening to music, watching movies, and playing sports",
  pronunciation: "/ˈlɪsənɪŋ tə ˈmjuːzɪk, ˈwɒtʃɪŋ ˈmuːviz, ænd ˈpleɪɪŋ spɔːrts/",
  meaning: "nghe nhạc, xem phim và chơi thể thao",
  context: "Dùng để nói về các hoạt động giải trí và thể thao.",
  type: "noun",
},
{
  phrase: "a computer and a phone",
  pronunciation: "/ə kəmˈpjuːtər ænd ə fəʊn/",
  meaning: "một chiếc máy tính và một chiếc điện thoại",
  context: "Dùng để nói về hai thiết bị công nghệ.",
  type: "noun",
},
{
  phrase: "new places",
  pronunciation: "/njuː ˈpleɪsɪz/",
  meaning: "những nơi mới",
  context: "Dùng để nói về những địa điểm mới hoặc chưa từng đến.",
  type: "noun",
},
{
  phrase: "the time and timetable",
  pronunciation: "/ðə taɪm ænd ˈtaɪmteɪbəl/",
  meaning: "thời gian và thời gian biểu",
  context: "Dùng để nói về thời gian và lịch trình của các hoạt động.",
  type: "noun",
},
{
  phrase: "a living room, a kitchen, two bedrooms, and some simple furniture",
  pronunciation: "/ə ˈlɪvɪŋ ruːm, ə ˈkɪtʃɪn, tuː ˈbedruːmz, ænd sʌm ˈsɪmpəl ˈfɜːrnɪtʃər/",
  meaning: "một phòng khách, một nhà bếp, hai phòng ngủ và một số đồ nội thất đơn giản",
  context: "Dùng để nói về các phòng và đồ nội thất trong một ngôi nhà.",
  type: "noun",
},
{
  phrase: "the price",
  pronunciation: "/ðə praɪs/",
  meaning: "giá cả",
  context: "Dùng để nói về số tiền cần trả cho một sản phẩm hoặc dịch vụ.",
  type: "noun",
},
{
  phrase: "holidays and celebrations",
  pronunciation: "/ˈhɒlədeɪz ænd ˌselɪˈbreɪʃənz/",
  meaning: "các ngày lễ và lễ kỷ niệm",
  context: "Dùng để nói về những dịp đặc biệt như ngày lễ hoặc các sự kiện được tổ chức để kỷ niệm.",
  type: "noun",
},
{
  phrase: "new people",
  pronunciation: "/njuː ˈpiːpəl/",
  meaning: "những người mới",
  context: "Dùng để nói về những người mình mới gặp hoặc chưa quen.",
  type: "noun",
},
    // Adjective chunks (green)
  {
    phrase: "comfortable",
    pronunciation: "/ˈkʌmfərtəbl/",
    meaning: "Thoải mái",
    context: "Dùng để giải thích lý do lựa chọn trang phục đơn giản.",
    type: "adjective",
  },
  {
  phrase: "cool",
  pronunciation: "/kuːl/",
  meaning: "mát mẻ",
  context: "Dùng để miêu tả thời tiết có nhiệt độ dễ chịu, không nóng.",
  type: "adjective",
},
{
  phrase: "beautiful",
  pronunciation: "/ˈbjuːtɪfəl/",
  meaning: "đẹp",
  context: "Dùng để miêu tả người, vật, địa điểm hoặc cảnh vật có vẻ đẹp.",
  type: "adjective",
},
    // Prepositional chunks (pink)
{
  phrase: "with my meals",
  pronunciation: "/wɪð maɪ miːlz/",
  meaning: "cùng với các bữa ăn của tôi",
  context: "Dùng WITH để nói về thứ được dùng cùng với một bữa ăn.",
  type: "preposition",
},
{
  phrase: "at a restaurant",
  pronunciation: "/æt ə ˈrestrɒnt/",
  meaning: "tại một nhà hàng",
  context: "Dùng AT để nói về địa điểm mà một hoạt động diễn ra.",
  type: "preposition",
},
{
  phrase: "with my family and friends",
  pronunciation: "/wɪð maɪ ˈfæməli ænd frendz/",
  meaning: "với gia đình và bạn bè của tôi",
  context: "Dùng WITH để nói về người cùng mình thực hiện một hoạt động.",
  type: "preposition",
},
{
  phrase: "in a simple and useful way",
  pronunciation: "/ɪn ə ˈsɪmpəl ænd ˈjuːsfəl weɪ/",
  meaning: "theo một cách đơn giản và hữu ích",
  context: "Dùng IN để nói về cách thức một hành động được thực hiện.",
  type: "preposition",
},
{
  phrase: "in my town",
  pronunciation: "/ɪn maɪ taʊn/",
  meaning: "ở thị trấn của tôi",
  context: "Dùng IN để nói về vị trí hoặc địa điểm mà một người hoặc sự việc ở đó.",
  type: "preposition",
},
{
  phrase: "in an office",
  pronunciation: "/ɪn ən ˈɒfɪs/",
  meaning: "trong một văn phòng",
  context: "Dùng IN để nói về vị trí bên trong một địa điểm.",
  type: "preposition",
},
{
  phrase: "In my free time",
  pronunciation: "/ɪn maɪ friː taɪm/",
  meaning: "trong thời gian rảnh của tôi",
  context: "Dùng IN để nói về khoảng thời gian mà một hoạt động diễn ra.",
  type: "preposition",
},
{
  phrase: "at a restaurant",
  pronunciation: "/æt ə ˈrestrɒnt/",
  meaning: "tại một nhà hàng",
  context: "Dùng AT để nói về địa điểm mà một hoạt động diễn ra.",
  type: "preposition",
},
{
  phrase: "by bus",
  pronunciation: "/baɪ bʌs/",
  meaning: "bằng xe buýt",
  context: "Dùng BY để nói về phương tiện được sử dụng để di chuyển.",
  type: "preposition",
},
    // Reason chunks (green)
{
  phrase: "for work and everyday life",
  pronunciation: "/fər wɜːrk ænd ˈevrideɪ laɪf/",
  meaning: "cho công việc và cuộc sống hằng ngày",
  context: "Dùng FOR để nói về mục đích hoặc đối tượng mà một việc được sử dụng cho.",
  type: "reason",
},
{
  phrase: "before I travel",
  pronunciation: "/bɪˈfɔːr aɪ ˈtrævəl/",
  meaning: "trước khi tôi đi du lịch",
  context: "Dùng BEFORE để nói về một hành động xảy ra trước một hành động khác.",
  type: "reason",
},
{
  phrase: "before I buy something",
  pronunciation: "/bɪˈfɔːr aɪ baɪ ˈsʌmθɪŋ/",
  meaning: "trước khi tôi mua thứ gì đó",
  context: "Dùng BEFORE để nói về một hành động xảy ra trước một hành động khác.",
  type: "reason",
},
];

const practice: FillBlankQuestion[] = [
  { prompt: "My name is Anna, and I live with my family ____ a small house.", answer: "in", hint: "trong (một ngôi nhà nhỏ)" },
  { prompt: "I usually get up at seven o’clock and go to work ____ bus.", answer: "by", hint: "bằng (phương tiện)" },
  { prompt: "I like simple food, and I usually drink water or tea ____ my meals.", answer: "with", hint: "với" },
  { prompt: "My favorite clothes are jeans and T-shirts because they ____ comfortable.", answer: "are", hint: "thì / là (số nhiều)" },
  { prompt: "There are many shops, restaurants, and parks ____ my town.", answer: "in", hint: "trong (thị trấn)" },
  { prompt: "I like autumn because the weather is cool and the trees ____ beautiful.", answer: "look", hint: "trông có vẻ" },
  { prompt: "In my free time, I enjoy listening ____ music, watching movies, and playing sports.", answer: "to", hint: "nghe (nhạc)" },
  { prompt: "I studied English at school, and now I use English ____ work and everyday life.", answer: "for", hint: "cho (công việc)" },
  { prompt: "I work ____ an office, and I usually use a computer and a phone every day.", answer: "in", hint: "làm việc ở (văn phòng)" },
  { prompt: "I like traveling ____ new places, and I usually check the time and timetable.", answer: "to", hint: "đến (nơi mới)" },
  { prompt: "My home has a living room, a kitchen, two bedrooms, and some simple ____.", answer: "furniture", hint: "đồ nội thất" },
  { prompt: "When I go shopping or eat at a restaurant, I usually check the price ____ I buy something.", answer: "before", hint: "trước khi" },
  { prompt: "I like holidays and celebrations because I can spend time ____ my family and friends.", answer: "with", hint: "với" },
  { prompt: "When I meet new people, I usually say hello, ask simple questions, and talk ____ hobbies.", answer: "about", hint: "về (sở thích)" },
  { prompt: "I try to stay safe, take care ____ my health, and use technology in a useful way.", answer: "of", hint: "chăm sóc (sức khỏe)" },
];

export const lesson30Content = {
  paragraph,
  translation,
  chunks,
  readingSegments,
  practice,
  extraVocab: [
{
    term: "live with _____________",
    meaning: "sống với...",
    example: "I live with my family.",
    alternatives: [
      "my family",
      "my parents",
      "my friends",
      "live alone"
    ]
  },
  {
    term: "in a small house",
    meaning: "trong một ngôi nhà nhỏ",
    example: "I live in a small house.",
    alternatives: [
      "in a small house",
      "in an apartment",
      "in a big house",
      "in the city center"
    ]
  },
  {
    term: "get up at _____________",
    meaning: "thức dậy lúc...",
    example: "I usually get up at seven o'clock.",
    alternatives: [
      "seven o'clock",
      "six thirty",
      "get up early",
      "get up late"
    ]
  },
  {
    term: "go to work by _____________",
    meaning: "đi làm bằng...",
    example: "I go to work by bus.",
    alternatives: [
      "bus",
      "motorbike",
      "car",
      "train"
    ]
  },
  {
    term: "like _____________",
    meaning: "thích...",
    example: "I like simple food.",
    alternatives: [
      "simple food",
      "healthy food",
      "cheap clothes",
      "comfortable clothes"
    ]
  },
  {
    term: "drink _____________ with my meals",
    meaning: "uống... trong bữa ăn",
    example: "I drink water with my meals.",
    alternatives: [
      "water",
      "tea",
      "juice",
      "milk"
    ]
  },
  {
    term: "My favorite clothes are _____________",
    meaning: "quần áo yêu thích của tôi là...",
    example: "My favorite clothes are jeans and T-shirts.",
    alternatives: [
      "jeans and T-shirts",
      "dresses and skirts",
      "shirts and trousers",
      "comfortable clothes"
    ]
  },
  {
    term: "because they are _____________",
    meaning: "vì chúng...",
    example: "I like jeans because they are comfortable.",
    alternatives: [
      "comfortable",
      "cheap",
      "simple",
      "easy to wear"
    ]
  },
  {
    term: "There are _____________ in _____________",
    meaning: "có... ở...",
    example: "There are many shops in my town.",
    alternatives: [
      "many shops in my town",
      "many restaurants in my area",
      "many parks near my house"
    ]
  },
  {
    term: "like _____________ because _____________",
    meaning: "thích... vì...",
    example: "I like autumn because the weather is cool.",
    alternatives: [
      "autumn because the weather is cool",
      "summer because it is sunny",
      "winter because it is cool"
    ]
  },
  {
    term: "the weather is _____________",
    meaning: "thời tiết...",
    example: "The weather is cool in autumn.",
    alternatives: [
      "cool",
      "hot",
      "warm",
      "cold",
      "pleasant"
    ]
  },
  {
    term: "look _____________",
    meaning: "trông...",
    example: "The leaves look beautiful.",
    alternatives: [
      "beautiful",
      "pretty",
      "clean",
      "nice"
    ]
  },
  {
    term: "enjoy _____________",
    meaning: "thích / tận hưởng việc...",
    example: "I enjoy listening to music.",
    alternatives: [
      "listening to music",
      "watching movies",
      "playing sports",
      "cooking"
    ]
  },
  {
    term: "use _____________ for _____________",
    meaning: "dùng... cho...",
    example: "I use English for work.",
    alternatives: [
      "English for work",
      "English for school",
      "my phone for work"
    ]
  },
  {
    term: "work in _____________",
    meaning: "làm việc trong / tại...",
    example: "I work in an office.",
    alternatives: [
      "an office",
      "a company",
      "at a school",
      "from home"
    ]
  },
  {
    term: "use _____________ every day",
    meaning: "sử dụng... mỗi ngày",
    example: "I use a computer every day.",
    alternatives: [
      "a computer",
      "a phone",
      "a tablet"
    ]
  },
  {
    term: "travel to _____________",
    meaning: "đi đến / du lịch đến...",
    example: "I like to travel to new places.",
    alternatives: [
      "new places",
      "another city",
      "another country"
    ]
  },
  {
    term: "check _____________ before _____________",
    meaning: "kiểm tra... trước khi...",
    example: "I check the time before I travel.",
    alternatives: [
      "the time before I travel",
      "the timetable before I leave",
      "the price before I buy"
    ]
  },
  {
    term: "has _____________",
    meaning: "có...",
    example: "My house has a living room.",
    alternatives: [
      "a living room",
      "a kitchen",
      "two bedrooms",
      "simple furniture"
    ]
  },
  {
    term: "eat at _____________",
    meaning: "ăn ở...",
    example: "I usually eat at a restaurant.",
    alternatives: [
      "a restaurant",
      "home",
      "a small café"
    ]
  },
  {
    term: "check the price before _____________",
    meaning: "kiểm tra giá trước khi...",
    example: "I check the price before I buy something.",
    alternatives: [
      "I buy something",
      "I order food"
    ]
  },
  {
    term: "spend time with _____________",
    meaning: "dành thời gian với...",
    example: "I spend time with my family.",
    alternatives: [
      "my family",
      "my friends",
      "my classmates"
    ]
  },
  {
    term: "say hello and _____________",
    meaning: "chào và...",
    example: "I say hello and ask questions.",
    alternatives: [
      "ask questions",
      "introduce myself",
      "talk about hobbies"
    ]
  },
  {
    term: "talk about _____________",
    meaning: "nói về...",
    example: "I like to talk about my hobbies.",
    alternatives: [
      "hobbies",
      "work",
      "school",
      "the weather"
    ]
  },
  {
    term: "try to _____________",
    meaning: "cố gắng...",
    example: "I try to stay healthy.",
    alternatives: [
      "stay safe",
      "stay healthy",
      "speak English",
      "listen carefully"
    ]
  },
  {
    term: "take care of _____________",
    meaning: "chăm sóc...",
    example: "I take care of my health.",
    alternatives: [
      "my health",
      "my family",
      "my things"
    ]
  },
  {
    term: "use technology in _____________ way",
    meaning: "sử dụng công nghệ theo cách...",
    example: "I use technology in a simple way.",
    alternatives: [
      "a simple way",
      "a useful way"
    ]
  },
]
};