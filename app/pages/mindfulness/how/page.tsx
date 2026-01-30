'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function HowPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
            Mindfulness "How" Skills
          </h1>

          <div className="bg-blue-50 backdrop-blur-sm rounded-lg border border-blue-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Mindfulness isn't just what you pay attention to — it's how you do it. In DBT, the "How" skills are the three ways you practice mindfulness so it actually helps (instead of turning into judging yourself, zoning out, or overthinking).
              </p>
              <p className="text-gray-700 font-semibold mb-2">
                These skills are:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Non-judgmentally</li>
                <li>One-mindfully</li>
                <li>Effectively</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                1) What are the "How" skills?
              </h2>
              <p className="text-gray-700 mb-4">
                Think of the "What" skills as what you do (<Link href="/pages/mindfulness/what" className="text-blue-600 hover:text-blue-800 underline">observe, describe, participate</Link>).
              </p>
              <p className="text-gray-700">
                The "How" skills are how you do it so your mind doesn't turn mindfulness into a new way to suffer.
              </p>
              <p className="text-gray-700 mt-4 font-semibold">
                DBT's three "How" skills: Non-judgmentally, One-mindfully, Effectively.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                2) Non-judgmentally
              </h2>
              <p className="text-gray-700 mb-4 font-semibold">
                Goal: Notice what's happening without rating it as "good/bad," "right/wrong," "I shouldn't," etc.
              </p>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">What this looks like:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Swap evaluations ("This is awful") for facts ("This is painful / loud / disappointing").</li>
                  <li>You can still notice what's helpful vs harmful — just without the extra "I'm bad / they're bad" layer.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">Quick practice:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Say: "I notice I'm having the thought that ___."</li>
                  <li>Then: "The facts are ___."</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm italic">
                Links: <Link href="/pages/emotional-regulation/letting-go" className="text-blue-600 hover:text-blue-800 underline">Letting Go</Link> (includes "letting go of judgments").
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                3) One-mindfully
              </h2>
              <p className="text-gray-700 mb-4 font-semibold">
                Goal: Do one thing at a time, with your attention anchored to the present.
              </p>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">What this looks like:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"Rivet yourself to now."</li>
                  <li>Let go of distractions when you notice them, and return.</li>
                </ul>
              </div>
              <div className="mb-4 p-4 bg-blue-100 rounded-lg border border-blue-300">
                <p className="text-gray-700 font-semibold mb-2">Neurodivergent-friendly tips:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Use an external anchor (hands on mug, feet on floor, a fidget).</li>
                  <li>Set a tiny container: "One-mindful for 60 seconds."</li>
                  <li>If your brain multitasks, you're not failing — you're just practicing the return.</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm italic">
                Links: <Link href="/pages/mindfulness/one-mindfulness" className="text-blue-600 hover:text-blue-800 underline">One-Mindfulness</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                4) Effectively
              </h2>
              <p className="text-gray-700 mb-4 font-semibold">
                Goal: Focus on what works for your actual goal in this situation (not what proves a point, vents perfectly, or wins the argument).
              </p>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">What this looks like:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Be mindful of your goal.</li>
                  <li>"Play by the rules" of reality (what's true, what's possible).</li>
                  <li>Act as skillfully as you can; let go of willfulness.</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">A simple check:</p>
                <p className="text-gray-700 ml-4">
                  "Is what I'm about to do going to help… today… and later?"
                </p>
              </div>
              <p className="text-gray-700 text-sm italic">
                Links: <Link href="/pages/emotional-regulation/being-effective" className="text-blue-600 hover:text-blue-800 underline">Being Effective</Link> + <Link href="/pages/flowchart/reality-acceptance-hub" className="text-blue-600 hover:text-blue-800 underline">Reality Acceptance Hub</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                5) A 2-minute "How skills" drill
              </h2>
              <p className="text-gray-700 mb-4">
                Pick any small activity (washing hands, opening a door, drinking water):
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>One-mindfully:</strong> do only that.</li>
                <li><strong>Non-judgmentally:</strong> narrate facts only ("warm water, soap smell").</li>
                <li><strong>Effectively:</strong> ask "what works?" and choose the next helpful micro-step.</li>
              </ol>
              <p className="text-gray-700 mt-4 font-semibold">
                That's the whole skill.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                6) Worksheet & Virtual Coach
              </h2>
              <p className="text-gray-700 mb-4">
                Use your worksheet to rate and practice:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Nonjudgmentalness</li>
                <li>One-mindfulness</li>
                <li>Effectiveness</li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm italic">
                (If you want, you can link this page directly to the PDF download.)
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                FAQs
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Is "non-judgmental" the same as "no opinions"?</p>
                  <p className="text-gray-700 ml-4">
                    No. It means you're not adding extra suffering by turning opinions into global verdicts ("I'm worthless," "everything is ruined"). You can still have values and preferences.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if I can't be one-mindful because of ADHD/autism/anxiety?</p>
                  <p className="text-gray-700 ml-4">
                    Then you practice in smaller doses and use anchors. The skill is noticing you drifted and returning, not staying perfectly focused.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What does "effective" mean when overwhelmed?</p>
                  <p className="text-gray-700 ml-4">
                    Reduce intensity first (<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>/<Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>), then choose actions that match your goal (relationship, self-respect, solving the problem).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-300">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">
                Related Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => router.push('/pages/mindfulness/what')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  What Skills
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/one-mindfulness')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  One-Mindfulness
                </button>
                <button
                  onClick={() => router.push('/pages/emotional-regulation/letting-go')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Letting Go (Judgments)
                </button>
                <button
                  onClick={() => router.push('/pages/emotional-regulation/being-effective')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Being Effective
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/stop')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  STOP
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/tipp')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  TIPP
                </button>
                <button
                  onClick={() => router.push('/pages/flowchart/reality-acceptance-hub')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Reality Acceptance Hub
                </button>
              </div>
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
