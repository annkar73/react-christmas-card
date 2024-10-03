import '../styles/ColoringPage.css';

const ColoringPage = () => {

const coloringPages = [
  {
    id: 1,
    fullSize: "./coloringpageimages/christmas-mandala1.png",
    pdfName: "christmas-mandala.pdf",
  },
  {
    id: 2,
    fullSize: "./coloringpageimages/christmas-mandala2.png",
    pdfName: "christmas-mandala2.pdf",
  },
  {
    id: 3,
    fullSize: "./coloringpageimages/christmas-tree1.png",
    pdfName: "christmas-tree1.pdf",
  },
  {
    id: 4,
    fullSize: "./coloringpageimages/christmas-tree2.png",
    pdfName: "christmas-tree2.pdf",
  },
  {
    id: 5,
    fullSize: "./coloringpageimages/christmas-tree3.png",
    pdfName: "christmas-tree3.pdf",
  },
  {
    id: 6,
    fullSize: "./coloringpageimages/santa1.png",
    pdfName: "santa1.pdf",
  },
  {
    id: 7,
    fullSize: "./coloringpageimages/santa2.png",
    pdfName: "santa2.pdf",
  },
  {
    id: 8,
    fullSize: "./coloringpageimages/santa3.png",
    pdfName: "santa3.pdf",
  },
  {
    id: 9,
    fullSize: "./coloringpageimages/snowman1.jpg",
    pdfName: "snowman1.pdf",
  },
  {
    id: 10,
    fullSize: "./coloringpageimages/snowman2.png",
    pdfName: "snowman2.pdf",
  },
  {
    id: 11,
    fullSize: "./coloringpageimages/snowman3.png",
    pdfName: "snowman3.pdf",
  },
  {
    id: 12,
    fullSize: "./coloringpageimages/stained-glass1.png",
    pdfName: "stained-glass1.pdf",
  },
  {
    id: 13,
    fullSize: "./coloringpageimages/stained-glass2.png",
    pdfName: "stained-glass2.pdf",
  },
  {
    id: 14,
    fullSize: "./coloringpageimages/stained-glass3.png",
    pdfName: "stained-glass3.pdf",
  },
  {
    id: 15,
    fullSize: "./coloringpageimages/christmas-mandala3.png",
    pdfName: "christmas-mandala3.pdf",
  },



]

  return (
    <div className="coloring-page">
      <h2>Målarbilder</h2>
      <div className="coloring-grid">
        {coloringPages.map((page) => {
          return (
          <div key={page.id} className="coloring-item">
            <a href={page.fullSize} target="_blank" rel="noopener noreferrer">
              <img src={page.fullSize} alt={`Målarbild ${page.id}`} className="thumbnail" />
            </a>
            <button className='download-button'>
              <a href={page.fullSize} download={`coloring-page${page.id}.png`}>Ladda ner målarbild {page.id}
                
              </a>
            </button>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColoringPage;
