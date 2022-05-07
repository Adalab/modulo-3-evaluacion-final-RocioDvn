import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filter(props) {
  return (
    <section>
      <form>
        <FilterMovie handleFilterMovie={props.handleFilterMovie} />
        <FilterYear
          handleFilterYear={props.handleFilterYear}
          year={props.year}
          FilterYear={props.FilterYear}
        />
      </form>
    </section>
  );
}
export default Filter;
