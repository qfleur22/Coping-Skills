'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function MindfulnessGuidePage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Neurodivergent Mindfulness
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Mindfulness is a foundational skill in Dialectical Behavior Therapy (DBT). It's often described as the "base" skill that supports emotion regulation and distress tolerance—because you can't change what you can't notice. DBT defines mindfulness as bringing attention to the present moment, on purpose, without judgment.
              </p>
              <p className="text-gray-700 mb-3">
                For neurodivergent people, mindfulness can be both useful and complicated:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Attention may be inconsistent (hello Attention-Deficit/Hyperactivity Disorder brain).</li>
                <li>Interoception (noticing internal signals like hunger, thirst, pain, emotions) can be difficult for some autistic folks and ADHDers.</li>
                <li>Some people experience Aphantasia (can't picture mental images), so visualization-based exercises don't land.</li>
                <li>Some breathing-based practices can be uncomfortable, activating, or just… boring.</li>
              </ul>
              <p className="text-gray-700 p-4 bg-blue-50 rounded border border-blue-200 font-medium">
                So this section treats mindfulness as flexible: not "sit still and breathe," but learn how your attention works and build options that fit your nervous system.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What mindfulness is (and isn't)
              </h2>
              <div className="bg-green-50 p-4 rounded border border-green-200 mb-4">
                <p className="text-gray-700 mb-2 font-semibold">Mindfulness is:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>noticing what's happening inside you (thoughts, emotions, body sensations)</li>
                  <li>noticing what's happening around you (sounds, light, people, environment)</li>
                  <li>doing that with a nonjudgmental stance ("this is what's here")</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded border border-red-200">
                <p className="text-gray-700 mb-2 font-semibold">Mindfulness is not:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>emptying your mind</li>
                  <li>forcing calm</li>
                  <li>sitting still with eyes closed</li>
                  <li>doing it the "right" way</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4 italic">
                There's no moral grade. Mindfulness is a skill—attention is something you practice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) What mindfulness can help with
              </h2>
              <p className="text-gray-700 mb-3">
                Mindfulness can support neurodivergent well-being by helping you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>focus and pay attention (train "returning" to the present)</li>
                <li>identify needs (hunger, thirst, pain, rest, sensory load)</li>
                <li>recognize sensory overload earlier</li>
                <li>increase self-awareness</li>
                <li>regulate emotions (notice the rise before the explosion)</li>
                <li>cope with rejection/criticism spirals by noticing the story and returning to facts</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) When to use mindfulness
              </h2>
              <p className="text-gray-700 mb-3">Use mindfulness when you need to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>stop thoughts from spinning</li>
                <li>come back to the present</li>
                <li>check your needs before you melt down or shut down</li>
                <li>make an intentional choice instead of reacting</li>
              </ul>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded border border-yellow-200">
                If you're already in "full crisis," you may need your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> first, and then return to mindfulness once you're safe enough to practice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) DBT mindfulness skills (simple version)
              </h2>
              <p className="text-gray-700 mb-4">
                DBT breaks mindfulness into WHAT skills (what you do) and HOW skills (how you do it):
              </p>

              <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">WHAT skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Observe:</strong> notice sensations/thoughts/emotions without grabbing them</li>
                  <li><strong>Describe:</strong> put words on what you notice (facts, not judgments)</li>
                  <li><strong>Participate:</strong> fully engage in the moment (one thing at a time)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded border border-purple-200 mb-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">HOW skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Nonjudgmentally:</strong> drop "good/bad/should," return to facts</li>
                  <li><strong>One-mindfully:</strong> do one thing at a time</li>
                  <li><strong>Effectively:</strong> do what works (not what's "fair," not what you "should" be able to do)</li>
                </ul>
              </div>

              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200 font-medium">
                Neurodivergent translation: mindfulness is basically "notice → name → choose," with permission to do it in a way your body can tolerate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Neurodivergent-friendly rules for practicing
              </h2>
              <p className="text-gray-700 mb-3">When practicing mindfulness, remember:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You don't have to try everything at once. Pick one skill.</li>
                <li>Don't judge yourself. Let thoughts/emotions/sensations pass with compassion.</li>
                <li>If attention drifts, gently guide it back. Drifting is normal—returning is the rep.</li>
                <li>You don't have to close your eyes. Stare at a spot on the wall/floor if that's easier.</li>
                <li>You can incorporate stimming or movement into mindfulness (rocking, pacing, fidgets).</li>
                <li>If visualization doesn't work (aphantasia), skip it. Use sensory or movement-based mindfulness instead.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) If interoception is hard, start outside your body
              </h2>
              <p className="text-gray-700 mb-4">
                Some autistic and ADHD folks have trouble reading internal signals (hunger, pain, "what emotion is this?"). That's not a personal failure—it's a known neurodivergent experience, and building awareness can include external supports.
              </p>

              <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 mb-3 font-semibold">Try exteroceptive mindfulness first (outside the body):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>sound:</strong> "I hear the fan… distant traffic… my own breathing."</li>
                  <li><strong>sight:</strong> "light on the wall… the texture of fabric… a shadow moving."</li>
                  <li><strong>touch:</strong> "my hands on a blanket… feet in socks."</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="text-gray-700 mb-3 font-semibold">Then add one internal cue (inside the body):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>temperature</li>
                  <li>tension level (0–10)</li>
                  <li>energy level (0–10)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Mindfulness skills in this section
              </h2>
              <p className="text-gray-700 mb-4">
                Use the tools in the rest of this section to explore mindfulness in different ways—especially if breathing/visualization isn't your thing.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">A) Observe Using Your Senses</h3>
                  <p className="text-gray-700 mb-2"><strong>When you might use it:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
                    <li>when you need to stop thoughts from spinning</li>
                    <li>when you need to practice being in the present</li>
                  </ul>
                  <p className="text-gray-700 mb-2"><strong>How:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 ml-4">
                    <li>Name 3 things you see, 2 things you hear, 1 thing you feel physically.</li>
                    <li>Keep it factual: "blue mug," not "ugly mug."</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">B) Mindful Appreciation</h3>
                  <p className="text-gray-700 mb-2"><strong>When you might use it:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
                    <li>when you need a reminder that life includes okay moments too</li>
                    <li>when you need "soft focus" instead of analysis</li>
                  </ul>
                  <p className="text-gray-700 mb-2"><strong>How:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 ml-4">
                    <li>Pick one pleasant/neutral thing (warm drink, sunlight, pet, playlist).</li>
                    <li>Stay with it for 30–60 seconds.</li>
                    <li>Describe what's happening in simple language.</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">C) Self Check-In</h3>
                  <p className="text-gray-700 mb-2"><strong>When you might use it:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 mb-2">
                    <li>when you need to figure out your needs</li>
                    <li>when you're approaching distress/meltdown/shutdown</li>
                  </ul>
                  <p className="text-gray-700 mb-2"><strong>How:</strong></p>
                  <p className="text-gray-700 mb-2 ml-4">Ask (and answer like a checklist, not a dissertation):</p>
                  <ul className="list-disc list-inside text-gray-700 ml-8">
                    <li><strong>Body:</strong> hungry? thirsty? tired? pain? need bathroom?</li>
                    <li><strong>Sensory:</strong> too loud/bright/itchy/hot? need pressure/movement/quiet?</li>
                    <li><strong>Emotion:</strong> what's the strongest feeling (even if it's just "bad")?</li>
                    <li><strong>Next step:</strong> what's the smallest supportive action?</li>
                  </ul>
                  <p className="text-gray-700 mt-2 ml-4">
                    See also: <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link> — self check-in → choose an accommodation.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Micro-mindfulness options (no sitting still required)
              </h2>
              <p className="text-gray-700 mb-3">Pick one for 1–3 minutes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Mindful stimming:</strong> fidget/rock/pacing while noticing how it changes your body (more calm? more alert?).</li>
                <li><strong>Mindful movement:</strong> slow walk, stretch, or sway while naming sensations ("feet… shift… pressure…").</li>
                <li><strong>One-mindful task:</strong> wash one dish, make tea, fold one shirt with full attention.</li>
                <li><strong>Sound anchor:</strong> listen for the quietest sound you can detect, then the loudest.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Pair mindfulness with your other site skills
              </h2>
              <p className="text-gray-700 mb-3">Mindfulness works best when it's a doorway into something else:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>If you notice a big emotion wave → use <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">RAIN</Link> (Recognize/Allow/Investigate/Nurture).</li>
                <li>If you notice an urge spike → use <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">Urge Surfing</Link>.</li>
                <li>If you notice overload building → use <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">Sensory Safe Space</Link> / sensory tools.</li>
                <li>If you notice danger signs → use your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> (scripts + safe people).</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                10) Reminder
              </h2>
              <p className="text-gray-700 mb-4 font-medium">
                There's no single "right" mindfulness practice.
              </p>
              <p className="text-gray-700 text-lg">
                The most neurodivergent-friendly definition is:
                <br />
                <span className="font-semibold">Mindfulness is noticing what's happening, in a way your nervous system can tolerate, so you can choose what helps.</span>
              </p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/mindfulness" className="text-blue-600 hover:text-blue-800 underline">
                  Accessible Mindfulness Exercises
                </Link>
                <Link href="/pages/mindfulness/mindfulness" className="text-blue-600 hover:text-blue-800 underline">
                  Mindfulness Overview
                </Link>
                <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">
                  RAIN Mindfulness
                </Link>
                <Link href="/pages/mindfulness/wise-mind/wise-mind" className="text-blue-600 hover:text-blue-800 underline">
                  Wise Mind
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">
                  Urge Surfing
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">
                  Sensory Safe Space
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
                <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">
                  Crisis Plan
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
