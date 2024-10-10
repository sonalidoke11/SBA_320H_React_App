// You can also destructure your props directly from the parameter list
// export default function MovieDisplay(props) {
  export default function MovieDisplay({ movie }){

    // Function to return loaded JSX
    const loaded = () => {
        return (
            <>
                <h1 style={{ color: 'blue' }}>{movie.Title}</h1>
                <h2 style={{ color: 'purple', fontSize: '18px' }}>{movie.Genre}</h2>
                <p>IMDB Rating: {movie.imdbRating}</p>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>
            </>
        );
    };
    
    // Function to return loading JSX
    const loading = () => {
        return <h1>No Movie to Display</h1>;
        };
    
    // Ternary operator will determine which functions JSX we will return
        return movie ? loaded() : loading();
    }