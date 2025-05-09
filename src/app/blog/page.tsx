"use client";
import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import BlogPagination from "../components/BlogPagination";
import CategoryList from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import { BlogData } from "../types/posts";
import { Category } from "../types/category";
import { fetchPosts, fetchPostsByCategory } from "../utils/fetchPosts";
import { fetchCategories } from "../utils/fetchCategories";
import { searchPosts } from "../utils/searchPosts";
import { withMinLoading } from "../utils/withMinLoading";

import Image from "next/image";
import Link from "next/link";
import IconAuthor from "../assets/images/co-author.png";
import { formatDate } from "../utils/date";

const Blog = () => {
  const postsPerPage: number = 12;
  const [posts, setPosts] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getPosts = async (page: number = 1) => {
    try {
      const response = await withMinLoading(
        fetchPosts(postsPerPage, page),
        500
      );
      // Disable no-explicit-any rule for this line
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const postsData = response.data.map((item: any) => new BlogData(item));
      const numberOfPosts = parseInt(response.headers["x-wp-total"], 10);
      const totalPages = Math.ceil(numberOfPosts / postsPerPage);
      setPosts(postsData);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPostsByCategory = async (categoryId: number, page: number = 1) => {
    try {
      const res = await withMinLoading(
        fetchPostsByCategory(categoryId, page, postsPerPage),
        500
      );

      // Disable no-explicit-any rule for this line
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = res.data.map((item: any) => new BlogData(item));
      setPosts(data);
      const numberOfPosts = parseInt(res.headers["x-wp-total"], 10);
      const totalPages = Math.ceil(numberOfPosts / postsPerPage);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching posts by category:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setIsLoading(true);
    if (activeCategory === 0) {
      getPosts(page);
    } else {
      getPostsByCategory(activeCategory, page);
    }
  };

  const handleCategoryClick = (categoryId: number) => {
    setCurrentPage(1);
    setActiveCategory(categoryId);
    setIsLoading(true);
    if (categoryId === 0) {
      getPosts(1);
    } else {
      getPostsByCategory(categoryId, 1);
    }
  };

  const geCategoriesPost = async () => {
    try {
      const data = await withMinLoading(fetchCategories(), 500);
      const updatedCategories = [{ id: 0, name: "All" }, ...data];
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getSearchPosts = async (query: string, page = 1) => {
    setIsLoading(true);
    try {
      // Check if already select sort by categoryId or no
      const selectedCategoryId =
        activeCategory !== 0 ? activeCategory : undefined;
      const res = await withMinLoading(
        searchPosts(query, page, postsPerPage, selectedCategoryId),
        500
      );
      // Disable no-explicit-any rule for this line
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results = res.data.map((item: any) => new BlogData(item));
      setPosts(results);
      const numberOfPosts = parseInt(res.headers["x-wp-total"], 10);
      const totalPages = Math.ceil(numberOfPosts / postsPerPage);
      setTotalPages(totalPages);
      // Disable no-explicit-any rule for this line
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error fetching search:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    geCategoriesPost();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      getPosts(currentPage);
    } else {
      getPostsByCategory(activeCategory, currentPage);
    }
  }, [currentPage, activeCategory]);
  useEffect(() => {
    if (activeCategory === 0) {
      getPosts(currentPage);
    } else if (activeCategory !== 0) {
      getPostsByCategory(activeCategory, currentPage);
    }
  }, [currentPage, activeCategory]);

  return (
    <main id="blog-page">
      <div className="container">
        <section data-aos="fade-up" className="post-pin">
          {posts.length > 0 && (
            <Link
              data-aos="fade-up"
              className="pin-link"
              href={`/blog/${posts[0]?.slug}`}
            >
              <div className="pin-wrapper">
                <figure className="pin-img">
                  <Image
                    alt="Post Image"
                    width={1920}
                    height={1080}
                    src={posts[0]?.postImage || ""}
                  />
                </figure>
                <div className="pin-overlay"></div>
                <div className="pin-content">
                  <div className="pin-cate">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {posts[0]?.categories?.map((category: any) => (
                      <div className="pin-cate-label" key={category?.id}>
                        <span className="pin-cate-name">{category?.name}</span>
                      </div>
                    ))}
                  </div>
                  <h1 className="pin-title">{posts[0]?.title}</h1>
                  {/* <h1
                    className="pin-sub-title"
                    dangerouslySetInnerHTML={{
                      __html: posts[0]?.excerpt || "",
                    }}
                  /> */}
                  <div className="pin-footer">
                    <div className="pin-author">
                      <Image
                        className="pin-icon-author"
                        src={IconAuthor?.src}
                        alt="Icon Author"
                        width={36}
                        height={36}
                      />
                      <span
                        className="pin-text-author"
                        dangerouslySetInnerHTML={{
                          __html: posts[0]?.authorName || "",
                        }}
                      />
                    </div>
                    <div className="pin-time">
                      {/* <Image
                        className="pin-icon-time"
                        src={IconTime?.src}
                        width={14}
                        height={14}
                        alt="Icon Time"
                      /> */}
                      <svg
                        className="pin-icon-time"
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.8284 6.75736C12.3807 6.75736 12.8284 7.20507 12.8284 7.75736V12.7245L16.3553 14.0653C16.8716 14.2615 17.131 14.8391 16.9347 15.3553C16.7385 15.8716 16.1609 16.131 15.6447 15.9347L11.4731 14.349C11.085 14.2014 10.8284 13.8294 10.8284 13.4142V7.75736C10.8284 7.20507 11.2761 6.75736 11.8284 6.75736Z"
                          fill="currentColor"
                        />
                      </svg>
                      <time
                        className="pin-text-time"
                        dangerouslySetInnerHTML={{
                          __html: formatDate(posts[0]?.date || ""),
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </section>
        <div className="blog-wrapper">
          <div className="blog-content">
            <BlogList posts={posts} isLoading={isLoading} />
            {posts.length > 0 && totalPages > 1 ? (
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            ) : null}
          </div>
          <div data-aos="fade-up" className="blog-cta">
            <SearchBar
              onSearch={getSearchPosts}
              activeCategory={activeCategory}
            />
            <CategoryList
              categories={categories}
              activeCategory={activeCategory}
              onCategoryClick={handleCategoryClick}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
