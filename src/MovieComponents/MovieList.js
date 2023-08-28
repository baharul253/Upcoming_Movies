import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import store from "../Redux/Store";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import { MovieContainer, Container } from "./StyledComponent";
const ReadMovieToken =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmE0ZDcwNjQxNzZiNTZhZTY5MjRjNjUwMTQ0ZTdlMSIsInN1YiI6IjY0ZGM2MjlmZmUwNzdhMDEwMTNmMTgwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C7tOT0zDlTcmM7vL-YrvIJL5YDAqdBgUmJ2jMQqzobI";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: ReadMovieToken,
    },
  };
  const getMovieList = async () => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${pageNo}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {        
        let sortedNovies = response.results.sort((movie1, movie2)=>{
          return new Date(movie2.release_date) - new Date(movie1.release_date)
        })
        setMovieList(sortedNovies);        
      })
      .catch((err) => console.error(err));
  };

  const searchMovie = async (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${value}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response.results);       
      })
      .catch((err) => console.error(err));
  };
  const previousInputValue = store.getState().input.inputValue;
  const previousPage = store.getState().page.pageNo;

  store.subscribe(() => {
    const currentInputValue = store.getState().input.inputValue;
    const currentPage = store.getState().page.pageNo;   
    if (previousInputValue !== currentInputValue) {
      if (currentInputValue) {
        searchMovie(currentInputValue);
      } else {
        getMovieList();
      }
    }
    if (previousPage != currentPage) {
      setPageNo(+currentPage);
    }
  });
 
  useEffect(() => {
    getMovieList();
  }, [pageNo]);
  return (
    <Container>
      <Header compOne={<SearchBar />} />
      <MovieContainer>
        {movieList.length > 0 &&
          movieList.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
      </MovieContainer>
      <Footer page={pageNo} />
    </Container>
  );
}

export default MovieList;
