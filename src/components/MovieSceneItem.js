import { Link } from 'react-router-dom';
function MovieSceneItem(props) {
  return (
    <Link to={`/movie/${props.movie.id}`} className=''>
      <img className='img' src={props.movie.poster} alt={props.movie.poster} />
      <p>{props.movie.name}</p>
      <p>{props.movie.year}</p>
      <p>{props.movie.phrase}</p>
    </Link>
  );
}
export default MovieSceneItem;
