import { useEffect, useState, useCallback } from "react";
import { fetchPostsByCategory } from "../utils/fetchPosts";
import { BlogData } from "../types/posts";
import { WPPostRawData } from "../types/wp-post";

export const usePostsByCategory = (
  categoryId: number,
  postsPerPage: number = 6
) => {
  const [posts, setPosts] = useState<BlogData[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!categoryId) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchPostsByCategory(
        categoryId,
        page,
        postsPerPage
      );
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
  }, [categoryId, page, postsPerPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setPosts([]);
    setPage(1);
  }, [categoryId]);

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
    isLoading: isLoading,
    error,
    page,
    totalPages,
    loadMore,
    refetch,
  };
};
