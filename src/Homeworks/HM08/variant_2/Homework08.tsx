import { useEffect, useState } from "react";
import style from "./homework08.module.css";

function Homework08(): JSX.Element {
  const [image, setImage] = useState<string>("");

  //   async function loadPicture(): Promise<void> {
  //     const res = await fetch("https://randomfox.ca/floof/");
  //     const obj = await res.json();
  //     console.log(obj);
  //     setImage(obj.image);
  //   }

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then((res) => res.json())
      .then((data) => setImage(data.image));
  }, []);

  return (
    <div className={style.container}>
      <h1 className="heading">Fox</h1>
      <div className={style.img_container}>
        {image ? (
          <img className={style.image} src={image} alt="fox" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {/* <button
        className={style._btn}
        type="button"
        onClick={() => loadPicture()}
      >
        Next image
      </button> */}
    </div>
  );
}

export default Homework08;
