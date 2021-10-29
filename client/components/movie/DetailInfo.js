import Link from 'next/link'

const DetailMovie = ({movie}) => {
  const { title, poster, imdb, runtime, genres, year, directors=[], cast=[], languages=[], countries=[]  } = movie;
  return (
    <div className="movie-info-entity">
      <div className="entity-poster" data-role="hover-wrap">
        <div className="embed-responsive embed-responsive-poster">
          <img
            className="embed-responsive-item"
            src={poster}
          />
        </div>
        <div
          className="d-over bg-theme-lighted collapse animated faster"
          data-show-class="fadeIn show"
          data-hide-class="fadeOut show"
        >
          <div className="entity-play">
            <a
              className="action-icon-theme action-icon-bordered rounded-circle"
              href="https://www.youtube.com/watch?v=d96cjJhvlMA"
              data-magnific-popup="iframe"
            >
              <span className="icon-content">
                <i className="fas fa-play" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="entity-content">
        <h2 className="entity-title">{title}</h2>
        <div className="entity-category">
        {genres.map((genre,i) => {
            return (
              <Link href={`/?genre=${genre}`}>
              <a className="content-link" key={i}>
                {genre}
                {i<genres.length-1 ? ", " : ""} 
                {/* если 5 елементов, то генрес.ленз = 4, и это последний элемент после которого надо ставить запятую */}
              </a>
              </Link>
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
        <ul className="entity-list">
          <li>
            <span className="entity-list-title">Release:</span>{year}
          </li>
          <li>
            <span className="entity-list-title">Directed:</span>
            {directors.map((director,i) => {
            return (
              <Link href={`/directors/${director}`}>
              <a className="content-link" key={i}>
                {director}
                {i<directors.length-1 ? ", " : ""} 
                {/* если 5 елементов, то директорс.ленз = 4, и это последний элемент после которого надо ставить запятую */}
              </a>
              </Link>
            );
          })}
          </li>
          <li>
            <span className="entity-list-title">Starring:</span>
            {cast.map((actor,i) => {
            return (
              <Link href={`/cast/${actor}`}>
              <a className="content-link" key={i}>
                {actor}
                {i<cast.length-1 ? ", " : ""} 
                {/* если 5 елементов, то директорс.ленз = 4, и это последний элемент после которого надо ставить запятую */}
              </a>
              </Link>
            );
          })}
          </li>
          <li>
            <span className="entity-list-title">Production company:</span>
            <a className="content-link" href="#">
              Re-Production Bro.
            </a>
            ,
            <a className="content-link" href="#">
              Pentakid
            </a>
          </li>
          <li>
            <span className="entity-list-title">Country:</span>
            {countries.map((country,i) => {
            return (
              <Link href={`/countries/${country}`}>
              <a className="content-link" key={i}>
                {country}
                {i<countries.length-1 ? ", " : ""} 
                {/* если 5 елементов, то директорс.ленз = 4, и это последний элемент после которого надо ставить запятую */}
              </a>
              </Link>
            );
          })}
          </li>
          <li>
            <span className="entity-list-title">Language:</span>
            {languages.map((language,i) => {
            return (
              <Link href={`/languages/${language}`}>
              <a className="content-link" key={i}>
                {language}
                {i<languages.length-1 ? ", " : ""} 
                {/* если 5 елементов, то директорс.ленз = 4, и это последний элемент после которого надо ставить запятую */}
              </a>
              </Link>
            );
          })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailMovie;
 // 20septm, 16-37