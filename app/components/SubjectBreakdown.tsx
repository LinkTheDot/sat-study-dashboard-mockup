import { SubjectProgress } from "../types/SubjectProgress";

interface SubjectBreakdownProps {
  subjects: SubjectProgress[];
}

export function SubjectBreakdown({ subjects }: SubjectBreakdownProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Subject Breakdown
      </h2>
      <div className="space-y-6">
        {subjects.map((subject) => (
          <div key={subject.name}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">{subject.name}</h3>
              <div className="text-right">
                <span className="text-lg font-bold text-gray-900">
                  {subject.current}
                </span>
                <span className="text-sm text-gray-500">
                  {" "}
                  / {subject.target}
                </span>
              </div>
            </div>

            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
              <div
                className="absolute top-0 left-0 h-full bg-indigo-500 transition-all duration-500"
                style={{ width: `${subject.progress}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {subject.topics.map((topic) => (
                <div
                  key={topic.name}
                  className="flex justify-between items-center p-2 bg-gray-50 rounded"
                >
                  <span className="text-xs text-gray-700">{topic.name}</span>
                  <span
                    className={`text-xs font-semibold ${
                      topic.mastery >= 70
                        ? "text-green-600"
                        : topic.mastery >= 60
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {topic.mastery}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
