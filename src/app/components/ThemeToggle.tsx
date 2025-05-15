"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className="svg-toggle"></div>;
  }

  return (
    <div
      className={`svg-toggle ${theme}`}
      onClick={toggleTheme}
      aria-disabled={!mounted}
    >
      <div className={`svg-icon sun-icon ${theme === "dark" ? "hidden" : ""}`}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="5"
            fill="none"
            stroke="orange"
            strokeWidth="2"
          />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = i * 45 * (Math.PI / 180);
            const x1 = 12 + Math.cos(angle) * 7;
            const y1 = 12 + Math.sin(angle) * 7;
            const x2 = 12 + Math.cos(angle) * 10;
            const y2 = 12 + Math.sin(angle) * 10;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="orange"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>
      <div
        className={`svg-icon moon-icon ${theme === "light" ? "hidden" : ""}`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="svg-switch-circle" />
    </div>
  );
}
