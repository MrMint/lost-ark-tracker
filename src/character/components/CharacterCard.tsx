import { Card, CardActionArea, Theme, useTheme } from "@mui/material";
import { css } from "@emotion/react";
import { Character, Classes } from "../types";
import RestBonus from "./RestBonus";
import { useRecoilValue } from "recoil";
import { tasksForCharacterId } from "../../task/selectors";
import { ITask, LimitWindows } from "../../task/type";
import { isNil, map, pipe, sum } from "ramda";
import { Set } from "immutable";
import { useNavigate } from "react-router-dom";
import CharacterCardLineItem from "./CharacterCardLineItem";

const cardStyle = css`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const cardHeaderStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const characterNameStyle = css`
  font-size: 2rem;
  font-weight: 100;
`;

const characterClassStyle = (theme: Theme) => css`
  color: ${theme.palette.text.secondary};
`;

const cardBodyStyle = css`
  flex-grow: 1;
`;

const cardFooterStyle = css`
  width: 100%;
`;
const cardActionAreaStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const taskProgressStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const taskProgressHeaderStyle = css`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  text-align: center;
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
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea
        css={cardStyle}
        onClick={() => navigate(`/characters/${character.id}`)}
      >
        <div css={cardHeaderStyle}>
          <div css={characterNameStyle}>{character.name}</div>
          <div css={characterClassStyle(theme)}>{Classes[character.class]}</div>
        </div>
        <div css={cardBodyStyle}>
          <div css={taskProgressStyles}>
            <div>
              <div css={taskProgressHeaderStyle}>Daily</div>
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
              <div css={taskProgressHeaderStyle}>Weekly</div>
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
        </div>
        <div css={cardFooterStyle}>
          <RestBonus
            title="Chaos Dungeon"
            bonus={character.rest.chaosDungeon}
          />
          <RestBonus
            title="Guardian Raid"
            bonus={character.rest.guardianRaid}
          />
        </div>
      </CardActionArea>
    </Card>
  );
};
export default CharacterCard;
