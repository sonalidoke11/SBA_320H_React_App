import {useState, useEffect} from "react";
import Form from "../components/form";
import MovieDisplay from "../components/MovieDisplay";


export default function Series(){
    // Constant with your API Key
  //const apiKey = "d398cb9b";
  const apiKey = import.meta.env.VITE_API_KEY;

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    try {
    // Make fetch request and store the response
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=series`);

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