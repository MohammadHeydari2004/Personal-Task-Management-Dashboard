import { useNavigate, useParams } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import { Button } from "../components/ui/Button";

function TaskDetailsPage() {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <PageContainer>
      <section>
        <Button
          type="button"
          onClick={handleBack}
          className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
        >
          بازگشت
        </Button>
        <h2 className="mb-4 text-2xl font-bold">جزئیات وظیفه</h2>
        <p className="text-gray-600">
          شناسه وظیفه از URL:{" "}
          <code className="font-mono bg-gray-100 px-2 py-1 rounded">
            {taskId}
          </code>
        </p>
        <p className="mt-2 text-sm text-gray-500">
          محتوای واقعی در فاز پنجم پیاده‌سازی می‌شود.
        </p>
      </section>
    </PageContainer>
  );
}

export default TaskDetailsPage;
