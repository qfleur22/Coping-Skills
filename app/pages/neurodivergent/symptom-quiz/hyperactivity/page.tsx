'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { SymptomQuizProgressBar } from '@/components/SymptomQuizProgressBar';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function HyperactivityPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'hyperactivity';

  const toggleCheck = ({ id }: { id: number }) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  useEffect(() => {
    saveQuizScore({ symptomSlug: currentSlug, score: checkedCount });
  }, [checkedCount]);

  return (
    <>
      <SymptomQuizProgressBar currentSlug={currentSlug} />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4 pt-32">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
              Hyperactivity (IRL)
            </h1>
            <p className="text-gray-600">
              Check the experiences that resonate with you
            </p>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              {checkedCount} of 25 checked
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              1. Body in Motion (Even If You Fight the Urge)
            </h2>
            <p className="text-gray-600 italic">
              You don't have to be physically "hyperactive" for it to count — if the urge is there but you hold back because of anxiety, social rules, or trying to be "appropriate," it still matters.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You bounce your leg constantly — or want to, but stop yourself." },
                { id: 2, text: "You shift in your seat or struggle to find a comfortable position." },
                { id: 3, text: "You pace, wander, or get up frequently — or wish you could but feel stuck in place." },
                { id: 4, text: "You feel physically trapped in \"sit still\" situations — like your body wants to escape but isn't allowed to." },
                { id: 5, text: "You tap, doodle, chew, or fidget constantly — then feel self-conscious or childish for doing it." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              2. Restlessness Disguised as "Energy"
            </h2>
            <p className="text-gray-600 italic">
              This is the kind of "helpful" hyperactivity that looks productive… until you crash.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You feel like you have a motor running inside you — revved up, even at rest." },
                { id: 7, text: "You can't rest without guilt — doing \"nothing\" makes you feel useless or lazy." },
                { id: 8, text: "You clean, tidy, or organise things just to burn off energy — not because it needs doing." },
                { id: 9, text: "You say yes to everything because slowing down makes you feel uncomfortable — but later feel resentful or burnt out." },
                { id: 10, text: "You do 10 things at once to avoid sitting with discomfort — then crash and feel like you've let everyone down." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              3. Internal Hyperactivity (The Mind Won't Quit)
            </h2>
            <p className="text-gray-600 italic">
              You might look calm on the outside, but your brain is running laps in heels.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "Your thoughts race constantly — even during downtime, even at night." },
                { id: 12, text: "You replay conversations, imagine future scenarios, or daydream nonstop — and sometimes wish you could shut it all off." },
                { id: 13, text: "You have to get thoughts out the second they arrive or they feel like they'll explode." },
                { id: 14, text: "You blurt or interrupt because your brain won't wait its turn — and then feel rude or ashamed for doing it." },
                { id: 15, text: "You avoid stillness or silence because it makes your mind even louder — like your brain turns into static." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              4. Task Jumping + "Let's Do ALL the Things" Mode
            </h2>
            <p className="text-gray-600 italic">
              You're a one-person tornado of 17 open tabs, 3 half-finished projects, and zero chill.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You start several tasks at once — switching between them without completing any." },
                { id: 17, text: "You feel productive but then crash into the shame of realising nothing actually got finished." },
                { id: 18, text: "You leave chaos zones (piles, messes, projects) that make you feel embarrassed or disorganised." },
                { id: 19, text: "You get antsy or irritable when you're not in motion — restlessness feels like failure." },
                { id: 20, text: "You crave novelty and jump at new ideas — but blame yourself when the interest fizzles." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-300 pb-2">
              5. Social Energy (or Over-Energy)
            </h2>
            <p className="text-gray-600 italic">
              Even your personality can run on hyperdrive.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You talk fast, talk loud, or talk a lot — and spiral after social situations wondering if you were \"too much.\"" },
                { id: 22, text: "You interrupt, or dominate conversations — not out of rudeness, but because you're excited (and scared you'll forget your thought)." },
                { id: 23, text: "You walk away from social interactions with a vulnerability hangover — replaying every moment and regretting your energy." },
                { id: 24, text: "You're known as \"bubbly,\" \"intense,\" or \"high energy\" — but inside, you're exhausted from holding that up." },
                { id: 25, text: "You feel like you have to shrink yourself in quiet spaces — constantly wondering if your personality is \"too loud\" for the room." }
              ].map(({ id, text }) => (
                <div key={id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  <input
                    type="checkbox"
                    id={`item-${id}`}
                    checked={checkedItems[id] || false}
                    onChange={() => toggleCheck({ id })}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor={`item-${id}`} className="flex-1 cursor-pointer text-gray-700">
                    <span className="font-semibold text-purple-700">{id}.</span> {text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* What This Might Mean */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">What This Might Mean</h2>
            <p className="text-gray-700 leading-relaxed">
              Hyperactivity is common in ADHD and can manifest physically, mentally, or both. Your nervous system runs at a higher baseline — you're not "trying to be difficult," your brain and body genuinely need more movement, stimulation, and output to feel regulated. Understanding this can help you find ways to channel your energy instead of suppressing it.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Movement Breaks:</strong> Build regular physical activity into your day</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Fidget Tools:</strong> Use <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">stim-friendly items</Link> during meetings or focus time</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Task Switching:</strong> Allow yourself to move between tasks instead of forcing single-task focus</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Active Thinking:</strong> Pace, walk, or move while problem-solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Channel Your Energy:</strong> Find outlets that work with your hyperactivity, not against it</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/dopamine-seeking" className="text-blue-600 hover:underline">
                → Dopamine Seeking
              </Link>
              <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">
                → Stims & Special Interests
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/impulsivity" className="text-blue-600 hover:underline">
                → Impulsivity
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/stimming" className="text-blue-600 hover:underline">
                → Stimming
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center pt-4">
            <Link
              href="/pages/neurodivergent/symptom-quiz"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              ← Back to Symptom Quiz
            </Link>
          </div>
        </div>
      </div>
        <QuizNavButton currentSlug={currentSlug} />
      </div>
    </>
  );
}
