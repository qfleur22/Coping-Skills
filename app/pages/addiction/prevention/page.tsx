'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function PreventionPage() {
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
            Prevention & Recovery Basics
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Cravings spike when your system is depleted (sleep debt, hunger, illness, conflict, sensory overload). Prevention is about lowering vulnerability and increasing options before you hit crisis speed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                The 3 biggest prevention levers
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    A) Reduce vulnerability (ABC PLEASE)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Sleep, food, illness/meds, substances, movement.
                  </p>
                  <button
                    onClick={() => router.push('/pages/emotional-regulation/abc-please')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Go to ABC PLEASE
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    B) Catch the early wave
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Use small skills early:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>2 minutes paced breathing (<Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">/mindfulness/breathing</Link>)</li>
                    <li>gentle movement</li>
                    <li>check facts lite</li>
                    <li>text a safe person</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    C) Cope Ahead (rehearsal)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    If a hard moment is coming (weekend nights, payday, anniversaries):
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>visualize the trigger</li>
                    <li>visualize the skill</li>
                    <li>write your first 3 steps</li>
                  </ul>
                  <button
                    onClick={() => router.push('/pages/emotional-regulation/cope-ahead')}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Go to Cope Ahead
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Build an "urge kit"
              </h2>
              <p className="text-gray-700 mb-2 font-semibold">
                Pick 5 items you can grab fast:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>cold pack / ice water (TIP)</li>
                <li>sensory object (texture)</li>
                <li>a short playlist</li>
                <li>distraction list</li>
                <li>5-minute timer link</li>
                <li>recovery reminders (your Pros/Cons)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                When to get more support
              </h2>
              <p className="text-gray-700 mb-2">
                If cravings are frequent, escalating, or you keep slipping:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>consider professional support and/or medication-assisted treatment when appropriate</li>
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
