import { useEffect, useState, useCallback } from "react";
import { fetchAllFeaturedPosts } from "../utils/fetchPostFeatured";
import { BlogData } from "../types/posts";

const getPinnedPost = async (): Promise<BlogData | null> => {
  const posts = await fetchAllFeaturedPosts();
  return posts && posts.length > 0 ? posts[0] : null;
};

export const usePinnedPost = () => {
  const [pinnedPost, setPinnedPost] = useState<BlogData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPinnedPostData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const post = await getPinnedPost();
      setPinnedPost(post);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPinnedPostData();
  }, [fetchPinnedPostData]);

  return {
    pinnedPost,
    isLoading: isLoading, // alias bên ngoài
    error,
    refetch: fetchPinnedPostData,
  };
};
