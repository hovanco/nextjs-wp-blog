"use client";
import { useEffect, useState } from "react";
import { BlogData } from "../types/posts";
import BlogList from "../components/BlogList";
import BlogPagination from "../components/BlogPagination";
import { Category } from "../types/category";
import CategoryList from "../components/CategoryList";
import { fetchPosts, fetchPostsByCategory } from "../utils/fetchPosts";
import { withMinLoading } from "../utils/withMinLoading";
import { fetchCategories } from "../utils/fetchCategories";

const Blog = () => {
  const postsPerPage = 10;
  const [posts, setPosts] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);

  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getPosts = async (page: number = 1) => {
    try {
      const response = await withMinLoading(
        fetchPosts(postsPerPage, page),
        500
      );
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

  useEffect(() => {
    if (activeCategory === 0) {
      getPosts(currentPage);
    } else {
      getPostsByCategory(activeCategory, currentPage);
    }
  }, [currentPage, activeCategory]);

  const geCategoriesPost = async () => {
    try {
      const data = await withMinLoading(fetchCategories(), 500);
      const updatedCategories = [{ id: 0, name: "All" }, ...data];
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    geCategoriesPost();
  }, []);

  return (
    <main id="blog-page">
      <div className="container">
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
