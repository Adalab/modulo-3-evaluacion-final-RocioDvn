import '../styles/App.scss';
import { useState, useEffect } from 'react';
import getApiData from '../services/moviesApi';
import MovieSceneItem from './MovieSceneItem';
import MovieSceneList from './MovieSceneList';

function App() {
  const [dataMovies, setDataMovies] = useState([]);

  /*uso usefefect para que solo pinte una vez*/
  useEffect(() => {
    getApiData().then((dataApi) => {
      /*console.log(dataApi); me pinta ok */
      setDataMovies(dataApi);
    });
  }, []);
  return (
    <>
      <header>
        <h1>Owen wilson's "wow"</h1>
      </header>
      <main>
        <form>
          <h2>Movie</h2>
          <input type='text' id=''></input>

          <h2>Year</h2>
        </form>
        <button>volver</button>
      </main>
      <MovieSceneList dataMovie={dataMovies} />
    </>
  );
}
export default App;
