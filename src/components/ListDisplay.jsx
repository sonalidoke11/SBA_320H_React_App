// MovieDisplay.js
import React from 'react';

export default function ListDisplay({ movie }) {
  if (!movie || !movie.Episodes) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.Title} - Season {movie.Season}</h2>
      <div style={styles.episodeList}>
        {movie.Episodes.map((episode, index) => (
          <div key={index} style={styles.episodeCard}>
            <h3>{episode.Title}</h3>
            <p>Episode: {episode.Episode}</p>
            <p>IMDB Rating: {episode.imdbRating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Simple styles for flexbox layout
const styles = {
  episodeList: {
    display: 'flex',
    flexWrap: 'wrap',  // To allow wrapping of episodes in case there are many
    gap: '10px',       // Space between episode cards
  },
  episodeCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    width: '200px',    // Width of each episode card
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};
