import {createBrowserRouter} from "react-router-dom";
import MemoryGame from "./pages/MemoryGame";
import MainPage from "./pages/MainPage";
import TicTacToeGame from "./pages/TicTacToeGame";
import { Layout } from "./pages/Layout";
import MusicPage from "./pages/MusicPage";
import ColoringPage from "./pages/ColoringPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/memory",
            element: <MemoryGame />,
        },
        {
            path: "/tictactoe",
            element: <TicTacToeGame />,
        },
        {
            path: "/musicpage",
            element: <MusicPage />
        },
        {
            path: "/coloring",
            element: <ColoringPage />
        }
        ],
    },
]);