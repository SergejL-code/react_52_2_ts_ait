import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { useCart } from "../context/CartContext";

function Layout() {
  const { cart } = useCart();

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <>
      <header className={styles.header}>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to={"con"}
          >
            Consultation
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to={"hm"}
          >
            HomeWork
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to={"allcomponent"}
          >
            Component
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to={"cart"}
          >
            Cart
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
            to={"products"}
          >
            Products
          </NavLink>
        </nav>
        <span>Cart: €{getTotalPrice()}</span>
      </header>
      <main className={styles.main}>
        {/* за место компонента Outlet импортированного из React Router будут приходить компоненты из маршрутизации, которую мы описываем в App.tsx */}
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
}

export default Layout;
