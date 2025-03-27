// users/components / CheckBox.tsx file
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { formSchemaType } from "../../schema/formValidation";

const skillOptions = ["Productive", "Creative", "Enthusiastic"];

const CheckBox = () => {
  const { control, formState:{errors} } = useFormContext<formSchemaType>();

  return (
    <FormControl error={!!errors.skills}>
        <FormLabel >Skills</FormLabel>
      <Controller
        name="skills"
        control={control}
        defaultValue={[""]}
        render={({ field }) => (
          <FormGroup>
            {skillOptions.map((skill) => (
              <FormControlLabel
                key={skill}
                control={<Checkbox checked={field.value!.includes(skill)} onChange={(e)=>{
                    const newValue = e.target.checked ? [...field.value, skill] : field.value.filter((s:string)=> s !== skill);
                    field.onChange(newValue)
                }} />}
                label={skill}  />
            ))}
          </FormGroup>
        )}
      />
     {errors.skills &&  <FormHelperText >{errors.skills?.message}</FormHelperText>}
    </FormControl>
  );
};

export default CheckBox;
