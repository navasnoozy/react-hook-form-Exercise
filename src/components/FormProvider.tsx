// components/FormProvider tsx file 
import { FormProvider as RHFormProvider, useForm } from "react-hook-form";
import { defaultValues, formSchema, formSchemaType } from "../schema/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Users from "../users/pages/users";

const FormProvider = () => {
  const methods = useForm<formSchemaType>({
    mode:'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues
  });

  return (
    <RHFormProvider {...methods}>
      <Users />
    </RHFormProvider>
  );
};

export default FormProvider;
