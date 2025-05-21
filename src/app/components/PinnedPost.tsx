import Image from "next/image";
import Link from "next/link";
import { usePinnedPost } from "../hooks/usePinnedPost";
import { formatDate } from "../utils/date";
import IconAuthor from "../assets/images/co-author.png";
import PinSkeleton from "./PinSkeleton";

const PinnedPost = () => {
  const { pinnedPost, isLoading, error } = usePinnedPost();
  if (isLoading) return <PinSkeleton />;
  if (error) return <PinSkeleton />;
  if (!pinnedPost) return <PinSkeleton />;

  return (
    <div data-aos="fade-up" className="post-pin">
      <Link className="pin-link" href={`/blog/${pinnedPost?.slug}`}>
        <div className="pin-wrapper">
          <figure className="pin-img">
            <Image
              alt="Post Image"
              width={1920}
              height={1080}
              src={pinnedPost?.postImage || ""}
            />
          </figure>
          <div className="pin-overlay"></div>
          <div className="pin-content">
            <div className="pin-cate">
              {/* Disable no-explicit-any rule for this line */}
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {pinnedPost?.categories?.map((category: any) => (
                <div className="pin-cate-label" key={category?.id}>
                  <span className="pin-cate-name">{category?.name}</span>
                </div>
              ))}
            </div>
            <h1 className="pin-title">{pinnedPost?.title}</h1>
            <div className="pin-footer">
              <div className="pin-author">
                <Image
                  className="pin-icon-author"
                  src={IconAuthor?.src}
                  alt="Icon Author"
                  width={36}
                  height={36}
                />
                <span className="pin-text-author">Co.Ho</span>
              </div>
              <div className="pin-time">
                <time
                  className="pin-text-time"
                  dangerouslySetInnerHTML={{
                    __html: formatDate(pinnedPost?.date || ""),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PinnedPost;
