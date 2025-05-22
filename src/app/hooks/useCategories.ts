import { useCallback, useEffect, useState } from "react";
import { withMinLoading } from "../utils/withMinLoading";
import { fetchCategories } from "../utils/fetchCategories";
import { Category } from "../types/category";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await withMinLoading(fetchCategories(), 500);
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
    isLoading: isLoading, // alias bên ngoài khi cần
    refetchCategories: loadCategories,
  };
};
