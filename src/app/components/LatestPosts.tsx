// components/LatestPosts.tsx
import Link from "next/link";
import Image from "next/image";
import IconAuthor from "../assets/images/co-author.png";
import { BlogData } from "../types/posts";
import { formatDate } from "../utils/date";

interface LatestPostsProps {
  posts: BlogData[];
}

const LatestPosts = ({ posts }: LatestPostsProps) => {
  if (!posts || posts.length === 0) return null;

  console.log("posts: ", posts);

  return (
    <section className="latest-posts" data-aos="fade-up">
      <ul className="row latest-list">
        {posts.map((post, index) => (
          <li
            key={index}
            data-aos="fade-up"
            className="col-6 col-small-12 latest-item"
          >
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
                        <span className="card-text-category">
                          {category?.name}
                        </span>
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
                      <span className="card-text-author">Co.Ho</span>
                      {/* <span
                          className="card-text-author"
                          dangerouslySetInnerHTML={{
                            __html: post?.authorName || "",
                          }}
                        /> */}
                    </div>
                    <div className="card-time">
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
        ))}
      </ul>
    </section>
  );
};

export default LatestPosts;
