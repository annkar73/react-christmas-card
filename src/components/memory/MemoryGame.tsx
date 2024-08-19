import React, { useEffect, useState } from 'react';
import './style/MemoryGame.css';
import Board from '../memory/MemoryBoard';
import { CardType } from './MemoryCard';
import HomeButton from '../HomeButton';

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

const handleGoHome = () => {
  window.location.href = '/'; // Navigate to main page
};

  return (
  <>
    <div className='memory-game'>
      <h1>Memory</h1>
      <Board cards={cards} onCardClick={handleCardClick} />
      <HomeButton onClick={handleGoHome} />
    </div>
  </>
  );
};

export default MemoryGame;
