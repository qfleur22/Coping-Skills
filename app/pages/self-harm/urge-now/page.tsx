'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function UrgeNowPage() {
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
            Urges Right Now
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 mb-4">
              <p className="text-red-900 font-semibold mb-3">
                If danger feels high: /crisis-help-now
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
                When an urge hits, your body can feel hijacked. This page is short on purpose: you only need one next step.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Safety micro-step (30 seconds)
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">
                Pick the safest available move right now:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Move toward a more supported / more public space</li>
                <li>Put distance between you and anything you could use to harm yourself</li>
                <li>Message/call someone to stay with you (in-person &gt; phone &gt; text)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Choose ONE urge skill (2–5 minutes)
              </h2>
              <p className="text-gray-700 mb-4 font-semibold">
                Pick one—don't do them all.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    A) If your body is in full alarm → TIP / TIPP
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Fast body chemistry shift (temperature + paced breathing + muscle release).
                  </p>
                  <button
                    onClick={() => router.push('/pages/distress-tolerance/tipp')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Go to TIPP
                  </button>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    B) If you feel "pulled" to act → <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">Urge Surfing</Link>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Ride the wave for 2–5 minutes.
                  </p>
                  <button
                    onClick={() => router.push('/pages/distress-tolerance/urge-surfing')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Go to Urge Surfing
                  </button>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    C) If your mind is bargaining → Pros & Cons
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Write 4 boxes: Act on urge vs Don't act (short-term + long-term).
                  </p>
                  <button
                    onClick={() => router.push('/pages/interpersonal-skills/pros-cons')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Go to Pros & Cons
                  </button>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    D) If you need a break from the pain → ACCEPTS / Distraction
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Short-term distraction until intensity drops.
                  </p>
                  <button
                    onClick={() => router.push('/pages/distress-tolerance/accepts')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Go to ACCEPTS
                  </button>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    E) If you need comfort, not distraction → Self-Soothe
                  </h3>
                  <p className="text-gray-700 mb-3">
                    5 senses support.
                  </p>
                  <button
                    onClick={() => router.push('/pages/distress-tolerance/soothe')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Go to Self-Soothe
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                A simple "delay contract"
              </h2>
              <p className="text-gray-700 mb-3">
                Set a timer for 5 minutes and tell yourself:
              </p>
              <p className="text-gray-700 mb-3 p-4 bg-blue-50 rounded-lg border border-blue-200 font-semibold">
                "I can do anything after 5 minutes. For now, I surf the urge."
              </p>
              <p className="text-gray-700 mb-2 font-semibold">
                When the timer ends:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>If intensity dropped even a little → repeat once or go to <Link href="/pages/post-crisis-debrief" className="text-blue-600 hover:text-blue-800 underline">Post-Crisis Debrief</Link></li>
                <li>If intensity is still climbing → <Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">Crisis Help Now</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                If you're dissociating, shutting down, or overloaded
              </h2>
              <p className="text-gray-700 mb-3">
                Go to: <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">Neurodivergent Overload</Link>
              </p>
              <p className="text-gray-700 text-sm italic">
                (Body-based skills can feel unsafe during dissociation; start with external grounding.)
              </p>
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
