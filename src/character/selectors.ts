import { selector } from "recoil";
import { charactersState } from "./atoms";

export const charactersForUserId = (id: string) =>
  selector({
    key: `charactersForUserId${id}`,
    get: ({ get }) => {
      return get(charactersState)
        .filter((x) => x.userId === id)
        .toSet();
    },
  });
