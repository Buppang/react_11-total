import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import TodoList from "../pages/TodoList.tsx";

const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout />,
            path: "/",
            children: [
                { index: true, element: <Home /> },
                { path: "/TodoList", element: <TodoList /> },
            ]
        }
    ];
    return createBrowserRouter(routes);
}

export default AppRouter;