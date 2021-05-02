import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function SideBar() {
  const {
    selectedGenreId,
    genres,
    changeSelectedGenreId
  } = useContext(AppContext);

  function renderGenres() {
    if (genres) {
      return (
        genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => changeSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))
      )
    } else {
      return <div>loading...</div>;
    }
  }

  return (
    <nav className="sidebar">
      <Logo />
      <div className="buttons-container">
        {renderGenres()}
      </div>
    </nav>
  )
}