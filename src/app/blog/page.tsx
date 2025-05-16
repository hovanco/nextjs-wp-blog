// "use client";
// import { useEffect, useState } from "react";
// import BlogList from "../components/BlogList";
// import BlogPagination from "../components/BlogPagination";
// import CategoryList from "../components/CategoryList";
// import SearchBar from "../components/SearchBar";
// import { BlogData } from "../types/posts";
// import { Category } from "../types/category";
// import { fetchPosts, fetchPostsByCategory } from "../utils/fetchPosts";
// import { fetchCategories } from "../utils/fetchCategories";
// import { searchPosts } from "../utils/searchPosts";
// import { withMinLoading } from "../utils/withMinLoading";

// import Image from "next/image";
// import Link from "next/link";
// import IconAuthor from "../assets/images/co-author.png";
// import { formatDate } from "../utils/date";
// import Footer from "../components/Footer";
// import LatestPosts from "../components/LatestPosts";

// const Blog = () => {
//   const postsPerPage: number = 13;
//   const [posts, setPosts] = useState<BlogData[]>([]);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [activeCategory, setActiveCategory] = useState<number>(0);

//   // featuredPost
//   const [featuredPost, setFeaturedPost] = useState<BlogData | null>(null);
//   const [hasSetFeaturedPost, setHasSetFeaturedPost] = useState(false);

//   const getPosts = async (page: number = 1) => {
//     try {
//       const response = await withMinLoading(
//         fetchPosts(postsPerPage, page),
//         500
//       );
//       // Disable no-explicit-any rule for this line
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const postsData = response.data.map((item: any) => new BlogData(item));
//       const numberOfPosts = parseInt(response.headers["x-wp-total"], 10);
//       const totalPages = Math.ceil(numberOfPosts / postsPerPage);
//       setPosts(postsData);
//       setTotalPages(totalPages);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const getPostsByCategory = async (categoryId: number, page: number = 1) => {
//     try {
//       const res = await withMinLoading(
//         fetchPostsByCategory(categoryId, page, postsPerPage),
//         500
//       );

//       // Disable no-explicit-any rule for this line
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const data = res.data.map((item: any) => new BlogData(item));
//       setPosts(data);
//       const numberOfPosts = parseInt(res.headers["x-wp-total"], 10);
//       const totalPages = Math.ceil(numberOfPosts / postsPerPage);
//       setTotalPages(totalPages);
//     } catch (error) {
//       console.error("Error fetching posts by category:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     setIsLoading(true);
//     if (activeCategory === 0) {
//       getPosts(page);
//     } else {
//       getPostsByCategory(activeCategory, page);
//     }
//   };

//   const handleCategoryClick = (categoryId: number) => {
//     setCurrentPage(1);
//     setActiveCategory(categoryId);
//     setIsLoading(true);
//     if (categoryId === 0) {
//       getPosts(1);
//     } else {
//       getPostsByCategory(categoryId, 1);
//     }
//   };

