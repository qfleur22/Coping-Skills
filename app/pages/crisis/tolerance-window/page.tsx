'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CrisisToleranceWindowPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Your Window of Tolerance
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            (Crisis Skills)
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                The Window of Tolerance is a simple model (often attributed to Dr. Dan Siegel) that describes your "optimal zone" of nervous-system arousal—where you can think clearly, stay present, and cope with what's happening. When you're inside your window, you can feel emotions without getting hijacked by them. When you get pushed outside your window, you tend to swing into <strong>hyperarousal</strong> (too activated) or <strong>hypoarousal</strong> (too shut down).
              </p>
              
              <p className="text-gray-700 mb-4">
                For many people with trauma histories, this window can become narrower, meaning it takes less stress to tip into panic, rage, numbness, dissociation, or shutdown.
              </p>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 text-sm italic">
                  Note: An infographic illustrating the Window of Tolerance model would typically be displayed here for visual reference.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Why this matters in a crisis
              </h2>

              <p className="text-gray-700 mb-4">
                When you're outside your window, it can feel like:
              </p>

              <div className="p-4 bg-red-50 rounded border border-red-200">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>your body is in danger even if you know you're safe</li>
                  <li>your brain can't problem-solve</li>
                  <li>skills feel impossible</li>
                  <li>you get stuck in "survival mode"</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-green-50 rounded border border-green-200">
                This is why psychoeducation helps: it reduces shame and makes your experience predictable ("Oh, I'm above my window again").
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) The three zones
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Hyperarousal (too much activation)</h3>
                  <p className="text-gray-700 mb-2 font-medium">Common experiences:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>panic/anxiety, anger, overwhelm</li>
                    <li>racing thoughts, hypervigilance</li>
                    <li>urge to fight, run, fix, or argue</li>
                    <li>shaking, restlessness, can't sit still</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Window of Tolerance (regulated enough)</h3>
                  <p className="text-gray-700 mb-2 font-medium">Common experiences:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>present, grounded, flexible</li>
                    <li>can talk, think, and choose</li>
                    <li>emotions feel manageable</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Hypoarousal (too little activation)</h3>
                  <p className="text-gray-700 mb-2 font-medium">Common experiences:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>numb, spaced out, frozen</li>
                    <li>dissociation, "not here," collapse</li>
                    <li>can't speak, can't move, can't care</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) "I'm outside my window" signs
              </h2>

              <p className="text-gray-700 mb-4">
                You don't have to perfectly label it—just notice the pattern.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Hyper clues</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>heart racing, heat, tight jaw</li>
                    <li>urgent thoughts ("now now now")</li>
                    <li>urge to flee, lash out, self-harm, binge, text, use</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Hypo clues</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>heavy body, blank mind</li>
                    <li>slow speech or no words</li>
                    <li>"I don't care," "I can't," or numbness</li>
                    <li>staring, shutdown, disappearing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Getting back inside your window (crisis steps)
              </h2>

              <p className="text-gray-700 mb-4 font-medium">
                When you're dysregulated, start with the body first.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">If you're in hyperarousal (too activated)</h3>
                  <p className="text-gray-700 mb-2">Pick 1–3:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">Temperature</Link> / <Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">Mammalian Diving Reflex</Link> (cold face/ice pack)</li>
                    <li><Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">paced breathing</Link> (if it helps you)</li>
                    <li>intense movement for 30–90 seconds (stairs, wall push-ups, fast walk)</li>
                    <li>reduce input: headphones, dim lights, leave the room</li>
                    <li>short script: "I can't talk right now. I need 20 minutes."</li>
                  </ul>
                  <p className="text-gray-700 mt-3 text-sm italic">
                    (These map closely to "come down" strategies used in Window-of-Tolerance guides and TIPP-style approaches.)
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">If you're in hypoarousal (shut down/freeze)</h3>
                  <p className="text-gray-700 mb-2">Pick 1–3:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>gentle movement (stand, stretch, walk to the sink)</li>
                    <li>temperature change (warm drink, warm shower, hold something warm)</li>
                    <li>orienting: name 5 things you see / 4 touch / 3 hear</li>
                    <li>"micro-connection" if safe: text one person "can you sit with me quietly?"</li>
                    <li>eat/drink something simple</li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-medium">
                    Goal: step-by-step back toward "present enough," not perfect calm.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Crisis reframes
              </h2>

              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-700 font-medium">"This is a nervous-system state, not my personality."</p>
                </div>
                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-700 font-medium">"My job is to return to my window first. Then I can decide what to do."</p>
                </div>
                <div className="p-3 bg-purple-50 rounded border border-purple-200">
                  <p className="text-gray-700 font-medium">"Small stressors feel huge when my window is narrow—and that makes sense."</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Mini worksheet: map your window
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">My hyperarousal looks like:</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Body:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Thoughts:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Urges/actions:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">My window of tolerance looks like:</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Signs I'm regulated:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium mb-1">What helps me stay there:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">My hypoarousal looks like:</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Body:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Thoughts:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Shutdown signs:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">My fastest "back to window" tools:</h3>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded border border-gray-300">
                      <p className="text-gray-300">1) _________________________________</p>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-300">
                      <p className="text-gray-300">2) _________________________________</p>
                    </div>
                    <div className="bg-white p-2 rounded border border-gray-300">
                      <p className="text-gray-300">3) _________________________________</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Use this page with...
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/crisis/plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Crisis Plan</p>
                  <p className="text-gray-600 text-sm">safe people + scripts</p>
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">TIPP</p>
                  <p className="text-gray-600 text-sm">temperature / intense exercise / paced breathing</p>
                </Link>
                <Link href="/pages/distress-tolerance/mammalian-diving" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Mammalian Diving Reflex</p>
                  <p className="text-gray-600 text-sm">cold face regulation</p>
                </Link>
                <Link href="/pages/mindfulness/rain" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">RAIN</p>
                  <p className="text-gray-600 text-sm">after you're back inside window</p>
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Urge Surfing</p>
                  <p className="text-gray-600 text-sm">when urges spike</p>
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Safe Space</p>
                  <p className="text-gray-600 text-sm">reduce sensory load</p>
                </Link>
                <Link href="/pages/neurodivergent/sensory-soothing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Self-Soothing</p>
                  <p className="text-gray-600 text-sm">five senses regulation</p>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/tolerance-window" className="text-blue-600 hover:text-blue-800 underline">
                  Window of Tolerance (Neurodivergent)
                </Link>
                <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">
                  Paced Breathing
                </Link>
                <Link href="/pages/mindfulness/grounding" className="text-blue-600 hover:text-blue-800 underline">
                  Grounding
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
