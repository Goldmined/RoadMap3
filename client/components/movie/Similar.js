import { useState } from "react";
import { useEffect} from "react";
import { useRouter } from "next/router";

const SimilarMovies = () => {
  const router = useRouter();
  const { movie_id } = router.query;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, []);
  useEffect(() => {
    if (!movie_id) return;
    let url = `http://localhost:3001/movies?limit=3&similar=${movie_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, [movie_id]);
  return (
    <>
      <div className="section-head">
        <h2 className="section-title text-uppercase">Latest movies</h2>
      </div>
      {movies.map((movie)=>{
           return (
            <div className="movie-short-line-entity">
            <a className="entity-preview" href="movie-info-sidebar-right.html">
              <span className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item"
                  src="http://via.placeholder.com/1920x1080"
                />
              </span>
            </a>
            <div className="entity-content">
              <h4 className="entity-title">
                <a className="content-link" href="movie-info-sidebar-right.html">
                  {movie.title}
                </a>
              </h4>
              <p className="entity-subtext">11 nov 2018</p>
            </div>
          </div> 
           )
      })}
      
      
    </>
  );
};

export default SimilarMovies;
