import { RouteObject } from "react-router-dom";
import Root from "./Root";
import { HomePage } from "../pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
];
