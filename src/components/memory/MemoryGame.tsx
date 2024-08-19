import React, { useEffect, useState } from 'react';
import './style/MemoryGame.css';
import Board from '../memory/MemoryBoard';
import { CardType } from './MemoryCard';

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedIndices, setFlippedIndicies] = useState<number[]>([]);

  useEffect(() => {

    const imageFilenames = [
      '/memoryimages/christmasball.png',
      '/memoryimages/christmastree.png',
      '/memoryimages/doodleball.png',
      '/memoryimages/mistletoe.png',
      '/memoryimages/redbell.png',
      '/memoryimages/santahat.png',
      '/memoryimages/wreath.png',
      '/memoryimages/yellowbell.png'
    ];

    const createCards = (images: string[]): CardType[] => {
      const cards: CardType[] = [];
      images.forEach(image => {
        cards.push({ image, isFlipped: false, isMatched: false});
        cards.push({ image, isFlipped: false, isMatched: false});
      });
      return cards.sort(() => Math.random() -0.5);
    };

    setCards(createCards(imageFilenames));
  }, []);

const handleCardClick = (index: number) => {
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
    </div>
  </>
  );
};

export default MemoryGame;
