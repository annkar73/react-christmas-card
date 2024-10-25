import greenBall from '../../assets/green.png';
import redBall from '../../assets/red.png';
import thudSound from '../../assets/thud.mp3';
import './style/TicTacToe.css';

interface SquareProps {
    value: 'red' | 'green' | null;
    onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => {
    const imgSrc = value === 'red' ? redBall : value === 'green' ? greenBall : undefined;

    const playSound = () => {
        const audio = new Audio(thudSound);
        audio.play();
    };

    const handleClick = () => {
        playSound();
        onClick();
    }

    return (
        <button className="square" onClick={handleClick}>
            {imgSrc ? <img src={imgSrc} alt={value ?? ''} /> : null}
        </button>
    );
};

export default Square;
