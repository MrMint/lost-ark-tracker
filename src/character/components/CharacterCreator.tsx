import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { css } from "@emotion/react";
import { v4 as uuid } from "uuid";
import { isNil } from "ramda";
import { Controller, useForm, Control } from "react-hook-form";
import {
  Character,
  CharacterTask,
  Classes,
  Regions,
  Rest,
  Servers,
} from "../types";
import { useRecoilState, useRecoilValue } from "recoil";
import { charactersState } from "../atoms";
import { activeUser } from "src/user/atoms";
import { Set } from "immutable";

const formStyle = css`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type RestSelectorProps = {
  name: "chaosDungeonRest" | "guardianRaidRest" | "unasTaskRest";
  label: string;
  control: Control<FormData, any>;
};
const restValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const RestSelector = ({ name, label, control }: RestSelectorProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormControl>
        <InputLabel htmlFor={`${name}-input`}>{label}</InputLabel>
        <Select
          id={`${name}-input`}
          aria-describedby={`${name}-input-helper`}
          {...field}
          label={label}
        >
          {restValues.map((val) => (
            <MenuItem key={val} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )}
  />
);

type FormData = {
  region: Regions;
  name: string;
  class: Classes;
  server: Servers;
  chaosDungeonRest: number;
  guardianRaidRest: number;
  unasTaskRest: number;
};

type CharacterCreatorProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CharacterCreator = ({ isOpen, onClose }: CharacterCreatorProps) => {
  const [characters, setCharacters] = useRecoilState(charactersState);
  const user = useRecoilValue(activeUser);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      chaosDungeonRest: 0,
      guardianRaidRest: 0,
      unasTaskRest: 0,
    },
  });

  const handleClose = (event: object, reason: string) => {
    if (reason && reason == "backdropClick") return;
    reset();
    onClose();
  };

  const onSubmit = (data: FormData) => {
    const character = new Character({
      id: uuid(),
      name: data.name,
      userId: user.id,
      class: data.class,
      region: data.region,
      server: data.server,
      tasks: Set<CharacterTask>(),
      rest: new Rest({
        chaosDungeon: data.chaosDungeonRest,
        guardianRaid: data.guardianRaidRest,
        unasTask: data.unasTaskRest,
      }),
    });
    setCharacters(characters.set(character.id, character));
    reset();
    onClose();
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Create Character</DialogTitle>
        <DialogContent>
          <div css={formStyle}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <FormControl error={!isNil(errors.name)}>
                  <TextField {...field} label="Name" />
                  {!isNil(errors.name) && (
                    <FormHelperText>Name is Required</FormHelperText>
                  )}
                </FormControl>
              )}
              rules={{ required: true }}
            />
            <Controller
              name="region"
              control={control}
              render={({ field }) => (
                <FormControl error={!isNil(errors.region)}>
                  <InputLabel htmlFor="region-input">Region</InputLabel>
                  <Select
                    id="region-input"
                    aria-describedby="region-input-helper"
                    {...field}
                    label="Region"
                  >
                    <MenuItem value={Regions.NAEast}>NA East</MenuItem>
                    <MenuItem value={Regions.NAWest}>NA West</MenuItem>
                  </Select>
                  {!isNil(errors.region) && (
                    <FormHelperText id="region-input-helper">
                      Region is Required
                    </FormHelperText>
                  )}
                </FormControl>
              )}
              rules={{ required: true }}
            />
            <Controller
              name="class"
              control={control}
              render={({ field }) => (
                <FormControl error={!isNil(errors.class)}>
                  <InputLabel htmlFor="class-input">Class</InputLabel>
                  <Select
                    id="class-input"
                    aria-describedby="class-input-helper"
                    {...field}
                    label="Class"
                  >
                    {Object.keys(Classes)
                      .filter((key) => !isNaN(Number(key)))
                      .sort((a, b) => a.localeCompare(b))
                      .map((key) => (
                        <MenuItem key={key} value={key}>
                          {Classes[Number(key)]}
                        </MenuItem>
                      ))}
                  </Select>
                  {!isNil(errors.class) && (
                    <FormHelperText id="class-input-helper">
                      Class is Required
                    </FormHelperText>
                  )}
                </FormControl>
              )}
              rules={{ required: true }}
            />
            <Controller
              name="server"
              control={control}
              render={({ field }) => (
                <FormControl error={!isNil(errors.server)}>
                  <InputLabel htmlFor="server-input">Server</InputLabel>
                  <Select
                    id="server-input"
                    aria-describedby="server-input-helper"
                    {...field}
                    label="Server"
                  >
                    {Object.keys(Servers)
                      .filter((key) => !isNaN(Number(key)))
                      .sort((a, b) => a.localeCompare(b))
                      .map((key) => (
                        <MenuItem key={key} value={key}>
                          {Servers[Number(key)]}
                        </MenuItem>
                      ))}
                  </Select>
                  {!isNil(errors.class) && (
                    <FormHelperText id="class-input-helper">
                      Class is Required
                    </FormHelperText>
                  )}
                </FormControl>
              )}
              rules={{ required: true }}
            />
            <RestSelector
              name="chaosDungeonRest"
              label="Chaos Dungeon Rest"
              control={control}
            />
            <RestSelector
              name="guardianRaidRest"
              label="Guardian Raid Rest"
              control={control}
            />
            <RestSelector
              name="unasTaskRest"
              label="Unas Task Rest"
              control={control}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={(e) => handleClose(e, "cancel")}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CharacterCreator;
