import React from "react";
import houseIcon from '../../public/house.png';
import '../styles/HouseButton.css';

interface HomeButtonProps {
    onClick: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({ onClick }) => {
    return (
        <>
            <div className="home-container">
                <img src={houseIcon} alt='Go to home' className='home-icon' onClick={onClick}  />
                <div className='home-text'>Hem</div>
            </div>
        </>
    )
}

export default HomeButton;