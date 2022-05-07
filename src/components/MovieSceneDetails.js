function MovieSceneDetails(props) {
  return (
    <fieldset className='cardDetail'>
      <img
        className='imgDetail'
        src={props.movie.poster}
        alt={props.movie.poster}
      ></img>
      <div>
        <p className='nameDetail'> {props.movie.name} </p>
        <p className='phraseDetail'> {props.movie.phrase} </p>
        <p className='director'>{props.movie.director} </p>
        <nav>
          <a className='audio' href={props.movie.audio} target='blank'>
            Escucha el audio de la pelicula
          </a>
        </nav>
      </div>
    </fieldset>
  );
}
export default MovieSceneDetails;
