import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";

function NotFoundPage() {
  return (
    <PageContainer>
      <section className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="mb-4 text-6xl font-bold text-gray-300">۴۰۴</h2>
        <h3 className="mb-2 text-2xl font-bold">صفحه یافت نشد</h3>
        <p className="mb-6 text-gray-600">
          آدرس یا لینک مورد نظر شما در سیستم موجود نیست.
        </p>
        <Link
          to="/"
          className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          بازگشت به صفحه اصلی
        </Link>
      </section>
    </PageContainer>
  );
}

export default NotFoundPage;
