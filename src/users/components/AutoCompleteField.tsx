// users/components/AutoComplete tsx
import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  options: string[];
}

const AutoCompleteField = ({ name, label, options }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          multiple
          options={options}
          value={field.value || []}
          onChange={(_, newValue) => field.onChange(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!errors[name]}
              helperText={errors[name]?.message as string}
            />
          )}
        />
      )}
    />
  );
};

export default AutoCompleteField;
