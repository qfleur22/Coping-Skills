'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function AfterPage() {
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
            After a Slip
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 mb-4">
              <p className="text-red-900 font-semibold mb-3">
                If you feel at risk of doing more harm: /crisis-help-now
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
                If you self-harmed, the goal now is safety + stabilization, not shame. A slip is data. We use it to reduce the chance of the next one.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                First: medical + safety check
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>If you're injured and unsure about severity, infection risk, or bleeding: seek medical care.</li>
                <li>If you feel at risk of doing more harm: <Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">Crisis Help Now</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Then: regulate (10 minutes)
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">
                Pick one:
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => router.push('/pages/distress-tolerance/tipp')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  TIP (lower intensity fast)
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/breathing')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Breathing (coherent breathing / physiological sigh)
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/soothe')}
                  className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
                >
                  Soothe (warm drink, blanket, dim light, safe texture)
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Post-crisis debrief (when you're steadier)
              </h2>
              <p className="text-gray-700 mb-3">
                Go to: <Link href="/pages/post-crisis-debrief" className="text-blue-600 hover:text-blue-800 underline">Post-Crisis Debrief</Link>
              </p>
              <p className="text-gray-700 mb-2">
                We'll do:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Chain Analysis (what led here)</li>
                <li>Solution Analysis (where to insert skills next time)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                One-sentence accountability (optional)
              </h2>
              <p className="text-gray-700 mb-2">
                If someone was impacted:
              </p>
              <p className="text-gray-700 ml-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                "I'm sorry I scared you. I'm taking steps to be safer. I don't need you to fix it—just patience while I use my plan."
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
