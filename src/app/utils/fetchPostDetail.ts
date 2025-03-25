import axios from "axios";
import { BlogData } from "../types/posts";
import { API_BASE_URL } from "../services/api";

export const fetchPostDetail = async (slug: string): Promise<BlogData[]> => {
  try {
    const res = await axios.get(`${API_BASE_URL}posts?slug=${slug}&_embed`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error! Status: ${error.response?.status}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};
