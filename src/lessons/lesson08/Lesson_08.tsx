import MyButton from "../../components/myButton/MyButton";

function Lesson_08(): JSX.Element {
  return (
    <div>
      <h2>UseEffect+migrate components</h2>
      <MyButton
        text="typescript"
        func={() => console.log("click!")}
        type="button"
      />
    </div>
  );
}

export default Lesson_08;
