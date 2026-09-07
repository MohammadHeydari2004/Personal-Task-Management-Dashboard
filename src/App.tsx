import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./contexts/TaskProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
