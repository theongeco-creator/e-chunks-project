import { c, buildLessonContent } from "../lessonBuilder";
import type { LessonSentence } from "../lessonBuilder";

const sentences: LessonSentence[] = [
  {
    id: "l23-s1",
    ipa: "/aɪ luːv ˈwɑtʃɪŋ ˈmuviz wɪð maɪ ˈfæməli ɪn ði ˈɪvnɪŋ/",
    en: "I love watching movies with my family in the evening.",
    vi: "Tôi thích xem phim cùng gia đình vào buổi tối.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb (love watching movies) + prepositional phrase (with my family) + prepositional phrase (in the evening)." },
      { label: "I love watching movies", content: "Chủ ngữ 'I' + động từ 'love' + danh động từ 'watching movies'." },
      { label: "with my family in the evening", content: "Cụm giới từ chỉ người đi cùng + cụm giới từ chỉ thời gian." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("love", "thích", "/luːv/", "verb", "Động từ chính", "Diễn tả sở thích mạnh mẽ."),
      c("watching movies", "xem phim", "/ˈwɑtʃɪŋ ˈmuviz/", "verb", "Cụm động từ (verb-ing + object)", "Chỉ hoạt động giải trí xem phim."),
      c("with my family", "với gia đình của tôi", "/wɪð maɪ ˈfæməli/", "preposition", "Cụm giới từ chỉ người cùng tham gia", "Giới từ 'with' kết hợp cụm danh từ chỉ gia đình."),
      c("in the evening", "vào buổi tối", "/ɪn ði ˈɪvnɪŋ/", "preposition", "Cụm giới từ chỉ thời gian", "Giới từ 'in' dùng với buổi trong ngày."),
    ],
  },
  {
    id: "l23-s2",
    ipa: "/ˈækʃən ˈmuviz ɑːr maɪ ˈfeɪvərɪt bɪˈkʌz ðeɪ ɑːr ˈvɛri ɪkˈsaɪtɪŋ/",
    en: "Action movies are my favorite because they are very exciting.",
    vi: "Phim hành động là thể loại yêu thích của tôi vì chúng rất thú vị và hồi hộp.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (Action movies) + be (are) + complement (my favorite) + connector (because) + clause (they are very exciting)." },
      { label: "Action movies are my favorite", content: "Chủ ngữ 'Action movies' + động từ tobe 'are' + bổ ngữ 'my favorite'." },
      { label: "because they are very exciting", content: "Liên từ 'because' + mệnh đề giải thích lý do." },
    ],
    chunks: [
      c("Action movies", "phim hành động", "/ˈækʃən ˈmuviz/", "noun", "Chủ ngữ (noun + noun)", "Cụm danh từ chỉ thể loại phim."),
      c("are", "là", "/ɑːr/", "verb", "Động từ tobe", "Động từ tobe chia số nhiều."),
      c("my favorite", "điều yêu thích của tôi", "/maɪ ˈfeɪvərɪt/", "noun", "Bổ ngữ (possessive determiner + noun)", "Cụm danh từ chỉ sở thích cá nhân."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do."),
      c("they", "chúng", "/ðeɪ/", "noun", "Chủ ngữ mệnh đề sau", "Đại từ chỉ các bộ phim hành động."),
      c("are", "thì", "/ɑːr/", "verb", "Động từ tobe", "Động từ tobe chia số nhiều."),
      c("very exciting", "rất hồi hộp / thú vị", "/ˈvɛri ɪkˈsaɪtɪŋ/", "adjective", "Tính từ bổ ngữ (adverb + adjective)", "Miêu tả cảm giác kích thích."),
    ],
  },
  {
    id: "l23-s3",
    ipa: "/aɪ ˈɑfən wɑtʃ ˈfʌni tiːˈvi ʃoʊz ɑːn maɪ ˈlæptɑp æt ðə ˈwɛkɛnd/",
    en: "I often watch funny TV shows on my laptop at the weekend.",
    vi: "Tôi thường xem các chương trình truyền hình vui nhộn trên máy tính xách tay vào cuối tuần.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + adverb (often) + verb phrase (watch funny TV shows) + prepositional phrase (on my laptop) + prepositional phrase (at the weekend)." },
      { label: "I often watch funny TV shows", content: "Chủ ngữ 'I' + trạng từ tần suất 'often' + cụm động từ xem chương trình." },
      { label: "on my laptop at the weekend", content: "Cụm giới từ chỉ phương tiện/thiết bị + cụm giới từ chỉ thời gian cuối tuần." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("often", "thường xuyên", "/ˈɑfən/", "adverb", "Trạng từ chỉ tần suất", "Chỉ mức độ thường làm."),
      c("watch", "xem", "/wɑtʃ/", "verb", "Động từ chính", "Chỉ hành động xem chương trình."),
      c("funny TV shows", "các chương trình truyền hình hài hước", "/ˈfʌni tiːˈvi ʃoʊz/", "noun", "Tân ngữ (adjective + noun + noun)", "Cụm danh từ số nhiều chỉ chương trình TV."),
      c("on my laptop", "trên máy tính xách tay của tôi", "/ɑːn maɪ ˈlæptɑp/", "preposition", "Cụm giới từ chỉ phương tiện", "Giới từ 'on' dùng với thiết bị điện tử."),
      c("at the weekend", "vào cuối tuần", "/æt ðə ˈwɛkɛnd/", "preposition", "Cụm giới từ chỉ thời gian", "Cụm cố định chỉ thời gian cuối tuần."),
    ],
  },
  {
    id: "l23-s4",
    ipa: "/maɪ ˈfeɪvərɪt ˈæktər ɪz ˈvɛri ˈtæləntɪd ænd ˈhænsəm/",
    en: "My favorite actor is very talented and handsome.",
    vi: "Nam diễn viên yêu thích của tôi rất tài năng và đẹp trai.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (My favorite actor) + be (is) + complement (very talented and handsome)." },
      { label: "My favorite actor is very talented and handsome", content: "Chủ ngữ 'My favorite actor' + động từ tobe 'is' + chuỗi tính từ bổ ngữ." },
    ],
    chunks: [
      c("My favorite actor", "nam diễn viên yêu thích của tôi", "/maɪ ˈfeɪvərɪt ˈæktər/", "noun", "Chủ ngữ (possessive determiner + adjective + noun)", "Cụm danh từ chỉ diễn viên yêu thích."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("very talented", "rất tài năng", "/ˈvɛri ˈtæləntɪd/", "adjective", "Tính từ bổ ngữ (adverb + adjective)", "Miêu tả năng lực."),
      c("and", "và", "/ænd/", "connector", "Từ nối", "Nối hai tính từ mô tả đặc điểm."),
      c("handsome", "đẹp trai", "/ˈhænsəm/", "adjective", "Tính từ bổ ngữ", "Miêu tả ngoại hình."),
    ],
  },
  {
    id: "l23-s5",
    ipa: "/læst ˈsætərdeɪ, aɪ wɛnt tuː ðə ˈsɪnəmə tuː siː ə nuː ˈænəˌmeɪtɪd fɪlm/",
    en: "Last Saturday, I went to the cinema to see a new animated film.",
    vi: "Thứ Bảy tuần trước, tôi đã đi đến rạp chiếu phim để xem một bộ phim hoạt hình mới.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Adverbial (Last Saturday) + S (I) + verb phrase (went to the cinema) + infinitive phrase (to see a new animated film)." },
      { label: "Last Saturday", content: "Trạng từ chỉ thời gian quá khứ." },
      { label: "I went to the cinema", content: "Chủ ngữ 'I' + động từ 'went' + cụm giới từ chỉ địa điểm." },
      { label: "to see a new animated film", content: "Cụm nguyên mẫu chỉ mục đích xem phim." },
    ],
    chunks: [
      c("Last Saturday", "Thứ Bảy tuần trước", "/læst ˈsætərdeɪ/", "adverb", "Cụm trạng từ chỉ thời gian", "Xác định thời điểm cụ thể trong quá khứ."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("went to the cinema", "đã đi đến rạp chiếu phim", "/wɛnt tuː ðə ˈsɪnəmə/", "verb", "Cụm động từ chỉ sự di chuyển (verb + preposition + article + noun)", "Chỉ hành động đến rạp phim."),
      c("to see a new animated film", "để xem một bộ phim hoạt hình mới", "/tuː siː ə nuː ˈænəˌmeɪtɪd fɪlm/", "verb", "Cụm động từ nguyên mẫu chỉ mục đích (to-infinitive + object)", "Chỉ mục đích của chuyến đi."),
    ],
  },
  {
    id: "l23-s6",
    ipa: "/ðə ˈtɪkɪts wɜr kwaɪt ʧiːp, soʊ aɪ bɔt sʌm ˈpɑpˌkɔrn tuː/",
    en: "The tickets were quite cheap, so I bought some popcorn too.",
    vi: "Vé khá rẻ, vì vậy tôi cũng đã mua thêm một ít bắp rang bơ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "Clause 1 (The tickets were quite cheap) + connector (so) + Clause 2 (I bought some popcorn too)." },
      { label: "The tickets were quite cheap", content: "Chủ ngữ 'The tickets' + động từ tobe quá khứ 'were' + tính từ 'quite cheap'." },
      { label: "so I bought some popcorn too", content: "Liên từ kết quả 'so' + chủ ngữ 'I' + động từ 'bought' + tân ngữ + trạng từ 'too'." },
    ],
    chunks: [
      c("The tickets", "những chiếc vé", "/ðə ˈtɪkɪts/", "noun", "Chủ ngữ số nhiều (article + noun)", "Cụm danh từ chỉ vé xem phim."),
      c("were", "đã là / thì", "/wɜr/", "verb", "Động từ tobe quá khứ", "Động từ tobe chia số nhiều thì quá khứ."),
      c("quite cheap", "khá rẻ", "/kwaɪt ʧiːp/", "adjective", "Tính từ bổ ngữ (adverb + adjective)", "Miêu tả mức giá phải chăng."),
      c("so", "vì vậy", "/soʊ/", "connector", "Từ nối chỉ kết quả", "Nối hai mệnh đề nguyên nhân - kết quả."),
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ mệnh đề sau", "Ngôi thứ nhất số ít."),
      c("bought", "đã mua", "/bɔt/", "verb", "Động từ quá khứ", "Dạng quá khứ của buy."),
      c("some popcorn", "một ít bắp rang bơ", "/sʌm ˈpɑpˌkɔrn/", "noun", "Tân ngữ (quantifier + noun)", "Cụm danh từ chỉ đồ ăn nhẹ."),
      c("too", "cũng vậy / nữa", "/tuː/", "adverb", "Trạng từ bổ sung", "Nhấn mạnh hành động đi kèm."),
    ],
  },
  {
    id: "l23-s7",
    ipa: "/aɪ duː nɑt laɪk ˈhɔrər ˈmuviz bɪˈkʌz ðeɪ ɑːr tuː ˈskɛri/",
    en: "I do not like horror movies because they are too scary.",
    vi: "Tôi không thích phim kinh dị vì chúng quá đáng sợ.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + auxiliary/negative (do not) + verb (like) + object (horror movies) + connector (because) + clause (they are too scary)." },
      { label: "I do not like horror movies", content: "Chủ ngữ 'I' + trợ động từ phủ định 'do not' + động từ 'like' + tân ngữ 'horror movies'." },
      { label: "because they are too scary", content: "Liên từ 'because' + mệnh đề giải thích lý do." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("do not like", "không thích", "/duː nɑt laɪk/", "verb", "Cụm động từ phủ định (auxiliary + negative + verb)", "Diễn tả sự không ưa thích."),
      c("horror movies", "phim kinh dị", "/ˈhɔrər ˈmuviz/", "noun", "Tân ngữ (noun + noun)", "Cụm danh từ chỉ thể loại phim sợ hãi."),
      c("because", "vì", "/bɪˈkʌz/", "connector", "Từ nối chỉ nguyên nhân", "Dùng để giải thích lý do không thích."),
      c("they", "chúng", "/ðeɪ/", "noun", "Chủ ngữ mệnh đề sau", "Đại từ chỉ phim kinh dị."),
      c("are", "thì", "/ɑːr/", "verb", "Động từ tobe", "Động từ tobe chia số nhiều."),
      c("too scary", "quá đáng sợ", "/tuː ˈskɛri/", "adjective", "Tính từ bổ ngữ (adverb + adjective)", "Miêu tả mức độ đáng sợ quá mức."),
    ],
  },
  {
    id: "l23-s8",
    ipa: "/aɪ θɪŋk ˈwɑtʃɪŋ tiːˈvi ɪz ə ɡreɪt weɪ tuː rɪˈlæks ˈæftər wɜrk/",
    en: "I think watching TV is a great way to relax after work.",
    vi: "Tôi nghĩ xem truyền hình là một cách tuyệt vời để thư giãn sau giờ làm việc.",
    explanation: [
      { label: "Cấu trúc tổng quát", content: "S (I) + verb (think) + that-clause (watching TV is a great way to relax after work)." },
      { label: "I think", content: "Chủ ngữ 'I' + động từ 'think'." },
      { label: "watching TV is a great way", content: "Chủ ngữ danh động từ 'watching TV' + động từ tobe 'is' + bổ ngữ cụm danh từ." },
      { label: "to relax after work", content: "Cụm nguyên mẫu chỉ mục đích + cụm giới từ chỉ thời điểm sau giờ làm." },
    ],
    chunks: [
      c("I", "tôi", "/aɪ/", "noun", "Chủ ngữ", "Ngôi thứ nhất số ít."),
      c("think", "nghĩ rằng", "/θɪŋk/", "verb", "Động từ quan điểm", "Diễn tả suy nghĩ cá nhân."),
      c("watching TV", "xem tivi", "/ˈwɑtʃɪŋ tiːˈvi/", "noun", "Chủ ngữ mệnh đề sau (verb-ing + object)", "Danh động từ chỉ hành động xem truyền hình."),
      c("is", "là", "/ɪz/", "verb", "Động từ tobe", "Động từ tobe chia số ít."),
      c("a great way", "một cách tuyệt vời", "/ə ɡreɪt weɪ/", "noun", "Bổ ngữ (article + adjective + noun)", "Cụm danh từ chỉ phương pháp/cách thức."),
      c("to relax", "để thư giãn", "/tuː rɪˈlæks/", "verb", "Cụm động từ nguyên mẫu bổ nghĩa (to-infinitive)", "Chỉ mục đích của cách thức đó."),
      c("after work", "sau giờ làm việc", "/ˈæftər wɜrk/", "preposition", "Cụm giới từ chỉ thời gian", "Giới từ 'after' kết hợp danh từ chỉ công việc."),
    ],
  },
];

