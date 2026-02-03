'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SafetyPlanPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-red-800">
            Safety Plan
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                A safety plan is a written, do-this-next guide for moments when urges spike. The most widely used template is the Stanley-Brown Safety Plan—simple, practical, and meant to be filled out ahead of time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Build your plan (6 steps)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    1) Warning signs
                  </h3>
                  <p className="text-gray-700 mb-2">
                    What tells you a wave is coming? (sleep loss, conflict, shame spiral, numbness, anniversaries)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    2) Internal coping strategies (no other people)
                  </h3>
                  <p className="text-gray-700 mb-2 font-semibold">
                    Your top 3 skills you can do anywhere:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIP / paced breathing</Link></li>
                    <li><Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">Urge surfing</Link></li>
                    <li><Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link></li>
                    <li><Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-soothe</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    3) People & places for distraction/support
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Who can you be around that lowers risk? Where can you go?
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    4) People to ask for help
                  </h3>
                  <p className="text-gray-700 mb-2">
                    List names + what to say:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"I'm not okay and I need company."</li>
                    <li>"Can you stay on the phone while I use skills?"</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    5) Professional & crisis resources
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>988 (US call/text/chat)</li>
                    <li>Local urgent care / crisis center / therapist</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    6) Make the environment safer
                  </h3>
                  <p className="text-gray-700 mb-2">
                    What can you move, lock, store elsewhere, or ask someone to hold during high-risk periods?
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Save it where you'll use it
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Notes app / printed page / wallet card</li>
                <li>Add your first 3 steps at the top in bold</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <button
          onClick={handleReturnToLanding}
          className="px-4 md:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing
        </button>
      </div>
    </div>
  );
}
