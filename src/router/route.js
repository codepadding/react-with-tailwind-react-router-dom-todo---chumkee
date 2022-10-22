import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../components/Layout";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import TodoPage from "../pages/TodoPage";
  
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout/>,
        children:[
          {
            path: "/",
            element: <HomePage/>
          },
          {
            path: "contact",
            element: <ContactPage />
          },
          {
            path: "todo",
            element: <TodoPage />
          }
        ]
      },
      {
        path: "*",
        element: <PageNotFound/>
      }
    ]
  );

  export default router;