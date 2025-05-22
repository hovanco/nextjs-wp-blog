import { WPPostRawData } from "../types/wp-post";
import { Category } from "./category";
import { WPTerm } from "../types/wp-term";
export class BlogData {
  id: string;
  slug: string;
  postImage: string | undefined;
  title: string | undefined;
  excerpt: string | undefined;
  date: string | undefined;
  authorName: string | undefined;
  categories: Category[];
  content: string | undefined;
  is_featured: boolean;

  constructor(data: WPPostRawData) {
    this.id = data?.id.toString() ?? "";
    this.slug = data?.slug ?? "";
    this.postImage = data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    this.title = data?.title?.rendered ?? "";
    this.excerpt = data?.excerpt?.rendered ?? "";
    this.date = data?.date ?? "";
    this.authorName = data?._embedded?.author?.[0]?.name ?? "";

    const categoryTerms: WPTerm[] = data?._embedded?.["wp:term"]?.[0] ?? [];

    this.categories = categoryTerms.map((term: WPTerm) => ({
      id: term.id,
      name: term.name,
      slug: term.slug,
      acf: term.acf
        ? {
            category_color: term.acf.category_color,
            category_background: term.acf.category_background,
          }
        : undefined,
    }));

    this.content = data?.content?.rendered ?? "";

    this.is_featured =
      data?.acf?.is_featured === true ||
      data?.acf?.is_featured === 1 ||
      data?.is_featured === true ||
      data?.is_featured === 1 ||
      false;
  }
}
