import { useEffect, useState } from "react";

function ChangeTitel(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Счетчик:${count}`;
  }, [count]);

  return (
    <>
      <p>Счетчик:{count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>;
    </>
  );
}

export default ChangeTitel;
