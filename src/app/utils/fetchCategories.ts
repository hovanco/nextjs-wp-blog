import axios from "axios";
import { Category } from "../types/category";

const fetchCategories = async (): Promise<Category[]> => {
  try {
    const res = await axios.get(
      "https://wp-blog-page.local/wp-json/wp/v2/categories"
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

export default fetchCategories;
