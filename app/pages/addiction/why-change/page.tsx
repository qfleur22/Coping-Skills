'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function WhyChangePage() {
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
            Why Change? (Pros & Cons + Values)
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Understanding your reasons for change helps you stay motivated when cravings hit. Use Pros & Cons and values work to clarify what matters to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Pros & Cons: Using vs. Not Using
              </h2>
              <p className="text-gray-700 mb-3">
                Do a DBT Pros & Cons exercise:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Using</h3>
                  <p className="text-sm text-gray-600 mb-2">Short-term:</p>
                  <div className="min-h-[60px] text-gray-500 text-sm">(relief, escape, etc.)</div>
                  <p className="text-sm text-gray-600 mb-2 mt-2">Long-term:</p>
                  <div className="min-h-[60px] text-gray-500 text-sm">(consequences, costs)</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Not Using</h3>
                  <p className="text-sm text-gray-600 mb-2">Short-term:</p>
                  <div className="min-h-[60px] text-gray-500 text-sm">(cravings, discomfort)</div>
                  <p className="text-sm text-gray-600 mb-2 mt-2">Long-term:</p>
                  <div className="min-h-[60px] text-gray-500 text-sm">(health, relationships, values)</div>
                </div>
              </div>
              <button
                onClick={() => router.push('/pages/interpersonal-skills/pros-cons')}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Go to Pros & Cons Worksheet
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Values Work
              </h2>
              <p className="text-gray-700 mb-3">
                What matters to you? How does using align (or not align) with your values?
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Health (physical, mental, emotional)</li>
                <li>Relationships (family, friends, community)</li>
                <li>Self-respect (living in line with your values)</li>
                <li>Goals (work, education, creative pursuits)</li>
                <li>Independence (not being controlled by substances)</li>
                <li>Safety (yours and others')</li>
              </ul>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="Write what matters to you..."
              ></textarea>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Your Reasons for Change
              </h2>
              <p className="text-gray-700 mb-3">
                Write 1-3 sentences about why you want to change:
              </p>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="Write your reasons here..."
              ></textarea>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Next Steps
              </h3>
              <p className="text-gray-700 mb-3">
                Use this clarity to build your recovery plan:
              </p>
              <div className="space-y-2">
                <button
                  onClick={() => router.push('/pages/addiction/sober-lifestyle')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Sober Lifestyle Worksheet
                </button>
                <button
                  onClick={() => router.push('/pages/addiction/substances')}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                >
                  Common Substances: Reality Check
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
