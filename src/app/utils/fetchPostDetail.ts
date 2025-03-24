import axios, { AxiosResponse } from "axios";
import { BlogData } from "../types/posts";

export const fetchPostDetail = async (
  slug: string
): Promise<AxiosResponse<BlogData[]>> => {
  try {
    const res = await axios.get(
      `https://wp-blog-page.local/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error! Status: ${error.response?.status}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};