//   const geCategoriesPost = async () => {
//     try {
//       const data = await withMinLoading(fetchCategories(), 500);
//       const updatedCategories = [{ id: 0, name: "All" }, ...data];
//       setCategories(updatedCategories);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const getSearchPosts = async (query: string, page = 1) => {
//     setIsLoading(true);
//     try {
//       // Check if already select sort by categoryId or no
//       const selectedCategoryId =
//         activeCategory !== 0 ? activeCategory : undefined;
//       const res = await withMinLoading(
//         searchPosts(query, page, postsPerPage, selectedCategoryId),
//         500
//       );
//       // Disable no-explicit-any rule for this line
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const results = res.data.map((item: any) => new BlogData(item));
//       setPosts(results);
//       const numberOfPosts = parseInt(res.headers["x-wp-total"], 10);
//       const totalPages = Math.ceil(numberOfPosts / postsPerPage);
//       setTotalPages(totalPages);
//       // Disable no-explicit-any rule for this line
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: any) {
//       console.error("Error fetching search:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     geCategoriesPost();
//   }, []);

//   useEffect(() => {
//     if (activeCategory === 0) {
//       getPosts(currentPage);
//     } else {
//       getPostsByCategory(activeCategory, currentPage);
//     }
//   }, [currentPage, activeCategory]);

//   useEffect(() => {
//     if (activeCategory === 0) {
//       getPosts(currentPage);
//     } else if (activeCategory !== 0) {
//       getPostsByCategory(activeCategory, currentPage);
//     }
//   }, [currentPage, activeCategory]);

//   // start handle featuredPost
//   const getLatestFeaturedPost = (posts: BlogData[]) => {
//     if (!Array.isArray(posts)) return null;

//     const featuredPosts = posts
//       .filter((post) => post.is_featured === true && !!post.date)
//       .sort(
//         (a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()
//       );

//     return featuredPosts[0] ?? null;
//   };

//   useEffect(() => {
//     if (!hasSetFeaturedPost && posts.length > 0) {
//       const fp = getLatestFeaturedPost(posts);
//       setFeaturedPost(fp);
//       setHasSetFeaturedPost(true);
//     }
//   }, [posts, hasSetFeaturedPost]);
//   // end handle featuredPost

//   const latestPosts = posts
//     .filter((post) => post.id !== featuredPost?.id)
//     .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
//     .slice(0, 4);

//   const filteredPosts = posts.filter(
//     (post) =>
//       post.id !== featuredPost?.id &&
//       !latestPosts.some((latestPost) => latestPost.id === post.id)
//   );

//   return (
//     <>
//       <main id="blog-page">
//         <div className="container">
//           <section data-aos="fade-up" className="post-pin">
//             {featuredPost && (
//               <Link
//                 data-aos="fade-up"
//                 className="pin-link"
//                 href={`/blog/${featuredPost?.slug}`}
//               >
//                 <div className="pin-wrapper">
//                   <figure className="pin-img">
//                     <Image
//                       alt="Post Image"
//                       width={1920}
//                       height={1080}
//                       src={featuredPost?.postImage || ""}
//                     />
//                   </figure>

//                   <div className="pin-overlay"></div>
//                   <div className="pin-content">
//                     <div className="pin-cate">
//                       {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
//                       {featuredPost?.categories?.map((category: any) => (
//                         <div className="pin-cate-label" key={category?.id}>
//                           <span className="pin-cate-name">
//                             {category?.name}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                     <h1 className="pin-title">{featuredPost?.title}</h1>
//                     <div className="pin-footer">
//                       <div className="pin-author">
//                         <Image
//                           className="pin-icon-author"
//                           src={IconAuthor?.src}
//                           alt="Icon Author"
//                           width={36}
//                           height={36}
//                         />
//                         <span className="pin-text-author">Co.Ho</span>
//                         {/* <span
//                           className="pin-text-author"
//                           dangerouslySetInnerHTML={{
//                             __html: posts[0]?.authorName || "",
//                           }}
//                         /> */}
//                       </div>
//                       <div className="pin-time">
//                         <time
//                           className="pin-text-time"
//                           dangerouslySetInnerHTML={{
//                             __html: formatDate(featuredPost?.date || ""),
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             )}
//           </section>

//           <LatestPosts posts={latestPosts} />

//           <div className="blog-wrapper">
//             <div className="blog-content">
//               <BlogList
//                 // posts={posts}
//                 posts={filteredPosts}
//                 isLoading={isLoading}
//                 featuredPost={featuredPost}
//               />
//               {posts.length > 0 && totalPages > 1 ? (
//                 <BlogPagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   onPageChange={handlePageChange}
//                 />
//               ) : null}
//             </div>
//             {categories.length > 0 && (
//               <div data-aos="fade-up" className="blog-cta">
//                 <SearchBar
//                   onSearch={getSearchPosts}
//                   activeCategory={activeCategory}
//                 />
//                 <CategoryList
//                   categories={categories}
//                   activeCategory={activeCategory}
//                   onCategoryClick={handleCategoryClick}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Blog;

"use client";
import { useEffect, useState } from "react";
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

import Image from "next/image";
import Link from "next/link";
import IconAuthor from "../assets/images/co-author.png";
import { formatDate } from "../utils/date";
import Footer from "../components/Footer";
import LatestPosts from "../components/LatestPosts";
import CardSkeleton from "../components/CardSkeleton";
import PinSkeleton from "../components/PinSkeleton";
import CategorySkeleton from "../components/CategorySkeleton";

