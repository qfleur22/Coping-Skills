'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BackButton } from '@/components/shared/BackButton';
import { NextButton } from '@/components/shared/NextButton';

export default function DistressTolerancePage() {
  const router = useRouter();
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.tooltip-container') && !target.closest('.tooltip-button')) {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeTooltip]);

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/pages/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            I would like to practice Distress Tolerance
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-4">
                Use Distress Tolerance when emotions feel too big right now and you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>can't fix the problem immediately,</li>
                <li>and you can't afford to make things worse.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The goal is not "feel great." The goal is: get through the next minutes safely, then come back to problem-solving later.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1 — Quick check (10 seconds)
              </h2>
              <p className="text-gray-700 mb-3">Pick one:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Crisis level (0–10): ____</li>
                <li>Urge: "I want to ____."</li>
              </ul>
              <p className="text-gray-700 mt-4">
                If your urge includes harming yourself or someone else, jump to Step 2 (<Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link>) first.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">STOP</Link> (1 minute)
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>S — <Link href="/pages/distress-tolerance/stop" className="text-blue-600 hover:text-blue-800 underline">Stop</Link>:</strong> Freeze for a moment. Don't react yet.</li>
                <li><strong>T — Take a step back:</strong> Physically step back or mentally pause.</li>
                <li><strong>O — Observe:</strong> Notice what's happening (emotion, thoughts, body cues, urges).</li>
                <li><strong>P — Proceed mindfully:</strong> Choose the next right step (not the fastest one).</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Now choose one tool below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3 — <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> (2–5 minutes)
              </h2>
              <p className="text-gray-700 mb-4">
                Use <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> when your body feels "revved up" (panic, rage, intense anxiety). <Link href="/pages/distress-tolerance/tipp" className="text-blue-600 hover:text-blue-800 underline">TIPP</Link> targets your physiology so your mind can catch up.
              </p>
              <p className="text-gray-700 mb-3">Pick one (or do two):</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>T — Temperature (30–60 seconds)</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Splash cold water on your face or hold something cold to your cheeks/eyes.</li>
                  </ul>
                </li>
                <li><strong>I — Intense exercise (30–90 seconds)</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Do jumping jacks, brisk stairs, or a <Link href="/pages/interpersonal-skills/fast" className="text-blue-600 hover:text-blue-800 underline">fast</Link> walk in place until you feel a shift.</li>
                  </ul>
                </li>
                <li><strong>P — Paced <Link href="/pages/mindfulness/breathing" className="text-blue-600 hover:text-blue-800 underline">breathing</Link> (1–2 minutes)</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Breathe out slower than you breathe in (example: 5 in, 7 out).</li>
                  </ul>
                </li>
                <li><strong>P — Paired muscle relaxation (1–2 minutes)</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Gently tense muscles on the inhale, relax on the exhale, notice the difference.</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">Then re-rate: distress 0–10 = ____</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4 — <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link> (5–15 minutes)
              </h2>
              <p className="text-gray-700 mb-4">
                Use <Link href="/pages/distress-tolerance/accepts" className="text-blue-600 hover:text-blue-800 underline">ACCEPTS</Link> to get through the moment when you can't solve the problem right now.
              </p>
              <p className="text-gray-700 mb-3">Pick one letter:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>A — Activities:</strong> do something absorbing (shower, clean a corner, game, walk).</li>
                <li><strong>C — Contributing:</strong> small help (text support, tidy shared space, kind act).</li>
                <li><strong>C — Comparisons:</strong> remember times you survived hard moments before.</li>
                <li><strong>E — Emotions (opposite):</strong> watch/listen to something that shifts mood.</li>
                <li><strong>P — Pushing away:</strong> set it on a "mental shelf" for 10 minutes.</li>
                <li><strong>T — Thoughts:</strong> do a different mental task (count backward, puzzle).</li>
                <li><strong>S — Sensations:</strong> safe strong sensation (mint, cold drink, textured object).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 5 — <Link href="/pages/distress-tolerance/soothe" className="text-blue-600 hover:text-blue-800 underline">Self-soothe</Link> with the 5 senses (3–10 minutes)
              </h2>
              <p className="text-gray-700 mb-4">
                Self-soothing means using sight, sound, touch, smell, taste to comfort your nervous system.
              </p>
              <p className="text-gray-700 mb-3">Pick one sense:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Sight:</strong> candle, calming image, nature view.</li>
                <li><strong>Sound:</strong> music, white noise, calming playlist.</li>
                <li><strong>Touch:</strong> warm blanket, soft fabric, shower.</li>
                <li><strong>Smell:</strong> tea, lotion, essential scent you like.</li>
                <li><strong>Taste:</strong> warm drink, mint, something comforting.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 6 — Return to the next best skill (10 seconds)
              </h2>
              <p className="text-gray-700 mb-3">When distress drops even a little:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>If the problem is still there → go to <Link href="/pages/flowchart/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</Link>.</li>
                <li>If the emotion fits facts but is intense → <Link href="/pages/flowchart/regulate" className="text-blue-600 hover:text-blue-800 underline">Emotion Regulation</Link> tools.</li>
                <li>If it's about another person → <Link href="/pages/interpersonal-skills/interpersonal-skills" className="text-blue-600 hover:text-blue-800 underline">Interpersonal Skills</Link>.</li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm italic">
                (DBT teaches distress tolerance as "survive the moment" skills so you can do the next effective thing.)
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-orange-300">
              <h2 className="text-2xl font-semibold mb-4 text-orange-800 text-center">
                Explore Distress Tolerance Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/stop')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      STOP
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-stop' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-stop' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">STOP skill: Stop, Take a step back, Observe, Proceed mindfully. A quick crisis intervention to prevent impulsive actions.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/tipp')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      TIPP
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-tipp' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-tipp' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">TIPP skill: Temperature, Intense exercise, Paced breathing, Paired muscle relaxation. Physically-based skills to reduce intense emotions quickly.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/accepts')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      ACCEPTS
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-accepts' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-accepts' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">ACCEPTS skill: Activities, Contributing, Comparisons, Emotions (opposite), Pushing away, Thoughts, Sensations. Distraction techniques to get through difficult moments.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/soothe')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Self-Soothe
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-soothe' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-soothe' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">Self-soothing techniques using the five senses to comfort your nervous system. Helps reduce distress when you can't change the situation.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/improve')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      IMPROVE
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-improve' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-improve' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">IMPROVE skill: Imagery, Meaning, Prayer, Relaxation, One thing, Vacation, Encouragement. Ways to make difficult moments more bearable.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/interpersonal-skills/radical-acceptance')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Radical Acceptance
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-radical-acceptance' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-radical-acceptance' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">Accept reality as it is without fighting it. Reduces suffering by stopping the struggle against what cannot be changed.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/interpersonal-skills/pros-cons')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Pros & Cons
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-pros-cons' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-pros-cons' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">Weigh the pros and cons of acting on an urge versus not acting. Helps you make wise decisions in crisis moments.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/cost-benefit')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Cost-Benefit Analysis
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-cost-benefit' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-cost-benefit' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">Analyze the costs and benefits of different options. Helps you make effective choices when emotions are high.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/effective-rethinking')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Effective Rethinking
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-effective-rethinking' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-effective-rethinking' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">Reframe situations in ways that are more effective and less distressing. Helps shift perspective when stuck.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/interpersonal-skills/muscle-relaxation')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Muscle Relaxation
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-muscle-relaxation' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-muscle-relaxation' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">Progressive muscle relaxation techniques to reduce physical tension and calm your nervous system.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/self-care')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Self-Care
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-self-care' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-self-care' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">Check in with your basic needs (hydration, medication, nourishment, rest) and get guidance on self-care tasks. Taking care of your body lowers emotional vulnerability.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/turning-mind')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Turning the Mind
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-turning-mind' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-turning-mind' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">Practice choosing acceptance repeatedly when your mind wants to fight reality. Helps maintain radical acceptance.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/willingness-half-smile')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Willingness & Half-Smile
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-willingness-half-smile' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-willingness-half-smile' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">Willingness: do what works even when you don't feel like it. Half-Smile: use your body to signal acceptance to your mind.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>

                <div className="tooltip-container">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => router.push('/pages/distress-tolerance/nightmare-protocol')}
                      className="flex-1 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-200 text-left shadow-md"
                    >
                      Nightmare Protocol
                    </button>
                    <button
                      onClick={() => toggleTooltip({ tooltipId: 'dt-nightmare-protocol' })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                      aria-label="What is on this page?"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  {activeTooltip === 'dt-nightmare-protocol' && (
                    <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                      <p className="text-sm text-gray-700">DBT protocol for reducing nightmare intensity by rewriting endings and rehearsing safer versions while awake.</p>
                      <button onClick={() => setActiveTooltip(null)} className="mt-2 text-xs text-blue-600 hover:text-blue-800">Close</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <div className="flex flex-col gap-2 md:fixed md:bottom-20 md:right-6 w-full md:w-auto md:z-50 mt-4 md:mt-0">
        <a
          href="/assets/Worksheets/distress tolerance.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >Try the Worksheet (pdf)</a>
        <a
          href="/assets/Worksheets/tip.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >TIP Worksheet (pdf)</a>
        <a
          href="/assets/Worksheets/tip-interact.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 md:px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 text-center"
        >Interactive Worksheet (pdf)</a>
        <button
          onClick={() => router.push('/pages/flowchart/regulate')}
          className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Continue to Regulation
        </button>
        <button
          onClick={() => router.push('/pages/landing-page')}
          className="px-4 md:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Return to Landing Page
        </button>
      </div>
    </div>
  );
}
