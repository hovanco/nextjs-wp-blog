import BlogItem from "./BlogItem";
import { BlogData } from "../types/posts";
import CardSkeleton from "./CardSkeleton";

interface BlogListProps {
  posts: BlogData[];
  isLoading: boolean;
}

const BlogList = ({ posts, isLoading }: BlogListProps) => {
  return (
    <>
      {isLoading ? (
        <>
          <CardSkeleton />
        </>
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
