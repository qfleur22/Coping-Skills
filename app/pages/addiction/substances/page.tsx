'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SubstancesPage() {
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
            Common Substances: Reality Check
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                This page helps you see what substances often promise vs. what they actually cost. Use this with DBT Pros & Cons and ABC PLEASE (Avoid mood-altering substances).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                What People Feel They Get
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Relief from anxiety, stress, or emotional pain</li>
                <li>Escape from difficult feelings or situations</li>
                <li>Energy, focus, or motivation</li>
                <li>Sleep or relaxation</li>
                <li>Connection or social ease</li>
                <li>Pleasure or reward</li>
                <li>Numbness from trauma or overwhelming emotions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                What It Actually Costs
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Sleep</h3>
                  <p className="text-gray-700 ml-4">Disrupted sleep, insomnia, poor sleep quality, sleep debt that increases vulnerability</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Anxiety</h3>
                  <p className="text-gray-700 ml-4">Rebound anxiety, increased baseline anxiety, panic, withdrawal anxiety</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Rebound</h3>
                  <p className="text-gray-700 ml-4">The problem often comes back stronger after the substance wears off</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Coordination & Functioning</h3>
                  <p className="text-gray-700 ml-4">Impaired judgment, coordination, memory, decision-making</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Cravings</h3>
                  <p className="text-gray-700 ml-4">Using creates more cravings, making it harder to stop</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Relationships</h3>
                  <p className="text-gray-700 ml-4">Conflict, broken trust, isolation, damaged connections</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Health</h3>
                  <p className="text-gray-700 ml-4">Physical health problems, mental health worsening, overdose risk</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Self-Respect</h3>
                  <p className="text-gray-700 ml-4">Shame, guilt, feeling like you're not living your values</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                DBT Skills That Help Instead
              </h2>
              <div className="space-y-2">
                <button
                  onClick={() => router.push('/pages/distress-tolerance/tipp')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  TIPP (for anxiety/activation)
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/soothe')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Self-Soothe (for comfort/relief)
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/accepts')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  ACCEPTS (for escape/distraction)
                </button>
                <button
                  onClick={() => router.push('/pages/emotional-regulation/abc-please')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  ABC PLEASE (reduce vulnerability)
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/pros-cons')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Pros & Cons (use vs. don't use)
                </button>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Remember
              </h3>
              <p className="text-gray-700">
                Substances often promise relief but create more problems. DBT skills can meet the same needs without the costs. If you're struggling with cravings, go to <Link href="/pages/addiction/craving-now" className="text-blue-600 hover:text-blue-800 underline">Cravings Right Now</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/common-substances.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Common Substances (PDF)
        </a>
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
