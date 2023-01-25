import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

interface IMovie {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null;
  budget?: number;
  genres?: [
    {
      id?: number;
      name?: string;
    },
    {
      id?: number;
      name?: string;
    },
    {
      id?: number;
      name?: string;
    }
  ];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: [
    {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    },
    {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    },
    {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    },
    {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    },
    {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    },
    {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    },
    {
      id?: number;
      logo_path?: string;
      name?: string;
      origin_country?: string;
    }
  ];
  production_countries?: [
    {
      iso_3166_1?: string;
      name?: string;
    },
    {
      iso_3166_1?: string;
      name?: string;
    }
  ];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: [
    {
      english_name?: string;
      iso_639_1?: string;
      name?: string;
    }
  ];
  status?: string | undefined;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export default function Home() {
  const [movie, setMovie] = useState<IMovie | undefined>();
  console.log("🚀 ~ file: index.tsx:7 ~ Home ~ movie", movie);

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

  if (!movie) return <p>No profile data</p>;

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>Não sabe o que assistir ?</h1>
        <div className={styles.containerInfos}>
          <img src="" alt="" />
          <h3 className={styles.titleFilme}>{movie.title}</h3>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
        <button className={styles.buttonSearch}>Encontre um filme</button>
        <p className={styles.subtitle}>
          Clique em <b>Encontrar filme</b> que traremos informações de algum
          filme para você assistir hoje.
        </p>
      </div>
    </>
  );
}
