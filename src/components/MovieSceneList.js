import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  /*movieElements es el array generado con map,  */
  const movieElements = props.dataMovie.map((movie) => {
    return (
      <li key={movie.id}>
        <MovieSceneItem movie={movie}></MovieSceneItem>
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
