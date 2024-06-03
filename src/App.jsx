import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages1/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components1/Navbar";
import { Blogs } from "./pages1/Blogs";

export const NAVIGATION_ROUTES = {
  //home route
  HOME: "/",
  ABOUT_US: "/about-us",
  BLOGS: "/blogs"
};

// create browser router creates routes
// it takes array of objects
const router = createBrowserRouter([
  {
    path: NAVIGATION_ROUTES.HOME,
    // parent element
    element: <Navbar />,
    children: [
      {
        path: NAVIGATION_ROUTES.HOME,
        element: <p> This is Home</p>
      },
      {
        path: NAVIGATION_ROUTES.ABOUT_US,
        element: (
          <>
            <p>This is about us page</p>
          </>
        )
      },
      {
        path: NAVIGATION_ROUTES.BLOGS,
        element: <Blogs />
      }
    ],
    errorElement: <h1>Something went wrong!!</h1>
  },

  {
    path: "*",
    element: <>This path does not exist</>
  }
]);

const App = () => {
  return (
    <ChakraProvider>
      {/* router provider provides route 
       we need to provide our route as prop 
      to routerProvider */}
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

// import Blogs from "./pages/Blogs";
// import BlogDetails from "./pages/BlogDetails";
// import {
//   Navigate,
//   RouterProvider,
//   createBrowserRouter
// } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />
//         },
//         {
//           path: "/about",
//           element: <>About</>
//         },
//         {
//           path: "/blogs",
//           element: <Blogs />
//         },
//         {
//           path: "/blogs/:id",
//           element: <BlogDetails />
//         },
//         {
//           path: "*",
//           element: <Navigate to={"/"} replace />
//         }
//       ]
//     }
//   ]);

//   return (
//     <ChakraProvider>
//       <RouterProvider router={router} />
//     </ChakraProvider>
//   );
// }

export default App;
