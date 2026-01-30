'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SelfHarmHubPage() {
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
            Self-Harm Support Hub
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 mb-4">
              <p className="text-red-900 font-semibold mb-3">
                If there's immediate danger or you might act in the next few minutes, route to /crisis-help-now first (988 / emergency steps).
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
                Self-harm urges can show up when pain feels unbearable, when you feel numb and want to feel something, or when your brain is screaming for relief right now. You're not "bad" for having urges—urges are signals that something needs care.
              </p>
              <p className="text-gray-700 mb-4">
                This section is here to help you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Get safer fast</li>
                <li>Ride out urges without acting</li>
                <li>Recover after a slip</li>
                <li>Lower the odds of the next wave</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Start Here
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">
                Are you in immediate danger or at risk of harming yourself or someone else right now?
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
                What's true for you right now?
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/pages/self-harm/urge-now')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  I have urges and need help right now → Urges Right Now
                </button>
                <button
                  onClick={() => router.push('/pages/self-harm/after')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  I already self-harmed and I feel shaken → After a Slip
                </button>
                <button
                  onClick={() => router.push('/pages/self-harm/prevention')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  I want prevention + a plan for next time → Prevention
                </button>
                <button
                  onClick={() => router.push('/pages/self-harm/safety-plan')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  I want a step-by-step safety plan → Safety Plan
                </button>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Tiny reminder
              </h3>
              <p className="text-gray-700">
                If you can delay action by 2–10 minutes, you create enough space to use skills (that's often the whole game).
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
