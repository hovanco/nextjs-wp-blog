// import axios from "axios";
// import { API_BASE_URL } from "../services/api";
// import { BlogData } from "../types/posts";

// export const fetchAllFeaturedPosts = async (): Promise<BlogData[] | null> => {
//   const perPage = 100;
//   let allPinnedPosts: BlogData[] = [];

//   try {
//     while (true) {
//       const res = await axios.get(
//         `${API_BASE_URL}posts?meta_key=is_featured&meta_value=1&orderby=date&order=desc&per_page=1&_embed`
//       );
//       const currentData = res.data;

//       const formattedPosts = currentData.map((post: any) => new BlogData(post));
//       allPinnedPosts = [...allPinnedPosts, ...formattedPosts];

//       if (currentData.length < perPage) break;
//     }

//     return allPinnedPosts;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       throw new Error(`Axios error! Status: ${error.response?.status}`);
//     } else {
//       throw new Error("An unknown error occurred.");
//     }
//   }
// };

import axios from "axios";
import { API_BASE_URL } from "../services/api";
import { BlogData } from "../types/posts";
import { WPPostRawData } from "../types/wp-post";

export const fetchAllFeaturedPosts = async (): Promise<BlogData[] | null> => {
  const perPage = 100;
  let allPinnedPosts: BlogData[] = [];

  try {
    while (true) {
      const res = await axios.get<WPPostRawData[]>(
        `${API_BASE_URL}posts?meta_key=is_featured&meta_value=1&orderby=date&order=desc&per_page=1&_embed`
      );

      const currentData = res.data;

      const formattedPosts = currentData.map(
        (post: WPPostRawData) => new BlogData(post)
      );
      allPinnedPosts = [...allPinnedPosts, ...formattedPosts];

      if (currentData.length < perPage) break;
    }

    return allPinnedPosts;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Axios error! Status: ${error.response?.status}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
};
