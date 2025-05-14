export interface Category {
  id: number;
  name: string;
  acf?: {
    category_color?: string;
    category_background?: string;
  };
}
