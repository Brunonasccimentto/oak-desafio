export const TextField = ({ label, type, register, name, required, ...rest}) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...rest} {...register(name, { required: required })}/>
    </div>
  );
};