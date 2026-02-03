'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function MammalianDivingPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Mammalian Diving Reflex
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Have you ever noticed that splashing cold water on your face can calm you down fast?
              </p>
              <p className="text-gray-700 mb-4">
                That's not placebo. It's a real, built-in body response called the mammalian diving reflex (also called the diving response). It's an automatic survival reflex found across mammals that helps conserve oxygen during submersion—and in humans it can be triggered strongly by cold stimulation to the face + breath-holding.
              </p>
              <p className="text-gray-700 p-4 bg-blue-50 rounded border border-blue-200 font-medium">
                This is why this skill is a star player inside DBT's <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> distress-tolerance toolkit (the "T" = Temperature).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                1) Why it helps anxiety and panic
              </h2>
              <p className="text-gray-700 mb-3">
                When you're anxious, panicked, or overwhelmed, your body can shift into fight/flight:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>heart rate speeds up</li>
                <li>breathing gets shallow or feels "stuck"</li>
                <li>muscles tense</li>
                <li>you may feel shaky, sweaty, or weird in your limbs</li>
              </ul>
              <p className="text-gray-700 mb-4">
                The diving reflex can push your nervous system toward a slower, more regulated state—especially by producing bradycardia (a slowed heart rate) and shifting blood flow toward vital organs (a conservation response).
              </p>
              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200 font-medium text-lg">
                In plain language: it's like hitting a body-level reset button.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                2) How it works (simple version)
              </h2>
              <p className="text-gray-700 mb-3">The diving reflex is strongest when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>cold hits the face (especially around the eyes/cheeks)</li>
                <li>you hold your breath (like you're "diving")</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Cold facial stimulation involves sensory pathways of the face (commonly described via trigeminal nerve inputs) and triggers autonomic changes that slow the heart rate.
              </p>
              <p className="text-gray-700 p-4 bg-blue-50 rounded border border-blue-200 font-medium">
                Key idea: You don't have to "calm down first." You do the skill, and your body helps you calm down.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                3) Important reminders
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                <li>For best effect, make sure the area around your cheeks and above your eyes is getting the cold input (that's where this technique is typically targeted in DBT/TIPP instructions).</li>
                <li>Hold your breath during the cold facial contact. This is part of what makes it work (diving = not breathing).</li>
                <li><strong>If you have heart problems, blood pressure issues, fainting history, arrhythmias, or other medical concerns, talk with a clinician before using this skill.</strong> The diving response can affect heart rhythm and blood pressure, and individual responses vary.</li>
                <li>Keep it safe: sit down if you might get dizzy.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                4) Method One: Bowl/Sink Face Dip (classic DBT/TIPP)
              </h2>

              <div className="bg-purple-50 p-4 rounded border border-purple-200 mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">What you need</h3>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>a bowl or sink</li>
                  <li>cold water + ice cubes</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Steps</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Fill a bowl/sink with cold water (ice water is ideal).</li>
                  <li>Sit down or brace yourself comfortably—you'll be leaning forward.</li>
                  <li>Take a breath in, then hold your breath.</li>
                  <li>Put your face into the water so your eyes/cheeks get the cold.</li>
                  <li>Hold for about 30 seconds (or as long as is safe for you).</li>
                  <li>Lift your head, exhale slowly, and notice your heart rate and breathing change.</li>
                </ol>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                <strong>Tip:</strong> If 30 seconds feels too intense, start with 10–15 seconds and repeat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                5) Method Two: Ice Pack "Mask" (fast + easy)
              </h2>
              <p className="text-gray-700 mb-4">
                This is often simpler in a panic because it requires less setup.
              </p>

              <div className="bg-purple-50 p-4 rounded border border-purple-200 mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">What you need</h3>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>a soft ice pack, or a bag of frozen peas, or a zip-top bag with ice water</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Steps</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Sit down and lean forward slightly.</li>
                  <li>Place the cold pack across your eyes and upper cheeks (like a mask).</li>
                  <li>Take a breath in, then hold your breath for 20–30 seconds.</li>
                  <li>Remove the pack, sit back, and exhale slowly.</li>
                  <li>Notice the downshift: slower heart rate, slower breathing, less "alarm."</li>
                </ol>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-yellow-50 rounded border border-yellow-200">
                <strong>Repeat:</strong> 1–3 rounds is common if the first round helps but doesn't fully reset you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                6) How this fits DBT
              </h2>
              <p className="text-gray-700 mb-3">
                In DBT Distress Tolerance, <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> is used to change body chemistry quickly when emotions are extreme:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li><strong>T</strong> = Temperature (cold face / diving reflex)</li>
                <li><strong>I</strong> = Intense exercise</li>
                <li><strong>P</strong> = Paced breathing</li>
                <li><strong>P</strong> = Paired muscle relaxation</li>
              </ul>
              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200">
                This page focuses on the <strong>Temperature skill</strong> because it can be one of the fastest "downshift" tools when you're panicking or escalating.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                7) Troubleshooting
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">"It didn't work."</h3>
                  <p className="text-gray-700 mb-2"><strong>Common reasons:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 mb-3">
                    <li>water wasn't cold enough</li>
                    <li>cheeks/eye area didn't get the cold</li>
                    <li>you didn't hold your breath</li>
                    <li>you were too upright (leaning forward helps some people feel the reset)</li>
                  </ul>
                  <p className="text-gray-700 mb-2"><strong>Try:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 ml-4">
                    <li>colder water or a colder pack</li>
                    <li>2–3 rounds</li>
                    <li>pairing it with paced breathing afterward</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">"It makes me feel worse."</h3>
                  <p className="text-gray-700">
                    Stop. Try a different regulation tool (<Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">paced breathing</Link>, <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">sensory safe space</Link>). If you have heart or blood pressure concerns, check with a clinician before trying again.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                8) Quick version (30 seconds)
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 text-lg">
                <li>Sit down.</li>
                <li>Cold pack over eyes/cheeks.</li>
                <li>Hold breath for 20–30 seconds.</li>
                <li>Exhale slowly.</li>
                <li>Repeat once if needed.</li>
              </ol>
              <p className="text-gray-700 mt-4 font-medium text-center text-lg">
                That's it. Simple, physical, effective.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                9) Safety note
              </h2>
              <p className="text-gray-700">
                <strong>This skill changes heart rate and blood pressure.</strong> If you have cardiovascular conditions, fainting history, arrhythmias, or medical concerns, consult a clinician before using cold facial immersion. Use seated positioning and stop if you feel unsafe.
              </p>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">
                  TIPP (Full Technique)
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">
                  Urge Surfing
                </Link>
                <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">
                  Paced Breathing
                </Link>
                <Link href="/pages/crisis/plan" className="text-blue-600 hover:text-blue-800 underline">
                  Crisis Plan
                </Link>
                <Link href="/pages/neurodivergent/mindfulness-guide" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Mindfulness
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">
                  Sensory Safe Space
                </Link>
                <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">
                  Distress Tolerance Overview
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
