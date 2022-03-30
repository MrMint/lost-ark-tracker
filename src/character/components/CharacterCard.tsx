import { Paper, Step, StepLabel, Stepper } from "@mui/material";
import { css } from "@emotion/react";
import { Character, Classes } from "../types";
import RestBonus from "./RestBonus";

const cardStyle = css`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 150px;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

type CharacterCardProps = {
  character: Character;
};
const StepIcon = () => (
  <div
    css={css`
      border-radius: 50%;
    `}
  ></div>
);
const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div>
      <Paper css={cardStyle}>
        <div>{character.name}</div>
        <div>{Classes[character.class]}</div>
        <div>
          <div>Chaos</div>
          <RestBonus bonus={character.rest.chaosDungeon} />
          <RestBonus bonus={character.rest.guardianRaid} />
        </div>
      </Paper>
    </div>
  );
};
export default CharacterCard;
