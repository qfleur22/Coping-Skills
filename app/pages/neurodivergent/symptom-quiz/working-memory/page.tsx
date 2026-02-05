'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function WorkingMemoryPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'working-memory';

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
              Working Memory (IRL)
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
              1. Information That Just… Vanishes
            </h2>
            <p className="text-gray-600 italic">
              It's like your brain is a whiteboard — and life keeps sneaking in and wiping it clean mid-sentence.
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "You forget what someone just said — even if you were actively listening." },
                { id: 2, text: "You hear multi-step directions and forget them by the second step." },
                { id: 3, text: "You walk out of a meeting or class and instantly forget your action points or homework." },
                { id: 4, text: "You forget what you were about to say — mid-thought, mid-sentence, mid-idea." },
                { id: 5, text: "You silently repeat a name right after hearing it — and still can't recall it moments later." }
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
              2. Following Through is a Full-Time Job
            </h2>
            <p className="text-gray-600 italic">
              You can start a task — sure. Finishing it without falling into an attention black hole? That's another story.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You abandon tasks mid-way because you get distracted and can't remember where you were up to." },
                { id: 7, text: "You lose your place with verbal instructions — you prefer written ones, but video tutorials are often the most helpful." },
                { id: 8, text: "You take notes in lectures or meetings but can't understand them later because writing and listening is challenging." },
                { id: 9, text: "You miss crucial instructions and make mistakes — but can't even remember what you missed." },
                { id: 10, text: "You leave tabs, messages, or apps open to \"remind yourself\" what you were doing." }
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
              3. Complex Tasks Break Your Brain Buffer
            </h2>
            <p className="text-gray-600 italic">
              Your mental browser has too many tabs open, and the RAM is fried.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "Mental maths is nearly impossible — holding numbers in your head while solving equations doesn't compute." },
                { id: 12, text: "You constantly re-read recipe steps or check quantities — it's like your brain can't hold them all at once." },
                { id: 13, text: "You struggle to remember plot points, characters, or key details from a book or movie — either in the moment or later." },
                { id: 14, text: "You try to explain a book, podcast, or lesson you just took in… and your brain goes blank." },
                { id: 15, text: "You can't hold multiple pieces of information in your head at once — if it's not written down, it's gone." }
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
              4. Everyday Life = Scavenger Hunt
            </h2>
            <p className="text-gray-600 italic">
              You spend half your life looking for things you just had — and the other half wondering what you were supposed to do.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You misplace your wallet, keys, or phone constantly — even if you just had them in your hand." },
                { id: 17, text: "You forget appointments or deadlines — even after confirming them that same day." },
                { id: 18, text: "You think, \"I'll definitely remember this — it's important\"… and then completely forget it." },
                { id: 19, text: "Problem-solving is exhausting — like trying to think three steps ahead in a board game and instantly losing the plot." },
                { id: 20, text: "You have a hard time listening and thinking at the same time — like trying to formulate a reply while someone's still talking." }
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
              5. The Shame Spiral (a.k.a. The Emotional Fallout)
            </h2>
            <p className="text-gray-600 italic">
              The worst part isn't the forgetting — it's what you tell yourself about it.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You constantly say \"what?\" when someone tells you something, but you processed the information midway through them repeating themselves." },
                { id: 22, text: "You panic when someone asks a follow-up question and your mind goes totally blank — again." },
                { id: 23, text: "You feel embarrassed or ashamed when people point out how often you forget things." },
                { id: 24, text: "You've been accused of \"not listening\" or \"not caring\" when the truth is… you just forgot." },
                { id: 25, text: "You beat yourself up for forgetting something important — even though you knew it mattered at the time." }
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
              Working memory challenges are common in ADHD, autism, and learning differences. Your brain struggles to hold and manipulate information in the short term. This isn't about intelligence or effort — it's about the cognitive "workspace" available for temporarily storing information while you use it. Understanding this can help you build external memory systems that compensate for these challenges.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Write Everything Down:</strong> Use notebooks, phone notes, voice memos — externalize your memory</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Break Tasks Into Steps:</strong> Write out each step and check them off as you go</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Use Visual Aids:</strong> Checklists, diagrams, and visual reminders help bypass working memory limits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Repeat Back Information:</strong> Paraphrase instructions to confirm understanding and encode them better</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Ask for Written Instructions:</strong> Don't rely on verbal directions alone</span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/inattentiveness" className="text-blue-600 hover:underline">
                → Inattentiveness
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/executive-dysfunction" className="text-blue-600 hover:underline">
                → Executive Dysfunction
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/object-permanence" className="text-blue-600 hover:underline">
                → Object Permanence
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/task-paralysis" className="text-blue-600 hover:underline">
                → Task Paralysis
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
