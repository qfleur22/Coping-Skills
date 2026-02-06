'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QuizNavButton } from '@/components/QuizNavButton';
import { SymptomQuizProgressBar } from '@/components/SymptomQuizProgressBar';
import { saveQuizScore } from '@/utils/quiz-storage';

export default function SensoryOverloadPage() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const currentSlug = 'sensory-overload';

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
              Sensory Overload (IRL)
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
              1. The World Gets Too Loud, Too Bright, Too Much
            </h2>
            <p className="text-gray-600 italic">
              Overload often starts as "everything is intense."
            </p>
            <div className="space-y-3">
              {[
                { id: 1, text: "Sounds feel sharper than usual — chewing, buzzing lights, notifications, traffic." },
                { id: 2, text: "Light feels painful or \"too bright,\" even if it doesn't bother other people." },
                { id: 3, text: "Movement in your peripheral vision makes your brain feel jumpy or nauseous." },
                { id: 4, text: "Smells (perfume, cleaning products, food) suddenly feel unbearable." },
                { id: 5, text: "Touch becomes \"wrong\" — clothes, hair, skin, textures, even gentle contact." }
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
              2. Your Brain Can't Filter Inputs Anymore
            </h2>
            <p className="text-gray-600 italic">
              It's not attention — it's the filter breaking.
            </p>
            <div className="space-y-3">
              {[
                { id: 6, text: "You can't follow what someone's saying if there's background noise." },
                { id: 7, text: "You lose your words, stutter, or go blank mid-thought." },
                { id: 8, text: "Decisions become impossible (even \"what do you want to eat?\")." },
                { id: 9, text: "You can't switch tasks — everything feels stuck, slow, or scrambled." },
                { id: 10, text: "You feel like you're processing one thing at a time, and everything else is piling up behind it." }
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
              3. Your Body Hits Alarm Mode Before You Can Explain
            </h2>
            <p className="text-gray-600 italic">
              Your body knows before you do.
            </p>
            <div className="space-y-3">
              {[
                { id: 11, text: "Your heart races, your chest tightens, or you feel shaky for \"no reason.\"" },
                { id: 12, text: "You get a headache, dizziness, nausea, or sudden fatigue." },
                { id: 13, text: "Your skin feels prickly, itchy, hot, or hypersensitive." },
                { id: 14, text: "You clench your jaw, shoulders, hands — bracing without noticing." },
                { id: 15, text: "You feel the urge to escape immediately (bathroom, outside, car, bed)." }
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
              4. The "Overload Behaviours" People Misread
            </h2>
            <p className="text-gray-600 italic">
              This can look rude or dramatic — it's nervous-system triage.
            </p>
            <div className="space-y-3">
              {[
                { id: 16, text: "You become irritable, snappy, or suddenly \"mean\" because your capacity is gone." },
                { id: 17, text: "You stop making eye contact, stop responding, or go quiet and flat." },
                { id: 18, text: "You cover your ears/eyes, put on headphones, hide under a blanket, or need darkness." },
                { id: 19, text: "You stim more (rocking, tapping, pacing, fidgeting) to keep yourself regulated." },
                { id: 20, text: "You cancel plans, leave early, or disappear to recover — even if you wanted to be there." }
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
              5. The Crash After: Shutdown, Meltdown, or Hangover
            </h2>
            <p className="text-gray-600 italic">
              What happens next depends on your nervous system — but it's real.
            </p>
            <div className="space-y-3">
              {[
                { id: 21, text: "You shut down: can't talk, can't move, can't make choices, just \"offline.\"" },
                { id: 22, text: "You melt down: crying, yelling, panic, intense emotion that feels uncontrollable." },
                { id: 23, text: "You dissociate or feel unreal, numb, floaty, or far away from your body." },
                { id: 24, text: "You need hours (or a full day) to recover — like a sensory hangover." },
                { id: 25, text: "You feel shame afterward and tell yourself you \"should've handled it,\" even though you hit a genuine limit." }
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
              Sensory overload happens when your nervous system receives too much input, too fast. It's common in autism, ADHD, sensory processing disorder, and trauma. Your brain's filtering system becomes overwhelmed, leading to shutdown, meltdown, or a need to escape. This isn't about being dramatic or weak — it's about your nervous system hitting a genuine limit. Understanding your sensory threshold can help you prevent overload and recover more effectively when it happens.
            </p>
          </div>

          {/* Quick Strategies */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Strategies to Try</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Name the Input:</strong> Identify what's overloading you (sound/light/touch/smell/movement/social)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Reduce Fast:</strong> Headphones, sunglasses, step outside, bathroom break, hoodie/blanket</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Exit Script:</strong> "I'm overloaded. I need quiet and 10 minutes."</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Recovery Rule:</strong> Don't problem-solve while overloaded — regulate first, explain later</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Prevention:</strong> Learn your early warning signs with <Link href="/pages/neurodivergent/symptom-quiz/interoception" className="text-blue-600 hover:underline">Interoception</Link></span>
              </li>
            </ul>
          </div>

          {/* Related Resources */}
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/pages/neurodivergent/symptom-quiz/sensory-sensitivities" className="text-blue-600 hover:underline">
                → Sensory Sensitivities
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/interoception" className="text-blue-600 hover:underline">
                → Interoception
              </Link>
              <Link href="/pages/neurodivergent/symptom-quiz/difficulty-processing" className="text-blue-600 hover:underline">
                → Difficulty Processing
              </Link>
              <Link href="/pages/neurodivergent/meltdowns" className="text-blue-600 hover:underline">
                → Meltdowns & Shutdowns
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
