const ArticleCard = ({item}) => {
    const {title, body} = item;
  return (
    <article className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-meta">
        January 1, 2021 by <a href="#">Mark</a>
      </p>
      <p>
        {body}
      </p>
    </article>
  );
};

export default ArticleCard;
