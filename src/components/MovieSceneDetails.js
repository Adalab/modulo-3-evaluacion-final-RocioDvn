import { Link } from 'react-router-dom';

function MovieSceneDetails(props) {
  return (
    <fieldset className='cardDetail'>
      <img
        className='imgDetail'
        src={props.movie.poster}
        alt={props.movie.name}
      />
      <div>
        <h2 className='nameDetail'> {props.movie.name} </h2>
        <p className='phraseDetail'> {props.movie.phrase} </p>
        <p className='director'>{props.movie.director} </p>
        <nav>
          <a className='audio' href={props.movie.audio} target='blank'>
            Escucha el audio de la pelicula
          </a>
          <Link to='/'></Link>
        </nav>
      </div>
    </fieldset>
  );
}
export default MovieSceneDetails;
