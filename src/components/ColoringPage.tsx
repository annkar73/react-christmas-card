import React from 'react';

const ColoringPage: React.FC = () => {
  return (
    <div>
      <h2>Målarbilder</h2>
      <a href="/path/to/your/coloring-page1.pdf" download>Hämta Målarbild 1</a>
      <a href="/path/to/your/coloring-page2.pdf" download>Hämta Målarbild 2</a>
      {/* Lägg till fler nedladdningslänkar här */}
    </div>
  );
};

export default ColoringPage;
