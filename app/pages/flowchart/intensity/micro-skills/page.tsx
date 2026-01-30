'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { BackButton } from '@/components/shared/BackButton';

function MicroSkillsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

  useEffect(() => {
    const emotionsParam = searchParams?.get('emotions');
    if (emotionsParam) {
      setSelectedEmotions(emotionsParam.split(','));
    }
  }, [searchParams]);

  const handleBack = () => {
    router.push('/pages/flowchart/intensity');
  };

  const handleContinueFlow = () => {
    const emotionsParam = searchParams?.get('emotions') || '';
    router.push(`/pages/flowchart/change${emotionsParam ? `?emotions=${encodeURIComponent(emotionsParam)}` : ''}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              Micro-Skills for Lower Intensity
            </h1>
            {selectedEmotions.length > 0 && (
              <p className="text-xl text-gray-600 mb-2">
                I feel {selectedEmotions.join(', ')} (intensity 0-3)
              </p>
            )}
            <p className="text-lg text-gray-500">
              Quick, gentle skills perfect for when feelings are present but manageable
            </p>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg mb-8 space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Since your intensity is lower right now, these micro-skills can help you work with the feeling gently and effectively.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Quick Micro-Skill Options
              </h2>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">
                    Check Facts Lite
                  </h3>
                  <p className="text-gray-700 mb-4">
                    A quick version of Check the Facts—separate what you observed from what you assumed. This helps clarify whether your emotion fits the situation.
                  </p>
                  <button
                    onClick={() => router.push('/pages/flowchart/check-facts')}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                  >
                    Try Check Facts Lite
                  </button>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">
                    Values Step
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Take a moment to check in with your values. What matters most to you right now? This can help guide your next action and provide clarity.
                  </p>
                  <p className="text-gray-600 text-sm italic mb-4">
                    Quick practice: Ask yourself "What do I want to stand for in this moment?" or "What would my best self do here?"
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">
                    One-Mindful Practice
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Do one thing at a time, with your full attention. This simple mindfulness practice can help ground you and reduce scattered thinking.
                  </p>
                  <button
                    onClick={() => router.push('/pages/mindfulness/one-mindfulness')}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
                  >
                    Try One-Mindfulness
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Why micro-skills for lower intensity?
              </h3>
              <p className="text-gray-700 text-sm">
                When intensity is lower (0-3), you have more mental space to practice skills that build awareness and clarity. These lighter practices can prevent escalation and help you work skillfully with manageable feelings.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={handleContinueFlow}
                className="w-full px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Continue with Standard Flow
              </button>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}

export default function MicroSkillsPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8 pb-24">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Loading...</h1>
          </div>
        </div>
      </div>
    }>
      <MicroSkillsContent />
    </Suspense>
  );
}
