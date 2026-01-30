'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SobrietyPlanPage() {
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
            Sobriety Plan
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Build your personalized plan for staying sober: supports, boundaries, routines, and what you'll do when cravings hit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                1. Supports
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>People: (who can you call/text when cravings hit?)</li>
                <li>Places: (where can you go that's safer?)</li>
                <li>Groups: (meetings, support groups, online communities)</li>
                <li>Professional: (therapist, doctor, sponsor)</li>
              </ul>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="List your supports..."
              ></textarea>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                2. Boundaries
              </h2>
              <p className="text-gray-700 mb-3">
                What will you avoid or limit to protect your sobriety?
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>People: (who to avoid or limit contact with)</li>
                <li>Places: (bars, parties, certain neighborhoods)</li>
                <li>Activities: (what triggers cravings)</li>
                <li>Access: (how to limit access to substances/money)</li>
              </ul>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="Write your boundaries..."
              ></textarea>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                3. Routines
              </h2>
              <p className="text-gray-700 mb-3">
                What daily/weekly routines will support your recovery?
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Morning routine: (how you start your day)</li>
                <li>Evening routine: (how you wind down safely)</li>
                <li>Weekly routine: (meetings, activities, self-care)</li>
                <li>Sleep routine: (<Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">sleep hygiene</Link>)</li>
              </ul>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="Write your routines..."
              ></textarea>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                4. When Cravings Hit
              </h2>
              <p className="text-gray-700 mb-3">
                Your step-by-step plan for when urges appear:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>First skill: (what will you do immediately?)</li>
                <li>Second skill: (if the first doesn't help)</li>
                <li>Reach out: (who will you contact?)</li>
                <li>Change location: (where will you go?)</li>
                <li>If still struggling: (<Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">crisis help</Link>)</li>
              </ol>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="Write your craving response plan..."
              ></textarea>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                5. What You'll Add
              </h2>
              <p className="text-gray-700 mb-3">
                What positive activities, relationships, or practices will you build?
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Activities: (hobbies, exercise, creative pursuits)</li>
                <li>Relationships: (building sober connections)</li>
                <li>Self-care: (<Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">ABC PLEASE</Link>)</li>
                <li>Values work: (what matters to you?)</li>
              </ul>
              <textarea
                className="w-full p-4 bg-white rounded-lg border border-gray-200 min-h-[100px] resize-y"
                placeholder="Write what you'll add..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/sobriety plan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >
          Sobriety Plan (PDF)
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
