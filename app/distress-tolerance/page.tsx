'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { NextButton } from '@/components/shared/NextButton';

export default function DistressTolerancePage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            I would like to practice Distress Tolerance
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-4">
                Use Distress Tolerance when emotions feel too big right now and you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>can't fix the problem immediately,</li>
                <li>and you can't afford to make things worse.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The goal is not "feel great." The goal is: get through the next minutes safely, then come back to problem-solving later.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1 — Quick check (10 seconds)
              </h2>
              <p className="text-gray-700 mb-3">Pick one:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Crisis level (0–10): ____</li>
                <li>Urge: "I want to ____."</li>
              </ul>
              <p className="text-gray-700 mt-4">
                If your urge includes harming yourself or someone else, jump to Step 2 (STOP) first.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — STOP (1 minute)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>S — Stop:</strong> Freeze for a moment. Don't react yet.</li>
                <li><strong>T — Take a step back:</strong> Physically step back or mentally pause.</li>
                <li><strong>O — Observe:</strong> Notice what's happening (emotion, thoughts, body cues, urges).</li>
                <li><strong>P — Proceed mindfully:</strong> Choose the next right step (not the fastest one).</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Now choose one tool below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3 — TIPP (2–5 minutes)
              </h2>
              <p className="text-gray-700 mb-4">
                Use TIPP when your body feels "revved up" (panic, rage, intense anxiety). TIPP targets your physiology so your mind can catch up.
              </p>
              <p className="text-gray-700 mb-3">Pick one (or do two):</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>T — Temperature (30–60 seconds)</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Splash cold water on your face or hold something cold to your cheeks/eyes.</li>
                  </ul>
                </li>
                <li><strong>I — Intense exercise (30–90 seconds)</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Do jumping jacks, brisk stairs, or a fast walk in place until you feel a shift.</li>
                  </ul>
                </li>
                <li><strong>P — Paced breathing (1–2 minutes)</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Breathe out slower than you breathe in (example: 5 in, 7 out).</li>
                  </ul>
                </li>
                <li><strong>P — Paired muscle relaxation (1–2 minutes)</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Gently tense muscles on the inhale, relax on the exhale, notice the difference.</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">Then re-rate: distress 0–10 = ____</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4 — ACCEPTS (5–15 minutes)
              </h2>
              <p className="text-gray-700 mb-4">
                Use ACCEPTS to get through the moment when you can't solve the problem right now.
              </p>
              <p className="text-gray-700 mb-3">Pick one letter:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>A — Activities:</strong> do something absorbing (shower, clean a corner, game, walk).</li>
                <li><strong>C — Contributing:</strong> small help (text support, tidy shared space, kind act).</li>
                <li><strong>C — Comparisons:</strong> remember times you survived hard moments before.</li>
                <li><strong>E — Emotions (opposite):</strong> watch/listen to something that shifts mood.</li>
                <li><strong>P — Pushing away:</strong> set it on a "mental shelf" for 10 minutes.</li>
                <li><strong>T — Thoughts:</strong> do a different mental task (count backward, puzzle).</li>
                <li><strong>S — Sensations:</strong> safe strong sensation (mint, cold drink, textured object).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 5 — Self-soothe with the 5 senses (3–10 minutes)
              </h2>
              <p className="text-gray-700 mb-4">
                Self-soothing means using sight, sound, touch, smell, taste to comfort your nervous system.
              </p>
              <p className="text-gray-700 mb-3">Pick one sense:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Sight:</strong> candle, calming image, nature view.</li>
                <li><strong>Sound:</strong> music, white noise, calming playlist.</li>
                <li><strong>Touch:</strong> warm blanket, soft fabric, shower.</li>
                <li><strong>Smell:</strong> tea, lotion, essential scent you like.</li>
                <li><strong>Taste:</strong> warm drink, mint, something comforting.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 6 — Return to the next best skill (10 seconds)
              </h2>
              <p className="text-gray-700 mb-3">When distress drops even a little:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>If the problem is still there → go to <a href="/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</a>.</li>
                <li>If the emotion fits facts but is intense → <a href="/regulate" className="text-blue-600 hover:text-blue-800 underline">Emotion Regulation</a> tools.</li>
                <li>If it's about another person → <a href="/interpersonal-skills" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Skills</a>.</li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm italic">
                (DBT teaches distress tolerance as "survive the moment" skills so you can do the next effective thing.)
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
        <button
          onClick={() => router.push('/regulate')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Regulation
        </button>
        <button
          onClick={() => router.push('/landing-page')}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing Page
        </button>
      </div>
    </div>
  );
}
