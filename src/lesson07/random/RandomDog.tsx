import { useEffect, useState } from "react";
import style from "./randomDog.module.css";

function RandomDog(): JSX.Element {
  const [url, setUrl] = useState<string>("");

  async function loadPicture(): Promise<void> {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const obj = await res.json();
    console.log(obj);
    const { message } = obj;
    setUrl(message);
  }
  useEffect(() => {
    loadPicture();
  }, []);

  return (
    <div className={style.randomDog_container}>
      <h1 className="heading">Random Dog</h1>
      <div className={style.random_img_container}>
        <img className={style.randomDog_img} src={url} alt="random-dog" />
      </div>
      <button
        className={style.randomDog_btn}
        type="button"
        onClick={() => loadPicture()}
      >
        Next image
      </button>
    </div>
  );
}

export default RandomDog;
