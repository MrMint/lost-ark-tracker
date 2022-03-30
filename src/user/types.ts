import { Record } from 'immutable';

export const enum Regions {
  NAEast = 0,
  NAWest = 1,
}

export class User extends Record({
  id: "",
  name: "", 
  region: Regions.NAEast,
}) {};