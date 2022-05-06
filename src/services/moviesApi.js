const getApiData = () => {
  return fetch(
    'https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie) => {
        return {
          poster: movie.poster,
          movie: movie.movie,
          phrase: movie.full_line,
          year: movie.year,
          id: movie.id,
        };
      });
      return dataClean; /*devuelve solo los datos que me interesa*/
    });
};
export default getApiData;
