import Link from "next/link";
import { BlogData } from "../types/posts";
import { formatDate } from "../utils/date";
import IconTime from "../assets/images/icon-time.png";
import IconAuthor from "../assets/images/icon-author.png";

interface BlogItemProps {
  post: BlogData;
}

const BlogItem = ({ post }: BlogItemProps) => {
  return (
    <article className="card-item">
      <Link className="card-link" href={`/blog/${post?.slug}`}>
        <div className="card">
          <figure className="card-img">
            <img
              alt="Post Image"
              width={180}
              height={101}
              src={post.postImage}
            />
          </figure>
          <div className="card-content">
            <h4 className="card-title">{post.title}</h4>
            <p
              className="card-sub-title"
              dangerouslySetInnerHTML={{
                __html: post?.excerpt || "",
              }}
            />
            <div className="card-footer">
              <div className="card-time">
                <img
                  className="card-icon-time"
                  src={IconTime?.src}
                  alt="Icon Time"
                />
                <time
                  className="card-text-time"
                  dangerouslySetInnerHTML={{
                    __html: formatDate(post?.date || ""),
                  }}
                />
              </div>
              <div className="card-author">
                <img
                  className="card-icon-author"
                  src={IconAuthor?.src}
                  alt="Icon Author"
                />
                <span
                  className="card-text-author"
                  dangerouslySetInnerHTML={{
                    __html: post?.authorName || "",
                  }}
                />
              </div>
            </div>
            <div className="card-category">
              {post?.categories?.map((category: any) => (
                <div className="card-category-label" key={category?.id}>
                  <span className="card-text-category">{category?.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogItem;
