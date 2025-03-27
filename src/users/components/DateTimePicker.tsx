import { Controller, useFormContext } from "react-hook-form";
import { formSchemaType } from "../../schema/formValidation";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { FormLabel } from "@mui/material";

const DateTimePickComponent = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<formSchemaType>();

  return (
    <Controller
      name="DateTime"
      control={control}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormLabel >Date of Birth with exact time</FormLabel>
          <DateTimePicker
            label="Select Date & Time"
            value={field.value ? dayjs(field.value) : null} // Convert string to dayjs
            onChange={(newValue) => field.onChange(newValue ? newValue.toISOString() : "")} // Convert dayjs to string
            slotProps={{
              textField: {
                error: !!errors.DateTime,
                helperText: errors.DateTime?.message,
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default DateTimePickComponent;
