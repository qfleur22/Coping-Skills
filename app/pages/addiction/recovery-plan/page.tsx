'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function RecoveryPlanPage() {
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
            Recovery Plan Worksheet
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                This page helps you build a simple plan you can follow when cravings hit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                My top triggers (prompting events)
              </h2>
              <p className="text-gray-700 mb-2">
                Examples:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>conflict / rejection</li>
                <li>loneliness</li>
                <li>payday / access</li>
                <li>boredom or "nothing matters"</li>
                <li>shutdown / sensory overload</li>
                <li>sleep loss</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                (If you're unsure, use <Link href="/pages/chain-analysis" className="text-blue-600 hover:text-blue-800 underline">Chain Analysis</Link> once and you'll see patterns.)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                My early warning signs (body + mind)
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>body:</strong> tight chest, agitation, numbness, buzzing, restlessness</li>
                <li><strong>mind:</strong> bargaining, "just once," catastrophe, shame spiral</li>
                <li><strong>urges:</strong> isolate, contact dealer/ex, spend, binge, disappear</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                My 3 first-line skills (do these first)
              </h2>
              <p className="text-gray-700 mb-2 font-semibold">
                Pick three:
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => router.push('/pages/distress-tolerance/tipp')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  TIPP (/distress-tolerance/tipp)
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/pros-cons')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Pros & Cons (/interpersonal-skills/pros-cons)
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/accepts')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  ACCEPTS (/distress-tolerance/accepts)
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/soothe')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Self-Soothe (/distress-tolerance/soothe)
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                My "increase support" steps
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Go to a safer place</li>
                <li>Call/text a person</li>
                <li>Attend a meeting / group</li>
                <li>Remove access (cash/cards/contacts)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                My reason (values)
              </h2>
              <p className="text-gray-700 mb-2">
                Write 1 sentence:
              </p>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[60px] resize-y"
                placeholder="I'm choosing recovery because..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
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
