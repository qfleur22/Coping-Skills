'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function EmotionalRegulationPage() {
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
            Emotional Regulation (DBT)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is Emotional Regulation?
              </h2>
              <p className="text-gray-700 mb-4">
                Emotional Regulation is a core DBT module focused on understanding and managing emotions effectively. It helps you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-4">
                <li>Understand how emotions work</li>
                <li>Reduce vulnerability to intense emotions</li>
                <li>Decrease emotional suffering</li>
                <li>Change unwanted emotions</li>
                <li>Increase positive emotions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Key Skills in This Module
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Understanding Emotions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><a href="/check-facts" className="text-blue-600 hover:text-blue-800 underline">Check the Facts</a> - Separate facts from interpretations</li>
                    <li><a href="/emotional-regulation/cognitive-vulnerability" className="text-blue-600 hover:text-blue-800 underline">Cognitive Vulnerability</a> - Notice distorted thoughts</li>
                    <li><a href="/emotional-regulation/mental-noting" className="text-blue-600 hover:text-blue-800 underline">Mental Noting & Thought Defusion</a> - Unhook from thoughts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Changing Emotions
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><a href="/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">Opposite Action</a> - Act opposite to emotion urges</li>
                    <li><a href="/emotional-regulation/letting-go" className="text-blue-600 hover:text-blue-800 underline">Letting Go</a> - Ride the wave of emotions</li>
                    <li><a href="/problem-solve" className="text-blue-600 hover:text-blue-800 underline">Problem Solving</a> - Change the situation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Reducing Vulnerability
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><a href="/self-care" className="text-blue-600 hover:text-blue-800 underline">Self-Care</a> - Take care of your body (PLEASE skills)</li>
                    <li><a href="/emotional-regulation/pleasant-activities" className="text-blue-600 hover:text-blue-800 underline">Pleasant Activities</a> - Build positive experiences</li>
                    <li><a href="/emotional-regulation/build-mastery" className="text-blue-600 hover:text-blue-800 underline">Build Mastery</a> - Feel capable</li>
                    <li><a href="/emotional-regulation/cope-ahead" className="text-blue-600 hover:text-blue-800 underline">Cope Ahead</a> - Prepare for difficult situations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    Being Effective
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li><a href="/emotional-regulation/being-effective" className="text-blue-600 hover:text-blue-800 underline">Being Effective</a> - Focus on what works</li>
                    <li><a href="/positive-self-talk" className="text-blue-600 hover:text-blue-800 underline">Positive Self-Talk</a> - Challenge negative thoughts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ABC PLEASE
              </h3>
              <p className="text-gray-700 mb-2">
                DBT's framework for reducing emotional vulnerability:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Accumulate</strong> positive emotions</li>
                <li><strong>Build</strong> mastery</li>
                <li><strong>Cope</strong> ahead</li>
                <li><strong>P</strong>hysical illness (treat it)</li>
                <li><strong>L</strong>eave time for rest</li>
                <li><strong>E</strong>at balanced meals</li>
                <li><strong>A</strong>void mood-altering substances</li>
                <li><strong>S</strong>leep well</li>
                <li><strong>E</strong>xercise</li>
              </ul>
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
