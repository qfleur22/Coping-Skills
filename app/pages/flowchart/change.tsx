'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { useEffect, useState, Suspense } from 'react';

function ChangeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

  useEffect(() => {
    const emotionsParam = searchParams.get('emotions');
    if (emotionsParam) {
      setSelectedEmotions(emotionsParam.split(','));
    }
  }, [searchParams]);

  const handleYes = () => {
    const emotionsParam = searchParams.get('emotions') || '';
    router.push(`/changing-your-feelings${emotionsParam ? `?emotions=${encodeURIComponent(emotionsParam)}` : ''}`);
  };

  const handleBack = () => {
    router.push('/feelings');
  };

  const handleNo = () => {
    router.push('/sit-with-it');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          {/* I feel statement at top */}
          <div className="text-center mb-12">
            <p className="text-2xl font-medium text-gray-800">
              I feel {selectedEmotions.join(', ')}
            </p>
          </div>

          {/* Question and buttons */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-8 text-gray-800">
              Would you like to change that feeling?
            </h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleYes}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}

export default function ChangePage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <ChangeContent />
    </Suspense>
  );
}

