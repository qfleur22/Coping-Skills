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
            Prevention
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Urges get louder when your system is depleted (sleep debt, hunger, illness, sensory overload, conflict exposure). Prevention is about lowering vulnerability and increasing options before you hit crisis speed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                The 3 biggest prevention levers
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    A) Reduce baseline vulnerability (ABC PLEASE)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Sleep, food, meds/illness care, substances, movement—small changes matter.
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
                    B) Catch the "early wave"
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Learn your warning signs and use small skills early:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>2 minutes paced breathing</li>
                    <li>short walk / gentle movement</li>
                    <li>text a safe person</li>
                    <li>"Check the facts lite"</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    C) Cope Ahead (rehearsal)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    If you know a hard moment is coming (appointment, family dinner, lonely night):
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>Visualize the trigger</li>
                    <li>Visualize the skill</li>
                    <li>Write the first 3 steps you'll do</li>
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
                Build your "urge kit"
              </h2>
              <p className="text-gray-700 mb-2 font-semibold">
                A small list you can grab fast:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>cold pack / ice water</li>
                <li>safe sensory object (texture)</li>
                <li>music playlist</li>
                <li>3-minute timer link</li>
                <li>distraction list (from your Distraction PDF/page)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                When to get more support
              </h2>
              <p className="text-gray-700 mb-2">
                If urges are frequent, escalating, or you're using skills but still slipping:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Consider professional support (DBT is designed to treat high-risk coping patterns)</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Related Resources
              </h3>
              <p className="text-gray-700 mb-2">
                If you're also dealing with substance use (common overlap):
              </p>
              <button
                onClick={() => router.push('/pages/addiction/sober-lifestyle')}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Sober Lifestyle Worksheet
              </button>
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
