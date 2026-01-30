'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function EarlyWarningPage() {
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
            Early Warning Signs
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Catching relapse early gives you time to use skills before cravings become overwhelming. Learn to spot the warning signs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                HALT States (High-Risk Basics)
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>H</strong>ungry</li>
                <li><strong>A</strong>ngry</li>
                <li><strong>L</strong>onely</li>
                <li><strong>T</strong>ired</li>
              </ul>
              <p className="text-gray-700 mt-3">
                When any of these are true, your relapse risk increases. Address them first: <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC PLEASE</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Warning Signs
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Sleep disruption:</strong> Not sleeping well, staying up late, sleeping too much</li>
                <li><strong>Isolation:</strong> Pulling away from supports, avoiding people, canceling plans</li>
                <li><strong>"Permission thoughts":</strong> "Just once," "I deserve it," "It's been long enough"</li>
                <li><strong>Rising conflict:</strong> More arguments, irritability, relationship stress</li>
                <li><strong>Routine collapse:</strong> Skipping meetings, dropping self-care, losing structure</li>
                <li><strong>Romanticizing:</strong> Remembering only the "good times," forgetting consequences</li>
                <li><strong>Increased stress:</strong> Work, money, relationships, health issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                What to Do When You Spot Warning Signs
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    If activated (anxious, angry, overwhelmed)
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/tipp')}
                      className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                    >
                      TIPP (body chemistry shift)
                    </button>
                    <button
                      onClick={() => router.push('/pages/mindfulness/breathing')}
                      className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                    >
                      Breathing (regulation)
                    </button>
                    <button
                      onClick={() => router.push('/pages/crisis')}
                      className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                    >
                      Crisis Skills
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    If depleted (sleep loss, hunger, illness)
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => router.push('/pages/emotional-regulation/abc-please')}
                      className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                    >
                      ABC PLEASE (reduce vulnerability)
                    </button>
                    <button
                      onClick={() => router.push('/pages/sleep-hygiene')}
                      className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left"
                    >
                      Sleep Hygiene
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    "Reach out now" micro-script
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Text or call someone:
                  </p>
                  <p className="text-gray-700 ml-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    "I'm noticing some warning signs and I need support. Can we talk for a few minutes?"
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Next Steps
              </h3>
              <p className="text-gray-700">
                If warning signs persist, build your <Link href="/pages/addiction/sobriety-plan" className="text-blue-600 hover:text-blue-800 underline">Sobriety Plan</Link> or check your <Link href="/pages/addiction/relapse-plan" className="text-blue-600 hover:text-blue-800 underline">Relapse Plan</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/early-warning.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Early Warning Signs (PDF)
        </a>
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
