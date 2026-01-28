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
      className="fixed bottom-16 md:bottom-20 right-0 md:right-6 px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg transition-colors duration-200 z-50 w-full md:w-auto left-0 md:left-auto"
    >
      Next
    </button>
  );
};
