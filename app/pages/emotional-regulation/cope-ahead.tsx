'use client';

import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function CopeAheadPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleReturnToLanding = () => {
    router.push('/landing-page');
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-32 md:pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Cope Ahead (practice the hard moment before it happens)
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                What is this for?
              </h2>
              <p className="text-gray-700 mb-4">
                Cope Ahead is a DBT skill for when you know a situation is coming that usually triggers big emotions (an appointment, conflict, social event, deadline, family call, hard conversation).
              </p>
              <p className="text-gray-700 mb-4">
                Instead of "winging it" and hoping you'll cope well, you rehearse a plan ahead of time—so your brain and body already have a path to follow.
              </p>
              <p className="text-gray-700">
                Think of it like preparing for a presentation: you review, practice, and show up steadier.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Step-by-step: Cope Ahead
              </h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 1 — Describe the situation (be specific)
                </h3>
                <p className="text-gray-700 mb-2">Write 2–3 sentences:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>What is likely to happen?</li>
                  <li>Where? When? With who?</li>
                  <li>What are the facts (not judgments)?</li>
                </ul>
                <p className="text-gray-700 mb-2">Then name:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>What emotions are likely?</li>
                  <li>What action urges might show up (avoid, lash out, freeze, shut down, people-please)?</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Example:</p>
                <p className="text-gray-700 ml-4 italic">
                  "Friday dinner with my partner's friends. I usually feel anxious and ashamed. My urge is to avoid, stay quiet, or leave early."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 2 — Choose the skills you will use
                </h3>
                <p className="text-gray-700 mb-3">Pick 1–3 skills you'll actually do in the moment.</p>
                <p className="text-gray-700 mb-2 font-medium">Good options:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>STOP (pause before reacting)</li>
                  <li>TIP (if body alarm is high)</li>
                  <li>Opposite Action (if fear/shame urges avoidance)</li>
                  <li>Check the Facts</li>
                  <li>DEAR MAN / GIVE / FAST (if there's a conversation)</li>
                  <li>Self-soothe / ACCEPTS (if you need to get through it)</li>
                  <li>Problem Solving (if action is needed)</li>
                </ul>
                <p className="text-gray-700 mb-2">Write them as a short plan:</p>
                <p className="text-gray-700 ml-4 mb-3 font-medium">
                  If X happens → I will do Y.
                </p>
                <p className="text-gray-700 mb-2 font-medium">Example:</p>
                <p className="text-gray-700 ml-4 italic">
                  "If I start spiraling, I'll STOP, do 3 breaths, and use Opposite Action by staying present and asking one question."
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 3 — Imagine the situation like you're in it
                </h3>
                <p className="text-gray-700 mb-2">
                  Close your eyes (or soften your gaze) and picture it vividly:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>what you see / hear</li>
                  <li>what your body feels</li>
                  <li>the exact moment you usually get triggered</li>
                </ul>
                <p className="text-gray-700 mt-3 font-semibold">
                  Important: imagine it from inside your body, not like you're watching a movie.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 4 — Rehearse coping effectively (all the way through)
                </h3>
                <p className="text-gray-700 mb-2">Now mentally practice the skill plan:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>What you do</li>
                  <li>What you say</li>
                  <li>Your tone</li>
                  <li>Your posture</li>
                  <li>What you tell yourself when it gets hard</li>
                </ul>
                <p className="text-gray-700 mb-2">Then rehearse: "What if it gets worse?"</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mb-3">
                  <li>Practice coping with new problems that come up</li>
                  <li>Practice coping with your most feared catastrophe</li>
                  <li>Practice staying effective anyway</li>
                </ul>
                <p className="text-gray-700 mb-2 font-medium">Example:</p>
                <p className="text-gray-700 ml-4 italic">
                  "If I sweat or feel awkward, I'll keep listening, ask a follow-up question, and remind myself: 'This is anxiety, not danger. I can ride the wave.'"
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Step 5 — End with relaxation
                </h3>
                <p className="text-gray-700 mb-2">After rehearsing, do 1–2 minutes of:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>slow breathing</li>
                  <li>unclenching jaw/shoulders</li>
                  <li>willing hands + half-smile</li>
                  <li>brief stretch</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  This teaches your nervous system: "I can face this and come back down."
                </p>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  A simple template you can copy/paste
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Situation:</strong></p>
                  <p><strong>Emotions + urges:</strong></p>
                  <p><strong>Skills I will use:</strong></p>
                  <p><strong>If-Then plan:</strong></p>
                  <p><strong>My feared moment:</strong></p>
                  <p><strong>What I will do anyway:</strong></p>
                  <p><strong>Aftercare / reward:</strong></p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Example (interview / appointment)
                </h3>
                <div className="space-y-2 text-gray-700 ml-4">
                  <p><strong>Situation:</strong> "I have an interview Tuesday at 2pm."</p>
                  <p><strong>Emotions + urges:</strong> anxiety, urge to over-explain or blank out.</p>
                  <p><strong>Skills:</strong> STOP + paced breathing + Wise Mind reminder.</p>
                  <p><strong>If-Then:</strong> "If my mind goes blank, I'll pause, breathe out slowly, and ask for the question to be repeated."</p>
                  <p><strong>Feared catastrophe:</strong> "They think I'm incompetent."</p>
                  <p><strong>Cope anyway:</strong> "I answer what I can, stay respectful, and remind myself I can handle disappointment."</p>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Tiny reminder
                </h3>
                <p className="text-gray-700">
                  Cope Ahead isn't about making the situation perfect.
                </p>
                <p className="text-gray-700">
                  It's about making you more prepared—so when the moment comes, you already know your next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
      <button
        onClick={handleReturnToLanding}
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-[calc(100%-2rem)] md:w-auto"
      >
        Return to Landing
      </button>
    </div>
  );
}

