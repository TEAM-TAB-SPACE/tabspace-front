import { useEffect, useRef, useState } from 'react';

import YouTube from 'react-youtube';
import SpinCircle from 'components/common/SpinCircle';

import useFetch from 'hooks/useFetch';

import { API_URL_LECTURE } from 'pages/api/lecture';

import variables from 'styles/variables.module.scss';

interface LecturePlayerProps {
  lectureroomId: number;
  videoId: string;
}

interface YoutubeEvent {
  data: unknown;
  target: { getCurrentTime: () => number };
}

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

  const startTime = useRef(0);
  const endTime = useRef(0);

  useEffect(() => {
    setIsLoading(true);
  }, [videoId, lectureroomId]);

  const onVideoStateChange = (e: YoutubeEvent) => {
    const state = Number(e.data);
    const currentTime = Math.floor(e.target.getCurrentTime());

    if (
      [
        VIDEO_STATE.SIGNAL,
        VIDEO_STATE.BUFFERING,
        VIDEO_STATE.NOT_START,
      ].includes(state)
    )
      return;

    if (state === VIDEO_STATE.PLAY) {
      startTime.current = 0;
      endTime.current = 0;
      startTime.current = new Date().getTime();
    }

    if (state === VIDEO_STATE.PAUSE || state === VIDEO_STATE.STOP) {
      endTime.current = new Date().getTime();
    }

    const elapsedTime = endTime.current - startTime.current;

    client.post(API_URL_LECTURE.LECTUREROOMS, {
      id: lectureroomId,
      playtime:
        Math.sign(elapsedTime) === -1
          ? 0
          : Math.floor((elapsedTime / 1000) % 60),
      endtime: currentTime,
    });
  };

  return (
    <>
      <div className="lecture__player">
        {isLoading && <SpinCircle className="player__spin" />}
        <YouTube
          className="player__iframe"
          key={videoId}
          videoId={videoId}
          onStateChange={onVideoStateChange}
          onReady={() => setIsLoading(false)}
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
