"use client";
import { useEffect, useState } from "react";
import { BlogData } from "../types/posts";
import BlogList from "../components/BlogList";
import BlogPagination from "../components/BlogPagination";
import withMinLoading from "../utils/withMinLoading";
import fetchPosts from "../utils/fetchPosts";

const Blog = () => {
  const postsPerPage = 10;
  const [posts, setPosts] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getPosts();
  }, [currentPage]);

  return (
    <>
      <BlogList posts={posts} isLoading={isLoading} />
      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Blog;
