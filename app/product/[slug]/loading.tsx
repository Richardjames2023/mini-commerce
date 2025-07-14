export default function Loading() {
    return (
      <main className="p-6 max-w-5xl mx-auto animate-pulse">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/2 h-64 md:h-96 bg-gray-200 rounded-xl" />
  
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-6 bg-gray-200 rounded w-1/4" />
  
            <div className="flex items-center gap-3 mt-4">
              <div className="h-10 w-20 bg-gray-200 rounded" />
              <div className="h-10 w-32 bg-gray-300 rounded" />
            </div>
          </div>
        </div>
  
        <section>
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-xl" />
            ))}
          </div>
        </section>
      </main>
    );
  }
  