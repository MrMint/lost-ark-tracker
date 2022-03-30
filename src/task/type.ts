import { Record } from "immutable";

export const enum LimitWindows {
  Daily = 1,
  Weekly = 2,
}

export const enum LimitTypes {
  Character = 1,
  Roster = 2,
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
  })
  implements ITask {}

export class ChaosDungeon
  extends Record({
    id: "",
    name: "",
    characterLimit: null,
    limit: new Limit(),
  })
  implements ITask {}

export class GuardianRaid
  extends Record({
    id: "",
    name: "",
    limit: new Limit(),
  })
  implements ITask {}

export class UnasTask
  extends Record({
    id: "",
    name: "",
    limit: new Limit(),
  })
  implements ITask {}

export class CustomTask
  extends Record({
    id: "",
    name: "",
    limit: new Limit(),
  })
  implements ITask {}
