export class BlogData {
  id: string;
  slug: string;
  postImage: string | undefined;
  title: string | undefined;
  excerpt: string | undefined;
  date: string | undefined;
  authorName: string | undefined;
  categories: number[];
  content: string | undefined;
  // Disable no-explicit-any rule for this line
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(data: any) {
    this.id = data?.id;
    this.slug = data?.slug;
    this.postImage = data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    this.title = data?.title?.rendered;
    this.excerpt = data?.excerpt?.rendered;
    this.date = data?.date;
    this.authorName = data?._embedded?.author?.[0]?.name;
    this.categories = data?._embedded?.["wp:term"]?.[0] ?? [];
    this.content = data?.content?.rendered;
  }
}
