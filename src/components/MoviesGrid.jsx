import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
// import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);


  useEffect(() =>{
    fetch("https://api.themoviedb.org/4/discover/movie",{
      headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2Y3NmM3NGI3M2Q0Yjg0ZmIxMzdjNDQ4NzEwZmQ1ZCIsInN1YiI6IjYyZWMwNWIyYWY0MzI0MDA1YzFhYWNkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.16tv0zCbnSjhNKdKV77BX-EMlnWHOO8Bw5qEXjNBsXo",
        "Content-Type": "application/json;charset=utf-8",

      },
    }).then(result => result.json())
    .then((data) => {
      setMovies ( data.results);
      
    });
},[]);

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}