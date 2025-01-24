import { useEffect, useState } from "react";

function Playground(): JSX.Element {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
  const [numberOfBirds, setNumberOfBirds] = useState<number>(10);

  function handleAddDog(): void {
    setNumberOfDogs(numberOfDogs + 1);
  }
  function handleAddBirds(): void {
    setNumberOfBirds(numberOfBirds + 1);
  }

  // Component lifcycle - жизненный цикл компонента
  // Этапы жизненого цикла:
  // Mount - первая отрисовка компонента на странице
  // Update - изменение
  // Unmount - когда перестает отрисовываться

  // useEffect
  // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента
  // - принимает колбек функцию и второй опиональный параметр -
  // массив зависимостей

  // Exsample 1: пустой массив зависиммости

  useEffect(() => {
    console.log("UseEffect 1- только перед первой отрисовки === mount");
  }, []);

  // Exsample 2

  return (
    <div>
      <h1>Здесь Playground</h1>
      <p>Number of Dogs:{numberOfDogs}</p>
      <p>Number of Birds:{numberOfBirds}</p>
      <button type="button" onClick={handleAddDog}>
        Let the dog in
      </button>
      <button type="button" onClick={handleAddBirds}>
        New Bird
      </button>
    </div>
  );
}

export default Playground;
