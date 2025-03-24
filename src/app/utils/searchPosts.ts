import axios, { AxiosResponse } from "axios";
import { BlogData } from "../types/posts";

export const searchPosts = async (
  query: string,
  page: number,
  postsPerPage: number
): Promise<AxiosResponse<BlogData[]>> => {
  try {
    const res: AxiosResponse<BlogData[]> = await axios.get(
      `https://wp-blog-page.local/wp-json/wp/v2/posts?_embed&search=${query}&page=${page}&per_page=${postsPerPage}`
    );
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Axios error! Status: ${error.response?.status}, Message: ${error.message}`
      );
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};
