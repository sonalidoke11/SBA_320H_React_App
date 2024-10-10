import {useState, useEffect} from "react";
import Form from "../components/form";
import MovieDisplay from "../components/MovieDisplay";


export default function Search(){
    // Constant with your API Key
  //const apiKey = "d398cb9b";
  const apiKey = import.meta.env.VITE_API_KEY;

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    try {

    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    //console.log(response);


    const data = await response.json();
    console.log(data);
      
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
      <h2>Search a movie you want</h2>
      <Form moviesearch={getMovie}/>
      <div className="">
        <MovieDisplay movie={movie} />
      </div>
    </div>
  )
  }