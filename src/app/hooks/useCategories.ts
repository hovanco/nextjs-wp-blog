import { useEffect, useState, useCallback } from "react";
import { Category } from "../types/category";
import { fetchCategories } from "../utils/fetchCategories";
import { withMinLoading } from "../utils/withMinLoading";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await withMinLoading(fetchCategories(), 500);
      if (data.length === 0) {
        console.warn("No categories found.");
      }
      const updated = [{ id: 0, name: "All" }, ...data];
      setCategories(updated);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return {
    categories,
    isLoadingCategories: isLoading,
    refetchCategories: loadCategories,
  };
};
