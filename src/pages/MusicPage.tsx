import "../styles/MusicPage.css";

const MusicPage = () => {
  return (
    <>
    <div className="music-page">
      <h1>Lyssna på julmusik</h1>
      <p>Det här är vad Spotify hävdar är de 100 bästa julklassikerna</p>
      <iframe 
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
