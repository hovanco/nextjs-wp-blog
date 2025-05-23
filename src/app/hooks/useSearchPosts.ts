import { useState } from "react";
import { BlogData } from "../types/posts";
import { searchPosts } from "../utils/searchPosts";
import { withMinLoading } from "../utils/withMinLoading";
import { WPPostRawData } from "../types/wp-post";

export const useSearchPosts = (
  postsPerPage: number,
  activeCategory: number
) => {
  const [searchResults, setSearchResults] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string, page = 1) => {
    setIsLoading(true);
    setIsSearching(true);
    try {
      const categoryId = activeCategory !== 0 ? activeCategory : undefined;
      const res = await withMinLoading(
        searchPosts(query, page, postsPerPage, categoryId),
        500
      );
      const results = (res.data as WPPostRawData[]).map(
        (item) => new BlogData(item)
      );
      const numberOfPosts = parseInt(res.headers["x-wp-total"], 10);
      setSearchResults(results);
      setTotalPages(Math.ceil(numberOfPosts / postsPerPage));
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetSearch = () => {
    setSearchResults([]);
    setTotalPages(0);
    setIsSearching(false);
    setIsLoading(false);
  };

  return {
    searchResults,
    totalPages,
    isSearching,
    isLoading: isLoading,
    handleSearch,
    resetSearch,
  };
};
