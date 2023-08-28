import React, { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import MovieDetailBar from "./MovieDetailBar";
import { MovieDetailsDiv,ArrowDiv} from "./StyledComponent";
const ReadMovieToken =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmE0ZDcwNjQxNzZiNTZhZTY5MjRjNjUwMTQ0ZTdlMSIsInN1YiI6IjY0ZGM2MjlmZmUwNzdhMDEwMTNmMTgwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C7tOT0zDlTcmM7vL-YrvIJL5YDAqdBgUmJ2jMQqzobI";
const baseURL='https://image.tmdb.org/t/p/w500'

function MovieDetail() {    
  const location = useLocation() 
  const movieId = location.state && location.state.movieId  
  const [movieDetails, setMovieDetails] = useState({});
  const [castList, setCastList]= useState("")
  const [directors, setDirectors] = useState("")
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: ReadMovieToken,
    },
  };
  const getMovieDetails = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {        
        setMovieDetails(response);       
      })
      .catch((err) => console.error(err));
  };
  const getCastList = async () => {   
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {   
        console.log(response.crew)                
        const castDetailList = response.cast.sort((a,b)=>a.order-b.order).slice(0,20)  
        const castNames = castDetailList.map(cast=>cast.name).toString()    
        const directors = response.crew.filter(crew=>crew.job==='Director').map(director=>director.name).toString()        
        setCastList(castNames);  
        setDirectors(directors)     
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {  
  
    getMovieDetails();
    getCastList();

  },[]);  
  const navigate = useNavigate();
 
  const {release_date,runtime, vote_average,title, overview,poster_path} = movieDetails;
  const year= release_date && (new Date(release_date)).getFullYear(); 
  return (  
    <>  
    <Header compTwo={<MovieDetailBar/>}/>
    <MovieDetailsDiv >
    {Object.keys(movieDetails).length>0 &&
    <>   
      <div class="movie-card">
        <img src={baseURL+poster_path} alt="Movie Image" class="movie-detail-image" />
      </div>
      <div class="movie-detail-content">
        <div class="movie-detail-title">{title} <span class="movie-rating">({vote_average.toString()}/10)</span></div>
        <div class="movie-detail-description">{year}| {runtime} min| {directors}</div>
        <div class="movie-detail-description">Casts: {castList}</div>
        <div class="movie-detail-description">
          Description: {overview}
        </div>
      </div>
      </>}
    </MovieDetailsDiv>
    <ArrowDiv><span class="material-icons" onClick={()=> navigate('/MovieList')}>arrow_back</span></ArrowDiv>
    </>
  );
}

export default MovieDetail;
