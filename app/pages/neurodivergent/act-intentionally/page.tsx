'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function ActIntentionallyPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Act Intentionally
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            (Neurodivergent-friendly "Act Opposite" alternative)
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                You may have heard of DBT's <strong>Opposite Action</strong> (sometimes called "Act Opposite"). It's a skill used when an emotion (or the intensity of it) doesn't fit the facts, and following the emotion urge would make things worse. The idea is: do the opposite of the action urge to change the emotion over time.
              </p>
              
              <div className="p-4 bg-yellow-50 rounded border border-yellow-200 mb-4">
                <p className="text-gray-700 mb-3">
                  As a neurodivergent person, "do the opposite" can feel confusing or invalidating:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Sometimes you can't tell what the "opposite" is.</li>
                  <li>Sometimes the urge does make sense (it's sensory, trauma, or survival-based).</li>
                  <li>Sometimes you need a safer version of the urge, not the opposite.</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-4">
                <p className="text-gray-700 mb-3 text-lg font-semibold">So let's rename it:</p>
                <p className="text-gray-700 text-xl font-bold mb-3">
                  Act Intentionally = choosing an effective response on purpose.
                </p>
                <p className="text-gray-700">
                  Not "fight your feelings." Not "be logical." Just: <strong>choose what helps.</strong>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) The idea: emotions come with urges
              </h2>

              <p className="text-gray-700 mb-4">
                Remember: <Link href="/pages/neurodivergent/emotion-regulation" className="text-blue-600 hover:text-blue-800 underline">emotions are messengers</Link>, and they often come with an action urge.
              </p>

              <div className="p-4 bg-green-50 rounded border border-green-200">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Anger</strong> → urge to yell, slam, throw, argue</li>
                  <li><strong>Sadness</strong> → urge to isolate, hide, sleep, withdraw</li>
                  <li><strong>Fear/anxiety</strong> → urge to avoid, escape, freeze, seek certainty</li>
                  <li><strong>Shame</strong> → urge to disappear, people-please, explain yourself, self-attack</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Sometimes the urge fits the facts (running from danger). Sometimes it doesn't (throwing something at home because a text felt rejecting).
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded border border-blue-200 mt-4">
                <p className="text-gray-700 mb-2 font-semibold">Act Intentionally is how you choose a response that matches:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>your safety</li>
                  <li>your <Link href="/pages/interpersonal-skills/values" className="text-blue-600 hover:text-blue-800 underline">values</Link></li>
                  <li>your long-term goals</li>
                  <li>your real needs (including sensory needs)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) When to use Act Intentionally
              </h2>

              <div className="p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-gray-700 mb-3 font-semibold">Use this skill when:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>you're about to do something you'll regret</li>
                  <li>your urge is intense and narrow ("must do it NOW")</li>
                  <li>you can tell the emotion is real, but the action urge isn't helpful</li>
                  <li>you're in a rejection spiral / RSD flare</li>
                  <li>you're overloaded and about to melt down, shut down, or lash out</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  If you're already in crisis, use your <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">Crisis Plan</Link> first. Then return to this once you're safe enough to choose.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) The Act Intentionally steps
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Step 1 — Name the emotion + urge</h3>
                  <p className="text-gray-700">"I'm feeling ___ and my urge is to ___."</p>
                  <p className="text-gray-700 mt-2 text-sm">
                    See also: <Link href="/pages/neurodivergent/describe" className="text-blue-600 hover:text-blue-800 underline">Describing Your Emotions</Link> (prompting event, interpretations, body, urges)
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Step 2 — Ask: does this urge fit the facts?</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Is there actual danger?</li>
                    <li>Is this sensory overload?</li>
                    <li>Is this a trauma memory / rejection spiral?</li>
                    <li>Is the intensity matched to what's happening?</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    If it fits the facts, you might act on it in a values-aligned way (e.g., set a boundary, leave a harmful situation).
                  </p>
                  <p className="text-gray-700 mt-2 text-sm">
                    See also: <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</Link>
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Step 3 — Choose one of three paths</h3>
                  
                  <div className="space-y-3">
                    <div className="pl-4 border-l-4 border-blue-400">
                      <p className="text-gray-700 font-semibold mb-1">Path A: Opposite of the urge (classic DBT)</p>
                      <p className="text-gray-700 text-sm">Use when the emotion/urge doesn't fit the facts and acting on it will worsen things.</p>
                    </div>

                    <div className="pl-4 border-l-4 border-green-400">
                      <p className="text-gray-700 font-semibold mb-1">Path B: "Safer version" of the urge</p>
                      <p className="text-gray-700 text-sm">Use when the urge makes sense, but the current form is unsafe or socially costly.</p>
                    </div>

                    <div className="pl-4 border-l-4 border-purple-400">
                      <p className="text-gray-700 font-semibold mb-1">Path C: Meet the underlying need directly</p>
                      <p className="text-gray-700 text-sm">Use when the urge is a signal (overwhelm → need quiet; shame → need compassion; fear → need grounding).</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Step 4 — Do it for 2–10 minutes</h3>
                  <p className="text-gray-700">
                    Short is fine. You're building a new groove.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Choose intentionally, not perfectly
              </h2>

              <div className="p-4 bg-green-50 rounded border border-green-200">
                <p className="text-gray-700 mb-3 font-semibold">Neurodivergent-friendly rules:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>You don't have to pick the "perfect" response. Pick the next effective one.</li>
                  <li>"Regulate first, process later" is valid.</li>
                  <li>Some urges need to be expressed physically—just in a safe way.</li>
                  <li>You can stim while doing this. Movement helps.</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  See also: <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:text-blue-800 underline">Stims & Special Interests</Link>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Act Intentionally ideas by emotion
              </h2>

              <p className="text-gray-700 mb-4 italic">
                These are options. Customize them to your body and access needs.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">When you're ANGRY or FRUSTRATED</h3>
                  <p className="text-gray-700 mb-3 font-medium">Goal: discharge energy safely + avoid harm.</p>
                  <p className="text-gray-700 mb-2 font-semibold">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>tear up magazines/junk mail</li>
                    <li>scream loudly to music</li>
                    <li>dance furiously around the room</li>
                    <li>jump on a trampoline / do wall push-ups</li>
                    <li>throw balled-up socks into a basket</li>
                    <li>scrunch paper and toss it</li>
                    <li>draw/paint (even "messy angry paint")</li>
                    <li>build something then destroy it (safe materials)</li>
                    <li>vent to a friend (with consent: "Can I vent for 5 minutes?")</li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-medium italic">
                    Opposite-action-ish option: soften your tone, unclench your hands, step away from the conflict for 20 minutes.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">When you're LONELY or SAD</h3>
                  <p className="text-gray-700 mb-3 font-medium">Goal: reduce isolation while keeping it low-demand.</p>
                  <p className="text-gray-700 mb-2 font-semibold">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>watch a favorite show/movie (comfort repeat)</li>
                    <li>look at photos or saved "good moments"</li>
                    <li>hug a pet or hold a pillow for pressure</li>
                    <li>eat a favorite/safe food</li>
                    <li>watch funny videos or TikToks</li>
                    <li>draw or paint "with" your sadness (no fixing required)</li>
                    <li>ask someone over for a quiet visit</li>
                    <li>send a single text: "Thinking of you. No need to reply fast."</li>
                    <li>call a warmline (if that's accessible in your area)</li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-medium italic">
                    Opposite-action-ish option: reach out instead of isolating (small counts: one message).
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">When you're SCARED or ANXIOUS</h3>
                  <p className="text-gray-700 mb-3 font-medium">Goal: reduce body alarm + return to the present.</p>
                  <p className="text-gray-700 mb-2 font-semibold">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>wrap yourself in a blanket (pressure "cocoon")</li>
                    <li>use your senses for grounding (5–4–3–2–1 or "name 3 things")</li>
                    <li>write a quick list of reality checks:
                      <ul className="list-disc list-inside ml-6 mt-1">
                        <li>"What do I know is true?"</li>
                        <li>"What am I assuming?"</li>
                        <li>"What's one likely neutral explanation?"</li>
                      </ul>
                    </li>
                    <li>do the <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> <Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">Temperature skill</Link> / cold face / ice pack</li>
                    <li>solve a puzzle or play a simple game (gives your brain a track)</li>
                    <li>listen to music (calming or "steady beat")</li>
                    <li>pace or stim intentionally for 2 minutes, then pause and re-check intensity</li>
                  </ul>
                  <p className="text-gray-700 mt-3 font-medium italic">
                    Opposite-action-ish option: approach one tiny step toward what you're avoiding (only if it's safe).
                  </p>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">When you're ASHAMED or EMBARRASSED</h3>
                  <p className="text-gray-700 mb-3 font-medium">Goal: reduce hiding/self-attack + move toward self-respect.</p>
                  <p className="text-gray-700 mb-2 font-semibold">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>put a hand on your chest and say: "This is shame. Shame is loud."</li>
                    <li>write one compassionate sentence to yourself</li>
                    <li>talk to a safe person who won't punish you for being human</li>
                    <li>do one small self-respect action (shower, water, tidy one corner)</li>
                    <li>repair later if needed (short, not a self-trial)</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    See also: <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:text-blue-800 underline">Neurodivergent Affirmations</Link>
                  </p>
                  <p className="text-gray-700 mt-3 font-medium italic">
                    Opposite-action-ish option: show up gently instead of disappearing (a small "I'm here" counts).
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">When you're OVERWHELMED / sensory overloaded</h3>
                  <p className="text-gray-700 mb-3 font-medium">Goal: reduce input first.</p>
                  <p className="text-gray-700 mb-2 font-semibold">Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>go to your <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">Sensory Safe Space</Link></li>
                    <li>headphones/earplugs, sunglasses, hoodie</li>
                    <li>dim lights, change clothes (texture)</li>
                    <li><Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:text-blue-800 underline">sensory self-soothing</Link> (pressure, fidgets, safe food)</li>
                    <li>"exit strategy" script: "I need a break. I'll be back."</li>
                  </ul>
                  <p className="text-gray-700 mt-3 p-3 bg-white rounded border border-green-300 font-medium">
                    This is intentional action too. It's not avoidance—it's accommodation.
                  </p>
                  <p className="text-gray-700 mt-3">
                    See also: <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:text-blue-800 underline">Managing Meltdowns</Link>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Worksheet: Act Intentionally
              </h2>

              <div className="p-4 bg-gray-50 rounded border border-gray-300 space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-2">What emotion is here?</p>
                  <div className="bg-white p-3 rounded border border-gray-300 min-h-[40px]">
                    <p className="text-gray-300">_________________________________</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">What is the action urge?</p>
                  <div className="bg-white p-3 rounded border border-gray-300 min-h-[40px]">
                    <p className="text-gray-300">_________________________________</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">Does the urge fit the facts?</p>
                  <div className="bg-white p-3 rounded border border-gray-300">
                    <div className="space-y-1">
                      <p className="text-gray-700">☐ Yes</p>
                      <p className="text-gray-700">☐ No</p>
                      <p className="text-gray-700">☐ Not sure / might be sensory overload</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">My choice (pick one):</p>
                  <div className="bg-white p-3 rounded border border-gray-300">
                    <div className="space-y-1">
                      <p className="text-gray-700">☐ Opposite of the urge</p>
                      <p className="text-gray-700">☐ Safer version of the urge</p>
                      <p className="text-gray-700">☐ Meet the underlying need directly</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">What I'll do for the next 5 minutes:</p>
                  <div className="bg-white p-3 rounded border border-gray-300 min-h-[60px]">
                    <p className="text-gray-300">_________________________________</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">After 5 minutes, intensity check (0–10):</p>
                  <div className="bg-white p-3 rounded border border-gray-300">
                    <div className="flex gap-4">
                      <p className="text-gray-700">Before: ___</p>
                      <p className="text-gray-700">After: ___</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Use this with...
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/emotion-regulation" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">The Role of Emotions</p>
                  <p className="text-gray-600 text-sm">emotions as messengers</p>
                </Link>
                <Link href="/pages/neurodivergent/describe" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Describing Your Emotions</p>
                  <p className="text-gray-600 text-sm">prompting event, interpretations, body, urges</p>
                </Link>
                <Link href="/pages/neurodivergent/mindfulness-guide" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Neurodivergent Mindfulness</p>
                  <p className="text-gray-600 text-sm">observe without judgment</p>
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Urge Surfing</p>
                  <p className="text-gray-600 text-sm">ride the wave when urge spikes</p>
                </Link>
                <Link href="/pages/distress-tolerance/mammalian-diving" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Mammalian Diving Reflex</p>
                  <p className="text-gray-600 text-sm">fast downshift</p>
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">TIPP Temperature</p>
                  <p className="text-gray-600 text-sm">body-based regulation</p>
                </Link>
                <Link href="/pages/neurodivergent/sensory-soothing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Self-Soothing</p>
                  <p className="text-gray-600 text-sm">five senses regulation</p>
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Safe Space</p>
                  <p className="text-gray-600 text-sm">reduce sensory load</p>
                </Link>
                <Link href="/pages/neurodivergent/meltdowns" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Managing Meltdowns</p>
                  <p className="text-gray-600 text-sm">rumble stage plan</p>
                </Link>
                <Link href="/pages/crisis/plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Crisis Plan</p>
                  <p className="text-gray-600 text-sm">if safety is at risk</p>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">8) Reminder</h3>
              <p className="text-gray-700 text-lg font-medium">
                Act Intentionally isn't "don't feel it."
              </p>
              <p className="text-gray-700 text-lg font-medium">
                It's: <strong>feel it, notice the urge, choose what helps.</strong>
              </p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">
                  Opposite Action (traditional DBT)
                </Link>
                <Link href="/pages/flowchart/check-facts" className="text-blue-600 hover:text-blue-800 underline">
                  Check the Facts
                </Link>
                <Link href="/pages/interpersonal-skills/values" className="text-blue-600 hover:text-blue-800 underline">
                  Find Your Values
                </Link>
                <Link href="/pages/neurodivergent/tolerance-window" className="text-blue-600 hover:text-blue-800 underline">
                  Window of Tolerance
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
