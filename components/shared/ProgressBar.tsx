'use client';

import { usePathname } from 'next/navigation';

const steps = [
  { id: 'feelings', label: "Knowing what you're feeling", path: '/feelings' },
  { id: 'self-care', label: 'Self-care', path: '/self-care' },
  { id: 'distress-tolerance', label: 'Distress tolerance', path: '/distress-tolerance' },
  { id: 'check-facts', label: 'Check the facts', path: '/check-facts' },
  { id: 'problem-solve', label: 'Problem solve', path: '/problem-solve' },
  { id: 'soothe', label: 'Soothe', path: '/soothe' },
];

const stepPathMap: Record<string, string> = {
  '/': 'feelings',
  '/feelings': 'feelings',
  '/change': 'feelings',
  '/confirmation': 'feelings',
  '/self-care': 'self-care',
  '/changing-your-feelings': 'self-care',
  '/gauge-overwhelm': 'distress-tolerance',
  '/distress-tolerance': 'distress-tolerance',
  '/regulate': 'check-facts',
  '/reaction': 'check-facts',
  '/check-facts': 'check-facts',
  '/change-situation': 'problem-solve',
  '/problem-solve': 'problem-solve',
  '/soothe': 'soothe',
};

export const ProgressBar = () => {
  const pathname = usePathname();

  if (pathname === '/landing-page' || pathname === '/') {
    return null;
  }

  const currentStepId = stepPathMap[pathname] || '';
  const currentStepIndex = steps.findIndex((step) => step.id === currentStepId);

  const getCompletedSteps = () => {
    if (currentStepIndex === -1) {
      return [];
    }
    return steps.slice(0, currentStepIndex + 1).map((step) => step.id);
  };

  const completedSteps = getCompletedSteps();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 py-4 px-4 z-40">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between relative">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.includes(step.id);
            const isLast = index === steps.length - 1;
            const nextStepCompleted = !isLast && completedSteps.includes(steps[index + 1].id);

            return (
              <div key={step.id} className="flex items-center flex-1 relative">
                <div className="flex flex-col items-center w-full">
                  <div
                    className={`w-4 h-4 rounded-full transition-colors duration-200 cursor-pointer z-10 ${
                      isCompleted ? 'bg-green-500' : 'bg-white border-2 border-gray-300'
                    }`}
                    title={isCompleted ? `Completed: ${step.label}` : `Not completed: ${step.label}`}
                  />
                </div>
                {!isLast && (
                  <div
                    className={`h-0.5 absolute top-2 left-1/2 transition-colors duration-200 ${
                      isCompleted || nextStepCompleted ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                    style={{ width: 'calc(100% - 16px)', transform: 'translateX(8px)' }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

