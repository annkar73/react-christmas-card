import houseIcon from '../../public/house.png';
import '../styles/HomeButton.css';

interface HomeButtonProps {
    onClick: () => void;
}

const HomeButton = ({ onClick }: HomeButtonProps) => {
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