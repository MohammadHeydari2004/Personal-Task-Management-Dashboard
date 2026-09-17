import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

function Header() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90 transition-colors duration-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 py-3 sm:px-4 sm:py-3.5 md:max-w-4xl md:px-6 lg:max-w-5xl lg:px-8 xl:max-w-6xl 2xl:max-w-7xl">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl" aria-hidden="true">
            📋
          </span>
          <h1 className="text-sm font-bold text-gray-900 sm:text-base md:text-lg dark:text-gray-100 truncate">
            داشبورد مدیریت وظایف
          </h1>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* دکمه تغییر حالت تاریک/روشن */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
            title={isDark ? "تغییر به حالت روشن" : "تغییر به حالت تاریک"}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 bg-white text-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 sm:h-10 sm:w-10"
          >
            <span aria-hidden="true">{isDark ? "☀️" : "🌙"}</span>
          </button>

          {/* لینک صفحه اصلی */}
          <Link
            to="/"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            صفحه اصلی
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
