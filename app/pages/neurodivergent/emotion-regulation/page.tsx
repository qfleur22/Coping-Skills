'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function NeurodivergentEmotionRegulationPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Neurodivergent Emotion Regulation
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Emotions are not "good" or "bad." They're signals—a whole-body system designed to help you survive, connect, and respond to what matters. In DBT, emotions are treated as useful information even when they're painful or intense. DBT emphasizes that emotions generally serve key functions like motivating action and communicating to (and influencing) others.
              </p>
              <p className="text-gray-700 mb-4">
                For neurodivergent people, emotions can feel extra intense, confusing, or delayed—especially when sensory overload, interoception differences, alexithymia, masking, or rejection sensitivity are in the mix. But the core idea stays the same:
              </p>
              <p className="text-gray-700 p-4 bg-blue-50 rounded border border-blue-200 font-medium text-lg text-center">
                Emotions are messengers. You get to decide what to do with the message.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Emotions have jobs
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Communication</h3>
                  <p className="text-gray-700">
                    Emotions communicate to other people (facial expressions, tone, body language) and to yourself (signals about needs, boundaries, values, threat, connection). DBT highlights communication/influence as a major function of emotions.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Motivation</h3>
                  <p className="text-gray-700">
                    Emotions organize you for action—often fast. DBT teaches that emotions come with action urges that are sometimes biologically "hard-wired," which is why they can feel so compelling.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Information</h3>
                  <p className="text-gray-700">
                    Emotions give information about what's happening: safety/danger, loss, injustice, belonging, rejection, excitement, etc. Listening doesn't mean obeying—just noticing what the signal is saying.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Influence your thoughts and memories</h3>
                  <p className="text-gray-700">
                    Emotion and cognition are tightly linked. It's easier to think anxious thoughts when you're anxious, remember sad memories when you're sad, and interpret neutral events as threatening when you're activated.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Emotions as messengers
              </h2>

              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">The Emotional Triangle</h3>
                <p className="text-gray-700 mb-3">
                  A helpful way to understand emotions is as a triangle of connected systems:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Body</strong> (physical sensations): heart rate, temperature, tension, nausea, energy</li>
                  <li><strong>Mind</strong> (thoughts/memories): interpretations, predictions, shame stories, flashbacks</li>
                  <li><strong>Behavior</strong> (actions/urges): what you want to do right now (yell, hide, text, run, self-soothe, shut down)</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">
                  When you notice clues in any corner (body, mind, behavior), it becomes easier to identify what emotion is present—and what it's trying to communicate.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Phone notification metaphor:</h3>
                <p className="text-gray-700">
                  If you ignore a notification, it keeps buzzing. Emotions are similar: ignored signals often get louder (or show up as shutdown, meltdown, panic, or numbness).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) The DBT "Model of Emotions" (what actually happens)
              </h2>
              <p className="text-gray-700 mb-4">
                DBT teaches that emotions are a process, not a single moment. A classic DBT model includes: a prompting event, interpretation, biological changes, expressions/actions, and aftereffects.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Step 1 — Prompting event</h3>
                  <p className="text-gray-700">
                    This can be external (someone said something, plans changed) or internal (a memory, a thought, sleep deprivation, hunger, sensory overload).
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Step 2 — Interpretation + secondary emotion</h3>
                  <p className="text-gray-700">
                    You interpret the event through your history, beliefs, trauma, RSD patterns, sensory state, etc. Sometimes you get a secondary emotion (e.g., guilt after anger, shame after sadness).
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Step 3 — Physical responses</h3>
                  <p className="text-gray-700">
                    Your body shifts: heart rate, temperature, breathing, muscle tension, stomach, energy, pain sensitivity.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Step 4 — Expression + action urges</h3>
                  <p className="text-gray-700">
                    Your emotion influences what you want to do (fight/escape/freeze/people-please/shut down) and what shows on your face/body/voice.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-green-50 rounded border border-green-200 font-medium">
                This matters because it means: You can intervene at multiple points (interpretation, body response, action urges) instead of trying to "stop the emotion."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Neurodivergent notes: why emotions can feel extra hard
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Interoception differences</h3>
                  <p className="text-gray-700">
                    Interoception is your ability to notice internal body signals (hunger, thirst, tension, heartbeat)—and it's closely tied to emotion awareness. Many autistic people experience interoception differences, which can make emotions harder to identify until they're huge.
                  </p>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Alexithymia overlap</h3>
                  <p className="text-gray-700">
                    Alexithymia (difficulty identifying/describing feelings) has a high overlap with autism in research, which can make it harder to label emotions even when they're intense.
                  </p>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Sensory overload can be the prompting event</h3>
                  <p className="text-gray-700">
                    For autistic folks, sensory input (noise, light, texture, crowds) can trigger intense emotional responses even when nothing "bad" happened socially. That's still valid: your nervous system is responding to load.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 font-medium mb-2">Practical translation:</p>
                <p className="text-gray-700">
                  If you can't name the emotion yet, start with: body → needs → accommodations (water, food, quiet, pressure, exit strategy).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Practice: choose one emotion and map it
              </h2>
              <p className="text-gray-700 mb-4">
                Pick an emotion you've felt recently (anger, fear, sadness, shame, overwhelm, jealousy, joy, etc.), then ask:
              </p>

              <div className="bg-gray-50 p-6 rounded border border-gray-200 space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Body: What sensations do I notice?</p>
                  <p className="ml-4 italic">(tight chest, heat, buzzing, heavy limbs)</p>
                  <div className="ml-4 mt-1">_______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Mind: What thoughts show up?</p>
                  <p className="ml-4 italic">(catastrophizing, "I'm a burden," replaying a conversation)</p>
                  <div className="ml-4 mt-1">_______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Behavior: What's the urge?</p>
                  <p className="ml-4 italic">(run, lash out, text, shut down, binge, self-harm, fix it immediately)</p>
                  <div className="ml-4 mt-1">_______________</div>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-green-50 rounded border border-green-200 font-medium">
                This is emotion regulation in real life: notice → name → choose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) What to do with the message
              </h2>
              <p className="text-gray-700 mb-4">
                Once you've identified the signal, choose a response based on your goal:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">If the emotion is giving you useful information</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Ask: "What is this emotion protecting?"</li>
                    <li>Ask: "What need or boundary is here?"</li>
                    <li>Take a <Link href="/pages/interpersonal-skills/values" className="text-blue-600 hover:text-blue-800 underline">values</Link>-aligned action (tiny is fine).</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">If the emotion doesn't fit the facts (or is too intense for the situation)</h3>
                  <p className="text-gray-700">
                    DBT often teaches you to check whether your emotion fits the facts and adjust your response. "<Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>" specifically targets the idea that many emotions are driven by interpretations, not the event itself.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">If the body is too activated to think</h3>
                  <p className="text-gray-700">
                    Use body-based distress tolerance first (<Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>/<Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">temperature</Link>, <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">paced breathing</Link>, <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">sensory safe space</Link>), then come back to meaning-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Use this with...
              </h2>
              <p className="text-gray-700 mb-4">
                Emotion regulation works best when paired with other skills:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/mindfulness-guide" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Neurodivergent Mindfulness</p>
                  <p className="text-gray-600 text-sm">observe/describe without judgment</p>
                </Link>
                <Link href="/pages/mindfulness/rain" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">RAIN</p>
                  <p className="text-gray-600 text-sm">recognize/allow/investigate/nurture</p>
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Urge Surfing</p>
                  <p className="text-gray-600 text-sm">ride action urges without acting</p>
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">TIPP</p>
                  <p className="text-gray-600 text-sm">fast body downshift</p>
                </Link>
                <Link href="/pages/distress-tolerance/mammalian-diving" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Mammalian Diving Reflex</p>
                  <p className="text-gray-600 text-sm">temperature regulation</p>
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Safe Space</p>
                  <p className="text-gray-600 text-sm">reduce sensory load</p>
                </Link>
                <Link href="/pages/neurodivergent/sensory-soothing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Self-Soothing</p>
                  <p className="text-gray-600 text-sm">five senses regulation</p>
                </Link>
                <Link href="/pages/neurodivergent/meltdowns" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Managing Meltdowns</p>
                  <p className="text-gray-600 text-sm">if you're in rumble stage</p>
                </Link>
                <Link href="/pages/crisis/plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Crisis Plan</p>
                  <p className="text-gray-600 text-sm">if safety is at risk</p>
                </Link>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Tiny reminder
              </h2>
              <p className="text-gray-700 text-lg font-medium text-center mb-4">
                Emotions are messages—not orders.
              </p>
              <div className="space-y-2 text-gray-700">
                <p>You don't have to like the emotion.</p>
                <p>You don't have to obey the urge.</p>
                <p>You just have to notice the signal and choose what's effective next.</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/emotional-regulation/emotional-regulation" className="text-blue-600 hover:text-blue-800 underline">
                  Emotional Regulation Overview
                </Link>
                <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">
                  Check the Facts
                </Link>
                <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">
                  Opposite Action
                </Link>
                <Link href="/pages/interpersonal-skills/values" className="text-blue-600 hover:text-blue-800 underline">
                  Find Your Values
                </Link>
                <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Affirmations
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
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
