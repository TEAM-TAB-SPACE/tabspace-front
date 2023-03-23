import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import SpinCircle from '../common/SpinCircle';
import variables from '../../styles/variables.module.scss';
import useVideoState from '../../hooks/useVideoState';
import useFetch from '../../hooks/useFetch';
import { API_URL_LECTURE } from '../../pages/api/lecture';

interface LecturePlayerProps {
  lectureroomId: number;
  videoId: string;
}

interface YoutubeEvent {
  data: any;
  target: { getCurrentTime: () => number };
}

const IS_READY = 5;

const VIDEO_STATE = {
  NOT_START: -1,
  STOP: 0,
  PLAY: 1,
  PAUSE: 2,
  BUFFERING: 3,
  SIGNAL: 5,
};

function LecturePlayer({ videoId, lectureroomId }: LecturePlayerProps) {
  const client = useFetch();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const { playTime, startTimer, stopTimer, resetTimer } = useVideoState();

  useEffect(() => {
    setIsLoading(true);
  }, [videoId]);

  useEffect(() => {
    if (lectureroomId) {
      client.post(API_URL_LECTURE.LECTUREROOMS, {
        id: lectureroomId,
        playtime: Math.sign(playTime) === -1 ? 0 : playTime,
        endtime: currentTime,
      });
    }

    return setCurrentTime(0);
  }, [playTime]);

  const onVideoStateChange = (e: YoutubeEvent) => {
    const state = e.data;
    const currentTime = Math.floor(e.target.getCurrentTime());

    if (state === VIDEO_STATE.PLAY) {
      resetTimer();
      setCurrentTime(currentTime);
      startTimer();
    }

    if (state === VIDEO_STATE.PAUSE || state === VIDEO_STATE.STOP) {
      stopTimer();
      setCurrentTime(currentTime);
    }
  };

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
          onStateChange={onVideoStateChange}
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
