"use client";
import { useState, useEffect } from "react";
import { Category } from "../types/category";
import { withMinLoading } from "../utils/withMinLoading";
import { fetchCategories } from "../utils/fetchCategories";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const data = await withMinLoading(fetchCategories(), 500);
      const updatedCategories = [{ id: 0, name: "All" }, ...data];
      setCategories(updatedCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories };
};
