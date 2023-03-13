import YouTube from 'react-youtube';

interface LecturePlayerProps {
  videoId: string;
}

function LecturePlayer({ videoId }: LecturePlayerProps) {
  return (
    <>
      <div className="lecture__player">
        <YouTube className="player__iframe" key={videoId} videoId={videoId} />
      </div>
      <style jsx>{`
        .lecture__player {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
        }
      `}</style>
      <style jsx global>{`
        .player__iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          iframe {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default LecturePlayer;
