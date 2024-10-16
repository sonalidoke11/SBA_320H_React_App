import {useState, useEffect} from "react";
import MovieDisplay from "../components/MovieDisplay";


export default function Movies(){
    // Constant with your API Key
  //const apiKey = "d398cb9b";
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseURL = import.meta.env.VITE_BASE_URL;

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    try {
    // Make fetch request and store the response
    const response = await fetch(`${baseURL}/?apikey=${apiKey}&t=movies`);

    // Parse JSON response into a JavaScript object
    const data = await response.json();

    // Set the Movie state to the received data
      setMovie(data);
      
    } catch (error) {

      console.error(error)

    }
    
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Marvel");
  }, []);

  return(
    <div className="App">
      {/** We pass the getMovie function as a prop called moviesearch */} 
      <MovieDisplay movie={movie} />
    </div>
  )
  }