export const lesson23Content = {
  ...buildLessonContent(sentences),
  extraVocab: [
    {
      term: "I love watching movies with my family in the _____________.",
      meaning: "Tôi thích xem phim cùng gia đình vào buổi ...",
      example: "I love watching movies with my family in the evening.",
      alternatives: ["evening", "afternoon"],
    },
    {
      term: "Action movies are my favorite because they are very _____________.",
      meaning: "Phim hành động là thể loại yêu thích của tôi vì chúng rất ...",
      example: "Action movies are my favorite because they are very exciting.",
      alternatives: ["exciting", "interesting", "good"],
    },
    {
      term: "My favorite actor is very talented and _____________.",
      meaning: "Nam diễn viên yêu thích của tôi rất tài năng và ...",
      example: "My favorite actor is very talented and handsome.",
      alternatives: ["handsome", "nice", "great"],
    },
    {
      term: "The tickets were quite cheap, so I bought some _____________ too.",
      meaning: "Vé khá rẻ, vì vậy tôi cũng đã mua thêm một ít ...",
      example: "The tickets were quite cheap, so I bought some popcorn too.",
      alternatives: ["popcorn", "snacks", "drinks"],
    },
    {
      term: "I think watching TV is a great way to relax after _____________.",
      meaning: "Tôi nghĩ xem truyền hình là một cách tuyệt vời để thư giãn sau giờ ...",
      example: "I think watching TV is a great way to relax after work.",
      alternatives: ["work", "school"],
    },
  ],
};

export const lesson23Sentences = sentences;