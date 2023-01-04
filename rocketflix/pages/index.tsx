import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  async function getContent() {
    try {
      const response = await fetch("http://localhost/api/hello");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>Não sabe o que assistir ?</h1>
        <button className={styles.buttonSearch} onClick={getContent}>
          Encontre um filme
        </button>
        <p className={styles.subtitle}>
          Clique em <b>Encontrar filme</b> que traremos informações de algum
          filme para você assistir hoje.
        </p>
      </div>
    </>
  );
}
