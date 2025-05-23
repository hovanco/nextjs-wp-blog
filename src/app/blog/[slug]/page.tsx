"use client";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BlogData } from "@/app/types/posts";
import { formatDate } from "@/app/utils/date";
import { fetchPostDetail } from "@/app/utils/fetchPostDetail";
import { withMinLoading } from "@/app/utils/withMinLoading";
import IconAuthor from "../../assets/images/co-author.png";
import Footer from "@/app/components/Footer";
import { Category } from "@/app/types/category";

const BlogDetail = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [blogDetail, setBlogDetail] = useState<BlogData | null>(null);

  const loadBlogDetail = useCallback(async () => {
    const minimumLoadingTime = 500;
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
  }, [slug]);

  useEffect(() => {
    loadBlogDetail();
  }, [loadBlogDetail]);

  return (
    <>
      <main className="blog-detail-page">
        <div className="detail-page">
          <div className="container">
            {!isLoading && blogDetail ? (
              <>
                <h1
                  className="title"
                  dangerouslySetInnerHTML={{ __html: blogDetail?.title || "" }}
                />
                <div className="category">
                  {blogDetail?.categories?.map((category: Category) => (
                    <div className="card-category-label" key={category?.id}>
                      <span className="card-text-category">
                        {category?.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="detail-meta">
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
                        __html: blogDetail?.authorName || "",
                      }}
                    /> */}
                  </div>
                  <div className="card-time">
                    <time
                      className="card-text-time"
                      dangerouslySetInnerHTML={{
                        __html: formatDate(blogDetail?.date || ""),
                      }}
                    />
                  </div>
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
      <Footer />
    </>
  );
};

export default BlogDetail;
