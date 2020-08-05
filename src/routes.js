import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";

// page
const Index = lazy(() => import("@/pages/Index"));
const Login = lazy(() => import("@/pages/Login"));
const Playground = lazy(() => import("@/pages/Playground"));
const Enter = lazy(() => import("@/pages/Enter"));

const suspenseComponent = (Component) => (props) => (
  <Suspense fallback={<div>loading</div>}>
    <Component {...props} />
  </Suspense>
);

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/index"} />,
  },
  {
    path: "/index",
    component: suspenseComponent(Index),
  },
  {
    path: "/login",
    component: suspenseComponent(Login),
  },
  {
    path: "/playground",
    component: suspenseComponent(Playground),
  },
  {
    path: "/enter",
    component: suspenseComponent(Enter),
  },
];

export default routes;
