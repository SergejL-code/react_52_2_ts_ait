import "./myInput.css";
interface IMyInput {
  name: string;
  type: " password" | "email" | "text" | "number";
  placeholder: string;
  label: string;
}
function MyInput({ name, type, placeholder, label }: IMyInput): JSX.Element {
  return (
    <>
      <label>{label}</label>
      <input
        className="myInput"
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </>
  );
}
export default MyInput;
