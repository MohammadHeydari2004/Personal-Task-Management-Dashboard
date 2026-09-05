import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white p-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📋</span>
          <h1 className="text-xl font-bold">داشبورد مدیریت وظایف</h1>
        </div>
        <Link
          to="/"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
        >
          صفحه اصلی
        </Link>
      </div>
    </header>
  );
}

export default Header;
