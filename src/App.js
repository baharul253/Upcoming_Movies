import React from 'react'

import MovieList from './MovieComponents/MovieList';
import MovieDetail from './MovieComponents/MovieDetail';
import {  Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';


const App = () => {
 
  return (
      <Provider store={store}>              
        <Routes>
          <Route exact path="/" element={<MovieList />} />
          <Route path="/MovieList" element={<MovieList />} />
          <Route path='/MovieDetails' element={<MovieDetail />} />
        </Routes>
      </Provider>
  );
}


export default App;
