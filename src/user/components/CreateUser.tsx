import {
  Button,
  FormControl,
  FormHelperText,
  Paper,
  TextField,
} from "@mui/material";
import { css } from "@emotion/react";
import { v4 as uuid } from "uuid";
import { User } from "../types";
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

const titleStyle = css`
  width: 100%;
  text-align: center;
`;

type FormData = {
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
      name: "",
    },
  });

  const [users, setUsers] = useRecoilState(usersState);

  const onSubmit = (data: FormData) => {
    const user = new User({ id: uuid(), name: data.name });
    setUsers(users.add(user));
    reset();
  };

  return (
    <Paper css={cardStyle}>
      <div css={titleStyle}>New User</div>
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
