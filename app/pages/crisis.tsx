'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CrisisPage() {
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
            Am I Overwhelmed?
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Sometimes it's hard to tell if you're just stressed… or if you're overwhelmed and need crisis skills first.
              </p>
              <p className="text-gray-700 mb-4">
                In DBT, you're in a crisis when the situation is highly stressful, short-term, and creates intense pressure to fix it now. Crisis skills are for moments when emotion mind threatens to overwhelm you, or you're overwhelmed but demands must still be met.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1: STOP for 10 seconds
              </h2>
              <p className="text-gray-700 mb-3">Before you decide anything, do STOP:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Stop (pause)</li>
                <li>Take a step back (one breath, put the phone down)</li>
                <li>Observe (what's happening inside + outside)</li>
                <li>Proceed mindfully (choose what helps, not what hurts)</li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                If you can't do all of STOP, do just this: "Pause. One exhale."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2: Quick overwhelm check (tap yes/no in your head)
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">
                You're probably overwhelmed if 2 or more are true right now:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Urgency: "I have to fix this RIGHT NOW."</li>
                <li>Tunnel vision: you can't see options, only danger/mess.</li>
                <li>Body alarm: heart racing, shaking, numb, hot, clenched, can't settle.</li>
                <li>Impulse risk: you feel pulled to do something you'll regret (blow up, self-harm, quit, spam-text, binge, spend).</li>
                <li>Thinking slips: lots of "always/never," mind-reading, catastrophe.</li>
                <li>Skills feel impossible: even simple tasks feel too hard.</li>
              </ol>
              <p className="text-gray-700 mt-3 font-semibold">
                If yes, treat this as overwhelm → crisis skills first.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3: Choose your crisis path (pick ONE)
              </h2>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">A) If your body is in full alarm → TIP</p>
                <p className="text-gray-700 ml-4">
                  Use TIP to bring intensity down fast (temperature, intense exercise, paced breathing, paired muscle relaxation).
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">B) If you're stuck on an urge → Pros & Cons</p>
                <p className="text-gray-700 ml-4">
                  Do DBT Pros/Cons: coping vs not coping (tolerating distress vs not tolerating).
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">C) If you need a safe break from the pain → ACCEPTS</p>
                <p className="text-gray-700 ml-4">
                  Use Wise Mind ACCEPTS for short-term distraction until you're steadier.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">D) If you need comfort (not distraction) → Self-Soothe</p>
                <p className="text-gray-700 ml-4">
                  Use your senses (vision, hearing, smell, taste, touch) to settle.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">E) If you need hope + relief inside the moment → IMPROVE</p>
                <p className="text-gray-700 ml-4">
                  Imagery, meaning, prayer/asking for help, relaxation, one thing, brief vacation, encouragement.
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">F) If you're fighting reality → Radical Acceptance</p>
                <p className="text-gray-700 ml-4">
                  Stop arguing with what is already true (without approving of it).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4: Re-check after 2–5 minutes
              </h2>
              <p className="text-gray-700 mb-2 font-medium">Ask: "Did the intensity drop at least 10%?"</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Yes: You're moving out of overwhelm. Go to Wise Mind, Check the Facts, or Problem Solving next.</li>
                <li>No: Stay in crisis skills. Try one different option (TIP → ACCEPTS, or ACCEPTS → Self-Soothe).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 5: If you're unsure, use the Wise Mind test
              </h2>
              <p className="text-gray-700 mb-3">
                Wise Mind is the overlap of emotion mind and reasonable mind—facts + feelings + values together.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Ask:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>"Can I see the facts and my feelings at the same time?"</li>
                <li>"Can I choose a next step that matches my values?"</li>
              </ul>
              <p className="text-gray-700">
                If not, you're likely still overwhelmed → return to crisis skills.
              </p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                A tiny rule that helps
              </h3>
              <p className="text-gray-700">
                If acting now would make things worse, you're overwhelmed enough to use crisis skills.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Crisis Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  onClick={() => router.push('/distress-tolerance/stop')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  STOP Skill
                </button>
                <button
                  onClick={() => router.push('/distress-tolerance/pros-cons')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Pros & Cons
                </button>
                <button
                  onClick={() => router.push('/distress-tolerance/tip')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  TIP
                </button>
                <button
                  onClick={() => router.push('/distress-tolerance/accepts')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  ACCEPTS
                </button>
                <button
                  onClick={() => router.push('/soothe')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Soothe
                </button>
                <button
                  onClick={() => router.push('/mindfulness/body-scan')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Body Scan
                </button>
                <button
                  onClick={() => router.push('/distress-tolerance/improve')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  IMPROVE the Moment
                </button>
                <button
                  onClick={() => router.push('/distress-tolerance/radical-acceptance')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Radical Acceptance
                </button>
                <button
                  onClick={() => router.push('/mindfulness')}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Mindfulness of Current Thoughts
                </button>
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

