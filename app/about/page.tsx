export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About the Skills</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This section will contain information about the coping skills and strategies available in the app.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Details about how the Skills Flowchart works and how to use it effectively will be added here.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Available Skills</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Information about the different types of coping skills and techniques will be documented here.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

