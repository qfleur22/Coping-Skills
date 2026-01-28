'use client';

interface FloatingButtonsProps {
  backButton?: React.ReactNode;
  rightButtons?: React.ReactNode;
}

export const FloatingButtons = ({ backButton, rightButtons }: FloatingButtonsProps) => {
  return (
    <>
      {backButton && (
        <div className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-50">
          {backButton}
        </div>
      )}
      {rightButtons && (
        <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 w-full md:w-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-2 md:gap-2 w-full md:w-auto">
            {rightButtons}
          </div>
        </div>
      )}
    </>
  );
};

