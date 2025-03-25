import axios from "axios";
import { Category } from "../types/category";
import { API_BASE_URL } from "../services/api";

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const res = await axios.get(`${API_BASE_URL}categories`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error! Status: ${error.response?.status}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};
