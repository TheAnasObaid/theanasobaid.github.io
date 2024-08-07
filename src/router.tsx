import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import WorkPage from "./pages/WorkPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
    
  },
]);

export default router;
