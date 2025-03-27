//tonggleButton.tsx file

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { formSchemaType } from "../../schema/formValidation";

const TonggleButton = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<formSchemaType>();

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            {...field}
           
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="Panda" control={<Radio />} label="Panda" />
          </RadioGroup>
        )}
      />
     {errors.gender && <FormHelperText>{errors.gender.message}</FormHelperText>}
    </FormControl>
  );
};

export default TonggleButton;
