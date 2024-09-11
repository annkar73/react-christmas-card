import { useState, useCallback, useMemo, useEffect } from 'react';
import '../components/memory/style/MemoryGame.css';
import Board from '../components/memory/MemoryBoard';
import { CardType } from '../components/memory/MemoryCard';

const MemoryGame = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedIndices, setFlippedIndicies] = useState<number[]>([]);


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
    }, [imageFilenames]);

    useEffect(() => {
      resetGame();
    }, [resetGame]);


const handleCardClick = (index: number) => {

  if (cards[index].isFlipped || flippedIndices.length === 2) return;

  const newCards = [...cards];
  newCards[index].isFlipped = true;
  setCards(newCards);

  const newFlippedIndices = [...flippedIndices, index];
  setFlippedIndicies(newFlippedIndices);

  if (newFlippedIndices.length === 2) {
    const [firstIndex, secondIndex] = newFlippedIndices;
    const newCards = [...cards];

    if (newCards[firstIndex].image === newCards[secondIndex].image) {
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
  } else {
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
  }
};


  return (
  <>
    <div className='memory-game'>
      <h1>Memory</h1>
      <Board cards={cards} onCardClick={handleCardClick} />
      <button className="reset-btn" onClick={resetGame}>Spela igen</button>
    </div>
  </>
  );
};

export default MemoryGame;