function FilterYear(props, ev) {
  const renderYear = (ev) => {
    return props.year.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };

  const handleChangeYear = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  return (
    <>
      <fieldset>
        <label className='labelYear'>Year:</label>
        <select
          name=''
          id=''
          onChange={handleChangeYear}
          value={props.filterYears}
        >
          <option value='0'>Elija el año</option>
          {renderYear()}
        </select>
      </fieldset>
    </>
  );
}
export default FilterYear;
