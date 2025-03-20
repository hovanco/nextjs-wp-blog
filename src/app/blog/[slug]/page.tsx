"use client";
import { BlogData } from "@/app/types/posts";
import fetchPostDetail from "@/app/utils/fetchPostDetail";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import IconTime from "../../assets/images/icon-time.png";
import IconAuthor from "../../assets/images/icon-author.png";
import { formatDate } from "@/app/utils/date";
import withMinLoading from "@/app/utils/withMinLoading";

const BlogDetail = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [blogDetail, setBlogDetail] = useState<BlogData | null>(null);

  const loadBlogDetail = async () => {
    const minimumLoadingTime = 500; // 0.5 giây
    const startTime = Date.now();

    try {
      const data = await withMinLoading(fetchPostDetail(slug as string), 500);
      setBlogDetail(new BlogData(data[0]));
    } catch (error) {
      console.error("Error fetching post detail:", error);
    } finally {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = minimumLoadingTime - elapsedTime;
      if (remainingTime > 0) {
        setTimeout(() => setIsLoading(false), remainingTime);
      } else {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    loadBlogDetail();
  }, [slug]);

  return (
    <main className="blog-detail-page">
      <div className="detail-page">
        <div className="container">
          {!isLoading && blogDetail ? (
            <>
              <h1
                className="title"
                dangerouslySetInnerHTML={{ __html: blogDetail?.title || "" }}
              />
              <div className="detail-meta">
                <div className="card-time">
                  <img
                    className="card-icon-time"
                    src={IconTime?.src}
                    alt="Icon Time"
                  />
                  <time
                    className="card-text-time"
                    dangerouslySetInnerHTML={{
                      __html: formatDate(blogDetail?.date || ""),
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
                      __html: blogDetail?.authorName || "",
                    }}
                  />
                </div>
              </div>
              <div className="category">
                {blogDetail?.categories?.map((category: any) => (
                  <div className="card-category-label" key={category?.id}>
                    <span className="card-text-category">{category?.name}</span>
                  </div>
                ))}
              </div>
              <div
                className="blog-detail-content"
                dangerouslySetInnerHTML={{
                  __html: blogDetail?.content || "",
                }}
              />
            </>
          ) : (
            <div className="skeleton-wrapper">
              <div className="skeleton-text skeleton-title"></div>
              <div className="skeleton-text skeleton-date-author"></div>
              <div className="skeleton-text skeleton-category"></div>
              <div className="skeleton-text skeleton-detail-content"></div>
              <div className="skeleton-image"></div>
              <div className="skeleton-text skeleton-title"></div>
              <div className="skeleton-text skeleton-title"></div>
              <div className="skeleton-text short"></div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
