'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SupportPage() {
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
            Addiction Support & Hotlines
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Support isn't weakness—it's a relapse-prevention skill.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Treatment + referrals (U.S.)
              </h2>
              <p className="text-gray-700 mb-3">
                <strong>SAMHSA National Helpline:</strong> 1-800-662-HELP (4357), free and confidential, 24/7 treatment referral and information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                If you're also in emotional crisis
              </h2>
              <p className="text-gray-700 mb-3">
                988 Suicide & Crisis Lifeline (call/text/chat 24/7).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Overdose safety
              </h2>
              <p className="text-gray-700 mb-3">
                Naloxone can reverse opioid overdose and emergency help is still critical.
              </p>
              <p className="text-gray-700 mb-3 font-semibold">
                If you think an overdose may be happening: call emergency services.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Links
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">/crisis-help-now</Link></li>
                <li><Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">/crisis</Link></li>
                <li><Link href="/pages/post-crisis-debrief" className="text-blue-600 hover:text-blue-800 underline">/post-crisis-debrief</Link></li>
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
