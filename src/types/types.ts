export interface TodoType {
  name: string;
  priority: "urgent" | "chill" | "pending";
  idx: number;
  isDone: boolean;
};
