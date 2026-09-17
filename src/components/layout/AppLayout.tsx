import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <Header />
      <main
        id="main-content"
        className="flex-1 px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 xl:px-10 2xl:px-12"
      >
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
