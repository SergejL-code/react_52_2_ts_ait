import "./myInput.css";

function MyInput({ name, type, placeholder, label }) {
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
