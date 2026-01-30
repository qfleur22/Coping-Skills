'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ChainAnalysisPage() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-red-800">
            Chain Analysis
          </h1>

          <div className="bg-red-50 backdrop-blur-sm rounded-lg border border-red-200 p-8 shadow-lg space-y-6">
            <div className="bg-red-100 border-2 border-red-400 rounded-lg p-6 mb-4">
              <p className="text-red-900 font-semibold mb-3">
                Are you in immediate danger or at risk of harming yourself or someone else right now?
              </p>
              <button
                onClick={() => router.push('/pages/crisis-help-now')}
                className="w-full px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
              >
                Yes → Go to Crisis Help Now
              </button>
            </div>

            <div>
              <p className="text-gray-700 mb-4">
                A Chain Analysis is a DBT tool for figuring out how you got from "fine-ish" to "I did the thing I regret" (or almost did). It maps the step-by-step sequence around a target behavior—what set it off, what made you vulnerable, what links happened in your body/thoughts/feelings/urges, and what the outcomes were—so you can spot where to interrupt the chain next time.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">
                Use this page when: you want to learn from an escalation, blow-up, shutdown, relapse, self-harm urge, avoidance spiral, or any "how did that happen again?" moment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Before you start (30 seconds)
              </h2>
              <p className="text-gray-700 mb-3">
                Chain analysis works best after the red-alert peak, when you can think even a little.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                Step-by-step DBT Chain (the map)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 1: Pick ONE target behavior (be specific)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Examples:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>"Sent 12 texts in a row" (not "was needy")</li>
                    <li>"Yelled and slammed the door"</li>
                    <li>"Self-harmed / used / binged / dissociated / ghosted / stayed in bed all day"</li>
                  </ul>
                  <p className="text-gray-700 text-sm italic">
                    DBT chain analysis starts with a clearly defined target behavior.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 2: Vulnerabilities (what primed the system)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    These are conditions that made the behavior more likely: sleep debt, hunger, illness, meds missed, sensory overload, conflict exposure, loneliness, caffeine, alcohol, hormones, trauma reminders, etc. (DBT calls these vulnerability factors.)
                  </p>
                  <p className="text-gray-700 mb-2">
                    Links: <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">/abc-please</Link> • <Link href="/pages/sleep-hygiene" className="text-blue-600 hover:text-blue-800 underline">/sleep-hygiene</Link> • <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">/neurodivergent/overload</Link>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 3: Prompting event (the "spark")
                  </h3>
                  <p className="text-gray-700 mb-2">
                    The specific trigger that started the chain rolling—something external or internal (memory, thought, body sensation).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 4: Links (the dominoes, moment-to-moment)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Walk forward in small steps. Include any that apply:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li>Thoughts/images ("They hate me," mental movie, mind-reading)</li>
                    <li>Body (heat, tight chest, numb, buzzing, shutdown)</li>
                    <li>Emotions (fear → shame → anger)</li>
                    <li>Urges (escape, fix, lash out, use, disappear)</li>
                    <li>Actions (scrolling, pacing, arguing, isolating)</li>
                  </ul>
                  <p className="text-gray-700 text-sm italic">
                    DBT explicitly tracks links across thoughts, emotions, physical sensations, actions, and events.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 5: Consequences (short-term + long-term)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                    <li><strong>Short-term:</strong> relief, numbness, someone backed off, conflict ended, dopamine, avoidance worked</li>
                    <li><strong>Long-term:</strong> shame, relationship damage, missed work, more anxiety, more isolation</li>
                  </ul>
                  <p className="text-gray-700 text-sm italic">
                    DBT separates outcomes into short- and long-term consequences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Step 6: Missing links (where skills could have helped)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Look for 1–3 places where a skill could have changed the direction (even 10%). Many DBT worksheets include a "missing links" step—identifying what skill/step wasn't used yet.
                  </p>
                  <p className="text-gray-700 mb-2">
                    Next: go to <Link href="/pages/solution-analysis" className="text-blue-600 hover:text-blue-800 underline">Solution Analysis</Link> to choose what to do differently next time.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                The "1-minute" Chain (when you're tired)
              </h2>
              <p className="text-gray-700 mb-3">
                If you can't do the full map, do this:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Target behavior: ______</li>
                <li>Top vulnerability: ______</li>
                <li>Spark: ______</li>
                <li>Top 2 links: (thought/body/urge) ______ → ______</li>
                <li>Payoff: (short-term relief) ______</li>
                <li>Cost: (long-term) ______</li>
                <li>Insert skill next time at link #__: ______</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                What to do after you map it
              </h2>
              <p className="text-gray-700 mb-3 font-semibold">
                Pick the best next page based on what you find:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Missing basics (sleep/food/meds/illness) → <Link href="/pages/emotional-regulation/abc-please" className="text-blue-600 hover:text-blue-800 underline">/abc-please</Link></li>
                <li>Too activated too fast → <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">/distress-tolerance/tipp</Link> or <Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">/crisis</Link></li>
                <li>Fighting reality / stuck in "no" → <Link href="/pages/distress-tolerance/turning-mind" className="text-blue-600 hover:text-blue-800 underline">/turning-mind</Link> or <Link href="/pages/flowchart/reality-acceptance-hub" className="text-blue-600 hover:text-blue-800 underline">/reality-acceptance-hub</Link></li>
                <li>Relationship rupture → <Link href="/pages/interpersonal-skills/repair" className="text-blue-600 hover:text-blue-800 underline">/interpersonal/repair</Link></li>
                <li>Sensory overload/shutdown/dissociation → <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">/neurodivergent/overload</Link></li>
                <li>Still escalating even with skills → troubleshoot skills</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Then do <Link href="/pages/solution-analysis" className="text-blue-600 hover:text-blue-800 underline">Solution Analysis</Link> (that's where change gets specific).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                FAQs
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Is this just "overthinking what happened"?</p>
                  <p className="text-gray-700 ml-4">No—chain analysis is a functional map: what led to what, step by step, so you can change the sequence. It's meant to be practical and skills-focused.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Do I have to remember everything perfectly?</p>
                  <p className="text-gray-700 ml-4">No. Use your best guess. The goal is spotting repeatable patterns (sleep debt → rejection thought → urgency → texting spiral).</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">When should I NOT do chain analysis?</p>
                  <p className="text-gray-700 ml-4">When you're in immediate danger or at a 9–10 intensity spike. Use <Link href="/pages/crisis-help-now" className="text-blue-600 hover:text-blue-800 underline">/crisis-help-now</Link> or <Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">/crisis</Link> first, then come back.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">What if the chain includes trauma memories and I get flooded?</p>
                  <p className="text-gray-700 ml-4">Go slower, zoom out, and prioritize safety: external grounding, shorter chains, or do it with support. If it spikes you, switch to <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">/neurodivergent/overload</Link> or <Link href="/pages/crisis" className="text-blue-600 hover:text-blue-800 underline">/crisis</Link>.</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-1">Can I do chain analysis for a "good outcome"?</p>
                  <p className="text-gray-700 ml-4">Yes—DBT chain analysis can also be used to understand what helped you succeed, so you can repeat it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <button
          onClick={() => router.push('/pages/solution-analysis')}
          className="px-4 md:px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Solution Analysis
        </button>
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
