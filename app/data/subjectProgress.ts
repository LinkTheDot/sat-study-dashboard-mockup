import { SubjectProgress } from "../types/SubjectProgress";

export async function getSubjectProgress(): Promise<SubjectProgress[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      name: "Math",
      current: 680,
      target: 750,
      progress: 68,
      topics: [
        { name: "Algebra", mastery: 85 },
        { name: "Advanced Math", mastery: 72 },
        { name: "Problem Solving", mastery: 65 },
        { name: "Geometry", mastery: 58 },
      ],
    },
    {
      name: "Reading & Writing",
      current: 640,
      target: 750,
      progress: 56,
      topics: [
        { name: "Reading Comprehension", mastery: 70 },
        { name: "Grammar", mastery: 62 },
        { name: "Vocabulary", mastery: 55 },
        { name: "Rhetoric", mastery: 48 },
      ],
    },
  ];
}
