import React, { useState } from "react";
import MyButton from "../myButton/MyButton";
import "./feedback.css";
function Feedback() {
  const [countLike, setCountLike] = useState(0);
  const addLike = () => {
    setCountLike((prevCount) => prevCount + 1);
  };
  const [countDislike, setCountDislike] = useState(0);
  const deleteLike = () => {
    setCountDislike((prevCount) => prevCount + 1);
  };
  function resetLike() {
    setCountDislike(0);
    setCountLike(0);
  }
  return (
    <div className="card">
      <h2>Like Counter</h2>
      <span className="countLike">{countLike}😁</span>
      <MyButton func={addLike} text={"👍Like "} type={"button"} />
      <MyButton func={deleteLike} text={"Dislike 👎"} type={"button"} />

      <span className="countDislike">{countDislike}🤮</span>
      <br />
      <MyButton func={resetLike} text={"Reset"} type={"button"} />
    </div>
  );
}

export default Feedback;
