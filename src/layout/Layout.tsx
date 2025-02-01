import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

function Layout() {
  return (
    <>
      <header className={styles.header}>
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
