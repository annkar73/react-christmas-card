import '../styles/RecipeListStyle/RecipeList.css';

const recipes = [
  { id: 1,title: 'Kokostoppar', img:'https://images.arla.com/recordid/D630883A-504E-4ED7-9AEA515098BAAB83/kokostoppar.jpg?format=jpg&width=1269&height=715&mode=crop' , link: 'https://www.arla.se/recept/kokostoppar/', comment: 'En klassiker oavsett årstid, och dessutom naturligt glutenfri' },
  { id: 2, title: 'Glutenfri brownie',img: 'https://images.arla.com/recordid/ECC7137F-A291-48C6-925D28F4E207A7F9/glutenfri-brownie.jpg?format=jpg&width=1269&height=715&mode=crop', link: 'https://www.arla.se/recept/glutenfri-brownie/', comment: 'En härlig, naturligt glutenfri brownie' },
  { id: 3, title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 4, title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 5, title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 6, title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 7, title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 8, title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 9, title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 10,title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 11,title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },

  // Lägg till fler recept här
];

const RecipeList = () => {
  return (
    <>
    <section className='recipe-page'>
    <h2>Julgodisrecept</h2>
      <article className='recipe-container'>
      
      {recipes.map((recipe) => (
            <div className="recipe-card">

        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <span className="recipe-image-container">
          <img src={recipe.img} alt={recipe.title} />
          </span>
          <p> {recipe.comment}</p>

          <button className="recipe-button"><a href={recipe.link} target="_blank">Gå till receptet</a></button>
        </div>
        </div>
      ))}
    
    </article>
    </section>
    </>
  );
};

export default RecipeList;
