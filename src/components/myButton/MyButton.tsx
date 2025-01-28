/*// * компонент button должен принимать props: text - с текстом кнопки, func - с функцией которая сработает по нажатию на кнопку

// для того чтобы функция отработала на кнопке присвойте ее на аттрибут onClick внутри кнопки
// <button onClick={...}>Click me!</button>
// в качестве теста может функции могут выводить в консоль разные данные

// вызовите кнопку два раза внутри Lesson03.jsx с разными данными
*/

// пример отдельного компонента кнопки
// экспорт по умолчанию можно писать как в конце так и в начале
import "./myButton.css";

interface IMyButtonProps {
  // ограничение на конкретное значения
  type?: "button" | "submit" | "reset";
  text?: string;
  //типизация функций в обьекте по ключу
  // после => указываем возвращенное значение
  func?: () => void;
}
// в props мы можем передавать значение по-умолчанию в случае если не передали props
function MyButton({
  text = "click",
  func = () => {},
  type = "submit",
}: IMyButtonProps) {
  return (
    <button type={type} onClick={func} className="MyButton">
      {text}
    </button>
  );
}

export default MyButton;
