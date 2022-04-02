import { TaskTypes } from "../../task/type";

type CharacterCardLineItemProps = {
  type: TaskTypes;
  count: number;
  plannedCount: number;
};

const CharacterCardLineItem = ({
  type,
  count,
  plannedCount,
}: CharacterCardLineItemProps) => {
  switch (type) {
    case TaskTypes.UnasTask:
      return (
        <div>
          Unas {count}/{plannedCount}
        </div>
      );
    case TaskTypes.ChaosDungeon:
      return (
        <div>
          Chaos Dungeon {count}/{plannedCount}
        </div>
      );
    case TaskTypes.AbyssalDungeon:
      return (
        <div>
          Abyssal Dungeon {count}/{plannedCount}
        </div>
      );
    case TaskTypes.GuardianRaid:
      return (
        <div>
          Guardian Raid {count}/{plannedCount}
        </div>
      );
    case TaskTypes.Custom:
      return (
        <div>
          Custom Tasks {count}/{plannedCount}
        </div>
      );
    default:
      throw new Error(
        `Unsupported type: ${type} provided to CharacterCardLineItem`
      );
  }
};

export default CharacterCardLineItem;
