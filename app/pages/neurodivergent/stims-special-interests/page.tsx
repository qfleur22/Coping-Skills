'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function StimsSpecialInterestsPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Stims & Special Interests
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Stimming and special interests (sometimes called "spins," hyperfixations, or hyperfocus moments) are common neurodivergent ways of regulating, coping, and feeling like yourself.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Stimming</strong> = repeated movements, sounds, or behaviors that can provide sensory input, help keep calm, express joy, or communicate feelings.</li>
                <li><strong>Special interests / focused interests</strong> = intense, meaningful interests that can improve wellbeing, reduce anxiety, help structure time/energy, and create connection with others.</li>
                <li><strong>Hyperfocus</strong> (often discussed with ADHD) = getting so absorbed in something that everything else fades out (time disappears, needs get ignored).</li>
              </ul>
              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 mb-2 font-semibold">This page helps you:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>find stims that work for you (especially if you've masked them)</li>
                  <li>find special interests that regulate you (without turning them into pressure)</li>
                  <li>understand different types</li>
                  <li>handle burnout when stims/interests "go offline"</li>
                  <li>gently reintroduce regulation when it feels impossible</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) First: stims and interests are not "bad habits"
              </h2>
              <p className="text-gray-700 mb-4">
                Many autistic adults describe stimming as an adaptive self-regulation tool—something that helps them soothe, process emotions, and cope—rather than something that should be eliminated.
              </p>
              <p className="text-gray-700 mb-4">
                Focused interests can also be protective: enjoyment, stress reduction, motivation, achievement, and social connection.
              </p>
              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200 font-medium text-lg">
                Bottom line: if it helps and it's safe, it counts as a skill.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Why you might feel like you "can't stim" (masking + safety)
              </h2>
              <p className="text-gray-700 mb-3">
                If you grew up being corrected ("stop that," "hands still," "don't be weird"), you may have learned to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>hide stims</li>
                <li>switch to "invisible stims" (biting lips, fidgeting in pockets, tensing muscles)</li>
                <li>feel shame when your body tries to self-regulate</li>
              </ul>
              <p className="text-gray-700 mb-4">
                That doesn't mean you don't stim. It often means your stims got compressed.
              </p>
              <p className="text-gray-700 p-4 bg-yellow-50 rounded border border-yellow-200 font-medium">
                Permission statement: You're allowed to re-learn what regulation feels like in your body.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Stims vs coping vs "symptoms"
              </h2>
              <p className="text-gray-700 mb-3">A quick way to tell what something is doing for you:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
                <li><strong>Stim/regulation:</strong> lowers distress OR helps you stay steady</li>
                <li><strong>Coping:</strong> gets you through a moment (may be neutral)</li>
                <li><strong>Harmful coping:</strong> brings relief short-term but causes harm later</li>
              </ul>
              <p className="text-gray-700 p-4 bg-red-50 rounded border border-red-200">
                If you have any self-injury during overwhelm, that's a safety flag. The goal isn't shame—it's harm reduction (swap to safer input that meets the same need).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Types of stimming
              </h2>
              <p className="text-gray-700 mb-4">
                Stims can involve any sense or motor system. Here are common categories:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Movement stims</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>rocking, pacing, bouncing a leg</li>
                    <li>hand flapping/waving</li>
                    <li>stim dancing</li>
                    <li>tapping fingers/feet</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Tactile stims</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>rubbing soft textures</li>
                    <li>fidgeting (cube/spinner/putty)</li>
                    <li>rubbing fingers on fabric seams</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Oral stims</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>chewing gum / chewelry</li>
                    <li>sucking on a mint or lollipop</li>
                    <li>crunchy snacks (if helpful)</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Vocal/auditory stims</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>humming, singing</li>
                    <li>repeating words/phrases</li>
                    <li>making sounds</li>
                    <li>listening to the same song on repeat</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Visual stims</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>moving hands in front of your vision</li>
                    <li>watching repetitive/soothing visuals</li>
                    <li>lights, patterns, spinning objects (as long as it's safe)</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Pressure/proprioceptive stims</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>seeking pressure from blankets/pets</li>
                    <li>weighted blanket</li>
                    <li>tight wrap/compression clothing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) A list of stims to try (starter menu)
              </h2>
              <p className="text-gray-700 mb-4">
                Use this as a "try list" for distress moments when your brain can't think clearly:
              </p>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>hand flapping/waving</li>
                    <li>arm flapping/waving</li>
                    <li>stim dancing</li>
                    <li>tapping feet/fingers</li>
                    <li>twirling your hair</li>
                    <li>shaking your head gently</li>
                    <li>singing or humming</li>
                    <li>repeating words/phrases</li>
                    <li>making sounds</li>
                    <li>rubbing face/fingers on soft things</li>
                    <li>biting things or using chewelry</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>listening to the same song</li>
                    <li>bouncing your leg</li>
                    <li>biting lips (note: can irritate skin)</li>
                    <li>moving hands in front of your vision</li>
                    <li>watching something repetitive or soothing</li>
                    <li>visual stimming</li>
                    <li>fidgeting</li>
                    <li>mimicking faces/words</li>
                    <li>seeking pressure from blankets or pets</li>
                    <li>sucking on a mint or a lollipop</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                <strong>Safety note:</strong> If a stim causes injury (skin picking until bleeding, head-hitting, etc.), treat it as "needs a safer substitute," not "must stop everything."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) How to find stims that work for you
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Step 1 — Decide what you need: less input or more input?</h3>
                  <p className="text-gray-700 mb-2">Ask:</p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• <strong>Am I overloaded</strong> (too loud/bright/itchy/socially demanding)?
                      <br />→ reduce input + comfort + pressure</li>
                    <li>• <strong>Am I under-stimulated</strong> (restless, unfocused, "antsy," craving sensation)?
                      <br />→ add safe movement/texture/rhythm</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Step 2 — Run a 60-second experiment</h3>
                  <p className="text-gray-700 mb-2">Pick one stim and do it for a minute. Then rate:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>distress before: 0–10</li>
                    <li>distress after: 0–10</li>
                    <li>energy after: lower / same / higher</li>
                    <li>clarity after: lower / same / higher</li>
                  </ul>
                  <p className="text-gray-700 mt-2 font-medium">Keep what helps. Drop what doesn't.</p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Step 3 — Build a "Stim Ladder"</h3>
                  <p className="text-gray-700 mb-2">Make three levels so you can choose based on context:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><strong>Public/subtle stims:</strong> pocket fidget, toe tapping, chewing gum</li>
                    <li><strong>Private/medium stims:</strong> rocking, pacing, humming</li>
                    <li><strong>Big stims:</strong> flapping, dancing, loud singing, deep pressure</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Step 4 — Make it easy</h3>
                  <p className="text-gray-700 mb-2">Put your top 3 stims where you can reach them:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>by your bed</li>
                    <li>in your backpack</li>
                    <li>in your <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">sensory safe space</Link></li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                See also: <Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:text-blue-800 underline">Sensory Self-Soothing</Link>, <Link href="/pages/neurodivergent/mindfulness-guide" className="text-blue-600 hover:text-blue-800 underline">Neurodivergent Mindfulness</Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Special interests vs hyperfixations vs hyperfocus
              </h2>
              <p className="text-gray-700 mb-4">
                People use these words differently. A helpful way to separate them:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Special interests / focused interests (often autism-coded language)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>enduring, meaningful, identity-linked</li>
                    <li>soothing, motivating, organizing</li>
                    <li>can be a community bridge</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Hyperfocus (often ADHD-coded language)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>intense absorption "to the exclusion of everything else"</li>
                    <li>time disappears; needs get skipped</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Hyperfixation (everyday term)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>often used to mean "very intense focus," sometimes short-lived</li>
                    <li>can be joyful OR destabilizing depending on sleep/needs/pressure</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded border border-green-200 mt-4">
                <p className="text-gray-700 mb-2 font-semibold">Key: you don't need the perfect label. You need to know:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>does this regulate me?</li>
                  <li>does it cost me too much afterward?</li>
                  <li>how can I do it in a safer way?</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Common types of special interests
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Interests you can DO (active regulation)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>makeup</li>
                    <li>cooking/baking</li>
                    <li>arts and crafts</li>
                    <li>plant care</li>
                    <li>photography</li>
                    <li>stargazing</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Interests you can WATCH/LISTEN to (low energy)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>comfort TV shows</li>
                    <li>podcasts</li>
                    <li>music playlists</li>
                    <li>YouTube deep dives</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Interests you can DEEP DIVE (high absorption)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>research rabbit holes</li>
                    <li>collections, catalogs, spreadsheets, lore</li>
                    <li>building/creating projects</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Interests you can SHARE (connection)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>co-watch/co-play</li>
                    <li>info-dump with consent</li>
                    <li>clubs/Discords/events with shared interest</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-green-50 rounded border border-green-200 font-medium">
                Focused interests can support wellbeing and reduce stress—so these aren't "wasted time."
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Burnout can change stims and interests
              </h2>
              <p className="text-gray-700 mb-4">
                Autistic burnout is commonly described as a syndrome from chronic stress + mismatch of expectations and supports, characterized by long-term exhaustion, loss of function/skills, and reduced tolerance to stimulus.
              </p>
              <p className="text-gray-700 mb-3">During burnout, many people report:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>stimming feels "blocked" or unsafe</li>
                <li>interests feel flat or overwhelming</li>
                <li>sensory tolerance is lower (everything hurts)</li>
                <li>executive function is worse (even "fun" is too many steps)</li>
              </ul>
              <p className="text-gray-700 p-4 bg-red-50 rounded border border-red-200 font-medium">
                Reframe: Losing access to stims/interests is not you "being lazy" or "not really autistic/ND." It's a nervous system capacity issue.
              </p>
              <p className="text-gray-700 mt-4">
                See also: <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">Overload & Shutdown</Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                10) When you can't stim or feel no interest: how to reintroduce gently
              </h2>
              <p className="text-gray-700 mb-4">
                Think "physical therapy for joy." Small, safe, low-pressure.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">A) Use "micro-stims"</h3>
                  <p className="text-gray-700 mb-2">If big stims feel inaccessible, try 10–30 seconds of:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>finger tapping in a pattern</li>
                    <li>gentle rocking</li>
                    <li>rubbing a soft texture</li>
                    <li>one hum note</li>
                    <li>one deep pressure squeeze (pillow hug)</li>
                  </ul>
                  <p className="text-gray-700 mt-2 font-medium">Goal: remind your body it's allowed.</p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">B) Use "low-demand interest versions"</h3>
                  <p className="text-gray-700 mb-2">If your special interest feels impossible, downshift:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>instead of creating → watch someone else create</li>
                    <li>instead of deep research → reread one favorite page</li>
                    <li>instead of starting a project → sort one small category (5 minutes)</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">C) Remove performance pressure</h3>
                  <p className="text-gray-700 mb-2">Burnout + shame kills play. Try:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>"This is not productive time; this is recovery time."</li>
                    <li>"I don't have to feel excited; I'm just reconnecting."</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">D) Pair it with basic care</h3>
                  <p className="text-gray-700 mb-2">Interests often return after needs are met:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>hydration + food</li>
                    <li>sleep/rest</li>
                    <li>reduced sensory load</li>
                    <li>fewer demands</li>
                  </ul>
                  <p className="text-gray-700 mt-2 italic">These are core burnout supports discussed in burnout guidance and research themes.</p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">E) Borrow regulation from your environment</h3>
                  <p className="text-gray-700 mb-2">If internal regulation is hard:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>go to your <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">Sensory Safe Space</Link></li>
                    <li>use <Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:text-blue-800 underline">Sensory Self-Soothing</Link></li>
                    <li>use <Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">Mammalian Diving Reflex</Link> / <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP Temperature</Link> for a fast downshift</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                11) Build your personal "Regulation Menu"
              </h2>
              <p className="text-gray-700 mb-4">
                Fill this in so you don't have to think during distress.
              </p>

              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">My top 5 stims</p>
                  <ol className="list-decimal list-inside ml-4 space-y-1">
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                    <li>_______________</li>
                  </ol>
                </div>

                <div>
                  <p className="font-semibold mb-2">My "public stims"</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">My "burnout stims" (tiny + easy)</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">My special interests (spins)</p>
                  <div className="ml-4">• _______________</div>
                </div>

                <div>
                  <p className="font-semibold mb-2">My low-demand versions (for burnout)</p>
                  <ul className="ml-4 space-y-1">
                    <li>• watch/listen: _______________</li>
                    <li>• micro-task: _______________</li>
                    <li>• comfort repeat: _______________</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">My early signs I need to stim or switch to interest time</p>
                  <div className="ml-4">• _______________</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/sensory-soothing" className="text-blue-600 hover:text-blue-800 underline">
                  Sensory Self-Soothing
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">
                  Creating a Sensory Safe Space
                </Link>
                <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:text-blue-800 underline">
                  Managing Meltdowns
                </Link>
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Overload & Shutdown
                </Link>
                <Link href="/pages/neurodivergent/mindfulness-guide" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Mindfulness Guide
                </Link>
                <Link href="/pages/neurodivergent/mindfulness" className="text-blue-600 hover:text-blue-800 underline">
                  Accessible Mindfulness Exercises
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
                <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">
                  Create a Crisis Plan
                </Link>
                <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">
                  TIPP
                </Link>
                <Link href="/pages/distress-tolerance/mammalian-diving" className="text-blue-600 hover:text-blue-800 underline">
                  Mammalian Diving Reflex
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
