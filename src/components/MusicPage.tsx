import React from 'react';

const MusicPage: React.FC = () => {
  return (
    <div>
      <h2>Julmusik</h2>
      <audio controls>
        <source src="/path/to/your/julmusik.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPage;
