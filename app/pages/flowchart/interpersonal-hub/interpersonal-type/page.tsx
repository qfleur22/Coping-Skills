'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function InterpersonalTypePage() {
  const router = useRouter();

  const handleAsking = () => {
    router.push('/pages/interpersonal-skills/dear-man');
  };

  const handleSayingNo = () => {
    router.push('/pages/interpersonal-skills/fast');
  };

  const handleRepair = () => {
    // For now, route to conflict page as repair is mentioned there
    router.push('/pages/interpersonal-skills/conflict');
  };

  const handleBoundaries = () => {
    router.push('/pages/interpersonal-skills/boundaries');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-green-800">
              Is this asking/saying no/repair?
            </h1>
          </div>

          <div className="bg-green-50 backdrop-blur-sm rounded-lg border border-green-200 p-8 shadow-lg mb-8">
            <p className="text-gray-700 mb-6">
              Interpersonal situations can take different forms. Identifying what you're trying to accomplish helps you choose the right skill.
            </p>

            <div className="space-y-4 mb-6">
              <button
                onClick={handleAsking}
                className="w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
              >
                Asking for something / Making a request
              </button>
              <button
                onClick={handleSayingNo}
                className="w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
              >
                Saying no / Setting a limit
              </button>
              <button
                onClick={handleRepair}
                className="w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
              >
                Repairing a relationship / Fixing a conflict
              </button>
              <button
                onClick={handleBoundaries}
                className="w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-left"
              >
                Setting boundaries
              </button>
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Quick guide
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                <li><strong>Asking:</strong> Use DEAR MAN to make clear requests</li>
                <li><strong>Saying no:</strong> Use FAST to maintain self-respect while declining</li>
                <li><strong>Repair:</strong> Address conflicts and work toward resolution</li>
                <li><strong>Boundaries:</strong> Define what's okay and what's not in your relationships</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
