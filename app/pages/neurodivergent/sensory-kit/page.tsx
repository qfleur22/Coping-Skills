'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SensoryKitPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Build a Sensory Toolkit
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            (Neurodivergent-friendly support for overload, shutdown, and regulation)
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                A sensory toolkit is a small collection of items you can use to soothe, ground, and comfort yourself during sensory overload, overwhelm, anxiety, shutdown, or meltdown build-up. It's basically <strong>"portable accommodations"</strong>: things that help your nervous system feel safer and more regulated.
              </p>

              <p className="text-gray-700 mb-4">
                Because sensory needs are individual—and can change with stress, burnout, hormones, sleep, and environment—your toolkit should be customized, flexible, and easy to access. The National Autistic Society lists common sensory supports many autistic people find helpful (ear defenders, sunglasses, fidget toys, weighted items, movement tools) and notes that sensory tools can be useful accommodations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Start with your Sensory Profile
              </h2>

              <p className="text-gray-700 mb-4">
                Use your <Link href="/pages/neurodivergent/sensory-profiles" className="text-blue-600 hover:text-blue-800 underline">Sensory Profile & Needs</Link> page (and the "My Sensory Profile" worksheet) to guide your toolkit choices:
              </p>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>High hyper scores</strong> → pack reduce-input + comfort tools</li>
                  <li><strong>High hypo scores</strong> → pack safe sensory input tools</li>
                  <li><strong>Interoception challenges</strong> → pack prompts + body-needs supports (water, snack, timer)</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                If you haven't filled it out yet, do the "Determine Your Sensory Profile" section first, then come back here.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) Two key questions for every item
              </h2>

              <p className="text-gray-700 mb-4">
                When choosing a toolkit item, ask:
              </p>

              <div className="p-4 bg-green-50 rounded border border-green-200">
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Is this sensation pleasant or unpleasant (for me)?</li>
                  <li>Is it comforting or uncomfortable (today)?</li>
                </ol>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-purple-50 rounded border border-purple-200 font-medium">
                Your toolkit isn't about what <em>should</em> help—it's about what <strong>actually helps your body</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Make it accessible and low-effort
              </h2>

              <p className="text-gray-700 mb-4">
                Your toolkit works best when it's:
              </p>

              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>easy to grab (no searching)</li>
                  <li>in the places you need it (bedside, bag, car, desk)</li>
                  <li>usable even when dysregulated (simple, familiar, not complicated)</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200 mt-4">
                <p className="text-gray-700 mb-2 font-semibold">Consider making two versions:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Home kit</strong> (bigger, more options)</li>
                  <li><strong>Portable kit</strong> (small pouch you can carry)</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Add an "instructions card" for future-you (and others)
              </h2>

              <p className="text-gray-700 mb-4">
                When you're overwhelmed, it's harder to think. Put a simple card inside the kit like:
              </p>

              <div className="p-4 bg-green-50 rounded border border-green-200">
                <p className="text-gray-700 mb-3 font-semibold">When I'm overloaded, please:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>reduce noise/light</li>
                  <li>don't ask lots of questions</li>
                  <li>offer water + a safe snack</li>
                  <li>remind me to use: headphones / pressure / cold face / fidget</li>
                  <li>give me 10–20 minutes before problem-solving</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4">
                This also helps partners/roommates support you without guessing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Toolkit ideas by sense
              </h2>

              <p className="text-gray-700 mb-4 p-4 bg-purple-50 rounded border border-purple-200 font-medium">
                Use these as options. You only need a few that work.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">VISUAL (light + calming focus)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>ambient lighting (fairy lights, small lamp)</li>
                    <li>affirmation cards or a short soothing note</li>
                    <li>kaleidoscope</li>
                    <li>glitter jar</li>
                    <li>light-up toys</li>
                    <li>bubbles</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">SOUND (reduce noise or add predictable sound)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>noise-cancelling headphones / ear defenders</li>
                    <li>earplugs</li>
                    <li>playlist: nature sounds / steady beats / familiar comfort tracks</li>
                    <li>white noise machine (home kit)</li>
                    <li>audiobook (predictable voice)</li>
                    <li>"sound of my cat purring" (recording)</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">TOUCH (comfort + texture + pressure)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>soft toy</li>
                    <li>weighted blanket or lap pad (home kit)</li>
                    <li>fidgets: putty/slime, textured ring, fidget cube</li>
                    <li>smooth stone, piece of soft fabric, satin ribbon</li>
                    <li>hand cream (if scent-safe)</li>
                  </ul>
                  <p className="text-gray-700 mt-3 text-sm italic">
                    Note: Weighted items can be helpful for some people, and the Royal College of Occupational Therapists recommends informed use/assessment—especially if you're unsure what's appropriate for you.
                  </p>
                </div>

                <div className="p-4 bg-pink-50 rounded border border-pink-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">SMELL (comfort scents or "no scent" supports)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>scented lotion (only if scents soothe you)</li>
                    <li>calming spray</li>
                    <li>scented pillow / sachet</li>
                    <li>play-dough with a favorite scent</li>
                    <li>scratch-and-sniff stickers</li>
                  </ul>
                  <p className="text-gray-700 mt-3 text-sm">
                    If smells overwhelm you, you can also pack fragrance-free options and a note like: "No perfume near me when overloaded."
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">TASTE / ORAL (safe input + regulation)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>safe snack (crunchy, chewy, or bland—whatever regulates you)</li>
                    <li>mints or hard candy</li>
                    <li>gum</li>
                    <li>chewelry / chew jewelry</li>
                    <li>water bottle + straw (some people find straw drinking regulating)</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">PROPRIOCEPTION (pressure + body awareness)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>weighted lap pad (portable)</li>
                    <li>compression sleeves / tight hoodie</li>
                    <li>resistance band</li>
                    <li>stress ball / hand gripper</li>
                    <li>"wall push-ups" instruction card (proprioceptive reset)</li>
                  </ul>
                </div>

                <div className="p-4 bg-indigo-50 rounded border border-indigo-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">VESTIBULAR (movement + balance)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>small balance/wobble cushion (home)</li>
                    <li>mini "movement menu" card: pacing, rocking, gentle spinning (if it helps), short walk</li>
                    <li>for motion sickness days: ginger candies, front-seat preference note, breaks plan</li>
                  </ul>
                </div>

                <div className="p-4 bg-orange-50 rounded border border-orange-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">INTEROCEPTION (internal cues + routines)</h3>
                  <p className="text-gray-700 mb-3 text-sm italic">
                    Interoception is your ability to notice internal body signals like hunger, thirst, and bathroom needs, and it can be harder when overwhelmed. (See: <Link href="/pages/neurodivergent/alexithymia" className="text-blue-600 hover:text-blue-800 underline">Alexithymia</Link>)
                  </p>
                  <p className="text-gray-700 mb-2 font-semibold">Toolkit supports:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>visual prompt card: "water / food / bathroom / meds / rest"</li>
                    <li>timer or phone reminders ("sip water every 30 min")</li>
                    <li>electrolyte packets</li>
                    <li>easy-to-eat safe snack</li>
                    <li>a simple "body check" script (yes/no questions)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) Build "mini-kits" for specific situations
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Public/errands mini-kit (pocket size)</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>earplugs</li>
                    <li>small fidget</li>
                    <li>sunglasses</li>
                    <li>mint/gum</li>
                    <li>one grounding card ("leave store, breathe, water")</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Work/school mini-kit</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>headphones</li>
                    <li>tinted glasses</li>
                    <li>sticky note scripts ("I need this in writing" / "I'm taking a 10-minute break")</li>
                    <li>snack + water</li>
                    <li>texture item (smooth stone)</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Bedside shutdown kit</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>weighted blanket/lap pad</li>
                    <li>hydration</li>
                    <li>safe snack</li>
                    <li>low-light option</li>
                    <li>comfort media (playlist/audiobook)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) How to test and refine your toolkit
              </h2>

              <p className="text-gray-700 mb-4">
                For one week, do quick notes after you use it:
              </p>

              <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>What did I use?</li>
                  <li>Did it help (0–10)?</li>
                  <li>What made things worse?</li>
                  <li>What was I actually needing (less input, more input, or body care)?</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-blue-50 rounded border border-blue-200 font-medium">
                This turns your toolkit into a data-driven support system.
              </p>

              <p className="text-gray-700 mt-4 text-sm italic">
                If you want a starting point, Neurodivergent Insights has a practical guide for building a sensory self-soothing kit and emphasizes personalizing tools across senses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Build Your Own Sensory Toolkit (worksheet)
              </h2>

              <div className="p-6 bg-green-50 rounded border-2 border-green-300 space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-2">My top 3 overload triggers:</p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                    <li>_________________________________</li>
                    <li>_________________________________</li>
                    <li>_________________________________</li>
                  </ol>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">My top 3 regulation needs:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 ml-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">less input</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">more input</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">pressure</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">movement</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">food/water</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">quiet</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">connection</span>
                    </label>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-3">Items I'll include (by sense):</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-gray-700"><strong>Visual:</strong> _________________________________</p>
                    <p className="text-gray-700"><strong>Sound:</strong> _________________________________</p>
                    <p className="text-gray-700"><strong>Touch:</strong> _________________________________</p>
                    <p className="text-gray-700"><strong>Smell:</strong> _________________________________</p>
                    <p className="text-gray-700"><strong>Taste/oral:</strong> _________________________________</p>
                    <p className="text-gray-700"><strong>Proprioception:</strong> _________________________________</p>
                    <p className="text-gray-700"><strong>Vestibular:</strong> _________________________________</p>
                    <p className="text-gray-700"><strong>Interoception:</strong> _________________________________</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">My "when I'm overloaded" instructions:</p>
                  <p className="text-gray-700 ml-4">_________________________________</p>
                  <p className="text-gray-700 ml-4">_________________________________</p>
                  <p className="text-gray-700 ml-4">_________________________________</p>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold mb-2">Where I keep it:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-4">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">bedside</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">backpack</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">car</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">desk</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-700 text-sm">living room</span>
                    </label>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 font-semibold">My check-in: did it help (0–10)? ___</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Use this with...
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/sensory-profiles" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Profile & Needs</p>
                  <p className="text-gray-600 text-sm">choose tools based on hyper/hypo</p>
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Creating a Sensory Safe Space</p>
                  <p className="text-gray-600 text-sm">home base</p>
                </Link>
                <Link href="/pages/neurodivergent/sensory-soothing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Sensory Self-Soothing</p>
                  <p className="text-gray-600 text-sm">5 senses list</p>
                </Link>
                <Link href="/pages/neurodivergent/meltdowns" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Managing Meltdowns</p>
                  <p className="text-gray-600 text-sm">early warning signs + recovery</p>
                </Link>
                <Link href="/pages/neurodivergent/tolerance-window" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Window of Tolerance</p>
                  <p className="text-gray-600 text-sm">what "regulated enough" feels like</p>
                </Link>
                <Link href="/pages/crisis/plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Crisis Plan</p>
                  <p className="text-gray-600 text-sm">safe people + what to do when you can't self-manage</p>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Reminder</h3>
              <p className="text-gray-700 text-lg font-medium">
                Your sensory toolkit is <strong>not a "fix."</strong>
              </p>
              <p className="text-gray-700 mt-2">
                It's a set of tools that help your nervous system feel safer and more regulated. Some days they'll work brilliantly. Some days you'll need something different. That's okay—your toolkit is <strong>flexible</strong>, just like you.
              </p>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Overload Skills Menu
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
                <Link href="/pages/neurodivergent/alexithymia" className="text-blue-600 hover:text-blue-800 underline">
                  Alexithymia
                </Link>
                <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:text-blue-800 underline">
                  Stims & Special Interests
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
