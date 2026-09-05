// Generates seed SQL for 60 English lessons. Outputs to seed.sql.
import { writeFileSync } from 'fs'

type Level = 'beginner' | 'elementary' | 'pre-intermediate'

interface Vocab { word: string; translation: string; example: string }
interface Dialogue { speaker: string; line: string }
interface Quiz { question: string; options: string[]; answer_index: number; explanation: string }
interface LessonData {
  number: number
  title: string
  description: string
  level: Level
  unit: number
  topic: string
  objectives: string[]
  dialogue: Dialogue[]
  vocabulary: Vocab[]
  grammar_point: string
  grammar_explanation: string
  quiz: Quiz[]
}

const lessons: LessonData[] = [
  // UNIT 1 — Beginner Basics
  {
    number: 1, title: 'Greetings and Introductions', level: 'beginner', unit: 1, topic: 'Meeting people',
    description: 'Learn how to say hello, introduce yourself, and ask someone their name.',
    objectives: ['Greet people at different times of day', 'Introduce yourself by name', 'Ask someone their name'],
    dialogue: [
      { speaker: 'A', line: 'Hello! My name is Sarah. What is your name?' },
      { speaker: 'B', line: 'Hi Sarah. I am Tom. Nice to meet you.' },
      { speaker: 'A', line: 'Nice to meet you too. How are you?' },
      { speaker: 'B', line: 'I am fine, thank you. And you?' },
    ],
    vocabulary: [
      { word: 'hello', translation: 'a greeting', example: 'Hello! How are you?' },
      { word: 'name', translation: 'what someone is called', example: 'My name is Anna.' },
      { word: 'nice to meet you', translation: 'polite when meeting someone', example: 'Nice to meet you, John.' },
      { word: 'fine', translation: 'okay, good', example: 'I am fine, thanks.' },
    ],
    grammar_point: 'Subject pronouns + "to be"',
    grammar_explanation: 'Use I, you, he, she, we, they with the verb "to be" (am, are, is). Example: I am Tom. She is my friend.',
    quiz: [
      { question: 'Complete: "Hello! My ___ is Sarah."', options: ['name', 'fine', 'hello', 'meet'], answer_index: 0, explanation: '"name" is what someone is called.' },
      { question: 'How do you reply to "Nice to meet you"?', options: ['Goodbye', 'Nice to meet you too', 'See you', 'Sorry'], answer_index: 1, explanation: 'The polite reply repeats the phrase with "too".' },
      { question: 'Complete: "I ___ Tom."', options: ['is', 'am', 'are', 'be'], answer_index: 1, explanation: 'With "I" we use "am".' },
    ],
  },
  {
    number: 2, title: 'The Alphabet and Spelling', level: 'beginner', unit: 1, topic: 'Letters',
    description: 'Learn the English alphabet and how to spell your name out loud.',
    objectives: ['Name all 26 letters', 'Spell your name aloud', 'Ask someone to spell a word'],
    dialogue: [
      { speaker: 'A', line: 'How do you spell your name?' },
      { speaker: 'B', line: 'It is K-A-T-E. Kate.' },
      { speaker: 'A', line: 'Thank you. Mine is J-O-H-N.' },
      { speaker: 'B', line: 'Nice. John, like the letter J.' },
    ],
    vocabulary: [
      { word: 'alphabet', translation: 'the set of letters A-Z', example: 'The English alphabet has 26 letters.' },
      { word: 'spell', translation: 'say the letters of a word', example: 'Can you spell your name?' },
      { word: 'letter', translation: 'a single character', example: 'B is the second letter.' },
      { word: 'word', translation: 'a unit of language', example: 'Cat is a short word.' },
    ],
    grammar_point: 'Imperatives',
    grammar_explanation: 'An imperative gives a command or request: "Spell your name." "Please sit down." The subject "you" is hidden.',
    quiz: [
      { question: 'How many letters are in the English alphabet?', options: ['24', '25', '26', '27'], answer_index: 2, explanation: 'The English alphabet has 26 letters, A to Z.' },
      { question: 'Complete: "How do you ___ your name?"', options: ['say', 'spell', 'read', 'write'], answer_index: 1, explanation: 'To "spell" is to say the letters one by one.' },
      { question: 'Which is an imperative sentence?', options: ['I am tired.', 'She spells well.', 'Spell your name.', 'Are you okay?'], answer_index: 2, explanation: 'It gives a command with a hidden "you".' },
    ],
  },
  {
    number: 3, title: 'Numbers 1 to 20', level: 'beginner', unit: 1, topic: 'Counting',
    description: 'Learn to count from 1 to 20 and say phone numbers and ages.',
    objectives: ['Count 1–20', 'Say your age', 'Ask someone their age'],
    dialogue: [
      { speaker: 'A', line: 'How old are you?' },
      { speaker: 'B', line: 'I am twenty years old. And you?' },
      { speaker: 'A', line: 'I am twenty-two.' },
      { speaker: 'B', line: 'What is your phone number?' },
      { speaker: 'A', line: 'It is zero, seven, nine, one, two, three.' },
    ],
    vocabulary: [
      { word: 'number', translation: 'a count or figure', example: 'My phone number is 555-1234.' },
      { word: 'age', translation: 'how old someone is', example: 'Her age is 18.' },
      { word: 'old', translation: 'having lived a certain time', example: 'I am 25 years old.' },
      { word: 'phone number', translation: 'digits to call someone', example: 'What is your phone number?' },
    ],
    grammar_point: 'Question words: How',
    grammar_explanation: 'Use "How" + adjective to ask about quantity or degree: "How old are you?" "How many books?"',
    quiz: [
      { question: 'Which number is "fifteen"?', options: ['50', '15', '5', '55'], answer_index: 1, explanation: 'Fifteen is 15.' },
      { question: 'Complete: "___ old are you?"', options: ['What', 'How', 'Who', 'Where'], answer_index: 1, explanation: 'We ask age with "How old".' },
      { question: 'How do you say the number 0 in a phone number?', options: ['one', 'zero', 'none', 'null'], answer_index: 1, explanation: 'In phone numbers we say "zero" or "oh".' },
    ],
  },
  {
    number: 4, title: 'Colors', level: 'beginner', unit: 1, topic: 'Describing things',
    description: 'Learn the names of common colors and describe objects around you.',
    objectives: ['Name 10 common colors', 'Describe an object by color', 'Ask what color something is'],
    dialogue: [
      { speaker: 'A', line: 'What color is your car?' },
      { speaker: 'B', line: 'My car is red. What about yours?' },
      { speaker: 'A', line: 'Mine is blue.' },
      { speaker: 'B', line: 'Blue is a nice color.' },
    ],
    vocabulary: [
      { word: 'color', translation: 'what something looks like to the eye', example: 'My favorite color is green.' },
      { word: 'red', translation: 'the color of blood', example: 'The apple is red.' },
      { word: 'blue', translation: 'the color of the sky', example: 'The sky is blue today.' },
      { word: 'green', translation: 'the color of grass', example: 'The leaves are green.' },
    ],
    grammar_point: 'Adjectives before nouns',
    grammar_explanation: 'In English, the adjective comes before the noun: "a red car," not "a car red."',
    quiz: [
      { question: 'Which is correct?', options: ['a car red', 'a red car', 'a reds car', 'a car reds'], answer_index: 1, explanation: 'The adjective goes before the noun.' },
      { question: 'Complete: "The sky is ___."', options: ['green', 'red', 'blue', 'black'], answer_index: 2, explanation: 'The sky is usually blue.' },
      { question: 'What do we ask to know the color?', options: ['How color?', 'What is color?', 'What color is it?', 'Which color?'], answer_index: 2, explanation: 'We ask "What color is it?"' },
    ],
  },
  {
    number: 5, title: 'Days of the Week', level: 'beginner', unit: 1, topic: 'Time',
    description: 'Learn the seven days of the week and talk about your weekly routine.',
    objectives: ['Name the 7 days', 'Say what day it is today', 'Talk about weekdays and weekends'],
    dialogue: [
      { speaker: 'A', line: 'What day is it today?' },
      { speaker: 'B', line: 'Today is Monday. Tomorrow is Tuesday.' },
      { speaker: 'A', line: 'I work from Monday to Friday.' },
      { speaker: 'B', line: 'I rest on Saturday and Sunday.' },
    ],
    vocabulary: [
      { word: 'day', translation: 'a 24-hour period', example: 'Today is a sunny day.' },
      { word: 'week', translation: 'seven days', example: 'There are seven days in a week.' },
      { word: 'today', translation: 'this day', example: 'Today is Wednesday.' },
      { word: 'tomorrow', translation: 'the day after today', example: 'Tomorrow is Friday.' },
    ],
    grammar_point: 'Prepositions of time: on, from...to',
    grammar_explanation: 'Use "on" with days: "on Monday." Use "from...to" for ranges: "from Monday to Friday."',
    quiz: [
      { question: 'Complete: "I work ___ Monday ___ Friday."', options: ['on / on', 'from / to', 'in / at', 'at / on'], answer_index: 1, explanation: 'Ranges use "from...to".' },
      { question: 'How many days are in a week?', options: ['5', '6', '7', '8'], answer_index: 2, explanation: 'A week has 7 days.' },
      { question: 'Complete: "I rest ___ Sunday."', options: ['on', 'in', 'at', 'to'], answer_index: 0, explanation: 'Use "on" with days of the week.' },
    ],
  },
  {
    number: 6, title: 'Family Members', level: 'beginner', unit: 1, topic: 'People',
    description: 'Learn the words for family members and talk about your family.',
    objectives: ['Name family members', 'Talk about your family', 'Ask about someone\'s family'],
    dialogue: [
      { speaker: 'A', line: 'Do you have brothers or sisters?' },
      { speaker: 'B', line: 'Yes, I have one brother and two sisters.' },
      { speaker: 'A', line: 'Who is this in the photo?' },
      { speaker: 'B', line: 'That is my mother and my father.' },
    ],
    vocabulary: [
      { word: 'mother', translation: 'female parent', example: 'My mother is kind.' },
      { word: 'father', translation: 'male parent', example: 'My father works hard.' },
      { word: 'brother', translation: 'male sibling', example: 'My brother is tall.' },
      { word: 'sister', translation: 'female sibling', example: 'My sister is a doctor.' },
    ],
    grammar_point: 'Possessive adjectives',
    grammar_explanation: 'Use my, your, his, her, our, their before a noun: "my mother," "her brother."',
    quiz: [
      { question: 'Complete: "This is ___ sister."', options: ['my', 'I', 'me', 'mine'], answer_index: 0, explanation: 'Possessive adjective "my" goes before the noun.' },
      { question: 'Which word means a male sibling?', options: ['sister', 'brother', 'father', 'uncle'], answer_index: 1, explanation: 'A brother is a male sibling.' },
      { question: 'Complete: "She is ___ mother." (talking about Anna)', options: ['my', 'your', 'her', 'his'], answer_index: 2, explanation: 'For a female owner we use "her".' },
    ],
  },

  // UNIT 2 — Beginner Daily Life
  {
    number: 7, title: 'Common Objects', level: 'beginner', unit: 2, topic: 'Things around us',
    description: 'Learn the names of everyday objects in your home and classroom.',
    objectives: ['Name 10 common objects', 'Use "this" and "that"', 'Ask "What is this?"'],
    dialogue: [
      { speaker: 'A', line: 'What is this?' },
      { speaker: 'B', line: 'That is a book. And this is a pen.' },
      { speaker: 'A', line: 'Is that a chair?' },
      { speaker: 'B', line: 'Yes, it is a chair.' },
    ],
    vocabulary: [
      { word: 'book', translation: 'pages to read', example: 'I read a book every night.' },
      { word: 'pen', translation: 'tool to write with ink', example: 'I write with a pen.' },
      { word: 'chair', translation: 'seat for one person', example: 'Sit on the chair.' },
      { word: 'table', translation: 'flat furniture with legs', example: 'The cup is on the table.' },
    ],
    grammar_point: 'This / That / These / Those',
    grammar_explanation: '"This" is near and singular, "that" is far and singular. "These" and "those" are the plurals.',
    quiz: [
      { question: 'Pointing at a near book, you say:', options: ['That is a book.', 'This is a book.', 'Those are books.', 'These are books.'], answer_index: 1, explanation: 'Near + singular = "this".' },
      { question: 'Complete: "___ are my friends." (far, many)', options: ['This', 'That', 'These', 'Those'], answer_index: 3, explanation: 'Far + plural = "those".' },
      { question: 'What do we use to write with ink?', options: ['book', 'pen', 'chair', 'table'], answer_index: 1, explanation: 'A pen writes with ink.' },
    ],
  },
  {
    number: 8, title: 'Parts of the Body', level: 'beginner', unit: 2, topic: 'The human body',
    description: 'Learn the names of body parts and say what hurts.',
    objectives: ['Name 10 body parts', 'Say what hurts', 'Use "I have a..." for health'],
    dialogue: [
      { speaker: 'A', line: 'What is the matter?' },
      { speaker: 'B', line: 'I have a headache. My head hurts.' },
      { speaker: 'A', line: 'You should rest.' },
      { speaker: 'B', line: 'Yes, and my leg hurts too.' },
    ],
    vocabulary: [
      { word: 'head', translation: 'top of the body', example: 'I have a headache.' },
      { word: 'hand', translation: 'end of the arm', example: 'I write with my hand.' },
      { word: 'leg', translation: 'part for walking', example: 'My leg hurts.' },
      { word: 'eye', translation: 'organ for seeing', example: 'I have two eyes.' },
    ],
    grammar_point: 'Plural nouns',
    grammar_explanation: 'Most plurals add -s: book/books. Some are irregular: foot/feet, tooth/teeth, child/children.',
    quiz: [
      { question: 'What is the plural of "foot"?', options: ['foots', 'feet', 'feets', 'foot'], answer_index: 1, explanation: '"Foot" is irregular: feet.' },
      { question: 'Complete: "I have two ___."', options: ['hand', 'hands', 'handes', 'handed'], answer_index: 1, explanation: 'Regular plural adds -s.' },
      { question: 'Which sentence is correct?', options: ['My head hurt.', 'My head hurts.', 'My head hurting.', 'My head to hurt.'], answer_index: 1, explanation: 'Third person singular adds -s.' },
    ],
  },
  {
    number: 9, title: 'Clothes', level: 'beginner', unit: 2, topic: 'What we wear',
    description: 'Learn the names of common clothes and describe what people are wearing.',
    objectives: ['Name 10 clothing items', 'Describe what someone wears', 'Use "wearing"'],
    dialogue: [
      { speaker: 'A', line: 'What is she wearing?' },
      { speaker: 'B', line: 'She is wearing a blue dress and black shoes.' },
      { speaker: 'A', line: 'And he is wearing a shirt and jeans.' },
      { speaker: 'B', line: 'They look nice.' },
    ],
    vocabulary: [
      { word: 'shirt', translation: 'top for the upper body', example: 'He wears a white shirt.' },
      { word: 'dress', translation: 'one-piece clothing for women', example: 'She has a red dress.' },
      { word: 'shoes', translation: 'footwear', example: 'My shoes are new.' },
      { word: 'jeans', translation: 'denim trousers', example: 'I like blue jeans.' },
    ],
    grammar_point: 'Present continuous',
    grammar_explanation: 'Use am/is/are + verb-ing for actions happening now: "She is wearing a dress."',
    quiz: [
      { question: 'Complete: "She ___ a blue dress."', options: ['wear', 'wears', 'is wearing', 'wearing'], answer_index: 2, explanation: 'Happening now = present continuous.' },
      { question: 'Which is footwear?', options: ['shirt', 'dress', 'shoes', 'jeans'], answer_index: 2, explanation: 'Shoes go on the feet.' },
      { question: 'Complete: "They ___ jeans."', options: ['is wearing', 'are wearing', 'wears', 'wear'], answer_index: 1, explanation: '"They" takes "are" + wearing.' },
    ],
  },
  {
    number: 10, title: 'Food and Drink', level: 'beginner', unit: 2, topic: 'Eating',
    description: 'Learn the names of common foods and drinks and order in a café.',
    objectives: ['Name 10 foods and drinks', 'Order food politely', 'Use "I would like"'],
    dialogue: [
      { speaker: 'A', line: 'What would you like to drink?' },
      { speaker: 'B', line: 'I would like a coffee, please.' },
      { speaker: 'A', line: 'Anything to eat?' },
      { speaker: 'B', line: 'Yes, a sandwich, please.' },
    ],
    vocabulary: [
      { word: 'coffee', translation: 'hot brown drink', example: 'I drink coffee in the morning.' },
      { word: 'water', translation: 'clear drink', example: 'I drink water every day.' },
      { word: 'bread', translation: 'baked food from flour', example: 'I eat bread for breakfast.' },
      { word: 'sandwich', translation: 'food between bread', example: 'I made a cheese sandwich.' },
    ],
    grammar_point: 'Countable and uncountable nouns',
    grammar_explanation: 'Some foods are uncountable (water, bread, rice) and cannot take "a" or plural -s. Use "some" with them.',
    quiz: [
      { question: 'Which is uncountable?', options: ['apple', 'sandwich', 'bread', 'egg'], answer_index: 2, explanation: 'Bread is uncountable; we say "some bread".' },
      { question: 'Complete: "I would like ___ coffee, please."', options: ['a', 'an', 'some', 'two'], answer_index: 0, explanation: 'A cup of coffee = "a coffee".' },
      { question: 'Which is a polite order?', options: ['Give me coffee.', 'I want coffee.', 'I would like a coffee, please.', 'Coffee now.'], answer_index: 2, explanation: '"I would like...please" is polite.' },
    ],
  },
  {
    number: 11, title: 'Telling the Time', level: 'beginner', unit: 2, topic: 'Clock time',
    description: 'Learn to ask and tell the time in English.',
    objectives: ['Ask the time', 'Say the time (o\'clock, half past)', 'Talk about daily times'],
    dialogue: [
      { speaker: 'A', line: 'What time is it?' },
      { speaker: 'B', line: 'It is half past three.' },
      { speaker: 'A', line: 'And what time is the meeting?' },
      { speaker: 'B', line: 'It is at four o\'clock.' },
    ],
    vocabulary: [
      { word: 'time', translation: 'what a clock shows', example: 'What time is it?' },
      { word: "o'clock", translation: 'exactly on the hour', example: 'It is six o\'clock.' },
      { word: 'half past', translation: '30 minutes after the hour', example: 'It is half past seven.' },
      { word: 'quarter to', translation: '15 minutes before the hour', example: 'It is quarter to nine.' },
    ],
    grammar_point: 'Prepositions of time: at, in',
    grammar_explanation: 'Use "at" with clock times: "at four o\'clock." Use "in" with parts of the day: "in the morning."',
    quiz: [
      { question: 'Complete: "The meeting is ___ four o\'clock."', options: ['in', 'at', 'on', 'to'], answer_index: 1, explanation: 'Clock times use "at".' },
      { question: 'What does "half past three" mean?', options: ['3:15', '3:30', '3:45', '3:00'], answer_index: 1, explanation: 'Half past = 30 minutes after.' },
      { question: 'Complete: "I read ___ the morning."', options: ['at', 'on', 'in', 'to'], answer_index: 2, explanation: 'Parts of the day use "in".' },
    ],
  },
  {
    number: 12, title: 'Weather', level: 'beginner', unit: 2, topic: 'The sky and seasons',
    description: 'Learn to talk about the weather and the seasons.',
    objectives: ['Describe the weather', 'Name the four seasons', 'Use "It is..." for weather'],
    dialogue: [
      { speaker: 'A', line: 'What is the weather like today?' },
      { speaker: 'B', line: 'It is sunny and warm.' },
      { speaker: 'A', line: 'I like summer. It is hot.' },
      { speaker: 'B', line: 'I prefer spring. It is cool and green.' },
    ],
    vocabulary: [
      { word: 'sunny', translation: 'with a lot of sun', example: 'It is sunny today.' },
      { word: 'rainy', translation: 'with rain', example: 'It is rainy in April.' },
      { word: 'cold', translation: 'low temperature', example: 'It is cold in winter.' },
      { word: 'season', translation: 'one of four parts of the year', example: 'My favorite season is autumn.' },
    ],
    grammar_point: 'It is + adjective',
    grammar_explanation: 'For weather we use "It is" + adjective: "It is hot." "It" has no real meaning here; it is a dummy subject.',
    quiz: [
      { question: 'Complete: "___ is raining."', options: ['There', 'This', 'It', 'That'], answer_index: 2, explanation: 'Weather uses dummy "it".' },
      { question: 'How many seasons are there?', options: ['2', '3', '4', '5'], answer_index: 2, explanation: 'There are four seasons.' },
      { question: 'Which describes a sunny day?', options: ['It is rainy.', 'It is cold.', 'It is sunny and warm.', 'It is snowing.'], answer_index: 2, explanation: 'Sunny and warm fits a sunny day.' },
    ],
  },

  // UNIT 3 — Elementary Verbs
  {
    number: 13, title: 'Daily Routines', level: 'elementary', unit: 3, topic: 'A typical day',
    description: 'Learn to describe your daily routine using the present simple.',
    objectives: ['Describe a typical day', 'Use time phrases (in the morning, then)', 'Use present simple for habits'],
    dialogue: [
      { speaker: 'A', line: 'What do you do every day?' },
      { speaker: 'B', line: 'I wake up at seven. Then I have breakfast and go to work.' },
      { speaker: 'A', line: 'When do you come home?' },
      { speaker: 'B', line: 'I come home at six and have dinner.' },
    ],
    vocabulary: [
      { word: 'wake up', translation: 'stop sleeping', example: 'I wake up at 6 am.' },
      { word: 'breakfast', translation: 'first meal of the day', example: 'I have breakfast at home.' },
      { word: 'go to work', translation: 'travel to your job', example: 'I go to work by bus.' },
      { word: 'dinner', translation: 'evening meal', example: 'We have dinner at seven.' },
    ],
    grammar_point: 'Present simple (affirmative)',
    grammar_explanation: 'Use present simple for habits and routines: I/you/we/they + verb; he/she/it + verb+s. "I work." "She works."',
    quiz: [
      { question: 'Complete: "She ___ up at seven."', options: ['wake', 'wakes', 'waking', 'woke'], answer_index: 1, explanation: 'He/she/it adds -s.' },
      { question: 'Which is a routine?', options: ['I am sleeping now.', 'I wake up at seven every day.', 'I will wake up.', 'I woke up.'], answer_index: 1, explanation: 'Habits use present simple.' },
      { question: 'Complete: "I ___ breakfast at home."', options: ['has', 'have', 'having', 'haves'], answer_index: 1, explanation: 'I/you/we/they use the base form.' },
    ],
  },
  {
    number: 14, title: 'Likes and Dislikes', level: 'elementary', unit: 3, topic: 'Preferences',
    description: 'Learn to talk about things you like, love, and hate.',
    objectives: ['Express likes and dislikes', 'Use "like + noun/verb-ing"', 'Ask about preferences'],
    dialogue: [
      { speaker: 'A', line: 'Do you like coffee?' },
      { speaker: 'B', line: 'Yes, I love it. I drink it every morning.' },
      { speaker: 'A', line: 'I do not like tea. I hate it.' },
      { speaker: 'B', line: 'Really? I quite like tea.' },
    ],
    vocabulary: [
      { word: 'like', translation: 'enjoy', example: 'I like music.' },
      { word: 'love', translation: 'enjoy very much', example: 'I love chocolate.' },
      { word: 'hate', translation: 'dislike strongly', example: 'I hate cold weather.' },
      { word: 'prefer', translation: 'like one thing more than another', example: 'I prefer tea to coffee.' },
    ],
    grammar_point: 'like + noun / like + verb-ing',
    grammar_explanation: 'After like/love/hate you can use a noun ("I like music") or a verb-ing ("I like reading").',
    quiz: [
      { question: 'Complete: "I like ___ books."', options: ['read', 'reads', 'reading', 'to reading'], answer_index: 2, explanation: 'After "like" use verb-ing.' },
      { question: 'Which means "enjoy very much"?', options: ['like', 'love', 'prefer', 'hate'], answer_index: 1, explanation: 'Love = enjoy very much.' },
      { question: 'Complete: "She ___ coffee."', options: ['like', 'likes', 'liking', 'liked'], answer_index: 1, explanation: 'He/she/it adds -s.' },
    ],
  },
  {
    number: 15, title: 'Can and Cannot (Ability)', level: 'elementary', unit: 3, topic: 'Abilities',
    description: 'Learn to talk about things you can and cannot do.',
    objectives: ['Say what you can do', 'Say what you cannot do', 'Ask about ability'],
    dialogue: [
      { speaker: 'A', line: 'Can you swim?' },
      { speaker: 'B', line: 'Yes, I can swim well. Can you?' },
      { speaker: 'A', line: 'No, I cannot swim. But I can run fast.' },
      { speaker: 'B', line: 'That is nice!' },
    ],
    vocabulary: [
      { word: 'can', translation: 'be able to', example: 'I can drive a car.' },
      { word: 'cannot', translation: 'not able to', example: 'I cannot speak French.' },
      { word: 'swim', translation: 'move in water', example: 'He can swim in the sea.' },
      { word: 'drive', translation: 'control a vehicle', example: 'She can drive a bus.' },
    ],
    grammar_point: 'Modal "can"',
    grammar_explanation: '"Can" is the same for all subjects. Negative is "cannot" or "can\'t." Question: "Can you...?"',
    quiz: [
      { question: 'Complete: "___ you play the piano?"', options: ['Do', 'Are', 'Can', 'Is'], answer_index: 2, explanation: 'Ability questions use "can".' },
      { question: 'Choose the negative:', options: ['I can swim.', 'I can\'t swim.', 'I swim can.', 'I not can swim.'], answer_index: 1, explanation: 'Negative is "can\'t" or "cannot".' },
      { question: 'Complete: "She ___ cook very well."', options: ['can', 'cans', 'is can', 'does can'], answer_index: 0, explanation: '"Can" has no -s.' },
    ],
  },
  {
    number: 16, title: 'Have and Have Got', level: 'elementary', unit: 3, topic: 'Possession',
    description: 'Learn to talk about things you have using "have" and "have got".',
    objectives: ['Use "have/have got" for possession', 'Form questions and negatives', 'Talk about family and belongings'],
    dialogue: [
      { speaker: 'A', line: 'Have you got a pet?' },
      { speaker: 'B', line: 'Yes, I have got a cat. And you?' },
      { speaker: 'A', line: 'I have a dog. His name is Rex.' },
      { speaker: 'B', line: 'That is lovely!' },
    ],
    vocabulary: [
      { word: 'have', translation: 'possess', example: 'I have a car.' },
      { word: 'have got', translation: 'possess (British style)', example: 'I have got two sisters.' },
      { word: 'pet', translation: 'animal at home', example: 'My pet is a cat.' },
      { word: 'belongings', translation: 'things you own', example: 'These are my belongings.' },
    ],
    grammar_point: 'have vs have got',
    grammar_explanation: 'Both express possession. "Have got" is common in British English: "I have got a car." Questions: "Have you got...?" / "Do you have...?"',
    quiz: [
      { question: 'Complete: "___ you got a pen?"', options: ['Do', 'Have', 'Are', 'Is'], answer_index: 1, explanation: 'With "have got" questions invert "have".' },
      { question: 'Complete: "I ___ a new phone."', options: ['have', 'has', 'haves', 'having'], answer_index: 0, explanation: 'I/you/we/they use "have".' },
      { question: 'Complete: "She ___ got a bike."', options: ['have', 'has', 'haves', 'is'], answer_index: 1, explanation: 'He/she/it uses "has".' },
    ],
  },
  {
    number: 17, title: 'There is and There are', level: 'elementary', unit: 3, topic: 'Describing places',
    description: 'Learn to describe what is in a room or place.',
    objectives: ['Use "there is" for singular', 'Use "there are" for plural', 'Ask "Is there...?"'],
    dialogue: [
      { speaker: 'A', line: 'Is there a bank near here?' },
      { speaker: 'B', line: 'Yes, there is one on the corner.' },
      { speaker: 'A', line: 'Are there any restaurants?' },
      { speaker: 'B', line: 'Yes, there are two restaurants nearby.' },
    ],
    vocabulary: [
      { word: 'there is', translation: 'exists one', example: 'There is a book on the table.' },
      { word: 'there are', translation: 'exist many', example: 'There are three chairs.' },
      { word: 'bank', translation: 'place for money', example: 'There is a bank on Main Street.' },
      { word: 'restaurant', translation: 'place to eat', example: 'There are many restaurants here.' },
    ],
    grammar_point: 'there is / there are',
    grammar_explanation: 'Singular: "There is a book." Plural: "There are books." Questions: "Is there...?" "Are there...?"',
    quiz: [
      { question: 'Complete: "There ___ two cats in the garden."', options: ['is', 'are', 'be', 'has'], answer_index: 1, explanation: 'Plural uses "there are".' },
      { question: 'Complete: "___ there a post office near here?"', options: ['Are', 'Is', 'Do', 'Have'], answer_index: 1, explanation: 'Singular question uses "Is there".' },
      { question: 'Which is correct?', options: ['There is three books.', 'There are a book.', 'There is a book.', 'There be books.'], answer_index: 2, explanation: 'Singular uses "there is".' },
    ],
  },
  {
    number: 18, title: 'Prepositions of Place', level: 'elementary', unit: 3, topic: 'Where things are',
    description: 'Learn to say where things are using in, on, under, next to, and behind.',
    objectives: ['Use place prepositions', 'Describe where objects are', 'Ask "Where is...?"'],
    dialogue: [
      { speaker: 'A', line: 'Where are my keys?' },
      { speaker: 'B', line: 'They are on the table, next to the book.' },
      { speaker: 'A', line: 'No, they are under the newspaper.' },
      { speaker: 'B', line: 'Ah, here they are!' },
    ],
    vocabulary: [
      { word: 'on', translation: 'top of a surface', example: 'The cup is on the table.' },
      { word: 'under', translation: 'below something', example: 'The cat is under the chair.' },
      { word: 'next to', translation: 'beside', example: 'The bank is next to the shop.' },
      { word: 'behind', translation: 'at the back of', example: 'The car is behind the house.' },
    ],
    grammar_point: 'Where is / Where are',
    grammar_explanation: 'Ask "Where is...?" for one thing and "Where are...?" for many. Answer with a place preposition.',
    quiz: [
      { question: 'Complete: "The keys are ___ the table."', options: ['in', 'on', 'at', 'to'], answer_index: 1, explanation: 'On a surface = "on".' },
      { question: 'Complete: "___ are my shoes?"', options: ['Where is', 'Where are', 'What is', 'Who is'], answer_index: 1, explanation: 'Plural uses "Where are".' },
      { question: 'Which means "beside"?', options: ['under', 'behind', 'next to', 'on'], answer_index: 2, explanation: 'Next to = beside.' },
    ],
  },

  // UNIT 4 — Elementary Around Town
  {
    number: 19, title: 'Places in Town', level: 'elementary', unit: 4, topic: 'The city',
    description: 'Learn the names of common places in a town and ask for directions.',
    objectives: ['Name 10 places in town', 'Ask "Where is...?"', 'Give simple directions'],
    dialogue: [
      { speaker: 'A', line: 'Excuse me, where is the hospital?' },
      { speaker: 'B', line: 'It is on Park Street, next to the school.' },
      { speaker: 'A', line: 'Thank you. Is there a pharmacy near here?' },
      { speaker: 'B', line: 'Yes, it is across from the bank.' },
    ],
    vocabulary: [
      { word: 'hospital', translation: 'place for sick people', example: 'The hospital is on Main Street.' },
      { word: 'school', translation: 'place to learn', example: 'My school is near my house.' },
      { word: 'pharmacy', translation: 'shop for medicine', example: 'I buy medicine at the pharmacy.' },
      { word: 'library', translation: 'place with many books', example: 'I study at the library.' },
    ],
    grammar_point: 'Asking for directions',
    grammar_explanation: 'Use "Where is...?" and "Is there...?" Prepositions: on, next to, across from, between.',
    quiz: [
      { question: 'Where do you buy medicine?', options: ['school', 'library', 'pharmacy', 'bank'], answer_index: 2, explanation: 'Medicine is sold at a pharmacy.' },
      { question: 'Complete: "The bank is ___ from the school."', options: ['on', 'across', 'in', 'at'], answer_index: 1, explanation: 'Opposite side = "across from".' },
      { question: 'Which is a polite way to ask for help?', options: ['Where hospital?', 'Excuse me, where is the hospital?', 'Give me hospital.', 'Hospital where?'], answer_index: 1, explanation: 'Polite: "Excuse me, where is...?"' },
    ],
  },
  {
    number: 20, title: 'Directions', level: 'elementary', unit: 4, topic: 'Getting around',
    description: 'Learn to give and understand directions like turn left, go straight, and turn right.',
    objectives: ['Give simple directions', 'Understand "turn left/right"', 'Use "go straight"'],
    dialogue: [
      { speaker: 'A', line: 'How do I get to the station?' },
      { speaker: 'B', line: 'Go straight and turn left at the bank.' },
      { speaker: 'A', line: 'Is it far?' },
      { speaker: 'B', line: 'No, about five minutes on foot.' },
    ],
    vocabulary: [
      { word: 'turn left', translation: 'go to the left side', example: 'Turn left at the corner.' },
      { word: 'turn right', translation: 'go to the right side', example: 'Turn right after the school.' },
      { word: 'go straight', translation: 'continue forward', example: 'Go straight for two blocks.' },
      { word: 'corner', translation: 'where two streets meet', example: 'The shop is on the corner.' },
    ],
    grammar_point: 'Imperatives for directions',
    grammar_explanation: 'Directions use imperatives: "Go straight," "Turn left," "Take the second street."',
    quiz: [
      { question: 'Which means continue forward?', options: ['Turn left', 'Turn right', 'Go straight', 'Stop'], answer_index: 2, explanation: 'Go straight = continue forward.' },
      { question: 'Complete: "___ left at the bank."', options: ['Go', 'Turn', 'Take', 'Come'], answer_index: 1, explanation: 'We "turn" left or right.' },
      { question: 'Which asks for directions?', options: ['Where is it?', 'How do I get to the station?', 'Is it far?', 'All of these'], answer_index: 3, explanation: 'All are direction questions.' },
    ],
  },
  {
    number: 21, title: 'Jobs and Work', level: 'elementary', unit: 4, topic: 'Professions',
    description: 'Learn the names of common jobs and talk about what people do.',
    objectives: ['Name 10 jobs', 'Ask "What do you do?"', 'Use articles a/an with jobs'],
    dialogue: [
      { speaker: 'A', line: 'What do you do?' },
      { speaker: 'B', line: 'I am a teacher. I work at a school.' },
      { speaker: 'A', line: 'My sister is a doctor. She works at a hospital.' },
      { speaker: 'B', line: 'That is a great job.' },
    ],
    vocabulary: [
      { word: 'teacher', translation: 'person who teaches', example: 'My mother is a teacher.' },
      { word: 'doctor', translation: 'person who treats sick people', example: 'The doctor helps me.' },
      { word: 'engineer', translation: 'person who designs things', example: 'He is an engineer.' },
      { word: 'nurse', translation: 'person who cares for patients', example: 'She is a nurse.' },
    ],
    grammar_point: 'a / an with jobs',
    grammar_explanation: 'Use "a" before consonant sounds and "an" before vowel sounds: "a teacher," "an engineer," "an actor."',
    quiz: [
      { question: 'Complete: "She is ___ engineer."', options: ['a', 'an', 'the', '—'], answer_index: 1, explanation: '"Engineer" starts with a vowel sound, so "an".' },
      { question: 'Which treats sick people?', options: ['teacher', 'doctor', 'engineer', 'driver'], answer_index: 1, explanation: 'A doctor treats sick people.' },
      { question: 'Complete: "He is ___ teacher."', options: ['a', 'an', 'the', '—'], answer_index: 0, explanation: '"Teacher" starts with a consonant sound, so "a".' },
    ],
  },
  {
    number: 22, title: 'Hobbies and Free Time', level: 'elementary', unit: 4, topic: 'Fun activities',
    description: 'Learn to talk about your hobbies and what you do in your free time.',
    objectives: ['Name common hobbies', 'Use "play / do / go" with activities', 'Ask about free time'],
    dialogue: [
      { speaker: 'A', line: 'What do you do in your free time?' },
      { speaker: 'B', line: 'I play football and I read books.' },
      { speaker: 'A', line: 'I like cooking and watching films.' },
      { speaker: 'B', line: 'That sounds fun!' },
    ],
    vocabulary: [
      { word: 'hobby', translation: 'activity for fun', example: 'My hobby is painting.' },
      { word: 'play', translation: 'do a sport/game', example: 'I play tennis on Sunday.' },
      { word: 'go', translation: 'do an -ing activity', example: 'I go swimming in summer.' },
      { word: 'free time', translation: 'time not working', example: 'I read in my free time.' },
    ],
    grammar_point: 'play / do / go + activity',
    grammar_explanation: 'Use "play" with sports/games (play football), "go" with -ing activities (go swimming), "do" with others (do yoga).',
    quiz: [
      { question: 'Complete: "I ___ swimming every week."', options: ['play', 'do', 'go', 'make'], answer_index: 2, explanation: '-ing activities use "go".' },
      { question: 'Complete: "I ___ football on Sundays."', options: ['play', 'do', 'go', 'make'], answer_index: 0, explanation: 'Sports/games use "play".' },
      { question: 'Which is a hobby?', options: ['work', 'painting', 'sleep', 'eat'], answer_index: 1, explanation: 'Painting is a hobby.' },
    ],
  },
  {
    number: 23, title: 'Shopping', level: 'elementary', unit: 4, topic: 'Buying things',
    description: 'Learn to shop in English: ask prices, sizes, and pay.',
    objectives: ['Ask "How much is...?"', 'Talk about sizes and colors', 'Pay politely'],
    dialogue: [
      { speaker: 'A', line: 'Excuse me, how much is this shirt?' },
      { speaker: 'B', line: 'It is twenty pounds. What size do you want?' },
      { speaker: 'A', line: 'Medium, please. Do you have it in blue?' },
      { speaker: 'B', line: 'Yes, here you are.' },
    ],
    vocabulary: [
      { word: 'price', translation: 'cost of something', example: 'The price is ten dollars.' },
      { word: 'size', translation: 'how big something is', example: 'What size do you need?' },
      { word: 'pay', translation: 'give money', example: 'I pay by card.' },
      { word: 'receipt', translation: 'paper showing payment', example: 'Can I have a receipt?' },
    ],
    grammar_point: 'How much / How many',
    grammar_explanation: 'Use "How much" with uncountable nouns and prices: "How much is it?" Use "How many" with countable nouns: "How many apples?"',
    quiz: [
      { question: 'Complete: "___ is this shirt?"', options: ['How many', 'How much', 'What price', 'Which'], answer_index: 1, explanation: 'Prices use "How much".' },
      { question: 'Complete: "___ apples do you want?"', options: ['How much', 'How many', 'What', 'Which'], answer_index: 1, explanation: 'Countable uses "How many".' },
      { question: 'Which asks for proof of payment?', options: ['Can I have a size?', 'Can I have a receipt?', 'How much is it?', 'What color?'], answer_index: 1, explanation: 'A receipt shows payment.' },
    ],
  },
  {
    number: 24, title: 'At the Restaurant', level: 'elementary', unit: 4, topic: 'Eating out',
    description: 'Learn to order food and drinks in a restaurant politely.',
    objectives: ['Order from a menu', 'Use "I\'d like" and "Can I have"', 'Ask for the bill'],
    dialogue: [
      { speaker: 'A', line: 'Are you ready to order?' },
      { speaker: 'B', line: 'Yes, I\'d like the soup and a steak, please.' },
      { speaker: 'A', line: 'Anything to drink?' },
      { speaker: 'B', line: 'A glass of water, please. And can I have the bill later?' },
    ],
    vocabulary: [
      { word: 'menu', translation: 'list of food and prices', example: 'Can I see the menu?' },
      { word: 'order', translation: 'ask for food', example: 'I order a pizza.' },
      { word: 'bill', translation: 'paper showing what to pay', example: 'Can I have the bill, please?' },
      { word: 'starter', translation: 'first small dish', example: 'I\'d like a soup as a starter.' },
    ],
    grammar_point: 'Polite requests: I\'d like / Can I have',
    grammar_explanation: 'Use "I\'d like..." and "Can I have...?" to order politely. Add "please."',
    quiz: [
      { question: 'Which is a polite order?', options: ['Give me soup.', 'I want soup.', 'I\'d like the soup, please.', 'Soup now.'], answer_index: 2, explanation: '"I\'d like...please" is polite.' },
      { question: 'What do you ask to pay?', options: ['The menu, please.', 'The bill, please.', 'The order, please.', 'The starter, please.'], answer_index: 1, explanation: 'Ask for "the bill" to pay.' },
      { question: 'Complete: "Can I ___ a glass of water?"', options: ['like', 'have', 'order', 'eat'], answer_index: 1, explanation: '"Can I have...?" is a polite request.' },
    ],
  },

  // UNIT 5 — Elementary Past and Future
  {
    number: 25, title: 'Past Simple (Regular Verbs)', level: 'elementary', unit: 5, topic: 'Yesterday',
    description: 'Learn to talk about the past using regular verbs that end in -ed.',
    objectives: ['Form past simple of regular verbs', 'Tell a short story about yesterday', 'Use time words (yesterday, last)'],
    dialogue: [
      { speaker: 'A', line: 'What did you do yesterday?' },
      { speaker: 'B', line: 'I worked, then I cooked dinner and watched a film.' },
      { speaker: 'A', line: 'I stayed at home and studied English.' },
      { speaker: 'B', line: 'That is great!' },
    ],
    vocabulary: [
      { word: 'worked', translation: 'past of work', example: 'I worked all day.' },
      { word: 'cooked', translation: 'past of cook', example: 'She cooked a meal.' },
      { word: 'watched', translation: 'past of watch', example: 'We watched a movie.' },
      { word: 'studied', translation: 'past of study', example: 'He studied at home.' },
    ],
    grammar_point: 'Past simple (regular)',
    grammar_explanation: 'Regular verbs add -ed: work/worked. Verbs ending in -e add -d: live/lived. Verbs ending in consonant+y change to -ied: study/studied.',
    quiz: [
      { question: 'What is the past of "play"?', options: ['playd', 'played', 'plaied', 'play'], answer_index: 1, explanation: 'Add -ed: played.' },
      { question: 'What is the past of "study"?', options: ['studyed', 'studied', 'studyd', 'studys'], answer_index: 1, explanation: 'Consonant+y becomes -ied.' },
      { question: 'Complete: "I ___ TV yesterday."', options: ['watch', 'watched', 'watching', 'watches'], answer_index: 1, explanation: 'Past action uses -ed.' },
    ],
  },
  {
    number: 26, title: 'Past Simple (Irregular Verbs)', level: 'elementary', unit: 5, topic: 'Past actions',
    description: 'Learn common irregular past verbs like go/went, have/had, and see/saw.',
    objectives: ['Recognize common irregular verbs', 'Use them in past sentences', 'Tell short past stories'],
    dialogue: [
      { speaker: 'A', line: 'Where did you go last weekend?' },
      { speaker: 'B', line: 'I went to the beach. I saw my friends there.' },
      { speaker: 'A', line: 'Did you have a good time?' },
      { speaker: 'B', line: 'Yes, we had a great time.' },
    ],
    vocabulary: [
      { word: 'went', translation: 'past of go', example: 'I went to London.' },
      { word: 'had', translation: 'past of have', example: 'She had a coffee.' },
      { word: 'saw', translation: 'past of see', example: 'I saw a film.' },
      { word: 'ate', translation: 'past of eat', example: 'We ate pizza.' },
    ],
    grammar_point: 'Past simple (irregular)',
    grammar_explanation: 'Irregular verbs do not follow a rule: go/went, have/had, see/saw, eat/ate, take/took. You must learn them.',
    quiz: [
      { question: 'What is the past of "go"?', options: ['goed', 'went', 'gone', 'going'], answer_index: 1, explanation: 'Go becomes went.' },
      { question: 'What is the past of "eat"?', options: ['eated', 'eat', 'ate', 'eaten'], answer_index: 2, explanation: 'Eat becomes ate.' },
      { question: 'Complete: "I ___ a film last night."', options: ['see', 'saw', 'seen', 'seed'], answer_index: 1, explanation: 'See becomes saw.' },
    ],
  },
  {
    number: 27, title: 'Past Questions and Negatives', level: 'elementary', unit: 5, topic: 'Asking about the past',
    description: 'Learn to ask and answer questions about the past using did and didn\'t.',
    objectives: ['Form past questions with "Did...?"', 'Make past negatives with "didn\'t"', 'Answer past questions'],
    dialogue: [
      { speaker: 'A', line: 'Did you go to the party?' },
      { speaker: 'B', line: 'No, I didn\'t. I stayed home. Did you?' },
      { speaker: 'A', line: 'Yes, I did. I had a great time.' },
      { speaker: 'B', line: 'That is nice!' },
    ],
    vocabulary: [
      { word: 'did', translation: 'past helper for questions', example: 'Did you see her?' },
      { word: "didn't", translation: 'did not (past negative)', example: 'I didn\'t go out.' },
      { word: 'party', translation: 'a fun gathering', example: 'I went to a party.' },
      { word: 'last night', translation: 'the night before today', example: 'I saw him last night.' },
    ],
    grammar_point: 'Did / didn\'t',
    grammar_explanation: 'Past questions use "Did + subject + verb?" Negatives use "didn\'t + verb." The main verb stays in the base form.',
    quiz: [
      { question: 'Complete: "___ you go to school yesterday?"', options: ['Do', 'Did', 'Was', 'Are'], answer_index: 1, explanation: 'Past questions use "did".' },
      { question: 'Complete: "I ___ go to the party."', options: ['did', 'didn\'t', 'don\'t', 'wasn\'t'], answer_index: 1, explanation: 'Past negative uses "didn\'t".' },
      { question: 'Which is correct?', options: ['Did you went?', 'Did you go?', 'You did went?', 'Did you goes?'], answer_index: 1, explanation: 'After "did" the main verb is base form.' },
    ],
  },
  {
    number: 28, title: 'Was and Were', level: 'elementary', unit: 5, topic: 'Past of "to be"',
    description: 'Learn to use was and were to talk about the past.',
    objectives: ['Use was/were correctly', 'Form past questions and negatives', 'Describe past situations'],
    dialogue: [
      { speaker: 'A', line: 'Where were you yesterday?' },
      { speaker: 'B', line: 'I was at home. The weather was bad.' },
      { speaker: 'A', line: 'Were your parents at home too?' },
      { speaker: 'B', line: 'No, they were at work.' },
    ],
    vocabulary: [
      { word: 'was', translation: 'past of is/am (singular)', example: 'I was happy.' },
      { word: 'were', translation: 'past of are (plural)', example: 'They were tired.' },
      { word: 'yesterday', translation: 'the day before today', example: 'I saw her yesterday.' },
      { word: 'last week', translation: 'the week before this one', example: 'We met last week.' },
    ],
    grammar_point: 'was / were',
    grammar_explanation: 'I/he/she/it → was. You/we/they → were. Questions: "Was he...?" "Were they...?" Negatives: "wasn\'t," "weren\'t."',
    quiz: [
      { question: 'Complete: "I ___ at home yesterday."', options: ['were', 'was', 'is', 'are'], answer_index: 1, explanation: 'I → was.' },
      { question: 'Complete: "They ___ happy."', options: ['was', 'were', 'is', 'be'], answer_index: 1, explanation: 'They → were.' },
      { question: 'Complete: "___ she at the party?"', options: ['Were', 'Was', 'Did', 'Is'], answer_index: 1, explanation: 'She → was.' },
    ],
  },
  {
    number: 29, title: 'Going to (Future Plans)', level: 'elementary', unit: 5, topic: 'Plans',
    description: 'Learn to talk about future plans using "going to".',
    objectives: ['Use "going to" for plans', 'Talk about your weekend plans', 'Ask about future plans'],
    dialogue: [
      { speaker: 'A', line: 'What are you going to do this weekend?' },
      { speaker: 'B', line: 'I am going to visit my grandparents.' },
      { speaker: 'A', line: 'That is nice. I am going to paint my room.' },
      { speaker: 'B', line: 'Good luck!' },
    ],
    vocabulary: [
      { word: 'going to', translation: 'future plan', example: 'I am going to study.' },
      { word: 'plan', translation: 'something you decide to do', example: 'My plan is to travel.' },
      { word: 'weekend', translation: 'Saturday and Sunday', example: 'I rest on the weekend.' },
      { word: 'visit', translation: 'go to see someone', example: 'I visit my friend.' },
    ],
    grammar_point: 'be going to',
    grammar_explanation: 'Use am/is/are + going to + verb for plans: "I am going to travel." Questions: "Are you going to...?"',
    quiz: [
      { question: 'Complete: "I ___ going to study tonight."', options: ['am', 'is', 'are', 'be'], answer_index: 0, explanation: 'I → am.' },
      { question: 'Complete: "She ___ going to travel."', options: ['am', 'is', 'are', 'be'], answer_index: 1, explanation: 'She → is.' },
      { question: 'Which shows a plan?', options: ['I went home.', 'I am going to read a book.', 'I read books.', 'I am reading.'], answer_index: 1, explanation: 'Going to + verb = a plan.' },
    ],
  },
  {
    number: 30, title: 'Will (Future Predictions)', level: 'elementary', unit: 5, topic: 'Predictions',
    description: 'Learn to make predictions and offers using "will".',
    objectives: ['Use "will" for predictions', 'Make offers with "I\'ll"', 'Use "won\'t" for refusals'],
    dialogue: [
      { speaker: 'A', line: 'Do you think it will rain tomorrow?' },
      { speaker: 'B', line: 'Yes, I think it will. Take an umbrella.' },
      { speaker: 'A', line: 'I\'ll help you carry these bags.' },
      { speaker: 'B', line: 'Thank you! That is kind.' },
    ],
    vocabulary: [
      { word: 'will', translation: 'future helper', example: 'It will be sunny.' },
      { word: "won't", translation: 'will not', example: 'I won\'t be late.' },
      { word: 'prediction', translation: 'saying what will happen', example: 'My prediction is rain.' },
      { word: 'offer', translation: 'saying you will help', example: 'I\'ll carry that for you.' },
    ],
    grammar_point: 'will / won\'t',
    grammar_explanation: 'Use "will" + verb for predictions and offers: "It will rain." "I\'ll help you." Negative: "won\'t."',
    quiz: [
      { question: 'Complete: "I think it ___ rain."', options: ['will', 'is', 'going', 'would'], answer_index: 0, explanation: 'Predictions use "will".' },
      { question: 'Which is an offer?', options: ['It will rain.', 'I\'ll help you.', 'She won\'t come.', 'We will see.'], answer_index: 1, explanation: '"I\'ll help you" is an offer.' },
      { question: 'Complete: "I ___ be late."', options: ['will', 'won\'t', 'going', 'would'], answer_index: 1, explanation: 'Negative future = "won\'t".' },
    ],
  },

  // UNIT 6 — Elementary Comparisons
  {
    number: 31, title: 'Comparatives', level: 'elementary', unit: 6, topic: 'Comparing two things',
    description: 'Learn to compare two things using -er and more.',
    objectives: ['Form comparatives with -er', 'Use "more" with long adjectives', 'Use "than"'],
    dialogue: [
      { speaker: 'A', line: 'Is your house bigger than mine?' },
      { speaker: 'B', line: 'Yes, it is bigger. But yours is more modern.' },
      { speaker: 'A', line: 'My car is faster than yours.' },
      { speaker: 'B', line: 'True, but mine is more comfortable.' },
    ],
    vocabulary: [
      { word: 'bigger', translation: 'more big', example: 'My room is bigger.' },
      { word: 'faster', translation: 'more fast', example: 'This train is faster.' },
      { word: 'more modern', translation: 'newer in style', example: 'This phone is more modern.' },
      { word: 'than', translation: 'word for comparison', example: 'He is taller than me.' },
    ],
    grammar_point: 'Comparatives',
    grammar_explanation: 'Short adjectives add -er: big → bigger. Long adjectives use more: modern → more modern. Use "than" to compare.',
    quiz: [
      { question: 'Complete: "My car is ___ than yours."', options: ['fast', 'faster', 'fastest', 'more fast'], answer_index: 1, explanation: 'Short adjective adds -er.' },
      { question: 'Complete: "This book is ___ interesting."', options: ['more', '-er', 'most', 'than'], answer_index: 0, explanation: 'Long adjective uses "more".' },
      { question: 'Which is correct?', options: ['He is taller than me.', 'He is taller me.', 'He is taller that me.', 'He is tallest than me.'], answer_index: 0, explanation: 'Use "than" to compare.' },
    ],
  },
  {
    number: 32, title: 'Superlatives', level: 'elementary', unit: 6, topic: 'The best of all',
    description: 'Learn to say something is the most or -est of a group.',
    objectives: ['Form superlatives with -est', 'Use "the most" with long adjectives', 'Use "the" before superlatives'],
    dialogue: [
      { speaker: 'A', line: 'What is the tallest building in your city?' },
      { speaker: 'B', line: 'The Sky Tower is the tallest. It is the most famous too.' },
      { speaker: 'A', line: 'Who is the best student in your class?' },
      { speaker: 'B', line: 'Anna is the best.' },
    ],
    vocabulary: [
      { word: 'tallest', translation: 'most tall', example: 'He is the tallest in the family.' },
      { word: 'best', translation: 'most good', example: 'She is the best singer.' },
      { word: 'the most', translation: 'superlative for long adjectives', example: 'It is the most beautiful place.' },
      { word: 'in the world', translation: 'everywhere on Earth', example: 'It is the biggest in the world.' },
    ],
    grammar_point: 'Superlatives',
    grammar_explanation: 'Short adjectives add -est: tall → tallest. Long adjectives use "the most": beautiful → the most beautiful. Always use "the" before.',
    quiz: [
      { question: 'Complete: "She is the ___ student in the class."', options: ['good', 'better', 'best', 'most good'], answer_index: 2, explanation: 'Good → best (irregular).' },
      { question: 'Complete: "It is the ___ beautiful place."', options: ['more', 'most', '-est', 'best'], answer_index: 1, explanation: 'Long adjective uses "the most".' },
      { question: 'Which is correct?', options: ['He is tallest boy.', 'He is the tallest boy.', 'He is the taller boy.', 'He is most tall boy.'], answer_index: 1, explanation: 'Superlatives need "the".' },
    ],
  },
  {
    number: 33, title: 'Adverbs of Frequency', level: 'elementary', unit: 6, topic: 'How often',
    description: 'Learn to say how often you do things using always, usually, often, sometimes, and never.',
    objectives: ['Use frequency adverbs', 'Place them correctly in a sentence', 'Ask "How often...?"'],
    dialogue: [
      { speaker: 'A', line: 'How often do you exercise?' },
      { speaker: 'B', line: 'I usually exercise three times a week. I never skip.' },
      { speaker: 'A', line: 'I sometimes go to the gym.' },
      { speaker: 'B', line: 'That is good too!' },
    ],
    vocabulary: [
      { word: 'always', translation: '100% of the time', example: 'I always brush my teeth.' },
      { word: 'usually', translation: 'most of the time', example: 'I usually walk to work.' },
      { word: 'sometimes', translation: 'now and then', example: 'I sometimes eat out.' },
      { word: 'never', translation: '0% of the time', example: 'I never drink soda.' },
    ],
    grammar_point: 'Adverbs of frequency',
    grammar_explanation: 'Place them before the main verb: "I always eat." But after "to be": "I am always late."',
    quiz: [
      { question: 'Which means 0%?', options: ['always', 'usually', 'sometimes', 'never'], answer_index: 3, explanation: 'Never = 0%.' },
      { question: 'Complete: "I ___ go to the gym."', options: ['always', 'usually', 'never', 'All of these'], answer_index: 3, explanation: 'All fit before the main verb.' },
      { question: 'Which is correct?', options: ['I am always happy.', 'I always am happy.', 'I am happy always.', 'Always I am happy.'], answer_index: 0, explanation: 'After "to be": "I am always happy."' },
    ],
  },
  {
    number: 34, title: 'Countable and Uncountable', level: 'elementary', unit: 6, topic: 'Nouns',
    description: 'Learn the difference between countable and uncountable nouns and use some/any.',
    objectives: ['Identify countable vs uncountable nouns', 'Use "some" and "any"', 'Use "much" and "many"'],
    dialogue: [
      { speaker: 'A', line: 'Is there any milk?' },
      { speaker: 'B', line: 'Yes, there is some milk in the fridge. How many eggs are there?' },
      { speaker: 'A', line: 'There are some eggs. But there isn\'t any bread.' },
      { speaker: 'B', line: 'I\'ll buy some.' },
    ],
    vocabulary: [
      { word: 'some', translation: 'an amount (positive)', example: 'I have some water.' },
      { word: 'any', translation: 'an amount (question/negative)', example: 'Is there any tea?' },
      { word: 'much', translation: 'for uncountable', example: 'How much money?' },
      { word: 'many', translation: 'for countable', example: 'How many apples?' },
    ],
    grammar_point: 'some / any',
    grammar_explanation: 'Use "some" in positive sentences and "any" in questions and negatives. "Much" for uncountable, "many" for countable.',
    quiz: [
      { question: 'Complete: "Is there ___ water?"', options: ['some', 'any', 'much', 'many'], answer_index: 1, explanation: 'Questions use "any".' },
      { question: 'Complete: "I have ___ apples."', options: ['some', 'any', 'much', 'a'], answer_index: 0, explanation: 'Positive uses "some".' },
      { question: 'Which is uncountable?', options: ['apple', 'egg', 'milk', 'book'], answer_index: 2, explanation: 'Milk is uncountable.' },
    ],
  },
  {
    number: 35, title: 'Should and Shouldn\'t (Advice)', level: 'elementary', unit: 6, topic: 'Giving advice',
    description: 'Learn to give advice and suggestions using should and shouldn\'t.',
    objectives: ['Use "should" for advice', 'Use "shouldn\'t" for warnings', 'Ask for advice'],
    dialogue: [
      { speaker: 'A', line: 'I feel tired all the time.' },
      { speaker: 'B', line: 'You should sleep more. You shouldn\'t drink coffee at night.' },
      { speaker: 'A', line: 'Should I see a doctor?' },
      { speaker: 'B', line: 'Yes, you should.' },
    ],
    vocabulary: [
      { word: 'should', translation: 'it is a good idea', example: 'You should rest.' },
      { word: "shouldn't", translation: 'it is not a good idea', example: 'You shouldn\'t smoke.' },
      { word: 'advice', translation: 'a suggestion to help', example: 'Can you give me advice?' },
      { word: 'tired', translation: 'needing rest', example: 'I am very tired.' },
    ],
    grammar_point: 'should / shouldn\'t',
    grammar_explanation: 'Use "should" + verb for advice. It is the same for all subjects. Negative is "shouldn\'t."',
    quiz: [
      { question: 'Complete: "You ___ see a doctor."', options: ['should', 'must', 'can', 'will'], answer_index: 0, explanation: 'Advice uses "should".' },
      { question: 'Complete: "You ___ smoke."', options: ['should', 'shouldn\'t', 'can', 'will'], answer_index: 1, explanation: 'Warning uses "shouldn\'t".' },
      { question: 'Which asks for advice?', options: ['Should I rest?', 'I should rest.', 'You should rest.', 'Rest now.'], answer_index: 0, explanation: 'Question form: "Should I...?"' },
    ],
  },
  {
    number: 36, title: 'Must and Mustn\'t (Rules)', level: 'elementary', unit: 6, topic: 'Rules and obligation',
    description: 'Learn to talk about rules and strong obligations using must and mustn\'t.',
    objectives: ['Use "must" for strong obligation', 'Use "mustn\'t" for prohibitions', 'Talk about rules'],
    dialogue: [
      { speaker: 'A', line: 'You must wear a seatbelt in the car.' },
      { speaker: 'B', line: 'Yes, and you mustn\'t use your phone while driving.' },
      { speaker: 'A', line: 'Students must arrive on time.' },
      { speaker: 'B', line: 'That is an important rule.' },
    ],
    vocabulary: [
      { word: 'must', translation: 'strong obligation', example: 'You must stop at the red light.' },
      { word: "mustn't", translation: 'strong prohibition', example: 'You mustn\'t smoke here.' },
      { word: 'rule', translation: 'something you must follow', example: 'This is a school rule.' },
      { word: 'seatbelt', translation: 'safety belt in cars', example: 'Wear your seatbelt.' },
    ],
    grammar_point: 'must / mustn\'t',
    grammar_explanation: 'Use "must" + verb for strong rules and obligations. "Mustn\'t" means it is forbidden. Same form for all subjects.',
    quiz: [
      { question: 'Complete: "You ___ stop at a red light."', options: ['must', 'mustn\'t', 'can', 'should'], answer_index: 0, explanation: 'Strong rule uses "must".' },
      { question: 'Complete: "You ___ smoke here."', options: ['must', 'mustn\'t', 'should', 'can'], answer_index: 1, explanation: 'Forbidden = "mustn\'t".' },
      { question: 'Which is a rule?', options: ['I like music.', 'You must wear a helmet.', 'She is tall.', 'We went home.'], answer_index: 1, explanation: 'A rule uses "must".' },
    ],
  },

  // UNIT 7 — Pre-Intermediate Tenses
  {
    number: 37, title: 'Present Continuous for Now', level: 'pre-intermediate', unit: 7, topic: 'Actions now',
    description: 'Learn to describe actions happening at this moment.',
    objectives: ['Form present continuous', 'Describe actions happening now', 'Spell -ing forms'],
    dialogue: [
      { speaker: 'A', line: 'What are you doing right now?' },
      { speaker: 'B', line: 'I am reading a book. My brother is watching TV.' },
      { speaker: 'A', line: 'Are they playing outside?' },
      { speaker: 'B', line: 'No, they are studying.' },
    ],
    vocabulary: [
      { word: 'right now', translation: 'at this moment', example: 'I am busy right now.' },
      { word: 'at the moment', translation: 'currently', example: 'She is working at the moment.' },
      { word: 'reading', translation: 'looking at a book', example: 'I am reading a novel.' },
      { word: 'watching', translation: 'looking at something', example: 'He is watching a film.' },
    ],
    grammar_point: 'Present continuous',
    grammar_explanation: 'Form: am/is/are + verb-ing. Use for actions happening now. Spelling: run → running, write → writing, lie → lying.',
    quiz: [
      { question: 'Complete: "I ___ a book now."', options: ['read', 'am reading', 'reads', 'reading'], answer_index: 1, explanation: 'Now = present continuous.' },
      { question: 'What is the -ing of "run"?', options: ['runing', 'running', 'runnning', 'runing'], answer_index: 1, explanation: 'Double the consonant: running.' },
      { question: 'Complete: "They ___ outside."', options: ['is playing', 'are playing', 'plays', 'playing'], answer_index: 1, explanation: 'They → are + playing.' },
    ],
  },
  {
    number: 38, title: 'Present Simple vs Continuous', level: 'pre-intermediate', unit: 7, topic: 'Choosing the tense',
    description: 'Learn when to use present simple and when to use present continuous.',
    objectives: ['Choose the correct present tense', 'Use simple for habits, continuous for now', 'Avoid common mistakes'],
    dialogue: [
      { speaker: 'A', line: 'I usually walk to work, but today I am taking the bus.' },
      { speaker: 'B', line: 'Why? Is it raining?' },
      { speaker: 'A', line: 'Yes, it rains a lot this week.' },
      { speaker: 'B', line: 'Take an umbrella!' },
    ],
    vocabulary: [
      { word: 'usually', translation: 'most of the time', example: 'I usually drink tea.' },
      { word: 'today', translation: 'this day', example: 'Today I am busy.' },
      { word: 'habit', translation: 'something you do often', example: 'Smoking is a bad habit.' },
      { word: 'now', translation: 'at this moment', example: 'I am busy now.' },
    ],
    grammar_point: 'Present simple vs continuous',
    grammar_explanation: 'Simple = habits and facts ("I walk to work"). Continuous = actions happening now ("I am walking"). Stative verbs (like, know, want) stay simple.',
    quiz: [
      { question: 'Which is correct?', options: ['I am knowing him.', 'I know him.', 'I knowing him.', 'I knows him.'], answer_index: 1, explanation: '"Know" is stative; use simple.' },
      { question: 'Complete: "I ___ to work every day."', options: ['walk', 'am walking', 'walks', 'walking'], answer_index: 0, explanation: 'Habit = simple.' },
      { question: 'Complete: "I ___ to work now."', options: ['walk', 'am walking', 'walks', 'walking'], answer_index: 1, explanation: 'Now = continuous.' },
    ],
  },
  {
    number: 39, title: 'Present Perfect (Experience)', level: 'pre-intermediate', unit: 7, topic: 'Life experiences',
    description: 'Learn to talk about life experiences using the present perfect.',
    objectives: ['Form present perfect with have/has + past participle', 'Talk about experiences', 'Use ever and never'],
    dialogue: [
      { speaker: 'A', line: 'Have you ever been to Japan?' },
      { speaker: 'B', line: 'No, I have never been there. Have you?' },
      { speaker: 'A', line: 'Yes, I have. I went last year.' },
      { speaker: 'B', line: 'That sounds amazing!' },
    ],
    vocabulary: [
      { word: 'ever', translation: 'at any time', example: 'Have you ever eaten sushi?' },
      { word: 'never', translation: 'at no time', example: 'I have never seen snow.' },
      { word: 'been', translation: 'past participle of go/be', example: 'I have been to Paris.' },
      { word: 'experience', translation: 'something that happened to you', example: 'It was a great experience.' },
    ],
    grammar_point: 'Present perfect (experience)',
    grammar_explanation: 'Form: have/has + past participle. Use for life experiences without a specific time. Use "ever" in questions and "never" in negatives.',
    quiz: [
      { question: 'Complete: "I ___ been to Rome."', options: ['have', 'has', 'am', 'did'], answer_index: 0, explanation: 'I → have + past participle.' },
      { question: 'Complete: "Have you ___ eaten sushi?"', options: ['ever', 'never', 'yet', 'just'], answer_index: 0, explanation: 'Questions use "ever".' },
      { question: 'Which is correct?', options: ['I have went.', 'I have gone.', 'I have go.', 'I has gone.'], answer_index: 1, explanation: 'Have + past participle (gone).' },
    ],
  },
  {
    number: 40, title: 'Present Perfect with Just, Yet, Already', level: 'pre-intermediate', unit: 7, topic: 'Recent actions',
    description: 'Learn to talk about recent actions using just, yet, and already.',
    objectives: ['Use "just" for very recent actions', 'Use "yet" in negatives and questions', 'Use "already" for done actions'],
    dialogue: [
      { speaker: 'A', line: 'Have you finished your homework yet?' },
      { speaker: 'B', line: 'Yes, I have already finished it. I just did it.' },
      { speaker: 'A', line: 'Great. I haven\'t started yet.' },
      { speaker: 'B', line: 'Hurry up!' },
    ],
    vocabulary: [
      { word: 'just', translation: 'a very short time ago', example: 'I have just eaten.' },
      { word: 'yet', translation: 'until now (neg/question)', example: 'Have you finished yet?' },
      { word: 'already', translation: 'before now (positive)', example: 'I have already seen it.' },
      { word: 'finished', translation: 'ended', example: 'I have finished my work.' },
    ],
    grammar_point: 'just / yet / already',
    grammar_explanation: '"Just" = very recent. "Already" = sooner than expected (positive). "Yet" = until now (questions and negatives, placed at the end).',
    quiz: [
      { question: 'Complete: "I have ___ eaten."', options: ['yet', 'just', 'already', 'ever'], answer_index: 1, explanation: 'Very recent = "just".' },
      { question: 'Complete: "Have you finished ___?"', options: ['already', 'just', 'yet', 'ever'], answer_index: 2, explanation: 'Questions use "yet" at the end.' },
      { question: 'Complete: "I have ___ seen that film."', options: ['yet', 'just', 'already', 'never'], answer_index: 2, explanation: 'Done sooner = "already".' },
    ],
  },
  {
    number: 41, title: 'For and Since', level: 'pre-intermediate', unit: 7, topic: 'Duration',
    description: 'Learn to talk about how long something has lasted using for and since.',
    objectives: ['Use "for" with periods of time', 'Use "since" with points in time', 'Talk about duration'],
    dialogue: [
      { speaker: 'A', line: 'How long have you lived here?' },
      { speaker: 'B', line: 'I have lived here for five years. Since 2019.' },
      { speaker: 'A', line: 'I have studied English for two months.' },
      { speaker: 'B', line: 'You are doing well!' },
    ],
    vocabulary: [
      { word: 'for', translation: 'a length of time', example: 'I have lived here for ten years.' },
      { word: 'since', translation: 'a starting point', example: 'I have known her since 2010.' },
      { word: 'how long', translation: 'asking about duration', example: 'How long have you waited?' },
      { word: 'years', translation: 'periods of 12 months', example: 'I have worked for three years.' },
    ],
    grammar_point: 'for / since',
    grammar_explanation: 'Use "for" + a period (for two years). Use "since" + a point in time (since Monday, since 2010).',
    quiz: [
      { question: 'Complete: "I have lived here ___ 2010."', options: ['for', 'since', 'from', 'in'], answer_index: 1, explanation: 'Point in time = "since".' },
      { question: 'Complete: "I have studied ___ three hours."', options: ['for', 'since', 'from', 'at'], answer_index: 0, explanation: 'Period = "for".' },
      { question: 'Which uses "since"?', options: ['___ two weeks', '___ Monday', '___ a year', '___ ten minutes'], answer_index: 1, explanation: 'Monday is a point in time.' },
    ],
  },
  {
    number: 42, title: 'Past Continuous', level: 'pre-intermediate', unit: 7, topic: 'Past actions in progress',
    description: 'Learn to describe actions that were in progress in the past.',
    objectives: ['Form past continuous', 'Describe interrupted past actions', 'Use "while" and "when"'],
    dialogue: [
      { speaker: 'A', line: 'What were you doing at 8 pm yesterday?' },
      { speaker: 'B', line: 'I was cooking dinner when the phone rang.' },
      { speaker: 'A', line: 'While I was walking, it started to rain.' },
      { speaker: 'B', line: 'Oh no! Did you get wet?' },
    ],
    vocabulary: [
      { word: 'was cooking', translation: 'in progress in the past', example: 'I was cooking at 7.' },
      { word: 'while', translation: 'during the time that', example: 'While I was reading, she called.' },
      { word: 'when', translation: 'at the moment that', example: 'When I arrived, they were eating.' },
      { word: 'rang', translation: 'past of ring', example: 'The phone rang loudly.' },
    ],
    grammar_point: 'Past continuous',
    grammar_explanation: 'Form: was/were + verb-ing. Use for an action in progress in the past, often interrupted by another action (past simple).',
    quiz: [
      { question: 'Complete: "I ___ TV at 8 pm."', options: ['watch', 'was watching', 'watched', 'watches'], answer_index: 1, explanation: 'In progress in past = past continuous.' },
      { question: 'Complete: "___ I was reading, she called."', options: ['When', 'While', 'At', 'For'], answer_index: 1, explanation: 'Two ongoing actions use "while".' },
      { question: 'Which is correct?', options: ['I was cook.', 'I was cooking.', 'I cooking.', 'I were cooking.'], answer_index: 1, explanation: 'was/were + verb-ing.' },
    ],
  },

  // UNIT 8 — Pre-Intermediate Modals and Conditionals
  {
    number: 43, title: 'May and Might (Possibility)', level: 'pre-intermediate', unit: 8, topic: 'Possibility',
    description: 'Learn to talk about things that are possible using may and might.',
    objectives: ['Use "may/might" for possibility', 'Form sentences and questions', 'Talk about future possibilities'],
    dialogue: [
      { speaker: 'A', line: 'Will it rain tomorrow?' },
      { speaker: 'B', line: 'It might rain. The sky is grey.' },
      { speaker: 'A', line: 'I may go to the cinema tonight.' },
      { speaker: 'B', line: 'Have fun if you do!' },
    ],
    vocabulary: [
      { word: 'may', translation: 'it is possible', example: 'I may travel next month.' },
      { word: 'might', translation: 'less sure than may', example: 'It might snow.' },
      { word: 'possible', translation: 'could happen', example: 'Rain is possible today.' },
      { word: 'perhaps', translation: 'maybe', example: 'Perhaps we will go.' },
    ],
    grammar_point: 'may / might',
    grammar_explanation: 'Use "may" or "might" + verb for possibility. "Might" is less certain. Same form for all subjects.',
    quiz: [
      { question: 'Complete: "It ___ rain later."', options: ['may', 'must', 'should', 'can'], answer_index: 0, explanation: 'Possibility uses "may".' },
      { question: 'Which shows less certainty?', options: ['may', 'might', 'must', 'will'], answer_index: 1, explanation: '"Might" is less sure than "may".' },
      { question: 'Complete: "I ___ go to the party."', options: ['might', 'must', 'should', 'can'], answer_index: 0, explanation: 'Possibility uses "might".' },
    ],
  },
  {
    number: 44, title: 'Have to and Must (Obligation)', level: 'pre-intermediate', unit: 8, topic: 'Necessity',
    description: 'Learn to talk about necessity and rules using have to and must.',
    objectives: ['Use "have to" for external rules', 'Use "must" for personal obligation', 'Form negatives correctly'],
    dialogue: [
      { speaker: 'A', line: 'I have to wake up early tomorrow.' },
      { speaker: 'B', line: 'I must finish my project tonight.' },
      { speaker: 'A', line: 'You don\'t have to work on Sunday.' },
      { speaker: 'B', line: 'Good, I need the rest.' },
    ],
    vocabulary: [
      { word: 'have to', translation: 'external necessity', example: 'I have to wear a uniform.' },
      { word: 'must', translation: 'personal strong obligation', example: 'I must study hard.' },
      { word: "don't have to", translation: 'not necessary', example: 'You don\'t have to come.' },
      { word: 'necessary', translation: 'needed', example: 'Sleep is necessary.' },
    ],
    grammar_point: 'have to / must',
    grammar_explanation: 'Both express obligation. "Have to" is often external (a rule). "Must" is often personal. Negative "don\'t have to" = not necessary; "mustn\'t" = forbidden.',
    quiz: [
      { question: 'Complete: "I ___ wear a uniform at work."', options: ['have to', 'must', 'should', 'can'], answer_index: 0, explanation: 'External rule = "have to".' },
      { question: 'Complete: "You ___ come if you don\'t want to."', options: ['mustn\'t', 'don\'t have to', 'can\'t', 'shouldn\'t'], answer_index: 1, explanation: 'Not necessary = "don\'t have to".' },
      { question: 'Which means "it is forbidden"?', options: ['don\'t have to', 'mustn\'t', 'shouldn\'t', 'can'], answer_index: 1, explanation: 'Forbidden = "mustn\'t".' },
    ],
  },
  {
    number: 45, title: 'First Conditional', level: 'pre-intermediate', unit: 8, topic: 'Real future situations',
    description: 'Learn to talk about real future possibilities using if + present, will + verb.',
    objectives: ['Form first conditional sentences', 'Use "if" clauses correctly', 'Talk about likely futures'],
    dialogue: [
      { speaker: 'A', line: 'If it rains, we will stay home.' },
      { speaker: 'B', line: 'And if it is sunny, we will go to the park.' },
      { speaker: 'A', line: 'If you study, you will pass the exam.' },
      { speaker: 'B', line: 'I hope so!' },
    ],
    vocabulary: [
      { word: 'if', translation: 'on the condition that', example: 'If you call, I will answer.' },
      { word: 'will', translation: 'future result', example: 'I will help you.' },
      { word: 'condition', translation: 'something that must happen', example: 'Passing is my condition.' },
      { word: 'likely', translation: 'probably', example: 'It is likely to rain.' },
    ],
    grammar_point: 'First conditional',
    grammar_explanation: 'Form: If + present simple, will + verb. Use for real, likely future situations. The "if" clause can come first or second.',
    quiz: [
      { question: 'Complete: "If it rains, we ___ stay home."', options: ['will', 'would', 'can', 'should'], answer_index: 0, explanation: 'Result clause uses "will".' },
      { question: 'Complete: "If you study, you ___ pass."', options: ['will', 'would', 'might', 'could'], answer_index: 0, explanation: 'First conditional result uses "will".' },
      { question: 'Which is correct?', options: ['If it will rain, we stay.', 'If it rains, we will stay.', 'If it rain, we will stay.', 'If it rains, we would stay.'], answer_index: 1, explanation: 'If + present, will + verb.' },
    ],
  },
  {
    number: 46, title: 'Zero Conditional', level: 'pre-intermediate', unit: 8, topic: 'General truths',
    description: 'Learn to talk about facts and general truths using if + present, present.',
    objectives: ['Form zero conditional sentences', 'Talk about scientific facts', 'Use it for habits'],
    dialogue: [
      { speaker: 'A', line: 'What happens if you heat ice?' },
      { speaker: 'B', line: 'If you heat ice, it melts.' },
      { speaker: 'A', line: 'If you mix blue and yellow, you get green.' },
      { speaker: 'B', line: 'That is correct!' },
    ],
    vocabulary: [
      { word: 'if', translation: 'whenever', example: 'If I drink coffee, I stay awake.' },
      { word: 'melts', translation: 'becomes liquid', example: 'Ice melts in the sun.' },
      { word: 'fact', translation: 'something true', example: 'Water boils at 100°C.' },
      { word: 'mix', translation: 'combine', example: 'Mix the colors.' },
    ],
    grammar_point: 'Zero conditional',
    grammar_explanation: 'Form: If + present simple, present simple. Use for facts and general truths that are always true.',
    quiz: [
      { question: 'Complete: "If you heat ice, it ___."', options: ['will melt', 'melts', 'melted', 'melting'], answer_index: 1, explanation: 'Zero conditional uses present in both clauses.' },
      { question: 'Complete: "If I drink coffee, I ___ awake."', options: ['will stay', 'stay', 'stayed', 'staying'], answer_index: 1, explanation: 'General truth = present simple.' },
      { question: 'Which is a zero conditional?', options: ['If it rains, I will stay.', 'If you heat water, it boils.', 'If I were rich, I would travel.', 'If it rained, I would stay.'], answer_index: 1, explanation: 'Both clauses present = zero conditional.' },
    ],
  },
  {
    number: 47, title: 'Second Conditional', level: 'pre-intermediate', unit: 8, topic: 'Imaginary situations',
    description: 'Learn to talk about imaginary or unlikely situations using if + past, would + verb.',
    objectives: ['Form second conditional sentences', 'Talk about imaginary situations', 'Use "would" in the result'],
    dialogue: [
      { speaker: 'A', line: 'If you won the lottery, what would you do?' },
      { speaker: 'B', line: 'I would travel the world. And you?' },
      { speaker: 'A', line: 'I would buy a big house by the sea.' },
      { speaker: 'B', line: 'That sounds lovely!' },
    ],
    vocabulary: [
      { word: 'would', translation: 'imagined result', example: 'I would help you.' },
      { word: 'if', translation: 'imagined condition', example: 'If I were rich...' },
      { word: 'imaginary', translation: 'not real', example: 'It is an imaginary story.' },
      { word: 'lottery', translation: 'a game of chance', example: 'I won the lottery.' },
    ],
    grammar_point: 'Second conditional',
    grammar_explanation: 'Form: If + past simple, would + verb. Use for imaginary or unlikely situations. With "be," use "were" for all subjects: "If I were you."',
    quiz: [
      { question: 'Complete: "If I were rich, I ___ travel."', options: ['will', 'would', 'can', 'should'], answer_index: 1, explanation: 'Result uses "would".' },
      { question: 'Complete: "If I ___ you, I would apologize."', options: ['am', 'was', 'were', 'be'], answer_index: 2, explanation: 'Second conditional uses "were".' },
      { question: 'Which is a second conditional?', options: ['If it rains, I will stay.', 'If you heat water, it boils.', 'If I had time, I would help.', 'If it rained, I stayed.'], answer_index: 2, explanation: 'If + past, would + verb.' },
    ],
  },
  {
    number: 48, title: 'Passive Voice (Present)', level: 'pre-intermediate', unit: 8, topic: 'When the action matters',
    description: 'Learn to use the passive voice when the action is more important than who does it.',
    objectives: ['Form passive in present simple', 'Use "is/are + past participle"', 'Focus on the action not the doer'],
    dialogue: [
      { speaker: 'A', line: 'Is this book translated into English?' },
      { speaker: 'B', line: 'Yes, it is translated by a famous writer.' },
      { speaker: 'A', line: 'Coffee is grown in Brazil.' },
      { speaker: 'B', line: 'I did not know that!' },
    ],
    vocabulary: [
      { word: 'is made', translation: 'passive of make', example: 'This chair is made of wood.' },
      { word: 'is grown', translation: 'passive of grow', example: 'Rice is grown in Asia.' },
      { word: 'is spoken', translation: 'passive of speak', example: 'English is spoken here.' },
      { word: 'by', translation: 'shows the doer', example: 'It was written by her.' },
    ],
    grammar_point: 'Passive voice (present)',
    grammar_explanation: 'Form: am/is/are + past participle. Use when the action is more important than who does it. Add "by + person" to mention the doer.',
    quiz: [
      { question: 'Complete: "English ___ spoken here."', options: ['is', 'are', 'does', 'has'], answer_index: 0, explanation: 'Passive present uses "is/are + participle".' },
      { question: 'Complete: "Cars ___ made in this factory."', options: ['is', 'are', 'do', 'has'], answer_index: 1, explanation: 'Plural passive uses "are".' },
      { question: 'Which is passive?', options: ['She wrote the book.', 'The book is written by her.', 'She writes books.', 'She is writing.'], answer_index: 1, explanation: 'Passive focuses on the book.' },
    ],
  },

  // UNIT 9 — Pre-Intermediate Speaking
  {
    number: 49, title: 'Making Suggestions', level: 'pre-intermediate', unit: 9, topic: 'Ideas and plans',
    description: 'Learn to make and respond to suggestions in English.',
    objectives: ['Use "Let\'s", "How about", "Why don\'t we"', 'Accept and refuse suggestions', 'Plan with others'],
    dialogue: [
      { speaker: 'A', line: 'Let\'s go to the cinema tonight.' },
      { speaker: 'B', line: 'Good idea! How about watching a comedy?' },
      { speaker: 'A', line: 'Why don\'t we try the new restaurant first?' },
      { speaker: 'B', line: 'That sounds great!' },
    ],
    vocabulary: [
      { word: "let's", translation: 'I suggest we...', example: 'Let\'s go for a walk.' },
      { word: 'how about', translation: 'what do you think of', example: 'How about pizza?' },
      { word: "why don't we", translation: 'I suggest we...', example: 'Why don\'t we leave now?' },
      { word: 'good idea', translation: 'I agree', example: 'Good idea! Let\'s do it.' },
    ],
    grammar_point: 'Making suggestions',
    grammar_explanation: 'Forms: "Let\'s + verb," "How about + verb-ing/noun," "Why don\'t we + verb," "Shall we + verb?"',
    quiz: [
      { question: 'Complete: "Let\'s ___ to the park."', options: ['go', 'going', 'goes', 'went'], answer_index: 0, explanation: '"Let\'s" + base verb.' },
      { question: 'Complete: "How about ___ pizza?"', options: ['order', 'ordering', 'ordered', 'orders'], answer_index: 1, explanation: '"How about" + verb-ing.' },
      { question: 'Which accepts a suggestion?', options: ['No thanks.', 'Good idea!', 'I don\'t think so.', 'Maybe later.'], answer_index: 1, explanation: '"Good idea!" accepts.' },
    ],
  },
  {
    number: 50, title: 'Agreeing and Disagreeing', level: 'pre-intermediate', unit: 9, topic: 'Opinions',
    description: 'Learn to agree and disagree politely in English.',
    objectives: ['Agree with opinions', 'Disagree politely', 'Use "I think" and "I don\'t think"'],
    dialogue: [
      { speaker: 'A', line: 'I think this film is great.' },
      { speaker: 'B', line: 'I agree. The acting is wonderful.' },
      { speaker: 'A', line: 'I don\'t think the ending is good.' },
      { speaker: 'B', line: 'I see your point, but I liked it.' },
    ],
    vocabulary: [
      { word: 'agree', translation: 'have the same opinion', example: 'I agree with you.' },
      { word: 'disagree', translation: 'have a different opinion', example: 'I disagree, sorry.' },
      { word: 'I think', translation: 'my opinion is', example: 'I think it is good.' },
      { word: 'I see your point', translation: 'I understand your view', example: 'I see your point, but...' },
    ],
    grammar_point: 'Agreeing and disagreeing',
    grammar_explanation: 'Agree: "I agree," "So do I," "Me too." Disagree: "I disagree," "I don\'t think so," "I see your point, but..."',
    quiz: [
      { question: 'Which agrees?', options: ['I disagree.', 'I don\'t think so.', 'So do I.', 'Maybe not.'], answer_index: 2, explanation: '"So do I" agrees.' },
      { question: 'Complete: "I ___ the film is good."', options: ['think', 'thinking', 'thinks', 'thought'], answer_index: 0, explanation: 'Opinion uses "I think".' },
      { question: 'Which disagrees politely?', options: ['You are wrong.', 'I see your point, but...', 'No way.', 'That is stupid.'], answer_index: 1, explanation: 'Polite disagreement uses "I see your point, but..."' },
    ],
  },
  {
    number: 51, title: 'Asking for and Giving Opinions', level: 'pre-intermediate', unit: 9, topic: 'Sharing views',
    description: 'Learn to ask for opinions and give your own in English.',
    objectives: ['Ask "What do you think of...?"', 'Give opinions with "In my opinion"', 'Use opinion phrases'],
    dialogue: [
      { speaker: 'A', line: 'What do you think of this restaurant?' },
      { speaker: 'B', line: 'In my opinion, the food is delicious.' },
      { speaker: 'A', line: 'I think the service is slow.' },
      { speaker: 'B', line: 'I agree, but the prices are good.' },
    ],
    vocabulary: [
      { word: 'opinion', translation: 'what you think', example: 'What is your opinion?' },
      { word: 'in my opinion', translation: 'I think', example: 'In my opinion, it is great.' },
      { word: 'what do you think', translation: 'asking a view', example: 'What do you think of it?' },
      { word: 'personally', translation: 'for me', example: 'Personally, I love it.' },
    ],
    grammar_point: 'Asking and giving opinions',
    grammar_explanation: 'Ask: "What do you think of...?" Give: "In my opinion...", "I think...", "Personally, I..."',
    quiz: [
      { question: 'Which asks for an opinion?', options: ['I think it is good.', 'In my opinion, yes.', 'What do you think of it?', 'I agree.'], answer_index: 2, explanation: '"What do you think of...?" asks.' },
      { question: 'Complete: "___ my opinion, it is great."', options: ['On', 'In', 'At', 'For'], answer_index: 1, explanation: 'Use "In my opinion".' },
      { question: 'Which gives an opinion?', options: ['What do you think?', 'Do you like it?', 'Personally, I love it.', 'Is it good?'], answer_index: 2, explanation: '"Personally, I..." gives an opinion.' },
    ],
  },
  {
    number: 52, title: 'Telephoning', level: 'pre-intermediate', unit: 9, topic: 'Phone calls',
    description: 'Learn useful phrases for making and answering phone calls in English.',
    objectives: ['Answer the phone politely', 'Ask to speak to someone', 'Take and leave messages'],
    dialogue: [
      { speaker: 'A', line: 'Hello, this is Anna. Can I speak to Mark, please?' },
      { speaker: 'B', line: 'I am sorry, he is not here. Can I take a message?' },
      { speaker: 'A', line: 'Yes, please tell him to call me back.' },
      { speaker: 'B', line: 'Of course. Goodbye.' },
    ],
    vocabulary: [
      { word: 'hold on', translation: 'wait a moment', example: 'Hold on, please.' },
      { word: 'take a message', translation: 'write down information', example: 'Can I take a message?' },
      { word: 'call back', translation: 'phone again', example: 'I will call back later.' },
      { word: 'speak to', translation: 'talk to someone', example: 'Can I speak to Jane?' },
    ],
    grammar_point: 'Phone phrases',
    grammar_explanation: 'Answer: "Hello, this is..." Ask: "Can I speak to...?" Take a message: "Can I take a message?" Wait: "Hold on, please."',
    quiz: [
      { question: 'How do you introduce yourself on the phone?', options: ['I am John.', 'This is John.', 'John speaking me.', 'Me John.'], answer_index: 1, explanation: 'On the phone use "This is..."' },
      { question: 'Complete: "Can I ___ to Mr. Smith?"', options: ['speak', 'say', 'tell', 'talk'], answer_index: 0, explanation: 'Use "speak to" someone.' },
      { question: 'Which asks to wait?', options: ['Call back.', 'Hold on, please.', 'Take a message.', 'Goodbye.'], answer_index: 1, explanation: '"Hold on, please" asks to wait.' },
    ],
  },
  {
    number: 53, title: 'At the Airport', level: 'pre-intermediate', unit: 9, topic: 'Travel',
    description: 'Learn useful phrases for checking in and navigating the airport.',
    objectives: ['Check in for a flight', 'Ask about gates and boarding', 'Understand airport announcements'],
    dialogue: [
      { speaker: 'A', line: 'Where is the check-in desk for flight BA123?' },
      { speaker: 'B', line: 'It is in Hall B, counter 12.' },
      { speaker: 'A', line: 'What time does boarding start?' },
      { speaker: 'B', line: 'Boarding starts at 3 pm at gate 7.' },
    ],
    vocabulary: [
      { word: 'check-in', translation: 'where you show your ticket', example: 'The check-in is over there.' },
      { word: 'gate', translation: 'where you board the plane', example: 'My gate is 5.' },
      { word: 'boarding', translation: 'getting on the plane', example: 'Boarding starts now.' },
      { word: 'departure', translation: 'leaving', example: 'The departure time is 4 pm.' },
    ],
    grammar_point: 'Travel questions',
    grammar_explanation: 'Ask: "Where is...?", "What time does...start?", "Which gate...?" Use polite forms at the airport.',
    quiz: [
      { question: 'Where do you show your ticket?', options: ['gate', 'check-in', 'boarding', 'arrival'], answer_index: 1, explanation: 'You check in at the check-in desk.' },
      { question: 'Complete: "Boarding starts ___ 3 pm."', options: ['on', 'in', 'at', 'to'], answer_index: 2, explanation: 'Clock times use "at".' },
      { question: 'Which asks about the plane door?', options: ['Where is the gate?', 'What time is it?', 'How are you?', 'Where is the toilet?'], answer_index: 0, explanation: 'The gate is where you board.' },
    ],
  },
  {
    number: 54, title: 'At the Hotel', level: 'pre-intermediate', unit: 9, topic: 'Staying somewhere',
    description: 'Learn to check in and out of a hotel and ask for what you need.',
    objectives: ['Check into a hotel', 'Ask about room and services', 'Make requests politely'],
    dialogue: [
      { speaker: 'A', line: 'I have a reservation for two nights, under the name Lee.' },
      { speaker: 'B', line: 'Yes, a double room. Here is your key card.' },
      { speaker: 'A', line: 'What time is breakfast?' },
      { speaker: 'B', line: 'Breakfast is from 7 to 10 in the restaurant.' },
    ],
    vocabulary: [
      { word: 'reservation', translation: 'a booked room', example: 'I have a reservation.' },
      { word: 'check in', translation: 'arrive and register', example: 'I check in at noon.' },
      { word: 'check out', translation: 'leave and pay', example: 'Check out is at 11 am.' },
      { word: 'key card', translation: 'card to open the door', example: 'Here is your key card.' },
    ],
    grammar_point: 'Hotel requests',
    grammar_explanation: 'Use "I have a reservation," "Can I have...?", "What time is...?" Polite forms make hotel stays smoother.',
    quiz: [
      { question: 'Which means a booked room?', options: ['key card', 'reservation', 'check out', 'breakfast'], answer_index: 1, explanation: 'A reservation is a booked room.' },
      { question: 'Complete: "I have a ___ for two nights."', options: ['check in', 'key card', 'reservation', 'gate'], answer_index: 2, explanation: 'A booked room is a reservation.' },
      { question: 'Which asks about a meal time?', options: ['What time is breakfast?', 'Where is the gate?', 'Can I have a key?', 'How are you?'], answer_index: 0, explanation: 'Asking a meal time uses "What time is...?"' },
    ],
  },

  // UNIT 10 — Pre-Intermediate Review and Beyond
  {
    number: 55, title: 'Question Forms Review', level: 'pre-intermediate', unit: 10, topic: 'Asking questions',
    description: 'Review how to form questions in present, past, and with modals.',
    objectives: ['Form questions in all tenses', 'Use question words correctly', 'Ask polite questions'],
    dialogue: [
      { speaker: 'A', line: 'Where do you live?' },
      { speaker: 'B', line: 'I live in London. Where are you from?' },
      { speaker: 'A', line: 'I am from Spain. What did you do last weekend?' },
      { speaker: 'B', line: 'I visited my family.' },
    ],
    vocabulary: [
      { word: 'where', translation: 'asking a place', example: 'Where do you live?' },
      { word: 'what', translation: 'asking a thing', example: 'What is your name?' },
      { word: 'when', translation: 'asking a time', example: 'When did you arrive?' },
      { word: 'why', translation: 'asking a reason', example: 'Why are you late?' },
    ],
    grammar_point: 'Question forms',
    grammar_explanation: 'Present: Do/Does + subject + verb? Past: Did + subject + verb? Modal: Can/Should + subject + verb? Be: Am/Is/Are + subject?',
    quiz: [
      { question: 'Complete: "___ you like coffee?"', options: ['Do', 'Are', 'Is', 'Did'], answer_index: 0, explanation: 'Present habit uses "do".' },
      { question: 'Complete: "___ you go out last night?"', options: ['Do', 'Did', 'Are', 'Can'], answer_index: 1, explanation: 'Past uses "did".' },
      { question: 'Complete: "___ she swim?"', options: ['Can', 'Does can', 'Is can', 'Do'], answer_index: 0, explanation: 'Modal questions use "can + subject".' },
    ],
  },
  {
    number: 56, title: 'Relative Clauses (who, which, that)', level: 'pre-intermediate', unit: 10, topic: 'Describing things',
    description: 'Learn to give more information about people and things using relative clauses.',
    objectives: ['Use "who" for people', 'Use "which" for things', 'Use "that" for both'],
    dialogue: [
      { speaker: 'A', line: 'The man who lives next door is a doctor.' },
      { speaker: 'B', line: 'The book which I read was great.' },
      { speaker: 'A', line: 'The car that I bought is red.' },
      { speaker: 'B', line: 'Nice! I like red cars.' },
    ],
    vocabulary: [
      { word: 'who', translation: 'for people', example: 'The girl who sings is my friend.' },
      { word: 'which', translation: 'for things', example: 'The film which we saw was good.' },
      { word: 'that', translation: 'for people or things', example: 'The dog that barks is loud.' },
      { word: 'relative clause', translation: 'gives more info', example: 'The man who called is here.' },
    ],
    grammar_point: 'Relative clauses',
    grammar_explanation: 'Use "who" for people, "which" for things, "that" for either. The clause gives extra information about a noun.',
    quiz: [
      { question: 'Complete: "The man ___ called is a doctor."', options: ['who', 'which', 'what', 'where'], answer_index: 0, explanation: 'People use "who".' },
      { question: 'Complete: "The book ___ I read was good."', options: ['who', 'which', 'where', 'when'], answer_index: 1, explanation: 'Things use "which".' },
      { question: 'Which is correct?', options: ['The car who is red.', 'The car which is red.', 'The man which runs.', 'The book who is long.'], answer_index: 1, explanation: 'Things use "which" or "that".' },
    ],
  },
  {
    number: 57, title: 'Used to (Past Habits)', level: 'pre-intermediate', unit: 10, topic: 'Past that no longer happens',
    description: 'Learn to talk about past habits that no longer happen using "used to".',
    objectives: ['Use "used to" for past habits', 'Form negatives and questions', 'Compare past and present'],
    dialogue: [
      { speaker: 'A', line: 'I used to play football every weekend.' },
      { speaker: 'B', line: 'Do you still play?' },
      { speaker: 'A', line: 'No, I don\'t. I used to love it.' },
      { speaker: 'B', line: 'I used to swim, but now I run.' },
    ],
    vocabulary: [
      { word: 'used to', translation: 'past habit', example: 'I used to live in Paris.' },
      { word: "didn't use to", translation: 'did not in the past', example: 'I didn\'t use to like coffee.' },
      { word: 'anymore', translation: 'not now', example: 'I don\'t play anymore.' },
      { word: 'habit', translation: 'something done regularly', example: 'Reading was my habit.' },
    ],
    grammar_point: 'used to',
    grammar_explanation: 'Use "used to + verb" for past habits that no longer happen. Negative: "didn\'t use to." Question: "Did you use to...?"',
    quiz: [
      { question: 'Complete: "I ___ to live in London."', options: ['use', 'used', 'using', 'uses'], answer_index: 1, explanation: 'Past habit uses "used to".' },
      { question: 'Complete: "I ___ use to like tea."', options: ['don\'t', 'didn\'t', 'doesn\'t', 'wasn\'t'], answer_index: 1, explanation: 'Past negative uses "didn\'t use to".' },
      { question: 'Which shows a past habit?', options: ['I play football.', 'I used to play football.', 'I am playing.', 'I will play.'], answer_index: 1, explanation: '"Used to" shows a past habit.' },
    ],
  },
  {
    number: 58, title: 'Phrasal Verbs (Common)', level: 'pre-intermediate', unit: 10, topic: 'Verb + particle',
    description: 'Learn common phrasal verbs like get up, turn on, give up, and look for.',
    objectives: ['Recognize common phrasal verbs', 'Use them in sentences', 'Understand their meanings'],
    dialogue: [
      { speaker: 'A', line: 'What time do you get up?' },
      { speaker: 'B', line: 'I get up at six. Then I turn on the radio.' },
      { speaker: 'A', line: 'I am looking for a new job.' },
      { speaker: 'B', line: 'Don\'t give up! You will find one.' },
    ],
    vocabulary: [
      { word: 'get up', translation: 'leave the bed', example: 'I get up at 6 am.' },
      { word: 'turn on', translation: 'start a device', example: 'Turn on the light.' },
      { word: 'look for', translation: 'search', example: 'I am looking for my keys.' },
      { word: 'give up', translation: 'stop trying', example: 'Don\'t give up!' },
    ],
    grammar_point: 'Phrasal verbs',
    grammar_explanation: 'A phrasal verb is a verb + particle (preposition/adverb) with a new meaning: get up, turn on, give up, look for. Some can be separated: "turn it on."',
    quiz: [
      { question: 'What does "get up" mean?', options: ['sit down', 'leave the bed', 'go out', 'sleep'], answer_index: 1, explanation: 'Get up = leave the bed.' },
      { question: 'Complete: "I am ___ for my keys."', options: ['looking', 'getting', 'turning', 'giving'], answer_index: 0, explanation: 'Search = "look for".' },
      { question: 'Which means "stop trying"?', options: ['turn on', 'look for', 'give up', 'get up'], answer_index: 2, explanation: 'Give up = stop trying.' },
    ],
  },
  {
    number: 59, title: 'Linking Words (and, but, because, so)', level: 'pre-intermediate', unit: 10, topic: 'Connecting ideas',
    description: 'Learn to connect your ideas using and, but, because, and so.',
    objectives: ['Use "and" to add ideas', 'Use "but" to contrast', 'Use "because" for reasons', 'Use "so" for results'],
    dialogue: [
      { speaker: 'A', line: 'I was tired, so I went to bed early.' },
      { speaker: 'B', line: 'I wanted to go out, but it was raining.' },
      { speaker: 'A', line: 'I stayed home because I was sick.' },
      { speaker: 'B', line: 'I read a book and drank tea.' },
    ],
    vocabulary: [
      { word: 'and', translation: 'adds information', example: 'I like tea and coffee.' },
      { word: 'but', translation: 'shows contrast', example: 'I am tired but happy.' },
      { word: 'because', translation: 'gives a reason', example: 'I stayed because I was sick.' },
      { word: 'so', translation: 'shows a result', example: 'It was late, so I left.' },
    ],
    grammar_point: 'Linking words',
    grammar_explanation: 'Use "and" to add, "but" to contrast, "because" to give a reason, "so" to show a result. They join sentences and clauses.',
    quiz: [
      { question: 'Complete: "I was tired, ___ I went to bed."', options: ['and', 'but', 'so', 'because'], answer_index: 2, explanation: 'Result uses "so".' },
      { question: 'Complete: "I stayed home ___ I was sick."', options: ['and', 'but', 'so', 'because'], answer_index: 3, explanation: 'Reason uses "because".' },
      { question: 'Complete: "I like tea ___ coffee."', options: ['and', 'but', 'so', 'because'], answer_index: 0, explanation: 'Adding uses "and".' },
    ],
  },
  {
    number: 60, title: 'Review and Next Steps', level: 'pre-intermediate', unit: 10, topic: 'Looking back and forward',
    description: 'Review the key points from the course and plan your next steps in English.',
    objectives: ['Review key grammar points', 'Assess your progress', 'Plan your next learning steps'],
    dialogue: [
      { speaker: 'A', line: 'You have finished 60 lessons. How do you feel?' },
      { speaker: 'B', line: 'I feel more confident. I can talk about the past, present, and future.' },
      { speaker: 'A', line: 'What will you do next?' },
      { speaker: 'B', line: 'I will practice speaking with friends and read short stories.' },
    ],
    vocabulary: [
      { word: 'confident', translation: 'sure of yourself', example: 'I feel confident now.' },
      { word: 'practice', translation: 'do again to improve', example: 'I practice every day.' },
      { word: 'progress', translation: 'improvement', example: 'You made great progress.' },
      { word: 'next steps', translation: 'what to do after', example: 'My next steps are reading and speaking.' },
    ],
    grammar_point: 'Course review',
    grammar_explanation: 'You have learned present/past/future tenses, modals (can, must, should), conditionals, passives, and question forms. Keep practicing all of them.',
    quiz: [
      { question: 'Which tense describes a habit?', options: ['present simple', 'past continuous', 'present perfect', 'future'], answer_index: 0, explanation: 'Habits use present simple.' },
      { question: 'Which talks about imaginary situations?', options: ['first conditional', 'zero conditional', 'second conditional', 'passive'], answer_index: 2, explanation: 'Imaginary = second conditional.' },
      { question: 'Which helps you improve most?', options: ['stop practicing', 'practice every day', 'skip lessons', 'never speak'], answer_index: 1, explanation: 'Daily practice improves most.' },
    ],
  },
]

