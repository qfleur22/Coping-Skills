'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function RelapsePlanPage() {
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
            Relapse Plan
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 mb-4">
              <p className="text-red-900 font-semibold mb-3">
                If you're in immediate danger or overdose risk: /crisis-help-now
              </p>
              <button
                onClick={() => router.push('/pages/crisis-help-now')}
                className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Go to Crisis Help Now
              </button>
            </div>

            <div>
              <p className="text-gray-700 mb-4">
                This is your plan for when you're at risk, slipping, or have already used. Having a plan reduces shame and gives you clear next steps.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                I'm at Risk Tonight
              </h2>
              <p className="text-gray-700 mb-3">
                If you feel like you might use tonight:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Remove access: (get rid of substances, money, contacts)</li>
                <li>Reach out: (call/text someone from your support list)</li>
                <li>Change location: (go somewhere safer, more public)</li>
                <li>Use skills: (<Link href="/pages/addiction/craving-now" className="text-blue-600 hover:text-blue-800 underline">Cravings Right Now</Link>)</li>
                <li>If still struggling: (<Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">Crisis Help Now</Link>)</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                I Already Used and I Need a Plan
              </h2>
              <p className="text-gray-700 mb-3">
                If you've already used:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Safety first: (medical check if needed, remove access to more)</li>
                <li>Regulate: (<Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>, breathing, soothe)</li>
                <li>Don't use more: (one use doesn't mean you have to keep going)</li>
                <li>Reach out: (tell someone, get support)</li>
                <li>Debrief: (<Link href="/pages/addiction/after-relapse" className="text-blue-600 hover:text-blue-800 underline">After Relapse</Link>)</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                I'm Close to Relapsing
              </h2>
              <p className="text-gray-700 mb-3">
                If you're on the edge:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Use your <Link href="/pages/addiction/craving-now" className="text-blue-600 hover:text-blue-800 underline">craving skills</Link> right now</li>
                <li>Check your <Link href="/pages/addiction/early-warning" className="text-blue-600 hover:text-blue-800 underline">early warning signs</Link></li>
                <li>Review your <Link href="/pages/addiction/sobriety-plan" className="text-blue-600 hover:text-blue-800 underline">sobriety plan</Link></li>
                <li>Reach out immediately (don't wait)</li>
                <li>Do <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">Pros & Cons</Link> (use vs. don't use)</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Remember
              </h3>
              <p className="text-gray-700">
                A lapse doesn't have to become a full relapse. Stop, stabilize, and get back to your plan. If you used, go to <Link href="/pages/addiction/after-relapse" className="text-blue-600 hover:text-blue-800 underline">After Relapse</Link> for next steps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/relapse-plan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Relapse Plan (PDF)
        </a>
        <button
          onClick={() => router.push('/pages/addiction/after-relapse')}
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          I Used - Go to After Relapse
        </button>
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
