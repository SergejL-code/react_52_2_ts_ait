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

export default Bitcoin;
