'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CrisisPlanPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Create a Crisis Plan
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                A crisis plan (sometimes called a safety plan) is a short, written guide you can follow when you're overwhelmed, triggered, or at risk of acting on urges. The most widely used format is the Stanley–Brown Safety Plan, which includes: warning signs, coping strategies, people/places for distraction, people to ask for help, professionals/agencies, and making your environment safer.
              </p>
              <p className="text-gray-700 mb-4">
                This page helps you build a plan that fits your brain—especially if you're neurodivergent—by making it low-effort, scriptable, and easy to share.
              </p>
              <div className="p-4 bg-red-50 rounded border border-red-200">
                <p className="text-gray-700 font-medium">
                  If you're in immediate danger or you might act in the next few minutes: call/text/chat <Link href="/pages/crisis-help-now" className="text-red-600 hover:text-red-800 underline font-semibold">988</Link> (U.S.) or your local emergency number first.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) What a crisis plan is (and isn't)
              </h2>
              <div className="mb-4">
                <p className="text-gray-700 font-semibold mb-2">It is:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>a "when I'm not okay" map</li>
                  <li>a list of next steps you can do even with low capacity</li>
                  <li>a way to make help easier to ask for</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-700 font-semibold mb-2">It isn't:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>a promise you'll handle everything alone</li>
                  <li>a test of willpower</li>
                  <li>a perfect document (messy is fine—usable is the goal)</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4 italic">
                Safety plans are meant to be simple and reachable in the moment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) The one-page template
              </h2>
              <p className="text-gray-700 mb-4">
                Copy/paste and fill in later:
              </p>

              <div className="bg-gray-50 p-6 rounded border border-gray-200 space-y-4 font-mono text-sm">
                <div>
                  <p className="font-semibold mb-2">A) I know I'm triggered / heading toward crisis when:</p>
                  <p className="text-gray-600 text-xs mb-1">(Thoughts, images, moods, situations, behaviors—pick 3–8.)</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>_______________</li>
                    <li>_______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">B) What I'll do first (internal coping)</p>
                  <p className="text-gray-600 text-xs mb-1">(Things I can do without contacting anyone.)</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>_______________</li>
                    <li>_______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">C) Distraction people & places</p>
                  <p className="text-gray-600 text-xs mb-1">(Who/where helps me ride out the wave.)</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>_______________</li>
                    <li>_______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">D) People I can ask for help</p>
                  <p className="text-gray-600 text-xs mb-1">(Include what I'll say + what I'm asking for.)</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>_______________</li>
                    <li>_______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">E) Professionals & emergency resources</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>988 (call/text/chat)</li>
                    <li>local crisis line / mobile crisis (if you have it)</li>
                    <li>therapist / prescriber / clinic: _______________</li>
                    <li>nearest ER / urgent care: _______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">F) Make my environment safer</p>
                  <p className="text-gray-600 text-xs mb-1">(2–5 steps that reduce risk today.)</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>_______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">G) Reasons to stay safe (even small ones)</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) "I know I'm triggered when…" ideas
              </h2>
              <p className="text-gray-700 mb-4">
                Pick the ones that actually fit you. Warning signs can be mental, physical, behavioral, or situational.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Body / nervous system
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>chest tightness, jaw clenching, shaking, nausea</li>
                    <li>"wired" or "heavy"</li>
                    <li>sensory sensitivity spikes (sound/light/touch feels unbearable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Thoughts / urges
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"I can't do this" loops</li>
                    <li>urges to self-harm / use / binge / lash out / disappear</li>
                    <li>rehearsing worst-case scenarios</li>
                    <li>feeling trapped, ashamed, or like a burden</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Behavior changes
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>not eating / not sleeping</li>
                    <li>isolating, not replying, doom-scrolling</li>
                    <li>impulsive spending</li>
                    <li>escalating conflict or "testing" people</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Situations that reliably spike risk
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>anniversaries, reminders, rejection</li>
                    <li>after conflict</li>
                    <li>being hungry + tired + overstimulated (the "H.A.L.T." pattern)</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-700">
                    <strong>Neurodivergent-friendly tip:</strong> include sensory + transition warning signs (crowds, sudden schedule changes, masking fatigue, task switching).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Ways to distract yourself (without "white-knuckling")
              </h2>
              <p className="text-gray-700 mb-4">
                In a safety plan, distraction isn't avoidance—it's buying time until the intensity drops. The Stanley–Brown approach includes "internal coping strategies" and "people/places that provide distraction."
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    2–5 minute "micro-distractions"
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>cold water on face / hold an ice pack (<Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>-style)</li>
                    <li><Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">paced breathing</Link> (counted exhales)</li>
                    <li>shower, brush teeth, change clothes</li>
                    <li>step outside and name 5 things you see</li>
                    <li>one song with headphones</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    10–30 minute "wave breakers"
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>walk with a podcast</li>
                    <li>simple game (Tetris, puzzle, cozy game)</li>
                    <li>clean one small surface</li>
                    <li>organize a single drawer</li>
                    <li>make tea + sit with a blanket</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Sensory-safe distractions (great for neurodivergence)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>weighted blanket / pressure</li>
                    <li>low light + sunglasses indoors</li>
                    <li>earplugs/noise-canceling</li>
                    <li>stim/fidget tools</li>
                    <li>predictable media (same show, same playlist)</li>
                  </ul>
                </div>

                <p className="text-gray-700 font-medium p-4 bg-yellow-50 rounded border border-yellow-200">
                  Rule: pick distractions that don't add shame later.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Identify "safe people" by type of support
              </h2>
              <p className="text-gray-700 mb-4">
                Most plans fail because they list names but not what each person is good for. Use categories so you know who to contact when your brain is foggy.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    1) The Distract Buddy
                  </h3>
                  <p className="text-gray-700 mb-1"><strong>Best for:</strong> riding out intensity, being less alone</p>
                  <p className="text-gray-700 italic"><strong>Ask:</strong> "Can you stay on the phone for 10 minutes while I calm down?"</p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    2) The Practical Helper
                  </h3>
                  <p className="text-gray-700 mb-1"><strong>Best for:</strong> tasks that feel impossible (food, calls, rides, paperwork)</p>
                  <p className="text-gray-700 italic"><strong>Ask:</strong> "Can you help me order food / make one call / sit with me while I do it?"</p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    3) The Emotional Support Person
                  </h3>
                  <p className="text-gray-700 mb-1"><strong>Best for:</strong> validation, gentle reality-check, reassurance</p>
                  <p className="text-gray-700 italic"><strong>Ask:</strong> "I don't need solutions—can you just listen and remind me I'm not alone?"</p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    4) The Safety/Accountability Person
                  </h3>
                  <p className="text-gray-700 mb-1"><strong>Best for:</strong> when urges are high and you need a firm plan</p>
                  <p className="text-gray-700 italic"><strong>Ask:</strong> "I'm not safe alone right now. Can we make a plan for the next hour?"</p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    5) The Professional / Crisis Resource
                  </h3>
                  <p className="text-gray-700 mb-1"><strong>Best for:</strong> high risk, repeated crises, unclear safety</p>
                  <p className="text-gray-700"><strong>Put:</strong> therapist/clinic, local mobile crisis, 988, ER</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Scripts you can copy/paste
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    "I need distraction"
                  </h3>
                  <p className="text-gray-700 italic">
                    "Hey, I'm having a rough spike. Can you talk for 10 minutes or send memes? I just need to ride this out."
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    "I need practical help"
                  </h3>
                  <p className="text-gray-700 italic">
                    "My capacity is gone. Can you help me with one concrete thing: food / a phone call / a ride / sitting with me while I do dishes?"
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    "I need safety help"
                  </h3>
                  <p className="text-gray-700 italic">
                    "I'm having strong urges and I don't want to act on them. Can you stay with me while I contact 988 / make a plan for tonight?"
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    "I can't talk much"
                  </h3>
                  <p className="text-gray-700 italic">
                    "I'm in shutdown. Please ask yes/no questions only. Texting is easiest."
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <p className="text-gray-700">
                    <strong>Neurodivergent option:</strong> add a "communication mode" line to your plan:<br />
                    ✅ text / ❌ phone / ✅ short voice note / ❌ big discussions
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Make your environment safer
              </h2>
              <p className="text-gray-700 mb-4">
                A key step in evidence-based safety plans is writing a short plan to make your environment safer—often described as reducing access to items or situations that increase danger and adding protective supports.
              </p>
              <p className="text-gray-700 mb-3">
                Keep it practical and immediate (today/tonight), for example:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li>move to a more public/common space (living room, coffee shop)</li>
                <li>ask someone to stay with you or do a check-in schedule</li>
                <li>reduce substances in the environment (or avoid being alone with them)</li>
                <li>put distance between you and anything you know increases risk (store away, hand to someone you trust, or change the setting)</li>
              </ul>
              <p className="text-gray-700 italic">
                If you're making any big safety changes, doing it with another person is often easier and safer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) "Which site skills work best for me?" checklist
              </h2>
              <p className="text-gray-700 mb-4">
                Your crisis plan should point to the exact skills you will use, not a vague list.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Pick 3 "first-line" skills (fast, reliable)
                  </h3>
                  <p className="text-gray-700 mb-2">Examples:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> / cold + paced breathing</li>
                    <li><Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">RAIN</Link></li>
                    <li><Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">Urge Surfing</Link></li>
                    <li>Grounding (5-4-3-2-1)</li>
                    <li>Wise Mind check-in</li>
                    <li><Link href="/pages/emotional-regulation/self-validation" className="text-blue-600 hover:text-blue-800 underline">Self-validation</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Pick 2 "second-line" skills (if the first doesn't work)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link> distraction list</li>
                    <li><Link href="/pages/distress-tolerance/willingness-half-smile" className="text-blue-600 hover:text-blue-800 underline">Half Smile / willing hands</Link></li>
                    <li>short walk + music</li>
                    <li>body scan / progressive muscle relaxation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Choose your "when I'm shut down" version
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>smallest possible steps</li>
                    <li>yes/no prompts</li>
                    <li>one supportive text template</li>
                    <li>one safe sensory setup (dark room + headphones + blanket)</li>
                  </ul>
                </div>

                <p className="text-gray-700 font-medium p-4 bg-yellow-50 rounded border border-yellow-200">
                  Personalization test: If you can't imagine doing it while overwhelmed, it doesn't belong in the crisis plan.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Practice + update (so it works when you need it)
              </h2>
              <p className="text-gray-700 mb-3">
                Safety plans work best when you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>keep it easy to access (phone lock screen note, printed card, wallet)</li>
                <li>share it with at least one safe person</li>
                <li>review it monthly or after a crisis spike</li>
              </ul>
              <p className="text-gray-700 italic">
                Many official templates are designed to be printed and kept handy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                11) Crisis plan "card" (short version)
              </h2>
              <div className="bg-gray-50 p-6 rounded border border-gray-200 font-mono text-sm space-y-3">
                <div>
                  <p className="font-semibold mb-1">I'm triggered when:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>_______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">First 3 actions:</p>
                  <ol className="list-decimal list-inside ml-4">
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                  </ol>
                </div>

                <div>
                  <p className="font-semibold mb-1">Distraction:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>person/place: _______________</li>
                    <li>activity: _______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">Ask for help:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Name (type): _______________</li>
                    <li>Script: _______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">If risk is high:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>988 / local crisis / ER</li>
                    <li>"I am not safe alone right now."</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">Environment safer (today):</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>_______________</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">
                  Crisis Help Now (988)
                </Link>
                <Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">
                  Crisis Skills
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">
                  TIPP
                </Link>
                <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">
                  RAIN Mindfulness
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">
                  Urge Surfing
                </Link>
                <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">
                  ACCEPTS
                </Link>
                <Link href="/pages/self-harm/safety-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Harm Safety Plan
                </Link>
                <Link href="/pages/addiction/sobriety-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Sobriety Plan
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
                <Link href="/pages/chain-analysis" className="text-blue-600 hover:text-blue-800 underline">
                  Chain Analysis
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
