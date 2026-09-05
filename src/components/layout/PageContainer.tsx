import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return <div className="mx-auto max-w-5xl p-6">{children}</div>;
}

export default PageContainer;
