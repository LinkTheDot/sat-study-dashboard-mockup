import { StudentData } from "../types/StudentData";

export async function getStudentData(): Promise<StudentData> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    name: "Alex Chen",
    targetScore: 1500,
    currentScore: 1320,
    overallProgress: 62,
    studyStreak: 12,
    totalStudyHours: 47,
    questionsAnswered: 2847,
    testDate: "March 15, 2025",
    daysRemaining: 98,
  };
}
