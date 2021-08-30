const EntityMovie = ({ movie }) => {
  const { title, poster, imdb, runtime, plot, genres } = movie;
  return (
    <article className="movie-line-entity">
      <div className="entity-poster" data-role="hover-wrap">
        <div className="embed-responsive embed-responsive-poster">
          <img className="embed-responsive-item" src={poster} alt />
        </div>
      </div>
      <div className="entity-content">
        <h4 className="entity-title">
          <a className="content-link" href="movie-info-sidebar-right.html">
            {title}
          </a>
        </h4>
        <div className="entity-category">
          {genres.map((genre,i) => {
            return (
              <a className="content-link" href="movies-blocks.html" key={i}>
                {genre}
                {i<genres.length-1 ? ", " : ""} 
                {/* если 5 елементов, то генрес.ленз = 4, и это последний элемент после которого надо ставить запятую */}
              </a>
            );
          })}
        </div>
        <div className="entity-info">
          <div className="info-lines">
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-star" />
              </span>
              <span className="info-text">{imdb.rating}</span>
              <span className="info-rest">/10</span>
            </div>
            <div className="info info-short">
              <span className="text-theme info-icon">
                <i className="fas fa-clock" />
              </span>
              <span className="info-text">{runtime}</span>
              <span className="info-rest">&nbsp;min</span>
            </div>
          </div>
        </div>
        <p className="text-short entity-text">{plot}</p>
      </div>
      <div className="entity-extra">
        <div className="text-uppercase entity-extra-title">Showtime</div>
        <div className="entity-showtime">
          <div className="showtime-wrap">
            <div className="showtime-item">
              <span className="disabled btn-time btn" aria-disabled="true">
                11 : 30
              </span>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                13 : 25
              </a>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                16 : 07
              </a>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                19 : 45
              </a>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                21 : 30
              </a>
            </div>
            <div className="showtime-item">
              <a className="btn-time btn" aria-disabled="false" href="#">
                23 : 10
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EntityMovie;
