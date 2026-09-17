import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";

function NotFoundPage() {
  return (
    <PageContainer>
      <section
        aria-labelledby="not-found-title"
        className="flex flex-col items-center justify-center py-12 text-center sm:py-16 lg:py-24"
      >
        <h1
          id="not-found-title"
          className="mb-3 text-5xl font-bold text-gray-200 sm:mb-4 sm:text-6xl lg:text-7xl dark:text-gray-800"
        >
          ۴۰۴
        </h1>
        <h2 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl dark:text-gray-100">
          صفحه یافت نشد
        </h2>
        <p className="mb-6 text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
          آدرس یا لینک مورد نظر شما در سیستم موجود نیست.
        </p>
        <Link
          to="/"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 sm:px-6 sm:py-3 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          بازگشت به صفحه اصلی
        </Link>
      </section>
    </PageContainer>
  );
}

export default NotFoundPage;
