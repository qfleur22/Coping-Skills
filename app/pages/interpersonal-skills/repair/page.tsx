'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function RepairPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
            Repair / Rupture After Conflict
          </h1>

          <div className="bg-green-50 backdrop-blur-sm rounded-lg border border-green-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Conflict happens. What matters next is what you do after—especially if you said something you regret, went quiet, shut down, got defensive, or escalated.
              </p>
              <p className="text-gray-700 font-semibold">
                This page is a repair map: stabilize → take accountability → reconnect (if safe) → set boundaries → plan for next time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                1) Quick check: is repair safe right now?
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-4">
                <p className="text-red-800 font-semibold mb-2">Repair is NOT the first move if:</p>
                <ul className="list-disc list-inside space-y-1 text-red-700 ml-4">
                  <li>anyone is in danger</li>
                  <li>you're still in "red alert" (panic, rage, dissociation, shaking, urge to harm/self-harm)</li>
                  <li>the other person is threatening, coercive, or abusive</li>
                </ul>
              </div>
              <p className="text-gray-700">
                If any of those are true: go to crisis / regulation first → <Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">/crisis</Link> or <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/tipp</Link>.
              </p>
              <p className="text-gray-700 mt-2 font-semibold">
                If it's safe to proceed, keep going.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                2) Stabilize before you talk (2 minutes)
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">Pick one:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> (10 seconds) → <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/stop</Link></li>
                <li><Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> if your body is in alarm → <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/tipp</Link></li>
                <li><Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">Breathing</Link> or pressure/squeeze if you're overloaded → <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">/mindfulness/breathing</Link> or <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">/neurodivergent/overload</Link></li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold text-sm italic">
                Rule: if your voice is shaking or you feel "I have to win/defend," you're probably not ready to repair yet.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                3) The repair ladder (simple + doable)
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step A — Name what happened (no debate)</h3>
                  <p className="text-gray-700 mb-2">One sentence. Concrete. No "always/never."</p>
                  <p className="text-gray-700 italic ml-4">"I raised my voice and interrupted you."</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step B — Accountability (own your part)</h3>
                  <p className="text-gray-700 mb-2">Not a justification. Not a counter-attack.</p>
                  <p className="text-gray-700 italic ml-4">"That wasn't okay. I'm responsible for that."</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step C — Validate their experience (without agreeing to everything)</h3>
                  <p className="text-gray-700 mb-2">
                    Validation = "I get why that landed badly." (Not "you're right about everything.")
                  </p>
                  <p className="text-gray-700 text-sm italic mb-2">
                    DBT often teaches validation as a core relationship skill.
                  </p>
                  <p className="text-gray-700 italic ml-4">"It makes sense you felt hurt and dismissed."</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step D — Repair request (small + specific)</h3>
                  <p className="text-gray-700 italic ml-4">"Can we try again for 5 minutes?"</p>
                  <p className="text-gray-700 italic ml-4">"Do you want space first, or do you want me to listen now?"</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Step E — Make it right (one concrete action)</h3>
                  <p className="text-gray-700 text-sm italic mb-2">
                    DBT chain work often includes "make amends" as a repair step when appropriate.
                  </p>
                  <p className="text-gray-700 italic ml-4">"I'll send the clarification text." / "I'll replace what I broke." / "I'll follow through on the plan we agreed."</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                4) Boundaries for next time (protect the relationship)
              </h2>
              <p className="text-gray-700 mb-3">
                Use a simple <Link href="/pages/interpersonal-skills/dear-man" className="text-blue-600 hover:text-blue-800 underline">DEAR MAN</Link>-style structure (describe → ask → reinforce).
              </p>
              <p className="text-gray-700 mb-2 font-semibold">Examples:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>"If voices rise, I'm going to take a 10-minute break and come back."</li>
                <li>"I can talk about this, but not while being insulted."</li>
                <li>"I'm willing to solve this—no yelling, no threats."</li>
              </ul>
              <p className="text-gray-700 mt-3">
                If the conflict is repeating a lot: go to Chain Analysis → /chain-analysis and Solution Analysis → /solution-analysis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                5) If repair doesn't work
              </h2>
              <p className="text-gray-700 mb-3">If they won't engage, or it keeps escalating:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Pause the conversation ("I'm taking space so I don't make it worse.")</li>
                <li>Use regulation + reality acceptance</li>
                <li>Re-approach later with a clearer request</li>
              </ul>
              <p className="text-gray-700 mt-3 font-semibold">
                You can't repair a relationship alone—but you can stop adding harm and plan better next time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-800">
                FAQs
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Do I have to apologize?</p>
                  <p className="text-gray-700 ml-4">
                    If you harmed someone, yes—briefly. If you're being pressured to apologize for having needs or boundaries, that's different.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if I'm the one who was hurt?</p>
                  <p className="text-gray-700 ml-4">
                    Repair can still include your boundary: "I'm open to talking when it's respectful."
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if it was a meltdown/shutdown?</p>
                  <p className="text-gray-700 ml-4">
                    That still gets accountability ("I disappeared / I snapped"), plus a plan that reduces overload next time → <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">/neurodivergent/overload</Link>.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-green-300">
              <h2 className="text-xl font-semibold mb-4 text-green-800">
                Related Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => router.push('/pages/distress-tolerance/tipp')}
                  className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  TIPP
                </button>
                <button
                  onClick={() => router.push('/pages/distress-tolerance/stop')}
                  className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  STOP
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/validation-levels')}
                  className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Validation Levels
                </button>
                <button
                  onClick={() => router.push('/pages/interpersonal-skills/boundaries')}
                  className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Boundaries
                </button>
                <button
                  onClick={() => router.push('/pages/neurodivergent/overload')}
                  className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Neurodivergent Overload
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
