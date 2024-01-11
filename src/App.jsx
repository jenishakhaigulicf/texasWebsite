import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <>About</>
        },
        {
          path: "/blogs",
          element: <Blogs />
        },
        {
          path: "/blogs/:id",
          element: <BlogDetails />
        },
        {
          path: "*",
          element: <Navigate to={"/"} replace />
        }
      ]
    }
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
