import { StudentData } from "../types/StudentData";

interface OverallProgressProps {
  studentData: StudentData;
}

export function OverallProgress({ studentData }: OverallProgressProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Overall Progress
          </h2>
          <p className="text-sm text-gray-500">
            You're {studentData.overallProgress}% of the way to your goal
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-indigo-600">
            {studentData.currentScore}
          </div>
          <div className="text-sm text-gray-500">
            Target: {studentData.targetScore}
          </div>
        </div>
      </div>

      <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-6">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all duration-500"
          style={{ width: `${studentData.overallProgress}%` }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">
            {studentData.studyStreak}
          </div>
          <div className="text-xs text-gray-600 mt-1">Day Streak</div>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">
            {studentData.totalStudyHours}h
          </div>
          <div className="text-xs text-gray-600 mt-1">Study Time</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">
            {studentData.questionsAnswered.toLocaleString()}
          </div>
          <div className="text-xs text-gray-600 mt-1">Questions</div>
        </div>
      </div>
    </div>
  );
}
