import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Layout from "../layout/Layout";

const Main = lazy(() => import("../page/main"));
const Portfolio = lazy(() => import("../page/portfolio"));
const Management = lazy(() => import("../page/management"));
const Login = lazy(() => import("../page/login"));
const Dashboard = lazy(() => import("../page/dashboard/Dashboard"));
const Calendar = lazy(() => import("../page/dashboard/Calendar"));
const Chat = lazy(() => import("../page/dashboard/Chat"));
const Project = lazy(() => import("../page/dashboard/Project"));




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
      {
        path: "/dashboard/:workspaceId",
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/:workspaceId/calendar",
        element: (
          <Suspense fallback={<Loading />}>
            <Calendar />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/:workspaceId/chat",
        element: (
          <Suspense fallback={<Loading />}>
            <Chat />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/:workspaceId/project",
        element: (
          <Suspense fallback={<Loading />}>
            <Project />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
