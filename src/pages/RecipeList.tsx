import '../styles/RecipeListStyle/RecipeList.css';

const recipes = [
  { id: 1,title: 'Kokostoppar', img:'https://images.arla.com/recordid/D630883A-504E-4ED7-9AEA515098BAAB83/kokostoppar.jpg' , link: 'https://www.arla.se/recept/kokostoppar/', comment: 'En klassiker oavsett årstid, och dessutom naturligt glutenfri.' },
  { id: 2, title: 'Glutenfri brownie',img: 'https://images.arla.com/recordid/ECC7137F-A291-48C6-925D28F4E207A7F9/glutenfri-brownie.jpg', link: 'https://www.arla.se/recept/glutenfri-brownie/', comment: 'En härlig, naturligt glutenfri brownie.' },
  { id: 3, title: 'Punchpraliner',img: 'https://static.bonniernews.se/images/de/01/de010f4aa4834afdb118f6d99291ae4d/16x9/500@60.jpg', link: 'https://alltommat.expressen.se/recept/punschpraliner/', comment: 'Punch, arraksarom eller något annat? Det går nog att variera smaksättningen som man vill. Fireballpraliner, någon?' },
  { id: 4, title: 'Mjuk pepparkaka',img: 'https://images.arla.com/recordid/1072E7D0-8D65-4262-882E59C68BF3755B/mjuk-pepparkaka.jpg', link: 'https://www.arla.se/recept/mjuk-pepparkaka/', comment: 'Jag är ledsen, men mjuk pepparkaka är bara en portion. Jag kan inte dela med mig, så du får baka en egen.' },
  { id: 5, title: 'Rocky Road',img: 'https://images.arla.com/recordid/6B640630-5B43-4082-86550AAFD9ADE18A/rocky-road.jpg', link: 'https://www.arla.se/recept/rocky-road/', comment: 'En blandning av knapriga nötter, skumtomtar och cornflakes i en härlig chokladbit. Kan det bli bättre?' },
  { id: 6, title: 'Kardemummadrömmar',img: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_43646/cf_259/kardemummadrommar.jpg', link: 'https://www.ica.se/recept/kardemummadrommar-714259/', comment: 'Spröda drömmar med smak av kardemumma. Tycker man inte om kardemumma så utesluter man det, och vips har man helt vanliga vanlijdrömmar. Eller så gör man båda.' },
  { id: 7, title: 'Kolasnittar',img: 'https://leilasgeneralstore.com/wp-content/uploads/2017/04/kolasnittar.jpg', link: 'https://leilasgeneralstore.com/recipe/kolasnittar-kolakakor/', comment: 'De ska ju vara lite sega, men ändå knapriga. Gott är det iallafall.' },
  { id: 8, title: 'Schackrutor',img: 'https://img.koket.se/standard-mega/schackrutor-med-tacke.jpg.webp', link: 'https://www.koket.se/schackrutor-med-tacke', comment: 'Lagom stor, lagom spröd och bara jättegod. Ett typiskt barndomsminne. Vill man inte svepa in dem i en ram så struntar man i det, mer erkänn att det är snyggt.' },
  { id: 9, title: 'Hallongrottor',img: 'https://www.recepten.se/bilder/recept/373/main/l/hallongrottor.jpg', link: 'https://www.recepten.se/recept/hallongrottor.html', comment: 'En av de godaste småkakorna som finns, ju!' },
  { id: 10,title: 'Saffransbullar',img: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_233915/cf_259/lussebullar_med_kvarg.jpg', link: 'https://www.ica.se/recept/lussebullar-med-kvarg-4404/', comment: 'Lussebullar med kvarg i degen så blir de extra saftiga. Skippa russin om du är kinkig, men kom ihåg att pärlsocker har man bara på kanelbullar, chokladbollar och mandelkubb.' },
  { id: 11,title: 'Kola',img: 'https://images.arla.com/recordid/FC430025-DA12-4ACE-A9E92A0408EEBB4F/kola.jpg', link: 'https://www.arla.se/recept/kola/', comment: 'En enkel och god kola som går snabbt att svänga ihop - och sen måste man vänta på att de stelnar...' },
  { id: 12, title: 'Knäck', img: 'https://images.arla.com/recordid/E3C21264-5D1F-4254-B3260D68CF29A3FD/knack.jpg', link: 'https://www.arla.se/recept/knack/', comment: 'Ingen jul utan knäck'},
  { id: 13, title: "Baconkola", img: 'https://images.arla.com/recordid/F56CDAB2-3F80-4F60-B2755E84B0363989/baconkola.jpg', link: 'https://www.arla.se/recept/baconkola/', comment: 'Hallå! Ursäkta, men bacon, kola och choklad tillsammans?! Ja tack!'},
  { id: 14, title: "Skumtomtepanacotta", img: 'https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_244737/cf_259/skumtomtepannacotta.jpg', link: 'https://www.ica.se/recept/skumtomtepannacotta-722911/', comment: 'Efter tips från en klasskamrat på vad man ska göra när man har onödigt mycket skumtomtar har jag sparat på mig detta - inte provat än, men det ser lite gott ut. Jag tror faktiskt inte att man behöver ha grädde på, men det kanske är dumt att chansa?'}

  // Lägg till fler recept här
];

const RecipeList = () => {
  return (
    <>
    <section className='recipe-page'>
      <div className='recipe-title'>
    <h1>Härliga onyttigheter</h1>
    </div>
      <article className='recipe-container'>
      
      {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>

        <div className='recipe-card-content'>
          <h2 className='recipe-card-title'>{recipe.title}</h2>
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
