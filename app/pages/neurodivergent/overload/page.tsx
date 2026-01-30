'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function NeurodivergentOverloadPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
            Neurodivergent Overload Skills Menu
          </h1>

          <div className="bg-purple-50 backdrop-blur-sm rounded-lg border border-purple-200 p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                This is a fast menu for when your nervous system is overloaded and "regular coping" won't load.
              </p>
              <p className="text-gray-700 font-semibold mb-2">Neurodivergent overload often shows up as:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Meltdown (too much input → high intensity)</li>
                <li>Shutdown (too much input → low energy / can't initiate)</li>
                <li>Dissociation (numb/unreal/detached)</li>
              </ul>
              <p className="text-gray-700 mt-3 text-sm italic">
                Autistic overwhelm can look like meltdowns and shutdowns, often triggered by sensory or emotional overload.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                1) Pick what's happening (best guess)
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">A) Meltdown (flooding / can't stop / everything too loud)</h3>
                <p className="text-gray-700 mb-2">You might notice: panic/rage, crying, heat, pacing, urge to escape.</p>
                <p className="text-gray-700 font-semibold mb-2">Do now (choose 1–2):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Reduce input: dim lights, noise canceling, hoodie/blanket, leave the space</li>
                  <li><Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> (temperature + paced breathing) → <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/tipp</Link></li>
                  <li>Deep pressure / squeeze: weighted blanket, wrap in blanket, pillow hug, wall push</li>
                  <li>Shake it out (30–60 sec) then coherent breathing → <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">/mindfulness/breathing</Link></li>
                </ul>
                <p className="text-gray-700 mt-3 font-semibold text-sm">
                  Goal: bring intensity down 10–20%, not "feel perfect."
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">B) Shutdown (blank / heavy / can't move or start)</h3>
                <p className="text-gray-700 mb-2">You might notice: brain fog, can't speak, stuck in bed/chair, low body signal, "no words."</p>
                <p className="text-gray-700 text-sm italic mb-2">
                  Shutdown is often described as the nervous system going into a freeze/collapse style response.
                </p>
                <p className="text-gray-700 font-semibold mb-2">Do now (choose 1–2):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Make the world smaller: fewer choices, fewer words, less light/sound</li>
                  <li>Micro-step only: "Sit up" → "Feet on floor" → "Drink water"</li>
                  <li>Warmth + pressure: tea, heating pad, blanket burrito</li>
                  <li>Body cue: press feet into floor for 10 seconds; repeat 3 times</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  If you can't initiate: go to <Link href="/pages/self-care" className="text-blue-600 hover:text-blue-800 underline">/self-care</Link> and do the "minimum viable care" list.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">C) Dissociation (unreal / numb / detached)</h3>
                <p className="text-gray-700 mb-2">You might notice: "I'm not here," floaty, time gaps, can't feel your body, distant sound.</p>
                <p className="text-gray-700 font-semibold mb-2">Do now (choose 1–2 grounding skills):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>5–4–3–2–1 senses (see/feel/hear/smell/taste)</li>
                  <li>Orienting: name date/time + 5 objects in the room</li>
                  <li>Cold water: splash face or hold something cold (<Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> temperature)</li>
                  <li>Contact points: feel chair/back/feet; press palms together</li>
                </ul>
                <p className="text-gray-700 mt-3 text-sm italic">
                  If dissociation comes with danger or self-harm risk → <Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">/crisis-help-now</Link>.
                </p>
                <p className="text-gray-700 mt-3 font-semibold">
                  If self-harm urges are present → <Link href="/pages/self-harm/urge-now" className="text-blue-600 hover:text-blue-800 underline">Self-Harm Urges Right Now</Link>
                </p>
                <p className="text-gray-700 mt-3 font-semibold">
                  If cravings/using urges are present → <Link href="/pages/addiction/craving-now" className="text-blue-600 hover:text-blue-800 underline">Cravings Right Now</Link>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">
                2) When you're steadier (next step)
              </h2>
              <p className="text-gray-700 mb-2">After intensity drops:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>If you're safe → return to flow: <Link href="/pages/flowchart/body-check-in" className="text-blue-600 hover:text-blue-800 underline">/flowchart/body-check-in</Link></li>
                <li>If this keeps happening → <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">/sleep-hygiene</Link>, <Link href="/pages/distress-tolerance/nightmare-protocol" className="text-blue-600 hover:text-blue-800 underline">/nightmare-protocol</Link>, and <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">/abc-please</Link></li>
                <li>If shutdown → increased relapse risk: <Link href="/pages/addiction/early-warning" className="text-blue-600 hover:text-blue-800 underline">Early Warning Signs</Link></li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-purple-300">
              <h2 className="text-xl font-semibold mb-4 text-purple-800">
                Related Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => router.push('/pages/distress-tolerance/tipp')}
                  className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  TIPP
                </button>
                <button
                  onClick={() => router.push('/pages/crisis-help-now')}
                  className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Crisis Help Now
                </button>
                <button
                  onClick={() => router.push('/pages/mindfulness/breathing')}
                  className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Breathing
                </button>
                <button
                  onClick={() => router.push('/pages/self-care')}
                  className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Self-Care
                </button>
                <button
                  onClick={() => router.push('/pages/flowchart/body-check-in')}
                  className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                >
                  Body Check-In
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
