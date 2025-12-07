import { PracticeTest } from "../types/PracticeTest";

export async function getRecentTests(): Promise<PracticeTest[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    { date: "Dec 3", score: 1320, math: 680, rw: 640 },
    { date: "Nov 26", score: 1280, math: 650, rw: 630 },
    { date: "Nov 19", score: 1240, math: 630, rw: 610 },
    { date: "Nov 12", score: 1210, math: 620, rw: 590 },
  ];
}
