export interface IPASymbol {
  id: string;
  symbol: string;         // Phiên âm IPA (vd: /i:/, /æ/)
  type: "monophthong" | "diphthong" | "consonant";
  subtype?: "short" | "long" | "voiced" | "unvoiced";
  exampleWord: string;    // Từ ví dụ (vd: see, cat)
  highlightLetters: string; // Chữ cái phát âm âm đó (vd: "ee", "a")
  audioUrl?: string;      // Đường dẫn file âm thanh nếu có
}

export const MONOPHTHONGS: IPASymbol[] = [
  // Short Vowels
  { id: "i", symbol: "ɪ", type: "monophthong", subtype: "short", exampleWord: "sit", highlightLetters: "i" },
  { id: "e", symbol: "e", type: "monophthong", subtype: "short", exampleWord: "ten", highlightLetters: "e" },
  { id: "ae", symbol: "æ", type: "monophthong", subtype: "short", exampleWord: "cat", highlightLetters: "a" },
  { id: "v", symbol: "ʌ", type: "monophthong", subtype: "short", exampleWord: "cup", highlightLetters: "u" },
  { id: "q", symbol: "ɒ", type: "monophthong", subtype: "short", exampleWord: "got", highlightLetters: "o" },
  { id: "u_short", symbol: "ʊ", type: "monophthong", subtype: "short", exampleWord: "put", highlightLetters: "u" },
  { id: "schwa", symbol: "ə", type: "monophthong", subtype: "short", exampleWord: "about", highlightLetters: "a" },

  // Long Vowels
  { id: "i_long", symbol: "iː", type: "monophthong", subtype: "long", exampleWord: "see", highlightLetters: "ee" },
  { id: "a_long", symbol: "ɑː", type: "monophthong", subtype: "long", exampleWord: "car", highlightLetters: "ar" },
  { id: "o_long", symbol: "ɔː", type: "monophthong", subtype: "long", exampleWord: "saw", highlightLetters: "aw" },
  { id: "u_long", symbol: "uː", type: "monophthong", subtype: "long", exampleWord: "too", highlightLetters: "oo" },
  { id: "er_long", symbol: "ɜː", type: "monophthong", subtype: "long", exampleWord: "bird", highlightLetters: "ir" },
];

export const DIPHTHONGS: IPASymbol[] = [
  { id: "eɪ", symbol: "eɪ", type: "diphthong", exampleWord: "say", highlightLetters: "ay" },
  { id: "aɪ", symbol: "aɪ", type: "diphthong", exampleWord: "my", highlightLetters: "y" },
  { id: "ɔɪ", symbol: "ɔɪ", type: "diphthong", exampleWord: "boy", highlightLetters: "oy" },
  { id: "əʊ", symbol: "əʊ", type: "diphthong", exampleWord: "go", highlightLetters: "o" },
  { id: "aʊ", symbol: "aʊ", type: "diphthong", exampleWord: "now", highlightLetters: "ow" },
  { id: "ɪə", symbol: "ɪə", type: "diphthong", exampleWord: "near", highlightLetters: "ear" },
  { id: "eə", symbol: "eə", type: "diphthong", exampleWord: "hair", highlightLetters: "air" },
  { id: "ʊə", symbol: "ʊə", type: "diphthong", exampleWord: "pure", highlightLetters: "ure" },
];

export const CONSONANTS: IPASymbol[] = [
  // Unvoiced (Vô thanh)
  { id: "p", symbol: "p", type: "consonant", subtype: "unvoiced", exampleWord: "pen", highlightLetters: "p" },
  { id: "t", symbol: "t", type: "consonant", subtype: "unvoiced", exampleWord: "tea", highlightLetters: "t" },
  { id: "k", symbol: "k", type: "consonant", subtype: "unvoiced", exampleWord: "cat", highlightLetters: "c" },
  { id: "f", symbol: "f", type: "consonant", subtype: "unvoiced", exampleWord: "fish", highlightLetters: "f" },
  { id: "th_unvoiced", symbol: "θ", type: "consonant", subtype: "unvoiced", exampleWord: "think", highlightLetters: "th" },
  { id: "s", symbol: "s", type: "consonant", subtype: "unvoiced", exampleWord: "sun", highlightLetters: "s" },
  { id: "sh", symbol: "ʃ", type: "consonant", subtype: "unvoiced", exampleWord: "she", highlightLetters: "sh" },
  { id: "ch", symbol: "tʃ", type: "consonant", subtype: "unvoiced", exampleWord: "cheese", highlightLetters: "ch" },

  // Voiced (Hữu thanh)
  { id: "b", symbol: "b", type: "consonant", subtype: "voiced", exampleWord: "bad", highlightLetters: "b" },
  { id: "d", symbol: "d", type: "consonant", subtype: "voiced", exampleWord: "did", highlightLetters: "d" },
  { id: "g", symbol: "g", type: "consonant", subtype: "voiced", exampleWord: "go", highlightLetters: "g" },
  { id: "v_consonant", symbol: "v", type: "consonant", subtype: "voiced", exampleWord: "very", highlightLetters: "v" },
  { id: "th_voiced", symbol: "ð", type: "consonant", subtype: "voiced", exampleWord: "this", highlightLetters: "th" },
  { id: "z", symbol: "z", type: "consonant", subtype: "voiced", exampleWord: "zoo", highlightLetters: "z" },
  { id: "zh", symbol: "ʒ", type: "consonant", subtype: "voiced", exampleWord: "vision", highlightLetters: "s" },
  { id: "jh", symbol: "dʒ", type: "consonant", subtype: "voiced", exampleWord: "just", highlightLetters: "j" },
  { id: "m", symbol: "m", type: "consonant", subtype: "voiced", exampleWord: "man", highlightLetters: "m" },
  { id: "n", symbol: "n", type: "consonant", subtype: "voiced", exampleWord: "now", highlightLetters: "n" },
  { id: "ng", symbol: "ŋ", type: "consonant", subtype: "voiced", exampleWord: "sing", highlightLetters: "ng" },
  { id: "h", symbol: "h", type: "consonant", subtype: "unvoiced", exampleWord: "hat", highlightLetters: "h" },
  { id: "l", symbol: "l", type: "consonant", subtype: "voiced", exampleWord: "leg", highlightLetters: "l" },
  { id: "r", symbol: "r", type: "consonant", subtype: "voiced", exampleWord: "red", highlightLetters: "r" },
  { id: "w", symbol: "w", type: "consonant", subtype: "voiced", exampleWord: "wet", highlightLetters: "w" },
  { id: "j", symbol: "j", type: "consonant", subtype: "voiced", exampleWord: "yes", highlightLetters: "y" },
];