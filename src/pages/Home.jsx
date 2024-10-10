import { useState, useEffect } from "react";
import ListDisplay from "../components/ListDisplay.jsx";

export default function List() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [series, setSeries] = useState(null);
  const [movies, setMovies] = useState(null);

  const getSeries = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=tt0944947&Season=1&apikey=${apiKey}`);
      const data = await response.json();
      setSeries(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovies = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?&i=tt6468322&Season=1&apikey=${apiKey}`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSeries();
    getMovies();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to entertainment world!</h1>
      <div>
        <ListDisplay movie={series} />
        <ListDisplay movie={movies} />
      </div>
    </div>
  );
}
