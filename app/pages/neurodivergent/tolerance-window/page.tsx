'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function NeurodivergentToleranceWindowPage() {
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
            (Neurodivergent Skills)
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                The Window of Tolerance is a way to understand regulation: the "zone" where you can feel emotions and still stay present, think clearly, and function. It's often attributed to Dr. Dan Siegel, and it's widely used in trauma-informed care.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 mb-3">
                  For neurodivergent people—especially autistic folks—your window can be affected by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>sensory load (noise/light/textures/crowds)</li>
                  <li>masking and social effort</li>
                  <li>executive function demand</li>
                  <li>changes in routine and transitions</li>
                  <li>burnout and cumulative stress</li>
                </ul>
              </div>

              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200 font-medium">
                This page helps you recognize your signs, build accommodations, and return to regulation without shame.
              </p>

              <div className="p-4 bg-purple-50 rounded border border-purple-200 mt-4">
                <p className="text-gray-700 text-sm italic">
                  Note: An infographic illustrating the Window of Tolerance model would typically be displayed here for visual reference.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) The three zones (neurodivergent translation)
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Hyperarousal (too much)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>fight/flight energy</li>
                    <li>anxiety/panic, fear</li>
                    <li>racing thoughts, reactive emotions</li>
                    <li>shaking, can't keep still</li>
                    <li>defensiveness, agitation</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Window of tolerance (regulated enough)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>feeling safe enough</li>
                    <li>calm enough to think</li>
                    <li>can self-soothe and make choices</li>
                    <li>insight + awareness</li>
                    <li>present with emotions</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Hypoarousal (too little)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>dissociation, numbness</li>
                    <li>withdrawn, disconnected</li>
                    <li>shutdown, fatigue</li>
                    <li>"can't think / can't speak"</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 text-sm italic">
                These descriptions match how Window-of-Tolerance guides commonly outline hyper vs hypo states.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Why neurodivergent people can tip faster
              </h2>

              <p className="text-gray-700 mb-4 p-4 bg-yellow-50 rounded border border-yellow-200 font-medium">
                Your nervous system isn't "too sensitive" as a character flaw—it's responding to load.
              </p>

              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-gray-700 mb-3 font-semibold">Common "load stacks":</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>sensory overload + hunger + social demand</li>
                  <li>transitions + time pressure + uncertainty</li>
                  <li>masking all day + one unexpected conflict</li>
                  <li>burnout reducing your buffer</li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  When your buffer is smaller, the same event can push you out of your window more easily.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Signs you're leaving your window
              </h2>

              <div className="p-4 bg-red-50 rounded border border-red-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Early warning signs (often missed)</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>"everything feels too loud/bright"</li>
                  <li>irritability, snapping, or panic spikes</li>
                  <li>harder to speak or find words</li>
                  <li>urge to escape, pace, stim more</li>
                  <li>difficulty making decisions</li>
                  <li>body tension rising (jaw, shoulders, stomach)</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  <strong>Neurodivergent note:</strong> sometimes the first sign is behavior, not emotion words—especially if you experience <Link href="/pages/neurodivergent/alexithymia" className="text-blue-600 hover:text-blue-800 underline">alexithymia</Link>.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Accommodations that widen your window
              </h2>

              <p className="text-gray-700 mb-4 text-lg font-medium">
                Think: reduce load + increase support.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Sensory accommodations</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>noise-canceling headphones / earplugs</li>
                    <li>sunglasses / hat / hood</li>
                    <li>comfortable textures, remove "itchy" items</li>
                    <li>predictable lighting (lamps instead of overhead)</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    See also: <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">Sensory Safe Space</Link>, <Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:text-blue-800 underline">Sensory Self-Soothing</Link>
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Demand accommodations</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>fewer decisions (checklists, defaults)</li>
                    <li>transition buffers (10–30 minutes between tasks)</li>
                    <li>written instructions instead of verbal</li>
                    <li>permission to leave early / take breaks</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Body accommodations</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>hydration + safe food access</li>
                    <li>rest windows</li>
                    <li>pressure tools (weighted blanket, compression, pillows)</li>
                    <li>movement breaks / stimming breaks</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    See also: <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:text-blue-800 underline">Stims & Special Interests</Link>, <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) "Moving Toward the Window" plan
              </h2>

              <p className="text-gray-700 mb-4 font-medium">
                Instead of "calm down," try: one step toward regulation.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">If you're in hyperarousal</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>reduce input first (quiet, dark, fewer words)</li>
                    <li>temperature tools (<Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">ice pack/cold face</Link>)</li>
                    <li>movement/stimming to discharge energy</li>
                    <li>short scripts, no processing yet</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    See also: <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:text-blue-800 underline">Managing Meltdowns</Link>
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">If you're in hypoarousal</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>gentle movement + warmth</li>
                    <li>grounding through senses (orienting)</li>
                    <li>tiny task: drink water, stand up, change rooms</li>
                    <li>low-demand connection: sit near someone safe</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 text-sm italic">
                This "stepwise return" approach is common in Window-of-Tolerance skillsheets.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Your window map (worksheet)
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">HYPERAROUSAL — Write down the signs you notice</h3>
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
                    <div>
                      <p className="text-gray-700 font-medium mb-1">Sensory triggers that push me here:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">ZONE OF TOLERANCE — Write down the signs you notice</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-700 font-medium mb-1">What regulated feels like for me:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium mb-1">What helps me stay here:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium mb-1">What support/accommodations keep me here:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">HYPOAROUSAL — Write down the signs you notice</h3>
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
                    <div>
                      <p className="text-gray-700 font-medium mb-1">What gently brings me back:</p>
                      <div className="bg-white p-2 rounded border border-gray-300 min-h-[40px]">
                        <p className="text-gray-300">_________________________________</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Burnout changes your window
              </h2>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-gray-700 mb-3">
                  Burnout often means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>less tolerance for sensory input</li>
                  <li>less energy for masking/socializing</li>
                  <li>more shutdown, more "can't access words"</li>
                  <li>fewer coping tools feel available</li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  So your window may feel narrower for a while. The goal becomes: protect capacity, use accommodations earlier, and rebuild slowly.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Use this page with...
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/meltdowns" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Managing Meltdowns</p>
                  <p className="text-gray-600 text-sm">early signs + recovery</p>
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Safe Space</p>
                  <p className="text-gray-600 text-sm">reduce sensory load</p>
                </Link>
                <Link href="/pages/neurodivergent/sensory-soothing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Self-Soothing</p>
                  <p className="text-gray-600 text-sm">five senses regulation</p>
                </Link>
                <Link href="/pages/neurodivergent/mindfulness-guide" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Neurodivergent Mindfulness</p>
                  <p className="text-gray-600 text-sm">observe/describe without judgment</p>
                </Link>
                <Link href="/pages/neurodivergent/alexithymia" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Alexithymia</p>
                  <p className="text-gray-600 text-sm">body-first emotion labeling</p>
                </Link>
                <Link href="/pages/crisis/plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Crisis Plan</p>
                  <p className="text-gray-600 text-sm">if safety is at risk</p>
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Personal Care Plan</p>
                  <p className="text-gray-600 text-sm">daily supports & accommodations</p>
                </Link>
                <Link href="/pages/neurodivergent/stims-special-interests" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Stims & Special Interests</p>
                  <p className="text-gray-600 text-sm">regulation tools</p>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/crisis/tolerance-window" className="text-blue-600 hover:text-blue-800 underline">
                  Window of Tolerance (Crisis)
                </Link>
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Overload Skills Menu
                </Link>
                <Link href="/pages/neurodivergent/emotion-regulation" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Emotion Regulation
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
