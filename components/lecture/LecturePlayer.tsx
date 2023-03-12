interface LecturePlayerProps {
  videoId: string;
}

function LecturePlayer({ videoId }: LecturePlayerProps) {
  const src = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <div className="lecture__player">
        <iframe className="player__iframe" src={src} allowFullScreen />
      </div>
      <style jsx>{`
        .lecture__player {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
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
