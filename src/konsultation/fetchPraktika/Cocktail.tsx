//  Создать компонент Coctail.tsx и отрисовать как минимум два ключа :
// - Название коктейля
// Фото напитка
// https://www.thecocktaildb.com/api/json/v1/1/random.php
// ИСпользовать useEffect   только для первой отрисовки
import { useState, useEffect } from "react";
import style from "./cocktail.module.css";

// interface ICocktail {
//   strDrink: string;
//   strDrinkThumb: string;
// }

function Cocktail(): JSX.Element {
  const [name, setName] = useState<string>("");

  const [image, setImage] = useState<string>("");

  async function loadCocktail(): Promise<void> {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const obj = await res.json();

    const { drinks } = obj;

    const { strDrink, strDrinkThumb } = drinks[0];

    setName(strDrink);
    setImage(strDrinkThumb);
  }
  useEffect(() => {
    loadCocktail();
  }, []);
  return (
    <div className={style.container}>
      <h1>Coctail:{name}</h1>
      <img src={image} alt="" />
      <button type="button" onClick={() => loadCocktail()}>
        Next Cocktail
      </button>
    </div>
  );
}

export default Cocktail;
