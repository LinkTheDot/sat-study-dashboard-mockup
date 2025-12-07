import { PracticeTest } from "../types/PracticeTest";

interface RecentTestsProps {
  tests: PracticeTest[];
}

export function RecentTests({ tests }: RecentTestsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Practice Tests
      </h2>
      <div className="space-y-3">
        {tests.map((test, index) => (
          <div
            key={test.date}
            className={`p-3 rounded-lg border-2 ${
              index === 0
                ? "border-indigo-200 bg-indigo-50"
                : "border-gray-100 bg-gray-50"
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-gray-500">{test.date}</span>
              {index === 0 && (
                <span className="text-xs font-semibold text-indigo-600">
                  Latest
                </span>
              )}
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {test.score}
            </div>
            <div className="flex gap-3 text-xs">
              <span className="text-gray-600">
                Math: <span className="font-semibold">{test.math}</span>
              </span>
              <span className="text-gray-600">
                R&W: <span className="font-semibold">{test.rw}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
        Take Practice Test
      </button>
    </div>
  );
}
