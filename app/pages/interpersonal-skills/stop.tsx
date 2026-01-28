'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function StopPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            STOP (Crisis "pause button")
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700">
                Use STOP when you're about to react on impulse (text, yell, self-sabotage, shut down). It helps you not make it worse and choose the next step on purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — S: Stop
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Pause. Don't react.</li>
                  <li>If it helps, say (in your head): "Stop."</li>
                  <li>Hold still for 1–2 breaths.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — T: Take a step back
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Physically step back, sit down, or put your phone down.</li>
                  <li>Take one slow breath. Let your shoulders drop.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — O: Observe
                </h3>
                <p className="text-gray-700 mb-2">Notice, without judging:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>What happened (just the facts)?</li>
                  <li>What's happening inside (thoughts, feelings, urges)?</li>
                  <li>What are other people doing or saying?</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — P: Proceed mindfully
                </h3>
                <p className="text-gray-700 mb-2">Ask yourself:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"What do I want from this situation?"</li>
                  <li>"What will make this better or worse?"</li>
                  <li>"What would Wise Mind choose?"</li>
                </ul>
                <p className="text-gray-700">
                  Then do one next helpful action (even tiny).
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  If you get stuck
                </h3>
                <p className="text-gray-700 mb-2 font-medium">Pick one:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>TIP (if your body is in panic/rage)</li>
                  <li>ACCEPTS (if you need a safe distraction)</li>
                  <li>Self-Soothe menu (if you need comfort)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-6 right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50"
      >
        Return to Landing
      </button>
    </div>
  );
}

