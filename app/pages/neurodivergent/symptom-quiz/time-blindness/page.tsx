'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { SymptomQuizProgressBar } from '@/components/SymptomQuizProgressBar';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function TimeBlindnessPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'time-blindness';

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
              Time Blindness (IRL)
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
              1. The "Just One More Thing" Trap
            </h2>
            <p className="text-gray-600 italic">
              Time estimates in your brain are… let's just say "optimistic."
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You try to do one quick thing before leaving and end up running late." },
                { id: 2, text: "You tell yourself \"this will only take 5 minutes\" and it takes an hour." },
                { id: 3, text: "You constantly underestimate or overestimate how long tasks will take." },
                { id: 4, text: "You start getting ready way too late — even when you had all day. Or too early and end up killing time by doing something else which then makes you late." },
                { id: 5, text: "You pack 3 hours' worth of tasks into 45 minutes… whether it's physically possible or not." }
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
              2. Time Just… Disappears
            </h2>
            <p className="text-gray-600 italic">
              Time keeps on slippin' — but somehow only you didn't notice.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You completely lose track of time while working, scrolling, or doing something you enjoy. You suddenly look up and it's dark out, you haven't eaten all day, and you suddenly really need to pee." },
                { id: 7, text: "You regularly say \"wait, what time is it?!\" and panic." },
                { id: 8, text: "You miss appointments or deadlines simply because you forgot to check the clock." },
                { id: 9, text: "You have no sense of how much time has passed unless you set an alarm." },
                { id: 10, text: "You plan to leave early but always end up rushing out the door last minute." }
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
              3. You Live in "Now" or "Not Now"
            </h2>
            <p className="text-gray-600 italic">
              If it's not happening right now, it's like it doesn't exist at all.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You delay tasks endlessly because they don't feel urgent right now." },
                { id: 12, text: "You over-prioritise \"urgent\" things that are actually less important." },
                { id: 13, text: "You struggle to start long-term projects until the very last second." },
                { id: 14, text: "You think about doing something for days… but never actually do it." },
                { id: 15, text: "You only remember important things at night or when it's too late to act on them." }
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
              4. You Rely on External Time Anchors
            </h2>
            <p className="text-gray-600 italic">
              Without alarms or calendars, time is just a wibbly-wobbly guess-fest.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You depend heavily on alarms, timers, or reminders to manage your day." },
                { id: 17, text: "You keep checking the clock during tasks because you don't trust your sense of time." },
                { id: 18, text: "You need others to remind you when to start or stop doing things." },
                { id: 19, text: "You completely lose your place in time without visual cues (like light outside or a visible clock)." },
                { id: 20, text: "You often forget what day of the week it is — or what month." }
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
              5. Your Time Perception Impacts Everything
            </h2>
            <p className="text-gray-600 italic">
              Time moves either too fast or too slow — like your internal clock just doesn't sync with the real world.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You feel like time moves either too fast or too slow — like your internal clock just doesn't sync with the real world." },
                { id: 22, text: "You spiral when things take longer than planned — even if they should've taken that long — and feel like you've failed somehow." },
                { id: 23, text: "You always think you have more time than you do — and feel blindsided when you realise you don't." },
                { id: 24, text: "You avoid starting things because you genuinely have no idea how long they'll take — and that uncertainty feels paralysing." },
                { id: 25, text: "You look back at the day and feel gutted — like time just vanished and you can't explain where it went or what you even did." }
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
              Time blindness is common in ADHD, autism, and executive dysfunction. Your brain struggles to track, estimate, or feel the passage of time accurately. This isn't about being careless or irresponsible — it's a genuine neurological difference in how you process temporal information. External tools and accommodations can help bridge the gap.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Visual Timers:</strong> Use analog clocks or visual countdown timers so you can see time passing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Time Blocking:</strong> Schedule tasks in your calendar with buffer time built in</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Multiple Alarms:</strong> Set reminders for "start getting ready," "leave in 10 min," "leave now"</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Add Buffer Time:</strong> Always estimate tasks will take 1.5x longer than you think</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Accountability Partners:</strong> Ask someone to check in or help you stay on track</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/task-paralysis" className="text-blue-600 hover:underline">
                → Task Paralysis
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/executive-dysfunction" className="text-blue-600 hover:underline">
                → Executive Dysfunction
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/object-permanence" className="text-blue-600 hover:underline">
                → Object Permanence
              </Link>
              <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:underline">
                → Personal Care Plan
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
