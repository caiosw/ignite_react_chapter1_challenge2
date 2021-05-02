import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from '../services/api';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface AppContextProps {
  children: ReactNode;
}

interface AppContextData {
  selectedGenreId: number;
  genres: GenreResponseProps[];
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
  changeSelectedGenreId: (id: number) => void;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children }: AppContextProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] =
    useState<GenreResponseProps>({} as GenreResponseProps);

  function changeSelectedGenreId(id: number) {
    setSelectedGenreId(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })

  }, [selectedGenreId]);

  return (
    <AppContext.Provider
      value={{
        selectedGenreId,
        genres,
        movies,
        selectedGenre,
        changeSelectedGenreId
      }}
    >
      {children}
    </AppContext.Provider>
  )
}