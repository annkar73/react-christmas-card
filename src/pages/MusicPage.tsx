import "../styles/MusicPage.css";

const MusicPage = () => {
  return (
    <>
    <div className="music-page">
      <div className="music-text">
      <h1>Weihnachtsmusik für alle!</h1>
      <h3>Provsmakning av julmusik medan ni väntar på tomten</h3>
      <p>Gå till Spotify för att lyssna på hela låtarna
        <br />
        eller välj spellistan från MixCloud nedanför 
        <br />för nästan en och en halv timme musik till pysslet</p>
      </div>
      {/* Spotify i-frame */}
      <iframe
      className="music-frame" 
      style={{ borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/7n7qn2bGMLQzXDiAmrJtsK?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <br />
      {/* MixCloud i-frame */}
      <iframe 
      width="100%" 
      height="60" 
      src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2Fpanospar%2Fthe-best-christmas-compilation%2F" 
      style={{ borderRadius:'12px'}}
       ></iframe>
    </div>
    </>
  );
};

export default MusicPage;
