import { Paper, Step, StepLabel, Stepper } from "@mui/material";
import { css } from "@emotion/react";
import { Character, Classes } from "../types";
import RestBonus from "./RestBonus";

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
  return (
    <div>
      <Paper css={cardStyle}>
        <div>{character.name}</div>
        <div>{Classes[character.class]}</div>
        <div css={taskProgressStyles}>
          <div>
            <div>Daily</div>
            <div>Chaos Dungeon 0/2</div>
            <div>Una's 0/3</div>
            <div>Other 2/4</div>
          </div>
          <div>Weekly</div>
        </div>
        <RestBonus title="Chaos Dungeon" bonus={character.rest.chaosDungeon} />
        <RestBonus title="Guardian Raid" bonus={character.rest.guardianRaid} />
      </Paper>
    </div>
  );
};
export default CharacterCard;
