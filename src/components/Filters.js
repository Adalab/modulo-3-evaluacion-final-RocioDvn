import FilterMovie from './FilterMovie';
import FilterYear from './FilterYears';

function Filters(props) {
  return (
    <section>
      <form className='filters'>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          searchMovie={props.searchMovie}
        />
        <FilterYear
          handleFilterYear={props.handleFilterYear}
          year={props.year}
          filterYears={props.FilterYears}
        />
      </form>
    </section>
  );
}
export default Filters;
