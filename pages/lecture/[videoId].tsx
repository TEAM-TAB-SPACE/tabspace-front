import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useSetRecoilState } from 'recoil';

import { Layout } from 'antd';
import LectureContent from 'components/lecture/LectureContent';
import Spinner from 'components/common/Spin';

import useFetch from 'hooks/useFetch';
import useMediaQueryState from 'hooks/useMediaQueryState';

import { allLectureAtom } from 'store/lecture';

import { cookieStringToObject } from 'utils/cookie';

import { API_URL_LECTURE } from 'pages/api/lecture';

const { Content } = Layout;

function Lecture() {
  const { isMobile } = useMediaQueryState();
  const { isLoading, data } = useFetch({ url: API_URL_LECTURE.LECTUREROOMS });
  const setAllLecture = useSetRecoilState(allLectureAtom);

  const lectureStyle = {
    maxWidth: '1300px',
    margin: isMobile ? '0' : '0 auto',
    backgroundColor: 'transparent',
  };

  useEffect(() => {
    if (data) {
      setAllLecture(data);
    }
  }, [data, setAllLecture]);

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

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = cookieStringToObject(context.req?.headers?.cookie || '');

  if (!cookies.access) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
