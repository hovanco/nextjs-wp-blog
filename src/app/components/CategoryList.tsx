import { Category } from "../types/category";

interface CategoryListProps {
  categories: Category[];
  activeCategory: number;
  onCategoryClick: (categoryId: number) => void;
  isSearching: boolean;
}

const CategoryList = ({
  categories,
  activeCategory,
  onCategoryClick,
  isSearching,
}: CategoryListProps) => {
  return (
    <div className="category-container">
      <div className="category-list">
        {categories?.map((category) => (
          <div
            key={category.id}
            className={`category-item ${
              !isSearching && activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => onCategoryClick(category.id)}
          >
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
