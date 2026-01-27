'use client';

import { useRouter } from 'next/navigation';

export default function SkillsFlowchartPage() {
  const router = useRouter();

  const handleBodyCheckInYes = () => {
    router.push('/feelings');
  };

  const handleBodyCheckInGuide = () => {
    router.push('/body-scan');
  };

  const handleBodyCheckInUnsafe = () => {
    router.push('/unsafe-body-check');
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Can you check into your body?
            </h1>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleBodyCheckInYes}
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              Yes, I know how I'm feeling
            </button>
            <button
              onClick={handleBodyCheckInGuide}
              className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              No, please guide me through a body scan
            </button>
            <button
              onClick={handleBodyCheckInUnsafe}
              className="w-full px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              No, it feels unsafe to check into my body
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

