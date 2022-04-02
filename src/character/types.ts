import { Record, Set } from "immutable";
import { Regions } from "../user/types";

export enum Classes {
  Berserker = 0,
  Gunlancer = 1,
  Paladin = 2,
  Striker = 3,
  Wardancer = 4,
  Scrapper = 5,
  Soulfist = 6,
  Gunslinger = 7,
  Artillerist = 8,
  Deadeye = 9,
  Sharpshooter = 10,
  Bard = 11,
  Sorceress = 12,
  Shadowhunter = 13,
  Deathblade = 14,
}

export const enum Servers {
  Una,
}

export class Rest extends Record({
  chaosDungeon: 0,
  guardianRaid: 0,
}) {}

export class CharacterTask extends Record({
  taskId: "",
  count: 0,
}) {}

export class Character extends Record({
  id: "",
  name: "",
  server: Servers.Una,
  userId: "",
  tasks: Set<CharacterTask>(),
  rest: new Rest(),
  class: Classes.Artillerist,
  region: Regions.NAEast,
}) {}
