import { Recommendation } from "../types/Recommendation";

export async function getTodayRecommendations(): Promise<Recommendation[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      type: "Practice",
      title: "Geometry Practice Set",
      duration: "25 min",
      questions: 15,
    },
    {
      type: "Review",
      title: "Review Missed Questions",
      duration: "20 min",
      questions: 12,
    },
    {
      type: "Lesson",
      title: "Advanced Rhetoric Techniques",
      duration: "30 min",
      questions: 0,
    },
  ];
}
