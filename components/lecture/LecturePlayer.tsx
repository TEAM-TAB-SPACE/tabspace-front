import YouTube from 'react-youtube';
import SpinCircle from '../common/SpinCircle';
import variables from '../../styles/variables.module.scss';
import { useEffect, useState } from 'react';

interface LecturePlayerProps {
  videoId: string;
}

const IS_READY = 5;

function LecturePlayer({ videoId }: LecturePlayerProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [videoId]);

  return (
    <>
      <div className="lecture__player">
        {isLoading && <SpinCircle className="player__spin" />}
        <YouTube
          className="player__iframe"
          key={videoId}
          videoId={videoId}
          onReady={({ target }) => {
            if (target.getPlayerState() === IS_READY) setIsLoading(false);
          }}
        />
      </div>
      <style jsx global>{`
        .lecture__player {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
        }

        .player {
          &__spin,
          &__iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          &__spin {
            z-index: 200;
            background: ${variables.bgColor};
          }

          &__iframe {
            z-index: 0;

            iframe {
              width: 100%;
              height: 100%;
            }
          }
        }
      `}</style>
    </>
  );
}

export default LecturePlayer;
