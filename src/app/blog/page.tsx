"use client";
import { useEffect, useState } from "react";
import { BlogData } from "../types/posts";
import BlogList from "../components/BlogList";
import BlogPagination from "../components/BlogPagination";
import withMinLoading from "../utils/withMinLoading";
import fetchPosts from "../utils/fetchPosts";
import fetchCategories from "../utils/fetchCategories";
import { Category } from "../types/category";
import CategoryList from "../components/CategoryList";

const Blog = () => {
  const postsPerPage = 10;
  const [posts, setPosts] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);

  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getPosts = async () => {
    try {
      const response = await withMinLoading(
        fetchPosts(postsPerPage, currentPage),
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

  const geCategoriesPost = async () => {
    try {
      const data = await withMinLoading(fetchCategories(), 500);
      const updatedCategories = [{ id: 0, name: "All" }, ...data];
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(categoryId);
  };

  useEffect(() => {
    getPosts();
    geCategoriesPost();
  }, [currentPage]);

  return (
    <main id="blog-page">
      <div className="container">
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
        <BlogList posts={posts} isLoading={isLoading} />
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default Blog;
