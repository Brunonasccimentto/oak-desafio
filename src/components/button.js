
export const SubmitButton = ({ onClick, buttonText }) => {
  return (
    <input
      name="Cadastrar"
      type="submit"
      value={buttonText}
      onClick={onClick}
    />
  );
};