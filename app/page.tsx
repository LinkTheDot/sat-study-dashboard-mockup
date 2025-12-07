import { Header } from "./components/Header";
import { OverallProgress } from "./components/OverallProgress";
import { SubjectBreakdown } from "./components/SubjectBreakdown";
import { RecentTests } from "./components/RecentTests";
import { WeakAreas } from "./components/WeakAreas";
import { Recommendations } from "./components/Recommendations";

import { getStudentData } from "./data/studentData";
import { getSubjectProgress } from "./data/subjectProgress";
import { getRecentTests } from "./data/recentTests";
import { getWeakAreas } from "./data/weakAreas";
import { getTodayRecommendations } from "./data/recommendations";

export default async function Dashboard() {
  const [studentData, subjects, tests, weakAreas, recommendations] =
    await Promise.all([
      getStudentData(),
      getSubjectProgress(),
      getRecentTests(),
      getWeakAreas(),
      getTodayRecommendations(),
    ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header studentData={studentData} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OverallProgress studentData={studentData} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <SubjectBreakdown subjects={subjects} />
          </div>
          <div>
            <RecentTests tests={tests} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <WeakAreas areas={weakAreas} />
          <Recommendations recommendations={recommendations} />
        </div>
      </main>
    </div>
  );
}
