import { useState, useCallback, useMemo, useEffect } from 'react';
import '../components/memory/style/MemoryGame.css';
import MemoryBoard from '../components/memory/MemoryBoard';
import { CardType } from '../components/memory/MemoryCard';

const MemoryGame = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedIndices, setFlippedIndicies] = useState<number[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);

  const flipSound = useMemo(() => new Audio('./src/assets/flip-sound.mp3'), []);
  const matchSound = useMemo(() => new Audio('./src/assets/match-sound.mp3'), []);


    const imageFilenames = useMemo(() => [
      '/memoryimages/christmasball.png',
      '/memoryimages/christmastree.png',
      '/memoryimages/doodleball.png',
      '/memoryimages/mistletoe.png',
      '/memoryimages/redbell.png',
      '/memoryimages/santahat.png',
      '/memoryimages/wreath.png',
      '/memoryimages/yellowbell.png'
    ], []);

    const createCards = (images: string[]): CardType[] => {
      const cards: CardType[] = images.flatMap(image => [
        { image, isFlipped: false, isMatched: false },
        { image, isFlipped: false, isMatched: false }
      ]);

      // Fisher-Yates algoritm för att blanda korten
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }

      return cards;
    };

    const resetGame = useCallback(() => {
      setCards(createCards(imageFilenames));
      setFlippedIndicies([]);
      setGameCompleted(false);
    }, [imageFilenames]);

    useEffect(() => {
      resetGame();
    }, [resetGame]);


const handleCardClick = (index: number) => {
  if (cards[index].isFlipped || flippedIndices.length === 2) return;

  flipSound.play();

  const newCards = [...cards];
  newCards[index].isFlipped = true;
  setCards(newCards);

  const newFlippedIndices = [...flippedIndices, index];
  setFlippedIndicies(newFlippedIndices);

  if (newFlippedIndices.length === 2) {
    const [firstIndex, secondIndex] = newFlippedIndices;
    const newCards = [...cards];

    if (newCards[firstIndex].image === newCards[secondIndex].image) {
      setTimeout(() => {
      matchSound.play();
    }, 750);
      newCards[firstIndex].isMatched = true;
      newCards[secondIndex].isMatched = true;
      setCards(newCards);
    } else {
      setTimeout(() => {
        newCards[firstIndex].isFlipped = false;
        newCards[secondIndex].isFlipped = false;
        setCards(newCards);
      }, 1000);
    }

    setFlippedIndicies([]);
  }
};
useEffect(() => {
  if (cards.length > 0 && !gameCompleted) {
    const allMatched = cards.every(card => card.isMatched);

    if (allMatched) {
      const winningSound = new Audio('/src/assets/winning-sound.mp3');
      setTimeout(() => {
        winningSound.play();
      }, 1500);

      setGameCompleted(true);
    }
  }
}, [cards, gameCompleted]);

  return (
  <>
    <div className='memory-game'>
      <h1>Memory</h1>
      <MemoryBoard cards={cards} onCardClick={handleCardClick} />
      <button className={`reset-btn ${gameCompleted ? 'completed' : ''}`} onClick={resetGame}>{gameCompleted ? 'Spela igen' : 'Börja om'}</button>
    </div>
  </>
  );
};

export default MemoryGame;
