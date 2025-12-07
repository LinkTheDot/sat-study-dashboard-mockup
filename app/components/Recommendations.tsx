import { Recommendation } from "../types/Recommendation";

interface RecommendationsProps {
  recommendations: Recommendation[];
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Recommended for Today
      </h2>
      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-xs font-semibold text-indigo-600 mb-1">
                  {rec.type}
                </div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {rec.title}
                </h3>
              </div>
              <span className="text-xs text-gray-500">{rec.duration}</span>
            </div>
            {rec.questions > 0 && (
              <div className="text-xs text-gray-600">
                {rec.questions} questions
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
        Start Studying
      </button>
    </div>
  );
}
