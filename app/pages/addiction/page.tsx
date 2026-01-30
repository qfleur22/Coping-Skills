'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function AddictionHubPage() {
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
            Addiction Recovery Hub
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 mb-4">
              <p className="text-red-900 font-semibold mb-3">
                If there's immediate danger, overdose risk, or you might act in the next few minutes → route to /crisis-help-now first.
              </p>
              <button
                onClick={() => router.push('/pages/crisis-help-now')}
                className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Go to Crisis Help Now
              </button>
            </div>

            <div>
              <p className="text-gray-700 mb-4">
                Addiction urges are often your brain trying to solve pain fast—numbness, panic, shame, boredom, loneliness, sensory overload, or "I can't handle this." Urges are not proof you're failing. They're a signal: something needs care and support.
              </p>
              <p className="text-gray-700 mb-4">
                This section helps you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Get safer quickly</li>
                <li>Ride out cravings without using</li>
                <li>Recover after a lapse</li>
                <li>Reduce the size/frequency of the next wave</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Start Here
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">
                Are you in immediate danger, overdose risk, or at risk of harming yourself/someone else right now?
              </p>
              <div className="mb-4">
                <button
                  onClick={() => router.push('/pages/crisis-help-now')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md mb-2"
                >
                  Yes → Crisis Help Now
                </button>
              </div>
              <p className="text-gray-700 mb-4 font-semibold">
                What's true right now?
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/pages/addiction/craving-now')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  I have cravings and need help right now → Cravings Right Now
                </button>
                <button
                  onClick={() => router.push('/pages/addiction/after')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  I used / relapsed and feel shaken → After a Lapse
                </button>
                <button
                  onClick={() => router.push('/pages/addiction/prevention')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  I want prevention + a plan for next time → Prevention
                </button>
                <button
                  onClick={() => router.push('/pages/addiction/sober-lifestyle')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Sober Lifestyle Worksheet
                </button>
                <button
                  onClick={() => router.push('/pages/addiction/why-change')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Why Change? (Pros & Cons + Values)
                </button>
                <button
                  onClick={() => router.push('/pages/chain-analysis')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  I want to map what happened (chain analysis) → Chain Analysis
                </button>
                <button
                  onClick={() => router.push('/pages/addiction/recovery-plan')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  I want a "sobriety / recovery plan" worksheet → Recovery Plan
                </button>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Tiny reminder
              </h3>
              <p className="text-gray-700">
                If you can delay using by 2–10 minutes, you create enough space for skills to work. Delay is a win.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Worksheets & PDFs
              </h3>
              <div className="space-y-2">
                <a
                  href="/assets/Worksheets/common-substances.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Common Substances (PDF)
                </a>
                <a
                  href="/assets/Worksheets/sobriety.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Sobriety Basics / Motivation (PDF)
                </a>
                <a
                  href="/assets/Worksheets/sobriety plan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Sobriety Plan (PDF)
                </a>
                <a
                  href="/assets/Worksheets/early-warning.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Early Warning Signs (PDF)
                </a>
                <a
                  href="/assets/Worksheets/relapse.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Relapse Education + Patterns (PDF)
                </a>
                <a
                  href="/assets/Worksheets/relapse-plan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Relapse Prevention Plan (PDF)
                </a>
                <a
                  href="/assets/Worksheets/distraction.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-center"
                >
                  Distraction (PDF)
                </a>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Links
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">/crisis</Link></li>
                <li><Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/tipp</Link></li>
                <li><Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">/interpersonal-skills/pros-cons</Link></li>
                <li><Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/accepts</Link></li>
                <li><Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/soothe</Link></li>
                <li><Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">/emotional-regulation/abc-please</Link></li>
              </ul>
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
