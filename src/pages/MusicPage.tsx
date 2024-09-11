import "../styles/MusicPage.css";

const MusicPage = () => {
  return (
    <>
    <div className="music-page">
      <div className="music-text">
      <h1>Julmusik åt alla!</h1>
      <p>100 julklassiker att lyssna på medan ni väntar på tomten</p>
      </div>
      <iframe 
      className="music-frame"
      style={{ borderRadius: '12px', border: 'none', width: '75%', height: '500px' }} 
      src="https://open.spotify.com/embed/playlist/7n7qn2bGMLQzXDiAmrJtsK?utm_source=generator" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
      </iframe>
    </div>
    </>
  );
};

export default MusicPage;
