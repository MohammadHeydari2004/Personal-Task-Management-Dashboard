import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return <div className="mx-auto max-w-7xl p-6">{children}</div>;
}

export default PageContainer;
