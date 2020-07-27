import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";

// page
const Index = lazy(() => import("@/pages/Index"));
const Login = lazy(() => import("@/pages/Login"));
const Playground = lazy(() => import("@/pages/Playground"));

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
    level: 1,
  },
  {
    path: "/login",
    component: suspenseComponent(Login),
    level: 2,
  },
  {
    path: "/playground",
    component: suspenseComponent(Playground),
    level: 1,
  },
];

export default routes;
