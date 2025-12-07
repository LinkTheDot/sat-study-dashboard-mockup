import { WeakArea } from "../types/WeakArea";

export async function getWeakAreas(): Promise<WeakArea[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    { topic: "Geometry & Trigonometry", accuracy: 58, questionsNeeded: 45 },
    { topic: "Rhetoric & Expression", accuracy: 48, questionsNeeded: 62 },
    { topic: "Vocabulary in Context", accuracy: 55, questionsNeeded: 38 },
  ];
}
