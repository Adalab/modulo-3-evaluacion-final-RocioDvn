import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  /*movieElements es el array generado con map,  */
  const movieElements = props.movieFilters.map((movie) => {
    return (
      <li className='card' key={movie.id}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return props.movieFilters.length === 0 && props.searchMovie !== '' ? (
    <p>
      No hay ningun nombre de película que coincida con la palabra {''}
      {props.searchMovie}
    </p>
  ) : (
    <section>
      <ul className='cardList'> {movieElements} </ul>
    </section>
  );
}
export default MovieSceneList;
