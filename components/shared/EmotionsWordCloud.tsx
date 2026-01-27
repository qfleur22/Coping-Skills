'use client';

import { getEmotionColor, getEmotionTextColor, getEmotionCategory } from '@/utils/emotion-category-mapping';
import type { EmotionCategory } from '@/utils/emotion-category-mapping';

interface EmotionsWordCloudProps {
  emotions: string[];
  onEmotionSelect: ({ emotion }: { emotion: string }) => void;
  selectedEmotions: string[];
}

const categoryOrder: EmotionCategory[] = ['Anger', 'Fear', 'Joy', 'Love', 'Shame', 'Sadness'];

export const EmotionsWordCloud = ({
  emotions,
  onEmotionSelect,
  selectedEmotions,
}: EmotionsWordCloudProps) => {
  const handleEmotionClick = ({ emotion }: { emotion: string }) => {
    onEmotionSelect({ emotion });
  };

  // Sort emotions by category order
  const sortedEmotions = [...emotions].sort((a, b) => {
    const categoryA = getEmotionCategory({ emotion: a });
    const categoryB = getEmotionCategory({ emotion: b });
    const indexA = categoryOrder.indexOf(categoryA);
    const indexB = categoryOrder.indexOf(categoryB);
    return indexA - indexB;
  });

  return (
    <div className="w-full mt-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
        Other feelings:
      </h3>
      <div className="flex flex-wrap gap-2">
        {sortedEmotions.map((emotion) => {
          const isSelected = selectedEmotions.includes(emotion);
          const bgColor = getEmotionColor({ emotion });
          const textColor = getEmotionTextColor({ emotion });
          return (
            <button
              key={emotion}
              onClick={() => {
                handleEmotionClick({ emotion });
              }}
              className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                isSelected
                  ? `${bgColor} ${textColor} font-bold shadow-md`
                  : `${bgColor} ${textColor} opacity-70 hover:opacity-100 font-normal`
              }`}
            >
              {emotion}
            </button>
          );
        })}
      </div>
    </div>
  );
};

