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

const Blog = () => {
  const postsPerPage: number = 10;
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
        <SearchBar onSearch={getSearchPosts} activeCategory={activeCategory} />
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
        <BlogList posts={posts} isLoading={isLoading} />
        {posts.length > 0 && totalPages > 1 ? (
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </main>
  );
};

export default Blog;
