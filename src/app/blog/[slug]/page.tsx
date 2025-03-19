"use client";

import { useParams } from "next/navigation";

const BlogDetail = () => {
  const { slug } = useParams();
  return (
    // <main>
    //   <p>Blog detail</p>
    // </main>
    <main className="blog-detail-page">
      <div className="detail-page">
        <div className="container">
          <h1 className="title">Scope</h1>
          <div className="detail-meta">
            <div className="card-time">
              <img
                className="card-icon-time"
                alt="Icon Time"
                src="/_next/static/media/icon-time.07e819a9.png"
              />
              <time className="card-text-time">13/03/2025</time>
            </div>
            <div className="card-author">
              <img
                className="card-icon-author"
                alt="Icon Author"
                src="/_next/static/media/icon-author.ef03c2cd.png"
              />
              <span className="card-text-author">co.ho</span>
            </div>
          </div>
          <div className="category">
            <div className="card-category-label">
              <span className="card-text-category">Javascript</span>
            </div>
          </div>
          <div className="blog-detail-content">
            <p>
              The&nbsp;<strong>scope</strong>&nbsp;is the current context of
              execution in which&nbsp;
              <a href="https://developer.mozilla.org/en-US/docs/Glossary/Value">
                values
              </a>
              &nbsp;and expressions are “visible” or can be referenced. If
              a&nbsp;
              <a href="https://developer.mozilla.org/en-US/docs/Glossary/Variable">
                variable
              </a>
              &nbsp;or expression is not in the current scope, it will not be
              available for use. Scopes can also be layered in a hierarchy, so
              that child scopes have access to parent scopes, but not vice
              versa.
            </p>
            <figure className="wp-block-image size-full">
              <img
                loading="lazy"
                decoding="async"
                width={304}
                height={166}
                src="https://wp-blog-page.local/wp-content/uploads/2025/03/scope-js.jpeg"
                alt=""
                className="wp-image-78"
                srcSet="https://wp-blog-page.local/wp-content/uploads/2025/03/scope-js.jpeg 304w, https://wp-blog-page.local/wp-content/uploads/2025/03/scope-js-300x164.jpeg 300w"
                sizes="auto, (max-width: 304px) 100vw, 304px"
              />
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
