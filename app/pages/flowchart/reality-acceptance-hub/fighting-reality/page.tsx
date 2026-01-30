'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function FightingRealityPage() {
  const router = useRouter();

  const handleYes = () => {
    router.push('/pages/interpersonal-skills/radical-acceptance');
  };

  const handleNo = () => {
    router.push('/pages/flowchart/reality-acceptance-hub');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-purple-800">
              Is my suffering coming from fighting reality?
            </h1>
          </div>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg mb-8">
            <p className="text-gray-700 mb-6">
              Sometimes pain is unavoidable, but suffering comes from fighting against what is already true. When you're struggling with something you can't change, ask yourself: am I adding to my pain by refusing to accept reality?
            </p>

            <div className="mb-6 p-4 bg-purple-100 rounded-lg border border-purple-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                Signs you might be fighting reality:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li>Replaying "this shouldn't have happened" or "why me?"</li>
                <li>Bargaining: "if only..." or "what if..."</li>
                <li>Raging against unfairness that can't be changed</li>
                <li>Feeling stuck in "it's not fair" or "I can't accept this"</li>
                <li>Wishing things were different when they can't be</li>
              </ul>
            </div>

            <div className="space-y-4 mb-6">
              <button
                onClick={handleYes}
                className="w-full px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Yes, I'm fighting reality
              </button>
              <button
                onClick={handleNo}
                className="w-full px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                No, or I'm not sure
              </button>
            </div>

            <div className="mt-6 p-4 bg-purple-100 rounded-lg border border-purple-300">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                About Radical Acceptance
              </h3>
              <p className="text-gray-700 text-sm">
                Radical Acceptance doesn't mean you approve of what happened or that you like it. It means you stop fighting what is already true, which reduces suffering. This is often the first step in working with unchangeable realities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
