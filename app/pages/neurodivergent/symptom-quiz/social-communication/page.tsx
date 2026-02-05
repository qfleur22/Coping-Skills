'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BackButton } from '@/components/shared/BackButton';

export default function SocialCommunicationPage() {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

  const handleBack = () => {
    router.back();
  };

  const handleCheckboxChange = ({ id }: { id: number }) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const symptoms = [
    {
      id: 1,
      title: "Difficulty with small talk and casual conversation",
      examples: [
        "You find it hard to know what to say when someone asks 'How are you?' beyond 'fine'",
        "Small talk feels exhausting or pointless",
        "You prefer deep, meaningful conversations over chitchat",
        "You struggle to think of things to say when there's a lull in conversation"
      ]
    },
    {
      id: 2,
      title: "Taking things literally",
      examples: [
        "You get confused when people say one thing but mean another",
        "Sarcasm doesn't always land for you",
        "You've been told 'I was just joking' after taking something seriously",
        "Idioms or figures of speech can be confusing (e.g., 'break a leg', 'it's raining cats and dogs')"
      ]
    },
    {
      id: 3,
      title: "Difficulty reading social cues",
      examples: [
        "You miss hints that someone wants to leave or change the subject",
        "You're not sure when it's your turn to speak in a group conversation",
        "You struggle to tell if someone is joking, being sarcastic, or serious",
        "Body language and facial expressions don't always make sense to you"
      ]
    },
    {
      id: 4,
      title: "Monologuing about your interests",
      examples: [
        "You can talk for a long time about topics you're passionate about",
        "You sometimes miss cues that others aren't as interested",
        "You've been told you 'talk at' people rather than 'with' them",
        "You get excited and info-dump without realizing time has passed"
      ]
    },
    {
      id: 5,
      title: "Difficulty maintaining eye contact",
      examples: [
        "Eye contact feels uncomfortable or overwhelming",
        "You look away when thinking or listening",
        "You've been told you need to 'look at people when they're talking'",
        "Focusing on someone's eyes makes it harder to process what they're saying"
      ]
    },
    {
      id: 6,
      title: "Scripting or rehearsing conversations",
      examples: [
        "You plan out what you'll say before phone calls or social interactions",
        "You have 'scripts' for common situations (ordering food, answering the door, etc.)",
        "You panic when conversations go off-script",
        "You replay conversations afterward to analyze what went wrong"
      ]
    },
    {
      id: 7,
      title: "Difficulty understanding unspoken rules",
      examples: [
        "You don't know when it's okay to interrupt or how to do it politely",
        "Social 'rules' seem arbitrary and confusing",
        "You've accidentally offended someone without meaning to",
        "You feel like everyone else got a manual for social situations that you missed"
      ]
    },
    {
      id: 8,
      title: "Preferring parallel play or solitary activities",
      examples: [
        "You enjoy being around people but doing your own thing",
        "You don't always feel the need to talk when hanging out",
        "You prefer activities where there's a clear structure or focus (games, projects, watching movies)",
        "Social situations without a 'purpose' feel awkward"
      ]
    },
    {
      id: 9,
      title: "Difficulty with phone calls",
      examples: [
        "Phone calls make you anxious",
        "You prefer texting because you have time to think about your response",
        "You avoid calling people even when it would be faster",
        "You struggle with the back-and-forth timing of phone conversations"
      ]
    },
    {
      id: 10,
      title: "Masking or 'performing' in social situations",
      examples: [
        "You feel like you're acting or playing a role when socializing",
        "You mimic others' body language and expressions",
        "Social interactions leave you exhausted (even if they went well)",
        "You feel like a different person in social settings vs. alone"
      ]
    }
  ];

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="container mx-auto px-4 py-8 pb-24">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
            Social Communication
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Check the experiences that resonate with you
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div className="p-4 bg-blue-50 rounded border border-blue-200">
              <p className="text-gray-700 mb-2">
                <strong>You've checked {checkedCount} out of {symptoms.length} experiences</strong>
              </p>
              <p className="text-gray-700 text-sm">
                There's no "passing" number. This is about understanding your experiences, not scoring yourself.
              </p>
            </div>

            <div className="space-y-6">
              {symptoms.map((symptom) => (
                <div key={symptom.id} className="p-6 bg-gray-50 rounded-lg border border-gray-300">
                  <div className="flex items-start space-x-4">
                    <input
                      type="checkbox"
                      id={`symptom-${symptom.id}`}
                      checked={checkedItems[symptom.id] || false}
                      onChange={() => handleCheckboxChange({ id: symptom.id })}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={`symptom-${symptom.id}`}
                        className="text-lg font-semibold text-gray-800 cursor-pointer"
                      >
                        {symptom.id}. {symptom.title}
                      </label>
                      <ul className="mt-3 space-y-2 ml-4">
                        {symptom.examples.map((example, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start">
                            <span className="mr-2 text-blue-600">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-lg border-2 border-green-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                What This Might Mean
              </h3>
              <p className="text-gray-700 mb-4">
                If many of these experiences resonate with you, you might benefit from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Learning about autistic communication styles and double empathy</li>
                <li>Exploring scripts and strategies for common social situations</li>
                <li>Finding neurodivergent-friendly social spaces</li>
                <li>Discussing these experiences with a therapist familiar with autism</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Related Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/pages/neurodivergent/symptom-quiz/masking" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Masking</p>
                  <p className="text-gray-600 text-sm">Explore masking experiences</p>
                </Link>
                <Link href="/pages/neurodivergent/care-plan" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Personal Care Plan</p>
                  <p className="text-gray-600 text-sm">Build your support system</p>
                </Link>
                <Link href="/pages/neurodivergent/symptom-quiz" className="p-3 bg-white rounded border border-purple-200 hover:bg-purple-100 transition-colors">
                  <p className="text-blue-600 hover:text-blue-800 font-semibold">Back to Symptom Wheel</p>
                  <p className="text-gray-600 text-sm">Explore other symptoms</p>
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
