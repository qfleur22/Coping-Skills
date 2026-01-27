'use client';

import { useState } from 'react';
import feelingsData from '@/data/feelings-data.json';
import additionalEmotions from '@/data/additional-emotions.json';
import { EmotionsWordCloud } from './EmotionsWordCloud';

interface FeelingsNode {
  name?: string;
  color?: string;
  text?: string;
  size?: number;
  children?: FeelingsNode[];
}

interface MobileFeelingsSelectorProps {
  onEmotionSelect: ({ emotion }: { emotion: string }) => void;
  selectedEmotions: string[];
}

const getColorClasses = (color?: string) => {
  const colorMap: Record<string, string> = {
    red: 'bg-red-500 hover:bg-red-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    yellow: 'bg-yellow-500 hover:bg-yellow-600 text-black',
    green: 'bg-green-500 hover:bg-green-600',
    blue: 'bg-blue-500 hover:bg-blue-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
  };
  return colorMap[color ?? 'gray'] ?? 'bg-gray-500 hover:bg-gray-600';
};

export const MobileFeelingsSelector = ({
  onEmotionSelect,
  selectedEmotions,
}: MobileFeelingsSelectorProps) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const categories = (feelingsData as { children?: FeelingsNode[] }).children ?? [];

  const handleCategoryClick = ({ categoryName }: { categoryName: string }) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  const handleEmotionClick = ({ emotion }: { emotion: string }) => {
    onEmotionSelect({ emotion });
  };

  const getAllEmotionsFromCategory = (category: FeelingsNode): string[] => {
    const emotions: string[] = [];
    if (category.children) {
      category.children.forEach((child) => {
        if (child.name) {
          emotions.push(child.name);
        }
        if (child.children) {
          child.children.forEach((grandchild) => {
            if (grandchild.name) {
              emotions.push(grandchild.name);
            }
          });
        }
      });
    }
    return emotions;
  };

  return (
    <div className="w-full space-y-4">
      {categories.map((category) => {
        const isExpanded = expandedCategory === category.name;
        const categoryEmotions = getAllEmotionsFromCategory(category);
        const hasSelectedEmotions = categoryEmotions.some((emotion) =>
          selectedEmotions.includes(emotion)
        );

        return (
          <div key={category.name} className="w-full">
            <button
              onClick={() => {
                handleCategoryClick({ categoryName: category.name ?? '' });
              }}
              className={`w-full px-4 py-3 rounded-lg text-white font-semibold transition-all duration-200 flex items-center justify-between ${getColorClasses(
                category.color
              )} ${hasSelectedEmotions ? 'ring-2 ring-offset-2 ring-white' : ''}`}
            >
              <span className={selectedEmotions.some((e) => categoryEmotions.includes(e)) ? 'font-bold' : ''}>
                {category.name}
              </span>
              <span className="text-lg">{isExpanded ? '−' : '+'}</span>
            </button>

            {isExpanded && category.children && (
              <div className="mt-2 space-y-2 pl-4">
                {category.children.map((child) => {
                  const childEmotions = child.children?.map((c) => c.name ?? '') ?? [];
                  const allChildEmotions = [child.name ?? '', ...childEmotions].filter(Boolean);

                  return (
                    <div key={child.name} className="space-y-1">
                      <button
                        onClick={() => {
                          if (child.name) {
                            handleEmotionClick({ emotion: child.name });
                          }
                        }}
                        className={`w-full px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedEmotions.includes(child.name ?? '')
                            ? 'font-bold bg-opacity-80'
                            : 'font-normal bg-opacity-60'
                        } ${getColorClasses(category.color)} text-white`}
                      >
                        {child.name}
                      </button>
                      {child.children && (
                        <div className="pl-4 space-y-1">
                          {child.children.map((grandchild) => (
                            <button
                              key={grandchild.name}
                              onClick={() => {
                                if (grandchild.name) {
                                  handleEmotionClick({ emotion: grandchild.name });
                                }
                              }}
                              className={`w-full px-3 py-1.5 rounded-md text-xs transition-colors ${
                                selectedEmotions.includes(grandchild.name ?? '')
                                  ? 'font-bold bg-opacity-70'
                                  : 'font-normal bg-opacity-50'
                              } ${getColorClasses(category.color)} text-white`}
                            >
                              {grandchild.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      
      {/* Other Feelings Word Cloud */}
      <EmotionsWordCloud
        emotions={additionalEmotions}
        onEmotionSelect={onEmotionSelect}
        selectedEmotions={selectedEmotions}
      />
    </div>
  );
};

