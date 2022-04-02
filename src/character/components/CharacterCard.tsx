import { Paper } from "@mui/material";
import { css } from "@emotion/react";
import { Character } from "../types";
import RestBonus from "./RestBonus";
import { useRecoilValue } from "recoil";
import { tasksForCharacterId } from "../../task/selectors";
import { ITask, LimitWindows } from "../../task/type";
import { isNil, map, pipe, sum } from "ramda";
import { Set } from "immutable";
import CharacterCardLineItem from "./CharacterCardLineItem";

const cardStyle = css`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 350px;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const taskProgressStyles = css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const getPlannedCount = pipe(
    (x: Set<ITask>) => x.toArray(),
    map((x) => {
      // TODO reverse lookup here sucks, specific selector for this?
      const characterTask = character.tasks.find((y) => y.taskId === x.id);
      if (isNil(characterTask)) throw new Error("");
      return characterTask.count;
    }),
    sum
  );

  const tasks = useRecoilValue(tasksForCharacterId(character.id));
  return (
    <div>
      <Paper css={cardStyle}>
        <div>{character.name}</div>
        {/* <div>{Classes[character.class]}</div> */}
        <div css={taskProgressStyles}>
          <div>
            <div>Daily</div>
            {tasks
              .filter((x) => x.limit.window == LimitWindows.Daily)
              .groupBy((x) => x.type)
              .map((tasks, taskType) => {
                const plannedCount = getPlannedCount(tasks.toSet());
                return (
                  <CharacterCardLineItem
                    key={taskType}
                    type={taskType}
                    count={0}
                    plannedCount={plannedCount}
                  />
                );
              })
              .toSet()}
          </div>
          <div>
            <div>Weekly</div>
            {tasks
              .filter((x) => x.limit.window == LimitWindows.Weekly)
              .groupBy((x) => x.type)
              .map((tasks, taskType) => {
                const plannedCount = getPlannedCount(tasks.toSet());
                return (
                  <CharacterCardLineItem
                    key={taskType}
                    type={taskType}
                    count={0}
                    plannedCount={plannedCount}
                  />
                );
              })
              .toSet()}
          </div>
        </div>
        <RestBonus title="Chaos Dungeon" bonus={character.rest.chaosDungeon} />
        <RestBonus title="Guardian Raid" bonus={character.rest.guardianRaid} />
      </Paper>
    </div>
  );
};
export default CharacterCard;
