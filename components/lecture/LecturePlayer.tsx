import React from 'react';

interface LecturePlayerProps {
  src: string;
}

function LecturePlayer({ src }: LecturePlayerProps) {
  return (
    <>
      <div className="lecture__player">
        <iframe className="player__iframe" src={src} />
      </div>
      <style jsx>{`
        .lecture__player {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          margin: 40px 0px;
        }

        .player__iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default LecturePlayer;
