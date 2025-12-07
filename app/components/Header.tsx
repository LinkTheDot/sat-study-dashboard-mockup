import { StudentData } from "../types/StudentData";

interface HeaderProps {
  studentData: StudentData;
}

export function Header({ studentData }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              SAT Prep Dashboard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back, {studentData.name}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Test Date</div>
            <div className="text-lg font-semibold text-indigo-600">
              {studentData.testDate}
            </div>
            <div className="text-xs text-gray-400">
              {studentData.daysRemaining} days remaining
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
