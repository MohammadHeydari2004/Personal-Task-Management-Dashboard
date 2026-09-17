import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "app-theme";

function getInitialTheme(): ThemeMode {
  // بررسی localStorage
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // localStorage در دسترس نیست (مثلاً حالت ناشناس در برخی مرورگرها)
  }

  // بررسی ترجیح سیستم
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  // همگام‌سازی کلاس "dark" با تغییرات تم
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // ذخیره ترجیح کاربر
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // اگر ذخیره ممکن نبود، نادیده بگیر
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
}
