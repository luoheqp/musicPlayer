import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";

// page
const Index = lazy(() => import("@/pages/Index"));
const MainPage = lazy(() => import("@/pages/MainPage"));
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
  },
  {
    path: "/playground",
    component: suspenseComponent(Playground),
  },
  {
    path: "/mainPage",
    component: suspenseComponent(MainPage),
  },
];

export default routes;
