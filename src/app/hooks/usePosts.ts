import { useState, useEffect, useCallback } from "react";
import { fetchPosts } from "../utils/fetchPosts";
import { BlogData } from "../types/posts";
import { WPPostRawData } from "../types/wp-post";

export const usePosts = (postsPerPage: number, excludedIds: number[] = []) => {
  const [posts, setPosts] = useState<BlogData[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchPosts(postsPerPage, page, excludedIds);
      const rawPosts = response.data;
      const newPosts = rawPosts.map(
        (post: WPPostRawData) => new BlogData(post)
      );
      setPosts((prev) => (page === 1 ? newPosts : [...prev, ...newPosts]));

      const totalPagesFromHeader = response.headers["x-wp-totalpages"];
      setTotalPages(
        totalPagesFromHeader ? parseInt(totalPagesFromHeader) : null
      );
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [page, postsPerPage, excludedIds]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const loadMore = () => {
    if (totalPages && page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const refetch = () => {
    setPage(1);
  };

  return {
    posts,
    isLoading: isLoading, // alias bên ngoài
    error,
    page,
    totalPages,
    loadMore,
    refetch,
  };
};
