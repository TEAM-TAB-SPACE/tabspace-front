import { useEffect } from 'react';
import { Layout } from 'antd';
import { useSetRecoilState } from 'recoil';
import LectureContent from '../../components/lecture/LectureContent';
import Spinner from '../../components/common/Spin';
import useFetch from '../../hooks/useFetch';
import { allLectureAtom } from '../../store/lecture';
import { API_URL_LECTURE } from '../api/lecture';
import useMediaQueryState from '../../hooks/useMediaQueryState';

const { Content } = Layout;

function Lecture() {
  const { isMobile } = useMediaQueryState();
  const { isLoading, data } = useFetch({ url: API_URL_LECTURE.LECTUREROOMS });
  const setAllLecture = useSetRecoilState(allLectureAtom);

  const lectureStyle = {
    maxWidth: '1074px',
    margin: isMobile ? '0 16px' : '0 70px',
    backgroundColor: 'transparent',
  };

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
