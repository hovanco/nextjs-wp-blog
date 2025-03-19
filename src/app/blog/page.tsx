"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconTime from "../assets/images/icon-time.png";
import IconAuthor from "../assets/images/icon-author.png";
import IconSearch from "../assets/images/icon-search.png";

const Blog = () => {
  return (
    <main id="blog-page">
      <div className="page">
        <div className="container">
          <div className="search-container">
            <div className="search-box">
              <img
                className="search-icon"
                alt="Post Image"
                width={180}
                height={101}
                src={IconSearch.src}
              />
              <div className="search-wrapper-input">
                <input
                  className="search-input"
                  placeholder="Search"
                  type="text"
                  defaultValue=""
                  name="search"
                />
              </div>
            </div>
            <p className="search-title">Results for:</p>
          </div>
          <div className="category-container">
            <div className="category-list">
              <div className="category-item active">
                <span className="category-name">All</span>
              </div>
              <div className="category-item ">
                <span className="category-name">Frontend</span>
              </div>
              <div className="category-item ">
                <span className="category-name">Javascript</span>
              </div>
              <div className="category-item ">
                <span className="category-name">Technical</span>
              </div>
              <div className="category-item ">
                <span className="category-name">Uncategorized</span>
              </div>
            </div>
          </div>
          <section className="posts-list">
            <article className="card-item">
              <a className="card-link" href="/blog/scope">
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/scope-js.jpeg"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">Scope</h4>
                    <p className="card-sub-title" />
                    <p>
                      The&nbsp;scope&nbsp;is the current context of execution in
                      which&nbsp;values&nbsp;and expressions are “visible” or
                      can be referenced. If a&nbsp;variable&nbsp;or expression
                      is not in the current scope, it will not be available for
                      use. Scopes can also be layered in a hierarchy, so that
                      child scopes have access to parent scopes, but not vice
                      versa.
                    </p>
                    <p />
                    <div className="card-footer">
                      <div className="card-time">
                        <img
                          className="card-icon-time"
                          alt="Icon Time"
                          src={IconTime.src}
                        />
                        <time className="card-text-time">13/03/2025</time>
                      </div>
                      <div className="card-author">
                        <img
                          className="card-icon-author"
                          alt="Icon Author"
                          src={IconAuthor.src}
                        />
                        <span className="card-text-author">co.ho</span>
                      </div>
                    </div>
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-item">
              <a className="card-link" href="/blog/functions">
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/func-js.jpeg"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">Functions</h4>
                    <p className="card-sub-title" />
                    <p>
                      Functions are one of the fundamental building blocks in
                      JavaScript. A function in JavaScript is similar to a
                      procedure—a set of statements that performs a task or
                      calculates a value, but for a procedure to qualify as a
                      function, it should take some input and return an output
                      where there is some obvious relationship between […]
                    </p>
                    <p />
                    <div className="card-footer">
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
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-item">
              <a
                className="card-link"
                href="/blog/javascript-data-types-and-data-structures"
              >
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/data-type-js.png"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">
                      JavaScript data types and data structures
                    </h4>
                    <p className="card-sub-title" />
                    <p>
                      Programming languages all have built-in data structures,
                      but these often differ from one language to another. This
                      article attempts to list the built-in data structures
                      available in JavaScript and what properties they have.
                      These can be used to build other data structures.
                    </p>
                    <p />
                    <div className="card-footer">
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
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-item">
              <a className="card-link" href="/blog/hoisting">
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/hoisting-js.png"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">Hoisting</h4>
                    <p className="card-sub-title" />
                    <p>
                      JavaScript&nbsp;Hoisting&nbsp;refers to the process
                      whereby the interpreter appears to move
                      the&nbsp;declaration&nbsp;of functions, variables,
                      classes, or imports to the top of their&nbsp;scope, prior
                      to execution of the code.
                    </p>
                    <p />
                    <div className="card-footer">
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
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-item">
              <a className="card-link" href="/blog/es6-tutorial">
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/es6-js.jpeg"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">ES6 Tutorial</h4>
                    <p className="card-sub-title" />
                    <p>
                      ECMAScript 2015 or ES2015 is a significant update to the
                      JavaScript programming language. It is the first major
                      update to the language since ES5 which was standardized in
                      2009. Therefore, ES2015 is often called ES6.
                      To&nbsp;follow this ES6 tutorial, you should have a good
                      knowledge of JavaScript up to ES5.
                    </p>
                    <p />
                    <div className="card-footer">
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
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-item">
              <a className="card-link" href="/blog/vietnam">
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/van-hoa-viet-nam.jpg"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">Vietnam</h4>
                    <p className="card-sub-title" />
                    <p>Hello world! I from Viet Nam!</p>
                    <p />
                    <div className="card-footer">
                      <div className="card-time">
                        <img
                          className="card-icon-time"
                          alt="Icon Time"
                          src="/_next/static/media/icon-time.07e819a9.png"
                        />
                        <time className="card-text-time">12/03/2025</time>
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
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-item">
              <a className="card-link" href="/blog/async-function-2">
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/async-await.webp"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">Async function 2</h4>
                    <p className="card-sub-title" />
                    <p>
                      Async functions can contain zero or
                      more&nbsp;await&nbsp;expressions. Await expressions make
                      promise-returning functions behave as though they’re
                      synchronous by suspending execution until the returned
                      promise is fulfilled or rejected. The resolved value of
                      the promise is treated as the return value of the await
                      expression. Use
                      of&nbsp;async&nbsp;and&nbsp;await&nbsp;enables the use of
                      ordinary&nbsp;try&nbsp;/&nbsp;catch&nbsp;blocks around
                      asynchronous code. Async functions […]
                    </p>
                    <p />
                    <div className="card-footer">
                      <div className="card-time">
                        <img
                          className="card-icon-time"
                          alt="Icon Time"
                          src="/_next/static/media/icon-time.07e819a9.png"
                        />
                        <time className="card-text-time">12/03/2025</time>
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
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-item">
              <a className="card-link" href="/blog/async-function">
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/async-await.webp"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">Async function</h4>
                    <p className="card-sub-title" />
                    <p>
                      Async functions can contain zero or
                      more&nbsp;await&nbsp;expressions. Await expressions make
                      promise-returning functions behave as though they’re
                      synchronous by suspending execution until the returned
                      promise is fulfilled or rejected. The resolved value of
                      the promise is treated as the return value of the await
                      expression. Use
                      of&nbsp;async&nbsp;and&nbsp;await&nbsp;enables the use of
                      ordinary&nbsp;try&nbsp;/&nbsp;catch&nbsp;blocks around
                      asynchronous code.
                    </p>
                    <p />
                    <div className="card-footer">
                      <div className="card-time">
                        <img
                          className="card-icon-time"
                          alt="Icon Time"
                          src="/_next/static/media/icon-time.07e819a9.png"
                        />
                        <time className="card-text-time">04/03/2025</time>
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
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-item">
              <a className="card-link" href="/blog/what-is-a-callback">
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/callback-hell.jpg"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">What is a Callback?</h4>
                    <p className="card-sub-title" />
                    <p>
                      In JavaScript, everything (strings, arrays, functions) is
                      considered an object. Hence, the concept of callbacks lets
                      us pass functions as arguments to another function which
                      will be executed later within the outer function. Next,
                      let’s discuss the importance of callbacks in JavaScript.
                      Assume we have a function called ‘compute’. It takes in 3
                      parameters namely […]
                    </p>
                    <p />
                    <div className="card-footer">
                      <div className="card-time">
                        <img
                          className="card-icon-time"
                          alt="Icon Time"
                          src="/_next/static/media/icon-time.07e819a9.png"
                        />
                        <time className="card-text-time">04/03/2025</time>
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
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
            <article className="card-item">
              <a className="card-link" href="/blog/promise">
                <div className="card">
                  <figure className="card-img">
                    <img
                      alt="Post Image"
                      width={180}
                      height={101}
                      src="https://wp-blog-page.local/wp-content/uploads/2025/03/promise-javascript-1.png"
                    />
                  </figure>
                  <div className="card-content">
                    <h4 className="card-title">Promise</h4>
                    <p className="card-sub-title" />
                    <p>
                      A&nbsp;Promise&nbsp;is a proxy for a value not necessarily
                      known when the promise is created. It allows you to
                      associate handlers with an asynchronous action’s eventual
                      success value or failure reason. This lets asynchronous
                      methods return values like synchronous methods: instead of
                      immediately returning the final value, the asynchronous
                      method returns a&nbsp;promise&nbsp;to supply the value at
                      […]
                    </p>
                    <p />
                    <div className="card-footer">
                      <div className="card-time">
                        <img
                          className="card-icon-time"
                          alt="Icon Time"
                          src="/_next/static/media/icon-time.07e819a9.png"
                        />
                        <time className="card-text-time">04/03/2025</time>
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
                    <aside className="card-category">
                      <div className="card-category-label">
                        <span className="card-text-category">Javascript</span>
                      </div>
                    </aside>
                  </div>
                </div>
              </a>
            </article>
          </section>
          <div className="pagination">
            {/* <button disabled="">Previous</button> */}
            <span>
              <button className="pagination-item active">1</button>
              <button className="pagination-item ">2</button>
            </span>
            <button className="btn-next">Next</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
