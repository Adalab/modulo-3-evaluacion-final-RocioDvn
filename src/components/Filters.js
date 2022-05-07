import FilterMovie from './FilterMovie';
import FilterYears from './FilterYears';

function Filters(props) {
  return (
    <section>
      <form>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          searchMovie={props.searchMovie}
        />
        <FilterYears
          handleFilterYear={props.handleFilterYear}
          years={props.years}
          filterYears={props.FilterYears}
        />
      </form>
    </section>
  );
}
export default Filters;
