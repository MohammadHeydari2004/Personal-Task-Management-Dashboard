import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto w-full max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
      {children}
    </div>
  );
}

export default PageContainer;
