import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layout
import { MainLayout } from "./layouts";

// pages
import {
  HomePage,
  JobPage,
  JobsPage,
  AddJobPage,
  NotFoundPage,
  EditJobPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/jobs",
        element: <JobsPage />,
      },
      {
        path: `/jobs/:jobId`,
        element: <JobPage />,
      },
      {
        path: "/add-job",
        element: <AddJobPage />,
      },
      {
        path: `/edit-job/:jobId`,
        element: <EditJobPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
