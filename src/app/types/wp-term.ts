export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  acf?: {
    category_color?: string;
    category_background?: string;
  };
}
