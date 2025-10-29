export type SeedWord = {
  word: string;
  partOfSpeech?: string;
  definition: string;
  example?: string;
  synonyms?: string[];
};

export type WordOfDayEntry = SeedWord & {
  date: string; // YYYY-MM-DD (UTC)
  source: string; // where this entry came from
};

const seedWords: SeedWord[] = [
  {
    word: 'serendipity',
    partOfSpeech: 'noun',
    definition:
      'The occurrence of events by chance in a happy or beneficial way.',
    example: 'Finding the perfect book in a small shop felt like serendipity.',
    synonyms: ['fluke', 'fortuity', 'luck'],
  },
  {
    word: 'ephemeral',
    partOfSpeech: 'adjective',
    definition: 'Lasting for a very short time.',
    example: 'Sunsets are beautiful but ephemeral.',
    synonyms: ['transient', 'fleeting', 'momentary'],
  },
  {
    word: 'mellifluous',
    partOfSpeech: 'adjective',
    definition: 'Sweet or musical; pleasant to hear.',
    example: 'She spoke in a calm, mellifluous voice.',
    synonyms: ['dulcet', 'honeyed', 'smooth'],
  },
  {
    word: 'lucid',
    partOfSpeech: 'adjective',
    definition: 'Expressed clearly; easy to understand; showing ability to think clearly.',
    example: 'His explanation was lucid and to the point.',
    synonyms: ['clear', 'coherent', 'intelligible'],
  },
  {
    word: 'quintessential',
    partOfSpeech: 'adjective',
    definition: 'Representing the most perfect or typical example of a quality or class.',
    example: 'She is the quintessential team player.',
    synonyms: ['classic', 'typical', 'ideal'],
  },
  {
    word: 'zephyr',
    partOfSpeech: 'noun',
    definition: 'A soft gentle breeze.',
    example: 'A spring zephyr drifted through the open window.',
    synonyms: ['breeze', 'draft', 'waft'],
  },
  {
    word: 'effervescent',
    partOfSpeech: 'adjective',
    definition: 'Vivacious and enthusiastic; bubbly.',
    example: 'His effervescent personality lit up the room.',
    synonyms: ['sparkling', 'lively', 'bubbly'],
  },
  {
    word: 'cogent',
    partOfSpeech: 'adjective',
    definition: 'Clear, logical, and convincing.',
    example: 'She made a cogent argument for change.',
    synonyms: ['persuasive', 'compelling', 'convincing'],
  },
  {
    word: 'sonder',
    partOfSpeech: 'noun',
    definition:
      'The realization that each passerby has a life as vivid and complex as your own.',
    example: 'On the train, he felt a sudden sense of sonder.',
  },
  {
    word: 'epiphany',
    partOfSpeech: 'noun',
    definition: 'A sudden and profound understanding of something.',
    example: 'During the lecture, she had an epiphany about her career path.',
    synonyms: ['revelation', 'realization', 'insight'],
  },
  {
    word: 'luminous',
    partOfSpeech: 'adjective',
    definition: 'Emitting or reflecting light; bright or shining.',
    example: 'The luminous stars guided their way.',
    synonyms: ['radiant', 'brilliant', 'glowing'],
  },
  {
    word: 'ineffable',
    partOfSpeech: 'adjective',
    definition: 'Too great or extreme to be expressed in words.',
    example: 'They gazed in ineffable wonder at the aurora.',
    synonyms: ['inexpressible', 'indescribable', 'unspeakable'],
  },
  {
    word: 'aplomb',
    partOfSpeech: 'noun',
    definition: 'Self-confidence or assurance, especially in a demanding situation.',
    example: 'She handled the tough questions with aplomb.',
    synonyms: ['poise', 'assurance', 'composure'],
  },
  {
    word: 'camaraderie',
    partOfSpeech: 'noun',
    definition: 'Mutual trust and friendship among people who spend time together.',
    example: 'The camaraderie on the team was evident.',
    synonyms: ['companionship', 'solidarity', 'fellowship'],
  },
  {
    word: 'halcyon',
    partOfSpeech: 'adjective',
    definition: 'Denoting a period of time in the past that was idyllically happy and peaceful.',
    example: 'They reminisced about the halcyon days of youth.',
    synonyms: ['peaceful', 'golden', 'idyllic'],
  },
  {
    word: 'pulchritude',
    partOfSpeech: 'noun',
    definition: 'Beauty.',
    example: 'They were struck by the pulchritude of the landscape.',
    synonyms: ['beauty', 'loveliness', 'attractiveness'],
  },
  {
    word: 'perspicacious',
    partOfSpeech: 'adjective',
    definition: 'Having a ready insight into and understanding of things.',
    example: 'A perspicacious critic can reveal hidden meanings.',
    synonyms: ['astute', 'perceptive', 'shrewd'],
  },
  {
    word: 'ameliorate',
    partOfSpeech: 'verb',
    definition: 'To make something better or more tolerable.',
    example: 'New policies aim to ameliorate the situation.',
    synonyms: ['improve', 'enhance', 'mitigate'],
  },
  {
    word: 'equinox',
    partOfSpeech: 'noun',
    definition:
      'The time or date when day and night are of equal length, occurring twice a year.',
    example: 'They celebrated the spring equinox.',
    synonyms: ['balance of day and night'],
  },
  {
    word: 'resplendent',
    partOfSpeech: 'adjective',
    definition: 'Attractive and impressive through being richly colorful or sumptuous.',
    example: 'She wore a resplendent gown.',
    synonyms: ['splendid', 'brilliant', 'glorious'],
  },
  {
    word: 'sondergeist',
    partOfSpeech: 'noun',
    definition:
      'A contemplative mood characterized by reflecting on the inner lives of others.',
    example: 'He sat by the window in a sondergeist.',
  },
  {
    word: 'panacea',
    partOfSpeech: 'noun',
    definition: 'A solution or remedy for all difficulties or diseases.',
    example: 'There is no panacea for complex social issues.',
    synonyms: ['cure-all', 'nostrum'],
  },
  {
    word: 'tenuous',
    partOfSpeech: 'adjective',
    definition: 'Very weak or slight; insubstantial.',
    example: 'The evidence was tenuous at best.',
    synonyms: ['slight', 'flimsy', 'fragile'],
  },
  {
    word: 'stolid',
    partOfSpeech: 'adjective',
    definition: 'Calm, dependable, and showing little emotion.',
    example: 'He remained stolid despite the chaos.',
    synonyms: ['impassive', 'phlegmatic', 'stoic'],
  },
  {
    word: 'umbrage',
    partOfSpeech: 'noun',
    definition: 'Offense or annoyance.',
    example: 'She took umbrage at the remark.',
    synonyms: ['offense', 'resentment', 'displeasure'],
  },
  {
    word: 'voracious',
    partOfSpeech: 'adjective',
    definition: 'Wanting or devouring great quantities of food; having a very eager approach to an activity.',
    example: 'A voracious reader can finish a novel in a day.',
    synonyms: ['insatiable', 'ravenous', 'eager'],
  },
  {
    word: 'winsome',
    partOfSpeech: 'adjective',
    definition: 'Attractive or appealing in a fresh, innocent way.',
    example: 'A winsome smile can be disarming.',
    synonyms: ['charming', 'engaging', 'endearing'],
  },
  {
    word: 'zenith',
    partOfSpeech: 'noun',
    definition: 'The time at which something is most powerful or successful.',
    example: 'At its zenith, the empire spanned continents.',
    synonyms: ['apex', 'acme', 'peak'],
  },
  {
    word: 'alacrity',
    partOfSpeech: 'noun',
    definition: 'Brisk and cheerful readiness.',
    example: 'They accepted the invitation with alacrity.',
    synonyms: ['eagerness', 'willingness', 'readiness'],
  },
  {
    word: 'beleaguer',
    partOfSpeech: 'verb',
    definition: 'To cause constant or repeated trouble to; to besiege.',
    example: 'The company was beleaguered by lawsuits.',
    synonyms: ['beset', 'plague', 'harass'],
  },
  {
    word: 'capitulate',
    partOfSpeech: 'verb',
    definition: 'To cease to resist an opponent; surrender.',
    example: 'They refused to capitulate to pressure.',
    synonyms: ['yield', 'submit', 'surrender'],
  },
  {
    word: 'delineate',
    partOfSpeech: 'verb',
    definition: 'To describe or portray precisely.',
    example: 'The plan delineates clear milestones.',
    synonyms: ['describe', 'outline', 'detail'],
  },
  {
    word: 'eloquent',
    partOfSpeech: 'adjective',
    definition: 'Fluent or persuasive in speaking or writing.',
    example: 'Her speech was eloquent and moving.',
    synonyms: ['articulate', 'expressive', 'persuasive'],
  },
  {
    word: 'furtive',
    partOfSpeech: 'adjective',
    definition: 'Attempting to avoid notice or attention, typically because of guilt.',
    example: 'They exchanged a furtive glance.',
    synonyms: ['stealthy', 'secretive', 'sly'],
  },
  {
    word: 'garrulous',
    partOfSpeech: 'adjective',
    definition: 'Excessively talkative, especially on trivial matters.',
    example: 'A garrulous host kept the conversation lively.',
    synonyms: ['loquacious', 'chatty', 'talkative'],
  },
];

function formatDateUTC(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function daysSinceUnixEpochUTC(date: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  const midnightUTC = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    0,
    0,
    0,
    0,
  );
  return Math.floor(midnightUTC / msPerDay);
}

export function getWordOfTheDay(now: Date = new Date()): WordOfDayEntry {
  const dayIndex = daysSinceUnixEpochUTC(now);
  const index = ((dayIndex % seedWords.length) + seedWords.length) % seedWords.length;
  const base = seedWords[index];
  return {
    ...base,
    date: formatDateUTC(now),
    source: 'demo-local',
  };
}

export const wordListSize = seedWords.length;
