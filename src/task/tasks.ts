import { Set } from "immutable";
import {
  AbyssalDungeon,
  ChaosDungeon,
  GuardianRaid,
  ITask,
  Limit,
  LimitTypes,
  LimitWindows,
  UnasTask,
} from "./type";

export const abyssalDungeons = Set<AbyssalDungeon>([
  new AbyssalDungeon({
    id: "abyssal-dungeon-1",
    name: "Demon Beast Canyon",
    tier: 1,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-2",
    name: "Necromancer's Origin",
    tier: 1,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-3",
    name: "Hall of the Twisted Warlord",
    tier: 1,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-4",
    name: "Hildebrandt Palace",
    tier: 1,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-5",
    name: "Road of Lament",
    tier: 2,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-6",
    name: "Forge of Fallen Pride",
    tier: 2,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-7",
    name: "Sea of Indolence",
    tier: 2,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-8",
    name: "Tranquil Karkosa",
    tier: 2,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-9",
    name: "Alaric's Sanctuary",
    tier: 2,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-10",
    name: "Eye of Aira",
    tier: 3,
  }),
  new AbyssalDungeon({
    id: "abyssal-dungeon-11",
    name: "Oreha Preveza",
    tier: 3,
  }),
]);

export const chaosDungeons = Set<ChaosDungeon>([
  new ChaosDungeon({
    id: "generic-chaos-dungeon",
    name: "Generic Chaos Dungeon",
  }),
]);
export const guardianRaids = Set<GuardianRaid>([
  new GuardianRaid({
    id: "generic-guardian-raid",
    name: "Generic Guardian Raid",
  }),
]);

export const unasTasks = Set<UnasTask>([
  new UnasTask({
    id: "generic-unas-task-daily",
    name: "Generic Unas Daily Task",
    limit: new Limit({
      type: LimitTypes.Character,
      window: LimitWindows.Daily,
      number: 3,
    }),
  }),

  new UnasTask({
    id: "generic-unas-task-weekly",
    name: "Generic Unas Weekly Task",
    limit: new Limit({
      type: LimitTypes.Character,
      window: LimitWindows.Weekly,
      number: 3,
    }),
  }),
]);

export default Set<ITask>(
  abyssalDungeons.union(chaosDungeons).union(guardianRaids).union(unasTasks)
);
