"use client";
import { useEffect, useState, useCallback } from "react";
import BlogList from "../components/BlogList";
import BlogPagination from "../components/BlogPagination";
import CategoryList from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import { BlogData } from "../types/posts";
import { Category } from "../types/category";
import { fetchPosts, fetchPostsByCategory } from "../utils/fetchPosts";
import { fetchCategories } from "../utils/fetchCategories";
import { searchPosts } from "../utils/searchPosts";
import { withMinLoading } from "../utils/withMinLoading";
import Footer from "../components/Footer";

import {
  fetchAllFeaturedPosts,
  fetchLatestPostsExcludingPinned,
} from "../utils/fetchPostFeatured";
import LatestPosts from "../components/LatestPosts";
import CardSkeleton from "../components/CardSkeleton";
import PinSkeleton from "../components/PinSkeleton";
import CategorySkeleton from "../components/CategorySkeleton";
import PinnedPost from "../components/PinnedPost";

const Blog = () => {
  const postsPerPage = 12;
  const [posts, setPosts] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);

  const [featuredPost, setFeaturedPost] = useState<BlogData | null>(null);
  const [latestPosts, setLatestPosts] = useState<BlogData[]>([]);

  const [isSearching, setIsSearching] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  const getPosts = useCallback(
    async (page = 1) => {
      try {
        const excludedIds = [
          Number(featuredPost?.id),
          ...latestPosts.map((post) => Number(post.id)),
        ].filter((id): id is number => !isNaN(id));
        const response = await withMinLoading(
          fetchPosts(postsPerPage, page, excludedIds),
          500
        );
        // Disable no-explicit-any rule for this line
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const postsData = response.data.map((item: any) => new BlogData(item));
        const numberOfPosts = parseInt(response.headers["x-wp-total"], 10);
        const totalPages = Math.ceil(numberOfPosts / postsPerPage);
        setPosts(postsData);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [featuredPost, latestPosts]
  );

  const getPostsByCategory = useCallback(
    async (categoryId: number, page = 1) => {
      try {
        const res = await withMinLoading(
          fetchPostsByCategory(categoryId, page, postsPerPage),
          500
        );
        // Disable no-explicit-any rule for this line
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data = res.data.map((item: any) => new BlogData(item));
        setPosts(data);
        const numberOfPosts = parseInt(res.headers["x-wp-total"], 10);
        const totalPages = Math.ceil(numberOfPosts / postsPerPage);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching posts by category:", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setIsLoading(true);
  };

  const handleCategoryClick = (categoryId: number) => {
    if (categoryId === activeCategory) return; // nếu click lại category đang active thì không làm gì
    setCurrentPage(1);
    setActiveCategory(categoryId);
    setIsLoading(true);
    setIsFiltering(categoryId !== 0);
    setIsSearching(false);
  };

  const geCategoriesPost = useCallback(async () => {
    try {
      const data = await withMinLoading(fetchCategories(), 500);
      const updatedCategories = [{ id: 0, name: "All" }, ...data];
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  const getSearchPosts = async (query: string, page = 1) => {
    setIsLoading(true);
    setIsSearching(true);
    setIsFiltering(false);

    try {
      const selectedCategoryId =
        activeCategory !== 0 ? activeCategory : undefined;
      const res = await withMinLoading(
        searchPosts(query, page, postsPerPage, selectedCategoryId),
        500
      );
      // Disable no-explicit-any rule for this line
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const results = res.data.map((item: any) => new BlogData(item));
      setPosts(results);
      const numberOfPosts = parseInt(res.headers["x-wp-total"], 10);
      const totalPages = Math.ceil(numberOfPosts / postsPerPage);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching search:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPinnedAndLatestPosts = useCallback(async () => {
    try {
      const pinnedRes = await withMinLoading(fetchAllFeaturedPosts(), 500);
      if (pinnedRes && pinnedRes.length > 0) {
        const pinnedPost = pinnedRes[0];
        setFeaturedPost(pinnedPost);
        const latestRes = await fetchLatestPostsExcludingPinned(
          Number(pinnedPost.id)
        );
        setLatestPosts(latestRes);
      }
    } catch (error) {
      console.error("Error fetching pinned or latest posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch pinned & categories when first load
  useEffect(() => {
    getPinnedAndLatestPosts();
    geCategoriesPost();
  }, [getPinnedAndLatestPosts, geCategoriesPost]);

  useEffect(() => {
    if (featuredPost && latestPosts.length > 0) {
      if (isSearching) return; // đã xử lý riêng trong getSearchPosts
      if (isFiltering && activeCategory !== 0) {
        getPostsByCategory(activeCategory, currentPage);
      } else {
        getPosts(currentPage);
      }
    }
  }, [
    currentPage,
    activeCategory,
    featuredPost,
    latestPosts,
    getPosts,
    getPostsByCategory,
    isFiltering,
    isSearching,
  ]);

  return (
    <>
      <main id="blog-page">
        <div className="container">
          {isLoading ? (
            <>
              <PinSkeleton />
              <CardSkeleton />
            </>
          ) : (
            !isSearching &&
            !isFiltering && (
              <div className="featured-and-latest">
                <PinnedPost />
                <LatestPosts posts={latestPosts} />
              </div>
            )
          )}

          <div className="blog-wrapper">
            <div className="blog-content">
              <BlogList posts={posts} isLoading={isLoading} />
              {posts.length > 0 && totalPages > 1 ? (
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              ) : null}
            </div>
            {categories.length > 0 ? (
              <div data-aos="fade-up" className="blog-cta">
                <SearchBar
                  onSearch={getSearchPosts}
                  activeCategory={activeCategory}
                />
                <CategoryList
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryClick={handleCategoryClick}
                />
              </div>
            ) : (
              <div data-aos="fade-up" className="blog-cta">
                <CategorySkeleton />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
