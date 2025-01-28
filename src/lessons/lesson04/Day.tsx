//### 1: Изменение булевого значения

// Создайте компонент, который позволяет управлять состоянием "включено/выключено". Начальное состояние должно быть `false`. При нажатии на кнопку, состояние должно переключаться, а текст на экране изменяться в зависимости от значения состояния: "День 🌞" / "Ночь 🌛"
import React, { useState } from "react";
import "./day.css";
export default function Day() {
  const [isDay, setDay] = useState(false);
  const dayNight = () => {
    setDay((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h1>{isDay ? "День 🌞" : "Ночь🌘"}</h1>
        <button onClick={dayNight}>On/Off</button>
      </div>
    </div>
  );
}
