import styles from "./cart.module.css";

import { useState } from "react";
import { useCart } from "../../context/CartContext";
import MyButton from "../myButton/MyButton";
import { p } from "framer-motion/client";

function Cart(): JSX.Element {
  // ! данные из контекста забираем через useCart()
  // мы можем забрать все что находится в контексте и использовать по необходимости
  const { cart, clearCart, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  console.log("render cart");
  return (
    <div className={styles.cartContainer}>
      <h2>Cart 🛒</h2>
      {/* если корзина пустая говорим об этом пользователю */}
      {cart.length === 0 ? (
        <p>Your cart is empty...</p>
      ) : (
        <>
          {cart.map((el) => (
            <div key={el.id}>
              <span>
                {el.title} x{el.quantity}{" "}
              </span>
              <span style={{ color: "red" }}>
                {(el.price * el.quantity).toFixed(2)}€
              </span>
              <button onClick={() => removeFromCart(el.id)}>delete</button>
            </div>
          ))}
          <div>
            <h3>Total price:{getTotalPrice()}</h3>
          </div>
          <MyButton func={clearCart} variant="danger" text="clear cart" />
        </>
      )}
    </div>
  );
}
export default Cart;
// function Counter(): JSX.Element {
//   const [counter, setCounter] = useState<number>(0);

//   function handlePlus(): void {
//     setCounter(counter + 1);
//   }
//   function handleMinus(): void {
//     setCounter(counter - 1);
//   }

//   return (
//     <div>
//       <h1>Добавление Денег</h1>
//       <img
//         src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg"
//         alt=""
//       />
//       <div className={style.container}>
//         <button className={style.btn} type="button" onClick={handleMinus}>
//           Убрать деньги
//         </button>
//         <span className={style.span_counter}>{counter} Euro</span>
//         <button className={style.btn} type="button" onClick={handlePlus}>
//           Добавить деньги
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Counter;
