import axios, { AxiosResponse } from "axios";
import { BlogData } from "../types/posts";
import { API_BASE_URL } from "../services/api";

export const searchPosts = async (
  query: string,
  page: number,
  postsPerPage: number,
  categoryId?: number
): Promise<AxiosResponse<BlogData[]>> => {
  try {
    const apiUrl = categoryId
      ? `${API_BASE_URL}posts?_embed&categories=${categoryId}&search=${query}&page=${page}&per_page=${postsPerPage}`
      : `${API_BASE_URL}posts?_embed&search=${query}&page=${page}&per_page=${postsPerPage}`;

    const res: AxiosResponse<BlogData[]> = await axios.get(apiUrl);
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
