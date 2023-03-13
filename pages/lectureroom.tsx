import { Layout } from 'antd';
import usePlaylist from '../hooks/usePlaylist';
import LectureContent from '../components/lecture/LectureContent';
import Spinner from '../components/common/Spin';

const { Content } = Layout;

const lectureStyle = {
  maxWidth: '1074px',
  margin: '0 auto',
  backgroundColor: 'transparent',
};

function Lectureroom() {
  const { isLoading } = usePlaylist();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Layout className="lecture" style={lectureStyle}>
        <Content>
          <LectureContent />
        </Content>
      </Layout>
    </>
  );
}

export default Lectureroom;
