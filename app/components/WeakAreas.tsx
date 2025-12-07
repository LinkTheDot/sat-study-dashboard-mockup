import { WeakArea } from "../types/WeakArea";

interface WeakAreasProps {
  areas: WeakArea[];
}

export function WeakAreas({ areas }: WeakAreasProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Areas to Improve
      </h2>
      <div className="space-y-3">
        {areas.map((area) => (
          <div
            key={area.topic}
            className="p-4 border border-red-100 bg-red-50 rounded-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-800 text-sm">
                {area.topic}
              </h3>
              <span className="text-xs font-semibold text-red-600">
                {area.accuracy}% accuracy
              </span>
            </div>
            <div className="text-xs text-gray-600">
              Practice {area.questionsNeeded} more questions to improve
            </div>
            <div className="relative w-full h-1.5 bg-red-200 rounded-full overflow-hidden mt-2">
              <div
                className="absolute top-0 left-0 h-full bg-red-500"
                style={{ width: `${area.accuracy}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
