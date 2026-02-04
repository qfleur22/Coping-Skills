'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function UrgeSurfingPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Urge Surfing
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                When a powerful urge hits—whether it's to lash out, binge eat, self-harm, drink, use, gamble, scroll, or "escape"—your mind and body can feel hijacked. It's intense. It's physical. And it can feel like you either act right now or you'll explode.
              </p>
              <p className="text-gray-700 mb-4">
                Urge Surfing is a mindfulness-based distress tolerance skill that helps you ride an urge without acting on it. Instead of fighting the urge or trying to erase it, you learn to stay present while it rises, peaks, and falls—like a wave. In relapse-prevention work, this "wave" metaphor is a classic way to relate to cravings and impulses, and the technique is commonly credited to Alan Marlatt's relapse prevention approach.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) The core idea
              </h2>
              <p className="text-gray-700 mb-4">
                An urge is not a command. It's a body-mind event: sensations, thoughts, images, and feelings that push you toward a behavior.
              </p>
              <p className="text-gray-700 mb-3">
                Urge Surfing trains two things:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li><strong>Awareness:</strong> "This is an urge happening."</li>
                <li><strong>Non-action:</strong> "I don't have to feed it."</li>
              </ul>
              <p className="text-gray-700">
                When you don't reinforce the urge with the behavior, it usually loses intensity over time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Understand urges as waves
              </h2>
              <p className="text-gray-700 mb-3">Picture an ocean wave:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>It builds</li>
                <li>It peaks</li>
                <li>It breaks</li>
                <li>It fades</li>
              </ul>
              <p className="text-gray-700">
                Most people act at the peak because it feels unbearable. Urge Surfing is the skill of staying on the "board" long enough to feel the wave shift. The wave may come back later (another set), but no single wave lasts forever.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) 5-minute Urge Surfing practice
              </h2>
              <p className="text-gray-700 mb-4">
                Use this when a real urge hits (or rehearse it during low-stress moments).
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Name the urge (10 seconds)
                </h3>
                <p className="text-gray-700 mb-2">Say (out loud or in your head):</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>"I'm having the urge to ___."</li>
                  <li>"My brain is offering ___ as a solution."</li>
                </ul>
                <p className="text-gray-700 italic">
                  Naming creates a little space between you and the urge.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Track it in your body (60 seconds)
                </h3>
                <p className="text-gray-700 mb-3">
                  Turn toward sensation, not the story.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Notice:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Where is it? (chest, throat, jaw, hands, stomach)</li>
                  <li>What's the texture? (tight, hot, buzzing, restless, heavy)</li>
                  <li>Does it move? pulse? change shape?</li>
                </ul>
                <p className="text-gray-700 italic">
                  Try a neutral tone: "Tightness in my chest… heat in my face…"
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — Breathe and "ride" (2–3 minutes)
                </h3>
                <p className="text-gray-700 mb-3">
                  Keep breathing steady. You're not trying to make the wave stop—you're practicing staying with it.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Visuals that help:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>You're on a surfboard, knees bent, balanced</li>
                  <li>The wave crests… then breaks into foam</li>
                  <li>You stay upright through the peak</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — Add one anchoring phrase (30 seconds)
                </h3>
                <p className="text-gray-700 mb-2">Pick one and repeat it gently:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>"This is a wave. It will pass."</li>
                  <li>"I can feel this without acting."</li>
                  <li>"Urge ≠ action."</li>
                  <li>"Next right choice, not perfect choice."</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5 — Commit to a tiny delay (until timer ends)
                </h3>
                <p className="text-gray-700 mb-3">
                  Set a timer for 2–5 minutes and commit to surfing until it rings.
                </p>
                <p className="text-gray-700 mb-1">
                  If the urge drops: great.
                </p>
                <p className="text-gray-700">
                  If it spikes again: you're still surfing—keep noticing and breathing.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) After the wave: quick reflection
              </h2>
              <p className="text-gray-700 mb-3">
                After the urge passes—or even if you gave in—take 30 seconds:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>What did I notice in my body?</li>
                <li>When did it peak?</li>
                <li>What helped (breath, naming, grounding, self-talk)?</li>
                <li>What's one tweak for next time?</li>
              </ul>
              <p className="text-gray-700 italic">
                This turns every urge into data instead of a verdict.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Real-life example
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">
                Scenario: You feel a sharp urge to text your ex after a memory pops up.
              </p>
              <p className="text-gray-700 mb-2 font-medium">Urge Surfing response:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li><strong>Name:</strong> "I'm having the urge to reconnect."</li>
                <li><strong>Body:</strong> tight chest, buzzing fingers, fast heartbeat</li>
                <li><strong>Surf:</strong> breathe, track sensations, ride the peak</li>
                <li><strong>Phrase:</strong> "This is a wave. It will pass."</li>
              </ul>
              <p className="text-gray-700 mb-3">
                Five minutes later, the intensity drops. You choose to journal or text a friend instead.
              </p>
              <p className="text-gray-700 font-semibold">
                You stayed on the board. That's the win.
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                6) If you're overwhelmed
              </h2>
              <p className="text-gray-700 mb-3">
                Urge Surfing should feel challenging—but not dangerous.
              </p>
              <p className="text-gray-700 mb-2 font-medium">If you're getting flooded:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                <li>Open your eyes, look around, name 5 things you see</li>
                <li>Press feet into the floor</li>
                <li>Switch to a stronger regulation skill (<Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">cold water</Link> / <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">paced breathing</Link> / grounding)</li>
                <li>Try again later with a smaller urge</li>
              </ul>
              <p className="text-gray-700 font-medium">
                If you might act on self-harm or substance urges in the next few minutes, use your <Link href="/pages/crisis" className="text-red-600 hover:text-red-800 underline font-semibold">crisis plan</Link> or reach out for immediate help (in the U.S., the <Link href="/pages/crisis-help-now" className="text-red-600 hover:text-red-800 underline font-semibold">988 Suicide & Crisis Lifeline</Link> is available by call/text/chat).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) FAQs
              </h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-2">Isn't this just distraction?</p>
                  <p className="text-gray-700 ml-4">
                    No. Distraction turns away from the urge. Urge Surfing turns toward it—on purpose—without feeding it with action.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">How is this different from white-knuckling?</p>
                  <p className="text-gray-700 ml-4">
                    White-knuckling is "fight it harder." Urge Surfing is "notice it closely and let it crest." You're observing, not battling.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">What if I still give in?</p>
                  <p className="text-gray-700 ml-4">
                    That's information, not failure. The skill is practice. Review what happened, adjust one variable, and try again.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">Do urges always fade?</p>
                  <p className="text-gray-700 ml-4">
                    A single urge episode rises and falls like a wave, even if new waves come later. Surf the wave you're on.
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">Can I combine this with other DBT skills?</p>
                  <p className="text-gray-700 ml-4 mb-2">
                    Yes—Urge Surfing pairs well with:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-8">
                    <li><Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">paced breathing</Link></li>
                    <li><Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">temperature change (TIPP)</Link></li>
                    <li><Link href="/pages/mindfulness/wise-mind" className="text-blue-600 hover:text-blue-800 underline">Wise Mind</Link> check-ins</li>
                    <li><Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half Smile / willing hands</Link></li>
                    <li><Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link> distraction after you've surfed the peak (if you still need support)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">
                  RAIN Mindfulness
                </Link>
                <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">
                  Conscious Breathing
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">
                  TIPP
                </Link>
                <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">
                  ACCEPTS
                </Link>
                <Link href="/pages/self-harm/urge-now" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Harm Urge Now
                </Link>
                <Link href="/pages/addiction/craving-now" className="text-blue-600 hover:text-blue-800 underline">
                  Craving Now
                </Link>
                <Link href="/pages/chain-analysis" className="text-blue-600 hover:text-blue-800 underline">
                  Chain Analysis
                </Link>
                <Link href="/pages/interpersonal-skills/pros-cons" className="text-blue-600 hover:text-blue-800 underline">
                  Pros & Cons
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
