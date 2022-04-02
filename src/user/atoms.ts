import { Set } from "immutable";
import { v4 as uuid } from "uuid";
import { atom, selector } from "recoil";
import { Regions, User } from "./types";
import { isNil } from "ramda";

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

export const isAuthenticated = selector({
  key: "isAuthenticated",
  get: ({ get }) => !isNil(get(activeUserId)),
});

export const activeUser = selector({
  key: "activeUser",
  get: ({ get }) => {
    const id = get(activeUserId);
    const user = get(usersState).find((x) => x.id === id);
    if (isNil(user)) throw new Error("Unable to find active user");
    return user;
  },
});
