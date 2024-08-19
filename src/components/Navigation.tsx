import React from 'react';


import baublePurple from '../assets/bauble_purple.png';
import baublePink from '../assets/bauble_pink.png';

interface NavigationProps {
    setActivePage: (page: "christmasCard" | "tictactoe" | "memoryGame") => void;
    
  }

const Navigation: React.FC<NavigationProps> = ({ setActivePage }) => {
    console.log('Rendering Navigation component');

    return (
        <>
        <div className='main-nav'>
            <img src={baublePurple} alt='Tic Tac Toe' className='nav-image' onClick={() => setActivePage('tictactoe')} />
            <img src={baublePink} alt='Memory Game' className='nav-image' onClick={() => setActivePage('memoryGame')} />
        </div>
        </>
    );
};

export default Navigation;