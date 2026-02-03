'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function AccessibleMindfulnessPage() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Accessible Mindfulness Exercises
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-gray-700 mb-4">
                It's really important to acknowledge and even celebrate the fact that everyone has a different brain and everyone responds to mindfulness differently, and that's okay too. Some individuals may find visualizing and breathing-based mindfulness practices difficult or uncomfortable, which means certain mindfulness practices may not work for them. Some individuals may struggle to focus on internal sensations like breathing or body checks.
              </p>
              <p className="text-gray-700 font-medium">
                Remember, just because certain practices don't work for you doesn't mean you're doing it wrong—it just means it doesn't work for you and you need to find different techniques that do work for you. As you explore these practices, remember to be gentle and check in with yourself. Ask yourself how your body is responding. Ask yourself what feelings come up before, during or after these practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Use Your Environment
              </h2>
              <p className="text-gray-700 mb-3">
                If you find yourself being pulled into your inner thoughts and sensations when using mindfulness, use your environment to ground yourself.
              </p>
              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200">
                Focus on your surroundings by naming objects like the books on your shelf, the patterns in the rug, the number of tiles in the bathroom. If it helps, try naming the objects out loud or focusing on the details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Mindfully Listen to Music
              </h2>
              <p className="text-gray-700 mb-3">
                Tuning into ourselves and sitting in silence can be uncomfortable or even triggering for some people. Mindfully listening to music can be a way to direct your attention from your internal experience to something outside yourself like music.
              </p>
              <p className="text-gray-700 p-4 bg-purple-50 rounded border border-purple-200">
                Pay attention to what you're hearing; listen to the layers of the music, the complexities, the sounds of each instrument.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Sound of Your Breath
              </h2>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Hold your hand in front of your mouth and exhale so you can hear the sound your breath makes. Continue exhaling and inhaling while maintaining the sound.
                </p>
                <p className="text-gray-700 p-4 bg-blue-50 rounded border border-blue-200 font-medium">
                  Concentrate on the sound of your breathing rather than counting your breathing, letting the sounds be your anchor.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Compare Two
              </h2>
              <p className="text-gray-700 mb-3">
                Find two objects that are similar like a pair of shoes, a couple of pillows, two mugs on your coffee table or a pair of candles next to each other.
              </p>
              <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200">
                Focus on noticing the differences of both objects: the shape and height, the texture, the colour and the small details of each object.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Visual Stimming
              </h2>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Trace patterns in the environment around you with your finger, or your eyes, like the cracks in the ceiling or the patterns in the rug.
                </p>
                <p className="text-gray-700 p-4 bg-purple-50 rounded border border-purple-200">
                  Alternatively, choose a word or even a sentence and trace the word in front of you, focusing on the way your finger moves through the air.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Explore with Play-Doh, Clay or Plasticine
              </h2>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Explore the modeling material with your hands and notice the texture, the smell and the colour.
                </p>
                <p className="text-gray-700 font-medium">
                  Experience it free from any expectation.
                </p>
                <p className="text-gray-700 p-4 bg-blue-50 rounded border border-blue-200">
                  As you knead the material with your hands, focus on any changes and how those changes feel. Roll it into a ball or flatten it with your hand.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Mindful Eating
              </h2>
              <div className="space-y-3">
                <p className="text-gray-700">
                  Pick a fruit which you can peel with your hands, like a banana, an orange, or my favourite a mandarin. As you peel it, notice the texture and what the layer reveals underneath.
                </p>
                <p className="text-gray-700 p-4 bg-green-50 rounded border border-green-200">
                  Notice the taste, texture, smell, colours and temperature with each bite.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Mindful Stimming
              </h2>
              <p className="text-gray-700 mb-3">
                Did you know that stimming can help us to focus and ground ourselves, as well as help us to regulate?
              </p>
              <p className="text-gray-700 p-4 bg-purple-50 rounded border border-purple-200">
                Sometimes, freeing the stim is the perfect way to create harmony and calm within us and bring us into the present moment. Try stim dancing or using some fidget items.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Find a Personal Anchor
              </h2>
              <p className="text-gray-700 mb-4">
                Breathing is often a common anchor in mindfulness practices but when we can't trust or use our breathing we can use a physical anchor like an object. Find an anchor that works for you, you might find that it's a personal object or a sensory object.
              </p>
              <p className="text-gray-700 mb-4">
                Practice mindfulness and ground yourself to the present moment with the anchor and explore it with whatever senses you prefer, use the anchor.
              </p>

              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Helpful Prompts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• What are your eyes or hands drawn to first?</li>
                  <li>• How does the object feel in your hand? Focus on the weight of the object...</li>
                  <li>• Is the object stationary or is it moving around?</li>
                  <li>• What does the surface of the object or item look like? Focus on the texture. Shiny? Dull? Multi-textured?</li>
                  <li>• Does the surface have one colour or multiple colours? Try looking at it in a different light or from a different angle...</li>
                  <li>• Does the object have round or sharp corners?</li>
                  <li>• Does the object have multiple surfaces? Notice how they all connect...</li>
                  <li>• Can you feel the difference in the surfaces and textures?</li>
                  <li>• Is the object rigid or is it bendable?</li>
                  <li>• What do you notice that's unique about it?</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Mindfulness with Pets
              </h2>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Observe Your Pet</h3>
                  <p className="text-gray-700 mb-2">
                    Observe your pet and the way your pet looks at you or the way they make you feel. What do you notice about your pet?
                  </p>
                  <p className="text-gray-700 mb-2">
                    Describe the way your pet looks by focusing on the texture of their fur, feathers or scales. Focus on the way their coat feels.
                  </p>
                  <p className="text-gray-700">
                    Participate by staying in the moment with your pet—perhaps talk to your pet or try cuddling them to stay present.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Use Your Senses with Your Pet</h3>
                  <p className="text-gray-700 mb-2">
                    You probably do this already if you have a soft and cuddly friend, but when you're upset, you can hold them or cuddle them, use your senses to focus on the way they feel, the way they sound when they purr and the way they smell, especially if you bury your face in their fur.
                  </p>
                  <p className="text-gray-700 italic">
                    Maybe don't taste your pet ;)
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">Activities with Your Pet</h3>
                  <p className="text-gray-700 mb-2">
                    Sometimes we might find it easier to be mindful while we're doing an activity: I know I do! You can do an activity or two with your pet/s!
                  </p>
                  <p className="text-gray-700">
                    Do an activity with your pet—washing them, grooming them or taking your pet for a walk. As you do so, focus on remaining present in the activity with your pet.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Mindfulness Summary
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 font-semibold mb-2">What mindfulness practices are most helpful for you?</p>
                  <div className="text-gray-700 ml-4">_______________</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-2">What are some signs that you need to use these skills?</p>
                  <div className="text-gray-700 ml-4">_______________</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-2">Can you identify any barriers or accommodations needed in using these skills?</p>
                  <div className="text-gray-700 ml-4">_______________</div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold mb-2">What reminders do you need to use these mindfulness tools?</p>
                  <div className="text-gray-700 ml-4">_______________</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Related Pages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Link href="/pages/mindfulness/mindfulness" className="text-blue-600 hover:text-blue-800 underline">
                  Mindfulness Overview
                </Link>
                <Link href="/pages/mindfulness/rain" className="text-blue-600 hover:text-blue-800 underline">
                  RAIN Mindfulness
                </Link>
                <Link href="/pages/mindfulness/wise-mind/wise-mind" className="text-blue-600 hover:text-blue-800 underline">
                  Wise Mind
                </Link>
                <Link href="/pages/neurodivergent/affirmations" className="text-blue-600 hover:text-blue-800 underline">
                  Neurodivergent Affirmations
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="text-blue-600 hover:text-blue-800 underline">
                  Personal Care Plan
                </Link>
                <Link href="/pages/neurodivergent/safe-space" className="text-blue-600 hover:text-blue-800 underline">
                  Creating a Sensory Safe Space
                </Link>
                <Link href="/pages/neurodivergent/overload" className="text-blue-600 hover:text-blue-800 underline">
                  Overload & Shutdown
                </Link>
                <Link href="/pages/distress-tolerance/distress-tolerance" className="text-blue-600 hover:text-blue-800 underline">
                  Distress Tolerance Overview
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
