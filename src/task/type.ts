import { Record } from "immutable";

export const enum LimitWindows {
  Daily = 1,
  Weekly = 2,
}

export const enum LimitTypes {
  Character = 1,
  Roster = 2,
}
export const enum TaskTypes {
  AbyssalDungeon,
  ChaosDungeon,
  GuardianRaid,
  UnasTask,
  Custom,
}

export interface ILimit {
  window: LimitWindows;
  type: LimitTypes;
  number: number | null;
  characters: number | null;
}

export interface ITask {
  id: string;
  limit: ILimit;
  name: string;
  type: TaskTypes;
}

export class Limit
  extends Record({
    window: LimitWindows.Daily,
    type: LimitTypes.Character,
    number: null as number | null,
    characters: null as number | null,
  })
  implements ILimit {}

export class AbyssalDungeon
  extends Record({
    tier: 1,
    id: "",
    name: "",
    limit: new Limit({
      window: LimitWindows.Weekly,
      characters: 6,
    }),
    type: TaskTypes.AbyssalDungeon,
  })
  implements ITask {}

export class ChaosDungeon
  extends Record({
    id: "",
    name: "",
    characterLimit: null,
    limit: new Limit(),
    type: TaskTypes.ChaosDungeon,
  })
  implements ITask {}

export class GuardianRaid
  extends Record({
    id: "",
    name: "",
    limit: new Limit(),
    type: TaskTypes.GuardianRaid,
  })
  implements ITask {}

export class UnasTask
  extends Record({
    id: "",
    name: "",
    limit: new Limit(),
    type: TaskTypes.UnasTask,
  })
  implements ITask {}

export class CustomTask
  extends Record({
    id: "",
    name: "",
    limit: new Limit(),
    type: TaskTypes.Custom,
  })
  implements ITask {}

export interface ICompletedTask {
  id: string;
  taskId: string;
  completedOn: Date;
  characterId: string;
}
