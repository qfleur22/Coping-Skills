'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const tooltips = {
  emotionExposure: 'Emotion Exposure is practicing letting an emotion be there without escaping it or acting on the urge. Over time, this can reduce avoidance and help emotions feel less scary and less controlling.',
  selfValidation: 'Self-validation means accepting that your emotion makes sense, even if you don\'t like it. This can reduce "secondary emotions" like shame about being sad or anger about being anxious.',
  selfCompassion: 'Self-compassion is treating yourself like you would treat someone you care about. A common model has three parts: mindfulness, common humanity, and kindness.',
  feelInBody: 'Help feeling emotions in your body through body awareness and sensation practices.',
};

export default function SitWithItPage() {
  const router = useRouter();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.tooltip-container') && !target.closest('.tooltip-button')) {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeTooltip]);

  const handleEmotionExposure = () => {
    router.push('/sit-with-it/emotion-exposure');
  };

  const handleSelfValidation = () => {
    router.push('/sit-with-it/self-validation');
  };

  const handleSelfCompassion = () => {
    router.push('/sit-with-it/self-compassion');
  };

  const handleNotComfortable = () => {
    router.push('/sit-with-it/not-comfortable');
  };

  const handleFeelInBody = () => {
    router.push('/sit-with-it/feel-in-body');
  };

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Can you sit with this feeling?
            </h1>
          </div>

          <div className="space-y-4">
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleEmotionExposure}
                  className="flex-1 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Yes, I would like to practice Emotion Exposure
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'emotionExposure' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is Emotion Exposure?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {activeTooltip === 'emotionExposure' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">{tooltips.emotionExposure}</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSelfValidation}
                  className="flex-1 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Yes, I would like to practice Self-Validation
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'selfValidation' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is Self-Validation?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {activeTooltip === 'selfValidation' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">{tooltips.selfValidation}</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSelfCompassion}
                  className="flex-1 px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  Yes, I would like to practice Self-Compassion
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'selfCompassion' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is Self-Compassion?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {activeTooltip === 'selfCompassion' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">{tooltips.selfCompassion}</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFeelInBody}
                  className="flex-1 px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                >
                  I'd like help feeling this in my body
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: 'feelInBody' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is feeling in body?"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              {activeTooltip === 'feelInBody' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">{tooltips.feelInBody}</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={handleNotComfortable}
              className="w-full px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              No, I don't feel comfortable sitting with this feeling right now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
