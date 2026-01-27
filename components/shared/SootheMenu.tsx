'use client';

export const SootheMenu = () => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Use this anytime you need comfort.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">VISION</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
            <li>Watch a candle flame, sunrise/sunset, or nature.</li>
            <li>Look at art/photos you like.</li>
            <li>Make one corner of a room look nicer.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">HEARING</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
            <li>Soothing music, nature sounds, city sounds.</li>
            <li>Hum/sing softly.</li>
            <li>Notice sounds coming and going.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">SMELL</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
            <li>Scented candle/incense (if safe).</li>
            <li>Coffee aroma, fresh air, lotion you like.</li>
            <li>Cinnamon/cookies/popcorn smell.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">TASTE</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
            <li>Warm drink (tea/cocoa/latte).</li>
            <li>One favorite food slowly, mindfully.</li>
            <li>Mint/gum/candy.</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-800">TOUCH</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
            <li>Hot shower/bath, cozy blanket, clean sheets.</li>
            <li>Lotion on hands/arms.</li>
            <li>Pet an animal, hold a soft object.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

