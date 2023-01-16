import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const baseUrl = "https://api.themoviedb.org/3/movie/";
  const url =
    "https://api.themoviedb.org/3/movie/550?api_key=d96a96359ee669185a3797873a681efe";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setMovie(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!movie) return <p>No profile data</p>;

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>Não sabe o que assistir ?</h1>
        <button className={styles.buttonSearch}>Encontre um filme</button>
        <p className={styles.subtitle}>
          Clique em <b>Encontrar filme</b> que traremos informações de algum
          filme para você assistir hoje.
        </p>
      </div>
    </>
  );
}
