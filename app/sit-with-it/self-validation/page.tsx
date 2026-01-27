'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';
import { NextButton } from '@/components/shared/NextButton';

export default function SelfValidationPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/sit-with-it');
  };

  const handleNext = () => {
    // TODO: Navigate to next step
    console.log('Next clicked');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Self-Validation (DBT)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What this is
              </h2>
              <p className="text-gray-700 mb-2">
                Self-validation means accepting that your emotion makes sense, even if you don't like it. This can reduce "secondary emotions" like shame about being sad or anger about being anxious.
              </p>
              <p className="text-gray-700">
                <strong>DBT Made Simple version:</strong> Acknowledge → Allow → Understand.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 1 — Acknowledge (20 seconds)
              </h2>
              <p className="text-gray-700 mb-2">
                Say one simple sentence:
              </p>
              <p className="text-gray-700 font-medium mb-2">
                "I'm feeling ____."
              </p>
              <p className="text-gray-700">
                No judging. No story. Just naming.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 2 — Allow (30 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Pick one statement and repeat it slowly:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>"It's okay to feel this."</li>
                <li>"I'm allowed to have this emotion."</li>
                <li>"Having this feeling doesn't mean I have to act on it."</li>
                <li>"This will pass, but right now it's here."</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 3 — Understand (1–2 minutes)
              </h2>
              <p className="mb-3 text-gray-700">
                Now give the emotion a context using facts, not insults.
              </p>
              <p className="mb-3 text-gray-700">
                Finish this sentence:
              </p>
              <p className="text-gray-700 font-medium mb-3">
                "It makes sense I feel ____ because ____."
              </p>
              <p className="mb-3 text-gray-700">
                <strong>Helpful prompts:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>"What happened right before this feeling?"</li>
                <li>"What did I need that I didn't get?"</li>
                <li>"What threat did my brain think was happening?"</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step 4 — One validating next step (30 seconds)
              </h2>
              <p className="mb-3 text-gray-700">
                Ask: "What's one small, kind, effective action I can take next?"
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Examples:</strong> drink water, text a friend, take a break, write one sentence, stretch.
              </p>
              <p className="text-gray-700">
                If your mind wanders, simply return to: "I'm feeling ____ and it makes sense."
              </p>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <NextButton onClick={handleNext} />
    </div>
  );
}
