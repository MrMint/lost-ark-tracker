import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import Berserker from "../../common/icons/Berserker.svg";
import { charactersState } from "../atoms";
import CharacterCard from "./CharacterCard";
const Characters = () => {
  const characters = useRecoilValue(charactersState);
  return (
    <Grid
      container
      justifyContent="center"
      spacing={3}
      sx={{ padding: "1rem" }}
    >
      {characters.map((x) => (
        <Grid key={x.id} item>
          <CharacterCard character={x} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Characters;
