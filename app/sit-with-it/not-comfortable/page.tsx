'use client';

export default function NotComfortablePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Not Comfortable Right Now
          </h1>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg space-y-6">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                That's okay. Listening to your limits is a skill.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Do this instead (60–90 seconds)
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-2">
                <li>Open your eyes and look around the room.</li>
                <li>Feel your feet on the floor. Press down gently.</li>
                <li>Name 5 things you see.</li>
                <li>Take one slow breath (long exhale).</li>
                <li>Choose one: water / snack / blanket / step outside / message support.</li>
              </ol>
            </div>

            <div className="mt-6">
              <p className="text-gray-700">
                If you want, you can go back and pick a different practice later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
