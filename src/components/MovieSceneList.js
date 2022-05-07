import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  /*movieElements es el array generado con map,  */
  const movieElements = props.dataMovie.map((movie) => {
    return (
      <li className='' key={movie.id}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return (
    <section>
      <ul className='cardList'> {movieElements} </ul>
    </section>
  );
}
export default MovieSceneList;
