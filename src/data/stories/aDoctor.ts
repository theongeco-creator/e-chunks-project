import type { Story } from "../types";

export const aDoctor: Story = {
  id: "a-doctor",
  title: "A Doctor",
  level: "A1",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
  paragraph:
    "Sam is a doctor. He takes care of people. He smiles at them. He gives them medicine. He gives stickers to the younger patients. The younger patients like him. They see him when they are sick. He makes them feel better. This makes him happy. He loves his job. He goes home proud.",
  translation:
    "Bác sĩ. Sam là một bác sĩ. Anh ấy chăm sóc mọi người. Anh ấy cười với họ. Anh ấy cho họ uống thuốc. Anh ấy tặng hình dán cho các bệnh nhân nhỏ tuổi. Các bệnh nhân nhỏ tuổi rất quý anh ấy. Họ gặp anh ấy khi bị ốm. Anh ấy làm cho họ cảm thấy dễ chịu hơn. Điều này làm anh ấy hạnh phúc. Anh ấy yêu công việc của mình. Anh ấy ra về với niềm tự hào.",
vocab: [
  { word: "better", meaning: "tốt hơn, khá hơn", type: "adjective", phonetic: "/ˈbetər/" },
  { word: "doctor", meaning: "bác sĩ", type: "noun", phonetic: "/ˈdɑːktər/" },
  { word: "feel", meaning: "cảm thấy", type: "verb", phonetic: "/fiːl/" },
  { word: "job", meaning: "công việc", type: "noun", phonetic: "/dʒɑːb/" },
  { word: "medicine", meaning: "thuốc", type: "noun", phonetic: "/ˈmedɪsn/" },
  { word: "patient", meaning: "bệnh nhân", type: "noun", phonetic: "/ˈpeɪʃnt/" },
  { word: "proud", meaning: "tự hào", type: "adjective", phonetic: "/praʊd/" },
  { word: "sick", meaning: "ốm, bệnh", type: "adjective", phonetic: "/sɪk/" },
  { word: "smile", meaning: "mỉm cười", type: "verb", phonetic: "/smaɪl/" },
  { word: "sticker", meaning: "hình dán", type: "noun", phonetic: "/ˈstɪkər/" },
  { word: "young", meaning: "trẻ, nhỏ tuổi", type: "adjective", phonetic: "/jʌŋ/" },
],
  // Chỉ chọn từ khớp CHÍNH XÁC chính tả trong đoạn văn (không lấy "smiles", "stickers", "younger" vì khác dạng)
  blanks: ["doctor", "medicine", "sick", "better", "job", "proud"],
};