function FilterMovie(props) {
  const handleSearchMovie = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <fieldset>
        <label htmlFor='nameMovie'>Movie:</label>
        <input
          className=''
          type='text'
          name='name'
          placeholder='Escribe el nombre de la pelicula'
          onChange={handleSearchMovie}
          value={props.searchMovie}
        />
      </fieldset>
    </>
  );
}

export default FilterMovie;
