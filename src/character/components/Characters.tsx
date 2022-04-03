import { Grid } from "@mui/material";
import { useRecoilValue } from "recoil";
import { activeUser } from "src/user/atoms";
import CharacterCard from "./CharacterCard";
import { charactersForUserId } from "../selectors";

const Characters = () => {
  const user = useRecoilValue(activeUser);
  const characters = useRecoilValue(charactersForUserId(user.id));
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
