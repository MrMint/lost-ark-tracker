import { Set } from "immutable";
import { atom } from "recoil";
import { Character, Classes, Rest, Servers } from "./types";
import { v4 as uuid } from "uuid";
import { Regions } from "../user/types";

export const charactersState = atom({
  key: "characters",
  default: Set<Character>([
    new Character({
      id: uuid(),
      name: "Mint",
      class: Classes.Striker,
      rest: new Rest({ chaosDungeon: 3, guardianRaid: 1 }),
      server: Servers.Una,
      region: Regions.NAEast,
      taskIds: Set<string>([]),
      userId: "mint",
    }),
  ]),
});
