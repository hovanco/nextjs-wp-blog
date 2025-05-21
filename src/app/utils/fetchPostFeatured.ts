import axios from "axios";
import { API_BASE_URL } from "../services/api";
import { BlogData } from "../types/posts";
import { WPPostRawData } from "../types/wp-post";

export const fetchAllFeaturedPosts = async (): Promise<BlogData[] | null> => {
  try {
    const res = await axios.get<WPPostRawData[]>(
      `${API_BASE_URL}posts?meta_key=is_featured&meta_value=1&orderby=date&order=desc&per_page=1&_embed`
    );
    const posts = res.data.map((post) => new BlogData(post));
    return posts;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error! Status: ${error.response?.status}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};

export const fetchLatestPostsExcludingPinned = async (
  pinnedPostId: number
): Promise<BlogData[]> => {
  try {
    const res = await axios.get<WPPostRawData[]>(
      `${API_BASE_URL}posts?orderby=date&order=desc&per_page=5&_embed`
    );
    return res.data
      .filter((post) => post.id !== pinnedPostId)
      .slice(0, 4)
      .map((post) => new BlogData(post));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error! Status: ${error.response?.status}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};
