'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { Suspense, useEffect, useState } from 'react';

function GaugeOverwhelmContent() {
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
    router.push('/distress-tolerance');
  };

  const handleNo = () => {
    router.push('/regulate');
  };

  const handleNotSure = () => {
    router.push('/regulate');
  };

  const handleBack = () => {
    router.push('/changing-your-feelings');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Are you overwhelmed by feeling {selectedEmotions.length > 0 ? selectedEmotions.join(', ') : 'these emotions'}?
            </h1>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              What overwhelm feels like
            </h2>
            <p className="text-gray-700 mb-4">
              Overwhelm can feel like:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your emotions feel too big to handle right now</li>
              <li>You feel flooded, panicked, or unable to think clearly</li>
              <li>The intensity is so high that coping skills feel impossible</li>
              <li>You feel like you need immediate relief before you can do anything else</li>
              <li>Your body feels activated (racing heart, tense muscles, difficulty breathing)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              If this sounds like what you're experiencing, Distress Tolerance skills can help you get through the moment safely.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleYes}
              className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              Yes
            </button>
            <button
              onClick={handleNo}
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              No
            </button>
            <button
              onClick={handleNotSure}
              className="w-full px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              I'm not sure
            </button>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}

export default function GaugeOverwhelmPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <GaugeOverwhelmContent />
    </Suspense>
  );
}

