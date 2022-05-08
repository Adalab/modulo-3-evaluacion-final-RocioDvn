import { Link } from 'react-router-dom';
function MovieSceneItem(props) {
  return (
    <Link to={`/movie/${props.movie.id}`} className=''>
      <img
        className='imgMovie'
        src={props.movie.poster}
        alt={props.movie.poster}
      />
      <h2 className='nameMovie'>{props.movie.name}</h2>
      <p className='yearMovie'>{props.movie.year}</p>
      <p className='phraseMovie'>{props.movie.phrase}</p>
    </Link>
  );
}
export default MovieSceneItem;
