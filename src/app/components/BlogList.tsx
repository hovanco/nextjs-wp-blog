import BlogItem from "./BlogItem";
import { BlogData } from "../types/posts";

interface BlogListProps {
  posts: BlogData[];
  isLoading: boolean;
  featuredPost?: BlogData | null;
}

const BlogList = ({ posts, isLoading, featuredPost }: BlogListProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <section className="skeleton-list mobile">
            <article className="skeleton-card">
              <div className="skeleton-item">
                <div className="skeleton-content">
                  <h2 className="skeleton-text skeleton-title"></h2>
                  <p className="skeleton-text skeleton-sub-title"></p>
                  <p className="skeleton-text skeleton-date-author"></p>
                  <div className="wrapper-skeleton-content">
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                  </div>
                </div>
                <figure className="skeleton-image"></figure>
              </div>
              <div className="skeleton-text skeleton-border"></div>
            </article>
            <article className="skeleton-card">
              <div className="skeleton-item">
                <div className="skeleton-content">
                  <h2 className="skeleton-text skeleton-title"></h2>
                  <p className="skeleton-text skeleton-sub-title"></p>
                  <p className="skeleton-text skeleton-date-author"></p>
                  <div className="wrapper-skeleton-content">
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                  </div>
                </div>
                <figure className="skeleton-image"></figure>
              </div>
              <div className="skeleton-text skeleton-border"></div>
            </article>
            <article className="skeleton-card">
              <div className="skeleton-item">
                <div className="skeleton-content">
                  <h2 className="skeleton-text skeleton-title"></h2>
                  <p className="skeleton-text skeleton-sub-title"></p>
                  <p className="skeleton-text skeleton-date-author"></p>
                  <div className="wrapper-skeleton-content">
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                  </div>
                </div>
                <figure className="skeleton-image"></figure>
              </div>
              <div className="skeleton-text skeleton-border"></div>
            </article>
            <article className="skeleton-card">
              <div className="skeleton-item">
                <div className="skeleton-content">
                  <h2 className="skeleton-text skeleton-title"></h2>
                  <p className="skeleton-text skeleton-sub-title"></p>
                  <p className="skeleton-text skeleton-date-author"></p>
                  <div className="wrapper-skeleton-content">
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                  </div>
                </div>
                <figure className="skeleton-image"></figure>
              </div>
              <div className="skeleton-text skeleton-border"></div>
            </article>
            <article className="skeleton-card">
              <div className="skeleton-item">
                <div className="skeleton-content">
                  <h2 className="skeleton-text skeleton-title"></h2>
                  <p className="skeleton-text skeleton-sub-title"></p>
                  <p className="skeleton-text skeleton-date-author"></p>
                  <div className="wrapper-skeleton-content">
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                    <span className="skeleton-text skeleton-category"></span>
                  </div>
                </div>
                <figure className="skeleton-image"></figure>
              </div>
              <div className="skeleton-text skeleton-border"></div>
            </article>
          </section>
          <section className="skeleton-list desktop">
            <article className="skeleton-card">
              <div className="skeleton-item">
                <div className="skeleton-content">
                  <div className="skeleton-text skeleton-title list-skeleton-img"></div>
                </div>
              </div>
            </article>
          </section>
        </>
      ) : (
        <section className="posts-list-section">
          <div className="container">
            {/* <ul className="row">
              {posts.length > 0 ? (
                posts.map((post) => <BlogItem key={post.id} post={post} />)
              ) : (
                <div className="no-results">
                  <p className="results-title">No posts available.</p>
                </div>
              )}
            </ul> */}
            <ul className="row">
              {posts.length > 0 ? (
                posts
                  .filter((post) => post.id !== featuredPost?.id) // Lọc bỏ bài được pin
                  .map((post) => <BlogItem key={post.id} post={post} />)
              ) : (
                <div className="no-results">
                  <p className="results-title">No posts available.</p>
                </div>
              )}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogList;
