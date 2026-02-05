'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function TaskParalysisPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'task-paralysis';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">
              Task Paralysis (IRL)
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
              1. You Want to Start… But Physically Can't
            </h2>
            <p className="text-gray-600 italic">
              The desire is there — but your body's stuck in a game of red light, green light… and it's all red lights.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You stare at a task knowing it needs to be done — but your body won't move." },
                { id: 2, text: "You open your laptop to work, then sit frozen for 45 minutes doing absolutely nothing." },
                { id: 3, text: "You procrastinate even things you enjoy — the \"starting\" part feels impossible." },
                { id: 4, text: "You sit down to do the thing, then somehow end up scrolling, snacking, or dissociating." },
                { id: 5, text: "You get stuck choosing where to start — so you don't start at all." }
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
              2. It Feels Bigger Than It Actually Is
            </h2>
            <p className="text-gray-600 italic">
              The task is small. Your brain turns it into a dragon guarding a lava pit of shame.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "A simple task (like replying to an email) feels like a mountain to climb." },
                { id: 7, text: "You spend more time mentally preparing for a task than actually doing it." },
                { id: 8, text: "You think, \"I'll just do it later\"… then avoid it for weeks." },
                { id: 9, text: "You rewrite or reorganise your to-do list endlessly instead of actually doing anything." },
                { id: 10, text: "You feel so overwhelmed by your list, you do… none of it." }
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
              3. Perfectionism, Fear + Decision Paralysis
            </h2>
            <p className="text-gray-600 italic">
              You're not procrastinating out of laziness — you're dodging failure, judgement, and the unknown.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You avoid starting because you're afraid you'll mess it up." },
                { id: 12, text: "You wait for the perfect moment to begin — the right mood, right setup, no distractions… which never comes." },
                { id: 13, text: "You feel like you need a full free day or a burst of motivation to even try." },
                { id: 14, text: "You keep researching, planning, or prepping — because actually doing the thing feels too scary." },
                { id: 15, text: "Even tiny decisions — like what to eat — can send you into full analysis paralysis." }
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
              4. It Impacts Your Whole Life
            </h2>
            <p className="text-gray-600 italic">
              Task paralysis doesn't stay "just with work" — it bleeds into every corner of your life and relationships.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You're late replying to texts or calls — so you avoid them entirely, then feel guilty." },
                { id: 17, text: "You're chronically late or rush things at the last possible moment." },
                { id: 18, text: "You miss opportunities (deadlines, appointments, applications) because you couldn't get started in time." },
                { id: 19, text: "You feel exhausted from doing… nothing. The mental energy of \"not starting\" drains you." },
                { id: 20, text: "You beat yourself up, call yourself lazy, or feel deeply ashamed — even though you tried." }
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
              5. You Feel Stuck in a Guilt + Shame Loop
            </h2>
            <p className="text-gray-600 italic">
              The paralysis itself becomes the source of more paralysis — you're stuck, ashamed, then more stuck.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You know what you need to do — but the more you think about it, the harder it gets." },
                { id: 22, text: "You feel shame and guilt after avoiding something for too long — but still can't start." },
                { id: 23, text: "You dread checking messages or notifications you missed while you were frozen." },
                { id: 24, text: "You avoid household chores for so long that they snowball and make everything worse." },
                { id: 25, text: "You feel like no matter how hard you try, you're behind — and it's all your fault." }
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
              Task paralysis is common in ADHD, autism, anxiety, depression, and trauma. It's not about laziness or lack of motivation — it's about executive dysfunction, decision fatigue, sensory overload, or emotional overwhelm. Understanding this can help you find strategies that actually work instead of just pushing harder.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>The 2-Minute Rule:</strong> Commit to doing just 2 minutes of the task. Often, starting is the hardest part.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Body Doubling:</strong> Work alongside someone (in person or virtually) — their presence can help you start.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Micro-Tasking:</strong> Break the task down into absurdly small steps (e.g., "open document," "type one sentence").</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>External Cue:</strong> Set a timer, alarm, or ask someone to text you a reminder to start.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Parallel Tasks:</strong> If you can't do the main task, do something adjacent (e.g., tidy your desk before working).</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/executive-dysfunction" className="text-blue-600 hover:underline">
                → Executive Dysfunction
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/time-blindness" className="text-blue-600 hover:underline">
                → Time Blindness
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/object-permanence" className="text-blue-600 hover:underline">
                → Object Permanence
              </Link>
              <Link href="/pages/neurodivergent/tolerance-window" className="text-blue-600 hover:underline">
                → Window of Tolerance
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
  );
}
