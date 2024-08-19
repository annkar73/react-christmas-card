import React from 'react';

const recipes = [
  { title: 'Pepparkakor', ingredients: 'Ingredienser här', instructions: 'Instruktioner här' },
  { title: 'Kola', ingredients: 'Ingredienser här', instructions: 'Instruktioner här' },
  // Lägg till fler recept här
];

const RecipeList: React.FC = () => {
  return (
    <div>
      <h2>Julgodisrecept</h2>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h3>{recipe.title}</h3>
          <p><strong>Ingredienser:</strong> {recipe.ingredients}</p>
          <p><strong>Instruktioner:</strong> {recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
