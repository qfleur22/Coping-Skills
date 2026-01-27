export type EmotionCategory = 'Anger' | 'Fear' | 'Joy' | 'Love' | 'Shame' | 'Sadness';

export const categoryColors: Record<EmotionCategory, string> = {
  Anger: 'bg-red-500',
  Fear: 'bg-orange-500',
  Joy: 'bg-yellow-500',
  Love: 'bg-green-500',
  Shame: 'bg-blue-500',
  Sadness: 'bg-purple-500',
};

export const categoryTextColors: Record<EmotionCategory, string> = {
  Anger: 'text-white',
  Fear: 'text-white',
  Joy: 'text-black',
  Love: 'text-white',
  Shame: 'text-white',
  Sadness: 'text-white',
};

const emotionToCategoryMap: Record<string, EmotionCategory> = {
  // Anger (red)
  Frustrated: 'Anger',
  Annoyed: 'Anger',
  Impatient: 'Anger',
  Restless: 'Anger',
  Agitated: 'Anger',
  Irritable: 'Anger',
  Cranky: 'Anger',
  Grumpy: 'Anger',
  Grouchy: 'Anger',
  Snippy: 'Anger',
  Snappy: 'Anger',
  Testy: 'Anger',
  Touchy: 'Anger',
  Defensive: 'Anger',
  Suspicious: 'Anger',
  Paranoid: 'Anger',

  // Fear (orange)
  Stressed: 'Fear',
  Scared: 'Fear',
  Terrified: 'Fear',
  Horrified: 'Fear',
  Shocked: 'Fear',
  Stunned: 'Fear',
  Dazed: 'Fear',
  Disoriented: 'Fear',
  Overwhelmed: 'Fear',
  Pressured: 'Fear',
  Burdened: 'Fear',
  Vulnerable: 'Fear',
  Powerless: 'Fear',
  Helpless: 'Fear',
  Trapped: 'Fear',
  Stuck: 'Fear',
  Lost: 'Fear',

  // Joy (yellow)
  Excited: 'Joy',
  Calm: 'Joy',
  Peaceful: 'Joy',
  Grateful: 'Joy',
  Proud: 'Joy',
  Hopeful: 'Joy',
  Optimistic: 'Joy',
  Content: 'Joy',
  Satisfied: 'Joy',
  Relieved: 'Joy',
  Energetic: 'Joy',
  Motivated: 'Joy',
  Inspired: 'Joy',
  Confident: 'Joy',
  Secure: 'Joy',
  Comfortable: 'Joy',
  Relaxed: 'Joy',

  // Love (green) - positive emotions that relate to connection and care
  // Note: Many positive emotions overlap with Joy, but Love is more about connection

  // Shame (blue)
  Embarrassed: 'Shame',
  Guilty: 'Shame',
  Ashamed: 'Shame',
  Confused: 'Shame',
  Curious: 'Shame',
  Surprised: 'Shame',
  Bored: 'Shame',
  Inadequate: 'Shame',
  Incompetent: 'Shame',
  Inferior: 'Shame',
  Worthless: 'Shame',
  Defeated: 'Shame',

  // Sadness (purple)
  Disappointed: 'Sadness',
  Betrayed: 'Sadness',
  Abandoned: 'Sadness',
  Neglected: 'Sadness',
  Empty: 'Sadness',
  Numb: 'Sadness',
  Detached: 'Sadness',
  Disconnected: 'Sadness',
  Alone: 'Sadness',
  Isolated: 'Sadness',
  Lonely: 'Sadness',
  Rejected: 'Sadness',
  Unwanted: 'Sadness',
  Unloved: 'Sadness',
  Unworthy: 'Sadness',
  Hurt: 'Sadness',
  Bruised: 'Sadness',
  Battered: 'Sadness',
  Beaten: 'Sadness',
  Broken: 'Sadness',
  Shattered: 'Sadness',
  Crushed: 'Sadness',
  Devastated: 'Sadness',
  Destroyed: 'Sadness',
  Ruined: 'Sadness',
  Wrecked: 'Sadness',
  Demolished: 'Sadness',
  Annihilated: 'Sadness',
  Obliterated: 'Sadness',
  'Dead inside': 'Sadness',
  Apathetic: 'Sadness',
  Indifferent: 'Sadness',
  Uninterested: 'Sadness',
  Tired: 'Sadness',
  Exhausted: 'Sadness',
  Drained: 'Sadness',
  Fatigued: 'Sadness',
  Weary: 'Sadness',
  'Worn out': 'Sadness',
  'Burned out': 'Sadness',
  Depleted: 'Sadness',
  Hollow: 'Sadness',
  Void: 'Sadness',
  Fidgety: 'Sadness',
  Sensitive: 'Sadness',
  Tender: 'Sadness',
  Raw: 'Sadness',
  Sore: 'Sadness',
  Aching: 'Sadness',
};

export function getEmotionCategory({ emotion }: { emotion: string }): EmotionCategory {
  return emotionToCategoryMap[emotion] || 'Sadness';
}

export function getEmotionColor({ emotion }: { emotion: string }): string {
  const category = getEmotionCategory({ emotion });
  return categoryColors[category];
}

export function getEmotionTextColor({ emotion }: { emotion: string }): string {
  const category = getEmotionCategory({ emotion });
  return categoryTextColors[category];
}

