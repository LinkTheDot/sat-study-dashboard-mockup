export interface Topic {
  name: string;
  mastery: number;
}

export interface SubjectProgress {
  name: string;
  current: number;
  target: number;
  progress: number;
  topics: Topic[];
}
