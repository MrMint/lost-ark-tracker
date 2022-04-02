import { Set } from "immutable";
import { atom } from "recoil";
import tasks from "./tasks";
import { ICompletedTask, ITask } from "./type";

export const tasksState = atom({
  key: "tasks",
  default: new Map<string, ITask>(tasks.map((x) => [x.id, x])),
});

export const completedTasksState = atom({
  key: "completedTasks",
  default: Set<ICompletedTask>([]),
});
