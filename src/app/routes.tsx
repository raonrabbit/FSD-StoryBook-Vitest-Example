import { RouteObject } from "react-router-dom";
import Root from "./Root";
import { HomePage, Login } from "../pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
];
