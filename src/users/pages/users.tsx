// users/pages/users tsx file 
import { Button, Grid2, TextField } from "@mui/material";
import { useFormContext  } from "react-hook-form";
import { formSchemaType } from "../../schema/formValidation";
import AutoCompleteField from "../components/AutoCompleteField";
import { hobbyOptions } from "../components/Options";
import { DevTool } from "@hookform/devtools";
import TonggleButton from "../components/TonggleButton";
import CheckBox from "../components/CheckBox";
import DateTimePickComponent from "../components/DateTimePicker";


const Users = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext<formSchemaType>();

  const onSubmit = (data: formSchemaType) => {
    console.log("submited", data);
  };

  return (
    <Grid2
      sx={{
        display: "inline-grid",
        gap: 2,
        maxWidth: { xs: "80%", md: "50%" },
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message as string}
        label="Name"
        size="small"
      ></TextField>
      <TextField
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message as string}
        label="Email"
        size="small"
      ></TextField>

      <AutoCompleteField
        name="hobbies"
        label="Hobbies"
        options={hobbyOptions}
      />

      <TonggleButton />

      <CheckBox />
      <DateTimePickComponent />

      <Button type="submit" size="small" variant="outlined">Submit</Button>
      <DevTool control={control} />
    </Grid2>
  );
};

export default Users;
