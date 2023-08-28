import React from "react";
import { StyledLink } from "./StyledComponent";
const baseURL = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ movie,goBack ,page}) => {
  return (
    <div class="movie-card">
      <StyledLink to={"/MovieDetails"} state={{ movieId: movie.id }}>
        <img
          src={baseURL + movie.poster_path}
          alt="Movie Image"
          class="movie-image"
        />
        <div class="movie-details">
          <div class="movie-header">
            <span class="movie-title nowrap">{movie.title}</span>
            <span class="movie-rating">
              ({movie.vote_average.toString()}/10)
            </span>
          </div>
          <div class="movie-description">{movie.overview}</div>
        </div>
      </StyledLink>
    </div>
  );
};

export default MovieCard;
