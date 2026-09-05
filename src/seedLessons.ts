import { supabase } from './lib/supabase';
import { lesson01Content } from './data/lessons/lesson01';
import { lesson02Content } from './data/lessons/lesson02';
import { lesson03Content } from './data/lessons/lesson03';
import { lesson04Content } from './data/lessons/lesson04';
import { lesson05Content } from './data/lessons/lesson05';
import { lesson06Content } from './data/lessons/lesson06';
import { lesson07Content } from './data/lessons/lesson07';
import { lesson08Content } from './data/lessons/lesson08';
import { lesson09Content } from './data/lessons/lesson09';
import { lesson10Content } from './data/lessons/lesson10';
import { lesson11Content } from './data/lessons/lesson11';
import { lesson12Content } from './data/lessons/lesson12';
import { lesson13Content } from './data/lessons/lesson13';
import { lesson14Content } from './data/lessons/lesson14';
import { lesson15Content } from './data/lessons/lesson15';
import { lesson16Content } from './data/lessons/lesson16';
import { lesson17Content } from './data/lessons/lesson17';
import { lesson18Content } from './data/lessons/lesson18';
import { lesson19Content } from './data/lessons/lesson19';
import { lesson20Content } from './data/lessons/lesson20';
import { lesson21Content } from './data/lessons/lesson21';
import { lesson22Content } from './data/lessons/lesson22';
import { lesson23Content } from './data/lessons/lesson23';
import { lesson24Content } from './data/lessons/lesson24';
import { lesson25Content } from './data/lessons/lesson25';
import { lesson26Content } from './data/lessons/lesson26';
import { lesson27Content } from './data/lessons/lesson27';
import { lesson28Content } from './data/lessons/lesson28';
import { lesson29Content } from './data/lessons/lesson29';
import { lesson30Content } from './data/lessons/lesson30';

