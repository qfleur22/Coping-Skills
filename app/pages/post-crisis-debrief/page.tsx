'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function PostCrisisDebriefPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-orange-800">
            Post-Crisis Debrief
          </h1>

          <div className="bg-orange-50 backdrop-blur-sm rounded-lg border border-orange-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Crisis skills get you through the moment. This page helps you learn from it without shame—so the next wave is smaller.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                1) When to use this page (and when not to)
              </h2>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">Use this page when:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>you're physically safe</li>
                  <li>intensity is ≤ 4/10</li>
                  <li>you can read a few short prompts</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                <p className="text-red-800 font-semibold mb-2">Don't use this page yet if:</p>
                <ul className="list-disc list-inside space-y-1 text-red-700 ml-4">
                  <li>you're still in "red alert"</li>
                  <li>you haven't slept/eaten in a long time</li>
                  <li>you're actively dissociating</li>
                </ul>
                <p className="text-red-700 mt-2">
                  If not ready: go to <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/tipp</Link> or <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">/sleep-hygiene</Link>.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                2) The 3-part debrief (fast)
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-orange-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Part A — Stabilize (60 seconds)</h3>
                  <p className="text-gray-700 font-semibold mb-2">Pick one:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>drink water</li>
                    <li>change temperature (wash face / cold pack)</li>
                    <li>5 slow breaths</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Part B — Chain Analysis (what happened?)</h3>
                  <p className="text-gray-700 text-sm italic mb-2">
                    DBT uses behavioral chain analysis to map: prompting event → vulnerability factors → links → consequences.
                  </p>
                  <p className="text-gray-700 mb-2">
                    Go here: /chain-analysis
                  </p>
                  <p className="text-gray-700 font-semibold mb-2">If you only answer 3 things, answer:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>What kicked it off?</li>
                    <li>What was I vulnerable to (sleep, hunger, conflict, sensory load)?</li>
                    <li>Where could I have interrupted the chain?</li>
                  </ol>
                </div>

                <div className="bg-white p-4 rounded-lg border border-orange-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Part C — Solution Analysis (what next time needs)</h3>
                  <p className="text-gray-700 text-sm italic mb-2">
                    DBT solution analysis focuses on where to insert skills next time (including "repair/make amends," prevention, and coping plans).
                  </p>
                  <p className="text-gray-700 mb-2">
                    Go here: /solution-analysis
                  </p>
                  <p className="text-gray-700 font-semibold mb-2">Pick one upgrade:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>PLEASE/ABC basics (sleep/food/meds/illness) → <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">/emotional-regulation/abc-please</Link></li>
                    <li>TIPP first when body alarm starts → <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/tipp</Link></li>
                    <li>Turning the Mind / Willingness when stuck fighting reality → <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/turning-mind</Link></li>
                    <li>Cope Ahead for the next known trigger → <Link href="/pages/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">/emotional-regulation/cope-ahead</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                3) If other people were involved
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>If you harmed someone: do a brief repair → <Link href="/pages/interpersonal-skills/repair" className="text-blue-600 hover:text-blue-800 underline">/interpersonal-skills/repair</Link></li>
                <li>If boundaries were crossed: go to <Link href="/pages/interpersonal-skills/boundaries" className="text-blue-600 hover:text-blue-800 underline">/interpersonal-skills/boundaries</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-orange-800">
                4) Tiny "close the loop" checklist
              </h2>
              <div className="bg-white p-4 rounded-lg border border-orange-300">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>What's one early warning sign I'll watch for next time?</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>What's my first skill when that sign appears?</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>Who/what helps me stay regulated (person/place/sensory support)?</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <span>What do I need in the next 12 hours (sleep/food/quiet/movement)?</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-orange-300">
              <h2 className="text-xl font-semibold mb-4 text-orange-800">
                Related Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => router.push('/pages/distress-tolerance/tipp')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  TIPP
                </button>
                <button
                  onClick={() => router.push('/pages/emotional-regulation/abc-please')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  ABC PLEASE
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/repair')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Repair
                </button>
                <button
                  onClick={() => router.push('/pages/sleep-hygiene')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Sleep Hygiene
                </button>
                <button
                  onClick={() => router.push('/pages/crisis-help-now')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Crisis Help Now
                </button>
                <button
                  onClick={() => router.push('/pages/addiction/relapse-plan')}
                  className="px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Relapse Plan (if substance use)
                </button>
              </div>
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
