import { useEffect, useState } from "react";
import { BlogData } from "../types/posts";
import { fetchLatestPostsExcludingPinned } from "../utils/fetchPostFeatured";

export const useLatestPosts = (pinnedPostId?: number) => {
  const [latestPosts, setLatestPosts] = useState<BlogData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!pinnedPostId) return;

      try {
        setIsLoading(true);
        const posts = await fetchLatestPostsExcludingPinned(pinnedPostId);
        setLatestPosts(posts);
      } catch (err) {
        setError((err as Error).message);
        console.error("Error fetching latest posts:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pinnedPostId]);

  return { latestPosts, isLoading, error };
};
