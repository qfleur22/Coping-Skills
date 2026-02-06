'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { SymptomQuizProgressBar } from '@/components/SymptomQuizProgressBar';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function ObjectPermanencePage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'object-permanence';

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
              Object Permanence (IRL)
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
              1. Out of Sight, Out of Brain
            </h2>
            <p className="text-gray-600 italic">
              If you can't see it, your brain acts like it never existed in the first place.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You forget food exists if it's behind closed doors, not in a transparent container or sitting behind something else." },
                { id: 2, text: "You forget you own certain clothes unless they're already out or visible. You're constantly like \"ohh I totally forgot I had this shirt.\"" },
                { id: 3, text: "You forget to eat the leftovers, take your medications, or to drink water unless they're right there in front of you." },
                { id: 4, text: "You lose/misplace items constantly — keys, phone, wallet — because once you set them down, they vanish from your mind." },
                { id: 5, text: "You buy duplicates of things you already own because you literally forgot they existed." }
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
              2. People Disappear, Too
            </h2>
            <p className="text-gray-600 italic">
              Your brain doesn't just forget objects — it forgets people are still real, thinking of you, and waiting.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You genuinely forget to reply to texts or emails — not because you don't care, but because once you close the app, the person disappears from your mind." },
                { id: 7, text: "You lose track of relationships — if you don't see or talk to someone regularly, you forget to check in or reach out." },
                { id: 8, text: "You assume if you haven't heard from someone, they've moved on or forgotten you — even if they're just busy." },
                { id: 9, text: "You feel shocked when you remember an old friend or loved one you haven't contacted in weeks or months." },
                { id: 10, text: "You forget people have feelings about your silence — like they might be hurt, worried, or confused why you disappeared." }
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
              3. Responsibilities Vanish Into the Void
            </h2>
            <p className="text-gray-600 italic">
              Tasks, deadlines, and commitments slip away the moment they're not actively in front of your face.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "You forget appointments, meetings, or deadlines unless you write them down immediately — and even then, only if you check your planner." },
                { id: 12, text: "You intend to do something later… then forget it existed until it's too late." },
                { id: 13, text: "You rely heavily on alarms, reminders, or other people to remember things for you." },
                { id: 14, text: "You panic when you finally remember the thing you forgot — it's usually urgent by then." },
                { id: 15, text: "You've missed bills, birthdays, or important events — not out of carelessness, but because they genuinely vanished from your mind." }
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
              4. You're Fighting Your Brain, Not Being "Careless"
            </h2>
            <p className="text-gray-600 italic">
              It's not a memory problem, willpower issue, or character flaw — it's how your brain processes what's "real" right now.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You've tried lists, apps, and systems to remember things — but if you don't see them, they're useless." },
                { id: 17, text: "You feel like you're living in \"now\" or \"not now\" — the future literally doesn't feel real until it's happening." },
                { id: 18, text: "You've been called forgetful, flakey, or unreliable — even though you're trying as hard as you can." },
                { id: 19, text: "You're shocked when people say you've hurt them by not checking in — it genuinely didn't cross your mind." },
                { id: 20, text: "You wish your brain would just… remember. But it doesn't work that way." }
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
              5. The Guilt + Anxiety Spiral
            </h2>
            <p className="text-gray-600 italic">
              Forgetting things creates shame, which creates anxiety, which makes you avoid the thing even more.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You feel deep guilt about forgotten texts, missed calls, or neglected relationships." },
                { id: 22, text: "You avoid opening messages or emails because you're scared of what you forgot." },
                { id: 23, text: "You isolate more because forgetting feels like failing — and you don't want to hurt anyone else." },
                { id: 24, text: "You beat yourself up for \"not caring enough\" — even though you do care, your brain just doesn't remind you." },
                { id: 25, text: "You wish people understood — it's not malice, it's your brain working differently." }
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
              Object permanence difficulties are common in ADHD, autism, and anxiety. Your brain struggles to maintain awareness of things (or people) when they're not physically present. This isn't about not caring — it's about how your working memory and attention systems process information. Understanding this can help you build systems that work with your brain, not against it.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Visual Systems:</strong> Use transparent containers, open shelving, or leave items where you can see them</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Digital Reminders:</strong> Set recurring alarms for medications, meals, and check-ins</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Pin Important Texts:</strong> Keep key conversations at the top of your messages</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Same-Place Rule:</strong> Always put essentials (keys, phone, wallet) in the exact same spot</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Check-in Rituals:</strong> Schedule regular times to review messages, tasks, and relationships</span>
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
              <Link href="/pages/neurodivergent/symptom-quiz/task-paralysis" className="text-blue-600 hover:underline">
                → Task Paralysis
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/time-blindness" className="text-blue-600 hover:underline">
                → Time Blindness
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
