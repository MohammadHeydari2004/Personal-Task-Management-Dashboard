import { Route, Routes } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import NotFoundPage from "../pages/NotFoundPage";
import TaskDetailsPage from "../pages/TaskDetailsPage";
import TasksListPage from "../pages/TasksListPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<TasksListPage />} />
        <Route path="tasks/:taskId" element={<TaskDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
