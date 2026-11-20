import { createBrowserRouter, type RouteObject } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import TodoList from "../pages/TodoList.tsx";
import Coin from "../pages/coinpage/Coin.tsx"
import Movie from "../pages/moviepage/Moive.tsx";
import MovieSearch from "../pages/moviepage/MovieSearch.tsx";
import MovieDetail from "../pages/moviepage/MovieDetail.tsx";
import ProductDetail from "../pages/productpage/ProductDetail.tsx";
import ProductList from "../pages/productpage/ProductList.tsx";
import BoardDetail from "../pages/boardpage/BoardDetail.tsx";
import Board from "../pages/boardpage/Board.tsx";

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
                {
                    path: "Product",
                    children: [
                        { index: true, element: <ProductList /> },
                        { path: "detail/:id", element: <ProductDetail /> },
                    ],
                },
                {
                    path: "Board",
                    children: [
                        { index: true, element: <Board />},
                        { path: "detail/:id", element: <BoardDetail />},
                    ]
                }
            ],
        },
    ];
    return createBrowserRouter(routes);
};

export default AppRouter;
