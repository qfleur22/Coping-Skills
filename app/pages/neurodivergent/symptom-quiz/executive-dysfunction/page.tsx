'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { SymptomQuizProgressBar } from '@/components/SymptomQuizProgressBar';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function ExecutiveDysfunction() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'executive-dysfunction';

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
              Executive Dysfunction (IRL)
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
              1. Planning is a Whole Event
            </h2>
            <p className="text-gray-600 italic">
              Even small plans feel like giant puzzles — and your brain keeps hiding the corner pieces.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You forget appointments or important tasks unless they're in your face." },
                { id: 2, text: "You avoid setting goals because it feels overwhelming or pointless." },
                { id: 3, text: "You forget what step comes next while in the middle of doing something." },
                { id: 4, text: "You constantly underestimate or overestimate how long things take." },
                { id: 5, text: "You delay tasks because you're unsure where to start or how to do it \"right.\"" }
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
              2. Getting Started is Brutal
            </h2>
            <p className="text-gray-600 italic">
              It's not that you don't want to start — your brain just won't move from "thinking" to "doing."
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You put off tasks even when you want to do them." },
                { id: 7, text: "You sit down to start something and your brain completely blanks." },
                { id: 8, text: "You avoid tasks that aren't interesting or engaging — even urgent ones." },
                { id: 9, text: "You struggle to transition between tasks or \"shift gears.\"" },
                { id: 10, text: "You often think about doing something… and then just don't." }
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
              3. Following Through = Chaos
            </h2>
            <p className="text-gray-600 italic">
              You try. You really try. But somehow every path leads to another half-finished to-do list.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You start five things at once (laundry, email, tidying, dishes, dinner) and somehow finish none of them." },
                { id: 12, text: "You lose interest halfway through cleaning, then forget and leave everything half-done." },
                { id: 13, text: "You lose track of multi-step tasks like recipes or packing unless you check each step over and over." },
                { id: 14, text: "You get halfway through a task and just… stop. Not out of laziness, just mental fog or distraction." },
                { id: 15, text: "You frequently abandon things and return hours or days later — if you remember them at all." }
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
              4. Your Brain Plays Favourites
            </h2>
            <p className="text-gray-600 italic">
              It's not that you can't focus — it's that your brain picks favourites and ghosts the rest.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You spend three hours tinkering with the fonts on a document — but can't get yourself to start writing the actual content." },
                { id: 17, text: "You hyperfocus on unimportant tasks just because they're interesting — ignoring urgent things like bills or phone calls." },
                { id: 18, text: "You switch to new tasks impulsively because they suddenly feel more exciting, even if they're not important." },
                { id: 19, text: "You can't stick to a routine — integrating healthy habits seems hard to implement." },
                { id: 20, text: "You finish the easy or fun parts of a project and leave the challenging bits sitting untouched." }
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
              5. You Feel Like You're Failing (But You're Not)
            </h2>
            <p className="text-gray-600 italic">
              You're not lazy. You're not broken. You're running a race with invisible weights tied to your ankles.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You have brilliant ideas you believe in — but can't seem to follow through or bring them to life." },
                { id: 22, text: "You make detailed plans and systems — but forget they exist or abandon them when things get busy." },
                { id: 23, text: "You watch others manage daily life with ease and wonder why basic things feel impossible for you." },
                { id: 24, text: "You feel like no matter how much you work, you're behind — like your productivity never feels productive enough." },
                { id: 25, text: "You only complete tasks when there's a deadline, external pressure, or someone else relying on you." }
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
              Executive dysfunction affects your ability to plan, organize, initiate, and complete tasks. It's common in ADHD, autism, depression, anxiety, and brain injury. This isn't about willpower, intelligence, or laziness — it's about the brain's "management system" struggling to coordinate complex cognitive processes. Understanding this can help you build external systems and accommodations that support your executive functioning needs.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Break Tasks Into Micro-Steps:</strong> Write down every tiny step, even obvious ones like "open laptop"</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>External Brain Systems:</strong> Use calendars, timers, checklists, and visible reminders</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Body Doubling:</strong> Work alongside someone to help with task initiation and follow-through</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Start With 2 Minutes:</strong> Commit to just 2 minutes — often starting is the hardest part</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Build in Accountability:</strong> Share goals with others or use apps that create external structure</span>
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
              <Link href="/pages/neurodivergent/symptom-quiz/working-memory" className="text-blue-600 hover:underline">
                → Working Memory
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/inattentiveness" className="text-blue-600 hover:underline">
                → Inattentiveness
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/time-blindness" className="text-blue-600 hover:underline">
                → Time Blindness
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
