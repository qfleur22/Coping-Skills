'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { SymptomQuizProgressBar } from '@/components/SymptomQuizProgressBar';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function DopamineSeekingPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'dopamine-seeking';

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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4 pb-32">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
              Dopamine Seeking (IRL)
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
              1. The Chaos Craver
            </h2>
            <p className="text-gray-600 italic">
              You don't mean to… but your brain thrives on urgency and panic.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You often leave things until the absolute last second because it's the only way you'll actually start." },
                { id: 2, text: "You say \"I work better under pressure\" — but what you really mean is your brain needs panic to engage." },
                { id: 3, text: "You take on new projects or tasks even when overwhelmed — because new = more exciting." },
                { id: 4, text: "You deep-clean, rearrange furniture, or start new tasks as a way to avoid the one thing you're supposed to do." },
                { id: 5, text: "You've stirred up tension or leaned into conflict when bored — not consciously, but it gave your brain a hit." }
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
              2. The Novelty Addict
            </h2>
            <p className="text-gray-600 italic">
              If it's new, your brain wants it — now.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You lose interest in hobbies once the novelty wears off — even if you were obsessed with them last week." },
                { id: 7, text: "You constantly try new planners, apps, or systems hoping this one will finally work." },
                { id: 8, text: "You act on ideas the second they pop up — even if it completely derails your day." },
                { id: 9, text: "You bounce between tabs, tasks, or thoughts because the next thing always feels more exciting." },
                { id: 10, text: "You get hyperfixated, going deep into new interests, only to abandon them suddenly once your brain's had its fill." }
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
              3. The Distraction Chaser
            </h2>
            <p className="text-gray-600 italic">
              Distraction isn't an accident — it's your brain hunting for stimulation.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You open your phone to do one thing… and 45 minutes later, you're on a completely unrelated dopamine spiral." },
                { id: 12, text: "You need background noise — like podcasts, TV, or music — just to focus or fall asleep." },
                { id: 13, text: "You scroll during movies, shows, or even conversations — even when you want to stay present." },
                { id: 14, text: "You switch from task to task constantly, not because you're lazy, but because boredom feels unbearable." },
                { id: 15, text: "You daydream, pace, or talk to yourself because your brain craves something interesting all the time." }
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
              4. The Risky Reward Seeker
            </h2>
            <p className="text-gray-600 italic">
              Impulse + thrill = dopamine goldmine.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You've made big purchases or life decisions in the moment — no plan, just vibes." },
                { id: 17, text: "You break rules or take shortcuts just to make things feel more exciting." },
                { id: 18, text: "You've overcommitted or said yes impulsively to things you regretted almost immediately." },
                { id: 19, text: "You chase intense emotions — even negative ones — because numbness feels worse." },
                { id: 20, text: "You get restless or irritated when routines feel too predictable or \"boring,\" even if they're helping." }
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
              5. The Emotional Dopamine Spiral
            </h2>
            <p className="text-gray-600 italic">
              When your brain seeks a hit… and your feelings take the fallout.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You feel frustrated for needing things to be fun or urgent and beat yourself up about the tasks left unfinished." },
                { id: 22, text: "You crash hard after dopamine highs — suddenly exhausted, emotional, or aimless." },
                { id: 23, text: "You blame yourself for not sticking to routines or finishing things you once loved." },
                { id: 24, text: "You keep chasing new things, but feel empty when the spark wears off — like nothing ever sticks." },
                { id: 25, text: "You shame-spiral about your \"bad habits.\"" }
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
              Dopamine-seeking behavior is common in ADHD and other conditions affecting executive function and reward processing. Your brain craves stimulation, novelty, and intensity to function optimally. This isn't about being irresponsible or reckless — it's about your brain's unique dopamine regulation. Understanding this can help you find healthier, sustainable ways to meet your brain's needs.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Build in Rewards:</strong> Pair boring tasks with small dopamine hits (music, snacks, movement)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Gamify Tasks:</strong> Use timers, challenges, or apps that make tasks feel more engaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Novelty Rotation:</strong> Switch between tasks or add variety to prevent boredom</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Body Movement:</strong> Use physical activity for healthy dopamine boosts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Pause Before Acting:</strong> Use the <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:underline">STOP skill</Link> before impulsive decisions</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/impulsivity" className="text-blue-600 hover:underline">
                → Impulsivity
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/hyperfixation" className="text-blue-600 hover:underline">
                → Hyperfixation
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/task-paralysis" className="text-blue-600 hover:underline">
                → Task Paralysis
              </Link>
              <Link href="/pages/neurodivergent/stims-special-interests" className="text-blue-600 hover:underline">
                → Stims & Special Interests
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
