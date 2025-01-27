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

  /* Component lifecycle - жизненный цикл компонента
   Этапы жизненного цикла:
  1. Mount - первая отрисовка компонента на странице
  2. Update - изменение
  3. Unmount - когда перестает отрисовываться*/

  /* useEffect
   позволяет вызвать функцию
   на каком-нибудь из этапов жизни компонента
   - принимает callBack функцию и второй опциональный параметр -
  // массив зависимостей*/

  // Example 1: пустой массив зависимости

  useEffect(() => {
    console.log("UseEffect 1- только перед первой отрисовки === mount");
  }, []);

  // Example 2: без массива зависимостей(вообще)

  useEffect(() => {
    console.log(
      "UseEffect 2 - при mount(первичной отрисовки) и при любых изменениях"
    );
  });

  // Example 3: с указанием зависимостей

  useEffect(() => {
    console.log(
      "UseEffect 3 - при первичной отрисовке и при изменении переменной --numberOfDogs--"
    );
  }, [numberOfDogs]);

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
