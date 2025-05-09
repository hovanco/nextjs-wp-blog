import Link from "next/link";
import Image from "next/image";
import { BlogData } from "../types/posts";
import { formatDate } from "../utils/date";
import IconTime from "../assets/images/icon-time.png";
import IconAuthor from "../assets/images/co-author.png";

interface BlogItemProps {
  post: BlogData;
}

const BlogItem = ({ post }: BlogItemProps) => {
  return (
    <li data-aos="fade-up" className="col-4 col-small-12 card-item">
      <Link className="card-link" href={`/blog/${post?.slug}`}>
        <div className="card">
          <figure className="card-img">
            <Image
              alt="Post Image"
              width={180}
              height={101}
              src={post.postImage || ""}
            />
          </figure>
          <div className="card-content">
            <div className="card-category">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {post?.categories?.map((category: any) => (
                <div className="card-category-label" key={category?.id}>
                  <span className="card-text-category">{category?.name}</span>
                </div>
              ))}
            </div>
            <p className="card-title">{post.title}</p>
            <div className="card-footer">
              <div className="card-author">
                <Image
                  className="card-icon-author"
                  src={IconAuthor?.src}
                  alt="Icon Author"
                  width={50}
                  height={50}
                />
                <span
                  className="card-text-author"
                  dangerouslySetInnerHTML={{
                    __html: post?.authorName || "",
                  }}
                />
              </div>
              <div className="card-time">
                <Image
                  className="card-icon-time"
                  src={IconTime?.src}
                  width={14}
                  height={14}
                  alt="Icon Time"
                />
                <time
                  className="card-text-time"
                  dangerouslySetInnerHTML={{
                    __html: formatDate(post?.date || ""),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;
