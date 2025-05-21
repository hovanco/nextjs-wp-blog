import { useEffect, useState } from "react";
import { fetchAllFeaturedPosts } from "../utils/fetchPostFeatured";
import { BlogData } from "../types/posts";

// 1. HÀM fetch cơ bản: chỉ fetch
const getPinnedPost = async (): Promise<BlogData | null> => {
  const posts = await fetchAllFeaturedPosts();
  return posts && posts.length > 0 ? posts[0] : null;
};

// 2. CUSTOM HOOK
export const usePinnedPost = () => {
  const [pinnedPost, setPinnedPost] = useState<BlogData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 3. HÀM xử lý fetch + state (có thể reuse/refetch sau này)
  const fetchPinnedPostData = async () => {
    try {
      const post = await getPinnedPost();
      setPinnedPost(post);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  // 4. EFFECT chỉ để gọi hàm xử lý
  useEffect(() => {
    fetchPinnedPostData();
  }, []);

  return {
    pinnedPost,
    isLoading,
    error,
    refetch: fetchPinnedPostData,
  };
};
