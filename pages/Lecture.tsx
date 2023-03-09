import { Layout } from 'antd';
import LecturePlaylist from '../components/lecture/LecturePlaylist';
import LecturePlayer from '../components/lecture/LecturePlayer';
import LectureQnA from '../components/lecture/LectureQnA';

const { Content } = Layout;

const lectureBgColor = { backgroundColor: 'transparent' };
const src = 'https://www.youtube.com/embed/zCV-JoKl7x8';

const lectureStyle = {
  maxWidth: '1074px',
  margin: '0 auto',
  ...lectureBgColor,
};

function Lecture() {
  return (
    <>
      <Layout className="lecture" style={lectureStyle}>
        <Content>
          <Layout style={{ ...lectureBgColor }}>
            <Content>
              <LecturePlayer src={src} />
              <Content style={{ padding: '32px 24px' }}>
                <div className="lecture__title">
                  입문자를 위한 반응형 웹 기초 강의
                </div>
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
