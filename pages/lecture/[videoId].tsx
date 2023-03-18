import { useEffect } from 'react';
import { Layout } from 'antd';
import { useSetRecoilState } from 'recoil';
import LectureContent from '../../components/lecture/LectureContent';
import Spinner from '../../components/common/Spin';
import useFetch from '../../hooks/useFetch';
import { allLectureAtom } from '../../store/lecture';

const { Content } = Layout;

const lectureStyle = {
  maxWidth: '1074px',
  margin: '0 auto',
  backgroundColor: 'transparent',
};

function Lecture() {
  const { isLoading, data } = useFetch('/lecturerooms');
  const setAllLecture = useSetRecoilState(allLectureAtom);

  useEffect(() => {
    if (data) {
      setAllLecture(data);
    }
  }, [data]);

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

export default Lecture;
