import axios from "axios";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const url =
    "https://api.themoviedb.org/3/movie/550?api_key=d96a96359ee669185a3797873a681efe";

  function getUser() {
    axios
      .get(url)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }

  const changePosters = () => {
    return (
      <>
        <div>
          test{/* <Image src={getUser().poster_path} alt="poster" /> */}
        </div>
      </>
    );
  };

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>Não sabe o que assistir ?</h1>
        <div>{<span>{changePosters()}</span>}</div>
        <button
          className={styles.buttonSearch}
          onClick={() => console.log(getUser())}
        >
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
