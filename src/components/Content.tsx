import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { CategoryTitle } from "./CategoryTitle";
import { MovieCard } from "./MovieCard";

export function Content() {
  const {
    movies,
    selectedGenre
  } = useContext(AppContext)

  function renderMovies() {
    if (movies) {
      return (
        movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))
      )
    } else {
      return <div>loading...</div>;
    }
  }

  return (
    <div className="container">
      <CategoryTitle title={selectedGenre.title} />
      <main>
        <div className="movies-list">
          {renderMovies()}
        </div>
      </main>
    </div>
  )
}