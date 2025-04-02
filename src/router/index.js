import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";

const Main = lazy(() => import("../page/main"));
const Portfolio = lazy(() => import("../page/portfolio"));
const Management = lazy(() => import("../page/management"));
const Login = lazy(() => import("../page/login"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/main",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "portfolio",
        element: (
          <Suspense fallback={<Loading />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "management",
        element: (
          <Suspense fallback={<Loading />}>
            <Management />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
