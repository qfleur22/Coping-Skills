'use client';

interface BackButtonProps {
  onClick: () => void;
}

export const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full md:fixed md:bottom-20 md:left-6 md:w-auto px-4 md:px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 md:z-50 mt-4 md:mt-0"
    >
      Back
    </button>
  );
};

