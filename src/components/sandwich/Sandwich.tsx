import { useState } from "react";
import style from "./sandwich.module.css";
function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("Бутербродный конфигуратор");

  function addBread(): void {
    setSandwich(`${sandwich}Bread🍞`);
  }
  function addCheese(): void {
    setSandwich(`${sandwich}Cheese🧀`);
  }
  function addBeacon(): void {
    setSandwich(`${sandwich}Beacon🥓`);
  }
  function addSalat(): void {
    setSandwich(`${sandwich}Salat 🥦`);
  }
  function handleBestellen(): void {
    setSandwich("Бутербродный конфигуратор");
  }
  function handleSend(): void {
    alert("Bestellung unterwegs");
  }
  /* Состояние - может быть чем угодно: строкой, числом, массивом и т.д.
   и с ним можно работать как с любой другой переменной,
   но изменять только с помощью функции изменения состояния.
   Если делать через обычную переменную без useState то нужен будет слушатель событий
    и значение на странице не будет обновляться а useState отлавливает изменение
   и отрисовывает на странице*/

  return (
    <div className={style.container}>
      <h2>Sandwich</h2>
      <img
        className={style.image}
        src="https://mur-mur.top/uploads/posts/2023-05/1683186165_mur-mur-top-p-mini-burgeri-keitering-krasivo-53.jpg"
        alt=""
      />
      <p>{sandwich}</p>

      <div className={style.btnContainer}>
        <button type="button" className={style.btn} onClick={addBread}>
          Bread🍞
        </button>
        <button type="button" className={style.btn} onClick={addCheese}>
          Cheese🧀
        </button>
        <button type="button" className={style.btn} onClick={addBeacon}>
          Beacon🥓
        </button>
        <button type="button" className={style.btn} onClick={addSalat}>
          Salat🥦
        </button>
        <button
          type="button"
          className={style.btn}
          onClick={() => {
            handleBestellen();
            handleSend();
          }}
        >
          Bestellen
        </button>
      </div>
    </div>
  );
}
export default Sandwich;
