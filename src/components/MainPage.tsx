import React from "react";
import "../styles/MainPage.css";
import Navigation from "./Navigation";
import ChristmasCard from "./ChristmasCard";
import TicTacToe from "./tictactoe/TicTacToeGame";
import MemoryGame from "../components/memory/MemoryGame";


const MainPage: React.FC = () => {
  const [activePage, setActivePage] = React.useState<
    "christmasCard" | "tictactoe" | "memoryGame"
  >("christmasCard");

  const renderPage = () => {
    switch (activePage) {
      case "tictactoe":
        return <TicTacToe />;
      case "memoryGame":
        return <MemoryGame />;
      default:
        return <ChristmasCard />;
    }
  };

  return (
    <>
      <div className="main-page">
        <main>
          {renderPage()} {/* Renderar den aktiva sidan */}

        
        {activePage == "christmasCard" && (
            <Navigation setActivePage={setActivePage} />
         
        )}
        </main>

      </div>
    </>
  );
};

export default MainPage;
