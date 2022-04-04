import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import { activeUser } from "src/user/atoms";
import CharacterCard from "./CharacterCard";
import { charactersForUserId } from "../selectors";
import { Add } from "@mui/icons-material";
import { css } from "@emotion/react";
import { useState } from "react";
import CharacterCreator from "./CharacterCreator";

const addFabStyle = css`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
`;

const Characters = () => {
  const user = useRecoilValue(activeUser);
  const characters = useRecoilValue(charactersForUserId(user.id));
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);

  return (
    <>
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
      <Fab
        color="primary"
        aria-label="add"
        css={addFabStyle}
        onClick={() => setIsCreatorOpen(true)}
      >
        <Add />
      </Fab>
      <CharacterCreator
        isOpen={isCreatorOpen}
        onClose={() => setIsCreatorOpen(false)}
      />
    </>
  );
};
export default Characters;
