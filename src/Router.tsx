import {createBrowserRouter} from "react-router-dom";
import MemoryGame from "./pages/MemoryGame";
import MainPage from "./pages/MainPage";
import TicTacToeGame from "./pages/TicTacToeGame";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
        {
            path: "/",
            element: <MainPage></MainPage>
        },
        {
            path: "/memory",
            element: <MemoryGame></MemoryGame>
        },
        {
            path: "/tictactoe",
            element: <TicTacToeGame></TicTacToeGame>
        },
        ],
    },
]);