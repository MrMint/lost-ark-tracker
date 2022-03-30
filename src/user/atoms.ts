import { Set } from "immutable";
import { v4 as uuid } from "uuid";
import { atom, selector } from "recoil";
import { Regions, User } from "./types";

export const usersState = atom({
  key: "users",
  default: Set<User>([
    new User({ id: "mint", name: "mint", region: Regions.NAEast }),
    new User({ id: uuid(), name: "XSV", region: Regions.NAWest }),
    new User({ id: uuid(), name: "hunter", region: Regions.NAEast }),
  ]),
});

export const activeUserId = atom({
  key: "activeUserId",
  default: null as string | null,
});

export const activeUser = selector({
  key: "activeUser",
  get: ({ get }) => {
    const id = get(activeUserId);
    return get(usersState).find((x) => x.id === id);
  },
});
