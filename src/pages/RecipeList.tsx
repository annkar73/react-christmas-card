import '../styles/RecipeListStyle/RecipeList.css';

const recipes = [
  { id: 1,title: 'Kokostoppar', img:'https://images.arla.com/recordid/D630883A-504E-4ED7-9AEA515098BAAB83/kokostoppar.jpg' , link: 'https://www.arla.se/recept/kokostoppar/', comment: 'En klassiker oavsett årstid, och dessutom naturligt glutenfri' },
  { id: 2, title: 'Glutenfri brownie',img: 'https://images.arla.com/recordid/ECC7137F-A291-48C6-925D28F4E207A7F9/glutenfri-brownie.jpg', link: 'https://www.arla.se/recept/glutenfri-brownie/', comment: 'En härlig, naturligt glutenfri brownie' },
  { id: 3, title: 'Punchpraliner',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 4, title: 'Mjuk pepparkaka',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 5, title: 'Rocky Road',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 6, title: 'Drömmar',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 7, title: 'Kolakakor',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 8, title: 'Schackrutor',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 9, title: 'Hallongrottor',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 10,title: 'Saffransbullar',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 11,title: 'Kola',img: '', link: 'Ingredienser här', comment: 'Instruktioner här' },
  { id: 12, title: 'Knäck', img: 'https://images.arla.com/recordid/E3C21264-5D1F-4254-B3260D68CF29A3FD/knack.jpg', link: 'https://www.arla.se/recept/knack/', comment: 'Ingen jul utan knäck'}

  // Lägg till fler recept här
];

const RecipeList = () => {
  return (
    <>
    <section className='recipe-page'>
      <div className='recipe-title'>
    <h2>Juliga recept</h2>
    </div>
      <article className='recipe-container'>
      
      {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>

        <div className='recipe-card-content'>
          <h3 className='recipe-card-title'>{recipe.title}</h3>
          <div className="recipe-image-container">
          <img src={recipe.img} alt={recipe.title} />
          <p> {recipe.comment}</p>
          </div>
        <div className='recipe-button-container'>
          <a href={recipe.link} className="recipe-button" target="_blank">Gå till receptet</a>
          </div>
        </div>
        </div>
      ))}
    
    </article>
    </section>
    </>
  );
};

export default RecipeList;
