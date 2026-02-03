'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function AffirmationsPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Neurodivergent Affirmations
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                It can be hard being neurodivergent in a neurotypical world. Many of us grow up hearing (directly or indirectly) that our needs are "too much," our traits are "wrong," or our coping is "lazy." Affirmations can help interrupt those internalized messages and replace them with something truer, kinder, and more usable.
              </p>
              <p className="text-gray-700 mb-4">
                Affirmations aren't magic. They're practice phrases—a way to rehearse self-respect, self-compassion, and realistic self-talk, especially when shame or overwhelm hits. Self-affirmation practices have been linked to improved well-being and stress buffering in research.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) How to use affirmations (neurodivergent-friendly)
              </h2>
              <p className="text-gray-700 mb-4">
                If traditional affirmations feel fake, you're not doing it wrong. Try one of these formats:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    A) "Permission statements" (gentle + believable)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"It's okay if this is hard."</li>
                    <li>"I can do this in a smaller way."</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    B) "Even if" statements (reduces all-or-nothing thinking)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"Even if I'm behind, I'm still worthy."</li>
                    <li>"Even if I need help, I still deserve care."</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    C) "Noticing" statements (more grounding than positivity)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"My nervous system is activated."</li>
                    <li>"I'm having a shame story."</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    D) One-line + one action
                  </h3>
                  <p className="text-gray-700 mb-2">Pair a phrase with a tiny step:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"I deserve support" → text one safe person</li>
                    <li>"My sensory needs matter" → put on headphones / dim lights</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 font-medium p-4 bg-yellow-50 rounded border border-yellow-200">
                Rule: If a phrase makes you recoil, soften it until your body says "maybe."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Core neurodivergent affirmations
              </h2>
              <p className="text-gray-700 mb-4">
                Use these as your baseline set—especially on ordinary days.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>It's okay if strategies designed for neurotypical people don't work for me.</li>
                <li>My brain works the way it works, and I deserve support that actually fits.</li>
                <li>I do not have to hold myself to neurotypical standards, rules, or timelines.</li>
                <li>My sensory differences are real and valid, and they deserve accommodations.</li>
                <li>I can forget to close cabinets, brush my teeth, and reply to messages and still be worthy.</li>
                <li>Needing reminders, routines, or support is not a moral failure.</li>
                <li>Rest is a need, not a reward.</li>
                <li>I am allowed to stim, fidget, pace, and regulate my body.</li>
                <li>I am allowed to communicate differently (texting, scripts, pauses, reduced eye contact).</li>
                <li>I don't have to hide my traits just because they make other people uncomfortable.</li>
                <li>My needs are not "too much." They are information.</li>
                <li>I can build a life that fits me.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                See also: <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link> (supports + accommodations), <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">Overload & Shutdown</Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) "When I'm behind" affirmations (executive function + shame)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Doing it imperfectly still counts.</li>
                <li>Starting small is still starting.</li>
                <li>I can do one step, then stop.</li>
                <li>I don't need the perfect system—I need a workable one.</li>
                <li>My pace is allowed to change.</li>
                <li>I am allowed to ask for help with daily living.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pair with: <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link> (daily living, eating, finances) and "Minimum Version" routines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Sensory affirmations
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>My sensory limits are real, even if other people don't understand them.</li>
                <li>I'm allowed to reduce sensory input (earplugs, sunglasses, quiet, predictable space).</li>
                <li>I can leave early. I can say no. I can take breaks.</li>
                <li>Comfort is not weakness—it's regulation.</li>
                <li>I deserve spaces that don't hurt my body.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pair with: <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> (environment changes), <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link>/grounding tools, and Sensory Toolkit sections in <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Communication + relationship affirmations
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>I am allowed to ask for clarity and directness.</li>
                <li>I am allowed to ask for reassurance.</li>
                <li>I am allowed to communicate in ways that work for me (text &gt; calls, scripts, pauses).</li>
                <li>My boundaries do not make me "difficult."</li>
                <li>I don't need to earn being treated with respect.</li>
                <li>I can repair, apologize, and still be worthy.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pair with: <Link href="/pages/interpersonal-skills/interpersonal-skills" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Effectiveness</Link>, plus <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">Care Plan</Link> communication section.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Rejection sensitivity affirmations (RSD-style support)
              </h2>
              <p className="text-gray-700 mb-4">
                Many neurodivergent people describe intense pain around criticism, perceived rejection, or failure. You may see this called Rejection Sensitive Dysphoria (RSD), especially in ADHD spaces. Important context: RSD is not an official DSM-5 diagnosis, and reputable medical sources note limited research and inconsistent clinical definition—while still acknowledging that the experience people describe is real and common.
              </p>
              <p className="text-gray-700 mb-3">
                These affirmations are designed to interrupt the "I'm not good enough / I'm unlovable" spiral:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>People disagreeing with me does not mean my lived experience is invalid.</li>
                <li>A tone, delay, or short message is not proof of rejection.</li>
                <li>Feeling rejected is a feeling—not a fact.</li>
                <li>I am allowed to ask for reassurance and I am worthy of time and care.</li>
                <li>I am allowed to ask questions and request clarity to feel safe and grounded.</li>
                <li>Some people won't like me no matter what—and that is not a measurement of my value.</li>
                <li>I can be excited about my interests. My passion is valid.</li>
                <li>I decide what thoughts to reject and let pass.</li>
                <li>I can survive this wave of emotion without making a life decision.</li>
                <li>I can pause before I respond.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pair with: <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">RAIN</Link> (Recognize/Allow the emotion), <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">Urge Surfing</Link> (ride the spike), and <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> scripts ("I'm in a rejection spiral; can you reality-check with me?").
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) "Reality-based" affirmations for when nothing feels true
              </h2>
              <p className="text-gray-700 mb-3">
                If you're deep in shutdown, meltdown, or shame, use the smallest, most factual phrases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>I'm having a hard moment.</li>
                <li>My nervous system is activated.</li>
                <li>This is temporary, even if it's intense.</li>
                <li>I can do the next right step.</li>
                <li>I can ask for help.</li>
                <li>I don't have to solve everything today.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Pair with: <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> (first steps + safe people), grounding tools, and "minimum care" routines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Build your personal affirmation set
              </h2>
              <p className="text-gray-700 mb-3">
                Pick 3 affirmations for each category:
              </p>

              <div className="bg-gray-50 p-6 rounded border border-gray-200 space-y-4">
                <div>
                  <p className="font-semibold mb-2 text-gray-800">Daily baseline (Green):</p>
                  <ol className="list-decimal list-inside ml-4 text-gray-700 space-y-1">
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                  </ol>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-gray-800">Overwhelm / shutdown (Yellow/Red):</p>
                  <ol className="list-decimal list-inside ml-4 text-gray-700 space-y-1">
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                  </ol>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-gray-800">Rejection spiral (RSD-style):</p>
                  <ol className="list-decimal list-inside ml-4 text-gray-700 space-y-1">
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                  </ol>
                </div>
              </div>

              <p className="text-gray-700 mt-4 mb-2">Then choose where they live:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>phone lock screen</li>
                <li>pinned note</li>
                <li>printed card on your wall</li>
                <li>a "scripts" section in your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) A quick practice (60 seconds)
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Put one hand on your chest or belly.</li>
                <li>Slow exhale.</li>
                <li>Say one affirmation once.</li>
                <li>Ask: "Do I believe this 1%?"</li>
                <li>Take one tiny action that matches it (water, snack, text, headphones, step outside).</li>
              </ol>
              <p className="text-gray-700 mt-4 font-medium text-center">
                Small + repeatable beats "perfect."
              </p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
                <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">
                  Create a Crisis Plan
                </Link>
                <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">
                  RAIN Mindfulness
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">
                  Urge Surfing
                </Link>
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Overload & Shutdown
                </Link>
                <Link href="/pages/interpersonal-skills/interpersonal-skills" className="text-blue-600 hover:text-blue-800 underline">
                  Interpersonal Effectiveness
                </Link>
                <Link href="/pages/emotional-regulation/self-validation" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Validation
                </Link>
                <Link href="/pages/emotional-regulation/self-compassion" className="text-blue-600 hover:text-blue-800 underline">
                  Self-Compassion
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">
                  TIPP
                </Link>
                <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">
                  Sleep Hygiene
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
