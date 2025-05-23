export interface WPPostRawData {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    author?: { name: string }[];
    "wp:featuredmedia"?: { source_url: string }[];
    "wp:term"?: {
      id: number;
      name: string;
      slug: string;
    }[][];
  };
  acf?: {
    is_featured?: boolean | number;
  };
  is_featured?: boolean | number;
}
