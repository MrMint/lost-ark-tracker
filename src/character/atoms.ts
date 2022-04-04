import { Map, Set } from "immutable";
import { atom } from "recoil";
import {
  Character,
  CharacterTask,
  Classes,
  Regions,
  Rest,
  Servers,
} from "./types";
import { v4 as uuid } from "uuid";

export const charactersState = atom({
  key: "characters",
  default: Map<string, Character>({
    "mint-character-id": new Character({
      id: "mint-character-id",
      name: "Mint",
      class: Classes.Striker,
      rest: new Rest({ chaosDungeon: 0, guardianRaid: 40, unasTask: 50 }),
      server: Servers.Una,
      region: Regions.NAEast,
      tasks: Set<CharacterTask>([
        new CharacterTask({
          taskId: "abyssal-dungeon-1",
          count: 1,
        }),
        new CharacterTask({
          taskId: "abyssal-dungeon-2",
          count: 1,
        }),
        new CharacterTask({
          taskId: "abyssal-dungeon-3",
          count: 1,
        }),
        new CharacterTask({
          taskId: "generic-unas-task-daily",
          count: 3,
        }),
        new CharacterTask({
          taskId: "generic-chaos-dungeon",
          count: 2,
        }),
        new CharacterTask({
          taskId: "generic-guardian-raid",
          count: 2,
        }),
      ]),
      userId: "mint",
    }),
  }),
});
