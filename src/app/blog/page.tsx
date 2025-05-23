"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import BlogList from "../components/BlogList";
import BlogPagination from "../components/BlogPagination";
import CategoryList from "../components/CategoryList";
import SearchBar from "../components/SearchBar";
import { BlogData } from "../types/posts";
import { fetchPosts, fetchPostsByCategory } from "../utils/fetchPosts";
import { searchPosts } from "../utils/searchPosts";
import { withMinLoading } from "../utils/withMinLoading";
import Footer from "../components/Footer";
import { useCategories } from "../hooks/useCategories";
import { usePinnedPost } from "../hooks/usePinnedPost";
import { useLatestPosts } from "../hooks/useLatestPosts";
import { WPPostRawData } from "../types/wp-post";
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
  const [activeCategory, setActiveCategory] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  const { categories, isLoading: isLoadingCategories } = useCategories();
  const { pinnedPost } = usePinnedPost();
  const { latestPosts, isLoading: isLoadingLatest } = useLatestPosts(
    pinnedPost ? Number(pinnedPost.id) : undefined
  );

  const [searchQuery, setSearchQuery] = useState("");

  const excludedIds = useMemo(() => {
    return [
      Number(pinnedPost?.id),
      ...latestPosts.map((post) => Number(post.id)),
    ].filter((id): id is number => !isNaN(id));
  }, [pinnedPost, latestPosts]);

  const getPosts = useCallback(
    async (page = 1) => {
      try {
        const response = await withMinLoading(
          fetchPosts(postsPerPage, page, excludedIds),
          500
        );
        const postsData = response.data.map(
          (item: WPPostRawData) => new BlogData(item)
        );
        const numberOfPosts = parseInt(response.headers["x-wp-total"], 10);
        setPosts(postsData);
        setTotalPages(Math.ceil(numberOfPosts / postsPerPage));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [excludedIds]
  );

  const getPostsByCategory = useCallback(
    async (categoryId: number, page = 1) => {
      try {
        const res = await withMinLoading(
          fetchPostsByCategory(categoryId, page, postsPerPage),
          500
        );
        const data = res.data.map((item: WPPostRawData) => new BlogData(item));
        const numberOfPosts = parseInt(res.headers["x-wp-total"], 10);
        setPosts(data);
        setTotalPages(Math.ceil(numberOfPosts / postsPerPage));
      } catch (error) {
        console.error("Error fetching posts by category:", error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const getSearchPosts = useCallback(
    async (query: string, page = 1) => {
      setIsLoading(true);
      setIsSearching(true);
      setIsFiltering(false);
      setSearchQuery(query);
      try {
        const selectedCategoryId =
          activeCategory !== 0 ? activeCategory : undefined;

        const res = await withMinLoading(
          searchPosts(query, page, postsPerPage, selectedCategoryId),
          500
        );
        const results = res.data.map((item) => new BlogData(item));
        const numberOfPosts = parseInt(res.headers["x-wp-total"], 10);
        setPosts(results);
        setTotalPages(Math.ceil(numberOfPosts / postsPerPage));
      } catch (error) {
        console.error("Error fetching search:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [activeCategory]
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setIsLoading(true);
  };

  const handleCategoryClick = (categoryId: number) => {
    if (categoryId === activeCategory) return;
    setCurrentPage(1);
    setActiveCategory(categoryId);
    setIsFiltering(categoryId !== 0);
    setIsSearching(false);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!pinnedPost || latestPosts.length === 0 || isSearching) return;

    if (isFiltering && activeCategory !== 0) {
      getPostsByCategory(activeCategory, currentPage);
    } else {
      getPosts(currentPage);
    }
  }, [
    currentPage,
    activeCategory,
    pinnedPost,
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
                {isLoadingLatest ? (
                  <CardSkeleton />
                ) : (
                  <LatestPosts posts={latestPosts} />
                )}
              </div>
            )
          )}

          <div className="blog-wrapper">
            <div className="blog-content">
              <BlogList
                posts={posts}
                isLoading={isLoading}
                searchQuery={searchQuery}
              />
              {!isLoading && posts.length > 0 && totalPages > 1 && (
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
            <div data-aos="fade-up" className="blog-cta">
              <SearchBar
                onSearch={getSearchPosts}
                activeCategory={activeCategory}
              />
              {isLoadingCategories ? (
                <CategorySkeleton />
              ) : (
                <CategoryList
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryClick={handleCategoryClick}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
