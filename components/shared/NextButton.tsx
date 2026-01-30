'use client';

interface NextButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const NextButton = ({ onClick, disabled = false }: NextButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full md:fixed md:bottom-20 md:right-6 md:w-auto px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 md:z-50 mt-4 md:mt-0"
    >
      Next
    </button>
  );
};
