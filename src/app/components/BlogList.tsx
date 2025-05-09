import BlogItem from "./BlogItem";
import { BlogData } from "../types/posts";

interface BlogListProps {
  posts: BlogData[];
  isLoading: boolean;
}

const BlogList = ({ posts, isLoading }: BlogListProps) => {
  return (
    <>
      {isLoading ? (
        <section className="skeleton-list">
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
      ) : (
        <section className="posts-list-section">
          <div className="container">
            <ul className="row">
              {posts.length > 0 ? (
                posts.map((post) => <BlogItem key={post.id} post={post} />)
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