function sqlEscape(s: string): string {
  return s.replace(/'/g, "''")
}

function arrSql(a: string[]): string {
  return `ARRAY[${a.map((x) => `'${sqlEscape(x)}'`).join(', ')}]::text[]`
}

function jsonSql(obj: unknown): string {
  return `'${sqlEscape(JSON.stringify(obj))}'::jsonb`
}

const rows = lessons.map((l) => {
  return `(${l.number}, '${sqlEscape(l.title)}', '${sqlEscape(l.description)}', '${l.level}', ${l.unit}, '${sqlEscape(l.topic)}', ${arrSql(l.objectives)}, ${jsonSql(l.dialogue)}, ${jsonSql(l.vocabulary)}, '${sqlEscape(l.grammar_point)}', '${sqlEscape(l.grammar_explanation)}', ${jsonSql(l.quiz)})`
})

const sql = `-- Seed 60 lessons (idempotent: ON CONFLICT DO UPDATE)
INSERT INTO lessons (number, title, description, level, unit, topic, objectives, dialogue, vocabulary, grammar_point, grammar_explanation, quiz)
VALUES
${rows.join(',\n')}
ON CONFLICT (number) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  level = EXCLUDED.level,
  unit = EXCLUDED.unit,
  topic = EXCLUDED.topic,
  objectives = EXCLUDED.objectives,
  dialogue = EXCLUDED.dialogue,
  vocabulary = EXCLUDED.vocabulary,
  grammar_point = EXCLUDED.grammar_point,
  grammar_explanation = EXCLUDED.grammar_explanation,
  quiz = EXCLUDED.quiz;
`

writeFileSync(new URL('./seed.sql', import.meta.url), sql)
console.log(`Generated seed.sql with ${lessons.length} lessons.`)
