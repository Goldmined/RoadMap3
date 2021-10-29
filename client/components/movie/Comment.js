import Link from "next/link";
const CommentMovie = ({ comment }) => {
  const { name, date, text } = comment;
  return (
    <div className="comment-entity">
      <div className="entity-inner">
        <div className="entity-content">
          <h4 className="entity-title">{name}</h4>
          <p className="entity-subtext">{date}</p>
          <p className="entity-text">{text}</p>
        </div>
        <div className="entity-extra">
          <div className="grid-md row">
            <div className="col-12 col-sm-auto">
              <div className="entity-rating">
                <span className="entity-rating-icon text-theme">
                  <i className="fas fa-star" />
                </span>
                <span className="entity-rating-icon text-theme">
                  <i className="fas fa-star" />
                </span>
                <span className="entity-rating-icon text-theme">
                  <i className="fas fa-star" />
                </span>
                <span className="entity-rating-icon text-theme">
                  <i className="fas fa-star" />
                </span>
                <span className="entity-rating-icon text-theme">
                  <i className="fas fa-star" />
                </span>
                <span className="entity-rating-icon text-theme">
                  <i className="fas fa-star" />
                </span>
                <span className="entity-rating-icon text-theme">
                  <i className="fas fa-star" />
                </span>
                <span className="entity-rating-icon">
                  <i className="fas fa-star" />
                </span>
                <span className="entity-rating-icon">
                  <i className="fas fa-star" />
                </span>
                <span className="entity-rating-icon">
                  <i className="fas fa-star" />
                </span>
              </div>
            </div>
            <div className="ml-sm-auto col-auto">
              <a className="content-link" href="#">
                <i className="fas fa-reply" />
                &nbsp;&nbsp;reply
              </a>
            </div>
            <div className="col-auto">
              <a className="content-link" href="#">
                <i className="fas fa-quote-left" />
                &nbsp;&nbsp;quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentMovie;
