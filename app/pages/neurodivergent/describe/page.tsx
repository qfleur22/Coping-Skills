'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function DescribeEmotionsPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Trouble Describing Emotions?
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                If you experience <Link href="/pages/neurodivergent/alexithymia" className="text-blue-600 hover:text-blue-800 underline">alexithymia</Link> or simply find it hard to put feelings into words, breaking down your emotional experience can be really helpful. It also allows us to take a step back and see how to regulate or understand our emotions, breaking down our emotional responses to meet our needs better and make any accommodations.
              </p>
              
              <div className="p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-gray-700 mb-3 font-semibold">An emotion consists of:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>the <strong>trigger/prompting event</strong></li>
                  <li>any <strong>interpretations, beliefs, or assumptions</strong> that you make</li>
                  <li><strong>physiological changes or sensations</strong> in the body</li>
                  <li>any <strong>urges or behaviors</strong> you might feel because of the emotion</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  See also: <Link href="/pages/neurodivergent/emotion-regulation" className="text-blue-600 hover:text-blue-800 underline">The Role of Emotions</Link> (DBT model of emotions as a process)
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Breaking Down an Emotional Experience
              </h2>
              <p className="text-gray-700 mb-4">
                Use these four questions to map what happened. You don't need perfect answers—just notice what you can.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">What was the prompting event?</h3>
                  <p className="text-gray-700 mb-2">
                    Describe the prompting event. Remember it can be a combination of things or an external or internal event.
                  </p>
                  <div className="bg-white p-3 rounded border border-gray-300 mt-2">
                    <p className="text-gray-500 italic">Example: Someone cancelled plans, I remembered a past argument, I was hungry and overstimulated...</p>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Interpretations</h3>
                  <p className="text-gray-700 mb-2">
                    Can you identify any thoughts or emotions you might have had in response? Are there any beliefs or past experiences that might have influenced this?
                  </p>
                  <div className="bg-white p-3 rounded border border-gray-300 mt-2">
                    <p className="text-gray-500 italic">Example: "They don't want to hang out with me," "I always mess things up," "I'm being rejected..."</p>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Physical Responses</h3>
                  <p className="text-gray-700 mb-2">
                    Noticing our physical response and changes during emotion responses can be helpful in identifying our emotions as well as regulating them.
                  </p>
                  <div className="bg-white p-3 rounded border border-gray-300 mt-2">
                    <p className="text-gray-500 italic">Example: Tight chest, clenched jaw, racing heart, stomach sore, heavy limbs, heat in face...</p>
                  </div>
                  <p className="text-gray-700 mt-3">
                    See also: <Link href="/pages/neurodivergent/alexithymia" className="text-blue-600 hover:text-blue-800 underline">Alexithymia</Link> (using body sensations as clues)
                  </p>
                </div>

                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Expressions</h3>
                  <p className="text-gray-700 mb-2">
                    Notice the expressions like the actions or urges you might want to act upon or the words you want to say.
                  </p>
                  <div className="bg-white p-3 rounded border border-gray-300 mt-2">
                    <p className="text-gray-500 italic">Example: Want to hide, want to text back angrily, want to cry, want to slam something, want to escape...</p>
                  </div>
                  <p className="text-gray-700 mt-3">
                    See also: <Link href="/pages/distress-tolerance/urge-surfing" className="text-blue-600 hover:text-blue-800 underline">Urge Surfing</Link> (riding urges without acting)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Common Emotional Experiences
              </h2>
              <p className="text-gray-700 mb-4">
                Sometimes it can be hard to describe or identify our emotions, so I've included this section to make it a little easier. You will find a list of common emotions like anger or anxiety and with each emotion, a list of common sensations or things you might experience.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">If you're ANGRY, you might experience:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>irritation</li>
                      <li>hurt</li>
                      <li>heart racing</li>
                      <li>feeling hot</li>
                      <li>hands clenching</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>inside is shaking</li>
                      <li>muscles tightening</li>
                      <li>mouth/jaw feel tight</li>
                      <li>a need to explode</li>
                      <li>like stomping or slamming</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">If you're ANXIOUS, you might experience:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>breathlessness</li>
                      <li>racing heart</li>
                      <li>fidgeting</li>
                      <li>frozen or tense</li>
                      <li>lump in throat</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>nausea</li>
                      <li>muscles tightening</li>
                      <li>overthinking</li>
                      <li>feeling clammy/cold</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">If you're SAD, you might experience:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>lonely</li>
                      <li>rejected</li>
                      <li>empty or hollow</li>
                      <li>a need to be alone</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>like crying</li>
                      <li>tired or fatigue</li>
                      <li>like you aren't interested</li>
                      <li>like you don't care</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded border border-purple-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">If you're JEALOUS, you might experience:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>rejection</li>
                      <li>insecure</li>
                      <li>racing heart</li>
                      <li>difficulty breathing</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>tight chest</li>
                      <li>feeling a need for control</li>
                      <li>racing thoughts</li>
                      <li>overthinking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-4 p-4 bg-green-50 rounded border border-green-200">
                <strong>Remember:</strong> Everyone experiences emotions differently, which means we might find we experience certain emotions uniquely. Use the above examples as a starting point, but build your own personal map below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Describing Your Emotions
              </h2>
              <p className="text-gray-700 mb-4">
                Everyone experiences emotions differently, which means we might find we experience certain emotions uniquely. You can use this worksheet to describe how you personally experience certain emotions. Use the previous section as a starting point if you need help identifying thoughts or urges/behaviours.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded border border-gray-300">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">When I'm _____________, I may experience:</h3>
                  <div className="bg-white p-4 rounded border border-gray-200 min-h-[100px]">
                    <p className="text-gray-400 italic text-sm mb-2">Body sensations, thoughts, urges, behaviors...</p>
                    <div className="space-y-1">
                      <div className="text-gray-300">_________________________________</div>
                      <div className="text-gray-300">_________________________________</div>
                      <div className="text-gray-300">_________________________________</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded border border-gray-300">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">When I'm _____________, I may experience:</h3>
                  <div className="bg-white p-4 rounded border border-gray-200 min-h-[100px]">
                    <p className="text-gray-400 italic text-sm mb-2">Body sensations, thoughts, urges, behaviors...</p>
                    <div className="space-y-1">
                      <div className="text-gray-300">_________________________________</div>
                      <div className="text-gray-300">_________________________________</div>
                      <div className="text-gray-300">_________________________________</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded border border-gray-300">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">When I'm _____________, I may experience:</h3>
                  <div className="bg-white p-4 rounded border border-gray-200 min-h-[100px]">
                    <p className="text-gray-400 italic text-sm mb-2">Body sensations, thoughts, urges, behaviors...</p>
                    <div className="space-y-1">
                      <div className="text-gray-300">_________________________________</div>
                      <div className="text-gray-300">_________________________________</div>
                      <div className="text-gray-300">_________________________________</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded border border-gray-300">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">When I'm _____________, I may experience:</h3>
                  <div className="bg-white p-4 rounded border border-gray-200 min-h-[100px]">
                    <p className="text-gray-400 italic text-sm mb-2">Body sensations, thoughts, urges, behaviors...</p>
                    <div className="space-y-1">
                      <div className="text-gray-300">_________________________________</div>
                      <div className="text-gray-300">_________________________________</div>
                      <div className="text-gray-300">_________________________________</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Use this with...
              </h2>
              <p className="text-gray-700 mb-4">
                Describing emotions works best when paired with other skills:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/alexithymia" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Alexithymia</p>
                  <p className="text-gray-600 text-sm">identifying feelings guide</p>
                </Link>
                <Link href="/pages/neurodivergent/emotion-regulation" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">The Role of Emotions</p>
                  <p className="text-gray-600 text-sm">DBT model of emotions</p>
                </Link>
                <Link href="/pages/neurodivergent/mindfulness-guide" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Neurodivergent Mindfulness</p>
                  <p className="text-gray-600 text-sm">observe/describe without judgment</p>
                </Link>
                <Link href="/pages/mindfulness/rain" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">RAIN</p>
                  <p className="text-gray-600 text-sm">investigate with curiosity</p>
                </Link>
                <Link href="/pages/distress-tolerance/urge-surfing" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Urge Surfing</p>
                  <p className="text-gray-600 text-sm">ride urges without acting</p>
                </Link>
                <Link href="/pages/flowchart/check-facts" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Check the Facts</p>
                  <p className="text-gray-600 text-sm">interpretations vs reality</p>
                </Link>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Reminder</h3>
              <p className="text-gray-700">
                You don't need to identify the "perfect" emotion word. Describing what you notice in your body, thoughts, and urges is enough to choose support that helps.
              </p>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/emotional-regulation/emotional-regulation" className="text-blue-600 hover:text-blue-800 underline">
                  Emotional Regulation Overview
                </Link>
                <Link href="/pages/emotional-regulation/opposite-action" className="text-blue-600 hover:text-blue-800 underline">
                  Opposite Action
                </Link>
                <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Affirmations
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackButton onClick={handleBack} />
    </div>
  );
}
