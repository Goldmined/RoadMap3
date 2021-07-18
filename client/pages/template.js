import ArticleCard from "../components/card/Article";
import PostCard from "../components/card/Post";
import ToastComment from "../components/comment/Toast";
import MainLayout from "../components/layout/Main";
import UserAvatar from "../components/user/Avatar";
import { post, user, comment } from "../data/mock";

const TemplatePage = () => {
  return (
    <MainLayout>
      <div className="row mb-2">
        <div className="col-md-6">
          <PostCard item={post} url={`/posts/${post.id}`} />
        </div>
        <div className="col-md-6">
          <PostCard item={post} url={`/posts/${post.id}`} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <UserAvatar item={user} url={`/users/${user.id}`} />
        </div>
        <div className="col-md-3">
          <UserAvatar item={user} url={`/users/${user.id}`} />
        </div>
        <div className="col-md-3">
          <UserAvatar item={user} url={`/users/${user.id}`} />
        </div>
      </div>
      <div className="row g-5">
        <div className="col-md-8">
          <ArticleCard item={post}/>
          <ToastComment item={comment}/>
          <ToastComment item={comment}/>
          <ToastComment item={comment}/>
          <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary" href="#">
              Older
            </a>
            <a
              className="btn btn-outline-secondary disabled"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Newer
            </a>
          </nav>
        </div>
        <div className="col-md-4">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">
                Customize this section to tell your visitors a little bit about
                your publication, writers, content, or something else entirely.
                Totally up to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default TemplatePage;
