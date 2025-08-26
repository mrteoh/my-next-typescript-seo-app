"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.5rem 1rem",
        marginTop: "1rem",
        borderRadius: "8px",
        border: "1px solid #ccc",
        background: theme === "light" ? "#f9f9f9" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
