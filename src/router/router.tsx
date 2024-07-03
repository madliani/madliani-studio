import { createBrowserRouter, RouteObject } from "react-router-dom";
import { About } from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { ProjectPage } from "../pages/ProjectPage";

const routes: RouteObject[] = [
    {
        element: <Home />,
        path: "/"
    },
    {
        element: <ErrorPage />,
        path: "/404"
    },
    {
        element: <ProjectPage />,
        path: "/projects"
    },
    {
        element: <About />,
        path: "/about"
    }
];

export const router = createBrowserRouter(routes);
