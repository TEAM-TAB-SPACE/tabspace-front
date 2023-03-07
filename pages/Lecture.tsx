import { Layout } from 'antd';
import LecturePlayer from '../components/lecture/LecturePlayer';

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
            </Content>
          </Layout>
        </Content>
      </Layout>
    </>
  );
}

export default Lecture;
