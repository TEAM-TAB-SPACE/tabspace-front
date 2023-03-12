import { useRecoilValue } from 'recoil';
import { currentLectureSelector } from '../../store/lecture';

function LecturePlayer() {
  const selectedLecture = useRecoilValue(currentLectureSelector);
  const videoId = selectedLecture?.lecture.videoId;
  const src = `https://www.youtube.com/embed/${videoId}`;

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
