import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.likAktive : "")}
          to={"/"}
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.likAktive : "")}
          to={"fetch-fox"}
        >
          fox-api
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.likAktive : "")}
          to={"fetch-cat"}
        >
          Lesson05
        </NavLink>
        {/* <NavLink to={"hero"}>Lesson05</NavLink> */}
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
}

export default Layout;
