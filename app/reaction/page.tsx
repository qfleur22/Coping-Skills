'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ReactionPage() {
  const router = useRouter();

  const handleYes = () => {
    router.push('/change-situation');
  };

  const handleMaybeNot = () => {
    router.push('/check-facts');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              Does your reaction fit the context?
            </h1>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleYes}
              className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              Yes
            </button>
            <button
              onClick={handleMaybeNot}
              className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
            >
              Maybe not
            </button>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}

