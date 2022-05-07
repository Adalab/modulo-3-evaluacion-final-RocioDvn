import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState(0);
  /*uso usefefect para que solo pinte una vez*/
  useEffect(() => {
    getApiData().then((dataApi) => {
      /*console.log(dataApi); me pinta ok */
      setDataMovies(dataApi);
    });
  }, []);
  /*funcion para filtart movie*/
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  /*funcion para filtart año*/
  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  /*filtros*/
  const movieFilters = dataMovies
    /*filtrar por nombre*/
    .filter((movie) => {
      return movie.name.includes(filterMovie);
    })
    /*filtro para que salgan todos los años en seleccione*/
    .filter((movie) => {
      if (filterYear === 0) {
        return true;
      } else {
        return movie.year === filterYear;
      }
    })
    /*filtro de años*/
    .filter((movie) => {
      if (filterYear === 0) {
        return true;
      } else {
        return filterYear === movie.year;
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

  return (
    <>
      <header>
        <h1>Owen wilson's "wow"</h1>
      </header>

      <MovieSceneList dataMovie={dataMovies} />
      <Filters
        handleFilterMovie={handleFilterMovie}
        handleFilterYear={handleFilterYear}
        years={getYear()}
        filterYear={filterYear}
      />
    </>
  );
}
export default App;
