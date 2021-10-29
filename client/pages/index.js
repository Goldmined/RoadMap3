import MovieLayout from "../components/layout/Movie";
import EntityMovie from "../components/movie/Entity";
import { useEffect, useState } from "react";
import FilterPanel from "../components/panels/Filter";
import { useRouter } from "next/router";

const MoviesPage = () => {
  const router = useRouter();
  const { genre,year } = router.query;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, []);
  useEffect(() => {
    if (!genre&&!year) return;
    let url = "http://localhost:3001/movies?"
    if (genre){
      url += `genre=${genre}&`
    }
    if (year){
      url += `year=${year}&`
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, [genre,year]);
  const changeGenre = (newGenre) => {
    if (genre === newGenre) return;
    router.push(`/?genre=${newGenre}`);
  };
  const changeYear = (newYear) => {
    if (year === newYear) return;
    router.push(`/?year=${newYear}`);
  };
  return (
    <MovieLayout>
      <section className="section-long">
        <div className="container">
          <FilterPanel changeGenre={changeGenre} changeYear={changeYear} />
          {movies.map((movie) => {
            return <EntityMovie key={movie._id} movie={movie} />;
          })}
          <div className="section-bottom">
            <div className="paginator">
              <a className="paginator-item" href="#">
                <i className="fas fa-chevron-left" />
              </a>
              <a className="paginator-item" href="#">
                1
              </a>
              <span className="active paginator-item">2</span>
              <a className="paginator-item" href="#">
                3
              </a>
              <span className="paginator-item">...</span>
              <a className="paginator-item" href="#">
                10
              </a>
              <a className="paginator-item" href="#">
                <i className="fas fa-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </MovieLayout>
  );
};

export default MoviesPage;

