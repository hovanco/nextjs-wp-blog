"use client";
import { useState, useCallback } from "react";
import { BlogData } from "../types/posts";
import { withMinLoading } from "../utils/withMinLoading";
import { fetchPosts } from "../utils/fetchPosts";

export const useGetPosts = (postsPerPage: number) => {
  const [posts, setPosts] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPosts = useCallback(
    async (page: number = 1) => {
      setIsLoading(true);
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
    },
    [postsPerPage]
  );

  return {
    posts,
    setPosts,
    totalPages,
    setTotalPages,
    isLoading,
    setIsLoading,
    getPosts,
  };
};
