'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const categories = {
  mindfulness: {
    label: 'Mindfulness',
    pages: [
      { label: 'Mindfulness Overview', path: '/mindfulness' },
      { label: 'Body Scan', path: '/mindfulness/body-scan' },
      { label: 'Awareness', path: '/mindfulness/awareness' },
      { label: 'Breathing', path: '/mindfulness/breathing' },
      { label: 'Wise Mind', path: '/mindfulness/wise-mind' },
    ],
  },
  'distress-tolerance': {
    label: 'Distress Tolerance',
    pages: [
      { label: 'Distress Tolerance Overview', path: '/distress-tolerance' },
      { label: 'STOP', path: '/distress-tolerance/stop' },
      { label: 'TIP', path: '/distress-tolerance/tip' },
      { label: 'ACCEPTS', path: '/distress-tolerance/accepts' },
      { label: 'Self-Soothe', path: '/soothe' },
      { label: 'IMPROVE', path: '/distress-tolerance/improve' },
      { label: 'Radical Acceptance', path: '/distress-tolerance/radical-acceptance' },
      { label: 'Pros & Cons', path: '/distress-tolerance/pros-cons' },
      { label: 'Cost-Benefit Analysis', path: '/distress-tolerance/cost-benefit' },
      { label: 'RESISTT', path: '/distress-tolerance/resistt' },
      { label: 'Effective Rethinking', path: '/distress-tolerance/effective-rethinking' },
      { label: 'Muscle Relaxation', path: '/distress-tolerance/muscle-relaxation' },
      { label: 'Self-Care', path: '/self-care' },
    ],
  },
  'emotional-regulation': {
    label: 'Emotional Regulation',
    pages: [
      { label: 'Emotional Regulation Overview', path: '/emotional-regulation' },
      { label: 'Check the Facts', path: '/check-facts' },
      { label: 'Problem Solving', path: '/problem-solve' },
      { label: 'Opposite Action', path: '/emotional-regulation/opposite-action' },
      { label: 'Build Mastery', path: '/emotional-regulation/build-mastery' },
      { label: 'Cope Ahead', path: '/emotional-regulation/cope-ahead' },
      { label: 'Pleasant Activities', path: '/emotional-regulation/pleasant-activities' },
      { label: 'Letting Go', path: '/emotional-regulation/letting-go' },
      { label: 'Being Effective', path: '/emotional-regulation/being-effective' },
      { label: 'Mental Noting & Thought Defusion', path: '/emotional-regulation/mental-noting' },
      { label: 'Cognitive Vulnerability', path: '/emotional-regulation/cognitive-vulnerability' },
      { label: 'Positive Self-Talk', path: '/positive-self-talk' },
    ],
  },
  'interpersonal-skills': {
    label: 'Interpersonal Skills',
    pages: [
      { label: 'Interpersonal Skills Overview', path: '/interpersonal-skills' },
      { label: 'DEAR MAN', path: '/interpersonal-skills/dear-man' },
      { label: 'GIVE', path: '/interpersonal-skills/give' },
      { label: 'FAST', path: '/interpersonal-skills/fast' },
      { label: 'Interpersonal Intensity', path: '/interpersonal-skills/interpersonal-intensity' },
      { label: 'Interpersonal Myths & Truths', path: '/interpersonal-skills/interpersonal-myths' },
      { label: 'Communication Styles', path: '/interpersonal-skills/communication-styles' },
      { label: 'Assertive Communication', path: '/interpersonal-skills/assertiveness' },
      { label: 'Resistance and Conflict', path: '/interpersonal-skills/conflict' },
      { label: 'Ending Relationships', path: '/interpersonal-skills/ending-relationships' },
      { label: 'Interpersonal Mindfulness', path: '/interpersonal-skills/interpersonal-mindfulness' },
      { label: 'Finding Friends', path: '/interpersonal-skills/finding-friends' },
    ],
  },
  'crisis-skills': {
    label: 'Crisis Skills',
    pages: [
      { label: 'Am I Overwhelmed?', path: '/crisis' },
    ],
  },
  'flowchart': {
    label: 'Go through the interactive flow chart',
    pages: [],
    isFlowchart: true,
  },
};

export default function LandingPage() {
  const router = useRouter();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = ({ categoryId }: { categoryId: string }) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
    }
  };

  const handleFlowchart = () => {
    router.push('/');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
              I would like to practice...
            </h1>
          </div>

          <div className="space-y-3">
            {Object.entries(categories).map(([categoryId, category]) => (
              <div key={categoryId} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => {
                    if (category.isFlowchart) {
                      handleFlowchart();
                    } else {
                      toggleCategory({ categoryId });
                    }
                  }}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {category.label}
                  </span>
                  {!category.isFlowchart && (
                    <svg
                      className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                        expandedCategory === categoryId ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {expandedCategory === categoryId && category.pages.length > 0 && (
                  <div className="border-t border-gray-200">
                    {category.pages.map((page) => (
                      <button
                        key={page.path}
                        onClick={() => router.push(page.path)}
                        className="w-full px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-gray-700">{page.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
