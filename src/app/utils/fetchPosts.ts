import axios, { AxiosResponse } from "axios";

export const fetchPosts = async (
  postsPerPage: number,
  page: number
): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(
      `https://wp-blog-page.local/wp-json/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${page}`
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
): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await axios.get(
      `https://wp-blog-page.local/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${postsPerPage}&page=${page}&_embed`
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
