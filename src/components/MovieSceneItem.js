function MovieSceneItem(props) {
  return (
    <a className='card' href='#'>
      <img src={props.movie.poster} alt={props.movie.poster} title='poster' />
      <p>{props.movie.name}</p>
      <p>{props.movie.year}</p>
      <p>{props.movie.phrase}</p>
    </a>
  );
}
export default MovieSceneItem;
