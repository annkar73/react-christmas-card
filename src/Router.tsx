import {createBrowserRouter} from "react-router-dom";
import MemoryGame from "./pages/MemoryGame";
import MainPage from "./pages/MainPage";
import TicTacToeGame from "./pages/TicTacToeGame";
import { Layout } from "./pages/Layout";
import MusicPage from "./pages/MusicPage";
import ColoringPage from "./pages/ColoringPage";
import RecipeList from "./pages/RecipeList";

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
            path: "/recipe",
            element: <RecipeList />
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