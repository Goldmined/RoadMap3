import Link from "next/link";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
const menuItems = [
  {
    title: "Users",
    url: "/",
  },
  {
    title: "Template",
    url: "/template",
  },
];
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link href="/">
                <a className="link-secondary">Home</a>
              </Link>
            </div>
            <div className="col-4 text-center">
              <Link href="#">
                <a className="blog-header-logo text-dark">BLOG</a>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            {menuItems.map((menuItem, index) => {
              return (
                <Link href={menuItem.url} key={index}>
                  <a className="p-2 link-secondary">{menuItem.title}</a>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <main className="container">{children}</main>
      <footer className="blog-footer">
        <p>
          Created by{" "}
          <a href="https://github.com/Goldmined" target="_blank">
            Goldmined
          </a>
        </p>
      </footer>
    </>
  );
};

export default MainLayout;


//46-51