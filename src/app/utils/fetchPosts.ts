import axios, { AxiosResponse } from "axios";
import { BlogData } from "../types/posts";
import { API_BASE_URL } from "../services/api";

// export const fetchPosts = async (
//   postsPerPage: number,
//   page: number
// ): Promise<AxiosResponse<BlogData[]>> => {
//   try {
//     const response = await axios.get(
//       `${API_BASE_URL}posts?_embed&per_page=${postsPerPage}&page=${page}`
//     );
//     return response;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       throw new Error(`Axios error! Status: ${error.response?.status}`);
//     } else {
//       throw new Error("An unknown error occurred.");
//     }
//   }
// };
export const fetchPosts = async (
  postsPerPage: number,
  page: number,
  excludedIds: number[] = []
): Promise<AxiosResponse<BlogData[]>> => {
  try {
    const excludeParam =
      excludedIds.length > 0 ? `&exclude=${excludedIds.join(",")}` : "";

    const response = await axios.get(
      `${API_BASE_URL}posts?_embed&per_page=${postsPerPage}&page=${page}${excludeParam}`
    );

    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error! Status: ${error.response?.status}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};

export const fetchPostsByCategory = async (
  categoryId: number,
  page: number,
  postsPerPage: number
): Promise<AxiosResponse<BlogData[]>> => {
  try {
    const res: AxiosResponse = await axios.get(
      `https://codev.food/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${postsPerPage}&page=${page}&_embed`
    );
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error! Status: ${error.response?.status}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};
