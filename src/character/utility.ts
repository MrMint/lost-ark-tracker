import { Regions } from "./types";

export const regionDisplayName = (region: Regions) => {
  switch (region) {
    case Regions.NAEast:
      return "NA East"
    case Regions.NAWest:
      return "NA West"
    default:
      throw new Error("Unrecognized region.");
  }
}