function FilterMovie(props) {
  const handleSearchMovie = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };
  return (
    <>
      <fieldset className='nameFilterMovie'>
        <label className='label'>
          Movie:
          <input
            className='inputFilterMovie'
            type='search'
            name='search'
            placeholder='Escribe el nombre de la pelicula'
            onChange={handleSearchMovie}
            value={props.searchMovie}
          />
        </label>
      </fieldset>
    </>
  );
}

export default FilterMovie;
