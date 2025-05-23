import { Category } from "../types/category";

interface CategoryListProps {
  categories: Category[];
  activeCategory: number;
  onCategoryClick: (categoryId: number) => void;
}

const CategoryList = ({
  categories,
  activeCategory,
  onCategoryClick,
}: CategoryListProps) => {
  return (
    <div className="category-container">
      <div className="category-list">
        {categories?.map((category) => (
          <div
            style={{
              color: `${category.acf?.category_color}`,
              backgroundColor: `${category.acf?.category_background}`,
            }}
            key={category.id}
            className={`category-item ${
              activeCategory === category.id ? "active" : ""
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
