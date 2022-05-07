function FilterYear(props) {
  const renderYear = () => {
    return props.year.map((year, index) => {
      return <option key={index} value={year}></option>;
    });
  };

  const handleChangeYear = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  return (
    <>
      <fieldset>
        <label htmlFor='labelYear'>Year:</label>
        <select
          name='year'
          id='year'
          onChange={handleChangeYear}
          value={props.filterYear}
        >
          <option value='0'>Seleccionar el año</option>
          {renderYear()}
        </select>
      </fieldset>
    </>
  );
}
export default FilterYear;
