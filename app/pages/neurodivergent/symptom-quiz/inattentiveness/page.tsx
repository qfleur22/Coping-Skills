'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { SymptomQuizProgressBar } from '@/components/SymptomQuizProgressBar';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function InattentivenessPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'inattentiveness';

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
              Inattentiveness (IRL)
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
              1. Focus That Fizzles
            </h2>
            <p className="text-gray-600 italic">
              You try to focus… and your brain just quietly exits the group chat.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You start a task, then drift away mentally — and realise much later that you never came back to finish it." },
                { id: 2, text: "You sit through meetings or lectures but absorb almost nothing — your brain just didn't show up." },
                { id: 3, text: "You procrastinate things that require long or uninterrupted focus because it feels physically impossible." },
                { id: 4, text: "You rush through tasks just to get them over with — then have to fix the mistakes you didn't notice." },
                { id: 5, text: "You frequently zone out during one-on-one conversations, even when you \"really\" want to listen." }
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
              2. Distraction is Your Default Setting
            </h2>
            <p className="text-gray-600 italic">
              Everything is fighting for your attention — and your brain's throwing the game to the loudest bidder.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You get distracted by background sounds, movement, conversations, or even just a flickering light." },
                { id: 7, text: "You lose focus mid-conversation because a random thought completely hijacks your attention." },
                { id: 8, text: "You struggle to focus in open-plan spaces like classrooms or shared offices — too much stimulation." },
                { id: 9, text: "You rewash laundry or rebuy items because you forgot you'd already done it." },
                { id: 10, text: "You forget to return messages, respond to emails, or follow up — even when you had good intentions." }
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
              3. Forgetfulness + Daily Life Mayhem
            </h2>
            <p className="text-gray-600 italic">
              You're not careless — your memory just goes on unscheduled sabbaticals.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You lose essential items like your phone, keys, wallet, or glasses — constantly." },
                { id: 12, text: "You forget simple tasks like taking food out of the oven or grabbing your wallet on the way out." },
                { id: 13, text: "You miss appointments or deadlines — not because you didn't care, but because you forgot to remember." },
                { id: 14, text: "You leave things to the last minute and then scramble, even when you planned to start earlier." },
                { id: 15, text: "You regularly make avoidable mistakes — like entering the wrong info, missing steps, or clicking send too soon." }
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
              4. Organisation? We Don't Know Her
            </h2>
            <p className="text-gray-600 italic">
              It's not that you're disorganised on purpose — it's just that chaos keeps winning.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You struggle to organise your tasks, your workspace, or your thoughts in a clear way." },
                { id: 17, text: "You forget steps in routines (like brushing your teeth but forgetting to rinse or floss)." },
                { id: 18, text: "You miss key details in instructions or emails because you skim and space out while reading." },
                { id: 19, text: "You feel like your brain has 30 tabs open — and none of them are loading properly." },
                { id: 20, text: "You try to prioritise your to-do list but everything feels equally important… or equally impossible." }
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
              5. The Emotional Fallout
            </h2>
            <p className="text-gray-600 italic">
              It's not just about distraction — it's the shame, guilt, and constant self-doubt that pile on top.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You beat yourself up for \"not paying attention\" — even when you were trying your hardest." },
                { id: 22, text: "You feel ashamed when someone points out something you forgot… again." },
                { id: 23, text: "You feel guilty for making careless mistakes — even when they weren't actually your fault." },
                { id: 24, text: "You dread being seen as \"irresponsible\" or \"flaky\" even though you care deeply and try hard." },
                { id: 25, text: "You constantly question whether you're \"just lazy\" — but deep down you know that's not true." }
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
              Inattentiveness is a core feature of ADHD and can also appear with anxiety, depression, and burnout. Your attention system struggles to filter distractions, sustain focus, and organize information. This isn't about laziness or not trying hard enough — it's about how your brain processes and maintains attention. Understanding this can help you build systems that support your natural attention patterns.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>External Memory:</strong> Write everything down immediately — use voice memos, notes apps, or paper</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Visual Cues:</strong> Use sticky notes, alarms, and visible reminders for tasks and appointments</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Body Doubling:</strong> Work alongside someone to help maintain focus</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Pomodoro Technique:</strong> Break work into 25-minute focused intervals with breaks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Reduce Distractions:</strong> Use noise-cancelling headphones, close extra tabs, minimize visual clutter</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/working-memory" className="text-blue-600 hover:underline">
                → Working Memory
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/executive-dysfunction" className="text-blue-600 hover:underline">
                → Executive Dysfunction
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/task-paralysis" className="text-blue-600 hover:underline">
                → Task Paralysis
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/object-permanence" className="text-blue-600 hover:underline">
                → Object Permanence
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
