import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetails';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [filterYears, setFilterYears] = useState(0);
  /*uso usefefect para que solo pinte una vez*/
  useEffect(() => {
    getApiData().then((dataApi) => {
      /*console.log(dataApi); me pinta ok */
      setDataMovies(dataApi);
    });
  }, []);
  /*funcion para filtart movie*/
  const handleFilterMovie = (value) => {
    setSearchMovie(value);
  };
  /*funcion para filtart año*/
  const handleFilterYear = (value) => {
    setFilterYears(value);
  };

  /*filtros*/
  const movieFilters = dataMovies
    /*filtrar por nombre*/
    .filter((movie) => {
      return movie.name.includes(searchMovie);
    })
    /*filtro para que salgan todos los años en seleccione*/
    .filter((movie) => {
      if (filterYears === 0) {
        return true;
      } else {
        return movie.year === filterYears;
      }
    })
    /*filtro de años*/
    .filter((movie) => {
      if (filterYears === 0) {
        return true;
      } else {
        return filterYears === movie.year;
      }
    });
  /*funcion para que no repita el año*/
  const getYear = () => {
    const movieYear = dataMovies.map((movie) => movie.year); /*array de años*/
    /*console.log(movieYear);*/
    /*no repite el año, indexof posicion*/
    const uniqueYear = movieYear.filter((year, index) => {
      return movieYear.indexOf(year) === index;
    });
    //console.log(uniqueYear);
    return uniqueYear;
  };
  //rutas
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <header>
        <h1>Owen wilson's "wow"</h1>
      </header>
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <MovieSceneList
                  movieFilters={movieFilters}
                  searchMovie={searchMovie}
                />
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  years={getYear()}
                  filterYears={filterYears}
                  searchMovie={searchMovie}
                />
              </>
            }
          />
          <Route path='/movie/:movieId' element={<MovieSceneDetail />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
