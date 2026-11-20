import  { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import TodoList from "../pages/TodoList.tsx";
import Coin from "../pages/Coin.tsx";
import Product from "../pages/Product.tsx";
import Movie from "../pages/moviepage/Moive.tsx";
import MovieSearch from "../pages/moviepage/MovieSearch.tsx";
import MovieDetail from "../pages/moviepage/MovieDetail.tsx";

const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            element: <MainLayout />,
            path: "/",
            children: [
                { index: true, element: <Home /> },
                { path: "/TodoList", element: <TodoList /> },
                { path: "/Coin", element: <Coin /> },
                {
                    path: "Movie",
                    children: [
                        { index: true, element: <Movie /> },
                        { path: "search", element: <MovieSearch /> },
                        { path: "detail/:id", element: <MovieDetail /> },
                    ],
                },
                { path: "/Search", element: <MovieSearch /> },
                { path: "/detail/:id", element: <MovieDetail /> },
                { path: "/Product", element: <Product /> },
            ],
        },
    ];
    return createBrowserRouter(routes);
}

export default AppRouter;