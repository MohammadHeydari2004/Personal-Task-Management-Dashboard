import PageContainer from "../components/layout/PageContainer";

function TasksListPage() {
  return (
    <PageContainer>
      <section>
        <h2 className="mb-4 text-2xl font-bold">لیست وظایف</h2>
        <p className="text-gray-600">
          محل نمایش وظایف (در فازهای بعدی پیاده‌سازی می‌شود)
        </p>
      </section>
    </PageContainer>
  );
}

export default TasksListPage;
