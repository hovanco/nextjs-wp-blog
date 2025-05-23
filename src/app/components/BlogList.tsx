import BlogItem from "./BlogItem";
import { BlogData } from "../types/posts";
import CardSkeleton from "./CardSkeleton";

interface BlogListProps {
  posts: BlogData[];
  isLoading: boolean;
  searchQuery: string;
}

const BlogList = ({ posts, isLoading, searchQuery }: BlogListProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <CardSkeleton />
        </>
      ) : (
        <section className="posts-list-section">
          {searchQuery && (
            <div className="search-wrapper">
              <p className="search-title">
                Results for:{" "}
                <span className="search-result-text">{searchQuery}</span>
              </p>
            </div>
          )}
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
