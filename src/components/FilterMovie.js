function FilterMovie(props) {
  const handleChangeMovie = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <fieldset>
        <label htmlFor='nameMovie'>Movie</label>
        <input
          type='text'
          id='name'
          placeholder='Escribe el nombre de la pelicula'
          onChange={handleChangeMovie}
          value={props.filterMovieName}
        />
      </fieldset>
    </>
  );
}

export default FilterMovie;
