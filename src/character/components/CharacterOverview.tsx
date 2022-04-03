import { Paper } from "@mui/material";
import { isNil } from "ramda";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { charactersState } from "../atoms";
import { Classes } from "../types";

const CharacterOverview = () => {
  const { id } = useParams();
  if (isNil(id)) throw new Error(`No id provided`);
  const [characters, setCharacters] = useRecoilState(charactersState);
  const character = characters.get(id);
  if (isNil(character))
    throw new Error(`Unable to find character for id: ${id}`);
  return (
    <div>
      <Paper>
        <div>{character.name}</div>
        <div>{Classes[character.class]}</div>
      </Paper>
    </div>
  );
};

export default CharacterOverview;
