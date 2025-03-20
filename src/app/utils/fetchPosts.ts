// import axios from "axios";
// import { BlogData } from "../types/posts";

// interface FetchPostsResponse {
//   posts: BlogData[];
//   numberOfPosts: number;
// }

// export const fetchPosts = async (
//   postsPerPage: number,
//   page: number
// ): Promise<FetchPostsResponse> => {
//   try {
//     const response = await axios.get(
//       `https://wp-blog-page.local/wp-json/wp/v2/posts?_embed&per_page=${postsPerPage}&page=${page}`
//     );
//     const data = response.data;
//     const posts = data.map((item: any) => new BlogData(item));
//     const numberOfPosts = parseInt(response.headers["x-wp-total"], 10);
//     return {
//       posts,
//       numberOfPosts,
//     };
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       throw new Error(`Axios error! Status: ${error.response?.status}`);
//     } else {
//       throw new Error("An unknown error occurred.");
//     }
//   }
// };

import axios from "axios";
const fetchPosts = async (postsPerPage: number, page: number): Promise<any> => {
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
export default fetchPosts;
