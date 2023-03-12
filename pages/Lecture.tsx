import { useRecoilValue } from 'recoil';
import { Layout } from 'antd';
import LecturePlaylist from '../components/lecture/LecturePlaylist';
import LecturePlayer from '../components/lecture/LecturePlayer';
import LectureQnA from '../components/lecture/LectureQnA';
import { currentLectureSelector } from '../store/lecture';

const { Content } = Layout;

const lectureBgColor = { backgroundColor: 'transparent' };

const lectureStyle = {
  maxWidth: '1074px',
  margin: '0 auto',
  ...lectureBgColor,
};

function Lecture() {
  const selectedLecture = useRecoilValue(currentLectureSelector);
  const { title, videoId } = selectedLecture?.lecture;

  return (
    <>
      <Layout className="lecture" style={lectureStyle}>
        <Content>
          <Layout style={{ ...lectureBgColor }}>
            <Content>
              <LecturePlayer videoId={videoId} />
              <Content style={{ padding: '32px 24px' }}>
                <div className="lecture__title">{title}</div>
                <LectureQnA />
              </Content>
            </Content>
            <LecturePlaylist />
          </Layout>
        </Content>
      </Layout>
      <style jsx>{`
        .lecture__title {
          font-size: 20px;
          line-height: 140%;
          padding-bottom: 20px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}

export default Lecture;
