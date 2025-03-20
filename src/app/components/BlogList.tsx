import { BlogData } from "../types/posts";
import BlogItem from "./BlogItem";

interface BlogListProps {
  posts: BlogData[];
  isLoading: Boolean;
}

const BlogList = ({ posts, isLoading }: BlogListProps) => {
  return (
    <main id="blog-page">
      <div className="container">
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
          <section className="posts-list">
            {posts?.map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default BlogList;
