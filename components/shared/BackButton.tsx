'use client';

interface BackButtonProps {
  onClick: () => void;
}

export const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 left-6 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50"
    >
      Back
    </button>
  );
};

