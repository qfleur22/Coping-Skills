'use client';

import { symptomOrder } from '@/utils/quiz-storage';

interface SymptomQuizProgressBarProps {
  currentSlug: string;
}

export function SymptomQuizProgressBar({ currentSlug }: SymptomQuizProgressBarProps) {
  const currentIndex = symptomOrder.indexOf(currentSlug);
  const totalSymptoms = symptomOrder.length;
  const progressPercentage = currentIndex === -1 ? 0 : ((currentIndex + 1) / totalSymptoms) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="relative">
          {/* Progress Text */}
          <div className="text-center mb-3">
            <span className="text-sm font-semibold text-gray-700">
              {currentIndex === -1 ? '0' : currentIndex + 1} of {totalSymptoms} symptoms
            </span>
          </div>

          {/* Start Marker */}
          <div className="absolute left-0 top-8">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-gray-700 mb-1 whitespace-nowrap">Start</span>
              <div className={`w-5 h-5 rounded-full border-2 ${
                currentIndex >= 0 ? 'bg-green-600 border-green-600' : 'bg-white border-gray-400'
              } shadow-sm`}></div>
            </div>
          </div>

          {/* End Marker */}
          <div className="absolute right-0 top-8">
            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-gray-700 mb-1 whitespace-nowrap">Results</span>
              <div className={`w-5 h-5 rounded-full border-2 ${
                currentIndex === totalSymptoms - 1 ? 'bg-green-600 border-green-600' : 'bg-white border-gray-400'
              } shadow-sm`}></div>
            </div>
          </div>

          {/* Progress Bar Background */}
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            {/* Progress Fill */}
            <div
              className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
