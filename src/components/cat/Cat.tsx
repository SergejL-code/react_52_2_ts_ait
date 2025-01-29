import { useEffect, useState } from "react";
import styles from "./cat.module.css";
import Loader from "../loader/Loader";
import MyButton from "../myButton/MyButton";
import CatSpinner from "../loader/catspinner loader/CatSpinner";

interface ICat {
  fact: string;
  url: string;
}

function Cat(): JSX.Element {
  const [cats, setCats] = useState<ICat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchCat = async (): Promise<void> => {
    try {
      setIsLoading(false);
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      const { fact } = data;

      const res1 = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
      );
      const data1 = await res1.json();
      const { url } = data1[0];
      setCats((prev) => [...prev, { fact, url }]);
    } catch (error) {
      console.error("Tut mir leid🤨 :(");
    }
  };

  const clear = () => {
    setCats([]);
  };

  const handleGetCat = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      fetchCat();
    }, 800);
  };
  const handleDeleteCat = (fact: string) => {
    setCats((prev) => prev.filter((cat) => cat.fact !== fact));
  };
  useEffect(() => {
    handleGetCat();
  }, []);
  return (
    <div className={styles.mainContainer}>
      <h2>🐈Fakten über Katzen 🐈</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.btn}>
          <MyButton func={handleGetCat} type="button" text="hinzufügen" />
          <MyButton
            func={clear}
            variant="danger"
            type="reset"
            text="alles löschen"
          />
        </div>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {cats.map((element, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <img src={element.url} alt="cat-photo" />
                </div>
                <div className={styles.cardBack}>
                  <p className={styles.fact}>{element.fact}</p>
                  <MyButton
                    func={() => handleDeleteCat(element.fact)}
                    type="button"
                    text="löschen"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cat;
