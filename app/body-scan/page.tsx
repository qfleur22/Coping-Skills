'use client';

import { useRouter } from 'next/navigation';

export default function BodyScanPage() {
  const router = useRouter();

  const handleTimeSelect = ({ duration }: { duration: string }) => {
    router.push(`/body-scan/${duration}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              How long would you like to spend on your body scan?
            </h1>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => {
                handleTimeSelect({ duration: '1min' });
              }}
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              1 min
            </button>
            <button
              onClick={() => {
                handleTimeSelect({ duration: '5min' });
              }}
              className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              5 min
            </button>
            <button
              onClick={() => {
                handleTimeSelect({ duration: '15min' });
              }}
              className="w-full px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              15 min
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
