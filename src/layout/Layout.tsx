import styles from "./layout.module.css";

function Layout() {
  return (
    <>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>Main</main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
}

export default Layout;
