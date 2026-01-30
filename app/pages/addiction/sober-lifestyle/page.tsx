'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SoberLifestylePage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-red-800">
            Sober Lifestyle Worksheet
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                This worksheet helps you build the foundation for sobriety: your reasons, high-risk situations, craving coping strategies, and new ways to get your needs met.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                1. Reasons for Sobriety
              </h2>
              <p className="text-gray-700 mb-3">
                What matters to you about staying sober? (health, relationships, self-respect, goals, values)
              </p>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="Write your reasons here..."
              ></textarea>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                2. High-Risk Situations
              </h2>
              <p className="text-gray-700 mb-3">
                What situations, people, places, times, or emotional states make using more likely?
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Times: (weekends, payday, anniversaries, holidays)</li>
                <li>Places: (bars, certain neighborhoods, parties)</li>
                <li>People: (who you used with, who triggers you)</li>
                <li>Emotions: (loneliness, boredom, stress, celebration, shame)</li>
                <li>States: (sleep loss, hunger, conflict, sensory overload)</li>
              </ul>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="List your high-risk situations..."
              ></textarea>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                3. Craving Coping Ideas
              </h2>
              <p className="text-gray-700 mb-3">
                What skills will you use when cravings hit? (Pick 3-5 that work for you)
              </p>
              <div className="space-y-2 mb-3">
                <button
                  onClick={() => router.push('/pages/distress-tolerance/tipp')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  TIPP (body chemistry shift)
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/pros-cons')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Pros & Cons (urge vs. recovery)
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/accepts')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  ACCEPTS (distraction)
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/soothe')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Self-Soothe (comfort)
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/breathing')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Breathing (regulation)
                </button>
              </div>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="Write your top coping skills here..."
              ></textarea>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                4. New Ways to Get Needs Met
              </h2>
              <p className="text-gray-700 mb-3">
                What needs were substances meeting? How can you meet them sober?
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li><strong>Numbness/escape:</strong> (distraction, self-soothe, breathing, safe spaces)</li>
                <li><strong>Connection:</strong> (support groups, friends, therapy, community)</li>
                <li><strong>Energy/stimulation:</strong> (movement, music, activities, hobbies)</li>
                <li><strong>Relief from anxiety:</strong> (TIPP, breathing, grounding, medication if appropriate)</li>
                <li><strong>Sleep:</strong> (sleep hygiene, routine, relaxation)</li>
                <li><strong>Pleasure/reward:</strong> (pleasant activities, build mastery, self-care)</li>
              </ul>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="Write your new strategies here..."
              ></textarea>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Next Steps
              </h3>
              <p className="text-gray-700 mb-3">
                Use this worksheet to build your <Link href="/pages/addiction/sobriety-plan" className="text-blue-600 hover:text-blue-800 underline">Sobriety Plan</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/sobriety.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Sobriety Basics / Motivation (PDF)
        </a>
        <button
          onClick={() => router.push('/pages/addiction/sobriety-plan')}
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Sobriety Plan
        </button>
        <button
          onClick={handleReturnToLanding}
          className="px-4 md:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}
