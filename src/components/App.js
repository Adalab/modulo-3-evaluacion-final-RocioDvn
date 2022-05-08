import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetails';
import ls from '../services/localStorage';

function App() {
  const [dataMovies, setDataMovies] = useState(ls.get('movie', []));
  const [searchMovie, setSearchMovie] = useState('');
  const [filterYears, setFilterYears] = useState(0);
  /*uso usefefect para que solo pinte una vezllamamso a api*/
  useEffect(() => {
    if (dataMovies.length === 0) {
      getApiData().then((dataApi) => {
        /*console.log(dataApi); me pinta ok */
        setDataMovies(dataApi);
      });
    }
  }, []);
  //Lee del local storage los datos y guárdalos en el useState para que estén disponibles al arrancar la página.
  useEffect(() => {
    ls.set('movie', dataMovies);
  }, [dataMovies]);
  /*funcion para filtart movie*/
  const handleFilterMovie = (value) => {
    setSearchMovie(value);
  };
  /*funcion para filtart año*/
  const handleFilterYear = (value) => {
    setFilterYears(parseInt(value));
  };

  /*filtros*/
  const movieFilters = dataMovies
    /*filtrar por nombre*/
    .filter((movie) => {
      return movie.name.toLowerCase().includes(searchMovie.toLowerCase());
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
  //console.log(pathname);
  const dataPath = matchPath('/movie/:movieId', pathname);
  //hacer validacion datapath dif de null return id de ruta si no null
  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataMovies.find((movie) => movie.id === movieId);

  return (
    <>
      <header>
        <h1 className='tittle'>Owen wilson's "wow"</h1>
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
                  year={getYear()}
                  filterYears={filterYears}
                  searchMovie={searchMovie}
                />
              </>
            }
          />
          <Route
            path='/movie/:movieId'
            element={<MovieSceneDetail movie={movieFound} />}
          />
        </Routes>
      </div>
    </>
  );
}
export default App;
