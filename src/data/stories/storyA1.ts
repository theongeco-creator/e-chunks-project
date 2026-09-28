export interface StoryA1 {
  id: string;
  title: string;
  level: "A1";
  image: string;
  paragraph: string;
  translation: string;
  blanks: string[];
}

export const storiesA1: StoryA1[] = [
  {
    id: "a1-001",
    title: "My Cute Cat",
    level: "A1",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
    paragraph: "I have a small cat at home. Its name is Mimi and it loves to sleep. Every morning, Mimi drinks warm milk in the kitchen. In the afternoon, it plays with a red ball. I love my sweet cat very much.",
    translation: "Tôi có một con mèo nhỏ ở nhà. Tên nó là Mimi và nó thích ngủ. Mỗi buổi sáng, Mimi uống sữa ấm ở trong phòng bếp. Vào buổi chiều, nó chơi với một quả bóng đỏ. Tôi rất yêu con mèo ngọt ngào của mình.",
    blanks: ["small", "sleep", "milk", "ball", "love"]
  },
  {
    id: "a1-002",
    title: "Morning Routine",
    level: "A1",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    paragraph: "I wake up early every single day. First, I wash my face with cold water. Then, I eat a delicious breakfast with bread and eggs. After that, I brush my teeth quickly. Finally, I walk to school with my best friend.",
    translation: "Tôi thức dậy sớm mỗi ngày. Đầu tiên, tôi rửa mặt bằng nước lạnh. Sau đó, tôi ăn một bữa sáng ngon lành với bánh mì và trứng. Kế tiếp, tôi đánh răng thật nhanh. Cuối cùng, tôi đi bộ đến trường cùng người bạn thân nhất.",
    blanks: ["early", "water", "breakfast", "teeth", "school"]
  },
  {
    id: "a1-003",
    title: "My Friendly Dog",
    level: "A1",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop",
    paragraph: "Max is a big brown dog. He lives in my cozy house. Every afternoon, Max runs fast in the green garden. He always barks when strangers come near the gate. I give him tasty food every evening.",
    translation: "Max là một chú chó nâu lớn. Cậu ấy sống trong ngôi nhà ấm cúng của tôi. Mỗi buổi chiều, Max chạy nhanh trong khu vườn xanh mát. Cậu ấy luôn sủa khi người lạ đến gần cổng. Tôi cho cậu ấy thức ăn ngon vào mỗi buổi tối.",
    blanks: ["brown", "house", "garden", "barks", "evening"]
  },
  {
    id: "a1-004",
    title: "Rainy Day at Home",
    level: "A1",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=800&auto=format&fit=crop",
    paragraph: "Today is a cold and rainy day. I stay inside my warm bedroom. I read an interesting book on the soft bed. My mother makes hot chocolate in the kitchen. I love listening to the sound of rain.",
    translation: "Hôm nay là một ngày trời lạnh và mưa. Tôi ở trong phòng ngủ ấm áp của mình. Tôi đọc một cuốn sách thú vị trên chiếc giường êm ái. Mẹ tôi pha sô-cô-la nóng trong phòng bếp. Tôi rất thích lắng nghe tiếng mưa rơi.",
    blanks: ["rainy", "bedroom", "book", "kitchen", "rain"]
  },
  {
    id: "a1-005",
    title: "A Happy Family",
    level: "A1",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    paragraph: "There are four people in my family. My father works as a smart teacher. My mother cooks delicious meals for us. My little sister plays with her dolls all day. We watch funny movies together every weekend.",
    translation: "Gia đình tôi có bốn người. Bố tôi làm một giáo viên thông minh. Mẹ tôi nấu những bữa ăn ngon cho chúng tôi. Em gái tôi chơi búp bê cả ngày. Chúng tôi xem những bộ phim vui nhộn cùng nhau vào mỗi cuối tuần.",
    blanks: ["family", "teacher", "meals", "dolls", "weekend"]
  },
  {
    id: "a1-006",
    title: "My School Bag",
    level: "A1",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    paragraph: "I have a new blue school bag. Inside the bag, there are many things. My heavy math book is at the bottom. Three colorful pens sit in the front pocket. I always keep my bag clean and tidy.",
    translation: "Tôi có một chiếc cặp đi học màu xanh mới. Bên trong cặp có rất nhiều thứ. Cuốn sách toán nặng của tôi ở dưới đáy. Ba chiếc bút nhiều màu nằm ở túi phía trước. Tôi luôn giữ cặp của mình sạch sẽ và ngăn nắp.",
    blanks: ["blue", "things", "book", "pens", "tidy"]
  },
  {
    id: "a1-007",
    title: "Delicious Breakfast",
    level: "A1",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop",
    paragraph: "Morning has arrived with warm sunshine. I sit at the wooden table to eat. My mother prepares sweet pancakes for breakfast. I drink a cold glass of fresh orange juice. This meal gives me great energy.",
    translation: "Buổi sáng đã đến với ánh nắng ấm áp. Tôi ngồi vào chiếc bàn gỗ để ăn. Mẹ tôi chuẩn bị những chiếc bánh kếp ngọt cho bữa ăn sáng. Tôi uống một ly nước cam tươi mát lạnh. Bữa ăn này mang lại cho tôi năng lượng tuyệt vời.",
    blanks: ["sunshine", "table", "breakfast", "juice", "energy"]
  },
  {
    id: "a1-008",
    title: "Playing in the Park",
    level: "A1",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800&auto=format&fit=crop",
    paragraph: "The weather is very nice today. Tom and I go to the local park. We run quickly on the green grass. Later, we eat sweet chocolate ice cream on a bench. We feel very happy and relaxed.",
    translation: "Thời tiết hôm nay rất đẹp. Tom và tôi đi đến công viên địa phương. Chúng tôi chạy nhanh trên bãi cỏ xanh. Sau đó, chúng tôi ăn kem sô-cô-la ngọt trên băng ghế. Chúng tôi cảm thấy rất vui vẻ và thư thái.",
    blanks: ["weather", "park", "grass", "bench", "happy"]
  },
  {
    id: "a1-009",
    title: "My Favorite Fruit",
    level: "A1",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=800&auto=format&fit=crop",
    paragraph: "I love eating fresh fruit every afternoon. Apples are my absolute favorite choice. They are sweet, red, and very juicy. My mother washes them carefully before serving. Eating fruit keeps my body healthy.",
    translation: "Tôi thích ăn trái cây tươi vào mỗi buổi chiều. Táo là sự lựa chọn yêu thích tuyệt đối của tôi. Chúng ngọt, đỏ và rất nhiều nước. Mẹ tôi rửa chúng cẩn thận trước khi dọn ra. Ăn trái cây giúp cơ thể tôi khỏe mạnh.",
    blanks: ["fruit", "favorite", "juicy", "carefully", "healthy"]
  },
  {
    id: "a1-010",
    title: "A Busy Classroom",
    level: "A1",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    paragraph: "Our classroom is large and bright. Twenty students sit at wooden desks. The teacher writes new English words on the board. We listen carefully and repeat after her. Learning new languages is really fun.",
    translation: "Phòng học của chúng tôi rộng và sáng sủa. Hai mươi học sinh ngồi ở các bàn gỗ. Giáo viên viết các từ vựng tiếng Anh mới lên bảng. Chúng tôi lắng nghe cẩn thận và nhắc lại theo cô ấy. Học ngoại ngữ mới thực sự rất vui.",
    blanks: ["classroom", "students", "board", "carefully", "languages"]
  },
  {
    id: "a1-011",
    title: "The Little Bird",
    level: "A1",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=800&auto=format&fit=crop",
    paragraph: "A small yellow bird sits on a branch. It sings a lovely song every morning. The sun shines brightly through the green leaves. I watch it quietly from my bedroom window. Nature brings peace to my mind.",
    translation: "Một chú chim vàng nhỏ đậu trên cành cây. Nó hát một bài hát đáng yêu mỗi buổi sáng. Mặt trời chiếu sáng rực rỡ qua những chiếc lá xanh. Tôi lặng lẽ ngắm nhìn nó từ cửa sổ phòng ngủ. Thiên nhiên mang lại sự bình yên cho tâm trí tôi.",
    blanks: ["branch", "morning", "leaves", "window", "peace"]
  },
  {
    id: "a1-012",
    title: "My Bedroom",
    level: "A1",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
    paragraph: "My bedroom is small but very comfortable. There is a soft bed in the corner. A wooden desk sits near the big window. My white lamp helps me read books at night. I keep everything neat and clean.",
    translation: "Phòng ngủ của tôi nhỏ nhưng rất thoải mái. Có một chiếc giường êm ái ở góc phòng. Một chiếc bàn gỗ đặt gần cửa sổ lớn. Chiếc đèn màu trắng giúp tôi đọc sách vào ban đêm. Tôi giữ mọi thứ ngăn nắp và sạch sẽ.",
    blanks: ["bedroom", "corner", "window", "lamp", "clean"]
  },
  {
    id: "a1-013",
    title: "Going to the Supermarket",
    level: "A1",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800&auto=format&fit=crop",
    paragraph: "Every Saturday, my mother and I go shopping. We push a metal cart down wide aisles. We buy fresh vegetables, milk, and sweet bread. The supermarket is always crowded on weekends. We walk home with heavy bags.",
    translation: "Mỗi thứ Bảy, mẹ tôi và tôi đi mua sắm. Chúng tôi đẩy một chiếc xe đẩy bằng kim loại dọc theo những lối đi rộng. Chúng tôi mua rau tươi, sữa và bánh mì ngọt. Siêu thị luôn đông đúc vào cuối tuần. Chúng tôi đi bộ về nhà với những chiếc túi nặng.",
    blanks: ["shopping", "cart", "vegetables", "crowded", "bags"]
  },
  {
    id: "a1-014",
    title: "My Weekend Hobby",
    level: "A1",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    paragraph: "Painting pictures is my favorite weekend hobby. I use bright colors like yellow and blue. My white paper becomes a colorful landscape. I show my artwork to my proud parents. They smile and praise my creative skills.",
    translation: "Vẽ tranh là sở thích cuối tuần yêu thích của tôi. Tôi dùng những màu sáng như vàng và xanh dương. Tờ giấy trắng của tôi trở thành một phong cảnh đầy màu sắc. Tôi khoe tác phẩm nghệ thuật của mình với bố mẹ đầy tự hào. Họ mỉm cười và khen ngợi kỹ năng sáng tạo của tôi.",
    blanks: ["painting", "colors", "landscape", "parents", "skills"]
  },
  {
    id: "a1-015",
    title: "The Friendly Cow",
    level: "A1",
    image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=800&auto=format&fit=crop",
    paragraph: "Uncle John has a quiet farm in the countryside. A big black and white cow lives there. It eats fresh green grass all day long. The cow gives us sweet white milk every morning. Animals make farm life wonderful.",
    translation: "Chú John có một trang trại yên tĩnh ở vùng quê. Một con bò lớn màu đen và trắng sống ở đó. Nó ăn cỏ xanh tươi suốt cả ngày dài. Con bò cung cấp cho chúng ta sữa trắng ngọt ngào mỗi buổi sáng. Động vật làm cho cuộc sống trang trại trở nên tuyệt vời.",
    blanks: ["farm", "cow", "grass", "milk", "wonderful"]
  },
  {
    id: "a1-016",
    title: "A Sunny Afternoon",
    level: "A1",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    paragraph: "The sun shines brightly in the clear sky. Golden light covers the sandy beach completely. Many children build tall sandcastles near the water. Cool waves wash gently against the shore. Everyone enjoys the warm summer day.",
    translation: "Mặt trời chiếu sáng rực rỡ trên bầu trời trong xanh. Ánh sáng vàng phủ kín bãi cát hoàn toàn. Nhiều trẻ em xây những lâu đài cát cao gần mặt nước. Những con sóng mát rượi vỗ nhẹ vào bờ. Mọi người tận hưởng ngày hè ấm áp.",
    blanks: ["sky", "beach", "sandcastles", "waves", "summer"]
  },
  {
    id: "a1-017",
    title: "My Little Brother",
    level: "A1",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop",
    paragraph: "Leo is my cute three-year-old brother. He has big brown eyes and curly hair. He loves playing with plastic blocks on the floor. Sometimes he laughs loudly at funny cartoons. I love helping him build tall towers.",
    translation: "Leo là cậu em trai ba tuổi đáng yêu của tôi. Thằng bé có đôi mắt nâu to tròn và mái tóc xoăn. Thằng bé thích chơi những khối nhựa trên sàn nhà. Đôi khi nó cười lớn trước những bộ phim hoạt hình vui nhộn. Tôi thích giúp nó xây những tòa tháp cao.",
    blanks: ["brother", "hair", "blocks", "cartoons", "towers"]
  },
  {
    id: "a1-018",
    title: "Cooking Dinner",
    level: "A1",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    paragraph: "Evening comes and my mother prepares dinner. Delicious smells float around the warm kitchen. She chops fresh red tomatoes and green onions. I help set plates and spoons on the table. We eat a hearty meal together.",
    translation: "Buổi tối đến và mẹ tôi chuẩn bị bữa tối. Mùi thơm ngon bay khắp căn phòng bếp ấm cúng. Mẹ thái những quả cà chua đỏ tươi và hành lá xanh. Tôi giúp dọn đĩa và thìa lên bàn. Chúng tôi ăn một bữa ăn thịnh soạn cùng nhau.",
    blanks: ["evening", "kitchen", "tomatoes", "table", "meal"]
  },
  {
    id: "a1-019",
    title: "Walking the Dog",
    level: "A1",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop",
    paragraph: "I take my golden puppy out for a walk. We walk down the quiet suburban street. He sniffs every tree and green bush excitedly. Passersby smile when they see his happy face. Walking keeps both of us healthy.",
    translation: "Tôi đưa chú cún vàng của mình đi dạo. Chúng tôi đi dọc theo con đường ngoại ô yên tĩnh. Cậu ấy đánh hơi mọi cái cây và bụi râm một cách hào hứng. Người qua đường mỉm cười khi nhìn thấy gương mặt vui vẻ của cậu ấy. Đi bộ giúp cả hai chúng ta khỏe mạnh.",
    blanks: ["puppy", "street", "bush", "face", "healthy"]
  },
  {
    id: "a1-020",
    title: "Visiting Grandma",
    level: "A1",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    paragraph: "Every Sunday, we visit our sweet grandmother. She always bakes warm chocolate cookies for us. Her cozy house smells like sweet vanilla sugar. We sit on the porch and share wonderful stories. These visits bring joy to our hearts.",
    translation: "Mỗi Chủ Nhật, chúng tôi đến thăm người bà ngọt ngào của mình. Bà luôn nướng bánh quy sô-cô-la ấm cho chúng tôi. Ngôi nhà ấm cúng của bà thơm mùi đường va-ni ngọt ngào. Chúng tôi ngồi ngoài hiên nhà và chia sẻ những câu chuyện tuyệt vời. Những chuyến thăm này mang lại niềm vui cho trái tim chúng tôi.",
    blanks: ["grandmother", "cookies", "house", "stories", "heart"]
  },
  {
    id: "a1-021",
    title: "My Bicycle",
    level: "A1",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=800&auto=format&fit=crop",
    paragraph: "I own a shiny red bicycle. My father gave it to me on my birthday. I ride it around the neighborhood after school. The cool wind blows softly against my face. Cycling is my favorite outdoor sport.",
    translation: "Tôi sở hữu một chiếc xe đạp màu đỏ bóng loáng. Bố tôi đã tặng nó cho tôi vào ngày sinh nhật. Tôi lái nó quanh khu xóm sau giờ học. Gió mát thổi nhẹ nhàng vào mặt tôi. Đạp xe là môn thể thao ngoài trời yêu thích của tôi.",
    blanks: ["bicycle", "birthday", "neighborhood", "wind", "sport"]
  },
  {
    id: "a1-022",
    title: "A Winter Snow Day",
    level: "A1",
    image: "https://images.unsplash.com/photo-1616188199059-569244ef1f07?q=80&w=870&auto=format&fit=crop",
    paragraph: "White snow falls heavily from the gray sky. Everything outside looks clean and freezing. Children wear thick coats and warm wool hats. They build a big snowman in the yard. Winter brings magical joy to everyone.",
    translation: "Tuyết trắng rơi dày đặc từ bầu trời xám xịt. Mọi thứ bên ngoài trông sạch sẽ và lạnh cóng. Trẻ em mặc áo khoác dày và đội mũ len ấm áp. Chúng xây một người tuyết lớn ở trong sân. Mùa đông mang lại niềm vui kỳ diệu cho mọi người.",
    blanks: ["snow", "sky", "coats", "snowman", "winter"]
  },
  {
    id: "a1-023",
    title: "Writing a Letter",
    level: "A1",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop",
    paragraph: "I sit at my desk with paper and pen. I want to write a letter to my friend. She lives in a distant city far away. I tell her about my new school life. Then I put the letter inside a red envelope.",
    translation: "Tôi ngồi vào bàn làm việc với giấy và bút. Tôi muốn viết một bức thư cho người bạn của mình. Cô ấy sống ở một thành phố xa xôi cách biệt. Tôi kể cho cô ấy nghe về cuộc sống trường học mới của mình. Sau đó tôi bỏ bức thư vào một phong bì đỏ.",
    blanks: ["desk", "friend", "city", "school", "envelope"]
  },
  {
    id: "a1-024",
    title: "At the Library",
    level: "A1",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    paragraph: "The school library is quiet and peaceful. Rows of wooden shelves hold thousands of books. Students sit at tables reading interesting stories. The librarian helps me find a science book. Reading expands our imagination and knowledge.",
    translation: "Thư viện trường học yên tĩnh và bình yên. Những hàng kệ gỗ chứa hàng nghìn cuốn sách. Học sinh ngồi tại các bàn đọc những câu chuyện thú vị. Thủ thư giúp tôi tìm một cuốn sách khoa học. Đọc sách mở rộng trí tưởng tượng và kiến thức của chúng ta.",
    blanks: ["library", "books", "students", "librarian", "knowledge"]
  },
  {
    id: "a1-025",
    title: "My Mother's Garden",
    level: "A1",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
    paragraph: "My mother grows many colorful flowers in the yard. Red roses and yellow sunflowers bloom proudly. She waters the plants every single morning. Bees buzz happily around the sweet petals. The garden looks like a bright painting.",
    translation: "Mẹ tôi trồng nhiều loài hoa đầy màu sắc trong sân. Hoa hồng đỏ và hướng dương vàng nở rộ kiêu hãnh. Mẹ tưới nước cho cây vào mỗi buổi sáng. Những chú ong vo ve hạnh phúc quanh những cánh hoa ngọt ngào. Khu vườn trông giống như một bức tranh rực rỡ.",
    blanks: ["flowers", "sunflowers", "morning", "petals", "painting"]
  },
  {
    id: "a1-026",
    title: "Going Shopping for Shoes",
    level: "A1",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
    paragraph: "My old shoes are too small for my feet. Today, my father takes me to the shoe store. I try on a pair of comfortable white sneakers. They fit my feet perfectly and look cool. I wear them home with a big smile.",
    translation: "Những đôi giày cũ của tôi đã quá nhỏ đối với chân tôi. Hôm nay, bố đưa tôi đến cửa hàng giày. Tôi thử một đôi giày thể thao trắng thoải mái. Chúng vừa vặn với chân tôi một cách hoàn hảo và trông rất ngầu. Tôi mang chúng về nhà với nụ cười lớn.",
    blanks: ["shoes", "store", "sneakers", "feet", "smile"]
  },
  {
    id: "a1-027",
    title: "The Weekend Picnic",
    level: "A1",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop",
    paragraph: "Our family goes on a picnic in the valley. We spread a large red blanket on the grass. My mother packs sandwiches, apples, and cold lemonade. We talk and laugh under the shade of trees. Nature makes us feel peaceful and refreshed.",
    translation: "Gia đình chúng tôi đi dã ngoại ở thung lũng. Chúng tôi trải một tấm chăn đỏ lớn trên bãi cỏ. Mẹ tôi chuẩn bị bánh mì kẹp, táo và nước chanh lạnh. Chúng tôi trò chuyện và cười đùa dưới bóng râm của cây cối. Thiên nhiên làm chúng ta cảm thấy bình yên và sảng khoái.",
    blanks: ["picnic", "blanket", "sandwiches", "shade", "peaceful"]
  },
  {
    id: "a1-028",
    title: "My Pet Fish",
    level: "A1",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop",
    paragraph: "I have a small glass tank in my room. Inside swim three bright orange goldfish. They move their fins gracefully through the water. Every morning, I drop tiny food flakes into the water. Watching them swim calms my busy mind.",
    translation: "Tôi có một bể kính nhỏ trong phòng mình. Bên trong bơi ba con cá vàng cam sáng rực. Chúng di chuyển vây một cách uyển chuyển qua làn nước. Mỗi buổi sáng, tôi thả những mảnh thức ăn nhỏ vào nước. Ngắm nhìn chúng bơi lội làm dịu tâm trí bận rộn của tôi.",
    blanks: ["tank", "goldfish", "water", "food", "mind"]
  },
  {
    id: "a1-029",
    title: "Cleaning My Room",
    level: "A1",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    paragraph: "Saturday morning is time to clean my room. First, I pick up all my scattered toys. Then, I fold my clean clothes neatly into drawers. After that, I sweep the dusty floor with a broom. My bedroom looks shiny and organized.",
    translation: "Sáng thứ Bảy là thời gian dọn dẹp phòng của tôi. Đầu tiên, tôi nhặt tất cả đồ chơi vương vãi của mình. Sau đó, tôi gấp quần áo sạch gọn gàng vào ngăn kéo. Kế tiếp, tôi quét sàn nhà đầy bụi bằng một chiếc chổi. Phòng ngủ của tôi trông sáng bóng và ngăn nắp.",
    blanks: ["room", "toys", "clothes", "floor", "organized"]
  },
  {
    id: "a1-030",
    title: "A Trip to the Zoo",
    level: "A1",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=800&auto=format&fit=crop",
    paragraph: "My parents take me to the city zoo today. We see tall giraffes eating green leaves from trees. A huge brown bear sleeps lazily under the sun. We also watch funny monkeys jumping around cages. This trip gives me unforgettable memories.",
    translation: "Bố mẹ đưa tôi đến sở thú thành phố hôm nay. Chúng tôi thấy những con hươu cao cổ đang ăn lá xanh từ cây. Một chú gấu nâu khổng lồ ngủ lười biếng dưới ánh mặt trời. Chúng tôi cũng ngắm những chú khỉ vui nhộn nhảy nhót quanh chuồng. Chuyến đi này mang lại cho tôi những kỷ niệm khó quên.",
    blanks: ["zoo", "giraffes", "bear", "monkeys", "memories"]
  },
  {
    id: "a1-031",
    title: "Making Orange Juice",
    level: "A1",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800&auto=format&fit=crop",
    paragraph: "I want to make fresh juice for my family. First, I wash four bright yellow oranges. Then, I cut them carefully with a plastic knife. I squeeze the fruit into a glass cup. The sweet juice tastes refreshing and delicious.",
    translation: "Tôi muốn làm nước ép tươi cho gia đình mình. Đầu tiên, tôi rửa bốn quả cam vàng tươi. Sau đó, tôi cắt chúng cẩn thận bằng một con dao nhựa. Tôi vắt trái cây vào một chiếc cốc thủy tinh. Nước ép ngọt ngào có vị sảng khoái và ngon tuyệt.",
    blanks: ["juice", "oranges", "knife", "cup", "delicious"]
  },
  {
    id: "a1-032",
    title: "My Favorite Toy",
    level: "A1",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop",
    paragraph: "I have a green stuffed dinosaur as a toy. Its name is Rex and it is very soft. I sleep with Rex in my bed every night. When I feel lonely, I hold it tightly. It is my truest and best friend.",
    translation: "Tôi có một con khủng long nhồi bông màu xanh lá làm đồ chơi. Tên nó là Rex và nó rất mềm. Tôi ngủ cùng Rex trên giường mỗi tối. Khi tôi cảm thấy cô đơn, tôi ôm nó thật chặt. Nó là người bạn chân thật và tuyệt vời nhất của tôi.",
    blanks: ["dinosaur", "soft", "bed", "lonely", "friend"]
  },
  {
    id: "a1-033",
    title: "Going to the Bakery",
    level: "A1",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    paragraph: "The local bakery smells like warm butter and sugar. Golden bread loaves sit neatly on wooden shelves. I buy three chocolate croissants for afternoon snacks. The friendly baker smiles and greets me warmly. Walking home, I can smell the sweet pastries.",
    translation: "Tiệm bánh địa phương thơm mùi bơ ấm và đường. Những ổ bánh mì vàng xếp gọn gàng trên kệ gỗ. Tôi mua ba chiếc bánh sừng bò sô-cô-la cho bữa xế chiều. Người thợ làm bánh thân thiện mỉm cười và chào đón tôi nồng nhiệt. Đi bộ về nhà, tôi có thể ngửi thấy mùi bánh ngọt.",
    blanks: ["bakery", "shelves", "croissants", "baker", "pastries"]
  },
  {
    id: "a1-034",
    title: "My English Lesson",
    level: "A1",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    paragraph: "Every Tuesday, I attend an English class. Our teacher introduces new words on a whiteboard. We practice speaking sentences with our partners. I write important grammar notes in my notebook. Learning English helps me talk to foreigners.",
    translation: "Mỗi thứ Ba, tôi tham gia một lớp học tiếng Anh. Giáo viên của chúng tôi giới thiệu các từ mới trên bảng trắng. Chúng tôi luyện nói các câu với bạn cặp của mình. Tôi viết các ghi chú ngữ pháp quan trọng vào vở. Học tiếng Anh giúp tôi trò chuyện với người nước ngoài.",
    blanks: ["class", "whiteboard", "partners", "notebook", "foreigners"]
  },
  {
    id: "a1-035",
    title: "A Quiet Afternoon Read",
    level: "A1",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    paragraph: "The afternoon sun shines softly through the window. I sit comfortably in my large armchair. I open an adventure book with colorful pictures. Time passes quickly as I read exciting chapters. Reading books is my favorite relaxation.",
    translation: "Nắng chiều chiếu nhẹ nhàng qua cửa sổ. Tôi ngồi thoải mái trong chiếc ghế bành lớn của mình. Tôi mở một cuốn sách phiêu lưu với những bức tranh màu sắc. Thời gian trôi qua nhanh chóng khi tôi đọc những chương sách ly kỳ. Đọc sách là sự thư giãn yêu thích của tôi.",
    blanks: ["window", "armchair", "pictures", "chapters", "relaxation"]
  },
  {
    id: "a1-036",
    title: "Watching the Stars",
    level: "A1",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop",
    paragraph: "Night falls and the sky turns dark blue. Countless tiny stars shine brightly above us. A round yellow moon glows like a lantern. I stand on my balcony and look up. The night universe is a magnificent mystery.",
    translation: "Đêm buông xuống và bầu trời chuyển sang màu xanh đậm. Vô số ngôi sao nhỏ bé lấp lánh rực rỡ phía trên chúng ta. Một vầng trăng tròn vàng tỏa sáng như một chiếc đèn lồng. Tôi đứng ở ban công và ngước nhìn lên. Vũ trụ ban đêm là một điều kỳ diệu tuyệt vời.",
    blanks: ["sky", "stars", "moon", "balcony", "mystery"]
  },
  {
    id: "a1-037",
    title: "My Grandmother's Kitchen",
    level: "A1",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    paragraph: "My grandmother's kitchen is always warm and cozy. She stirs vegetable soup in a big metal pot. The sweet aroma of cinnamon fills the air. She hands me a small bowl of hot soup. Everything she cooks tastes like absolute love.",
    translation: "Phòng bếp của bà tôi luôn ấm áp và ấm cúng. Bà khuấy súp rau củ trong một cái nồi kim loại lớn. Mùi thơm ngọt của quế tràn ngập không khí. Bà đưa cho tôi một bát súp nóng nhỏ. Mọi thứ bà nấu đều có hương vị như tình yêu tuyệt đối.",
    blanks: ["kitchen", "pot", "cinnamon", "soup", "love"]
  },
  {
    id: "a1-038",
    title: "A Day at the Beach",
    level: "A1",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    paragraph: "We drive to the sandy ocean beach today. Cool blue waves crash against the wet shore. I collect pretty seashell treasures in a bucket. My brother builds a fortress out of sand. The warm summer breeze feels wonderful.",
    translation: "Chúng tôi lái xe đến bãi biển đại dương cát trắng hôm nay. Những con sóng xanh mát vỗ vào bờ ướt. Tôi thu thập những kho báu vỏ sò xinh xắn vào một chiếc xô. Anh trai tôi xây một pháo đài bằng cát. Gió hè ấm áp mang lại cảm giác tuyệt vời.",
    blanks: ["beach", "waves", "bucket", "fortress", "breeze"]
  },
  {
    id: "a1-039",
    title: "My School Friends",
    level: "A1",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    paragraph: "I have three wonderful friends at my school. We play soccer together during recess break. Sometimes we share our lunch boxes on benches. They always help me when math problems get hard. True school friends make every day special.",
    translation: "Tôi có ba người bạn tuyệt vời ở trường của mình. Chúng tôi đá bóng cùng nhau trong giờ nghỉ giải lao. Đôi khi chúng tôi chia sẻ hộp cơm trưa trên những băng ghế. Họ luôn giúp tôi khi các bài toán trở nên khó. Những người bạn học thực sự làm cho mỗi ngày trở nên đặc biệt.",
    blanks: ["friends", "soccer", "recess", "lunch", "special"]
  },
  {
    id: "a1-040",
    title: "Feeding the Ducks",
    level: "A1",
    image: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=800&auto=format&fit=crop",
    paragraph: "My grandfather takes me to the park lake. Many white ducks swim happily on the water. We throw small bread crumbs into the pond. The hungry ducks paddle quickly toward us. Feeding animals brings a bright smile to my face.",
    translation: "Ông đưa tôi đến hồ nước trong công viên. Nhiều chú con vịt trắng bơi lội vui vẻ trên mặt nước. Chúng tôi ném những mẩu vụn bánh mì nhỏ xuống ao. Những chú vịt đói bơi nhanh về phía chúng tôi. Cho động vật ăn mang lại nụ cười rạng rỡ trên khuôn mặt tôi.",
    blanks: ["lake", "ducks", "crumbs", "pond", "smile"]
  },
  {
    id: "a1-041",
    title: "My Winter Scarf",
    level: "A1",
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=800&auto=format&fit=crop",
    paragraph: "Winter weather is very cold and windy. My grandmother knitted a soft wool scarf for me. It has bright red and white stripes. I wrap it tightly around my neck every morning. It keeps me warm on the walk to school.",
    translation: "Thời tiết mùa đông rất lạnh và có gió. Bà tôi đã đan một chiếc khăn quàng cổ bằng len mềm cho tôi. Nó có các sọc đỏ và trắng tươi sáng. Tôi quấn nó thật chặt quanh cổ mình mỗi buổi sáng. Nó giữ ấm cho tôi trên đoạn đường đi bộ đến trường.",
    blanks: ["winter", "scarf", "stripes", "neck", "warm"]
  },
  {
    id: "a1-042",
    title: "A Musical Afternoon",
    level: "A1",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    paragraph: "Music fills our house every Sunday afternoon. My sister plays lovely melodies on her piano. I sit on the sofa and listen quietly. The gentle tunes make our home feel peaceful. Music is a wonderful language for everyone.",
    translation: "Âm nhạc ngập tràn ngôi nhà chúng tôi mỗi chiều Chủ Nhật. Em gái tôi chơi những giai điệu đáng yêu trên đàn piano của con bé. Tôi ngồi trên ghế sofa và lắng nghe im lặng. Những giai điệu nhẹ nhàng làm cho ngôi nhà của chúng tôi trở nên bình yên. Âm nhạc là một ngôn ngữ tuyệt vời cho mọi người.",
    blanks: ["house", "piano", "sofa", "peaceful", "language"]
  },
  {
    id: "a1-043",
    title: "My Pet Rabbit",
    level: "A1",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=800&auto=format&fit=crop",
    paragraph: "Snowy is a fluffy white rabbit in my backyard. She has long ears and a tiny pink nose. I feed her crisp green lettuce leaves daily. She hops around the grass in quick jumps. Watching her play brings me great happiness.",
    translation: "Snowy là một chú thỏ trắng xù lông ở sân sau nhà tôi. Con bé có đôi tai dài và chiếc mũi hồng bé xíu. Tôi cho con bé ăn lá xà lách xanh giòn hàng ngày. Con bé nhảy quanh bãi cỏ bằng những cú nhảy nhanh. Ngắm nhìn con bé chơi đùa mang lại cho tôi niềm hạnh phúc lớn lao.",
    blanks: ["rabbit", "ears", "lettuce", "grass", "happiness"]
  },
  {
    id: "a1-044",
    title: "A Rainy Afternoon at School",
    level: "A1",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=800&auto=format&fit=crop",
    paragraph: "Heavy rain pours down outside the classroom windows. We cannot play soccer in the yard today. Instead, our teacher tells us an exciting story. We listen attentively to every single word. Indoor rainy days can be quite fun too.",
    translation: "Mưa lớn trút xuống bên ngoài cửa sổ phòng học. Chúng tôi không thể đá bóng ở sân trường hôm nay. Thay vào đó, giáo viên của chúng tôi kể cho chúng tôi nghe một câu chuyện ly kỳ. Chúng tôi chú ý lắng nghe từng từ một. Những ngày mưa ở trong nhà cũng có thể khá vui.",
    blanks: ["rain", "classroom", "story", "word", "fun"]
  },
  {
    id: "a1-045",
    title: "Building a Lego Castle",
    level: "A1",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop",
    paragraph: "I open my big box of colorful plastic blocks. I want to build a tall medieval castle. Red, blue, and yellow bricks snap together easily. After an hour, the magnificent castle stands firmly. I feel proud of my creative work.",
    translation: "Tôi mở hộp khối nhựa nhiều màu lớn của mình. Tôi muốn xây một lâu đài thời trung cổ cao. Những viên gạch đỏ, xanh dương và vàng gắn kết với nhau dễ dàng. Sau một giờ, lâu đài nguy nga đứng vững chãi. Tôi cảm thấy tự hào về công việc sáng tạo của mình.",
    blanks: ["blocks", "castle", "bricks", "hour", "work"]
  },
  {
    id: "a1-046",
    title: "My Favorite T-Shirt",
    level: "A1",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    paragraph: "I have a bright yellow cotton t-shirt. It has a cute cartoon tiger printed on the front. I wear it whenever I go out with friends. The soft fabric feels very comfortable in summer. It is my absolute favorite clothing item.",
    translation: "Tôi có một chiếc áo phông bằng cotton màu vàng tươi. Nó có hình chú hổ hoạt hình dễ thương in ở mặt trước. Tôi mặc nó bất cứ khi nào đi chơi với bạn bè. Chất vải mềm mại mang lại cảm giác rất thoải mái vào mùa hè. Nó là món đồ quần áo yêu thích tuyệt đối của tôi.",
    blanks: ["t-shirt", "tiger", "friends", "fabric", "clothing"]
  },
  {
    id: "a1-047",
    title: "Watering the Lawn",
    level: "A1",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
    paragraph: "Summer afternoons are dry and quite hot. I hold a green rubber hose in my hands. Water sprays out in sparkling droplets across the grass. The thirsty green plants drink the fresh water eagerly. I love helping my father in the yard.",
    translation: "Buổi chiều mùa hè khô ráo và khá nóng. Tôi cầm một ống nước bằng cao su màu xanh trên tay. Nước phun ra thành những giọt lấp lánh khắp bãi cỏ. Những loại cây xanh đang khát nước uống nguồn nước tươi một cách háo hức. Tôi thích giúp bố ở trong sân.",
    blanks: ["afternoons", "hose", "grass", "plants", "father"]
  },
  {
    id: "a1-048",
    title: "My Drawing Notebook",
    level: "A1",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    paragraph: "My drawing notebook has fifty blank white pages. I use colored pencils to draw animals and trees. A big brown monkey hangs from a branch. Next to it stands a smiling yellow giraffe. Art lets me express my imagination freely.",
    translation: "Vở vẽ của tôi có năm mươi trang trắng trống. Tôi dùng bút chì màu để vẽ động vật và cây cối. Một con khỉ nâu lớn đu trên cành cây. Bên cạnh nó là một con hươu cao cổ màu vàng đang mỉm cười. Nghệ thuật cho phép tôi thể hiện trí tưởng tượng của mình một cách tự do.",
    blanks: ["notebook", "pencils", "monkey", "giraffe", "imagination"]
  },
  {
    id: "a1-049",
    title: "Visiting the Bakery with Dad",
    level: "A1",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    paragraph: "Dad and I walk to the corner bake shop. The smell of warm vanilla cake fills the air. We buy a box of sweet strawberry cupcakes. We walk back home while eating them happily. Sweet treats always make our day better.",
    translation: "Bố và tôi đi bộ đến cửa hàng bánh ở góc phố. Mùi bánh va-ni ấm áp tràn ngập không gian. Chúng tôi mua một hộp bánh cupcake dâu tây ngọt ngào. Chúng tôi đi bộ về nhà vừa ăn chúng vừa vui vẻ. Đồ ngọt luôn làm cho ngày của chúng ta tốt đẹp hơn.",
    blanks: ["bakery", "cake", "cupcakes", "home", "treats"]
  },
  {
    id: "a1-050",
    title: "My Orange Cat",
    level: "A1",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
    paragraph: "Ginger is a fat orange cat with green eyes. He sleeps on the warm rug near the door. Whenever I return from school, he meows softly. He rubs his head against my shoes to greet me. Having a pet cat is a true blessing.",
    translation: "Ginger là một con mèo cam béo với đôi mắt xanh lá. Nó ngủ trên chiếc thảm ấm gần cửa ra vào. Bất cứ khi nào tôi đi học về, nó kêu meo meo nhẹ nhàng. Nó cọ đầu vào giày của tôi để chào đón tôi. Có một con mèo cưng là một ân huệ thực sự.",
    blanks: ["cat", "eyes", "rug", "school", "blessing"]
  },
  {
    id: "a1-051",
    title: "A Sunny Morning Run",
    level: "A1",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop",
    paragraph: "Early morning sunlight shines through the tall trees. I put on my red sneakers for a jog. I run along the quiet path in the park. Fresh morning air fills my lungs deeply. Running keeps my body strong and energetic.",
    translation: "Ánh nắng sáng sớm chiếu xuyên qua những tán cây cao. Tôi mang giày thể thao màu đỏ để chạy bộ. Tôi chạy dọc theo con đường yên tĩnh trong công viên. Không khí buổi sáng trong lành lấp đầy lồng ngực tôi sâu thẳm. Chạy bộ giữ cho cơ thể tôi khỏe mạnh và tràn đầy năng lượng.",
    blanks: ["sunlight", "jog", "park", "lungs", "strong"]
  },
  {
    id: "a1-052",
    title: "The School Playground",
    level: "A1",
    image: "https://images.unsplash.com/photo-1460788150444-d9dc07fa9dba?q=80&w=870&auto=format&fit=crop",
    paragraph: "The school playground is filled with happy children. Some kids swing high on the metal swings. Others chase each other around the tall slides. Laughter and cheerful shouts echo everywhere. Recess is definitely the best part of school.",
    translation: "Sân chơi trường học tràn ngập tiếng cười của trẻ em. Một số đứa trẻ xích đu cao trên xích đu sắt. Những đứa khác rượt đuổi nhau quanh mách trượt cao. Tiếng cười và những tiếng hò reo vui vẻ vang vọng khắp nơi. Giờ ra chơi chắc chắn là phần tuyệt vời nhất của trường học.",
    blanks: ["playground", "children", "swings", "laughter", "school"]
  },
  {
    id: "a1-053",
    title: "My English Dictionary",
    level: "A1",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
    paragraph: "I keep a thick English dictionary on my desk. Whenever I find hard words, I look them up. The pages contain thousands of useful definitions. It helps me understand stories better every day. Learning words builds a strong language foundation.",
    translation: "Tôi giữ một cuốn từ điển tiếng Anh dày trên bàn của mình. Bất cứ khi nào tìm thấy từ khó, tôi đều tra cứu chúng. Các trang sách chứa hàng ngàn định nghĩa hữu ích. Nó giúp tôi hiểu các câu chuyện tốt hơn mỗi ngày. Học từ vựng xây dựng nền tảng ngôn ngữ vững chắc.",
    blanks: ["dictionary", "desk", "words", "stories", "foundation"]
  },
  {
    id: "a1-054",
    title: "My Colorful Markers",
    level: "A1",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    paragraph: "I have a box of twenty bright color markers. I use them to sketch pictures for my homework. Red, blue, green, and yellow create vibrant scenes. My teacher always praises my neat colored drawings. Art class is my favorite school subject.",
    translation: "Tôi có một hộp gồm hai mươi bút lông màu sáng. Tôi dùng chúng để phác thảo tranh cho bài tập về nhà của mình. Đỏ, xanh dương, xanh lá và vàng tạo nên những khung cảnh sống động. Giáo viên của tôi luôn khen ngợi những bức vẽ màu gọn gàng của tôi. Lớp mỹ thuật là môn học ở trường yêu thích của tôi.",
    blanks: ["markers", "homework", "scenes", "drawings", "subject"]
  },
  {
    id: "a1-055",
    title: "A Bowl of Hot Soup",
    level: "A1",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    paragraph: "Cold winter evenings require a warm bowl of soup. My mother cooks chicken soup with carrots and potatoes. Steam rises gently from the ceramic bowl. Eating it makes my whole body feel cozy. Warm food brings comfort on freezing nights.",
    translation: "Những buổi tối mùa đông lạnh giá cần một bát súp ấm áp. Mẹ tôi nấu súp gà với cà rốt và khoai tây. Hơi nước bốc lên nhẹ nhàng từ chiếc bát sứ. Ăn nó làm cho toàn bộ cơ thể tôi cảm thấy ấm cúng. Thức ăn ấm áp mang lại sự thoải mái vào những đêm lạnh cóng.",
    blanks: ["evenings", "soup", "carrots", "bowl", "comfort"]
  },
  {
    id: "a1-056",
    title: "Feeding the Goldfish",
    level: "A1",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop",
    paragraph: "Every morning before school, I feed my fish. I sprinkle tiny brown food flakes into the tank. The orange fish swim up quickly to eat them. Bubbles rise as they move their tails. Taking care of pets teaches responsibility.",
    translation: "Mỗi buổi sáng trước khi đi học, tôi cho cá ăn. Tôi rắc những mảnh thức ăn màu nâu nhỏ vào bể. Những con cá cam bơi lên nhanh chóng để ăn chúng. Những bong bóng nổi lên khi chúng cử động đuôi. Chăm sóc thú cưng dạy cho ta tính trách nhiệm.",
    blanks: ["school", "fish", "tank", "tails", "responsibility"]
  },
  {
    id: "a1-057",
    title: "My Comfortable Living Room",
    level: "A1",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    paragraph: "Our family living room is bright and spacious. A soft blue sofa sits against the white wall. A wooden coffee table holds family photo albums. We gather here every evening to talk together. This room is the heart of our home.",
    translation: "Phòng khách của gia đình chúng tôi sáng sủa và rộng rãi. Một chiếc ghế sofa màu xanh mềm dựa vào bức tường trắng. Một chiếc bàn cà phê bằng gỗ chứa các album ảnh gia đình. Chúng tôi quây quần ở đây mỗi tối để trò chuyện cùng nhau. Căn phòng này là trái tim của ngôi nhà chúng tôi.",
    blanks: ["living", "sofa", "table", "evening", "home"]
  },
  {
    id: "a1-058",
    title: "A Walk in the Woods",
    level: "A1",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    paragraph: "My father and I walk through the green forest. Tall pine trees stretch up toward the blue sky. Small brown squirrels scurry across the dirt path. Wild yellow flowers bloom near the bushes. Nature is full of wonderful surprises.",
    translation: "Bố và tôi đi bộ xuyên qua khu rừng xanh. Những cây thông cao vươn lên hướng về bầu trời xanh. Những con sóc nâu nhỏ chạy nhanh qua con đường đất. Những bông hoa vàng dại nở gần các bụi cây. Thiên nhiên đầy ắp những điều bất ngờ tuyệt vời.",
    blanks: ["forest", "trees", "squirrels", "flowers", "surprises"]
  },
  {
    id: "a1-059",
    title: "Buying Fresh Bread",
    level: "A1",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    paragraph: "I walk down the street to the local bakery. The friendly baker hands me a warm baguette. It smells delicious and feels crispy outside. I carry the paper bag carefully back home. Fresh bread makes breakfast taste amazing.",
    translation: "Tôi đi bộ xuống phố đến tiệm bánh địa phương. Người thợ làm bánh thân thiện đưa cho tôi một ổ bánh mì dài ấm áp. Nó thơm ngon và có lớp vỏ giòn bên ngoài. Tôi mang túi giấy cẩn thận về nhà. Bánh mì tươi làm cho bữa sáng có vị tuyệt vời.",
    blanks: ["street", "baguette", "crispy", "bag", "breakfast"]
  },
  {
    id: "a1-060",
    title: "My School Uniform",
    level: "A1",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop",
    paragraph: "Every weekday morning, I wear my school uniform. It consists of a clean white button shirt and dark blue pants. My mother irons the clothes neatly every Sunday night. Dressing in uniform makes morning routines much faster. I feel proud wearing my school colors.",
    translation: "Mỗi buổi sáng các ngày trong tuần, tôi mặc đồng phục trường. Nó bao gồm một chiếc áo sơ mi cài nút màu trắng sạch sẽ và quần dài màu xanh đậm. Mẹ tôi ủi quần áo ngăn nắp vào mỗi tối Chủ Nhật. Mặc đồng phục làm cho thói quen buổi sáng nhanh hơn nhiều. Tôi cảm thấy tự hào khi mặc màu sắc trường mình.",
    blanks: ["uniform", "shirt", "pants", "clothes", "colors"]
  },
  {
    id: "a1-061",
    title: "Playing Board Games",
    level: "A1",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=800&auto=format&fit=crop",
    paragraph: "On rainy Friday nights, our family plays board games. We sit around the wooden dining table together. My brother rolls the dice and moves his token. Laughter fills the room as someone wins the match. Playing games brings us closer together.",
    translation: "Vào những tối thứ Sáu mưa gió, gia đình tôi chơi trò chơi bàn cờ. Chúng tôi ngồi quây quần bên bàn ăn bằng gỗ cùng nhau. Anh trai tôi tung xúc sắc và di chuyển quân cờ của mình. Tiếng cười ngập tràn căn phòng khi ai đó chiến thắng trận đấu. Chơi trò chơi kéo chúng tôi xích lại gần nhau hơn.",
    blanks: ["friday", "table", "dice", "laughter", "games"]
  },
  {
    id: "a1-062",
    title: "My Winter Coat",
    level: "A1",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
    paragraph: "Winter temperatures drop very low in our town. I wear a thick black winter coat outside. It has a fluffy hood that protects my ears. Deep pockets keep my hands warm from freezing wind. This coat is my best protection against cold weather.",
    translation: "Nhiệt độ mùa đông giảm xuống rất thấp ở thị trấn của chúng tôi. Tôi mặc một chiếc áo khoác mùa đông màu đen dày bên ngoài. Nó có một chiếc mũ trùm xù lông bảo vệ tai của tôi. Các túi sâu giữ cho tay tôi ấm khỏi gió lạnh cóng. Chiếc áo khoác này là sự bảo vệ tốt nhất của tôi chống lại thời tiết lạnh.",
    blanks: ["temperatures", "coat", "hood", "hands", "weather"]
  },
  {
    id: "a1-063",
    title: "My Pet Turtle",
    level: "A1",
    image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=800&auto=format&fit=crop",
    paragraph: "Sammy is a small green turtle living in a glass tank. He carries a hard brown shell on his back. He moves very slowly across the rocks. I feed him green lettuce leaves and tiny pellets. Watching Sammy swim is very relaxing.",
    translation: "Sammy là một con rùa xanh nhỏ sống trong bể kính. Nó mang một chiếc mai nâu cứng trên lưng. Nó di chuyển rất chậm qua các tảng đá. Tôi cho nó ăn lá xà lách xanh và những viên thức ăn nhỏ. Ngắm Sammy bơi lội rất thư giãn.",
    blanks: ["turtle", "shell", "rocks", "pellets", "relaxing"]
  },
  {
    id: "a1-064",
    title: "A Bright Sunny Day",
    level: "A1",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    paragraph: "Today the weather is warm and perfectly sunny. There are no clouds in the bright blue sky. People walk happily in the local city park. Dogs run around chasing colorful rubber balls. It is a wonderful day to be outdoors.",
    translation: "Hôm nay thời tiết ấm áp và nắng hoàn hảo. Không có một bóng mây nào trên bầu trời xanh rực rỡ. Mọi người đi dạo vui vẻ trong công viên thành phố. Những chú chó chạy xung quanh đuổi theo những quả bóng cao su màu sắc. Đó là một ngày tuyệt vời để ở ngoài trời.",
    blanks: ["weather", "clouds", "park", "balls", "outdoors"]
  },
  {
    id: "a1-065",
    title: "My Morning Coffee",
    level: "A1",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    paragraph: "My father drinks hot coffee every single morning. He pours dark liquid from a silver pot. A sweet scent of roasted beans fills the kitchen. He sits by the window reading the daily newspaper. Morning coffee gives him energy for work.",
    translation: "Bố tôi uống cà phê nóng mỗi buổi sáng. Ông rót chất lỏng sậm màu từ một chiếc bình bạc. Hương thơm ngọt ngào của hạt rang ngập tràn phòng bếp. Ông ngồi bên cửa sổ đọc tờ báo hàng ngày. Cà phê buổi sáng mang lại cho ông năng lượng để làm việc.",
    blanks: ["coffee", "pot", "beans", "newspaper", "energy"]
  },
  {
    id: "a1-066",
    title: "My Desk Lamp",
    level: "A1",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    paragraph: "A sleek silver lamp sits on my wooden study desk. When night arrives, I turn on its bright light. It illuminates my open notebooks and textbooks clearly. This lamp helps me study without straining my eyes. Good lighting is essential for learning.",
    translation: "Một chiếc đèn màu bạc kiểu dáng đẹp nằm trên bàn học bằng gỗ của tôi. Khi đêm đến, nó bật ánh sáng rực rỡ lên. Nó chiếu sáng rõ ràng các vở ghi và sách giáo khoa đang mở của tôi. Chiếc đèn này giúp tôi học tập mà không làm mỏi mắt. Ánh sáng tốt là điều cần thiết cho việc học.",
    blanks: ["lamp", "desk", "light", "notebooks", "eyes"]
  },
  {
    id: "a1-067",
    title: "A Family Picnic",
    level: "A1",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop",
    paragraph: "We drive to the countryside for a weekend picnic. My mother brings a basket full of sandwiches and fruit. We sit on a large blanket under a shady tree. The gentle breeze makes us feel extremely relaxed. Family trips create precious memories.",
    translation: "Chúng tôi lái xe về vùng quê cho chuyến dã ngoại cuối tuần. Mẹ mang theo một giỏ đầy bánh mì kẹp và trái cây. Chúng tôi ngồi trên một tấm chăn lớn dưới bóng cây râm mát. Gió nhẹ làm chúng tôi cảm thấy cực kỳ thư giãn. Những chuyến đi gia đình tạo nên những kỷ niệm quý giá.",
    blanks: ["countryside", "basket", "blanket", "breeze", "memories"]
  },
  {
    id: "a1-068",
    title: "My English Notebook",
    level: "A1",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
    paragraph: "My English notebook has a bright blue cover. Inside, I write down new vocabulary words every day. I also draw simple pictures next to difficult meanings. Reviewing notes helps me remember words easily. Writing is a great way to learn languages.",
    translation: "Vở tiếng Anh của tôi có bìa màu xanh dương sáng. Bên trong, tôi ghi lại các từ vựng mới mỗi ngày. Tôi cũng vẽ những bức tranh đơn giản cạnh các nghĩa khó. Ôn tập ghi chú giúp tôi nhớ từ dễ dàng. Viết lách là một cách tuyệt vời để học ngoại ngữ.",
    blanks: ["notebook", "cover", "vocabulary", "notes", "languages"]
  },
  {
    id: "a1-069",
    title: "A Colorful Butterfly",
    level: "A1",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop",
    paragraph: "A gorgeous butterfly lands on a pink rose. Its wings display bright patterns of orange and black. It drinks sweet nectar quietly in the warm sun. I watch it without making any loud noise. Nature's tiny creatures are truly fascinating.",
    translation: "Một con bướm tuyệt đẹp đậu trên bông hoa hồng phồng. Đôi cánh của nó trưng bày các họa tiết sáng màu cam và đen. Nó uống mật ngọt lặng lẽ dưới ánh nắng ấm áp. Tôi ngắm nhìn nó mà không gây ra tiếng ồn lớn nào. Những sinh vật nhỏ bé của thiên nhiên thực sự hấp dẫn.",
    blanks: ["butterfly", "wings", "nectar", "noise", "creatures"]
  },
  {
    id: "a1-070",
    title: "My Favorite Sneakers",
    level: "A1",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
    paragraph: "I wear my favorite white sneakers to school daily. They have comfortable soles and strong black laces. Running in them feels light and effortless. My friends always say my shoes look very cool. I clean them every weekend to keep them white.",
    translation: "Tôi mang đôi giày thể thao trắng yêu thích đến trường hàng ngày. Chúng có đế thoải mái và dây giày đen chắc chắn. Chạy trong chúng mang lại cảm giác nhẹ nhàng và dễ dàng. Bạn bè của tôi luôn nói giày của tôi trông rất ngầu. Tôi làm sạch chúng mỗi cuối tuần để giữ chúng trắng.",
    blanks: ["sneakers", "soles", "laces", "friends", "weekend"]
  },
  {
    id: "a1-071",
    title: "A Stormy Night",
    level: "A1",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=800&auto=format&fit=crop",
    paragraph: "Dark clouds gather quickly across the night sky. Bright lightning flashes through my bedroom window. Loud thunder shakes the windows of our house. Heavy rain beats aggressively against the roof. I pull my warm blanket over my shoulders.",
    translation: "Những đám mây đen tụ tập nhanh chóng khắp bầu trời đêm. Ánh chớp sáng lóe qua cửa sổ phòng ngủ của tôi. Tiếng sấm lớn làm rung chuyển cửa sổ ngôi nhà chúng tôi. Mưa lớn quật mạnh vào mái nhà. Tôi kéo chiếc chăn ấm qua vai mình.",
    blanks: ["clouds", "lightning", "thunder", "roof", "blanket"]
  },
  {
    id: "a1-072",
    title: "My Pet Hamster",
    level: "A1",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=876&auto=format&fit=crop",
    paragraph: "Pip is a tiny brown hamster in a wire cage. He loves running fast on his metal wheel. Sometimes he stuffs sunflower seeds into his cheeks. I clean his cage every Wednesday afternoon. He is a very cute and active pet.",
    translation: "Pip là một chú chuột hamster nâu nhỏ trong lồng dây thép. Cậu ấy thích chạy nhanh trên chiếc bánh xe bằng kim loại. Đôi khi cậu ấy nhét hạt hướng dương vào má mình. Tôi dọn lồng cho cậu ấy vào mỗi chiều thứ Tư. Cậu ấy là một thú cưng rất dễ thương và năng động.",
    blanks: ["hamster", "cage", "wheel", "cheeks", "active"]
  },
  {
    id: "a1-073",
    title: "My School Lunch",
    level: "A1",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    paragraph: "Mother packs a delicious lunch box for me. Inside, there is a ham sandwich and crisp apples. She also includes a small bottle of fresh milk. I share my fruit with my best friend. School lunches taste much better with friends.",
    translation: "Mẹ chuẩn bị một hộp cơm trưa ngon lành cho tôi. Bên trong có một chiếc bánh mì kẹp thịt và táo giòn. Mẹ cũng kèm theo một chai sữa tươi nhỏ. Tôi chia sẻ trái cây với người bạn thân nhất của mình. Bữa trưa ở trường có vị ngon hơn nhiều khi có bạn bè.",
    blanks: ["lunch", "sandwich", "apples", "milk", "friend"]
  },
  {
    id: "a1-074",
    title: "A Quiet Morning Park",
    level: "A1",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=800&auto=format&fit=crop",
    paragraph: "The morning park is peaceful before the city wakes up. Dewdrops shine brightly on green grass blades. A few birds sing sweet melodies in the trees. I walk along the dirt path breathing fresh air. Morning walks bring calm to my soul.",
    translation: "Công viên buổi sáng yên bình trước khi thành phố thức dậy. Những giọt sương lấp lánh trên các ngọn cỏ xanh. Một vài chú chim hót những giai điệu ngọt ngào trên cây. Tôi đi bộ dọc theo con đường đất hít thở không khí trong lành. Đi bộ buổi sáng mang lại sự bình tĩnh cho tâm hồn tôi.",
    blanks: ["park", "dewdrops", "birds", "path", "soul"]
  },
  {
    id: "a1-075",
    title: "My Favorite Book",
    level: "A1",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    paragraph: "I own a thick adventure storybook with colorful pictures. It tells a tale of brave sailors crossing oceans. Every night before sleep, I read two chapters. The exciting plots capture my imagination completely. Reading is my favorite daily habit.",
    translation: "Tôi sở hữu một cuốn truyện phiêu lưu dày với những bức tranh màu sắc. Nó kể câu chuyện về những thủy thủ dũng cảm vượt đại dương. Mỗi đêm trước khi ngủ, tôi đọc hai chương. Các cốt truyện ly kỳ chiếm trọn trí tưởng tượng của tôi. Đọc sách là thói quen hàng ngày yêu thích của tôi.",
    blanks: ["storybook", "sailors", "sleep", "imagination", "habit"]
  },
  {
    id: "a1-076",
    title: "Baking Sweet Cookies",
    level: "A1",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    paragraph: "Saturday afternoon is perfect for baking chocolate cookies. My sister and I mix flour, sugar, and butter together. We shape small dough balls on a black tray. The oven bakes them until they turn golden brown. We eat them while they are warm.",
    translation: "Chiều thứ Bảy hoàn hảo để nướng bánh quy sô-cô-la. Em gái tôi và tôi trộn bột mì, đường và bơ lại với nhau. Chúng tôi nặn những viên bột nhỏ trên một khay đen. Lò nướng nướng chúng cho đến khi chuyển sang màu nâu vàng. Chúng tôi ăn chúng khi chúng còn ấm.",
    blanks: ["cookies", "flour", "tray", "oven", "warm"]
  },
  {
    id: "a1-077",
    title: "My Wooden Desk",
    level: "A1",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop",
    paragraph: "My study desk is made of solid brown wood. It stands near the bedroom window overlooking the street. On top, my books and colorful pens sit neatly. I sit in my comfortable chair to do homework daily. This desk is where my school success begins.",
    translation: "Bàn học của tôi được làm bằng gỗ nâu nguyên khối. Nó đứng gần cửa sổ phòng ngủ nhìn ra đường phố. Phía trên, sách vở và bút màu của tôi nằm ngăn nắp. Tôi ngồi vào chiếc ghế thoải mái của mình để làm bài tập hàng ngày. Bàn này là nơi thành công ở trường của tôi bắt đầu.",
    blanks: ["desk", "wood", "pens", "chair", "success"]
  },
  {
    id: "a1-078",
    title: "A Snowy Morning",
    level: "A1",
    image: "https://images.unsplash.com/photo-1697403638650-cbae512ad06e?q=80&w=870&auto=format&fit=crop",
    paragraph: "I look outside and see a white winter landscape. Snow covers the rooftops and streets completely. Children bundle up in heavy woolen coats and scarves. They roll giant snowballs to build a snowman. Winter morning adventures are always exciting.",
    translation: "Tôi nhìn ra bên ngoài và thấy cảnh quan mùa đông trắng xóa. Tuyết che phủ mái nhà và đường phố hoàn toàn. Trẻ em mặc ấm trong những chiếc áo khoác len nặng và khăn quàng cổ. Chúng lăn những quả cầu tuyết khổng lồ để xây người tuyết. Những cuộc phiêu lưu buổi sáng mùa đông luôn rất thú vị.",
    blanks: ["landscape", "rooftops", "scarves", "snowballs", "adventures"]
  },
  {
    id: "a1-079",
    title: "My English Teacher",
    level: "A1",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    paragraph: "Mrs. Davis is our kind and friendly English teacher. She writes clear sentences on the green classroom board. She speaks slowly so every student understands her words. We practice pronunciation exercises together in pairs. Her classes make learning languages enjoyable.",
    translation: "Cô Davis là giáo viên tiếng Anh tốt bụng và thân thiện của chúng tôi. Cô viết các câu rõ ràng lên bảng xanh của lớp học. Cô nói chậm để mọi học sinh đều hiểu lời cô. Chúng tôi luyện tập các bài tập phát âm cùng nhau theo cặp. Các lớp học của cô làm cho việc học ngôn ngữ trở nên thú vị.",
    blanks: ["teacher", "sentences", "student", "pronunciation", "enjoyable"]
  },
  {
    id: "a1-080",
    title: "Watching the Sunset",
    level: "A1",
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=800&auto=format&fit=crop",
    paragraph: "Evening approaches and paints the sky with bright colors. Red, orange, and purple clouds stretch across the horizon. I stand on our balcony watching the sun sink slowly. The peaceful evening breeze cools the warm air. Sunsets bring a calm end to the day.",
    translation: "Buổi chiều đến gần và tô điểm bầu trời bằng những màu sắc tươi sáng. Những đám mây đỏ, cam và tím trải dài khắp đường chân trời. Tôi đứng ở ban công nhà mình ngắm mặt trời chìm xuống từ từ. Gió chiều bình yên làm dịu không khí ấm áp. Hoàng hôn mang lại cái kết bình yên cho một ngày.",
    blanks: ["evening", "sky", "horizon", "balcony", "sunset"]
  },
  {
    id: "a1-081",
    title: "My Green Plant",
    level: "A1",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop",
    paragraph: "I keep a small green plant on my bookshelf. Its shiny leaves look fresh and healthy all year. Every Sunday morning, I pour a little water into its pot. Watching new tiny leaves grow makes me happy. Plants bring a touch of nature indoors.",
    translation: "Tôi giữ một chậu cây xanh nhỏ trên giá sách của mình. Những chiếc lá bóng loáng của nó trông tươi và khỏe mạnh quanh năm. Mỗi sáng Chủ Nhật, tôi rót một ít nước vào chậu của nó. Ngắm nhìn những chiếc lá nhỏ mới mọc làm tôi hạnh phúc. Cây cối mang một chút thiên nhiên vào trong nhà.",
    blanks: ["plant", "bookshelf", "leaves", "water", "nature"]
  },
  {
    id: "a1-082",
    title: "Going to the Grocery Store",
    level: "A1",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800&auto=format&fit=crop",
    paragraph: "My mother asks me to help buy groceries today. We push a small metal cart down the supermarket aisles. We select fresh red apples, milk, and brown bread. Paying at the counter, the cashier smiles warmly. Shopping together is a nice family chore.",
    translation: "Mẹ nhờ tôi giúp đi mua tạp hóa hôm nay. Chúng tôi đẩy một chiếc xe đẩy kim loại nhỏ dọc theo các lối đi siêu thị. Chúng tôi chọn táo đỏ tươi, sữa và bánh mì nâu. Trả tiền tại quầy, nhân viên thu ngân mỉm cười ấm áp. Đi mua sắm cùng nhau là một việc nhà gia đình thú vị.",
    blanks: ["groceries", "cart", "apples", "counter", "chore"]
  },
  {
    id: "a1-083",
    title: "My Winter Gloves",
    level: "A1",
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=800&auto=format&fit=crop",
    paragraph: "Cold winds blow through the city streets in winter. I wear thick red woolen gloves on my hands. They protect my fingers from freezing low temperatures. My mother knitted them by hand last month. They keep my hands warm during morning walks.",
    translation: "Gió lạnh thổi qua các con đường thành phố vào mùa đông. Tôi đeo găng tay len màu đỏ dày trên tay. Chúng bảo vệ các ngón tay của tôi khỏi nhiệt độ thấp cóng. Mẹ tôi đã đan chúng bằng tay vào tháng trước. Chúng giữ cho tay tôi ấm trong những buổi đi dạo buổi sáng.",
    blanks: ["streets", "gloves", "fingers", "month", "walks"]
  },
  {
    id: "a1-084",
    title: "A Day at the Lake",
    level: "A1",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    paragraph: "We spend our Sunday afternoon near a calm lake. Tall green trees reflect clearly on the smooth water surface. White ducks swim gracefully near the wooden dock. I sit on a bench and read a storybook. The peaceful environment clears my mind completely.",
    translation: "Chúng tôi dành buổi chiều Chủ Nhật gần một hồ nước tĩnh lặng. Những hàng cây xanh cao phản chiếu rõ ràng trên mặt nước phẳng lặng. Những chú vịt trắng bơi uyển chuyển gần bến gỗ. Tôi ngồi trên ghế băng và đọc một cuốn truyện. Môi trường yên bình làm sạch tâm trí tôi hoàn toàn.",
    blanks: ["lake", "surface", "dock", "storybook", "environment"]
  },
  {
    id: "a1-085",
    title: "My Favorite Fruit Salad",
    level: "A1",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=800&auto=format&fit=crop",
    paragraph: "I love preparing a fresh fruit salad for dessert. First, I slice sweet bananas, red apples, and juicy oranges. Then, I mix them together in a large glass bowl. A splash of lemon juice adds a wonderful flavor. Eating healthy food gives me great energy.",
    translation: "Tôi thích chuẩn bị một đĩa salad trái cây tươi làm món tráng miệng. Đầu tiên, tôi cắt lát chuối ngọt, táo đỏ và cam mọng nước. Sau đó, tôi trộn chúng lại với nhau trong một chiếc bát thủy tinh lớn. Một chút nước cốt chanh thêm vào hương vị tuyệt vời. Ăn thức ăn lành mạnh mang lại cho tôi năng lượng tuyệt vời.",
    blanks: ["dessert", "bananas", "bowl", "flavor", "food"]
  },
  {
    id: "a1-086",
    title: "My School Library",
    level: "A1",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    paragraph: "Our school library is a very quiet place for studying. Long wooden tables sit neatly between rows of book shelves. Students read books or do homework silently. The friendly librarian helps us find interesting reading materials. Reading books expands our knowledge every single day.",
    translation: "Thư viện trường học của chúng tôi là một nơi rất yên tĩnh để học tập. Những chiếc bàn gỗ dài nằm gọn gàng giữa các hàng kệ sách. Học sinh đọc sách hoặc làm bài tập về nhà im lặng. Thủ thư thân thiện giúp chúng tôi tìm các tài liệu đọc thú vị. Đọc sách mở rộng kiến thức của chúng ta mỗi ngày.",
    blanks: ["library", "tables", "silently", "materials", "knowledge"]
  },
  {
    id: "a1-087",
    title: "A Walk with My Dog",
    level: "A1",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop",
    paragraph: "Every afternoon, I take my brown dog for a walk. We walk down the quiet street near our house. He sniffs every green bush and tree trunk eagerly. Passersby smile when they see his wagging tail. Walking together keeps both of us active and happy.",
    translation: "Mỗi buổi chiều, tôi đưa chú chó nâu của mình đi dạo. Chúng tôi đi dọc theo con đường yên tĩnh gần nhà. Cậu ấy đánh hơi mọi bụi cây xanh và thân cây một cách háo hức. Người qua đường mỉm cười khi nhìn thấy cái đuôi ngoe nguẩy của cậu ấy. Đi bộ cùng nhau giữ cho cả hai chúng ta năng động và hạnh phúc.",
    blanks: ["afternoon", "street", "trunk", "tail", "active"]
  },
  {
    id: "a1-088",
    title: "My Blue Backpack",
    level: "A1",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    paragraph: "I pack my blue school backpack every Sunday night. Inside go my math textbook, notebook, and pencil case. I make sure my lunch box fits securely at the bottom. Having everything ready saves time in the morning. Organization helps make school days smooth.",
    translation: "Tôi đóng gói ba lô đi học màu xanh của mình vào mỗi tối Chủ Nhật. Bên trong gồm sách giáo khoa toán, vở và hộp bút chì. Tôi đảm bảo hộp cơm trưa của mình vừa vặn chắc chắn ở dưới đáy. Chuẩn bị mọi thứ sẵn sàng tiết kiệm thời gian vào buổi sáng. Tổ chức giúp làm cho các ngày đi học suôn sẻ.",
    blanks: ["backpack", "textbook", "case", "bottom", "organization"]
  },
  {
    id: "a1-089",
    title: "A Sunny Spring Morning",
    level: "A1",
    image: "https://images.unsplash.com/photo-1522885147691-0e86f39b6d46?q=80&w=800&auto=format&fit=crop",
    paragraph: "Spring brings warm sunshine and blooming flowers. Pink cherry blossoms decorate the trees along our street. Tiny bees buzz around collecting sweet flower nectar. Children play happily on the green park grass. Spring is truly a season of vibrant life.",
    translation: "Mùa xuân mang lại ánh nắng ấm áp và những bông hoa nở rộ. Hoa anh đào hồng trang trí những tán cây dọc theo con đường của chúng ta. Những chú ong nhỏ vo ve xung quanh thu thập mật hoa ngọt ngào. Trẻ em chơi đùa vui vẻ trên bãi cỏ công viên xanh. Mùa xuân thực sự là một mùa của sự sống sôi động.",
    blanks: ["spring", "blossoms", "street", "grass", "life"]
  },
  {
    id: "a1-090",
    title: "My Favorite Musical Instrument",
    level: "A1",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    paragraph: "Playing the acoustic guitar is my favorite hobby. The wooden instrument has six steel strings. Every evening, I practice simple chords in my room. Music helps me relax after a long school day. Playing songs brings joy to my heart.",
    translation: "Chơi đàn guitar thùng là sở thích yêu thích của tôi. Nhạc cụ bằng gỗ có sáu dây thép. Mỗi buổi tối, tôi luyện tập các hợp âm đơn giản trong phòng mình. Âm nhạc giúp tôi thư giãn sau một ngày dài ở trường. Chơi các bài hát mang lại niềm vui cho trái tim tôi.",
    blanks: ["guitar", "strings", "chords", "room", "joy"]
  },
  {
    id: "a1-091",
    title: "A Rainy Morning at Home",
    level: "A1",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=800&auto=format&fit=crop",
    paragraph: "Raindrops tap gently against my bedroom windowpane. I stay wrapped inside a warm flannel blanket. Mother prepares hot chocolate drinks in the kitchen. I read an interesting fantasy book all morning. Rainy indoor days offer peaceful comfort.",
    translation: "Những hạt mưa gõ nhẹ nhàng vào kính cửa sổ phòng ngủ của tôi. Tôi ở lại quấn trong một chiếc chăn nỉ ấm áp. Mẹ chuẩn bị đồ uống sô-cô-la nóng trong phòng bếp. Tôi đọc một cuốn sách giả tưởng thú vị suốt cả buổi sáng. Những ngày mưa ở trong nhà mang lại sự thoải mái bình yên.",
    blanks: ["windowpane", "blanket", "chocolate", "fantasy", "comfort"]
  },
  {
    id: "a1-092",
    title: "My Pet Goldfish",
    level: "A1",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop",
    paragraph: "Three orange goldfish swim inside a glass bowl. They move their delicate fins gracefully through clean water. Every morning, I drop small food flakes on top. The fish swim up eagerly to catch them. Watching them brings peace to my mind.",
    translation: "Ba con cá vàng cam bơi bên trong một chiếc bát thủy tinh. Chúng di chuyển các vây mỏng manh của mình uyển chuyển qua làn nước sạch. Mỗi buổi sáng, tôi thả các mảnh thức ăn nhỏ lên trên. Những con cá bơi lên háo hức để bắt chúng. Ngắm nhìn chúng mang lại sự bình yên cho tâm trí tôi.",
    blanks: ["goldfish", "fins", "water", "flakes", "mind"]
  },
  {
    id: "a1-093",
    title: "Cleaning Up the House",
    level: "A1",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    paragraph: "Saturday morning means cleaning the family house. My father sweeps the wooden floors with a broom. I wipe dust off the living room furniture. My mother washes dirty dishes in the kitchen sink. Working together makes chores finish very quickly.",
    translation: "Sáng thứ Bảy có nghĩa là dọn dẹp ngôi nhà gia đình. Bố tôi quét các sàn nhà bằng gỗ bằng một chiếc chổi. Tôi lau bụi trên đồ đạc phòng khách. Mẹ tôi rửa bát đĩa bẩn trong bồn rửa chén phòng bếp. Làm việc cùng nhau giúp các việc nhà hoàn thành rất nhanh.",
    blanks: ["house", "floors", "furniture", "sink", "chores"]
  },
  {
    id: "a1-094",
    title: "My Favorite Winter Sport",
    level: "A1",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop",
    paragraph: "Snowboarding is my absolute favorite winter sport. I wear a warm heavy jacket and thick gloves. Snow covers the mountain slopes in bright white powder. I glide down the snowy hill with great excitement. Winter sports are thrilling and fun.",
    translation: "Trượt tuyết bằng ván là môn thể thao mùa đông yêu thích tuyệt đối của tôi. Tôi mặc một chiếc áo khoác dày ấm áp và găng tay dày. Tuyết phủ kín các sườn núi bằng lớp bột trắng sáng. Tôi lướt xuống ngọn đồi tuyết với sự phấn khích lớn. Thể thao mùa đông thật ly kỳ và vui nhộn.",
    blanks: ["snowboarding", "jacket", "slopes", "hill", "thrilling"]
  },
  {
    id: "a1-095",
    title: "A Friendly Neighborhood Cat",
    level: "A1",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
    paragraph: "A stray gray cat visits our porch every afternoon. It has soft fur and big yellow eyes. I give it a small bowl of fresh milk. It purrs loudly and rubs against my legs. Animal friends make our neighborhoods feel welcoming.",
    translation: "Một con mèo xám đi lạc ghé thăm hiên nhà chúng tôi mỗi buổi chiều. Nó có bộ lông mềm và đôi mắt vàng to. Tôi cho nó một bát sữa nhỏ tươi. Nó gừ gừ lớn và cọ vào chân tôi. Những người bạn động vật làm cho các khu xóm của chúng ta cảm thấy chào đón.",
    blanks: ["porch", "fur", "milk", "legs", "welcoming"]
  },
  {
    id: "a1-096",
    title: "My English Classmates",
    level: "A1",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    paragraph: "There are fifteen students in my English class. We sit at shared wooden desks in rows. During lessons, we practice speaking dialogues together. Everyone helps each other learn new grammar rules. Good classmates make school a happy place.",
    translation: "Có mười lăm học sinh trong lớp tiếng Anh của tôi. Chúng tôi ngồi tại các bàn gỗ chung theo hàng. Trong các bài học, chúng tôi luyện nói các đoạn hội thoại cùng nhau. Mọi người giúp đỡ lẫn nhau học các quy tắc ngữ pháp mới. Những bạn cùng lớp tốt làm cho trường học trở thành một nơi hạnh phúc.",
    blanks: ["class", "desks", "dialogues", "rules", "place"]
  },
  {
    id: "a1-097",
    title: "A Sweet Strawberry Cake",
    level: "A1",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
    paragraph: "Mother bakes a delicious strawberry cake for my birthday. White whipped cream covers the fluffy sponge cake. Bright red strawberries decorate the top beautifully. We light colorful candles and sing birthday songs. Sharing sweet cake with family brings pure joy.",
    translation: "Mẹ nướng một chiếc bánh kem dâu tây ngon lành cho sinh nhật của tôi. Kem tươi đánh trắng che phủ chiếc bánh bông lan mềm xốp. Những quả dâu tây đỏ tươi trang trí phần trên một cách đẹp mắt. Chúng tôi thắp những ngọn nến màu sắc và hát bài hát sinh nhật. Chia sẻ bánh ngọt với gia đình mang lại niềm vui thuần khiết.",
    blanks: ["birthday", "cream", "strawberries", "candles", "joy"]
  },
  {
    id: "a1-098",
    title: "My Comfortable Bedroom",
    level: "A1",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop",
    paragraph: "My bedroom is my favorite place in the house. A soft white bed stands against the painted wall. A wooden bookshelf holds my favorite adventure stories. A small lamp illuminates my desk at night. I feel safe and relaxed here.",
    translation: "Phòng ngủ của tôi là nơi yêu thích của tôi trong ngôi nhà. Một chiếc giường trắng mềm đứng sát bức tường được sơn. Giá sách bằng gỗ chứa các câu chuyện phiêu lưu yêu thích của tôi. Một chiếc đèn nhỏ chiếu sáng bàn của tôi vào ban đêm. Tôi cảm thấy an toàn và thư thái ở đây.",
    blanks: ["house", "wall", "stories", "lamp", "safe"]
  },
  {
    id: "a1-099",
    title: "A Walk in the Rain",
    level: "A1",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=800&auto=format&fit=crop",
    paragraph: "Light rain falls while I walk home from school. I hold a bright yellow umbrella over my head. Puddles form rapidly along the paved sidewalk. Raindrops make pleasant splashing sounds on my boots. Walking in gentle rain feels refreshing.",
    translation: "Mưa nhẹ rơi trong khi tôi đi bộ về nhà từ trường. Tôi cầm một chiếc ô màu vàng sáng trên đầu mình. Những vũng nước hình thành nhanh chóng dọc theo vỉa hè được lát. Những hạt mưa tạo ra âm thanh tóe nước dễ chịu trên đôi bốt của tôi. Đi bộ trong cơn mưa nhẹ mang lại cảm giác sảng khoái.",
    blanks: ["umbrella", "puddles", "sidewalk", "boots", "refreshing"]
  },
  {
    id: "a1-100",
    title: "My Morning Routine",
    level: "A1",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    paragraph: "My alarm clock rings loudly at six o'clock every morning. I stretch my arms and get out of bed quickly. First, I brush my teeth and wash my face. Then, I eat a healthy breakfast with my family. Starting the morning well makes the whole day great.",
    translation: "Đồng hồ báo thức của tôi reo lớn lúc sáu giờ mỗi buổi sáng. Tôi duỗi tay và ra khỏi giường nhanh chóng. Đầu tiên, tôi đánh răng và rửa mặt. Sau đó, tôi ăn một bữa sáng lành mạnh với gia đình mình. Bắt đầu buổi sáng tốt làm cho cả ngày trở nên tuyệt vời.",
    blanks: ["alarm", "bed", "face", "family", "day"]
  }
];