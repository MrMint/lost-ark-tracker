import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { isNil } from "ramda";
import { Controller, useForm } from "react-hook-form";
import { Regions } from "src/user/types";
import { Classes, Servers } from "../types";

type FormData = {
  region: Regions;
  name: string;
  class: Classes;
  server: Servers;
};

const CharacterCreator = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      region: Regions.NAEast,
      server: Servers.Una,
      name: "",
      class: Classes.Artillerist,
    },
  });
  return (
    <div>
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
    </div>
  );
};

export default CharacterCreator;
