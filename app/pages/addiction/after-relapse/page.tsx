'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function AfterRelapsePage() {
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
            After Relapse
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 mb-4">
              <p className="text-red-900 font-semibold mb-3">
                If you're worried about overdose, mixing substances, severe symptoms, or you feel unsafe: /crisis-help-now
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
                If you relapsed, the goal now is safety + stabilization, not shame. A lapse is data. We use it to reduce the odds of the next one.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                1. Medical Safety
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>If you're worried about overdose, mixing substances, or severe symptoms: seek medical care</li>
                <li>If you're stopping alcohol or sedatives (like benzodiazepines), withdrawal can be dangerous and may need medical support</li>
                <li>When in doubt, err on the side of safety</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                2. Shame Reduction
              </h2>
              <p className="text-gray-700 mb-3">
                Relapse is common in recovery. It doesn't mean you've failed or that recovery is impossible. It means you need to adjust your plan.
              </p>
              <p className="text-gray-700 mb-2">
                Remind yourself:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>This is a learning opportunity, not a character flaw</li>
                <li>Many people relapse before finding what works</li>
                <li>You can get back on track right now</li>
                <li>One lapse doesn't erase your progress</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                3. Accountability Scripts
              </h2>
              <p className="text-gray-700 mb-3">
                If someone was impacted, you might need to address it:
              </p>
              <p className="text-gray-700 ml-4 p-4 bg-blue-50 rounded-lg border border-blue-200 mb-3">
                "I relapsed. I'm taking steps to be safer. I don't need you to fix it—please just stay connected while I use my plan."
              </p>
              <button
                onClick={() => router.push('/pages/interpersonal-skills/repair')}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Go to Repair
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                4. Chain Analysis → Solution Analysis → Cope Ahead
              </h2>
              <p className="text-gray-700 mb-3">
                Understand what happened and plan for next time:
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => router.push('/pages/chain-analysis')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Chain Analysis (what led here)
                </button>
                <button
                  onClick={() => router.push('/pages/solution-analysis')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Solution Analysis (what to do differently)
                </button>
                <button
                  onClick={() => router.push('/pages/emotional-regulation/cope-ahead')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Cope Ahead (rehearse for next time)
                </button>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Do a Debrief
              </h3>
              <p className="text-gray-700 mb-3">
                After you're stable, do a full debrief to learn from this:
              </p>
              <button
                onClick={() => router.push('/pages/post-crisis-debrief')}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Go to Post-Crisis Debrief
              </button>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/relapse.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Relapse Education + Patterns (PDF)
        </a>
        <button
          onClick={() => router.push('/pages/post-crisis-debrief')}
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Do a Debrief
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
