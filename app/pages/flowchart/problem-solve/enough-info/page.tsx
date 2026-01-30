'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function EnoughInfoPage() {
  const router = useRouter();

  const handleYes = () => {
    router.push('/pages/flowchart/problem-solve');
  };

  const handleNo = () => {
    router.push('/pages/flowchart/check-facts');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Do I have enough info?
            </h1>
          </div>

          <div className="bg-white backdrop-blur-sm rounded-lg border border-gray-200 p-8 shadow-lg mb-8">
            <p className="text-gray-700 mb-6">
              Before jumping into problem-solving, it's helpful to check: do you have enough information to make a good decision? Sometimes what feels like a problem to solve is actually a situation where you need to gather more facts first.
            </p>

            <div className="space-y-4 mb-6">
              <button
                onClick={handleYes}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Yes, I have enough information
              </button>
              <button
                onClick={handleNo}
                className="w-full px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                No, I need to check the facts first
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Why this matters
              </h3>
              <p className="text-gray-700 text-sm">
                Problem-solving works best when you're working with accurate information. If you're not sure about the facts, checking them first can save you from solving the wrong problem or making decisions based on assumptions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
