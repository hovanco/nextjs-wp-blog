import React, { useEffect, useState } from "react";
import Image from "next/image";
import IconSearch from "../assets/images/icon-search.png";

interface SearchBarProps {
  onSearch: (query: string) => void;
  activeCategory: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  activeCategory,
}: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setSearchResult(query);
      setQuery("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      e.preventDefault();
      onSearch(query);
      setSearchResult(query);
      setQuery("");
    }
  };

  useEffect(() => {
    setSearchResult("");
  }, [activeCategory]);

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <div className="search-container">
        <div className="search-box">
          <button type="submit" className="search-button">
            <Image
              className="search-icon"
              src={IconSearch.src}
              alt="Search Icon"
              width={24}
              height={24}
            />
          </button>
          <div className="search-wrapper-input">
            <input
              className="search-input"
              type="text"
              name="search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e?.target?.value)}
              onKeyDown={handleKeyDown}
            />
            {query && (
              <button
                className="close-icon"
                type="button"
                onClick={() => setQuery("")}
              >
                &times;
              </button>
            )}
          </div>
        </div>
        {searchResult && (
          <p className="search-title">Results for: {searchResult}</p>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
