'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { BackButton } from '@/components/shared/BackButton';

function ChangingYourFeelingsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleYes = () => {
    const emotionsParam = searchParams?.get('emotions') || '';
    router.push(`/gauge-overwhelm${emotionsParam ? `?emotions=${encodeURIComponent(emotionsParam)}` : ''}`);
  };

  const handleNo = () => {
    router.push('/timer');
  };

  const handleSelfCareGuide = () => {
    router.push('/self-care');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Great, first step is making sure you are cared for.
            </h1>
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              Are you adequately:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-8 text-left max-w-md mx-auto">
              <li>Hydrated</li>
              <li>Medicated</li>
              <li>Nourished</li>
              <li>Rested</li>
            </ul>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleYes}
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              No, set a 5 minute timer to remind me to come back
            </button>
            <button
              onClick={handleSelfCareGuide}
              className="w-full px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              Can you walk me through some self care tasks?
            </button>
          </div>
        </div>
      </div>

      <BackButton onClick={() => router.back()} />
    </div>
  );
}

export default function ChangingYourFeelingsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <ChangingYourFeelingsContent />
    </Suspense>
  );
}
