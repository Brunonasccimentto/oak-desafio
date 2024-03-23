import { useForm } from "react-hook-form";
import useList from "../hooks/useList";
import { TextField } from "./field";
import { SubmitButton } from "./button";
import { Select } from "./select";

export const Form = ({onSubmitButtonAction}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { onSubmit } = useList();
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Nome"
        name="productName"
        register={register}
        required={true}
      />
      {errors.productName && (
        <span style={{ color: "red" }}>This field is required</span>
      )}

      <TextField label="Descrição" name="description" register={register} />

      <TextField
        label="Valor do produto"
        type="number"
        min="0.00"
        step="0.01"
        name="value"
        register={register}
        required={true}
      />
      {errors.value && (
        <span style={{ color: "red" }}>This field is required</span>
      )}

      <Select label="Disponibilidade" register={register}/>

      <SubmitButton buttonText="Cadastrar" onClick={onSubmitButtonAction}/>
    
    </form>
  );
};
