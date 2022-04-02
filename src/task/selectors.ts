import { isNil } from "ramda";
import { selector } from "recoil";
import { charactersState } from "../character/atoms";
import { tasksState } from "./atoms";

export const tasksForCharacterId = (id: string) =>
  selector({
    key: `tasksForCharacterId(${id})`,
    get: ({ get }) => {
      const character = get(charactersState).get(id);
      if (isNil(character))
        throw new Error(`Unable to find character with id ${id}`);

      const tasks = get(tasksState);
      return character.tasks.map((characterTask) => {
        const task = tasks.get(characterTask.taskId);
        if (isNil(task))
          throw new Error(
            `Unable to find task with id ${characterTask.taskId}`
          );

        return task;
      });
    },
  });