export async function uploadLessonsToSupabase() {
  const lessonsToUpload = [
    {
      number: 1,
      unit: 1,
      topic: 'Communication',
      title: 'Lesson 1: Basic Communication',
      description: 'Learn basic communication and everyday phrases.',
      level: 'a2', // Đổi thành chữ thường 'a2' xem database có chịu không nhé
      objectives: ['Greet people', 'Introduce yourself'],
      dialogue: lesson01Content.paragraph || lesson01Content.readingSegments,
      vocabulary: lesson01Content.chunks,
      grammar_point: 'Present Simple Tense',
      grammar_explanation: 'Use present simple to talk about facts and routines.',
      quiz: [],
    },
    {
      number: 2,
      unit: 1,
      topic: 'Family & Daily Life',
      title: 'Lesson 2: Family & Daily Life',
      description: 'Talk about family members and daily routines.',
      level: 'a2', // Đổi thành chữ thường 'a2'
      objectives: ['Talk about family', 'Describe daily activities'],
      dialogue: lesson02Content.paragraph || lesson02Content.readingSegments,
      vocabulary: lesson02Content.chunks,
      grammar_point: 'Possessive Adjectives',
      grammar_explanation: 'Use my, your, his, her to show possession.',
      quiz: [],
    },
    {
      number: 3,
      unit: 1, // Hoặc unit tương ứng của bài 3
      topic: 'Daily Routines',
      title: 'Lesson 3: Daily Routines',
      description: 'Learn how to talk about everyday activities and daily schedules.',
      level: 'a2',
      objectives: ['Talk about daily routines', 'Use time expressions'],
      dialogue: lesson03Content.paragraph || lesson03Content.readingSegments,
      vocabulary: lesson03Content.chunks,
      grammar_point: 'Present Simple for Routines',
      grammar_explanation: 'Use the present simple tense with frequency adverbs to describe daily habits.',
      quiz: lesson03Content.practice || [],
    },
     {
    number: 4,
    unit: 1, // Hoặc thay đổi số unit tùy theo giáo trình của bạn
    topic: 'Food & Drinks',
    title: 'Lesson 4: Food & Drinks',
    description: 'Talk about favorite foods, drinks, and meal times.',
    level: 'a2',
    objectives: ['Talk about food and drink preferences', 'Describe meals and eating habits'],
    dialogue: lesson04Content.paragraph || lesson04Content.readingSegments,
    vocabulary: lesson04Content.chunks,
    grammar_point: 'Countable & Uncountable Nouns (Some / Any)',
    grammar_explanation: 'Use some in affirmative sentences and any in negative sentences and questions with plural countable and uncountable nouns.',
    quiz: [],
    },
    {
    number: 5,
    unit: 1, // Hoặc thay đổi số unit tùy theo giáo trình của bạn
    topic: 'Clothes',
    title: 'Lesson 5: Clothes',
    description: 'Talk about clothing items and what people are wearing.',
    level: 'a2',
    objectives: ['Describe clothing items', 'Talk about what people are wearing'],
    dialogue: lesson05Content.paragraph || lesson05Content.readingSegments,
    vocabulary: lesson05Content.chunks,
    grammar_point: 'Present Continuous for Actions Happening Now',
    grammar_explanation: 'Use am/is/are + verb-ing to describe actions happening at the moment of speaking (e.g., She is wearing a blue dress).',
    quiz: [],
    },
    // Day 6: Places in Town
{
    number: 6,
    unit: 1,
    topic: 'Places in Town',
    title: 'Lesson 6: Places in Town',
    description: 'Ask for and give directions, and talk about places in a city.',
    level: 'a2',
    objectives: ['Identify common places in a town', 'Ask for and give simple directions'],
    dialogue: lesson06Content.paragraph || lesson06Content.readingSegments,
    vocabulary: lesson06Content.chunks,
    grammar_point: 'Prepositions of Place & There is / There are',
    grammar_explanation: 'Use there is/are to state existence and prepositions (next to, opposite, between) to describe locations.',
    quiz: [],
},

// Day 7: Weather & Seasons
{
    number: 7,
    unit: 1,
    topic: 'Weather & Seasons',
    title: 'Lesson 7: Weather & Seasons',
    description: 'Talk about different weather conditions and seasons of the year.',
    level: 'a2',
    objectives: ['Describe weather conditions', 'Talk about favorite seasons and activities'],
    dialogue: lesson07Content.paragraph || lesson07Content.readingSegments,
    vocabulary: lesson07Content.chunks,
    grammar_point: 'Adjectives of Weather & Present Simple for General Truths',
    grammar_explanation: 'Use It is + adjective (sunny, rainy) to describe weather and present simple to talk about seasonal habits.',
    quiz: [],
},

// Day 8: Hobbies & Free time
{
    number: 8,
    unit: 1,
    topic: 'Hobbies & Free time',
    title: 'Lesson 8: Hobbies & Free time',
    description: 'Talk about free-time activities, sports, and hobbies.',
    level: 'a2',
    objectives: ['Express likes and dislikes', 'Talk about weekly free-time activities'],
    dialogue: lesson08Content.paragraph || lesson08Content.readingSegments,
    vocabulary: lesson08Content.chunks,
    grammar_point: 'Verbs of Preference + Verb-ing',
    grammar_explanation: 'Use like, love, enjoy, hate followed by verb-ing or nouns to express preferences (e.g., I love playing football).',
    quiz: [],
},

// Day 9: School & Classroom
{
    number: 9,
    unit: 1,
    topic: 'School & Classroom',
    title: 'Lesson 9: School & Classroom',
    description: 'Talk about school subjects, classroom objects, and routines.',
    level: 'a2',
    objectives: ['Name classroom objects and school subjects', 'Talk about school timetables'],
    dialogue: lesson09Content.paragraph || lesson09Content.readingSegments,
    vocabulary: lesson09Content.chunks,
    grammar_point: 'Imperatives & Modal Verb (Can)',
    grammar_explanation: 'Use imperatives for classroom commands and can/cannot to talk about ability or permission at school.',
    quiz: [],
},

// Day 10: Jobs & Work
{
    number: 10,
    unit: 1,
    topic: 'Jobs & Work',
    title: 'Lesson 10: Jobs & Work',
    description: 'Talk about different occupations and where people work.',
    level: 'a2',
    objectives: ['Identify common jobs and workplaces', 'Describe what people do for work'],
    dialogue: lesson10Content.paragraph || lesson10Content.readingSegments,
    vocabulary: lesson10Content.chunks,
    grammar_point: 'Present Simple for Routines and Occupations',
    grammar_explanation: 'Use the present simple tense with third-person singular (-s/-es) to describe what different professionals do.',
    quiz: [],
},
// Day 11: Transportation
{
    number: 11,
    unit: 2,
    topic: 'Transportation',
    title: 'Lesson 11: Transportation',
    description: 'Talk about ways to travel and means of transport.',
    level: 'a2',
    objectives: ['Talk about different forms of transport', 'Discuss travel habits and how to get around'],
    dialogue: lesson11Content.paragraph || lesson11Content.readingSegments,
    vocabulary: lesson11Content.chunks,
    grammar_point: 'Comparatives & Superlatives',
    grammar_explanation: 'Use comparative adjectives (e.g., faster than) and superlative adjectives (e.g., the fastest) to compare ways of traveling.',
    quiz: [],
},

// Day 12: House & Furniture
{
    number: 12,
    unit: 2,
    topic: 'House & Furniture',
    title: 'Lesson 12: House & Furniture',
    description: 'Describe rooms in a house and common pieces of furniture.',
    level: 'a2',
    objectives: ['Name rooms and furniture in a home', 'Describe where things are located in a house'],
    dialogue: lesson12Content.paragraph || lesson12Content.readingSegments,
    vocabulary: lesson12Content.chunks,
    grammar_point: 'Demonstratives (This, That, These, Those) & Wh- Questions',
    grammar_explanation: 'Use demonstratives to point to specific objects in a house and where questions to ask about locations.',
    quiz: [],
},

// Day 13: Shopping
{
    number: 13,
    unit: 2,
    topic: 'Shopping',
    title: 'Lesson 13: Shopping',
    description: 'Talk about prices, buying items, and shopping routines.',
    level: 'a2',
    objectives: ['Ask for prices and items in a shop', 'Talk about shopping habits and payment'],
    dialogue: lesson13Content.paragraph || lesson13Content.readingSegments,
    vocabulary: lesson13Content.chunks,
    grammar_point: 'How much / How many & Pronouns (One / Ones)',
    grammar_explanation: 'Use How much for uncountable nouns and prices, and How many for plural countable nouns when shopping.',
    quiz: [],
},

// Day 14: Holidays & Celebrations
{
    number: 14,
    unit: 2,
    topic: 'Holidays & Celebrations',
    title: 'Lesson 14: Holidays & Celebrations',
    description: 'Talk about special occasions, festivals, and celebrations.',
    level: 'a2',
    objectives: ['Talk about holidays and festivals', 'Describe celebration activities and future plans'],
    dialogue: lesson14Content.paragraph || lesson14Content.readingSegments,
    vocabulary: lesson14Content.chunks,
    grammar_point: 'Going to for Future Plans',
    grammar_explanation: 'Use be going to + verb to talk about upcoming holiday plans, events, and intended actions.',
    quiz: [],
},

// Day 15: Numbers & Dates
{
    number: 15,
    unit: 2,
    topic: 'Numbers & Dates',
    title: 'Lesson 15: Numbers & Dates',
    description: 'Talk about large numbers, years, months, and specific dates.',
    level: 'a2',
    objectives: ['Read and say large numbers and dates', 'Talk about birthdays and important schedule dates'],
    dialogue: lesson15Content.paragraph || lesson15Content.readingSegments,
    vocabulary: lesson15Content.chunks,
    grammar_point: 'Ordinal Numbers & Prepositions of Time (In, On, At)',
    grammar_explanation: 'Use prepositions of time (in for years/months, on for days/dates) and ordinal numbers (first, second, third) for dates.',
    quiz: [],
},
// Day 16: Countries & Nationalities
{
    number: 16,
    unit: 3,
    topic: 'Countries & Nationalities',
    title: 'Lesson 16: Countries & Nationalities',
    description: 'Talk about different countries, languages, and nationalities.',
    level: 'a2',
    objectives: ['Identify countries and nationalities', 'Talk about languages spoken around the world'],
    dialogue: lesson16Content.paragraph || lesson16Content.readingSegments,
    vocabulary: lesson16Content.chunks,
    grammar_point: 'Verb To Be & Subject Pronouns for Origins',
    grammar_explanation: 'Use am/is/are from and national adjectives to talk about where people come from (e.g., She is from Japan. She is Japanese).',
    quiz: [],
},

// Day 17: Describing People
{
    number: 17,
    unit: 3,
    topic: 'Describing People',
    title: 'Lesson 17: Describing People (appearance & personality)',
    description: 'Describe physical appearance and personality traits of people.',
    level: 'a2',
    objectives: ['Describe hair, eyes, height, and build', 'Talk about character traits using adjectives'],
    dialogue: lesson17Content.paragraph || lesson17Content.readingSegments,
    vocabulary: lesson17Content.chunks,
    grammar_point: 'Have got / Has got & Linking Verbs (Look like / Be)',
    grammar_explanation: 'Use have got/has got for features like hair and eyes, and verbs like be/look for general appearance and personality.',
    quiz: [],
},

// Day 18: Nature & Environment
{
    number: 18,
    unit: 3,
    topic: 'Nature & Environment',
    title: 'Lesson 18: Nature & Environment',
    description: 'Talk about geographical features, animals, and environmental care.',
    level: 'a2',
    objectives: ['Name natural landscapes and animals', 'Talk about nature and simple conservation actions'],
    dialogue: lesson18Content.paragraph || lesson18Content.readingSegments,
    vocabulary: lesson18Content.chunks,
    grammar_point: 'Modal Verbs of Obligation (Must / Mustn’t)',
    grammar_explanation: 'Use must and mustn’t to talk about rules, obligations, and what is allowed or forbidden in nature environments.',
    quiz: [],
},

// Day 19: Health & Body
{
    number: 19,
    unit: 3,
    topic: 'Health & Body',
    title: 'Lesson 19: Health & Body',
    description: 'Talk about parts of the body, common illnesses, and medical advice.',
    level: 'a2',
    objectives: ['Identify parts of the body', 'Express minor health problems and give simple advice'],
    dialogue: lesson19Content.paragraph || lesson19Content.readingSegments,
    vocabulary: lesson19Content.chunks,
    grammar_point: 'Modal Verb (Should / Shouldn’t)',
    grammar_explanation: 'Use should and shouldn’t to give advice or make suggestions regarding health (e.g., You should see a doctor).',
    quiz: [],
},

// Day 20: Directions & Locations
{
    number: 20,
    unit: 3,
    topic: 'Directions & Locations',
    title: 'Lesson 20: Directions & Locations',
    description: 'Give and follow complex directions around a neighborhood or city.',
    level: 'a2',
    objectives: ['Navigate a city map', 'Understand and give step-by-step navigation instructions'],
    dialogue: lesson20Content.paragraph || lesson20Content.readingSegments,
    vocabulary: lesson20Content.chunks,
    grammar_point: 'Imperatives & Prepositions of Movement',
    grammar_explanation: 'Use directional imperatives (turn left, go straight) and prepositions of movement (across, past, along) for navigating routes.',
    quiz: [],
},
// Day 21: Colors & Shapes
{
    number: 21,
    unit: 4,
    topic: 'Colors & Shapes',
    title: 'Lesson 21: Colors & Shapes',
    description: 'Describe objects using various colors, shades, and geometrical shapes.',
    level: 'a2',
    objectives: ['Name basic and compound colors', 'Identify and describe geometric shapes of objects'],
    dialogue: lesson21Content.paragraph || lesson21Content.readingSegments,
    vocabulary: lesson21Content.chunks,
    grammar_point: 'Adjective Order before Nouns',
    grammar_explanation: 'Use the correct order of adjectives before nouns, specifically placing color before shape (e.g., a small round red table).',
    quiz: [],
},

// Day 22: Music & Arts
{
    number: 22,
    unit: 4,
    topic: 'Music & Arts',
    title: 'Lesson 22: Music & Arts',
    description: 'Talk about musical instruments, genres, and artistic preferences.',
    level: 'a2',
    objectives: ['Talk about favorite music genres and instruments', 'Express opinions about art and performances'],
    dialogue: lesson22Content.paragraph || lesson22Content.readingSegments,
    vocabulary: lesson22Content.chunks,
    grammar_point: 'Gerunds as Objects (Love / Hate / Enjoy + V-ing)',
    grammar_explanation: 'Use gerunds (-ing forms) after verbs of preference to talk about artistic hobbies and listening habits.',
    quiz: [],
},

// Day 23: Movies & TV Shows
{
    number: 23,
    unit: 4,
    topic: 'Movies & TV Shows',
    title: 'Lesson 23: Movies & TV Shows',
    description: 'Discuss film genres, television programs, and express opinions.',
    level: 'a2',
    objectives: ['Talk about movie genres and actors', 'Describe and review a favorite film or show'],
    dialogue: lesson23Content.paragraph || lesson23Content.readingSegments,
    vocabulary: lesson23Content.chunks,
    grammar_point: 'Comparatives with -er / more and Adverbs of Degree',
    grammar_explanation: 'Use comparative structures and degree adverbs (e.g., much better, a bit more exciting) to compare movies.',
    quiz: [],
},

// Day 24: Sports & Exercise
{
    number: 24,
    unit: 4,
    topic: 'Sports & Exercise',
    title: 'Lesson 24: Sports & Exercise',
    description: 'Talk about athletic activities, frequencies, and fitness habits.',
    level: 'a2',
    objectives: ['Name popular sports and physical exercises', 'Discuss weekly workout routines and physical abilities'],
    dialogue: lesson24Content.paragraph || lesson24Content.readingSegments,
    vocabulary: lesson24Content.chunks,
    grammar_point: 'Adverbs of Frequency (Always, Usually, Sometimes, Never)',
    grammar_explanation: 'Use adverbs of frequency with the present simple tense to talk about how often you play sports or exercise.',
    quiz: [],
},

// Day 25: Restaurants & Eating Out
{
    number: 25,
    unit: 4,
    topic: 'Restaurants & Eating Out',
    title: 'Lesson 25: Restaurants & Eating Out',
    description: 'Order meals, ask for the bill, and interact in a restaurant setting.',
    level: 'a2',
    objectives: ['Role-play ordering food and drinks at a restaurant', 'Understand common waiter and customer phrases'],
    dialogue: lesson25Content.paragraph || lesson25Content.readingSegments,
    vocabulary: lesson25Content.chunks,
    grammar_point: 'Modal Verbs for Requests (Would like / Could)',
    grammar_explanation: 'Use "I would like..." or "Could I have..." to make polite requests and order food gracefully.',
    quiz: [],
},
// Day 26: Time & Timetables
{
    number: 26,
    unit: 5,
    topic: 'Time & Timetables',
    title: 'Lesson 26: Time & Timetables',
    description: 'Read clocks, schedules, and talk about daily or event timelines.',
    level: 'a2',
    objectives: ['Tell time accurately in various formats', 'Understand and talk about public transport or event timetables'],
    dialogue: lesson26Content.paragraph || lesson26Content.readingSegments,
    vocabulary: lesson26Content.chunks,
    grammar_point: 'Present Simple for Schedules (Future Meaning)',
    grammar_explanation: 'Use the present simple tense to talk about fixed future events based on calendars or timetables (e.g., The train leaves at 6 PM).',
    quiz: [],
},

// Day 27: Technology in Everyday Life
{
    number: 27,
    unit: 5,
    topic: 'Technology in Everyday Life',
    title: 'Lesson 27: Technology in Everyday Life',
    description: 'Talk about gadgets, digital devices, and how we use technology daily.',
    level: 'a2',
    objectives: ['Name common gadgets and tech tools', 'Describe how to use apps and devices for daily tasks'],
    dialogue: lesson27Content.paragraph || lesson27Content.readingSegments,
    vocabulary: lesson27Content.chunks,
    grammar_point: 'Infinitive of Purpose (To + Verb)',
    grammar_explanation: 'Use "to + verb" (infinitive of purpose) to explain why someone uses a certain device or app (e.g., I use my phone to take photos).',
    quiz: [],
},

// Day 28: Emergency & Safety
{
    number: 28,
    unit: 5,
    topic: 'Emergency & Safety',
    title: 'Lesson 28: Emergency & Safety',
    description: 'Know what to say and do in emergency situations and basic safety rules.',
    level: 'a2',
    objectives: ['Report simple accidents or urgent situations', 'Understand safety instructions and warnings'],
    dialogue: lesson28Content.paragraph || lesson28Content.readingSegments,
    vocabulary: lesson28Content.chunks,
    grammar_point: 'Imperatives & Modal Verbs of Prohibition (Must not / Can not)',
    grammar_explanation: 'Use strong prohibitions and safety warnings to describe what people are forbidden to do in dangerous zones.',
    quiz: [],
},

// Day 29: Socializing & Small Talk
{
    number: 29,
    unit: 5,
    topic: 'Socializing & Small Talk',
    title: 'Lesson 29: Socializing & Small Talk',
    description: 'Start conversations, make polite inquiries, and keep small talk going.',
    level: 'a2',
    objectives: ['Greet people and make polite conversational openings', 'Ask and answer everyday polite questions'],
    dialogue: lesson29Content.paragraph || lesson29Content.readingSegments,
    vocabulary: lesson29Content.chunks,
    grammar_point: 'Question Tags (Basic Forms)',
    grammar_explanation: 'Use simple auxiliary question tags (e.g., isn’t it?, do you?) to invite agreement and keep small talk flowing.',
    quiz: [],
},

// Day 30: Final Review & Master Challenge
{
    number: 30,
    unit: 5,
    topic: 'Final Review & Master Challenge',
    title: 'Lesson 30: Final Review & Master Challenge',
    description: 'Review key concepts, vocabulary, and core grammar points from the whole course.',
    level: 'a2',
    objectives: ['Consolidate all learned A2 topics', 'Complete a comprehensive mixed quiz challenge'],
    dialogue: lesson30Content.paragraph || lesson30Content.readingSegments,
    vocabulary: lesson30Content.chunks,
    grammar_point: 'Mixed A2 Grammar Review',
    grammar_explanation: 'Review mixed tenses, modal verbs, connectors, and structural forms learned throughout the entire program.',
    quiz: [],
}
  ];

  for (const lesson of lessonsToUpload) {
    const { error } = await supabase
      .from('lessons')
      .upsert(lesson, { onConflict: 'number' });

    if (error) {
      console.error(`Lỗi khi đẩy Lesson ${lesson.number}:`, error.message);
    } else {
      console.log(`Đã đẩy thành công Lesson ${lesson.number} lên Supabase! 🎉`);
    }
  }
}