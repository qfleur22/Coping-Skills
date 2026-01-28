'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function OppositeActionPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Opposite Action (DBT Emotion Regulation)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-4">
                Opposite Action is a DBT Emotion Regulation skill for when your emotion doesn't fit the facts, or when acting on the emotion would make things worse. Instead of following the emotion's urge, you do the opposite action.
              </p>
              <p className="text-gray-700">
                This skill helps you change emotions by changing your behavior—acting opposite to what the emotion is telling you to do.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                When to use Opposite Action
              </h2>
              <p className="text-gray-700 mb-3">Use Opposite Action when:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Your emotion doesn't fit the facts (you've checked the facts and the emotion is unjustified)</li>
                <li>Acting on the emotion would make things worse</li>
                <li>You want to change the emotion</li>
                <li>The emotion is not effective for your goals</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Opposite Action
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1: Identify the emotion and its action urge
                </h3>
                <p className="text-gray-700 mb-2">What emotion are you feeling?</p>
                <p className="text-gray-700 mb-2">What does this emotion make you want to do?</p>
                <p className="text-gray-700 mb-2 font-medium">Examples:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Anger → attack, yell, get revenge</li>
                  <li>Fear → avoid, escape, hide</li>
                  <li>Sadness → withdraw, isolate, stay in bed</li>
                  <li>Shame → hide, avoid eye contact, disappear</li>
                  <li>Guilt → over-apologize, self-punish</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2: Check the facts
                </h3>
                <p className="text-gray-700 mb-2">
                  Does your emotion fit the facts? Use <a href="/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</a> to determine if the emotion is justified.
                </p>
                <p className="text-gray-700 mb-2 font-medium">If the emotion fits the facts:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Use Problem Solving to change the situation</li>
                  <li>Or use other emotion regulation skills</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">If the emotion doesn't fit the facts:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Continue with Opposite Action</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3: Identify the opposite action
                </h3>
                <p className="text-gray-700 mb-2">What is the opposite of what the emotion wants you to do?</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Anger →</p>
                    <p className="text-gray-700 ml-4">Gently avoid, be kind, act with compassion</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Fear →</p>
                    <p className="text-gray-700 ml-4">Approach what you're avoiding, do what you're afraid of</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Sadness →</p>
                    <p className="text-gray-700 ml-4">Get active, approach (don't withdraw), do something pleasant</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Shame →</p>
                    <p className="text-gray-700 ml-4">Make eye contact, hold your head up, don't hide</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Guilt →</p>
                    <p className="text-gray-700 ml-4">Apologize and repair (if you did something wrong), then let it go</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4: Do the opposite action all the way
                </h3>
                <p className="text-gray-700 mb-2">Opposite Action works best when you do it:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>With your whole body (posture, facial expression, voice tone)</li>
                  <li>Repeatedly (not just once)</li>
                  <li>For long enough (until the emotion changes)</li>
                  <li>Without holding back</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5: Repeat until the emotion changes
                </h3>
                <p className="text-gray-700">
                  Keep doing the opposite action until you notice the emotion intensity decreasing. This may take time and repetition.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Important Notes
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Opposite Action is not about suppressing emotions—it's about changing them through behavior</li>
                  <li>Make sure you've checked the facts first—don't use Opposite Action if your emotion fits the facts</li>
                  <li>Start small and build up—you don't have to do the biggest opposite action right away</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-6 right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50"
      >
        Return to Landing
      </button>
    </div>
  );
}

