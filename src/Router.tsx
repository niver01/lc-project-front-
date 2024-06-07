import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages";
import { Blog } from "./pages/Blog";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog/:id",
      element: <Blog />,
    },
  ]);

  return <RouterProvider router={router} />;
};
