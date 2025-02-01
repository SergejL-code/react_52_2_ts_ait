// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd
// new Date().toLocaleString();
// toFixed(2);
import { useState, useEffect } from "react";
import style from "./bitcoin.module.css";

function Bitcoin(): JSX.Element {
  const [usd, setUsd] = useState<string>("");
  const [date, setDate] = useState<string>("");

  async function loadBitcoin(): Promise<void> {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );
    const obj = await res.json();

    const bitcoinPrice = obj.bitcoin.usd.toFixed(2);

    setUsd(bitcoinPrice);
    setDate(new Date().toLocaleString());
  }
  useEffect(() => {
    loadBitcoin();
  }, []);
  return (
    <div className={style.container}>
      <h1>Bitcoin:</h1>
      <p>{date}</p>
      <p>{usd} $</p>
      <button type="button" onClick={() => loadBitcoin()}>
        next time
      </button>
    </div>
  );
}

// export default Bitcoin;
// export default function Bitcoin(): JSX.Element {
//   const [price, setPrice] = useState<string>("");
//   const [date, setDate] = useState<string>("");

//   async function loadBitcoinPrice(): Promise<void> {
//     try {
//       console.log("Запрос отправлен...");
//       const res = await fetch(
//         "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
//       );
//       console.log("Ответ получен:", res);

//       const data = await res.json();
//       console.log("Данные преобразованы в JSON:", data);

//       const bitcoinPrice = data.bitcoin.usd.toFixed(2);
//       // data.bitcoin.usd: Извлекает цену биткоина в долларах США.
//       // .toFixed(2): Округляет цену до двух знаков после запятой.
//       setPrice(bitcoinPrice);
//       setDate(new Date().toLocaleString());
//       // new Date().toLocaleString(): Создает строку с текущей датой и временем в локальном формате.
//     } catch (error) {
//       console.error("Ошибка при загрузке данных:", error);
//     }
//   }

//   useEffect(() => {
//     loadBitcoinPrice();
//   }, []);
//   // useEffect: Выполняет функцию loadBitcoinPrice при первом рендере компонента.
//   // []: Зависимости пустые, поэтому эффект выполняется только один раз.

//   return (
//     <div className={style.container}>
//       <h1>Цена Биткоина</h1>
//       <p>Дата: {date || "Загрузка..."}</p>
//       {/* {date || 'Загрузка...'}: Показывает дату или сообщение "Загрузка...", если дата еще не установлена. */}
//       <p>Цена: {price ? `$${price}` : "Загрузка..."}</p>
//       {/* {price ? $${price} : 'Загрузка...'}: Показывает цену биткоина с символом $ или сообщение "Загрузка...", если цена еще не загружена. */}
//       <button
//         className={style.btn}
//         type="button"
//         onClick={() => loadBitcoinPrice()}
//       >
//         Обновить данные
//       </button>
//     </div>
//   );
// }
