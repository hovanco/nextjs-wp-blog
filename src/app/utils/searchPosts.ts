import axios, { AxiosResponse } from "axios";
import { WPPostRawData } from "../types/wp-post";
import { API_BASE_URL } from "../services/api";

export const searchPosts = async (
  query: string,
  page: number,
  postsPerPage: number,
  categoryId?: number
): Promise<AxiosResponse<WPPostRawData[]>> => {
  const params = new URLSearchParams({
    _embed: "",
    search: query,
    page: page.toString(),
    per_page: postsPerPage.toString(),
  });

  if (categoryId) {
    params.append("categories", categoryId.toString());
  }

  const apiUrl = `${API_BASE_URL}posts?${params.toString()}`;
  return axios.get<WPPostRawData[]>(apiUrl);
};
