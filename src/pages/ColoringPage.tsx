import '../styles/ColoringPage.css';
interface ColoringPageItem {
  id: number;
  name: string;
  fullSize: string;
}

const ColoringPage = () => {

const coloringPages: ColoringPageItem[] = [
  {
    id: 1,
    name: "Krans 1",
    fullSize: "./coloringpageimages/christmas-mandala1.png",
  },
  {
    id: 2,
    name: "Krans 2",
    fullSize: "./coloringpageimages/christmas-mandala2.png",
  },
  {
    id: 3,
    name: "Krans 3",

    fullSize: "./coloringpageimages/christmas-mandala3.png",
  },
  {
    id: 4,
    name: "Julgran 1",
    fullSize: "./coloringpageimages/christmas-tree1.png",
  },
  {
    id: 5,
    name: "Julgran 2",
    fullSize: "./coloringpageimages/christmas-tree2.png",
  },
  {
    id: 6,
    name: "Julgran 3",

    fullSize: "./coloringpageimages/christmas-tree3.png",
  },
  {
    id: 7,
    name: "Tomte 1",

    fullSize: "./coloringpageimages/santa1.png",
  },
  {
    id: 8,
    name: "Tomte 2",

    fullSize: "./coloringpageimages/santa2.png",
  },
  {
    id: 9,
    name: "Tomte 3",

    fullSize: "./coloringpageimages/santa3.png",
  },
  {
    id: 10,
    name: "Snögubbe 1",

    fullSize: "./coloringpageimages/snowman1.jpg",
  },
  {
    id: 11,
    name: "Snögubbe 2",

    fullSize: "./coloringpageimages/snowman2.png",
  },
  {
    id: 12,
    name: "Snögubbe 3",

    fullSize: "./coloringpageimages/snowman3.png",
  },

];

const handlePrint = (fullSize: string) => {
  const printWindow = window.open(fullSize, '_blank');
  if (printWindow) {
    printWindow.onload = () => {
      printWindow.print();
    };
  }
};

  return (
    <>
    <div className="coloring-page">
    <div className='heading-container'>
        <h2>Måla!</h2>
        <h4>Här finns lite bilder att spara eller skriva ut och färglägga. 
          <br />
          Mycket nöje!</h4>
      </div>
      <div className="coloring-grid">
        {coloringPages.map((page) => {
          return (
          <div key={page.id} className="coloring-item">
            <a href={page.fullSize} target="_blank" rel="noopener noreferrer">
              <img src={page.fullSize} alt={`Målarbild ${page.id}`} className="thumbnail" />
            </a>
            <div className='button-container'>
            <button className='download-button'>
              <a href={page.fullSize} download={`coloring-page${page.id}.png`}>Ladda ner</a>
            </button>
            <button className='print-button' onClick={() => handlePrint(page.fullSize)}>Skriv ut</button>
          </div>
          </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default ColoringPage;

