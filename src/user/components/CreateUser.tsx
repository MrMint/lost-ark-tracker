import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { css } from "@emotion/react";
import { v4 as uuid } from "uuid";
import { Regions, User } from "../types";
import { Controller, useForm } from "react-hook-form";
import { isNil } from "ramda";
import { useRecoilState } from "recoil";
import { usersState } from "../atoms";

const cardStyle = css`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 150px;
  padding: 1rem;
  gap: 1rem;
  justify-content: center;
`;

type FormData = {
  region: Regions;
  name: string;
};

const CreateUser = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      region: Regions.NAEast,
      name: "",
    },
  });

  const [users, setUsers] = useRecoilState(usersState);

  const onSubmit = (data: FormData) => {
    const user = new User({ id: uuid(), name: data.name, region: data.region });
    setUsers(users.add(user));
    reset();
  };

  return (
    <Paper css={cardStyle}>
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
              label="Server"
            >
              <MenuItem value={Regions.NAEast}>NA East</MenuItem>
              <MenuItem value={Regions.NAWest}>NA West</MenuItem>
            </Select>
            {!isNil(errors.region) && (
              <FormHelperText id="region-input-helper">
                Server is Required
              </FormHelperText>
            )}
          </FormControl>
        )}
        rules={{ required: true }}
      />
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormControl error={!isNil(errors.name)}>
            <TextField {...field} label="Username" />
            {!isNil(errors.name) && (
              <FormHelperText>Name is Required</FormHelperText>
            )}
          </FormControl>
        )}
        rules={{ required: true }}
      />
      <Button variant="outlined" onClick={handleSubmit(onSubmit)}>
        Create
      </Button>
    </Paper>
  );
};

export default CreateUser;