const Blog = () => {
  const postsPerPage = 9;

  const [posts, setPosts] = useState<BlogData[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const [featuredPost, setFeaturedPost] = useState<BlogData | null>(null);
  const [latestPosts, setLatestPosts] = useState<BlogData[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogData[]>([]);

  const extractPostGroups = (data: BlogData[]) => {
    const featured = data.find((post) => post.is_featured === true) || null;
    const remaining = data.filter((post) => post.id !== featured?.id);
    const latest = remaining
      .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
      .slice(0, 4);
    const list = remaining.filter(
      (post) => !latest.some((lp) => lp.id === post.id)
    );
    return { featured, latest, list };
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePostResponse = (response: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const postsData = response.data.map((item: any) => new BlogData(item));
    setPosts(postsData);

    const { featured, latest, list } = extractPostGroups(postsData);
    setFeaturedPost(featured);
    setLatestPosts(latest);

    const totalPages = Math.ceil(list.length / postsPerPage);
    setTotalPages(totalPages > 0 ? totalPages : 1);

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedList = list.slice(startIndex, endIndex);
    setFilteredPosts(paginatedList);
  };

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const response = await withMinLoading(fetchPosts(20, 1), 500);
      handlePostResponse(response);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPostsByCategory = async (categoryId: number) => {
    setIsLoading(true);
    try {
      const res = await withMinLoading(
        fetchPostsByCategory(categoryId, 1, 20),
        500
      );
      handlePostResponse(res);
    } catch (error) {
      console.error("Error fetching posts by category:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (!featuredPost || latestPosts.length === 0) return;

    setIsLoading(true);
    const { list } = extractPostGroups(posts);

    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedList = list.slice(startIndex, endIndex);
    setFilteredPosts(paginatedList);
    setIsLoading(false);
  };

  const handleCategoryClick = (categoryId: number) => {
    setCurrentPage(1);
    setActiveCategory(categoryId);
  };

  const geCategoriesPost = async () => {
    try {
      const data = await withMinLoading(fetchCategories(), 500);
      const updatedCategories = [{ id: 0, name: "All" }, ...data];
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getSearchPosts = async (query: string, page = 1) => {
    setIsLoading(true);
    try {
      const selectedCategoryId =
        activeCategory !== 0 ? activeCategory : undefined;
      const res = await withMinLoading(
        searchPosts(query, page, postsPerPage, selectedCategoryId),
        500
      );
      handlePostResponse(res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error fetching search:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    geCategoriesPost();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    if (activeCategory === 0) {
      getPosts();
    } else {
      getPostsByCategory(activeCategory);
    }
  }, [activeCategory]);

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
            <>
              <section data-aos="fade-up" className="post-pin">
                {featuredPost && (
                  <Link
                    data-aos="fade-up"
                    className="pin-link"
                    href={`/blog/${featuredPost?.slug}`}
                  >
                    <div className="pin-wrapper">
                      <figure className="pin-img">
                        <Image
                          alt="Post Image"
                          width={1920}
                          height={1080}
                          src={featuredPost?.postImage || ""}
                        />
                      </figure>

                      <div className="pin-overlay"></div>
                      <div className="pin-content">
                        <div className="pin-cate">
                          {/* Disable no-explicit-any rule for this line */}
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {featuredPost?.categories?.map((category: any) => (
                            <div className="pin-cate-label" key={category?.id}>
                              <span className="pin-cate-name">
                                {category?.name}
                              </span>
                            </div>
                          ))}
                          {/* eslint-enable @typescript-eslint/no-explicit-any */}
                        </div>
                        <h1 className="pin-title">{featuredPost?.title}</h1>
                        <div className="pin-footer">
                          <div className="pin-author">
                            <Image
                              className="pin-icon-author"
                              src={IconAuthor?.src}
                              alt="Icon Author"
                              width={36}
                              height={36}
                            />
                            <span className="pin-text-author">Co.Ho</span>
                          </div>
                          <div className="pin-time">
                            <time
                              className="pin-text-time"
                              dangerouslySetInnerHTML={{
                                __html: formatDate(featuredPost?.date || ""),
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </section>
              <LatestPosts posts={latestPosts} />
            </>
          )}
          <div className="blog-wrapper">
            <div className="blog-content">
              <BlogList
                posts={filteredPosts}
                isLoading={isLoading}
                featuredPost={featuredPost}
              />
              {filteredPosts.length > 0 && totalPages > 1 && (
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
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
